(this["webpackJsonplp-forum"]=this["webpackJsonplp-forum"]||[]).push([[0],{123:function(e,t,s){},124:function(e,t,s){},203:function(e,t,s){},213:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),r=s(26),i=s.n(r),c=s(111),l=s(8),o=s(15),u=s(45),b=s(19),d=s(17),j=s(18),h=(s(123),s(16)),m=s.n(h),p=s(32),O=(s(124),s(60)),f=s.n(O),x=(s(201),s(217)),v=s(215),g=s(216),N=s(218),k=s(221),y=s(3),w=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).commentBox=n.a.createRef(),a.id=a.props.issue.number.toString(),a.state={issue:a.props.issue},a}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=document.createElement("script")).setAttribute("src","https://utteranc.es/client.js"),t.setAttribute("repo","WeiningLi/card-forum"),t.setAttribute("issue-number",this.id),t.setAttribute("theme","github-light"),t.setAttribute("crossorigin","anonymous"),t.setAttribute("async",!0),this.commentBox.current.appendChild(t);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.issue;return console.log(e),Object(y.jsxs)("p",{className:"model-container",children:[Object(y.jsx)("div",{children:Object(y.jsx)(x.a,{className:"return-btn",type:"text",icon:Object(y.jsx)(k.a,{}),onClick:this.props.back,children:"Return to List"})}),Object(y.jsx)("span",{className:"issue-title",children:e.title}),Object(y.jsx)(v.a,{}),Object(y.jsx)("div",{class:"issue-body",children:Object(y.jsx)("div",{className:"markdown-body tip tip-left",children:Object(y.jsx)(g.a,{author:Object(y.jsx)("header",{className:"comment-header",children:Object(y.jsx)("span",{className:"issue-author",children:e.user?e.user.login:null})}),avatar:Object(y.jsx)(N.a,{shape:"square",size:"large",src:e.user?e.user.avatar_url:null,alt:e.user?e.user.login:null}),content:Object(y.jsx)(f.a,{children:e.body})})})}),Object(y.jsx)(v.a,{}),Object(y.jsx)("div",{ref:this.commentBox,className:"comment-box"})]})}}]),s}(a.Component),M=(s(203),s(204),s.p+"static/media/lp-badge-white.87e3ef5c.svg"),D=s(222);var A=function(){return Object(y.jsx)("div",{className:"hero-head",children:Object(y.jsx)("nav",{className:"navbar lp-navbar",role:"navigation",children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsxs)("div",{className:"navbar-brand",children:[Object(y.jsx)("a",{className:"navbar-item",href:"https://layout-parser.github.io/",children:Object(y.jsx)("img",{src:M,alt:"Logo",className:"lp-badge"})}),Object(y.jsxs)("div",{className:"navbar-burger","data-target":"navbar-main",onClick:function(){document.querySelector(".navbar-menu").classList.toggle("is-active")},children:[Object(y.jsx)("span",{}),Object(y.jsx)("span",{}),Object(y.jsx)("span",{})]})]}),Object(y.jsx)("div",{className:"navbar-menu",id:"navbar-main",children:Object(y.jsxs)("div",{className:"navbar-end",children:[Object(y.jsx)("a",{href:"https://layout-parser.github.io/tutorials.html",onMouseDown:function(e){e.preventDefault()},className:"navbar-item",children:"Tutorials"}),Object(y.jsx)("a",{href:"https://layout-parser.readthedocs.io/en/latest/",rel:"noreferrer",target:"_blank",onMouseDown:function(e){e.preventDefault()},className:"navbar-item",children:"Docs"}),Object(y.jsx)("a",{href:"https://join.slack.com/t/layout-parser/shared_invite/zt-ohjd14k1-OrJ2HltwVRGrxhLeHMfW_w",onMouseDown:function(e){e.preventDefault()},className:"navbar-item",children:"Discussion"}),Object(y.jsx)("div",{className:"navbar-item",children:Object(y.jsx)("a",{href:"https://github.com/Layout-Parser/layout-parser",rel:"noreferrer",target:"_blank",className:"icon bg-transparent button is-danger",children:Object(y.jsx)(D.a,{})})})]})})]})})})},C=s(219),E=s(220),S=(s(205),new(0,s(212).Octokit)),B=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var a;Object(o.a)(this,s),(a=t.call(this,e)).drawRows=function(e){if(0===e.length)return null;var t=[];return e.forEach((function(s){t.push(Object(y.jsx)(C.a,{span:a.isMobile?24:8,className:"center-col",children:Object(y.jsxs)("div",{className:"model-card",id:s.number,onClick:function(t){var s,n=t.target;if(!t.target.id)for(;!n.id;)n=n.parentElement;e.forEach((function(e){console.log(n.id),e.number.toString()===n.id&&(s=e)})),a.setState({page:"comments",issueNumber:n.id,issue:s})},children:[Object(y.jsx)("span",{id:s.number,className:"card-title",children:s.title}),Object(y.jsx)(f.a,{onClick:function(e){e.preventDefault()},id:s.number,className:"card-body",children:s.body}),Object(y.jsx)("span",{id:s.number,className:"card-author",children:s.user.login})]})}))})),t},a.drawModels=function(){var e,t,s,n=[],r=a.state.issues.filter((function(e){return"open"===e.state}));for(e=0,t=r.length;e<t;e+=3)s=r.slice(e,e+3),n.push(Object(y.jsx)(E.a,{children:a.drawRows(s)}));return n},a.sideBarIssues=function(e){var t=a.state.issues,s=[];return t.filter((function(e){return"open"===e.state})).forEach((function(n){n.labels.map((function(e){return e.name})).includes(e)&&s.push(Object(y.jsx)("li",{children:Object(y.jsx)("a",{id:n.number,onClick:function(e){var s;t.forEach((function(t){t.number.toString()===e.target.id&&(s=t)})),a.setState({page:"comments",issueNumber:e.target.id,issue:s})},children:n.title})}))})),s};var n=navigator.userAgent;return a.isMobile=/Android|iPhone/i.test(n),a.state={issues:[],page:"main",issueNumber:-1,issue:null},a.backToMain=a.backToMain.bind(Object(b.a)(a)),a}return Object(u.a)(s,[{key:"backToMain",value:function(){this.setState({page:"main",issueNumber:-1,issue:null})}},{key:"componentDidMount",value:function(){var e=this;S.request("GET /repos/WeiningLi/card-forum/issues").then((function(t){return e.setState({issues:t.data})}))}},{key:"render",value:function(){var e=this.state,t=e.page,s=e.issue;return console.log("issues",s),Object(y.jsxs)("div",{children:[Object(y.jsx)(A,{}),"main"===t?Object(y.jsxs)(E.a,{children:[this.isMobile?null:Object(y.jsx)(C.a,{span:4,children:Object(y.jsxs)("aside",{className:"menu menu-padding",children:[Object(y.jsx)("p",{className:"menu-label",children:"Models"}),Object(y.jsx)("ul",{className:"menu-list",children:this.sideBarIssues("model")}),Object(y.jsx)("p",{className:"menu-label",children:"Pipelines"}),Object(y.jsx)("ul",{className:"menu-list",children:this.sideBarIssues("pipeline")})]})}),Object(y.jsx)(C.a,{span:this.isMobile?24:20,children:Object(y.jsxs)("div",{className:"site-card-wrapper",children:[Object(y.jsx)("span",{className:"title",children:"Models / Pipelines"}),this.drawModels()]})})]}):Object(y.jsx)(w,{issue:s,back:this.backToMain})]})}}]),s}(a.Component),L=Object(y.jsx)(c.a,{children:Object(y.jsx)("div",{children:Object(y.jsx)(l.a,{exact:!0,path:"/community-platform",component:B})})});i.a.render(L,document.getElementById("root"))}},[[213,1,2]]]);
//# sourceMappingURL=main.c888b524.chunk.js.map