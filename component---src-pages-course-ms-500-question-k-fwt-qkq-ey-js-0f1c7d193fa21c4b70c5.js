(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{bqoE:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),l=n("YQnL"),r=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),p=n("MBJH"),g=n("Wbzz"),y=n("ES5j"),E=n.n(y),w=n("bQ8i"),f=n.n(w),x={marginTop:"14px",marginBottom:"14px",display:"flex"},v={display:"flex",alignItems:"center",justifyContent:"center"},b={marginTop:"24px"},S={marginTop:"24px"},A=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return"undefined"!=typeof window&&E.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{answers:[{value:"From Device1, User1 can copy data from App1 to App3",isCorrectAnswer:!1},{isCorrectAnswer:!0,value:"From Device2, User1 can copy data from App1 to App2"},{isCorrectAnswer:!0,value:"From Device2, User1 can copy data from App1 to App3"}],references:{blocks:[{inlineStyleRanges:[],depth:0,entityRanges:[],data:{},type:"unstyled",text:"",key:"copgf"}],entityMap:{}},id:"kFwtQkqEy",question:{blocks:[{text:"You have a Microsoft 365 subscription that uses a default domain name of contoso.com.",inlineStyleRanges:[],entityRanges:[],data:{},type:"unstyled",key:"1jrtu",depth:0},{key:"2p5f2",type:"unstyled",depth:0,inlineStyleRanges:[],text:"Microsoft Azure Active Directory (Azure AD) contains the users shown in the following table.",entityRanges:[],data:{}},{inlineStyleRanges:[],data:{},entityRanges:[{length:1,key:0,offset:0}],type:"atomic",key:"5mpad",depth:0,text:" "},{text:"Microsoft Endpoint Manager has two devices enrolled as shown in the following table:",entityRanges:[],key:"abq0p",inlineStyleRanges:[],data:{},depth:0,type:"unstyled"},{type:"atomic",entityRanges:[{length:1,key:1,offset:0}],inlineStyleRanges:[],data:{},text:" ",depth:0,key:"55lm4"},{depth:0,data:{},inlineStyleRanges:[],entityRanges:[],key:"doaun",type:"unstyled",text:"Both devices have three apps named App1, App2, and App3 installed."},{key:"4p6gt",data:{},depth:0,inlineStyleRanges:[],type:"unstyled",text:"You create an app protection policy named ProtectionPolicy1 that has the following settings:",entityRanges:[]},{type:"unordered-list-item",depth:0,key:"5betb",inlineStyleRanges:[],text:"Protected apps: App1",entityRanges:[],data:{}},{entityRanges:[],data:{},type:"unordered-list-item",inlineStyleRanges:[],depth:0,text:"Exempt apps: App2",key:"ai8uj"},{text:"Windows Information Protection mode: Block",entityRanges:[],depth:0,inlineStyleRanges:[],type:"unordered-list-item",data:{},key:"2mjj5"},{text:"You apply ProtectionPolicy1 to Group1 and Group3. You exclude Group2 from ProtectionPolicy1.",key:"bnbu5",entityRanges:[],type:"unstyled",inlineStyleRanges:[],data:{},depth:0},{entityRanges:[],inlineStyleRanges:[],text:"For each of the following statements, check the box if the statement is true.",data:{},key:"1u2nf",depth:0,type:"unstyled"}],entityMap:{0:{data:{src:"https://i.ibb.co/KxwDstM/user-group.png",width:"auto",alignment:"left",height:"auto",alt:"User Group membership chart"},mutability:"MUTABLE",type:"IMAGE"},1:{type:"IMAGE",mutability:"MUTABLE",data:{alt:"Device chart",alignment:"left",src:"https://i.ibb.co/c6d1kCM/device-chart.png",height:"auto",width:"auto"}}}}},previousQuestionId:"",nextQuestionId:"",questionId:"kFwtQkqEy",questionIdx:"",questionHtml:'<p>You have a Microsoft 365 subscription that uses a default domain name of contoso.com.</p>\n<p>Microsoft Azure Active Directory (Azure AD) contains the users shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/KxwDstM/user-group.png" alt="User Group membership chart" style="height: auto;width: auto"/></div>\n<p>Microsoft Endpoint Manager has two devices enrolled as shown in the following table:</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/c6d1kCM/device-chart.png" alt="Device chart" style="height: auto;width: auto"/></div>\n<p>Both devices have three apps named App1, App2, and App3 installed.</p>\n<p>You create an app protection policy named ProtectionPolicy1 that has the following settings:</p>\n<ul>\n<li>Protected apps: App1</li>\n<li>Exempt apps: App2</li>\n<li>Windows Information Protection mode: Block</li>\n</ul>\n<p>You apply ProtectionPolicy1 to Group1 and Group3. You exclude Group2 from ProtectionPolicy1.</p>\n<p>For each of the following statements, check the box if the statement is true.</p>\n',referencesHtml:"<p></p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=E.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,i,o,l="",r="",c=!1,d=t.state.selectedAnswer;s.questions.forEach((function(e,n){c&&(r=e.id,c=!1),t.state.questionId===e.id&&(c=!0,a=e,o=n+1,i&&(l=i.id),a.answered&&(d=a.answered)),i=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=f()(n.question),a=f()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:o,nextQuestionId:r,previousQuestionId:l,selectedAnswer:d})}))):Object(g.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var l=Object.assign({},this.state.test);l.questions=l.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(l.id).set(l),this.setState({test:l})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(g.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(g.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},x),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(l.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(r.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:v,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:b,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(u.a,{onClick:this.toggleShowAnswer,style:S},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(u.a,{onClick:this.toggleShowQuestions,style:S},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:S},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(p.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=A}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-k-fwt-qkq-ey-js-0f1c7d193fa21c4b70c5.js.map