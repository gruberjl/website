(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{MSjM:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),d=n("3Z9Z"),c=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),y=n("Wbzz"),p=n("ES5j"),E=n.n(p),w=n("bQ8i"),v=n.n(w),f={marginTop:"14px",marginBottom:"14px",display:"flex"},S={display:"flex",alignItems:"center",justifyContent:"center"},x={marginTop:"24px"},A={marginTop:"24px"},b=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return"undefined"!=typeof window&&E.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{question:{blocks:[{inlineStyleRanges:[],text:"Your network contains an on-premises Active Directory domain. The domain contains servers that run Windows Server and have advanced auditing enabled.",data:{},entityRanges:[],type:"unstyled",depth:0,key:"9bi1q"},{entityRanges:[],depth:0,key:"83ivf",inlineStyleRanges:[],text:"The security logs of the servers are collected by using a third-party SIEM solution.",type:"unstyled",data:{}},{text:"You purchase a Microsoft 365 subscription and plan to deploy Azure Advanced Threat Protection (ATP) by using standalone sensors.",type:"unstyled",inlineStyleRanges:[],entityRanges:[],data:{},key:"7e2p1",depth:0},{data:{},type:"unstyled",key:"ckv72",inlineStyleRanges:[],text:"You need to ensure that you can detect when sensitive groups are modified and when malicious services are created.",entityRanges:[],depth:0},{data:{},inlineStyleRanges:[],key:"5jeqb",type:"unstyled",entityRanges:[],text:"What should you do?",depth:0}],entityMap:{}},id:"L1SBGW44b",answers:[{value:"Turn off Delayed updates for the Azure ATP sensors.",isCorrectAnswer:!1},{isCorrectAnswer:!1,value:"Configure auditing in the Office 365 Security & Compliance center."},{isCorrectAnswer:!1,value:"Turn on Delayed updates for the Azure ATP sensors."},{isCorrectAnswer:!0,value:"Integrate SIEM and Azure ATP."}],references:{blocks:[{data:{},type:"unstyled",entityRanges:[],key:"5ild6",text:"There are several versions of this question in the exam. The questions in the exam have two different correct answers:",depth:0,inlineStyleRanges:[]},{type:"unstyled",key:"8soon",entityRanges:[],data:{},inlineStyleRanges:[],depth:0,text:"1. Integrate SIEM and Azure ATP."},{entityRanges:[],depth:0,text:"2. Configure Event Forwarding on the domain controllers",data:{},type:"unstyled",inlineStyleRanges:[],key:"537gi"},{entityRanges:[],data:{},key:"afrhk",depth:0,type:"unstyled",text:"Other incorrect answer options you may see on the exam include the following:",inlineStyleRanges:[]},{type:"unstyled",key:"42iu7",entityRanges:[],data:{},depth:0,inlineStyleRanges:[],text:"1. Configure Azure ATP notifications"},{data:{},type:"unstyled",key:"7in4b",inlineStyleRanges:[],text:"2. Modify the Domain synchronizer candidate settings on the Azure ATP sensors",entityRanges:[],depth:0},{key:"94mm1",inlineStyleRanges:[],data:{},type:"unstyled",text:"3. Enable the Audit account management Group Policy setting for the servers.",depth:0,entityRanges:[]},{text:"https://docs.microsoft.com/en-us/azure-advanced-threat-protection/configure-event-forwarding",data:{},entityRanges:[],key:"6vb60",type:"unstyled",depth:0,inlineStyleRanges:[]}],entityMap:{}}},previousQuestionId:"",nextQuestionId:"",questionId:"L1SBGW44b",questionIdx:"",questionHtml:"<p>Your network contains an on-premises Active Directory domain. The domain contains servers that run Windows Server and have advanced auditing enabled.</p>\n<p>The security logs of the servers are collected by using a third-party SIEM solution.</p>\n<p>You purchase a Microsoft 365 subscription and plan to deploy Azure Advanced Threat Protection (ATP) by using standalone sensors.</p>\n<p>You need to ensure that you can detect when sensitive groups are modified and when malicious services are created.</p>\n<p>What should you do?</p>\n",referencesHtml:"<p>There are several versions of this question in the exam. The questions in the exam have two different correct answers:</p>\n<p>1. Integrate SIEM and Azure ATP.</p>\n<p>2. Configure Event Forwarding on the domain controllers</p>\n<p>Other incorrect answer options you may see on the exam include the following:</p>\n<p>1. Configure Azure ATP notifications</p>\n<p>2. Modify the Domain synchronizer candidate settings on the Azure ATP sensors</p>\n<p>3. Enable the Audit account management Group Policy setting for the servers.</p>\n<p>https://docs.microsoft.com/en-us/azure-advanced-threat-protection/configure-event-forwarding</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=E.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,i,o,r="",l="",d=!1,c=t.state.selectedAnswer;s.questions.forEach((function(e,n){d&&(l=e.id,d=!1),t.state.questionId===e.id&&(d=!0,a=e,o=n+1,i&&(r=i.id),a.answered&&(c=a.answered)),i=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=v()(n.question),a=v()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:o,nextQuestionId:l,previousQuestionId:r,selectedAnswer:c})}))):Object(y.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(y.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(y.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},f),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(d.a,null,o.createElement(c.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(c.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(c.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(d.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(d.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:S,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(d.a,null,o.createElement(c.a,null,this.state.answerShown?o.createElement("div",{style:x,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(d.a,{className:"align-right"},o.createElement(c.a,{md:8}),o.createElement(c.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(c.a,{md:2},""!==this.state.nextQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(d.a,null,o.createElement(c.a,{xs:12,md:6},o.createElement(u.a,{onClick:this.toggleShowAnswer,style:A},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(c.a,{xs:12,md:6,className:"align-right"},o.createElement(u.a,{onClick:this.toggleShowQuestions,style:A},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(d.a,null,o.createElement(c.a,{className:"align-right"},o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:A},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=b}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-l-1-sbgw-44-b-js-6fbad217998a62f289ce.js.map