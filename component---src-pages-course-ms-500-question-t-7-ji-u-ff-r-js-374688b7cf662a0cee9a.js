(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{eBkX:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),u=n("JI6e"),d=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),w=n("ES5j"),E=n.n(w),y=n("bQ8i"),f=n.n(y),x={marginTop:"14px",marginBottom:"14px",display:"flex"},v={display:"flex",alignItems:"center",justifyContent:"center"},S={marginTop:"24px"},A={marginTop:"24px"},b=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return"undefined"!=typeof window&&E.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{question:{blocks:[{inlineStyleRanges:[],text:"You have a Microsoft 365 subscription that uses a default domain name of contoso.com.",type:"unstyled",depth:0,entityRanges:[],data:{},key:"2h8s2"},{entityRanges:[],key:"2t9f1",inlineStyleRanges:[],depth:0,type:"unstyled",text:"The multi-factor authentication (MFA) service settings are configured as shown in the exhibit.",data:{}},{depth:0,entityRanges:[],data:{},key:"4qp44",text:"",inlineStyleRanges:[],type:"unstyled"},{key:"2317e",data:{},entityRanges:[{length:1,key:0,offset:0}],type:"atomic",text:" ",inlineStyleRanges:[],depth:0},{data:{},key:"ccd7r",depth:0,type:"unstyled",text:" In contoso.com, you create the users shown in the following table.",entityRanges:[{key:1,length:1,offset:0}],inlineStyleRanges:[]},{entityRanges:[],inlineStyleRanges:[],type:"unstyled",data:{},text:"",depth:0,key:"eiese"},{entityRanges:[{offset:0,length:1,key:2}],depth:0,key:"fndgp",data:{},type:"atomic",inlineStyleRanges:[],text:" "},{entityRanges:[],inlineStyleRanges:[],text:"What is the effect of the configuration? To answer, select the appropriate options in the answer area.",data:{},depth:0,type:"unstyled",key:"ep4bt"},{key:"clpoc",data:{},entityRanges:[],inlineStyleRanges:[],text:"NOTE: Each correct selection is worth one point.",depth:0,type:"unstyled"}],entityMap:{0:{mutability:"MUTABLE",type:"IMAGE",data:{height:"auto",width:"auto",alt:"Multi-Factor Authentication",alignment:"left",src:"https://i.ibb.co/pQps3R2/MFA.png"}},1:{mutability:"MUTABLE",data:{width:"auto",height:"auto",src:"https://www.examtopics.com/assets/media/exam-media/03686/0002800001.png",alt:"Multi-Factor Authentication Settings"},type:"IMAGE"},2:{data:{alignment:"left",height:"auto",src:"https://i.ibb.co/dt2zr8s/chart1.png",alt:"Chart1",width:"auto"},mutability:"MUTABLE",type:"IMAGE"}}},references:{entityMap:{},blocks:[{key:"5mu1d",type:"unstyled",text:"https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-userstates",entityRanges:[],data:{},depth:0,inlineStyleRanges:[]}]},id:"-T7jiUFfR",answers:[{isCorrectAnswer:!1,value:"User1: Can sign in to the My Apps portal without using MFA"},{isCorrectAnswer:!1,value:"User1: Completed the MFA registration"},{value:"User1: Must complete the MFA registration at the next sign-in",isCorrectAnswer:!0},{isCorrectAnswer:!1,value:"User2: Can sign in to the My Apps portal without using MFA"},{value:"User2: Must use app passwords for legacy apps",isCorrectAnswer:!0},{value:"User2: Must use an app password to sign in to the My Apps portal",isCorrectAnswer:!1}]},previousQuestionId:"",nextQuestionId:"",questionId:"-T7jiUFfR",questionIdx:"",questionHtml:'<p>You have a Microsoft 365 subscription that uses a default domain name of contoso.com.</p>\n<p>The multi-factor authentication (MFA) service settings are configured as shown in the exhibit.</p>\n<p></p>\n<div style="text-align:left;"><img src="https://i.ibb.co/pQps3R2/MFA.png" alt="Multi-Factor Authentication" style="height: auto;width: auto"/></div>\n<p><img src="https://www.examtopics.com/assets/media/exam-media/03686/0002800001.png" alt="Multi-Factor Authentication Settings" style="height: auto;width: auto"/>In contoso.com, you create the users shown in the following table.</p>\n<p></p>\n<div style="text-align:left;"><img src="https://i.ibb.co/dt2zr8s/chart1.png" alt="Chart1" style="height: auto;width: auto"/></div>\n<p>What is the effect of the configuration? To answer, select the appropriate options in the answer area.</p>\n<p>NOTE: Each correct selection is worth one point.</p>\n',referencesHtml:"<p>https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-userstates</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=E.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,i,o,r="",l="",c=!1,u=t.state.selectedAnswer;s.questions.forEach((function(e,n){c&&(l=e.id,c=!1),t.state.questionId===e.id&&(c=!0,a=e,o=n+1,i&&(r=i.id),a.answered&&(u=a.answered)),i=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=f()(n.question),a=f()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:o,nextQuestionId:l,previousQuestionId:r,selectedAnswer:u})}))):Object(p.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},x),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(c.a,null,o.createElement(u.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(u.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(u.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:v,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(u.a,null,this.state.answerShown?o.createElement("div",{style:S,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(u.a,{md:8}),o.createElement(u.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(u.a,{md:2},""!==this.state.nextQuestionId?o.createElement(d.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(u.a,{xs:12,md:6},o.createElement(d.a,{onClick:this.toggleShowAnswer,style:A},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(u.a,{xs:12,md:6,className:"align-right"},o.createElement(d.a,{onClick:this.toggleShowQuestions,style:A},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(u.a,{className:"align-right"},o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning",style:A},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(d.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(d.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(d.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=b}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-t-7-ji-u-ff-r-js-374688b7cf662a0cee9a.js.map