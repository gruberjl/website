(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Mepk:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),o=n("dI71"),i=n("q1tI"),r=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),y=n("Jgta"),E=(n("5x/H"),n("bQ8i")),f=n.n(E),w=y.a.firestore(),S={marginTop:"14px",marginBottom:"14px",display:"flex"},v={display:"flex",alignItems:"center",justifyContent:"center"},b={marginTop:"24px"},x={marginTop:"24px"},k=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return y.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{id:"26vLPgDay",question:{blocks:[{text:"SIMULATION -\nYou need to ensure that a user named Joe Gruber can monitor the service health and create service requests for your Microsoft 365 tenant. The solution must use the principle of least privilege.",inlineStyleRanges:[{style:"color-rgb(80,80,80)",length:12,offset:0},{offset:13,length:193,style:"color-rgb(80,80,80)"},{style:"bgcolor-rgb(255,255,255)",length:12,offset:0},{offset:13,style:"bgcolor-rgb(255,255,255)",length:193},{length:12,style:"fontsize-16",offset:0},{length:193,style:"fontsize-16",offset:13},{style:'fontfamily-Roboto Condensed", sans-serif',offset:0,length:12},{offset:13,length:193,style:'fontfamily-Roboto Condensed", sans-serif'}],data:{},entityRanges:[],key:"ciu80",type:"unstyled",depth:0}],entityMap:{}},references:{blocks:[{key:"4e9b4",entityRanges:[],inlineStyleRanges:[],data:{},depth:0,text:"https://www.iorad.com/player/1796220/MS-500---Ensure-that-a-user-named-Joe-Gruber-can-monitor-the-service-health-of-your-Microsoft-365-t",type:"unstyled"},{key:"3mvdh",entityRanges:[],depth:0,data:{},inlineStyleRanges:[],type:"unstyled",text:"You need to assign the Service Administrator role to Grady Archie."},{data:{},text:"In the Microsoft 365 Admin Center, type John Gruber into the Search for users, groups, settings or tasks search box.",depth:0,type:"ordered-list-item",entityRanges:[],key:"42o8h",inlineStyleRanges:[]},{data:{},entityRanges:[],depth:0,inlineStyleRanges:[],type:"ordered-list-item",text:"Select the Joe Gruber user account from the search results.",key:"fnu33"},{data:{},entityRanges:[],text:"In the Roles section of the user account properties, click Manage roles.",key:"e9182",inlineStyleRanges:[],type:"ordered-list-item",depth:0},{depth:0,entityRanges:[],type:"ordered-list-item",inlineStyleRanges:[],text:"Click the Admin center access radio box.",data:{},key:"eb8m3"},{key:"eob91",entityRanges:[],text:"click the Service support admin role.",type:"ordered-list-item",data:{},depth:0,inlineStyleRanges:[]},{depth:0,type:"ordered-list-item",key:"ceo5r",data:{},inlineStyleRanges:[],entityRanges:[],text:"Click Save to save the changes."},{entityRanges:[],key:"95ko3",data:{},inlineStyleRanges:[],type:"unstyled",text:"Reference: https://docs.microsoft.com/en-us/office365/enterprise/view-service-health",depth:0}],entityMap:{}},answers:[{isCorrectAnswer:!1,value:"From the Microsoft admin center > Users > grant the user the Global admin role"},{value:"From the Microsoft admin center > Users > grant the user the Service Support admin role",isCorrectAnswer:!0},{value:"From the Azure Active Directory admin center > Groups > add the user to the admin group",isCorrectAnswer:!1}]},previousQuestionId:"",nextQuestionId:"",questionId:"26vLPgDay",questionIdx:"",questionHtml:'<p><span style="color: rgb(80,80,80);background-color: rgb(255,255,255);font-size: 16px;font-family: Roboto Condensed", sans-serif;">SIMULATION -</span><br><span style="color: rgb(80,80,80);background-color: rgb(255,255,255);font-size: 16px;font-family: Roboto Condensed", sans-serif;">You need to ensure that a user named Joe Gruber can monitor the service health and create service requests for your Microsoft 365 tenant. The solution must use the principle of least privilege.</span></p>\n',referencesHtml:"<p>https://www.iorad.com/player/1796220/MS-500---Ensure-that-a-user-named-Joe-Gruber-can-monitor-the-service-health-of-your-Microsoft-365-t</p>\n<p>You need to assign the Service Administrator role to Grady Archie.</p>\n<ol>\n<li>In the Microsoft 365 Admin Center, type John Gruber into the Search for users, groups, settings or tasks search box.</li>\n<li>Select the Joe Gruber user account from the search results.</li>\n<li>In the Roles section of the user account properties, click Manage roles.</li>\n<li>Click the Admin center access radio box.</li>\n<li>click the Service support admin role.</li>\n<li>Click Save to save the changes.</li>\n</ol>\n<p>Reference: https://docs.microsoft.com/en-us/office365/enterprise/view-service-health</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(o.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),w.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,a,o,i="",r="",l=!1,c=t.state.selectedAnswer;n.questions.forEach((function(e,n){l&&(r=e.id,l=!1),t.state.questionId===e.id&&(l=!0,s=e,o=n+1,a&&(i=a.id),s.answered&&(c=s.answered)),a=e})),w.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=f()(n.question),a=f()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:n,questionIdx:o,nextQuestionId:r,previousQuestionId:i,selectedAnswer:c})}))):console.log("redirect to login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,o=Object(s.a)(this.state.selectedAnswer);if(a.checked)o.push(n);else{var i=o.indexOf(""+n);o.splice(i,1)}this.setState({selectedAnswer:o});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=o),e})),w.collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,w.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},S),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),i.createElement(r.a,null,i.createElement("main",null,i.createElement("div",null,i.createElement(l.a,null,i.createElement(c.a,null,i.createElement(d.a,{md:8},i.createElement("h1",null,"Question ",this.state.questionIdx)),i.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?i.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),i.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?i.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):i.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),i.createElement(c.a,null,""!==this.state.questionHtml?i.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),i.createElement(c.a,null,t.map((function(t,n){return i.createElement("div",{style:t.optionStyles,key:n},i.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:v,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),i.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),i.createElement(c.a,null,i.createElement(d.a,null,this.state.answerShown?i.createElement("div",{style:b,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),i.createElement(c.a,{className:"align-right"},i.createElement(d.a,{md:8}),i.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?i.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),i.createElement(d.a,{md:2},""!==this.state.nextQuestionId?i.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):i.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),i.createElement(c.a,null,i.createElement(d.a,{xs:12,md:6},i.createElement(u.a,{onClick:this.toggleShowAnswer,style:x},this.state.answerShown?i.createElement("span",null,"Hide Answer"):i.createElement("span",null,"Show Answer"))),i.createElement(d.a,{xs:12,md:6,className:"align-right"},i.createElement(u.a,{onClick:this.toggleShowQuestions,style:x},this.state.questionsShown?i.createElement("span",null,"Hide Question List"):i.createElement("span",null,"Show Question List")))),i.createElement(c.a,null,i.createElement(d.a,{className:"align-right"},i.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:x},"End Exam"))))),i.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},i.createElement(m.a.Header,null,i.createElement(m.a.Title,null,"Showing Test Questions")),i.createElement(m.a.Body,null,i.createElement(g.a,{striped:!0,bordered:!0,hover:!0},i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"#"),i.createElement("th",null,"Answer"))),i.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return i.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},i.createElement("td",null,n+1),i.createElement("td",null,t.answered))})):""))),i.createElement(m.a.Footer,null,i.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),i.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},i.createElement(m.a.Header,null,i.createElement(m.a.Title,null,"Are you sure?")),i.createElement(m.a.Body,null,this.state.endExamText),i.createElement(m.a.Footer,null,i.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),i.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(i.Component);t.default=k}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-26-v-l-pg-day-js-d5cf5a767db554258f5e.js.map