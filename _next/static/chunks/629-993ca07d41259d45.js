"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[629],{8771:function(e,t,n){n.d(t,{Z:function(){return Z}});var i=n(5893),l=n(7294),s=n(6242),r=n(8445),a=n(5861),x=n(9878),o=n(4267),c=n(3965),h=n(7357),d=n(9974),m=n(1664),u=n.n(m);function p(e){let{post:t,onShare:n}=e,[s,r]=(0,l.useState)("");(0,l.useEffect)(()=>{"object"==typeof window.BLOGGER?window.BLOGGER.cover||(window.BLOGGER.cover="https://i.imgur.com/dKZNJGk.png"):window.BLOGGER={cover:"https://i.imgur.com/dKZNJGk.png"}},[]);let x=()=>{"object"!=typeof window.BLOGGER&&(window.BLOGGER={}),window.BLOGGER.postId=t.id,window.BLOGGER.title=t.title,window.BLOGGER.pageId=""};return(0,i.jsx)("div",{style:{borderTop:"1px solid rgba(47, 43, 61, 0.12)",padding:"5px"},children:(0,i.jsx)(u(),{href:t.link.replace(window.location.origin,""),passHref:!0,style:{textDecoration:"none"},children:(0,i.jsxs)(d.Z,{component:"div",sx:{display:"flex",mb:2},onClick:x,children:[(0,i.jsx)(c.Z,{component:"img",sx:{maxWidth:120,borderRadius:1},image:s||t.cover,alt:t.title,onError:e=>r(window.BLOGGER.cover),className:"cover-post"}),(0,i.jsx)(h.Z,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:(0,i.jsx)(o.Z,{sx:{flex:"1 0 auto",p:2,height:"3.5rem",overflow:"hidden"},children:(0,i.jsx)(a.Z,{variant:"h6",sx:{lineHeight:"1rem",height:"4rem",overflow:"hidden",textOverflow:"ellipsis"},children:t.title})})})]})})})}var j=n(3321),g=n(8819),f=n(1618),b=e=>{let{item:t}=e,[n,o]=(0,l.useState)(null),c=async()=>{let e=await (0,f.getArchive)(t);o(e)};return(0,l.useEffect)(()=>{c()},[t]),Array.isArray(n)&&n.length?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.Z,{sx:{mb:3},children:[(0,i.jsx)(r.Z,{avatar:(0,i.jsx)(x.Z,{icon:"tabler:grain",fontSize:20}),title:(0,i.jsx)(a.Z,{variant:"h5",sx:{fontWeight:"bold"},children:t.title})}),(n||[]).map((e,t)=>(0,i.jsx)(p,{post:e},t)),(0,i.jsx)("div",{style:{textAlign:"center",marginBottom:2},children:(0,i.jsx)(j.Z,{endIcon:(0,i.jsx)(x.Z,{icon:"tabler:chevron-down",fontSize:20}),component:u(),href:"/search/label/".concat(t.label),children:"Xem th\xeam"})})]}),(0,i.jsx)(g.Z,{})]}):(0,i.jsx)(i.Fragment,{})},Z=()=>{let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>{"object"==typeof window.BLOGGER&&window.BLOGGER.sidebar?t(window.BLOGGER.sidebar||[]):t([{title:"ĐỀ THI THỬ",label:"ĐỀ THI THỬ","max-results":10},{title:"THI ONLINE",label:"THI ONLINE","max-results":10}])},[]),e.length?e.map((e,t)=>(0,i.jsx)(b,{item:e},t)):(0,i.jsx)(i.Fragment,{})}},3629:function(e,t,n){n.d(t,{Z:function(){return ei}});var i=n(5893),l=n(7294),s=n(1163),r=n(1618),a=n(6886),x=n(8456),o=n(5861),c=n(9008),h=n.n(c),d=n(1833),m=n(7357),u=n(44),p=n(7225),j=n(5670),g=n(6242),f=n(4267),b=n(8445),Z=n(9878),v=n(8124),y=e=>{let{placeholder:t,min:n,max:l,label:s,onChange:r,value:a}=e;return(0,i.jsx)(v.Z,{value:a,required:!0,onChange:e=>r(e.target.value),label:s,type:"number",fullWidth:!0,error:!(a>=n&&a<=l),helperText:a>=n&&a<=l?"":"Gi\xe1 trị kh\xf4ng hợp lệ. Vui l\xf2ng nhập một số từ 0 đến 10.",inputProps:{min:n,max:l,step:.01,style:{textAlign:"center"}},placeholder:t})},w=n(3321),G=n(6455),S=n.n(G);let E=e=>{let{type:t}=e,[n,s]=(0,l.useState)(""),[r,x]=(0,l.useState)(""),[o,c]=(0,l.useState)(""),[h,d]=(0,l.useState)(""),[u,p]=(0,l.useState)(""),[j,g]=(0,l.useState)(""),[f,b]=(0,l.useState)(""),[Z,G]=(0,l.useState)(""),[E,P]=(0,l.useState)(""),T=e=>{e.preventDefault();let i=e=>""!==e&&parseFloat(e)>1;if(i(n)&&i(r)&&(i(o)||1!=t)&&i(h)&&i(u)&&i(j)){var l;let e=(parseFloat(h||0)+parseFloat(u||0)+parseFloat(j||0))/3;l=1==t?(parseFloat(n||0)+parseFloat(r||0)+parseFloat(o||0)+e+parseFloat(Z||0))/4:(parseFloat(n||0)+parseFloat(r||0)+e)/3+parseFloat(Z||0)/4;let i=.7*l+.3*parseFloat(f||0)+parseFloat(E||0),s=i.toFixed(2),a=(5-s).toFixed(2);s<5?S().fire({icon:"error",title:"Bạn đ\xe3 trượt tốt nghiệp!",html:"Điểm x\xe9t tốt nghiệp của bạn l\xe0: ".concat(s,".<br>Bạn cần \xedt nhất ").concat(a," điểm nữa để đỗ tốt nghiệp"),confirmButtonText:"Đ\xe3 hiểu"}):S().fire({icon:"success",title:"Bạn đ\xe3 đỗ tốt nghiệp!",html:"Điểm x\xe9t tốt nghiệp của bạn l\xe0: ".concat(s,"."),confirmButtonText:"Đ\xe3 hiểu"})}else S().fire({icon:"error",text:"Bạn đ\xe3 trượt tốt nghiệp do c\xf3 1 m\xf4n dưới hoặc bằng 1!",confirmButtonText:"Đ\xe3 hiểu"})},B=()=>{var e=JSON.parse(window.localStorage.getItem("result")||"{}");s(e.toan||""),x(e.van||""),c(e.nn||""),d(e.li||e.su||""),p(e.hoa||e.dia||""),g(e.sinh||e.gdcd||""),window.localStorage.removeItem("result")};return(0,l.useEffect)(()=>{B()},[]),(0,i.jsx)(m.Z,{sx:{flexGrow:1,mt:3},children:(0,i.jsx)("form",{onSubmit:T,children:(0,i.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(a.ZP,{item:!0,md:4,xs:12,children:(0,i.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(y,{placeholder:"Điểm m\xf4n To\xe1n",min:0,max:10,label:"Điểm To\xe1n",onChange:e=>s(e),value:n})}),(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(y,{placeholder:"Điểm m\xf4n Ngữ văn",min:0,max:10,label:"Điểm Ngữ văn",onChange:e=>x(e),value:r})}),1==t&&(0,i.jsxs)(a.ZP,{item:!0,xs:12,children:[(0,i.jsx)(y,{placeholder:"Điểm m\xf4n Ngoại ngữ",min:0,max:10,label:"Điểm Ngoại ngữ",onChange:e=>c(e),value:o})," "]})]})}),(0,i.jsx)(a.ZP,{item:!0,md:4,xs:12,children:(0,i.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(y,{placeholder:"Điểm m\xf4n Vật l\xed hoặc Lịch sử",min:0,max:10,label:"Điểm Vật l\xed hoặc Lịch sử",onChange:e=>d(e),value:h})}),(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(y,{placeholder:"Điểm m\xf4n H\xf3a học hoặc Địa l\xed",min:0,max:10,label:"Điểm H\xf3a học hoặc Địa l\xed",onChange:e=>p(e),value:u})}),(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(y,{placeholder:"Điểm m\xf4n Sinh học hoặc GDCD",min:0,max:10,label:"Điểm Sinh học hoặc GDCD",onChange:e=>g(e),value:j})})]})}),(0,i.jsx)(a.ZP,{item:!0,md:4,xs:12,children:(0,i.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(y,{placeholder:"Điểm trung b\xecnh cả năm lớp 12",min:0,max:10,label:"Điểm TB lớp 12",onChange:e=>b(e),value:f})}),(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(v.Z,{value:Z,onChange:e=>G(e.target.value),label:"Điểm khuyến kh\xedch",type:"number",fullWidth:!0,inputProps:{min:0,max:10,step:.01,style:{textAlign:"center"}},placeholder:"Điểm khuyến kh\xedch (nếu c\xf3)"})}),(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(v.Z,{value:E,onChange:e=>P(e.target.value),label:"Điểm ưu ti\xean",type:"number",fullWidth:!0,inputProps:{min:0,max:10,step:.01,style:{textAlign:"center"}},placeholder:"Điểm ưu ti\xean (nếu c\xf3)"})})]})}),(0,i.jsx)(a.ZP,{item:!0,md:12,xs:12,children:(0,i.jsx)(w.Z,{variant:"contained",fullWidth:!0,size:"large",type:"submit",children:"T\xcdNH"})})]})})})},P=()=>{let[e,t]=(0,l.useState)("1"),n=(e,n)=>{t(n)};return(0,i.jsxs)(g.Z,{sx:{mb:5},children:[(0,i.jsx)(b.Z,{style:{background:"#8E2DE2",background:"-webkit-linear-gradient(to right, #4A00E0, #8E2DE2)",background:"linear-gradient(to right, #4A00E0, #8E2DE2)"},sx:{textAlign:"center"},title:(0,i.jsx)(o.Z,{variant:"h3",sx:{textTransform:"uppercase",color:"white"},children:"C\xf4ng cụ t\xednh điểm x\xe9t tốt nghiệp THPT 2023"})}),(0,i.jsx)(f.Z,{children:(0,i.jsxs)(j.ZP,{value:e,children:[(0,i.jsxs)(p.Z,{centered:!0,onChange:n,children:[(0,i.jsx)(u.Z,{value:"1",label:"HỆ GD THPT",icon:(0,i.jsx)(Z.Z,{icon:"tabler:home-2"})}),(0,i.jsx)(u.Z,{value:"2",label:"HỆ GDTX",icon:(0,i.jsx)(Z.Z,{icon:"tabler:home-bolt"})})]}),(0,i.jsx)(E,{type:e})]})})]})},T=e=>{let{type:t}=e,[n,s]=(0,l.useState)(""),[r,x]=(0,l.useState)(""),[o,c]=(0,l.useState)(""),h=e=>{e.preventDefault();let i=parseFloat(n||0),l=parseFloat(r||0),s=parseFloat(o||0);if(1==t){var a=(5-s-.3*i)/.7*4-l,x=a.toFixed(2),c=(x/4).toFixed(2);S().fire({icon:"success",html:'<div style="text-align: left;">Điểm tổng 4 m\xf4n To\xe1n + Văn + Anh + Trung b\xecnh b\xe0i thi tổ hợp l\xe0 <b style="color:red">'.concat(x,'</b>.<br>Tức l\xe0 mỗi m\xf4n phải tr\xean 1 v\xe0 trung b\xecnh một m\xf4n <b style="color:green"> >= ').concat(c,"</b> để đỗ tốt nghiệp!</div>"),title:"Kết quả",confirmButtonText:"Đ\xe3 hiểu"})}else{var a=((5-s-.3*i)/.7-l/4)*3,x=a.toFixed(2),c=(x/3).toFixed(2);S().fire({icon:"success",html:'<div style="text-align: left;">Điểm tổng 3 b\xe0i thi l\xe0 <b style="color:red">'.concat(x,'</b><br>\n        Tức l\xe0 mỗi b\xe0i thi phải tr\xean 1 v\xe0 trung b\xecnh một b\xe0i thi <b style="color:green"> >= ').concat(c,"</b>  để đỗ tốt nghiệp!</div>"),title:"Kết quả",confirmButtonText:"Đ\xe3 hiểu"})}};return(0,i.jsx)(m.Z,{sx:{flexGrow:1,mt:3},children:(0,i.jsx)("form",{onSubmit:h,children:(0,i.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(a.ZP,{item:!0,md:4,xs:12,children:(0,i.jsx)(y,{placeholder:"Điểm trung b\xecnh cả năm lớp 12",min:0,max:10,label:"Điểm TB lớp 12",onChange:e=>s(e),value:n})}),(0,i.jsx)(a.ZP,{item:!0,md:4,xs:12,children:(0,i.jsx)(v.Z,{value:r,onChange:e=>x(e.target.value),label:"Điểm khuyến kh\xedch",type:"number",fullWidth:!0,inputProps:{min:0,max:10,step:.01,style:{textAlign:"center"}},placeholder:"Điểm khuyến kh\xedch (nếu c\xf3)"})}),(0,i.jsx)(a.ZP,{item:!0,md:4,xs:12,children:(0,i.jsx)(v.Z,{value:o,onChange:e=>c(e.target.value),label:"Điểm ưu ti\xean",type:"number",fullWidth:!0,inputProps:{min:0,max:10,step:.01,style:{textAlign:"center"}},placeholder:"Điểm ưu ti\xean (nếu c\xf3)"})}),(0,i.jsx)(a.ZP,{item:!0,md:12,xs:12,children:(0,i.jsx)(w.Z,{variant:"contained",fullWidth:!0,size:"large",type:"submit",children:"T\xcdNH"})})]})})})},B=()=>{let[e,t]=(0,l.useState)("1"),n=(e,n)=>{t(n)};return(0,i.jsxs)(g.Z,{sx:{mb:5},children:[(0,i.jsx)(b.Z,{style:{background:"#ee0979",background:"-webkit-linear-gradient(to right, #ff6a00, #ee0979)",background:"linear-gradient(to right, #ff6a00, #ee0979)"},sx:{textAlign:"center"},title:(0,i.jsx)(o.Z,{variant:"h3",sx:{textTransform:"uppercase",color:"white"},children:"C\xf4ng cụ t\xednh ngược điểm tốt nghiệp THPT 2023"})}),(0,i.jsx)(f.Z,{children:(0,i.jsxs)(j.ZP,{value:e,children:[(0,i.jsxs)(p.Z,{centered:!0,onChange:n,children:[(0,i.jsx)(u.Z,{value:"1",label:"HỆ GD THPT",icon:(0,i.jsx)(Z.Z,{icon:"tabler:home-2"})}),(0,i.jsx)(u.Z,{value:"2",label:"HỆ GDTX",icon:(0,i.jsx)(Z.Z,{icon:"tabler:home-bolt"})})]}),(0,i.jsx)(T,{type:e})]})})]})};var C=n(8819),F=()=>(0,i.jsx)(m.Z,{className:"content-center",sx:{textAlign:"center",display:"flex",justifyContent:"center"},children:(0,i.jsxs)(m.Z,{sx:{maxWidth:"950px"},children:[(0,i.jsx)(P,{}),(0,i.jsx)(C.Z,{}),(0,i.jsx)(B,{})]})}),k=()=>(0,i.jsx)(i.Fragment,{}),L=n(4612),O=n(3946),H=n(1800),I=n(2963),R=n(1664),D=n.n(R),N=n(7358),A=n(8895),z=n(2797),W=n(8462),_=n(9953),q=n(8619),V=n(7212);let M=e=>{let{post:t}=e,[n,s]=(0,l.useState)([]);(0,l.useEffect)(()=>{if(t&&t.content){let e=new DOMParser,n=e.parseFromString(t.content,"text/html"),i=n.querySelectorAll("h1, h2, h3, h4, h5, h6"),l=Array.from(i).map(e=>({text:e.textContent,level:parseInt(e.tagName.charAt(1)),id:e.id}));s(l)}},[t]);let r=(e,t)=>{e.preventDefault();let n=document.querySelector("#post-content"),i=n.querySelectorAll("h2");if(i.length>t){let e=i[t];e.scrollIntoView({behavior:"smooth"})}};return n.length?(0,i.jsx)("div",{children:(0,i.jsxs)(N.Z,{sx:{backgroundColor:"#fef6ec"},children:[(0,i.jsx)(A.Z,{expandIcon:(0,i.jsx)(Z.Z,{fontSize:"1.25rem",icon:"tabler:chevron-down"}),children:(0,i.jsx)(o.Z,{variant:"h4",sx:{fontWeight:"700!important"},children:"Mục lục"})}),(0,i.jsx)(z.Z,{children:(0,i.jsx)(W.Z,{component:"ul",children:n.map((e,t)=>(0,i.jsx)(V.ZP,{disablePadding:!0,onClick:e=>r(e,t),children:(0,i.jsx)(q.Z,{children:(0,i.jsx)(_.Z,{primary:e.text})})},t))})})]})}):null},Y=()=>((0,l.useEffect)(()=>{let e=document.createElement("script");return e.src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js",e.async=!0,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),(0,i.jsx)("span",{id:"busuanzi_container_site_pv",children:(0,i.jsx)(w.Z,{variant:"tonal",size:"small",startIcon:(0,i.jsx)(Z.Z,{icon:"tabler:eye"}),children:(0,i.jsx)(o.Z,{variant:"body1",id:"busuanzi_value_page_pv"})})})),K=e=>{let{post:t,onShare:n}=e;return(0,i.jsxs)("div",{style:{mb:3},children:[(0,i.jsx)(f.Z,{children:(0,i.jsxs)(I.Z,{"aria-label":"breadcrumb",children:[(0,i.jsx)(D(),{underline:"hover",color:"success",href:"/",passHref:!0,children:"Trang chủ"}),t.category.map((e,t)=>(0,i.jsx)(D(),{underline:"hover",color:"inherit",href:"/search/label/"+e,passHref:!0,children:e},t))]})}),(0,i.jsx)(b.Z,{title:(0,i.jsx)(o.Z,{variant:"h1",sx:{lineHeight:"1.2",fontSize:"1.5rem"},className:"post-title",children:t.title})}),(0,i.jsxs)(f.Z,{className:"content-post",children:[(0,i.jsxs)(m.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",mb:5},children:[(0,i.jsxs)(m.Z,{sx:{mr:2,display:"flex",alignItems:"center"},children:[(0,i.jsx)(Z.Z,{icon:"tabler:discount-check-filled",style:{color:"#2c4fe9"}}),(0,i.jsx)(o.Z,{variant:"body2",sx:{mx:2},children:(window.BLOGGER||{}).author||t.author}),(0,i.jsx)(Z.Z,{icon:"tabler:point-filled",fontSize:10}),(0,i.jsx)(o.Z,{sx:{ml:2},children:(0,H.default)(t.updated).locale("vi").format("HH:mm DD/MM/YYYY")})]}),(0,i.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",flexGrow:1},children:[(0,i.jsx)(Y,{}),(0,i.jsx)(L.Z,{readOnly:!0,value:4,name:"read-only",sx:{mr:2,ml:2}}),(0,i.jsx)(O.Z,{onClick:()=>n(t),children:(0,i.jsx)(Z.Z,{icon:"tabler:share",fontSize:20})})]})]}),(0,i.jsx)(M,{post:t}),(0,i.jsx)(o.Z,{variant:"subtitle1",id:"post-content",sx:{mb:3.25,fontSize:"1.25rem",lineHeight:"1.75rem"},dangerouslySetInnerHTML:{__html:t.content}})]})]})};var J=n(5941),X=n(8771);let U=(0,l.lazy)(()=>n.e(621).then(n.bind(n,5621))),Q=(0,l.lazy)(()=>n.e(443).then(n.bind(n,5179))),$=e=>{let{onShare:t,post:n,type:l}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(K,{post:n,onShare:t}),(0,i.jsx)(C.Z,{}),"posts"==l?(0,i.jsx)(Q,{post:n,onShare:t,number:6}):null,(0,i.jsx)(U,{post:n})]})},ee=e=>{let{post:t,type:n}=e,[s,r]=(0,l.useState)({});return(0,i.jsxs)(a.ZP,{container:!0,spacing:3,children:["posts"==n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.ZP,{item:!0,xs:12,md:8,sx:{display:"flex",flexDirection:"column"},children:(0,i.jsx)($,{post:t,onShare:e=>r(e),type:n})}),(0,i.jsx)(a.ZP,{item:!0,xs:12,md:4,children:(0,i.jsx)(X.Z,{})})]}):(0,i.jsx)(a.ZP,{item:!0,xs:12,sx:{display:"flex",flexDirection:"column"},children:(0,i.jsx)($,{post:t,onShare:e=>r(e),type:n})}),(0,i.jsx)(J.Z,{share:s,onClose:()=>r({})})]})},et=e=>{let{slug:t,type:n}=e;return"posts"==n?null:"diem-thi-thpt-quoc-gia.html"==t?(0,i.jsx)(d.Z,{}):"tinh-diem-tot-nghiep-thpt.html"==t?(0,i.jsx)(F,{}):"xep-hang-diem-thi-thpt-quoc-gia.html"==t?(0,i.jsx)(k,{}):null},en=()=>(0,i.jsxs)(a.ZP,{item:!0,xs:12,sx:{alignItems:"center",flexDirection:"column",textAlign:"center"},children:[(0,i.jsx)(x.Z,{}),(0,i.jsx)(o.Z,{variant:"h4",children:"VUI L\xd2NG ĐỢI TRONG GI\xc2Y L\xc1T"})]});var ei=()=>{let e=(0,s.useRouter)(),[t,n]=(0,l.useState)(""),[a,x]=(0,l.useState)("pages"),[o,c]=(0,l.useState)(null);return(0,l.useEffect)(()=>{n(e.query.slug||"");let t=async(e,t)=>{x(t),c(null);var n=await (0,r.getPage)(e,t);c(n),"object"==typeof window.BLOGGER&&(window.BLOGGER.title=n.title)};"object"==typeof window.BLOGGER&&(window.BLOGGER.pageId?t(window.BLOGGER.pageId,"pages"):window.BLOGGER.postId&&t(window.BLOGGER.postId,"posts"))},[e.query]),(0,i.jsxs)(l.Fragment,{children:[o&&(0,i.jsx)(h(),{children:(0,i.jsx)("title",{children:o.title})}),(0,i.jsx)(et,{slug:t,type:a}),o?(0,i.jsx)(ee,{post:o,type:a}):(0,i.jsx)(en,{})]})}}}]);