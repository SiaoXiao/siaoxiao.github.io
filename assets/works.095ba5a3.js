import{_ as y,r as t,o as I,a as r,c as d,b as w,w as S,F as b,d as C,e as $,v as B,T,f as e,g as L,h as N,i as G,t as R,p as V,j as E}from"./index.1c8f50db.js";import{u as F}from"./index.32ae371e.js";const M={class:"slide"},W=["src"],j={key:0,class:"slide-ctrl"},q={__name:"Carousel",props:{timer:{type:Boolean,default:!1},timerDelay:{type:Number,default:1e3},nav:{type:Boolean,default:!0}},setup(n){const i=n,g=t(0),u=t("next"),o=t(!1),h=t(null),a=t([{id:"1",src:"https://fakeimg.pl/1024x600/ffedd5?text=1"},{id:"2",src:"https://fakeimg.pl/1024x600/?text=2"},{id:"3",src:"https://fakeimg.pl/1024x600/ffedd5?text=3"},{id:"4",src:"https://fakeimg.pl/1024x600/?text=4"},{id:"5",src:"https://fakeimg.pl/1024x600/ffedd5?text=5"},{id:"6",src:"https://fakeimg.pl/1024x600/?text=6"},{id:"7",src:"https://fakeimg.pl/1024x600/ffedd5?text=7"},{id:"8",src:"https://fakeimg.pl/1024x600/?text=8"}]),p=()=>{h.value=setInterval(()=>{o.value=!1,_(1)},i.timerDelay)},v=()=>{clearInterval(h.value)},_=(f=1)=>{if(!o.value){if(i.timer&&v(),o.value=!0,f>0){u.value="next";const s=a.value.shift();a.value.push(s),i.timer&&p(),o.value=!1;return}if(f<0){u.value="prev";const s=a.value.pop();a.value.unshift(s),i.timer&&p(),o.value=!1;return}}};return I(()=>{i.timer&&p()}),(f,s)=>(r(),d("div",M,[w(T,{tag:"div",class:"slide-main",name:u.value},{default:S(()=>[(r(!0),d(b,null,C(a.value,(c,m)=>$((r(),d("img",{key:c.id,src:c.src},null,8,W)),[[B,g.value===m]])),128))]),_:1},8,["name"]),n.nav?(r(),d("div",j,[e("div",{class:"slide-prev",onClick:s[0]||(s[0]=c=>_(-1))},"L"),e("div",{class:"slide-next",onClick:s[1]||(s[1]=c=>_(1))},"R")])):L("",!0)]))}},O=y(q,[["__scopeId","data-v-276c8678"]]);const D=n=>(V("data-v-2e9d32b9"),n=n(),E(),n),U={class:"main"},z={class:"container"},A=D(()=>e("h2",{class:"title"},"works",-1)),H={class:"content"},J={class:"container"},K=D(()=>e("h2",{class:"title"},"cases",-1)),P={class:"content"},Q={class:"image-container"},X={class:"image-list"},Y=["src"],Z={__name:"works",setup(n){const i=F(),g=t(4),u=t(1),o=t(0),h=t(0),a=t(null),p=t([]),v=t(!1),_=()=>{o.value+=3,h.value=o.value},f={root:document.querySelector(".image-container"),rootMargin:"-500px 0px 500px 0px",threshold:0,delay:500},s=([l])=>{l&&l.isIntersecting&&c()},c=async()=>{await G.get(`https://picsum.photos/v2/list?page=${u.value}&limit=${g.value}`).then(l=>{if(l.status===200)l.data.forEach(k=>{p.value.push(k)}),u.value+=1,_(),v.value=!0;else{m.unobserve(a.value),v.value=!1;return}}).catch(l=>{console.log(l)})},m=new IntersectionObserver(s,f);return I(async()=>{i.value="WhyGoGo\u7DB2\u7AD9\u8A2D\u8A08\u516C\u53F8 | \u5DE5\u4F5C\u4E00\u89BD",await c(),m.observe(a.value)}),N(()=>{m.disconnect()}),(l,k)=>(r(),d("div",U,[e("div",z,[A,e("div",H,[w(O,{timer:!0,timerDelay:5e3,nav:!1,class:"shadow"})])]),e("div",J,[K,e("div",P,[e("div",Q,[e("ul",X,[(r(!0),d(b,null,C(p.value,x=>(r(),d("li",{key:x.id,class:"image-item shadow"},[e("img",{class:"image",src:x.download_url},null,8,Y),e("span",null,[e("p",null,R(x.author),1)])]))),128))]),$(e("div",{ref_key:"loadingRef",ref:a,class:"animate-spin"},null,512),[[B,v.value]])])])])]))}},se=y(Z,[["__scopeId","data-v-2e9d32b9"]]);export{se as default};
