(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{FdFY:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),y=n("ES5j"),E=n.n(y),w=n("bQ8i"),S=n.n(w),f={marginTop:"14px",marginBottom:"14px",display:"flex"},v={display:"flex",alignItems:"center",justifyContent:"center"},A={marginTop:"24px"},x={marginTop:"24px"},b=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return E.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{references:{blocks:[{key:"ds6so",inlineStyleRanges:[],type:"unstyled",depth:0,entityRanges:[],data:{},text:"As a SharePoint or global admin in Microsoft 365, you can use the Access control page of the SharePoint admin center or the Set-SPOTenant -"},{inlineStyleRanges:[],depth:0,entityRanges:[],key:"2klcd",text:"ConditionalAccessPolicy cmdlet to block or limit access to SharePoint and OneDrive content from unmanaged devices.",type:"unstyled",data:{}},{entityRanges:[],inlineStyleRanges:[],key:"6gest",depth:0,text:"The question has two possible correct answers:",data:{},type:"unstyled"},{inlineStyleRanges:[],text:"Run the Set-SPOTenant cmdlet and specify the -ConditionalAccessPolicy parameter.",type:"ordered-list-item",data:{},key:"fe4ec",entityRanges:[],depth:0},{key:"e6o14",text:"From the SharePoint admin center, configure the Access control settings.",depth:0,data:{},type:"ordered-list-item",inlineStyleRanges:[],entityRanges:[]},{data:{},inlineStyleRanges:[],entityRanges:[],text:"https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/set-spotenant?view=sharepoint-ps https://docs.microsoft.com/en-us/sharepoint/control-access-from-unmanaged-devices",type:"unstyled",depth:0,key:"9k50n"}],entityMap:{}},id:"9GabW0zD3",question:{blocks:[{depth:0,inlineStyleRanges:[],type:"unstyled",entityRanges:[],key:"btii1",text:"You have a Microsoft 365 subscription.",data:{}},{inlineStyleRanges:[],key:"f0q3a",data:{},depth:0,entityRanges:[],type:"unstyled",text:"Some users access Microsoft SharePoint Online from unmanaged devices."},{key:"fi90n",type:"unstyled",data:{},inlineStyleRanges:[],depth:0,text:"You create a conditional access policy in Azure Active Directory.",entityRanges:[]},{type:"unstyled",inlineStyleRanges:[],key:"bl0ih",depth:0,entityRanges:[],data:{},text:"You need to prevent the users from downloading, printing, and syncing files."},{depth:0,inlineStyleRanges:[],data:{},text:"What should you do?",key:"705ao",type:"unstyled",entityRanges:[]}],entityMap:{}},answers:[{value:"From the Microsoft Azure portal, create an Azure Active Directory (Azure AD) Identity Protection user risk policy.",isCorrectAnswer:!1},{isCorrectAnswer:!1,value:"From the Microsoft Azure portal, create an Azure Active Directory (Azure AD) conditional access policy."},{isCorrectAnswer:!0,value:"From the SharePoint admin center, configure the Access control settings."},{isCorrectAnswer:!1,value:"From the Microsoft Azure portal, create an Azure Active Directory (Azure AD) Identity Protection sign-in risk policy."}]},previousQuestionId:"",nextQuestionId:"",questionId:"9GabW0zD3",questionIdx:"",questionHtml:"<p>You have a Microsoft 365 subscription.</p>\n<p>Some users access Microsoft SharePoint Online from unmanaged devices.</p>\n<p>You create a conditional access policy in Azure Active Directory.</p>\n<p>You need to prevent the users from downloading, printing, and syncing files.</p>\n<p>What should you do?</p>\n",referencesHtml:"<p>As a SharePoint or global admin in Microsoft 365, you can use the Access control page of the SharePoint admin center or the Set-SPOTenant -</p>\n<p>ConditionalAccessPolicy cmdlet to block or limit access to SharePoint and OneDrive content from unmanaged devices.</p>\n<p>The question has two possible correct answers:</p>\n<ol>\n<li>Run the Set-SPOTenant cmdlet and specify the -ConditionalAccessPolicy parameter.</li>\n<li>From the SharePoint admin center, configure the Access control settings.</li>\n</ol>\n<p>https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/set-spotenant?view=sharepoint-ps https://docs.microsoft.com/en-us/sharepoint/control-access-from-unmanaged-devices</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=E.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,i,o,r="",l="",c=!1,d=t.state.selectedAnswer;s.questions.forEach((function(e,n){c&&(l=e.id,c=!1),t.state.questionId===e.id&&(c=!0,a=e,o=n+1,i&&(r=i.id),a.answered&&(d=a.answered)),i=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=S()(n.question),a=S()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:o,nextQuestionId:l,previousQuestionId:r,selectedAnswer:d})}))):Object(p.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},f),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:v,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:A,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(u.a,{onClick:this.toggleShowAnswer,style:x},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(u.a,{onClick:this.toggleShowQuestions,style:x},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:x},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=b}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-9-gab-w-0-z-d-3-js-49ddf50f21a6db9327ba.js.map