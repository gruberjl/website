(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{gx4D:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),E=n("ES5j"),y=n.n(E),w=(n("5x/H"),n("bQ8i")),S=n.n(w),x=y.a.firestore(),v={marginTop:"14px",marginBottom:"14px",display:"flex"},k={display:"flex",alignItems:"center",justifyContent:"center"},f={marginTop:"24px"},C={marginTop:"24px"},b=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return y.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{answers:[{value:"From the Security and compliance admin center grant the user eDiscovery Manager role",isCorrectAnswer:!0},{value:"From the Security and compliance admin center grant the user Data Investigator role",isCorrectAnswer:!1},{value:"From the Microsoft 365 admin center grant the user global admin permissions",isCorrectAnswer:!1}],references:{blocks:[{type:"unstyled",data:{},inlineStyleRanges:[],key:"1olit",entityRanges:[],depth:0,text:"https://www.iorad.com/player/1801786/MS-500---ensure-that-a-user-can-perform-searches-and-place-holds-on-mailboxes-"},{text:"Open the security and compliance admin center",entityRanges:[],inlineStyleRanges:[],key:"e2k9i",data:{},type:"ordered-list-item",depth:0},{text:"Click Permissions",key:"6gepr",type:"ordered-list-item",inlineStyleRanges:[],data:{},depth:0,entityRanges:[]},{data:{},depth:0,entityRanges:[],type:"ordered-list-item",inlineStyleRanges:[],key:"2fhrh",text:"Scroll down to the eDiscovery Manager role and click on it."},{type:"ordered-list-item",key:"85enr",entityRanges:[],text:"Click Edit next to the eDiscovery Manager role.",data:{},inlineStyleRanges:[],depth:0},{depth:0,type:"ordered-list-item",data:{},inlineStyleRanges:[],key:"buq8g",text:"Click Choose eDiscovery Manager.",entityRanges:[]},{data:{},entityRanges:[],inlineStyleRanges:[],depth:0,text:"Click Add. Add Jo Gruber the role.",type:"ordered-list-item",key:"96amj"},{data:{},depth:0,key:"3s761",text:"Click Done then Save then Close.",type:"ordered-list-item",entityRanges:[],inlineStyleRanges:[]}],entityMap:{}},question:{blocks:[{inlineStyleRanges:[],data:{},depth:0,entityRanges:[],key:"e6u20",text:"SIMULATION -",type:"unstyled"},{entityRanges:[],text:"You need to ensure that a user named Joe Gruber can perform searches and place holds on mailboxes, SharePoint Online sites, and OneDrive for Business locations. The solution must use the principle of least privilege.",key:"bps50",data:{},type:"unstyled",depth:0,inlineStyleRanges:[]},{entityRanges:[],key:"vvka",depth:0,text:"To complete this task, sign in to the Microsoft 365 admin center.",inlineStyleRanges:[],data:{},type:"unstyled"}],entityMap:{}},id:"2n-EJrfdv"},previousQuestionId:"",nextQuestionId:"",questionId:"2n-EJrfdv",questionIdx:"",questionHtml:"<p>SIMULATION -</p>\n<p>You need to ensure that a user named Joe Gruber can perform searches and place holds on mailboxes, SharePoint Online sites, and OneDrive for Business locations. The solution must use the principle of least privilege.</p>\n<p>To complete this task, sign in to the Microsoft 365 admin center.</p>\n",referencesHtml:"<p>https://www.iorad.com/player/1801786/MS-500---ensure-that-a-user-can-perform-searches-and-place-holds-on-mailboxes-</p>\n<ol>\n<li>Open the security and compliance admin center</li>\n<li>Click Permissions</li>\n<li>Scroll down to the eDiscovery Manager role and click on it.</li>\n<li>Click Edit next to the eDiscovery Manager role.</li>\n<li>Click Choose eDiscovery Manager.</li>\n<li>Click Add. Add Jo Gruber the role.</li>\n<li>Click Done then Save then Close.</li>\n</ol>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),x.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,a,i,o="",r="",l=!1,c=t.state.selectedAnswer;n.questions.forEach((function(e,n){l&&(r=e.id,l=!1),t.state.questionId===e.id&&(l=!0,s=e,i=n+1,a&&(o=a.id),s.answered&&(c=s.answered)),a=e})),x.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=S()(n.question),a=S()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:n,questionIdx:i,nextQuestionId:r,previousQuestionId:o,selectedAnswer:c})}))):Object(p.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),x.collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,x.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},v),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:k,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:f,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(u.a,{onClick:this.toggleShowAnswer,style:C},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(u.a,{onClick:this.toggleShowQuestions,style:C},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:C},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=b}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-2-n-e-jrfdv-js-3c43b37506e80fd2e6a7.js.map