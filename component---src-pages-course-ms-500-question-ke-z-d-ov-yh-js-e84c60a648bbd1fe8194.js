(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{"/cC3":function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),y=n("Wbzz"),p=n("Jgta"),E=(n("5x/H"),n("bQ8i")),w=n.n(E),S=p.a.firestore(),x={marginTop:"14px",marginBottom:"14px",display:"flex"},A={display:"flex",alignItems:"center",justifyContent:"center"},b={marginTop:"24px"},v={marginTop:"24px"},f=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return p.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{id:"KeZ-DOvYH",answers:[{isCorrectAnswer:!1,value:"Yes"},{value:"No",isCorrectAnswer:!0}],question:{entityMap:{},blocks:[{data:{},depth:0,key:"3u6p",inlineStyleRanges:[{length:4,style:"BOLD",offset:0},{style:"ITALIC",length:277,offset:6}],text:"Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",entityRanges:[],type:"unstyled"},{key:"ei62j",depth:0,entityRanges:[],data:{},inlineStyleRanges:[{length:149,offset:0,style:"ITALIC"}],text:"After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.",type:"unstyled"},{data:{},inlineStyleRanges:[],text:"You have a Microsoft 365 E5 subscription that is associated to a Microsoft Azure Active Directory (Azure AD) tenant named contoso.com.",entityRanges:[],key:"cc30l",depth:0,type:"unstyled"},{key:"3astg",entityRanges:[],text:"You use Active Directory Federation Services (AD FS) to federate on-premises Active Directory and the tenant. Azure AD Connect has the following settings:",data:{},type:"unstyled",depth:0,inlineStyleRanges:[]},{data:{},entityRanges:[],key:"6ggp7",inlineStyleRanges:[],type:"unordered-list-item",depth:0,text:"Source Anchor: objectGUID"},{data:{},type:"unordered-list-item",depth:0,inlineStyleRanges:[],text:"Password Hash Synchronization: Disabled",key:"463ho",entityRanges:[]},{entityRanges:[],depth:0,inlineStyleRanges:[],key:"cnm43",type:"unordered-list-item",data:{},text:"Password writeback: Disable"},{text:"Directory extension attribute sync: Disabled",data:{},key:"1dvkn",entityRanges:[],type:"unordered-list-item",depth:0,inlineStyleRanges:[]},{key:"1o29h",text:"Azure AD app and attribute filtering: Disabled",entityRanges:[],data:{},inlineStyleRanges:[],type:"unordered-list-item",depth:0},{type:"unordered-list-item",depth:0,key:"1gsmm",inlineStyleRanges:[],text:"Exchange hybrid deployment: Disabled",entityRanges:[],data:{}},{depth:0,entityRanges:[],inlineStyleRanges:[],type:"unordered-list-item",data:{},key:"5d096",text:"User writeback: Disabled"},{type:"unstyled",depth:0,entityRanges:[],key:"al9nt",data:{},text:"You need to ensure that you can use leaked credentials detection in Azure AD Identity Protection.",inlineStyleRanges:[]},{key:"566p9",data:{},entityRanges:[],text:"Solution: You modify the Azure AD app and attribute filtering settings.",depth:0,inlineStyleRanges:[],type:"unstyled"},{text:"Does that meet the goal?",depth:0,entityRanges:[],data:{},inlineStyleRanges:[],key:"dj65",type:"unstyled"}]},references:{entityMap:{},blocks:[{data:{},depth:0,type:"unstyled",entityRanges:[],key:"ejjv2",text:"",inlineStyleRanges:[]}]}},previousQuestionId:"",nextQuestionId:"",questionId:"KeZ-DOvYH",questionIdx:"",questionHtml:"<p><strong>Note</strong>: <em>This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.</em></p>\n<p><em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em></p>\n<p>You have a Microsoft 365 E5 subscription that is associated to a Microsoft Azure Active Directory (Azure AD) tenant named contoso.com.</p>\n<p>You use Active Directory Federation Services (AD FS) to federate on-premises Active Directory and the tenant. Azure AD Connect has the following settings:</p>\n<ul>\n<li>Source Anchor: objectGUID</li>\n<li>Password Hash Synchronization: Disabled</li>\n<li>Password writeback: Disable</li>\n<li>Directory extension attribute sync: Disabled</li>\n<li>Azure AD app and attribute filtering: Disabled</li>\n<li>Exchange hybrid deployment: Disabled</li>\n<li>User writeback: Disabled</li>\n</ul>\n<p>You need to ensure that you can use leaked credentials detection in Azure AD Identity Protection.</p>\n<p>Solution: You modify the Azure AD app and attribute filtering settings.</p>\n<p>Does that meet the goal?</p>\n",referencesHtml:"<p></p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),S.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,a,i,o="",r="",l=!1,c=t.state.selectedAnswer;n.questions.forEach((function(e,n){l&&(r=e.id,l=!1),t.state.questionId===e.id&&(l=!0,s=e,i=n+1,a&&(o=a.id),s.answered&&(c=s.answered)),a=e})),S.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=w()(n.question),a=w()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:n,questionIdx:i,nextQuestionId:r,previousQuestionId:o,selectedAnswer:c})}))):console.log("redirect to login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),S.collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(y.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,S.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(y.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},x),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:A,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:b,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(u.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(u.a,{onClick:this.toggleShowAnswer,style:v},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(u.a,{onClick:this.toggleShowQuestions,style:v},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:v},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=f}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-ke-z-d-ov-yh-js-e84c60a648bbd1fe8194.js.map