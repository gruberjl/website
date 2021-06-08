(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{RNGX:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),y=n("ES5j"),w=n.n(y),E=n("bQ8i"),v=n.n(E),f={marginTop:"14px",marginBottom:"14px",display:"flex"},S={display:"flex",alignItems:"center",justifyContent:"center"},x={marginTop:"24px"},A={marginTop:"24px"},q=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return"undefined"!=typeof window&&w.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{question:{entityMap:{},blocks:[{text:"You have a Microsoft 365 E5 subscription.",entityRanges:[],data:{},depth:0,type:"unstyled",inlineStyleRanges:[],key:"f6avo"},{key:"8qbsp",entityRanges:[],text:"Some users are required to use an authenticator app to access Microsoft SharePoint Online.",data:{},depth:0,type:"unstyled",inlineStyleRanges:[]},{data:{},text:"You need to view which users have used an authenticator app to access SharePoint Online. The solution must minimize costs.",inlineStyleRanges:[],entityRanges:[],key:"fb7q",type:"unstyled",depth:0},{key:"2adq3",text:"What should you do?",inlineStyleRanges:[],entityRanges:[],type:"unstyled",data:{},depth:0}]},id:"smKhO3hD_",answers:[{isCorrectAnswer:!0,value:"From the Azure Active Directory admin center, view the sign-ins."},{value:"From the Security & Compliance admin center, download a report.",isCorrectAnswer:!1},{isCorrectAnswer:!1,value:"From the Enterprise applications blade of the Azure Active Directory admin center, view the audit logs."},{value:"From the Azure Active Directory admin center, view the authentication methods.",isCorrectAnswer:!1}],references:{entityMap:{},blocks:[{text:"The user sign-ins report provides information on the sign-in pattern of a user, the number of users that have signed in over a week, and the status of these sign- ins.",entityRanges:[],depth:0,key:"4at2l",data:{},type:"unstyled",inlineStyleRanges:[]},{type:"unstyled",entityRanges:[],key:"ds5vt",text:"Note:",depth:0,inlineStyleRanges:[{style:"BOLD",length:4,offset:0}],data:{}},{key:"36ilt",data:{},depth:0,text:"There are several versions of this question in the exam. The question has two possible correct answers:",entityRanges:[],inlineStyleRanges:[],type:"unstyled"},{inlineStyleRanges:[],data:{},depth:0,key:"fcce4",type:"ordered-list-item",text:"From the Enterprise applications blade of the Azure Active Directory admin center, view the sign-ins.",entityRanges:[]},{depth:0,type:"ordered-list-item",data:{},entityRanges:[],key:"54o6n",inlineStyleRanges:[],text:"From the Azure Active Directory admin center, view the sign-ins."},{entityRanges:[],data:{},depth:0,key:"cqqvv",type:"unstyled",text:"Other incorrect answer options you may see on the exam include the following:",inlineStyleRanges:[]},{entityRanges:[],data:{},type:"ordered-list-item",inlineStyleRanges:[],text:"From Azure Log Analytics, query the logs.",key:"8n50b",depth:0},{inlineStyleRanges:[],type:"ordered-list-item",key:"anl57",entityRanges:[],depth:0,text:"From the Security & Compliance admin center, perform an audit log search.",data:{}},{depth:0,text:"Reference:",key:"ehkfk",entityRanges:[],data:{},type:"unstyled",inlineStyleRanges:[{offset:0,style:"BOLD",length:9}]},{text:"https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins",depth:0,data:{},entityRanges:[],inlineStyleRanges:[],type:"unstyled",key:"4pavl"}]}},previousQuestionId:"",nextQuestionId:"",questionId:"smKhO3hD_",questionIdx:"",questionHtml:"<p>You have a Microsoft 365 E5 subscription.</p>\n<p>Some users are required to use an authenticator app to access Microsoft SharePoint Online.</p>\n<p>You need to view which users have used an authenticator app to access SharePoint Online. The solution must minimize costs.</p>\n<p>What should you do?</p>\n",referencesHtml:"<p>The user sign-ins report provides information on the sign-in pattern of a user, the number of users that have signed in over a week, and the status of these sign- ins.</p>\n<p><strong>Note</strong>:</p>\n<p>There are several versions of this question in the exam. The question has two possible correct answers:</p>\n<ol>\n<li>From the Enterprise applications blade of the Azure Active Directory admin center, view the sign-ins.</li>\n<li>From the Azure Active Directory admin center, view the sign-ins.</li>\n</ol>\n<p>Other incorrect answer options you may see on the exam include the following:</p>\n<ol>\n<li>From Azure Log Analytics, query the logs.</li>\n<li>From the Security &amp; Compliance admin center, perform an audit log search.</li>\n</ol>\n<p><strong>Reference</strong>:</p>\n<p>https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=w.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,i,o,r="",l="",c=!1,d=t.state.selectedAnswer;s.questions.forEach((function(e,n){c&&(l=e.id,c=!1),t.state.questionId===e.id&&(c=!0,a=e,o=n+1,i&&(r=i.id),a.answered&&(d=a.answered)),i=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=v()(n.question),a=v()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:o,nextQuestionId:l,previousQuestionId:r,selectedAnswer:d})}))):Object(p.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},f),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:S,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:x,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(u.a,{onClick:this.toggleShowAnswer,style:A},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(u.a,{onClick:this.toggleShowQuestions,style:A},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:A},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=q}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-sm-kh-o-3-h-d-js-5f40518d4ae42f428be6.js.map