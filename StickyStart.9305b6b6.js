/* empty css                              */function b(){}function x(t,e){for(const n in e)t[n]=e[n];return t}function L(t){return t()}function P(){return Object.create(null)}function $(t){t.forEach(L)}function j(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function K(t){return Object.keys(t).length===0}function Q(t,e,n,i){if(t){const r=V(t,e,n,i);return t[0](r)}}function V(t,e,n,i){return t[1]&&i?x(n.ctx.slice(),t[1](i(e))):n.ctx}function W(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],o=Math.max(e.dirty.length,r.length);for(let l=0;l<o;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function X(t,e,n,i,r,u){if(r){const o=V(e,n,i,u);t.p(o,r)}}function Y(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Z(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function z(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function U(t){return t&&j(t.destroy)?t.destroy:b}let w=!1;function tt(){w=!0}function et(){w=!1}function nt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function it(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let s=0;s<e.length;s++){const f=e[s];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const s=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=s?r+1:nt(1,r,d=>e[n[d]].claim_order,s))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const u=[],o=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);l>=c;l--)o.push(e[l]);l--}for(;l>=0;l--)o.push(e[l]);u.reverse(),o.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<o.length;c++){for(;s<u.length&&o[c].claim_order>=u[s].claim_order;)s++;const f=s<u.length?u[s]:null;t.insertBefore(o[c],f)}}function q(t,e){if(w){for(it(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function rt(t,e,n){w&&!n?q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function A(t){return document.createElement(t)}function T(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function B(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:T(t,i,e[i])}function E(t){return Array.from(t.childNodes)}function lt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ot(t,e,n,i,r=!1){lt(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(e(l)){const c=n(l);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(e(l)){const c=n(l);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function ct(t,e,n,i){return ot(t,r=>r.nodeName===e,r=>{const u=[];for(let o=0;o<r.attributes.length;o++){const l=r.attributes[o];n[l.name]||u.push(l.name)}u.forEach(o=>r.removeAttribute(o))},()=>i(e))}function D(t,e,n){return ct(t,e,n,A)}function M(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function I(t,e,n){t.classList[n?"add":"remove"](e)}let C;function h(t){C=t}const _=[],R=[],g=[],H=[],st=Promise.resolve();let S=!1;function ft(){S||(S=!0,st.then(F))}function N(t){g.push(t)}const k=new Set;let y=0;function F(){const t=C;do{for(;y<_.length;){const e=_[y];y++,h(e),ut(e.$$)}for(h(null),_.length=0,y=0;R.length;)R.pop()();for(let e=0;e<g.length;e+=1){const n=g[e];k.has(n)||(k.add(n),n())}g.length=0}while(_.length);for(;H.length;)H.pop()();S=!1,k.clear(),h(t)}function ut(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const v=new Set;let at;function G(t,e){t&&t.i&&(v.delete(t),t.i(e))}function dt(t,e,n,i){if(t&&t.o){if(v.has(t))return;v.add(t),at.c.push(()=>{v.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function _t(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const o=t[u],l=e[u];if(l){for(const c in o)c in l||(i[c]=1);for(const c in l)r[c]||(n[c]=l[c],r[c]=1);t[u]=l}else for(const c in o)r[c]=1}for(const o in i)o in n||(n[o]=void 0);return n}function ht(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||N(()=>{const o=t.$$.on_mount.map(L).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...o):$(o),t.$$.on_mount=[]}),u.forEach(N)}function mt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){t.$$.dirty[0]===-1&&(_.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pt(t,e,n,i,r,u,o,l=[-1]){const c=C;h(t);const s=t.$$={fragment:null,ctx:[],props:u,update:b,not_equal:r,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:P(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};o&&o(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(a,d,...m)=>{const O=m.length?m[0]:d;return s.ctx&&r(s.ctx[a],s.ctx[a]=O)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](O),f&&yt(t,a)),d}):[],s.update(),f=!0,$(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){tt();const a=E(e.target);s.fragment&&s.fragment.l(a),a.forEach(p)}else s.fragment&&s.fragment.c();e.intro&&G(t.$$.fragment),ht(t,e.target,e.anchor,e.customElement),et(),F()}h(c)}class gt{$destroy(){mt(this,1),this.$destroy=b}$on(e,n){if(!j(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function vt(t){let e,n,i,r,u;const o=t[4].default,l=Q(o,t,t[3],null);let c=[t[2]],s={};for(let f=0;f<c.length;f+=1)s=x(s,c[f]);return{c(){e=A("div"),n=A("div"),l&&l.c(),this.h()},l(f){e=D(f,"DIV",{class:!0,style:!0});var a=E(e);n=D(a,"DIV",{});var d=E(n);l&&l.l(d),d.forEach(p),a.forEach(p),this.h()},h(){B(n,s),I(n,"svelte-zhvltb",!0),T(e,"class","sticky-container svelte-zhvltb"),M(e,"--content-height",t[0])},m(f,a){rt(f,e,a),q(e,n),l&&l.m(n,null),i=!0,r||(u=U(t[1].call(null,n)),r=!0)},p(f,[a]){l&&l.p&&(!i||a&8)&&X(l,o,f,f[3],i?W(o,f[3],a,null):Y(f[3]),null),B(n,s=_t(c,[a&4&&f[2]])),I(n,"svelte-zhvltb",!0),(!i||a&1)&&M(e,"--content-height",f[0])},i(f){i||(G(l,f),i=!0)},o(f){dt(l,f),i=!1},d(f){f&&p(e),l&&l.d(f),r=!1,u()}}}function bt(t,e,n){const i=[];let r=z(e,i),{$$slots:u={},$$scope:o}=e,l="0";const c=s=>{const f=new ResizeObserver(d=>{for(const m of d)n(0,l=m.contentRect.height+"px")});console.log("asd");const{height:a}=s.getBoundingClientRect();return n(0,l=a+"px"),f.observe(s),{destroy(){f.unobserve(s),f.disconnect()}}};return t.$$set=s=>{e=x(x({},e),Z(s)),n(2,r=z(e,i)),"$$scope"in s&&n(3,o=s.$$scope)},[l,c,r,o,u]}class $t extends gt{constructor(e){super(),pt(this,e,bt,vt,J,{})}}export{$t as default};
