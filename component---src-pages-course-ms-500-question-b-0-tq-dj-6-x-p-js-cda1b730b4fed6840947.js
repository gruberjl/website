(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"J/Zr":function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),l=n("YQnL"),r=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),h=n("cWnB"),u=n("QojX"),m=n("zM5D"),g=n("MBJH"),w=n("Wbzz"),E=n("Jgta"),y=(n("5x/H"),n("bQ8i")),p=n.n(y),f=E.a.firestore(),b={marginTop:"14px",marginBottom:"14px",display:"flex"},v={display:"flex",alignItems:"center",justifyContent:"center"},x={marginTop:"24px"},S={marginTop:"24px"},I=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return E.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{references:{blocks:[{key:"alqe8",entityRanges:[],text:"",type:"unstyled",data:{},depth:0,inlineStyleRanges:[]}],entityMap:{}},answers:[{value:'If User1 types "Product1 and Product2" in a document and saves the document in Microsoft Word, the document will be assigned Label1 sensitivity automatically.',isCorrectAnswer:!1},{value:'If User1 types "Product2 and Product1" in a document and saves the document in Microsoft Word, the document will be assigned Label2 sensitivity automatically.',isCorrectAnswer:!0},{value:'If User1 types "product2" in a document and saves the document in Microsoft Word, the document will be assigned Label2 sensitivity automatically.',isCorrectAnswer:!1}],question:{blocks:[{inlineStyleRanges:[],type:"unstyled",key:"arbvt",depth:0,data:{},text:"You have the Microsoft Azure Information Protection conditions shown in the following table.",entityRanges:[]},{entityRanges:[{length:1,offset:0,key:0}],inlineStyleRanges:[],text:" ",type:"atomic",key:"8a52q",data:{},depth:0},{key:"culrr",type:"unstyled",entityRanges:[],depth:0,data:{},text:"You have the Azure Information Protection labels shown in the following table.",inlineStyleRanges:[]},{text:" ",data:{},depth:0,entityRanges:[{key:1,offset:0,length:1}],key:"1g4oi",type:"atomic",inlineStyleRanges:[]},{key:"6nhjl",type:"unstyled",depth:0,inlineStyleRanges:[],text:"You have the Azure Information Protection policies shown in the following table.",entityRanges:[],data:{}},{type:"atomic",inlineStyleRanges:[],data:{},depth:0,entityRanges:[{key:2,offset:0,length:1}],text:" ",key:"9i63c"},{inlineStyleRanges:[],text:"For each of the following statements, check the box if the statement is true.",entityRanges:[],key:"3ebb3",type:"unstyled",data:{},depth:0}],entityMap:{0:{data:{src:"https://i.ibb.co/Hz0XgJn/condition-chart.png",height:"auto",alignment:"left",alt:"Condition chart",width:"auto"},type:"IMAGE",mutability:"MUTABLE"},1:{mutability:"MUTABLE",data:{alt:"Label chart",src:"https://i.ibb.co/L05svw0/label-chart.png",alignment:"left",height:"auto",width:"auto"},type:"IMAGE"},2:{mutability:"MUTABLE",type:"IMAGE",data:{width:"auto",src:"https://i.ibb.co/H7SJhBG/policy-chart2.png",alt:"Policy Chart",alignment:"left",height:"auto"}}}},id:"B0tqDJ6xP"},previousQuestionId:"",nextQuestionId:"",questionId:"B0tqDJ6xP",questionIdx:"",questionHtml:'<p>You have the Microsoft Azure Information Protection conditions shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/Hz0XgJn/condition-chart.png" alt="Condition chart" style="height: auto;width: auto"/></div>\n<p>You have the Azure Information Protection labels shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/L05svw0/label-chart.png" alt="Label chart" style="height: auto;width: auto"/></div>\n<p>You have the Azure Information Protection policies shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/H7SJhBG/policy-chart2.png" alt="Policy Chart" style="height: auto;width: auto"/></div>\n<p>For each of the following statements, check the box if the statement is true.</p>\n',referencesHtml:"<p></p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),f.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,a,i,o="",l="",r=!1,c=t.state.selectedAnswer;n.questions.forEach((function(e,n){r&&(l=e.id,r=!1),t.state.questionId===e.id&&(r=!0,s=e,i=n+1,a&&(o=a.id),s.answered&&(c=s.answered)),a=e})),f.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=p()(n.question),a=p()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:n,questionIdx:i,nextQuestionId:l,previousQuestionId:o,selectedAnswer:c})}))):console.log("redirect to login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var l=Object.assign({},this.state.test);l.questions=l.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),f.collection("users").doc(this.state.uid).collection("tests").doc(l.id).set(l),this.setState({test:l})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(w.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,f.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(w.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},b),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(l.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(r.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(h.a,{as:w.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(h.a,{as:w.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(h.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(u.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:v,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:x,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(h.a,{as:w.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(h.a,{as:w.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(h.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(h.a,{onClick:this.toggleShowAnswer,style:S},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(h.a,{onClick:this.toggleShowQuestions,style:S},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(h.a,{onClick:this.toggleEndExam,variant:"warning",style:S},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(h.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(h.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(h.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=I}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-b-0-tq-dj-6-x-p-js-cda1b730b4fed6840947.js.map