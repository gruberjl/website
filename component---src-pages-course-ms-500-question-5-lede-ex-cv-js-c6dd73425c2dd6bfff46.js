(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{CAF0:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),p=n("MBJH"),g=n("Wbzz"),y=n("ES5j"),w=n.n(y),E=n("bQ8i"),v=n.n(E),S={marginTop:"14px",marginBottom:"14px",display:"flex"},x={display:"flex",alignItems:"center",justifyContent:"center"},f={marginTop:"24px"},A={marginTop:"24px"},b=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return"undefined"!=typeof window&&w.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{id:"5ledeExCv",references:{blocks:[{type:"unstyled",entityRanges:[],text:"The user sign-ins report provides information on the sign-in pattern of a user, the number of users that have signed in over a week, and the status of these sign-ins.",data:{},key:"18nsd",depth:0,inlineStyleRanges:[]},{key:"6nq7l",type:"unstyled",data:{},inlineStyleRanges:[],text:"Note:",depth:0,entityRanges:[]},{type:"unstyled",depth:0,entityRanges:[],data:{},inlineStyleRanges:[],text:"There are several versions of this question in the exam. The question has two possible correct answers:",key:"6fpc1"},{key:"e0eiv",inlineStyleRanges:[],type:"unstyled",depth:0,data:{},text:"1. From the Enterprise applications blade of the Azure Active Directory admin center view the sign-ins.",entityRanges:[]},{entityRanges:[],depth:0,inlineStyleRanges:[],text:"2. From the Azure Active Directory admin center, view the sign-ins.",data:{},key:"7dsoj",type:"unstyled"},{inlineStyleRanges:[],text:"Other incorrect answer options you may see on the exam include the following:",entityRanges:[],depth:0,data:{},type:"unstyled",key:"b1dkm"},{key:"2nno3",data:{},type:"unstyled",text:"1. From the Enterprise applications blade of the Azure Active Directory admin center view the audit logs.",entityRanges:[],depth:0,inlineStyleRanges:[]},{key:"b4i46",data:{},text:"2. From the Azure Active Directory admin center, view the audit logs.",entityRanges:[],type:"unstyled",inlineStyleRanges:[],depth:0},{depth:0,type:"unstyled",inlineStyleRanges:[],text:"https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins",entityRanges:[],key:"e7m5a",data:{}}],entityMap:{}},question:{blocks:[{inlineStyleRanges:[],key:"3d6td",text:"You have a Microsoft 365 E5 subscription.",data:{},type:"unstyled",depth:0,entityRanges:[]},{depth:0,text:"Some users are required to use an authenticator app to access Microsoft SharePoint Online.",inlineStyleRanges:[],entityRanges:[],key:"56pai",data:{},type:"unstyled"},{entityRanges:[],key:"f5jt4",depth:0,data:{},inlineStyleRanges:[],type:"unstyled",text:"You need to view which users have used an authenticator app to access SharePoint Online. The solution must minimize costs."},{data:{},key:"9ses4",entityRanges:[],inlineStyleRanges:[],type:"unstyled",depth:0,text:"What should you do?"}],entityMap:{}},answers:[{value:"From the Security & Compliance admin center, download a report.",isCorrectAnswer:!1},{value:"From Azure Log Analytics, query the logs.",isCorrectAnswer:!1},{isCorrectAnswer:!1,value:"From the Security & Compliance admin center, perform an audit log search."},{isCorrectAnswer:!0,value:"From the Enterprise applications blade of the Azure Active Directory admin center, view the sign-ins."}]},previousQuestionId:"",nextQuestionId:"",questionId:"5ledeExCv",questionIdx:"",questionHtml:"<p>You have a Microsoft 365 E5 subscription.</p>\n<p>Some users are required to use an authenticator app to access Microsoft SharePoint Online.</p>\n<p>You need to view which users have used an authenticator app to access SharePoint Online. The solution must minimize costs.</p>\n<p>What should you do?</p>\n",referencesHtml:"<p>The user sign-ins report provides information on the sign-in pattern of a user, the number of users that have signed in over a week, and the status of these sign-ins.</p>\n<p>Note:</p>\n<p>There are several versions of this question in the exam. The question has two possible correct answers:</p>\n<p>1. From the Enterprise applications blade of the Azure Active Directory admin center view the sign-ins.</p>\n<p>2. From the Azure Active Directory admin center, view the sign-ins.</p>\n<p>Other incorrect answer options you may see on the exam include the following:</p>\n<p>1. From the Enterprise applications blade of the Azure Active Directory admin center view the audit logs.</p>\n<p>2. From the Azure Active Directory admin center, view the audit logs.</p>\n<p>https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=w.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,i,o,r="",l="",c=!1,d=t.state.selectedAnswer;s.questions.forEach((function(e,n){c&&(l=e.id,c=!1),t.state.questionId===e.id&&(c=!0,a=e,o=n+1,i&&(r=i.id),a.answered&&(d=a.answered)),i=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=v()(n.question),a=v()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:o,nextQuestionId:l,previousQuestionId:r,selectedAnswer:d})}))):Object(g.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(g.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(g.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},S),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:x,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:f,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(u.a,{onClick:this.toggleShowAnswer,style:A},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(u.a,{onClick:this.toggleShowQuestions,style:A},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:A},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(p.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=b}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-5-lede-ex-cv-js-c6dd73425c2dd6bfff46.js.map