(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{VRA5:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),r=n("q1tI"),o=n("YQnL"),l=n("7vrA"),u=n("3Z9Z"),c=n("JI6e"),d=n("cWnB"),m=n("QojX"),h=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),y=n("ES5j"),E=n.n(y),w=n("bQ8i"),v=n.n(w),f={marginTop:"14px",marginBottom:"14px",display:"flex"},S={display:"flex",alignItems:"center",justifyContent:"center"},x={marginTop:"24px"},b={marginTop:"24px"},A=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return E.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{id:"nqg-OA0M5",question:{blocks:[{depth:0,key:"3v3m9",text:"You have a Microsoft 365 tenant.",data:{},type:"unstyled",entityRanges:[],inlineStyleRanges:[]},{text:"User attributes are synced from your companies human resources (HR) system to Azure Active Directory (Azure AD).",data:{},entityRanges:[],key:"cph5f",depth:0,inlineStyleRanges:[],type:"unstyled"},{type:"unstyled",depth:0,inlineStyleRanges:[],key:"62b11",text:"The company has four departments that each has its own Microsoft SharePoint Online site. Each site must be accessed only by the users from its respective department.",entityRanges:[],data:{}},{key:"a1nta",type:"unstyled",inlineStyleRanges:[],text:"You are designing an access management solution that has the following requirements:",data:{},depth:0,entityRanges:[]},{data:{},inlineStyleRanges:[],text:"Users must be added automatically to the security group of their department.",entityRanges:[],key:"7l3dd",type:"unordered-list-item",depth:0},{depth:0,text:"All security group owners must verify once quarterly that only the users in their department belong to their group.",type:"unordered-list-item",data:{},inlineStyleRanges:[],entityRanges:[],key:"5pl79"},{key:"3rtu",depth:0,data:{},entityRanges:[],type:"unstyled",inlineStyleRanges:[],text:"Which components should you recommend to meet the requirements?"}],entityMap:{}},answers:[{isCorrectAnswer:!0,value:"Users must be automatically added to the security group for their department: dynamic groups"},{isCorrectAnswer:!1,value:"Users must be automatically added to the security group for their department: Access packages"},{isCorrectAnswer:!1,value:"Users must be automatically added to the security group for their department: Conditional access policies"},{value:"Users must be automatically added to the security group for their department: Assigned groups",isCorrectAnswer:!1},{isCorrectAnswer:!0,value:"Group owners must verify membership of department groups: Access reviews"},{value:"Group owners must verify membership of department groups: Access packages",isCorrectAnswer:!1},{value:"Group owners must verify membership of department groups: Dynamic groups",isCorrectAnswer:!1},{isCorrectAnswer:!1,value:"Group owners must verify membership of department groups: Data loss prevention (DLP) policies"}],references:{entityMap:{},blocks:[{type:"unstyled",depth:0,entityRanges:[],data:{},text:"",inlineStyleRanges:[],key:"3gl08"}]}},previousQuestionId:"",nextQuestionId:"",questionId:"nqg-OA0M5",questionIdx:"",questionHtml:"<p>You have a Microsoft 365 tenant.</p>\n<p>User attributes are synced from your companies human resources (HR) system to Azure Active Directory (Azure AD).</p>\n<p>The company has four departments that each has its own Microsoft SharePoint Online site. Each site must be accessed only by the users from its respective department.</p>\n<p>You are designing an access management solution that has the following requirements:</p>\n<ul>\n<li>Users must be added automatically to the security group of their department.</li>\n<li>All security group owners must verify once quarterly that only the users in their department belong to their group.</li>\n</ul>\n<p>Which components should you recommend to meet the requirements?</p>\n",referencesHtml:"<p></p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=E.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,i,r,o="",l="",u=!1,c=t.state.selectedAnswer;s.questions.forEach((function(e,n){u&&(l=e.id,u=!1),t.state.questionId===e.id&&(u=!0,a=e,r=n+1,i&&(o=i.id),a.answered&&(c=a.answered)),i=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=v()(n.question),a=v()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:r,nextQuestionId:l,previousQuestionId:o,selectedAnswer:c})}))):Object(p.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var r=i.indexOf(""+n);i.splice(r,1)}this.setState({selectedAnswer:i});var o=Object.assign({},this.state.test);o.questions=o.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(o.id).set(o),this.setState({test:o})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},f),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),r.createElement(o.a,null,r.createElement("main",null,r.createElement("div",null,r.createElement(l.a,null,r.createElement(u.a,null,r.createElement(c.a,{md:8},r.createElement("h1",null,"Question ",this.state.questionIdx)),r.createElement(c.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),r.createElement(c.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):r.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),r.createElement(u.a,null,""!==this.state.questionHtml?r.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),r.createElement(u.a,null,t.map((function(t,n){return r.createElement("div",{style:t.optionStyles,key:n},r.createElement(m.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:S,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),r.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),r.createElement(u.a,null,r.createElement(c.a,null,this.state.answerShown?r.createElement("div",{style:x,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),r.createElement(u.a,{className:"align-right"},r.createElement(c.a,{md:8}),r.createElement(c.a,{md:2}," ",""!==this.state.previousQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),r.createElement(c.a,{md:2},""!==this.state.nextQuestionId?r.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):r.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),r.createElement(u.a,null,r.createElement(c.a,{xs:12,md:6},r.createElement(d.a,{onClick:this.toggleShowAnswer,style:b},this.state.answerShown?r.createElement("span",null,"Hide Answer"):r.createElement("span",null,"Show Answer"))),r.createElement(c.a,{xs:12,md:6,className:"align-right"},r.createElement(d.a,{onClick:this.toggleShowQuestions,style:b},this.state.questionsShown?r.createElement("span",null,"Hide Question List"):r.createElement("span",null,"Show Question List")))),r.createElement(u.a,null,r.createElement(c.a,{className:"align-right"},r.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning",style:b},"End Exam"))))),r.createElement(h.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},r.createElement(h.a.Header,null,r.createElement(h.a.Title,null,"Showing Test Questions")),r.createElement(h.a.Body,null,r.createElement(g.a,{striped:!0,bordered:!0,hover:!0},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"#"),r.createElement("th",null,"Answer"))),r.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return r.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},r.createElement("td",null,n+1),r.createElement("td",null,t.answered))})):""))),r.createElement(h.a.Footer,null,r.createElement(d.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),r.createElement(h.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},r.createElement(h.a.Header,null,r.createElement(h.a.Title,null,"Are you sure?")),r.createElement(h.a.Body,null,this.state.endExamText),r.createElement(h.a.Footer,null,r.createElement(d.a,{variant:"primary",onClick:this.endExam},"Yes"),r.createElement(d.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(r.Component);t.default=A}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-nqg-oa-0-m-5-js-1e3867a70177b33d088c.js.map