(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{uZfN:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),o=n("dI71"),r=n("q1tI"),i=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),u=n("JI6e"),d=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),E=n("ES5j"),w=n.n(E),f=(n("5x/H"),n("bQ8i")),y=n.n(f),S=w.a.firestore(),x={marginTop:"14px",marginBottom:"14px",display:"flex"},v={display:"flex",alignItems:"center",justifyContent:"center"},A={marginTop:"24px"},I={marginTop:"24px"},b=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return w.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{question:{blocks:[{key:"5b1fh",inlineStyleRanges:[],depth:0,type:"unstyled",entityRanges:[],data:{},text:"You have a Microsoft 365 E5 subscription."},{depth:0,inlineStyleRanges:[],entityRanges:[],key:"8fo8h",data:{},type:"unstyled",text:"All computers run Windows 10 and are onboarded to Microsoft Defender Advanced Threat Protection (Microsoft Defender ATP)."},{entityRanges:[],key:"72tpa",type:"unstyled",text:"You create a Microsoft Defender ATP machine group named MachineGroup1.",data:{},depth:0,inlineStyleRanges:[]},{text:"You need to enable delegation for the security settings of the computers in MachineGroup1.",type:"unstyled",entityRanges:[],data:{},key:"s449",inlineStyleRanges:[],depth:0},{key:"4v18a",depth:0,type:"unstyled",inlineStyleRanges:[],entityRanges:[],data:{},text:"Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order."}],entityMap:{}},references:{blocks:[{key:"18lg0",depth:0,type:"unstyled",data:{},inlineStyleRanges:[],entityRanges:[],text:""}],entityMap:{}},id:"InQ53ABi0",answers:[{value:"From the Microsoft Azure poral, create an Azure AD group. From Microsoft Defender Security center, create a role. From Microsoft Defender Security center, configure the permissions for MachineGroup1.",isCorrectAnswer:!0},{isCorrectAnswer:!1,value:"From Microsoft Defender Security center, create a role. From Microsoft Defender Security center, configure the permissions for MachineGroup1. From the Microsoft Azure poral, create an Azure AD group. "},{value:"From Microsoft Defender Security center, create a role. From the Microsoft Azure poral, create an Azure AD group. From Microsoft Defender Security center, configure the permissions for MachineGroup1.",isCorrectAnswer:!1}]},previousQuestionId:"",nextQuestionId:"",questionId:"InQ53ABi0",questionIdx:"",questionHtml:"<p>You have a Microsoft 365 E5 subscription.</p>\n<p>All computers run Windows 10 and are onboarded to Microsoft Defender Advanced Threat Protection (Microsoft Defender ATP).</p>\n<p>You create a Microsoft Defender ATP machine group named MachineGroup1.</p>\n<p>You need to enable delegation for the security settings of the computers in MachineGroup1.</p>\n<p>Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>\n",referencesHtml:"<p></p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(o.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),S.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,a,o,r="",i="",l=!1,c=t.state.selectedAnswer;n.questions.forEach((function(e,n){l&&(i=e.id,l=!1),t.state.questionId===e.id&&(l=!0,s=e,o=n+1,a&&(r=a.id),s.answered&&(c=s.answered)),a=e})),S.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=y()(n.question),a=y()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:n,questionIdx:o,nextQuestionId:i,previousQuestionId:r,selectedAnswer:c})}))):Object(p.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,o=Object(s.a)(this.state.selectedAnswer);if(a.checked)o.push(n);else{var r=o.indexOf(""+n);o.splice(r,1)}this.setState({selectedAnswer:o});var i=Object.assign({},this.state.test);i.questions=i.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=o),e})),S.collection("users").doc(this.state.uid).collection("tests").doc(i.id).set(i),this.setState({test:i})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,S.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},x),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),r.createElement(i.a,null,r.createElement("main",null,r.createElement("div",null,r.createElement(l.a,null,r.createElement(c.a,null,r.createElement(u.a,{md:8},r.createElement("h1",null,"Question ",this.state.questionIdx)),r.createElement(u.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),r.createElement(u.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):r.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),r.createElement(c.a,null,""!==this.state.questionHtml?r.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),r.createElement(c.a,null,t.map((function(t,n){return r.createElement("div",{style:t.optionStyles,key:n},r.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:v,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),r.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),r.createElement(c.a,null,r.createElement(u.a,null,this.state.answerShown?r.createElement("div",{style:A,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),r.createElement(c.a,{className:"align-right"},r.createElement(u.a,{md:8}),r.createElement(u.a,{md:2}," ",""!==this.state.previousQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),r.createElement(u.a,{md:2},""!==this.state.nextQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):r.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),r.createElement(c.a,null,r.createElement(u.a,{xs:12,md:6},r.createElement(d.a,{onClick:this.toggleShowAnswer,style:I},this.state.answerShown?r.createElement("span",null,"Hide Answer"):r.createElement("span",null,"Show Answer"))),r.createElement(u.a,{xs:12,md:6,className:"align-right"},r.createElement(d.a,{onClick:this.toggleShowQuestions,style:I},this.state.questionsShown?r.createElement("span",null,"Hide Question List"):r.createElement("span",null,"Show Question List")))),r.createElement(c.a,null,r.createElement(u.a,{className:"align-right"},r.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning",style:I},"End Exam"))))),r.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},r.createElement(m.a.Header,null,r.createElement(m.a.Title,null,"Showing Test Questions")),r.createElement(m.a.Body,null,r.createElement(g.a,{striped:!0,bordered:!0,hover:!0},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"#"),r.createElement("th",null,"Answer"))),r.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return r.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},r.createElement("td",null,n+1),r.createElement("td",null,t.answered))})):""))),r.createElement(m.a.Footer,null,r.createElement(d.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),r.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},r.createElement(m.a.Header,null,r.createElement(m.a.Title,null,"Are you sure?")),r.createElement(m.a.Body,null,this.state.endExamText),r.createElement(m.a.Footer,null,r.createElement(d.a,{variant:"primary",onClick:this.endExam},"Yes"),r.createElement(d.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(r.Component);t.default=b}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-in-q-53-a-bi-0-js-0cc91f1f0f37cb65e1f7.js.map