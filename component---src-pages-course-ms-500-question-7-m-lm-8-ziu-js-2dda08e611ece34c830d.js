(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{jYdZ:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),l=n("YQnL"),r=n("7vrA"),c=n("3Z9Z"),u=n("JI6e"),d=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),y=n("Wbzz"),p=n("ES5j"),w=n.n(p),E=n("bQ8i"),f=n.n(E),b={marginTop:"14px",marginBottom:"14px",display:"flex"},S={display:"flex",alignItems:"center",justifyContent:"center"},v={marginTop:"24px"},x={marginTop:"24px"},A=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return"undefined"!=typeof window&&w.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{id:"-7MLm8ziu",references:{blocks:[{key:"fdm35",depth:0,text:"",type:"unstyled",inlineStyleRanges:[],entityRanges:[],data:{}}],entityMap:{}},answers:[{isCorrectAnswer:!1,value:"Only employees who have an Azure AD user account"},{isCorrectAnswer:!1,value:"Employees who have an Azure AD user account and a synced on-premises account"},{value:"Only employees who have a synced on-premises account",isCorrectAnswer:!0},{isCorrectAnswer:!1,value:"Fix the synchronization server and install Azure AD Connect in staging mode"},{value:"Fix the synchronization server and install an additional authentication agent",isCorrectAnswer:!0},{value:"Install an additional authentication agent and run the Start-ADSyncSyncCycle cmdlet",isCorrectAnswer:!1},{isCorrectAnswer:!1,value:"Install Azure AD Connect in staging mode and run the Start-ADSyncSyncCycle cmdlet"}],question:{blocks:[{data:{},type:"unstyled",text:"Your network contains an on-premises Active Directory domain that syncs to Azure Active Directory (Azure AD) as shown in the following exhibit.",depth:0,inlineStyleRanges:[],key:"3l77q",entityRanges:[]},{depth:0,entityRanges:[{length:1,offset:0,key:0}],type:"atomic",data:{},inlineStyleRanges:[],text:" ",key:"4tnb1"},{data:{},key:"dv9ht",text:"The synchronization schedule is configured as shown in the following exhibit.",entityRanges:[],type:"unstyled",depth:0,inlineStyleRanges:[]},{entityRanges:[{offset:0,length:1,key:1}],inlineStyleRanges:[],key:"bm5re",text:" ",depth:0,data:{},type:"atomic"},{entityRanges:[],data:{},type:"unstyled",depth:0,key:"f2iao",inlineStyleRanges:[{length:51,style:"color-rgb(80,80,80)",offset:0},{offset:0,style:"bgcolor-rgb(255,255,255)",length:51},{offset:0,style:"fontsize-16",length:51},{offset:0,style:'fontfamily-Roboto Condensed", sans-serif',length:51}],text:"Which employees can authenticate by using Azure AD?"},{key:"7q87t",entityRanges:[],inlineStyleRanges:[],text:"What should you do to remove the warning for pass-through authentication?",data:{},type:"unstyled",depth:0},{key:"fncrb",entityRanges:[],inlineStyleRanges:[{style:"color-rgb(80,80,80)",offset:0,length:48},{style:"bgcolor-rgb(255,255,255)",offset:0,length:48},{length:48,offset:0,style:"fontsize-16"},{style:'fontfamily-Roboto Condensed", sans-serif',length:48,offset:0}],data:{},depth:0,text:"NOTE: Each correct selection is worth one point. ",type:"unstyled"}],entityMap:{0:{data:{alignment:"left",src:"https://i.ibb.co/VpsjVFh/ad-connect-setup.png",alt:"AD Connect Setup",height:"auto",width:"auto"},type:"IMAGE",mutability:"MUTABLE"},1:{type:"IMAGE",data:{src:"https://i.ibb.co/CWcS1NP/ad-connect-status.png",width:"auto",alt:"AD Connect Scheduler status",height:"auto",alignment:"left"},mutability:"MUTABLE"}}}},previousQuestionId:"",nextQuestionId:"",questionId:"-7MLm8ziu",questionIdx:"",questionHtml:'<p>Your network contains an on-premises Active Directory domain that syncs to Azure Active Directory (Azure AD) as shown in the following exhibit.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/VpsjVFh/ad-connect-setup.png" alt="AD Connect Setup" style="height: auto;width: auto"/></div>\n<p>The synchronization schedule is configured as shown in the following exhibit.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/CWcS1NP/ad-connect-status.png" alt="AD Connect Scheduler status" style="height: auto;width: auto"/></div>\n<p><span style="color: rgb(80,80,80);background-color: rgb(255,255,255);font-size: 16px;font-family: Roboto Condensed", sans-serif;">Which employees can authenticate by using Azure AD?</span></p>\n<p>What should you do to remove the warning for pass-through authentication?</p>\n<p><span style="color: rgb(80,80,80);background-color: rgb(255,255,255);font-size: 16px;font-family: Roboto Condensed", sans-serif;">NOTE: Each correct selection is worth one point.</span>&nbsp;</p>\n',referencesHtml:"<p></p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=w.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,i,o,l="",r="",c=!1,u=t.state.selectedAnswer;s.questions.forEach((function(e,n){c&&(r=e.id,c=!1),t.state.questionId===e.id&&(c=!0,a=e,o=n+1,i&&(l=i.id),a.answered&&(u=a.answered)),i=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=f()(n.question),a=f()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:o,nextQuestionId:r,previousQuestionId:l,selectedAnswer:u})}))):Object(y.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var l=Object.assign({},this.state.test);l.questions=l.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(l.id).set(l),this.setState({test:l})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(y.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(y.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},b),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(l.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(r.a,null,o.createElement(c.a,null,o.createElement(u.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(u.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(d.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(u.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(d.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:S,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(u.a,null,this.state.answerShown?o.createElement("div",{style:v,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(u.a,{md:8}),o.createElement(u.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(d.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(u.a,{md:2},""!==this.state.nextQuestionId?o.createElement(d.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(u.a,{xs:12,md:6},o.createElement(d.a,{onClick:this.toggleShowAnswer,style:x},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(u.a,{xs:12,md:6,className:"align-right"},o.createElement(d.a,{onClick:this.toggleShowQuestions,style:x},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(u.a,{className:"align-right"},o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning",style:x},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(d.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(d.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(d.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=A}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-7-m-lm-8-ziu-js-2dda08e611ece34c830d.js.map