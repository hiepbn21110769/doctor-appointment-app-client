import{d as l,e as s,i as u,j as g,l as a,m as c,n as i,o as d,p as k}from"./chunk-PREI7CCJ.js";import{a as o,b as t}from"./chunk-UHTXMJPS.js";var x={token:null,user:null,role:"GUEST",isLogged:!1},L=g(x,u(a,(e,{loginSuccessResponse:r})=>t(o({},e),{token:r.token,user:r.user,role:r.user.role.roleName,isLogged:!0})),u(c,(e,{error:r})=>t(o({},e),{token:null,user:null,role:"GUEST",isLogged:!1,loginError:r})),u(i,(e,{loginSuccessResponse:r})=>t(o({},e),{token:r.token,user:r.user,role:r.user.role.roleName,isLogged:!0})),u(d,(e,{refreshTokenResponse:r})=>t(o({},e),{token:r.token,user:r.user,role:r.user.role.roleName,isLogged:!0})),u(k,(e,{logoutSuccess:r})=>t(o({},e),{token:null,user:null,role:"GUEST",loginError:null,isLogged:!1})));function f(e,r){return L(e,r)}var n=s("auth"),S=l(n,e=>e.token),p=l(n,e=>e.user),U=l(n,e=>e.loginError),h=l(n,e=>e.isLogged),G=l(n,e=>e.role);export{f as a,S as b,p as c,U as d,h as e,G as f};
