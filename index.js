!function(){"use strict";(function(){var t=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function e(e){var n=t.has(e);return e=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e),!n&&e}function n(t){var e=t.isConnected;if(void 0!==e)return e;for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0);return!(!t||!(t.__CE_isImportDocument||t instanceof Document))}function i(t,e){for(;e&&e!==t&&!e.nextSibling;)e=e.parentNode;return e&&e!==t?e.nextSibling:null}function s(t,e,n){n=void 0===n?new Set:n;for(var o=t;o;){if(o.nodeType===Node.ELEMENT_NODE){var r=o;e(r);var a=r.localName;if("link"===a&&"import"===r.getAttribute("rel")){if((o=r.import)instanceof Node&&!n.has(o))for(n.add(o),o=o.firstChild;o;o=o.nextSibling)s(o,e,n);o=i(t,r);continue}if("template"===a){o=i(t,r);continue}if(r=r.__CE_shadowRoot)for(r=r.firstChild;r;r=r.nextSibling)s(r,e,n)}o=o.firstChild?o.firstChild:i(t,o)}}function o(t,e,n){t[e]=n}function r(){this.a=new Map,this.f=new Map,this.c=[],this.b=!1}function a(t,e){t.b=!0,t.c.push(e)}function c(t,e){t.b&&s(e,function(e){return h(t,e)})}function h(t,e){if(t.b&&!e.__CE_patched){e.__CE_patched=!0;for(var n=0;n<t.c.length;n++)t.c[n](e)}}function l(t,e){var n=[];for(s(e,function(t){return n.push(t)}),e=0;e<n.length;e++){var i=n[e];1===i.__CE_state?t.connectedCallback(i):p(t,i)}}function d(t,e){var n=[];for(s(e,function(t){return n.push(t)}),e=0;e<n.length;e++){var i=n[e];1===i.__CE_state&&t.disconnectedCallback(i)}}function u(t,e,n){var i=(n=void 0===n?{}:n).u||new Set,o=n.h||function(e){return p(t,e)},r=[];if(s(e,function(e){if("link"===e.localName&&"import"===e.getAttribute("rel")){var n=e.import;n instanceof Node&&(n.__CE_isImportDocument=!0,n.__CE_hasRegistry=!0),n&&"complete"===n.readyState?n.__CE_documentLoadHandled=!0:e.addEventListener("load",function(){var n=e.import;if(!n.__CE_documentLoadHandled){n.__CE_documentLoadHandled=!0;var s=new Set(i);s.delete(n),u(t,n,{u:s,h:o})}})}else r.push(e)},i),t.b)for(e=0;e<r.length;e++)h(t,r[e]);for(e=0;e<r.length;e++)o(r[e])}function p(t,e){if(void 0===e.__CE_state){var i=e.ownerDocument;if((i.defaultView||i.__CE_isImportDocument&&i.__CE_hasRegistry)&&(i=t.a.get(e.localName))){i.constructionStack.push(e);var s=i.constructorFunction;try{try{if(new s!==e)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{i.constructionStack.pop()}}catch(t){throw e.__CE_state=2,t}if(e.__CE_state=1,e.__CE_definition=i,i.attributeChangedCallback)for(i=i.observedAttributes,s=0;s<i.length;s++){var o=i[s],r=e.getAttribute(o);null!==r&&t.attributeChangedCallback(e,o,null,r,null)}n(e)&&t.connectedCallback(e)}}}function f(t){var e=document;this.c=t,this.a=e,this.b=void 0,u(this.c,this.a),"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function m(t){t.b&&t.b.disconnect()}function y(){var t=this;this.b=this.a=void 0,this.c=new Promise(function(e){t.b=e,t.a&&e(t.a)})}function k(t){if(t.a)throw Error("Already resolved.");t.a=void 0,t.b&&t.b(void 0)}function w(t){this.c=!1,this.a=t,this.j=new Map,this.f=function(t){return t()},this.b=!1,this.i=[],this.o=new f(t)}r.prototype.connectedCallback=function(t){var e=t.__CE_definition;e.connectedCallback&&e.connectedCallback.call(t)},r.prototype.disconnectedCallback=function(t){var e=t.__CE_definition;e.disconnectedCallback&&e.disconnectedCallback.call(t)},r.prototype.attributeChangedCallback=function(t,e,n,i,s){var o=t.__CE_definition;o.attributeChangedCallback&&-1<o.observedAttributes.indexOf(e)&&o.attributeChangedCallback.call(t,e,n,i,s)},f.prototype.f=function(t){var e=this.a.readyState;for("interactive"!==e&&"complete"!==e||m(this),e=0;e<t.length;e++)for(var n=t[e].addedNodes,i=0;i<n.length;i++)u(this.c,n[i])},w.prototype.l=function(t,n){var i=this;if(!(n instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!e(t))throw new SyntaxError("The element name '"+t+"' is not valid.");if(this.a.a.get(t))throw Error("A custom element with name '"+t+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var s=function(t){var e=o[t];if(void 0!==e&&!(e instanceof Function))throw Error("The '"+t+"' callback must be a function.");return e},o=n.prototype;if(!(o instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var r=s("connectedCallback"),a=s("disconnectedCallback"),c=s("adoptedCallback"),h=s("attributeChangedCallback"),l=n.observedAttributes||[]}catch(t){return}finally{this.c=!1}n={localName:t,constructorFunction:n,connectedCallback:r,disconnectedCallback:a,adoptedCallback:c,attributeChangedCallback:h,observedAttributes:l,constructionStack:[]},function(t,e,n){t.a.set(e,n),t.f.set(n.constructorFunction,n)}(this.a,t,n),this.i.push(n),this.b||(this.b=!0,this.f(function(){return function(t){if(!1!==t.b){t.b=!1;for(var e=t.i,n=[],i=new Map,s=0;s<e.length;s++)i.set(e[s].localName,[]);for(u(t.a,document,{h:function(e){if(void 0===e.__CE_state){var s=e.localName,o=i.get(s);o?o.push(e):t.a.a.get(s)&&n.push(e)}}}),s=0;s<n.length;s++)p(t.a,n[s]);for(;0<e.length;){var o=e.shift();s=o.localName,o=i.get(o.localName);for(var r=0;r<o.length;r++)p(t.a,o[r]);(s=t.j.get(s))&&k(s)}}}(i)}))},w.prototype.h=function(t){u(this.a,t)},w.prototype.get=function(t){if(t=this.a.a.get(t))return t.constructorFunction},w.prototype.m=function(t){if(!e(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."));var n=this.j.get(t);return n?n.c:(n=new y,this.j.set(t,n),this.a.a.get(t)&&!this.i.some(function(e){return e.localName===t})&&k(n),n.c)},w.prototype.s=function(t){m(this.o);var e=this.f;this.f=function(n){return t(function(){return e(n)})}},window.CustomElementRegistry=w,w.prototype.define=w.prototype.l,w.prototype.upgrade=w.prototype.h,w.prototype.get=w.prototype.get,w.prototype.whenDefined=w.prototype.m,w.prototype.polyfillWrapFlushCallback=w.prototype.s;var b=window.Document.prototype.createElement,g=window.Document.prototype.createElementNS,v=window.Document.prototype.importNode,C=window.Document.prototype.prepend,x=window.Document.prototype.append,E=window.DocumentFragment.prototype.prepend,S=window.DocumentFragment.prototype.append,_=window.Node.prototype.cloneNode,A=window.Node.prototype.appendChild,T=window.Node.prototype.insertBefore,L=window.Node.prototype.removeChild,N=window.Node.prototype.replaceChild,D=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),P=window.Element.prototype.attachShadow,q=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),j=window.Element.prototype.getAttribute,O=window.Element.prototype.setAttribute,M=window.Element.prototype.removeAttribute,R=window.Element.prototype.getAttributeNS,F=window.Element.prototype.setAttributeNS,I=window.Element.prototype.removeAttributeNS,H=window.Element.prototype.insertAdjacentElement,K=window.Element.prototype.insertAdjacentHTML,B=window.Element.prototype.prepend,$=window.Element.prototype.append,z=window.Element.prototype.before,U=window.Element.prototype.after,W=window.Element.prototype.replaceWith,X=window.Element.prototype.remove,J=window.HTMLElement,V=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),G=window.HTMLElement.prototype.insertAdjacentElement,Q=window.HTMLElement.prototype.insertAdjacentHTML,Y=new function(){};function Z(t,e,i){function s(e){return function(i){for(var s=[],o=0;o<arguments.length;++o)s[o]=arguments[o];o=[];for(var r=[],a=0;a<s.length;a++){var c=s[a];if(c instanceof Element&&n(c)&&r.push(c),c instanceof DocumentFragment)for(c=c.firstChild;c;c=c.nextSibling)o.push(c);else o.push(c)}for(e.apply(this,s),s=0;s<r.length;s++)d(t,r[s]);if(n(this))for(s=0;s<o.length;s++)(r=o[s])instanceof Element&&l(t,r)}}void 0!==i.g&&(e.prepend=s(i.g)),void 0!==i.append&&(e.append=s(i.append))}var tt,et=window.customElements;if(!et||et.forcePolyfill||"function"!=typeof et.define||"function"!=typeof et.get){var nt=new r;tt=nt,window.HTMLElement=function(){function t(){var t=this.constructor,e=tt.f.get(t);if(!e)throw Error("The custom element being constructed was not registered with `customElements`.");var n=e.constructionStack;if(0===n.length)return n=b.call(document,e.localName),Object.setPrototypeOf(n,t.prototype),n.__CE_state=1,n.__CE_definition=e,h(tt,n),n;var i=n[e=n.length-1];if(i===Y)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");return n[e]=Y,Object.setPrototypeOf(i,t.prototype),h(tt,i),i}return t.prototype=J.prototype,Object.defineProperty(t.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:t}),t}(),function(){var t=nt;o(Document.prototype,"createElement",function(e){if(this.__CE_hasRegistry){var n=t.a.get(e);if(n)return new n.constructorFunction}return e=b.call(this,e),h(t,e),e}),o(Document.prototype,"importNode",function(e,n){return e=v.call(this,e,!!n),this.__CE_hasRegistry?u(t,e):c(t,e),e}),o(Document.prototype,"createElementNS",function(e,n){if(this.__CE_hasRegistry&&(null===e||"http://www.w3.org/1999/xhtml"===e)){var i=t.a.get(n);if(i)return new i.constructorFunction}return e=g.call(this,e,n),h(t,e),e}),Z(t,Document.prototype,{g:C,append:x})}(),Z(nt,DocumentFragment.prototype,{g:E,append:S}),function(){function t(t,i){Object.defineProperty(t,"textContent",{enumerable:i.enumerable,configurable:!0,get:i.get,set:function(t){if(this.nodeType===Node.TEXT_NODE)i.set.call(this,t);else{var s=void 0;if(this.firstChild){var o=this.childNodes,r=o.length;if(0<r&&n(this)){s=Array(r);for(var a=0;a<r;a++)s[a]=o[a]}}if(i.set.call(this,t),s)for(t=0;t<s.length;t++)d(e,s[t])}}})}var e=nt;o(Node.prototype,"insertBefore",function(t,i){if(t instanceof DocumentFragment){var s=Array.prototype.slice.apply(t.childNodes);if(t=T.call(this,t,i),n(this))for(i=0;i<s.length;i++)l(e,s[i]);return t}return s=n(t),i=T.call(this,t,i),s&&d(e,t),n(this)&&l(e,t),i}),o(Node.prototype,"appendChild",function(t){if(t instanceof DocumentFragment){var i=Array.prototype.slice.apply(t.childNodes);if(t=A.call(this,t),n(this))for(var s=0;s<i.length;s++)l(e,i[s]);return t}return i=n(t),s=A.call(this,t),i&&d(e,t),n(this)&&l(e,t),s}),o(Node.prototype,"cloneNode",function(t){return t=_.call(this,!!t),this.ownerDocument.__CE_hasRegistry?u(e,t):c(e,t),t}),o(Node.prototype,"removeChild",function(t){var i=n(t),s=L.call(this,t);return i&&d(e,t),s}),o(Node.prototype,"replaceChild",function(t,i){if(t instanceof DocumentFragment){var s=Array.prototype.slice.apply(t.childNodes);if(t=N.call(this,t,i),n(this))for(d(e,i),i=0;i<s.length;i++)l(e,s[i]);return t}s=n(t);var o=N.call(this,t,i),r=n(this);return r&&d(e,i),s&&d(e,t),r&&l(e,t),o}),D&&D.get?t(Node.prototype,D):a(e,function(e){t(e,{enumerable:!0,configurable:!0,get:function(){for(var t=[],e=0;e<this.childNodes.length;e++)t.push(this.childNodes[e].textContent);return t.join("")},set:function(t){for(;this.firstChild;)L.call(this,this.firstChild);A.call(this,document.createTextNode(t))}})})}(),function(){function t(t,e){Object.defineProperty(t,"innerHTML",{enumerable:e.enumerable,configurable:!0,get:e.get,set:function(t){var i=this,o=void 0;if(n(this)&&(o=[],s(this,function(t){t!==i&&o.push(t)})),e.set.call(this,t),o)for(var a=0;a<o.length;a++){var h=o[a];1===h.__CE_state&&r.disconnectedCallback(h)}return this.ownerDocument.__CE_hasRegistry?u(r,this):c(r,this),t}})}function e(t,e){o(t,"insertAdjacentElement",function(t,i){var s=n(i);return t=e.call(this,t,i),s&&d(r,i),n(t)&&l(r,i),t})}function i(t,e){function n(t,e){for(var n=[];t!==e;t=t.nextSibling)n.push(t);for(e=0;e<n.length;e++)u(r,n[e])}o(t,"insertAdjacentHTML",function(t,i){if("beforebegin"===(t=t.toLowerCase())){var s=this.previousSibling;e.call(this,t,i),n(s||this.parentNode.firstChild,this)}else if("afterbegin"===t)s=this.firstChild,e.call(this,t,i),n(this.firstChild,s);else if("beforeend"===t)s=this.lastChild,e.call(this,t,i),n(s||this.firstChild,null);else{if("afterend"!==t)throw new SyntaxError("The value provided ("+String(t)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");s=this.nextSibling,e.call(this,t,i),n(this.nextSibling,s)}})}var r=nt;P&&o(Element.prototype,"attachShadow",function(t){return this.__CE_shadowRoot=P.call(this,t)}),q&&q.get?t(Element.prototype,q):V&&V.get?t(HTMLElement.prototype,V):a(r,function(e){t(e,{enumerable:!0,configurable:!0,get:function(){return _.call(this,!0).innerHTML},set:function(t){var e="template"===this.localName,n=e?this.content:this,i=g.call(document,this.namespaceURI,this.localName);for(i.innerHTML=t;0<n.childNodes.length;)L.call(n,n.childNodes[0]);for(t=e?i.content:i;0<t.childNodes.length;)A.call(n,t.childNodes[0])}})}),o(Element.prototype,"setAttribute",function(t,e){if(1!==this.__CE_state)return O.call(this,t,e);var n=j.call(this,t);O.call(this,t,e),e=j.call(this,t),r.attributeChangedCallback(this,t,n,e,null)}),o(Element.prototype,"setAttributeNS",function(t,e,n){if(1!==this.__CE_state)return F.call(this,t,e,n);var i=R.call(this,t,e);F.call(this,t,e,n),n=R.call(this,t,e),r.attributeChangedCallback(this,e,i,n,t)}),o(Element.prototype,"removeAttribute",function(t){if(1!==this.__CE_state)return M.call(this,t);var e=j.call(this,t);M.call(this,t),null!==e&&r.attributeChangedCallback(this,t,e,null,null)}),o(Element.prototype,"removeAttributeNS",function(t,e){if(1!==this.__CE_state)return I.call(this,t,e);var n=R.call(this,t,e);I.call(this,t,e);var i=R.call(this,t,e);n!==i&&r.attributeChangedCallback(this,e,n,i,t)}),G?e(HTMLElement.prototype,G):H?e(Element.prototype,H):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."),Q?i(HTMLElement.prototype,Q):K?i(Element.prototype,K):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."),Z(r,Element.prototype,{g:B,append:$}),function(t){function e(e){return function(i){for(var s=[],o=0;o<arguments.length;++o)s[o]=arguments[o];o=[];for(var r=[],a=0;a<s.length;a++){var c=s[a];if(c instanceof Element&&n(c)&&r.push(c),c instanceof DocumentFragment)for(c=c.firstChild;c;c=c.nextSibling)o.push(c);else o.push(c)}for(e.apply(this,s),s=0;s<r.length;s++)d(t,r[s]);if(n(this))for(s=0;s<o.length;s++)(r=o[s])instanceof Element&&l(t,r)}}var i=Element.prototype;void 0!==z&&(i.before=e(z)),void 0!==z&&(i.after=e(U)),void 0!==W&&o(i,"replaceWith",function(e){for(var i=[],s=0;s<arguments.length;++s)i[s]=arguments[s];s=[];for(var o=[],r=0;r<i.length;r++){var a=i[r];if(a instanceof Element&&n(a)&&o.push(a),a instanceof DocumentFragment)for(a=a.firstChild;a;a=a.nextSibling)s.push(a);else s.push(a)}for(r=n(this),W.apply(this,i),i=0;i<o.length;i++)d(t,o[i]);if(r)for(d(t,this),i=0;i<s.length;i++)(o=s[i])instanceof Element&&l(t,o)}),void 0!==X&&o(i,"remove",function(){var e=n(this);X.call(this),e&&d(t,this)})}(r)}(),document.__CE_hasRegistry=!0;var it=new w(nt);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:it})}}).call(self);class t extends HTMLElement{constructor(t,e=!1){super(),this.onChange=(()=>{this.input.checked?this.setAttribute("checked","true"):this.removeAttribute("checked")});const n=document.querySelector("#checkbox");this.node=document.importNode(n.content,!0),this.appendChild(this.node),this.input=this.querySelector("input"),this.input.id=`checkbox-${t}`,this.querySelector("label").setAttribute("for",`checkbox-${t}`),this.checked=e,this.input.addEventListener("change",this.onChange)}get checked(){return this.hasAttribute("checked")}set checked(t){t?this.setAttribute("checked","true"):this.removeAttribute("checked"),this.input.checked=t}}window.customElements.define("x-checkbox",t);class e extends HTMLElement{constructor(){super(),this.onIndent=(t=>{t.preventDefault(),this.currentTask&&this.currentTask.shift()}),this.onOutdent=(t=>{t.preventDefault(),this.currentTask&&this.currentTask.unshift()}),this.onToggleCheck=(async t=>{t.preventDefault(),this.currentTask&&await this.currentTask.toggleChecked()}),this.toggleCheckCheckbox=new t("toggle-check-control");const e=document.querySelector("#controls"),n=document.importNode(e.content,!0);n.querySelector("#toggleCheck").appendChild(this.toggleCheckCheckbox),this.appendChild(n),this.indent=this.querySelector("#indent"),this.outdent=this.querySelector("#outdent"),this.toggleCheck=this.querySelector("#toggleCheck"),this.currentTask=null,this.indent.addEventListener("touchstart",this.onIndent),this.outdent.addEventListener("touchstart",this.onOutdent),this.toggleCheckCheckbox.addEventListener("touchstart",this.onToggleCheck,!0),this.hide()}show(){this.style.display="flex"}hide(){this.style.display="none"}setCurrentTask(t){this.currentTask=t,this.setIndentState(t.isShiftable()),this.setOutdentState(t.isUnshiftable()),this.setCheckboxState(!0,!t.checked)}removeCurrentTask(t){this.currentTask===t&&(this.currentTask=null,this.setOutdentState(!1),this.setIndentState(!1),this.setCheckboxState(!1))}setIndentState(t){t?this.indent.classList.add("active"):this.indent.classList.remove("active")}setOutdentState(t){t?this.outdent.classList.add("active"):this.outdent.classList.remove("active")}setCheckboxState(t,e=!1){t?this.toggleCheck.classList.add("active"):this.toggleCheck.classList.remove("active"),this.toggleCheckCheckbox.checked=e}}let n,i,s;function o(t){const e=document.createElement("a");return"root"===t.id?e.innerText="🏠":e.innerText=t.textElement.innerText,e.href="#",e.setAttribute("data-task-id",t.id),e.addEventListener("click",r),e}function r(t){t.preventDefault();const e=t.target.getAttribute("data-task-id");for(;n.id!==e;){const t=n.parent();if(!t)break;t.ancestor=!1,n.root=!1,t.root=!0,n=t;const e=i.querySelector("a:last-child");e&&e.remove()}}function a(t){n=t,i=document.querySelector("nav")}window.customElements.define("x-controls",e);class c{constructor(t="keyval-store",e="keyval"){this.storeName=e,this._dbp=new Promise((n,i)=>{const s=indexedDB.open(t,1);s.onerror=(()=>i(s.error)),s.onsuccess=(()=>n(s.result)),s.onupgradeneeded=(()=>{s.result.createObjectStore(e)})})}_withIDBStore(t,e){return this._dbp.then(n=>new Promise((i,s)=>{const o=n.transaction(this.storeName,t);o.oncomplete=(()=>i()),o.onabort=o.onerror=(()=>s(o.error)),e(o.objectStore(this.storeName))}))}}function h(){return s||(s=new c),s}function l(t,e,n=h()){return n._withIDBStore("readwrite",n=>{n.put(e,t)})}function d(t,e=h()){return e._withIDBStore("readwrite",e=>{e.delete(t)})}function u(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,()=>Math.floor(16*Math.random()).toString(16))}const p={store:new c("flowy","tasks"),task(t){return function(t,e=h()){let n;return e._withIDBStore("readonly",e=>{n=e.get(t)}).then(()=>n.result)}(t,this.store)},async create(t,e=""){const n=u(),i={id:n,text:e,checked:!1,pinned:!1,collapsed:!1,children:[]};return t.children.push(n),await Promise.all([l(t.id,t,this.store),l(n,i,this.store)]),i},async createBefore(t,e,n=""){const i=u(),s={id:i,text:n,checked:!1,pinned:!1,collapsed:!1,children:[]},o=t.children.indexOf(e.id);return t.children.splice(o,0,i),await Promise.all([l(t.id,t,this.store),l(i,s,this.store)]),s},update(t){return l(t.id,t,this.store)},remove:t=>d(t.id),async initialize(){const t={id:"root",text:" ",checked:!1,pinned:!1,collapsed:!1,children:[]};await l("root",t,this.store),await this.create(t,"This is flowy, a small WorkFlowy clone");const e=await this.create(t,"It allows you to organize your life into lists"),n=await this.create(e,"Lists can have sublists");await this.create(n,"and they can have sublists");const i=await this.create(n,"Once an item is finished, it can be marked completed");i.checked=!0,await this.update(i);const s=await this.create(n,"Important Nested items can be pinned on top for direct attention");return s.pinned=!0,await this.update(s),await this.create(t,"It works out of the box in the browser, and optionally allows you to plug in a storage server to back tasks up."),await this.create(t,"It also works offline."),await this.create(t,"For more details on different features, open the hamburger menu on the top left."),await this.create(t,"The app is open source at https://github.com/suyash/flowy, file any issues there."),t}};async function f(){const t=await function(t=h()){const e=[];return t._withIDBStore("readonly",t=>{(t.openKeyCursor||t.openCursor).call(t).onsuccess=function(){this.result&&(e.push(this.result.key),this.result.continue())}}).then(()=>e)}(p.store);await Promise.all(t.map(t=>d(t,p.store)))}const m={apiKey:null,url:null,create:async(t,e)=>await p.create(t,e),createBefore:async(t,e,n)=>await p.createBefore(t,e,n),task:async t=>await p.task(t),async update(t){await p.update(t),this.url&&this._updateRemoteSingle(t)},async _updateRemoteSingle(t){const e=document.getElementById(t.id);e.unsynced=!0;try{await fetch(`${this.url}/set`,{body:JSON.stringify(t),headers:{"Content-Type":"application/json","X-API-Key":this.apiKey},method:"POST"}),e.unsynced=!1}catch(t){console.error(t)}},async remove(t){await p.remove(t),this.url&&this._removeRemoteSingle(t)},async _removeRemoteSingle(t){const e=document.getElementById(t.id);e&&(e.unsynced=!0);try{await fetch(`${this.url}/${t.id}`,{headers:{"Content-Type":"application/json","X-API-Key":this.apiKey},method:"DELETE"}),e&&(e.unsynced=!1)}catch(t){console.error(t)}},initialize:async()=>await p.initialize(),async resyncLocal(t,e){this.url=t,this.apiKey=e,y(t,e);try{const t=await fetch(`${this.url}/root`,{headers:{Accept:"application/json","X-API-Key":this.apiKey}}),e=await t.json();if(!e||!e.children||!e.children.length)return;await f(),await this._updateLocal(e)}catch(t){console.error(t)}},async _updateLocal(t){t.children||(t.children=[]),p.update(t),await Promise.all(t.children.map(async t=>{const e=await fetch(`${this.url}/${t}`,{headers:{Accept:"application/json","X-API-Key":this.apiKey}}),n=await e.json();await this._updateLocal(n)}))},async resyncRemote(t,e){this.url=t,this.apiKey=e,y(t,e);const n=await p.task("root");await this._updateRemote(n)},async _updateRemote(t){await this._updateRemoteSingle(t),await Promise.all(t.children.map(async t=>{await this._updateRemote(await p.task(t))}))}};function y(t,e){window.localStorage.setItem("url",t),window.localStorage.setItem("apiKey",e),document.querySelector("#status").classList.remove("hidden"),document.querySelector("#status a").innerText=t,document.querySelector("#status a").href=t}m.url=window.localStorage.getItem("url"),m.apiKey=window.localStorage.getItem("apiKey"),m.url&&m.apiKey&&y(m.url,m.apiKey);class k extends HTMLElement{constructor(e){super(),this.onLinkClick=(async t=>{t.preventDefault(),await this.task.togglePinned(),this.remove()}),this.onKeyPress=(async t=>{if(t.shiftKey)switch(t.keyCode){case 9:case 38:case 40:return void t.preventDefault()}if(t.ctrlKey)switch(t.keyCode){case 8:case 13:case 38:case 40:return void t.preventDefault()}switch(t.keyCode){case 9:case 13:case 38:case 40:return void t.preventDefault()}}),this.onKeyUp=(async()=>{await this.task.updateText(this.tasktext.innerText)}),this.onStatusChange=(async()=>{await Promise.all([this.task.toggleChecked()]),this.remove()}),this.task=e;const n=document.querySelector("#task"),i=document.importNode(n.content,!0);this.appendChild(i),this.id=`pinned-${e.id}`,this.checkbox=new t(this.id),this.tasktext=document.createElement("span"),this.tasktext.innerText=e.textElement.innerText,this.tasktext.setAttribute("contenteditable","true");const s=this.querySelector("header");s.appendChild(this.checkbox),s.appendChild(this.tasktext),this.querySelector("header > a:nth-child(2)").addEventListener("click",this.onLinkClick),this.tasktext.addEventListener("keypress",this.onKeyPress),this.tasktext.addEventListener("keyup",this.onKeyUp),this.checkbox.addEventListener("change",this.onStatusChange)}updateLocation(){const t=this.querySelector("footer");for(;t.hasChildNodes();)t.removeChild(t.lastChild);const e=[];for(let t=this.task.parent();t&&"root"!==t.id;t=t.parent())e.push(t.textElement.innerText);for(const n of e.reverse()){const e=document.createElement("div");e.innerHTML=n,t.appendChild(e)}}connectedCallback(){this.task.isConnected&&this.updateLocation()}}window.customElements.define("x-pin",k);class w extends HTMLElement{constructor(e,s){super(),this.onCheckboxChange=(async t=>{t.target.checked!==this.checked&&await this.toggleChecked()}),this.verifyChecked=(async()=>{const t=this.subtasks.querySelector("x-task:not([checked])");(this.checked&&t||!this.checked&&!t)&&await this.toggleChecked()}),this.addSubtaskBefore=((t,e)=>{this.expanded=!0,t.remove(),this.subtasks.insertBefore(t,e)}),this.addSubtaskAfter=((t,e)=>{this.expanded=!0,t.remove();const n=e.nextSibling;n?this.subtasks.insertBefore(t,n):this.subtasks.appendChild(t)}),this.onRoot=(t=>{t.preventDefault(),function(t){const e=[];for(let i=t.parent();i!==n;i=i.parent())e.push(o(i)),i.ancestor=!0;e.push(o(n));for(const t of e.reverse())i.appendChild(t);n.ancestor=!0,n.root=!1,t.root=!0,n=t}(this)}),this.onLinkClick=(t=>{t.preventDefault(),this.hasSubtasks?this.toggleExpanded():this.togglePinned()}),this.onTryResync=(async t=>{t.preventDefault(),await m.update(this.task)}),this.onKeyPress=(async t=>{if(t.shiftKey)switch(t.keyCode){case 9:t.preventDefault(),await this.unshift();break;case 38:t.preventDefault(),await this.moveUp();break;case 40:t.preventDefault(),await this.moveDown()}else if(t.ctrlKey)switch(t.keyCode){case 8:t.preventDefault(),await this.drop();break;case 13:t.preventDefault(),await this.toggleChecked();break;case 38:t.preventDefault(),this.expanded=!1;break;case 40:t.preventDefault(),this.expanded=!0}else switch(t.keyCode){case 9:t.preventDefault(),await this.shift();break;case 13:t.preventDefault(),await this.addSibling();break;case 38:t.preventDefault(),await this.moveFocusUp();break;case 40:t.preventDefault(),await this.moveFocusDown()}}),this.removeSubtask=(async t=>{this.task.children=this.task.children.filter(e=>e!==t),0===this.task.children.length&&(this.hasSubtasks=!1,this.expanded=!1),await m.update(this.task)}),this.drop=(async()=>{const t=this.parent();this.remove(),await Promise.all([t.removeSubtask(this.id),m.remove(this.task)])}),this.addSibling=(async()=>{if(this.hasAttribute("root"))return;const t=this.parent(),e=this.nextSibling;if(e){const n=await m.createBefore(t.task,e.task),i=new w(n,this.controls);t.addSubtaskBefore(i,e),i.tasktext.focus()}else{const e=await m.create(t.task),n=new w(e,this.controls);t.addSubtask(n),n.tasktext.focus()}}),this.updateTextCache=(async()=>{this.task.text=this.tasktext.innerText,this.task.text?await m.update(this.task):await this.drop(),this.controls.removeCurrentTask(this)}),this.onFocusText=(()=>{this.controls.setCurrentTask(this)}),this.moveUp=(async()=>{const t=this.previousSibling;if(!t)return;const e=this.parent();if(!e)return;const n=this.getCursorPosition(),i=e.task.children.indexOf(t.id);e.task.children[i]=this.id,e.task.children[i+1]=t.id,e.addSubtaskBefore(this,t),this.tasktext.focus(),this.setCursorPosition(n),await m.update(e.task)}),this.moveDown=(async()=>{const t=this.nextSibling;if(!t)return;const e=this.parent();if(!e)return;const n=this.getCursorPosition(),i=e.task.children.indexOf(t.id);e.task.children[i]=this.id,e.task.children[i-1]=t.id,e.addSubtaskAfter(this,t),this.tasktext.focus(),this.setCursorPosition(n),await m.update(e.task)}),this.moveFocusUp=(async()=>{const t=this.previousSibling;if(t)return void this.moveFocus(t);const e=this.parent();e.root||this.moveFocus(e)}),this.moveFocusDown=(async()=>{const t=this.nextSibling;t&&this.moveFocus(t)}),this.moveFocus=(t=>{const e=this.getCursorPosition();this.tasktext.blur(),t.tasktext.focus(),t.setCursorPosition(e)}),this.getCursorPosition=(()=>{const t=window.getSelection();if(t.rangeCount){const e=t.getRangeAt(0);if(e.commonAncestorContainer.parentNode===this.tasktext)return e.endOffset}return 0}),this.setCursorPosition=(t=>{if(!this.tasktext.childNodes||!this.tasktext.childNodes.length)return;const e=document.createRange();e.setStart(this.tasktext.childNodes[0],t),e.collapse(!0);const n=window.getSelection();n.removeAllRanges(),n.addRange(e)}),this.task=e,this.controls=s;const r=document.querySelector("#task"),a=document.importNode(r.content,!0);this.appendChild(a),this.id=e.id,this.subtasks=this.querySelector("footer"),this.checkbox=new t(e.id),this.checked=e.checked,this.tasktext=document.createElement("span"),e.text&&(this.tasktext.innerText=e.text),this.tasktext.setAttribute("contenteditable","true"),this.isPinned=e.pinned;const c=this.querySelector("header");c.appendChild(this.checkbox),c.appendChild(this.tasktext),this.querySelector("header > a:nth-child(1)").addEventListener("click",this.onRoot),this.querySelector("header > a:nth-child(2)").addEventListener("click",this.onLinkClick),this.querySelector("header > a:nth-child(3)").addEventListener("click",this.onTryResync),this.tasktext.addEventListener("keydown",this.onKeyPress),this.tasktext.addEventListener("blur",this.updateTextCache),this.tasktext.addEventListener("focus",this.onFocusText),this.checkbox.addEventListener("change",this.onCheckboxChange)}connectedCallback(){this.isPinned&&document.querySelector(`#pinned-${this.id}`).updateLocation()}disconnectedCallback(){if(this.isPinned){document.querySelector(`#pinned-${this.id}`).remove()}}get expanded(){return this.hasAttribute("expanded")}set expanded(t){t?(this.setAttribute("expanded","true"),this.task.collapsed=!1):(this.removeAttribute("expanded"),this.task.collapsed=!0)}get hasSubtasks(){return this.hasAttribute("has-subtasks")}set hasSubtasks(t){t?(this.setAttribute("has-subtasks","true"),this.isPinned=!1):this.removeAttribute("has-subtasks")}get root(){return this.hasAttribute("root")}set root(t){t?this.setAttribute("root","true"):this.removeAttribute("root")}get ancestor(){return this.hasAttribute("ancestor")}set ancestor(t){t?this.setAttribute("ancestor","true"):this.removeAttribute("ancestor")}get isPinned(){return this.hasAttribute("is-pinned")}set isPinned(t){if(t)this.setAttribute("is-pinned","true"),this.task.pinned=!0,document.querySelector("#pins").appendChild(new k(this));else{this.removeAttribute("is-pinned"),this.task.pinned=!1;const t=document.querySelector(`#pinned-${this.id}`);t&&t.remove()}}get checked(){return this.hasAttribute("checked")}set checked(t){if(t?(this.setAttribute("checked","true"),this.isPinned=!1):this.removeAttribute("checked"),this.checkbox.checked=t,this.isConnected){const t=this.parent();t&&t.verifyChecked()}}get unsynced(){return this.hasAttribute("unsynced")}set unsynced(t){t?this.setAttribute("unsynced","true"):this.removeAttribute("unsynced")}get textElement(){return this.tasktext}addSubtask(t){t.remove(),this.subtasks.appendChild(t),this.expanded=!0,this.hasSubtasks=!0}freezeText(){this.tasktext.removeAttribute("contenteditable")}async updateText(t){this.tasktext.innerText=t,await this.updateTextCache()}parent(){const t=this.parentElement.parentElement;return t instanceof w?t:null}async toggleChecked(){this.checked=!this.checked,this.task.checked=this.checked,await m.update(this.task)}async toggleExpanded(){this.expanded=!this.expanded,await m.update(this.task)}async togglePinned(){this.isPinned=!this.isPinned,await m.update(this.task)}isShiftable(){if(this.hasAttribute("root"))return!1;return!!this.previousSibling}async shift(){if(this.hasAttribute("root"))return;const t=this.previousSibling;if(!t)return;const e=this.getCursorPosition();this.parent().removeSubtask(this.task.id),t.task.children.push(this.task.id),await m.update(t.task),t.addSubtask(this),this.tasktext.focus(),this.setCursorPosition(e)}isUnshiftable(){if(this.hasAttribute("root"))return!1;const t=this.parent().parent();return!!(t&&t instanceof w)}async unshift(){if(this.hasAttribute("root"))return;const t=this.parent(),e=t.parent();if(!(e&&e instanceof w))return;const n=this.getCursorPosition(),i=t.nextSibling;if(i){const t=e.task.children.indexOf(i.id);e.task.children.splice(t,0,this.id),e.addSubtaskBefore(this,i)}else e.task.children.push(this.id),e.addSubtask(this);await Promise.all([t.removeSubtask(this.task.id),m.update(e.task)]),this.tasktext.focus(),this.setCursorPosition(n)}}function b(t){t.root=!0,t.freezeText(),a(t),document.querySelector("#work").appendChild(t)}async function g(t,e){const n=await m.task(t),i=new w(n,e),s=n.collapsed,o=await Promise.all(n.children.map(t=>g(t,e)));for(const t of o)i.addSubtask(t);return s&&i.removeAttribute("expanded"),i}function v(t){t.preventDefault();const e=this.parentElement;e.hasAttribute("data-open")?e.removeAttribute("data-open"):e.setAttribute("data-open","true")}window.customElements.define("x-task",w),navigator.serviceWorker.register("sw.js").then(()=>console.log("service worker registered")).catch(t=>console.error("service worker registration error",t)),window.addEventListener("DOMContentLoaded",async function(){await m.task("root")||await m.initialize();const t=new e;document.querySelector("main").appendChild(t);const n=window.innerHeight;window.addEventListener("resize",()=>{window.innerHeight<n?t.show():t.hide()});let i=await g("root",t);b(i),document.querySelector("aside > a").addEventListener("click",v),document.querySelector("#storage a").addEventListener("click",v),document.querySelector("#shortcuts a").addEventListener("click",v),document.querySelector("#about a").addEventListener("click",v);const s=document.querySelector("#storage form");s.addEventListener("submit",async e=>{e.preventDefault();const n=s[0].value,o=s[1].value;s[3].checked?(await m.resyncLocal(n,o),i.remove(),b(i=await g("root",t))):await m.resyncRemote(n,o),document.querySelector("aside").removeAttribute("data-open")})})}();
