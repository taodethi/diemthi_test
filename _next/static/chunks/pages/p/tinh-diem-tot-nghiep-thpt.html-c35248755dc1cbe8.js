(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[639],{6623:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/p/tinh-diem-tot-nghiep-thpt.html",function(){return n(6990)}])},6990:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var i=n(5893),l=n(7357),a=n(7294),r=n(44),x=n(7225),s=n(5670),c=n(5861),o=n(6242),h=n(4267),m=n(8445),u=n(9878),d=n(6886),p=n(5584),g=e=>{let{placeholder:t,min:n,max:l,label:a,onChange:r,value:x}=e;return(0,i.jsx)(p.Z,{value:x,required:!0,onChange:e=>r(e.target.value),label:a,type:"number",fullWidth:!0,error:!(x>=n&&x<=l),helperText:x>=n&&x<=l?"":"Gi\xe1 trị kh\xf4ng hợp lệ. Vui l\xf2ng nhập một số từ 0 đến 10.",inputProps:{min:n,max:l,step:.01,style:{textAlign:"center"}},placeholder:t})},b=n(3321),j=n(6455),f=n.n(j);let Z=e=>{let{type:t}=e,[n,r]=(0,a.useState)(""),[x,s]=(0,a.useState)(""),[c,o]=(0,a.useState)(""),[h,m]=(0,a.useState)(""),[u,j]=(0,a.useState)(""),[Z,v]=(0,a.useState)(""),[P,T]=(0,a.useState)(""),[y,F]=(0,a.useState)(""),[k,C]=(0,a.useState)(""),S=e=>{e.preventDefault();let i=e=>""!==e&&parseFloat(e)>1;if(i(n)&&i(x)&&(i(c)||1!=t)&&i(h)&&i(u)&&i(Z)){var l;let e=(parseFloat(h||0)+parseFloat(u||0)+parseFloat(Z||0))/3;l=1==t?(parseFloat(n||0)+parseFloat(x||0)+parseFloat(c||0)+e+parseFloat(y||0))/4:(parseFloat(n||0)+parseFloat(x||0)+e)/3+parseFloat(y||0)/4;let i=.7*l+.3*parseFloat(P||0)+parseFloat(k||0),a=i.toFixed(2),r=(5-a).toFixed(2);a<5?f().fire({icon:"error",title:"Bạn đ\xe3 trượt tốt nghiệp!",html:"Điểm x\xe9t tốt nghiệp của bạn l\xe0: ".concat(a,".<br>Bạn cần \xedt nhất ").concat(r," điểm nữa để đỗ tốt nghiệp"),confirmButtonText:"Đ\xe3 hiểu"}):f().fire({icon:"success",title:"Bạn đ\xe3 đỗ tốt nghiệp!",html:"Điểm x\xe9t tốt nghiệp của bạn l\xe0: ".concat(a,"."),confirmButtonText:"Đ\xe3 hiểu"})}else f().fire({icon:"error",text:"Bạn đ\xe3 trượt tốt nghiệp do c\xf3 1 m\xf4n dưới hoặc bằng 1!",confirmButtonText:"Đ\xe3 hiểu"})},w=()=>{var e=JSON.parse(window.localStorage.getItem("result")||"{}");r(e.toan||""),s(e.van||""),o(e.nn||""),m(e.li||e.su||""),j(e.hoa||e.dia||""),v(e.sinh||e.gdcd||""),window.localStorage.removeItem("result")};return(0,a.useEffect)(()=>{w()},[]),(0,i.jsx)(l.Z,{sx:{flexGrow:1,mt:3},children:(0,i.jsx)("form",{onSubmit:S,children:(0,i.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(d.ZP,{item:!0,md:4,xs:12,children:(0,i.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(d.ZP,{item:!0,xs:12,children:(0,i.jsx)(g,{placeholder:"Điểm m\xf4n To\xe1n",min:0,max:10,label:"Điểm To\xe1n",onChange:e=>r(e),value:n})}),(0,i.jsx)(d.ZP,{item:!0,xs:12,children:(0,i.jsx)(g,{placeholder:"Điểm m\xf4n Ngữ văn",min:0,max:10,label:"Điểm Ngữ văn",onChange:e=>s(e),value:x})}),1==t&&(0,i.jsxs)(d.ZP,{item:!0,xs:12,children:[(0,i.jsx)(g,{placeholder:"Điểm m\xf4n Ngoại ngữ",min:0,max:10,label:"Điểm Ngoại ngữ",onChange:e=>o(e),value:c})," "]})]})}),(0,i.jsx)(d.ZP,{item:!0,md:4,xs:12,children:(0,i.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(d.ZP,{item:!0,xs:12,children:(0,i.jsx)(g,{placeholder:"Điểm m\xf4n Vật l\xed hoặc Lịch sử",min:0,max:10,label:"Điểm Vật l\xed hoặc Lịch sử",onChange:e=>m(e),value:h})}),(0,i.jsx)(d.ZP,{item:!0,xs:12,children:(0,i.jsx)(g,{placeholder:"Điểm m\xf4n H\xf3a học hoặc Địa l\xed",min:0,max:10,label:"Điểm H\xf3a học hoặc Địa l\xed",onChange:e=>j(e),value:u})}),(0,i.jsx)(d.ZP,{item:!0,xs:12,children:(0,i.jsx)(g,{placeholder:"Điểm m\xf4n Sinh học hoặc GDCD",min:0,max:10,label:"Điểm Sinh học hoặc GDCD",onChange:e=>v(e),value:Z})})]})}),(0,i.jsx)(d.ZP,{item:!0,md:4,xs:12,children:(0,i.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(d.ZP,{item:!0,xs:12,children:(0,i.jsx)(g,{placeholder:"Điểm trung b\xecnh cả năm lớp 12",min:0,max:10,label:"Điểm TB lớp 12",onChange:e=>T(e),value:P})}),(0,i.jsx)(d.ZP,{item:!0,xs:12,children:(0,i.jsx)(p.Z,{value:y,onChange:e=>F(e.target.value),label:"Điểm khuyến kh\xedch",type:"number",fullWidth:!0,inputProps:{min:0,max:10,step:.01,style:{textAlign:"center"}},placeholder:"Điểm khuyến kh\xedch (nếu c\xf3)"})}),(0,i.jsx)(d.ZP,{item:!0,xs:12,children:(0,i.jsx)(p.Z,{value:k,onChange:e=>C(e.target.value),label:"Điểm ưu ti\xean",type:"number",fullWidth:!0,inputProps:{min:0,max:10,step:.01,style:{textAlign:"center"}},placeholder:"Điểm ưu ti\xean (nếu c\xf3)"})})]})}),(0,i.jsx)(d.ZP,{item:!0,md:12,xs:12,children:(0,i.jsx)(b.Z,{variant:"contained",fullWidth:!0,size:"large",type:"submit",children:"T\xcdNH"})})]})})})},v=()=>{let[e,t]=(0,a.useState)("1"),n=(e,n)=>{t(n)};return(0,i.jsxs)(o.Z,{sx:{mb:5},children:[(0,i.jsx)(m.Z,{style:{background:"#8E2DE2",background:"-webkit-linear-gradient(to right, #4A00E0, #8E2DE2)",background:"linear-gradient(to right, #4A00E0, #8E2DE2)"},sx:{textAlign:"center"},title:(0,i.jsx)(c.Z,{variant:"h3",sx:{textTransform:"uppercase",color:"white"},children:"C\xf4ng cụ t\xednh điểm x\xe9t tốt nghiệp THPT 2023"})}),(0,i.jsx)(h.Z,{children:(0,i.jsxs)(s.ZP,{value:e,children:[(0,i.jsxs)(x.Z,{centered:!0,onChange:n,children:[(0,i.jsx)(r.Z,{value:"1",label:"HỆ GD THPT",icon:(0,i.jsx)(u.Z,{icon:"tabler:home-2"})}),(0,i.jsx)(r.Z,{value:"2",label:"HỆ GDTX",icon:(0,i.jsx)(u.Z,{icon:"tabler:home-bolt"})})]}),(0,i.jsx)(Z,{type:e})]})})]})},P=e=>{let{type:t}=e,[n,r]=(0,a.useState)(""),[x,s]=(0,a.useState)(""),[c,o]=(0,a.useState)(""),h=e=>{e.preventDefault();let i=parseFloat(n||0),l=parseFloat(x||0),a=parseFloat(c||0);if(1==t){var r=(5-a-.3*i)/.7*4-l,s=r.toFixed(2),o=(s/4).toFixed(2);f().fire({icon:"success",html:'<div style="text-align: left;">Điểm tổng 4 m\xf4n To\xe1n + Văn + Anh + Trung b\xecnh b\xe0i thi tổ hợp l\xe0 <b style="color:red">'.concat(s,'</b>.<br>Tức l\xe0 mỗi m\xf4n phải tr\xean 1 v\xe0 trung b\xecnh một m\xf4n <b style="color:green"> >= ').concat(o,"</b> để đỗ tốt nghiệp!</div>"),title:"Kết quả",confirmButtonText:"Đ\xe3 hiểu"})}else{var r=((5-a-.3*i)/.7-l/4)*3,s=r.toFixed(2),o=(s/3).toFixed(2);f().fire({icon:"success",html:'<div style="text-align: left;">Điểm tổng 3 b\xe0i thi l\xe0 <b style="color:red">'.concat(s,'</b><br>\n        Tức l\xe0 mỗi b\xe0i thi phải tr\xean 1 v\xe0 trung b\xecnh một b\xe0i thi <b style="color:green"> >= ').concat(o,"</b>  để đỗ tốt nghiệp!</div>"),title:"Kết quả",confirmButtonText:"Đ\xe3 hiểu"})}};return(0,i.jsx)(l.Z,{sx:{flexGrow:1,mt:3},children:(0,i.jsx)("form",{onSubmit:h,children:(0,i.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(d.ZP,{item:!0,md:4,xs:12,children:(0,i.jsx)(g,{placeholder:"Điểm trung b\xecnh cả năm lớp 12",min:0,max:10,label:"Điểm TB lớp 12",onChange:e=>r(e),value:n})}),(0,i.jsx)(d.ZP,{item:!0,md:4,xs:12,children:(0,i.jsx)(p.Z,{value:x,onChange:e=>s(e.target.value),label:"Điểm khuyến kh\xedch",type:"number",fullWidth:!0,inputProps:{min:0,max:10,step:.01,style:{textAlign:"center"}},placeholder:"Điểm khuyến kh\xedch (nếu c\xf3)"})}),(0,i.jsx)(d.ZP,{item:!0,md:4,xs:12,children:(0,i.jsx)(p.Z,{value:c,onChange:e=>o(e.target.value),label:"Điểm ưu ti\xean",type:"number",fullWidth:!0,inputProps:{min:0,max:10,step:.01,style:{textAlign:"center"}},placeholder:"Điểm ưu ti\xean (nếu c\xf3)"})}),(0,i.jsx)(d.ZP,{item:!0,md:12,xs:12,children:(0,i.jsx)(b.Z,{variant:"contained",fullWidth:!0,size:"large",type:"submit",children:"T\xcdNH"})})]})})})},T=()=>{let[e,t]=(0,a.useState)("1"),n=(e,n)=>{t(n)};return(0,i.jsxs)(o.Z,{sx:{mb:5},children:[(0,i.jsx)(m.Z,{style:{background:"#ee0979",background:"-webkit-linear-gradient(to right, #ff6a00, #ee0979)",background:"linear-gradient(to right, #ff6a00, #ee0979)"},sx:{textAlign:"center"},title:(0,i.jsx)(c.Z,{variant:"h3",sx:{textTransform:"uppercase",color:"white"},children:"C\xf4ng cụ t\xednh ngược điểm tốt nghiệp THPT 2023"})}),(0,i.jsx)(h.Z,{children:(0,i.jsxs)(s.ZP,{value:e,children:[(0,i.jsxs)(x.Z,{centered:!0,onChange:n,children:[(0,i.jsx)(r.Z,{value:"1",label:"HỆ GD THPT",icon:(0,i.jsx)(u.Z,{icon:"tabler:home-2"})}),(0,i.jsx)(r.Z,{value:"2",label:"HỆ GDTX",icon:(0,i.jsx)(u.Z,{icon:"tabler:home-bolt"})})]}),(0,i.jsx)(P,{type:e})]})})]})};var y=()=>(0,i.jsxs)(l.Z,{className:"content-center",children:[(0,i.jsx)(v,{}),(0,i.jsx)(T,{})]}),F=()=>(0,i.jsx)(y,{})}},function(e){e.O(0,[9,617,15,774,888,179],function(){return e(e.s=6623)}),_N_E=e.O()}]);