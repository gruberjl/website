(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{UUx7:function(e,t,n){"use strict";n.r(t);var i=n("KQm4"),s=n("JX7q"),a=n("dI71"),o=n("q1tI"),l=n("YQnL"),r=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),y=n("Wbzz"),p=n("ES5j"),w=n.n(p),f=n("bQ8i"),E=n.n(f),b={marginTop:"14px",marginBottom:"14px",display:"flex"},x={display:"flex",alignItems:"center",justifyContent:"center"},v={marginTop:"24px"},S={marginTop:"24px"},I=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(s.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(s.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(s.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(s.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(s.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(s.a)(n)),n.endExam=n.endExam.bind(Object(s.a)(n));var i=new URLSearchParams(t.location.search);return"undefined"!=typeof window&&w.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:i.get("testId"),test:{},question:{id:"S9fwXWmAd",question:{entityMap:{0:{mutability:"MUTABLE",type:"IMAGE",data:{width:"auto",src:"https://i.ibb.co/F38Xcp1/policy-chart3.png",alignment:"left",alt:"Policy Chart",height:"auto"}},1:{data:{width:"auto",src:"https://i.ibb.co/Z825ptq/Policy1-Retention-Policy.png",height:"auto",alt:"Policy1 Retention Policy",alignment:"left"},type:"IMAGE",mutability:"MUTABLE"},2:{data:{src:"https://i.ibb.co/dKBJVmq/Policy2-Retention-Policy.png",width:"auto",height:"auto",alignment:"left",alt:"Policy2 Retention Policy"},mutability:"MUTABLE",type:"IMAGE"}},blocks:[{depth:0,inlineStyleRanges:[],type:"unstyled",key:"4nfs6",text:"You have a Microsoft 365 subscription. From the Security & Compliance admin center, you create the retention policies shown in the following table.",entityRanges:[],data:{}},{type:"atomic",depth:0,text:" ",data:{},entityRanges:[{key:0,length:1,offset:0}],key:"6b7cc",inlineStyleRanges:[]},{entityRanges:[],key:"82ubg",depth:0,inlineStyleRanges:[],type:"unstyled",text:"Policy1 is configured as showing in the following exhibit.",data:{}},{key:"1n74n",inlineStyleRanges:[],type:"atomic",depth:0,data:{},entityRanges:[{length:1,key:1,offset:0}],text:" "},{key:"1bram",entityRanges:[],data:{},text:"Policy2 is configured as shown in the following exhibit.",type:"unstyled",depth:0,inlineStyleRanges:[]},{key:"fi15k",text:" ",type:"atomic",depth:0,entityRanges:[{length:1,key:2,offset:0}],inlineStyleRanges:[],data:{}},{data:{},key:"2chn0",depth:0,inlineStyleRanges:[],type:"unstyled",entityRanges:[],text:"For each of the following statements, check the box if the statement is true."}]},answers:[{value:"If a user creates a file in Microsoft OneDrive on January 1, 2018, users can access the file on January 15, 2019",isCorrectAnswer:!0},{value:"If a user deletes a file in Microsoft OneDrive on January 1, 2018, an administrator can recover the file on April 15, 2019",isCorrectAnswer:!0},{value:"If a user creates a file in Microsoft OneDrive on January 1, 2018, an administrator can recover the file on April 15, 2022",isCorrectAnswer:!1}],references:{blocks:[{entityRanges:[],inlineStyleRanges:[],text:"Policy2 is in effect as it has the longer retention period.",data:{},type:"unstyled",key:"dspqb",depth:0},{type:"unstyled",inlineStyleRanges:[],entityRanges:[],data:{},key:"326tf",depth:0,text:"https://docs.microsoft.com/en-us/office365/securitycompliance/retention-policies?redirectSourcePath=%252fen-us%252farticle%252fOverview-of-retention- policies-5e377752-700d-4870-9b6d-12bfc12d2423#the-principles-of-retention-or-what-takes-precedence"}],entityMap:{}}},previousQuestionId:"",nextQuestionId:"",questionId:"S9fwXWmAd",questionIdx:"",questionHtml:'<p>You have a Microsoft 365 subscription. From the Security &amp; Compliance admin center, you create the retention policies shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/F38Xcp1/policy-chart3.png" alt="Policy Chart" style="height: auto;width: auto"/></div>\n<p>Policy1 is configured as showing in the following exhibit.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/Z825ptq/Policy1-Retention-Policy.png" alt="Policy1 Retention Policy" style="height: auto;width: auto"/></div>\n<p>Policy2 is configured as shown in the following exhibit.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/dKBJVmq/Policy2-Retention-Policy.png" alt="Policy2 Retention Policy" style="height: auto;width: auto"/></div>\n<p>For each of the following statements, check the box if the statement is true.</p>\n',referencesHtml:"<p>Policy2 is in effect as it has the longer retention period.</p>\n<p>https://docs.microsoft.com/en-us/office365/securitycompliance/retention-policies?redirectSourcePath=%252fen-us%252farticle%252fOverview-of-retention- policies-5e377752-700d-4870-9b6d-12bfc12d2423#the-principles-of-retention-or-what-takes-precedence</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(a.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=w.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var i=e.data();i.id=e.id;var s,a,o,l="",r="",c=!1,d=t.state.selectedAnswer;i.questions.forEach((function(e,n){c&&(r=e.id,c=!1),t.state.questionId===e.id&&(c=!0,s=e,o=n+1,a&&(l=a.id),s.answered&&(d=s.answered)),a=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var i=E()(n.question),s=E()(n.references);t.setState({question:n,questionHtml:i,referencesHtml:s})})),t.setState({test:i,questionIdx:o,nextQuestionId:r,previousQuestionId:l,selectedAnswer:d})}))):Object(y.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,s=e.target,a=Object(i.a)(this.state.selectedAnswer);if(s.checked)a.push(n);else{var o=a.indexOf(""+n);a.splice(o,1)}this.setState({selectedAnswer:a});var l=Object.assign({},this.state.test);l.questions=l.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=a),e})),w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(l.id).set(l),this.setState({test:l})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(y.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(y.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(i.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},b),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(l.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(r.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:x,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:v,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(u.a,{onClick:this.toggleShowAnswer,style:S},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(u.a,{onClick:this.toggleShowQuestions,style:S},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:S},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=I}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-s-9-fw-x-wm-ad-js-42cebf494d56ec3198e1.js.map