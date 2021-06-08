(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{WSOW:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),d=n("3Z9Z"),c=n("JI6e"),u=n("cWnB"),m=n("QojX"),h=n("zM5D"),g=n("MBJH"),y=n("Wbzz"),p=n("Jgta"),w=(n("5x/H"),n("bQ8i")),E=n.n(w),v=p.a.firestore(),f={marginTop:"14px",marginBottom:"14px",display:"flex"},b={display:"flex",alignItems:"center",justifyContent:"center"},x={marginTop:"24px"},A={marginTop:"24px"},S=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return p.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{question:{entityMap:{},blocks:[{text:"Security Requirements - Fabrikam identifies the following security requirements:",depth:0,entityRanges:[],data:{},type:"unstyled",key:"fl2fs",inlineStyleRanges:[{style:"BOLD",length:80,offset:0}]},{type:"unordered-list-item",inlineStyleRanges:[],key:"et94j",entityRanges:[],text:"Access to the Azure Active Directory admin center by the user administrators must be reviewed every seven days. If an administrator fails to respond to an access request within three days, access must be removed",data:{},depth:0},{data:{},key:"el18b",entityRanges:[],inlineStyleRanges:[],type:"unordered-list-item",depth:0,text:"Users who manage Microsoft 365 workloads must only be allowed to perform administrative tasks for up to three hours at a time. Global administrators must be exempt from this requirement"},{key:"43oud",entityRanges:[],data:{},inlineStyleRanges:[],text:"Users must be prevented from inviting external users to view company data. Only global administrators and a user named User1 must be able to send invitations",type:"unordered-list-item",depth:0},{text:"Azure Advanced Threat Protection (ATP) must capture security group modifications for sensitive groups, such as Domain Admins in Active Directory",type:"unordered-list-item",inlineStyleRanges:[],depth:0,entityRanges:[],data:{},key:"da2lu"},{inlineStyleRanges:[],key:"1pf2v",entityRanges:[],text:"Workload administrators must use multi-factor authentication (MFA) when signing in from an anonymous or an unfamiliar location",depth:0,data:{},type:"unordered-list-item"},{text:"The location of the user administrators must be audited when the administrators authenticate to Azure AD",inlineStyleRanges:[],depth:0,data:{},type:"unordered-list-item",key:"4c9k9",entityRanges:[]},{depth:0,entityRanges:[],inlineStyleRanges:[],text:"Email messages that include attachments containing malware must be delivered without the attachment",key:"27g0k",data:{},type:"unordered-list-item"},{key:"a1pub",depth:0,entityRanges:[],data:{},text:"The principle of least privilege must be used whenever possible",type:"unordered-list-item",inlineStyleRanges:[]},{key:"34cn4",type:"unstyled",text:"You need to recommend a solution to protect the sign-ins of Admin1 and Admin2.",data:{},depth:0,inlineStyleRanges:[],entityRanges:[]},{type:"unstyled",key:"49ool",entityRanges:[],depth:0,text:"What should you include in the recommendation?",data:{},inlineStyleRanges:[]}]},answers:[{isCorrectAnswer:!1,value:"A device compliance policy"},{value:"An access review",isCorrectAnswer:!1},{value:"A user risk policy",isCorrectAnswer:!1},{isCorrectAnswer:!0,value:"A sign-in risk policy"}],id:"oMkvkQokY",references:{entityMap:{},blocks:[{data:{},type:"unstyled",key:"ffg0d",text:"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/howto-user-risk-policy",inlineStyleRanges:[],depth:0,entityRanges:[]}]}},previousQuestionId:"",nextQuestionId:"",questionId:"oMkvkQokY",questionIdx:"",questionHtml:"<p><strong>Security Requirements - Fabrikam identifies the following security requirements:</strong></p>\n<ul>\n<li>Access to the Azure Active Directory admin center by the user administrators must be reviewed every seven days. If an administrator fails to respond to an access request within three days, access must be removed</li>\n<li>Users who manage Microsoft 365 workloads must only be allowed to perform administrative tasks for up to three hours at a time. Global administrators must be exempt from this requirement</li>\n<li>Users must be prevented from inviting external users to view company data. Only global administrators and a user named User1 must be able to send invitations</li>\n<li>Azure Advanced Threat Protection (ATP) must capture security group modifications for sensitive groups, such as Domain Admins in Active Directory</li>\n<li>Workload administrators must use multi-factor authentication (MFA) when signing in from an anonymous or an unfamiliar location</li>\n<li>The location of the user administrators must be audited when the administrators authenticate to Azure AD</li>\n<li>Email messages that include attachments containing malware must be delivered without the attachment</li>\n<li>The principle of least privilege must be used whenever possible</li>\n</ul>\n<p>You need to recommend a solution to protect the sign-ins of Admin1 and Admin2.</p>\n<p>What should you include in the recommendation?</p>\n",referencesHtml:"<p>https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/howto-user-risk-policy</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),v.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,a,i,o="",r="",l=!1,d=t.state.selectedAnswer;n.questions.forEach((function(e,n){l&&(r=e.id,l=!1),t.state.questionId===e.id&&(l=!0,s=e,i=n+1,a&&(o=a.id),s.answered&&(d=s.answered)),a=e})),v.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=E()(n.question),a=E()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:n,questionIdx:i,nextQuestionId:r,previousQuestionId:o,selectedAnswer:d})}))):console.log("redirect to login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),v.collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(y.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,v.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(y.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},f),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(d.a,null,o.createElement(c.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(c.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(c.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(d.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(d.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(m.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:b,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(d.a,null,o.createElement(c.a,null,this.state.answerShown?o.createElement("div",{style:x,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(d.a,{className:"align-right"},o.createElement(c.a,{md:8}),o.createElement(c.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(c.a,{md:2},""!==this.state.nextQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(d.a,null,o.createElement(c.a,{xs:12,md:6},o.createElement(u.a,{onClick:this.toggleShowAnswer,style:A},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(c.a,{xs:12,md:6,className:"align-right"},o.createElement(u.a,{onClick:this.toggleShowQuestions,style:A},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(d.a,null,o.createElement(c.a,{className:"align-right"},o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:A},"End Exam"))))),o.createElement(h.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(h.a.Header,null,o.createElement(h.a.Title,null,"Showing Test Questions")),o.createElement(h.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(h.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(h.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(h.a.Header,null,o.createElement(h.a.Title,null,"Are you sure?")),o.createElement(h.a.Body,null,this.state.endExamText),o.createElement(h.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=S}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-o-mkvk-qok-y-js-b34278db2d135e175328.js.map