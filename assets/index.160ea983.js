import{_ as x,u as V,S as w}from"./index.66a80f20.js";import{d as v,c as u,r as p,o as n,a as d,w as _,b as $,e as r,u as o,f as g,g as U,h as y,_ as C,i as S,F as B,j as P,k as L,l as F,m as N,n as A,p as D,q as I}from"./index.bd2a5219.js";const j={class:"user-shortstory__photo-box"},G={class:"user-shortstory__info-box"},M=y("Name"),q=y("Height"),z=y("Mass"),E=y("Gender"),H=y("Films"),O={name:"BlockUserShortStory"},T=v({...O,props:{info:{type:Object,default:()=>({})},tag:{type:String,default:""}},setup(m){const e=m,s=u(()=>{var t;return((t=e.info)==null?void 0:t.name)||""}),a=u(()=>{var t;return((t=e.info)==null?void 0:t.height)||""}),c=u(()=>{var t;return((t=e.info)==null?void 0:t.mass)||""}),l=u(()=>{var t;return((t=e.info)==null?void 0:t.gender)||""}),i=u(()=>{var t,h;return((h=(t=e.info)==null?void 0:t.films)==null?void 0:h.length)||0});u(()=>{var t,h;return(t=e.info)!=null&&t.img?(h=e.info)==null?void 0:h.img:"@/assets/img/placeholder.webp"});const f=u(()=>e.tag||"article"),k=u(()=>{var b;const t=(b=e==null?void 0:e.info)==null?void 0:b.url.split("people/")[1],h=s==null?void 0:s.value.split(" ").join("-").toLowerCase();return`${parseFloat(t)}-${h}`});return(t,h)=>{const b=p("el-avatar");return n(),d(U(o(f)),{class:"user-shortstory",to:{name:"PageUser",params:{id:o(k),lol:66,info:JSON.stringify(e.info)},meta:{lol:77}}},{default:_(()=>[$("div",j,[r(b,{size:100,src:"https://oberst472.github.io/api-vue-v1/placeholder.webp"},null,8,["src"])]),$("div",G,[o(s)?(n(),d(x,{key:0,class:"user-shortstory__item",val:o(s)},{default:_(()=>[M]),_:1},8,["val"])):g("",!0),o(a)?(n(),d(x,{key:1,class:"user-shortstory__item",val:o(a)},{default:_(()=>[q]),_:1},8,["val"])):g("",!0),o(c)?(n(),d(x,{key:2,class:"user-shortstory__item",val:o(c)},{default:_(()=>[z]),_:1},8,["val"])):g("",!0),o(l)?(n(),d(x,{key:3,class:"user-shortstory__item",val:o(l)},{default:_(()=>[E]),_:1},8,["val"])):g("",!0),o(i)?(n(),d(x,{key:4,class:"user-shortstory__item",val:o(i)},{default:_(()=>[H]),_:1},8,["val"])):g("",!0)])]),_:1},8,["to"])}}});const J=C(T,[["__scopeId","data-v-35aee4c7"]]),K={name:"SectionUsers"},Q=v({...K,setup(m){const e=V(),s=u(()=>e.searchVal?e.getFoundUsers:e.getUsers);return(a,c)=>{const l=p("el-col"),i=p("el-row");return n(),S("section",null,[r(i,null,{default:_(()=>[(n(!0),S(B,null,P(o(s),f=>(n(),d(l,{class:"page-main__col",key:f.name},{default:_(()=>[r(J,{info:f,tag:"router-link"},null,8,["info"])]),_:2},1024))),128))]),_:1})])}}}),R={class:"block-search"},W={class:"block-search__title"},X={name:"BlockInput"},Y=v({...X,props:{defaultVal:{type:String,default:""}},emits:["search"],setup(m,{emit:e}){const s=m,a=L("");return F(a,()=>e("search",a.value)),N(()=>a.value=s.defaultVal),(c,l)=>{const i=p("el-input");return n(),S("div",R,[$("span",W,[A(c.$slots,"default",{},void 0,!0)]),r(i,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=f=>a.value=f),placeholder:"Enter the name",clearable:""},null,8,["modelValue"])])}}});const Z=C(Y,[["__scopeId","data-v-cb02bdc7"]]),ee={class:"section-aside"},te=y("Search"),se={name:"SectionAside"},oe=v({...se,setup(m){const e=V(),s=function(a){e.searchVal=a};return(a,c)=>(n(),S("div",ee,[r(Z,{onSearch:s,defaultVal:o(e).searchVal},{default:_(()=>[te]),_:1},8,["defaultVal"])]))}});const ae=C(oe,[["__scopeId","data-v-606de843"]]),ne={class:"block-pagination"},_e={name:"BlockPagination"},ce=v({..._e,props:{count:{name:"",required:!0}},emits:["changePage"],setup(m,{emit:e}){const s=m;return(a,c)=>{const l=p("el-pagination");return n(),S("div",ne,[r(l,{background:"",layout:"prev, pager, next",total:s.count,"page-size":10,onCurrentChange:c[0]||(c[0]=i=>e("changePage",i))},null,8,["total"])])}}});const le={name:"PageHome"},ue=v({...le,setup(m){const e=V(),s=D(),a=async function(c){if(e.setActivePage(c),!e.users[String(e.activePage)]){s.stChangeLoading(!0);try{await e.stGetAllUsers()}catch(i){console.log(i)}finally{s.stChangeLoading(!1)}}};return I(async()=>{if(!e.users[String(e.activePage)]){s.stChangeLoading(!0);try{await e.stGetAllUsers()}catch(l){console.log(l)}finally{s.stChangeLoading(!1)}}}),(c,l)=>{const i=p("el-aside"),f=p("el-main"),k=p("el-footer"),t=p("el-container");return n(),d(t,{class:"page-home"},{default:_(()=>[r(i,{width:"200px",class:"page-home__aside"},{default:_(()=>[r(ae)]),_:1}),r(t,{class:"page-home__body"},{default:_(()=>[r(f,{class:"page-home__main"},{default:_(()=>[r(Q)]),_:1}),o(e).searchVal?g("",!0):(n(),d(ce,{key:0,count:o(e).totalUsersCount,onChangePage:a},null,8,["count"])),r(k,{class:"page-home__footer"},{default:_(()=>[r(w)]),_:1})]),_:1})]),_:1})}}});export{ue as default};
