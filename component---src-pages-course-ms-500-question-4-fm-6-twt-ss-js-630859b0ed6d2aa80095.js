(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{aptG:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),r=n("q1tI"),o=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),u=n("JI6e"),d=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),w=n("ES5j"),y=n.n(w),E=n("bQ8i"),v=n.n(E),f={marginTop:"14px",marginBottom:"14px",display:"flex"},S={display:"flex",alignItems:"center",justifyContent:"center"},x={marginTop:"24px"},k={marginTop:"24px"},b=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return"undefined"!=typeof window&&y.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{id:"4Fm6TwtSS",answers:[{value:"User 1 can configure a user risk policy",isCorrectAnswer:!0},{isCorrectAnswer:!1,value:"User 2 can configure a user risk policy"},{value:"User 3 can configure a user risk policy",isCorrectAnswer:!0},{isCorrectAnswer:!1,value:"User 4 can configure a user risk policy"},{value:"User 1 can view the risky users report",isCorrectAnswer:!0},{isCorrectAnswer:!1,value:"User 2 can view the risky users report"},{isCorrectAnswer:!0,value:"User 3 can view the risky users report"},{value:"User 4 can view the risky users report",isCorrectAnswer:!0}],question:{entityMap:{0:{type:"IMAGE",data:{height:"auto",alignment:"left",width:"auto",src:"https://i.ibb.co/JQH5d40/users-and-roles.png",alt:"Users and roles"},mutability:"MUTABLE"}},blocks:[{depth:0,inlineStyleRanges:[],text:"You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",data:{},entityRanges:[],key:"3v2ja",type:"unstyled"},{type:"atomic",inlineStyleRanges:[],key:"27jlo",text:" ",data:{},depth:0,entityRanges:[{length:1,offset:0,key:0}]},{inlineStyleRanges:[],entityRanges:[],depth:0,key:"bmv6i",type:"unstyled",text:"You plan to implement Azure Active Directory (Azure AD) Identity Protection.",data:{}},{depth:0,text:"You need to identify which users can perform the following actions:",key:"688jb",entityRanges:[],data:{},inlineStyleRanges:[],type:"unstyled"},{data:{},type:"unordered-list-item",inlineStyleRanges:[],depth:0,entityRanges:[],key:"8fh21",text:"Configure a user risk policy."},{inlineStyleRanges:[],depth:0,text:"View the risky users' report.",entityRanges:[],key:"cvls6",data:{},type:"unordered-list-item"},{key:"4caqj",type:"unstyled",inlineStyleRanges:[],data:{},text:"Which users should you identify? To answer, select the appropriate options in the answer area.",entityRanges:[],depth:0},{entityRanges:[],inlineStyleRanges:[],text:"NOTE: Each correct selection is worth one point.",data:{},key:"ddog7",type:"unstyled",depth:0}]},references:{blocks:[{key:"4bds8",type:"unstyled",entityRanges:[],text:"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection",data:{},depth:0,inlineStyleRanges:[]}],entityMap:{}}},previousQuestionId:"",nextQuestionId:"",questionId:"4Fm6TwtSS",questionIdx:"",questionHtml:'<p>You have a Microsoft 365 E5 subscription that contains the users shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/JQH5d40/users-and-roles.png" alt="Users and roles" style="height: auto;width: auto"/></div>\n<p>You plan to implement Azure Active Directory (Azure AD) Identity Protection.</p>\n<p>You need to identify which users can perform the following actions:</p>\n<ul>\n<li>Configure a user risk policy.</li>\n<li>View the risky users\' report.</li>\n</ul>\n<p>Which users should you identify? To answer, select the appropriate options in the answer area.</p>\n<p>NOTE: Each correct selection is worth one point.</p>\n',referencesHtml:"<p>https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=y.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,i,r,o="",l="",c=!1,u=t.state.selectedAnswer;s.questions.forEach((function(e,n){c&&(l=e.id,c=!1),t.state.questionId===e.id&&(c=!0,a=e,r=n+1,i&&(o=i.id),a.answered&&(u=a.answered)),i=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=v()(n.question),a=v()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:r,nextQuestionId:l,previousQuestionId:o,selectedAnswer:u})}))):Object(p.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var r=i.indexOf(""+n);i.splice(r,1)}this.setState({selectedAnswer:i});var o=Object.assign({},this.state.test);o.questions=o.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),y.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(o.id).set(o),this.setState({test:o})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,y.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},f),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),r.createElement(o.a,null,r.createElement("main",null,r.createElement("div",null,r.createElement(l.a,null,r.createElement(c.a,null,r.createElement(u.a,{md:8},r.createElement("h1",null,"Question ",this.state.questionIdx)),r.createElement(u.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),r.createElement(u.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):r.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),r.createElement(c.a,null,""!==this.state.questionHtml?r.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),r.createElement(c.a,null,t.map((function(t,n){return r.createElement("div",{style:t.optionStyles,key:n},r.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:S,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),r.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),r.createElement(c.a,null,r.createElement(u.a,null,this.state.answerShown?r.createElement("div",{style:x,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),r.createElement(c.a,{className:"align-right"},r.createElement(u.a,{md:8}),r.createElement(u.a,{md:2}," ",""!==this.state.previousQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),r.createElement(u.a,{md:2},""!==this.state.nextQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):r.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),r.createElement(c.a,null,r.createElement(u.a,{xs:12,md:6},r.createElement(d.a,{onClick:this.toggleShowAnswer,style:k},this.state.answerShown?r.createElement("span",null,"Hide Answer"):r.createElement("span",null,"Show Answer"))),r.createElement(u.a,{xs:12,md:6,className:"align-right"},r.createElement(d.a,{onClick:this.toggleShowQuestions,style:k},this.state.questionsShown?r.createElement("span",null,"Hide Question List"):r.createElement("span",null,"Show Question List")))),r.createElement(c.a,null,r.createElement(u.a,{className:"align-right"},r.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning",style:k},"End Exam"))))),r.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},r.createElement(m.a.Header,null,r.createElement(m.a.Title,null,"Showing Test Questions")),r.createElement(m.a.Body,null,r.createElement(g.a,{striped:!0,bordered:!0,hover:!0},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"#"),r.createElement("th",null,"Answer"))),r.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return r.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},r.createElement("td",null,n+1),r.createElement("td",null,t.answered))})):""))),r.createElement(m.a.Footer,null,r.createElement(d.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),r.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},r.createElement(m.a.Header,null,r.createElement(m.a.Title,null,"Are you sure?")),r.createElement(m.a.Body,null,this.state.endExamText),r.createElement(m.a.Footer,null,r.createElement(d.a,{variant:"primary",onClick:this.endExam},"Yes"),r.createElement(d.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(r.Component);t.default=b}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-4-fm-6-twt-ss-js-630859b0ed6d2aa80095.js.map