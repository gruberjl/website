(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{EVX6:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),o=n("dI71"),i=n("q1tI"),r=n("YQnL"),l=n("7vrA"),d=n("3Z9Z"),c=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),E=n("MBJH"),g=n("Wbzz"),w=n("ES5j"),p=n.n(w),y=n("bQ8i"),f=n.n(y),S={marginTop:"14px",marginBottom:"14px",display:"flex"},x={display:"flex",alignItems:"center",justifyContent:"center"},v={marginTop:"24px"},A={marginTop:"24px"},I=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return"undefined"!=typeof window&&p.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{answers:[{value:"7 days",isCorrectAnswer:!1},{isCorrectAnswer:!0,value:"72 hours"},{isCorrectAnswer:!1,value:"1 hour"},{isCorrectAnswer:!1,value:"48 hours"},{value:"12 hours",isCorrectAnswer:!1}],id:"XWQ4R_JL_",question:{blocks:[{key:"4b15v",depth:0,inlineStyleRanges:[],text:"Your company uses Microsoft Azure Advanced Threat Protection (ATP).",entityRanges:[],data:{},type:"unstyled"},{type:"unstyled",entityRanges:[],data:{},key:"7t127",depth:0,text:"You enable the delayed deployment of updates for an Azure ATP sensor named Sensor1.",inlineStyleRanges:[]},{inlineStyleRanges:[],type:"unstyled",depth:0,key:"ahnt8",data:{},entityRanges:[],text:"How long after the Azure ATP cloud service is updated will Sensor1 be updated?"}],entityMap:{}},references:{blocks:[{entityRanges:[],data:{},key:"5qdlt",depth:0,text:"Note: The delay period was 24 hours. In ATP release 2.62, the 24 hour delay period has been increased to 72 hours.",type:"unstyled",inlineStyleRanges:[]},{data:{},inlineStyleRanges:[],key:"67qov",depth:0,type:"unstyled",entityRanges:[],text:"https://docs.microsoft.com/en-us/defender-for-identity/sensor-update#:~:text=72%20hours%20after%20the%20Defender,process%20as%20automatically%20updated%20sensors."}],entityMap:{}}},previousQuestionId:"",nextQuestionId:"",questionId:"XWQ4R_JL_",questionIdx:"",questionHtml:"<p>Your company uses Microsoft Azure Advanced Threat Protection (ATP).</p>\n<p>You enable the delayed deployment of updates for an Azure ATP sensor named Sensor1.</p>\n<p>How long after the Azure ATP cloud service is updated will Sensor1 be updated?</p>\n",referencesHtml:"<p>Note: The delay period was 24 hours. In ATP release 2.62, the 24 hour delay period has been increased to 72 hours.</p>\n<p>https://docs.microsoft.com/en-us/defender-for-identity/sensor-update#:~:text=72%20hours%20after%20the%20Defender,process%20as%20automatically%20updated%20sensors.</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(o.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=p.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,o,i,r="",l="",d=!1,c=t.state.selectedAnswer;s.questions.forEach((function(e,n){d&&(l=e.id,d=!1),t.state.questionId===e.id&&(d=!0,a=e,i=n+1,o&&(r=o.id),a.answered&&(c=a.answered)),o=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=f()(n.question),a=f()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:i,nextQuestionId:l,previousQuestionId:r,selectedAnswer:c})}))):Object(g.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,o=Object(s.a)(this.state.selectedAnswer);if(a.checked)o.push(n);else{var i=o.indexOf(""+n);o.splice(i,1)}this.setState({selectedAnswer:o});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=o),e})),p.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(g.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,p.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(g.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},S),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),i.createElement(r.a,null,i.createElement("main",null,i.createElement("div",null,i.createElement(l.a,null,i.createElement(d.a,null,i.createElement(c.a,{md:8},i.createElement("h1",null,"Question ",this.state.questionIdx)),i.createElement(c.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?i.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),i.createElement(c.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?i.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):i.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),i.createElement(d.a,null,""!==this.state.questionHtml?i.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),i.createElement(d.a,null,t.map((function(t,n){return i.createElement("div",{style:t.optionStyles,key:n},i.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:x,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),i.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),i.createElement(d.a,null,i.createElement(c.a,null,this.state.answerShown?i.createElement("div",{style:v,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),i.createElement(d.a,{className:"align-right"},i.createElement(c.a,{md:8}),i.createElement(c.a,{md:2}," ",""!==this.state.previousQuestionId?i.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),i.createElement(c.a,{md:2},""!==this.state.nextQuestionId?i.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):i.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),i.createElement(d.a,null,i.createElement(c.a,{xs:12,md:6},i.createElement(u.a,{onClick:this.toggleShowAnswer,style:A},this.state.answerShown?i.createElement("span",null,"Hide Answer"):i.createElement("span",null,"Show Answer"))),i.createElement(c.a,{xs:12,md:6,className:"align-right"},i.createElement(u.a,{onClick:this.toggleShowQuestions,style:A},this.state.questionsShown?i.createElement("span",null,"Hide Question List"):i.createElement("span",null,"Show Question List")))),i.createElement(d.a,null,i.createElement(c.a,{className:"align-right"},i.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:A},"End Exam"))))),i.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},i.createElement(m.a.Header,null,i.createElement(m.a.Title,null,"Showing Test Questions")),i.createElement(m.a.Body,null,i.createElement(E.a,{striped:!0,bordered:!0,hover:!0},i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"#"),i.createElement("th",null,"Answer"))),i.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return i.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},i.createElement("td",null,n+1),i.createElement("td",null,t.answered))})):""))),i.createElement(m.a.Footer,null,i.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),i.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},i.createElement(m.a.Header,null,i.createElement(m.a.Title,null,"Are you sure?")),i.createElement(m.a.Body,null,this.state.endExamText),i.createElement(m.a.Footer,null,i.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),i.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(i.Component);t.default=I}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-xwq-4-r-jl-js-d960deec76097c5c6adb.js.map