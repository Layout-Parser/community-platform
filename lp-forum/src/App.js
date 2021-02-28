import "./styles/App.scss";
import Header from "./components/header";
import React, { Component } from "react";
import ReactMarkdown from 'react-markdown'

import { Row, Col } from "antd";
import "antd/dist/antd.css";

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
    };
  }

  componentDidMount() {
    octokit
      .request("GET /repos/WeiningLi/card-forum/issues")
      .then((response) => this.setState({ issues: response.data }));
  }

  drawRows = (issues) => {
    if (issues.length === 0) return null;
    var cols = [];
    issues.forEach( issue => {
      cols.push(
        <Col span={8} className="center-col">
          <div
            className="model-card"
            id={issue.number}
            onClick={(event) => {
              if (!event.target.id) {
                var trackEvent = event.target;
                while (!trackEvent.id) {
                  trackEvent = trackEvent.parentElement;
                }
                window.location.href="./model?id=" + trackEvent.id;
              }
              else {
                window.location.href="./model?id=" + event.target.id;
              }
            }}
          >
            <span id={issue.number} className="card-title">{issue.title}</span>
            <ReactMarkdown onClick={(e) => {
              e.preventDefault()
            }} id={issue.number} className="card-body">{issue.body}</ReactMarkdown>
            <span id={issue.number} className="card-author">{issue.user.login}</span>
          </div>
        </Col>
      );
    });
    return cols;
  }

  drawModels = () => {
    const { issues } = this.state;
    var rows = [];
    var i, j, groupedIssues, chunk = 3;
    const openingIssues = issues.filter(issue => issue.state === "open");
    for (i = 0, j = openingIssues.length; i < j; i += chunk) {
      groupedIssues = openingIssues.slice(i, i + chunk);
      rows.push(
        <Row>
          {this.drawRows(groupedIssues)}
        </Row>
      );
    }
    // console.log(openingIssues);
    return rows;
  }

  sideBarIssues = (category) => {
    const { issues } = this.state;
    var models = [];
    const openingIssues = issues.filter(issue => issue.state === "open");
    openingIssues.forEach(issue => {
      const labels = issue.labels.map(issue => issue.name)
      if (labels.includes(category)) {
        models.push(
          <li>
            <a href={"./model?id=" + issue.number} >{issue.title}</a>
          </li>
        );
      }
    });
    return models;
  }

  render() {
    return (
      <div>
        <Header />

        <Row>
          <Col span={4}>
            <aside className="menu menu-padding">
              <p className="menu-label">Models</p>
              <ul className="menu-list">
                {this.sideBarIssues("model")}
              </ul>
              <p className="menu-label">Pipelines</p>
              <ul className="menu-list">
              {this.sideBarIssues("pipeline")}
              </ul>
            </aside>
          </Col>
          <Col span={20}>
            <div className="site-card-wrapper">
              <span className="title">Models / Pipelines</span>
              {this.drawModels()}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
