(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"1Ktn":function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),l=n("q1tI"),o=n("YQnL"),r=n("7vrA"),d=n("3Z9Z"),c=n("JI6e"),u=n("cWnB"),m=n("QojX"),h=n("zM5D"),y=n("MBJH"),g=n("Wbzz"),p=n("ES5j"),E=n.n(p),w=n("bQ8i"),S=n.n(w),f={marginTop:"14px",marginBottom:"14px",display:"flex"},x={display:"flex",alignItems:"center",justifyContent:"center"},b={marginTop:"24px"},v={marginTop:"24px"},C=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return"undefined"!=typeof window&&E.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{answers:[{value:"Open Azure Admin Center > Labels > Create a label",isCorrectAnswer:!1},{isCorrectAnswer:!1,value:"Open the Microsoft 365 Security Center > Create Retention Policy Label"},{isCorrectAnswer:!0,value:"Open the Microsoft 365 Compliance Center > Information Protection > Create Label"}],references:{blocks:[{text:"https://ior.ad/7BnF",entityRanges:[],type:"unstyled",key:"eo9e2",depth:0,inlineStyleRanges:[],data:{}},{text:"Open the Compliance Center",key:"9l5e7",inlineStyleRanges:[],type:"unordered-list-item",depth:0,data:{},entityRanges:[]},{text:"Go to Information Protection",entityRanges:[],key:"csd55",type:"unordered-list-item",inlineStyleRanges:[],data:{},depth:0},{data:{},depth:0,type:"unordered-list-item",inlineStyleRanges:[],text:"Click Create a label",entityRanges:[],key:"e1ump"},{entityRanges:[],depth:0,key:"bght5",type:"unordered-list-item",inlineStyleRanges:[],data:{},text:"Give your label a name"},{text:"Click encrypt files and emails",key:"1urvm",entityRanges:[],data:{},depth:0,inlineStyleRanges:[],type:"unordered-list-item"},{depth:0,data:{},inlineStyleRanges:[],type:"unordered-list-item",key:"af8qq",entityRanges:[],text:"Set User access to content expires in 21 days"},{type:"unordered-list-item",depth:0,entityRanges:[],inlineStyleRanges:[],key:"1ih0n",data:{},text:"Set Allow Offline Access to 21 days"},{type:"unordered-list-item",text:"Add Any Authenticated user has permissions of Viewer.",data:{},inlineStyleRanges:[],entityRanges:[],depth:0,key:"f7sd0"},{text:"Then Publish your label",key:"cul0c",data:{},type:"unordered-list-item",depth:0,entityRanges:[],inlineStyleRanges:[]}],entityMap:{}},question:{entityMap:{},blocks:[{entityRanges:[],depth:0,key:"8645j",data:{},type:"unstyled",inlineStyleRanges:[],text:"SIMULATION -"},{depth:0,key:"4ar7c",type:"unstyled",data:{},text:"You need to create an Azure Information Protection label to meet the following requirements:",entityRanges:[],inlineStyleRanges:[]},{type:"unordered-list-item",depth:0,data:{},key:"2rfam",inlineStyleRanges:[],entityRanges:[],text:"Content must expire after 21 days."},{data:{},depth:0,inlineStyleRanges:[],text:"Offline access must be allowed for 21 days only.",type:"unordered-list-item",entityRanges:[],key:"eu5g9"},{inlineStyleRanges:[],data:{},type:"unordered-list-item",depth:0,text:"Authenticated users must be able to view content only.",key:"1pgd5",entityRanges:[]},{data:{},text:"To complete this task, sign in to the Microsoft 365 admin center.",key:"4udsp",entityRanges:[],type:"unstyled",depth:0,inlineStyleRanges:[]}]},id:"31s5SNJQt"},previousQuestionId:"",nextQuestionId:"",questionId:"31s5SNJQt",questionIdx:"",questionHtml:"<p>SIMULATION -</p>\n<p>You need to create an Azure Information Protection label to meet the following requirements:</p>\n<ul>\n<li>Content must expire after 21 days.</li>\n<li>Offline access must be allowed for 21 days only.</li>\n<li>Authenticated users must be able to view content only.</li>\n</ul>\n<p>To complete this task, sign in to the Microsoft 365 admin center.</p>\n",referencesHtml:"<p>https://ior.ad/7BnF</p>\n<ul>\n<li>Open the Compliance Center</li>\n<li>Go to Information Protection</li>\n<li>Click Create a label</li>\n<li>Give your label a name</li>\n<li>Click encrypt files and emails</li>\n<li>Set User access to content expires in 21 days</li>\n<li>Set Allow Offline Access to 21 days</li>\n<li>Add Any Authenticated user has permissions of Viewer.</li>\n<li>Then Publish your label</li>\n</ul>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=E.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,i,l,o="",r="",d=!1,c=t.state.selectedAnswer;s.questions.forEach((function(e,n){d&&(r=e.id,d=!1),t.state.questionId===e.id&&(d=!0,a=e,l=n+1,i&&(o=i.id),a.answered&&(c=a.answered)),i=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=S()(n.question),a=S()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:l,nextQuestionId:r,previousQuestionId:o,selectedAnswer:c})}))):Object(g.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var l=i.indexOf(""+n);i.splice(l,1)}this.setState({selectedAnswer:i});var o=Object.assign({},this.state.test);o.questions=o.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(o.id).set(o),this.setState({test:o})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(g.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(g.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},f),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),l.createElement(o.a,null,l.createElement("main",null,l.createElement("div",null,l.createElement(r.a,null,l.createElement(d.a,null,l.createElement(c.a,{md:8},l.createElement("h1",null,"Question ",this.state.questionIdx)),l.createElement(c.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?l.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),l.createElement(c.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?l.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):l.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),l.createElement(d.a,null,""!==this.state.questionHtml?l.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),l.createElement(d.a,null,t.map((function(t,n){return l.createElement("div",{style:t.optionStyles,key:n},l.createElement(m.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:x,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),l.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),l.createElement(d.a,null,l.createElement(c.a,null,this.state.answerShown?l.createElement("div",{style:b,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),l.createElement(d.a,{className:"align-right"},l.createElement(c.a,{md:8}),l.createElement(c.a,{md:2}," ",""!==this.state.previousQuestionId?l.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),l.createElement(c.a,{md:2},""!==this.state.nextQuestionId?l.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):l.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),l.createElement(d.a,null,l.createElement(c.a,{xs:12,md:6},l.createElement(u.a,{onClick:this.toggleShowAnswer,style:v},this.state.answerShown?l.createElement("span",null,"Hide Answer"):l.createElement("span",null,"Show Answer"))),l.createElement(c.a,{xs:12,md:6,className:"align-right"},l.createElement(u.a,{onClick:this.toggleShowQuestions,style:v},this.state.questionsShown?l.createElement("span",null,"Hide Question List"):l.createElement("span",null,"Show Question List")))),l.createElement(d.a,null,l.createElement(c.a,{className:"align-right"},l.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:v},"End Exam"))))),l.createElement(h.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},l.createElement(h.a.Header,null,l.createElement(h.a.Title,null,"Showing Test Questions")),l.createElement(h.a.Body,null,l.createElement(y.a,{striped:!0,bordered:!0,hover:!0},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"#"),l.createElement("th",null,"Answer"))),l.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return l.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},l.createElement("td",null,n+1),l.createElement("td",null,t.answered))})):""))),l.createElement(h.a.Footer,null,l.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),l.createElement(h.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},l.createElement(h.a.Header,null,l.createElement(h.a.Title,null,"Are you sure?")),l.createElement(h.a.Body,null,this.state.endExamText),l.createElement(h.a.Footer,null,l.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),l.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(l.Component);t.default=C}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-31-s-5-snj-qt-js-904ebda4d8abedd86316.js.map