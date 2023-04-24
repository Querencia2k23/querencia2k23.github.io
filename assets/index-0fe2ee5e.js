(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();window.onload=r=>y();async function y(){var r=new XMLHttpRequest;r.open("GET","/data.json",!0),r.onreadystatechange=async function(){if(r.readyState===4){var l=r.responseText;b(l)}},r.send()}function b(r){let l=JSON.parse(r),d=!0;const o=C(l);let e=document.getElementById("body");for(let t=0;t<o.length;t++){let i=o[t],n=document.createElement("section");n.classList.add("page"),n.id=(t+1).toString(),n.innerHTML=H();let s=document.createElement("div");s.classList.add("content"),n.appendChild(s);let c=document.createElement("div");c.classList.add("page-no"),c.innerHTML=(t+1).toString(),n.appendChild(c);for(let p=0;p<i.length;p++){let a=i[p],u=a.name,f=a.email,m=a.contact,g=a.dob,L=a.about,h=a.profile;d=!d;let E=M(u,f,m,g,L,h,d);s.appendChild(E)}e.appendChild(n)}}function C(r){let l=8,d=Math.ceil(r.length/l),o=[];for(var e=0;e<d;e++){let i=[];for(var t=l*e;t<l*(e+1);t++)r[t]!=null&&i.push(r[t]);o.push(i)}return o}function M(r,l,d,o,e,t,i){let n=document.createElement("div");n.classList.add("student-entry");let s=document.createElement("div");s.classList.add("profile-container");let c=document.createElement("img");c.src="/profile_bg.png",c.classList.add("profile-bg");let p=document.createElement("img");p.src=t,p.classList.add("profilepic"),s.appendChild(c),s.appendChild(p);let a=document.createElement("div");a.classList.add("profile-details-container"),a.innerHTML=`<img
      src="/profile_details_bg.jpg"
      alt=""
      class="profile-details-bg"
    />`;let u=document.createElement("div");u.classList.add("profile-details");let f=document.createElement("p");f.innerHTML=r,f.classList.add("name");let m=document.createElement("p");m.innerHTML=d+" / "+l,m.classList.add("contact");let g=document.createElement("p");g.innerHTML=o,g.classList.add("dob");let L=document.createElement("p");L.innerHTML=e,L.classList.add("quote");let h=`<table>
        <tr>
          <td>
            <i
              class="fa-solid fa-stethoscope"
              style="color: #224787; margin-right: 2mm"
            ></i>
          </td>
          <td>
            ${f.outerHTML}
          </td>
        </tr>
        <tr>
          <td>
            <i
              class="fa-solid fa-cake-candles"
              style="color: #a5af12; margin-right: 2mm"
            ></i>
          </td>
          <td>
            ${g.outerHTML}
          </td>
        </tr>
        <tr>
          <td>
            <i
              class="fa-regular fa-address-book"
              style="color: #9a1919; margin-right: 2mm"
            ></i>
          </td>
          <td>
            ${m.outerHTML}
          </td>
        </tr>
        <tr>
          <td>
            <i
              class="fa-solid fa-quote-right"
              style="color: #161718; margin-right: 2mm"
            ></i>
          </td>
          <td>
            ${L.outerHTML}
          </td>
        </tr>
      </table>`;return u.innerHTML=h,a.appendChild(u),i?(n.appendChild(s),n.appendChild(a)):(n.appendChild(a),n.appendChild(s)),n}function H(){return'<div class="header"><img src="/RgK.png" alt="" id="logo" /><b id="college">R.G.KAR MEDICAL COLLEGE & HOSPITAL</b></div>'}
