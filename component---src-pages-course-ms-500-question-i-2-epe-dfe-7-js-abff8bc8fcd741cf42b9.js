(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{EfL3:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),l=n("YQnL"),r=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),y=n("ES5j"),E=n.n(y),w=n("bQ8i"),f=n.n(w),x={marginTop:"14px",marginBottom:"14px",display:"flex"},v={display:"flex",alignItems:"center",justifyContent:"center"},b={marginTop:"24px"},S={marginTop:"24px"},A=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return"undefined"!=typeof window&&E.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{answers:[{isCorrectAnswer:!0,value:"If UserB requests the Application Administrator role, User1 can approve the request of UserB."},{isCorrectAnswer:!0,value:"If UserB requests the Application Administrator role, User2 can approve the request of UserB."},{value:"If UserC requests the Application Administrator role, User3 can approve the request of UserC.",isCorrectAnswer:!1}],question:{entityMap:{0:{type:"IMAGE",mutability:"MUTABLE",data:{width:"auto",alt:"Name Role Chart",src:"https://i.ibb.co/Cs1cMM8/Chart5.png",height:"auto",alignment:"left"}},1:{mutability:"MUTABLE",data:{src:"https://i.ibb.co/FVBbzdZ/Chart6.png",height:"auto",alignment:"left",width:"auto",alt:"Name Assignment Type Chart"},type:"IMAGE"}},blocks:[{entityRanges:[],data:{},text:"You have a Microsoft 365 subscription that contains the users shown in the following table.",depth:0,inlineStyleRanges:[],type:"unstyled",key:"2u085"},{depth:0,inlineStyleRanges:[],key:"7nj32",type:"atomic",entityRanges:[{length:1,offset:0,key:0}],data:{},text:" "},{type:"unstyled",depth:0,entityRanges:[],inlineStyleRanges:[],data:{},text:"You implement Azure Active Directory (Azure AD) Privileged Identity Management (PIM).",key:"q8g8"},{key:"9t9i0",inlineStyleRanges:[],text:"From PIM, you review the Application Administrator role and discover the users shown in the following table.",entityRanges:[],data:{},type:"unstyled",depth:0},{inlineStyleRanges:[],type:"atomic",text:" ",depth:0,data:{},entityRanges:[{length:1,offset:0,key:1}],key:"4e1ch"},{data:{},text:"The Application Administrator role is configured to use the following settings in PIM:",key:"dqtr5",depth:0,type:"unstyled",entityRanges:[],inlineStyleRanges:[]},{entityRanges:[],key:"fs7s9",type:"unordered-list-item",text:"Maximum activation duration: 1 hour",inlineStyleRanges:[],depth:0,data:{}},{type:"unordered-list-item",depth:0,inlineStyleRanges:[],text:"Notifications: Disable",data:{},key:"8gga0",entityRanges:[]},{data:{},key:"95k91",depth:0,text:"Incident/Request ticket: Disable",entityRanges:[],inlineStyleRanges:[],type:"unordered-list-item"},{text:"Multi-Factor Authentication: Disable",depth:0,inlineStyleRanges:[],data:{},entityRanges:[],key:"81cbp",type:"unordered-list-item"},{entityRanges:[],type:"unordered-list-item",inlineStyleRanges:[],data:{},key:"91o23",text:"Require approval: Enable",depth:0},{data:{},depth:0,entityRanges:[],inlineStyleRanges:[],text:"Selected approver: No results",key:"aqgof",type:"unordered-list-item"},{depth:0,text:"Check the box next to each of the following statements if the statement is true.",key:"bpudn",inlineStyleRanges:[],entityRanges:[],data:{},type:"unstyled"}]},references:{entityMap:{},blocks:[{data:{},depth:0,text:"",type:"unstyled",key:"jsce",entityRanges:[],inlineStyleRanges:[]}]},id:"i2EPEDfe7"},previousQuestionId:"",nextQuestionId:"",questionId:"i2EPEDfe7",questionIdx:"",questionHtml:'<p>You have a Microsoft 365 subscription that contains the users shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/Cs1cMM8/Chart5.png" alt="Name Role Chart" style="height: auto;width: auto"/></div>\n<p>You implement Azure Active Directory (Azure AD) Privileged Identity Management (PIM).</p>\n<p>From PIM, you review the Application Administrator role and discover the users shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/FVBbzdZ/Chart6.png" alt="Name Assignment Type Chart" style="height: auto;width: auto"/></div>\n<p>The Application Administrator role is configured to use the following settings in PIM:</p>\n<ul>\n<li>Maximum activation duration: 1 hour</li>\n<li>Notifications: Disable</li>\n<li>Incident/Request ticket: Disable</li>\n<li>Multi-Factor Authentication: Disable</li>\n<li>Require approval: Enable</li>\n<li>Selected approver: No results</li>\n</ul>\n<p>Check the box next to each of the following statements if the statement is true.</p>\n',referencesHtml:"<p></p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=E.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,i,o,l="",r="",c=!1,d=t.state.selectedAnswer;s.questions.forEach((function(e,n){c&&(r=e.id,c=!1),t.state.questionId===e.id&&(c=!0,a=e,o=n+1,i&&(l=i.id),a.answered&&(d=a.answered)),i=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=f()(n.question),a=f()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:o,nextQuestionId:r,previousQuestionId:l,selectedAnswer:d})}))):Object(p.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var l=Object.assign({},this.state.test);l.questions=l.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(l.id).set(l),this.setState({test:l})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},x),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(l.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(r.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:v,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:b,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(u.a,{onClick:this.toggleShowAnswer,style:S},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(u.a,{onClick:this.toggleShowQuestions,style:S},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:S},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=A}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-i-2-epe-dfe-7-js-abff8bc8fcd741cf42b9.js.map