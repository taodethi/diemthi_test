"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[686],{8819:function(e,t,n){var i=n(5893),l=n(7294),s=n(7357);let o=()=>{let[e,t]=(0,l.useState)(""),[n,o]=(0,l.useState)("");return(0,l.useEffect)(()=>{var e;try{if("object"==typeof window.BLOGGER&&window.BLOGGER.clientId){t(window.BLOGGER.clientId);var n=window.BLOGGER.slotId||[];o(n[Math.floor(Math.random()*n.length)]),e=setTimeout(()=>{(window.adsbygoogle=window.adsbygoogle||[]).push({})},1e3)}}catch(e){console.log(e)}return()=>{e&&clearTimeout(e)}},[]),e?(0,i.jsx)(s.Z,{className:"adsense-content",children:(0,i.jsx)("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":e,"data-ad-slot":n,"data-ad-format":"auto","data-full-width-responsive":"true"})}):null};t.Z=o},2686:function(e,t,n){n.d(t,{Z:function(){return E}});var i=n(5893),l=n(6886),s=n(8771),o=n(7294),r=n(5861),a=n(4267),c=n(2963),d=n(1664),x=n.n(d),h=n(8456),m=n(9878),w=n(1812),p=n(1618),u=n(5941),f=n(6242),g=n(9974),j=n(3965),b=n(7357),Z=n(3946),G=n(1800),v=e=>{let{post:t,onShare:n}=e,l=()=>{"object"!=typeof window.BLOGGER&&(window.BLOGGER={}),window.BLOGGER.postId=t.id,window.BLOGGER.title=t.title,window.BLOGGER.pageId=""},s=e=>{e.stopPropagation(),e.preventDefault(),n(t)};return(0,i.jsx)(f.Z,{sx:{display:"flex",flexDirection:"column",height:"100%",position:"relative"},children:(0,i.jsx)(x(),{href:t.link.replace(window.location.origin,""),passHref:!0,style:{textDecoration:"none"},children:(0,i.jsxs)(g.Z,{component:"div",onClick:l,sx:{position:"inherit"},children:[(0,i.jsx)(j.Z,{component:"img",height:"150",image:t.cover,alt:t.title}),(0,i.jsx)(a.Z,{sx:{p:"5px!important",mb:10,flex:"1 0 auto",height:"4.5rem",overflow:"hidden"},children:(0,i.jsx)(r.Z,{variant:"h6",sx:{textOverflow:"ellipsis",height:"4.5rem",overflow:"hidden"},children:t.title})}),(0,i.jsxs)(b.Z,{sx:{pl:1,pb:1,display:"flex",alignItems:"center",justifyContent:"space-between",paddingY:"0!important",position:"absolute",bottom:"0",width:"100%"},children:[(0,i.jsx)(r.Z,{variant:"body2",sx:{ml:2},children:(0,G.default)(t.updated).locale("vi").format("HH:mm DD/MM/YYYY")}),(0,i.jsx)(Z.Z,{onClick:s,children:(0,i.jsx)(m.Z,{icon:"tabler:share",fontSize:20})})]})]})})})};let y=o.memo(e=>{let t=(0,p.getQuery)(e),[n,s]=(0,o.useState)(null),[d,f]=(0,o.useState)({}),[g,j]=(0,o.useState)(!1),[b,Z]=(0,o.useState)([]),G=async()=>{s(null);let e=await (0,p.getArchive)(t);s(e)},y=async()=>{j(!0);let e=await (0,p.getArchive)({...t,"start-index":n.length+1});e.length&&s([...n,...e]),j(!1)};return(0,o.useEffect)(()=>{e.label&&Z(e.label.split("+")),(e.label||e.year)&&G()},[e]),(0,i.jsxs)("div",{style:{marginBottom:3},children:[(0,i.jsx)(a.Z,{children:(0,i.jsxs)(c.Z,{"aria-label":"breadcrumb",children:[(0,i.jsx)(x(),{underline:"hover",color:"success",href:"/",passHref:!0,children:"Trang chủ"}),b.map((e,t)=>(0,i.jsx)(x(),{underline:"hover",color:"success",href:"/search/label/".concat(e),passHref:!0,children:e},t)),t.q&&(0,i.jsxs)(r.Z,{variant:"body",children:['Kết quả t\xecm kiếm về "',t.q,'"']}),parseInt(e.month)>1&&(0,i.jsxs)(r.Z,{variant:"body",children:["TH\xc1NG ",e.month," ",e.year]}),!parseInt(e.month)&&parseInt(e.year)>0&&(0,i.jsxs)(r.Z,{variant:"body",children:["NĂM ",e.year]})]})}),(0,i.jsxs)(l.ZP,{container:!0,spacing:3,children:[!n&&(0,i.jsxs)(l.ZP,{item:!0,xs:12,sx:{alignItems:"center",flexDirection:"column",textAlign:"center"},children:[(0,i.jsx)(h.Z,{}),(0,i.jsx)(r.Z,{variant:"h4",children:"VUI L\xd2NG ĐỢI TRONG GI\xc2Y L\xc1T"})]}),(n||[]).map((e,t)=>(0,i.jsx)(l.ZP,{item:!0,xs:12,sm:6,md:6,lg:4,children:(0,i.jsx)(v,{post:e,onShare:e=>f(e)})},t)),Array.isArray(n)&&n.length?(0,i.jsx)(l.ZP,{item:!0,xs:12,sx:{alignItems:"center",flexDirection:"column",textAlign:"center"},children:(0,i.jsx)(w.Z,{loading:g,loadingPosition:"start",startIcon:(0,i.jsx)(m.Z,{icon:"tabler:chevron-down",fontSize:20}),variant:"outlined",onClick:y,children:g?"Đang tải":"Xem th\xeam"})}):null,Array.isArray(n)&&!n.length?(0,i.jsx)(l.ZP,{item:!0,xs:12,sx:{alignItems:"center",flexDirection:"column",textAlign:"center"},children:(0,i.jsx)(r.Z,{variant:"h4",color:"error",children:"Chưa c\xf3 b\xe0i viết n\xe0o."})}):null]}),(0,i.jsx)(u.Z,{share:d,onClose:()=>f({})})]})});var E=e=>{let[t,n]=(0,o.useState)("");return(0,o.useEffect)(()=>{"object"==typeof window.BLOGGER&&window.BLOGGER.maxResults?n(window.BLOGGER.maxResults||""):n("12")},[]),(0,i.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,i.jsx)(l.ZP,{item:!0,xs:12,md:8,lg:8,children:(0,i.jsx)(y,{...e,maxResults:t})}),(0,i.jsx)(l.ZP,{item:!0,xs:12,md:4,lg:4,children:(0,i.jsx)(s.Z,{})})]})}},5941:function(e,t,n){var i=n(5893),l=n(3321),s=n(657),o=n(8557),r=n(1425),a=n(8462),c=n(7212),d=n(796),x=n(9953),h=n(8619),m=n(9878),w=n(1664),p=n.n(w),u=n(6455),f=n.n(u),g=n(6485),j=n.n(g),b=n(7294),Z=n(6585);let G=e=>{let{share:t,onClose:n}=e,w=()=>{n()},[u,g]=(0,b.useState)([]),G=()=>{j()(t.link),w(),f().fire({icon:"success",text:"Đ\xe3 sao ch\xe9p th\xe0nh c\xf4ng",timer:1500})};return(0,b.useEffect)(()=>{g([{title:"Chia sẻ với Facebook",icon:"tabler:brand-facebook",link:"https://www.facebook.com/dialog/share?app_id=".concat((window.BLOGGER||{}).appId,"&href=").concat(t.link)},{title:"Chia sẻ với Twitter",icon:"tabler:brand-twitter-filled",link:"https://twitter.com/intent/tweet?url=".concat(t.link,"&text=").concat(t.title)},{title:"Chia sẻ với Pinterest",icon:"tabler:brand-pinterest",link:"https://www.pinterest.com/pin/create/button/?url=".concat(t.link,"&description=").concat(t.title,"&media=").concat(t.cover)},{title:"Chia sẻ với Linkedin",icon:"tabler:brand-linkedin",link:"https://www.linkedin.com/sharing/share-offsite/?url=".concat(t.link)},{title:"Gửi b\xe0i qua Email",icon:"tabler:mail",link:"https://www.blogger.com/email-post.g?blogID=".concat((window.BLOGGER||{}).blogId,"&postID=").concat(t.id)}])},[t]),(0,i.jsxs)(s.Z,{open:!!t.id,maxWidth:"xs",fullWidth:!0,onClose:w,TransitionComponent:Z.Z,children:[(0,i.jsx)(o.Z,{children:"Chia sẻ nội dung n\xe0y qua"}),(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(c.ZP,{disablePadding:!0,children:(0,i.jsxs)(h.Z,{onClick:G,children:[(0,i.jsx)(d.Z,{children:(0,i.jsx)(m.Z,{icon:"tabler:link",fontSize:20})}),(0,i.jsx)(x.Z,{primary:"Sao ch\xe9p li\xean kết"})]})}),u.map((e,t)=>(0,i.jsx)(c.ZP,{disablePadding:!0,children:(0,i.jsxs)(h.Z,{component:p(),href:e.link,passHref:!0,target:"_blank",onClick:w,children:[(0,i.jsx)(d.Z,{children:(0,i.jsx)(m.Z,{icon:e.icon,fontSize:20})}),(0,i.jsx)(x.Z,{primary:e.title})]})},t))]}),(0,i.jsx)(r.Z,{className:"dialog-actions-dense",children:(0,i.jsx)(l.Z,{onClick:w,children:"Đ\xf3ng"})})]})};t.Z=G},8771:function(e,t,n){n.d(t,{Z:function(){return b}});var i=n(5893),l=n(7294),s=n(6242),o=n(8445),r=n(5861),a=n(9878),c=n(4267),d=n(3965),x=n(7357),h=n(9974),m=n(1664),w=n.n(m);function p(e){let{post:t,onShare:n}=e,[s,o]=(0,l.useState)("");(0,l.useEffect)(()=>{"object"==typeof window.BLOGGER?window.BLOGGER.cover||(window.BLOGGER.cover="https://i.imgur.com/dKZNJGk.png"):window.BLOGGER={cover:"https://i.imgur.com/dKZNJGk.png"}},[]);let a=()=>{"object"!=typeof window.BLOGGER&&(window.BLOGGER={}),window.BLOGGER.postId=t.id,window.BLOGGER.title=t.title,window.BLOGGER.pageId=""};return(0,i.jsx)("div",{style:{borderTop:"1px solid rgba(47, 43, 61, 0.12)",padding:"5px"},children:(0,i.jsx)(w(),{href:t.link.replace(window.location.origin,""),passHref:!0,style:{textDecoration:"none"},children:(0,i.jsxs)(h.Z,{component:"div",sx:{display:"flex",mb:2},onClick:a,children:[(0,i.jsx)(d.Z,{component:"img",sx:{maxWidth:120,borderRadius:1},image:s||t.cover,alt:t.title,onError:e=>o(window.BLOGGER.cover),className:"cover-post"}),(0,i.jsx)(x.Z,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:(0,i.jsx)(c.Z,{sx:{flex:"1 0 auto",p:2,height:"3.5rem",overflow:"hidden"},children:(0,i.jsx)(r.Z,{variant:"h6",sx:{lineHeight:"1rem",height:"4rem",overflow:"hidden",textOverflow:"ellipsis"},children:t.title})})})]})})})}var u=n(3321),f=n(8819),g=n(1618),j=e=>{let{item:t}=e,[n,c]=(0,l.useState)(null),d=async()=>{let e=await (0,g.getArchive)(t);c(e)};return(0,l.useEffect)(()=>{d()},[t]),Array.isArray(n)&&n.length?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.Z,{sx:{mb:3},children:[(0,i.jsx)(o.Z,{avatar:(0,i.jsx)(a.Z,{icon:"tabler:grain",fontSize:20}),title:(0,i.jsx)(r.Z,{variant:"h5",sx:{fontWeight:"bold"},children:t.title})}),(n||[]).map((e,t)=>(0,i.jsx)(p,{post:e},t)),(0,i.jsx)("div",{style:{textAlign:"center",marginBottom:2},children:(0,i.jsx)(u.Z,{endIcon:(0,i.jsx)(a.Z,{icon:"tabler:chevron-down",fontSize:20}),component:w(),href:"/search/label/".concat(t.label),children:"Xem th\xeam"})})]}),(0,i.jsx)(f.Z,{})]}):(0,i.jsx)(i.Fragment,{})},b=()=>{let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>{"object"==typeof window.BLOGGER&&window.BLOGGER.sidebar?t(window.BLOGGER.sidebar||[]):t([{title:"ĐỀ THI THỬ",label:"ĐỀ THI THỬ","max-results":10},{title:"THI ONLINE",label:"THI ONLINE","max-results":10}])},[]),e.length?e.map((e,t)=>(0,i.jsx)(j,{item:e},t)):(0,i.jsx)(i.Fragment,{})}}}]);