(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{FKEb:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),l=n("YQnL"),r=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),E=n("Wbzz"),p=n("ES5j"),w=n.n(p),y=n("bQ8i"),v=n.n(y),S={marginTop:"14px",marginBottom:"14px",display:"flex"},x={display:"flex",alignItems:"center",justifyContent:"center"},b={marginTop:"24px"},f={marginTop:"24px"},k=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return"undefined"!=typeof window&&w.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{answers:[{isCorrectAnswer:!1,value:"Open Azure Active Directory Admin Center > Devices > Manage Devices"},{isCorrectAnswer:!0,value:"Open Exchange Admin Center > Mobile > Edit > Select options"},{isCorrectAnswer:!1,value:"Open Microsoft 365 Admin Center > Mobile > Edit > Select options"}],question:{entityMap:{},blocks:[{text:"SIMULATION -",entityRanges:[],depth:0,key:"cc7cl",data:{},inlineStyleRanges:[],type:"unstyled"},{inlineStyleRanges:[],entityRanges:[],data:{},key:"684cf",text:"You need to ensure that unmanaged mobile devices are quarantined when the devices attempt to connect to Exchange Online.",type:"unstyled",depth:0}]},references:{entityMap:{},blocks:[{depth:0,key:"f9d2a",type:"unstyled",inlineStyleRanges:[],entityRanges:[],text:"https://www.iorad.com/player/1796090/MS-500---Ensure-that-unmanaged-mobile-devices-are-quarantined-when-the-devices-attempt-to-connect-to",data:{}},{inlineStyleRanges:[],depth:0,text:"You need to configure the Exchange ActiveSync Access Settings.",type:"unstyled",data:{},entityRanges:[],key:"4im1d"},{entityRanges:[],data:{},text:"Go to the Exchange admin center.",depth:0,inlineStyleRanges:[],key:"jnrn",type:"ordered-list-item"},{type:"ordered-list-item",depth:0,inlineStyleRanges:[],data:{},entityRanges:[],text:"Click on Mobile in the left navigation pane.",key:"29jo5"},{inlineStyleRanges:[],data:{},text:"On the Mobile Device Access page, click the Edit button in the Exchange ActiveSync Access Settings area.",depth:0,key:"8f6v5",entityRanges:[],type:"ordered-list-item"},{depth:0,data:{},type:"ordered-list-item",text:"Select the Quarantine option under When a mobile device that isn't managed by a rule or personal exemption connects to Exchange.",key:"crv1m",inlineStyleRanges:[],entityRanges:[]},{key:"7fd0k",depth:0,text:"Optionally, you can configure notifications to be sent to administrators and a message to be sent to the mobile device user when a device is quarantined.",entityRanges:[],data:{},inlineStyleRanges:[],type:"ordered-list-item"},{entityRanges:[],text:"Click Save to save the changes.",data:{},depth:0,inlineStyleRanges:[],type:"ordered-list-item",key:"2q57v"}]},id:"s4pkyL5r0"},previousQuestionId:"",nextQuestionId:"",questionId:"s4pkyL5r0",questionIdx:"",questionHtml:"<p>SIMULATION -</p>\n<p>You need to ensure that unmanaged mobile devices are quarantined when the devices attempt to connect to Exchange Online.</p>\n",referencesHtml:"<p>https://www.iorad.com/player/1796090/MS-500---Ensure-that-unmanaged-mobile-devices-are-quarantined-when-the-devices-attempt-to-connect-to</p>\n<p>You need to configure the Exchange ActiveSync Access Settings.</p>\n<ol>\n<li>Go to the Exchange admin center.</li>\n<li>Click on Mobile in the left navigation pane.</li>\n<li>On the Mobile Device Access page, click the Edit button in the Exchange ActiveSync Access Settings area.</li>\n<li>Select the Quarantine option under When a mobile device that isn't managed by a rule or personal exemption connects to Exchange.</li>\n<li>Optionally, you can configure notifications to be sent to administrators and a message to be sent to the mobile device user when a device is quarantined.</li>\n<li>Click Save to save the changes.</li>\n</ol>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=w.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,i,o,l="",r="",c=!1,d=t.state.selectedAnswer;s.questions.forEach((function(e,n){c&&(r=e.id,c=!1),t.state.questionId===e.id&&(c=!0,a=e,o=n+1,i&&(l=i.id),a.answered&&(d=a.answered)),i=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=v()(n.question),a=v()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:o,nextQuestionId:r,previousQuestionId:l,selectedAnswer:d})}))):Object(E.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var l=Object.assign({},this.state.test);l.questions=l.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(l.id).set(l),this.setState({test:l})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(E.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(E.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},S),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(l.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(r.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(u.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:x,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:b,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(u.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(u.a,{onClick:this.toggleShowAnswer,style:f},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(u.a,{onClick:this.toggleShowQuestions,style:f},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:f},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=k}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-s-4-pky-l-5-r-0-js-22fe0ba5e5b46b809ad2.js.map