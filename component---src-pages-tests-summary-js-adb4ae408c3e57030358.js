(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{"3Z9Z":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),s=a("TSYQ"),o=a.n(s),i=a("q1tI"),c=a.n(i),l=a("vUet"),u=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,i=e.noGutters,d=e.as,m=void 0===d?"div":d,f=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),h=Object(l.a)(a,"row"),v=h+"-cols",p=[];return u.forEach((function(e){var t,a=f[e];delete f[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&p.push(""+v+n+"-"+t)})),c.a.createElement(m,Object(n.a)({ref:t},f,{className:o.a.apply(void 0,[s,h,i&&"no-gutters"].concat(p))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},JI6e:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),s=a("TSYQ"),o=a.n(s),i=a("q1tI"),c=a.n(i),l=a("vUet"),u=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,i=e.as,d=void 0===i?"div":i,m=Object(r.a)(e,["bsPrefix","className","as"]),f=Object(l.a)(a,"col"),h=[],v=[];return u.forEach((function(e){var t,a,n,r=m[e];if(delete m[e],"object"==typeof r&&null!=r){var s=r.span;t=void 0===s||s,a=r.offset,n=r.order}else t=r;var o="xs"!==e?"-"+e:"";t&&h.push(!0===t?""+f+o:""+f+o+"-"+t),null!=n&&v.push("order"+o+"-"+n),null!=a&&v.push("offset"+o+"-"+a)})),h.length||h.push(f),c.a.createElement(d,Object(n.a)({},m,{ref:t,className:o.a.apply(void 0,[s].concat(h,v))}))}));d.displayName="Col",t.a=d},JX7q:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return n}))},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.a.createContext&&r.a.createContext(s),i=function(){return(i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function l(e){return function(t){return r.a.createElement(u,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.a.createElement(t.tag,i({key:a},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var a,n=e.attr,s=e.size,o=e.title,l=c(e,["attr","size","title"]),u=s||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,l,{className:a,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&r.a.createElement("title",null,o),e.children)};return void 0!==o?r.a.createElement(o.Consumer,null,(function(e){return t(e)})):t(s)}},TEad:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a("JX7q"),r=a("dI71"),s=a("q1tI"),o=a.n(s),i=a("v83y"),c=a("7vrA"),l=a("3Z9Z"),u=a("JI6e"),d=a("cWnB"),m=a("Wbzz"),f=a("ES5j"),h=a.n(f),v=a("YQnL"),p=a("+jxT"),g=h.a.firestore(),w={color:"green",marginRight:"12px"},x={color:"red",marginRight:"12px"},b=function(e){function t(t){var a;(a=e.call(this,t)||this).setUid=a.setUid.bind(Object(n.a)(a)),a.gradeTest=a.gradeTest.bind(Object(n.a)(a));var r=new URLSearchParams(t.location.search);return a.state={test:{},uid:"",testId:r.get("testId"),questions:[]},h.a.auth().onAuthStateChanged(a.setUid),a}Object(r.a)(t,e);var a=t.prototype;return a.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),g.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var a=e.data();a.id=e.id,t.setState({test:a});var n=t.state.questions;a.questions.forEach((function(e){g.collection("Tests").doc("MS-500").collection("Questions").doc(e.id).get().then((function(r){var s=r.data();if(s.id=r.id,s.text=Object(i.convertFromRaw)(s.question).getPlainText().substring(0,25),s.answered=e.answered,!a.isGraded&&a.isComplete){var o=t.gradeQuestion(s,e.answered||[]),c=o.maxPoints,l=o.pointsReceived;s.maxPoints=c,s.pointsReceived=l,n.length>=a.questions.length&&t.gradeTest(a,n)}n.push(s),t.setState({questions:n})}))}))}))):Object(m.navigate)("/login")},a.gradeQuestion=function(e,t){var a=e.answers.filter((function(e){return!0===e.isCorrectAnswer})).length,n=0;return t.forEach((function(t){e.answers[t].isCorrectAnswer?n++:n--})),n<0&&(n=0),{maxPoints:a,pointsReceived:n}},a.gradeTest=function(e,t){var a=0,n=0;t.forEach((function(e){a+=e.maxPoints,n+=e.pointsReceived})),e.isGraded=!0,e.score=Math.round(n/a*1e3),g.collection("users").doc(this.state.uid).collection("tests").doc(e.id).set(e),this.setState(e)},a.render=function(){var e=this,t=this.state.questions;return o.a.createElement(v.a,null,o.a.createElement("main",null,o.a.createElement(c.a,null,o.a.createElement(l.a,{className:"box"},o.a.createElement(u.a,{xs:6,className:"box-row"},o.a.createElement("strong",null,"Exam Number:")," MS-500"),o.a.createElement(u.a,{xs:6,className:"box-row"},o.a.createElement("strong",null,"Passing Score:")," 700"),o.a.createElement(u.a,{xs:6,className:"box-row"},o.a.createElement("strong",null,"Your Score:")," ",this.state.test.score),o.a.createElement(u.a,{xs:6,className:"box-row"},o.a.createElement("strong",null,"Result:")," ",this.state.test.score?this.state.test.score>700?"Pass":"Fail":"")),o.a.createElement(l.a,null,o.a.createElement(u.a,{xs:10},o.a.createElement("h1",null,"Test Sumary")),this.state.test.isComplete?"":o.a.createElement(u.a,{xs:2},o.a.createElement(d.a,null,"Grade Test"))),o.a.createElement(l.a,null,t.map((function(t,a){return o.a.createElement(u.a,{xs:6,md:4,key:a,title:t.answered&&t.answered.length>0?t.maxPoints===t.pointsReceived?"Answered correctly":"Answered incorrectly":"Not answered"},t.answered&&t.answered.length>0?t.maxPoints===t.pointsReceived?o.a.createElement(p.a,{style:w}):o.a.createElement(p.a,{style:x}):o.a.createElement(p.b,{style:x}),o.a.createElement(d.a,{as:m.Link,variant:"link",size:"lg",to:"/course/ms-500/question/"+t.id+"?testId="+e.state.testId},a+1,". ",t.text))}))))))},t}(o.a.Component)}}]);
//# sourceMappingURL=component---src-pages-tests-summary-js-adb4ae408c3e57030358.js.map