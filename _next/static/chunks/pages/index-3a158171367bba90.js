(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7691)}])},7691:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var i=n(5893),a=n(6886),l=n(8445),s=n(5861),r=n(7294),o=n(9878),c=n(8456),d=n(1618),x=n(2480),h=n(1664),u=n.n(h),m=n(5941),p=e=>{let{label:t,title:n,number:h,icon:p="bookmark-filled",onShare:f}=e,[b,w]=(0,r.useState)(null),[g,j]=(0,r.useState)({}),Z=async()=>{let e=await (0,d.getArchive)({label:t,"max-results":h||5});w(e)};return(0,r.useEffect)(()=>{Z()},[]),(0,i.jsxs)("div",{children:[(0,i.jsx)(l.Z,{avatar:(0,i.jsx)(o.Z,{icon:"tabler:".concat(p),fontSize:20}),title:(0,i.jsx)(s.Z,{sx:{fontWeight:"bold"},variant:"h5",children:n||t}),component:u(),href:"/search/label/".concat(t),sx:{textDecoration:"none"}}),!b&&(0,i.jsxs)(a.ZP,{item:!0,xs:12,sx:{alignItems:"center",flexDirection:"column",textAlign:"center",mb:4},children:[(0,i.jsx)(c.Z,{}),(0,i.jsx)(s.Z,{variant:"h4",children:"Đang tải..."})]}),Array.isArray(b)&&!b.length&&(0,i.jsx)(a.ZP,{item:!0,xs:12,sx:{alignItems:"center",flexDirection:"column",textAlign:"center",mb:4},children:(0,i.jsx)(s.Z,{variant:"h4",color:"error",children:"Chưa c\xf3 b\xe0i n\xe0o."})}),(b||[]).map((e,t)=>(0,i.jsx)(x.Z,{post:e,onShare:f},t)),(0,i.jsx)(m.Z,{share:g,onClose:()=>j({})})]})},f=n(8595),b=n(9008),w=n.n(b),g=()=>{let[e,t]=(0,r.useState)({}),[n,l]=(0,r.useState)([]),[s,o]=(0,r.useState)();return(0,r.useEffect)(()=>{"object"==typeof window.BLOGGER&&window.BLOGGER.homepage?(l(window.BLOGGER.homepage||[]),o(window.BLOGGER.title)):l([{type:"list",data:[{label:"ĐỀ THI THỬ",title:"ĐỀ THI THỬ MỚI NHẤT",number:5},{label:"LỚP 12",title:"T\xc0I LIỆU LỚP 12",number:5},{label:"LỚP 11",title:"T\xc0I LIỆU LỚP 11",number:5},{label:"LỚP 10",title:"T\xc0I LIỆU LỚP 10",number:5}]}])},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w(),{children:(0,i.jsx)("title",{children:s})}),(0,i.jsx)(f.Z,{}),n.map((e,n)=>(0,i.jsx)(a.ZP,{container:!0,spacing:3,sx:{mb:3},children:e.data.map((e,n)=>(0,i.jsx)(a.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,i.jsx)(p,{label:e.label,title:e.title,number:e.number,onShare:e=>t(e)})},n))},n)),(0,i.jsx)(m.Z,{share:e,onClose:()=>t({})})]})},j=()=>(0,i.jsx)(g,{})},1618:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=n(8754),a=i._(n(7218)),l=i._(n(1800)),s=e=>{let t=new URLSearchParams,n=JSON.parse(JSON.stringify(e)),{label:i}=n;delete n.label,delete n.title,Object.keys(n).forEach(e=>{n[e]&&t.set(e,n[e])}),t.set("alt","json");var a="/feeds/posts/default?".concat(t.toString());return i&&(a="/feeds/posts/default/-/".concat(i.split("+").join("/"),"?").concat(t.toString())),"".concat("http://localhost:3001").concat(a)},r=e=>new Promise(t=>{let n=s(e);a.default.get(n).then(e=>{e.data.feed&&e.data.feed.entry?t(e.data.feed.entry.map(e=>{if("media$thumbnail"in e)t=e.media$thumbnail.url.replace("s72-c","s1600");else{var t,n=e.content.$t,i=n.indexOf("<img"),a=n.indexOf('src="',i),l=n.indexOf('"',a+5),s=n.substr(a+5,l-a-5);t=-1!=i&&-1!=a&&-1!=l&&""!=s?s:"https://4.bp.blogspot.com/-00O66C-eBQs/W0IcokXSnOI/AAAAAAAAL_k/g4KtDm7SkQsoe7_G0vZ_C_nU0Gf_-kyVQCLcBGAs/s1600/safe_image.png"}var r=e.link.find(e=>"alternate"===e.rel),o=r?r.href:null;return{id:e.id.$t.match(/post-(\d+)/)[1],author:e.author[0].name.$t,category:e.category.map(e=>e.term),published:e.published.$t,title:e.title.$t,updated:e.updated.$t,content:e.content.$t,cover:t,link:o}})):t([])}).catch(e=>{console.log(e),t([])})}),o=e=>{let{year:t,month:n}=e;var i={"by-date":e["by-date"]||"false","max-results":e["max-results"]||e.maxResults||10,"start-index":(e.start||e["start-index"]||0)+1,orderby:e.orderby||"updated",q:e.q||"",label:e.label||"","updated-min":e["updated-min"]||"","updated-max":e["updated-max"]||""};return t&&4==parseInt(t).toString().length&&(i["updated-min"]=(0,l.default)("".concat(t,"-").concat(n||"01")).startOf("month").startOf("day").format("YYYY-MM-DDTHH:mm:ssZ"),i["updated-max"]=(0,l.default)("".concat(t,"-").concat(n||"12")).endOf("month").endOf("day").format("YYYY-MM-DDTHH:mm:ssZ")),i};e.exports={getArchive:r,getQuery:o}},1800:function(e,t,n){"use strict";n.r(t);var i=n(7484),a=n.n(i),l=n(9387),s=n.n(l);n(7553),a().extend(s()),t.default=a()},2480:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var i=n(5893),a=n(7294),l=n(4267),s=n(3965),r=n(3946),o=n(5861),c=n(7357),d=n(9878),x=n(9974),h=n(1664),u=n.n(h),m=n(1800);function p(e){let{post:t,onShare:n}=e,[h,p]=(0,a.useState)("");(0,a.useEffect)(()=>{"object"==typeof window.BLOGGER?window.BLOGGER.cover||(window.BLOGGER.cover="https://i.imgur.com/dKZNJGk.png"):window.BLOGGER={cover:"https://i.imgur.com/dKZNJGk.png"}},[]);let f=()=>{"object"!=typeof window.BLOGGER&&(window.BLOGGER={}),window.BLOGGER.postId=t.id,console.log("handleLinkClick",window.BLOGGER)},b=e=>{e.stopPropagation(),e.preventDefault(),n(t)};return(0,i.jsx)("div",{style:{borderTop:"1px solid rgba(47, 43, 61, 0.12)",padding:"5px"},children:(0,i.jsx)(u(),{href:t.link.replace(window.location.origin,""),passHref:!0,style:{textDecoration:"none"},children:(0,i.jsxs)(x.Z,{component:"div",sx:{display:"flex"},onClick:f,children:[(0,i.jsx)(s.Z,{component:"img",sx:{maxWidth:120,borderRadius:1},image:h||t.cover,alt:t.title,onError:e=>p(window.BLOGGER.cover),className:"cover-post"}),(0,i.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:[(0,i.jsx)(l.Z,{sx:{flex:"1 0 auto",p:2,height:"3.5rem",overflow:"hidden"},children:(0,i.jsx)(o.Z,{variant:"h6",sx:{lineHeight:"1rem",height:"4rem",overflow:"hidden",textOverflow:"ellipsis"},children:t.title})}),(0,i.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center",pl:1,pb:1,justifyContent:"space-between"},children:[(0,i.jsx)(o.Z,{variant:"body2",sx:{ml:2},children:(0,m.default)(t.updated).locale("vi").format("HH:mm DD/MM/YYYY")}),(0,i.jsx)(r.Z,{onClick:b,children:(0,i.jsx)(d.Z,{icon:"tabler:share",fontSize:20})})]})]})]})})})}},5941:function(e,t,n){"use strict";var i=n(5893),a=n(3321),l=n(657),s=n(8557),r=n(1425),o=n(8462),c=n(7212),d=n(796),x=n(9953),h=n(8619),u=n(9878),m=n(1664),p=n.n(m),f=n(6455),b=n.n(f),w=n(6485),g=n.n(w),j=n(7294),Z=n(6585);let k=e=>{let{share:t,onClose:n}=e,m=()=>{n()},[f,w]=(0,j.useState)([]),k=()=>{g()(t.link),m(),b().fire({icon:"success",text:"Đ\xe3 sao ch\xe9p th\xe0nh c\xf4ng",timer:1500})};return(0,j.useEffect)(()=>{w([{title:"Chia sẻ với Facebook",icon:"tabler:brand-facebook",link:"https://www.facebook.com/dialog/share?app_id=".concat((window.BLOGGER||{}).appId,"&href=").concat(t.link)},{title:"Chia sẻ với Twitter",icon:"tabler:brand-twitter-filled",link:"https://twitter.com/intent/tweet?url=".concat(t.link,"&text=").concat(t.title)},{title:"Chia sẻ với Pinterest",icon:"tabler:brand-pinterest",link:"https://www.pinterest.com/pin/create/button/?url=".concat(t.link,"&description=").concat(t.title,"&media=").concat(t.cover)},{title:"Chia sẻ với Linkedin",icon:"tabler:brand-linkedin",link:"https://www.linkedin.com/sharing/share-offsite/?url=".concat(t.link)},{title:"Gửi b\xe0i qua Email",icon:"tabler:mail",link:"https://www.blogger.com/email-post.g?blogID=".concat((window.BLOGGER||{}).blogId,"&postID=").concat(t.id)}])},[t]),(0,i.jsxs)(l.Z,{open:!!t.id,maxWidth:"xs",fullWidth:!0,onClose:m,TransitionComponent:Z.Z,children:[(0,i.jsx)(s.Z,{children:"Chia sẻ nội dung n\xe0y qua"}),(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(c.ZP,{disablePadding:!0,children:(0,i.jsxs)(h.Z,{onClick:k,children:[(0,i.jsx)(d.Z,{children:(0,i.jsx)(u.Z,{icon:"tabler:link",fontSize:20})}),(0,i.jsx)(x.Z,{primary:"Sao ch\xe9p li\xean kết"})]})}),f.map((e,t)=>(0,i.jsx)(c.ZP,{disablePadding:!0,children:(0,i.jsxs)(h.Z,{component:p(),href:e.link,passHref:!0,target:"_blank",onClick:m,children:[(0,i.jsx)(d.Z,{children:(0,i.jsx)(u.Z,{icon:e.icon,fontSize:20})}),(0,i.jsx)(x.Z,{primary:e.title})]})},t))]}),(0,i.jsx)(r.Z,{className:"dialog-actions-dense",children:(0,i.jsx)(a.Z,{onClick:m,children:"Đ\xf3ng"})})]})};t.Z=k}},function(e){e.O(0,[251,59,595,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);