(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{XuZy:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),h=n("cWnB"),u=n("QojX"),m=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),w=n("ES5j"),E=n.n(w),y=n("bQ8i"),f=n.n(y),b={marginTop:"14px",marginBottom:"14px",display:"flex"},x={display:"flex",alignItems:"center",justifyContent:"center"},S={marginTop:"24px"},v={marginTop:"24px"},k=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return E.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{references:{blocks:[{inlineStyleRanges:[],text:"",type:"unstyled",key:"5tlk3",data:{},entityRanges:[],depth:0}],entityMap:{}},id:"1SP5372Ue",answers:[{value:"From a web browser on Computer 1, you can open http://www.contoso.com",isCorrectAnswer:!1},{value:"From a web browser on Computer 1, you can open http://litwareinc.com/public",isCorrectAnswer:!0},{value:"From a web browser on Computer 2, you can open http://litwareinc.com",isCorrectAnswer:!1}],question:{entityMap:{0:{data:{src:"https://i.ibb.co/1bTps9G/computer-tags.png",height:"auto",width:"auto",alt:"Computer tags chart",alignment:"left"},type:"IMAGE",mutability:"MUTABLE"},1:{mutability:"MUTABLE",data:{height:"auto",alignment:"left",width:"auto",src:"https://i.ibb.co/tCb50pw/ranking.png",alt:"Ranking chart"},type:"IMAGE"},2:{data:{width:"auto",height:"auto",src:"https://i.ibb.co/9pcMnNM/domain-chart.png",alignment:"left",alt:"Domain chart"},mutability:"MUTABLE",type:"IMAGE"}},blocks:[{type:"unstyled",inlineStyleRanges:[],key:"4i6uh",depth:0,entityRanges:[],data:{},text:"You have a Microsoft Defender Advanced Threat Protection (Microsoft Defender ATP) deployment that has the custom network indicators turned on."},{type:"unstyled",depth:0,entityRanges:[],data:{},inlineStyleRanges:[],text:"Microsoft Defender ATP protects two computers that run Windows 10 as shown in the following table.",key:"8ikhv"},{text:" ",key:"2vcj6",entityRanges:[{length:1,key:0,offset:0}],data:{},depth:0,inlineStyleRanges:[],type:"atomic"},{inlineStyleRanges:[],key:"5k6rl",type:"unstyled",entityRanges:[],text:"Microsoft Defender ATP has the machine groups shown in the following table.",depth:0,data:{}},{depth:0,text:" ",inlineStyleRanges:[],type:"atomic",data:{},key:"fiihm",entityRanges:[{key:1,offset:0,length:1}]},{key:"383dm",inlineStyleRanges:[],entityRanges:[],depth:0,text:"From Microsoft Defender Security Center, you create the URLs/Domains indicators shown in the following table.",type:"unstyled",data:{}},{key:"2qlef",data:{},text:" ",inlineStyleRanges:[],type:"atomic",depth:0,entityRanges:[{offset:0,key:2,length:1}]},{entityRanges:[],depth:0,key:"1neb1",text:"For each of the following statements, check the box if the statement is true.",data:{},type:"unstyled",inlineStyleRanges:[]},{type:"unstyled",inlineStyleRanges:[],text:"NOTE: Each correct selection is worth one point.",key:"dbeum",depth:0,data:{},entityRanges:[]}]}},previousQuestionId:"",nextQuestionId:"",questionId:"1SP5372Ue",questionIdx:"",questionHtml:'<p>You have a Microsoft Defender Advanced Threat Protection (Microsoft Defender ATP) deployment that has the custom network indicators turned on.</p>\n<p>Microsoft Defender ATP protects two computers that run Windows 10 as shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/1bTps9G/computer-tags.png" alt="Computer tags chart" style="height: auto;width: auto"/></div>\n<p>Microsoft Defender ATP has the machine groups shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/tCb50pw/ranking.png" alt="Ranking chart" style="height: auto;width: auto"/></div>\n<p>From Microsoft Defender Security Center, you create the URLs/Domains indicators shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/9pcMnNM/domain-chart.png" alt="Domain chart" style="height: auto;width: auto"/></div>\n<p>For each of the following statements, check the box if the statement is true.</p>\n<p>NOTE: Each correct selection is worth one point.</p>\n',referencesHtml:"<p></p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this,n=E.a.firestore();e?(this.setState({uid:e.uid}),n.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var s=e.data();s.id=e.id;var a,i,o,r="",l="",c=!1,d=t.state.selectedAnswer;s.questions.forEach((function(e,n){c&&(l=e.id,c=!1),t.state.questionId===e.id&&(c=!0,a=e,o=n+1,i&&(r=i.id),a.answered&&(d=a.answered)),i=e})),n.collection("Tests").doc("MS-500").collection("Questions").doc(a.id).get().then((function(e){var n=e.data();n.id=e.id;var s=f()(n.question),a=f()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:s,questionIdx:o,nextQuestionId:l,previousQuestionId:r,selectedAnswer:d})}))):Object(p.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,E.a.firestore().collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},b),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(h.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(h.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(h.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(u.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:x,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:S,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(h.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(h.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(h.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(h.a,{onClick:this.toggleShowAnswer,style:v},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(h.a,{onClick:this.toggleShowQuestions,style:v},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(h.a,{onClick:this.toggleEndExam,variant:"warning",style:v},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(h.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(h.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(h.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=k}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-1-sp-5372-ue-js-94940225eea9d6fb1d8c.js.map