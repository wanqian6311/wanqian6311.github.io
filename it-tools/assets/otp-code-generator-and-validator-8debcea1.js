import{C as R,D as h,G as k,d as z,b as C,az as B,O as t,b1 as Y,bn as F,bk as J,bl as K,bm as Z,H as oe,I as Q,cs as ie,K as j,L as ne,o as L,f as U,g as _,e as se,s as H,W as ae,k as x,w as S,ct as M,l as D,t as W,i as d,m as ee,aN as te,cu as le,bA as ce,a3 as de,n as pe,v as ue,F as ge,x as fe,bF as he,bG as me,A as ve}from"./index-65600c6f.js";import{u as xe,_ as be}from"./useQRCode-0a997d8d.js";import{c as N}from"./index-f979f020.js";import{c as ye}from"./token-generator.service-bd199cb3.js";import{_ as T}from"./InputCopyable.vue_vue_type_script_setup_true_lang-a56522a8.js";import{c as _e}from"./computedRefreshable-eb9e1e13.js";import"./is-browser-fc34c9a6.js";import"./use-locale-0b05447d.js";import"./browser-e933942f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./___vite-browser-external_commonjs-proxy-7dddf895.js";const Ce=R([h("progress",{display:"inline-block"},[h("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),k("line",`
 width: 100%;
 display: block;
 `,[h("progress-content",`
 display: flex;
 align-items: center;
 `,[h("progress-graph",{flex:1})]),h("progress-custom-content",{marginLeft:"14px"}),h("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[k("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),k("circle, dashboard",{width:"120px"},[h("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),h("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),h("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),k("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[h("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),h("progress-content",{position:"relative"}),h("progress-graph",{position:"relative"},[h("progress-graph-circle",[R("svg",{verticalAlign:"bottom"}),h("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[k("empty",{opacity:0})]),h("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),h("progress-graph-line",[k("indicator-inside",[h("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[h("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),h("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),k("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[h("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),h("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),h("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[h("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[k("processing",[R("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),R("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),Se={success:t(F,null),error:t(J,null),warning:t(K,null),info:t(Z,null)},$e=z({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:r}){const l=C(()=>B(e.height)),s=C(()=>e.railBorderRadius!==void 0?B(e.railBorderRadius):e.height!==void 0?B(e.height,{c:.5}):""),o=C(()=>e.fillBorderRadius!==void 0?B(e.fillBorderRadius):e.railBorderRadius!==void 0?B(e.railBorderRadius):e.height!==void 0?B(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:i,railColor:m,railStyle:p,percentage:a,unit:u,indicatorTextColor:g,status:c,showIndicator:v,fillColor:n,processing:b,clsPrefix:f}=e;return t("div",{class:`${f}-progress-content`,role:"none"},t("div",{class:`${f}-progress-graph`,"aria-hidden":!0},t("div",{class:[`${f}-progress-graph-line`,{[`${f}-progress-graph-line--indicator-${i}`]:!0}]},t("div",{class:`${f}-progress-graph-line-rail`,style:[{backgroundColor:m,height:l.value,borderRadius:s.value},p]},t("div",{class:[`${f}-progress-graph-line-fill`,b&&`${f}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:n,height:l.value,lineHeight:l.value,borderRadius:o.value}},i==="inside"?t("div",{class:`${f}-progress-graph-line-indicator`,style:{color:g}},r.default?r.default():`${a}${u}`):null)))),v&&i==="outside"?t("div",null,r.default?t("div",{class:`${f}-progress-custom-content`,style:{color:g},role:"none"},r.default()):c==="default"?t("div",{role:"none",class:`${f}-progress-icon ${f}-progress-icon--as-text`,style:{color:g}},a,u):t("div",{class:`${f}-progress-icon`,"aria-hidden":!0},t(Y,{clsPrefix:f},{default:()=>Se[c]}))):null)}}}),we={success:t(F,null),error:t(J,null),warning:t(K,null),info:t(Z,null)},ke=z({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:r}){function l(s,o,i){const{gapDegree:m,viewBoxWidth:p,strokeWidth:a}=e,u=50,g=0,c=u,v=0,n=2*u,b=50+a/2,f=`M ${b},${b} m ${g},${c}
      a ${u},${u} 0 1 1 ${v},${-n}
      a ${u},${u} 0 1 1 ${-v},${n}`,$=Math.PI*2*u,w={stroke:i,strokeDasharray:`${s/100*($-m)}px ${p*8}px`,strokeDashoffset:`-${m/2}px`,transformOrigin:o?"center":void 0,transform:o?`rotate(${o}deg)`:void 0};return{pathString:f,pathStyle:w}}return()=>{const{fillColor:s,railColor:o,strokeWidth:i,offsetDegree:m,status:p,percentage:a,showIndicator:u,indicatorTextColor:g,unit:c,gapOffsetDegree:v,clsPrefix:n}=e,{pathString:b,pathStyle:f}=l(100,0,o),{pathString:$,pathStyle:w}=l(a,m,s),y=100+i;return t("div",{class:`${n}-progress-content`,role:"none"},t("div",{class:`${n}-progress-graph`,"aria-hidden":!0},t("div",{class:`${n}-progress-graph-circle`,style:{transform:v?`rotate(${v}deg)`:void 0}},t("svg",{viewBox:`0 0 ${y} ${y}`},t("g",null,t("path",{class:`${n}-progress-graph-circle-rail`,d:b,"stroke-width":i,"stroke-linecap":"round",fill:"none",style:f})),t("g",null,t("path",{class:[`${n}-progress-graph-circle-fill`,a===0&&`${n}-progress-graph-circle-fill--empty`],d:$,"stroke-width":i,"stroke-linecap":"round",fill:"none",style:w}))))),u?t("div",null,r.default?t("div",{class:`${n}-progress-custom-content`,role:"none"},r.default()):p!=="default"?t("div",{class:`${n}-progress-icon`,"aria-hidden":!0},t(Y,{clsPrefix:n},{default:()=>we[p]})):t("div",{class:`${n}-progress-text`,style:{color:g},role:"none"},t("span",{class:`${n}-progress-text__percentage`},a),t("span",{class:`${n}-progress-text__unit`},c))):null)}}});function X(e,r,l=100){return`m ${l/2} ${l/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const Pe=z({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:r}){const l=C(()=>e.percentage.map((o,i)=>`${Math.PI*o/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*i)-e.circleGap*i)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:s,strokeWidth:o,circleGap:i,showIndicator:m,fillColor:p,railColor:a,railStyle:u,percentage:g,clsPrefix:c}=e;return t("div",{class:`${c}-progress-content`,role:"none"},t("div",{class:`${c}-progress-graph`,"aria-hidden":!0},t("div",{class:`${c}-progress-graph-circle`},t("svg",{viewBox:`0 0 ${s} ${s}`},g.map((v,n)=>t("g",{key:n},t("path",{class:`${c}-progress-graph-circle-rail`,d:X(s/2-o/2*(1+2*n)-i*n,o,s),"stroke-width":o,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:a[n]},u[n]]}),t("path",{class:[`${c}-progress-graph-circle-fill`,v===0&&`${c}-progress-graph-circle-fill--empty`],d:X(s/2-o/2*(1+2*n)-i*n,o,s),"stroke-width":o,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:l.value[n],strokeDashoffset:0,stroke:p[n]}})))))),m&&r.default?t("div",null,t("div",{class:`${c}-progress-text`},r.default())):null)}}}),Be=Object.assign(Object.assign({},Q.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),ze=z({name:"Progress",props:Be,setup(e){const r=C(()=>e.indicatorPlacement||e.indicatorPosition),l=C(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:s,inlineThemeDisabled:o}=oe(e),i=Q("Progress","-progress",Ce,ie,e,s),m=C(()=>{const{status:a}=e,{common:{cubicBezierEaseInOut:u},self:{fontSize:g,fontSizeCircle:c,railColor:v,railHeight:n,iconSizeCircle:b,iconSizeLine:f,textColorCircle:$,textColorLineInner:w,textColorLineOuter:y,lineBgProcessing:P,fontWeightCircle:O,[j("iconColor",a)]:A,[j("fillColor",a)]:I}}=i.value;return{"--n-bezier":u,"--n-fill-color":I,"--n-font-size":g,"--n-font-size-circle":c,"--n-font-weight-circle":O,"--n-icon-color":A,"--n-icon-size-circle":b,"--n-icon-size-line":f,"--n-line-bg-processing":P,"--n-rail-color":v,"--n-rail-height":n,"--n-text-color-circle":$,"--n-text-color-line-inner":w,"--n-text-color-line-outer":y}}),p=o?ne("progress",C(()=>e.status[0]),m,e):void 0;return{mergedClsPrefix:s,mergedIndicatorPlacement:r,gapDeg:l,cssVars:o?void 0:m,themeClass:p?.themeClass,onRender:p?.onRender}},render(){const{type:e,cssVars:r,indicatorTextColor:l,showIndicator:s,status:o,railColor:i,railStyle:m,color:p,percentage:a,viewBoxWidth:u,strokeWidth:g,mergedIndicatorPlacement:c,unit:v,borderRadius:n,fillBorderRadius:b,height:f,processing:$,circleGap:w,mergedClsPrefix:y,gapDeg:P,gapOffsetDegree:O,themeClass:A,$slots:I,onRender:q}=this;return q?.(),t("div",{class:[A,`${y}-progress`,`${y}-progress--${e}`,`${y}-progress--${o}`],style:r,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":a,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?t(ke,{clsPrefix:y,status:o,showIndicator:s,indicatorTextColor:l,railColor:i,fillColor:p,railStyle:m,offsetDegree:this.offsetDegree,percentage:a,viewBoxWidth:u,strokeWidth:g,gapDegree:P===void 0?e==="dashboard"?75:0:P,gapOffsetDegree:O,unit:v},I):e==="line"?t($e,{clsPrefix:y,status:o,showIndicator:s,indicatorTextColor:l,railColor:i,fillColor:p,railStyle:m,percentage:a,processing:$,indicatorPlacement:c,unit:v,fillBorderRadius:b,railBorderRadius:n,height:f},I):e==="multiple-circle"?t(Pe,{clsPrefix:y,strokeWidth:g,railColor:i,fillColor:p,railStyle:m,viewBoxWidth:u,percentage:a,showIndicator:s,circleGap:w},I):null)}}),Ie={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Re=_("path",{fill:"currentColor",d:"M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z"},null,-1),Ne=[Re];function Te(e,r){return L(),U("svg",Ie,Ne)}const De={name:"mdi-refresh",render:Te};function We(e){return(e.match(/.{1,2}/g)??[]).map(r=>Number.parseInt(r,16))}function Oe(e,r){return N.HmacSHA1(N.enc.Hex.parse(e),N.enc.Hex.parse(re(r))).toString(N.enc.Hex)}function re(e){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";return(e.toUpperCase().replace(/=+$/,"").split("").map(o=>r.indexOf(o).toString(2).padStart(5,"0")).join("").match(/.{1,8}/g)??[]).map(o=>Number.parseInt(o,2).toString(16).padStart(2,"0")).join("")}function Ae({key:e,counter:r=0}){const l=Oe(r.toString(16).padStart(16,"0"),e),s=We(l),o=s[19]&15,i=(s[o]&127)<<24|(s[o+1]&255)<<16|(s[o+2]&255)<<8|s[o+3]&255;return String(i%1e6).padStart(6,"0")}function V({now:e,timeStep:r}){return Math.floor(e/1e3/r)}function G({key:e,now:r=Date.now(),timeStep:l=30}){const s=V({now:r,timeStep:l});return Ae({key:e,counter:s})}function qe({secret:e,app:r="IT-Tools",account:l="demo-user",algorithm:s="SHA1",digits:o=6,period:i=30}){const p=se({issuer:r,secret:e,algorithm:s,digits:o,period:i}).map((a,u)=>`${encodeURIComponent(u)}=${encodeURIComponent(a)}`).join("&");return`otpauth://totp/${encodeURIComponent(r)}:${encodeURIComponent(l)}?${p}`}function E(){return ye({length:16,alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"})}const He=_("div",{"mb-5px":"","w-full":"",flex:"","items-center":""},[_("div",{"flex-1":"","text-left":""}," Previous "),_("div",{"flex-1":"","text-center":""}," Current OTP "),_("div",{"flex-1":"","text-right":""}," Next ")],-1),Me={flex:"","items-center":""},Ge=z({__name:"token-display",props:{tokens:{}},setup(e){const r=e,{copy:l,isJustCopied:s}=H({createToast:!1}),{copy:o,isJustCopied:i}=H({createToast:!1}),{copy:m,isJustCopied:p}=H({createToast:!1}),{tokens:a}=ae(r);return(u,g)=>{const c=ee,v=te;return L(),U("div",null,[He,_("div",Me,[x(v,{tooltip:d(s)?"Copied !":"Copy previous OTP",position:"bottom","flex-1":""},{default:S(()=>[x(c,{"data-test-id":"previous-otp","w-full":"","important:h-12":"","important:rounded-r-none":"","important:font-mono":"",onClick:g[0]||(g[0]=M(n=>d(l)(d(a).previous),["prevent"]))},{default:S(()=>[D(W(d(a).previous),1)]),_:1})]),_:1},8,["tooltip"]),x(v,{tooltip:d(i)?"Copied !":"Copy current OTP",position:"bottom","flex-1":"","flex-basis-5xl":""},{default:S(()=>[x(c,{"data-test-id":"current-otp","w-full":"","important:border-x":"1px solid gray op-40","important:h-12":"","important:rounded-0":"","important:text-22px":"",onClick:g[1]||(g[1]=M(n=>d(o)(d(a).current),["prevent"]))},{default:S(()=>[D(W(d(a).current),1)]),_:1})]),_:1},8,["tooltip"]),x(v,{tooltip:d(p)?"Copied !":"Copy next OTP",position:"bottom","flex-1":""},{default:S(()=>[x(c,{"data-test-id":"next-otp","w-full":"","important:h-12":"","important:rounded-l-none":"",onClick:g[2]||(g[2]=M(n=>d(m)(d(a).next),["prevent"]))},{default:S(()=>[D(W(d(a).next),1)]),_:1})]),_:1},8,["tooltip"])])])}}}),Ve=e=>(he("data-v-388f1b9b"),e=e(),me(),e),Le={style:{"max-width":"350px"}},Ue={style:{"text-align":"center"}},je={"mt-4":"",flex:"","flex-col":"","items-center":"","justify-center":"","gap-3":""},Xe={style:{"max-width":"350px"}},Ee=Ve(()=>_("p",null,"Iteration",-1)),Ye=z({__name:"otp-code-generator-and-validator",setup(e){const r=le(),l=C(()=>r.value/1e3%30),s=ce(),o=de(),i=pe(E());function m(){i.value=E()}const[p]=_e(()=>({previous:G({key:i.value,now:r.value-3e4}),current:G({key:i.value,now:r.value}),next:G({key:i.value,now:r.value+3e4})}),{throttle:500}),a=C(()=>qe({secret:i.value})),{qrcode:u}=xe({text:a,color:{background:C(()=>o.isDarkTheme?"#ffffff":"#00000000"),foreground:"#000000"},options:{width:210}}),g=[{message:"Secret should be a base32 string",validator:c=>c.toUpperCase().match(/^[A-Z234567]+$/)},{message:"Please set a secret",validator:c=>c!==""}];return(c,v)=>{const n=De,b=ee,f=te,$=fe,w=ze,y=be;return L(),U(ge,null,[_("div",Le,[x($,{value:d(i),"onUpdate:value":v[0]||(v[0]=P=>ue(i)?i.value=P:null),label:"Secret",placeholder:"Paste your TOTP secret...","mb-5":"","validation-rules":g},{suffix:S(()=>[x(f,{tooltip:"Generate a new random secret"},{default:S(()=>[x(b,{circle:"",variant:"text",size:"small",onClick:m},{default:S(()=>[x(n)]),_:1})]),_:1})]),_:1},8,["value"]),_("div",null,[x(Ge,{tokens:d(p)},null,8,["tokens"]),x(w,{percentage:100*d(l)/30,color:d(s).primaryColor,"show-indicator":!1},null,8,["percentage","color"]),_("div",Ue," Next in "+W(String(Math.floor(30-d(l))).padStart(2,"0"))+"s ",1)]),_("div",je,[x(y,{src:d(u)},null,8,["src"]),x(b,{href:d(a),target:"_blank"},{default:S(()=>[D(" Open Key URI in new tab ")]),_:1},8,["href"])])]),_("div",Xe,[x(T,{label:"Secret in hexadecimal",value:d(re)(d(i)),readonly:"",placeholder:"Secret in hex will be displayed here","mb-5":""},null,8,["value"]),x(T,{label:"Epoch",value:Math.floor(d(r)/1e3).toString(),readonly:"","mb-5":"",placeholder:"Epoch in sec will be displayed here"},null,8,["value"]),Ee,x(T,{value:String(d(V)({now:d(r),timeStep:30})),readonly:"",label:"Count:","label-position":"left","label-width":"90px","label-align":"right",placeholder:"Iteration count will be displayed here"},null,8,["value"]),x(T,{value:d(V)({now:d(r),timeStep:30}).toString(16).padStart(16,"0"),readonly:"",placeholder:"Iteration count in hex will be displayed here","label-position":"left","label-width":"90px","label-align":"right",label:"Padded hex:"},null,8,["value"])])],64)}}});const st=ve(Ye,[["__scopeId","data-v-388f1b9b"]]);export{st as default};
