(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{"pSj+":function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),w=n("ES5j"),E=n.n(w),y=n("bQ8i"),f=n.n(y),x={marginTop:"14px",marginBottom:"14px",display:"flex"},b={display:"flex",alignItems:"center",justifyContent:"center"},A={marginTop:"24px"},v={marginTop:"24px"},S=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return"undefined"!=typeof window&&E.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{answers:[{isCorrectAnswer:!0,value:"A finance department user who has an IP address from the Montreal office will be prompted for Azure MFA credentials"},{isCorrectAnswer:!0,value:"A finance department user who works from home and who has an IP address of 193.77.140.140 will be prompted for Azure MFA credentials"},{value:"A finance department user who has an IP address from the New York office will be prompted for Azure MFA credentials.",isCorrectAnswer:!1}],question:{entityMap:{0:{mutability:"MUTABLE",data:{width:"auto",alt:"Location IP Chart",height:"auto",alignment:"left",src:"https://i.ibb.co/wp0swj8/location-ip-chart.png"},type:"IMAGE"},1:{mutability:"MUTABLE",data:{alignment:"left",src:"https://i.ibb.co/wKTcDQJ/location-trusted-chart.png",width:"auto",alt:"Location trusted chart",height:"auto"},type:"IMAGE"}},blocks:[{key:"2qdub",entityRanges:[],depth:0,type:"unstyled",data:{},text:"Each office connects to the Internet by using a NAT device. The offices have the IP addresses shown in the following table.",inlineStyleRanges:[]},{data:{},entityRanges:[{key:0,length:1,offset:0}],key:"a0epk",depth:0,text:" ",type:"atomic",inlineStyleRanges:[]},{inlineStyleRanges:[],text:"Named locations are defined in Azure AD as shown in the following table",entityRanges:[],depth:0,key:"77fts",data:{},type:"unstyled"},{data:{},key:"5u74p",type:"atomic",text:" ",inlineStyleRanges:[],depth:0,entityRanges:[{offset:0,key:1,length:1}]},{text:"From the Multi-Factor Authentication page, an address space of 198.35.3.0/24 is defined in the trusted IPs list.",data:{},type:"unstyled",depth:0,entityRanges:[],inlineStyleRanges:[],key:"4pacn"},{data:{},text:"Azure Multi-Factor Authentication (MFA) is enabled for the users in the finance department.",depth:0,entityRanges:[],key:"8d983",inlineStyleRanges:[],type:"unstyled"},{data:{},entityRanges:[],key:"bcs2k",type:"unstyled",depth:0,text:"You are evaluating which finance department users will be prompted for Azure MFA credentials.",inlineStyleRanges:[]},{type:"unstyled",data:{},depth:0,inlineStyleRanges:[],text:"Check the box next to each true statement.",entityRanges:[],key:"99kqm"}]},references:{entityMap:{},blocks:[{text:"https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition#:~:text=and%20IPv6%20addresses.-,Named%20locations,that%20you%20wish%20to%20block.",data:{},depth:0,key:"6icl3",inlineStyleRanges:[],type:"unstyled",entityRanges:[]}]},id:"PUWxVj7lH"},previousQuestionId:"",nextQuestionId:"",questionId:"PUWxVj7lH",questionIdx:"",questionHtml:'<p>Each office connects to the Internet by using a NAT device. The offices have the IP addresses shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/wp0swj8/location-ip-chart.png" alt="Location IP Chart" style="height: auto;width: auto"/></div>\n<p>Named locations are defined in Azure AD as shown in the following table</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/wKTcDQJ/location-trusted-chart.png" alt="Location trusted chart" style="height: auto;width: auto"/></div>\n<p>From the Multi-Factor Authentication page, an address space of 198.35.3.0/24 is defined in the trusted IPs list.</p>\n<p>Azure Multi-Factor Authentication (MFA) is enabled for the users in the finance department.</p>\n<p>You are evaluating which finance department users will be prompted for Azure MFA credentials.</p>\n<p>Check the box next to each true statement.</p>\n',referencesHtml:"<p>https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition#:~:text=and%20IPv6%20addresses.-,Named%20locations,that%20you%20wish%20to%20block.</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=E.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,i,o,r="",l="",c=!1,d=t.state.selectedAnswer;s.questions.forEach((function(e,n){c&&(l=e.id,c=!1),t.state.questionId===e.id&&(c=!0,a=e,o=n+1,i&&(r=i.id),a.answered&&(d=a.answered)),i=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=f()(n.question),a=f()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:o,nextQuestionId:l,previousQuestionId:r,selectedAnswer:d})}))):Object(p.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},x),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:b,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:A,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(u.a,{onClick:this.toggleShowAnswer,style:v},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(u.a,{onClick:this.toggleShowQuestions,style:v},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:v},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=S}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-pu-wx-vj-7-l-h-js-9021fe208f85b4cc984d.js.map