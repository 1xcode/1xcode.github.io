(this["webpackJsonpprogramming-zone.github.io"]=this["webpackJsonpprogramming-zone.github.io"]||[]).push([[0],[,function(e,t,a){e.exports=a.p+"static/media/logo.08bd3983.png"},,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(3),i=a.n(o),c=(a(13),a(14),a(15),a(4)),l=a(5),m=a(7),s=a(6),u=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={repositories:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/orgs/programming-zone/repos").then((function(e){return e.json()})).then((function(t){e.setState({repositories:t})}))}},{key:"render",value:function(){var e=this.state.repositories.length;return n.a.createElement("div",{className:"repo-div"},n.a.createElement("a",{href:"https://github.com/programming-zone"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fa fa-github"})," ",e," repositories")))}}]),a}(r.Component),g=a(1),p=a.n(g),h=function(){return n.a.createElement("div",{className:"nav-div"},n.a.createElement("nav",null,n.a.createElement("div",{className:"navigation-group"},n.a.createElement("h1",null,"Programming Zone ")),n.a.createElement("div",null,n.a.createElement("img",{width:"64px",height:"64px",src:p.a,alt:"logo"}))),n.a.createElement(u,null))};var d=function(){return n.a.createElement("div",{className:"header-div"},n.a.createElement("section",{className:"hero--component"},n.a.createElement("div",{className:"hero-container","data-align":"center"},n.a.createElement("h2",{className:"hero-heading"},"Commit to collaborate. Push innovation."),n.a.createElement("div",{className:"hero-copy"},n.a.createElement("p",null,"Collaborating with a community is about more than developing code. Collaboration is the freedom to ask questions and offer improvements\u2014that's the open source way. It's why we've been a part of open source communities, working side-by-side with people like you."),n.a.createElement("p",null,"Let's make something together.")))))};var E=function(e){return n.a.createElement("div",{className:"card-div"},n.a.createElement("div",{className:"card--component"},n.a.createElement("div",{className:"card-header"},n.a.createElement("a",{href:e.url},n.a.createElement("img",{height:"32px",className:"card-header-img",src:e.img,alt:"repo-logo"}))),n.a.createElement("div",{className:"card-body","data-align":"center"},n.a.createElement("h3",{className:"card-body-headline"},n.a.createElement("a",{className:"title-link",href:e.url},e.title)),n.a.createElement("p",{className:"card-body-copy"}," ",e.description," ")),n.a.createElement("div",{className:"card-footer"},n.a.createElement("div",{className:"card-footer-content","data-align":"right"},n.a.createElement("a",{className:"card-footer-link",href:e.website},n.a.createElement("i",{className:"card-footer-icon fa fa-fw fa-globe"})," Website")),"|",n.a.createElement("div",{className:"card-footer-content","data-align":"left"},n.a.createElement("a",{className:"card-footer-link",href:e.url},n.a.createElement("i",{className:"card-footer-icon fa fa-github"})," Repo")))))},f=[{id:1,img:"https://avatars3.githubusercontent.com/u/53279732?s=200&v=4",title:"Programming Zone",description:"Our Main Project",url:"https://github.com/programming-zone",website:"https://programming-zone.github.io/"},{id:2,img:"https://isocpp.org/files/img/cpp_logo.png",title:"C Plus Plus Program",description:"This Project is for the purpose of learning C++ together. Do contribute to this Project.",url:"https://github.com/programming-zone/C-Plus-Plus-Program",website:"https://programming-zone.github.io/"},{id:3,img:"https://git-scm.com/images/logo@2x.png",title:"Git Tutorials",description:"The purpose of this project is to learn Git to the beginners",url:"https://github.com/programming-zone/Git_Tutorials",website:"https://git-scm.com/"}];var v=function(){return n.a.createElement("div",{className:"footer-div"},n.a.createElement("footer",null,n.a.createElement("div",{className:"footer-group"},n.a.createElement("p",{className:"footer-copyright",property:"dc:rights"},"Copyright \xa9",n.a.createElement("span",{property:"dc:dateCopyrighted"},"2019\u20132020")," ",n.a.createElement("span",{property:"dc:publisher"},"Programming Zone"))),n.a.createElement("div",null,n.a.createElement("img",{width:"64px",height:"64px",src:p.a,alt:"logo"}))),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#root"},"Home")),"|",n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/programming-zone"},"Github")),"|",n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/programming-zone/programming-zone.github.io"},"Fork Me")))))};var b=function(){var e=f.map((function(e){return n.a.createElement(E,{key:e.id,img:e.img,title:e.title,description:e.description,url:e.url,website:e.website})}));return n.a.createElement("div",{className:"App"},n.a.createElement(h,null),n.a.createElement(d,null),n.a.createElement("div",{className:"band-container","data-layout":"3-up"},e),n.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.f47618ce.chunk.js.map