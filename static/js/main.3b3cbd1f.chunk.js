(this["webpackJsonplp-forum"]=this["webpackJsonplp-forum"]||[]).push([[0],{119:function(e,t,s){},120:function(e,t,s){},205:function(e,t,s){},208:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),r=s(20),c=s.n(r),i=s(108),l=s(8),o=s(11),u=s(42),d=s(13),j=s(14),b=(s(119),s(120),s(121),s.p+"static/media/lp-badge-white.87e3ef5c.svg"),h=s(214),m=s(2);var p=function(){return Object(m.jsx)("div",{className:"hero-head",children:Object(m.jsx)("nav",{className:"navbar lp-navbar",role:"navigation",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"navbar-brand",children:[Object(m.jsx)("a",{className:"navbar-item",href:"/",children:Object(m.jsx)("img",{src:b,alt:"Logo",className:"lp-badge"})}),Object(m.jsxs)("div",{className:"navbar-burger","data-target":"navbar-main",onClick:function(){document.querySelector(".navbar-menu").classList.toggle("is-active")},children:[Object(m.jsx)("span",{}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{})]})]}),Object(m.jsx)("div",{className:"navbar-menu",id:"navbar-main",children:Object(m.jsxs)("div",{className:"navbar-end",children:[Object(m.jsx)("a",{href:"/",className:"navbar-item",children:"Tutorials"}),Object(m.jsx)("a",{href:"https://layout-parser.readthedocs.io/en/latest/",rel:"noreferrer",target:"_blank",className:"navbar-item",children:"Docs"}),Object(m.jsx)("a",{href:"/",className:"navbar-item",children:"Discussion"}),Object(m.jsx)("div",{className:"navbar-item",children:Object(m.jsx)("a",{href:"https://github.com/Layout-Parser/layout-parser",rel:"noreferrer",target:"_blank",className:"icon bg-transparent button is-danger",children:Object(m.jsx)(h.a,{})})})]})})]})})})},O=s(56),x=s.n(O),f=s(215),v=s(216),g=(s(199),new(0,s(94).Octokit)),N=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).drawRows=function(e){if(0===e.length)return null;var t=[];return e.forEach((function(e){t.push(Object(m.jsx)(f.a,{span:8,className:"center-col",children:Object(m.jsxs)("div",{className:"model-card",id:e.number,onClick:function(e){if(e.target.id)window.location.href="./model?id="+e.target.id;else{for(var t=e.target;!t.id;)t=t.parentElement;window.location.href="./model?id="+t.id}},children:[Object(m.jsx)("span",{id:e.number,className:"card-title",children:e.title}),Object(m.jsx)(x.a,{onClick:function(e){e.preventDefault()},id:e.number,className:"card-body",children:e.body}),Object(m.jsx)("span",{id:e.number,className:"card-author",children:e.user.login})]})}))})),t},a.drawModels=function(){var e,t,s,n=[],r=a.state.issues.filter((function(e){return"open"===e.state}));for(e=0,t=r.length;e<t;e+=3)s=r.slice(e,e+3),n.push(Object(m.jsx)(v.a,{children:a.drawRows(s)}));return n},a.sideBarIssues=function(e){var t=a.state.issues,s=[];return t.filter((function(e){return"open"===e.state})).forEach((function(t){t.labels.map((function(e){return e.name})).includes(e)&&s.push(Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"./model?id="+t.number,children:t.title})}))})),s},a.state={issues:[]},a}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;g.request("GET /repos/WeiningLi/card-forum/issues").then((function(t){return e.setState({issues:t.data})}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{}),Object(m.jsxs)(v.a,{children:[Object(m.jsx)(f.a,{span:4,children:Object(m.jsxs)("aside",{className:"menu menu-padding",children:[Object(m.jsx)("p",{className:"menu-label",children:"Models"}),Object(m.jsx)("ul",{className:"menu-list",children:this.sideBarIssues("model")}),Object(m.jsx)("p",{className:"menu-label",children:"Pipelines"}),Object(m.jsx)("ul",{className:"menu-list",children:this.sideBarIssues("pipeline")})]})}),Object(m.jsx)(f.a,{span:20,children:Object(m.jsxs)("div",{className:"site-card-wrapper",children:[Object(m.jsx)("span",{className:"title",children:"Models / Pipelines"}),this.drawModels()]})})]})]})}}]),s}(a.Component),w=s(12),y=s.n(w),k=s(30),B=(s(205),s(206),s(211)),E=s(212),A=s(213),C=new(0,s(94).Octokit),L=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).commentBox=n.a.createRef(),a.id=window.location.href.toString().split("=").pop(),a.state={issue:[]},console.log(a.id),a}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=Object(k.a)(y.a.mark((function e(){var t,s=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=document.createElement("script")).setAttribute("src","https://utteranc.es/client.js"),t.setAttribute("repo","WeiningLi/card-forum"),t.setAttribute("issue-number",this.id),t.setAttribute("theme","github-light"),t.setAttribute("crossorigin","anonymous"),t.setAttribute("async",!0),this.commentBox.current.appendChild(t),C.request("GET /repos/WeiningLi/card-forum/issues/"+this.id).then((function(e){s.setState({issue:e.data})}));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.issue;return console.log(e),Object(m.jsxs)("p",{className:"model-container",children:[Object(m.jsx)("span",{className:"issue-title",children:e.title}),Object(m.jsx)(B.a,{}),Object(m.jsx)("div",{class:"issue-body",children:Object(m.jsx)("div",{className:"markdown-body tip tip-left",children:Object(m.jsx)(E.a,{author:Object(m.jsx)("header",{className:"comment-header",children:Object(m.jsx)("span",{className:"issue-author",children:e.user?e.user.login:null})}),avatar:Object(m.jsx)(A.a,{shape:"square",size:"large",src:e.user?e.user.avatar_url:null,alt:e.user?e.user.login:null}),content:Object(m.jsx)(x.a,{children:e.body})})})}),Object(m.jsx)(B.a,{}),Object(m.jsx)("div",{ref:this.commentBox,className:"comment-box"})]})}}]),s}(a.Component),M=Object(m.jsx)(i.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(l.a,{exact:!0,path:"/",children:Object(m.jsx)(N,{})}),Object(m.jsx)(l.a,{path:"/model",component:L})]})});c.a.render(M,document.getElementById("root"))}},[[208,1,2]]]);
//# sourceMappingURL=main.3b3cbd1f.chunk.js.map