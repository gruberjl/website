(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{XuZy:function(e,t,n){"use strict";n.r(t);var s=n("KQm4"),a=n("JX7q"),i=n("dI71"),o=n("q1tI"),r=n("YQnL"),l=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),h=n("cWnB"),u=n("QojX"),m=n("zM5D"),g=n("MBJH"),p=n("Wbzz"),w=n("ES5j"),E=n.n(w),y=(n("5x/H"),n("bQ8i")),f=n.n(y),b=E.a.firestore(),x={marginTop:"14px",marginBottom:"14px",display:"flex"},S={display:"flex",alignItems:"center",justifyContent:"center"},v={marginTop:"24px"},k={marginTop:"24px"},A=function(e){function t(t){var n;(n=e.call(this,t)||this).setUid=n.setUid.bind(Object(a.a)(n)),n.handleCorrectAnswerChange=n.handleCorrectAnswerChange.bind(Object(a.a)(n)),n.toggleShowAnswer=n.toggleShowAnswer.bind(Object(a.a)(n)),n.toggleShowQuestions=n.toggleShowQuestions.bind(Object(a.a)(n)),n.gotoQuestion=n.gotoQuestion.bind(Object(a.a)(n)),n.toggleEndExam=n.toggleEndExam.bind(Object(a.a)(n)),n.endExam=n.endExam.bind(Object(a.a)(n));var s=new URLSearchParams(t.location.search);return E.a.auth().onAuthStateChanged(n.setUid),n.state={questions:{},uid:"",testId:s.get("testId"),test:{},question:{question:{blocks:[{text:"You have a Microsoft Defender Advanced Threat Protection (Microsoft Defender ATP) deployment that has the custom network indicators turned on.",entityRanges:[],type:"unstyled",key:"4i6uh",depth:0,data:{},inlineStyleRanges:[]},{depth:0,data:{},type:"unstyled",key:"8ikhv",text:"Microsoft Defender ATP protects two computers that run Windows 10 as shown in the following table.",entityRanges:[],inlineStyleRanges:[]},{depth:0,entityRanges:[{offset:0,key:0,length:1}],inlineStyleRanges:[],text:" ",key:"2vcj6",data:{},type:"atomic"},{entityRanges:[],key:"5k6rl",inlineStyleRanges:[],data:{},type:"unstyled",depth:0,text:"Microsoft Defender ATP has the machine groups shown in the following table."},{entityRanges:[{key:1,length:1,offset:0}],text:" ",inlineStyleRanges:[],key:"fiihm",type:"atomic",depth:0,data:{}},{inlineStyleRanges:[],data:{},text:"From Microsoft Defender Security Center, you create the URLs/Domains indicators shown in the following table.",key:"383dm",type:"unstyled",entityRanges:[],depth:0},{type:"atomic",entityRanges:[{length:1,offset:0,key:2}],depth:0,inlineStyleRanges:[],key:"2qlef",data:{},text:" "},{type:"unstyled",entityRanges:[],data:{},inlineStyleRanges:[],depth:0,text:"For each of the following statements, check the box if the statement is true.",key:"1neb1"},{key:"dbeum",type:"unstyled",text:"NOTE: Each correct selection is worth one point.",data:{},entityRanges:[],depth:0,inlineStyleRanges:[]}],entityMap:{0:{mutability:"MUTABLE",data:{width:"auto",src:"https://i.ibb.co/1bTps9G/computer-tags.png",height:"auto",alignment:"left",alt:"Computer tags chart"},type:"IMAGE"},1:{mutability:"MUTABLE",data:{src:"https://i.ibb.co/tCb50pw/ranking.png",height:"auto",alignment:"left",alt:"Ranking chart",width:"auto"},type:"IMAGE"},2:{data:{height:"auto",alignment:"left",alt:"Domain chart",src:"https://i.ibb.co/9pcMnNM/domain-chart.png",width:"auto"},type:"IMAGE",mutability:"MUTABLE"}}},references:{blocks:[{entityRanges:[],depth:0,type:"unstyled",inlineStyleRanges:[],data:{},key:"5tlk3",text:""}],entityMap:{}},answers:[{value:"From a web browser on Computer 1, you can open http://www.contoso.com",isCorrectAnswer:!1},{value:"From a web browser on Computer 1, you can open http://litwareinc.com/public",isCorrectAnswer:!0},{value:"From a web browser on Computer 2, you can open http://litwareinc.com",isCorrectAnswer:!1}],id:"1SP5372Ue"},previousQuestionId:"",nextQuestionId:"",questionId:"1SP5372Ue",questionIdx:"",questionHtml:'<p>You have a Microsoft Defender Advanced Threat Protection (Microsoft Defender ATP) deployment that has the custom network indicators turned on.</p>\n<p>Microsoft Defender ATP protects two computers that run Windows 10 as shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/1bTps9G/computer-tags.png" alt="Computer tags chart" style="height: auto;width: auto"/></div>\n<p>Microsoft Defender ATP has the machine groups shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/tCb50pw/ranking.png" alt="Ranking chart" style="height: auto;width: auto"/></div>\n<p>From Microsoft Defender Security Center, you create the URLs/Domains indicators shown in the following table.</p>\n<div style="text-align:left;"><img src="https://i.ibb.co/9pcMnNM/domain-chart.png" alt="Domain chart" style="height: auto;width: auto"/></div>\n<p>For each of the following statements, check the box if the statement is true.</p>\n<p>NOTE: Each correct selection is worth one point.</p>\n',referencesHtml:"<p></p>\n",selectedAnswer:[],answerShown:!1,questionsShown:!1,endExamShown:!1,endExamText:"Are you sure you want to end the exam?"},n}Object(i.a)(t,e);var n=t.prototype;return n.setUid=function(e){var t=this;e?(this.setState({uid:e.uid}),b.collection("users").doc(this.state.uid).collection("tests").doc(this.state.testId).get().then((function(e){var n=e.data();n.id=e.id;var s,a,i,o="",r="",l=!1,c=t.state.selectedAnswer;n.questions.forEach((function(e,n){l&&(r=e.id,l=!1),t.state.questionId===e.id&&(l=!0,s=e,i=n+1,a&&(o=a.id),s.answered&&(c=s.answered)),a=e})),b.collection("Tests").doc("MS-500").collection("Questions").doc(s.id).get().then((function(e){var n=e.data();n.id=e.id;var s=f()(n.question),a=f()(n.references);t.setState({question:n,questionHtml:s,referencesHtml:a})})),t.setState({test:n,questionIdx:i,nextQuestionId:r,previousQuestionId:o,selectedAnswer:c})}))):Object(p.navigate)("/login")},n.handleCorrectAnswerChange=function(e){var t=this,n=e.target.dataset.index,a=e.target,i=Object(s.a)(this.state.selectedAnswer);if(a.checked)i.push(n);else{var o=i.indexOf(""+n);i.splice(o,1)}this.setState({selectedAnswer:i});var r=Object.assign({},this.state.test);r.questions=r.questions.map((function(e){return e.id===t.state.questionId&&(e.answered=i),e})),b.collection("users").doc(this.state.uid).collection("tests").doc(r.id).set(r),this.setState({test:r})},n.toggleShowAnswer=function(){var e=!this.state.answerShown;this.setState({answerShown:e})},n.toggleShowQuestions=function(){var e=!this.state.questionsShown;this.setState({questionsShown:e})},n.toggleEndExam=function(){var e=!this.state.endExamShown;this.setState({endExamShown:e})},n.gotoQuestion=function(e){var t=this;return function(){Object(p.navigate)("/course/ms-500/question/"+e+"?testId="+t.state.testId)}},n.endExam=function(){var e=this,t=this.state.test;t.isComplete=!0,b.collection("users").doc(this.state.uid).collection("tests").doc(t.id).set(t).then((function(){Object(p.navigate)("/tests/summary?testId="+e.state.testId)}))},n.render=function(){var e=this,t=this.state.question.answers?this.state.question.answers:[];return t=Object(s.a)(t).map((function(t,n){return t.isSelected=e.state.selectedAnswer.includes(""+n),t.optionStyles=Object.assign({},x),e.state.answerShown&&t.isCorrectAnswer&&(t.optionStyles.background="green"),t})),o.createElement(r.a,null,o.createElement("main",null,o.createElement("div",null,o.createElement(l.a,null,o.createElement(c.a,null,o.createElement(d.a,{md:8},o.createElement("h1",null,"Question ",this.state.questionIdx)),o.createElement(d.a,{md:2,className:"align-right"}," ",""!==this.state.previousQuestionId?o.createElement(h.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2,className:"align-right"},""!==this.state.nextQuestionId?o.createElement(h.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(h.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,""!==this.state.questionHtml?o.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.questionHtml}}):""),o.createElement(c.a,null,t.map((function(t,n){return o.createElement("div",{style:t.optionStyles,key:n},o.createElement(u.a.Check,{type:"checkbox",name:"AnswerCheck"+n,id:"AnswerCheck"+n,"data-index":n,inline:!0,style:S,checked:e.state.selectedAnswer.includes(""+n),onChange:e.handleCorrectAnswerChange}),o.createElement("label",{htmlFor:"AnswerCheck"+n},t.value))}))),o.createElement(c.a,null,o.createElement(d.a,null,this.state.answerShown?o.createElement("div",{style:v,dangerouslySetInnerHTML:{__html:this.state.referencesHtml}}):"")),o.createElement(c.a,{className:"align-right"},o.createElement(d.a,{md:8}),o.createElement(d.a,{md:2}," ",""!==this.state.previousQuestionId?o.createElement(h.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.previousQuestionId+"?testId="+this.state.testId},"Previous Question"):""),o.createElement(d.a,{md:2},""!==this.state.nextQuestionId?o.createElement(h.a,{as:p.Link,to:"/course/ms-500/question/"+this.state.nextQuestionId+"?testId="+this.state.testId},"Next Question"):o.createElement(h.a,{onClick:this.toggleEndExam,variant:"warning"},"End Exam"))),o.createElement(c.a,null,o.createElement(d.a,{xs:12,md:6},o.createElement(h.a,{onClick:this.toggleShowAnswer,style:k},this.state.answerShown?o.createElement("span",null,"Hide Answer"):o.createElement("span",null,"Show Answer"))),o.createElement(d.a,{xs:12,md:6,className:"align-right"},o.createElement(h.a,{onClick:this.toggleShowQuestions,style:k},this.state.questionsShown?o.createElement("span",null,"Hide Question List"):o.createElement("span",null,"Show Question List")))),o.createElement(c.a,null,o.createElement(d.a,{className:"align-right"},o.createElement(h.a,{onClick:this.toggleEndExam,variant:"warning",style:k},"End Exam"))))),o.createElement(m.a,{show:this.state.questionsShown,onHide:this.toggleShowQuestions},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Showing Test Questions")),o.createElement(m.a.Body,null,o.createElement(g.a,{striped:!0,bordered:!0,hover:!0},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Answer"))),o.createElement("tbody",null,this.state.test&&this.state.test.questions?this.state.test.questions.map((function(t,n){return o.createElement("tr",{key:n,onClick:e.gotoQuestion(t.id),className:"cursor-pointer"},o.createElement("td",null,n+1),o.createElement("td",null,t.answered))})):""))),o.createElement(m.a.Footer,null,o.createElement(h.a,{variant:"primary",onClick:this.toggleShowQuestions},"Close"))),o.createElement(m.a,{show:this.state.endExamShown,onHide:this.toggleEndExam},o.createElement(m.a.Header,null,o.createElement(m.a.Title,null,"Are you sure?")),o.createElement(m.a.Body,null,this.state.endExamText),o.createElement(m.a.Footer,null,o.createElement(h.a,{variant:"primary",onClick:this.endExam},"Yes"),o.createElement(h.a,{variant:"secondary",onClick:this.toggleEndExam},"No")))))},t}(o.Component);t.default=A}}]);
//# sourceMappingURL=component---src-pages-course-ms-500-question-1-sp-5372-ue-js-cdf0c83c08be23108f0b.js.map