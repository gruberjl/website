(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{"6GOP":function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),o=n("dI71"),i=n("q1tI"),r=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),E=n("Jgta"),w=(n("5x/H"),n("bQ8i")),v=n.n(w),y=E.a.firestore(),S={marginTop:"14px",marginBottom:"14px",display:"flex"},x={display:"flex",alignItems:"center",justifyContent:"center"},A={marginTop:"24px"},b={marginTop:"24px"},f=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return E.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{answers:[{value:"On VPN1: Configure and authentication provider.",isCorrectAnswer:!1},{isCorrectAnswer:!0,value:"On VPN1: Configure an accounting provider."},{value:"On VPN1: Create a connection request policy",isCorrectAnswer:!1},{isCorrectAnswer:!1,value:"On VPN1: Create a RADIUS client."},{isCorrectAnswer:!1,value:"One Server1, enabled the following inbound port: 443"},{value:"One Server1, enabled the following inbound port: 1723",isCorrectAnswer:!1},{isCorrectAnswer:!0,value:"One Server1, enabled the following inbound port: 1813"},{isCorrectAnswer:!1,value:"One Server1, enabled the following inbound port: 8080"},{isCorrectAnswer:!1,value:"One Server1, enabled the following inbound port: 8531"}],references:{blocks:[{inlineStyleRanges:[],entityRanges:[],key:"d1ihq",depth:0,text:"https://docs.microsoft.com/en-us/azure-advanced-threat-protection/install-atp-step6-vpn",type:"unstyled",data:{}}],entityMap:{}},id:"ne1Cl3a38",question:{entityMap:{},blocks:[{inlineStyleRanges:[],entityRanges:[],key:"ctt8t",text:"Your network contains an Active Directory domain named contoso.com. The domain contains a VPN server named VPN1 that runs Windows Server 2016 and has the Remote Access server role installed.",depth:0,type:"unstyled",data:{}},{entityRanges:[],type:"unstyled",depth:0,key:"1quvv",data:{},inlineStyleRanges:[],text:"You have a Microsoft Azure subscription."},{key:"am3ap",data:{},type:"unstyled",text:"You are deploying Azure Advanced Threat Protection (ATP).",inlineStyleRanges:[],entityRanges:[],depth:0},{data:{},text:"You install an Azure ATP standalone sensor on a server named Server1 that runs Windows Server 2016.",key:"798kf",inlineStyleRanges:[],entityRanges:[],type:"unstyled",depth:0},{key:"df6j8",inlineStyleRanges:[],entityRanges:[],text:"You need to integrate the VPN and Azure ATP.",type:"unstyled",data:{},depth:0},{data:{},text:"What should you do?",key:"3iban",inlineStyleRanges:[],type:"unstyled",entityRanges:[],depth:0},{entityRanges:[],inlineStyleRanges:[],text:"NOTE: Each correct selection is worth one point.",key:"86b0e",data:{},depth:0,type:"unstyled"}]}},previousQuestionId:"",nextQuestionId:"",questionId:"ne1Cl3a38",questionIdx:"",questionHtml:"<p>Your network contains an Active Directory domain named contoso.com. The domain contains a VPN server named VPN1 that runs Windows Server 2016 and has the Remote Access server role installed.</p>\n<p>You have a Microsoft Azure subscription.</p>\n<p>You are deploying Azure Advanced Threat Protection (ATP).</p>\n<p>You install an Azure ATP standalone sensor on a server named Server1 that runs Windows Server 2016.</p>\n<p>You need to integrate the VPN and Azure ATP.</p>\n<p>What should you do?</p>\n<p>NOTE: Each correct selection is worth one point.</p>\n",referencesHtml:"<p>https://docs.microsoft.com/en-us/azure-advanced-threat-protection/install-atp-step6-vpn</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(o.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),y.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,a,o,i="",r="",l=!1,c=t.state.selectedAnswer;n.questions.forEach((function(e,n){l&&(r=e.id,l=!1),t.state.questionId===e.id&&(l=!0,s=e,o=n+1,a&&(i=a.id),s.answered&&(c=s.answered)),a=e})),y.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=v()(n.question),a=v()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:n,questionIdx:o,nextQuestionId:r,previousQuestionId:i,selectedAnswer:c})}))):console.log("redirect to login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,o=Object(s.a)(this.state.selectedAnswer);if(a.checked)o.push(n);else{var i=o.indexOf(""+n);o.splice(i,1)}this.setState({selectedAnswer:o});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=o),e})),y.collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,y.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},S),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),i.createElement(r.a,null,i.createElement("main",null,i.createElement("div",null,i.createElement(l.a,null,i.createElement(c.a,null,i.createElement(d.a,{md:8},i.createElement("h1",null,"Question ",this.state.questionIdx)),i.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?i.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),i.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?i.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):i.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),i.createElement(c.a,null,""!==this.state.questionHtml?i.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),i.createElement(c.a,null,t.map((function(t,n){return i.createElement("div",{style:t.optionStyles,key:n},i.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:x,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),i.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),i.createElement(c.a,null,i.createElement(d.a,null,this.state.answerShown?i.createElement("div",{style:A,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),i.createElement(c.a,{className:"align-right"},i.createElement(d.a,{md:8}),i.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?i.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),i.createElement(d.a,{md:2},""!==this.state.nextQuestionId?i.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):i.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),i.createElement(c.a,null,i.createElement(d.a,{xs:12,md:6},i.createElement(u.a,{onClick:this.toggleShowAnswer,style:b},this.state.answerShown?i.createElement("span",null,"Hide Answer"):i.createElement("span",null,"Show Answer"))),i.createElement(d.a,{xs:12,md:6,className:"align-right"},i.createElement(u.a,{onClick:this.toggleShowQuestions,style:b},this.state.questionsShown?i.createElement("span",null,"Hide Question List"):i.createElement("span",null,"Show Question List")))),i.createElement(c.a,null,i.createElement(d.a,{className:"align-right"},i.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:b},"End Exam"))))),i.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},i.createElement(m.a.Header,null,i.createElement(m.a.Title,null,"Showing Test Questions")),i.createElement(m.a.Body,null,i.createElement(g.a,{striped:!0,bordered:!0,hover:!0},i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"#"),i.createElement("th",null,"Answer"))),i.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return i.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},i.createElement("td",null,n+1),i.createElement("td",null,t.answered))})):""))),i.createElement(m.a.Footer,null,i.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),i.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},i.createElement(m.a.Header,null,i.createElement(m.a.Title,null,"Are you sure?")),i.createElement(m.a.Body,null,this.state.endExamText),i.createElement(m.a.Footer,null,i.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),i.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(i.Component);t.default=f}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-ne-1-cl-3-a-38-js-634c2704672e60ecfedd.js.map