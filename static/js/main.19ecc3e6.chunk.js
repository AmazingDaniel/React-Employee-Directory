(this.webpackJsonpfrist=this.webpackJsonpfrist||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(2),r=n(12),a=n.n(r),i=n(13),l=n(14),o=n(15),h=n(18),j=n(17);var d=function(e){return Object(s.jsxs)(s.Fragment,{children:["Search name:",Object(s.jsx)("input",{onChange:e.handleChange,name:"search",value:e.search})]})};var u=function(e){return console.log(e.employeeList),Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"Picture"}),Object(s.jsx)("th",{scope:"col",onClick:function(){return e.handleSubmit("first")},children:"First"}),Object(s.jsx)("th",{scope:"col",onClick:function(){return e.handleSubmit("last")},children:"Last"}),Object(s.jsx)("th",{scope:"col",children:"Email"}),Object(s.jsx)("th",{scope:"col",children:"Location"})]})}),Object(s.jsx)("tbody",{children:e.employeeList.length>0?e.employeeList.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:Object(s.jsx)("img",{src:e.picture.thumbnail})}),Object(s.jsxs)("td",{children:[" ",e.name.first," "]}),Object(s.jsxs)("td",{children:[" ",e.name.last," "]}),Object(s.jsxs)("td",{children:[" ",e.email," "]}),Object(s.jsxs)("td",{children:[" ",e.location.country," "]})]})})):Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:"1"}),Object(s.jsx)("td",{children:"Mark"}),Object(s.jsx)("td",{children:"Otto"}),Object(s.jsx)("td",{children:"@mdo"}),Object(s.jsx)("td",{children:"@mdo"})]})})]})},b=n(16),m=n.n(b),O=function(){return m.a.get("https://randomuser.me/api/?results=100")},p=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={employeeList:[],originalList:[],search:""},e.handleSubmit=function(t){var n=e.state.employeeList.sort((function(e,n){return e.name[t].localeCompare(n.name[t])}));e.setState({employeeList:n})},e.handleChange=function(t){var n=t.target,s=n.name,c=n.value;e.setState(Object(i.a)({},s,c)),console.log(c);var r=e.state.originalList.filter((function(e){return e.name.first.toLowerCase().includes(c.toLowerCase())}));e.setState({employeeList:r})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){e.setState({employeeList:t.data.results,originalList:t.data.results})}))}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(d,{search:this.state.search,handleChange:this.handleChange}),Object(s.jsx)(u,{employeeList:this.state.employeeList,handleSubmit:this.handleSubmit})]})}}]),n}(c.Component);a.a.render(Object(s.jsx)(p,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.19ecc3e6.chunk.js.map