import{r as a,j as y,c as k,a as l,w as n,v as o,k as w,i as B,t,F as D,o as M}from"./index-j_PJDxjm.js";const N={__name:"Anniversary",setup(_){const m=a(!0),s=a(2024),r=a(11),v=a(28),U=y(()=>V(s.value,r.value+1,v.value)),d=a(2024),p=a(11),i=a(28),f=y(()=>V(d.value,p.value+1,i.value)),b=y(()=>f.value-U.value+(m.value?1:0));function V(g,e,u){var x=new Date(g,e,u);return Math.floor(x/(1e3*60*60*24))}return(g,e)=>(M(),k(D,null,[l("div",null,[e[8]||(e[8]=l("h1",null,"毎日が記念日！",-1)),e[9]||(e[9]=l("p",null,"基準日: ",-1)),n(l("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=u=>s.value=u)},null,512),[[o,s.value]]),n(l("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=u=>r.value=u)},null,512),[[o,r.value]]),n(l("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=u=>v.value=u)},null,512),[[o,v.value]]),e[10]||(e[10]=l("p",null,"目標日: ",-1)),n(l("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=u=>d.value=u)},null,512),[[o,d.value]]),n(l("input",{type:"number","onUpdate:modelValue":e[4]||(e[4]=u=>p.value=u)},null,512),[[o,p.value]]),n(l("input",{type:"number","onUpdate:modelValue":e[5]||(e[5]=u=>i.value=u)},null,512),[[o,i.value]]),l("p",null,[l("label",null,[n(l("input",{type:"checkbox","onUpdate:modelValue":e[6]||(e[6]=u=>m.value=u)},null,512),[[w,m.value]]),e[7]||(e[7]=B(" 基準日を含める "))])]),l("p",null,"経過日数: "+t(b.value)+"日",1)]),l("div",null,[l("h2",null,t(d.value)+"年"+t(p.value)+"月"+t(i.value)+"日は、",1),l("h2",null,t(s.value)+"年"+t(r.value)+"月"+t(v.value)+"日の",1),l("h2",null,t(b.value)+"日目！",1)])],64))}};export{N as default};
