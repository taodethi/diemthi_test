(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[812],{3356:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[year]/[month]/[slug]",function(){return n(7721)}])},7721:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var i=n(5893),s=n(9991),l=n(6886),r=n(8456),a=n(5861),c=n(7357),o=n(6242),d=n(4612),x=n(8445),h=n(4267),u=n(9661),m=n(9878),p=n(3946),f=n(1800),j=n(3321),Z=n(657),b=n(8557),g=n(1425),w=n(8462),k=n(7212),_=n(8885),v=n(9334),y=n(8619),C=n(1664),I=n.n(C),P=n(6455),N=n.n(P),A=n(6485),O=n.n(A);let S=e=>{let{share:t,onClose:n}=e,s=()=>{n()},l=()=>{O()(t.link),s(),N().fire({icon:"success",text:"Đ\xe3 sao ch\xe9p th\xe0nh c\xf4ng",timer:1500})},r=[{title:"Chia sẻ với Facebook",icon:"tabler:brand-facebook",link:"https://www.facebook.com/dialog/share?app_id=855834798706122&href=".concat(t.link)},{title:"Chia sẻ với Twitter",icon:"tabler:brand-twitter-filled",link:"https://twitter.com/intent/tweet?url=".concat(t.link,"&text=").concat(t.title)},{title:"Chia sẻ với Pinterest",icon:"tabler:brand-pinterest",link:"https://www.pinterest.com/pin/create/button/?url=".concat(t.link,"&description=").concat(t.title,"&media=").concat(t.cover)},{title:"Chia sẻ với Linkedin",icon:"tabler:brand-linkedin",link:"https://www.linkedin.com/sharing/share-offsite/?url=".concat(t.link)},{title:"Gửi b\xe0i qua Email",icon:"tabler:mail",link:"https://www.blogger.com/email-post.g?blogID=2750156227726673614&postID=".concat(t.id)}];return(0,i.jsxs)(Z.Z,{open:!!t.id,maxWidth:"xs",fullWidth:!0,onClose:s,children:[(0,i.jsx)(b.Z,{children:"Chia sẻ nội dung n\xe0y qua"}),(0,i.jsxs)(w.Z,{children:[(0,i.jsx)(k.ZP,{disablePadding:!0,children:(0,i.jsxs)(y.Z,{onClick:l,children:[(0,i.jsx)(_.Z,{children:(0,i.jsx)(m.Z,{icon:"tabler:link",fontSize:20})}),(0,i.jsx)(v.Z,{primary:"Sao ch\xe9p li\xean kết"})]})}),r.map((e,t)=>(0,i.jsx)(k.ZP,{disablePadding:!0,children:(0,i.jsxs)(y.Z,{component:I(),href:e.link,passHref:!0,target:"_blank",children:[(0,i.jsx)(_.Z,{children:(0,i.jsx)(m.Z,{icon:e.icon,fontSize:20})}),(0,i.jsx)(v.Z,{primary:e.title})]})},t))]}),(0,i.jsx)(g.Z,{className:"dialog-actions-dense",children:(0,i.jsx)(j.Z,{onClick:s,children:"Đ\xf3ng"})})]})};var $=n(7294),E=n(2963),G=n(3795);let L=e=>{let{post:t}=e,[n,s]=(0,$.useState)({}),l=()=>{s(t)};return(0,i.jsxs)(o.Z,{sx:{mb:3},children:[(0,i.jsx)(h.Z,{children:(0,i.jsxs)(E.Z,{"aria-label":"breadcrumb",children:[(0,i.jsx)(G.Z,{underline:"hover",color:"success",href:"/",children:"Trang chủ"}),t.category.map((e,t)=>(0,i.jsx)(G.Z,{underline:"hover",color:"inherit",href:"/search/label/"+e,children:e},t))]})}),(0,i.jsx)(x.Z,{title:(0,i.jsx)(a.Z,{variant:"h1",children:t.title})}),(0,i.jsxs)(h.Z,{className:"content-post",children:[(0,i.jsxs)(c.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",mb:5},children:[(0,i.jsxs)(c.Z,{sx:{mr:2,display:"flex",alignItems:"center"},children:[(0,i.jsx)(u.Z,{alt:t.author,src:"/images/avatars/1.png",sx:{width:34,height:34,mr:2.75}}),(0,i.jsx)(a.Z,{variant:"body2",sx:{mr:2},children:t.author}),(0,i.jsx)(m.Z,{icon:"tabler:point-filled",fontSize:10}),(0,i.jsx)(a.Z,{sx:{ml:2},children:(0,f.default)(t.updated).locale("vi").format("HH:mm DD/MM/YYYY")})]}),(0,i.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(d.Z,{readOnly:!0,value:4,name:"read-only",sx:{mr:2}}),(0,i.jsx)(p.Z,{onClick:l,children:(0,i.jsx)(m.Z,{icon:"tabler:share",fontSize:20})})]})]}),(0,i.jsx)(a.Z,{variant:"body",sx:{mb:3.25},dangerouslySetInnerHTML:{__html:t.content}})]}),(0,i.jsx)(S,{share:n,onClose:()=>s({})})]})};var T=e=>{let{post:t}=e;return(0,i.jsx)(o.Z,{xs:{md:3},children:(0,i.jsx)(h.Z,{children:"PHẦN B\xccNH LU\xc2NJ"})})},D=()=>{let[e,t]=(0,$.useState)(null),n=async()=>{console.log(window.postId),t(await (0,s.getPost)(window.postId))};return(0,$.useEffect)(()=>{window.postId&&n()},[]),(0,i.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,i.jsxs)(l.ZP,{item:!0,xs:12,md:8,children:[e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(L,{post:e}),(0,i.jsx)(T,{post:e})]}),!e&&(0,i.jsxs)(l.ZP,{item:!0,xs:12,sx:{alignItems:"center",flexDirection:"column",textAlign:"center"},children:[(0,i.jsx)(r.Z,{}),(0,i.jsx)(a.Z,{variant:"h4",children:"VUI L\xd2NG ĐỢI TRONG GI\xc2Y L\xc1T"})]})]}),(0,i.jsx)(l.ZP,{item:!0,xs:12,md:4})]})},H=()=>(0,i.jsx)(D,{})},1800:function(e,t,n){"use strict";n.r(t);var i=n(7484),s=n.n(i),l=n(9387),r=n.n(l);n(7553),s().extend(r()),t.default=s()},9991:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=n(8754),s=i._(n(7218)),l=e=>new Promise(t=>{s.default.get("/feeds/posts/default/".concat(e,"?alt=json")).then(e=>{if(console.log(e.data),e.data.entry){let{entry:d}=e.data;if("media$thumbnail"in d)n=d.media$thumbnail.url.replace("s72-c","s1600");else{var n,i=d.content.$t,s=i.indexOf("<img"),l=i.indexOf('src="',s),r=i.indexOf('"',l+5),a=i.substr(l+5,r-l-5);n=-1!=s&&-1!=l&&-1!=r&&""!=a?a:"https://4.bp.blogspot.com/-00O66C-eBQs/W0IcokXSnOI/AAAAAAAAL_k/g4KtDm7SkQsoe7_G0vZ_C_nU0Gf_-kyVQCLcBGAs/s1600/safe_image.png"}var c=d.link.find(e=>"alternate"===e.rel),o=c?c.href:null;t({id:d.id.$t.match(/post-(\d+)/)[1],author:d.author[0].name.$t,category:d.category.map(e=>e.term),published:d.published.$t,title:d.title.$t,updated:d.updated.$t,content:d.content.$t,cover:n,link:o})}else t([])}).catch(e=>{console.log(e),t([])})});e.exports={getPost:l}}},function(e){e.O(0,[9,218,654,366,774,888,179],function(){return e(e.s=3356)}),_N_E=e.O()}]);