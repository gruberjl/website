(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{aRTL:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),u=n("JI6e"),d=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),E=n("ES5j"),w=n.n(E),y=(n("5x/H"),n("bQ8i")),v=n.n(y),S=w.a.firestore(),x={marginTop:"14px",marginBottom:"14px",display:"flex"},f={display:"flex",alignItems:"center",justifyContent:"center"},q={marginTop:"24px"},A={marginTop:"24px"},I=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return w.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{question:{entityMap:{},blocks:[{depth:0,key:"5b8cp",text:"Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",data:{},entityRanges:[],inlineStyleRanges:[{offset:0,style:"BOLD",length:4},{length:277,style:"ITALIC",offset:6}],type:"unstyled"},{text:"After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.",key:"dulf",depth:0,entityRanges:[],inlineStyleRanges:[{offset:0,length:149,style:"ITALIC"}],type:"unstyled",data:{}},{type:"unstyled",data:{},entityRanges:[],key:"fms4m",depth:0,text:"You have an on-premises Active Directory domain named contoso.com.",inlineStyleRanges:[]},{type:"unstyled",key:"182nd",entityRanges:[],inlineStyleRanges:[],depth:0,text:"You install and run Azure AD Connect on a server named Server1 that runs Windows Server.",data:{}},{entityRanges:[],type:"unstyled",depth:0,data:{},key:"7e4ft",inlineStyleRanges:[],text:"You need to view Azure AD Connect events."},{inlineStyleRanges:[],type:"unstyled",key:"f8scp",entityRanges:[],data:{},text:"You use the Security event log on Server1.",depth:0},{type:"unstyled",data:{},depth:0,entityRanges:[],inlineStyleRanges:[],key:"3frnr",text:"Does that meet the goal?"}]},answers:[{isCorrectAnswer:!1,value:"Yes"},{value:"No",isCorrectAnswer:!0}],id:"vMvpJ-PjO",references:{blocks:[{entityRanges:[],type:"unstyled",depth:0,data:{},text:"https://support.pingidentity.com/s/article/PingOne-How-to-troubleshoot-an-AD-Connect-Instance",key:"596ls",inlineStyleRanges:[]}],entityMap:{}}},previousQuestionId:"",nextQuestionId:"",questionId:"vMvpJ-PjO",questionIdx:"",questionHtml:"<p><strong>Note</strong>: <em>This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.</em></p>\n<p><em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em></p>\n<p>You have an on-premises Active Directory domain named contoso.com.</p>\n<p>You install and run Azure AD Connect on a server named Server1 that runs Windows Server.</p>\n<p>You need to view Azure AD Connect events.</p>\n<p>You use the Security event log on Server1.</p>\n<p>Does that meet the goal?</p>\n",referencesHtml:"<p>https://support.pingidentity.com/s/article/PingOne-How-to-troubleshoot-an-AD-Connect-Instance</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),S.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,a,i,o="",r="",l=!1,c=t.state.selectedAnswer;n.questions.forEach((function(e,n){l&&(r=e.id,l=!1),t.state.questionId===e.id&&(l=!0,s=e,i=n+1,a&&(o=a.id),s.answered&&(c=s.answered)),a=e})),S.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=v()(n.question),a=v()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:n,questionIdx:i,nextQuestionId:r,previousQuestionId:o,selectedAnswer:c})}))):Object(p.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),S.collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,S.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},x),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(c.a,null,o.createElement(u.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(u.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(u.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:f,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(u.a,null,this.state.answerShown?o.createElement("div",{style:q,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(u.a,{md:8}),o.createElement(u.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(u.a,{md:2},""!==this.state.nextQuestionId?o.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(u.a,{xs:12,md:6},o.createElement(d.a,{onClick:this.toggleShowAnswer,style:A},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(u.a,{xs:12,md:6,className:"align-right"},o.createElement(d.a,{onClick:this.toggleShowQuestions,style:A},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(u.a,{className:"align-right"},o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning",style:A},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(d.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(d.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(d.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=I}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-v-mvp-j-pj-o-js-b6284dbd112919aa0de9.js.map