(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{"0AHO":function(e,t,n){"use strict";n.r(t);var r=n("KQm4"),a=n("JX7q"),s=n("dI71"),i=n("q1tI"),o=n("je4i"),u=n.n(o),c=n("Wbzz"),l=n("YQnL"),f=n("7vrA"),h=n("3Z9Z"),d=n("JI6e"),m=n("QojX"),p=n("TUci"),b=n("cWnB"),v=n("ES5j"),g=n.n(v),E=g.a.firestore(),w={textAlign:"right"},x=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleNumOfQuestionsChange=n.handleNumOfQuestionsChange.bind(Object(a.a)(n)),n.createTest=n.createTest.bind(Object(a.a)(n)),n.setUid=n.setUid.bind(Object(a.a)(n)),n.state={numOfQuestions:60,createTestClicked:!1,questions:[],uid:""},g.a.auth().onAuthStateChanged(n.setUid),E.collection("Tests").doc("MS-500").collection("Questions").get().then((function(e){e.forEach((function(e){n.addQuestion(e)}))})),n}Object(s.a)(t,e);var n=t.prototype;return n.setUid=function(e){e?this.setState({uid:e.uid}):Object(c.navigate)("/login")},n.addQuestion=function(e){var t=Object(r.a)(this.state.questions),n=e.id;t.push(n),this.setState({questions:t})},n.handleNumOfQuestionsChange=function(e){var t=e.target.value;this.setState({numOfQuestions:t})},n.createTest=function(){this.setState({createTestClicked:!0});var e=this.state.numOfQuestions;if(e>0&&e<136){for(var t=[],n=this.state.questions.sort((function(){return.5-Math.random()})).slice(0,e),r=0;r<n.length;r++)t.push({id:n[r]});var a={questions:t,id:u.a.generate(),course:"MS-500"};E.collection("users").doc(this.state.uid).collection("tests").doc(a.id).set(a),Object(c.navigate)("/course/ms-500/test?testid="+a.id)}},n.render=function(){return i.createElement(l.a,null,i.createElement("main",null,i.createElement("div",null,i.createElement(f.a,null,i.createElement(h.a,null,i.createElement(d.a,null,i.createElement("h1",null,"MS-500 Test"))),i.createElement(h.a,null,i.createElement(p.a,{variant:"danger",className:"display-none"},i.createElement("h5",null,"Error Creating Test"),i.createElement("p",null,""))),i.createElement(h.a,null,i.createElement(p.a,{variant:"danger",className:!0===this.state.createTestClicked&&(this.state.numOfQuestions>135||this.state.numOfQuestions<1)?"":"display-none"},i.createElement("h5",null,"Error with number of questions"),i.createElement("p",null,"Question count must be between 1-135"))),i.createElement(h.a,null,i.createElement(d.a,null,i.createElement(m.a.Label,{htmlFor:"inputNumber"},"Number of Questions"),i.createElement(m.a.Control,{type:"number",id:"inputNumber","aria-describedby":"inputNumberHelpBlock",value:this.state.numOfQuestions,onChange:this.handleNumOfQuestionsChange}),i.createElement(m.a.Text,{id:"inputNumberHelpBlock",muted:!0},"Must be a number between 1-135"))),i.createElement(h.a,null,i.createElement(d.a,{xs:10}),i.createElement(d.a,{xs:2,style:w},i.createElement(b.a,{onClick:this.createTest},"Create Test")))))))},t}(i.Component);t.default=x},"3RSX":function(e,t,n){"use strict";var r=n("Qfp6");e.exports=function(e){return!(!e||"string"!=typeof e||e.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},"5R+2":function(e,t){e.exports=function(e,t,n){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,a=-~(1.6*r*n/t.length),s="";;)for(var i=e(a),o=a;o--;)if((s+=t[i[o]&r]||"").length===+n)return s}},Bpvx:function(e,t,n){"use strict";var r=n("Qfp6"),a=n("Pfkr"),s=n("3RSX"),i=n("n8Jw")||0;function o(){return a(i)}e.exports=o,e.exports.generate=o,e.exports.seed=function(t){return r.seed(t),e.exports},e.exports.worker=function(t){return i=t,e.exports},e.exports.characters=function(e){return void 0!==e&&r.characters(e),r.shuffled()},e.exports.isValid=s},CR0S:function(e,t,n){"use strict";var r,a="object"==typeof window&&(window.crypto||window.msCrypto);r=a&&a.getRandomValues?function(e){return a.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=r},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Pfkr:function(e,t,n){"use strict";var r,a,s=n("vZIR");n("Qfp6");e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?r++:(r=0,a=n),t+=s(7),t+=s(e),r>0&&(t+=s(r)),t+=s(n)}},Qfp6:function(e,t,n){"use strict";var r,a,s,i=n("fqyn"),o="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function u(){s=!1}function c(e){if(e){if(e!==r){if(e.length!==o.length)throw new Error("Custom alphabet for shortid must be "+o.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,n){return t!==n.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+o.length+" unique characters. These characters were not unique: "+t.join(", "));r=e,u()}}else r!==o&&(r=o,u())}function l(){return s||(s=function(){r||c(o);for(var e,t=r.split(""),n=[],a=i.nextValue();t.length>0;)a=i.nextValue(),e=Math.floor(a*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return r||o},characters:function(e){return c(e),r},seed:function(e){i.seed(e),a!==e&&(u(),a=e)},lookup:function(e){return l()[e]},shuffled:l}},TUci:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),s=n("TSYQ"),i=n.n(s),o=n("q1tI"),u=n.n(o),c=n("y8DL"),l=n("ZCiN"),f=n("vUet"),h=n("7xGa"),d=n("XQC9"),m=n("U1MP"),p=n("YdCC"),b=n("dbZe"),v=Object(m.a)("h4");v.displayName="DivStyledAsH4";var g=Object(p.a)("alert-heading",{Component:v}),E=Object(p.a)("alert-link",{Component:b.a}),w={show:!0,transition:h.a,closeLabel:"Close alert"},x=u.a.forwardRef((function(e,t){var n=Object(c.a)(e,{show:"onClose"}),s=n.bsPrefix,o=n.show,m=n.closeLabel,p=n.className,b=n.children,v=n.variant,g=n.onClose,E=n.dismissible,w=n.transition,x=Object(a.a)(n,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),C=Object(f.a)(s,"alert"),O=Object(l.a)((function(e){g&&g(!1,e)})),Q=!0===w?h.a:w,j=u.a.createElement("div",Object(r.a)({role:"alert"},Q?void 0:x,{ref:t,className:i()(p,C,v&&C+"-"+v,E&&C+"-dismissible")}),E&&u.a.createElement(d.a,{onClick:O,label:m}),b);return Q?u.a.createElement(Q,Object(r.a)({unmountOnExit:!0},x,{ref:void 0,in:o}),j):o?j:null}));x.displayName="Alert",x.defaultProps=w,x.Link=E,x.Heading=g,t.a=x},fqyn:function(e,t,n){"use strict";var r=1;e.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(e){r=e}}},je4i:function(e,t,n){"use strict";e.exports=n("Bpvx")},n8Jw:function(e,t,n){"use strict";e.exports=0},vZIR:function(e,t,n){"use strict";var r=n("Qfp6"),a=n("CR0S"),s=n("5R+2");e.exports=function(e){for(var t,n=0,i="";!t;)i+=s(a,r.get(),1),t=e<Math.pow(16,n+1),n++;return i}}}]);
//# sourceMappingURL=component---src-pages-tests-new-js-cfccd11ed7b08e076c7c.js.map