import "./styles/App.scss";
import Model from "./Model";

import Header from "./components/header";
import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import { Row, Col, Select } from "antd";
import "antd/dist/antd.css";

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();

const { Option } = Select;

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
      modelCount: 0,
      smallScreen: window.innerWidth < 880 ? true : false,
      sortby: "popular",
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
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    const vw = window.innerWidth;
    const { smallScreen } = this.state;
    if (vw < 880 && !smallScreen) {
      this.setState({smallScreen: true});
    } 
    if (vw > 880 && smallScreen) {
      this.setState({smallScreen: false});
    }
  }

  // draw each row of cards of models / pipelines
  drawRows = (issues) => {
    if (issues.length === 0) return null;
    let cols = [];
    issues.forEach((issue) => {
      cols.push(
        <Col span={this.isMobile || this.state.smallScreen ? 24 : 12} className="center-col">
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

  // sort models / pipelines
  sortIssues = (issues) => {
    const { sortby } = this.state;
    if (sortby === "alpha") {
      issues.sort(function(a, b) {
        var keyA = a.title,
          keyB = b.title;
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
    }
    else if (sortby === "date") {
      issues.sort(function(a, b) {
        var keyA = new Date(a.updated_at),
          keyB = new Date(b.updated_at);
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
      });
    }
    else { // sort by comment number (i.e. popularity)
      issues.sort(function(a, b) {
        var keyA = a.comments,
          keyB = b.comments;
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
      });
    }
    console.log(issues)
  }

  // draw all cards of models / pipelines
  drawModels = () => {
    const { issues, category, tags, seacrhText, modelCount } = this.state;
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
        return (
          issue.title.toLowerCase().includes(seacrhText) ||
          issue.body.toLowerCase().includes(seacrhText)
        );
      });
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
    this.sortIssues(taggedIssues);
    // console.log(taggedIssues)

    if (modelCount !== taggedIssues.length) {
      this.setState({ modelCount: taggedIssues.length });
    }
    let rows = [];
    let i,
      j,
      groupedIssues,
      chunk = 2;
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
      const labels = issue.labels.map((label) => label.name);
      // only need tags for model / pipeline issues
      if (labels.includes("model") || labels.includes("pipeline")) {
        labels.forEach((label) => {
          tags.add(label);
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
    const { page, issue, modelCount, smallScreen } = this.state;
    return (
      <div>
        <Header />
        {page === "main" ? (
          <Row>
            {this.isMobile || smallScreen ? null : (
              <Col span={8} className="menu-shadow">
                <aside className="menu inner-left-space inner-top-space">
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
            <Col span={this.isMobile || smallScreen? 24 : 16}>
              <div className="site-card-wrapper layout-right-space inner-top-space">
                <Row style={{ marginBottom: "10px" }}>
                  <span className="title">
                    {"Models/Pipelines: " + modelCount.toString()}
                  </span>
                  <input
                    ref={this.searchRef}
                    className="search-bar"
                    placeholder="Search"
                    onChange={() => {
                      this.setState({
                        seacrhText: this.searchRef.current.value.toLowerCase(),
                      });
                    }}
                  />
                  {this.isMobile || smallScreen ? null : (
                      <span
                        className="sort-text"
                        style={{
                          display: "flex",
                          marginLeft: "3vw",
                          color: "gray",
                          alignItems: "center",
                        }}
                      >
                        {"Sort by:"}
                        <Select
                        defaultValue="popular"
                        style={{ marginLeft:"10px", outline: 'none', width: '120px' }}
                        onChange={(val) => {
                          this.setState({
                            sortby: val,
                          });
                        }}
                      >
                        <Option value="popular">Popularity</Option>
                        <Option value="alpha">Alphabetical</Option>
                        <Option value="date">Updated at</Option>
                      </Select>
                      </span>
                  )}
                </Row>
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
