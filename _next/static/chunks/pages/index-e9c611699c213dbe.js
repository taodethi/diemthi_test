(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7691)}])},7691:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var i=n(5893),r=n(6886),o=n(8445),l=n(5861),s=n(7294),a=n(9878),c=n(8456),d=n(1618),x=n(2480),h=n(1664),u=n.n(h),m=n(5941),f=e=>{let{label:t,title:n,number:h,icon:f="bookmark-filled",onShare:p}=e,[w,j]=(0,s.useState)(null),[b,G]=(0,s.useState)({}),g=async()=>{let e=await (0,d.getArchive)({label:t,"max-results":h||5});j(e)};return(0,s.useEffect)(()=>{g()},[]),(0,i.jsxs)("div",{children:[(0,i.jsx)(o.Z,{avatar:(0,i.jsx)(a.Z,{icon:"tabler:".concat(f),fontSize:20}),title:(0,i.jsx)(l.Z,{sx:{fontWeight:"bold"},variant:"h5",children:n||t}),component:u(),href:"/search/label/".concat(t),sx:{textDecoration:"none"}}),!w&&(0,i.jsxs)(r.ZP,{item:!0,xs:12,sx:{alignItems:"center",flexDirection:"column",textAlign:"center",mb:4},children:[(0,i.jsx)(c.Z,{}),(0,i.jsx)(l.Z,{variant:"h4",children:"Đang tải..."})]}),Array.isArray(w)&&!w.length&&(0,i.jsx)(r.ZP,{item:!0,xs:12,sx:{alignItems:"center",flexDirection:"column",textAlign:"center",mb:4},children:(0,i.jsx)(l.Z,{variant:"h4",color:"error",children:"Chưa c\xf3 b\xe0i n\xe0o."})}),(w||[]).map((e,t)=>(0,i.jsx)(x.Z,{post:e,onShare:p},t)),(0,i.jsx)(m.Z,{share:b,onClose:()=>G({})})]})},p=n(1833),w=()=>{let[e,t]=(0,s.useState)({}),[n,o]=(0,s.useState)([]);return(0,s.useEffect)(()=>{"object"==typeof window.BLOGGER&&window.BLOGGER.homepage?o(window.BLOGGER.homepage||[]):o([{type:"list",data:[{label:"ĐỀ THI THỬ",title:"ĐỀ THI THỬ MỚI NHẤT",number:5},{label:"LỚP 12",title:"T\xc0I LIỆU LỚP 12",number:5},{label:"LỚP 11",title:"T\xc0I LIỆU LỚP 11",number:5},{label:"LỚP 10",title:"T\xc0I LIỆU LỚP 10",number:5}]}])},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p.Z,{}),n.map((e,n)=>(0,i.jsx)(r.ZP,{container:!0,spacing:3,sx:{mb:3},children:e.data.map((e,n)=>(0,i.jsx)(r.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,i.jsx)(f,{label:e.label,title:e.title,number:e.number,onShare:e=>t(e)})},n))},n)),(0,i.jsx)(m.Z,{share:e,onClose:()=>t({})})]})},j=()=>(0,i.jsx)(w,{})},2480:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var i=n(5893),r=n(7294),o=n(4267),l=n(3965),s=n(3946),a=n(5861),c=n(7357),d=n(9878),x=n(9974),h=n(1664),u=n.n(h),m=n(1800);function f(e){let{post:t,onShare:n}=e,[h,f]=(0,r.useState)("");(0,r.useEffect)(()=>{"object"==typeof window.BLOGGER?window.BLOGGER.cover||(window.BLOGGER.cover="https://i.imgur.com/dKZNJGk.png"):window.BLOGGER={cover:"https://i.imgur.com/dKZNJGk.png"}},[]);let p=()=>{"object"!=typeof window.BLOGGER&&(window.BLOGGER={}),window.BLOGGER.postId=t.id,window.BLOGGER.title=t.title,window.BLOGGER.pageId=""},w=e=>{e.stopPropagation(),e.preventDefault(),n(t)};return(0,i.jsx)("div",{style:{borderTop:"1px solid rgba(47, 43, 61, 0.12)",padding:"5px"},children:(0,i.jsx)(u(),{href:t.link.replace(window.location.origin,""),passHref:!0,style:{textDecoration:"none"},children:(0,i.jsxs)(x.Z,{component:"div",sx:{display:"flex"},onClick:p,children:[(0,i.jsx)(l.Z,{component:"img",sx:{maxWidth:120,borderRadius:1},image:h||t.cover,alt:t.title,onError:e=>f(window.BLOGGER.cover),className:"cover-post"}),(0,i.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:[(0,i.jsx)(o.Z,{sx:{flex:"1 0 auto",p:2,height:"3.5rem",overflow:"hidden"},children:(0,i.jsx)(a.Z,{variant:"h6",sx:{lineHeight:"1rem",height:"4rem",overflow:"hidden",textOverflow:"ellipsis"},children:t.title})}),(0,i.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center",pl:1,pb:1,justifyContent:"space-between"},children:[(0,i.jsx)(a.Z,{variant:"body2",sx:{ml:2},children:(0,m.default)(t.updated).locale("vi").format("HH:mm DD/MM/YYYY")}),(0,i.jsx)(s.Z,{onClick:w,children:(0,i.jsx)(d.Z,{icon:"tabler:share",fontSize:20})})]})]})]})})})}}},function(e){e.O(0,[540,643,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);