"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[686],{1618:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});let i=n(8754),a=i._(n(7218)),s=i._(n(1800)),l=e=>{let t=new URLSearchParams,n=JSON.parse(JSON.stringify(e)),{label:i}=n;delete n.label,delete n.title,Object.keys(n).forEach(e=>{n[e]&&t.set(e,n[e])}),t.set("alt","json");var a="/feeds/posts/default?".concat(t.toString());return i&&(a="/feeds/posts/default/-/".concat(i.split("+").join("/"),"?").concat(t.toString())),"".concat("").concat(a)},r=e=>new Promise(t=>{let n=l(e);a.default.get(n).then(e=>{e.data.feed&&e.data.feed.entry?t(e.data.feed.entry.map(e=>{if("media$thumbnail"in e)t=e.media$thumbnail.url.replace("s72-c","s1600");else{var t,n=e.content.$t,i=n.indexOf("<img"),a=n.indexOf('src="',i),s=n.indexOf('"',a+5),l=n.substr(a+5,s-a-5);t=-1!=i&&-1!=a&&-1!=s&&""!=l?l:"https://4.bp.blogspot.com/-00O66C-eBQs/W0IcokXSnOI/AAAAAAAAL_k/g4KtDm7SkQsoe7_G0vZ_C_nU0Gf_-kyVQCLcBGAs/s1600/safe_image.png"}var r=e.link.find(e=>"alternate"===e.rel),o=r?r.href:null;return{id:e.id.$t.match(/post-(\d+)/)[1],author:e.author[0].name.$t,category:e.category.map(e=>e.term),published:e.published.$t,title:e.title.$t,updated:e.updated.$t,content:e.content.$t,cover:t,link:o}})):t([])}).catch(e=>{console.log(e),t([])})}),o=e=>{let{year:t,month:n}=e;var i={"by-date":e["by-date"]||"false","max-results":e["max-results"]||e.maxResults||10,"start-index":(e.start||e["start-index"]||0)+1,orderby:e.orderby||"updated",q:e.q||"",label:e.label||"","updated-min":e["updated-min"]||"","updated-max":e["updated-max"]||""};return t&&4==parseInt(t).toString().length&&(i["updated-min"]=(0,s.default)("".concat(t,"-").concat(n||"01")).startOf("month").startOf("day").format("YYYY-MM-DDTHH:mm:ssZ"),i["updated-max"]=(0,s.default)("".concat(t,"-").concat(n||"12")).endOf("month").endOf("day").format("YYYY-MM-DDTHH:mm:ssZ")),i};e.exports={getArchive:r,getQuery:o}},1800:function(e,t,n){n.r(t);var i=n(7484),a=n.n(i),s=n(9387),l=n.n(s);n(7553),a().extend(l()),t.default=a()},8819:function(e,t,n){var i=n(5893),a=n(7294),s=n(7357);let l=()=>{let[e,t]=(0,a.useState)(""),[n,l]=(0,a.useState)("");return(0,a.useEffect)(()=>{try{if("object"==typeof window.BLOGGER&&window.BLOGGER.clientId){t(window.BLOGGER.clientId);var e=window.BLOGGER.slotId||[];l(e[Math.floor(Math.random()*e.length)]),(window.adsbygoogle=window.adsbygoogle||[]).push({})}}catch(e){console.log(e)}},[]),e?(0,i.jsx)(s.Z,{className:"adsense-content",children:(0,i.jsx)("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":e,"data-ad-slot":n,"data-ad-format":"auto","data-full-width-responsive":"true"})}):null};t.Z=l},2686:function(e,t,n){n.d(t,{Z:function(){return k}});var i=n(5893),a=n(6886),s=n(8771),l=n(7294),r=n(5861),o=n(4267),c=n(2963),d=n(1664),x=n.n(d),h=n(8456),m=n(9878),u=n(1812),p=n(1618),f=n(5941),w=n(6242),g=n(9974),j=n(3965),b=n(7357),Z=n(3946),v=n(1800),G=e=>{let{post:t,onShare:n}=e,a=()=>{"object"!=typeof window.BLOGGER&&(window.BLOGGER={}),window.BLOGGER.postId=t.id,window.BLOGGER.title=t.title},s=e=>{e.stopPropagation(),e.preventDefault(),n(t)};return(0,i.jsx)(w.Z,{sx:{display:"flex",flexDirection:"column",height:"100%",position:"relative"},children:(0,i.jsx)(x(),{href:t.link.replace(window.location.origin,""),passHref:!0,style:{textDecoration:"none"},children:(0,i.jsxs)(g.Z,{component:"div",onClick:a,sx:{position:"inherit"},children:[(0,i.jsx)(j.Z,{component:"img",height:"150",image:t.cover,alt:t.title}),(0,i.jsx)(o.Z,{sx:{p:"5px!important",mb:10,flex:"1 0 auto",height:"4.5rem",overflow:"hidden"},children:(0,i.jsx)(r.Z,{variant:"h6",sx:{textOverflow:"ellipsis",height:"4.5rem",overflow:"hidden"},children:t.title})}),(0,i.jsxs)(b.Z,{sx:{pl:1,pb:1,display:"flex",alignItems:"center",justifyContent:"space-between",paddingY:"0!important",position:"absolute",bottom:"0",width:"100%"},children:[(0,i.jsx)(r.Z,{variant:"body2",sx:{ml:2},children:(0,v.default)(t.updated).locale("vi").format("HH:mm DD/MM/YYYY")}),(0,i.jsx)(Z.Z,{onClick:s,children:(0,i.jsx)(m.Z,{icon:"tabler:share",fontSize:20})})]})]})})})};let y=l.memo(e=>{let t=(0,p.getQuery)(e),[n,s]=(0,l.useState)(null),[d,w]=(0,l.useState)({}),[g,j]=(0,l.useState)(!1),[b,Z]=(0,l.useState)([]),v=async()=>{s(null);let e=await (0,p.getArchive)(t);s(e)},y=async()=>{j(!0);let e=await (0,p.getArchive)({...t,"start-index":n.length+1});e.length&&s([...n,...e]),j(!1)};return(0,l.useEffect)(()=>{e.label&&Z(e.label.split("+")),(e.label||e.year)&&v()},[e]),(0,i.jsxs)("div",{style:{marginBottom:3},children:[(0,i.jsx)(o.Z,{children:(0,i.jsxs)(c.Z,{"aria-label":"breadcrumb",children:[(0,i.jsx)(x(),{underline:"hover",color:"success",href:"/",passHref:!0,children:"Trang chủ"}),b.map((e,t)=>(0,i.jsx)(x(),{underline:"hover",color:"success",href:"/search/label/".concat(e),passHref:!0,children:e},t)),t.q&&(0,i.jsxs)(r.Z,{variant:"body",children:['Kết quả t\xecm kiếm về "',t.q,'"']}),parseInt(e.month)>1&&(0,i.jsxs)(r.Z,{variant:"body",children:["TH\xc1NG ",e.month," ",e.year]}),!parseInt(e.month)&&parseInt(e.year)>0&&(0,i.jsxs)(r.Z,{variant:"body",children:["NĂM ",e.year]})]})}),(0,i.jsxs)(a.ZP,{container:!0,spacing:3,children:[!n&&(0,i.jsxs)(a.ZP,{item:!0,xs:12,sx:{alignItems:"center",flexDirection:"column",textAlign:"center"},children:[(0,i.jsx)(h.Z,{}),(0,i.jsx)(r.Z,{variant:"h4",children:"VUI L\xd2NG ĐỢI TRONG GI\xc2Y L\xc1T"})]}),(n||[]).map((e,t)=>(0,i.jsx)(a.ZP,{item:!0,xs:12,sm:6,md:6,lg:4,children:(0,i.jsx)(G,{post:e,onShare:e=>w(e)})},t)),Array.isArray(n)&&n.length?(0,i.jsx)(a.ZP,{item:!0,xs:12,sx:{alignItems:"center",flexDirection:"column",textAlign:"center"},children:(0,i.jsx)(u.Z,{loading:g,loadingPosition:"start",startIcon:(0,i.jsx)(m.Z,{icon:"tabler:chevron-down",fontSize:20}),variant:"outlined",onClick:y,children:g?"Đang tải":"Xem th\xeam"})}):null,Array.isArray(n)&&!n.length?(0,i.jsx)(a.ZP,{item:!0,xs:12,sx:{alignItems:"center",flexDirection:"column",textAlign:"center"},children:(0,i.jsx)(r.Z,{variant:"h4",color:"error",children:"Chưa c\xf3 b\xe0i viết n\xe0o."})}):null]}),(0,i.jsx)(f.Z,{share:d,onClose:()=>w({})})]})});var k=e=>{let[t,n]=(0,l.useState)("");return(0,l.useEffect)(()=>{"object"==typeof window.BLOGGER&&window.BLOGGER.maxResults?n(window.BLOGGER.maxResults||""):n("12")},[]),(0,i.jsxs)(a.ZP,{container:!0,spacing:3,children:[(0,i.jsx)(a.ZP,{item:!0,xs:12,md:8,lg:8,children:(0,i.jsx)(y,{...e,maxResults:t})}),(0,i.jsx)(a.ZP,{item:!0,xs:12,md:4,lg:4,children:(0,i.jsx)(s.Z,{})})]})}},5941:function(e,t,n){var i=n(5893),a=n(3321),s=n(657),l=n(8557),r=n(1425),o=n(8462),c=n(7212),d=n(796),x=n(9953),h=n(8619),m=n(9878),u=n(1664),p=n.n(u),f=n(6455),w=n.n(f),g=n(6485),j=n.n(g),b=n(7294),Z=n(6585);let v=e=>{let{share:t,onClose:n}=e,u=()=>{n()},[f,g]=(0,b.useState)([]),v=()=>{j()(t.link),u(),w().fire({icon:"success",text:"Đ\xe3 sao ch\xe9p th\xe0nh c\xf4ng",timer:1500})};return(0,b.useEffect)(()=>{g([{title:"Chia sẻ với Facebook",icon:"tabler:brand-facebook",link:"https://www.facebook.com/dialog/share?app_id=".concat((window.BLOGGER||{}).appId,"&href=").concat(t.link)},{title:"Chia sẻ với Twitter",icon:"tabler:brand-twitter-filled",link:"https://twitter.com/intent/tweet?url=".concat(t.link,"&text=").concat(t.title)},{title:"Chia sẻ với Pinterest",icon:"tabler:brand-pinterest",link:"https://www.pinterest.com/pin/create/button/?url=".concat(t.link,"&description=").concat(t.title,"&media=").concat(t.cover)},{title:"Chia sẻ với Linkedin",icon:"tabler:brand-linkedin",link:"https://www.linkedin.com/sharing/share-offsite/?url=".concat(t.link)},{title:"Gửi b\xe0i qua Email",icon:"tabler:mail",link:"https://www.blogger.com/email-post.g?blogID=".concat((window.BLOGGER||{}).blogId,"&postID=").concat(t.id)}])},[t]),(0,i.jsxs)(s.Z,{open:!!t.id,maxWidth:"xs",fullWidth:!0,onClose:u,TransitionComponent:Z.Z,children:[(0,i.jsx)(l.Z,{children:"Chia sẻ nội dung n\xe0y qua"}),(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(c.ZP,{disablePadding:!0,children:(0,i.jsxs)(h.Z,{onClick:v,children:[(0,i.jsx)(d.Z,{children:(0,i.jsx)(m.Z,{icon:"tabler:link",fontSize:20})}),(0,i.jsx)(x.Z,{primary:"Sao ch\xe9p li\xean kết"})]})}),f.map((e,t)=>(0,i.jsx)(c.ZP,{disablePadding:!0,children:(0,i.jsxs)(h.Z,{component:p(),href:e.link,passHref:!0,target:"_blank",onClick:u,children:[(0,i.jsx)(d.Z,{children:(0,i.jsx)(m.Z,{icon:e.icon,fontSize:20})}),(0,i.jsx)(x.Z,{primary:e.title})]})},t))]}),(0,i.jsx)(r.Z,{className:"dialog-actions-dense",children:(0,i.jsx)(a.Z,{onClick:u,children:"Đ\xf3ng"})})]})};t.Z=v},8771:function(e,t,n){n.d(t,{Z:function(){return b}});var i=n(5893),a=n(7294),s=n(6242),l=n(8445),r=n(5861),o=n(9878),c=n(4267),d=n(3965),x=n(7357),h=n(9974),m=n(1664),u=n.n(m);function p(e){let{post:t,onShare:n}=e,[s,l]=(0,a.useState)("");(0,a.useEffect)(()=>{"object"==typeof window.BLOGGER?window.BLOGGER.cover||(window.BLOGGER.cover="https://i.imgur.com/dKZNJGk.png"):window.BLOGGER={cover:"https://i.imgur.com/dKZNJGk.png"}},[]);let o=()=>{"object"!=typeof window.BLOGGER&&(window.BLOGGER={}),window.BLOGGER.postId=t.id,window.BLOGGER.title=t.title};return(0,i.jsx)("div",{style:{borderTop:"1px solid rgba(47, 43, 61, 0.12)",padding:"5px"},children:(0,i.jsx)(u(),{href:t.link.replace(window.location.origin,""),passHref:!0,style:{textDecoration:"none"},children:(0,i.jsxs)(h.Z,{component:"div",sx:{display:"flex",mb:2},onClick:o,children:[(0,i.jsx)(d.Z,{component:"img",sx:{maxWidth:120,borderRadius:1},image:s||t.cover,alt:t.title,onError:e=>l(window.BLOGGER.cover),className:"cover-post"}),(0,i.jsx)(x.Z,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:(0,i.jsx)(c.Z,{sx:{flex:"1 0 auto",p:2,height:"3.5rem",overflow:"hidden"},children:(0,i.jsx)(r.Z,{variant:"h6",sx:{lineHeight:"1rem",height:"4rem",overflow:"hidden",textOverflow:"ellipsis"},children:t.title})})})]})})})}var f=n(3321),w=n(8819),g=n(1618),j=e=>{let{item:t}=e,[n,c]=(0,a.useState)(null),d=async()=>{let e=await (0,g.getArchive)(t);c(e)};return(0,a.useEffect)(()=>{d()},[t]),Array.isArray(n)&&n.length?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.Z,{sx:{mb:3},children:[(0,i.jsx)(l.Z,{avatar:(0,i.jsx)(o.Z,{icon:"tabler:grain",fontSize:20}),title:(0,i.jsx)(r.Z,{variant:"h5",sx:{fontWeight:"bold"},children:t.title})}),(n||[]).map((e,t)=>(0,i.jsx)(p,{post:e},t)),(0,i.jsx)("div",{style:{textAlign:"center",marginBottom:2},children:(0,i.jsx)(f.Z,{endIcon:(0,i.jsx)(o.Z,{icon:"tabler:chevron-down",fontSize:20}),component:u(),href:"/search/label/".concat(t.label),children:"Xem th\xeam"})})]}),(0,i.jsx)(w.Z,{})]}):(0,i.jsx)(i.Fragment,{})},b=()=>{let[e,t]=(0,a.useState)([]);return(0,a.useEffect)(()=>{"object"==typeof window.BLOGGER&&window.BLOGGER.sidebar?t(window.BLOGGER.sidebar||[]):t([{title:"ĐỀ THI THỬ",label:"ĐỀ THI THỬ","max-results":10},{title:"THI ONLINE",label:"THI ONLINE","max-results":10}])},[]),e.length?e.map((e,t)=>(0,i.jsx)(j,{item:e},t)):(0,i.jsx)(i.Fragment,{})}}}]);