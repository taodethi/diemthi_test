"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[943],{3943:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var i=n(5893),l=n(6886),r=n(8445),s=n(5861),a=n(7294),o=n(9878),c=n(8456),d=n(1618),x=n(2480),h=n(1664),m=n.n(h),u=n(5941),p=e=>{let{label:t,title:n,number:h,icon:p="bookmark-filled",onShare:f}=e,[b,j]=(0,a.useState)(null),[w,g]=(0,a.useState)({}),Z=async()=>{let e=await (0,d.getArchive)({label:t,"max-results":h||5});j(e)};return(0,a.useEffect)(()=>{Z()},[]),(0,i.jsxs)("div",{children:[(0,i.jsx)(r.Z,{avatar:(0,i.jsx)(o.Z,{icon:"tabler:".concat(p),fontSize:20}),title:(0,i.jsx)(s.Z,{sx:{fontWeight:"bold"},variant:"h5",className:"post-title",children:n||t}),component:m(),href:"/search/label/".concat(t),sx:{textDecoration:"none"}}),!b&&(0,i.jsxs)(l.ZP,{item:!0,xs:12,sx:{alignItems:"center",flexDirection:"column",textAlign:"center",mb:4},children:[(0,i.jsx)(c.Z,{}),(0,i.jsx)(s.Z,{variant:"h4",children:"Đang tải..."})]}),Array.isArray(b)&&!b.length&&(0,i.jsx)(l.ZP,{item:!0,xs:12,sx:{alignItems:"center",flexDirection:"column",textAlign:"center",mb:4},children:(0,i.jsx)(s.Z,{variant:"h4",color:"error",children:"Chưa c\xf3 b\xe0i n\xe0o."})}),(b||[]).map((e,t)=>(0,i.jsx)(x.Z,{post:e,onShare:f},t)),(0,i.jsx)(u.Z,{share:w,onClose:()=>g({})})]})},f=n(1833),b=()=>{let[e,t]=(0,a.useState)({}),[n,r]=(0,a.useState)([]);return(0,a.useEffect)(()=>{"object"==typeof window.BLOGGER&&window.BLOGGER.homepage?r(window.BLOGGER.homepage||[]):r([{type:"list",data:[{label:"TUYỂN SINH",title:"TH\xd4NG TIN TUYỂN SINH",number:10},{label:"ĐIỂM CHUẨN",title:"TH\xd4NG TIN ĐIỂM CHUẨN",number:10},{label:"TIN TỨC",title:"TIN MỚI NHẤT",number:10},{label:"ĐỀ THI",title:"ĐỀ THI THPT QUỐC GIA",number:10}]}])},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.Z,{}),n.map((e,n)=>(0,i.jsx)(l.ZP,{container:!0,spacing:3,sx:{mb:3},children:e.data.map((e,n)=>(0,i.jsx)(l.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,i.jsx)(p,{label:e.label,title:e.title,number:e.number,onShare:e=>t(e)})},n))},n)),(0,i.jsx)(u.Z,{share:e,onClose:()=>t({})})]})}},2480:function(e,t,n){n.d(t,{Z:function(){return f}});var i=n(5893),l=n(7294),r=n(4267),s=n(3946),a=n(5861),o=n(7357),c=n(9878),d=n(9974),x=n(1664),h=n.n(x),m=n(1800),u=n(5675),p=n.n(u);function f(e){let{post:t,onShare:n}=e,[x,u]=(0,l.useState)(""),f=()=>{"object"!=typeof window.BLOGGER&&(window.BLOGGER={}),window.BLOGGER.postId=t.id,window.BLOGGER.title=t.title,window.BLOGGER.pageId=""},b=e=>{e.stopPropagation(),e.preventDefault(),n(t)};return(0,i.jsx)("div",{style:{borderTop:"1px solid rgba(47, 43, 61, 0.12)",padding:"5px"},children:(0,i.jsx)(h(),{href:t.link.replace(window.location.origin,""),passHref:!0,style:{textDecoration:"none"},children:(0,i.jsxs)(d.Z,{component:"div",sx:{display:"flex"},onClick:f,children:[(0,i.jsx)("div",{style:{maxWidth:120,borderRadius:1,position:"relative",width:"100%"},children:(0,i.jsx)(p(),{src:x||t.cover,alt:t.title,onError:()=>u(window.BLOGGER.cover),width:120,height:70,style:{borderRadius:8},className:"cover-post",loading:"lazy"})}),(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:[(0,i.jsx)(r.Z,{sx:{flex:"1 0 auto",p:2,height:"3.5rem",overflow:"hidden"},children:(0,i.jsx)(a.Z,{variant:"h6",sx:{lineHeight:"1rem",height:"4rem",overflow:"hidden",textOverflow:"ellipsis"},children:t.title})}),(0,i.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",pl:1,pb:1,justifyContent:"space-between"},children:[(0,i.jsx)(a.Z,{variant:"body2",sx:{ml:2},children:(0,m.default)(t.updated).locale("vi").format("HH:mm DD/MM/YYYY")}),(0,i.jsx)(s.Z,{onClick:b,children:(0,i.jsx)(c.Z,{icon:"tabler:share",fontSize:20})})]})]})]})})})}}}]);