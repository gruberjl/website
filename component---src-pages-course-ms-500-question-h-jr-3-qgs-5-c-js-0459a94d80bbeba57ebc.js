(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{NmRd:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),l=n("YQnL"),r=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),E=n("Wbzz"),p=n("ES5j"),w=n.n(p),y=(n("5x/H"),n("bQ8i")),x=n.n(y),S=w.a.firestore(),f={marginTop:"14px",marginBottom:"14px",display:"flex"},v={display:"flex",alignItems:"center",justifyContent:"center"},b={marginTop:"24px"},C={marginTop:"24px"},I=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return w.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{id:"HJr3Qgs5c",answers:[{value:"Yes",isCorrectAnswer:!1},{isCorrectAnswer:!0,value:"No"},{isCorrectAnswer:!1,value:""}],references:{entityMap:{},blocks:[{key:"nlin",data:{},depth:0,entityRanges:[],type:"unstyled",text:"",inlineStyleRanges:[]}]},question:{blocks:[{key:"545n4",inlineStyleRanges:[],text:"You have a Microsoft 365 tenant. You create a label named CompanyConfidential in Microsoft Azure Information Protection. You add CompanyConfidential to a global policy.",data:{},type:"unstyled",depth:0,entityRanges:[]},{key:"7ct7p",data:{},entityRanges:[],depth:0,text:"A user protects an email message by using CompanyConfidential and sends the label to several external recipients. The external recipients report that they cannot open the email message.",inlineStyleRanges:[],type:"unstyled"},{entityRanges:[],depth:0,inlineStyleRanges:[],data:{},text:"You need to ensure that the external recipients can open protected email messages sent to them.",type:"unstyled",key:"a01v5"},{depth:0,data:{},entityRanges:[],inlineStyleRanges:[],type:"unstyled",key:"2i4cj",text:"You modify the encryption settings of the label."},{inlineStyleRanges:[],depth:0,entityRanges:[],data:{},key:"a4ifq",text:"Does that meet the goal?",type:"unstyled"}],entityMap:{}}},previousQuestionId:"",nextQuestionId:"",questionId:"HJr3Qgs5c",questionIdx:"",questionHtml:"<p>You have a Microsoft 365 tenant. You create a label named CompanyConfidential in Microsoft Azure Information Protection. You add CompanyConfidential to a global policy.</p>\n<p>A user protects an email message by using CompanyConfidential and sends the label to several external recipients. The external recipients report that they cannot open the email message.</p>\n<p>You need to ensure that the external recipients can open protected email messages sent to them.</p>\n<p>You modify the encryption settings of the label.</p>\n<p>Does that meet the goal?</p>\n",referencesHtml:"<p></p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),S.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,a,i,o="",l="",r=!1,c=t.state.selectedAnswer;n.questions.forEach((function(e,n){r&&(l=e.id,r=!1),t.state.questionId===e.id&&(r=!0,s=e,i=n+1,a&&(o=a.id),s.answered&&(c=s.answered)),a=e})),S.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=x()(n.question),a=x()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:n,questionIdx:i,nextQuestionId:l,previousQuestionId:o,selectedAnswer:c})}))):Object(E.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var l=Object.assign({},this.state.test);l.questions=l.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),S.collection("users").doc(this.state.uid).collection("tests").doc(l.id).set(l),this.setState({test:l})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(E.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,S.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(E.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},f),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(l.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(r.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(u.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:v,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:b,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(u.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(u.a,{onClick:this.toggleShowAnswer,style:C},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(u.a,{onClick:this.toggleShowQuestions,style:C},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:C},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=I}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-h-jr-3-qgs-5-c-js-0459a94d80bbeba57ebc.js.map