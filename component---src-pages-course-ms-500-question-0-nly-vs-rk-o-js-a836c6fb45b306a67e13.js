(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{tXjI:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),o=n("JX7q"),a=n("dI71"),i=n("q1tI"),l=n("YQnL"),r=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),f=n("Wbzz"),E=n("ES5j"),y=n.n(E),w=n("bQ8i"),p=n.n(w),b={marginTop:"14px",marginBottom:"14px",display:"flex"},v={display:"flex",alignItems:"center",justifyContent:"center"},S={marginTop:"24px"},x={marginTop:"24px"},I=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(o.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(o.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(o.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(o.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(o.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(o.a)(n)),n.endExam=n.endExam.bind(Object(o.a)(n));var s=new URLSearchParams(t.location.search);return y.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{answers:[{isCorrectAnswer:!1,value:"The Setting compliance report in the Microsoft Endpoint Manager admin center"},{value:"Sign-ins in the Azure Active Directory admin center",isCorrectAnswer:!0},{isCorrectAnswer:!1,value:"Activity log in the Cloud App Security admin center"},{value:"Audit logs in the Azure Active Directory admin center",isCorrectAnswer:!1}],id:"0nlyVSRkO",references:{blocks:[{depth:0,text:"https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/troubleshoot-conditional-access",data:{},key:"7q72o",entityRanges:[],inlineStyleRanges:[{offset:0,style:"color-rgb(33,37,41)",length:106},{style:"bgcolor-rgb(255,255,255)",length:106,offset:0},{style:"fontsize-14.4",length:106,offset:0},{offset:0,length:106,style:'fontfamily--apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}],type:"unstyled"}],entityMap:{}},question:{entityMap:{},blocks:[{entityRanges:[],type:"unstyled",key:"ef37h",text:"You have several Conditional Access policies that block non-compliant devices from connecting to services.\nYou need to identify which devices are blocked by which policies.\nWhat should you use?",data:{},inlineStyleRanges:[{offset:0,style:"color-rgb(80,80,80)",length:106},{style:"color-rgb(80,80,80)",length:65,offset:107},{offset:173,style:"color-rgb(80,80,80)",length:20},{style:"bgcolor-rgb(255,255,255)",length:106,offset:0},{length:65,offset:107,style:"bgcolor-rgb(255,255,255)"},{length:20,offset:173,style:"bgcolor-rgb(255,255,255)"},{offset:0,style:"fontsize-16",length:106},{offset:107,style:"fontsize-16",length:65},{style:"fontsize-16",length:20,offset:173},{length:106,style:'fontfamily-Roboto Condensed", sans-serif',offset:0},{offset:107,length:65,style:'fontfamily-Roboto Condensed", sans-serif'},{style:'fontfamily-Roboto Condensed", sans-serif',length:20,offset:173}],depth:0}]}},previousQuestionId:"",nextQuestionId:"",questionId:"0nlyVSRkO",questionIdx:"",questionHtml:'<p><span style="color: rgb(80,80,80);background-color: rgb(255,255,255);font-size: 16px;font-family: Roboto Condensed", sans-serif;">You have several Conditional Access policies that block non-compliant devices from connecting to services.</span><br><span style="color: rgb(80,80,80);background-color: rgb(255,255,255);font-size: 16px;font-family: Roboto Condensed", sans-serif;">You need to identify which devices are blocked by which policies.</span><br><span style="color: rgb(80,80,80);background-color: rgb(255,255,255);font-size: 16px;font-family: Roboto Condensed", sans-serif;">What should you use?</span></p>\n',referencesHtml:'<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14.4;font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;">https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/troubleshoot-conditional-access</span></p>\n',selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(a.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=y.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var o,a,i,l="",r="",c=!1,d=t.state.selectedAnswer;s.questions.forEach((function(e,n){c&&(r=e.id,c=!1),t.state.questionId===e.id&&(c=!0,o=e,i=n+1,a&&(l=a.id),o.answered&&(d=o.answered)),a=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(o.id).get().then((function(e){var n=e.data();n.id=e.id;var s=p()(n.question),o=p()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:o})})),t.setState({test:s,questionIdx:i,nextQuestionId:r,previousQuestionId:l,selectedAnswer:d})}))):Object(f.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,o=e.target,a=Object(s.a)(this.state.selectedAnswer);if(o.checked)a.push(n);else{var i=a.indexOf(""+n);a.splice(i,1)}this.setState({selectedAnswer:a});var l=Object.assign({},this.state.test);l.questions=l.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=a),e})),y.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(l.id).set(l),this.setState({test:l})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(f.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,y.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(f.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},b),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),i.createElement(l.a,null,i.createElement("main",null,i.createElement("div",null,i.createElement(r.a,null,i.createElement(c.a,null,i.createElement(d.a,{md:8},i.createElement("h1",null,"Question ",this.state.questionIdx)),i.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?i.createElement(u.a,{as:f.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),i.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?i.createElement(u.a,{as:f.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):i.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),i.createElement(c.a,null,""!==this.state.questionHtml?i.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),i.createElement(c.a,null,t.map((function(t,n){return i.createElement("div",{style:t.optionStyles,key:n},i.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:v,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),i.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),i.createElement(c.a,null,i.createElement(d.a,null,this.state.answerShown?i.createElement("div",{style:S,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),i.createElement(c.a,{className:"align-right"},i.createElement(d.a,{md:8}),i.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?i.createElement(u.a,{as:f.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),i.createElement(d.a,{md:2},""!==this.state.nextQuestionId?i.createElement(u.a,{as:f.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):i.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),i.createElement(c.a,null,i.createElement(d.a,{xs:12,md:6},i.createElement(u.a,{onClick:this.toggleShowAnswer,style:x},this.state.answerShown?i.createElement("span",null,"Hide Answer"):i.createElement("span",null,"Show Answer"))),i.createElement(d.a,{xs:12,md:6,className:"align-right"},i.createElement(u.a,{onClick:this.toggleShowQuestions,style:x},this.state.questionsShown?i.createElement("span",null,"Hide Question List"):i.createElement("span",null,"Show Question List")))),i.createElement(c.a,null,i.createElement(d.a,{className:"align-right"},i.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:x},"End Exam"))))),i.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},i.createElement(m.a.Header,null,i.createElement(m.a.Title,null,"Showing Test Questions")),i.createElement(m.a.Body,null,i.createElement(g.a,{striped:!0,bordered:!0,hover:!0},i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"#"),i.createElement("th",null,"Answer"))),i.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return i.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},i.createElement("td",null,n+1),i.createElement("td",null,t.answered))})):""))),i.createElement(m.a.Footer,null,i.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),i.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},i.createElement(m.a.Header,null,i.createElement(m.a.Title,null,"Are you sure?")),i.createElement(m.a.Body,null,this.state.endExamText),i.createElement(m.a.Footer,null,i.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),i.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(i.Component);t.default=I}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-0-nly-vs-rk-o-js-a836c6fb45b306a67e13.js.map