(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{qQ9M:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),l=n("YQnL"),r=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),m=n("cWnB"),u=n("QojX"),h=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),E=n("ES5j"),w=n.n(E),y=n("bQ8i"),k=n.n(y),f={marginTop:"14px",marginBottom:"14px",display:"flex"},S={display:"flex",alignItems:"center",justifyContent:"center"},x={marginTop:"24px"},v={marginTop:"24px"},b=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return"undefined"!=typeof window&&w.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{references:{entityMap:{},blocks:[{entityRanges:[],data:{},inlineStyleRanges:[],text:"https://www.iorad.com/player/1797489/MS-500---Block-access-to-a-domain-named-fabrikam-com",type:"unstyled",depth:0,key:"c5kns"},{key:"ct5nh",text:"Open the securiy & compliance admin center",data:{},type:"ordered-list-item",entityRanges:[],depth:0,inlineStyleRanges:[]},{entityRanges:[],data:{},type:"ordered-list-item",key:"13h4t",depth:0,inlineStyleRanges:[],text:"Click Threat management > policy > Safe links > Global settings"},{key:"5oiok",data:{},type:"ordered-list-item",depth:0,text:"Enter the URL in the Block the following URLS",inlineStyleRanges:[],entityRanges:[]},{entityRanges:[],depth:0,type:"ordered-list-item",text:"Uncheck Do not track when users click protected links in Office 365 apps.",inlineStyleRanges:[],data:{},key:"7khlq"},{type:"ordered-list-item",key:"7vm0o",text:"Click Save",entityRanges:[],inlineStyleRanges:[],data:{},depth:0}]},id:"HnDt94N5E",question:{entityMap:{},blocks:[{type:"unstyled",entityRanges:[],text:"You need to implement a solution to manage when users select links in documents or email messages from Microsoft Office 365 ProPlus applications or Android devices. The solution must meet the following requirements:",key:"2p2s2",inlineStyleRanges:[],data:{},depth:0},{entityRanges:[],data:{},text:"Block access to a domain named fabrikam.com",type:"unordered-list-item",key:"93qsd",depth:0,inlineStyleRanges:[]},{depth:0,entityRanges:[],text:"Store information when the users select links to fabrikam.com",type:"unordered-list-item",key:"8b4p7",data:{},inlineStyleRanges:[]},{depth:0,type:"unstyled",entityRanges:[],key:"42lo8",text:"What steps need to be completed to fulfill the requirements?",data:{},inlineStyleRanges:[]}]},answers:[{value:"From the Security & Compliance admin center, go to safe links > add the link to the blocked list.",isCorrectAnswer:!0},{value:"From the Azure AD admin center, go to safe links > add the link to the blocked list.",isCorrectAnswer:!1},{isCorrectAnswer:!1,value:"From the Security & Compliance admin center, go to Data Loss Prevention > add the link to the blocked list."}]},previousQuestionId:"",nextQuestionId:"",questionId:"HnDt94N5E",questionIdx:"",questionHtml:"<p>You need to implement a solution to manage when users select links in documents or email messages from Microsoft Office 365 ProPlus applications or Android devices. The solution must meet the following requirements:</p>\n<ul>\n<li>Block access to a domain named fabrikam.com</li>\n<li>Store information when the users select links to fabrikam.com</li>\n</ul>\n<p>What steps need to be completed to fulfill the requirements?</p>\n",referencesHtml:"<p>https://www.iorad.com/player/1797489/MS-500---Block-access-to-a-domain-named-fabrikam-com</p>\n<ol>\n<li>Open the securiy &amp; compliance admin center</li>\n<li>Click Threat management &gt; policy &gt; Safe links &gt; Global settings</li>\n<li>Enter the URL in the Block the following URLS</li>\n<li>Uncheck Do not track when users click protected links in Office 365 apps.</li>\n<li>Click Save</li>\n</ol>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=w.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,i,o,l="",r="",c=!1,d=t.state.selectedAnswer;s.questions.forEach((function(e,n){c&&(r=e.id,c=!1),t.state.questionId===e.id&&(c=!0,a=e,o=n+1,i&&(l=i.id),a.answered&&(d=a.answered)),i=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=k()(n.question),a=k()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:o,nextQuestionId:r,previousQuestionId:l,selectedAnswer:d})}))):Object(p.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var l=Object.assign({},this.state.test);l.questions=l.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(l.id).set(l),this.setState({test:l})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,w.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},f),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(l.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(r.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(m.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(m.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(m.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(u.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:S,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:x,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(m.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(m.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(m.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(m.a,{onClick:this.toggleShowAnswer,style:v},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(m.a,{onClick:this.toggleShowQuestions,style:v},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(m.a,{onClick:this.toggleEndExam,variant:"warning",style:v},"End Exam"))))),o.createElement(h.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(h.a.Header,null,o.createElement(h.a.Title,null,"Showing Test Questions")),o.createElement(h.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(h.a.Footer,null,o.createElement(m.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(h.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(h.a.Header,null,o.createElement(h.a.Title,null,"Are you sure?")),o.createElement(h.a.Body,null,this.state.endExamText),o.createElement(h.a.Footer,null,o.createElement(m.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(m.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=b}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-hn-dt-94-n-5-e-js-cb1eaaba8dbe3c46abfd.js.map