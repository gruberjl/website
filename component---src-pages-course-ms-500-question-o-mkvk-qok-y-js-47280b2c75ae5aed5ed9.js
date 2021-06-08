(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{WSOW:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),i=n("JX7q"),a=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),d=n("3Z9Z"),c=n("JI6e"),u=n("cWnB"),m=n("QojX"),h=n("zM5D"),g=n("MBJH"),y=n("Wbzz"),p=n("ES5j"),w=n.n(p),E=n("bQ8i"),v=n.n(E),f={marginTop:"14px",marginBottom:"14px",display:"flex"},b={display:"flex",alignItems:"center",justifyContent:"center"},x={marginTop:"24px"},S={marginTop:"24px"},A=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(i.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(i.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(i.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(i.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(i.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(i.a)(n)),n.endExam=n.endExam.bind(Object(i.a)(n));var s=new URLSearchParams(t.location.search);return"undefined"!=typeof window&&w.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{references:{blocks:[{data:{},key:"ffg0d",text:"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/howto-user-risk-policy",entityRanges:[],depth:0,inlineStyleRanges:[],type:"unstyled"}],entityMap:{}},question:{entityMap:{},blocks:[{text:"Security Requirements - Fabrikam identifies the following security requirements:",depth:0,inlineStyleRanges:[{style:"BOLD",offset:0,length:80}],type:"unstyled",key:"fl2fs",entityRanges:[],data:{}},{data:{},entityRanges:[],inlineStyleRanges:[],text:"Access to the Azure Active Directory admin center by the user administrators must be reviewed every seven days. If an administrator fails to respond to an access request within three days, access must be removed",key:"et94j",type:"unordered-list-item",depth:0},{data:{},inlineStyleRanges:[],type:"unordered-list-item",text:"Users who manage Microsoft 365 workloads must only be allowed to perform administrative tasks for up to three hours at a time. Global administrators must be exempt from this requirement",entityRanges:[],key:"el18b",depth:0},{type:"unordered-list-item",data:{},inlineStyleRanges:[],entityRanges:[],depth:0,key:"43oud",text:"Users must be prevented from inviting external users to view company data. Only global administrators and a user named User1 must be able to send invitations"},{type:"unordered-list-item",entityRanges:[],text:"Azure Advanced Threat Protection (ATP) must capture security group modifications for sensitive groups, such as Domain Admins in Active Directory",data:{},inlineStyleRanges:[],depth:0,key:"da2lu"},{entityRanges:[],inlineStyleRanges:[],depth:0,type:"unordered-list-item",key:"1pf2v",text:"Workload administrators must use multi-factor authentication (MFA) when signing in from an anonymous or an unfamiliar location",data:{}},{key:"4c9k9",text:"The location of the user administrators must be audited when the administrators authenticate to Azure AD",entityRanges:[],type:"unordered-list-item",depth:0,data:{},inlineStyleRanges:[]},{type:"unordered-list-item",text:"Email messages that include attachments containing malware must be delivered without the attachment",entityRanges:[],data:{},inlineStyleRanges:[],key:"27g0k",depth:0},{inlineStyleRanges:[],text:"The principle of least privilege must be used whenever possible",data:{},key:"a1pub",depth:0,entityRanges:[],type:"unordered-list-item"},{key:"34cn4",depth:0,text:"You need to recommend a solution to protect the sign-ins of Admin1 and Admin2.",inlineStyleRanges:[],entityRanges:[],data:{},type:"unstyled"},{data:{},depth:0,entityRanges:[],inlineStyleRanges:[],type:"unstyled",text:"What should you include in the recommendation?",key:"49ool"}]},answers:[{value:"A device compliance policy",isCorrectAnswer:!1},{value:"An access review",isCorrectAnswer:!1},{isCorrectAnswer:!1,value:"A user risk policy"},{value:"A sign-in risk policy",isCorrectAnswer:!0}],id:"oMkvkQokY"},previousQuestionId:"",nextQuestionId:"",questionId:"oMkvkQokY",questionIdx:"",questionHtml:"<p><strong>Security Requirements - Fabrikam identifies the following security requirements:</strong></p>\n<ul>\n<li>Access to the Azure Active Directory admin center by the user administrators must be reviewed every seven days. If an administrator fails to respond to an access request within three days, access must be removed</li>\n<li>Users who manage Microsoft 365 workloads must only be allowed to perform administrative tasks for up to three hours at a time. Global administrators must be exempt from this requirement</li>\n<li>Users must be prevented from inviting external users to view company data. Only global administrators and a user named User1 must be able to send invitations</li>\n<li>Azure Advanced Threat Protection (ATP) must capture security group modifications for sensitive groups, such as Domain Admins in Active Directory</li>\n<li>Workload administrators must use multi-factor authentication (MFA) when signing in from an anonymous or an unfamiliar location</li>\n<li>The location of the user administrators must be audited when the administrators authenticate to Azure AD</li>\n<li>Email messages that include attachments containing malware must be delivered without the attachment</li>\n<li>The principle of least privilege must be used whenever possible</li>\n</ul>\n<p>You need to recommend a solution to protect the sign-ins of Admin1 and Admin2.</p>\n<p>What should you include in the recommendation?</p>\n",referencesHtml:"<p>https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/howto-user-risk-policy</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(a.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=w.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var i,a,o,r="",l="",d=!1,c=t.state.selectedAnswer;s.questions.forEach((function(e,n){d&&(l=e.id,d=!1),t.state.questionId===e.id&&(d=!0,i=e,o=n+1,a&&(r=a.id),i.answered&&(c=i.answered)),a=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(i.id).get().then((function(e){var n=e.data();n.id=e.id;var s=v()(n.question),i=v()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:i})})),t.setState({test:s,questionIdx:o,nextQuestionId:l,previousQuestionId:r,selectedAnswer:c})}))):Object(y.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,i=e.target,a=Object(s.a)(this.state.selectedAnswer);if(i.checked)a.push(n);else{var o=a.indexOf(""+n);a.splice(o,1)}this.setState({selectedAnswer:a});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=a),e})),w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(y.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(y.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},f),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(d.a,null,o.createElement(c.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(c.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(c.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(d.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(d.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(m.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:b,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(d.a,null,o.createElement(c.a,null,this.state.answerShown?o.createElement("div",{style:x,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(d.a,{className:"align-right"},o.createElement(c.a,{md:8}),o.createElement(c.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(c.a,{md:2},""!==this.state.nextQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(d.a,null,o.createElement(c.a,{xs:12,md:6},o.createElement(u.a,{onClick:this.toggleShowAnswer,style:S},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(c.a,{xs:12,md:6,className:"align-right"},o.createElement(u.a,{onClick:this.toggleShowQuestions,style:S},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(d.a,null,o.createElement(c.a,{className:"align-right"},o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:S},"End Exam"))))),o.createElement(h.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(h.a.Header,null,o.createElement(h.a.Title,null,"Showing Test Questions")),o.createElement(h.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(h.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(h.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(h.a.Header,null,o.createElement(h.a.Title,null,"Are you sure?")),o.createElement(h.a.Body,null,this.state.endExamText),o.createElement(h.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=A}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-o-mkvk-qok-y-js-47280b2c75ae5aed5ed9.js.map