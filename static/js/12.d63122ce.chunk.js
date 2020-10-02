(this["webpackJsonprnr-admin"]=this["webpackJsonprnr-admin"]||[]).push([[12],{155:function(e,a){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},185:function(e,a,t){"use strict";var n=t(14),r=t(5),c=t.n(r),i=t(2),l=t.n(i),o=(t(24),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(e){var a,t=e.tag,r=e.className,i=e.type,u=Object(n.a)(e,["tag","className","type"]),s=c()({[i]:!!i},r);return a=t||(!t&&o[i]?o[i]:"p"),l.a.createElement(a,Object.assign({},u,{className:s}))};u.defaultProps={type:"p"},a.a=u},188:function(e,a,t){"use strict";var n=t(14),r=t(2),c=t.n(r),i=(t(24),t(30)),l=t(288),o=t(289),u=t(185),s=i.a.create("page"),d=function(e){var a=e.title,t=e.breadcrumbs,r=e.tag,i=e.className,d=e.children,p=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),m=s.b("px-3",i);return c.a.createElement(r,Object.assign({className:m},p),c.a.createElement("div",{className:s.e("header")},a&&"string"===typeof a?c.a.createElement(u.a,{type:"h1",className:s.e("title")},a):a,t&&c.a.createElement(l.a,{className:s.e("breadcrumb")},c.a.createElement(o.a,null,"Home"),t.length&&t.map((function(e,a){var t=e.name,n=e.active;return c.a.createElement(o.a,{key:a,active:n},t)})))),d)};d.defaultProps={tag:"div",title:""},a.a=d},219:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"c",(function(){return l})),t.d(a,"f",(function(){return o})),t.d(a,"e",(function(){return u})),t.d(a,"g",(function(){return s})),t.d(a,"i",(function(){return d})),t.d(a,"b",(function(){return p})),t.d(a,"d",(function(){return m})),t.d(a,"j",(function(){return f})),t.d(a,"h",(function(){return h}));var n=t(34),r=t.n(n),c=t(23),i=function(){return function(e){e(g()),r.a.get("/api/blog").then((function(a){return e({type:c.i,payload:a.data})}))}},l=function(e){return function(a){a(g()),r.a.get("/api/blog/".concat(e)).then((function(e){return a({type:c.j,payload:e.data})}))}},o=function(e){return function(a){var t=new FormData;Object.keys(e).forEach((function(a){"header_img"===a&&void 0!==e[a]?e.header_img.map((function(e){return t.append("image",e)})):t.append(a,e[a])})),a(g()),r.a.post("/api/blog/",t).then((function(e){return a({type:c.a,payload:e.data})}))}},u=function(e){return function(a){var t=new FormData;Object.keys(e).forEach((function(a){"header_img"===a&&void 0!==e[a]?"string"===typeof e.header_img?t.append("image",e.header_img):e.header_img.map((function(e){return t.append("image",e)})):t.append(a,e[a])})),a(g()),r.a.put("/api/blog/".concat(e.id),t).then((function(e){return a({type:c.k,payload:e.data})}))}},s=function(e){return function(a){a(g()),r.a.delete("/api/blog/".concat(e)).then((function(t){!0===t.data.errInfo?a({type:c.b,payload:t.data}):a({type:c.b,payload:t.data,id:e})}))}},d=function(e){return function(e){e({type:c.e})}},p=function(){return function(e){e({type:c.d})}},m=function(e,a){return function(t){t({type:c.g,payload:{name:e,value:a}})}},f=function(e,a){return function(t){t({type:c.f,payload:{name:e,value:a}})}},g=function(){return{type:c.h}},h=function(){return{type:c.c}}},237:function(e,a,t){"use strict";var n=t(2),r=t.n(n),c=t(24),i=t(312),l=t(223),o=t.n(l),u=(c.a.shape({status:c.a.string.isRequired,title:c.a.string.isRequired,created:c.a.string,updated:c.a.string,handleOnchange:c.a.func}),function(e){return r.a.createElement("div",null,e.title,r.a.createElement(i.CheckboxToggle,{name:"status",label:"Published",value:e.status,style:{float:"right"},onChange:e.handleOnchange}),e.created&&r.a.createElement("small",{style:{marginLeft:"50px",color:"gray"}},"Created at : ",o()(e.created).format("LLL")),e.updated&&r.a.createElement("small",{style:{marginLeft:"50px",color:"gray"}},"Updated at : ",o()(e.updated).format("LLL")))});u.defaultProps={header:{}},a.a=u},2405:function(e,a,t){"use strict";t.r(a);var n=t(10),r=t(11),c=t(13),i=t(12),l=t(188),o=t(2),u=t.n(o),s=t(15),d=t(27),p=t(150),m=t(151),f=t(134),g=t(139),h=t(135),b=t(129),y=t(237),v=t(219),E=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).createMarkup=function(e){return{__html:e}},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.aSingleBlog(this.props.match.params.postId)}},{key:"componentWillUnmount",value:function(){this.props.aLocationChange()}},{key:"render",value:function(){var e=this.props.blog.singlePost;return u.a.createElement(l.a,{title:"Blog",breadcrumbs:[{name:"blog",active:!0}]},u.a.createElement(p.a,null,u.a.createElement(m.a,null,u.a.createElement(f.a,{className:"mb-3"},u.a.createElement(g.a,null,u.a.createElement(y.a,{status:e.status,created:e.createdAt,updated:e.updatedAt,title:"View Blog Post"})),u.a.createElement(h.a,null,u.a.createElement("div",null,u.a.createElement("h3",{style:{marginBottom:"30px"}},e.title)),u.a.createElement("div",{dangerouslySetInnerHTML:this.createMarkup(e.content)}),u.a.createElement("div",null,u.a.createElement(b.a,{outline:!0,onClick:this.props.history.goBack,color:"primary",size:"sm",style:{marginTop:"20px"}},"Back")))))))}}]),t}(u.a.Component);a.default=Object(s.d)(Object(d.b)((function(e){return{blog:e.aBlog}}),{aSingleBlog:v.c,aLocationChange:v.b}))(E)},279:function(e,a){},288:function(e,a,t){"use strict";var n=t(6),r=t(7),c=t(2),i=t.n(c),l=t(1),o=t.n(l),u=t(5),s=t.n(u),d=t(4),p={tag:d.p,listTag:d.p,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},m=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,l=e.children,o=e.tag,u=e.listTag,p=e["aria-label"],m=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),f=Object(d.l)(s()(a),c),g=Object(d.l)(s()("breadcrumb",t),c);return i.a.createElement(o,Object(n.a)({},m,{className:f,"aria-label":p}),i.a.createElement(u,{className:g},l))};m.propTypes=p,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=m},289:function(e,a,t){"use strict";var n=t(6),r=t(7),c=t(2),i=t.n(c),l=t(1),o=t.n(l),u=t(5),s=t.n(u),d=t(4),p={tag:d.p,active:o.a.bool,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.active,l=e.tag,o=Object(r.a)(e,["className","cssModule","active","tag"]),u=Object(d.l)(s()(a,!!c&&"active","breadcrumb-item"),t);return i.a.createElement(l,Object(n.a)({},o,{className:u,"aria-current":c?"page":void 0}))};m.propTypes=p,m.defaultProps={tag:"li"},a.a=m},332:function(e,a){},333:function(e,a){}}]);
//# sourceMappingURL=12.d63122ce.chunk.js.map