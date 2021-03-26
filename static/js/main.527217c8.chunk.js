(this["webpackJsonpreact-tarot"]=this["webpackJsonpreact-tarot"]||[]).push([[0],{39:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),s=n.n(c),i=(n(39),n(8)),o=n(17),d=n.p+"static/media/tarotBack.2deb9d18.png",u=n(1);function j(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),r=n[0],c=n[1],s=Object(o.c)({opacity:e.flipped?1:0,transform:"perspective(600px) rotateY(".concat(e.flipped?180:0,"deg)"),config:{mass:5,tension:500,friction:80}}),j=s.transform,l=s.opacity;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o.a.div,{className:"Card-Back",style:{backgroundImage:"url(".concat(e.reading?"".concat(d):e.props.image,")"),opacity:l.interpolate((function(e){return 1-e})),transform:j}}),Object(u.jsx)(o.a.div,{className:"Card-Front",style:{opacity:l,transform:j.interpolate((function(e){return"".concat(e," rotateY(180deg)")})),backgroundImage:"url(".concat(e.reading?e.props.image:null,")")},onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},children:e.reading&&r?Object(u.jsxs)("div",{className:"Card-Reading-Text",style:{backgroundColor:"rgba(63, 105, 86, 0.7)",fontWeight:"bold"},children:[Object(u.jsx)("h2",{className:"Card-Name",children:e.props.name}),Object(u.jsxs)("p",{className:"Card-Upright",children:["Upright: ",e.props.upright]}),Object(u.jsxs)("p",{className:"Card-Reverse",children:["Reversed: ",e.props.reversed]}),Object(u.jsx)("p",{className:"Card-Meaning",children:e.props.summary})]}):e.reading?null:Object(u.jsxs)("div",{className:"Card-Text",children:[Object(u.jsx)("h2",{className:"Card-Name",children:e.props.name}),Object(u.jsxs)("p",{className:"Card-Upright",children:["Upright: ",e.props.upright]}),Object(u.jsxs)("p",{className:"Card-Reverse",children:["Reversed: ",e.props.reversed]}),Object(u.jsx)("p",{className:"Card-Meaning",children:e.props.summary})]})})]})}function l(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(u.jsx)("div",{className:"Card-Container",onClick:function(){c((function(e){return!e}))},children:Object(u.jsx)(j,{props:e.props.attributes,flipped:r,image:e.props.attributes.image})})}var p=n(6),b=n(33),h=n(5);function O(e){var t=Object(h.d)((function(e){return e.readings.current})),n=Object(h.d)((function(e){return e.readings.counter})),r=Object(h.d)((function(e){return e.readings.flag})),c=Object(h.d)((function(e){return e.readings.readings})),s=Object(h.c)(),d=Object(a.useState)(!1),l=Object(i.a)(d,2),O=l[0],f=l[1],m=Object(o.c)((function(){return{pos:[0,0],config:{mass:2,tension:100,friction:50}}})),g=Object(i.a)(m,2),x=g[0].pos,v=g[1],N=Object(a.useState)(!1),C=Object(i.a)(N,2),y=C[0],S=C[1],E=Object(a.useState)(e.props.id),R=Object(i.a)(E,1)[0],T=Object(b.a)((function(e){var t=e.down,n=e.movement,a=e.tap;v({pos:n,immediate:t}),S(a)}),{initial:function(){return x.getValue()}},{filterTaps:!0});Object(a.useEffect)((function(){v({pos:[0,0]}),f(!1);var e=c.find((function(e){return e.id===t}));e&&(e.relationships.cards.data[0].id===R&&(v({pos:[300,-100]}),f(!0)),e.relationships.cards.data[1].id===R&&(v({pos:[600,-100]}),f(!0)),e.relationships.cards.data[2].id===R&&(v({pos:[900,-100]}),f(!0)))}),[t]),Object(a.useEffect)((function(){r&&(v({pos:[0,0]}),f(!1)),r&&c.slice(-1)[0].relationships.cards.data[0].id===R&&(v({pos:[300,-100]}),s({type:"SET_FLAG_FALSE"})),r&&c.slice(-1)[0].relationships.cards.data[1].id===R&&(v({pos:[600,-100]}),s({type:"SET_FLAG_FALSE"})),r&&c.slice(-1)[0].relationships.cards.data[2].id===R&&(v({pos:[900,-100]}),s({type:"SET_FLAG_FALSE"}))}),[r,c,R,v,s]);return Object(u.jsx)(o.a.div,Object(p.a)(Object(p.a)({id:"card-".concat(e.props.id),className:"Card-Reading-Container",onClick:function(e){return function(e){y&&f((function(e){return!e})),s({type:"INCREMENT"}),e.target.closest(".Card-Reading-Container").style.zIndex=n}(e)},onMouseDown:function(e){return function(e){s({type:"INCREMENT"}),e.target.closest(".Card-Reading-Container").style.zIndex=n}(e)}},T()),{},{style:{transform:Object(o.b)([x],(function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];return"translate3d(".concat(n,"px,").concat(a,"px,0)")}))},children:Object(u.jsx)(j,{props:e.props.attributes,flipped:O,reading:!0,count:n})}))}var f=n(7),m=n(14),g=n(12),x=n(11);var v=function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({question:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var n=function(e,t){var n=new Array(t),a=e.length,r=new Array(a);if(t>a)throw new RangeError("getRandom: more elements taken than available");for(;t--;){var c=Math.floor(Math.random()*a);n[t]=e[c in r?r[c]:c],r[c]=--a in r?r[a]:a}return n}(e.props.cards,3).map((function(e){return e.id}));e.state.cards=n,e.state.flag=!0;var a={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e.state)};fetch("https://safe-cove-73377.herokuapp.com/api/v1/readings",a).then((function(e){return e.json()})).then((function(t){e.setState({question:""}),e.props.addReading(t)}))},e.state={question:""},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("form",{className:"question",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(u.jsxs)("p",{className:"Form-Input",children:[Object(u.jsx)("label",{children:"Ask A Question"}),Object(u.jsx)("textarea",{type:"text",onChange:this.handleChange,value:this.state.question})]}),Object(u.jsx)("input",{type:"submit"})]})}}]),n}(a.Component),N=Object(h.b)(null,(function(e){return{addReading:function(t){return e({type:"ADD_READING",payload:t})}}}))(v);function C(e){var t=e.cards.filter((function(t){return t.id===e.props.relationships.cards.data[0].id||t.id===e.props.relationships.cards.data[1].id||t.id===e.props.relationships.cards.data[2].id}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("li",{id:e.props.id,children:[Object(u.jsx)("h2",{children:e.props.attributes.question}),Object(u.jsx)("div",{children:t[0].attributes.name}),Object(u.jsx)("div",{children:t[1].attributes.name}),Object(u.jsx)("div",{children:t[2].attributes.name})]})})}function y(e){var t=Object(h.d)((function(e){return e.readings.readings})),n=Object(h.c)(),a=t.slice(Math.max(t.length-5,0)).map((function(t){return Object(u.jsx)(C,{props:t,cards:e.cards},t.id)}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"Reading-List",onClick:function(e){return function(e){n({type:"CLICK_FLAG",payload:e.target.closest("li").id})}(e)},children:Object(u.jsx)("ul",{children:a})})})}function S(e){var t=Object(u.jsx)(u.Fragment,{});return e.cards&&(t=function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}(e.cards).map((function(e){return Object(u.jsx)(O,{props:e},e.id)}))),Object(u.jsxs)("div",{className:"Reading-Container",children:[t,Object(u.jsx)(N,{cards:e.cards}),Object(u.jsx)(y,{cards:e.cards})]})}var E=n(23),R=n(4),T=function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e.state)};fetch("http://localhost:3000/api/v1/users",n).then((function(e){return e.json()})).then((function(t){e.setState({username:""})}))},e.handleChange=function(t){e.setState({username:t.target.value})},e.state={username:""},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"login-page",style:{width:"200px",height:"50vh",margin:"auto",marginTop:"10vh"},children:Object(u.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(u.jsxs)("p",{className:"Form-Input",children:[Object(u.jsx)("label",{children:"username"}),Object(u.jsx)("input",{type:"text",onChange:this.handleChange,value:this.state.username})]}),Object(u.jsx)("input",{type:"submit"})]})})}}]),n}(r.a.Component),A=Object(h.b)(null,(function(e){return{}}))(T),F=function(){return Object(u.jsx)("div",{className:"Header",children:Object(u.jsx)("h1",{className:"brand",children:Object(u.jsx)("i",{children:"Tarot Card Reader"})})})};var I=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!0),s=Object(i.a)(c,2),o=s[0],d=s[1];return Object(a.useEffect)((function(){fetch("https://safe-cove-73377.herokuapp.com/api/v1/cards").then((function(e){return e.json()})).then((function(e){r(e.data),d(!1)}))}),[]),Object(u.jsx)(E.a,{basename:"/",children:Object(u.jsx)("div",{className:"App",children:o?Object(u.jsx)("div",{children:"Loading"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{children:Object(u.jsxs)("ul",{className:"Navbar",children:[Object(u.jsx)("li",{className:"Nav-Item",children:Object(u.jsx)(E.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{className:"Nav-Item",children:Object(u.jsx)(E.b,{to:"/cards",children:"Cards"})}),Object(u.jsx)("li",{className:"Nav-Item",children:Object(u.jsx)(E.b,{to:"/readings",children:"Readings"})})]})}),Object(u.jsx)(F,{}),Object(u.jsx)(R.a,{exact:!0,path:"/",children:Object(u.jsx)(A,{})}),Object(u.jsx)(R.a,{exact:!0,path:"/cards",children:Object(u.jsx)("div",{className:"Card-Index",children:n.map((function(e){return Object(u.jsx)(l,{props:e})}))})}),Object(u.jsx)(R.a,{exact:!0,path:"/readings",children:Object(u.jsx)(S,{cards:n})})]})})})},k=n(15),L=n(34),M={counter:0,readings:[],flag:!1,current:""},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return Object(p.a)(Object(p.a)({},e),{},{counter:e.counter+1});case"ADD_READING":return Object(p.a)(Object(p.a)({},e),{},{readings:t.payload.data,flag:!0});case"SET_FLAG":return Object(p.a)(Object(p.a)({},e),{},{flag:!e.flag});case"SET_FLAG_FALSE":return Object(p.a)(Object(p.a)({},e),{},{flag:!1});case"CLICK_FLAG":return Object(p.a)(Object(p.a)({},e),{},{current:t.payload});default:return Object(p.a)({},e)}};var _=Object(k.c)({readings:w,count:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{count:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BUTTON_INCREMENT":return{count:e.count+1};case"DECREMENT":return e.count-1;default:return e}}}),D=Object(k.e)(_,Object(k.d)(Object(k.a)(L.a),window.devToolsExtension?window.devToolsExtension():function(e){return e}));s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(h.a,{store:D,children:Object(u.jsx)(I,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.527217c8.chunk.js.map