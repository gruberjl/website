(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"ptr+":function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),d=n("3Z9Z"),u=n("JI6e"),c=n("cWnB"),m=n("QojX"),h=n("zM5D"),g=n("MBJH"),y=n("Wbzz"),p=n("ES5j"),w=n.n(p),E=(n("5x/H"),n("bQ8i")),v=n.n(E),f=w.a.firestore(),b={marginTop:"14px",marginBottom:"14px",display:"flex"},A={display:"flex",alignItems:"center",justifyContent:"center"},x={marginTop:"24px"},S={marginTop:"24px"},k=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return w.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{question:{blocks:[{entityRanges:[],inlineStyleRanges:[],depth:0,data:{},text:"Fabrikam identifies the following security requirements:",key:"376vd",type:"unstyled"},{data:{},type:"unstyled",inlineStyleRanges:[],entityRanges:[],depth:0,key:"5f2ru",text:"Access to the Azure Active Directory admin center by the user administrators must be reviewed every seven days. If an administrator fails to respond to an access request within three days, access must be removed"},{depth:0,key:"aed28",entityRanges:[],inlineStyleRanges:[],data:{},text:"Users who manage Microsoft 365 workloads must only be allowed to perform administrative tasks for up to three hours at a time. Global administrators must be exempt from this requirement",type:"unstyled"},{entityRanges:[],depth:0,text:"Users must be prevented from inviting external users to view company data. Only global administrators and a user named User1 must be able to send invitations",key:"c6tie",type:"unstyled",inlineStyleRanges:[],data:{}},{entityRanges:[],type:"unstyled",key:"992ab",text:"Azure Advanced Threat Protection (ATP) must capture security group modifications for sensitive groups, such as Domain Admins in Active Directory",data:{},depth:0,inlineStyleRanges:[]},{type:"unstyled",inlineStyleRanges:[],entityRanges:[],data:{},text:"Workload administrators must use multi-factor authentication (MFA) when signing in from an anonymous or an unfamiliar location",depth:0,key:"9cdtf"},{inlineStyleRanges:[],data:{},text:"The location of the user administrators must be audited when the administrators authenticate to Azure AD",type:"unstyled",key:"17bn8",entityRanges:[],depth:0},{depth:0,type:"unstyled",key:"flaee",text:"Email messages that include attachments containing malware must be delivered without the attachment",inlineStyleRanges:[],entityRanges:[],data:{}},{type:"unstyled",inlineStyleRanges:[],data:{},key:"4habl",text:"The principle of least privilege must be used whenever possible",entityRanges:[],depth:0},{depth:0,entityRanges:[],type:"unstyled",inlineStyleRanges:[],key:"stm8",text:"An administrator configures Azure AD Privileged Identity Management as shown in the following exhibit.",data:{}},{depth:0,key:"1b5s7",entityRanges:[{key:0,offset:0,length:1}],data:{},text:" ",type:"atomic",inlineStyleRanges:[]},{key:"a2q2u",entityRanges:[],type:"unstyled",depth:0,data:{},inlineStyleRanges:[],text:""},{depth:0,key:"14f2n",entityRanges:[{key:1,length:1,offset:0}],text:" ",type:"atomic",inlineStyleRanges:[],data:{}},{text:"What should you do to meet the security requirements?",depth:0,data:{},inlineStyleRanges:[],entityRanges:[],key:"dsva5",type:"unstyled"}],entityMap:{0:{type:"IMAGE",mutability:"MUTABLE",data:{alt:"Active Assignments",height:"auto",alignment:"left",width:"auto",src:"https://i.ibb.co/5cPfF5D/Active-Assignments.png"}},1:{mutability:"MUTABLE",data:{height:"auto",alignment:"left",width:"auto",alt:"Eligible Assignments",src:"https://i.ibb.co/N609WF4/Eligible-Assignments.png"},type:"IMAGE"}}},references:{blocks:[{depth:0,key:"dctl8",text:"",data:{},type:"unstyled",inlineStyleRanges:[],entityRanges:[]}],entityMap:{}},id:"8HIVdM93U",answers:[{value:"Change the Assignment Type for Admin2 to Permanent",isCorrectAnswer:!1},{value:"From the Azure Active Directory admin center, assign the Exchange administrator role to Admin2",isCorrectAnswer:!1},{isCorrectAnswer:!1,value:"From the Azure Active Directory admin center, remove the Exchange administrator role to Admin1"},{value:"Change the Assignment Type for Admin1 to Eligible",isCorrectAnswer:!0}]},previousQuestionId:"",nextQuestionId:"",questionId:"8HIVdM93U",questionIdx:"",questionHtml:'<p>Fabrikam identifies the following security requirements:</p>\n<p>Access to the Azure Active Directory admin center by the user administrators must be reviewed every seven days. If an administrator fails to respond to an access request within three days, access must be removed</p>\n<p>Users who manage Microsoft 365 workloads must only be allowed to perform administrative tasks for up to three hours at a time. Global administrators must be exempt from this requirement</p>\n<p>Users must be prevented from inviting external users to view company data. Only global administrators and a user named User1 must be able to send invitations</p>\n<p>Azure Advanced Threat Protection (ATP) must capture security group modifications for sensitive groups, such as Domain Admins in Active Directory</p>\n<p>Workload administrators must use multi-factor authentication (MFA) when signing in from an anonymous or an unfamiliar location</p>\n<p>The location of the user administrators must be audited when the administrators authenticate to Azure AD</p>\n<p>Email messages that include attachments containing malware must be delivered without the attachment</p>\n<p>The principle of least privilege must be used whenever possible</p>\n<p>An administrator configures Azure AD Privileged Identity Management as shown in the following exhibit.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/5cPfF5D/Active-Assignments.png" alt="Active Assignments" style="height: auto;width: auto"/></div>\n<p></p>\n<div style="text-align:left;"><img src="https://i.ibb.co/N609WF4/Eligible-Assignments.png" alt="Eligible Assignments" style="height: auto;width: auto"/></div>\n<p>What should you do to meet the security requirements?</p>\n',referencesHtml:"<p></p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),f.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,a,i,o="",r="",l=!1,d=t.state.selectedAnswer;n.questions.forEach((function(e,n){l&&(r=e.id,l=!1),t.state.questionId===e.id&&(l=!0,s=e,i=n+1,a&&(o=a.id),s.answered&&(d=s.answered)),a=e})),f.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=v()(n.question),a=v()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:n,questionIdx:i,nextQuestionId:r,previousQuestionId:o,selectedAnswer:d})}))):Object(y.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),f.collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(y.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,f.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(y.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},b),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(d.a,null,o.createElement(u.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(u.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(c.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(u.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(c.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(c.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(d.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(d.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(m.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:A,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(d.a,null,o.createElement(u.a,null,this.state.answerShown?o.createElement("div",{style:x,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(d.a,{className:"align-right"},o.createElement(u.a,{md:8}),o.createElement(u.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(c.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(u.a,{md:2},""!==this.state.nextQuestionId?o.createElement(c.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(c.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(d.a,null,o.createElement(u.a,{xs:12,md:6},o.createElement(c.a,{onClick:this.toggleShowAnswer,style:S},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(u.a,{xs:12,md:6,className:"align-right"},o.createElement(c.a,{onClick:this.toggleShowQuestions,style:S},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(d.a,null,o.createElement(u.a,{className:"align-right"},o.createElement(c.a,{onClick:this.toggleEndExam,variant:"warning",style:S},"End Exam"))))),o.createElement(h.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(h.a.Header,null,o.createElement(h.a.Title,null,"Showing Test Questions")),o.createElement(h.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(h.a.Footer,null,o.createElement(c.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(h.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(h.a.Header,null,o.createElement(h.a.Title,null,"Are you sure?")),o.createElement(h.a.Body,null,this.state.endExamText),o.createElement(h.a.Footer,null,o.createElement(c.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(c.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=k}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-8-hi-vd-m-93-u-js-eef80163658cdd33ecf7.js.map