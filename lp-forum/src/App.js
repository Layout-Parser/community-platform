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
    this.state = {
      issues: [], // all issues
      page: "main", // main | comments
      issueNumber: -1, // selected issue #
      issue: null, // selected issue
      category: ["model", "pipeline"], // models, pipelines
      tags: [], // selected tags
      seacrhText: "",
    };
    var ua = navigator.userAgent;
    this.isMobile = /Android|iPhone/i.test(ua);
    this.backToMain = this.backToMain.bind(this);
    this.searchRef = React.createRef();
  }

  // call in Model component, back to main listing page
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

  // draw each row of cards of models / pipelines
  drawRows = (issues) => {
    if (issues.length === 0) return null;
    let cols = [];
    issues.forEach((issue) => {
      cols.push(
        <Col span={this.isMobile ? 24 : 8} className="center-col">
          <div
            className="model-card"
            id={issue.number}
            onClick={(event) => {
              let trackEvent = event.target;
              let issue;
              if (!event.target.id) {
                while (!trackEvent.id) {
                  trackEvent = trackEvent.parentElement;
                }
              }
              issues.forEach((aIssue) => {
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

  // draw all cards of models / pipelines
  drawModels = () => {
    const { issues, category, tags, seacrhText } = this.state;
    let taggedIssues = [];
    issues.forEach((issue) => {
      const labels = issue.labels.map((label) => label.name);

      const selectedCate = category.some((tag) => labels.includes(tag));
      const selectedTag = tags.every((tag) => labels.includes(tag));
      if (selectedCate && selectedTag) {
        taggedIssues.push(issue);
      }
    });
    if (seacrhText !== "") {
      taggedIssues = taggedIssues.filter((issue) => {
        return issue.title.toLowerCase().includes(seacrhText) || issue.body.toLowerCase().includes(seacrhText)
      })
    }
    if (!taggedIssues.length) {
      return (
        <Row>
          <span className="err-msg">
            No results found! Please try search again.
          </span>
        </Row>
      );
    }
    let rows = [];
    let i,
      j,
      groupedIssues,
      chunk = 3;
    const openingIssues = taggedIssues.filter(
      (issue) => issue.state === "open"
    );
    for (i = 0, j = openingIssues.length; i < j; i += chunk) {
      groupedIssues = openingIssues.slice(i, i + chunk);
      rows.push(<Row>{this.drawRows(groupedIssues)}</Row>);
    }
    return rows;
  };

  // draw tags in left side bar
  tag = (tag) => {
    return (
      <button
        className={
          this.state.tags.includes(tag) || this.state.category.includes(tag)
            ? "selected-tag"
            : "unselected-tag"
        }
        onClick={() => {
          this.flipTag(tag);
        }}
      >
        {tag}
      </button>
    );
  };

  // select / unselect a tag in left side bar
  flipTag = (tag) => {
    if (tag === "model" || tag === "pipeline") {
      let selectedCategory = [...this.state.category];
      if (selectedCategory.includes(tag)) {
        this.setState({
          category: this.state.category.filter(function (selectedCategory) {
            return selectedCategory !== tag;
          }),
        });
      } else {
        selectedCategory.push(tag);
        this.setState({ category: selectedCategory });
      }
    } else {
      let selectedtags = [...this.state.tags];
      if (selectedtags.includes(tag)) {
        this.setState({
          tags: this.state.tags.filter(function (selectedTag) {
            return selectedTag !== tag;
          }),
        });
      } else {
        selectedtags.push(tag);
        this.setState({ tags: selectedtags });
      }
    }
  };

  drawTags = () => {
    const { issues } = this.state;
    let tags = new Set();
    let tagElements = [];
    issues.forEach((issue) => {
      const labels = issue.labels;
      // only need tags for model / pipeline issues
      if (labels.includes("model") || labels.includes("pipeline")) {
        issue.labels.forEach((label) => {
          tags.add(label.name);
        });
      }
    });
    // looking for all tags except model and pipeline which are included in category
    tags.delete("model");
    tags.delete("pipeline");
    tags.forEach((tag) => {
      tagElements.push(this.tag(tag));
    });
    return tagElements;
  };

  render() {
    const { page, issue } = this.state;
    return (
      <div>
        <Header />
        {page === "main" ? (
          <Row>
            {this.isMobile ? null : (
              <Col span={6}>
                <aside className="menu menu-padding">
                  <p className="menu-label">Categories</p>
                  <Row>
                    {this.tag("model")}
                    {this.tag("pipeline")}
                  </Row>
                  <p className="menu-label">Tags</p>
                  <Row>{this.drawTags()}</Row>
                </aside>
              </Col>
            )}
            <Col span={this.isMobile ? 24 : 18}>
              <div className="site-card-wrapper">
                <Row style={{ marginBottom: "2vw" }}>
                  <input
                    ref={this.searchRef}
                    className="search-bar"
                    placeholder="Search Title / Description"
                  />
                  <button
                    className="search-btn"
                    onClick={() => {
                      this.setState({
                        seacrhText: this.searchRef.current.value.toLowerCase(),
                      });
                    }}
                  >
                    search
                  </button>
                </Row>
                <span className="title">Models / Pipelines</span>
                {this.drawModels()}
              </div>
            </Col>
          </Row>
        ) : (
          <Model
            issue={issue}
            back={this.backToMain}
            isMobile={this.isMobile}
          />
        )}
      </div>
    );
  }
}
