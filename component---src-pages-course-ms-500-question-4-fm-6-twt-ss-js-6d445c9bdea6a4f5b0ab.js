(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{aptG:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),r=n("q1tI"),o=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),u=n("JI6e"),d=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),w=n("ES5j"),y=n.n(w),E=(n("5x/H"),n("bQ8i")),v=n.n(E),S=y.a.firestore(),f={marginTop:"14px",marginBottom:"14px",display:"flex"},x={display:"flex",alignItems:"center",justifyContent:"center"},k={marginTop:"24px"},b={marginTop:"24px"},A=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return y.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{question:{blocks:[{type:"unstyled",depth:0,key:"3v2ja",text:"You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",inlineStyleRanges:[],data:{},entityRanges:[]},{inlineStyleRanges:[],type:"atomic",text:" ",depth:0,data:{},entityRanges:[{offset:0,length:1,key:0}],key:"27jlo"},{text:"You plan to implement Azure Active Directory (Azure AD) Identity Protection.",data:{},entityRanges:[],depth:0,inlineStyleRanges:[],type:"unstyled",key:"bmv6i"},{text:"You need to identify which users can perform the following actions:",inlineStyleRanges:[],entityRanges:[],key:"688jb",depth:0,data:{},type:"unstyled"},{entityRanges:[],inlineStyleRanges:[],text:"Configure a user risk policy.",data:{},type:"unordered-list-item",key:"8fh21",depth:0},{key:"cvls6",type:"unordered-list-item",data:{},inlineStyleRanges:[],depth:0,text:"View the risky users' report.",entityRanges:[]},{text:"Which users should you identify? To answer, select the appropriate options in the answer area.",depth:0,entityRanges:[],key:"4caqj",data:{},type:"unstyled",inlineStyleRanges:[]},{inlineStyleRanges:[],type:"unstyled",data:{},entityRanges:[],key:"ddog7",depth:0,text:"NOTE: Each correct selection is worth one point."}],entityMap:{0:{data:{height:"auto",alignment:"left",width:"auto",alt:"Users and roles",src:"https://i.ibb.co/JQH5d40/users-and-roles.png"},mutability:"MUTABLE",type:"IMAGE"}}},id:"4Fm6TwtSS",references:{blocks:[{key:"4bds8",type:"unstyled",inlineStyleRanges:[],data:{},entityRanges:[],depth:0,text:"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection"}],entityMap:{}},answers:[{value:"User 1 can configure a user risk policy",isCorrectAnswer:!0},{isCorrectAnswer:!1,value:"User 2 can configure a user risk policy"},{value:"User 3 can configure a user risk policy",isCorrectAnswer:!0},{isCorrectAnswer:!1,value:"User 4 can configure a user risk policy"},{value:"User 1 can view the risky users report",isCorrectAnswer:!0},{isCorrectAnswer:!1,value:"User 2 can view the risky users report"},{value:"User 3 can view the risky users report",isCorrectAnswer:!0},{isCorrectAnswer:!0,value:"User 4 can view the risky users report"}]},previousQuestionId:"",nextQuestionId:"",questionId:"4Fm6TwtSS",questionIdx:"",questionHtml:'<p>You have a Microsoft 365 E5 subscription that contains the users shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/JQH5d40/users-and-roles.png" alt="Users and roles" style="height: auto;width: auto"/></div>\n<p>You plan to implement Azure Active Directory (Azure AD) Identity Protection.</p>\n<p>You need to identify which users can perform the following actions:</p>\n<ul>\n<li>Configure a user risk policy.</li>\n<li>View the risky users\' report.</li>\n</ul>\n<p>Which users should you identify? To answer, select the appropriate options in the answer area.</p>\n<p>NOTE: Each correct selection is worth one point.</p>\n',referencesHtml:"<p>https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),S.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,a,i,r="",o="",l=!1,c=t.state.selectedAnswer;n.questions.forEach((function(e,n){l&&(o=e.id,l=!1),t.state.questionId===e.id&&(l=!0,s=e,i=n+1,a&&(r=a.id),s.answered&&(c=s.answered)),a=e})),S.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=v()(n.question),a=v()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:n,questionIdx:i,nextQuestionId:o,previousQuestionId:r,selectedAnswer:c})}))):Object(p.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var r=i.indexOf(""+n);i.splice(r,1)}this.setState({selectedAnswer:i});var o=Object.assign({},this.state.test);o.questions=o.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),S.collection("users").doc(this.state.uid).collection("tests").doc(o.id).set(o),this.setState({test:o})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,S.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},f),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),r.createElement(o.a,null,r.createElement("main",null,r.createElement("div",null,r.createElement(l.a,null,r.createElement(c.a,null,r.createElement(u.a,{md:8},r.createElement("h1",null,"Question ",this.state.questionIdx)),r.createElement(u.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),r.createElement(u.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):r.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),r.createElement(c.a,null,""!==this.state.questionHtml?r.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),r.createElement(c.a,null,t.map((function(t,n){return r.createElement("div",{style:t.optionStyles,key:n},r.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:x,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),r.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),r.createElement(c.a,null,r.createElement(u.a,null,this.state.answerShown?r.createElement("div",{style:k,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),r.createElement(c.a,{className:"align-right"},r.createElement(u.a,{md:8}),r.createElement(u.a,{md:2}," ",""!==this.state.previousQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),r.createElement(u.a,{md:2},""!==this.state.nextQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):r.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),r.createElement(c.a,null,r.createElement(u.a,{xs:12,md:6},r.createElement(d.a,{onClick:this.toggleShowAnswer,style:b},this.state.answerShown?r.createElement("span",null,"Hide Answer"):r.createElement("span",null,"Show Answer"))),r.createElement(u.a,{xs:12,md:6,className:"align-right"},r.createElement(d.a,{onClick:this.toggleShowQuestions,style:b},this.state.questionsShown?r.createElement("span",null,"Hide Question List"):r.createElement("span",null,"Show Question List")))),r.createElement(c.a,null,r.createElement(u.a,{className:"align-right"},r.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning",style:b},"End Exam"))))),r.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},r.createElement(m.a.Header,null,r.createElement(m.a.Title,null,"Showing Test Questions")),r.createElement(m.a.Body,null,r.createElement(g.a,{striped:!0,bordered:!0,hover:!0},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"#"),r.createElement("th",null,"Answer"))),r.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return r.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},r.createElement("td",null,n+1),r.createElement("td",null,t.answered))})):""))),r.createElement(m.a.Footer,null,r.createElement(d.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),r.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},r.createElement(m.a.Header,null,r.createElement(m.a.Title,null,"Are you sure?")),r.createElement(m.a.Body,null,this.state.endExamText),r.createElement(m.a.Footer,null,r.createElement(d.a,{variant:"primary",onClick:this.endExam},"Yes"),r.createElement(d.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(r.Component);t.default=A}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-4-fm-6-twt-ss-js-6d445c9bdea6a4f5b0ab.js.map