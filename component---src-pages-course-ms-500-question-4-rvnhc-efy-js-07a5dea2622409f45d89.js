(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{zRSs:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),u=n("JI6e"),d=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),E=n("Wbzz"),w=n("ES5j"),p=n.n(w),f=n("bQ8i"),v=n.n(f),x={marginTop:"14px",marginBottom:"14px",display:"flex"},y={display:"flex",alignItems:"center",justifyContent:"center"},S={marginTop:"24px"},b={marginTop:"24px"},I=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return p.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{id:"4RvnhcEfy",question:{blocks:[{depth:0,inlineStyleRanges:[],entityRanges:[],type:"unstyled",data:{},text:"You have a Microsoft 365 subscription that uses a default domain name of litwareinc.com.",key:"dnpo8"},{key:"2mcb0",data:{},text:"You configure the Sharing settings in Microsoft OneDrive as shown in the following exhibit.",depth:0,entityRanges:[],inlineStyleRanges:[],type:"unstyled"},{data:{},entityRanges:[{key:0,offset:0,length:1}],depth:0,inlineStyleRanges:[],text:" ",key:"8ogn7",type:"atomic"},{data:{},inlineStyleRanges:[],key:"122r8",type:"unstyled",entityRanges:[],depth:0,text:"Click the checkbox next to each correct answer."}],entityMap:{0:{type:"IMAGE",data:{src:"https://i.ibb.co/nP9z6jR/onedrive-sharing-settings.png",width:"auto",height:"auto",alt:"OneDrive Sharing Settings"},mutability:"MUTABLE"}}},answers:[{value:"A user who has an email address of user1@fabrikam.com cannot access OneDrive content",isCorrectAnswer:!0},{value:"A user who has an email address of user1@fabrikam.com can access OneDrive content after a link is created",isCorrectAnswer:!1},{value:"A user who has an email address of user1@fabrikam.com must be added to a group brfore the user can access shared files",isCorrectAnswer:!1},{value:"If a new guest user is created for user2@contoso.com the user cannot access OneDrive content",isCorrectAnswer:!1},{value:"If a new guest user is created for user2@contoso.com the user can access OneDrive content after a link is created",isCorrectAnswer:!0},{value:"If a new guest user is created for user2@contoso.com must be added to a group before the user can access shared files",isCorrectAnswer:!1}],references:{blocks:[{type:"unstyled",inlineStyleRanges:[],text:"https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off",depth:0,data:{},key:"52o7v",entityRanges:[]}],entityMap:{}}},previousQuestionId:"",nextQuestionId:"",questionId:"4RvnhcEfy",questionIdx:"",questionHtml:'<p>You have a Microsoft 365 subscription that uses a default domain name of litwareinc.com.</p>\n<p>You configure the Sharing settings in Microsoft OneDrive as shown in the following exhibit.</p>\n<img src="https://i.ibb.co/nP9z6jR/onedrive-sharing-settings.png" alt="OneDrive Sharing Settings" style="height: auto;width: auto"/>\n<p>Click the checkbox next to each correct answer.</p>\n',referencesHtml:"<p>https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=p.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,i,o,r="",l="",c=!1,u=t.state.selectedAnswer;s.questions.forEach((function(e,n){c&&(l=e.id,c=!1),t.state.questionId===e.id&&(c=!0,a=e,o=n+1,i&&(r=i.id),a.answered&&(u=a.answered)),i=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=v()(n.question),a=v()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:o,nextQuestionId:l,previousQuestionId:r,selectedAnswer:u})}))):Object(E.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),p.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(E.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,p.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(E.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},x),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(c.a,null,o.createElement(u.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(u.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(d.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(u.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(d.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:y,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(u.a,null,this.state.answerShown?o.createElement("div",{style:S,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(u.a,{md:8}),o.createElement(u.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(d.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(u.a,{md:2},""!==this.state.nextQuestionId?o.createElement(d.a,{as:E.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(u.a,{xs:12,md:6},o.createElement(d.a,{onClick:this.toggleShowAnswer,style:b},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(u.a,{xs:12,md:6,className:"align-right"},o.createElement(d.a,{onClick:this.toggleShowQuestions,style:b},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(u.a,{className:"align-right"},o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning",style:b},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(d.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(d.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(d.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=I}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-4-rvnhc-efy-js-07a5dea2622409f45d89.js.map