"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{8771:function(e,t,n){n.d(t,{Z:function(){return Z}});var i=n(5893),l=n(7294),s=n(6242),r=n(8445),a=n(5861),o=n(9878),x=n(4267),c=n(7357),d=n(9974),h=n(1664),m=n.n(h),u=n(2679);function p(e){let{post:t}=e,[n,s]=(0,l.useState)(""),r=()=>{"object"!=typeof window.BLOGGER&&(window.BLOGGER={}),window.BLOGGER.postId=t.id,window.BLOGGER.title=t.title,window.BLOGGER.pageId=""};return(0,i.jsx)("div",{style:{borderTop:"1px solid rgba(47, 43, 61, 0.12)",padding:"5px"},children:(0,i.jsx)(m(),{href:t.link.replace(window.location.origin,""),passHref:!0,style:{textDecoration:"none"},children:(0,i.jsxs)(d.Z,{component:"div",sx:{display:"flex",mb:2},onClick:r,children:[(0,i.jsx)(u.LazyLoadImage,{src:n||t.cover,alt:t.title,effect:"blur",width:120,height:70,onError:()=>{s(window.BLOGGER.cover)},className:"cover-post"}),(0,i.jsx)(c.Z,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:(0,i.jsx)(x.Z,{sx:{flex:"1 0 auto",p:2,height:"3.5rem",overflow:"hidden"},children:(0,i.jsx)(a.Z,{variant:"h6",sx:{lineHeight:"1rem",height:"4rem",overflow:"hidden",textOverflow:"ellipsis"},children:t.title})})})]})})})}n(6302);var j=n(3321),g=n(8819),f=n(1618),b=e=>{let{item:t}=e,[n,x]=(0,l.useState)(null),c=async()=>{let e=await (0,f.getArchive)(t,!1);x(e)};return(0,l.useEffect)(()=>{c()},[t]),Array.isArray(n)&&n.length?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.Z,{sx:{mb:3},children:[(0,i.jsx)(r.Z,{avatar:(0,i.jsx)(o.Z,{icon:"tabler:grain",fontSize:20}),title:(0,i.jsx)(a.Z,{variant:"h5",sx:{fontWeight:"bold"},className:"post-title",children:t.title})}),(n||[]).map((e,t)=>(0,i.jsx)(p,{post:e},t)),(0,i.jsx)("div",{style:{textAlign:"center",marginBottom:2},children:(0,i.jsx)(j.Z,{endIcon:(0,i.jsx)(o.Z,{icon:"tabler:chevron-down",fontSize:20}),component:m(),href:"/search/label/".concat(t.label),children:"Xem th\xeam"})})]}),(0,i.jsx)(g.Z,{})]}):(0,i.jsx)(i.Fragment,{})},Z=()=>{let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>{"object"==typeof window.BLOGGER&&window.BLOGGER.sidebar?t(window.BLOGGER.sidebar||[]):t([{title:"ĐỀ THI & Đ\xc1P \xc1N",label:"ĐỀ THI","max-results":15},{title:"TH\xd4NG TIN TUYỂN SINH",label:"TUYỂN SINH","max-results":15},{title:"TH\xd4NG TIN ĐIỂM CHUẨN",label:"ĐIỂM CHUẨN","max-results":15}])},[]),e.length?e.map((e,t)=>(0,i.jsx)(b,{item:e},t)):(0,i.jsx)(i.Fragment,{})}},1071:function(e,t,n){n.r(t),n.d(t,{default:function(){return eo}});var i=n(5893),l=n(7294),s=n(1163),r=n(1618),a=n(6886),o=n(8456),x=n(5861),c=n(9008),d=n.n(c),h=n(1833),m=n(7357),u=n(44),p=n(7225),j=n(5670),g=n(6242),f=n(4267),b=n(8445),Z=n(9878),v=n(8124),y=e=>{let{placeholder:t,min:n,max:l,label:s,onChange:r,value:a}=e;return(0,i.jsx)(v.Z,{value:a,required:!0,onChange:e=>r(e.target.value),label:s,type:"number",fullWidth:!0,error:!(a>=n&&a<=l),helperText:a>=n&&a<=l?"":"Gi\xe1 trị kh\xf4ng hợp lệ. Vui l\xf2ng nhập một số từ 0 đến 10.",inputProps:{min:n,max:l,step:.01,style:{textAlign:"center"}},placeholder:t})},w=n(3321),G=n(6455),S=n.n(G);let E=e=>{let{type:t}=e,[n,s]=(0,l.useState)(""),[r,o]=(0,l.useState)(""),[x,c]=(0,l.useState)(""),[d,h]=(0,l.useState)(""),[u,p]=(0,l.useState)(""),[j,g]=(0,l.useState)(""),[f,b]=(0,l.useState)(""),[Z,G]=(0,l.useState)(""),[E,P]=(0,l.useState)(""),T=e=>{e.preventDefault();let i=e=>""!==e&&parseFloat(e)>1;if(i(n)&&i(r)&&(i(x)||1!=t)&&i(d)&&i(u)&&i(j)){var l;let e=(parseFloat(d||0)+parseFloat(u||0)+parseFloat(j||0))/3;l=1==t?(parseFloat(n||0)+parseFloat(r||0)+parseFloat(x||0)+e+parseFloat(Z||0))/4:(parseFloat(n||0)+parseFloat(r||0)+e)/3+parseFloat(Z||0)/4;let i=.7*l+.3*parseFloat(f||0)+parseFloat(E||0),s=i.toFixed(2),a=(5-s).toFixed(2);s<5?S().fire({icon:"error",title:"Bạn đ\xe3 trượt tốt nghiệp!",html:"Điểm x\xe9t tốt nghiệp của bạn l\xe0: ".concat(s,".<br>Bạn cần \xedt nhất ").concat(a," điểm nữa để đỗ tốt nghiệp"),confirmButtonText:"Đ\xe3 hiểu"}):S().fire({icon:"success",title:"Bạn đ\xe3 đỗ tốt nghiệp!",html:"Điểm x\xe9t tốt nghiệp của bạn l\xe0: ".concat(s,"."),confirmButtonText:"Đ\xe3 hiểu"})}else S().fire({icon:"error",text:"Bạn đ\xe3 trượt tốt nghiệp do c\xf3 1 m\xf4n dưới hoặc bằng 1!",confirmButtonText:"Đ\xe3 hiểu"})},B=()=>{var e=JSON.parse(window.localStorage.getItem("result")||"{}");s(e.toan||""),o(e.van||""),c(e.nn||""),h(e.li||e.su||""),p(e.hoa||e.dia||""),g(e.sinh||e.gdcd||""),window.localStorage.removeItem("result")};return(0,l.useEffect)(()=>{B()},[]),(0,i.jsx)(m.Z,{sx:{flexGrow:1,mt:3},children:(0,i.jsx)("form",{onSubmit:T,children:(0,i.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(a.ZP,{item:!0,md:4,xs:12,children:(0,i.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(y,{placeholder:"Điểm m\xf4n To\xe1n",min:0,max:10,label:"Điểm To\xe1n",onChange:e=>s(e),value:n})}),(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(y,{placeholder:"Điểm m\xf4n Ngữ văn",min:0,max:10,label:"Điểm Ngữ văn",onChange:e=>o(e),value:r})}),1==t&&(0,i.jsxs)(a.ZP,{item:!0,xs:12,children:[(0,i.jsx)(y,{placeholder:"Điểm m\xf4n Ngoại ngữ",min:0,max:10,label:"Điểm Ngoại ngữ",onChange:e=>c(e),value:x})," "]})]})}),(0,i.jsx)(a.ZP,{item:!0,md:4,xs:12,children:(0,i.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(y,{placeholder:"Điểm m\xf4n Vật l\xed hoặc Lịch sử",min:0,max:10,label:"Điểm Vật l\xed hoặc Lịch sử",onChange:e=>h(e),value:d})}),(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(y,{placeholder:"Điểm m\xf4n H\xf3a học hoặc Địa l\xed",min:0,max:10,label:"Điểm H\xf3a học hoặc Địa l\xed",onChange:e=>p(e),value:u})}),(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(y,{placeholder:"Điểm m\xf4n Sinh học hoặc GDCD",min:0,max:10,label:"Điểm Sinh học hoặc GDCD",onChange:e=>g(e),value:j})})]})}),(0,i.jsx)(a.ZP,{item:!0,md:4,xs:12,children:(0,i.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(y,{placeholder:"Điểm trung b\xecnh cả năm lớp 12",min:0,max:10,label:"Điểm TB lớp 12",onChange:e=>b(e),value:f})}),(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(v.Z,{value:Z,onChange:e=>G(e.target.value),label:"Điểm khuyến kh\xedch",type:"number",fullWidth:!0,inputProps:{min:0,max:10,step:.01,style:{textAlign:"center"}},placeholder:"Điểm khuyến kh\xedch (nếu c\xf3)"})}),(0,i.jsx)(a.ZP,{item:!0,xs:12,children:(0,i.jsx)(v.Z,{value:E,onChange:e=>P(e.target.value),label:"Điểm ưu ti\xean",type:"number",fullWidth:!0,inputProps:{min:0,max:10,step:.01,style:{textAlign:"center"}},placeholder:"Điểm ưu ti\xean (nếu c\xf3)"})})]})}),(0,i.jsx)(a.ZP,{item:!0,md:12,xs:12,children:(0,i.jsx)(w.Z,{variant:"contained",fullWidth:!0,size:"large",type:"submit",children:"T\xcdNH"})})]})})})},P=()=>{let[e,t]=(0,l.useState)("1"),n=(e,n)=>{t(n)};return(0,i.jsxs)(g.Z,{sx:{mb:5},children:[(0,i.jsx)(b.Z,{style:{background:"#8E2DE2",background:"-webkit-linear-gradient(to right, #4A00E0, #8E2DE2)",background:"linear-gradient(to right, #4A00E0, #8E2DE2)"},sx:{textAlign:"center"},title:(0,i.jsx)(x.Z,{variant:"h3",sx:{textTransform:"uppercase",color:"white"},children:"C\xf4ng cụ t\xednh điểm x\xe9t tốt nghiệp THPT 2023"})}),(0,i.jsx)(f.Z,{children:(0,i.jsxs)(j.ZP,{value:e,children:[(0,i.jsxs)(p.Z,{centered:!0,onChange:n,children:[(0,i.jsx)(u.Z,{value:"1",label:"HỆ GD THPT",icon:(0,i.jsx)(Z.Z,{icon:"tabler:home-2"})}),(0,i.jsx)(u.Z,{value:"2",label:"HỆ GDTX",icon:(0,i.jsx)(Z.Z,{icon:"tabler:home-bolt"})})]}),(0,i.jsx)(E,{type:e})]})})]})},T=e=>{let{type:t}=e,[n,s]=(0,l.useState)(""),[r,o]=(0,l.useState)(""),[x,c]=(0,l.useState)(""),d=e=>{e.preventDefault();let i=parseFloat(n||0),l=parseFloat(r||0),s=parseFloat(x||0);if(1==t){var a=(5-s-.3*i)/.7*4-l,o=a.toFixed(2),c=(o/4).toFixed(2);S().fire({icon:"success",html:'<div style="text-align: left;">Điểm tổng 4 m\xf4n To\xe1n + Văn + Anh + Trung b\xecnh b\xe0i thi tổ hợp l\xe0 <b style="color:red">'.concat(o,'</b>.<br>Tức l\xe0 mỗi m\xf4n phải tr\xean 1 v\xe0 trung b\xecnh một m\xf4n <b style="color:green"> >= ').concat(c,"</b> để đỗ tốt nghiệp!</div>"),title:"Kết quả",confirmButtonText:"Đ\xe3 hiểu"})}else{var a=((5-s-.3*i)/.7-l/4)*3,o=a.toFixed(2),c=(o/3).toFixed(2);S().fire({icon:"success",html:'<div style="text-align: left;">Điểm tổng 3 b\xe0i thi l\xe0 <b style="color:red">'.concat(o,'</b><br>\n        Tức l\xe0 mỗi b\xe0i thi phải tr\xean 1 v\xe0 trung b\xecnh một b\xe0i thi <b style="color:green"> >= ').concat(c,"</b>  để đỗ tốt nghiệp!</div>"),title:"Kết quả",confirmButtonText:"Đ\xe3 hiểu"})}};return(0,i.jsx)(m.Z,{sx:{flexGrow:1,mt:3},children:(0,i.jsx)("form",{onSubmit:d,children:(0,i.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(a.ZP,{item:!0,md:4,xs:12,children:(0,i.jsx)(y,{placeholder:"Điểm trung b\xecnh cả năm lớp 12",min:0,max:10,label:"Điểm TB lớp 12",onChange:e=>s(e),value:n})}),(0,i.jsx)(a.ZP,{item:!0,md:4,xs:12,children:(0,i.jsx)(v.Z,{value:r,onChange:e=>o(e.target.value),label:"Điểm khuyến kh\xedch",type:"number",fullWidth:!0,inputProps:{min:0,max:10,step:.01,style:{textAlign:"center"}},placeholder:"Điểm khuyến kh\xedch (nếu c\xf3)"})}),(0,i.jsx)(a.ZP,{item:!0,md:4,xs:12,children:(0,i.jsx)(v.Z,{value:x,onChange:e=>c(e.target.value),label:"Điểm ưu ti\xean",type:"number",fullWidth:!0,inputProps:{min:0,max:10,step:.01,style:{textAlign:"center"}},placeholder:"Điểm ưu ti\xean (nếu c\xf3)"})}),(0,i.jsx)(a.ZP,{item:!0,md:12,xs:12,children:(0,i.jsx)(w.Z,{variant:"contained",fullWidth:!0,size:"large",type:"submit",children:"T\xcdNH"})})]})})})},B=()=>{let[e,t]=(0,l.useState)("1"),n=(e,n)=>{t(n)};return(0,i.jsxs)(g.Z,{sx:{mb:5},children:[(0,i.jsx)(b.Z,{style:{background:"#ee0979",background:"-webkit-linear-gradient(to right, #ff6a00, #ee0979)",background:"linear-gradient(to right, #ff6a00, #ee0979)"},sx:{textAlign:"center"},title:(0,i.jsx)(x.Z,{variant:"h3",sx:{textTransform:"uppercase",color:"white"},children:"C\xf4ng cụ t\xednh ngược điểm tốt nghiệp THPT 2023"})}),(0,i.jsx)(f.Z,{children:(0,i.jsxs)(j.ZP,{value:e,children:[(0,i.jsxs)(p.Z,{centered:!0,onChange:n,children:[(0,i.jsx)(u.Z,{value:"1",label:"HỆ GD THPT",icon:(0,i.jsx)(Z.Z,{icon:"tabler:home-2"})}),(0,i.jsx)(u.Z,{value:"2",label:"HỆ GDTX",icon:(0,i.jsx)(Z.Z,{icon:"tabler:home-bolt"})})]}),(0,i.jsx)(T,{type:e})]})})]})};var I=n(8819),N=()=>(0,i.jsx)(m.Z,{className:"content-center",sx:{textAlign:"center",display:"flex",justifyContent:"center"},children:(0,i.jsxs)(m.Z,{sx:{maxWidth:"950px"},children:[(0,i.jsx)(P,{}),(0,i.jsx)(I.Z,{}),(0,i.jsx)(B,{})]})}),C=()=>(0,i.jsx)(i.Fragment,{}),k=n(2679),L=n(2963),F=n(1664),H=n.n(F),A=e=>{let{post:t}=e;return(0,i.jsxs)(L.Z,{"aria-label":"breadcrumb",children:[(0,i.jsx)(H(),{underline:"hover",color:"success",href:"/",passHref:!0,children:"Trang chủ"}),(t.category||[]).map((e,t)=>(0,i.jsx)(H(),{underline:"hover",color:"inherit",href:"/search/label/"+e,passHref:!0,children:e},t))]})},O=n(7358),z=n(8895),R=n(2797),D=n(8462),W=n(9953),_=n(8619),q=n(7212);let U=e=>{let{post:t}=e,[n,s]=(0,l.useState)([]);(0,l.useEffect)(()=>{if(t&&t.content){let e=new DOMParser,n=e.parseFromString(t.content,"text/html"),i=n.querySelectorAll("h1, h2, h3, h4, h5, h6"),l=Array.from(i).map(e=>({text:e.textContent,level:parseInt(e.tagName.charAt(1)),id:e.id}));s(l)}},[t]);let r=(e,t)=>{e.preventDefault();let n=document.querySelector("#post-content"),i=n.querySelectorAll("h2");if(i.length>t){let e=i[t];e.scrollIntoView({behavior:"smooth"})}};return n.length?(0,i.jsx)("div",{children:(0,i.jsxs)(O.Z,{sx:{backgroundColor:"#fef6ec"},children:[(0,i.jsx)(z.Z,{expandIcon:(0,i.jsx)(Z.Z,{fontSize:"1.25rem",icon:"tabler:chevron-down"}),children:(0,i.jsx)(x.Z,{variant:"h4",sx:{fontWeight:"700!important"},children:"Mục lục"})}),(0,i.jsx)(R.Z,{children:(0,i.jsx)(D.Z,{component:"ul",children:n.map((e,t)=>(0,i.jsx)(q.ZP,{disablePadding:!0,onClick:e=>r(e,t),children:(0,i.jsx)(_.Z,{children:(0,i.jsx)(W.Z,{primary:e.text})})},t))})})]})}):null};var M=n(3946),Y=n(1800);let V=()=>((0,l.useEffect)(()=>{let e=document.createElement("script");return e.src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js",e.async=!0,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),(0,i.jsxs)("span",{id:"busuanzi_container_site_pv",style:{display:"flex!important"},children:[(0,i.jsx)(Z.Z,{icon:"tabler:eye",fontSize:18}),(0,i.jsx)(x.Z,{sx:{ml:1},id:"busuanzi_value_page_pv",children:"      "})]}));var X=n(1496);let K=(0,X.ZP)("div")(e=>{let{theme:t}=e;return{display:"flex",justifyContent:"center",alignItems:"center",[t.breakpoints.down("sm")]:{display:"none"}}});var J=e=>{let{post:t,onShare:n,changeFont:l}=e;return(0,i.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap",mb:5},children:[(0,i.jsxs)(m.Z,{sx:{mr:2,display:"flex",alignItems:"center"},children:[(0,i.jsx)(Z.Z,{icon:"tabler:discount-check-filled",style:{color:"#2c4fe9"}}),(0,i.jsxs)(K,{children:[(0,i.jsx)(x.Z,{variant:"body2",sx:{mx:2},children:(window.BLOGGER||{}).author||t.author}),(0,i.jsx)(Z.Z,{icon:"tabler:point-filled",fontSize:10})]}),(0,i.jsx)(x.Z,{sx:{mx:2},children:(0,Y.default)(t.updated).locale("vi").format("HH:mm DD/MM/YYYY")}),(0,i.jsx)(V,{})]}),(0,i.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center",marginLeft:"auto"},children:[(0,i.jsx)(M.Z,{size:"small",onClick:()=>l(-2),children:(0,i.jsx)(Z.Z,{icon:"tabler:text-decrease",fontSize:16})}),(0,i.jsx)(M.Z,{size:"small",onClick:()=>l(2),children:(0,i.jsx)(Z.Z,{icon:"tabler:text-increase",fontSize:22})}),(0,i.jsx)(M.Z,{onClick:()=>n(t),size:"small",children:(0,i.jsx)(Z.Z,{icon:"tabler:share",fontSize:20})})]})]})};let Q=e=>{let{post:t,onShare:n}=e,[s,r]=(0,l.useState)(18),a=e=>{r(t=>t+e>=14&&t+e<=26?t+e:t)};return(0,i.jsxs)("div",{style:{mb:3},children:[(0,i.jsx)(f.Z,{children:(0,i.jsx)(A,{post:t})}),(0,i.jsx)(b.Z,{title:(0,i.jsx)(x.Z,{variant:"h1",sx:{lineHeight:"1.25",fontSize:"1.75rem",fontWeight:700,textAlign:"justify"},className:"post-title",children:t.title})}),(0,i.jsxs)(f.Z,{className:"content-post",children:[(0,i.jsx)(J,{post:t,onShare:()=>n(t),changeFont:a}),(0,i.jsx)(U,{post:t}),(0,i.jsx)(x.Z,{variant:"subtitle1",id:"post-content",sx:{mb:3.25,fontSize:s+"px",lineHeight:"1.75rem"},dangerouslySetInnerHTML:{__html:t.content}})]})]})};var $=e=>{let{post:t}=e;return(0,l.useEffect)(()=>{if("object"==typeof window.BLOGGER&&window.BLOGGER.appId){var e,t,n,i,l;window.fbAsyncInit=function(){window.FB.init({appId:window.BLOGGER.appId,autoLogAppEvents:!0,xfbml:!0,version:"v17.0"})},e=document,t="script",n="facebook-jssdk",l=e.getElementsByTagName(t)[0],e.getElementById(n)||((i=e.createElement(t)).id=n,i.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0&appId=".concat(window.BLOGGER.appId,"&autoLogAppEvents=1"),l.parentNode.insertBefore(i,l))}},[]),(0,i.jsxs)(g.Z,{sx:{mb:3},children:[(0,i.jsx)(b.Z,{avatar:(0,i.jsx)(Z.Z,{icon:"tabler:message-dots",fontSize:20}),title:(0,i.jsx)(x.Z,{variant:"h5",sx:{fontWeight:"bold"},className:"post-title",children:"B\xccNH LUẬN"})}),(0,i.jsx)("div",{className:"fb-comments","data-width":"100%","data-href":t.link,"data-numposts":"5"})]})},ee=n(2480),et=e=>{let{post:t,onShare:n,number:s=6}=e,[o,c]=(0,l.useState)([]),d=async()=>{c(await (0,r.getRelated)({number:s,label:t.category[t.category.length-1]}))};return(0,l.useEffect)(()=>{t.id&&d()},[t]),o.length?(0,i.jsxs)("div",{style:{marginBottom:3},children:[(0,i.jsx)(b.Z,{avatar:(0,i.jsx)(Z.Z,{icon:"tabler:circles-relation",fontSize:20}),title:(0,i.jsx)(x.Z,{variant:"h5",sx:{fontWeight:"bold"},className:"post-title",children:"B\xc0I LI\xcaN QUAN"})}),(0,i.jsx)(a.ZP,{container:!0,spacing:3,children:(o||[]).map((e,t)=>(0,i.jsx)(a.ZP,{item:!0,xs:12,md:6,sm:6,children:(0,i.jsx)(ee.Z,{post:e,onShare:n})},t))})]}):(0,i.jsx)(i.Fragment,{})},en=n(5941),ei=n(8771);let el=e=>{let{onShare:t,post:n,type:l}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Q,{post:n,onShare:t}),(0,i.jsx)(I.Z,{}),"posts"==l?(0,i.jsx)(et,{post:n,onShare:t,number:6}):null,(0,i.jsx)(k.LazyLoadComponent,{children:(0,i.jsx)($,{post:n})})]})},es=e=>{let{post:t,type:n}=e,[s,r]=(0,l.useState)({});return(0,i.jsxs)(a.ZP,{container:!0,spacing:3,children:["posts"==n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.ZP,{item:!0,xs:12,md:8,sx:{display:"flex",flexDirection:"column"},children:(0,i.jsx)(el,{post:t,onShare:e=>r(e),type:n})}),(0,i.jsx)(a.ZP,{item:!0,xs:12,md:4,children:(0,i.jsx)(ei.Z,{})})]}):(0,i.jsx)(a.ZP,{item:!0,xs:12,sx:{display:"flex",flexDirection:"column"},children:(0,i.jsx)(el,{post:t,onShare:e=>r(e),type:n})}),(0,i.jsx)(en.Z,{share:s,onClose:()=>r({})})]})},er=e=>{let{slug:t,type:n}=e;return"posts"==n?null:"diem-thi-thpt-quoc-gia.html"==t?(0,i.jsx)(h.Z,{}):"tinh-diem-tot-nghiep-thpt.html"==t?(0,i.jsx)(N,{}):"xep-hang-diem-thi-thpt-quoc-gia.html"==t?(0,i.jsx)(C,{}):null},ea=()=>(0,i.jsxs)(a.ZP,{item:!0,xs:12,sx:{alignItems:"center",flexDirection:"column",textAlign:"center"},children:[(0,i.jsx)(o.Z,{}),(0,i.jsx)(x.Z,{variant:"h4",children:"VUI L\xd2NG ĐỢI TRONG GI\xc2Y L\xc1T"})]});var eo=()=>{let e=(0,s.useRouter)(),[t,n]=(0,l.useState)(""),[a,o]=(0,l.useState)("pages"),[x,c]=(0,l.useState)(null);return(0,l.useEffect)(()=>{n(e.query.slug||"");let t=async(e,t)=>{o(t),c(null);var n=await (0,r.getPage)(e,t);c(n),"object"==typeof window.BLOGGER&&(window.BLOGGER.title=n.title)};"object"==typeof window.BLOGGER&&(window.BLOGGER.pageId?t(window.BLOGGER.pageId,"pages"):window.BLOGGER.postId&&t(window.BLOGGER.postId,"posts"))},[e.query]),(0,i.jsxs)(l.Fragment,{children:[x&&(0,i.jsx)(d(),{children:(0,i.jsx)("title",{children:x.title})}),(0,i.jsx)(er,{slug:t,type:a}),x?(0,i.jsx)(es,{post:x,type:a}):(0,i.jsx)(ea,{})]})}}}]);