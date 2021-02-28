import "./styles/Model.scss";
import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";
import { Divider, Comment, Avatar } from "antd";

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.commentBox = React.createRef();
    this.id = window.location.href.toString().split("=").pop();
    this.state = {
      issue: [],
    };
    console.log(this.id);
  }

  async componentDidMount() {
    let script = document.createElement("script");
    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("repo", "WeiningLi/card-forum");
    script.setAttribute("issue-number", this.id);
    script.setAttribute("theme", "github-light");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", true);
    this.commentBox.current.appendChild(script);
    octokit
      .request("GET /repos/WeiningLi/card-forum/issues/" + this.id)
      .then((response) => {
        this.setState({ issue: response.data });
      });
  }

  render() {
    const { issue } = this.state;
    console.log(issue)

    return (
      <p className="model-container">
        <span className="issue-title">{issue.title}</span>
        <Divider />
        <div class="issue-body">
          <div className="markdown-body tip tip-left">
            <Comment
              author={
                <header className="comment-header">
                <span className="issue-author">
                  {issue.user ? issue.user.login : null}
                </span>
                </header>
              }
              avatar={
                <Avatar
                  shape="square"
                  size="large"
                  src={issue.user ? issue.user.avatar_url : null}
                  alt={issue.user ? issue.user.login : null}
                />
              }
              content={
                <ReactMarkdown>{issue.body}</ReactMarkdown>
              }
            />
          </div>
        </div>
        <Divider />
        <div ref={this.commentBox} className="comment-box"></div>
      </p>
    );
  }
}
