(this["webpackJsonplp-forum"]=this["webpackJsonplp-forum"]||[]).push([[0],{126:function(e,t,s){},127:function(e,t,s){},206:function(e,t,s){},216:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),r=s(26),i=s.n(r),c=s(114),l=s(8),o=s(84),u=s(15),d=s(46),b=s(19),h=s(17),j=s(18),m=(s(126),s(16)),p=s.n(m),f=s(32),g=(s(127),s(62)),O=s.n(g),v=(s(204),s(222)),x=s(220),N=s(218),y=s(219),k=s(221),w=s(224),M=s(3),C=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(u.a)(this,s),(a=t.call(this,e)).commentBox=n.a.createRef(),a.id=a.props.issue.number.toString(),a.state={issue:a.props.issue},a}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=document.createElement("script")).setAttribute("src","https://utteranc.es/client.js"),t.setAttribute("repo","WeiningLi/card-forum"),t.setAttribute("issue-number",this.id),t.setAttribute("theme","github-light"),t.setAttribute("crossorigin","anonymous"),t.setAttribute("async",!0),this.commentBox.current.appendChild(t);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.issue,t=this.props.isMobile;return Object(M.jsxs)("p",{className:"model-container",children:[Object(M.jsx)(v.a,{children:Object(M.jsx)(x.a,{className:"return-btn",type:"link",icon:Object(M.jsx)(w.a,{}),onClick:this.props.back,children:"Return"})}),Object(M.jsx)(N.a,{className:"top-divider"}),Object(M.jsx)("span",{className:"issue-title",children:e.title}),Object(M.jsx)("div",{class:"issue-body",children:Object(M.jsx)("div",{className:"markdown-body tip tip-left",children:Object(M.jsx)(y.a,{author:Object(M.jsx)("header",{className:"comment-header",children:Object(M.jsx)("span",{className:"issue-author",children:e.user?e.user.login:null})}),avatar:t?null:Object(M.jsx)(k.a,{shape:"square",className:"author-avatar",src:e.user?e.user.avatar_url:null,alt:e.user?e.user.login:null}),content:Object(M.jsx)(O.a,{children:e.body})})})}),Object(M.jsx)(N.a,{className:"top-divider"}),Object(M.jsx)("div",{ref:this.commentBox,className:"comment-box"})]})}}]),s}(a.Component),S=(s(206),s(207),s.p+"static/media/lp-badge-white.87e3ef5c.svg"),T=s(225);var D=function(){return Object(M.jsx)("div",{className:"hero-head header-color",children:Object(M.jsx)("div",{className:"layout-left-space layout-right-space",children:Object(M.jsxs)("nav",{className:"navbar lp-navbar",role:"navigation",children:[Object(M.jsxs)("div",{className:"navbar-brand",children:[Object(M.jsx)("a",{className:"navbar-item",href:"https://layout-parser.github.io/",children:Object(M.jsx)("img",{src:S,alt:"Logo",className:"lp-badge"})}),Object(M.jsxs)("div",{className:"navbar-burger","data-target":"navbar-main",onClick:function(){document.querySelector(".navbar-menu").classList.toggle("is-active")},children:[Object(M.jsx)("span",{}),Object(M.jsx)("span",{}),Object(M.jsx)("span",{})]})]}),Object(M.jsx)("div",{className:"navbar-menu",id:"navbar-main",children:Object(M.jsxs)("div",{className:"navbar-end",children:[Object(M.jsx)("a",{href:"https://layout-parser.github.io/tutorials.html",onMouseDown:function(e){e.preventDefault()},className:"navbar-item",children:"Tutorials"}),Object(M.jsx)("a",{href:"https://layout-parser.readthedocs.io/en/latest/",rel:"noreferrer",target:"_blank",onMouseDown:function(e){e.preventDefault()},className:"navbar-item",children:"Docs"}),Object(M.jsx)("a",{href:"https://join.slack.com/t/layout-parser/shared_invite/zt-ohjd14k1-OrJ2HltwVRGrxhLeHMfW_w",onMouseDown:function(e){e.preventDefault()},className:"navbar-item",children:"Discussion"}),Object(M.jsx)("div",{className:"navbar-item",children:Object(M.jsx)("a",{href:"https://github.com/Layout-Parser/layout-parser",rel:"noreferrer",target:"_blank",className:"icon bg-transparent button is-danger",children:Object(M.jsx)(T.a,{})})})]})})]})})})},E=s(223),L=(s(208),new(0,s(215).Octokit)),R=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var a;Object(u.a)(this,s),(a=t.call(this,e)).drawRows=function(e){if(0===e.length)return null;var t=[];return e.forEach((function(s){t.push(Object(M.jsx)(E.a,{span:a.isMobile?24:12,className:"center-col",children:Object(M.jsxs)("div",{className:"model-card",id:s.number,onClick:function(t){var s,n=t.target;if(!t.target.id)for(;!n.id;)n=n.parentElement;e.forEach((function(e){e.number.toString()===n.id&&(s=e)})),a.setState({page:"comments",issueNumber:n.id,issue:s})},children:[Object(M.jsx)("span",{id:s.number,className:"card-title",children:s.title}),Object(M.jsx)(O.a,{onClick:function(e){e.preventDefault()},id:s.number,className:"card-body",children:s.body}),Object(M.jsx)("span",{id:s.number,className:"card-author",children:s.user.login})]})}))})),t},a.drawModels=function(){var e=a.state,t=e.issues,s=e.category,n=e.tags,r=e.seacrhText,i=e.modelCount,c=[];if(t.forEach((function(e){var t=e.labels.map((function(e){return e.name})),a=s.some((function(e){return t.includes(e)})),r=n.every((function(e){return t.includes(e)}));a&&r&&c.push(e)})),""!==r&&(c=c.filter((function(e){return e.title.toLowerCase().includes(r)||e.body.toLowerCase().includes(r)}))),!c.length)return Object(M.jsx)(v.a,{children:Object(M.jsx)("span",{className:"err-msg",children:"No results found! Please try search again."})});i!==c.length&&a.setState({modelCount:c.length});var l,o,u,d=[],b=c.filter((function(e){return"open"===e.state}));for(l=0,o=b.length;l<o;l+=2)u=b.slice(l,l+2),d.push(Object(M.jsx)(v.a,{children:a.drawRows(u)}));return d},a.tag=function(e){return Object(M.jsx)("button",{className:a.state.tags.includes(e)||a.state.category.includes(e)?"selected-tag":"unselected-tag",onClick:function(){a.flipTag(e)},children:e})},a.flipTag=function(e){if("model"===e||"pipeline"===e){var t=Object(o.a)(a.state.category);t.includes(e)?a.setState({category:a.state.category.filter((function(t){return t!==e}))}):(t.push(e),a.setState({category:t}))}else{var s=Object(o.a)(a.state.tags);s.includes(e)?a.setState({tags:a.state.tags.filter((function(t){return t!==e}))}):(s.push(e),a.setState({tags:s}))}},a.drawTags=function(){var e=a.state.issues,t=new Set,s=[];return e.forEach((function(e){var s=e.labels.map((function(e){return e.name}));(s.includes("model")||s.includes("pipeline"))&&s.forEach((function(e){t.add(e)}))})),t.delete("model"),t.delete("pipeline"),t.forEach((function(e){s.push(a.tag(e))})),s},a.state={issues:[],page:"main",issueNumber:-1,issue:null,category:["model","pipeline"],tags:[],seacrhText:"",modelCount:0};var r=navigator.userAgent;return a.isMobile=/Android|iPhone/i.test(r),a.backToMain=a.backToMain.bind(Object(b.a)(a)),a.searchRef=n.a.createRef(),a}return Object(d.a)(s,[{key:"backToMain",value:function(){this.setState({page:"main",issueNumber:-1,issue:null})}},{key:"componentDidMount",value:function(){var e=this;L.request("GET /repos/WeiningLi/card-forum/issues").then((function(t){return e.setState({issues:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.page,a=t.issue,n=t.modelCount;return Object(M.jsxs)("div",{children:[Object(M.jsx)(D,{}),"main"===s?Object(M.jsxs)(v.a,{children:[this.isMobile?null:Object(M.jsx)(E.a,{span:8,className:"menu-shadow",children:Object(M.jsxs)("aside",{className:"menu inner-left-space inner-top-space",children:[Object(M.jsx)("p",{className:"menu-label",children:"Categories"}),Object(M.jsxs)(v.a,{children:[this.tag("model"),this.tag("pipeline")]}),Object(M.jsx)("p",{className:"menu-label",children:"Tags"}),Object(M.jsx)(v.a,{children:this.drawTags()})]})}),Object(M.jsx)(E.a,{span:this.isMobile?24:16,children:Object(M.jsxs)("div",{className:"site-card-wrapper layout-right-space inner-top-space",children:[Object(M.jsxs)(v.a,{style:{marginBottom:"10px"},children:[Object(M.jsx)("span",{className:"title",children:"Models/Pipelines: "+n.toString()}),Object(M.jsx)("input",{ref:this.searchRef,className:"search-bar",placeholder:"Search Title / Description",onChange:function(){e.setState({seacrhText:e.searchRef.current.value.toLowerCase()})}})]}),this.drawModels()]})})]}):Object(M.jsx)(C,{issue:a,back:this.backToMain,isMobile:this.isMobile})]})}}]),s}(a.Component),A=Object(M.jsx)(c.a,{children:Object(M.jsx)("div",{children:Object(M.jsx)(l.a,{exact:!0,path:"/community-platform",component:R})})});i.a.render(A,document.getElementById("root"))}},[[216,1,2]]]);
//# sourceMappingURL=main.13cb21ae.chunk.js.map