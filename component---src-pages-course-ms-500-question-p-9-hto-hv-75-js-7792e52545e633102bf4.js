(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{"+PhF":function(e,t,s){"use strict";s.r(t);var n=s("KQm4"),a=s("JX7q"),i=s("dI71"),o=s("q1tI"),r=s("YQnL"),l=s("7vrA"),c=s("3Z9Z"),u=s("JI6e"),d=s("cWnB"),h=s("QojX"),m=s("zM5D"),g=s("MBJH"),E=s("Wbzz"),p=s("Jgta"),w=(s("5x/H"),s("bQ8i")),y=s.n(w),v=p.a.firestore(),x={marginTop:"14px",marginBottom:"14px",display:"flex"},S={display:"flex",alignItems:"center",justifyContent:"center"},f={marginTop:"24px"},b={marginTop:"24px"},q=function(e){function t(t){var s;(s=e.call(this,t)||this).setUid=s.setUid.bind(Object(a.a)(s)),s.handleCorrectAnswerChange=s.handleCorrectAnswerChange.bind(Object(a.a)(s)),s.toggleShowAnswer=s.toggleShowAnswer.bind(Object(a.a)(s)),s.toggleShowQuestions=s.toggleShowQuestions.bind(Object(a.a)(s)),s.gotoQuestion=s.gotoQuestion.bind(Object(a.a)(s)),s.toggleEndExam=s.toggleEndExam.bind(Object(a.a)(s)),s.endExam=s.endExam.bind(Object(a.a)(s));var n=new URLSearchParams(t.location.search);return p.a.auth().onAuthStateChanged(s.setUid),s.state={questions:{},uid:"",testId:n.get("testId"),test:{},question:{question:{blocks:[{type:"unstyled",inlineStyleRanges:[],key:"99kfo",depth:0,entityRanges:[],data:{},text:"You have a Microsoft 365 subscription linked to an Azure Active Directory (Azure AD) tenant that contains a user named User1."},{entityRanges:[],depth:0,key:"4791e",type:"unstyled",data:{},text:"You have a Data Subject Request (DSR) case named Case1.",inlineStyleRanges:[]},{entityRanges:[],inlineStyleRanges:[],data:{},depth:0,text:"You need to allow User1 to export the results of Case1. The solution must use the principle of least privilege.",type:"unstyled",key:"6kap3"},{depth:0,text:"Which role should you assign to User1 for Case1?",data:{},key:"7qjeq",type:"unstyled",inlineStyleRanges:[],entityRanges:[]}],entityMap:{}},answers:[{isCorrectAnswer:!0,value:"eDiscovery Manager"},{value:"Security Operator",isCorrectAnswer:!1},{value:"eDiscovery Administrator",isCorrectAnswer:!1},{isCorrectAnswer:!1,value:"Global Reader"}],id:"p9HtoHv75",references:{blocks:[{type:"unstyled",key:"a89km",depth:0,inlineStyleRanges:[],data:{},entityRanges:[],text:"https://docs.microsoft.com/en-us/microsoft-365/compliance/manage-gdpr-data-subject-requests-with-the-dsr-case-tool?view=o365-worldwide#step-1-assign- ediscovery-permissions-to-potential-case-members"}],entityMap:{}}},previousQuestionId:"",nextQuestionId:"",questionId:"p9HtoHv75",questionIdx:"",questionHtml:"<p>You have a Microsoft 365 subscription linked to an Azure Active Directory (Azure AD) tenant that contains a user named User1.</p>\n<p>You have a Data Subject Request (DSR) case named Case1.</p>\n<p>You need to allow User1 to export the results of Case1. The solution must use the principle of least privilege.</p>\n<p>Which role should you assign to User1 for Case1?</p>\n",referencesHtml:"<p>https://docs.microsoft.com/en-us/microsoft-365/compliance/manage-gdpr-data-subject-requests-with-the-dsr-case-tool?view=o365-worldwide#step-1-assign- ediscovery-permissions-to-potential-case-members</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},s}Object(i.a)(t,e);var s=t.prototype;return s.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),v.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var n,a,i,o="",r="",l=!1,c=t.state.selectedAnswer;s.questions.forEach((function(e,s){l&&(r=e.id,l=!1),t.state.questionId===e.id&&(l=!0,n=e,i=s+1,a&&(o=a.id),n.answered&&(c=n.answered)),a=e})),v.collection("Tests").doc("MS-500").collection("Questions").doc(n.id).get().then((function(e){var s=e.data();s.id=e.id;var n=y()(s.question),a=y()(s.references);t.setState({question:s,questionHtml:n,referencesHtml:a})})),t.setState({test:s,questionIdx:i,nextQuestionId:r,previousQuestionId:o,selectedAnswer:c})}))):console.log("redirect to login")},s.handleCorrectAnswerChange=function(e){var t=this,s=e.target.dataset.index,a=e.target,i=Object(n.a)(this.state.selectedAnswer);if(a.checked)i.push(s);else{var o=i.indexOf(""+s);i.splice(o,1)}this.setState({selectedAnswer:i});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),v.collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},s.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},s.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},s.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},s.gotoQuestion=function(e){var t=this;return function(){Object(E.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},s.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,v.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(E.navigate)("/tests/summary?testId="+e.state.testId)}))},s.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(n.a)(t).map((function(t,s){return t.isSelected=e.state.selectedAnswer.includes(""+s),t.optionStyles=Object.assign({},x),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(c.a,null,o.createElement(u.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(u.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(d.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(u.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(d.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,s){return o.createElement("div",{style:t.optionStyles,key:s},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+s,id:"AnswerCheck"+s,"data-index":s,inline:!0,style:S,checked:e.state.selectedAnswer.includes(""+s),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+s},t.value))}))),o.createElement(c.a,null,o.createElement(u.a,null,this.state.answerShown?o.createElement("div",{style:f,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(u.a,{md:8}),o.createElement(u.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(d.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(u.a,{md:2},""!==this.state.nextQuestionId?o.createElement(d.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(u.a,{xs:12,md:6},o.createElement(d.a,{onClick:this.toggleShowAnswer,style:b},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(u.a,{xs:12,md:6,className:"align-right"},o.createElement(d.a,{onClick:this.toggleShowQuestions,style:b},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(u.a,{className:"align-right"},o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning",style:b},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,s){return o.createElement("tr",{key:s,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,s+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(d.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(d.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(d.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=q}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-p-9-hto-hv-75-js-7792e52545e633102bf4.js.map