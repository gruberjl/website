(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"5azj":function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),r=n("q1tI"),o=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),u=n("JI6e"),d=n("cWnB"),m=n("QojX"),h=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),y=n("ES5j"),w=n.n(y),E=(n("5x/H"),n("bQ8i")),v=n.n(E),f=w.a.firestore(),b={marginTop:"14px",marginBottom:"14px",display:"flex"},x={display:"flex",alignItems:"center",justifyContent:"center"},S={marginTop:"24px"},A={marginTop:"24px"},k=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return w.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{references:{blocks:[{key:"ao1ti",entityRanges:[],depth:0,inlineStyleRanges:[],data:{},type:"unstyled",text:""}],entityMap:{}},id:"HHipoVYNs",question:{entityMap:{},blocks:[{key:"312gb",text:"Security Requirements: Fabrikam identifies the following security requirements:",data:{},entityRanges:[],inlineStyleRanges:[{length:23,offset:0,style:"BOLD"}],depth:0,type:"unstyled"},{text:"Access to the Azure Active Directory admin center by the user administrators must be reviewed every seven days. If an administrator fails to respond to an access request within three days, access must be removed",type:"unordered-list-item",inlineStyleRanges:[],entityRanges:[],data:{},key:"c0t0v",depth:0},{inlineStyleRanges:[],text:"Users who manage Microsoft 365 workloads must only be allowed to perform administrative tasks for up to three hours at a time. Global administrators must be exempt from this requirement",type:"unordered-list-item",key:"4kl8j",data:{},entityRanges:[],depth:0},{text:"Users must be prevented from inviting external users to view company data. Only global administrators and a user named User1 must be able to send invitations",data:{},inlineStyleRanges:[],entityRanges:[],key:"7n342",depth:0,type:"unordered-list-item"},{key:"4v2gu",type:"unordered-list-item",inlineStyleRanges:[],entityRanges:[],data:{},depth:0,text:"Azure Advanced Threat Protection (ATP) must capture security group modifications for sensitive groups, such as Domain Admins in Active Directory"},{key:"c5gnj",entityRanges:[],inlineStyleRanges:[],text:"Workload administrators must use multi-factor authentication (MFA) when signing in from an anonymous or an unfamiliar location",data:{},type:"unordered-list-item",depth:0},{text:"The location of the user administrators must be audited when the administrators authenticate to Azure AD",type:"unordered-list-item",entityRanges:[],key:"cmhvm",inlineStyleRanges:[],data:{},depth:0},{data:{},inlineStyleRanges:[],key:"ad81j",type:"unordered-list-item",entityRanges:[],depth:0,text:"Email messages that include attachments containing malware must be delivered without the attachment"},{depth:0,text:"The principle of least privilege must be used whenever possible",entityRanges:[],inlineStyleRanges:[],type:"unordered-list-item",data:{},key:"3v1so"},{text:"You plan to configure an access review to meet the security requirements for the workload administrators. You create an access review policy and specify the scope and a group.",entityRanges:[],key:"f6ml2",data:{},inlineStyleRanges:[],depth:0,type:"unstyled"},{key:"8jjma",type:"unstyled",depth:0,entityRanges:[],inlineStyleRanges:[],text:"Which other settings should you configure? To answer, select the appropriate options in the answer area.",data:{}}]},answers:[{value:"Set the frequency to One time",isCorrectAnswer:!1},{isCorrectAnswer:!0,value:"Set the frequency to Weekly"},{value:"Set the frequency to Monthly",isCorrectAnswer:!1},{value:"To ensure that access is removed if an administrator fails to respond, configure the: Upon completion settings",isCorrectAnswer:!0},{value:"To ensure that access is removed if an administrator fails to respond, configure the: Advanced settings",isCorrectAnswer:!1},{value:"To ensure that access is removed if an administrator fails to respond, configure the: Programs",isCorrectAnswer:!1},{isCorrectAnswer:!1,value:"To ensure that access is removed if an administrator fails to respond, configure the: Reviewers"}]},previousQuestionId:"",nextQuestionId:"",questionId:"HHipoVYNs",questionIdx:"",questionHtml:"<p><strong>Security Requirements: </strong>Fabrikam identifies the following security requirements:</p>\n<ul>\n<li>Access to the Azure Active Directory admin center by the user administrators must be reviewed every seven days. If an administrator fails to respond to an access request within three days, access must be removed</li>\n<li>Users who manage Microsoft 365 workloads must only be allowed to perform administrative tasks for up to three hours at a time. Global administrators must be exempt from this requirement</li>\n<li>Users must be prevented from inviting external users to view company data. Only global administrators and a user named User1 must be able to send invitations</li>\n<li>Azure Advanced Threat Protection (ATP) must capture security group modifications for sensitive groups, such as Domain Admins in Active Directory</li>\n<li>Workload administrators must use multi-factor authentication (MFA) when signing in from an anonymous or an unfamiliar location</li>\n<li>The location of the user administrators must be audited when the administrators authenticate to Azure AD</li>\n<li>Email messages that include attachments containing malware must be delivered without the attachment</li>\n<li>The principle of least privilege must be used whenever possible</li>\n</ul>\n<p>You plan to configure an access review to meet the security requirements for the workload administrators. You create an access review policy and specify the scope and a group.</p>\n<p>Which other settings should you configure? To answer, select the appropriate options in the answer area.</p>\n",referencesHtml:"<p></p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),f.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,a,i,r="",o="",l=!1,c=t.state.selectedAnswer;n.questions.forEach((function(e,n){l&&(o=e.id,l=!1),t.state.questionId===e.id&&(l=!0,s=e,i=n+1,a&&(r=a.id),s.answered&&(c=s.answered)),a=e})),f.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=v()(n.question),a=v()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:n,questionIdx:i,nextQuestionId:o,previousQuestionId:r,selectedAnswer:c})}))):Object(p.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var r=i.indexOf(""+n);i.splice(r,1)}this.setState({selectedAnswer:i});var o=Object.assign({},this.state.test);o.questions=o.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),f.collection("users").doc(this.state.uid).collection("tests").doc(o.id).set(o),this.setState({test:o})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,f.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},b),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),r.createElement(o.a,null,r.createElement("main",null,r.createElement("div",null,r.createElement(l.a,null,r.createElement(c.a,null,r.createElement(u.a,{md:8},r.createElement("h1",null,"Question ",this.state.questionIdx)),r.createElement(u.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),r.createElement(u.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):r.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),r.createElement(c.a,null,""!==this.state.questionHtml?r.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),r.createElement(c.a,null,t.map((function(t,n){return r.createElement("div",{style:t.optionStyles,key:n},r.createElement(m.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:x,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),r.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),r.createElement(c.a,null,r.createElement(u.a,null,this.state.answerShown?r.createElement("div",{style:S,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),r.createElement(c.a,{className:"align-right"},r.createElement(u.a,{md:8}),r.createElement(u.a,{md:2}," ",""!==this.state.previousQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),r.createElement(u.a,{md:2},""!==this.state.nextQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):r.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),r.createElement(c.a,null,r.createElement(u.a,{xs:12,md:6},r.createElement(d.a,{onClick:this.toggleShowAnswer,style:A},this.state.answerShown?r.createElement("span",null,"Hide Answer"):r.createElement("span",null,"Show Answer"))),r.createElement(u.a,{xs:12,md:6,className:"align-right"},r.createElement(d.a,{onClick:this.toggleShowQuestions,style:A},this.state.questionsShown?r.createElement("span",null,"Hide Question List"):r.createElement("span",null,"Show Question List")))),r.createElement(c.a,null,r.createElement(u.a,{className:"align-right"},r.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning",style:A},"End Exam"))))),r.createElement(h.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},r.createElement(h.a.Header,null,r.createElement(h.a.Title,null,"Showing Test Questions")),r.createElement(h.a.Body,null,r.createElement(g.a,{striped:!0,bordered:!0,hover:!0},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"#"),r.createElement("th",null,"Answer"))),r.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return r.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},r.createElement("td",null,n+1),r.createElement("td",null,t.answered))})):""))),r.createElement(h.a.Footer,null,r.createElement(d.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),r.createElement(h.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},r.createElement(h.a.Header,null,r.createElement(h.a.Title,null,"Are you sure?")),r.createElement(h.a.Body,null,this.state.endExamText),r.createElement(h.a.Footer,null,r.createElement(d.a,{variant:"primary",onClick:this.endExam},"Yes"),r.createElement(d.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(r.Component);t.default=k}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-h-hipo-vy-ns-js-63e22a4357b9dc099d59.js.map