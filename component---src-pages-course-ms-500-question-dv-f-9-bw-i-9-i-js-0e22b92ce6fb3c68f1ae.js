(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"9xZ7":function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),i=n("JX7q"),a=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),u=n("3Z9Z"),c=n("JI6e"),d=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),y=n("Wbzz"),p=n("ES5j"),w=n.n(p),f=(n("5x/H"),n("bQ8i")),E=n.n(f),S=w.a.firestore(),x={marginTop:"14px",marginBottom:"14px",display:"flex"},v={display:"flex",alignItems:"center",justifyContent:"center"},b={marginTop:"24px"},k={marginTop:"24px"},I=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(i.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(i.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(i.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(i.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(i.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(i.a)(n)),n.endExam=n.endExam.bind(Object(i.a)(n));var s=new URLSearchParams(t.location.search);return w.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{id:"dvF9bwI9i",question:{blocks:[{data:{},entityRanges:[],key:"f01np",depth:0,inlineStyleRanges:[{style:"BOLD",length:33,offset:0}],text:"Internal Network Infrastructure -",type:"unstyled"},{key:"1linq",type:"unstyled",inlineStyleRanges:[],text:"The network contains a single domain forest. The forest functional level is Windows Server 2016.",depth:0,data:{},entityRanges:[]},{data:{},text:"Users are subject to sign-in hour restrictions as defined in Active Directory.",key:"3kajh",type:"unstyled",inlineStyleRanges:[],entityRanges:[],depth:0},{data:{},key:"dbesd",inlineStyleRanges:[],depth:0,entityRanges:[],text:"The network has the IP address ranges shown in the following table.",type:"unstyled"},{type:"atomic",inlineStyleRanges:[],key:"9m2gt",depth:0,data:{},text:" ",entityRanges:[{key:0,length:1,offset:0}]},{key:"dj2i8",inlineStyleRanges:[{style:"BOLD",length:70,offset:0}],text:"Security Requirements - Multi-factor authentication (MFA) Requirements",entityRanges:[],type:"unstyled",depth:0,data:{}},{depth:0,inlineStyleRanges:[],entityRanges:[],type:"unordered-list-item",text:"Security features of Microsoft Office 365 and Azure will be tested by using pilot Azure user accounts.",data:{},key:"314k9"},{key:"1r75r",entityRanges:[],text:"You identify the following requirements for testing MFA:",data:{},type:"unordered-list-item",depth:0,inlineStyleRanges:[]},{inlineStyleRanges:[],type:"unordered-list-item",text:"Pilot users must use MFA unless they are signing in from the internal network of the Chicago office. MFA must NOT be used on the Chicago office internal network.",entityRanges:[],data:{},depth:0,key:"70n98"},{entityRanges:[],depth:0,data:{},text:"If an authentication attempt is suspicious, MFA must be used, regardless of the user location.",key:"6u08o",inlineStyleRanges:[],type:"unordered-list-item"},{depth:0,type:"unordered-list-item",data:{},entityRanges:[],inlineStyleRanges:[],text:"Any disruption of legitimate authentication attempts must be minimized.",key:"6vknc"},{type:"unstyled",inlineStyleRanges:[],key:"5rj92",text:"Which IP address space should you include in the Trusted IP MFA configuration?",depth:0,data:{},entityRanges:[]}],entityMap:{0:{mutability:"MUTABLE",type:"IMAGE",data:{alt:"Location chart",height:"auto",alignment:"left",src:"https://i.ibb.co/9rgYK1j/location-chart.png",width:"auto"}}}},references:{entityMap:{},blocks:[{type:"unstyled",depth:0,data:{},inlineStyleRanges:[],entityRanges:[],text:"https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-mfasettings#trusted-ips",key:"4eaep"}]},answers:[{value:"131.107.83.0/28",isCorrectAnswer:!0},{isCorrectAnswer:!1,value:"192.168.16.0/20"},{value:"172.16.0.0/24",isCorrectAnswer:!1},{value:"192.168.0.0/20",isCorrectAnswer:!1}]},previousQuestionId:"",nextQuestionId:"",questionId:"dvF9bwI9i",questionIdx:"",questionHtml:'<p><strong>Internal Network Infrastructure -</strong></p>\n<p>The network contains a single domain forest. The forest functional level is Windows Server 2016.</p>\n<p>Users are subject to sign-in hour restrictions as defined in Active Directory.</p>\n<p>The network has the IP address ranges shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/9rgYK1j/location-chart.png" alt="Location chart" style="height: auto;width: auto"/></div>\n<p><strong>Security Requirements - Multi-factor authentication (MFA) Requirements</strong></p>\n<ul>\n<li>Security features of Microsoft Office 365 and Azure will be tested by using pilot Azure user accounts.</li>\n<li>You identify the following requirements for testing MFA:</li>\n<li>Pilot users must use MFA unless they are signing in from the internal network of the Chicago office. MFA must NOT be used on the Chicago office internal network.</li>\n<li>If an authentication attempt is suspicious, MFA must be used, regardless of the user location.</li>\n<li>Any disruption of legitimate authentication attempts must be minimized.</li>\n</ul>\n<p>Which IP address space should you include in the Trusted IP MFA configuration?</p>\n',referencesHtml:"<p>https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-mfasettings#trusted-ips</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(a.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),S.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,i,a,o="",r="",l=!1,u=t.state.selectedAnswer;n.questions.forEach((function(e,n){l&&(r=e.id,l=!1),t.state.questionId===e.id&&(l=!0,s=e,a=n+1,i&&(o=i.id),s.answered&&(u=s.answered)),i=e})),S.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=E()(n.question),i=E()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:i})})),t.setState({test:n,questionIdx:a,nextQuestionId:r,previousQuestionId:o,selectedAnswer:u})}))):Object(y.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,i=e.target,a=Object(s.a)(this.state.selectedAnswer);if(i.checked)a.push(n);else{var o=a.indexOf(""+n);a.splice(o,1)}this.setState({selectedAnswer:a});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=a),e})),S.collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(y.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,S.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(y.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},x),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(u.a,null,o.createElement(c.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(c.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(d.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(c.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(d.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(u.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(u.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:v,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(u.a,null,o.createElement(c.a,null,this.state.answerShown?o.createElement("div",{style:b,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(u.a,{className:"align-right"},o.createElement(c.a,{md:8}),o.createElement(c.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(d.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(c.a,{md:2},""!==this.state.nextQuestionId?o.createElement(d.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(u.a,null,o.createElement(c.a,{xs:12,md:6},o.createElement(d.a,{onClick:this.toggleShowAnswer,style:k},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(c.a,{xs:12,md:6,className:"align-right"},o.createElement(d.a,{onClick:this.toggleShowQuestions,style:k},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(u.a,null,o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{onClick:this.toggleEndExam,variant:"warning",style:k},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(d.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(d.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(d.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=I}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-dv-f-9-bw-i-9-i-js-0e22b92ce6fb3c68f1ae.js.map