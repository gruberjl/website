(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{Tflx:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),u=n("JI6e"),d=n("cWnB"),m=n("QojX"),h=n("zM5D"),g=n("MBJH"),E=n("Wbzz"),p=n("ES5j"),w=n.n(p),y=(n("5x/H"),n("bQ8i")),S=n.n(y),v=w.a.firestore(),x={marginTop:"14px",marginBottom:"14px",display:"flex"},f={display:"flex",alignItems:"center",justifyContent:"center"},b={marginTop:"24px"},I={marginTop:"24px"},q=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return w.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{question:{blocks:[{type:"unstyled",data:{},entityRanges:[],inlineStyleRanges:[],text:"You have a Microsoft 365 subscription.",key:"b1abo",depth:0},{type:"unstyled",inlineStyleRanges:[],entityRanges:[],data:{},text:"You identify the following data loss prevention (DLP) requirements:",depth:0,key:"7ie60"},{data:{},entityRanges:[],key:"11d6",depth:0,inlineStyleRanges:[],text:"Send notifications to users if they attempt to send attachments that contain EU Social Security Numbers (SSN) or Equivalent ID.",type:"unordered-list-item"},{type:"unordered-list-item",data:{},key:"7421v",inlineStyleRanges:[],entityRanges:[],depth:0,text:"Prevent any email messages that contain credit card numbers from being sent outside your organization."},{depth:0,key:"d0gr9",inlineStyleRanges:[],text:"Block the external sharing of Microsoft OneDrive content that contains EU passport numbers.",data:{},type:"unordered-list-item",entityRanges:[]},{entityRanges:[],inlineStyleRanges:[],depth:0,text:"Send administrators email alerts if any rule matches occur.",type:"unordered-list-item",key:"917t",data:{}},{data:{},type:"unstyled",key:"ervpb",inlineStyleRanges:[],entityRanges:[],depth:0,text:"What is the minimum number of DLP policies and rules you must create to meet the requirements? To answer, select the appropriate options in the answer area."}],entityMap:{}},id:"u4QhevP_z",references:{entityMap:{},blocks:[{text:"",entityRanges:[],data:{},depth:0,inlineStyleRanges:[],key:"e3nvr",type:"unstyled"}]},answers:[{value:"Policies: 1",isCorrectAnswer:!1},{value:"Policies: 2",isCorrectAnswer:!1},{value:"Policies: 3",isCorrectAnswer:!0},{isCorrectAnswer:!1,value:"Rules: 1"},{isCorrectAnswer:!1,value:"Rules: 2"},{value:"Rules: 3",isCorrectAnswer:!0},{value:"Rules: 4",isCorrectAnswer:!1}]},previousQuestionId:"",nextQuestionId:"",questionId:"u4QhevP_z",questionIdx:"",questionHtml:"<p>You have a Microsoft 365 subscription.</p>\n<p>You identify the following data loss prevention (DLP) requirements:</p>\n<ul>\n<li>Send notifications to users if they attempt to send attachments that contain EU Social Security Numbers (SSN) or Equivalent ID.</li>\n<li>Prevent any email messages that contain credit card numbers from being sent outside your organization.</li>\n<li>Block the external sharing of Microsoft OneDrive content that contains EU passport numbers.</li>\n<li>Send administrators email alerts if any rule matches occur.</li>\n</ul>\n<p>What is the minimum number of DLP policies and rules you must create to meet the requirements? To answer, select the appropriate options in the answer area.</p>\n",referencesHtml:"<p></p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),v.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,a,i,o="",r="",l=!1,c=t.state.selectedAnswer;n.questions.forEach((function(e,n){l&&(r=e.id,l=!1),t.state.questionId===e.id&&(l=!0,s=e,i=n+1,a&&(o=a.id),s.answered&&(c=s.answered)),a=e})),v.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=S()(n.question),a=S()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:n,questionIdx:i,nextQuestionId:r,previousQuestionId:o,selectedAnswer:c})}))):Object(E.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),v.collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(E.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,v.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(E.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},x),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(c.a,null,o.createElement(u.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(u.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(d.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(u.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(d.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(m.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:f,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(u.a,null,this.state.answerShown?o.createElement("div",{style:b,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(u.a,{md:8}),o.createElement(u.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(d.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(u.a,{md:2},""!==this.state.nextQuestionId?o.createElement(d.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(u.a,{xs:12,md:6},o.createElement(d.a,{onClick:this.toggleShowAnswer,style:I},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(u.a,{xs:12,md:6,className:"align-right"},o.createElement(d.a,{onClick:this.toggleShowQuestions,style:I},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(u.a,{className:"align-right"},o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning",style:I},"End Exam"))))),o.createElement(h.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(h.a.Header,null,o.createElement(h.a.Title,null,"Showing Test Questions")),o.createElement(h.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(h.a.Footer,null,o.createElement(d.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(h.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(h.a.Header,null,o.createElement(h.a.Title,null,"Are you sure?")),o.createElement(h.a.Body,null,this.state.endExamText),o.createElement(h.a.Footer,null,o.createElement(d.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(d.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=q}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-u-4-qhev-p-z-js-79541d4726d1b92d99bc.js.map