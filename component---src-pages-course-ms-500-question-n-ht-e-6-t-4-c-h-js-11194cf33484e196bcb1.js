(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{QMux:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),E=n("Wbzz"),p=n("ES5j"),w=n.n(p),y=(n("5x/H"),n("bQ8i")),v=n.n(y),x=w.a.firestore(),S={marginTop:"14px",marginBottom:"14px",display:"flex"},f={display:"flex",alignItems:"center",justifyContent:"center"},A={marginTop:"24px"},b={marginTop:"24px"},I=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return w.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{id:"NHtE6T4cH",answers:[{isCorrectAnswer:!1,value:"Configure port mirroring for Server1."},{value:"Install the Microsoft Monitoring Agent on DC1.",isCorrectAnswer:!1},{value:"Install the Microsoft Monitoring Agent on Server1.",isCorrectAnswer:!1},{value:"Configure port mirroring for DC1.",isCorrectAnswer:!0}],question:{blocks:[{text:"Your network contains an on-premises Active Directory domain. The domain contains the servers shown in the following table.",key:"8j6p0",entityRanges:[],depth:0,data:{},inlineStyleRanges:[],type:"unstyled"},{entityRanges:[{offset:0,length:1,key:0}],inlineStyleRanges:[],type:"atomic",depth:0,text:" ",key:"blh46",data:{}},{inlineStyleRanges:[],entityRanges:[],type:"unstyled",key:"b4tpj",data:{},depth:0,text:"You plan to implement Azure Advanced Threat Protection (ATP) for the domain."},{entityRanges:[],key:"9a7i",depth:0,text:"You install an Azure ATP standalone sensor on Server1.",type:"unstyled",data:{},inlineStyleRanges:[]},{text:"You need to monitor the domain by using Azure ATP.",data:{},entityRanges:[],type:"unstyled",inlineStyleRanges:[],key:"aqdev",depth:0},{entityRanges:[],data:{},depth:0,key:"3c5k5",text:"What should you do?",type:"unstyled",inlineStyleRanges:[]}],entityMap:{0:{type:"IMAGE",data:{width:"auto",alignment:"left",src:"https://i.ibb.co/0y2T0zL/servers.png",alt:"servers chart",height:"auto"},mutability:"MUTABLE"}}},references:{entityMap:{},blocks:[{depth:0,data:{},inlineStyleRanges:[],type:"unstyled",text:"https://docs.microsoft.com/en-us/azure-advanced-threat-protection/configure-port-mirroring",entityRanges:[],key:"e3h3"}]}},previousQuestionId:"",nextQuestionId:"",questionId:"NHtE6T4cH",questionIdx:"",questionHtml:'<p>Your network contains an on-premises Active Directory domain. The domain contains the servers shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/0y2T0zL/servers.png" alt="servers chart" style="height: auto;width: auto"/></div>\n<p>You plan to implement Azure Advanced Threat Protection (ATP) for the domain.</p>\n<p>You install an Azure ATP standalone sensor on Server1.</p>\n<p>You need to monitor the domain by using Azure ATP.</p>\n<p>What should you do?</p>\n',referencesHtml:"<p>https://docs.microsoft.com/en-us/azure-advanced-threat-protection/configure-port-mirroring</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),x.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,a,i,o="",r="",l=!1,c=t.state.selectedAnswer;n.questions.forEach((function(e,n){l&&(r=e.id,l=!1),t.state.questionId===e.id&&(l=!0,s=e,i=n+1,a&&(o=a.id),s.answered&&(c=s.answered)),a=e})),x.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=v()(n.question),a=v()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:n,questionIdx:i,nextQuestionId:r,previousQuestionId:o,selectedAnswer:c})}))):Object(E.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),x.collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(E.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,x.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(E.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},S),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(u.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:f,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:A,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(u.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(u.a,{onClick:this.toggleShowAnswer,style:b},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(u.a,{onClick:this.toggleShowQuestions,style:b},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:b},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=I}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-n-ht-e-6-t-4-c-h-js-11194cf33484e196bcb1.js.map