(this.webpackJsonpdiogomedina=this.webpackJsonpdiogomedina||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports={Contact:"styles__Contact___25oG3",Error:"styles__Error___IHpLC",errorFade:"styles__errorFade___2N8cn",Icon:"styles__Icon___1eVVS",EmailInfos:"styles__EmailInfos___2IG70",SocialNetworkInfos:"styles__SocialNetworkInfos___1O_BU",container:"styles__container___27DEJ"}},,,,function(e,t,a){e.exports={About:"styles__About___2GNlG",Image:"styles__Image___1PKHm",ImagePaper:"styles__ImagePaper___3s6Im",container:"styles__container___3HPsF"}},function(e,t,a){e.exports={Container:"styles__Container___1Lt8T",Col:"styles__Col___3PLu3",Col1:"styles__Col1___1d1wY",Col2:"styles__Col2___39Dqf",Col3:"styles__Col3___21rR6",Col4:"styles__Col4___2lSmt",Col5:"styles__Col5___35M6h",Col6:"styles__Col6___3fZ-v",Col7:"styles__Col7___1S_zk",Col8:"styles__Col8___22vY1",Col9:"styles__Col9___w3Ehc",Col10:"styles__Col10___14g_P",Col11:"styles__Col11___b8svP",Col12:"styles__Col12___2dkh_"}},function(e,t,a){e.exports={Title:"styles__Title___BgtYR",Left:"styles__Left___2gGQj",Right:"styles__Right___1TMz_"}},function(e,t,a){e.exports={Button:"styles__Button___173-V",Left:"styles__Left___LgjgI",Right:"styles__Right___36_kZ"}},,function(e,t,a){e.exports={Menu:"styles__Menu___-x7AV",container:"styles__container___27iNB"}},function(e,t,a){e.exports={Items:"styles__Items___3Hpk-",ShowMenuMobile:"styles__ShowMenuMobile___cNnpN"}},function(e,t,a){e.exports={Footer:"styles__Footer___1FL9M",container:"styles__container___2gEWG"}},function(e,t,a){e.exports={Skills:"styles__Skills___3gc7g",container:"styles__container___3sQsM"}},function(e,t,a){e.exports={Icon:"styles__Icon___3Yk0I",Title:"styles__Title___2WTCz"}},function(e,t,a){e.exports={Loading:"styles__Loading___2cVhy",Loader:"styles__Loader___3gMVD",load2:"styles__load2___15GiG"}},function(e,t,a){e.exports={Success:"styles__Success___1TTLm",Icon:"styles__Icon___1YSzM"}},function(e,t,a){e.exports={Error:"styles__Error___aDnTI",Icon:"styles__Icon___hLqYB"}},,,,,,,,,,,,,,function(e,t,a){e.exports={Logo:"styles__Logo___24Qey"}},function(e,t,a){e.exports={Item:"styles__Item___1TZWt"}},function(e,t,a){e.exports={Toggle:"styles__Toggle___cC-n5"}},function(e,t,a){e.exports={Home:"styles__Home___2ChnR"}},function(e,t,a){e.exports={Banner:"styles__Banner___38E9f"}},function(e,t,a){e.exports=a.p+"static/media/banner.886bf0dc.jpg"},function(e,t,a){e.exports={Paper:"styles__Paper___yGXhZ"}},function(e,t,a){e.exports={Description:"style__Description___ELP3_"}},function(e,t,a){e.exports=a.p+"static/media/diogomedina.3ea60740.jpg"},function(e,t,a){e.exports={Input:"styles__Input___1TJmq"}},function(e,t,a){e.exports={Textarea:"styles__Textarea___2mllw"}},,,,function(e,t,a){e.exports=a(81)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(38),r=a.n(o),c=(a(58),a(18)),s=a.n(c),i=a(39),_=a.n(i),u=function(){return l.a.createElement("a",{href:"/",className:_.a.Logo,onClick:function(e){e.preventDefault(),window.scroll({top:0,behavior:"smooth"})}},"Diogo Medina")},m=a(19),E=a.n(m),d=a(40),f=a.n(d),g=a(8),p=l.a.createContext(),v=function(e){var t=e.children,a=Object(n.useState)(!1),o=Object(g.a)(a,2),r=o[0],c=o[1];return l.a.createElement(p.Provider,{value:{showMenuMobile:r,toggleMenuMobile:function(){c(!r)}}},t)},y=function(e){var t=e.targetId,a=e.label,o=Object(n.useContext)(p).toggleMenuMobile;return l.a.createElement("li",{className:f.a.Item},l.a.createElement("a",{href:"/#".concat(t),onClick:function(e){e.preventDefault();var a=document.querySelector("#".concat(t));a&&(o(),window.scroll({top:a.offsetTop-60,behavior:"smooth"}))}},a))},b=[{targetId:"home",label:"Home"},{targetId:"about",label:"Sobre"},{targetId:"skills",label:"Habilidades"},{targetId:"contact",label:"Contato"}],h=function(){var e=[E.a.Items];return Object(n.useContext)(p).showMenuMobile&&e.push(E.a.ShowMenuMobile),l.a.createElement("ul",{className:e.join(" ")},b.map((function(e,t){return l.a.createElement(y,{key:t,targetId:e.targetId,label:e.label})})))},C=a(41),N=a.n(C),I=function(){var e=Object(n.useContext)(p).toggleMenuMobile;return l.a.createElement("button",{type:"button",className:N.a.Toggle,onClick:function(){return e()}},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))},S=function(){return l.a.createElement("nav",{className:s.a.Menu},l.a.createElement("div",{className:s.a.container},l.a.createElement(u,null),l.a.createElement(h,null),l.a.createElement(I,null)))},x=function(){return l.a.createElement("header",null,l.a.createElement(S,null))},T=a(20),M=a.n(T),j=function(){return l.a.createElement("footer",{className:M.a.Footer},l.a.createElement("div",{className:M.a.container},"Diogo Medina \xa9 ",(new Date).getFullYear()," - Todos os direitos reservados"))},D=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,null),t,l.a.createElement(j,null))},O=a(51),k=a(1),L=a(42),w=a.n(L),P=a(43),A=a.n(P),F=a(44),R=a.n(F),q=function(){return l.a.createElement("section",{id:"home",className:A.a.Banner,style:{backgroundImage:"url(".concat(R.a,")")}},l.a.createElement("div",null,l.a.createElement("h1",null,"Diogo Medina"),l.a.createElement("h2",null,"Desenvolvedor Full Stack")))},B=a(13),H=a.n(B),G=a(12),V=a(14),Y=a.n(V),z=function(e){return l.a.createElement("div",{className:Y.a.Container,style:Object(G.a)({},e.style)},e.children)},J=function(e){var t=[Y.a.Col];if(e.col&&e.col>=1&&e.col<=12){var a=Math.floor(e.col);t.push(Y.a["Col".concat(a)])}return l.a.createElement("div",{className:t.join(" "),style:Object(G.a)({},e.style)},e.children)},W=function(e){return e.container?l.a.createElement(z,e):l.a.createElement(J,e)},Q=a(45),U=a.n(Q),Z=function(e){var t=e.children,a=e.style;return l.a.createElement("div",{className:U.a.Paper,style:Object(G.a)({},a)},t)},K=a(15),X=a.n(K),$=function(e){var t=e.align,a=e.children,n=[X.a.Title];return"left"===t?n.push(X.a.Left):"right"===t&&n.push(X.a.Right),l.a.createElement("h1",{className:n.join(" ")},a)},ee=a(46),te=a.n(ee),ae=function(){return l.a.createElement("div",{className:te.a.Description},l.a.createElement("h2",null,"Forma\xe7\xe3o"),l.a.createElement("ul",null,l.a.createElement("li",null,"Ensino superior conclu\xeddo - Engenharia da computa\xe7\xe3o - Unisanta"),l.a.createElement("li",null,"Ensino t\xe9cnico conclu\xeddo - T\xe9cnico em inform\xe1tica - Escola Modelo de Santos"),l.a.createElement("li",null,"Ingl\xeas intermedi\xe1rio conclu\xeddo - CNA")),l.a.createElement("h2",null,"Experi\xeancia profissional"),l.a.createElement("b",null,"Summer Comunica\xe7\xe3o \u2013 S\xe3o Vicente/SP"),l.a.createElement("ul",null,l.a.createElement("li",null,"Per\xedodo como estagi\xe1rio: 26/03/2018 - 31/05/2019"),l.a.createElement("li",null,"Per\xedodo como desenvolvedor web I: 03/06/2019 - 16/08/2019"),l.a.createElement("li",null,"Sobre: Ag\xeancia de marketing digital de pequeno porte"),l.a.createElement("li",null,"Fun\xe7\xf5es: Desenvolver sites com WordPress; Desenvolver e-commerces com PHP utilizando o framework CodeIgniter e MySQL; Modelar dados; Aplicar SEO nos sites")),l.a.createElement("b",null,"Triibo - S\xe3o Paulo/SP"),l.a.createElement("ul",null,l.a.createElement("li",null,"Per\xedodo como estagi\xe1rio: 19/08/2019 - 25/11/2019"),l.a.createElement("li",null,"Per\xedodo como desenvolvedor j\xfanior: 26/11/2019 - Atual"),l.a.createElement("li",null,"Sobre: Startup desenvolvedora de uma plataforma que conecta o usu\xe1rio aos mais diversos estabelecimentos comerciais e profissionais aut\xf4nomos"),l.a.createElement("li",null,"Fun\xe7\xf5es: Desenvolver sites com WordPress; Desenvolver sites com React (Redux) com chamadas de API e integra\xe7\xe3o com o Firebase; Desenvolver aplicativos para Android utilizando Kotlin; Aplicar SEO nos sites")))},ne=a(47),le=a.n(ne),oe=function(){return l.a.createElement("section",{id:"about",className:H.a.About},l.a.createElement("div",{className:H.a.container},l.a.createElement(W,{container:!0},l.a.createElement(W,{col:5},l.a.createElement("div",{className:H.a.ImagePaper},l.a.createElement(Z,null,l.a.createElement("img",{className:H.a.Image,src:le.a,alt:"Diogo Medina"})))),l.a.createElement(W,{col:7},l.a.createElement($,{align:"left"},"Sobre ",l.a.createElement("b",null,"mim")),l.a.createElement(ae,null)))))},re=a(3),ce=a(21),se=a.n(ce),ie=a(22),_e=a.n(ie),ue=function(e){var t=e.data,a=t.Icon,n=t.title;return l.a.createElement(W,{col:4,style:{margin:"10px 0"}},l.a.createElement(Z,{style:{height:"100%"}},l.a.createElement("i",{className:_e.a.Icon},l.a.createElement(a,null)),l.a.createElement("h4",{className:_e.a.Title},n)))},me=[{Icon:re.d,title:"HTML5"},{Icon:re.a,title:"CSS3"},{Icon:re.e,title:"Javascript"},{Icon:re.h,title:"React"},{Icon:re.h,title:"React Native"},{Icon:re.g,title:"Node.js"}],Ee=function(){return l.a.createElement("section",{id:"skills",className:se.a.Skills},l.a.createElement("div",{className:se.a.container},l.a.createElement($,null,"Minhas ",l.a.createElement("b",null,"habilidades")),l.a.createElement(W,{container:!0},me.map((function(e,t){return l.a.createElement(ue,{key:t,data:e})})))))},de=a(9),fe=a.n(de),ge=a(48),pe=a.n(ge),ve=function(e){return l.a.createElement("input",Object.assign({},e,{className:pe.a.Input}))},ye=a(49),be=a.n(ye),he=function(e){return l.a.createElement("textarea",Object.assign({},e,{className:be.a.Textarea}))},Ce=a(16),Ne=a.n(Ce),Ie=function(e){var t=[Ne.a.Button];return"left"===e.align?t.push(Ne.a.Left):"right"===e.align&&t.push(Ne.a.Right),l.a.createElement("button",Object.assign({},e,{className:t.join(" ")}),e.children)},Se=a(23),xe=a.n(Se),Te=function(e){var t=e.label;return l.a.createElement("div",{className:xe.a.Loading},l.a.createElement("div",{className:xe.a.Loader},"Loading..."),t&&l.a.createElement("h2",null,t))},Me=a(24),je=a.n(Me),De=function(e){var t=e.label;return l.a.createElement("div",{className:je.a.Success},l.a.createElement(re.i,{className:je.a.Icon}),t&&l.a.createElement("h2",null,t))},Oe=a(25),ke=a.n(Oe),Le=function(e){var t=e.label;return l.a.createElement("div",{className:ke.a.Error},l.a.createElement(re.j,{className:ke.a.Icon}),t&&l.a.createElement("h2",null,t))},we={loading:!1,success:!1,error:!1},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_CONTACT_START":return{loading:!0,success:!1,error:!1};case"SEND_CONTACT_SUCCESS":return{loading:!1,success:!0,error:!1};case"SEND_CONTACT_FAIL":return{loading:!1,success:!1,error:!0};default:return e}},Ae=a(50),Fe=a.n(Ae),Re=function(e,t){t({type:"SEND_CONTACT_START"}),setTimeout((function(){Fe.a.post("https://formspree.io/xoqegkpp",e).then((function(e){t({type:"SEND_CONTACT_SUCCESS"})})).catch((function(e){t({type:"SEND_CONTACT_FAIL"})}))}),2e3)},qe=function(e){var t=e.trim();return""===t||null===t||void 0===t},Be=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(""),c=Object(g.a)(r,2),s=c[0],i=c[1],_=Object(n.useState)(""),u=Object(g.a)(_,2),m=u[0],E=u[1],d=Object(n.useState)(""),f=Object(g.a)(d,2),p=f[0],v=f[1],y=Object(n.useState)(""),b=Object(g.a)(y,2),h=b[0],C=b[1],N=Object(n.useReducer)(Pe,we),I=Object(g.a)(N,2),S=I[0],x=I[1],T=function(e){return e.preventDefault(),qe(a)?C("Digite o nome"):qe(s)?C("Digite o e-mail"):qe(m)?C("Digite o assunto"):qe(p)?C("Digite a mensagem"):void Re({name:a,email:s,subject:m,message:p},x)};return l.a.createElement("section",{id:"contact",className:fe.a.Contact},l.a.createElement("div",{className:fe.a.container},l.a.createElement($,null,"Entre em ",l.a.createElement("b",null,"contato")),l.a.createElement(W,{container:!0},l.a.createElement(W,{col:7},l.a.createElement(Z,{style:{margin:"10px 0"}},S.loading?l.a.createElement(Te,{label:"Enviando..."}):S.success?l.a.createElement(De,{label:"Formul\xe1rio enviado com sucesso."}):S.error?l.a.createElement(Le,{label:"Erro ao enviar formul\xe1rio. \nTente novamente mais tarde."}):l.a.createElement("form",{method:"post",onSubmit:T},h&&l.a.createElement("div",{className:fe.a.Error},h),l.a.createElement(W,{container:!0},l.a.createElement(W,{col:6},l.a.createElement(ve,{type:"text",placeholder:"Nome",value:a,onChange:function(e){return o(e.target.value)},required:!0})),l.a.createElement(W,{col:6},l.a.createElement(ve,{type:"email",placeholder:"E-mail",value:s,onChange:function(e){return i(e.target.value)},required:!0})),l.a.createElement(W,{col:12,style:{flex:"100% 0 0"}},l.a.createElement(ve,{type:"text",placeholder:"Assunto",value:m,onChange:function(e){return E(e.target.value)},required:!0})),l.a.createElement(W,{col:12,style:{flex:"100% 0 0"}},l.a.createElement(he,{rows:10,placeholder:"Mensagem",value:p,onChange:function(e){return v(e.target.value)},required:!0})),l.a.createElement(W,{col:12},l.a.createElement(Ie,{type:"submit"},"Enviar")))))),l.a.createElement(W,{col:5},l.a.createElement(Z,{style:{margin:"10px 0"}},l.a.createElement("div",{className:fe.a.EmailInfos},l.a.createElement("i",{className:fe.a.Icon},l.a.createElement(re.b,null)),l.a.createElement("div",null,l.a.createElement("b",{style:{display:"block"}},"E-mail: "),"diogomedina97@hotmail.com"))),l.a.createElement(Z,{style:{margin:"10px 0"}},l.a.createElement("div",{className:fe.a.SocialNetworkInfos},l.a.createElement("a",{href:"https://www.linkedin.com/in/diogomedina97/",target:"_blank",rel:"noopener noreferrer",className:fe.a.Icon},l.a.createElement(re.f,null)),l.a.createElement("a",{href:"https://github.com/DiogoMedina97",target:"_blank",rel:"noopener noreferrer",className:fe.a.Icon},l.a.createElement(re.c,null))))))))},He=function(){return l.a.createElement("main",{className:w.a.Home},l.a.createElement(q,null),l.a.createElement(oe,null),l.a.createElement(Ee,null),l.a.createElement(Be,null))},Ge=function(){return l.a.createElement(O.a,null,l.a.createElement(k.c,null,l.a.createElement(k.a,{component:He})))};var Ve=function(){return l.a.createElement(v,null,l.a.createElement(D,null,l.a.createElement(Ge,null)))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Ve,null)),document.getElementById("root"))}],[[53,1,2]]]);
//# sourceMappingURL=main.08600086.chunk.js.map