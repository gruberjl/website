(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{s1Nf:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),r=n("q1tI"),o=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),u=n("cWnB"),h=n("QojX"),m=n("zM5D"),p=n("MBJH"),g=n("Wbzz"),y=n("ES5j"),E=n.n(y),w=n("bQ8i"),v=n.n(w),b={marginTop:"14px",marginBottom:"14px",display:"flex"},f={display:"flex",alignItems:"center",justifyContent:"center"},x={marginTop:"24px"},S={marginTop:"24px"},k=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return"undefined"!=typeof window&&E.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{references:{blocks:[{text:"Group 1 has to be assigned because you can't create a device group based on the device owners' attributes.",key:"55t4k",inlineStyleRanges:[],entityRanges:[],type:"unstyled",data:{},depth:0},{inlineStyleRanges:[],text:"Group 2 can be dynamic because a user does have a department attribute.",data:{},key:"d7oo1",depth:0,type:"unstyled",entityRanges:[]},{inlineStyleRanges:[],data:{},key:"ekcqp",depth:0,text:"Group 3 can be dynamic because a device does have a deviceownership attribute.",entityRanges:[],type:"unstyled"},{data:{},entityRanges:[],depth:0,key:"47cii",type:"unstyled",text:"References:",inlineStyleRanges:[]},{entityRanges:[],type:"unstyled",data:{},depth:0,text:"https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/active-directory/users-groups-roles/groups-dynamic-membership.md",inlineStyleRanges:[],key:"7tlkv"}],entityMap:{}},question:{blocks:[{key:"dt717",type:"unstyled",data:{},depth:0,entityRanges:[],inlineStyleRanges:[],text:"You have a Microsoft 365 E5 subscription."},{key:"5p1iu",type:"unstyled",depth:0,data:{},entityRanges:[],text:"Users and device objects are added and removed daily. Users in the sales department frequently change their devices.",inlineStyleRanges:[]},{depth:0,inlineStyleRanges:[],text:"You need to create the three following groups:",entityRanges:[],key:"14noi",data:{},type:"unstyled"},{text:" ",data:{},depth:0,entityRanges:[{key:0,offset:0,length:1}],type:"atomic",key:"d6mp2",inlineStyleRanges:[]},{key:"9mb72",depth:0,data:{},entityRanges:[],type:"unstyled",text:"The solution must minimize administrative effort.",inlineStyleRanges:[]},{key:"dub75",data:{},type:"unstyled",depth:0,text:"What is the minimum number of groups you should create for each type of membership? To answer, select the appropriate options in the answer area.",entityRanges:[],inlineStyleRanges:[]},{key:"9qlf8",data:{},depth:0,entityRanges:[],text:"NOTE: Each correct selection is worth one point.",type:"unstyled",inlineStyleRanges:[]}],entityMap:{0:{type:"IMAGE",mutability:"MUTABLE",data:{alignment:"left",alt:"Group Names and Requirements",src:"https://i.ibb.co/fdScjrV/Chart2.png",height:"auto",width:"auto"}}}},id:"FG2WrFf-y",answers:[{value:"Groups that have assigned membership: 0",isCorrectAnswer:!1},{value:"Groups that have assigned membership: 1",isCorrectAnswer:!0},{isCorrectAnswer:!1,value:"Groups that have assigned membership: 2"},{isCorrectAnswer:!1,value:"Groups that have assigned membership: 3"},{value:"Groups that have dynamic membership: 0",isCorrectAnswer:!1},{isCorrectAnswer:!1,value:"Groups that have dynamic membership: 1"},{value:"Groups that have dynamic membership: 2",isCorrectAnswer:!0},{value:"Groups that have dynamic membership: 3",isCorrectAnswer:!1}]},previousQuestionId:"",nextQuestionId:"",questionId:"FG2WrFf-y",questionIdx:"",questionHtml:'<p>You have a Microsoft 365 E5 subscription.</p>\n<p>Users and device objects are added and removed daily. Users in the sales department frequently change their devices.</p>\n<p>You need to create the three following groups:</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/fdScjrV/Chart2.png" alt="Group Names and Requirements" style="height: auto;width: auto"/></div>\n<p>The solution must minimize administrative effort.</p>\n<p>What is the minimum number of groups you should create for each type of membership? To answer, select the appropriate options in the answer area.</p>\n<p>NOTE: Each correct selection is worth one point.</p>\n',referencesHtml:"<p>Group 1 has to be assigned because you can't create a device group based on the device owners' attributes.</p>\n<p>Group 2 can be dynamic because a user does have a department attribute.</p>\n<p>Group 3 can be dynamic because a device does have a deviceownership attribute.</p>\n<p>References:</p>\n<p>https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/active-directory/users-groups-roles/groups-dynamic-membership.md</p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=E.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,i,r,o="",l="",c=!1,d=t.state.selectedAnswer;s.questions.forEach((function(e,n){c&&(l=e.id,c=!1),t.state.questionId===e.id&&(c=!0,a=e,r=n+1,i&&(o=i.id),a.answered&&(d=a.answered)),i=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=v()(n.question),a=v()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:r,nextQuestionId:l,previousQuestionId:o,selectedAnswer:d})}))):Object(g.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var r=i.indexOf(""+n);i.splice(r,1)}this.setState({selectedAnswer:i});var o=Object.assign({},this.state.test);o.questions=o.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(o.id).set(o),this.setState({test:o})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(g.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(g.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},b),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),r.createElement(o.a,null,r.createElement("main",null,r.createElement("div",null,r.createElement(l.a,null,r.createElement(c.a,null,r.createElement(d.a,{md:8},r.createElement("h1",null,"Question ",this.state.questionIdx)),r.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?r.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),r.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?r.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):r.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),r.createElement(c.a,null,""!==this.state.questionHtml?r.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),r.createElement(c.a,null,t.map((function(t,n){return r.createElement("div",{style:t.optionStyles,key:n},r.createElement(h.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:f,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),r.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),r.createElement(c.a,null,r.createElement(d.a,null,this.state.answerShown?r.createElement("div",{style:x,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),r.createElement(c.a,{className:"align-right"},r.createElement(d.a,{md:8}),r.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?r.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),r.createElement(d.a,{md:2},""!==this.state.nextQuestionId?r.createElement(u.a,{as:g.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):r.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),r.createElement(c.a,null,r.createElement(d.a,{xs:12,md:6},r.createElement(u.a,{onClick:this.toggleShowAnswer,style:S},this.state.answerShown?r.createElement("span",null,"Hide Answer"):r.createElement("span",null,"Show Answer"))),r.createElement(d.a,{xs:12,md:6,className:"align-right"},r.createElement(u.a,{onClick:this.toggleShowQuestions,style:S},this.state.questionsShown?r.createElement("span",null,"Hide Question List"):r.createElement("span",null,"Show Question List")))),r.createElement(c.a,null,r.createElement(d.a,{className:"align-right"},r.createElement(u.a,{onClick:this.toggleEndExam,variant:"warning",style:S},"End Exam"))))),r.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},r.createElement(m.a.Header,null,r.createElement(m.a.Title,null,"Showing Test Questions")),r.createElement(m.a.Body,null,r.createElement(p.a,{striped:!0,bordered:!0,hover:!0},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"#"),r.createElement("th",null,"Answer"))),r.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return r.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},r.createElement("td",null,n+1),r.createElement("td",null,t.answered))})):""))),r.createElement(m.a.Footer,null,r.createElement(u.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),r.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},r.createElement(m.a.Header,null,r.createElement(m.a.Title,null,"Are you sure?")),r.createElement(m.a.Body,null,this.state.endExamText),r.createElement(m.a.Footer,null,r.createElement(u.a,{variant:"primary",onClick:this.endExam},"Yes"),r.createElement(u.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(r.Component);t.default=k}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-fg-2-wr-ff-y-js-094114cfcf124c2c2604.js.map