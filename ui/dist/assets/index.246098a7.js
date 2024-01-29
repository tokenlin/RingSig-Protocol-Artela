var I=Object.defineProperty,R=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var j=(n,t,a)=>t in n?I(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,p=(n,t)=>{for(var a in t||(t={}))B.call(t,a)&&j(n,a,t[a]);if(S)for(var a of S(t))K.call(t,a)&&j(n,a,t[a]);return n},d=(n,t)=>R(n,$(t));import{j as D,R as A,r as x,p as H,W,C as L,A as V,H as q,a as O,b as z}from"./vendor.48872a51.js";const G=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))u(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}};G();const e=D.exports.jsx,o=D.exports.jsxs,P=()=>e("div",{className:"flex justify-center items-center py-3",children:e("div",{className:"animate-spin rounded-full h-10 w-10 border-b-2 border-red-700"})});var J=[{inputs:[{internalType:"uint256",name:"_depositAmount",type:"uint256"},{internalType:"address",name:"_factory",type:"address"},{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_supervision",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"_hash",type:"bytes32"},{indexed:!0,internalType:"address",name:"_to",type:"address"}],name:"WithdrawLog",type:"event"},{stateMutability:"payable",type:"fallback"},{inputs:[],name:"availableBalanceOfOwner",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes",name:"_data",type:"bytes"}],name:"dataValidAndWithdrawalValidVerify",outputs:[{internalType:"bool",name:"",type:"bool"},{internalType:"bool",name:"",type:"bool"},{internalType:"address",name:"",type:"address"},{internalType:"uint48",name:"",type:"uint48"},{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes",name:"_publicKey",type:"bytes"}],name:"deposit",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"depositAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"depositDoneCheck",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"factory",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"feeForOwner",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_nonce",type:"uint256"}],name:"getDepositOrder",outputs:[{internalType:"bytes32[2]",name:"",type:"bytes32[2]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes",name:"_publicKey",type:"bytes"}],name:"getDepositStatus",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes",name:"_data",type:"bytes"}],name:"getParameter",outputs:[{internalType:"uint256",name:"len",type:"uint256"},{internalType:"bytes32",name:"address_fee_len",type:"bytes32"},{internalType:"bytes32[2]",name:"kH",type:"bytes32[2]"},{internalType:"bytes32",name:"s",type:"bytes32"},{internalType:"bytes32[]",name:"c_list",type:"bytes32[]"},{internalType:"bytes32[2][]",name:"public_keys_list",type:"bytes32[2][]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes",name:"_data",type:"bytes"}],name:"getReward",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"nounceMixedBegin",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"numsWithdraw",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_fee",type:"uint256"}],name:"setFeeForOwner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_newOwner",type:"address"}],name:"setOwner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"supervision",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes",name:"_data",type:"bytes"}],name:"testPublicKeysInput",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"_new",type:"address"}],name:"testSetSupervision",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes",name:"_data",type:"bytes"}],name:"withdraw",outputs:[{internalType:"bool",name:"withdrawalValid",type:"bool"},{internalType:"bool",name:"dataValid",type:"bool"},{internalType:"address",name:"address_to",type:"address"},{internalType:"uint48",name:"fee",type:"uint48"},{internalType:"bytes32",name:"privateKeyRelatedHash",type:"bytes32"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"withdrawByOwner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"withdrawDoneCheck",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],Q=[{inputs:[{internalType:"address",name:"_factory",type:"address"},{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_aspectID",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"depositor",type:"address"},{indexed:!1,internalType:"bytes32",name:"validTx",type:"bytes32"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"_address",type:"address"}],name:"SetOwnerLog",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address[]",name:"_addressList",type:"address[]"},{indexed:!1,internalType:"bool[]",name:"_boolList",type:"bool[]"}],name:"SetWhitelistFromListLog",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"_address",type:"address"},{indexed:!1,internalType:"bool",name:"_bool",type:"bool"}],name:"SetWhitelistLog",type:"event"},{inputs:[],name:"aspectID",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"_tx",type:"bytes32"},{internalType:"bytes",name:"_publicKey",type:"bytes"}],name:"deposit",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"factory",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_address",type:"address"}],name:"getWhitelistOf",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_add",type:"address"}],name:"isOwner",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_newOwner",type:"address"}],name:"setOwner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_address",type:"address"},{internalType:"bool",name:"_bool",type:"bool"}],name:"setWhitelist",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"_addressList",type:"address[]"},{internalType:"bool[]",name:"_boolList",type:"bool[]"}],name:"setWhitelistFromList",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_new",type:"address"}],name:"testSetAspectID",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_new",type:"address"}],name:"testSetFactory",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"whitelist",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}];const U="0x93Ed80f0D1232EaFD3583c5bc2cEB6083881d8f6",X="0xcC31b7CF51D14931A5c0174cD0B193207E9850FC",Y=J,Z=Q,C=A.createContext(),{ethereum:m}=window,ee=()=>{const t=new W(m).getSigner();return new L(U,Y,t)},te=()=>{const t=new W(m).getSigner();return new L(X,Z,t)},ne=({children:n})=>{const[t,a]=x.exports.useState({amount:"",tx:"",publicKey:"",proveData:""}),[u,i]=x.exports.useState(""),[r,c]=x.exports.useState({deposit:!1,withdraw:!1}),[v,l]=x.exports.useState({deposit:"",withdraw:""}),b=(s,y)=>{a(h=>d(p({},h),{[y]:s.target.value}))},g=async()=>{try{if(!m)return alert("Please install MetaMask.");const s=await m.request({method:"eth_accounts"});s.length?i(s[0]):console.log("No accounts found")}catch(s){console.log(s)}},f=async()=>{try{if(!m)return alert("Please install MetaMask.");const s=await m.request({method:"eth_requestAccounts"});i(s[0]),window.location.reload()}catch(s){throw console.log(s),new Error("No ethereum object")}},k=async()=>{try{if(m){const{amount:s,tx:y,publicKey:h}=t,w=te(),F=H(s),_=await w.deposit(y,h,{value:F});c(N=>d(p({},N),{deposit:!0})),l(N=>d(p({},N),{deposit:""})),console.log(`Loading - ${_.hash}`),await _.wait(),console.log(`Success - ${_.hash}`),c(N=>d(p({},N),{deposit:!1}))}else console.log("No ethereum object"),l(s=>d(p({},s),{deposit:"No ethereum object"}))}catch(s){throw console.log(s),l(y=>d(p({},y),{deposit:"Deposit error: "+s.message})),new Error("sendTransactionDeposit error")}},E=async()=>{try{if(m){const{proveData:s}=t,h=await ee().withdraw(s);c(w=>d(p({},w),{withdraw:!0})),l(w=>d(p({},w),{withdraw:""})),console.log(`Loading - ${h.hash}`),await h.wait(),console.log(`Success - ${h.hash}`),c(w=>d(p({},w),{withdraw:!1}))}else console.log("No ethereum object"),l(s=>d(p({},s),{withdraw:"No ethereum object"}))}catch(s){throw console.log(s),l(y=>d(p({},y),{withdraw:"Withdraw error: "+s.message})),new Error("sendTransactionWithdraw error")}};return x.exports.useEffect(()=>{g()},[]),e(C.Provider,{value:{connectWallet:f,currentAccount:u,isLoading:r,errMsg:v,sendTransactionDeposit:k,sendTransactionWithdraw:E,handleChange:b,formData:t},children:n})},ae=n=>`${n.slice(0,5)}...${n.slice(n.length-4)}`;var se="/RingSig-Protocol-Artela/assets/logo.9b4827c3.png";const ie=({title:n,classprops:t})=>e("li",{className:`mx-4 cursor-pointer ${t}`,children:n}),re=()=>{const{currentAccount:n,connectWallet:t,handleChange:a,sendTransactionDeposit:u,sendTransactionTransfer:i,sendTransactionWithdraw:r,formData:c,isLoading:v}=x.exports.useContext(C),[l,b]=A.useState(!1);return o("nav",{className:"w-full flex md:justify-center justify-between items-center p-4",children:[e("div",{className:"md:flex-[0.5] flex-initial justify-center items-center",children:e("img",{src:se,alt:"logo",className:"w-40 cursor-pointer"})}),o("ul",{className:"text-white md:flex hidden list-none flex-row justify-between items-center flex-initial",children:[!n&&o("button",{type:"button",onClick:t,className:"flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]",children:[e(V,{className:"text-white mr-2"}),e("p",{className:"text-white text-base font-semibold",children:"Connect Wallet"})]}),n&&e("button",{type:"button",className:"text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer",children:o("p",{className:"text-white text-base font-semibold",children:["Wallet: ",ae(n)]})})]}),o("div",{className:"flex relative",children:[!l&&e(q,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>b(!0)}),l&&e(O,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>b(!1)}),l&&o("ul",{className:"z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in",children:[e("li",{className:"text-xl w-full my-2",children:e(O,{onClick:()=>b(!1)})}),["Market","Exchange","Tutorials","Wallets"].map((g,f)=>e(ie,{title:g,classprops:"my-2 text-lg"},g+f))]})]})]})},T="min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white",M=({placeholder:n,name:t,type:a,value:u,handleChange:i})=>e("input",{placeholder:n,type:a,step:"0.001",value:u,onChange:r=>i(r,t),className:"my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"}),oe=()=>{const{currentAccount:n,connectWallet:t,handleChange:a,sendTransactionDeposit:u,sendTransactionTransfer:i,sendTransactionWithdraw:r,formData:c,isLoading:v,errMsg:l}=x.exports.useContext(C),b=f=>{f.preventDefault(),console.log("depositSubmit"),u()},g=f=>{f.preventDefault(),r()};return e("div",{className:"flex w-full justify-center items-center",children:o("div",{className:"flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4",children:[o("div",{className:"flex flex-1 justify-start items-start flex-col mf:mr-10",children:[o("h1",{className:"text-3xl sm:text-5xl text-white text-gradient py-1",children:["Supervised RingSig Privacy  ",e("br",{})," Transaction Protocol"]}),e("p",{className:"text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base",children:"More privacy for the crypto world on RingSig."}),o("div",{className:"grid sm:grid-cols-3 grid-cols-2 w-full mt-10",children:[e("div",{className:`rounded-tl-2xl ${T}`,children:"Reliability"}),e("div",{className:T,children:"Security"}),e("div",{className:`sm:rounded-tr-2xl ${T}`,children:"Ethereum"}),e("div",{className:`sm:rounded-bl-2xl ${T}`,children:"Web 3.0"}),e("div",{className:T,children:"Low Fees"}),e("div",{className:`rounded-br-2xl ${T}`,children:"Blockchain"})]})]}),e("div",{className:"flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10",children:o("div",{className:"p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism",children:[e(M,{placeholder:"Amount (ART)",name:"amount",type:"number",handleChange:a}),e(M,{placeholder:"Tx to be verified",name:"tx",type:"text",handleChange:a}),e(M,{placeholder:"Public Key",name:"publicKey",type:"text",handleChange:a}),v.deposit?e(P,{}):e("button",{type:"button",onClick:b,className:"text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer",children:"Deposit"}),l.deposit!=""&&e("p",{className:"text-left mt-5 text-red-500 font-light md:w-9/12 w-11/12 text-base",children:l.deposit}),e("div",{className:"h-[1px] w-full bg-gray-400 my-2"}),e(M,{placeholder:"Prove Data",name:"proveData",type:"text",handleChange:a}),v.withdraw?e(P,{}):e("button",{type:"button",onClick:g,className:"text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer",children:"Withdraw"}),l.withdraw!=""&&e("p",{className:"text-left mt-5 text-red-500 font-light md:w-9/12 w-11/12 text-base",children:l.withdraw})]})})]})})},le=()=>o("div",{className:"w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer",children:[e("div",{className:"w-full flex sm:flex-row flex-col justify-between items-center my-4"}),o("div",{className:"flex justify-center items-center flex-col mt-5",children:[e("p",{className:"text-white text-sm text-center",children:"Come join us and hear for the unexpected miracle"}),e("p",{className:"text-white text-sm text-center font-medium mt-2",children:"lkw040535@gmail.com"})]}),e("div",{className:"sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 "}),o("div",{className:"sm:w-[90%] w-full flex justify-between items-center mt-3",children:[e("p",{className:"text-white text-left text-xs",children:"@0xkevinlin"}),e("p",{className:"text-white text-right text-xs",children:"All rights reserved"})]})]}),pe=()=>o("div",{className:"min-h-screen",children:[o("div",{className:"gradient-bg-welcome",children:[e(re,{}),e(oe,{})]}),e(le,{})]});z.render(e(ne,{children:e(pe,{})}),document.getElementById("root"));