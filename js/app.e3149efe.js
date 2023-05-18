(function(){"use strict";var e={770:function(e,t,r){var n=r(963),o=r(252);function a(e,t,r,n,a,i){const l=(0,o.up)("NavBar"),c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l),(0,o.Wm)(c)],64)}const i=e=>((0,o.dD)("data-v-5e55458b"),e=e(),(0,o.Cn)(),e),l={class:"navbar navbar-expand-lg"},c={class:"container-fluid"},s=i((()=>(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1))),u={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},d={class:"navbar-nav ms-auto"};function p(e,t,r,n,a,i){const p=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",l,[(0,o._)("div",c,[(0,o.Wm)(p,{class:"navbar-brand",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("clp.")])),_:1}),s,(0,o._)("div",u,[(0,o._)("div",d,[(0,o.Wm)(p,{class:"nav-link active","aria-current":"page",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1}),(0,o.Wm)(p,{class:"nav-link",to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1}),(0,o.Wm)(p,{class:"nav-link",to:"/portfolio"},{default:(0,o.w5)((()=>[(0,o.Uk)("Portfolio")])),_:1}),(0,o.Wm)(p,{class:"nav-link",to:"/resume"},{default:(0,o.w5)((()=>[(0,o.Uk)("Resume")])),_:1})])])])])}var m={name:"NavBar"},f=r(744);const v=(0,f.Z)(m,[["render",p],["__scopeId","data-v-5e55458b"]]);var g=v,b={name:"App",components:{NavBar:g}};const h=(0,f.Z)(b,[["render",a]]);var _=h,w=r(201);const y=e=>((0,o.dD)("data-v-2ef4e972"),e=e(),(0,o.Cn)(),e),k={class:"home d-flex justify-content-center align-items-center"},x={class:"card card-center card-transparent text-center"},D={class:"card-body"},P=y((()=>(0,o._)("h5",{class:"card-title"},"Caryl Lou Paayas",-1))),C=y((()=>(0,o._)("p",{class:"card-text"},"[ka•reel loo pa•ah•yas]",-1)));function j(e,t,r,n,a,i){const l=(0,o.up)("font-awesome-icon"),c=(0,o.up)("Portfolio");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",k,[(0,o._)("div",x,[(0,o._)("div",D,[P,C,(0,o._)("div",{class:"bounce-arrow",onClick:t[0]||(t[0]=(...e)=>i.scrollToPortfolio&&i.scrollToPortfolio(...e))},[(0,o.Wm)(l,{icon:"chevron-down",size:"lg"})])])])]),(0,o.Wm)(c)],64)}var L=r(577);const U={class:"portfolio-spread"},I={class:"d-flex flex-wrap justify-content-evenly"};function T(e,t,r,n,a,i){const l=(0,o.up)("ProjectCard");return(0,o.wg)(),(0,o.iD)("div",U,[(0,o._)("div",I,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.cards,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:e.id,class:(0,L.C_)(t%2===0?"slide-right":"slide-left")},[(0,o.Wm)(l,{image:e.image,number:e.number,title:e.title,titleURL:e.titleURL},null,8,["image","number","title","titleURL"])],2)))),128))])])}const q=e=>((0,o.dD)("data-v-64d66d79"),e=e(),(0,o.Cn)(),e),W={class:"card"},O={class:"card-header"},R={class:"card-number"},Z=q((()=>(0,o._)("div",{class:"card-divider"},null,-1))),A={class:"card-title"},H=["srcset"],N=["srcset"],S=["src","alt"];function J(e,t,r,n,a,i){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",W,[(0,o.Wm)(l,{to:"/portfolio/"+r.titleURL},{default:(0,o.w5)((()=>[(0,o._)("div",O,[(0,o._)("h1",R,(0,L.zw)(r.number),1),Z,(0,o._)("h5",A,(0,L.zw)(r.title),1)]),(0,o._)("picture",null,[(0,o._)("source",{srcset:r.image.desktop,media:"(min-width: 768px)"},null,8,H),(0,o._)("source",{srcset:r.image.mobile},null,8,N),(0,o._)("img",{src:r.image.mobile,alt:r.title,class:"card-background"},null,8,S)])])),_:1},8,["to"])])}var B={name:"ProjectCard",props:{image:{type:Object,required:!0},number:{type:String,required:!0},title:{type:String,required:!0},titleURL:{type:String,required:!0}}};const M=(0,f.Z)(B,[["render",J],["__scopeId","data-v-64d66d79"]]);var z=M,F={name:"PortfolioSpread",components:{ProjectCard:z},data(){return{cards:[{id:1,image:{mobile:r(302),desktop:r(335)},number:"01",title:"Digital Journal",titleURL:"digital-journal"},{id:2,image:{mobile:r(349),desktop:r(524)},number:"02",title:"Colliers",titleURL:"colliers"},{id:3,image:{mobile:r(389),desktop:r(157)},number:"03",title:"Trek for Trees",titleURL:"trek-for-trees"},{id:4,image:{mobile:r(981),desktop:r(220)},number:"04",title:"Life Aquatic",titleURL:"life-aquatic"}]}}};const Y=(0,f.Z)(F,[["render",T],["__scopeId","data-v-51e98c43"]]);var E=Y,V={name:"HomePage",emits:["vnode-unmounted"],components:{Portfolio:E},methods:{scrollToPortfolio(){const e=document.querySelector(".navbar").offsetHeight,t=document.querySelector(".home").offsetHeight;window.scrollTo({top:t+e,behavior:"smooth"})}}};const G=(0,f.Z)(V,[["render",j],["__scopeId","data-v-2ef4e972"]]);var K=G;const X={class:"image-container"},Q={class:"card"},$=["src"],ee=(0,o.uE)('<div class="card-body" data-v-3cf9c608><h5 class="card-title" data-v-3cf9c608>hey, hi, hello!</h5><p class="card-text" data-v-3cf9c608> My name is Caryl Lou and I am a graphic designer. I love all things design, but have a strong interest in editorial and publication design. Currently, I am learning about UX/UI design. I am always eager for opportunities to learn more about design and to become a better designer. </p><p class="card-text" data-v-3cf9c608> When I am not designing, I like to watch movies, learn more about film photography, read, try a new recipe, play video games or take a road trip somewhere. </p><p class="card-text" data-v-3cf9c608> Based in Las Vegas, NV.</p></div>',1);function te(e,t,r,n,a,i){return(0,o.wg)(),(0,o.iD)("div",X,[(0,o._)("div",Q,[(0,o._)("img",{src:i.currentImage,class:"card-img-top img-fluid",alt:"Caryllou Candid"},null,8,$),ee])])}var re={name:"AboutPage",computed:{currentImage(){return window.innerWidth>=856?this.images.desktop:this.images.mobile}},data(){return{images:{mobile:r(874),desktop:r(264)}}}};const ne=(0,f.Z)(re,[["render",te],["__scopeId","data-v-3cf9c608"]]);var oe=ne;function ae(e,t,r,n,a,i){return(0,o.wg)(),(0,o.iD)("div",null,"Resume")}var ie={name:"ResumePage"};const le=(0,f.Z)(ie,[["render",ae]]);var ce=le;function se(e,t,r,n,a,i){const l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(l)])}var ue={name:"PortfolioLayout"};const de=(0,f.Z)(ue,[["render",se]]);var pe=de;const me={class:"colliers"},fe=(0,o._)("h2",null,"Colliers",-1),ve=[fe];function ge(e,t,r,n,a,i){return(0,o.wg)(),(0,o.iD)("div",me,ve)}var be={name:"colliers-project"};const he=(0,f.Z)(be,[["render",ge]]);var _e=he;const we=(0,o._)("h2",null,"Digital Journal",-1),ye=[we];function ke(e,t,r,n,a,i){return(0,o.wg)(),(0,o.iD)("div",null,ye)}var xe={name:"DigitalJournalProject"};const De=(0,f.Z)(xe,[["render",ke]]);var Pe=De;const Ce=(0,o._)("h2",null,"Trek For Trees",-1),je=[Ce];function Le(e,t,r,n,a,i){return(0,o.wg)(),(0,o.iD)("div",null,je)}var Ue={name:"TrekForTreesProject"};const Ie=(0,f.Z)(Ue,[["render",Le]]);var Te=Ie;const qe=(0,o._)("h2",null,"Life Aquatic",-1),We=[qe];function Oe(e,t,r,n,a,i){return(0,o.wg)(),(0,o.iD)("div",null,We)}var Re={name:"LifeAquaticProject"};const Ze=(0,f.Z)(Re,[["render",Oe]]);var Ae=Ze;const He=[{path:"/",redirect:{name:"Home"}},{path:"/caryllou-portfolio-v2/",name:"Home",component:K},{path:"/about",component:oe},{path:"/resume",component:ce},{path:"/portfolio",component:pe,children:[{path:"",component:E},{path:"colliers",component:_e},{path:"digital-journal",component:Pe},{path:"trek-for-trees",component:Te},{path:"life-aquatic",component:Ae}]}],Ne=(0,w.p7)({history:(0,w.PO)(),base:"/caryllou-portfolio-v2/",routes:He});var Se=Ne,Je=r(636),Be=r(417),Me=r(810);Je.vI.add(Be.ptq);const ze=(0,n.ri)(_);ze.component("font-awesome-icon",Me.GN),ze.use(Se),ze.mount("#app")},874:function(e,t,r){e.exports=r.p+"img/about.4325268c.png"},264:function(e,t,r){e.exports=r.p+"img/about_2x.11c6aebc.png"},349:function(e,t,r){e.exports=r.p+"img/Colliers.e381f30d.png"},524:function(e,t,r){e.exports=r.p+"img/Colliers_2x.d0bff8ab.png"},302:function(e,t,r){e.exports=r.p+"img/DigitalJournal.fcdfc0a9.png"},335:function(e,t,r){e.exports=r.p+"img/DigitalJournal_2x.ed0db425.png"},981:function(e,t,r){e.exports=r.p+"img/LifeAquatic.4b5303f5.png"},220:function(e,t,r){e.exports=r.p+"img/LifeAquatic_2x.fc9a0ce0.png"},389:function(e,t,r){e.exports=r.p+"img/Trek.115f9190.png"},157:function(e,t,r){e.exports=r.p+"img/Trek_2x.b2c12365.png"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,a){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],a=e[u][2];for(var l=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/caryllou-portfolio-v2/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,i=n[0],l=n[1],c=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(c)var u=c(r)}for(t&&t(n);s<i.length;s++)a=i[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self["webpackChunkcaryllou_portfolio_v2"]=self["webpackChunkcaryllou_portfolio_v2"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(770)}));n=r.O(n)})();
//# sourceMappingURL=app.e3149efe.js.map