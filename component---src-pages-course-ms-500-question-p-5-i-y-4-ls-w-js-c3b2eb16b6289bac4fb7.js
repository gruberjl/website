(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{eakR:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),l=n("YQnL"),r=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),h=n("cWnB"),u=n("QojX"),m=n("zM5D"),g=n("MBJH"),y=n("Wbzz"),p=n("Jgta"),w=(n("5x/H"),n("bQ8i")),f=n.n(w),E=p.a.firestore(),b={marginTop:"14px",marginBottom:"14px",display:"flex"},x={display:"flex",alignItems:"center",justifyContent:"center"},v={marginTop:"24px"},S={marginTop:"24px"},A=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return p.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{question:{entityMap:{0:{mutability:"MUTABLE",type:"IMAGE",data:{height:"auto",alignment:"left",alt:"Location chart",src:"https://i.ibb.co/MDcKN4R/location-chart.png",width:"auto"}},1:{type:"IMAGE",data:{alt:"Users chart",src:"https://i.ibb.co/cw2YC3W/users-chart.png",height:"auto",alignment:"left",width:"auto"},mutability:"MUTABLE"},2:{type:"IMAGE",mutability:"MUTABLE",data:{alignment:"left",height:"auto",alt:"Policy Filter",src:"https://i.ibb.co/cQNvDmf/policy-filter.png",width:"auto"}},3:{mutability:"MUTABLE",type:"IMAGE",data:{alt:"Policy Alert",width:"auto",height:"auto",alignment:"left",src:"https://i.ibb.co/yXBMZm7/Policy-Alert.png"}}},blocks:[{key:"8vprs",entityRanges:[],inlineStyleRanges:[],text:"Your company has a Microsoft 365 subscription, a Microsoft Azure subscription, and an Azure Active Directory (Azure AD) tenant named contoso.com.",type:"unstyled",depth:0,data:{}},{key:"a3ln6",data:{},entityRanges:[],type:"unstyled",inlineStyleRanges:[],depth:0,text:"The company has the offices shown in the following table."},{inlineStyleRanges:[],text:" ",entityRanges:[{key:0,length:1,offset:0}],type:"atomic",key:"1eeo1",depth:0,data:{}},{text:"The tenant contains the users shown in the following table.",entityRanges:[],type:"unstyled",depth:0,key:"1r9kv",data:{},inlineStyleRanges:[]},{data:{},entityRanges:[{offset:0,key:1,length:1}],inlineStyleRanges:[],depth:0,text:" ",type:"atomic",key:"27nqr"},{key:"5nibv",inlineStyleRanges:[{offset:0,style:"color-rgb(80,80,80)",length:82},{offset:0,style:"bgcolor-rgb(255,255,255)",length:82},{offset:0,length:82,style:"fontsize-16"},{style:'fontfamily-Roboto Condensed", sans-serif',offset:0,length:82}],entityRanges:[],data:{},type:"unstyled",depth:0,text:"You create the Microsoft Cloud App Security policy shown in the following exhibit."},{depth:0,text:" ",type:"atomic",key:"fbe54",entityRanges:[{length:1,key:2,offset:0}],inlineStyleRanges:[],data:{}},{type:"unstyled",inlineStyleRanges:[],text:"",entityRanges:[],data:{},key:"bjtno",depth:0},{type:"atomic",data:{},depth:0,text:" ",inlineStyleRanges:[],key:"4qpph",entityRanges:[{length:1,offset:0,key:3}]},{inlineStyleRanges:[],key:"38sdi",depth:0,type:"unstyled",data:{},text:"For each of the following statements, check the box if the statement is true.",entityRanges:[]}]},answers:[{isCorrectAnswer:!0,value:"In the montreal office, if User1 downloads 40 files in 30 seconds, an alert will be created."},{value:"In the Seattle office, if User2 downloads one file per second for two minutes, an alert will be created",isCorrectAnswer:!0},{value:"In the New York office, if User1 downloads 40 files in 10 seconds, an alert will be created.",isCorrectAnswer:!1}],references:{entityMap:{},blocks:[{inlineStyleRanges:[],depth:0,key:"fqqbc",text:"",entityRanges:[],data:{},type:"unstyled"}]},id:"P-5iY4LsW"},previousQuestionId:"",nextQuestionId:"",questionId:"P-5iY4LsW",questionIdx:"",questionHtml:'<p>Your company has a Microsoft 365 subscription, a Microsoft Azure subscription, and an Azure Active Directory (Azure AD) tenant named contoso.com.</p>\n<p>The company has the offices shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/MDcKN4R/location-chart.png" alt="Location chart" style="height: auto;width: auto"/></div>\n<p>The tenant contains the users shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/cw2YC3W/users-chart.png" alt="Users chart" style="height: auto;width: auto"/></div>\n<p><span style="color: rgb(80,80,80);background-color: rgb(255,255,255);font-size: 16px;font-family: Roboto Condensed", sans-serif;">You create the Microsoft Cloud App Security policy shown in the following exhibit.</span></p>\n<div style="text-align:left;"><img src="https://i.ibb.co/cQNvDmf/policy-filter.png" alt="Policy Filter" style="height: auto;width: auto"/></div>\n<p></p>\n<div style="text-align:left;"><img src="https://i.ibb.co/yXBMZm7/Policy-Alert.png" alt="Policy Alert" style="height: auto;width: auto"/></div>\n<p>For each of the following statements, check the box if the statement is true.</p>\n',referencesHtml:"<p></p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),E.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,a,i,o="",l="",r=!1,c=t.state.selectedAnswer;n.questions.forEach((function(e,n){r&&(l=e.id,r=!1),t.state.questionId===e.id&&(r=!0,s=e,i=n+1,a&&(o=a.id),s.answered&&(c=s.answered)),a=e})),E.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=f()(n.question),a=f()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:n,questionIdx:i,nextQuestionId:l,previousQuestionId:o,selectedAnswer:c})}))):console.log("redirect to login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var l=Object.assign({},this.state.test);l.questions=l.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),E.collection("users").doc(this.state.uid).collection("tests").doc(l.id).set(l),this.setState({test:l})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(y.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,E.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(y.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},b),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(l.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(r.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(h.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(h.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(h.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(u.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:x,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:v,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(h.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(h.a,{as:y.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(h.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(h.a,{onClick:this.toggleShowAnswer,style:S},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(h.a,{onClick:this.toggleShowQuestions,style:S},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(h.a,{onClick:this.toggleEndExam,variant:"warning",style:S},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(h.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(h.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(h.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=A}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-p-5-i-y-4-ls-w-js-c3b2eb16b6289bac4fb7.js.map