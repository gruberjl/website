(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{OqdH:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),r=n("q1tI"),o=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),u=n("cWnB"),m=n("QojX"),h=n("zM5D"),g=n("MBJH"),E=n("Wbzz"),w=n("ES5j"),p=n.n(w),y=n("bQ8i"),f=n.n(y),v={marginTop:"14px",marginBottom:"14px",display:"flex"},x={display:"flex",alignItems:"center",justifyContent:"center"},S={marginTop:"24px"},q={marginTop:"24px"},I=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return"undefined"!=typeof window&&p.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{references:{blocks:[{data:{},key:"33tk7",depth:0,entityRanges:[],type:"unstyled",inlineStyleRanges:[],text:"https://docs.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure"},{type:"unstyled",inlineStyleRanges:[],text:"https://docs.microsoft.com/en-us/azure/active-directory/roles/permissions-reference?view=o365-worldwide#privileged-role-administrator",key:"du7c",depth:0,data:{},entityRanges:[]}],entityMap:{}},answers:[{value:"Assign the Privileged administrator role to User9 and configure a mobile phone number for User9",isCorrectAnswer:!0},{isCorrectAnswer:!1,value:"Assign the Compliance administrator role to User9 and configure a mobile phone number for User9"},{value:"Assign the Security administrator role to User9",isCorrectAnswer:!1},{value:"Assign the Global administrator role to User9",isCorrectAnswer:!1}],id:"1qkfdkiBU",question:{entityMap:{},blocks:[{inlineStyleRanges:[{length:80,offset:0,style:"BOLD"}],entityRanges:[],type:"unstyled",key:"571u",depth:0,data:{},text:"Technical Requirements - Contoso identifies the following technical requirements:"},{depth:0,inlineStyleRanges:[],text:"Use the principle of least privilege",key:"8aupe",data:{},type:"unordered-list-item",entityRanges:[]},{depth:0,key:"cd4qg",inlineStyleRanges:[],text:"Ensure that User9 can enable and configure Azure AD Privileged Identity Management",entityRanges:[],data:{},type:"unordered-list-item"},{type:"unstyled",key:"543ar",depth:0,entityRanges:[],data:{},inlineStyleRanges:[],text:"You need to meet the technical requirements for User9. What should you do?"}]}},previousQuestionId:"",nextQuestionId:"",questionId:"1qkfdkiBU",questionIdx:"",questionHtml:"<p><strong>Technical Requirements - Contoso identifies the following technical requirements</strong>:</p>\n<ul>\n<li>Use the principle of least privilege</li>\n<li>Ensure that User9 can enable and configure Azure AD Privileged Identity Management</li>\n</ul>\n<p>You need to meet the technical requirements for User9. What should you do?</p>\n",referencesHtml:"<p>https://docs.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure</p>\n<p>https://docs.microsoft.com/en-us/azure/active-directory/roles/permissions-reference?view=o365-worldwide#privileged-role-administrator</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=p.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,i,r,o="",l="",c=!1,d=t.state.selectedAnswer;s.questions.forEach((function(e,n){c&&(l=e.id,c=!1),t.state.questionId===e.id&&(c=!0,a=e,r=n+1,i&&(o=i.id),a.answered&&(d=a.answered)),i=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=f()(n.question),a=f()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:r,nextQuestionId:l,previousQuestionId:o,selectedAnswer:d})}))):Object(E.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var r=i.indexOf(""+n);i.splice(r,1)}this.setState({selectedAnswer:i});var o=Object.assign({},this.state.test);o.questions=o.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),p.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(o.id).set(o),this.setState({test:o})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(E.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,p.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(E.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},v),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),r.createElement(o.a,null,r.createElement("main",null,r.createElement("div",null,r.createElement(l.a,null,r.createElement(c.a,null,r.createElement(d.a,{md:8},r.createElement("h1",null,"Question ",this.state.questionIdx)),r.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?r.createElement(u.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),r.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?r.createElement(u.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):r.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),r.createElement(c.a,null,""!==this.state.questionHtml?r.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),r.createElement(c.a,null,t.map((function(t,n){return r.createElement("div",{style:t.optionStyles,key:n},r.createElement(m.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:x,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),r.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),r.createElement(c.a,null,r.createElement(d.a,null,this.state.answerShown?r.createElement("div",{style:S,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),r.createElement(c.a,{className:"align-right"},r.createElement(d.a,{md:8}),r.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?r.createElement(u.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),r.createElement(d.a,{md:2},""!==this.state.nextQuestionId?r.createElement(u.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):r.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),r.createElement(c.a,null,r.createElement(d.a,{xs:12,md:6},r.createElement(u.a,{onClick:this.toggleShowAnswer,style:q},this.state.answerShown?r.createElement("span",null,"Hide Answer"):r.createElement("span",null,"Show Answer"))),r.createElement(d.a,{xs:12,md:6,className:"align-right"},r.createElement(u.a,{onClick:this.toggleShowQuestions,style:q},this.state.questionsShown?r.createElement("span",null,"Hide Question List"):r.createElement("span",null,"Show Question List")))),r.createElement(c.a,null,r.createElement(d.a,{className:"align-right"},r.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:q},"End Exam"))))),r.createElement(h.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},r.createElement(h.a.Header,null,r.createElement(h.a.Title,null,"Showing Test Questions")),r.createElement(h.a.Body,null,r.createElement(g.a,{striped:!0,bordered:!0,hover:!0},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"#"),r.createElement("th",null,"Answer"))),r.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return r.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},r.createElement("td",null,n+1),r.createElement("td",null,t.answered))})):""))),r.createElement(h.a.Footer,null,r.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),r.createElement(h.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},r.createElement(h.a.Header,null,r.createElement(h.a.Title,null,"Are you sure?")),r.createElement(h.a.Body,null,this.state.endExamText),r.createElement(h.a.Footer,null,r.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),r.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(r.Component);t.default=I}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-1-qkfdki-bu-js-4f6d492be2573bcc3c75.js.map