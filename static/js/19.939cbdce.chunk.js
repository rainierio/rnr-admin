(this["webpackJsonprainierio.io"]=this["webpackJsonprainierio.io"]||[]).push([[19],{185:function(e,t,a){"use strict";var n=a(14),r=a(5),c=a.n(r),l=a(2),i=a.n(l),o=(a(24),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(e){var t,a=e.tag,r=e.className,l=e.type,u=Object(n.a)(e,["tag","className","type"]),s=c()({[l]:!!l},r);return t=a||(!a&&o[l]?o[l]:"p"),i.a.createElement(t,Object.assign({},u,{className:s}))};u.defaultProps={type:"p"},t.a=u},188:function(e,t,a){"use strict";var n=a(14),r=a(2),c=a.n(r),l=(a(24),a(30)),i=a(288),o=a(289),u=a(185),s=l.a.create("page"),m=function(e){var t=e.title,a=e.breadcrumbs,r=e.tag,l=e.className,m=e.children,f=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),d=s.b("px-3",l);return c.a.createElement(r,Object.assign({className:d},f),c.a.createElement("div",{className:s.e("header")},t&&"string"===typeof t?c.a.createElement(u.a,{type:"h1",className:s.e("title")},t):t,a&&c.a.createElement(i.a,{className:s.e("breadcrumb")},c.a.createElement(o.a,null,"Home"),a.length&&a.map((function(e,t){var a=e.name,n=e.active;return c.a.createElement(o.a,{key:t,active:n},a)})))),m)};m.defaultProps={tag:"div",title:""},t.a=m},2415:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(200),c=a(2),l=a.n(c),i=a(2398),o=a(27),u=a(188),s=a(37),m=a(287),f={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},d={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:100,padding:4,boxSizing:"border-box"},p={display:"flex",minWidth:0,overflow:"hidden"},b={display:"block",width:"auto",height:"100%"},E=function(e){var t=Object(c.useState)([]),a=Object(r.a)(t,2),n=a[0],i=a[1],o=Object(m.a)({accept:"image/jpeg, image/png",onDrop:function(t){i(t.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}))),e.setImages(t)}}),u=o.getRootProps,E=o.getInputProps,g=function(e){return function(){var t=Object(s.a)(n);t.splice(t.indexOf(e),1),i(t)}},h=n.map((function(e){return l.a.createElement("div",{style:d,key:e.name},l.a.createElement("div",{style:p},l.a.createElement("img",{src:e.preview,style:b,alt:""})),l.a.createElement("button",{onClick:g(e)},"X"))}));return Object(c.useEffect)((function(){return function(){n.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[n]),l.a.createElement("div",null,l.a.createElement("section",{className:"container"},l.a.createElement("div",u({className:"dropzone"}),l.a.createElement("input",E()),l.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")),l.a.createElement("aside",{style:f},h)))},g=a(9),h=a(349),y=a(151),O=a(142),j=a(129),v=a(218),N=a(130),k=a(134),x=a(139),R=a(135),S=a(125),q=a(383),w=a(126),I=a(127),U=a(128),P=a(2409),D=a(150);t.default=function(e){var t=Object(o.d)((function(e){return e.portfolios.singlePortfolio})),a=Object(o.d)((function(e){return e.portfolios.errorMsg})),s=Object(o.d)((function(e){return e.portfolios.successMsg})),m=Object(i.a)(),f=m.register,d=m.handleSubmit,p=m.errors,b=m.setValue,L=Object(o.c)(),V=Object(c.useState)(e.match.params.id),z=Object(r.a)(V,1)[0],C=Object(c.useState)(""),T=Object(r.a)(C,2),B=T[0],F=T[1],J=Object(c.useState)(""),M=Object(r.a)(J,2),W=M[0],H=M[1],X=Object(c.useState)(""),A=Object(r.a)(X,2),G=A[0],K=A[1],Q=Object(c.useState)(""),Y=Object(r.a)(Q,2),Z=Y[0],$=Y[1],_=Object(c.useState)(""),ee=Object(r.a)(_,2),te=ee[0],ae=ee[1],ne=Object(c.useState)(""),re=Object(r.a)(ne,2),ce=re[0],le=re[1],ie=Object(c.useState)([]),oe=Object(r.a)(ie,2),ue=oe[0],se=oe[1],me=Object(c.useState)([]),fe=Object(r.a)(me,2),de=fe[0],pe=fe[1],be=Object(c.useState)(!1),Ee=Object(r.a)(be,2),ge=Ee[0],he=Ee[1],ye=Object(c.useCallback)((function(){L(Object(h.e)(z))}));Object(c.useEffect)((function(){return e.match.params.id&&ye(),function(){L(Object(h.g)())}}),[]),Object(c.useEffect)((function(){t.hasOwnProperty("title")&&(F(t.title),H(t.status),K(t.description),$(t.category),ae(t.company),le(t.url),pe(t.image))}),[t]);var Oe=de&&de.map((function(e){return l.a.createElement(y.a,{xs:"auto",style:{paddingRight:0,paddingLeft:0}},l.a.createElement(O.a,{src:e,style:{width:"auto",height:90,marginLeft:5,marginTop:5}}),l.a.createElement("div",null,l.a.createElement(j.a,{onClick:function(){return L(Object(h.f)(e))}},l.a.createElement(g.f,null))))}));return Object(c.useEffect)((function(){0!==Object.keys(a).length&&he(!0),0!==Object.keys(s).length&&(L(Object(h.g)()),e.history.push("/portfolio"))}),[a,s]),Object(c.useEffect)((function(){b("ImageUpload",ue)}),[ue,b]),Object(c.useEffect)((function(){f("ImageUpload")}),[f]),l.a.createElement(v.a,{in:!0},l.a.createElement(u.a,{title:"Portfolio",breadcrumbs:[{name:"portfolio",active:!0}]},l.a.createElement(N.a,null,l.a.createElement(y.a,{xl:{size:8,offset:1},lg:{size:8,offset:1},md:12},l.a.createElement(k.a,{className:"mb-3"},l.a.createElement(x.a,null,"Detail Portfolio"),l.a.createElement(R.a,null,l.a.createElement(S.a,{onSubmit:d((function(t){var a=Object(n.a)(Object(n.a)({},t),{},{uploadedImages:de});"/addportfolio"===e.match.url?L(Object(h.a)(t)):L(Object(h.c)(z,a))}))},l.a.createElement(q.a,{focus:!0,color:"danger",isOpen:ge,toggle:function(){return he(!1)}}," ",a," "),l.a.createElement(w.a,null,l.a.createElement(I.a,{for:"title"},"Title"),l.a.createElement(U.a,{Name:"title",defaultValue:B,invalid:p.title,innerRef:f({required:!0})}),l.a.createElement(P.a,null,'"Title is required"')),l.a.createElement(w.a,null,l.a.createElement(I.a,{for:"status"},"status"),l.a.createElement(U.a,{Name:"status",defaultValue:W,invalid:p.status,innerRef:f({required:!0})}),l.a.createElement(P.a,null,'"Status is required"')),l.a.createElement(w.a,null,l.a.createElement(I.a,{for:"description"},"description"),l.a.createElement(U.a,{type:"textarea",Name:"description",defaultValue:G,invalid:p.description,innerRef:f({required:!0})}),l.a.createElement(P.a,null,'"Description is required"')),l.a.createElement(w.a,null,l.a.createElement(I.a,{for:"category"},"category"),l.a.createElement(U.a,{Name:"category",defaultValue:Z,invalid:p.category,innerRef:f({required:!0})}),l.a.createElement(P.a,null,'"Category is required"')),l.a.createElement(w.a,null,l.a.createElement(I.a,{for:"company"},"company"),l.a.createElement(U.a,{Name:"company",defaultValue:te,invalid:p.company,innerRef:f({required:!0})}),l.a.createElement(P.a,null,'"Company is required"')),l.a.createElement(w.a,null,l.a.createElement(I.a,{for:"url"},"url"),l.a.createElement(U.a,{Name:"url",defaultValue:ce,invalid:p.url,innerRef:f({required:!0})}),l.a.createElement(P.a,null,'"URL is required"')),l.a.createElement(w.a,null,l.a.createElement(k.a,{className:"flex-row"},l.a.createElement(R.a,null,l.a.createElement(D.a,null,Oe)))),l.a.createElement(w.a,null,l.a.createElement(k.a,null,l.a.createElement(R.a,null,l.a.createElement(E,{name:"images",loadImage:ue,setImages:se,ref:f({required:!1})})))),l.a.createElement(w.a,{className:"mx-auto"},l.a.createElement(y.a,null,l.a.createElement(j.a,{onClick:function(){e.history.push("/portfolio")},outline:!0,color:"danger",size:"sm",style:{float:"left",marginRight:"10px"}},"Back")),l.a.createElement(y.a,null,l.a.createElement(j.a,{type:"submit",outline:!0,color:"/addportfolio"!==e.match.url?"success":"primary",size:"sm",style:{float:"left"}},"Save"))))))))))}},349:function(e,t,a){"use strict";a.d(t,"g",(function(){return l})),a.d(t,"d",(function(){return i})),a.d(t,"e",(function(){return o})),a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return m})),a.d(t,"f",(function(){return f}));var n=a(34),r=a.n(n),c=a(26),l=function(){return function(e){e({type:c.h})}},i=function(){return function(e){e(d(!0)),r.a.get("/api/portfolio/").then((function(t){return e({type:c.d,payload:t.data})}))}},o=function(e){return function(t){t(d(!0)),r.a.get("/api/portfolio/detail/".concat(e)).then((function(e){return t({type:c.e,payload:e.data})}))}},u=function(e){return function(t){t(d(!0));var a=new FormData;Object.keys(e).forEach((function(t){"ImageUpload"===t&&void 0!==e[t]?e.ImageUpload.map((function(e){return a.append("image",e)})):a.append(t,e[t])})),r.a.post("/api/portfolio",a).then((function(e){return t({type:c.a,payload:e.data})}))}},s=function(e,t){return function(a){a(d(!0));var n=new FormData;Object.keys(t).forEach((function(e){"ImageUpload"===e&&void 0!==t[e]?t.ImageUpload.map((function(e){return n.append("image",e)})):n.append(e,t[e])})),r.a.put("/api/portfolio/".concat(e),n).then((function(e){return a({type:c.c,payload:e.data})}))}},m=function(e){return function(t){t(d(!0)),r.a.delete("/api/portfolio/".concat(e)).then((function(a){a.data.err?t(d(!1)):t({type:c.b,payload:a.data,id:e})}))}},f=function(e){return function(t){t({type:c.g,payload:e})}},d=function(e){return{type:c.f,payload:e}}}}]);
//# sourceMappingURL=19.939cbdce.chunk.js.map