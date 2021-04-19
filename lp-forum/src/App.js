import "./styles/App.scss";
import Model from "./Model";

import Header from "./components/header";
import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import { Row, Col } from "antd";
import "antd/dist/antd.css";

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();

export default class App extends Component {
  constructor(props) {
    super(props);
    var ua = navigator.userAgent;
    this.isMobile = /Android|iPhone/i.test(ua);
    this.isMobile = !this.isMobile;
    this.state = {
      issues: [],
      page: "main",
      issueNumber: -1,
      issue: null,
    };
    this.backToMain = this.backToMain.bind(this);
  }

  backToMain() {
    this.setState({
      page: "main",
      issueNumber: -1,
      issue: null,
    });
  }

  componentDidMount() {
    octokit
      .request("GET /repos/WeiningLi/card-forum/issues")
      .then((response) => this.setState({ issues: response.data }));
  }

  drawRows = (issues) => {
    if (issues.length === 0) return null;
    var cols = [];
    issues.forEach((issue) => {
      cols.push(
        <Col span={this.isMobile ? 24 : 8} className="center-col">
          <div
            className="model-card"
            id={issue.number}
            onClick={(event) => {
              var trackEvent = event.target;
              var issue;
              if (!event.target.id) {
                while (!trackEvent.id) {
                  trackEvent = trackEvent.parentElement;
                }
              }
              issues.forEach((aIssue) => {
                console.log(trackEvent.id);
                if (aIssue.number.toString() === trackEvent.id) {
                  issue = aIssue;
                }
              });
              this.setState({
                page: "comments",
                issueNumber: trackEvent.id,
                issue: issue,
              });
            }}
          >
            <span id={issue.number} className="card-title">
              {issue.title}
            </span>
            <ReactMarkdown
              onClick={(e) => {
                e.preventDefault();
              }}
              id={issue.number}
              className="card-body"
            >
              {issue.body}
            </ReactMarkdown>
            <span id={issue.number} className="card-author">
              {issue.user.login}
            </span>
          </div>
        </Col>
      );
    });
    return cols;
  };

  drawModels = () => {
    const { issues } = this.state;
    var rows = [];
    var i,
      j,
      groupedIssues,
      chunk = 3;
    const openingIssues = issues.filter((issue) => issue.state === "open");
    for (i = 0, j = openingIssues.length; i < j; i += chunk) {
      groupedIssues = openingIssues.slice(i, i + chunk);
      rows.push(<Row>{this.drawRows(groupedIssues)}</Row>);
    }
    // console.log(openingIssues);
    return rows;
  };

  sideBarIssues = (category) => {
    const { issues } = this.state;
    var models = [];
    const openingIssues = issues.filter((issue) => issue.state === "open");
    openingIssues.forEach((issue) => {
      const labels = issue.labels.map((issue) => issue.name);
      if (labels.includes(category)) {
        models.push(
          <li>
            <a
              id={issue.number}
              onClick={(event) => {
                var issue;
                issues.forEach((aIssue) => {
                  if (aIssue.number.toString() === event.target.id) {
                    issue = aIssue;
                  }
                });
                this.setState({
                  page: "comments",
                  issueNumber: event.target.id,
                  issue: issue,
                });
              }}
            >
              {issue.title}
            </a>
          </li>
        );
      }
    });
    return models;
  };

  render() {
    const { page, issue } = this.state;
    console.log("issues", issue);
    return (
      <div>
        <Header />
        {page === "main" ? (
          <Row>
            {this.isMobile ? null : (
              <Col span={4}>
                <aside className="menu menu-padding">
                  <p className="menu-label">Models</p>
                  <ul className="menu-list">{this.sideBarIssues("model")}</ul>
                  <p className="menu-label">Pipelines</p>
                  <ul className="menu-list">
                    {this.sideBarIssues("pipeline")}
                  </ul>
                </aside>
              </Col>
            )}
            <Col span={this.isMobile ? 24 : 20}>
              <div className="site-card-wrapper">
                <span className="title">Models / Pipelines</span>
                {this.drawModels()}
              </div>
            </Col>
          </Row>
        ) : (
          <Model issue={issue} back={this.backToMain} />
        )}
      </div>
    );
  }
}
