(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"/BSr":function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),l=n("YQnL"),r=n("7vrA"),c=n("3Z9Z"),h=n("JI6e"),u=n("cWnB"),d=n("QojX"),m=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),E=n("ES5j"),y=n.n(E),w=(n("5x/H"),n("bQ8i")),v=n.n(w),x=y.a.firestore(),b={marginTop:"14px",marginBottom:"14px",display:"flex"},S={display:"flex",alignItems:"center",justifyContent:"center"},f={marginTop:"24px"},I={marginTop:"24px"},A=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return y.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{answers:[{value:"When User1 uses Device1, Policy3 applies",isCorrectAnswer:!1},{value:"When User2 uses Device1, Policy2 applies",isCorrectAnswer:!0},{isCorrectAnswer:!1,value:"When User2 uses Device2, Policy4 applies"}],question:{blocks:[{depth:0,entityRanges:[],inlineStyleRanges:[],text:"You have an Azure Active Directory (Azure AD) tenant named contoso.com that contains the users shown in the following table.",key:"1v5dd",data:{},type:"unstyled"},{type:"atomic",data:{},text:" ",entityRanges:[{offset:0,length:1,key:0}],key:"bvgej",depth:0,inlineStyleRanges:[]},{depth:0,text:"You register devices in contoso.com as shown in the following table.",data:{},entityRanges:[],inlineStyleRanges:[],type:"unstyled",key:"9f5sv"},{depth:0,type:"atomic",key:"511ta",inlineStyleRanges:[],text:" ",data:{},entityRanges:[{length:1,offset:0,key:1}]},{key:"567le",type:"unstyled",inlineStyleRanges:[],text:"You create app protection policies in Intune as shown in the following table.",entityRanges:[],depth:0,data:{}},{entityRanges:[{length:1,key:2,offset:0}],depth:0,type:"atomic",inlineStyleRanges:[],data:{},key:"bigo9",text:" "},{key:"vb70",data:{},depth:0,inlineStyleRanges:[],entityRanges:[],text:"Check the box next to each true statement.",type:"unstyled"},{data:{},entityRanges:[],key:"6d2rs",depth:0,text:"NOTE: Each correct selection is worth one point.",inlineStyleRanges:[],type:"unstyled"}],entityMap:{0:{data:{src:"https://i.ibb.co/tQCRyFW/User-Membership.png",alignment:"left",alt:"User membership chart",height:"auto",width:"auto"},mutability:"MUTABLE",type:"IMAGE"},1:{type:"IMAGE",mutability:"MUTABLE",data:{src:"https://i.ibb.co/ZLnr631/device-chart.png",width:"auto",height:"auto",alignment:"left",alt:"Device Security Chart"}},2:{data:{alignment:"left",src:"https://i.ibb.co/JC9cYZS/policy-chart.png",height:"auto",alt:"Policy Chart",width:"auto"},mutability:"MUTABLE",type:"IMAGE"}}},references:{entityMap:{},blocks:[{data:{},inlineStyleRanges:[],depth:0,type:"unstyled",entityRanges:[],text:"https://docs.microsoft.com/en-us/intune/apps/app-protection-policy",key:"4pcat"}]},id:"IvqICJEKL"},previousQuestionId:"",nextQuestionId:"",questionId:"IvqICJEKL",questionIdx:"",questionHtml:'<p>You have an Azure Active Directory (Azure AD) tenant named contoso.com that contains the users shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/tQCRyFW/User-Membership.png" alt="User membership chart" style="height: auto;width: auto"/></div>\n<p>You register devices in contoso.com as shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/ZLnr631/device-chart.png" alt="Device Security Chart" style="height: auto;width: auto"/></div>\n<p>You create app protection policies in Intune as shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/JC9cYZS/policy-chart.png" alt="Policy Chart" style="height: auto;width: auto"/></div>\n<p>Check the box next to each true statement.</p>\n<p>NOTE: Each correct selection is worth one point.</p>\n',referencesHtml:"<p>https://docs.microsoft.com/en-us/intune/apps/app-protection-policy</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),x.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,a,i,o="",l="",r=!1,c=t.state.selectedAnswer;n.questions.forEach((function(e,n){r&&(l=e.id,r=!1),t.state.questionId===e.id&&(r=!0,s=e,i=n+1,a&&(o=a.id),s.answered&&(c=s.answered)),a=e})),x.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=v()(n.question),a=v()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:n,questionIdx:i,nextQuestionId:l,previousQuestionId:o,selectedAnswer:c})}))):Object(p.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var l=Object.assign({},this.state.test);l.questions=l.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),x.collection("users").doc(this.state.uid).collection("tests").doc(l.id).set(l),this.setState({test:l})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,x.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},b),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(l.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(r.a,null,o.createElement(c.a,null,o.createElement(h.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(h.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(h.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(d.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:S,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(h.a,null,this.state.answerShown?o.createElement("div",{style:f,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(h.a,{md:8}),o.createElement(h.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(h.a,{md:2},""!==this.state.nextQuestionId?o.createElement(u.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(h.a,{xs:12,md:6},o.createElement(u.a,{onClick:this.toggleShowAnswer,style:I},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(h.a,{xs:12,md:6,className:"align-right"},o.createElement(u.a,{onClick:this.toggleShowQuestions,style:I},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(h.a,{className:"align-right"},o.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:I},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=A}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-ivq-icjekl-js-81249639c0fc3796255b.js.map