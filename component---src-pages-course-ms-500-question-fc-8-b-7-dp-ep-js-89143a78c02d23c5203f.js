(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{zBHX:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),r=n("q1tI"),o=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),u=n("JI6e"),d=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),E=n("Wbzz"),y=n("Jgta"),w=(n("5x/H"),n("bQ8i")),p=n.n(w),A=y.a.firestore(),v={marginTop:"14px",marginBottom:"14px",display:"flex"},f={display:"flex",alignItems:"center",justifyContent:"center"},S={marginTop:"24px"},x={marginTop:"24px"},k=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return y.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{question:{blocks:[{key:"2eoh4",entityRanges:[],depth:0,text:"Cloud Infrastructure:",data:{},inlineStyleRanges:[{offset:0,style:"BOLD",length:21}],type:"unstyled"},{data:{},key:"7etia",entityRanges:[],type:"unordered-list-item",text:"Microsoft Azure Active Directory (Azure AD) Connect is installed and uses the default authentication settings. User accounts are not yet synced to Azure AD.",depth:0,inlineStyleRanges:[]},{key:"94rat",inlineStyleRanges:[{offset:0,style:"BOLD",length:21}],entityRanges:[],depth:0,text:"Security Requirements:",data:{},type:"unstyled"},{entityRanges:[],data:{},depth:0,inlineStyleRanges:[],key:"emjre",text:"Use Azure Advanced Threat Protection (ATP) to detect any security threats that target the forest",type:"unordered-list-item"},{key:"1vqcf",data:{},depth:0,inlineStyleRanges:[],type:"unordered-list-item",text:"Prevent users locked out of Active Directory from signing in to Azure AD and Active Directory",entityRanges:[]},{depth:0,inlineStyleRanges:[],entityRanges:[],data:{},key:"8kkm9",type:"unordered-list-item",text:"Configure domain-joined servers to ensure that they report sensor data to Microsoft Defender ATP"},{depth:0,key:"32kcl",type:"unordered-list-item",inlineStyleRanges:[],entityRanges:[],data:{},text:"Prevent access to Azure resources for the guest user accounts by default"},{inlineStyleRanges:[],data:{},type:"unordered-list-item",depth:0,entityRanges:[],key:"890f",text:"Ensure that all domain-joined computers are registered to Azure AD"}],entityMap:{}},references:{blocks:[{entityRanges:[],data:{},type:"unstyled",text:"How should you configure Azure AD Connect?",depth:0,key:"5ipu7",inlineStyleRanges:[]}],entityMap:{}},id:"Fc8B7DpEP",answers:[{value:"User sign-in settings: Password Synchronization with single-sign on",isCorrectAnswer:!1},{value:"User sign-in settings: Pass-through authentication with single-sign on",isCorrectAnswer:!0},{value:"User sign-in settings: Federation with Active Directory Federation Services (AD FS)",isCorrectAnswer:!1},{isCorrectAnswer:!0,value:"Device options: Hybrid Azure AD Join"},{isCorrectAnswer:!1,value:"Device options: Enable Device writeback"},{value:"Device options: Disable Device writeback",isCorrectAnswer:!1}]},previousQuestionId:"",nextQuestionId:"",questionId:"Fc8B7DpEP",questionIdx:"",questionHtml:"<p><strong>Cloud Infrastructure:</strong></p>\n<ul>\n<li>Microsoft Azure Active Directory (Azure AD) Connect is installed and uses the default authentication settings. User accounts are not yet synced to Azure AD.</li>\n</ul>\n<p><strong>Security Requirements</strong>:</p>\n<ul>\n<li>Use Azure Advanced Threat Protection (ATP) to detect any security threats that target the forest</li>\n<li>Prevent users locked out of Active Directory from signing in to Azure AD and Active Directory</li>\n<li>Configure domain-joined servers to ensure that they report sensor data to Microsoft Defender ATP</li>\n<li>Prevent access to Azure resources for the guest user accounts by default</li>\n<li>Ensure that all domain-joined computers are registered to Azure AD</li>\n</ul>\n",referencesHtml:"<p>How should you configure Azure AD Connect?</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),A.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,a,i,r="",o="",l=!1,c=t.state.selectedAnswer;n.questions.forEach((function(e,n){l&&(o=e.id,l=!1),t.state.questionId===e.id&&(l=!0,s=e,i=n+1,a&&(r=a.id),s.answered&&(c=s.answered)),a=e})),A.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=p()(n.question),a=p()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:n,questionIdx:i,nextQuestionId:o,previousQuestionId:r,selectedAnswer:c})}))):console.log("redirect to login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var r=i.indexOf(""+n);i.splice(r,1)}this.setState({selectedAnswer:i});var o=Object.assign({},this.state.test);o.questions=o.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),A.collection("users").doc(this.state.uid).collection("tests").doc(o.id).set(o),this.setState({test:o})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(E.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,A.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(E.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},v),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),r.createElement(o.a,null,r.createElement("main",null,r.createElement("div",null,r.createElement(l.a,null,r.createElement(c.a,null,r.createElement(u.a,{md:8},r.createElement("h1",null,"Question ",this.state.questionIdx)),r.createElement(u.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?r.createElement(d.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),r.createElement(u.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?r.createElement(d.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):r.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),r.createElement(c.a,null,""!==this.state.questionHtml?r.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),r.createElement(c.a,null,t.map((function(t,n){return r.createElement("div",{style:t.optionStyles,key:n},r.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:f,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),r.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),r.createElement(c.a,null,r.createElement(u.a,null,this.state.answerShown?r.createElement("div",{style:S,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),r.createElement(c.a,{className:"align-right"},r.createElement(u.a,{md:8}),r.createElement(u.a,{md:2}," ",""!==this.state.previousQuestionId?r.createElement(d.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),r.createElement(u.a,{md:2},""!==this.state.nextQuestionId?r.createElement(d.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):r.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),r.createElement(c.a,null,r.createElement(u.a,{xs:12,md:6},r.createElement(d.a,{onClick:this.toggleShowAnswer,style:x},this.state.answerShown?r.createElement("span",null,"Hide Answer"):r.createElement("span",null,"Show Answer"))),r.createElement(u.a,{xs:12,md:6,className:"align-right"},r.createElement(d.a,{onClick:this.toggleShowQuestions,style:x},this.state.questionsShown?r.createElement("span",null,"Hide Question List"):r.createElement("span",null,"Show Question List")))),r.createElement(c.a,null,r.createElement(u.a,{className:"align-right"},r.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning",style:x},"End Exam"))))),r.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},r.createElement(m.a.Header,null,r.createElement(m.a.Title,null,"Showing Test Questions")),r.createElement(m.a.Body,null,r.createElement(g.a,{striped:!0,bordered:!0,hover:!0},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"#"),r.createElement("th",null,"Answer"))),r.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return r.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},r.createElement("td",null,n+1),r.createElement("td",null,t.answered))})):""))),r.createElement(m.a.Footer,null,r.createElement(d.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),r.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},r.createElement(m.a.Header,null,r.createElement(m.a.Title,null,"Are you sure?")),r.createElement(m.a.Body,null,this.state.endExamText),r.createElement(m.a.Footer,null,r.createElement(d.a,{variant:"primary",onClick:this.endExam},"Yes"),r.createElement(d.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(r.Component);t.default=k}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-fc-8-b-7-dp-ep-js-89143a78c02d23c5203f.js.map