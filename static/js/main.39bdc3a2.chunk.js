(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/false.185884df.svg"},,,function(e,t,a){e.exports=a.p+"static/media/globe.d5bf6ebc.svg"},function(e,t,a){e.exports=a.p+"static/media/correct.f821db6c.svg"},function(e,t,a){e.exports=a.p+"static/media/winner.f21add3b.svg"},function(e,t,a){e.exports=a.p+"static/media/looser.f9b5a40e.svg"},function(e,t,a){e.exports=a.p+"static/media/brand.b6da3589.svg"},function(e,t,a){e.exports=a.p+"static/media/capital.8149793e.svg"},function(e,t,a){e.exports=a.p+"static/media/cat.a4c3b352.svg"},function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),o=a(8),i=a.n(o),r=(a(22),a(1)),l=a(5),c=a(3),u=a(2),d=a(4),m={api:{id:78,title:"world capitals",clues_count:140,clues:[{id:481,answer:"San Jose",question:"Costa Rican capital people might know the way to",value:100,airdate:"1984-09-25T12:00:00.000Z",category_id:78,game_id:null,invalid_count:null},{id:487,answer:"Tokyo",question:"It's divided into the Kanda, Marunoucki, Asakusa & Ginza districts",value:200,airdate:"1984-09-25T12:00:00.000Z",category_id:78,game_id:null,invalid_count:null},{id:493,answer:"Brussels",question:"Home to NATO & little green sprouts",value:300,airdate:"1984-09-25T12:00:00.000Z",category_id:78,game_id:null,invalid_count:null},{id:481,answer:"San Jose",question:"Costa Rican capital people might know the way to",value:100,airdate:"1984-09-25T12:00:00.000Z",category_id:78,game_id:null,invalid_count:null},{id:487,answer:"Tokyo",question:"It's divided into the Kanda, Marunoucki, Asakusa & Ginza districts",value:200,airdate:"1984-09-25T12:00:00.000Z",category_id:78,game_id:null,invalid_count:null},{id:493,answer:"Brussels",question:"Home to NATO & little green sprouts",value:300,airdate:"1984-09-25T12:00:00.000Z",category_id:78,game_id:null,invalid_count:null},{id:481,answer:"San Jose",question:"Costa Rican capital people might know the way to",value:100,airdate:"1984-09-25T12:00:00.000Z",category_id:78,game_id:null,invalid_count:null},{id:487,answer:"Tokyo",question:"It's divided into the Kanda, Marunoucki, Asakusa & Ginza districts",value:200,airdate:"1984-09-25T12:00:00.000Z",category_id:78,game_id:null,invalid_count:null},{id:493,answer:"Brussels",question:"Home to NATO & little green sprouts",value:300,airdate:"1984-09-25T12:00:00.000Z",category_id:78,game_id:null,invalid_count:null},{id:481,answer:"San Jose",question:"Costa Rican capital people might know the way to",value:100,airdate:"1984-09-25T12:00:00.000Z",category_id:78,game_id:null,invalid_count:null},{id:487,answer:"Tokyo",question:"It's divided into the Kanda, Marunoucki, Asakusa & Ginza districts",value:200,airdate:"1984-09-25T12:00:00.000Z",category_id:78,game_id:null,invalid_count:null},{id:493,answer:"Brussels",question:"Home to NATO & little green sprouts",value:300,airdate:"1984-09-25T12:00:00.000Z",category_id:78,game_id:null,invalid_count:null}]},header:{title:"Quizzzy"},footer:{author:"Hetic W2",service:{by:"Powered by",name:"jService"}},categories:[{name:"DEFAULT_CATEGORY",url:"http://jservice.io/api/category?id=78",index:0},{name:"DEFAULT_CATEGORY",url:"http://jservice.io/api/category?id=2537",index:1},{name:"DEFAULT_CATEGORY",url:"http://jservice.io/api/category?id=2289",index:2}],category:{title:{welcome:"Welcome on",name:"Quizzzy"},desc:"Click on the tile to begin"},result:{win:"Your're a winner !",mid:"You can do better !",loose:"You lost !",another:"Come on !",again:"Let's see how good you are !"}},g=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:this.props.style},n.a.createElement("svg",{className:"Loader__svg",width:"38",height:"28",viewBox:"0 0 38 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("line",{className:"Loader__svg__line l1",x1:"0",y1:"2",x2:"50",y2:"2"}),n.a.createElement("line",{className:"Loader__svg__line l2",x1:"0",y1:"10",x2:"50",y2:"10"}),n.a.createElement("line",{className:"Loader__svg__line l3",x1:"0",y1:"18",x2:"50",y2:"18"}),n.a.createElement("line",{className:"Loader__svg__line l4",x1:"0",y1:"26",x2:"50",y2:"26"})))}}]),t}(s.Component),p=a(9),h=a.n(p),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).UNSAFE_componentWillMount=function(){return localStorage.setItem("category",0)},a.updateCategory=function(e){return localStorage.setItem("category",e)},a.toggleMenu=function(){return a.setState({isHidden:!a.state.isHidden})},a.state={isHidden:!0,menuStyle:"filter filter--active",menuHiddenStyle:"filter",menuBoxStyle:"menuBox",menuBoxHiddenStyle:"menuBoxHidden"},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("header",{className:"Header"},n.a.createElement("h1",{className:"brand",onClick:this.props.click},n.a.createElement("img",{className:"brand__image",src:h.a,alt:m.header.title}),n.a.createElement("p",{className:"brand__title"},m.header.title)),n.a.createElement("div",{className:this.props.isMenuHidden?this.state.menuBoxHiddenStyle:this.state.menuBoxStyle},n.a.createElement("div",{className:this.state.isHidden?this.state.menuHiddenStyle:this.state.menuStyle},n.a.createElement("button",{className:"filter__button ",onClick:this.toggleMenu},"Categories"),n.a.createElement("ul",{className:"filter__items filter__items--active"},this.props.apis.map(function(t,a){return n.a.createElement("li",{className:"filter__item",onClick:function(){return e.updateCategory(a)},key:t.result.title,index:a},t.result.title)})))))}}]),t}(s.Component),_=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){return a.categoryID=setInterval(function(){return a.getCategory()},200)},a.UNSAFE_componentWillMount=function(){return clearInterval(a.categoryID)},a.UNSAFE_componentWillUpdate=function(){a.CategoryName=a.props.isLoaded?a.props.apis[a.state.category].result.title:m.categories[a.state.category].name,a.CategoryUrl=a.props.SVGs[a.state.category]},a.getCategory=function(){return a.setState({category:localStorage.getItem("category")})},a.state={category:0},a.CategoryName=m.categories[a.state.category].name,a.CategoryUrl=a.props.SVGs[a.state.category],a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:this.props.style,onClick:this.props.click},n.a.createElement("h2",{className:"tile__title"},m.category.title.welcome,"\xa0",n.a.createElement("span",{className:"bold"},m.category.title.name)),n.a.createElement("p",{className:"tile__info"},m.category.desc),n.a.createElement("img",{className:"tile__image",src:this.CategoryUrl,alt:""}),n.a.createElement("h3",{className:"tile__category"},this.CategoryName))}}]),t}(s.Component),f=a(10),v=a.n(f),S=a(6),b=a.n(S),E=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("header",{className:"tile__header"},n.a.createElement("span",{className:"tile__counter"},"Question ",this.props.question),n.a.createElement("span",{className:"tile__points"},"0",this.props.points,"/10"))}}]),t}(s.Component),I=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("footer",{className:"tile__footer"},n.a.createElement("span",{className:"tile__attempts"},"x",this.props.resetCounter),n.a.createElement("button",{className:"tile__button tile__button--footer",onClick:this.props.click},"Reset"))}}]),t}(s.Component),w=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"tile__container"},n.a.createElement("h3",{className:"tile__question"},this.props.api),n.a.createElement("form",{className:"tile__form",onSubmit:this.props.onSubmit},n.a.createElement("input",{className:"tile__input",type:"text",value:this.props.answer,onChange:this.props.onChange,placeholder:"Type your response"}),n.a.createElement("button",{className:"tile__button"},"OK")),n.a.createElement("img",{className:"tile__result "+this.props.css,src:this.props.visual,alt:""}))}}]),t}(s.Component),N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).UNSAFE_componentWillMount=function(){localStorage.setItem("points",a.storagePoints),localStorage.setItem("questions",a.storageQuestions),localStorage.setItem("index",a.storageIndex),localStorage.setItem("reset",a.storageReset),localStorage.setItem("errors",a.storageErrors),clearInterval(a.resultID)},a.componentDidMount=function(){return a.resultID=setInterval(function(){return a.getResult()},200)},a.getResult=function(){return a.setState({result:a.props.isLoaded?a.props.apis[localStorage.getItem("category")].result:m.api,trueanswer:a.state.result.clues[a.storageIndex].answer})},a.onSubmit=function(e){e.preventDefault(),a.state.answer.toLowerCase()===a.state.trueanswer.toLowerCase()?(a.correctUpdate(),a.setState({visual:v.a,answer:"",trueanswer:a.state.result.clues[a.storageQuestions].answer,isSubmitted:!0})):(a.wrongUpdate(),a.setState({visual:b.a,answer:"",trueanswer:a.state.result.clues[a.storageQuestions].answer,isSubmitted:!0})),3===a.storageErrors&&(a.resultUpdate(),a.storageReset=0,localStorage.setItem("reset",a.storageReset)),10===a.storageIndex&&a.resultUpdate()},a.correctUpdate=function(){a.storagePoints++,a.storageQuestions++,a.storageIndex++,localStorage.setItem("points",a.storagePoints),localStorage.setItem("questions",a.storageQuestions),localStorage.setItem("index",a.storageIndex)},a.wrongUpdate=function(){a.storageQuestions++,a.storageIndex++,a.storageErrors++,localStorage.setItem("questions",a.storageQuestions),localStorage.setItem("index",a.storageIndex),localStorage.setItem("errors",a.storageErrors)},a.resultUpdate=function(){a.props.goToResult(),a.setState({isSubmitted:!1}),a.storageQuestions=1,a.storageIndex=0,a.storageErrors=0,localStorage.setItem("questions",a.storageQuestions),localStorage.setItem("index",a.storageIndex),localStorage.setItem("errors",a.storageErrors)},a.onChange=function(e){a.setState({answer:e.target.value,isSubmitted:!1,visual:b.a}),console.clear(),console.log(a.state.trueanswer)},a.resetScores=function(){a.resultUpdate(),a.storagePoints=0,localStorage.setItem("points",a.storagePoints),a.setState({answer:"",trueanswer:a.state.result.clues[a.storageIndex].answer,isSubmitted:!1})},a.resetAll=function(){a.resetScores(),a.storageReset++,localStorage.setItem("reset",a.storageReset)},a.state={result:a.props.isLoaded?a.props.apis[localStorage.getItem("category")]:m.api,answer:"",trueanswer:"",isSubmitted:!1,visual:b.a,default:!1},a.storagePoints=0,a.storageQuestions=1,a.storageIndex=0,a.storageReset=0,a.storageErrors=0,a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:this.props.style},n.a.createElement(E,{points:localStorage.getItem("points"),question:localStorage.getItem("questions")}),n.a.createElement(w,{api:this.state.result.clues[this.storageIndex].question,onSubmit:this.onSubmit,onChange:this.onChange,answer:this.state.answer,visual:this.state.visual,question:this.storageIndex,css:this.state.isSubmitted?"showed":"hidden"}),n.a.createElement(I,{resetCounter:this.storageReset,click:this.resetAll}))}}]),t}(s.Component),O=a(11),j=a.n(O),C=a(12),x=a.n(C),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.pointsID=setInterval(function(){return a.getPoints()},200),a.questionID=setInterval(function(){return a.getPoints()},200),a.categoryID=setInterval(function(){return a.getPoints()},200)},a.componentWillUnmount=function(){clearInterval(a.pointsID),clearInterval(a.questionID),clearInterval(a.categoryID)},a.getPoints=function(){return a.setState({points:localStorage.getItem("points"),questions:localStorage.getItem("questions"),category:localStorage.getItem("category"),message:{visual:a.state.points<=5?x.a:j.a,title:a.state.points<=5?m.result.loose:m.result.win}})},a.render=function(){return n.a.createElement("section",{className:a.props.style,onClick:a.props.click},n.a.createElement("img",{src:a.state.message.visual,alt:"",className:"tile__image--big"}),n.a.createElement("h3",{className:"tile__title"},a.state.message.title,n.a.createElement("br",null),n.a.createElement("span",{className:"bold"},"0",a.state.points,"/10")),n.a.createElement("p",{className:"tile__info"},"In the category:",n.a.createElement("br",null),n.a.createElement("span",{className:"tile__category--small"},a.props.isLoaded?a.props.apis[a.state.category].result.title:m.categories[a.state.category].name)),n.a.createElement("span",{className:"tile__reminder"},m.result.another,n.a.createElement("br",null),"Click to try another quiz !"))},a.state={points:0,questions:1,category:0,message:{visual:"",title:""}},a}return Object(d.a)(t,e),t}(s.Component),H=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("p",{className:"footer__item"},m.footer.author),n.a.createElement("p",{className:"footer__item"},m.footer.service.by,"\xa0",n.a.createElement("span",{className:"bold"},m.footer.service.name)))}}]),t}(s.Component),q=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:this.props.isLoaded?"error":"error hidden"},n.a.createElement("p",{className:"error__title"},"Oops !"),n.a.createElement("p",{className:"error__message"},"It appears that resources couldn't be loaded properly, please :"),n.a.createElement("a",{className:"error__button",href:"/"},"Try again"))}}]),t}(s.Component),T=a(13),L=a.n(T),R=a(14),A=a.n(R),U=a(15),Q=a.n(U),M=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).UNSAFE_componentWillMount=function(){return a.loadAPis()},a.loadAPis=function(){var e=[],t=0;m.categories.map(function(s,n){return fetch(s.url).then(function(e){return e.json()}).then(function(s){if(t++,e.push({result:s,count:n}),a.setState({apis:e,isLoaded:t===m.categories.length}),a.state.isLoaded){var o=[];a.state.apis.map(function(e,t){o.splice(e.count,0,e),a.setState({apis:o})})}console.log(a.state.apis)},function(e){return a.setState({loadedError:!0})})})},a.hideCategory=function(){return a.setState({isCategoryHidden:!0,isQuestionsHidden:!1,isMenuHidden:!0})},a.hideQuestions=function(){localStorage.setItem("questions",1),localStorage.setItem("index",0),localStorage.setItem("errors",0),localStorage.setItem("reset",0),a.setState({isQuestionsHidden:!0,isResultHidden:!1})},a.hideResults=function(){return a.resetScores(),a.setState({isResultHidden:!0,isCategoryHidden:!1,isMenuHidden:!1})},a.resetScores=function(){localStorage.setItem("points",0),localStorage.setItem("questions",1),localStorage.setItem("index",0),localStorage.setItem("errors",0),localStorage.setItem("reset",0)},a.goHome=function(){a.hideQuestions(),a.hideResults()},a.state={isCategoryHidden:!1,categoryStyle:"tile tile--category",categoryHiddenStyle:"tile tile--category hidden",isResultHidden:!0,resultStyle:"tile tile--result",resultHiddenStyle:"tile tile--result hidden",isQuestionsHidden:!0,questionsStyle:"tile tile--question",questionHiddenStyle:"tile tile--question hidden",loaderStyle:"Loader",apis:[],SVGs:[A.a,L.a,Q.a],newApis:[],isLoaded:!1,loadedError:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"App"},n.a.createElement(q,{isLoaded:this.state.loadedError}),n.a.createElement(g,{style:this.state.isLoaded?"".concat(this.state.loaderStyle," invisible"):"".concat(this.state.loaderStyle," showed")}),n.a.createElement(y,{apis:this.state.apis,click:this.goHome,isMenuHidden:this.state.isMenuHidden}),n.a.createElement("section",{className:"tiles"},n.a.createElement(_,{style:this.state.isCategoryHidden?this.state.categoryHiddenStyle:this.state.categoryStyle,click:this.hideCategory,apis:this.state.apis,isLoaded:this.state.isLoaded,SVGs:this.state.SVGs}),n.a.createElement(N,{style:this.state.isQuestionsHidden?this.state.questionHiddenStyle:this.state.questionsStyle,apis:this.state.apis,isLoaded:this.state.isLoaded,goToResult:this.hideQuestions}),n.a.createElement(k,{style:this.state.isResultHidden?this.state.resultHiddenStyle:this.state.resultStyle,click:this.hideResults,isLoaded:this.state.isLoaded,apis:this.state.apis})),n.a.createElement(H,null))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[16,2,1]]]);
//# sourceMappingURL=main.39bdc3a2.chunk.js.map