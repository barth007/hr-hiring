(this.webpackJsonphr_hiring_frontend=this.webpackJsonphr_hiring_frontend||[]).push([[0],{123:function(e,t,c){},151:function(e,t,c){},152:function(e,t,c){},153:function(e,t,c){},154:function(e,t,c){},155:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(16),l=c.n(a),n=c(11),r=(c(123),c(9)),i=c(46),o=c(12),j=c(222),d=c(210),b=c(208),h=c(217),x=c(209),m=c(219),O=c(212),u=c(211),p=c(97),v=c(203),g=c(206),f=c.p+"static/media/logo.13305dc0.png",w=c(89),N=c(74),y=c.n(N),k=c(90),P="http://100055.pythonanywhere.com/api/",S=c.n(k).a.create({baseURL:P,timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT"+localStorage.getItem("access_token"):null,"Content-Type":"application/json",accept:"application/json"}});S.interceptors.response.use((function(e){return e}),function(){var e=Object(w.a)(y.a.mark((function e(t){var c,s,a,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.config,"undefined"!==typeof t.response){e.next=4;break}return alert("A server/network error occurred.Looks like CORS might be the problem.Sorry about this -we will get it fixed shortly"),e.abrupt("return",Promise.reject(t));case 4:if(401!==t.response.status||c.url!==P+"token/refresh"){e.next=7;break}return window.location.href="/login",e.abrupt("return",Promise.reject(t));case 7:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText){e.next=19;break}if(!(s=localStorage.getItem("refresh_token"))){e.next=19;break}if(a=JSON.parse(atob(s.split(".")[1])),l=Math.ceil(Date.now()/1e3),console.log(a.exp),!(a.exp>l)){e.next=17;break}return e.abrupt("return",S.post("/token/refresh/",{refresh:s}).then((function(e){return localStorage.setItem("access_token",e.data.access),localStorage.setItem("refresh_token",e.data.refresh),S.defaults.headers.Authorization="JWT"+e.data.access,c.defaults.headers.authorization="JWT"+e.data.access,S(c)})).cata((function(e){console.log(e)})));case 17:console.log("Refresh token not available."),window.location.href="/login";case 19:return e.abrupt("return",Promise.reject(t));case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var C=S,z={Registration:"accounts/register_user/",Login:"accounts/login_user/"},A=c(2),_=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},control:{padddingRight:e.spacing(30)},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main,width:161,height:105,paddingBottom:9},logo:{width:168,height:113},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function R(){var e=Object(n.f)(),t=Object.freeze({email:"",password:""}),c=Object(s.useState)(t),a=Object(o.a)(c,2),l=a[0],v=a[1],w=function(e){v(Object(i.a)(Object(i.a)({},l),{},Object(r.a)({},e.target.name,e.target.value.trim())))},N=_();return Object(A.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(A.jsx)(b.a,{}),Object(A.jsxs)("div",{className:N.paper,children:[Object(A.jsx)(j.a,{className:N.avatar,children:Object(A.jsx)("img",{className:N.logo,src:f})}),Object(A.jsx)(p.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(A.jsxs)("form",{className:N.form,noValidate:!0,children:[Object(A.jsx)(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:w}),Object(A.jsx)(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:w}),Object(A.jsx)(x.a,{className:N.control,control:Object(A.jsx)(m.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(A.jsx)(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:N.submit,onClick:function(t){t.preventDefault(),console.log(l),C.post(z.Login,{email:l.email,password:l.password}).then((function(t){localStorage.setItem("acces_token",t.data.access),localStorage.setItem("refresh_token",t.data.refresh),C.defaults.headers.Authorization="JWT"+localStorage.getItem("access_token"),e("/home")}))},children:"Sign In"}),Object(A.jsxs)(u.a,{container:!0,children:[Object(A.jsx)(u.a,{item:!0,xs:!0,children:Object(A.jsx)(O.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(A.jsx)(u.a,{item:!0,children:Object(A.jsx)(O.a,{href:"/",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})]})}var D=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main,width:161,height:105,paddingBottom:9},logo:{width:168,height:113},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var I=function(){var e=Object(n.f)(),t=Object.freeze({email:"",username:"",password:""}),c=Object(s.useState)(t),a=Object(o.a)(c,2),l=a[0],v=a[1],w=function(e){v(Object(i.a)(Object(i.a)({},l),{},Object(r.a)({},e.target.name,e.target.value.trim())))},N=D();return Object(A.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(A.jsx)(b.a,{}),Object(A.jsxs)("div",{className:N.paper,children:[Object(A.jsx)(j.a,{className:N.avatar,children:Object(A.jsx)("img",{className:N.logo,src:f})}),Object(A.jsx)(p.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(A.jsxs)("form",{className:N.form,noValidate:!0,children:[Object(A.jsxs)(u.a,{container:!0,spacing:2,children:[Object(A.jsx)(u.a,{item:!0,xs:12,children:Object(A.jsx)(h.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:w})}),Object(A.jsx)(u.a,{item:!0,xs:12,children:Object(A.jsx)(h.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",onChange:w})}),Object(A.jsx)(u.a,{item:!0,xs:12,children:Object(A.jsx)(h.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:w})}),Object(A.jsx)(u.a,{item:!0,xs:12,children:Object(A.jsx)(x.a,{control:Object(A.jsx)(m.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),Object(A.jsx)(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:N.submit,onClick:function(t){t.preventDefault(),console.log(l),C.post(z.Registration,{email:l.email,username:l.username,password:l.password}).then((function(t){e("/home"),console.log(t),console.log(t.data)}))},children:"Sign Up"}),Object(A.jsx)(u.a,{container:!0,justify:"flex-end",children:Object(A.jsx)(u.a,{item:!0,children:Object(A.jsx)(O.a,{href:"/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})},U=c(27),W=c(51),T=c(29),F=[{title:"Notification alerts",path:"/",cName:"nav-text"},{title:"Settings",path:"/reports",cName:"nav-text"},{title:"Terms & Condition",path:"/products",cName:"nav-text"},{title:"Support",path:"/team",cName:"nav-text"}],Y=(c(151),c(0)),E=c(95),L=(Object(E.a)({palette:{secondary:{main:"#C4C4C4"}}}),Object(v.a)((function(e){return{button:{}}})));var J=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],l=Object(s.useState)(!1),n=Object(o.a)(l,2),r=n[0],i=n[1],j=Object(s.useState)(!1),d=Object(o.a)(j,2),b=d[0],h=(d[1],function(){return a(!c)}),x=function(){window.scrollY>100?i(!0):i(!1)};return Object(s.useEffect)((function(){return window.addEventListener("scroll",x),function(){window.removeEventListener("scroll",x)}}),[]),L(),Object(A.jsxs)(Y.b.Provider,{value:{color:"#000000",size:"22px"},children:[Object(A.jsx)("div",{className:"navbar ".concat(r&&"nav__grey"),children:Object(A.jsx)(T.b,{to:"#",className:"menu-bars",children:Object(A.jsx)(U.a,{className:"icons",onClick:h})})}),Object(A.jsx)("div",{className:b?"modal-ovelay":"open-modal",children:Object(A.jsx)("nav",{className:c?"nav-menu active":"nav-menu",children:Object(A.jsxs)("ul",{className:"nav-menu-items",onClick:h,children:[Object(A.jsx)("li",{className:"navbar-toggle",children:Object(A.jsx)(T.b,{to:"#",className:"menu-bars",children:Object(A.jsx)(W.a,{})})}),F.map((function(e,t){return Object(A.jsx)("li",{className:e.cName,children:Object(A.jsxs)(T.b,{to:e.path,children:[e.icon,Object(A.jsx)("span",{children:e.title})]})},t)})),Object(A.jsx)("button",{className:"logout-button",children:"Logout"})]})})})]})},q=c(221),B=c(224),M=c(218),V=c(223),H=c(92),$=c(93),G=c(94),K=(c(152),Object(v.a)((function(){return{root:{color:"green","&$selected":{color:"red"}},selected:{}}})));function Q(){var e=s.useState(0),t=Object(o.a)(e,2),c=t[0],a=t[1],l=K();return Object(A.jsx)(q.a,{sx:{width:500},children:Object(A.jsx)(V.a,{sx:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"primary"},elevation:3,children:Object(A.jsxs)(B.a,{showLabels:!0,style:{background:"#C4C4C4"},value:c,onChange:function(e,t){a(t)},children:[Object(A.jsx)(M.a,{classes:l.root,style:{color:"#838383",activeColor:"#000000"},label:"Home",icon:Object(A.jsx)(W.b,{fontSize:"24px",color:"#838383"}),component:T.b,to:"/"}),Object(A.jsx)(M.a,{label:"Applied",style:{color:"#838383"},icon:Object(A.jsx)(H.a,{fontSize:"24px",color:"#838383"})}),Object(A.jsx)(M.a,{label:"Alerts",style:{color:"#838383"},icon:Object(A.jsx)($.a,{fontSize:"24px",color:"#838383"})}),Object(A.jsx)(M.a,{label:"user",style:{color:"#838383"},icon:Object(A.jsx)(G.a,{fontSize:"24px",color:"#838383"})})]})})})}c(153);var X=c(35);var Z=function(){return Object(A.jsx)("div",{className:"container-wrapper",children:Object(A.jsxs)("div",{class:"row",children:[Object(A.jsx)("div",{class:"column",children:Object(A.jsx)("div",{class:"card",children:Object(A.jsxs)("div",{class:"container",children:[Object(A.jsxs)("div",{className:"row-text",children:[Object(A.jsx)("h4",{children:Object(A.jsx)("b",{children:"Python Programmer"})}),Object(A.jsx)("p",{className:"detail dowell",children:"Dowell Ux living lab"}),Object(A.jsx)("p",{className:"detail skill",children:"Skills: Python"}),Object(A.jsx)("button",{className:"apply-button",children:"Apply"})]}),Object(A.jsx)("div",{className:"row-bottom",children:Object(A.jsx)(Y.b.Provider,{value:{color:"#838383",size:"14px"},children:Object(A.jsxs)("ul",{children:[Object(A.jsxs)("li",{children:[Object(A.jsx)(U.b,{}),"0-1 Yr"]}),Object(A.jsxs)("li",{children:[Object(A.jsx)(X.a,{}),"Romote"]}),Object(A.jsx)("li",{children:Object(A.jsx)("span",{className:"free",children:"Freelence"})})]})})})]})})}),Object(A.jsx)("div",{class:"column",children:Object(A.jsx)("div",{class:"card",children:Object(A.jsxs)("div",{class:"container",children:[Object(A.jsxs)("div",{className:"row-text",children:[Object(A.jsx)("h4",{children:Object(A.jsx)("b",{children:"Python Programmer"})}),Object(A.jsx)("p",{className:"detail dowell",children:"Dowell Ux living lab"}),Object(A.jsx)("p",{className:"detail skill",children:"Skills: Python"}),Object(A.jsx)("button",{className:"apply-button",children:"Apply"})]}),Object(A.jsx)("div",{className:"row-bottom",children:Object(A.jsx)(Y.b.Provider,{value:{color:"#838383",size:"14px"},children:Object(A.jsxs)("ul",{children:[Object(A.jsxs)("li",{children:[Object(A.jsx)(U.b,{}),"0-1 Yr"]}),Object(A.jsxs)("li",{children:[Object(A.jsx)(X.a,{}),"Romote"]}),Object(A.jsx)("li",{children:Object(A.jsx)("span",{className:"free",children:"Freelence"})})]})})})]})})}),Object(A.jsx)("div",{class:"column",children:Object(A.jsx)("div",{class:"card",children:Object(A.jsxs)("div",{class:"container",children:[Object(A.jsxs)("div",{className:"row-text",children:[Object(A.jsx)("h4",{children:Object(A.jsx)("b",{children:"Python Programmer"})}),Object(A.jsx)("p",{className:"detail dowell",children:"Dowell Ux living lab"}),Object(A.jsx)("p",{className:"detail skill",children:"Skills: Python"}),Object(A.jsx)("button",{className:"apply-button",children:"Apply"})]}),Object(A.jsx)("div",{className:"row-bottom",children:Object(A.jsx)(Y.b.Provider,{value:{color:"#838383",size:"14px"},children:Object(A.jsxs)("ul",{children:[Object(A.jsxs)("li",{children:[Object(A.jsx)(U.b,{}),"0-1 Yr"]}),Object(A.jsxs)("li",{children:[Object(A.jsx)(X.a,{}),"Romote"]}),Object(A.jsx)("li",{children:Object(A.jsx)("span",{className:"free",children:"Freelence"})})]})})})]})})}),Object(A.jsx)("div",{class:"column",children:Object(A.jsx)("div",{class:"card",children:Object(A.jsxs)("div",{class:"container",children:[Object(A.jsxs)("div",{className:"row-text",children:[Object(A.jsx)("h4",{children:Object(A.jsx)("b",{children:"Python Programmer"})}),Object(A.jsx)("p",{className:"detail dowell",children:"Dowell Ux living lab"}),Object(A.jsx)("p",{className:"detail skill",children:"Skills: Python"}),Object(A.jsx)("button",{className:"apply-button",children:"Apply"})]}),Object(A.jsx)("div",{className:"row-bottom",children:Object(A.jsx)(Y.b.Provider,{value:{color:"#838383",size:"14px"},children:Object(A.jsxs)("ul",{children:[Object(A.jsxs)("li",{children:[Object(A.jsx)(U.b,{}),"0-1 Yr"]}),Object(A.jsxs)("li",{children:[Object(A.jsx)(X.a,{}),"Romote"]}),Object(A.jsx)("li",{children:Object(A.jsx)("span",{className:"free",children:"Freelence"})})]})})})]})})}),Object(A.jsx)("div",{class:"column",children:Object(A.jsx)("div",{class:"card",children:Object(A.jsxs)("div",{class:"container",children:[Object(A.jsxs)("div",{className:"row-text",children:[Object(A.jsx)("h4",{children:Object(A.jsx)("b",{children:"Python Programmer"})}),Object(A.jsx)("p",{className:"detail dowell",children:"Dowell Ux living lab"}),Object(A.jsx)("p",{className:"detail skill",children:"Skills: Python"}),Object(A.jsx)("button",{className:"apply-button",children:"Apply"})]}),Object(A.jsx)("div",{className:"row-bottom",children:Object(A.jsx)(Y.b.Provider,{value:{color:"#838383",size:"14px"},children:Object(A.jsxs)("ul",{children:[Object(A.jsxs)("li",{children:[Object(A.jsx)(U.b,{}),"0-1 Yr"]}),Object(A.jsxs)("li",{children:[Object(A.jsx)(X.a,{}),"Romote"]}),Object(A.jsx)("li",{children:Object(A.jsx)("span",{className:"free",children:"Freelence"})})]})})})]})})}),Object(A.jsx)("div",{class:"column",children:Object(A.jsx)("div",{class:"card",children:Object(A.jsxs)("div",{class:"container",children:[Object(A.jsxs)("div",{className:"row-text",children:[Object(A.jsx)("h4",{children:Object(A.jsx)("b",{children:"Python Programmer"})}),Object(A.jsx)("p",{className:"detail dowell",children:"Dowell Ux living lab"}),Object(A.jsx)("p",{className:"detail skill",children:"Skills: Python"}),Object(A.jsx)("button",{className:"apply-button",children:"Apply"})]}),Object(A.jsx)("div",{className:"row-bottom",children:Object(A.jsx)(Y.b.Provider,{value:{color:"#838383",size:"14px"},children:Object(A.jsxs)("ul",{children:[Object(A.jsxs)("li",{children:[Object(A.jsx)(U.b,{}),"0-1 Yr"]}),Object(A.jsxs)("li",{children:[Object(A.jsx)(X.a,{}),"Romote"]}),Object(A.jsx)("li",{children:Object(A.jsx)("span",{className:"free",children:"Freelence"})})]})})})]})})}),Object(A.jsx)("div",{class:"column",children:Object(A.jsx)("div",{class:"card",children:Object(A.jsxs)("div",{class:"container",children:[Object(A.jsxs)("div",{className:"row-text",children:[Object(A.jsx)("h4",{children:Object(A.jsx)("b",{children:"Python Programmer"})}),Object(A.jsx)("p",{className:"detail dowell",children:"Dowell Ux living lab"}),Object(A.jsx)("p",{className:"detail skill",children:"Skills: Python"}),Object(A.jsx)("button",{className:"apply-button",children:"Apply"})]}),Object(A.jsx)("div",{className:"row-bottom",children:Object(A.jsx)(Y.b.Provider,{value:{color:"#838383",size:"14px"},children:Object(A.jsxs)("ul",{children:[Object(A.jsxs)("li",{children:[Object(A.jsx)(U.b,{}),"0-1 Yr"]}),Object(A.jsxs)("li",{children:[Object(A.jsx)(X.a,{}),"Romote"]}),Object(A.jsx)("li",{children:Object(A.jsx)("span",{className:"free",children:"Freelence"})})]})})})]})})}),Object(A.jsx)("div",{class:"column",children:Object(A.jsx)("div",{class:"card",children:Object(A.jsxs)("div",{class:"container",children:[Object(A.jsxs)("div",{className:"row-text",children:[Object(A.jsx)("h4",{children:Object(A.jsx)("b",{children:"Python Programmer"})}),Object(A.jsx)("p",{className:"detail dowell",children:"Dowell Ux living lab"}),Object(A.jsx)("p",{className:"detail skill",children:"Skills: Python"}),Object(A.jsx)("button",{className:"apply-button",children:"Apply"})]}),Object(A.jsx)("div",{className:"row-bottom",children:Object(A.jsx)(Y.b.Provider,{value:{color:"#838383",size:"14px"},children:Object(A.jsxs)("ul",{children:[Object(A.jsxs)("li",{children:[Object(A.jsx)(U.b,{}),"0-1 Yr"]}),Object(A.jsxs)("li",{children:[Object(A.jsx)(X.a,{}),"Romote"]}),Object(A.jsx)("li",{children:Object(A.jsx)("span",{className:"free",children:"Freelence"})})]})})})]})})})]})})};var ee=function(){return Object(A.jsxs)("div",{children:[Object(A.jsx)(J,{}),Object(A.jsx)(Z,{}),Object(A.jsx)(Q,{})]})};var te=function(){return Object(A.jsx)("div",{className:"App",children:Object(A.jsx)(T.a,{children:Object(A.jsx)(s.StrictMode,{children:Object(A.jsxs)(n.c,{children:[Object(A.jsx)(n.a,{exact:!0,path:"/",element:Object(A.jsx)(I,{})}),Object(A.jsx)(n.a,{exact:!0,path:"/login",element:Object(A.jsx)(R,{})}),Object(A.jsx)(n.a,{exact:!0,path:"/home",element:Object(A.jsx)(ee,{})})]})})})})};c(154);l.a.render(Object(A.jsx)(te,{}),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.7e236389.chunk.js.map