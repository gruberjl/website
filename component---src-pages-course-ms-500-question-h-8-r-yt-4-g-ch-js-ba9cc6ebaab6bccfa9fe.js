(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{BNRE:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),E=n("ES5j"),w=n.n(E),y=n("bQ8i"),S=n.n(y),v={marginTop:"14px",marginBottom:"14px",display:"flex"},x={display:"flex",alignItems:"center",justifyContent:"center"},f={marginTop:"24px"},b={marginTop:"24px"},I=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return"undefined"!=typeof window&&w.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{references:{blocks:[{type:"unstyled",depth:0,data:{},inlineStyleRanges:[],entityRanges:[],key:"7ofpi",text:"https://www.iorad.com/player/1802115/MS-500---ensure-that-a-user-named-Joe-Gruber-receives-incident-reports-when-email-messages"},{data:{},key:"esne0",inlineStyleRanges:[],text:"Open the Microsoft 365 compliance center.",depth:0,type:"ordered-list-item",entityRanges:[]},{depth:0,key:"86orm",data:{},entityRanges:[],type:"ordered-list-item",text:"Go to Policies > Data loss prevention > Policies > Create policy.",inlineStyleRanges:[]},{data:{},entityRanges:[],type:"ordered-list-item",inlineStyleRanges:[],text:"Select the U.K. Data Protection Act.",depth:0,key:"11ml6"},{entityRanges:[],key:"8cgea",data:{},inlineStyleRanges:[],depth:0,type:"ordered-list-item",text:"Unselect every location except Exchange email."},{key:"cg844",depth:0,entityRanges:[],type:"ordered-list-item",text:"Customize the alert configuration > add Joe Gruber and remove John Gruber.",data:{},inlineStyleRanges:[]},{entityRanges:[],type:"ordered-list-item",text:"Save the changes.",data:{},depth:0,inlineStyleRanges:[],key:"ultc"}],entityMap:{}},question:{blocks:[{depth:0,data:{},type:"unstyled",entityRanges:[],inlineStyleRanges:[],text:"SIMULATION -",key:"4t5vp"},{type:"unstyled",depth:0,text:"You need to ensure that a user named Joe Gruber receives incident reports when email messages that contain data covered by the U.K. Data Protection Act are sent outside of your organization.",key:"df7q8",entityRanges:[],inlineStyleRanges:[],data:{}},{text:"To complete this task, sign in to the Microsoft 365 admin center.",key:"43bu",type:"unstyled",data:{},inlineStyleRanges:[],entityRanges:[],depth:0}],entityMap:{}},answers:[{value:"From the Microsoft 365 compliance center create a new Data loss prevention policy with a customized alert notification",isCorrectAnswer:!0},{value:"From the Microsoft 365 admin center edit the default Data loss prevention policy with custom notification to Joe Gruber",isCorrectAnswer:!1},{isCorrectAnswer:!1,value:"From the Azure AD admin center > Sharing > Block sharing > Customize alert notifications."}],id:"H8rYT4gCH"},previousQuestionId:"",nextQuestionId:"",questionId:"H8rYT4gCH",questionIdx:"",questionHtml:"<p>SIMULATION -</p>\n<p>You need to ensure that a user named Joe Gruber receives incident reports when email messages that contain data covered by the U.K. Data Protection Act are sent outside of your organization.</p>\n<p>To complete this task, sign in to the Microsoft 365 admin center.</p>\n",referencesHtml:"<p>https://www.iorad.com/player/1802115/MS-500---ensure-that-a-user-named-Joe-Gruber-receives-incident-reports-when-email-messages</p>\n<ol>\n<li>Open the Microsoft 365 compliance center.</li>\n<li>Go to Policies &gt; Data loss prevention &gt; Policies &gt; Create policy.</li>\n<li>Select the U.K. Data Protection Act.</li>\n<li>Unselect every location except Exchange email.</li>\n<li>Customize the alert configuration &gt; add Joe Gruber and remove John Gruber.</li>\n<li>Save the changes.</li>\n</ol>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=w.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,i,o,r="",l="",c=!1,d=t.state.selectedAnswer;s.questions.forEach((function(e,n){c&&(l=e.id,c=!1),t.state.questionId===e.id&&(c=!0,a=e,o=n+1,i&&(r=i.id),a.answered&&(d=a.answered)),i=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=S()(n.question),a=S()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:o,nextQuestionId:l,previousQuestionId:r,selectedAnswer:d})}))):Object(p.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},v),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:x,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:f,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(u.a,{onClick:this.toggleShowAnswer,style:b},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(u.a,{onClick:this.toggleShowQuestions,style:b},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:b},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=I}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-h-8-r-yt-4-g-ch-js-ba9cc6ebaab6bccfa9fe.js.map