(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{elFj:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),i=n("JX7q"),a=n("dI71"),o=n("q1tI"),l=n("YQnL"),r=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),h=n("cWnB"),u=n("QojX"),g=n("zM5D"),p=n("MBJH"),m=n("Wbzz"),y=n("ES5j"),w=n.n(y),E=n("bQ8i"),x=n.n(E),f={marginTop:"14px",marginBottom:"14px",display:"flex"},v={display:"flex",alignItems:"center",justifyContent:"center"},S={marginTop:"24px"},k={marginTop:"24px"},b=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(i.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(i.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(i.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(i.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(i.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(i.a)(n)),n.endExam=n.endExam.bind(Object(i.a)(n));var s=new URLSearchParams(t.location.search);return w.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{references:{entityMap:{},blocks:[{data:{},type:"unstyled",inlineStyleRanges:[{length:10,style:"BOLD",offset:0}],key:"44apb",depth:0,entityRanges:[],text:"Box 1: Yes"},{key:"192u7",type:"unstyled",depth:0,text:"User1 is in Group1 which the policy applies to.",inlineStyleRanges:[],data:{},entityRanges:[]},{type:"unstyled",entityRanges:[],data:{},text:"Box 2: No",key:"8vpnm",depth:0,inlineStyleRanges:[{length:9,offset:0,style:"BOLD"}]},{text:"User2 is in Group2 which is excluded from the policy.",data:{},inlineStyleRanges:[],depth:0,type:"unstyled",key:"48tc0",entityRanges:[]},{inlineStyleRanges:[{style:"BOLD",length:9,offset:0}],text:"Box 3: No",data:{},entityRanges:[],type:"unstyled",key:"17c30",depth:0},{key:"97snb",data:{},text:"User3 is in Group1 which is included in the policy and Group2 which is excluded from the policy. In this case, the exclusion wins so the policy does not apply to",type:"unstyled",inlineStyleRanges:[],entityRanges:[],depth:0},{inlineStyleRanges:[],data:{},depth:0,entityRanges:[],key:"eeq3s",text:"User3.",type:"unstyled"}]},answers:[{value:"User1 must change their password",isCorrectAnswer:!0},{value:"User2 must change their password",isCorrectAnswer:!1},{isCorrectAnswer:!1,value:"User3 must change their password"}],question:{blocks:[{type:"unstyled",key:"9gu7q",inlineStyleRanges:[],data:{},text:"You have a Microsoft 365 subscription that contains the users shown in the following table.",entityRanges:[],depth:0},{data:{},text:" ",key:"99lev",depth:0,inlineStyleRanges:[],entityRanges:[{length:1,key:0,offset:0}],type:"atomic"},{data:{},inlineStyleRanges:[],depth:0,entityRanges:[],type:"unstyled",key:"dv9re",text:"You create and enforce an Azure Active Directory (Azure AD) Identity Protection sign-in risk policy that has the following settings:"},{entityRanges:[],type:"unordered-list-item",text:"Assignments: Include Group1, Exclude Group2",inlineStyleRanges:[],depth:0,data:{},key:"6455m"},{key:"2dqp1",depth:0,inlineStyleRanges:[],entityRanges:[],data:{},text:"Conditions: User risk level of Medium and above",type:"unordered-list-item"},{key:"9psfk",depth:0,entityRanges:[],text:"Access: Allow access, Require password change",data:{},type:"unordered-list-item",inlineStyleRanges:[]},{entityRanges:[],type:"unstyled",data:{},key:"d3chi",inlineStyleRanges:[],depth:0,text:"The users attempt to sign in. The risk level for each user is shown in the following table."},{entityRanges:[{offset:0,key:1,length:1}],data:{},inlineStyleRanges:[],text:" ",type:"atomic",depth:0,key:"5naop"},{depth:0,text:"For each of the following statements, check the box if the answer is true. Otherwise, leave it unchecked.",entityRanges:[],type:"unstyled",inlineStyleRanges:[],key:"38vb7",data:{}},{key:"4crq3",type:"unstyled",text:"NOTE: Each correct selection is worth one point.",inlineStyleRanges:[],data:{},depth:0,entityRanges:[]}],entityMap:{0:{mutability:"MUTABLE",data:{src:"https://i.ibb.co/WVjQP2K/chart7.png",height:"auto",alignment:"left",alt:"Chart showing users and groups",width:"auto"},type:"IMAGE"},1:{type:"IMAGE",mutability:"MUTABLE",data:{height:"auto",alignment:"left",width:"auto",alt:"Chart showing user risk level",src:"https://i.ibb.co/LxsWp5S/Chart8.png"}}}},id:"DCx8K1f29"},previousQuestionId:"",nextQuestionId:"",questionId:"DCx8K1f29",questionIdx:"",questionHtml:'<p>You have a Microsoft 365 subscription that contains the users shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/WVjQP2K/chart7.png" alt="Chart showing users and groups" style="height: auto;width: auto"/></div>\n<p>You create and enforce an Azure Active Directory (Azure AD) Identity Protection sign-in risk policy that has the following settings:</p>\n<ul>\n<li>Assignments: Include Group1, Exclude Group2</li>\n<li>Conditions: User risk level of Medium and above</li>\n<li>Access: Allow access, Require password change</li>\n</ul>\n<p>The users attempt to sign in. The risk level for each user is shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/LxsWp5S/Chart8.png" alt="Chart showing user risk level" style="height: auto;width: auto"/></div>\n<p>For each of the following statements, check the box if the answer is true. Otherwise, leave it unchecked.</p>\n<p>NOTE: Each correct selection is worth one point.</p>\n',referencesHtml:"<p><strong>Box 1: Yes</strong></p>\n<p>User1 is in Group1 which the policy applies to.</p>\n<p><strong>Box 2: No</strong></p>\n<p>User2 is in Group2 which is excluded from the policy.</p>\n<p><strong>Box 3: No</strong></p>\n<p>User3 is in Group1 which is included in the policy and Group2 which is excluded from the policy. In this case, the exclusion wins so the policy does not apply to</p>\n<p>User3.</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(a.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=w.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var i,a,o,l="",r="",c=!1,d=t.state.selectedAnswer;s.questions.forEach((function(e,n){c&&(r=e.id,c=!1),t.state.questionId===e.id&&(c=!0,i=e,o=n+1,a&&(l=a.id),i.answered&&(d=i.answered)),a=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(i.id).get().then((function(e){var n=e.data();n.id=e.id;var s=x()(n.question),i=x()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:i})})),t.setState({test:s,questionIdx:o,nextQuestionId:r,previousQuestionId:l,selectedAnswer:d})}))):Object(m.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,i=e.target,a=Object(s.a)(this.state.selectedAnswer);if(i.checked)a.push(n);else{var o=a.indexOf(""+n);a.splice(o,1)}this.setState({selectedAnswer:a});var l=Object.assign({},this.state.test);l.questions=l.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=a),e})),w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(l.id).set(l),this.setState({test:l})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(m.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(m.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},f),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(l.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(r.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(h.a,{as:m.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(h.a,{as:m.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(h.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(u.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:v,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:S,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(h.a,{as:m.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(h.a,{as:m.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(h.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(h.a,{onClick:this.toggleShowAnswer,style:k},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(h.a,{onClick:this.toggleShowQuestions,style:k},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(h.a,{onClick:this.toggleEndExam,variant:"warning",style:k},"End Exam"))))),o.createElement(g.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(g.a.Header,null,o.createElement(g.a.Title,null,"Showing Test Questions")),o.createElement(g.a.Body,null,o.createElement(p.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(g.a.Footer,null,o.createElement(h.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(g.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(g.a.Header,null,o.createElement(g.a.Title,null,"Are you sure?")),o.createElement(g.a.Body,null,this.state.endExamText),o.createElement(g.a.Footer,null,o.createElement(h.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(h.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=b}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-d-cx-8-k-1-f-29-js-041ea8d8769c0b257995.js.map