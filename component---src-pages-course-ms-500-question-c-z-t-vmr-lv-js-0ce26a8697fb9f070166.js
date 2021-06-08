(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{m5qY:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),o=n("dI71"),i=n("q1tI"),r=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),E=n("ES5j"),w=n.n(E),y=n("bQ8i"),x=n.n(y),S={marginTop:"14px",marginBottom:"14px",display:"flex"},f={display:"flex",alignItems:"center",justifyContent:"center"},v={marginTop:"24px"},A={marginTop:"24px"},b=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return"undefined"!=typeof window&&w.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{question:{blocks:[{entityRanges:[],data:{},depth:0,key:"b9tm7",inlineStyleRanges:[],text:"You have a Microsoft 365 E5 subscription.",type:"unstyled"},{key:"bi0g3",text:"From Microsoft Azure Active Directory (Azure AD), you create a security group named Group1. You add 10 users to Group1.",data:{},entityRanges:[],inlineStyleRanges:[],depth:0,type:"unstyled"},{key:"fn1r0",type:"unstyled",entityRanges:[],depth:0,text:"You need to apply app-enforced restrictions to the members of Group1 when they connect to Microsoft Exchange Online from non-compliant devices, regardless of their location.",data:{},inlineStyleRanges:[]},{data:{},text:"What should you do?",entityRanges:[],inlineStyleRanges:[],depth:0,key:"4ttei",type:"unstyled"},{data:{},entityRanges:[],depth:0,text:"NOTE: Each correct selection is worth one point.",inlineStyleRanges:[],key:"cve9q",type:"unstyled"}],entityMap:{}},answers:[{isCorrectAnswer:!1,value:"From the Azure portal, create a conditional access policy and configure: Users and groups, Cloud apps, and Sessions settings"},{value:"From the Azure portal, create a conditional access policy and configure: Users and groups, Cloud apps, and Conditions settings",isCorrectAnswer:!0},{value:"From the Azure portal, create a conditional access policy and configure: Users and groups, Conditions, and Session settings",isCorrectAnswer:!1},{value:"From an Exchange Online Remote PowerShell session run: New-OwaMailbox Policy and Set-OwaMailboxPolicy",isCorrectAnswer:!0},{isCorrectAnswer:!1,value:"From an Exchange Online Remote PowerShell session run: New-ClientAccessRule and Test-ClientAccessRule"},{value:"From an Exchange Online Remote PowerShell session run: Get-CASMailbox and Set-CASMailbox",isCorrectAnswer:!1}],id:"C-zTVmrLV",references:{blocks:[{entityRanges:[],inlineStyleRanges:[],depth:0,key:"2cl7a",text:"https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/app-based-conditional-access",type:"unstyled",data:{}}],entityMap:{}}},previousQuestionId:"",nextQuestionId:"",questionId:"C-zTVmrLV",questionIdx:"",questionHtml:"<p>You have a Microsoft 365 E5 subscription.</p>\n<p>From Microsoft Azure Active Directory (Azure AD), you create a security group named Group1. You add 10 users to Group1.</p>\n<p>You need to apply app-enforced restrictions to the members of Group1 when they connect to Microsoft Exchange Online from non-compliant devices, regardless of their location.</p>\n<p>What should you do?</p>\n<p>NOTE: Each correct selection is worth one point.</p>\n",referencesHtml:"<p>https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/app-based-conditional-access</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(o.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=w.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,o,i,r="",l="",c=!1,d=t.state.selectedAnswer;s.questions.forEach((function(e,n){c&&(l=e.id,c=!1),t.state.questionId===e.id&&(c=!0,a=e,i=n+1,o&&(r=o.id),a.answered&&(d=a.answered)),o=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=x()(n.question),a=x()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:i,nextQuestionId:l,previousQuestionId:r,selectedAnswer:d})}))):Object(p.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,o=Object(s.a)(this.state.selectedAnswer);if(a.checked)o.push(n);else{var i=o.indexOf(""+n);o.splice(i,1)}this.setState({selectedAnswer:o});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=o),e})),w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},S),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),i.createElement(r.a,null,i.createElement("main",null,i.createElement("div",null,i.createElement(l.a,null,i.createElement(c.a,null,i.createElement(d.a,{md:8},i.createElement("h1",null,"Question ",this.state.questionIdx)),i.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?i.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),i.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?i.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):i.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),i.createElement(c.a,null,""!==this.state.questionHtml?i.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),i.createElement(c.a,null,t.map((function(t,n){return i.createElement("div",{style:t.optionStyles,key:n},i.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:f,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),i.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),i.createElement(c.a,null,i.createElement(d.a,null,this.state.answerShown?i.createElement("div",{style:v,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),i.createElement(c.a,{className:"align-right"},i.createElement(d.a,{md:8}),i.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?i.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),i.createElement(d.a,{md:2},""!==this.state.nextQuestionId?i.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):i.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),i.createElement(c.a,null,i.createElement(d.a,{xs:12,md:6},i.createElement(u.a,{onClick:this.toggleShowAnswer,style:A},this.state.answerShown?i.createElement("span",null,"Hide Answer"):i.createElement("span",null,"Show Answer"))),i.createElement(d.a,{xs:12,md:6,className:"align-right"},i.createElement(u.a,{onClick:this.toggleShowQuestions,style:A},this.state.questionsShown?i.createElement("span",null,"Hide Question List"):i.createElement("span",null,"Show Question List")))),i.createElement(c.a,null,i.createElement(d.a,{className:"align-right"},i.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:A},"End Exam"))))),i.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},i.createElement(m.a.Header,null,i.createElement(m.a.Title,null,"Showing Test Questions")),i.createElement(m.a.Body,null,i.createElement(g.a,{striped:!0,bordered:!0,hover:!0},i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"#"),i.createElement("th",null,"Answer"))),i.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return i.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},i.createElement("td",null,n+1),i.createElement("td",null,t.answered))})):""))),i.createElement(m.a.Footer,null,i.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),i.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},i.createElement(m.a.Header,null,i.createElement(m.a.Title,null,"Are you sure?")),i.createElement(m.a.Body,null,this.state.endExamText),i.createElement(m.a.Footer,null,i.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),i.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(i.Component);t.default=b}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-c-z-t-vmr-lv-js-0ce26a8697fb9f070166.js.map