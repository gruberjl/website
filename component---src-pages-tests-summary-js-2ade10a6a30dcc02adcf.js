(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{"3Z9Z":function(e,t,a){"use strict";var n=a("wx14"),s=a("zLVn"),r=a("TSYQ"),o=a.n(r),i=a("q1tI"),c=a.n(i),l=a("vUet"),u=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.noGutters,d=e.as,m=void 0===d?"div":d,f=Object(s.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(l.a)(a,"row"),h=v+"-cols",p=[];return u.forEach((function(e){var t,a=f[e];delete f[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&p.push(""+h+n+"-"+t)})),c.a.createElement(m,Object(n.a)({ref:t},f,{className:o.a.apply(void 0,[r,v,i&&"no-gutters"].concat(p))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},JI6e:function(e,t,a){"use strict";var n=a("wx14"),s=a("zLVn"),r=a("TSYQ"),o=a.n(r),i=a("q1tI"),c=a.n(i),l=a("vUet"),u=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.as,d=void 0===i?"div":i,m=Object(s.a)(e,["bsPrefix","className","as"]),f=Object(l.a)(a,"col"),v=[],h=[];return u.forEach((function(e){var t,a,n,s=m[e];if(delete m[e],"object"==typeof s&&null!=s){var r=s.span;t=void 0===r||r,a=s.offset,n=s.order}else t=s;var o="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+f+o:""+f+o+"-"+t),null!=n&&h.push("order"+o+"-"+n),null!=a&&h.push("offset"+o+"-"+a)})),v.length||v.push(f),c.a.createElement(d,Object(n.a)({},m,{ref:t,className:o.a.apply(void 0,[r].concat(v,h))}))}));d.displayName="Col",t.a=d},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),s=a.n(n),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=s.a.createContext&&s.a.createContext(r),i=function(){return(i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]])}return a};function l(e){return function(t){return s.a.createElement(u,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return s.a.createElement(t.tag,i({key:a},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var a,n=e.attr,r=e.size,o=e.title,l=c(e,["attr","size","title"]),u=r||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),s.a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,l,{className:a,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&s.a.createElement("title",null,o),e.children)};return void 0!==o?s.a.createElement(o.Consumer,null,(function(e){return t(e)})):t(r)}},TEad:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var n=a("JX7q"),s=a("dI71"),r=a("q1tI"),o=a.n(r),i=a("v83y"),c=a("7vrA"),l=a("3Z9Z"),u=a("JI6e"),d=a("cWnB"),m=a("Wbzz"),f=a("ES5j"),v=a.n(f),h=a("YQnL"),p=a("+jxT"),g={color:"green",marginRight:"12px"},w={color:"red",marginRight:"12px"},x=function(e){function t(t){var a;(a=e.call(this,t)||this).setUid=a.setUid.bind(Object(n.a)(a)),a.gradeTest=a.gradeTest.bind(Object(n.a)(a));var s=new URLSearchParams(t.location.search);a.state={test:{},uid:"",testId:s.get("testId"),questions:[]};return"undefined"!=typeof window&&v.a.auth().onAuthStateChanged(a.setUid),a}Object(s.a)(t,e);var a=t.prototype;return a.setUid=function(e){var t=this;if(e){this.setState({uid:e.uid});var a=v.a.firestore();a.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id,t.setState({test:n});var s=t.state.questions;n.questions.forEach((function(e){a.collection("Tests").doc("MS-500").collection("Questions").doc(e.id).get().then((function(a){var r=a.data();if(r.id=a.id,r.text=Object(i.convertFromRaw)(r.question).getPlainText().substring(0,25),r.answered=e.answered,!n.isGraded&&n.isComplete){var o=t.gradeQuestion(r,e.answered||[]),c=o.maxPoints,l=o.pointsReceived;r.maxPoints=c,r.pointsReceived=l,s.push(r),s.length>=n.questions.length&&t.gradeTest(n,s)}else s.push(r);t.setState({questions:s})}))}))}))}else Object(m.navigate)("/login")},a.gradeQuestion=function(e,t){var a=e.answers.filter((function(e){return!0===e.isCorrectAnswer})).length,n=0;return t.forEach((function(t){e.answers[t].isCorrectAnswer?n++:n--})),n<0&&(n=0),{maxPoints:a,pointsReceived:n}},a.gradeTest=function(e,t){console.log("test");var a=0,n=0;t.forEach((function(e){a+=e.maxPoints,n+=e.pointsReceived})),e.isGraded=!0,e.score=Math.round(n/a*1e3),v.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(e.id).set(e),this.setState(e)},a.render=function(){var e=this,t=this.state.questions;return o.a.createElement(h.a,null,o.a.createElement("main",null,o.a.createElement(c.a,null,o.a.createElement(l.a,{className:"box"},o.a.createElement(u.a,{xs:6,className:"box-row"},o.a.createElement("strong",null,"Exam Number:")," MS-500"),o.a.createElement(u.a,{xs:6,className:"box-row"},o.a.createElement("strong",null,"Passing Score:")," 700"),o.a.createElement(u.a,{xs:6,className:"box-row"},o.a.createElement("strong",null,"Your Score:")," ",this.state.test.score),o.a.createElement(u.a,{xs:6,className:"box-row"},o.a.createElement("strong",null,"Result:")," ",this.state.test.score?this.state.test.score>700?"Pass":"Fail":"")),o.a.createElement(l.a,null,o.a.createElement(u.a,{xs:10},o.a.createElement("h1",null,"Test Sumary")),this.state.test.isComplete?"":o.a.createElement(u.a,{xs:2},o.a.createElement(d.a,null,"Grade Test"))),o.a.createElement(l.a,null,t.map((function(t,a){return o.a.createElement(u.a,{xs:6,md:4,key:a,title:t.answered&&t.answered.length>0?t.maxPoints===t.pointsReceived?"Answered correctly":"Answered incorrectly":"Not answered"},t.answered&&t.answered.length>0?t.maxPoints===t.pointsReceived?o.a.createElement(p.a,{style:g}):o.a.createElement(p.a,{style:w}):o.a.createElement(p.b,{style:w}),o.a.createElement(d.a,{as:m.Link,variant:"link",size:"lg",to:"/course/ms-500/question/"+t.id+"?testId="+e.state.testId},a+1,". ",t.text))}))))))},t}(o.a.Component)}}]);
//# sourceMappingURL=component---src-pages-tests-summary-js-2ade10a6a30dcc02adcf.js.map