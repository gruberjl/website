(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{GzxI:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),i=n("JX7q"),a=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),h=n("cWnB"),u=n("QojX"),m=n("zM5D"),y=n("MBJH"),g=n("Wbzz"),p=n("ES5j"),w=n.n(p),f=(n("5x/H"),n("bQ8i")),E=n.n(f),v=w.a.firestore(),x={marginTop:"14px",marginBottom:"14px",display:"flex"},b={display:"flex",alignItems:"center",justifyContent:"center"},k={marginTop:"24px"},S={marginTop:"24px"},I=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(i.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(i.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(i.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(i.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(i.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(i.a)(n)),n.endExam=n.endExam.bind(Object(i.a)(n));var s=new URLSearchParams(t.location.search);return w.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{answers:[{isCorrectAnswer:!1,value:"John Gruber receives 3 email alerts from Azure AD Identity Protection"},{value:"User2 receives 3 email alerts from Azure AD Identity Protection",isCorrectAnswer:!1},{value:"User3 receives 2 email alerts from Azure AD Identity Protection",isCorrectAnswer:!1}],question:{blocks:[{inlineStyleRanges:[],data:{},entityRanges:[],text:"You have a Microsoft 365 E5 subscription that contains an Azure Active Directory (Azure AD) tenant named contoso.com.",key:"957rl",type:"unstyled",depth:0},{inlineStyleRanges:[],entityRanges:[],data:{},text:"Azure AD Identity Protection alerts for contoso.com are configured as shown in the following exhibit.",key:"8uunj",type:"unstyled",depth:0},{data:{},type:"atomic",inlineStyleRanges:[],key:"d1p7o",entityRanges:[{offset:0,key:0,length:1}],depth:0,text:" "},{data:{},key:"deom4",entityRanges:[],inlineStyleRanges:[],text:"A user named John Gruber is configured to receive alerts from Azure AD Identity Protection.",depth:0,type:"unstyled"},{key:"c9k4u",entityRanges:[],depth:0,text:"You create users in contoso.com as shown in the following table.",data:{},type:"unstyled",inlineStyleRanges:[]},{type:"atomic",inlineStyleRanges:[],data:{},key:"bd174",text:" ",depth:0,entityRanges:[{offset:0,key:1,length:1}]},{key:"10fuk",text:"The users perform the sign-ins shown in the following table.For each of the following statements, lc if the statement is true. Otherwise, selehcetc kNboo.",depth:0,entityRanges:[],inlineStyleRanges:[],data:{},type:"unstyled"},{text:"For each of the following statements, Click the checkbox if the statement is true. Otherwise, select No.",entityRanges:[],type:"unstyled",data:{},inlineStyleRanges:[],depth:0,key:"b6q29"}],entityMap:{0:{mutability:"MUTABLE",type:"IMAGE",data:{src:"https://i.ibb.co/RTNLdyM/Users-At-Risk.png",height:"auto",alt:"Users at Risk screenshot",width:"auto",alignment:"left"}},1:{type:"IMAGE",mutability:"MUTABLE",data:{alt:"User role chart",src:"https://i.ibb.co/wzLBtGJ/user-role-chart.png",alignment:"left",height:"auto",width:"auto"}}}},references:{entityMap:{},blocks:[{entityRanges:[],depth:0,type:"unstyled",key:"b4n82",data:{},text:"Box 1: No",inlineStyleRanges:[{style:"BOLD",length:9,offset:0}]},{text:"User1 will receive the two alerts classified as medium or higher.",depth:0,key:"a4q6n",data:{},type:"unstyled",entityRanges:[],inlineStyleRanges:[]},{key:"fnuqh",text:"Sign-ins from infected device is classified as low. This risk detection identifies IP addresses, not user devices. If several devices are behind a single IP address, and only some are controlled by a bot network, sign-ins from other devices my trigger this event unnecessarily, which is why this risk detection is classified as",type:"unstyled",inlineStyleRanges:[],data:{},entityRanges:[],depth:0},{key:"9rl6v",data:{},entityRanges:[],depth:0,text:"Low.",type:"unstyled",inlineStyleRanges:[]},{inlineStyleRanges:[{style:"BOLD",length:9,offset:0}],text:"Box 2: No",type:"unstyled",entityRanges:[],data:{},key:"fc3ej",depth:0},{entityRanges:[],key:"3shng",data:{},type:"unstyled",depth:0,inlineStyleRanges:[],text:"User2 will receive the two alerts classified as medium or higher."},{depth:0,text:"Email alerts are sent to all global admins, security admins and security readers",inlineStyleRanges:[],entityRanges:[],data:{},key:"81rao",type:"unstyled"},{key:"2hg9v",inlineStyleRanges:[],text:"Sign-ins from infected device is classified as low. This risk detection identifies IP addresses, not user devices. If several devices are behind a single IP address, and only some are controlled by a bot network, sign-ins from other devices my trigger this event unnecessarily, which is why this risk detection is classified as",data:{},type:"unstyled",entityRanges:[],depth:0},{data:{},inlineStyleRanges:[],key:"4u5fb",text:"Low.",type:"unstyled",entityRanges:[],depth:0},{data:{},text:"Box 3: No",inlineStyleRanges:[{style:"BOLD",length:9,offset:0}],depth:0,type:"unstyled",entityRanges:[],key:"shoc"},{key:"9benb",text:"User3 will not receive alters.",data:{},depth:0,type:"unstyled",entityRanges:[],inlineStyleRanges:[]},{text:"Email alerts are sent to all global admins, security admins and security readers.",key:"f82l0",data:{},inlineStyleRanges:[],entityRanges:[],type:"unstyled",depth:0},{key:"49c2a",depth:0,data:{},text:"",type:"unstyled",inlineStyleRanges:[],entityRanges:[]},{data:{},entityRanges:[],type:"unstyled",key:"btri2",inlineStyleRanges:[],text:"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection",depth:0},{depth:0,text:"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/howto-identity-protection-configure-risk-policies",data:{},key:"6d4nq",type:"unstyled",entityRanges:[],inlineStyleRanges:[]}]},id:"vxLbzynWU"},previousQuestionId:"",nextQuestionId:"",questionId:"vxLbzynWU",questionIdx:"",questionHtml:'<p>You have a Microsoft 365 E5 subscription that contains an Azure Active Directory (Azure AD) tenant named contoso.com.</p>\n<p>Azure AD Identity Protection alerts for contoso.com are configured as shown in the following exhibit.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/RTNLdyM/Users-At-Risk.png" alt="Users at Risk screenshot" style="height: auto;width: auto"/></div>\n<p>A user named John Gruber is configured to receive alerts from Azure AD Identity Protection.</p>\n<p>You create users in contoso.com as shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/wzLBtGJ/user-role-chart.png" alt="User role chart" style="height: auto;width: auto"/></div>\n<p>The users perform the sign-ins shown in the following table.For each of the following statements, lc if the statement is true. Otherwise, selehcetc kNboo.</p>\n<p>For each of the following statements, Click the checkbox if the statement is true. Otherwise, select No.</p>\n',referencesHtml:"<p><strong>Box 1: No</strong></p>\n<p>User1 will receive the two alerts classified as medium or higher.</p>\n<p>Sign-ins from infected device is classified as low. This risk detection identifies IP addresses, not user devices. If several devices are behind a single IP address, and only some are controlled by a bot network, sign-ins from other devices my trigger this event unnecessarily, which is why this risk detection is classified as</p>\n<p>Low.</p>\n<p><strong>Box 2: No</strong></p>\n<p>User2 will receive the two alerts classified as medium or higher.</p>\n<p>Email alerts are sent to all global admins, security admins and security readers</p>\n<p>Sign-ins from infected device is classified as low. This risk detection identifies IP addresses, not user devices. If several devices are behind a single IP address, and only some are controlled by a bot network, sign-ins from other devices my trigger this event unnecessarily, which is why this risk detection is classified as</p>\n<p>Low.</p>\n<p><strong>Box 3: No</strong></p>\n<p>User3 will not receive alters.</p>\n<p>Email alerts are sent to all global admins, security admins and security readers.</p>\n<p></p>\n<p>https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection</p>\n<p>https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/howto-identity-protection-configure-risk-policies</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(a.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),v.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,i,a,o="",r="",l=!1,c=t.state.selectedAnswer;n.questions.forEach((function(e,n){l&&(r=e.id,l=!1),t.state.questionId===e.id&&(l=!0,s=e,a=n+1,i&&(o=i.id),s.answered&&(c=s.answered)),i=e})),v.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=E()(n.question),i=E()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:i})})),t.setState({test:n,questionIdx:a,nextQuestionId:r,previousQuestionId:o,selectedAnswer:c})}))):Object(g.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,i=e.target,a=Object(s.a)(this.state.selectedAnswer);if(i.checked)a.push(n);else{var o=a.indexOf(""+n);a.splice(o,1)}this.setState({selectedAnswer:a});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=a),e})),v.collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(g.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,v.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(g.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},x),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(h.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(h.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(h.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(u.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:b,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:k,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(h.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(h.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(h.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(h.a,{onClick:this.toggleShowAnswer,style:S},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(h.a,{onClick:this.toggleShowQuestions,style:S},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(h.a,{onClick:this.toggleEndExam,variant:"warning",style:S},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(y.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(h.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(h.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(h.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=I}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-vx-lbzyn-wu-js-d725a8d34a86419f5359.js.map