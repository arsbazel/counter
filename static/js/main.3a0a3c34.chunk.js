(this.webpackJsonpexam01=this.webpackJsonpexam01||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var n,a=c(0),r=c.n(a),i=c(4),u=c.n(i),s=(c(14),c(15),c(1)),l=function(e){return Object(s.jsxs)("button",{disabled:e.disable,onClick:e.callBack,children:[e.title," "]})},o=function(e){var t="scoreboard";return e.score>=e.maxValue&&(t="scoreboard red"),Object(s.jsx)("div",{className:t,children:e.score})},b=c(3),j=c(2);!function(e){e.SET_MIN="SET_MIN",e.SET_MAX="SET_MAX",e.INCREASE_VALUE="INCREASE_VALUE"}(n||(n={}));var d=function(e){return{type:n.SET_MIN,value:e}},m={min:0,max:5,score:0};var O=function(){var e=Object(b.b)();Object(a.useEffect)((function(){}));var t=Object(b.c)((function(e){return e.counter})),c=t.score,r=t.min,i=t.max,u=function(t){return e(d(t))};return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("header",{className:"App-header",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(o,{maxValue:i,score:c}),Object(s.jsxs)("div",{className:"button-container",children:[Object(s.jsx)(l,{disable:c>=i,callBack:function(){e({type:n.INCREASE_VALUE})},title:"inc"}),Object(s.jsx)(l,{disable:c<=r,callBack:function(){u(r)},title:"reset"})]}),Object(s.jsxs)("div",{className:"button-container input",children:[Object(s.jsx)("input",{type:"number",size:2,name:"minValue",onChange:function(t){e(d(+t.currentTarget.value))},value:r}),Object(s.jsx)("label",{htmlFor:"minValue",children:"min"}),Object(s.jsx)("input",{type:"number",size:2,name:"maxValue",onChange:function(t){var c;e((c=+t.currentTarget.value,{type:n.SET_MAX,value:c}))},value:i}),Object(s.jsx)("label",{htmlFor:"maxValue",children:"max"})]}),Object(s.jsx)(l,{callBack:function(){return u},title:"set",disable:!1})]})})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))},x=c(5),h=c(9),f=Object(x.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SET_MIN:return t.value>e.max?e:t.value>e.score?Object(j.a)(Object(j.a)({},e),{},{min:t.value,score:t.value}):Object(j.a)(Object(j.a)({},e),{},{min:t.value});case n.SET_MAX:return t.value<e.min?e:t.value<e.score?Object(j.a)(Object(j.a)({},e),{},{max:t.value,score:t.value}):Object(j.a)(Object(j.a)({},e),{},{max:t.value});case n.INCREASE_VALUE:var c=e.score+1;return c>e.max?e:Object(j.a)(Object(j.a)({},e),{},{score:c});default:return e}}}),E=Object(x.c)(f,Object(x.a)(h.a));u.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(b.a,{store:E,children:Object(s.jsx)(O,{})})}),document.getElementById("root")),v()}},[[21,1,2]]]);
//# sourceMappingURL=main.3a0a3c34.chunk.js.map