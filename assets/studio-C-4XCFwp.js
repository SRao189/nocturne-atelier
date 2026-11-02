(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function Mm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var uu={exports:{}},Ro={},du={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up;function Ov(){if(up)return mt;up=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=x&&F[x]||F["@@iterator"],typeof F=="function"?F:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function S(F,Z,be){this.props=F,this.context=Z,this.refs=w,this.updater=be||y}S.prototype.isReactComponent={},S.prototype.setState=function(F,Z){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Z,"setState")},S.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function _(){}_.prototype=S.prototype;function I(F,Z,be){this.props=F,this.context=Z,this.refs=w,this.updater=be||y}var N=I.prototype=new _;N.constructor=I,E(N,S.prototype),N.isPureReactComponent=!0;var R=Array.isArray,Q=Object.prototype.hasOwnProperty,B={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function X(F,Z,be){var q,fe={},_e=null,ve=null;if(Z!=null)for(q in Z.ref!==void 0&&(ve=Z.ref),Z.key!==void 0&&(_e=""+Z.key),Z)Q.call(Z,q)&&!O.hasOwnProperty(q)&&(fe[q]=Z[q]);var Te=arguments.length-2;if(Te===1)fe.children=be;else if(1<Te){for(var ne=Array(Te),Me=0;Me<Te;Me++)ne[Me]=arguments[Me+2];fe.children=ne}if(F&&F.defaultProps)for(q in Te=F.defaultProps,Te)fe[q]===void 0&&(fe[q]=Te[q]);return{$$typeof:r,type:F,key:_e,ref:ve,props:fe,_owner:B.current}}function b(F,Z){return{$$typeof:r,type:F.type,key:Z,ref:F.ref,props:F.props,_owner:F._owner}}function C(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function z(F){var Z={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(be){return Z[be]})}var ue=/\/+/g;function ee(F,Z){return typeof F=="object"&&F!==null&&F.key!=null?z(""+F.key):Z.toString(36)}function he(F,Z,be,q,fe){var _e=typeof F;(_e==="undefined"||_e==="boolean")&&(F=null);var ve=!1;if(F===null)ve=!0;else switch(_e){case"string":case"number":ve=!0;break;case"object":switch(F.$$typeof){case r:case e:ve=!0}}if(ve)return ve=F,fe=fe(ve),F=q===""?"."+ee(ve,0):q,R(fe)?(be="",F!=null&&(be=F.replace(ue,"$&/")+"/"),he(fe,Z,be,"",function(Me){return Me})):fe!=null&&(C(fe)&&(fe=b(fe,be+(!fe.key||ve&&ve.key===fe.key?"":(""+fe.key).replace(ue,"$&/")+"/")+F)),Z.push(fe)),1;if(ve=0,q=q===""?".":q+":",R(F))for(var Te=0;Te<F.length;Te++){_e=F[Te];var ne=q+ee(_e,Te);ve+=he(_e,Z,be,ne,fe)}else if(ne=v(F),typeof ne=="function")for(F=ne.call(F),Te=0;!(_e=F.next()).done;)_e=_e.value,ne=q+ee(_e,Te++),ve+=he(_e,Z,be,ne,fe);else if(_e==="object")throw Z=String(F),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return ve}function de(F,Z,be){if(F==null)return F;var q=[],fe=0;return he(F,q,"","",function(_e){return Z.call(be,_e,fe++)}),q}function le(F){if(F._status===-1){var Z=F._result;Z=Z(),Z.then(function(be){(F._status===0||F._status===-1)&&(F._status=1,F._result=be)},function(be){(F._status===0||F._status===-1)&&(F._status=2,F._result=be)}),F._status===-1&&(F._status=0,F._result=Z)}if(F._status===1)return F._result.default;throw F._result}var oe={current:null},U={transition:null},K={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:U,ReactCurrentOwner:B};function Y(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:de,forEach:function(F,Z,be){de(F,function(){Z.apply(this,arguments)},be)},count:function(F){var Z=0;return de(F,function(){Z++}),Z},toArray:function(F){return de(F,function(Z){return Z})||[]},only:function(F){if(!C(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},mt.Component=S,mt.Fragment=n,mt.Profiler=a,mt.PureComponent=I,mt.StrictMode=s,mt.Suspense=h,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,mt.act=Y,mt.cloneElement=function(F,Z,be){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var q=E({},F.props),fe=F.key,_e=F.ref,ve=F._owner;if(Z!=null){if(Z.ref!==void 0&&(_e=Z.ref,ve=B.current),Z.key!==void 0&&(fe=""+Z.key),F.type&&F.type.defaultProps)var Te=F.type.defaultProps;for(ne in Z)Q.call(Z,ne)&&!O.hasOwnProperty(ne)&&(q[ne]=Z[ne]===void 0&&Te!==void 0?Te[ne]:Z[ne])}var ne=arguments.length-2;if(ne===1)q.children=be;else if(1<ne){Te=Array(ne);for(var Me=0;Me<ne;Me++)Te[Me]=arguments[Me+2];q.children=Te}return{$$typeof:r,type:F.type,key:fe,ref:_e,props:q,_owner:ve}},mt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:c,_context:F},F.Consumer=F},mt.createElement=X,mt.createFactory=function(F){var Z=X.bind(null,F);return Z.type=F,Z},mt.createRef=function(){return{current:null}},mt.forwardRef=function(F){return{$$typeof:f,render:F}},mt.isValidElement=C,mt.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:le}},mt.memo=function(F,Z){return{$$typeof:m,type:F,compare:Z===void 0?null:Z}},mt.startTransition=function(F){var Z=U.transition;U.transition={};try{F()}finally{U.transition=Z}},mt.unstable_act=Y,mt.useCallback=function(F,Z){return oe.current.useCallback(F,Z)},mt.useContext=function(F){return oe.current.useContext(F)},mt.useDebugValue=function(){},mt.useDeferredValue=function(F){return oe.current.useDeferredValue(F)},mt.useEffect=function(F,Z){return oe.current.useEffect(F,Z)},mt.useId=function(){return oe.current.useId()},mt.useImperativeHandle=function(F,Z,be){return oe.current.useImperativeHandle(F,Z,be)},mt.useInsertionEffect=function(F,Z){return oe.current.useInsertionEffect(F,Z)},mt.useLayoutEffect=function(F,Z){return oe.current.useLayoutEffect(F,Z)},mt.useMemo=function(F,Z){return oe.current.useMemo(F,Z)},mt.useReducer=function(F,Z,be){return oe.current.useReducer(F,Z,be)},mt.useRef=function(F){return oe.current.useRef(F)},mt.useState=function(F){return oe.current.useState(F)},mt.useSyncExternalStore=function(F,Z,be){return oe.current.useSyncExternalStore(F,Z,be)},mt.useTransition=function(){return oe.current.useTransition()},mt.version="18.3.1",mt}var dp;function bd(){return dp||(dp=1,du.exports=Ov()),du.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp;function kv(){if(fp)return Ro;fp=1;var r=bd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,m){var g,x={},v=null,y=null;m!==void 0&&(v=""+m),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(y=h.ref);for(g in h)s.call(h,g)&&!c.hasOwnProperty(g)&&(x[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)x[g]===void 0&&(x[g]=h[g]);return{$$typeof:e,type:f,key:v,ref:y,props:x,_owner:a.current}}return Ro.Fragment=n,Ro.jsx=u,Ro.jsxs=u,Ro}var hp;function zv(){return hp||(hp=1,uu.exports=kv()),uu.exports}var P=zv(),St=bd();const Bv=Mm(St);var Ka={},fu={exports:{}},Rn={},hu={exports:{}},pu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function Hv(){return pp||(pp=1,(function(r){function e(U,K){var Y=U.length;U.push(K);e:for(;0<Y;){var F=Y-1>>>1,Z=U[F];if(0<a(Z,K))U[F]=K,U[Y]=Z,Y=F;else break e}}function n(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var K=U[0],Y=U.pop();if(Y!==K){U[0]=Y;e:for(var F=0,Z=U.length,be=Z>>>1;F<be;){var q=2*(F+1)-1,fe=U[q],_e=q+1,ve=U[_e];if(0>a(fe,Y))_e<Z&&0>a(ve,fe)?(U[F]=ve,U[_e]=Y,F=_e):(U[F]=fe,U[q]=Y,F=q);else if(_e<Z&&0>a(ve,Y))U[F]=ve,U[_e]=Y,F=_e;else break e}}return K}function a(U,K){var Y=U.sortIndex-K.sortIndex;return Y!==0?Y:U.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var h=[],m=[],g=1,x=null,v=3,y=!1,E=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(U){for(var K=n(m);K!==null;){if(K.callback===null)s(m);else if(K.startTime<=U)s(m),K.sortIndex=K.expirationTime,e(h,K);else break;K=n(m)}}function R(U){if(w=!1,N(U),!E)if(n(h)!==null)E=!0,le(Q);else{var K=n(m);K!==null&&oe(R,K.startTime-U)}}function Q(U,K){E=!1,w&&(w=!1,_(X),X=-1),y=!0;var Y=v;try{for(N(K),x=n(h);x!==null&&(!(x.expirationTime>K)||U&&!z());){var F=x.callback;if(typeof F=="function"){x.callback=null,v=x.priorityLevel;var Z=F(x.expirationTime<=K);K=r.unstable_now(),typeof Z=="function"?x.callback=Z:x===n(h)&&s(h),N(K)}else s(h);x=n(h)}if(x!==null)var be=!0;else{var q=n(m);q!==null&&oe(R,q.startTime-K),be=!1}return be}finally{x=null,v=Y,y=!1}}var B=!1,O=null,X=-1,b=5,C=-1;function z(){return!(r.unstable_now()-C<b)}function ue(){if(O!==null){var U=r.unstable_now();C=U;var K=!0;try{K=O(!0,U)}finally{K?ee():(B=!1,O=null)}}else B=!1}var ee;if(typeof I=="function")ee=function(){I(ue)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,de=he.port2;he.port1.onmessage=ue,ee=function(){de.postMessage(null)}}else ee=function(){S(ue,0)};function le(U){O=U,B||(B=!0,ee())}function oe(U,K){X=S(function(){U(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_continueExecution=function(){E||y||(E=!0,le(Q))},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return n(h)},r.unstable_next=function(U){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var Y=v;v=K;try{return U()}finally{v=Y}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(U,K){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Y=v;v=U;try{return K()}finally{v=Y}},r.unstable_scheduleCallback=function(U,K,Y){var F=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?F+Y:F):Y=F,U){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=Y+Z,U={id:g++,callback:K,priorityLevel:U,startTime:Y,expirationTime:Z,sortIndex:-1},Y>F?(U.sortIndex=Y,e(m,U),n(h)===null&&U===n(m)&&(w?(_(X),X=-1):w=!0,oe(R,Y-F))):(U.sortIndex=Z,e(h,U),E||y||(E=!0,le(Q))),U},r.unstable_shouldYield=z,r.unstable_wrapCallback=function(U){var K=v;return function(){var Y=v;v=K;try{return U.apply(this,arguments)}finally{v=Y}}}})(pu)),pu}var mp;function Vv(){return mp||(mp=1,hu.exports=Hv()),hu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function Gv(){if(gp)return Rn;gp=1;var r=bd(),e=Vv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function v(t){return h.call(x,t)?!0:h.call(g,t)?!1:m.test(t)?x[t]=!0:(g[t]=!0,!1)}function y(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,l){if(i===null||typeof i>"u"||y(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,o,l,d,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,I);S[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,I);S[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,I);S[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function N(t,i,o,l){var d=S.hasOwnProperty(i)?S[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,l)&&(o=null),l||d===null?v(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,l=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var R=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Q=Symbol.for("react.element"),B=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),U=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=U&&t[U]||t["@@iterator"],typeof t=="function"?t:null)}var Y=Object.assign,F;function Z(t){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var be=!1;function q(t,i){if(!t||be)return"";be=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var l=ie}Reflect.construct(t,[],i)}else{try{i.call()}catch(ie){l=ie}t.call(i.prototype)}else{try{throw Error()}catch(ie){l=ie}t()}}catch(ie){if(ie&&l&&typeof ie.stack=="string"){for(var d=ie.stack.split(`
`),p=l.stack.split(`
`),M=d.length-1,D=p.length-1;1<=M&&0<=D&&d[M]!==p[D];)D--;for(;1<=M&&0<=D;M--,D--)if(d[M]!==p[D]){if(M!==1||D!==1)do if(M--,D--,0>D||d[M]!==p[D]){var k=`
`+d[M].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=M&&0<=D);break}}}finally{be=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?Z(t):""}function fe(t){switch(t.tag){case 5:return Z(t.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return t=q(t.type,!1),t;case 11:return t=q(t.type.render,!1),t;case 1:return t=q(t.type,!0),t;default:return""}}function _e(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case B:return"Portal";case b:return"Profiler";case X:return"StrictMode";case ee:return"Suspense";case he:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case ue:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case de:return i=t.displayName||null,i!==null?i:_e(t.type)||"Memo";case le:i=t._payload,t=t._init;try{return _e(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _e(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ne(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Me(t){var i=ne(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ze(t){t._valueTracker||(t._valueTracker=Me(t))}function Ie(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=ne(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function et(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function H(t,i){var o=i.checked;return Y({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Ct(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Te(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function nt(t,i){i=i.checked,i!=null&&N(t,"checked",i,!1)}function ot(t,i){nt(t,i);var o=Te(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?wt(t,i.type,o):i.hasOwnProperty("defaultValue")&&wt(t,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ze(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function wt(t,i,o){(i!=="number"||et(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var $e=Array.isArray;function L(t,i,o,l){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Te(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function T(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return Y({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function te(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if($e(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Te(o)}}function ge(t,i){var o=Te(i.value),l=Te(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function Se(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function pe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function je(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?pe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pe,Oe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Pe=Pe||document.createElement("div"),Pe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Pe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ht(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(t){Be.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),we[i]=we[t]})});function tt(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||we.hasOwnProperty(t)&&we[t]?(""+i).trim():i+"px"}function it(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,d=tt(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,d):t[o]=d}}var He=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pt(t,i){if(i){if(He[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function lt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Le=null,ce=null,me=null;function Ue(t){if(t=ho(t)){if(typeof Le!="function")throw Error(n(280));var i=t.stateNode;i&&(i=da(i),Le(t.stateNode,t.type,i))}}function De(t){ce?me?me.push(t):me=[t]:ce=t}function ct(){if(ce){var t=ce,i=me;if(me=ce=null,Ue(t),i)for(t=0;t<i.length;t++)Ue(i[t])}}function Ut(t,i){return t(i)}function Xt(){}var _t=!1;function yn(t,i,o){if(_t)return t(i,o);_t=!0;try{return Ut(t,i,o)}finally{_t=!1,(ce!==null||me!==null)&&(Xt(),ct())}}function hn(t,i){var o=t.stateNode;if(o===null)return null;var l=da(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Zr=!1;if(f)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){Zr=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{Zr=!1}function _i(t,i,o,l,d,p,M,D,k){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(o,ie)}catch(ye){this.onError(ye)}}var xi=!1,Er=null,Tr=!1,Wi=null,jo={onError:function(t){xi=!0,Er=t}};function Qr(t,i,o,l,d,p,M,D,k){xi=!1,Er=null,_i.apply(jo,arguments)}function Xo(t,i,o,l,d,p,M,D,k){if(Qr.apply(this,arguments),xi){if(xi){var ie=Er;xi=!1,Er=null}else throw Error(n(198));Tr||(Tr=!0,Wi=ie)}}function ci(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Yo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function qo(t){if(ci(t)!==t)throw Error(n(188))}function Nl(t){var i=t.alternate;if(!i){if(i=ci(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(l=d.return,l!==null){o=l;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return qo(d),t;if(p===l)return qo(d),i;p=p.sibling}throw Error(n(188))}if(o.return!==l.return)o=d,l=p;else{for(var M=!1,D=d.child;D;){if(D===o){M=!0,o=d,l=p;break}if(D===l){M=!0,l=d,o=p;break}D=D.sibling}if(!M){for(D=p.child;D;){if(D===o){M=!0,o=p,l=d;break}if(D===l){M=!0,l=p,o=d;break}D=D.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function A(t){return t=Nl(t),t!==null?W(t):null}function W(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=W(t);if(i!==null)return i;t=t.sibling}return null}var re=e.unstable_scheduleCallback,se=e.unstable_cancelCallback,j=e.unstable_shouldYield,Re=e.unstable_requestPaint,Ae=e.unstable_now,Xe=e.unstable_getCurrentPriorityLevel,Ge=e.unstable_ImmediatePriority,rt=e.unstable_UserBlockingPriority,at=e.unstable_NormalPriority,Ye=e.unstable_LowPriority,vt=e.unstable_IdlePriority,At=null,gt=null;function sn(t){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(At,t,void 0,(t.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Mt,Ke=Math.log,qn=Math.LN2;function Mt(t){return t>>>=0,t===0?32:31-(Ke(t)/qn|0)|0}var on=64,$n=4194304;function Yt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ui(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,d=t.suspendedLanes,p=t.pingedLanes,M=o&268435455;if(M!==0){var D=M&~d;D!==0?l=Yt(D):(p&=M,p!==0&&(l=Yt(p)))}else M=o&~d,M!==0?l=Yt(M):p!==0&&(l=Yt(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-ut(i),d=1<<o,l|=t[o],i&=~d;return l}function Nt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-ut(p),D=1<<M,k=d[M];k===-1?((D&o)===0||(D&l)!==0)&&(d[M]=Nt(D,i)):k<=i&&(t.expiredLanes|=D),p&=~D}}function Si(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pn(){var t=on;return on<<=1,(on&4194240)===0&&(on=64),t}function zn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Mn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ut(i),t[i]=o}function $o(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-ut(o),p=1<<d;i[d]=0,l[d]=-1,t[d]=-1,o&=~p}}function Dl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-ut(o),d=1<<l;d&i|t[l]&i&&(t[l]|=i),o&=~d}}var bt=0;function Hd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Vd,Ul,Gd,Wd,jd,Il=!1,Ko=[],ji=null,Xi=null,Yi=null,Ks=new Map,Zs=new Map,qi=[],sg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xd(t,i){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Ks.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(i.pointerId)}}function Qs(t,i,o,l,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[d]},i!==null&&(i=ho(i),i!==null&&Ul(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function og(t,i,o,l,d){switch(i){case"focusin":return ji=Qs(ji,t,i,o,l,d),!0;case"dragenter":return Xi=Qs(Xi,t,i,o,l,d),!0;case"mouseover":return Yi=Qs(Yi,t,i,o,l,d),!0;case"pointerover":var p=d.pointerId;return Ks.set(p,Qs(Ks.get(p)||null,t,i,o,l,d)),!0;case"gotpointercapture":return p=d.pointerId,Zs.set(p,Qs(Zs.get(p)||null,t,i,o,l,d)),!0}return!1}function Yd(t){var i=wr(t.target);if(i!==null){var o=ci(i);if(o!==null){if(i=o.tag,i===13){if(i=Yo(o),i!==null){t.blockedOn=i,jd(t.priority,function(){Gd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Ol(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Rt=l,o.target.dispatchEvent(l),Rt=null}else return i=ho(o),i!==null&&Ul(i),t.blockedOn=o,!1;i.shift()}return!0}function qd(t,i,o){Zo(t)&&o.delete(i)}function ag(){Il=!1,ji!==null&&Zo(ji)&&(ji=null),Xi!==null&&Zo(Xi)&&(Xi=null),Yi!==null&&Zo(Yi)&&(Yi=null),Ks.forEach(qd),Zs.forEach(qd)}function Js(t,i){t.blockedOn===i&&(t.blockedOn=null,Il||(Il=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ag)))}function eo(t){function i(d){return Js(d,t)}if(0<Ko.length){Js(Ko[0],t);for(var o=1;o<Ko.length;o++){var l=Ko[o];l.blockedOn===t&&(l.blockedOn=null)}}for(ji!==null&&Js(ji,t),Xi!==null&&Js(Xi,t),Yi!==null&&Js(Yi,t),Ks.forEach(i),Zs.forEach(i),o=0;o<qi.length;o++)l=qi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<qi.length&&(o=qi[0],o.blockedOn===null);)Yd(o),o.blockedOn===null&&qi.shift()}var Jr=R.ReactCurrentBatchConfig,Qo=!0;function lg(t,i,o,l){var d=bt,p=Jr.transition;Jr.transition=null;try{bt=1,Fl(t,i,o,l)}finally{bt=d,Jr.transition=p}}function cg(t,i,o,l){var d=bt,p=Jr.transition;Jr.transition=null;try{bt=4,Fl(t,i,o,l)}finally{bt=d,Jr.transition=p}}function Fl(t,i,o,l){if(Qo){var d=Ol(t,i,o,l);if(d===null)ec(t,i,l,Jo,o),Xd(t,l);else if(og(d,t,i,o,l))l.stopPropagation();else if(Xd(t,l),i&4&&-1<sg.indexOf(t)){for(;d!==null;){var p=ho(d);if(p!==null&&Vd(p),p=Ol(t,i,o,l),p===null&&ec(t,i,l,Jo,o),p===d)break;d=p}d!==null&&l.stopPropagation()}else ec(t,i,l,null,o)}}var Jo=null;function Ol(t,i,o,l){if(Jo=null,t=G(l),t=wr(t),t!==null)if(i=ci(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Yo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Jo=t,null}function $d(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Ge:return 1;case rt:return 4;case at:case Ye:return 16;case vt:return 536870912;default:return 16}default:return 16}}var $i=null,kl=null,ea=null;function Kd(){if(ea)return ea;var t,i=kl,o=i.length,l,d="value"in $i?$i.value:$i.textContent,p=d.length;for(t=0;t<o&&i[t]===d[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===d[p-l];l++);return ea=d.slice(t,1<l?1-l:void 0)}function ta(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function na(){return!0}function Zd(){return!1}function Ln(t){function i(o,l,d,p,M){this._reactName=o,this._targetInst=d,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?na:Zd,this.isPropagationStopped=Zd,this}return Y(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),i}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Ln(es),to=Y({},es,{view:0,detail:0}),ug=Ln(to),Bl,Hl,no,ia=Y({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(Bl=t.screenX-no.screenX,Hl=t.screenY-no.screenY):Hl=Bl=0,no=t),Bl)},movementY:function(t){return"movementY"in t?t.movementY:Hl}}),Qd=Ln(ia),dg=Y({},ia,{dataTransfer:0}),fg=Ln(dg),hg=Y({},to,{relatedTarget:0}),Vl=Ln(hg),pg=Y({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),mg=Ln(pg),gg=Y({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vg=Ln(gg),_g=Y({},es,{data:0}),Jd=Ln(_g),xg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=yg[t])?!!i[t]:!1}function Gl(){return Mg}var Eg=Y({},to,{key:function(t){if(t.key){var i=xg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ta(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gl,charCode:function(t){return t.type==="keypress"?ta(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ta(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tg=Ln(Eg),wg=Y({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ef=Ln(wg),Ag=Y({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gl}),Cg=Ln(Ag),Rg=Y({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),bg=Ln(Rg),Pg=Y({},ia,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Lg=Ln(Pg),Ng=[9,13,27,32],Wl=f&&"CompositionEvent"in window,io=null;f&&"documentMode"in document&&(io=document.documentMode);var Dg=f&&"TextEvent"in window&&!io,tf=f&&(!Wl||io&&8<io&&11>=io),nf=" ",rf=!1;function sf(t,i){switch(t){case"keyup":return Ng.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function of(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function Ug(t,i){switch(t){case"compositionend":return of(i);case"keypress":return i.which!==32?null:(rf=!0,nf);case"textInput":return t=i.data,t===nf&&rf?null:t;default:return null}}function Ig(t,i){if(ts)return t==="compositionend"||!Wl&&sf(t,i)?(t=Kd(),ea=kl=$i=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return tf&&i.locale!=="ko"?null:i.data;default:return null}}var Fg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function af(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Fg[t.type]:i==="textarea"}function lf(t,i,o,l){De(l),i=la(i,"onChange"),0<i.length&&(o=new zl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var ro=null,so=null;function Og(t){Af(t,0)}function ra(t){var i=os(t);if(Ie(i))return t}function kg(t,i){if(t==="change")return i}var cf=!1;if(f){var jl;if(f){var Xl="oninput"in document;if(!Xl){var uf=document.createElement("div");uf.setAttribute("oninput","return;"),Xl=typeof uf.oninput=="function"}jl=Xl}else jl=!1;cf=jl&&(!document.documentMode||9<document.documentMode)}function df(){ro&&(ro.detachEvent("onpropertychange",ff),so=ro=null)}function ff(t){if(t.propertyName==="value"&&ra(so)){var i=[];lf(i,so,t,G(t)),yn(Og,i)}}function zg(t,i,o){t==="focusin"?(df(),ro=i,so=o,ro.attachEvent("onpropertychange",ff)):t==="focusout"&&df()}function Bg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ra(so)}function Hg(t,i){if(t==="click")return ra(i)}function Vg(t,i){if(t==="input"||t==="change")return ra(i)}function Gg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Kn=typeof Object.is=="function"?Object.is:Gg;function oo(t,i){if(Kn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var d=o[l];if(!h.call(i,d)||!Kn(t[d],i[d]))return!1}return!0}function hf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pf(t,i){var o=hf(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=hf(o)}}function mf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?mf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function gf(){for(var t=window,i=et();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=et(t.document)}return i}function Yl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Wg(t){var i=gf(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&mf(o.ownerDocument.documentElement,o)){if(l!==null&&Yl(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,p=Math.min(l.start,d);l=l.end===void 0?p:Math.min(l.end,d),!t.extend&&p>l&&(d=l,l=p,p=d),d=pf(o,p);var M=pf(o,l);d&&M&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jg=f&&"documentMode"in document&&11>=document.documentMode,ns=null,ql=null,ao=null,$l=!1;function vf(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;$l||ns==null||ns!==et(l)||(l=ns,"selectionStart"in l&&Yl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ao&&oo(ao,l)||(ao=l,l=la(ql,"onSelect"),0<l.length&&(i=new zl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=ns)))}function sa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var is={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},Kl={},_f={};f&&(_f=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function oa(t){if(Kl[t])return Kl[t];if(!is[t])return t;var i=is[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in _f)return Kl[t]=i[o];return t}var xf=oa("animationend"),Sf=oa("animationiteration"),yf=oa("animationstart"),Mf=oa("transitionend"),Ef=new Map,Tf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,i){Ef.set(t,i),c(i,[t])}for(var Zl=0;Zl<Tf.length;Zl++){var Ql=Tf[Zl],Xg=Ql.toLowerCase(),Yg=Ql[0].toUpperCase()+Ql.slice(1);Ki(Xg,"on"+Yg)}Ki(xf,"onAnimationEnd"),Ki(Sf,"onAnimationIteration"),Ki(yf,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(Mf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qg=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function wf(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Xo(l,i,void 0,t),t.currentTarget=null}function Af(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],d=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],k=D.instance,ie=D.currentTarget;if(D=D.listener,k!==p&&d.isPropagationStopped())break e;wf(d,D,ie),p=k}else for(M=0;M<l.length;M++){if(D=l[M],k=D.instance,ie=D.currentTarget,D=D.listener,k!==p&&d.isPropagationStopped())break e;wf(d,D,ie),p=k}}}if(Tr)throw t=Wi,Tr=!1,Wi=null,t}function It(t,i){var o=i[oc];o===void 0&&(o=i[oc]=new Set);var l=t+"__bubble";o.has(l)||(Cf(i,t,2,!1),o.add(l))}function Jl(t,i,o){var l=0;i&&(l|=4),Cf(o,t,l,i)}var aa="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[aa]){t[aa]=!0,s.forEach(function(o){o!=="selectionchange"&&(qg.has(o)||Jl(o,!1,t),Jl(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[aa]||(i[aa]=!0,Jl("selectionchange",!1,i))}}function Cf(t,i,o,l){switch($d(i)){case 1:var d=lg;break;case 4:d=cg;break;default:d=Fl}o=d.bind(null,i,o,t),d=void 0,!Zr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function ec(t,i,o,l,d){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===d||D.nodeType===8&&D.parentNode===d)break;if(M===4)for(M=l.return;M!==null;){var k=M.tag;if((k===3||k===4)&&(k=M.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;M=M.return}for(;D!==null;){if(M=wr(D),M===null)return;if(k=M.tag,k===5||k===6){l=p=M;continue e}D=D.parentNode}}l=l.return}yn(function(){var ie=p,ye=G(o),Ee=[];e:{var xe=Ef.get(t);if(xe!==void 0){var Fe=zl,Ve=t;switch(t){case"keypress":if(ta(o)===0)break e;case"keydown":case"keyup":Fe=Tg;break;case"focusin":Ve="focus",Fe=Vl;break;case"focusout":Ve="blur",Fe=Vl;break;case"beforeblur":case"afterblur":Fe=Vl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=Cg;break;case xf:case Sf:case yf:Fe=mg;break;case Mf:Fe=bg;break;case"scroll":Fe=ug;break;case"wheel":Fe=Lg;break;case"copy":case"cut":case"paste":Fe=vg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=ef}var We=(i&4)!==0,Ht=!We&&t==="scroll",$=We?xe!==null?xe+"Capture":null:xe;We=[];for(var V=ie,J;V!==null;){J=V;var Ce=J.stateNode;if(J.tag===5&&Ce!==null&&(J=Ce,$!==null&&(Ce=hn(V,$),Ce!=null&&We.push(uo(V,Ce,J)))),Ht)break;V=V.return}0<We.length&&(xe=new Fe(xe,Ve,null,o,ye),Ee.push({event:xe,listeners:We}))}}if((i&7)===0){e:{if(xe=t==="mouseover"||t==="pointerover",Fe=t==="mouseout"||t==="pointerout",xe&&o!==Rt&&(Ve=o.relatedTarget||o.fromElement)&&(wr(Ve)||Ve[yi]))break e;if((Fe||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,Fe?(Ve=o.relatedTarget||o.toElement,Fe=ie,Ve=Ve?wr(Ve):null,Ve!==null&&(Ht=ci(Ve),Ve!==Ht||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Fe=null,Ve=ie),Fe!==Ve)){if(We=Qd,Ce="onMouseLeave",$="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(We=ef,Ce="onPointerLeave",$="onPointerEnter",V="pointer"),Ht=Fe==null?xe:os(Fe),J=Ve==null?xe:os(Ve),xe=new We(Ce,V+"leave",Fe,o,ye),xe.target=Ht,xe.relatedTarget=J,Ce=null,wr(ye)===ie&&(We=new We($,V+"enter",Ve,o,ye),We.target=J,We.relatedTarget=Ht,Ce=We),Ht=Ce,Fe&&Ve)t:{for(We=Fe,$=Ve,V=0,J=We;J;J=rs(J))V++;for(J=0,Ce=$;Ce;Ce=rs(Ce))J++;for(;0<V-J;)We=rs(We),V--;for(;0<J-V;)$=rs($),J--;for(;V--;){if(We===$||$!==null&&We===$.alternate)break t;We=rs(We),$=rs($)}We=null}else We=null;Fe!==null&&Rf(Ee,xe,Fe,We,!1),Ve!==null&&Ht!==null&&Rf(Ee,Ht,Ve,We,!0)}}e:{if(xe=ie?os(ie):window,Fe=xe.nodeName&&xe.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&xe.type==="file")var qe=kg;else if(af(xe))if(cf)qe=Vg;else{qe=Bg;var Qe=zg}else(Fe=xe.nodeName)&&Fe.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(qe=Hg);if(qe&&(qe=qe(t,ie))){lf(Ee,qe,o,ye);break e}Qe&&Qe(t,xe,ie),t==="focusout"&&(Qe=xe._wrapperState)&&Qe.controlled&&xe.type==="number"&&wt(xe,"number",xe.value)}switch(Qe=ie?os(ie):window,t){case"focusin":(af(Qe)||Qe.contentEditable==="true")&&(ns=Qe,ql=ie,ao=null);break;case"focusout":ao=ql=ns=null;break;case"mousedown":$l=!0;break;case"contextmenu":case"mouseup":case"dragend":$l=!1,vf(Ee,o,ye);break;case"selectionchange":if(jg)break;case"keydown":case"keyup":vf(Ee,o,ye)}var Je;if(Wl)e:{switch(t){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else ts?sf(t,o)&&(st="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(st="onCompositionStart");st&&(tf&&o.locale!=="ko"&&(ts||st!=="onCompositionStart"?st==="onCompositionEnd"&&ts&&(Je=Kd()):($i=ye,kl="value"in $i?$i.value:$i.textContent,ts=!0)),Qe=la(ie,st),0<Qe.length&&(st=new Jd(st,t,null,o,ye),Ee.push({event:st,listeners:Qe}),Je?st.data=Je:(Je=of(o),Je!==null&&(st.data=Je)))),(Je=Dg?Ug(t,o):Ig(t,o))&&(ie=la(ie,"onBeforeInput"),0<ie.length&&(ye=new Jd("onBeforeInput","beforeinput",null,o,ye),Ee.push({event:ye,listeners:ie}),ye.data=Je))}Af(Ee,i)})}function uo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function la(t,i){for(var o=i+"Capture",l=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=hn(t,o),p!=null&&l.unshift(uo(t,p,d)),p=hn(t,i),p!=null&&l.push(uo(t,p,d))),t=t.return}return l}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rf(t,i,o,l,d){for(var p=i._reactName,M=[];o!==null&&o!==l;){var D=o,k=D.alternate,ie=D.stateNode;if(k!==null&&k===l)break;D.tag===5&&ie!==null&&(D=ie,d?(k=hn(o,p),k!=null&&M.unshift(uo(o,k,D))):d||(k=hn(o,p),k!=null&&M.push(uo(o,k,D)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var $g=/\r\n?/g,Kg=/\u0000|\uFFFD/g;function bf(t){return(typeof t=="string"?t:""+t).replace($g,`
`).replace(Kg,"")}function ca(t,i,o){if(i=bf(i),bf(t)!==i&&o)throw Error(n(425))}function ua(){}var tc=null,nc=null;function ic(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var rc=typeof setTimeout=="function"?setTimeout:void 0,Zg=typeof clearTimeout=="function"?clearTimeout:void 0,Pf=typeof Promise=="function"?Promise:void 0,Qg=typeof queueMicrotask=="function"?queueMicrotask:typeof Pf<"u"?function(t){return Pf.resolve(null).then(t).catch(Jg)}:rc;function Jg(t){setTimeout(function(){throw t})}function sc(t,i){var o=i,l=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(l===0){t.removeChild(d),eo(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=d}while(o);eo(i)}function Zi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Lf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),di="__reactFiber$"+ss,fo="__reactProps$"+ss,yi="__reactContainer$"+ss,oc="__reactEvents$"+ss,ev="__reactListeners$"+ss,tv="__reactHandles$"+ss;function wr(t){var i=t[di];if(i)return i;for(var o=t.parentNode;o;){if(i=o[yi]||o[di]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Lf(t);t!==null;){if(o=t[di])return o;t=Lf(t)}return i}t=o,o=t.parentNode}return null}function ho(t){return t=t[di]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function da(t){return t[fo]||null}var ac=[],as=-1;function Qi(t){return{current:t}}function Ft(t){0>as||(t.current=ac[as],ac[as]=null,as--)}function Dt(t,i){as++,ac[as]=t.current,t.current=i}var Ji={},an=Qi(Ji),En=Qi(!1),Ar=Ji;function ls(t,i){var o=t.type.contextTypes;if(!o)return Ji;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Tn(t){return t=t.childContextTypes,t!=null}function fa(){Ft(En),Ft(an)}function Nf(t,i,o){if(an.current!==Ji)throw Error(n(168));Dt(an,i),Dt(En,o)}function Df(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,ve(t)||"Unknown",d));return Y({},o,l)}function ha(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,Ar=an.current,Dt(an,t),Dt(En,En.current),!0}function Uf(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Df(t,i,Ar),l.__reactInternalMemoizedMergedChildContext=t,Ft(En),Ft(an),Dt(an,t)):Ft(En),Dt(En,o)}var Mi=null,pa=!1,lc=!1;function If(t){Mi===null?Mi=[t]:Mi.push(t)}function nv(t){pa=!0,If(t)}function er(){if(!lc&&Mi!==null){lc=!0;var t=0,i=bt;try{var o=Mi;for(bt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Mi=null,pa=!1}catch(d){throw Mi!==null&&(Mi=Mi.slice(t+1)),re(Ge,er),d}finally{bt=i,lc=!1}}return null}var cs=[],us=0,ma=null,ga=0,Bn=[],Hn=0,Cr=null,Ei=1,Ti="";function Rr(t,i){cs[us++]=ga,cs[us++]=ma,ma=t,ga=i}function Ff(t,i,o){Bn[Hn++]=Ei,Bn[Hn++]=Ti,Bn[Hn++]=Cr,Cr=t;var l=Ei;t=Ti;var d=32-ut(l)-1;l&=~(1<<d),o+=1;var p=32-ut(i)+d;if(30<p){var M=d-d%5;p=(l&(1<<M)-1).toString(32),l>>=M,d-=M,Ei=1<<32-ut(i)+d|o<<d|l,Ti=p+t}else Ei=1<<p|o<<d|l,Ti=t}function cc(t){t.return!==null&&(Rr(t,1),Ff(t,1,0))}function uc(t){for(;t===ma;)ma=cs[--us],cs[us]=null,ga=cs[--us],cs[us]=null;for(;t===Cr;)Cr=Bn[--Hn],Bn[Hn]=null,Ti=Bn[--Hn],Bn[Hn]=null,Ei=Bn[--Hn],Bn[Hn]=null}var Nn=null,Dn=null,Ot=!1,Zn=null;function Of(t,i){var o=jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function kf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Nn=t,Dn=Zi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Nn=t,Dn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Cr!==null?{id:Ei,overflow:Ti}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=jn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Nn=t,Dn=null,!0):!1;default:return!1}}function dc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fc(t){if(Ot){var i=Dn;if(i){var o=i;if(!kf(t,i)){if(dc(t))throw Error(n(418));i=Zi(o.nextSibling);var l=Nn;i&&kf(t,i)?Of(l,o):(t.flags=t.flags&-4097|2,Ot=!1,Nn=t)}}else{if(dc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,Nn=t}}}function zf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function va(t){if(t!==Nn)return!1;if(!Ot)return zf(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ic(t.type,t.memoizedProps)),i&&(i=Dn)){if(dc(t))throw Bf(),Error(n(418));for(;i;)Of(t,i),i=Zi(i.nextSibling)}if(zf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Dn=Zi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Dn=null}}else Dn=Nn?Zi(t.stateNode.nextSibling):null;return!0}function Bf(){for(var t=Dn;t;)t=Zi(t.nextSibling)}function ds(){Dn=Nn=null,Ot=!1}function hc(t){Zn===null?Zn=[t]:Zn.push(t)}var iv=R.ReactCurrentBatchConfig;function po(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var d=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var D=d.refs;M===null?delete D[p]:D[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function _a(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Hf(t){var i=t._init;return i(t._payload)}function Vf(t){function i($,V){if(t){var J=$.deletions;J===null?($.deletions=[V],$.flags|=16):J.push(V)}}function o($,V){if(!t)return null;for(;V!==null;)i($,V),V=V.sibling;return null}function l($,V){for($=new Map;V!==null;)V.key!==null?$.set(V.key,V):$.set(V.index,V),V=V.sibling;return $}function d($,V){return $=lr($,V),$.index=0,$.sibling=null,$}function p($,V,J){return $.index=J,t?(J=$.alternate,J!==null?(J=J.index,J<V?($.flags|=2,V):J):($.flags|=2,V)):($.flags|=1048576,V)}function M($){return t&&$.alternate===null&&($.flags|=2),$}function D($,V,J,Ce){return V===null||V.tag!==6?(V=ru(J,$.mode,Ce),V.return=$,V):(V=d(V,J),V.return=$,V)}function k($,V,J,Ce){var qe=J.type;return qe===O?ye($,V,J.props.children,Ce,J.key):V!==null&&(V.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===le&&Hf(qe)===V.type)?(Ce=d(V,J.props),Ce.ref=po($,V,J),Ce.return=$,Ce):(Ce=Va(J.type,J.key,J.props,null,$.mode,Ce),Ce.ref=po($,V,J),Ce.return=$,Ce)}function ie($,V,J,Ce){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=su(J,$.mode,Ce),V.return=$,V):(V=d(V,J.children||[]),V.return=$,V)}function ye($,V,J,Ce,qe){return V===null||V.tag!==7?(V=Fr(J,$.mode,Ce,qe),V.return=$,V):(V=d(V,J),V.return=$,V)}function Ee($,V,J){if(typeof V=="string"&&V!==""||typeof V=="number")return V=ru(""+V,$.mode,J),V.return=$,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Q:return J=Va(V.type,V.key,V.props,null,$.mode,J),J.ref=po($,null,V),J.return=$,J;case B:return V=su(V,$.mode,J),V.return=$,V;case le:var Ce=V._init;return Ee($,Ce(V._payload),J)}if($e(V)||K(V))return V=Fr(V,$.mode,J,null),V.return=$,V;_a($,V)}return null}function xe($,V,J,Ce){var qe=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return qe!==null?null:D($,V,""+J,Ce);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Q:return J.key===qe?k($,V,J,Ce):null;case B:return J.key===qe?ie($,V,J,Ce):null;case le:return qe=J._init,xe($,V,qe(J._payload),Ce)}if($e(J)||K(J))return qe!==null?null:ye($,V,J,Ce,null);_a($,J)}return null}function Fe($,V,J,Ce,qe){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return $=$.get(J)||null,D(V,$,""+Ce,qe);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case Q:return $=$.get(Ce.key===null?J:Ce.key)||null,k(V,$,Ce,qe);case B:return $=$.get(Ce.key===null?J:Ce.key)||null,ie(V,$,Ce,qe);case le:var Qe=Ce._init;return Fe($,V,J,Qe(Ce._payload),qe)}if($e(Ce)||K(Ce))return $=$.get(J)||null,ye(V,$,Ce,qe,null);_a(V,Ce)}return null}function Ve($,V,J,Ce){for(var qe=null,Qe=null,Je=V,st=V=0,en=null;Je!==null&&st<J.length;st++){Je.index>st?(en=Je,Je=null):en=Je.sibling;var Et=xe($,Je,J[st],Ce);if(Et===null){Je===null&&(Je=en);break}t&&Je&&Et.alternate===null&&i($,Je),V=p(Et,V,st),Qe===null?qe=Et:Qe.sibling=Et,Qe=Et,Je=en}if(st===J.length)return o($,Je),Ot&&Rr($,st),qe;if(Je===null){for(;st<J.length;st++)Je=Ee($,J[st],Ce),Je!==null&&(V=p(Je,V,st),Qe===null?qe=Je:Qe.sibling=Je,Qe=Je);return Ot&&Rr($,st),qe}for(Je=l($,Je);st<J.length;st++)en=Fe(Je,$,st,J[st],Ce),en!==null&&(t&&en.alternate!==null&&Je.delete(en.key===null?st:en.key),V=p(en,V,st),Qe===null?qe=en:Qe.sibling=en,Qe=en);return t&&Je.forEach(function(cr){return i($,cr)}),Ot&&Rr($,st),qe}function We($,V,J,Ce){var qe=K(J);if(typeof qe!="function")throw Error(n(150));if(J=qe.call(J),J==null)throw Error(n(151));for(var Qe=qe=null,Je=V,st=V=0,en=null,Et=J.next();Je!==null&&!Et.done;st++,Et=J.next()){Je.index>st?(en=Je,Je=null):en=Je.sibling;var cr=xe($,Je,Et.value,Ce);if(cr===null){Je===null&&(Je=en);break}t&&Je&&cr.alternate===null&&i($,Je),V=p(cr,V,st),Qe===null?qe=cr:Qe.sibling=cr,Qe=cr,Je=en}if(Et.done)return o($,Je),Ot&&Rr($,st),qe;if(Je===null){for(;!Et.done;st++,Et=J.next())Et=Ee($,Et.value,Ce),Et!==null&&(V=p(Et,V,st),Qe===null?qe=Et:Qe.sibling=Et,Qe=Et);return Ot&&Rr($,st),qe}for(Je=l($,Je);!Et.done;st++,Et=J.next())Et=Fe(Je,$,st,Et.value,Ce),Et!==null&&(t&&Et.alternate!==null&&Je.delete(Et.key===null?st:Et.key),V=p(Et,V,st),Qe===null?qe=Et:Qe.sibling=Et,Qe=Et);return t&&Je.forEach(function(Fv){return i($,Fv)}),Ot&&Rr($,st),qe}function Ht($,V,J,Ce){if(typeof J=="object"&&J!==null&&J.type===O&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case Q:e:{for(var qe=J.key,Qe=V;Qe!==null;){if(Qe.key===qe){if(qe=J.type,qe===O){if(Qe.tag===7){o($,Qe.sibling),V=d(Qe,J.props.children),V.return=$,$=V;break e}}else if(Qe.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===le&&Hf(qe)===Qe.type){o($,Qe.sibling),V=d(Qe,J.props),V.ref=po($,Qe,J),V.return=$,$=V;break e}o($,Qe);break}else i($,Qe);Qe=Qe.sibling}J.type===O?(V=Fr(J.props.children,$.mode,Ce,J.key),V.return=$,$=V):(Ce=Va(J.type,J.key,J.props,null,$.mode,Ce),Ce.ref=po($,V,J),Ce.return=$,$=Ce)}return M($);case B:e:{for(Qe=J.key;V!==null;){if(V.key===Qe)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){o($,V.sibling),V=d(V,J.children||[]),V.return=$,$=V;break e}else{o($,V);break}else i($,V);V=V.sibling}V=su(J,$.mode,Ce),V.return=$,$=V}return M($);case le:return Qe=J._init,Ht($,V,Qe(J._payload),Ce)}if($e(J))return Ve($,V,J,Ce);if(K(J))return We($,V,J,Ce);_a($,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,V!==null&&V.tag===6?(o($,V.sibling),V=d(V,J),V.return=$,$=V):(o($,V),V=ru(J,$.mode,Ce),V.return=$,$=V),M($)):o($,V)}return Ht}var fs=Vf(!0),Gf=Vf(!1),xa=Qi(null),Sa=null,hs=null,pc=null;function mc(){pc=hs=Sa=null}function gc(t){var i=xa.current;Ft(xa),t._currentValue=i}function vc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ps(t,i){Sa=t,pc=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(wn=!0),t.firstContext=null)}function Vn(t){var i=t._currentValue;if(pc!==t)if(t={context:t,memoizedValue:i,next:null},hs===null){if(Sa===null)throw Error(n(308));hs=t,Sa.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return i}var br=null;function _c(t){br===null?br=[t]:br.push(t)}function Wf(t,i,o,l){var d=i.interleaved;return d===null?(o.next=o,_c(i)):(o.next=d.next,d.next=o),i.interleaved=o,wi(t,l)}function wi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var tr=!1;function xc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function nr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(xt&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,wi(t,o)}return d=l.interleaved,d===null?(i.next=i,_c(l)):(i.next=d.next,d.next=i),l.interleaved=i,wi(t,o)}function ya(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Dl(t,o)}}function Xf(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ma(t,i,o,l){var d=t.updateQueue;tr=!1;var p=d.firstBaseUpdate,M=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var k=D,ie=k.next;k.next=null,M===null?p=ie:M.next=ie,M=k;var ye=t.alternate;ye!==null&&(ye=ye.updateQueue,D=ye.lastBaseUpdate,D!==M&&(D===null?ye.firstBaseUpdate=ie:D.next=ie,ye.lastBaseUpdate=k))}if(p!==null){var Ee=d.baseState;M=0,ye=ie=k=null,D=p;do{var xe=D.lane,Fe=D.eventTime;if((l&xe)===xe){ye!==null&&(ye=ye.next={eventTime:Fe,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Ve=t,We=D;switch(xe=i,Fe=o,We.tag){case 1:if(Ve=We.payload,typeof Ve=="function"){Ee=Ve.call(Fe,Ee,xe);break e}Ee=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=We.payload,xe=typeof Ve=="function"?Ve.call(Fe,Ee,xe):Ve,xe==null)break e;Ee=Y({},Ee,xe);break e;case 2:tr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,xe=d.effects,xe===null?d.effects=[D]:xe.push(D))}else Fe={eventTime:Fe,lane:xe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ye===null?(ie=ye=Fe,k=Ee):ye=ye.next=Fe,M|=xe;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;xe=D,D=xe.next,xe.next=null,d.lastBaseUpdate=xe,d.shared.pending=null}}while(!0);if(ye===null&&(k=Ee),d.baseState=k,d.firstBaseUpdate=ie,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Nr|=M,t.lanes=M,t.memoizedState=Ee}}function Yf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=o,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var mo={},fi=Qi(mo),go=Qi(mo),vo=Qi(mo);function Pr(t){if(t===mo)throw Error(n(174));return t}function Sc(t,i){switch(Dt(vo,i),Dt(go,t),Dt(fi,mo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:je(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=je(i,t)}Ft(fi),Dt(fi,i)}function ms(){Ft(fi),Ft(go),Ft(vo)}function qf(t){Pr(vo.current);var i=Pr(fi.current),o=je(i,t.type);i!==o&&(Dt(go,t),Dt(fi,o))}function yc(t){go.current===t&&(Ft(fi),Ft(go))}var kt=Qi(0);function Ea(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Mc=[];function Ec(){for(var t=0;t<Mc.length;t++)Mc[t]._workInProgressVersionPrimary=null;Mc.length=0}var Ta=R.ReactCurrentDispatcher,Tc=R.ReactCurrentBatchConfig,Lr=0,zt=null,qt=null,Qt=null,wa=!1,_o=!1,xo=0,rv=0;function ln(){throw Error(n(321))}function wc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Kn(t[o],i[o]))return!1;return!0}function Ac(t,i,o,l,d,p){if(Lr=p,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ta.current=t===null||t.memoizedState===null?lv:cv,t=o(l,d),_o){p=0;do{if(_o=!1,xo=0,25<=p)throw Error(n(301));p+=1,Qt=qt=null,i.updateQueue=null,Ta.current=uv,t=o(l,d)}while(_o)}if(Ta.current=Ra,i=qt!==null&&qt.next!==null,Lr=0,Qt=qt=zt=null,wa=!1,i)throw Error(n(300));return t}function Cc(){var t=xo!==0;return xo=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?zt.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function Gn(){if(qt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=Qt===null?zt.memoizedState:Qt.next;if(i!==null)Qt=i,qt=t;else{if(t===null)throw Error(n(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},Qt===null?zt.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function So(t,i){return typeof i=="function"?i(t):i}function Rc(t){var i=Gn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=qt,d=l.baseQueue,p=o.pending;if(p!==null){if(d!==null){var M=d.next;d.next=p.next,p.next=M}l.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,l=l.baseState;var D=M=null,k=null,ie=p;do{var ye=ie.lane;if((Lr&ye)===ye)k!==null&&(k=k.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),l=ie.hasEagerState?ie.eagerState:t(l,ie.action);else{var Ee={lane:ye,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};k===null?(D=k=Ee,M=l):k=k.next=Ee,zt.lanes|=ye,Nr|=ye}ie=ie.next}while(ie!==null&&ie!==p);k===null?M=l:k.next=D,Kn(l,i.memoizedState)||(wn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=k,o.lastRenderedState=l}if(t=o.interleaved,t!==null){d=t;do p=d.lane,zt.lanes|=p,Nr|=p,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function bc(t){var i=Gn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do p=t(p,M.action),M=M.next;while(M!==d);Kn(p,i.memoizedState)||(wn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,l]}function $f(){}function Kf(t,i){var o=zt,l=Gn(),d=i(),p=!Kn(l.memoizedState,d);if(p&&(l.memoizedState=d,wn=!0),l=l.queue,Pc(Jf.bind(null,o,l,t),[t]),l.getSnapshot!==i||p||Qt!==null&&Qt.memoizedState.tag&1){if(o.flags|=2048,yo(9,Qf.bind(null,o,l,d,i),void 0,null),Jt===null)throw Error(n(349));(Lr&30)!==0||Zf(o,i,d)}return d}function Zf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Qf(t,i,o,l){i.value=o,i.getSnapshot=l,eh(i)&&th(t)}function Jf(t,i,o){return o(function(){eh(i)&&th(t)})}function eh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Kn(t,o)}catch{return!0}}function th(t){var i=wi(t,1);i!==null&&ti(i,t,1,-1)}function nh(t){var i=hi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},i.queue=t,t=t.dispatch=av.bind(null,zt,t),[i.memoizedState,t]}function yo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function ih(){return Gn().memoizedState}function Aa(t,i,o,l){var d=hi();zt.flags|=t,d.memoizedState=yo(1|i,o,void 0,l===void 0?null:l)}function Ca(t,i,o,l){var d=Gn();l=l===void 0?null:l;var p=void 0;if(qt!==null){var M=qt.memoizedState;if(p=M.destroy,l!==null&&wc(l,M.deps)){d.memoizedState=yo(i,o,p,l);return}}zt.flags|=t,d.memoizedState=yo(1|i,o,p,l)}function rh(t,i){return Aa(8390656,8,t,i)}function Pc(t,i){return Ca(2048,8,t,i)}function sh(t,i){return Ca(4,2,t,i)}function oh(t,i){return Ca(4,4,t,i)}function ah(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function lh(t,i,o){return o=o!=null?o.concat([t]):null,Ca(4,4,ah.bind(null,i,t),o)}function Lc(){}function ch(t,i){var o=Gn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&wc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function uh(t,i){var o=Gn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&wc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function dh(t,i,o){return(Lr&21)===0?(t.baseState&&(t.baseState=!1,wn=!0),t.memoizedState=o):(Kn(o,i)||(o=pn(),zt.lanes|=o,Nr|=o,t.baseState=!0),i)}function sv(t,i){var o=bt;bt=o!==0&&4>o?o:4,t(!0);var l=Tc.transition;Tc.transition={};try{t(!1),i()}finally{bt=o,Tc.transition=l}}function fh(){return Gn().memoizedState}function ov(t,i,o){var l=or(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},hh(t))ph(i,o);else if(o=Wf(t,i,o,l),o!==null){var d=gn();ti(o,t,l,d),mh(o,i,l)}}function av(t,i,o){var l=or(t),d={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(hh(t))ph(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,D=p(M,o);if(d.hasEagerState=!0,d.eagerState=D,Kn(D,M)){var k=i.interleaved;k===null?(d.next=d,_c(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}o=Wf(t,i,d,l),o!==null&&(d=gn(),ti(o,t,l,d),mh(o,i,l))}}function hh(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function ph(t,i){_o=wa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function mh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Dl(t,o)}}var Ra={readContext:Vn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},lv={readContext:Vn,useCallback:function(t,i){return hi().memoizedState=[t,i===void 0?null:i],t},useContext:Vn,useEffect:rh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Aa(4194308,4,ah.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Aa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Aa(4,2,t,i)},useMemo:function(t,i){var o=hi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=hi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=ov.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=hi();return t={current:t},i.memoizedState=t},useState:nh,useDebugValue:Lc,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=nh(!1),i=t[0];return t=sv.bind(null,t[1]),hi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=zt,d=hi();if(Ot){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Jt===null)throw Error(n(349));(Lr&30)!==0||Zf(l,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,rh(Jf.bind(null,l,p,t),[t]),l.flags|=2048,yo(9,Qf.bind(null,l,p,o,i),void 0,null),o},useId:function(){var t=hi(),i=Jt.identifierPrefix;if(Ot){var o=Ti,l=Ei;o=(l&~(1<<32-ut(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=xo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=rv++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},cv={readContext:Vn,useCallback:ch,useContext:Vn,useEffect:Pc,useImperativeHandle:lh,useInsertionEffect:sh,useLayoutEffect:oh,useMemo:uh,useReducer:Rc,useRef:ih,useState:function(){return Rc(So)},useDebugValue:Lc,useDeferredValue:function(t){var i=Gn();return dh(i,qt.memoizedState,t)},useTransition:function(){var t=Rc(So)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:$f,useSyncExternalStore:Kf,useId:fh,unstable_isNewReconciler:!1},uv={readContext:Vn,useCallback:ch,useContext:Vn,useEffect:Pc,useImperativeHandle:lh,useInsertionEffect:sh,useLayoutEffect:oh,useMemo:uh,useReducer:bc,useRef:ih,useState:function(){return bc(So)},useDebugValue:Lc,useDeferredValue:function(t){var i=Gn();return qt===null?i.memoizedState=t:dh(i,qt.memoizedState,t)},useTransition:function(){var t=bc(So)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:$f,useSyncExternalStore:Kf,useId:fh,unstable_isNewReconciler:!1};function Qn(t,i){if(t&&t.defaultProps){i=Y({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Nc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:Y({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var ba={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=gn(),d=or(t),p=Ai(l,d);p.payload=i,o!=null&&(p.callback=o),i=nr(t,p,d),i!==null&&(ti(i,t,d,l),ya(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=gn(),d=or(t),p=Ai(l,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=nr(t,p,d),i!==null&&(ti(i,t,d,l),ya(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=gn(),l=or(t),d=Ai(o,l);d.tag=2,i!=null&&(d.callback=i),i=nr(t,d,l),i!==null&&(ti(i,t,l,o),ya(i,t,l))}};function gh(t,i,o,l,d,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!oo(o,l)||!oo(d,p):!0}function vh(t,i,o){var l=!1,d=Ji,p=i.contextType;return typeof p=="object"&&p!==null?p=Vn(p):(d=Tn(i)?Ar:an.current,l=i.contextTypes,p=(l=l!=null)?ls(t,d):Ji),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ba,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function _h(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&ba.enqueueReplaceState(i,i.state,null)}function Dc(t,i,o,l){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},xc(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Vn(p):(p=Tn(i)?Ar:an.current,d.context=ls(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Nc(t,i,p,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ba.enqueueReplaceState(d,d.state,null),Ma(t,o,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,i){try{var o="",l=i;do o+=fe(l),l=l.return;while(l);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function Uc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Ic(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var dv=typeof WeakMap=="function"?WeakMap:Map;function xh(t,i,o){o=Ai(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Fa||(Fa=!0,Kc=l),Ic(t,i)},o}function Sh(t,i,o){o=Ai(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;o.payload=function(){return l(d)},o.callback=function(){Ic(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Ic(t,i),typeof l!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function yh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new dv;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(o)||(d.add(o),t=wv.bind(null,t,i,o),i.then(t,t))}function Mh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Eh(t,i,o,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ai(-1,1),i.tag=2,nr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var fv=R.ReactCurrentOwner,wn=!1;function mn(t,i,o,l){i.child=t===null?Gf(i,null,o,l):fs(i,t.child,o,l)}function Th(t,i,o,l,d){o=o.render;var p=i.ref;return ps(i,d),l=Ac(t,i,o,l,p,d),o=Cc(),t!==null&&!wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ci(t,i,d)):(Ot&&o&&cc(i),i.flags|=1,mn(t,i,l,d),i.child)}function wh(t,i,o,l,d){if(t===null){var p=o.type;return typeof p=="function"&&!iu(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Ah(t,i,p,l,d)):(t=Va(o.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:oo,o(M,l)&&t.ref===i.ref)return Ci(t,i,d)}return i.flags|=1,t=lr(p,l),t.ref=i.ref,t.return=i,i.child=t}function Ah(t,i,o,l,d){if(t!==null){var p=t.memoizedProps;if(oo(p,l)&&t.ref===i.ref)if(wn=!1,i.pendingProps=l=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(wn=!0);else return i.lanes=t.lanes,Ci(t,i,d)}return Fc(t,i,o,l,d)}function Ch(t,i,o){var l=i.pendingProps,d=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(_s,Un),Un|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(_s,Un),Un|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,Dt(_s,Un),Un|=l}else p!==null?(l=p.baseLanes|o,i.memoizedState=null):l=o,Dt(_s,Un),Un|=l;return mn(t,i,d,o),i.child}function Rh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Fc(t,i,o,l,d){var p=Tn(o)?Ar:an.current;return p=ls(i,p),ps(i,d),o=Ac(t,i,o,l,p,d),l=Cc(),t!==null&&!wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ci(t,i,d)):(Ot&&l&&cc(i),i.flags|=1,mn(t,i,o,d),i.child)}function bh(t,i,o,l,d){if(Tn(o)){var p=!0;ha(i)}else p=!1;if(ps(i,d),i.stateNode===null)La(t,i),vh(i,o,l),Dc(i,o,l,d),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var k=M.context,ie=o.contextType;typeof ie=="object"&&ie!==null?ie=Vn(ie):(ie=Tn(o)?Ar:an.current,ie=ls(i,ie));var ye=o.getDerivedStateFromProps,Ee=typeof ye=="function"||typeof M.getSnapshotBeforeUpdate=="function";Ee||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||k!==ie)&&_h(i,M,l,ie),tr=!1;var xe=i.memoizedState;M.state=xe,Ma(i,l,M,d),k=i.memoizedState,D!==l||xe!==k||En.current||tr?(typeof ye=="function"&&(Nc(i,o,ye,l),k=i.memoizedState),(D=tr||gh(i,o,D,l,xe,k,ie))?(Ee||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),M.props=l,M.state=k,M.context=ie,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,jf(t,i),D=i.memoizedProps,ie=i.type===i.elementType?D:Qn(i.type,D),M.props=ie,Ee=i.pendingProps,xe=M.context,k=o.contextType,typeof k=="object"&&k!==null?k=Vn(k):(k=Tn(o)?Ar:an.current,k=ls(i,k));var Fe=o.getDerivedStateFromProps;(ye=typeof Fe=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==Ee||xe!==k)&&_h(i,M,l,k),tr=!1,xe=i.memoizedState,M.state=xe,Ma(i,l,M,d);var Ve=i.memoizedState;D!==Ee||xe!==Ve||En.current||tr?(typeof Fe=="function"&&(Nc(i,o,Fe,l),Ve=i.memoizedState),(ie=tr||gh(i,o,ie,l,xe,Ve,k)||!1)?(ye||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Ve,k),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Ve,k)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ve),M.props=l,M.state=Ve,M.context=k,l=ie):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),l=!1)}return Oc(t,i,o,l,p,d)}function Oc(t,i,o,l,d,p){Rh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return d&&Uf(i,o,!1),Ci(t,i,p);l=i.stateNode,fv.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=fs(i,t.child,null,p),i.child=fs(i,null,D,p)):mn(t,i,D,p),i.memoizedState=l.state,d&&Uf(i,o,!0),i.child}function Ph(t){var i=t.stateNode;i.pendingContext?Nf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Nf(t,i.context,!1),Sc(t,i.containerInfo)}function Lh(t,i,o,l,d){return ds(),hc(d),i.flags|=256,mn(t,i,o,l),i.child}var kc={dehydrated:null,treeContext:null,retryLane:0};function zc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Nh(t,i,o){var l=i.pendingProps,d=kt.current,p=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(d&2)!==0),D?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Dt(kt,d&1),t===null)return fc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,p?(l=i.mode,p=i.child,M={mode:"hidden",children:M},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Ga(M,l,0,null),t=Fr(t,l,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=zc(o),i.memoizedState=kc,t):Bc(i,M));if(d=t.memoizedState,d!==null&&(D=d.dehydrated,D!==null))return hv(t,i,M,l,D,d,o);if(p){p=l.fallback,M=i.mode,d=t.child,D=d.sibling;var k={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=k,i.deletions=null):(l=lr(d,k),l.subtreeFlags=d.subtreeFlags&14680064),D!==null?p=lr(D,p):(p=Fr(p,M,o,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,M=t.child.memoizedState,M=M===null?zc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~o,i.memoizedState=kc,l}return p=t.child,t=p.sibling,l=lr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Bc(t,i){return i=Ga({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Pa(t,i,o,l){return l!==null&&hc(l),fs(i,t.child,null,o),t=Bc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function hv(t,i,o,l,d,p,M){if(o)return i.flags&256?(i.flags&=-257,l=Uc(Error(n(422))),Pa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,d=i.mode,l=Ga({mode:"visible",children:l.children},d,0,null),p=Fr(p,d,M,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&fs(i,t.child,null,M),i.child.memoizedState=zc(M),i.memoizedState=kc,p);if((i.mode&1)===0)return Pa(t,i,M,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var D=l.dgst;return l=D,p=Error(n(419)),l=Uc(p,l,void 0),Pa(t,i,M,l)}if(D=(M&t.childLanes)!==0,wn||D){if(l=Jt,l!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|M))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,wi(t,d),ti(l,t,d,-1))}return nu(),l=Uc(Error(n(421))),Pa(t,i,M,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Av.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,Dn=Zi(d.nextSibling),Nn=i,Ot=!0,Zn=null,t!==null&&(Bn[Hn++]=Ei,Bn[Hn++]=Ti,Bn[Hn++]=Cr,Ei=t.id,Ti=t.overflow,Cr=i),i=Bc(i,l.children),i.flags|=4096,i)}function Dh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),vc(t.return,i,o)}function Hc(t,i,o,l,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=d)}function Uh(t,i,o){var l=i.pendingProps,d=l.revealOrder,p=l.tail;if(mn(t,i,l.children,o),l=kt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dh(t,o,i);else if(t.tag===19)Dh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(kt,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Ea(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Hc(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Ea(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}Hc(i,!0,o,null,p);break;case"together":Hc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function La(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ci(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Nr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=lr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=lr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function pv(t,i,o){switch(i.tag){case 3:Ph(i),ds();break;case 5:qf(i);break;case 1:Tn(i.type)&&ha(i);break;case 4:Sc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;Dt(xa,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(kt,kt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Nh(t,i,o):(Dt(kt,kt.current&1),t=Ci(t,i,o),t!==null?t.sibling:null);Dt(kt,kt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Uh(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Dt(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,Ch(t,i,o)}return Ci(t,i,o)}var Ih,Vc,Fh,Oh;Ih=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Vc=function(){},Fh=function(t,i,o,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,Pr(fi.current);var p=null;switch(o){case"input":d=H(t,d),l=H(t,l),p=[];break;case"select":d=Y({},d,{value:void 0}),l=Y({},l,{value:void 0}),p=[];break;case"textarea":d=T(t,d),l=T(t,l),p=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ua)}pt(o,l);var M;o=null;for(ie in d)if(!l.hasOwnProperty(ie)&&d.hasOwnProperty(ie)&&d[ie]!=null)if(ie==="style"){var D=d[ie];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(a.hasOwnProperty(ie)?p||(p=[]):(p=p||[]).push(ie,null));for(ie in l){var k=l[ie];if(D=d?.[ie],l.hasOwnProperty(ie)&&k!==D&&(k!=null||D!=null))if(ie==="style")if(D){for(M in D)!D.hasOwnProperty(M)||k&&k.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in k)k.hasOwnProperty(M)&&D[M]!==k[M]&&(o||(o={}),o[M]=k[M])}else o||(p||(p=[]),p.push(ie,o)),o=k;else ie==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,D=D?D.__html:void 0,k!=null&&D!==k&&(p=p||[]).push(ie,k)):ie==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(ie,""+k):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(a.hasOwnProperty(ie)?(k!=null&&ie==="onScroll"&&It("scroll",t),p||D===k||(p=[])):(p=p||[]).push(ie,k))}o&&(p=p||[]).push("style",o);var ie=p;(i.updateQueue=ie)&&(i.flags|=4)}},Oh=function(t,i,o,l){o!==l&&(i.flags|=4)};function Mo(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function cn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function mv(t,i,o){var l=i.pendingProps;switch(uc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return Tn(i.type)&&fa(),cn(i),null;case 3:return l=i.stateNode,ms(),Ft(En),Ft(an),Ec(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(va(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Zn!==null&&(Jc(Zn),Zn=null))),Vc(t,i),cn(i),null;case 5:yc(i);var d=Pr(vo.current);if(o=i.type,t!==null&&i.stateNode!=null)Fh(t,i,o,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return cn(i),null}if(t=Pr(fi.current),va(i)){l=i.stateNode,o=i.type;var p=i.memoizedProps;switch(l[di]=i,l[fo]=p,t=(i.mode&1)!==0,o){case"dialog":It("cancel",l),It("close",l);break;case"iframe":case"object":case"embed":It("load",l);break;case"video":case"audio":for(d=0;d<lo.length;d++)It(lo[d],l);break;case"source":It("error",l);break;case"img":case"image":case"link":It("error",l),It("load",l);break;case"details":It("toggle",l);break;case"input":Ct(l,p),It("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},It("invalid",l);break;case"textarea":te(l,p),It("invalid",l)}pt(o,p),d=null;for(var M in p)if(p.hasOwnProperty(M)){var D=p[M];M==="children"?typeof D=="string"?l.textContent!==D&&(p.suppressHydrationWarning!==!0&&ca(l.textContent,D,t),d=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(p.suppressHydrationWarning!==!0&&ca(l.textContent,D,t),d=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&It("scroll",l)}switch(o){case"input":ze(l),Ze(l,p,!0);break;case"textarea":ze(l),Se(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=ua)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pe(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[di]=i,t[fo]=l,Ih(t,i,!1,!1),i.stateNode=t;e:{switch(M=lt(o,l),o){case"dialog":It("cancel",t),It("close",t),d=l;break;case"iframe":case"object":case"embed":It("load",t),d=l;break;case"video":case"audio":for(d=0;d<lo.length;d++)It(lo[d],t);d=l;break;case"source":It("error",t),d=l;break;case"img":case"image":case"link":It("error",t),It("load",t),d=l;break;case"details":It("toggle",t),d=l;break;case"input":Ct(t,l),d=H(t,l),It("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=Y({},l,{value:void 0}),It("invalid",t);break;case"textarea":te(t,l),d=T(t,l),It("invalid",t);break;default:d=l}pt(o,d),D=d;for(p in D)if(D.hasOwnProperty(p)){var k=D[p];p==="style"?it(t,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Oe(t,k)):p==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&ht(t,k):typeof k=="number"&&ht(t,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?k!=null&&p==="onScroll"&&It("scroll",t):k!=null&&N(t,p,k,M))}switch(o){case"input":ze(t),Ze(t,l,!1);break;case"textarea":ze(t),Se(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Te(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?L(t,!!l.multiple,p,!1):l.defaultValue!=null&&L(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=ua)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return cn(i),null;case 6:if(t&&i.stateNode!=null)Oh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Pr(vo.current),Pr(fi.current),va(i)){if(l=i.stateNode,o=i.memoizedProps,l[di]=i,(p=l.nodeValue!==o)&&(t=Nn,t!==null))switch(t.tag){case 3:ca(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ca(l.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[di]=i,i.stateNode=l}return cn(i),null;case 13:if(Ft(kt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&Dn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Bf(),ds(),i.flags|=98560,p=!1;else if(p=va(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[di]=i}else ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),p=!1}else Zn!==null&&(Jc(Zn),Zn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(kt.current&1)!==0?$t===0&&($t=3):nu())),i.updateQueue!==null&&(i.flags|=4),cn(i),null);case 4:return ms(),Vc(t,i),t===null&&co(i.stateNode.containerInfo),cn(i),null;case 10:return gc(i.type._context),cn(i),null;case 17:return Tn(i.type)&&fa(),cn(i),null;case 19:if(Ft(kt),p=i.memoizedState,p===null)return cn(i),null;if(l=(i.flags&128)!==0,M=p.rendering,M===null)if(l)Mo(p,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ea(t),M!==null){for(i.flags|=128,Mo(p,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)p=o,t=l,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Dt(kt,kt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Ae()>xs&&(i.flags|=128,l=!0,Mo(p,!1),i.lanes=4194304)}else{if(!l)if(t=Ea(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Mo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Ot)return cn(i),null}else 2*Ae()-p.renderingStartTime>xs&&o!==1073741824&&(i.flags|=128,l=!0,Mo(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ae(),i.sibling=null,o=kt.current,Dt(kt,l?o&1|2:o&1),i):(cn(i),null);case 22:case 23:return tu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Un&1073741824)!==0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function gv(t,i){switch(uc(i),i.tag){case 1:return Tn(i.type)&&fa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ms(),Ft(En),Ft(an),Ec(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return yc(i),null;case 13:if(Ft(kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ds()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ft(kt),null;case 4:return ms(),null;case 10:return gc(i.type._context),null;case 22:case 23:return tu(),null;case 24:return null;default:return null}}var Na=!1,un=!1,vv=typeof WeakSet=="function"?WeakSet:Set,ke=null;function vs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Bt(t,i,l)}else o.current=null}function Gc(t,i,o){try{o()}catch(l){Bt(t,i,l)}}var kh=!1;function _v(t,i){if(tc=Qo,t=gf(),Yl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,D=-1,k=-1,ie=0,ye=0,Ee=t,xe=null;t:for(;;){for(var Fe;Ee!==o||d!==0&&Ee.nodeType!==3||(D=M+d),Ee!==p||l!==0&&Ee.nodeType!==3||(k=M+l),Ee.nodeType===3&&(M+=Ee.nodeValue.length),(Fe=Ee.firstChild)!==null;)xe=Ee,Ee=Fe;for(;;){if(Ee===t)break t;if(xe===o&&++ie===d&&(D=M),xe===p&&++ye===l&&(k=M),(Fe=Ee.nextSibling)!==null)break;Ee=xe,xe=Ee.parentNode}Ee=Fe}o=D===-1||k===-1?null:{start:D,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(nc={focusedElem:t,selectionRange:o},Qo=!1,ke=i;ke!==null;)if(i=ke,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ke=t;else for(;ke!==null;){i=ke;try{var Ve=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var We=Ve.memoizedProps,Ht=Ve.memoizedState,$=i.stateNode,V=$.getSnapshotBeforeUpdate(i.elementType===i.type?We:Qn(i.type,We),Ht);$.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ce){Bt(i,i.return,Ce)}if(t=i.sibling,t!==null){t.return=i.return,ke=t;break}ke=i.return}return Ve=kh,kh=!1,Ve}function Eo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&Gc(i,o,p)}d=d.next}while(d!==l)}}function Da(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Wc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function zh(t){var i=t.alternate;i!==null&&(t.alternate=null,zh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[di],delete i[fo],delete i[oc],delete i[ev],delete i[tv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Bh(t){return t.tag===5||t.tag===3||t.tag===4}function Hh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ua));else if(l!==4&&(t=t.child,t!==null))for(jc(t,i,o),t=t.sibling;t!==null;)jc(t,i,o),t=t.sibling}function Xc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Xc(t,i,o),t=t.sibling;t!==null;)Xc(t,i,o),t=t.sibling}var nn=null,Jn=!1;function ir(t,i,o){for(o=o.child;o!==null;)Vh(t,i,o),o=o.sibling}function Vh(t,i,o){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(At,o)}catch{}switch(o.tag){case 5:un||vs(o,i);case 6:var l=nn,d=Jn;nn=null,ir(t,i,o),nn=l,Jn=d,nn!==null&&(Jn?(t=nn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):nn.removeChild(o.stateNode));break;case 18:nn!==null&&(Jn?(t=nn,o=o.stateNode,t.nodeType===8?sc(t.parentNode,o):t.nodeType===1&&sc(t,o),eo(t)):sc(nn,o.stateNode));break;case 4:l=nn,d=Jn,nn=o.stateNode.containerInfo,Jn=!0,ir(t,i,o),nn=l,Jn=d;break;case 0:case 11:case 14:case 15:if(!un&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var p=d,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&Gc(o,i,M),d=d.next}while(d!==l)}ir(t,i,o);break;case 1:if(!un&&(vs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(D){Bt(o,i,D)}ir(t,i,o);break;case 21:ir(t,i,o);break;case 22:o.mode&1?(un=(l=un)||o.memoizedState!==null,ir(t,i,o),un=l):ir(t,i,o);break;default:ir(t,i,o)}}function Gh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new vv),i.forEach(function(l){var d=Cv.bind(null,t,l);o.has(l)||(o.add(l),l.then(d,d))})}}function ei(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var d=o[l];try{var p=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:nn=D.stateNode,Jn=!1;break e;case 3:nn=D.stateNode.containerInfo,Jn=!0;break e;case 4:nn=D.stateNode.containerInfo,Jn=!0;break e}D=D.return}if(nn===null)throw Error(n(160));Vh(p,M,d),nn=null,Jn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(ie){Bt(d,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Wh(i,t),i=i.sibling}function Wh(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ei(i,t),pi(t),l&4){try{Eo(3,t,t.return),Da(3,t)}catch(We){Bt(t,t.return,We)}try{Eo(5,t,t.return)}catch(We){Bt(t,t.return,We)}}break;case 1:ei(i,t),pi(t),l&512&&o!==null&&vs(o,o.return);break;case 5:if(ei(i,t),pi(t),l&512&&o!==null&&vs(o,o.return),t.flags&32){var d=t.stateNode;try{ht(d,"")}catch(We){Bt(t,t.return,We)}}if(l&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,M=o!==null?o.memoizedProps:p,D=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{D==="input"&&p.type==="radio"&&p.name!=null&&nt(d,p),lt(D,M);var ie=lt(D,p);for(M=0;M<k.length;M+=2){var ye=k[M],Ee=k[M+1];ye==="style"?it(d,Ee):ye==="dangerouslySetInnerHTML"?Oe(d,Ee):ye==="children"?ht(d,Ee):N(d,ye,Ee,ie)}switch(D){case"input":ot(d,p);break;case"textarea":ge(d,p);break;case"select":var xe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Fe=p.value;Fe!=null?L(d,!!p.multiple,Fe,!1):xe!==!!p.multiple&&(p.defaultValue!=null?L(d,!!p.multiple,p.defaultValue,!0):L(d,!!p.multiple,p.multiple?[]:"",!1))}d[fo]=p}catch(We){Bt(t,t.return,We)}}break;case 6:if(ei(i,t),pi(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(We){Bt(t,t.return,We)}}break;case 3:if(ei(i,t),pi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{eo(i.containerInfo)}catch(We){Bt(t,t.return,We)}break;case 4:ei(i,t),pi(t);break;case 13:ei(i,t),pi(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||($c=Ae())),l&4&&Gh(t);break;case 22:if(ye=o!==null&&o.memoizedState!==null,t.mode&1?(un=(ie=un)||ye,ei(i,t),un=ie):ei(i,t),pi(t),l&8192){if(ie=t.memoizedState!==null,(t.stateNode.isHidden=ie)&&!ye&&(t.mode&1)!==0)for(ke=t,ye=t.child;ye!==null;){for(Ee=ke=ye;ke!==null;){switch(xe=ke,Fe=xe.child,xe.tag){case 0:case 11:case 14:case 15:Eo(4,xe,xe.return);break;case 1:vs(xe,xe.return);var Ve=xe.stateNode;if(typeof Ve.componentWillUnmount=="function"){l=xe,o=xe.return;try{i=l,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(We){Bt(l,o,We)}}break;case 5:vs(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Yh(Ee);continue}}Fe!==null?(Fe.return=xe,ke=Fe):Yh(Ee)}ye=ye.sibling}e:for(ye=null,Ee=t;;){if(Ee.tag===5){if(ye===null){ye=Ee;try{d=Ee.stateNode,ie?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(D=Ee.stateNode,k=Ee.memoizedProps.style,M=k!=null&&k.hasOwnProperty("display")?k.display:null,D.style.display=tt("display",M))}catch(We){Bt(t,t.return,We)}}}else if(Ee.tag===6){if(ye===null)try{Ee.stateNode.nodeValue=ie?"":Ee.memoizedProps}catch(We){Bt(t,t.return,We)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===t)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===t)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===t)break e;ye===Ee&&(ye=null),Ee=Ee.return}ye===Ee&&(ye=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:ei(i,t),pi(t),l&4&&Gh(t);break;case 21:break;default:ei(i,t),pi(t)}}function pi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Bh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(ht(d,""),l.flags&=-33);var p=Hh(t);Xc(t,p,d);break;case 3:case 4:var M=l.stateNode.containerInfo,D=Hh(t);jc(t,D,M);break;default:throw Error(n(161))}}catch(k){Bt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function xv(t,i,o){ke=t,jh(t)}function jh(t,i,o){for(var l=(t.mode&1)!==0;ke!==null;){var d=ke,p=d.child;if(d.tag===22&&l){var M=d.memoizedState!==null||Na;if(!M){var D=d.alternate,k=D!==null&&D.memoizedState!==null||un;D=Na;var ie=un;if(Na=M,(un=k)&&!ie)for(ke=d;ke!==null;)M=ke,k=M.child,M.tag===22&&M.memoizedState!==null?qh(d):k!==null?(k.return=M,ke=k):qh(d);for(;p!==null;)ke=p,jh(p),p=p.sibling;ke=d,Na=D,un=ie}Xh(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ke=p):Xh(t)}}function Xh(t){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:un||Da(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!un)if(o===null)l.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Qn(i.type,o.memoizedProps);l.componentDidUpdate(d,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Yf(i,p,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Yf(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var ye=ie.memoizedState;if(ye!==null){var Ee=ye.dehydrated;Ee!==null&&eo(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}un||i.flags&512&&Wc(i)}catch(xe){Bt(i,i.return,xe)}}if(i===t){ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,ke=o;break}ke=i.return}}function Yh(t){for(;ke!==null;){var i=ke;if(i===t){ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ke=o;break}ke=i.return}}function qh(t){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Da(4,i)}catch(k){Bt(i,o,k)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(k){Bt(i,d,k)}}var p=i.return;try{Wc(i)}catch(k){Bt(i,p,k)}break;case 5:var M=i.return;try{Wc(i)}catch(k){Bt(i,M,k)}}}catch(k){Bt(i,i.return,k)}if(i===t){ke=null;break}var D=i.sibling;if(D!==null){D.return=i.return,ke=D;break}ke=i.return}}var Sv=Math.ceil,Ua=R.ReactCurrentDispatcher,Yc=R.ReactCurrentOwner,Wn=R.ReactCurrentBatchConfig,xt=0,Jt=null,Gt=null,rn=0,Un=0,_s=Qi(0),$t=0,To=null,Nr=0,Ia=0,qc=0,wo=null,An=null,$c=0,xs=1/0,Ri=null,Fa=!1,Kc=null,rr=null,Oa=!1,sr=null,ka=0,Ao=0,Zc=null,za=-1,Ba=0;function gn(){return(xt&6)!==0?Ae():za!==-1?za:za=Ae()}function or(t){return(t.mode&1)===0?1:(xt&2)!==0&&rn!==0?rn&-rn:iv.transition!==null?(Ba===0&&(Ba=pn()),Ba):(t=bt,t!==0||(t=window.event,t=t===void 0?16:$d(t.type)),t)}function ti(t,i,o,l){if(50<Ao)throw Ao=0,Zc=null,Error(n(185));Mn(t,o,l),((xt&2)===0||t!==Jt)&&(t===Jt&&((xt&2)===0&&(Ia|=o),$t===4&&ar(t,rn)),Cn(t,l),o===1&&xt===0&&(i.mode&1)===0&&(xs=Ae()+500,pa&&er()))}function Cn(t,i){var o=t.callbackNode;kn(t,i);var l=ui(t,t===Jt?rn:0);if(l===0)o!==null&&se(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&se(o),i===1)t.tag===0?nv(Kh.bind(null,t)):If(Kh.bind(null,t)),Qg(function(){(xt&6)===0&&er()}),o=null;else{switch(Hd(l)){case 1:o=Ge;break;case 4:o=rt;break;case 16:o=at;break;case 536870912:o=vt;break;default:o=at}o=rp(o,$h.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function $h(t,i){if(za=-1,Ba=0,(xt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ss()&&t.callbackNode!==o)return null;var l=ui(t,t===Jt?rn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ha(t,l);else{i=l;var d=xt;xt|=2;var p=Qh();(Jt!==t||rn!==i)&&(Ri=null,xs=Ae()+500,Ur(t,i));do try{Ev();break}catch(D){Zh(t,D)}while(!0);mc(),Ua.current=p,xt=d,Gt!==null?i=0:(Jt=null,rn=0,i=$t)}if(i!==0){if(i===2&&(d=Si(t),d!==0&&(l=d,i=Qc(t,d))),i===1)throw o=To,Ur(t,0),ar(t,l),Cn(t,Ae()),o;if(i===6)ar(t,l);else{if(d=t.current.alternate,(l&30)===0&&!yv(d)&&(i=Ha(t,l),i===2&&(p=Si(t),p!==0&&(l=p,i=Qc(t,p))),i===1))throw o=To,Ur(t,0),ar(t,l),Cn(t,Ae()),o;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ir(t,An,Ri);break;case 3:if(ar(t,l),(l&130023424)===l&&(i=$c+500-Ae(),10<i)){if(ui(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){gn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=rc(Ir.bind(null,t,An,Ri),i);break}Ir(t,An,Ri);break;case 4:if(ar(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var M=31-ut(l);p=1<<M,M=i[M],M>d&&(d=M),l&=~p}if(l=d,l=Ae()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Sv(l/1960))-l,10<l){t.timeoutHandle=rc(Ir.bind(null,t,An,Ri),l);break}Ir(t,An,Ri);break;case 5:Ir(t,An,Ri);break;default:throw Error(n(329))}}}return Cn(t,Ae()),t.callbackNode===o?$h.bind(null,t):null}function Qc(t,i){var o=wo;return t.current.memoizedState.isDehydrated&&(Ur(t,i).flags|=256),t=Ha(t,i),t!==2&&(i=An,An=o,i!==null&&Jc(i)),t}function Jc(t){An===null?An=t:An.push.apply(An,t)}function yv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var d=o[l],p=d.getSnapshot;d=d.value;try{if(!Kn(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(t,i){for(i&=~qc,i&=~Ia,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ut(i),l=1<<o;t[o]=-1,i&=~l}}function Kh(t){if((xt&6)!==0)throw Error(n(327));Ss();var i=ui(t,0);if((i&1)===0)return Cn(t,Ae()),null;var o=Ha(t,i);if(t.tag!==0&&o===2){var l=Si(t);l!==0&&(i=l,o=Qc(t,l))}if(o===1)throw o=To,Ur(t,0),ar(t,i),Cn(t,Ae()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ir(t,An,Ri),Cn(t,Ae()),null}function eu(t,i){var o=xt;xt|=1;try{return t(i)}finally{xt=o,xt===0&&(xs=Ae()+500,pa&&er())}}function Dr(t){sr!==null&&sr.tag===0&&(xt&6)===0&&Ss();var i=xt;xt|=1;var o=Wn.transition,l=bt;try{if(Wn.transition=null,bt=1,t)return t()}finally{bt=l,Wn.transition=o,xt=i,(xt&6)===0&&er()}}function tu(){Un=_s.current,Ft(_s)}function Ur(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Zg(o)),Gt!==null)for(o=Gt.return;o!==null;){var l=o;switch(uc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&fa();break;case 3:ms(),Ft(En),Ft(an),Ec();break;case 5:yc(l);break;case 4:ms();break;case 13:Ft(kt);break;case 19:Ft(kt);break;case 10:gc(l.type._context);break;case 22:case 23:tu()}o=o.return}if(Jt=t,Gt=t=lr(t.current,null),rn=Un=i,$t=0,To=null,qc=Ia=Nr=0,An=wo=null,br!==null){for(i=0;i<br.length;i++)if(o=br[i],l=o.interleaved,l!==null){o.interleaved=null;var d=l.next,p=o.pending;if(p!==null){var M=p.next;p.next=d,l.next=M}o.pending=l}br=null}return t}function Zh(t,i){do{var o=Gt;try{if(mc(),Ta.current=Ra,wa){for(var l=zt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}wa=!1}if(Lr=0,Qt=qt=zt=null,_o=!1,xo=0,Yc.current=null,o===null||o.return===null){$t=1,To=i,Gt=null;break}e:{var p=t,M=o.return,D=o,k=i;if(i=rn,D.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ie=k,ye=D,Ee=ye.tag;if((ye.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Fe=Mh(M);if(Fe!==null){Fe.flags&=-257,Eh(Fe,M,D,p,i),Fe.mode&1&&yh(p,ie,i),i=Fe,k=ie;var Ve=i.updateQueue;if(Ve===null){var We=new Set;We.add(k),i.updateQueue=We}else Ve.add(k);break e}else{if((i&1)===0){yh(p,ie,i),nu();break e}k=Error(n(426))}}else if(Ot&&D.mode&1){var Ht=Mh(M);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),Eh(Ht,M,D,p,i),hc(gs(k,D));break e}}p=k=gs(k,D),$t!==4&&($t=2),wo===null?wo=[p]:wo.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var $=xh(p,k,i);Xf(p,$);break e;case 1:D=k;var V=p.type,J=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(rr===null||!rr.has(J)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ce=Sh(p,D,i);Xf(p,Ce);break e}}p=p.return}while(p!==null)}ep(o)}catch(qe){i=qe,Gt===o&&o!==null&&(Gt=o=o.return);continue}break}while(!0)}function Qh(){var t=Ua.current;return Ua.current=Ra,t===null?Ra:t}function nu(){($t===0||$t===3||$t===2)&&($t=4),Jt===null||(Nr&268435455)===0&&(Ia&268435455)===0||ar(Jt,rn)}function Ha(t,i){var o=xt;xt|=2;var l=Qh();(Jt!==t||rn!==i)&&(Ri=null,Ur(t,i));do try{Mv();break}catch(d){Zh(t,d)}while(!0);if(mc(),xt=o,Ua.current=l,Gt!==null)throw Error(n(261));return Jt=null,rn=0,$t}function Mv(){for(;Gt!==null;)Jh(Gt)}function Ev(){for(;Gt!==null&&!j();)Jh(Gt)}function Jh(t){var i=ip(t.alternate,t,Un);t.memoizedProps=t.pendingProps,i===null?ep(t):Gt=i,Yc.current=null}function ep(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=mv(o,i,Un),o!==null){Gt=o;return}}else{if(o=gv(o,i),o!==null){o.flags&=32767,Gt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,Gt=null;return}}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=t}while(i!==null);$t===0&&($t=5)}function Ir(t,i,o){var l=bt,d=Wn.transition;try{Wn.transition=null,bt=1,Tv(t,i,o,l)}finally{Wn.transition=d,bt=l}return null}function Tv(t,i,o,l){do Ss();while(sr!==null);if((xt&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if($o(t,p),t===Jt&&(Gt=Jt=null,rn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Oa||(Oa=!0,rp(at,function(){return Ss(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Wn.transition,Wn.transition=null;var M=bt;bt=1;var D=xt;xt|=4,Yc.current=null,_v(t,o),Wh(o,t),Wg(nc),Qo=!!tc,nc=tc=null,t.current=o,xv(o),Re(),xt=D,bt=M,Wn.transition=p}else t.current=o;if(Oa&&(Oa=!1,sr=t,ka=d),p=t.pendingLanes,p===0&&(rr=null),sn(o.stateNode),Cn(t,Ae()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],l(d.value,{componentStack:d.stack,digest:d.digest});if(Fa)throw Fa=!1,t=Kc,Kc=null,t;return(ka&1)!==0&&t.tag!==0&&Ss(),p=t.pendingLanes,(p&1)!==0?t===Zc?Ao++:(Ao=0,Zc=t):Ao=0,er(),null}function Ss(){if(sr!==null){var t=Hd(ka),i=Wn.transition,o=bt;try{if(Wn.transition=null,bt=16>t?16:t,sr===null)var l=!1;else{if(t=sr,sr=null,ka=0,(xt&6)!==0)throw Error(n(331));var d=xt;for(xt|=4,ke=t.current;ke!==null;){var p=ke,M=p.child;if((ke.flags&16)!==0){var D=p.deletions;if(D!==null){for(var k=0;k<D.length;k++){var ie=D[k];for(ke=ie;ke!==null;){var ye=ke;switch(ye.tag){case 0:case 11:case 15:Eo(8,ye,p)}var Ee=ye.child;if(Ee!==null)Ee.return=ye,ke=Ee;else for(;ke!==null;){ye=ke;var xe=ye.sibling,Fe=ye.return;if(zh(ye),ye===ie){ke=null;break}if(xe!==null){xe.return=Fe,ke=xe;break}ke=Fe}}}var Ve=p.alternate;if(Ve!==null){var We=Ve.child;if(We!==null){Ve.child=null;do{var Ht=We.sibling;We.sibling=null,We=Ht}while(We!==null)}}ke=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,ke=M;else e:for(;ke!==null;){if(p=ke,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Eo(9,p,p.return)}var $=p.sibling;if($!==null){$.return=p.return,ke=$;break e}ke=p.return}}var V=t.current;for(ke=V;ke!==null;){M=ke;var J=M.child;if((M.subtreeFlags&2064)!==0&&J!==null)J.return=M,ke=J;else e:for(M=V;ke!==null;){if(D=ke,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Da(9,D)}}catch(qe){Bt(D,D.return,qe)}if(D===M){ke=null;break e}var Ce=D.sibling;if(Ce!==null){Ce.return=D.return,ke=Ce;break e}ke=D.return}}if(xt=d,er(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(At,t)}catch{}l=!0}return l}finally{bt=o,Wn.transition=i}}return!1}function tp(t,i,o){i=gs(o,i),i=xh(t,i,1),t=nr(t,i,1),i=gn(),t!==null&&(Mn(t,1,i),Cn(t,i))}function Bt(t,i,o){if(t.tag===3)tp(t,t,o);else for(;i!==null;){if(i.tag===3){tp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rr===null||!rr.has(l))){t=gs(o,t),t=Sh(i,t,1),i=nr(i,t,1),t=gn(),i!==null&&(Mn(i,1,t),Cn(i,t));break}}i=i.return}}function wv(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=gn(),t.pingedLanes|=t.suspendedLanes&o,Jt===t&&(rn&o)===o&&($t===4||$t===3&&(rn&130023424)===rn&&500>Ae()-$c?Ur(t,0):qc|=o),Cn(t,i)}function np(t,i){i===0&&((t.mode&1)===0?i=1:(i=$n,$n<<=1,($n&130023424)===0&&($n=4194304)));var o=gn();t=wi(t,i),t!==null&&(Mn(t,i,o),Cn(t,o))}function Av(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),np(t,o)}function Cv(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),np(t,o)}var ip;ip=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||En.current)wn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return wn=!1,pv(t,i,o);wn=(t.flags&131072)!==0}else wn=!1,Ot&&(i.flags&1048576)!==0&&Ff(i,ga,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;La(t,i),t=i.pendingProps;var d=ls(i,an.current);ps(i,o),d=Ac(null,i,l,t,d,o);var p=Cc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Tn(l)?(p=!0,ha(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,xc(i),d.updater=ba,i.stateNode=d,d._reactInternals=i,Dc(i,l,t,o),i=Oc(null,i,l,!0,p,o)):(i.tag=0,Ot&&p&&cc(i),mn(null,i,d,o),i=i.child),i;case 16:l=i.elementType;e:{switch(La(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=bv(l),t=Qn(l,t),d){case 0:i=Fc(null,i,l,t,o);break e;case 1:i=bh(null,i,l,t,o);break e;case 11:i=Th(null,i,l,t,o);break e;case 14:i=wh(null,i,l,Qn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Qn(l,d),Fc(t,i,l,d,o);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Qn(l,d),bh(t,i,l,d,o);case 3:e:{if(Ph(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,d=p.element,jf(t,i),Ma(i,l,null,o);var M=i.memoizedState;if(l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=gs(Error(n(423)),i),i=Lh(t,i,l,o,d);break e}else if(l!==d){d=gs(Error(n(424)),i),i=Lh(t,i,l,o,d);break e}else for(Dn=Zi(i.stateNode.containerInfo.firstChild),Nn=i,Ot=!0,Zn=null,o=Gf(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ds(),l===d){i=Ci(t,i,o);break e}mn(t,i,l,o)}i=i.child}return i;case 5:return qf(i),t===null&&fc(i),l=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,M=d.children,ic(l,d)?M=null:p!==null&&ic(l,p)&&(i.flags|=32),Rh(t,i),mn(t,i,M,o),i.child;case 6:return t===null&&fc(i),null;case 13:return Nh(t,i,o);case 4:return Sc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=fs(i,null,l,o):mn(t,i,l,o),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Qn(l,d),Th(t,i,l,d,o);case 7:return mn(t,i,i.pendingProps,o),i.child;case 8:return mn(t,i,i.pendingProps.children,o),i.child;case 12:return mn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,p=i.memoizedProps,M=d.value,Dt(xa,l._currentValue),l._currentValue=M,p!==null)if(Kn(p.value,M)){if(p.children===d.children&&!En.current){i=Ci(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var D=p.dependencies;if(D!==null){M=p.child;for(var k=D.firstContext;k!==null;){if(k.context===l){if(p.tag===1){k=Ai(-1,o&-o),k.tag=2;var ie=p.updateQueue;if(ie!==null){ie=ie.shared;var ye=ie.pending;ye===null?k.next=k:(k.next=ye.next,ye.next=k),ie.pending=k}}p.lanes|=o,k=p.alternate,k!==null&&(k.lanes|=o),vc(p.return,o,i),D.lanes|=o;break}k=k.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),vc(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}mn(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,ps(i,o),d=Vn(d),l=l(d),i.flags|=1,mn(t,i,l,o),i.child;case 14:return l=i.type,d=Qn(l,i.pendingProps),d=Qn(l.type,d),wh(t,i,l,d,o);case 15:return Ah(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Qn(l,d),La(t,i),i.tag=1,Tn(l)?(t=!0,ha(i)):t=!1,ps(i,o),vh(i,l,d),Dc(i,l,d,o),Oc(null,i,l,!0,t,o);case 19:return Uh(t,i,o);case 22:return Ch(t,i,o)}throw Error(n(156,i.tag))};function rp(t,i){return re(t,i)}function Rv(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,i,o,l){return new Rv(t,i,o,l)}function iu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bv(t){if(typeof t=="function")return iu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ue)return 11;if(t===de)return 14}return 2}function lr(t,i){var o=t.alternate;return o===null?(o=jn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Va(t,i,o,l,d,p){var M=2;if(l=t,typeof t=="function")iu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case O:return Fr(o.children,d,p,i);case X:M=8,d|=8;break;case b:return t=jn(12,o,i,d|2),t.elementType=b,t.lanes=p,t;case ee:return t=jn(13,o,i,d),t.elementType=ee,t.lanes=p,t;case he:return t=jn(19,o,i,d),t.elementType=he,t.lanes=p,t;case oe:return Ga(o,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:M=10;break e;case z:M=9;break e;case ue:M=11;break e;case de:M=14;break e;case le:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=jn(M,o,i,d),i.elementType=t,i.type=l,i.lanes=p,i}function Fr(t,i,o,l){return t=jn(7,t,l,i),t.lanes=o,t}function Ga(t,i,o,l){return t=jn(22,t,l,i),t.elementType=oe,t.lanes=o,t.stateNode={isHidden:!1},t}function ru(t,i,o){return t=jn(6,t,null,i),t.lanes=o,t}function su(t,i,o){return i=jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Pv(t,i,o,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zn(0),this.expirationTimes=zn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zn(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ou(t,i,o,l,d,p,M,D,k){return t=new Pv(t,i,o,D,k),i===1?(i=1,p===!0&&(i|=8)):i=0,p=jn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},xc(p),t}function Lv(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function sp(t){if(!t)return Ji;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Tn(o))return Df(t,o,i)}return i}function op(t,i,o,l,d,p,M,D,k){return t=ou(o,l,!0,t,d,p,M,D,k),t.context=sp(null),o=t.current,l=gn(),d=or(o),p=Ai(l,d),p.callback=i??null,nr(o,p,d),t.current.lanes=d,Mn(t,d,l),Cn(t,l),t}function Wa(t,i,o,l){var d=i.current,p=gn(),M=or(d);return o=sp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ai(p,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=nr(d,i,M),t!==null&&(ti(t,d,M,p),ya(t,d,M)),M}function ja(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ap(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function au(t,i){ap(t,i),(t=t.alternate)&&ap(t,i)}function Nv(){return null}var lp=typeof reportError=="function"?reportError:function(t){console.error(t)};function lu(t){this._internalRoot=t}Xa.prototype.render=lu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Wa(t,i,null,null)},Xa.prototype.unmount=lu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){Wa(null,t,null,null)}),i[yi]=null}};function Xa(t){this._internalRoot=t}Xa.prototype.unstable_scheduleHydration=function(t){if(t){var i=Wd();t={blockedOn:null,target:t,priority:i};for(var o=0;o<qi.length&&i!==0&&i<qi[o].priority;o++);qi.splice(o,0,t),o===0&&Yd(t)}};function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ya(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cp(){}function Dv(t,i,o,l,d){if(d){if(typeof l=="function"){var p=l;l=function(){var ie=ja(M);p.call(ie)}}var M=op(i,l,t,0,null,!1,!1,"",cp);return t._reactRootContainer=M,t[yi]=M.current,co(t.nodeType===8?t.parentNode:t),Dr(),M}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var D=l;l=function(){var ie=ja(k);D.call(ie)}}var k=ou(t,0,!1,null,null,!1,!1,"",cp);return t._reactRootContainer=k,t[yi]=k.current,co(t.nodeType===8?t.parentNode:t),Dr(function(){Wa(i,k,o,l)}),k}function qa(t,i,o,l,d){var p=o._reactRootContainer;if(p){var M=p;if(typeof d=="function"){var D=d;d=function(){var k=ja(M);D.call(k)}}Wa(i,M,t,d)}else M=Dv(o,i,t,d,l);return ja(M)}Vd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Yt(i.pendingLanes);o!==0&&(Dl(i,o|1),Cn(i,Ae()),(xt&6)===0&&(xs=Ae()+500,er()))}break;case 13:Dr(function(){var l=wi(t,1);if(l!==null){var d=gn();ti(l,t,1,d)}}),au(t,1)}},Ul=function(t){if(t.tag===13){var i=wi(t,134217728);if(i!==null){var o=gn();ti(i,t,134217728,o)}au(t,134217728)}},Gd=function(t){if(t.tag===13){var i=or(t),o=wi(t,i);if(o!==null){var l=gn();ti(o,t,i,l)}au(t,i)}},Wd=function(){return bt},jd=function(t,i){var o=bt;try{return bt=t,i()}finally{bt=o}},Le=function(t,i,o){switch(i){case"input":if(ot(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var d=da(l);if(!d)throw Error(n(90));Ie(l),ot(l,d)}}}break;case"textarea":ge(t,o);break;case"select":i=o.value,i!=null&&L(t,!!o.multiple,i,!1)}},Ut=eu,Xt=Dr;var Uv={usingClientEntryPoint:!1,Events:[ho,os,da,De,ct,eu]},Co={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Iv={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||Nv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{At=$a.inject(Iv),gt=$a}catch{}}return Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uv,Rn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cu(i))throw Error(n(200));return Lv(t,i,null,o)},Rn.createRoot=function(t,i){if(!cu(t))throw Error(n(299));var o=!1,l="",d=lp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ou(t,1,!1,null,null,o,!1,l,d),t[yi]=i.current,co(t.nodeType===8?t.parentNode:t),new lu(i)},Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=A(i),t=t===null?null:t.stateNode,t},Rn.flushSync=function(t){return Dr(t)},Rn.hydrate=function(t,i,o){if(!Ya(i))throw Error(n(200));return qa(null,t,i,!0,o)},Rn.hydrateRoot=function(t,i,o){if(!cu(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,d=!1,p="",M=lp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=op(i,null,t,1,o??null,d,!1,p,M),t[yi]=i.current,co(t),l)for(t=0;t<l.length;t++)o=l[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Xa(i)},Rn.render=function(t,i,o){if(!Ya(i))throw Error(n(200));return qa(null,t,i,!1,o)},Rn.unmountComponentAtNode=function(t){if(!Ya(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){qa(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1},Rn.unstable_batchedUpdates=eu,Rn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Ya(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return qa(t,i,o,!1,l)},Rn.version="18.3.1-next-f1338f8080-20240426",Rn}var vp;function Wv(){if(vp)return fu.exports;vp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),fu.exports=Gv(),fu.exports}var _p;function jv(){if(_p)return Ka;_p=1;var r=Wv();return Ka.createRoot=r.createRoot,Ka.hydrateRoot=r.hydrateRoot,Ka}var Xv=jv();const Yv=Mm(Xv);var xp="1.3.27";function Em(r,e,n){return Math.max(r,Math.min(e,n))}function qv(r,e,n){return(1-n)*r+n*e}function $v(r,e,n,s){return qv(r,e,1-Math.exp(-n*s))}function Kv(r,e){return(r%e+e)%e}var Zv=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=Em(0,this.currentTime/this.duration,1);e=n>=1;const s=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=$v(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:n,duration:s,easing:a,onStart:c,onUpdate:u}){this.from=this.value=r,this.to=e,this.lerp=n,this.duration=s,this.easing=a,this.currentTime=0,this.isRunning=!0,c?.(),this.onUpdate=u}};function Qv(r,e){let n;return function(...s){clearTimeout(n),n=setTimeout(()=>{n=void 0,r.apply(this,s)},e)}}var Jv=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(r,e,{autoResize:n=!0,debounce:s=250}={}){this.wrapper=r,this.content=e,n&&(this.debouncedResize=Qv(this.resize,s),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Tm=class{events={};emit(r,...e){const n=this.events[r]||[];for(let s=0,a=n.length;s<a;s++)n[s]?.(...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{this.events[r]=this.events[r]?.filter(n=>e!==n)}}off(r,e){this.events[r]=this.events[r]?.filter(n=>e!==n)}destroy(){this.events={}}};const e0=100/6,ur={passive:!1};function Sp(r,e){return r===1?e0:r===2?e:1}var t0=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Tm;constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ur),this.element.addEventListener("touchstart",this.onTouchStart,ur),this.element.addEventListener("touchmove",this.onTouchMove,ur),this.element.addEventListener("touchend",this.onTouchEnd,ur)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,ur),this.element.removeEventListener("touchstart",this.onTouchStart,ur),this.element.removeEventListener("touchmove",this.onTouchMove,ur),this.element.removeEventListener("touchend",this.onTouchEnd,ur)}onTouchStart=r=>{const{clientX:e,clientY:n}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:n}=r.targetTouches?r.targetTouches[0]:r,s=-(e-this.touchStart.x)*this.options.touchMultiplier,a=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:s,y:a},this.emitter.emit("scroll",{deltaX:s,deltaY:a,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:n,deltaMode:s}=r;const a=Sp(s,this.window.width),c=Sp(s,this.window.height);e*=a,n*=c,e*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:n,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const yp=r=>Math.min(1,1.001-2**(-10*r));var n0=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Zv;emitter=new Tm;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:n=r,smoothWheel:s=!0,syncTouch:a=!1,syncTouchLerp:c=.075,touchInertiaExponent:u=1.7,duration:f,easing:h,lerp:m=.1,infinite:g=!1,orientation:x="vertical",gestureOrientation:v=x==="horizontal"?"both":"vertical",touchMultiplier:y=1,wheelMultiplier:E=1,autoResize:w=!0,prevent:S,virtualScroll:_,overscroll:I=!0,autoRaf:N=!1,anchors:R=!1,autoToggle:Q=!1,allowNestedScroll:B=!1,__experimental__naiveDimensions:O=!1,naiveDimensions:X=O,stopInertiaOnNavigate:b=!1,respectReducedMotion:C=!0}={}){window.lenisVersion=xp,window.lenis||(window.lenis={}),window.lenis.version=xp,x==="horizontal"&&(window.lenis.horizontal=!0),a===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof f=="number"&&typeof h!="function"?h=yp:typeof h=="function"&&typeof f!="number"&&(f=1),this.options={wrapper:r,content:e,eventsTarget:n,smoothWheel:s,syncTouch:a,syncTouchLerp:c,touchInertiaExponent:u,duration:f,easing:h,lerp:m,infinite:g,gestureOrientation:v,orientation:x,touchMultiplier:y,wheelMultiplier:E,autoResize:w,prevent:S,virtualScroll:_,overscroll:I,autoRaf:N,anchors:R,autoToggle:Q,allowNestedScroll:B,naiveDimensions:X,stopInertiaOnNavigate:b,respectReducedMotion:C},this.dimensions=new Jv(r,e,{autoResize:w}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new t0(n,{touchMultiplier:y,wheelMultiplier:E}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const e=r.composedPath().filter(s=>s instanceof HTMLAnchorElement&&s.href).map(s=>new URL(s.href)),n=new URL(window.location.href);if(this.options.anchors){const s=e.find(a=>n.host===a.host&&n.pathname===a.pathname&&a.hash);if(s){const a=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,c=decodeURIComponent(s.hash);this.scrollTo(c,a);return}}if(this.options.stopInertiaOnNavigate&&e.some(s=>n.host===s.host&&n.pathname!==s.pathname)){this.reset();return}};onPointerDown=r=>{r.button===1&&this.reset()};isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const n=r.targetTouches[0]??r.changedTouches[0];if(!n)return!1;const s=e.getRangeAt(0).getClientRects();if(s.length===0)return!1;const a=s[0],c=s[s.length-1],u=40,f=Math.hypot(n.clientX-a.left,n.clientY-a.top)<=u,h=Math.hypot(n.clientX-c.right,n.clientY-c.bottom)<=u;return f||h}onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:n,event:s}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:n,event:s}),s.ctrlKey||s.lenisStopPropagation)return;const a=s.type.includes("touch"),c=s.type.includes("wheel");if(a&&this.isIos&&(s.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(s)),this._isDraggingSelection)){s.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=s.type==="touchstart"||s.type==="touchmove";const u=e===0&&n===0;if(this.options.syncTouch&&a&&s.type==="touchstart"&&u&&!this.isStopped&&!this.isLocked){this.reset();return}const f=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&e===0;if(u||f)return;let h=s.composedPath();h=h.slice(0,h.indexOf(this.rootElement));const m=this.options.prevent,g=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";if(h.find(E=>E instanceof HTMLElement&&(typeof m=="function"&&m?.(E)||E.hasAttribute?.("data-lenis-prevent")||g==="vertical"&&E.hasAttribute?.("data-lenis-prevent-vertical")||g==="horizontal"&&E.hasAttribute?.("data-lenis-prevent-horizontal")||a&&E.hasAttribute?.("data-lenis-prevent-touch")||c&&E.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(E,{deltaX:e,deltaY:n}))))return;if(this.isStopped||this.isLocked){s.cancelable&&s.preventDefault();return}if(!(this.options.syncTouch&&a||this.options.smoothWheel&&c)){this.isScrolling="native",this.animate.stop(),s.lenisStopPropagation=!0;return}let x=n;this.options.gestureOrientation==="both"?x=Math.abs(n)>Math.abs(e)?n:e:this.options.gestureOrientation==="horizontal"&&(x=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(s.lenisStopPropagation=!0),s.cancelable&&s.preventDefault();const v=a&&this.options.syncTouch,y=a&&s.type==="touchend";y&&(x=Math.sign(x)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+x,{programmatic:!1,...v?{lerp:y?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:n=!1,lock:s=!1,programmatic:a=!0,lerp:c=a?this.options.lerp:void 0,duration:u=a?this.options.duration:void 0,easing:f=a?this.options.easing:void 0,onStart:h,onComplete:m,force:g=!1,userData:x}={}){if(this.prefersReducedMotion&&(a?n=!0:(c=1,u=void 0,f=void 0)),(this.isStopped||this.isLocked)&&!g)return;let v=r,y=e;if(typeof v=="string"&&["top","left","start","#"].includes(v))v=0;else if(typeof v=="string"&&["bottom","right","end"].includes(v))v=this.limit;else{let E=null;if(typeof v=="string"?(E=v.startsWith("#")?document.getElementById(v.slice(1)):document.querySelector(v),E||(v==="#top"?v=0:console.warn("Lenis: Target not found",v))):v instanceof Element&&(E=v),E){if(this.options.wrapper!==window){const R=this.rootElement.getBoundingClientRect();y-=this.isHorizontal?R.left:R.top}const w=E.getBoundingClientRect(),S=getComputedStyle(E),_=this.isHorizontal?Number.parseFloat(S.scrollMarginLeft):Number.parseFloat(S.scrollMarginTop),I=getComputedStyle(this.rootElement),N=this.isHorizontal?Number.parseFloat(I.scrollPaddingLeft):Number.parseFloat(I.scrollPaddingTop);v=(this.isHorizontal?w.left:w.top)+this.animatedScroll-(Number.isNaN(_)?0:_)-(Number.isNaN(N)?0:N)}}if(typeof v=="number"){if(v+=y,this.options.infinite){if(a){this.targetScroll=this.animatedScroll=this.scroll;const E=v-this.animatedScroll;E>this.limit/2?v-=this.limit:E<-this.limit/2&&(v+=this.limit)}}else v=Em(0,v,this.limit);if(v===this.targetScroll){h?.(this),m?.(this);return}if(this.userData=x??{},n){this.animatedScroll=this.targetScroll=v,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),m?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}a||(this.targetScroll=v),typeof u=="number"&&typeof f!="function"?f=yp:typeof f=="function"&&typeof u!="number"&&(u=1),this.animate.fromTo(this.animatedScroll,v,{duration:u,easing:f,lerp:c,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling="smooth",h?.(this)},onUpdate:(E,w)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=E-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=E,this.setScroll(this.scroll),a&&(this.targetScroll=E),w||this.emit(),w&&(this.reset(),this.emit(),m?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:n}){const s=Date.now();r._lenis||(r._lenis={});const a=r._lenis;let c,u,f,h,m,g,x,v,y,E;if(s-(a.time??0)>2e3){a.time=Date.now();const B=window.getComputedStyle(r);if(a.computedStyle=B,c=["auto","overlay","scroll"].includes(B.overflowX),u=["auto","overlay","scroll"].includes(B.overflowY),m=["auto"].includes(B.overscrollBehaviorX),g=["auto"].includes(B.overscrollBehaviorY),a.hasOverflowX=c,a.hasOverflowY=u,!(c||u))return!1;x=r.scrollWidth,v=r.scrollHeight,y=r.clientWidth,E=r.clientHeight,f=x>y,h=v>E,a.isScrollableX=f,a.isScrollableY=h,a.scrollWidth=x,a.scrollHeight=v,a.clientWidth=y,a.clientHeight=E,a.hasOverscrollBehaviorX=m,a.hasOverscrollBehaviorY=g}else f=a.isScrollableX,h=a.isScrollableY,c=a.hasOverflowX,u=a.hasOverflowY,x=a.scrollWidth,v=a.scrollHeight,y=a.clientWidth,E=a.clientHeight,m=a.hasOverscrollBehaviorX,g=a.hasOverscrollBehaviorY;if(!(c&&f||u&&h))return!1;const w=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";let S,_,I,N,R,Q;if(w==="horizontal")S=Math.round(r.scrollLeft),_=x-y,I=e,N=c,R=f,Q=m;else if(w==="vertical")S=Math.round(r.scrollTop),_=v-E,I=n,N=u,R=h,Q=g;else return!1;return!Q&&(S>=_||S<=0)?!0:(I>0?S<_:S>0)&&N&&R}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Kv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};function wm(r){const e=Math.max(1800,Math.min(1e4,r))/100;let n,s,a;return e<=66?(n=255,s=99.4708025861*Math.log(e)-161.1195681661,e<=19?a=0:a=138.5177312231*Math.log(e-10)-305.0447927307):(n=329.698727446*Math.pow(e-60,-.1332047592),s=288.1221695283*Math.pow(e-60,-.0755148492),a=255),{r:Math.max(0,Math.min(255,n))/255,g:Math.max(0,Math.min(255,s))/255,b:Math.max(0,Math.min(255,a))/255}}function Am(r){const{r:e,g:n,b:s}=wm(r),a=c=>Math.round(c*255).toString(16).padStart(2,"0");return`#${a(e)}${a(n)}${a(s)}`}function i0(r,e){const n=Math.max(.05,Math.cos(e));if(r==="asymmetric_wash"){const s=1+.28*Math.sin(e);return Math.min(1.25,Math.pow(n,1.45)*s)}return r==="bidirectional_graze"?Math.min(1.25,Math.pow(n,2.6)*1.15):Math.min(1.2,.45+.55*Math.pow(n,.9))}function r0(r,e,n,s,a){const c=s[0]-a[0],u=s[1]-a[1],f=s[2]-a[2],h=Math.sqrt(c*c+u*u+f*f),m=2.85,g=Math.sqrt(m*m+h*.45),x=Math.atan2(h,m),v=i0(r.iesProfile,x),y=m*m/(g*g),E=.86+.14*((n-2200)/4300),w=Math.max(.04,e),S=Math.round(r.baseLux*w*v*y*E),_=r.iesProfile==="omnidirectional_cluster"?42:r.iesProfile==="bidirectional_graze"?18.5:14,I=Number((_*(.08+.92*Math.pow(w,1.15))).toFixed(1)),N=-.0024+(n-2200)/4300*.0028,R=`${N>=0?"+":""}${N.toFixed(4)}`,Q=Number((2*g*Math.tan(r.beamAngleDeg*Math.PI/360)).toFixed(2));return{lux:S,watts:I,duv:R,beamSpreadMeters:Q,polarFactor:Number(v.toFixed(2))}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pd="170",s0=0,Mp=1,o0=2,Cm=1,a0=2,Ui=3,Mr=0,Pn=1,Ii=2,Sr=0,Os=1,Ep=2,Tp=3,wp=4,l0=5,jr=100,c0=101,u0=102,d0=103,f0=104,h0=200,p0=201,m0=202,g0=203,Gu=204,Wu=205,v0=206,_0=207,x0=208,S0=209,y0=210,M0=211,E0=212,T0=213,w0=214,ju=0,Xu=1,Yu=2,Bs=3,qu=4,$u=5,Ku=6,Zu=7,Rm=0,A0=1,C0=2,yr=0,R0=1,b0=2,P0=3,L0=4,N0=5,D0=6,U0=7,bm=300,Hs=301,Vs=302,Qu=303,Ju=304,Rl=306,ed=1e3,Fi=1001,td=1002,li=1003,I0=1004,Za=1005,oi=1006,mu=1007,xr=1008,Bi=1009,Pm=1010,Lm=1011,Oo=1012,Ld=1013,qr=1014,Oi=1015,Bo=1016,Nd=1017,Dd=1018,Gs=1020,Nm=35902,Dm=1021,Um=1022,ai=1023,Im=1024,Fm=1025,ks=1026,Ws=1027,Om=1028,Ud=1029,km=1030,Id=1031,Fd=1033,Sl=33776,yl=33777,Ml=33778,El=33779,nd=35840,id=35841,rd=35842,sd=35843,od=36196,ad=37492,ld=37496,cd=37808,ud=37809,dd=37810,fd=37811,hd=37812,pd=37813,md=37814,gd=37815,vd=37816,_d=37817,xd=37818,Sd=37819,yd=37820,Md=37821,Tl=36492,Ed=36494,Td=36495,zm=36283,wd=36284,Ad=36285,Cd=36286,F0=3200,O0=3201,k0=0,z0=1,_r="",bn="srgb",Xs="srgb-linear",bl="linear",Lt="srgb",ys=7680,Ap=519,B0=512,H0=513,V0=514,Bm=515,G0=516,W0=517,j0=518,X0=519,Cp=35044,Rp="300 es",ki=2e3,Cl=2001;class Ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let c=0,u=a.length;c<u;c++)a[c].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bp=1234567;const Io=Math.PI/180,ko=180/Math.PI;function qs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]).toLowerCase()}function xn(r,e,n){return Math.max(e,Math.min(n,r))}function Od(r,e){return(r%e+e)%e}function Y0(r,e,n,s,a){return s+(r-e)*(a-s)/(n-e)}function q0(r,e,n){return r!==e?(n-r)/(e-r):0}function Fo(r,e,n){return(1-n)*r+n*e}function $0(r,e,n,s){return Fo(r,e,1-Math.exp(-n*s))}function K0(r,e=1){return e-Math.abs(Od(r,e*2)-e)}function Z0(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*(3-2*r))}function Q0(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*r*(r*(r*6-15)+10))}function J0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function e_(r,e){return r+Math.random()*(e-r)}function t_(r){return r*(.5-Math.random())}function n_(r){r!==void 0&&(bp=r);let e=bp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function i_(r){return r*Io}function r_(r){return r*ko}function s_(r){return(r&r-1)===0&&r!==0}function o_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function a_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function l_(r,e,n,s,a){const c=Math.cos,u=Math.sin,f=c(n/2),h=u(n/2),m=c((e+s)/2),g=u((e+s)/2),x=c((e-s)/2),v=u((e-s)/2),y=c((s-e)/2),E=u((s-e)/2);switch(a){case"XYX":r.set(f*g,h*x,h*v,f*m);break;case"YZY":r.set(h*v,f*g,h*x,f*m);break;case"ZXZ":r.set(h*x,h*v,f*g,f*m);break;case"XZX":r.set(f*g,h*E,h*y,f*m);break;case"YXY":r.set(h*y,f*g,h*E,f*m);break;case"ZYZ":r.set(h*E,h*y,f*g,f*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Is(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Qa={DEG2RAD:Io,RAD2DEG:ko,generateUUID:qs,clamp:xn,euclideanModulo:Od,mapLinear:Y0,inverseLerp:q0,lerp:Fo,damp:$0,pingpong:K0,smoothstep:Z0,smootherstep:Q0,randInt:J0,randFloat:e_,randFloatSpread:t_,seededRandom:n_,degToRad:i_,radToDeg:r_,isPowerOfTwo:s_,ceilPowerOfTwo:o_,floorPowerOfTwo:a_,setQuaternionFromProperEuler:l_,normalize:vn,denormalize:Is};class Tt{constructor(e=0,n=0){Tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,a=e.elements;return this.x=a[0]*n+a[3]*s+a[6],this.y=a[1]*n+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(xn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),a=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*s-u*a+e.x,this.y=c*a+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,n,s,a,c,u,f,h,m){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,s,a,c,u,f,h,m)}set(e,n,s,a,c,u,f,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=n,g[4]=c,g[5]=h,g[6]=s,g[7]=u,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,c=this.elements,u=s[0],f=s[3],h=s[6],m=s[1],g=s[4],x=s[7],v=s[2],y=s[5],E=s[8],w=a[0],S=a[3],_=a[6],I=a[1],N=a[4],R=a[7],Q=a[2],B=a[5],O=a[8];return c[0]=u*w+f*I+h*Q,c[3]=u*S+f*N+h*B,c[6]=u*_+f*R+h*O,c[1]=m*w+g*I+x*Q,c[4]=m*S+g*N+x*B,c[7]=m*_+g*R+x*O,c[2]=v*w+y*I+E*Q,c[5]=v*S+y*N+E*B,c[8]=v*_+y*R+E*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],a=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],g=e[8];return n*u*g-n*f*m-s*c*g+s*f*h+a*c*m-a*u*h}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],g=e[8],x=g*u-f*m,v=f*h-g*c,y=m*c-u*h,E=n*x+s*v+a*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=x*w,e[1]=(a*m-g*s)*w,e[2]=(f*s-a*u)*w,e[3]=v*w,e[4]=(g*n-a*h)*w,e[5]=(a*c-f*n)*w,e[6]=y*w,e[7]=(s*h-m*n)*w,e[8]=(u*n-s*c)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,a,c,u,f){const h=Math.cos(c),m=Math.sin(c);return this.set(s*h,s*m,-s*(h*u+m*f)+u+e,-a*m,a*h,-a*(-m*u+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(gu.makeScale(e,n)),this}rotate(e){return this.premultiply(gu.makeRotation(-e)),this}translate(e,n){return this.premultiply(gu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<9;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gu=new dt;function Hm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function zo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function c_(){const r=zo("canvas");return r.style.display="block",r}const Pp={};function Do(r){r in Pp||(Pp[r]=!0,console.warn(r))}function u_(r,e,n){return new Promise(function(s,a){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}function d_(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function f_(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yt={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(r,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Lt&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Lt&&(r.r=zs(r.r),r.g=zs(r.g),r.b=zs(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===_r?bl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,n){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Lp=[.64,.33,.3,.6,.15,.06],Np=[.2126,.7152,.0722],Dp=[.3127,.329],Up=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ip=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);yt.define({[Xs]:{primaries:Lp,whitePoint:Dp,transfer:bl,toXYZ:Up,fromXYZ:Ip,luminanceCoefficients:Np,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:Lp,whitePoint:Dp,transfer:Lt,toXYZ:Up,fromXYZ:Ip,luminanceCoefficients:Np,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}});let Ms;class h_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=zo("canvas")),Ms.width=e.width,Ms.height=e.height;const s=Ms.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zo("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),c=a.data;for(let u=0;u<c.length;u++)c[u]=zi(c[u]/255)*255;return s.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(zi(n[s]/255)*255):n[s]=zi(n[s]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let p_=0;class Vm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=qs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?c.push(vu(a[u].image)):c.push(vu(a[u]))}else c=vu(a);s.url=c}return n||(e.images[this.uuid]=s),s}}function vu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?h_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let m_=0;class Sn extends Ys{constructor(e=Sn.DEFAULT_IMAGE,n=Sn.DEFAULT_MAPPING,s=Fi,a=Fi,c=oi,u=xr,f=ai,h=Bi,m=Sn.DEFAULT_ANISOTROPY,g=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=qs(),this.name="",this.source=new Vm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ed:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ed:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=bm;Sn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,s=0,a=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,a){return this.x=e,this.y=n,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*s+u[8]*a+u[12]*c,this.y=u[1]*n+u[5]*s+u[9]*a+u[13]*c,this.z=u[2]*n+u[6]*s+u[10]*a+u[14]*c,this.w=u[3]*n+u[7]*s+u[11]*a+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,a,c;const h=e.elements,m=h[0],g=h[4],x=h[8],v=h[1],y=h[5],E=h[9],w=h[2],S=h[6],_=h[10];if(Math.abs(g-v)<.01&&Math.abs(x-w)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+w)<.1&&Math.abs(E+S)<.1&&Math.abs(m+y+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(m+1)/2,R=(y+1)/2,Q=(_+1)/2,B=(g+v)/4,O=(x+w)/4,X=(E+S)/4;return N>R&&N>Q?N<.01?(s=0,a=.707106781,c=.707106781):(s=Math.sqrt(N),a=B/s,c=O/s):R>Q?R<.01?(s=.707106781,a=0,c=.707106781):(a=Math.sqrt(R),s=B/a,c=X/a):Q<.01?(s=.707106781,a=.707106781,c=0):(c=Math.sqrt(Q),s=O/c,a=X/c),this.set(s,a,c,n),this}let I=Math.sqrt((S-E)*(S-E)+(x-w)*(x-w)+(v-g)*(v-g));return Math.abs(I)<.001&&(I=1),this.x=(S-E)/I,this.y=(x-w)/I,this.z=(v-g)/I,this.w=Math.acos((m+y+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class g_ extends Ys{constructor(e=1,n=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const a={width:e,height:n,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Sn(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const u=s.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,s=1){if(this.width!==e||this.height!==n||this.depth!==s){this.width=e,this.height=n,this.depth=s;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,a=e.textures.length;s<a;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Vm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends g_{constructor(e=1,n=1,s={}){super(e,n,s),this.isWebGLRenderTarget=!0}}class Gm extends Sn{constructor(e=null,n=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class v_ extends Sn{constructor(e=null,n=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=0,n=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=a}static slerpFlat(e,n,s,a,c,u,f){let h=s[a+0],m=s[a+1],g=s[a+2],x=s[a+3];const v=c[u+0],y=c[u+1],E=c[u+2],w=c[u+3];if(f===0){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=x;return}if(f===1){e[n+0]=v,e[n+1]=y,e[n+2]=E,e[n+3]=w;return}if(x!==w||h!==v||m!==y||g!==E){let S=1-f;const _=h*v+m*y+g*E+x*w,I=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const Q=Math.sqrt(N),B=Math.atan2(Q,_*I);S=Math.sin(S*B)/Q,f=Math.sin(f*B)/Q}const R=f*I;if(h=h*S+v*R,m=m*S+y*R,g=g*S+E*R,x=x*S+w*R,S===1-f){const Q=1/Math.sqrt(h*h+m*m+g*g+x*x);h*=Q,m*=Q,g*=Q,x*=Q}}e[n]=h,e[n+1]=m,e[n+2]=g,e[n+3]=x}static multiplyQuaternionsFlat(e,n,s,a,c,u){const f=s[a],h=s[a+1],m=s[a+2],g=s[a+3],x=c[u],v=c[u+1],y=c[u+2],E=c[u+3];return e[n]=f*E+g*x+h*y-m*v,e[n+1]=h*E+g*v+m*x-f*y,e[n+2]=m*E+g*y+f*v-h*x,e[n+3]=g*E-f*x-h*v-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,a){return this._x=e,this._y=n,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const s=e._x,a=e._y,c=e._z,u=e._order,f=Math.cos,h=Math.sin,m=f(s/2),g=f(a/2),x=f(c/2),v=h(s/2),y=h(a/2),E=h(c/2);switch(u){case"XYZ":this._x=v*g*x+m*y*E,this._y=m*y*x-v*g*E,this._z=m*g*E+v*y*x,this._w=m*g*x-v*y*E;break;case"YXZ":this._x=v*g*x+m*y*E,this._y=m*y*x-v*g*E,this._z=m*g*E-v*y*x,this._w=m*g*x+v*y*E;break;case"ZXY":this._x=v*g*x-m*y*E,this._y=m*y*x+v*g*E,this._z=m*g*E+v*y*x,this._w=m*g*x-v*y*E;break;case"ZYX":this._x=v*g*x-m*y*E,this._y=m*y*x+v*g*E,this._z=m*g*E-v*y*x,this._w=m*g*x+v*y*E;break;case"YZX":this._x=v*g*x+m*y*E,this._y=m*y*x+v*g*E,this._z=m*g*E-v*y*x,this._w=m*g*x-v*y*E;break;case"XZY":this._x=v*g*x-m*y*E,this._y=m*y*x-v*g*E,this._z=m*g*E+v*y*x,this._w=m*g*x+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],a=n[4],c=n[8],u=n[1],f=n[5],h=n[9],m=n[2],g=n[6],x=n[10],v=s+f+x;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-h)*y,this._y=(c-m)*y,this._z=(u-a)*y}else if(s>f&&s>x){const y=2*Math.sqrt(1+s-f-x);this._w=(g-h)/y,this._x=.25*y,this._y=(a+u)/y,this._z=(c+m)/y}else if(f>x){const y=2*Math.sqrt(1+f-s-x);this._w=(c-m)/y,this._x=(a+u)/y,this._y=.25*y,this._z=(h+g)/y}else{const y=2*Math.sqrt(1+x-s-f);this._w=(u-a)/y,this._x=(c+m)/y,this._y=(h+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,n/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,a=e._y,c=e._z,u=e._w,f=n._x,h=n._y,m=n._z,g=n._w;return this._x=s*g+u*f+a*m-c*h,this._y=a*g+u*h+c*f-s*m,this._z=c*g+u*m+s*h-a*f,this._w=u*g-s*f-a*h-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const s=this._x,a=this._y,c=this._z,u=this._w;let f=u*e._w+s*e._x+a*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=s,this._y=a,this._z=c,this;const h=1-f*f;if(h<=Number.EPSILON){const y=1-n;return this._w=y*u+n*this._w,this._x=y*s+n*this._x,this._y=y*a+n*this._y,this._z=y*c+n*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,f),x=Math.sin((1-n)*g)/m,v=Math.sin(n*g)/m;return this._w=u*x+this._w*v,this._x=s*x+this._x*v,this._y=a*x+this._y*v,this._z=c*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,n=0,s=0){ae.prototype.isVector3=!0,this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*s+c[6]*a,this.y=c[1]*n+c[4]*s+c[7]*a,this.z=c[2]*n+c[5]*s+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,c=e.elements,u=1/(c[3]*n+c[7]*s+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*a+c[12])*u,this.y=(c[1]*n+c[5]*s+c[9]*a+c[13])*u,this.z=(c[2]*n+c[6]*s+c[10]*a+c[14])*u,this}applyQuaternion(e){const n=this.x,s=this.y,a=this.z,c=e.x,u=e.y,f=e.z,h=e.w,m=2*(u*a-f*s),g=2*(f*n-c*a),x=2*(c*s-u*n);return this.x=n+h*m+u*x-f*g,this.y=s+h*g+f*m-c*x,this.z=a+h*x+c*g-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*s+c[8]*a,this.y=c[1]*n+c[5]*s+c[9]*a,this.z=c[2]*n+c[6]*s+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,a=e.y,c=e.z,u=n.x,f=n.y,h=n.z;return this.x=a*h-c*f,this.y=c*u-s*h,this.z=s*f-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return _u.copy(this).projectOnVector(e),this.sub(_u)}reflect(e){return this.sub(_u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(xn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return n*n+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const a=Math.sin(n)*e;return this.x=a*Math.sin(s),this.y=Math.cos(n)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(e),this.y=n,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _u=new ae,Fp=new Ho;class Vo{constructor(e=new ae(1/0,1/0,1/0),n=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n+=3)this.expandByPoint(ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,s=e.count;n<s;n++)this.expandByPoint(ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ni):ni.fromBufferAttribute(c,u),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ja.copy(s.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}const a=e.children;for(let c=0,u=a.length;c<u;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),el.subVectors(this.max,bo),Es.subVectors(e.a,bo),Ts.subVectors(e.b,bo),ws.subVectors(e.c,bo),dr.subVectors(Ts,Es),fr.subVectors(ws,Ts),Or.subVectors(Es,ws);let n=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-Or.z,Or.y,dr.z,0,-dr.x,fr.z,0,-fr.x,Or.z,0,-Or.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-Or.y,Or.x,0];return!xu(n,Es,Ts,ws,el)||(n=[1,0,0,0,1,0,0,0,1],!xu(n,Es,Ts,ws,el))?!1:(tl.crossVectors(dr,fr),n=[tl.x,tl.y,tl.z],xu(n,Es,Ts,ws,el))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],ni=new ae,Ja=new Vo,Es=new ae,Ts=new ae,ws=new ae,dr=new ae,fr=new ae,Or=new ae,bo=new ae,el=new ae,tl=new ae,kr=new ae;function xu(r,e,n,s,a){for(let c=0,u=r.length-3;c<=u;c+=3){kr.fromArray(r,c);const f=a.x*Math.abs(kr.x)+a.y*Math.abs(kr.y)+a.z*Math.abs(kr.z),h=e.dot(kr),m=n.dot(kr),g=s.dot(kr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>f)return!1}return!0}const __=new Vo,Po=new ae,Su=new ae;class kd{constructor(e=new ae,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):__.setFromPoints(e).getCenter(s);let a=0;for(let c=0,u=e.length;c<u;c++)a=Math.max(a,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),a=(s-this.radius)*.5;this.center.addScaledVector(Po,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Su)),this.expandByPoint(Po.copy(e.center).sub(Su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new ae,yu=new ae,nl=new ae,hr=new ae,Mu=new ae,il=new ae,Eu=new ae;class x_{constructor(e=new ae,n=new ae(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,s,a){yu.copy(e).add(n).multiplyScalar(.5),nl.copy(n).sub(e).normalize(),hr.copy(this.origin).sub(yu);const c=e.distanceTo(n)*.5,u=-this.direction.dot(nl),f=hr.dot(this.direction),h=-hr.dot(nl),m=hr.lengthSq(),g=Math.abs(1-u*u);let x,v,y,E;if(g>0)if(x=u*h-f,v=u*f-h,E=c*g,x>=0)if(v>=-E)if(v<=E){const w=1/g;x*=w,v*=w,y=x*(x+u*v+2*f)+v*(u*x+v+2*h)+m}else v=c,x=Math.max(0,-(u*v+f)),y=-x*x+v*(v+2*h)+m;else v=-c,x=Math.max(0,-(u*v+f)),y=-x*x+v*(v+2*h)+m;else v<=-E?(x=Math.max(0,-(-u*c+f)),v=x>0?-c:Math.min(Math.max(-c,-h),c),y=-x*x+v*(v+2*h)+m):v<=E?(x=0,v=Math.min(Math.max(-c,-h),c),y=v*(v+2*h)+m):(x=Math.max(0,-(u*c+f)),v=x>0?c:Math.min(Math.max(-c,-h),c),y=-x*x+v*(v+2*h)+m);else v=u>0?-c:c,x=Math.max(0,-(u*v+f)),y=-x*x+v*(v+2*h)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(yu).addScaledVector(nl,v),y}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const s=Pi.dot(this.direction),a=Pi.dot(Pi)-s*s,c=e.radius*e.radius;if(a>c)return null;const u=Math.sqrt(c-a),f=s-u,h=s+u;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,a,c,u,f,h;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(s=(e.min.x-v.x)*m,a=(e.max.x-v.x)*m):(s=(e.max.x-v.x)*m,a=(e.min.x-v.x)*m),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),s>u||c>a||((c>s||isNaN(s))&&(s=c),(u<a||isNaN(a))&&(a=u),x>=0?(f=(e.min.z-v.z)*x,h=(e.max.z-v.z)*x):(f=(e.max.z-v.z)*x,h=(e.min.z-v.z)*x),s>h||f>a)||((f>s||s!==s)&&(s=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,s,a,c){Mu.subVectors(n,e),il.subVectors(s,e),Eu.crossVectors(Mu,il);let u=this.direction.dot(Eu),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;hr.subVectors(this.origin,e);const h=f*this.direction.dot(il.crossVectors(hr,il));if(h<0)return null;const m=f*this.direction.dot(Mu.cross(hr));if(m<0||h+m>u)return null;const g=-f*hr.dot(Eu);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,s,a,c,u,f,h,m,g,x,v,y,E,w,S){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,s,a,c,u,f,h,m,g,x,v,y,E,w,S)}set(e,n,s,a,c,u,f,h,m,g,x,v,y,E,w,S){const _=this.elements;return _[0]=e,_[4]=n,_[8]=s,_[12]=a,_[1]=c,_[5]=u,_[9]=f,_[13]=h,_[2]=m,_[6]=g,_[10]=x,_[14]=v,_[3]=y,_[7]=E,_[11]=w,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,s=e.elements,a=1/As.setFromMatrixColumn(e,0).length(),c=1/As.setFromMatrixColumn(e,1).length(),u=1/As.setFromMatrixColumn(e,2).length();return n[0]=s[0]*a,n[1]=s[1]*a,n[2]=s[2]*a,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,a=e.y,c=e.z,u=Math.cos(s),f=Math.sin(s),h=Math.cos(a),m=Math.sin(a),g=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const v=u*g,y=u*x,E=f*g,w=f*x;n[0]=h*g,n[4]=-h*x,n[8]=m,n[1]=y+E*m,n[5]=v-w*m,n[9]=-f*h,n[2]=w-v*m,n[6]=E+y*m,n[10]=u*h}else if(e.order==="YXZ"){const v=h*g,y=h*x,E=m*g,w=m*x;n[0]=v+w*f,n[4]=E*f-y,n[8]=u*m,n[1]=u*x,n[5]=u*g,n[9]=-f,n[2]=y*f-E,n[6]=w+v*f,n[10]=u*h}else if(e.order==="ZXY"){const v=h*g,y=h*x,E=m*g,w=m*x;n[0]=v-w*f,n[4]=-u*x,n[8]=E+y*f,n[1]=y+E*f,n[5]=u*g,n[9]=w-v*f,n[2]=-u*m,n[6]=f,n[10]=u*h}else if(e.order==="ZYX"){const v=u*g,y=u*x,E=f*g,w=f*x;n[0]=h*g,n[4]=E*m-y,n[8]=v*m+w,n[1]=h*x,n[5]=w*m+v,n[9]=y*m-E,n[2]=-m,n[6]=f*h,n[10]=u*h}else if(e.order==="YZX"){const v=u*h,y=u*m,E=f*h,w=f*m;n[0]=h*g,n[4]=w-v*x,n[8]=E*x+y,n[1]=x,n[5]=u*g,n[9]=-f*g,n[2]=-m*g,n[6]=y*x+E,n[10]=v-w*x}else if(e.order==="XZY"){const v=u*h,y=u*m,E=f*h,w=f*m;n[0]=h*g,n[4]=-x,n[8]=m*g,n[1]=v*x+w,n[5]=u*g,n[9]=y*x-E,n[2]=E*x-y,n[6]=f*g,n[10]=w*x+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S_,e,y_)}lookAt(e,n,s){const a=this.elements;return In.subVectors(e,n),In.lengthSq()===0&&(In.z=1),In.normalize(),pr.crossVectors(s,In),pr.lengthSq()===0&&(Math.abs(s.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),pr.crossVectors(s,In)),pr.normalize(),rl.crossVectors(In,pr),a[0]=pr.x,a[4]=rl.x,a[8]=In.x,a[1]=pr.y,a[5]=rl.y,a[9]=In.y,a[2]=pr.z,a[6]=rl.z,a[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,c=this.elements,u=s[0],f=s[4],h=s[8],m=s[12],g=s[1],x=s[5],v=s[9],y=s[13],E=s[2],w=s[6],S=s[10],_=s[14],I=s[3],N=s[7],R=s[11],Q=s[15],B=a[0],O=a[4],X=a[8],b=a[12],C=a[1],z=a[5],ue=a[9],ee=a[13],he=a[2],de=a[6],le=a[10],oe=a[14],U=a[3],K=a[7],Y=a[11],F=a[15];return c[0]=u*B+f*C+h*he+m*U,c[4]=u*O+f*z+h*de+m*K,c[8]=u*X+f*ue+h*le+m*Y,c[12]=u*b+f*ee+h*oe+m*F,c[1]=g*B+x*C+v*he+y*U,c[5]=g*O+x*z+v*de+y*K,c[9]=g*X+x*ue+v*le+y*Y,c[13]=g*b+x*ee+v*oe+y*F,c[2]=E*B+w*C+S*he+_*U,c[6]=E*O+w*z+S*de+_*K,c[10]=E*X+w*ue+S*le+_*Y,c[14]=E*b+w*ee+S*oe+_*F,c[3]=I*B+N*C+R*he+Q*U,c[7]=I*O+N*z+R*de+Q*K,c[11]=I*X+N*ue+R*le+Q*Y,c[15]=I*b+N*ee+R*oe+Q*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],a=e[8],c=e[12],u=e[1],f=e[5],h=e[9],m=e[13],g=e[2],x=e[6],v=e[10],y=e[14],E=e[3],w=e[7],S=e[11],_=e[15];return E*(+c*h*x-a*m*x-c*f*v+s*m*v+a*f*y-s*h*y)+w*(+n*h*y-n*m*v+c*u*v-a*u*y+a*m*g-c*h*g)+S*(+n*m*x-n*f*y-c*u*x+s*u*y+c*f*g-s*m*g)+_*(-a*f*g-n*h*x+n*f*v+a*u*x-s*u*v+s*h*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],g=e[8],x=e[9],v=e[10],y=e[11],E=e[12],w=e[13],S=e[14],_=e[15],I=x*S*m-w*v*m+w*h*y-f*S*y-x*h*_+f*v*_,N=E*v*m-g*S*m-E*h*y+u*S*y+g*h*_-u*v*_,R=g*w*m-E*x*m+E*f*y-u*w*y-g*f*_+u*x*_,Q=E*x*h-g*w*h-E*f*v+u*w*v+g*f*S-u*x*S,B=n*I+s*N+a*R+c*Q;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return e[0]=I*O,e[1]=(w*v*c-x*S*c-w*a*y+s*S*y+x*a*_-s*v*_)*O,e[2]=(f*S*c-w*h*c+w*a*m-s*S*m-f*a*_+s*h*_)*O,e[3]=(x*h*c-f*v*c-x*a*m+s*v*m+f*a*y-s*h*y)*O,e[4]=N*O,e[5]=(g*S*c-E*v*c+E*a*y-n*S*y-g*a*_+n*v*_)*O,e[6]=(E*h*c-u*S*c-E*a*m+n*S*m+u*a*_-n*h*_)*O,e[7]=(u*v*c-g*h*c+g*a*m-n*v*m-u*a*y+n*h*y)*O,e[8]=R*O,e[9]=(E*x*c-g*w*c-E*s*y+n*w*y+g*s*_-n*x*_)*O,e[10]=(u*w*c-E*f*c+E*s*m-n*w*m-u*s*_+n*f*_)*O,e[11]=(g*f*c-u*x*c-g*s*m+n*x*m+u*s*y-n*f*y)*O,e[12]=Q*O,e[13]=(g*w*a-E*x*a+E*s*v-n*w*v-g*s*S+n*x*S)*O,e[14]=(E*f*a-u*w*a-E*s*h+n*w*h+u*s*S-n*f*S)*O,e[15]=(u*x*a-g*f*a+g*s*h-n*x*h-u*s*v+n*f*v)*O,this}scale(e){const n=this.elements,s=e.x,a=e.y,c=e.z;return n[0]*=s,n[4]*=a,n[8]*=c,n[1]*=s,n[5]*=a,n[9]*=c,n[2]*=s,n[6]*=a,n[10]*=c,n[3]*=s,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,a))}makeTranslation(e,n,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),a=Math.sin(n),c=1-s,u=e.x,f=e.y,h=e.z,m=c*u,g=c*f;return this.set(m*u+s,m*f-a*h,m*h+a*f,0,m*f+a*h,g*f+s,g*h-a*u,0,m*h-a*f,g*h+a*u,c*h*h+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,a,c,u){return this.set(1,s,c,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,s){const a=this.elements,c=n._x,u=n._y,f=n._z,h=n._w,m=c+c,g=u+u,x=f+f,v=c*m,y=c*g,E=c*x,w=u*g,S=u*x,_=f*x,I=h*m,N=h*g,R=h*x,Q=s.x,B=s.y,O=s.z;return a[0]=(1-(w+_))*Q,a[1]=(y+R)*Q,a[2]=(E-N)*Q,a[3]=0,a[4]=(y-R)*B,a[5]=(1-(v+_))*B,a[6]=(S+I)*B,a[7]=0,a[8]=(E+N)*O,a[9]=(S-I)*O,a[10]=(1-(v+w))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,s){const a=this.elements;let c=As.set(a[0],a[1],a[2]).length();const u=As.set(a[4],a[5],a[6]).length(),f=As.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],ii.copy(this);const m=1/c,g=1/u,x=1/f;return ii.elements[0]*=m,ii.elements[1]*=m,ii.elements[2]*=m,ii.elements[4]*=g,ii.elements[5]*=g,ii.elements[6]*=g,ii.elements[8]*=x,ii.elements[9]*=x,ii.elements[10]*=x,n.setFromRotationMatrix(ii),s.x=c,s.y=u,s.z=f,this}makePerspective(e,n,s,a,c,u,f=ki){const h=this.elements,m=2*c/(n-e),g=2*c/(s-a),x=(n+e)/(n-e),v=(s+a)/(s-a);let y,E;if(f===ki)y=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(f===Cl)y=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=g,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,s,a,c,u,f=ki){const h=this.elements,m=1/(n-e),g=1/(s-a),x=1/(u-c),v=(n+e)*m,y=(s+a)*g;let E,w;if(f===ki)E=(u+c)*x,w=-2*x;else if(f===Cl)E=c*x,w=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-y,h[2]=0,h[6]=0,h[10]=w,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<16;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}}const As=new ae,ii=new jt,S_=new ae(0,0,0),y_=new ae(1,1,1),pr=new ae,rl=new ae,In=new ae,Op=new jt,kp=new Ho;class Hi{constructor(e=0,n=0,s=0,a=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,a=this._order){return this._x=e,this._y=n,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const a=e.elements,c=a[0],u=a[4],f=a[8],h=a[1],m=a[5],g=a[9],x=a[2],v=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(xn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(xn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-xn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(xn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return Op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Op,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return kp.setFromEuler(this),this.setFromQuaternion(kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Wm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let M_=0;const zp=new ae,Cs=new Ho,Li=new jt,sl=new ae,Lo=new ae,E_=new ae,T_=new Ho,Bp=new ae(1,0,0),Hp=new ae(0,1,0),Vp=new ae(0,0,1),Gp={type:"added"},w_={type:"removed"},Rs={type:"childadded",child:null},Tu={type:"childremoved",child:null};class On extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new ae,n=new Hi,s=new Ho,a=new ae(1,1,1);function c(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new jt},normalMatrix:{value:new dt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Bp,e)}rotateY(e){return this.rotateOnAxis(Hp,e)}rotateZ(e){return this.rotateOnAxis(Vp,e)}translateOnAxis(e,n){return zp.copy(e).applyQuaternion(this.quaternion),this.position.add(zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bp,e)}translateY(e){return this.translateOnAxis(Hp,e)}translateZ(e){return this.translateOnAxis(Vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?sl.copy(e):sl.set(e,n,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Lo,sl,this.up):Li.lookAt(sl,Lo,this.up),this.quaternion.setFromRotationMatrix(Li),a&&(Li.extractRotation(a.matrixWorld),Cs.setFromRotationMatrix(Li),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(w_),Tu.child=e,this.dispatchEvent(Tu),Tu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,a=this.children.length;s<a;s++){const u=this.children[s].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,s=[]){this[e]===n&&s.push(this);const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].getObjectsByProperty(e,n,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,E_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,T_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateMatrixWorld(e)}updateWorldMatrix(e,n){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const x=h[m];c(e.shapes,x)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(c(e.materials,this.material[h]));a.material=f}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(c(e.animations,h))}}if(n){const f=u(e.geometries),h=u(e.materials),m=u(e.textures),g=u(e.images),x=u(e.shapes),v=u(e.skeletons),y=u(e.animations),E=u(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=a,s;function u(f){const h=[];for(const m in f){const g=f[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}On.DEFAULT_UP=new ae(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new ae,Ni=new ae,wu=new ae,Di=new ae,bs=new ae,Ps=new ae,Wp=new ae,Au=new ae,Cu=new ae,Ru=new ae,bu=new Vt,Pu=new Vt,Lu=new Vt;class si{constructor(e=new ae,n=new ae,s=new ae){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,a){a.subVectors(s,n),ri.subVectors(e,n),a.cross(ri);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,s,a,c){ri.subVectors(a,n),Ni.subVectors(s,n),wu.subVectors(e,n);const u=ri.dot(ri),f=ri.dot(Ni),h=ri.dot(wu),m=Ni.dot(Ni),g=Ni.dot(wu),x=u*m-f*f;if(x===0)return c.set(0,0,0),null;const v=1/x,y=(m*h-f*g)*v,E=(u*g-f*h)*v;return c.set(1-y-E,E,y)}static containsPoint(e,n,s,a){return this.getBarycoord(e,n,s,a,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,s,a,c,u,f,h){return this.getBarycoord(e,n,s,a,Di)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,Di.x),h.addScaledVector(u,Di.y),h.addScaledVector(f,Di.z),h)}static getInterpolatedAttribute(e,n,s,a,c,u){return bu.setScalar(0),Pu.setScalar(0),Lu.setScalar(0),bu.fromBufferAttribute(e,n),Pu.fromBufferAttribute(e,s),Lu.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(bu,c.x),u.addScaledVector(Pu,c.y),u.addScaledVector(Lu,c.z),u}static isFrontFacing(e,n,s,a){return ri.subVectors(s,n),Ni.subVectors(e,n),ri.cross(Ni).dot(a)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,a){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,s,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ri.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,s,a,c){return si.getInterpolation(e,this.a,this.b,this.c,n,s,a,c)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,a=this.b,c=this.c;let u,f;bs.subVectors(a,s),Ps.subVectors(c,s),Au.subVectors(e,s);const h=bs.dot(Au),m=Ps.dot(Au);if(h<=0&&m<=0)return n.copy(s);Cu.subVectors(e,a);const g=bs.dot(Cu),x=Ps.dot(Cu);if(g>=0&&x<=g)return n.copy(a);const v=h*x-g*m;if(v<=0&&h>=0&&g<=0)return u=h/(h-g),n.copy(s).addScaledVector(bs,u);Ru.subVectors(e,c);const y=bs.dot(Ru),E=Ps.dot(Ru);if(E>=0&&y<=E)return n.copy(c);const w=y*m-h*E;if(w<=0&&m>=0&&E<=0)return f=m/(m-E),n.copy(s).addScaledVector(Ps,f);const S=g*E-y*x;if(S<=0&&x-g>=0&&y-E>=0)return Wp.subVectors(c,a),f=(x-g)/(x-g+(y-E)),n.copy(a).addScaledVector(Wp,f);const _=1/(S+w+v);return u=w*_,f=v*_,n.copy(s).addScaledVector(bs,u).addScaledVector(Ps,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},ol={h:0,s:0,l:0};function Nu(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Pt{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,s)}set(e,n,s){if(n===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,n),this}setRGB(e,n,s,a=yt.workingColorSpace){return this.r=e,this.g=n,this.b=s,yt.toWorkingColorSpace(this,a),this}setHSL(e,n,s,a=yt.workingColorSpace){if(e=Od(e,1),n=xn(n,0,1),s=xn(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,u=2*s-c;this.r=Nu(u,c,e+1/3),this.g=Nu(u,c,e),this.b=Nu(u,c,e-1/3)}return yt.toWorkingColorSpace(this,a),this}setStyle(e,n=bn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bn){const s=jm[e.toLowerCase()];return s!==void 0?this.setHex(s,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return yt.fromWorkingColorSpace(fn.copy(this),e),Math.round(xn(fn.r*255,0,255))*65536+Math.round(xn(fn.g*255,0,255))*256+Math.round(xn(fn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=yt.workingColorSpace){yt.fromWorkingColorSpace(fn.copy(this),n);const s=fn.r,a=fn.g,c=fn.b,u=Math.max(s,a,c),f=Math.min(s,a,c);let h,m;const g=(f+u)/2;if(f===u)h=0,m=0;else{const x=u-f;switch(m=g<=.5?x/(u+f):x/(2-u-f),u){case s:h=(a-c)/x+(a<c?6:0);break;case a:h=(c-s)/x+2;break;case c:h=(s-a)/x+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,n=yt.workingColorSpace){return yt.fromWorkingColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=bn){yt.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,s=fn.g,a=fn.b;return e!==bn?`color(${e} ${n.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,n,s){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(ol);const s=Fo(mr.h,ol.h,n),a=Fo(mr.s,ol.s,n),c=Fo(mr.l,ol.l,n);return this.setHSL(s,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*s+c[6]*a,this.g=c[1]*n+c[4]*s+c[7]*a,this.b=c[2]*n+c[5]*s+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new Pt;Pt.NAMES=jm;let A_=0;class Pl extends Ys{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=qs(),this.name="",this.blending=Os,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gu,this.blendDst=Wu,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ap,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(s.blending=this.blending),this.side!==Mr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Gu&&(s.blendSrc=this.blendSrc),this.blendDst!==Wu&&(s.blendDst=this.blendDst),this.blendEquation!==jr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ap&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(c){const u=[];for(const f in c){const h=c[f];delete h.metadata,u.push(h)}return u}if(n){const c=a(e.textures),u=a(e.images);c.length>0&&(s.textures=c),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const a=n.length;s=new Array(a);for(let c=0;c!==a;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xm extends Pl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Rm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new ae,al=new Tt;class vi{constructor(e,n,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=Cp,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)al.fromBufferAttribute(this,n),al.applyMatrix3(e),this.setXY(n,al.x,al.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let s=this.array[e*this.itemSize+n];return this.normalized&&(s=Is(s,this.array)),s}setComponent(e,n,s){return this.normalized&&(s=vn(s,this.array)),this.array[e*this.itemSize+n]=s,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Is(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Is(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Is(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Is(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,a){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),s=vn(s,this.array),a=vn(a,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,n,s,a,c){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),s=vn(s,this.array),a=vn(a,this.array),c=vn(c,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cp&&(e.usage=this.usage),e}}class Ym extends vi{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class qm extends vi{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class Yr extends vi{constructor(e,n,s){super(new Float32Array(e),n,s)}}let C_=0;const Xn=new jt,Du=new On,Ls=new ae,Fn=new Vo,No=new Vo,tn=new ae;class Kr extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hm(e)?qm:Ym)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new dt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,s){return Xn.makeTranslation(e,n,s),this.applyMatrix4(Xn),this}scale(e,n,s){return Xn.makeScale(e,n,s),this.applyMatrix4(Xn),this}lookAt(e){return Du.lookAt(e),Du.updateMatrix(),this.applyMatrix4(Du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let a=0,c=e.length;a<c;a++){const u=e[a];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Yr(s,3))}else{for(let s=0,a=n.count;s<a;s++){const c=e[s];n.setXYZ(s,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const c=n[s];Fn.setFromBufferAttribute(c),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const s=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];No.setFromBufferAttribute(f),this.morphTargetsRelative?(tn.addVectors(Fn.min,No.min),Fn.expandByPoint(tn),tn.addVectors(Fn.max,No.max),Fn.expandByPoint(tn)):(Fn.expandByPoint(No.min),Fn.expandByPoint(No.max))}Fn.getCenter(s);let a=0;for(let c=0,u=e.count;c<u;c++)tn.fromBufferAttribute(e,c),a=Math.max(a,s.distanceToSquared(tn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],h=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)tn.fromBufferAttribute(f,m),h&&(Ls.fromBufferAttribute(e,m),tn.add(Ls)),a=Math.max(a,s.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let X=0;X<s.count;X++)f[X]=new ae,h[X]=new ae;const m=new ae,g=new ae,x=new ae,v=new Tt,y=new Tt,E=new Tt,w=new ae,S=new ae;function _(X,b,C){m.fromBufferAttribute(s,X),g.fromBufferAttribute(s,b),x.fromBufferAttribute(s,C),v.fromBufferAttribute(c,X),y.fromBufferAttribute(c,b),E.fromBufferAttribute(c,C),g.sub(m),x.sub(m),y.sub(v),E.sub(v);const z=1/(y.x*E.y-E.x*y.y);isFinite(z)&&(w.copy(g).multiplyScalar(E.y).addScaledVector(x,-y.y).multiplyScalar(z),S.copy(x).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(z),f[X].add(w),f[b].add(w),f[C].add(w),h[X].add(S),h[b].add(S),h[C].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let X=0,b=I.length;X<b;++X){const C=I[X],z=C.start,ue=C.count;for(let ee=z,he=z+ue;ee<he;ee+=3)_(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const N=new ae,R=new ae,Q=new ae,B=new ae;function O(X){Q.fromBufferAttribute(a,X),B.copy(Q);const b=f[X];N.copy(b),N.sub(Q.multiplyScalar(Q.dot(b))).normalize(),R.crossVectors(B,b);const z=R.dot(h[X])<0?-1:1;u.setXYZW(X,N.x,N.y,N.z,z)}for(let X=0,b=I.length;X<b;++X){const C=I[X],z=C.start,ue=C.count;for(let ee=z,he=z+ue;ee<he;ee+=3)O(e.getX(ee+0)),O(e.getX(ee+1)),O(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const a=new ae,c=new ae,u=new ae,f=new ae,h=new ae,m=new ae,g=new ae,x=new ae;if(e)for(let v=0,y=e.count;v<y;v+=3){const E=e.getX(v+0),w=e.getX(v+1),S=e.getX(v+2);a.fromBufferAttribute(n,E),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),g.subVectors(u,c),x.subVectors(a,c),g.cross(x),f.fromBufferAttribute(s,E),h.fromBufferAttribute(s,w),m.fromBufferAttribute(s,S),f.add(g),h.add(g),m.add(g),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(w,h.x,h.y,h.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let v=0,y=n.count;v<y;v+=3)a.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),x.subVectors(a,c),g.cross(x),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)tn.fromBufferAttribute(e,n),tn.normalize(),e.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function e(f,h){const m=f.array,g=f.itemSize,x=f.normalized,v=new m.constructor(h.length*g);let y=0,E=0;for(let w=0,S=h.length;w<S;w++){f.isInterleavedBufferAttribute?y=h[w]*f.data.stride+f.offset:y=h[w]*g;for(let _=0;_<g;_++)v[E++]=m[y++]}return new vi(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kr,s=this.index.array,a=this.attributes;for(const f in a){const h=a[f],m=e(h,s);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const h=[],m=c[f];for(let g=0,x=m.length;g<x;g++){const v=m[g],y=e(v,s);h.push(y)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const h in s){const m=s[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let c=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let x=0,v=m.length;x<v;x++){const y=m[x];g.push(y.toJSON(e.data))}g.length>0&&(a[h]=g,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(n));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const c=e.morphAttributes;for(const m in c){const g=[],x=c[m];for(let v=0,y=x.length;v<y;v++)g.push(x[v].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,g=u.length;m<g;m++){const x=u[m];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jp=new jt,zr=new x_,ll=new kd,Xp=new ae,cl=new ae,ul=new ae,dl=new ae,Uu=new ae,fl=new ae,Yp=new ae,hl=new ae;class gi extends On{constructor(e=new Kr,n=new Xm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const a=n[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const f=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const s=this.geometry,a=s.attributes.position,c=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(c&&f){fl.set(0,0,0);for(let h=0,m=c.length;h<m;h++){const g=f[h],x=c[h];g!==0&&(Uu.fromBufferAttribute(x,e),u?fl.addScaledVector(Uu,g):fl.addScaledVector(Uu.sub(n),g))}n.add(fl)}return n}raycast(e,n){const s=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ll.copy(s.boundingSphere),ll.applyMatrix4(c),zr.copy(e.ray).recast(e.near),!(ll.containsPoint(zr.origin)===!1&&(zr.intersectSphere(ll,Xp)===null||zr.origin.distanceToSquared(Xp)>(e.far-e.near)**2))&&(jp.copy(c).invert(),zr.copy(e.ray).applyMatrix4(jp),!(s.boundingBox!==null&&zr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,s){let a;const c=this.geometry,u=this.material,f=c.index,h=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,v=c.groups,y=c.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,w=v.length;E<w;E++){const S=v[E],_=u[S.materialIndex],I=Math.max(S.start,y.start),N=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let R=I,Q=N;R<Q;R+=3){const B=f.getX(R),O=f.getX(R+1),X=f.getX(R+2);a=pl(this,_,e,s,m,g,x,B,O,X),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const E=Math.max(0,y.start),w=Math.min(f.count,y.start+y.count);for(let S=E,_=w;S<_;S+=3){const I=f.getX(S),N=f.getX(S+1),R=f.getX(S+2);a=pl(this,u,e,s,m,g,x,I,N,R),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,w=v.length;E<w;E++){const S=v[E],_=u[S.materialIndex],I=Math.max(S.start,y.start),N=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let R=I,Q=N;R<Q;R+=3){const B=R,O=R+1,X=R+2;a=pl(this,_,e,s,m,g,x,B,O,X),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const E=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let S=E,_=w;S<_;S+=3){const I=S,N=S+1,R=S+2;a=pl(this,u,e,s,m,g,x,I,N,R),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function R_(r,e,n,s,a,c,u,f){let h;if(e.side===Pn?h=s.intersectTriangle(u,c,a,!0,f):h=s.intersectTriangle(a,c,u,e.side===Mr,f),h===null)return null;hl.copy(f),hl.applyMatrix4(r.matrixWorld);const m=n.ray.origin.distanceTo(hl);return m<n.near||m>n.far?null:{distance:m,point:hl.clone(),object:r}}function pl(r,e,n,s,a,c,u,f,h,m){r.getVertexPosition(f,cl),r.getVertexPosition(h,ul),r.getVertexPosition(m,dl);const g=R_(r,e,n,s,cl,ul,dl,Yp);if(g){const x=new ae;si.getBarycoord(Yp,cl,ul,dl,x),a&&(g.uv=si.getInterpolatedAttribute(a,f,h,m,x,new Tt)),c&&(g.uv1=si.getInterpolatedAttribute(c,f,h,m,x,new Tt)),u&&(g.normal=si.getInterpolatedAttribute(u,f,h,m,x,new ae),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:h,c:m,normal:new ae,materialIndex:0};si.getNormal(cl,ul,dl,v.normal),g.face=v,g.barycoord=x}return g}class Go extends Kr{constructor(e=1,n=1,s=1,a=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:a,heightSegments:c,depthSegments:u};const f=this;a=Math.floor(a),c=Math.floor(c),u=Math.floor(u);const h=[],m=[],g=[],x=[];let v=0,y=0;E("z","y","x",-1,-1,s,n,e,u,c,0),E("z","y","x",1,-1,s,n,-e,u,c,1),E("x","z","y",1,1,e,s,n,a,u,2),E("x","z","y",1,-1,e,s,-n,a,u,3),E("x","y","z",1,-1,e,n,s,a,c,4),E("x","y","z",-1,-1,e,n,-s,a,c,5),this.setIndex(h),this.setAttribute("position",new Yr(m,3)),this.setAttribute("normal",new Yr(g,3)),this.setAttribute("uv",new Yr(x,2));function E(w,S,_,I,N,R,Q,B,O,X,b){const C=R/O,z=Q/X,ue=R/2,ee=Q/2,he=B/2,de=O+1,le=X+1;let oe=0,U=0;const K=new ae;for(let Y=0;Y<le;Y++){const F=Y*z-ee;for(let Z=0;Z<de;Z++){const be=Z*C-ue;K[w]=be*I,K[S]=F*N,K[_]=he,m.push(K.x,K.y,K.z),K[w]=0,K[S]=0,K[_]=B>0?1:-1,g.push(K.x,K.y,K.z),x.push(Z/O),x.push(1-Y/X),oe+=1}}for(let Y=0;Y<X;Y++)for(let F=0;F<O;F++){const Z=v+F+de*Y,be=v+F+de*(Y+1),q=v+(F+1)+de*(Y+1),fe=v+(F+1)+de*Y;h.push(Z,be,fe),h.push(be,q,fe),U+=6}f.addGroup(y,U,b),y+=U,v+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(r){const e={};for(const n in r){e[n]={};for(const s in r[n]){const a=r[n][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][s]=null):e[n][s]=a.clone():Array.isArray(a)?e[n][s]=a.slice():e[n][s]=a}}return e}function _n(r){const e={};for(let n=0;n<r.length;n++){const s=js(r[n]);for(const a in s)e[a]=s[a]}return e}function b_(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function $m(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const P_={clone:js,merge:_n};var L_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Pl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L_,this.fragmentShader=N_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=b_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class Km extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new ae,qp=new Tt,$p=new Tt;class Yn extends Km{constructor(e=50,n=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ko*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,s){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,n){return this.getViewBounds(e,qp,$p),n.subVectors($p,qp)}setViewOffset(e,n,s,a,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Io*.5*this.fov)/this.zoom,s=2*n,a=this.aspect*s,c=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;c+=u.offsetX*a/h,n-=u.offsetY*s/m,a*=u.width/h,s*=u.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=-90,Ds=1;class D_ extends On{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Yn(Ns,Ds,e,n);a.layers=this.layers,this.add(a);const c=new Yn(Ns,Ds,e,n);c.layers=this.layers,this.add(c);const u=new Yn(Ns,Ds,e,n);u.layers=this.layers,this.add(u);const f=new Yn(Ns,Ds,e,n);f.layers=this.layers,this.add(f);const h=new Yn(Ns,Ds,e,n);h.layers=this.layers,this.add(h);const m=new Yn(Ns,Ds,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[s,a,c,u,f,h]=n;for(const m of n)this.remove(m);if(e===ki)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Cl)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,h,m,g]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(n,c),e.setRenderTarget(s,1,a),e.render(n,u),e.setRenderTarget(s,2,a),e.render(n,f),e.setRenderTarget(s,3,a),e.render(n,h),e.setRenderTarget(s,4,a),e.render(n,m),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,a),e.render(n,g),e.setRenderTarget(x,v,y),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Zm extends Sn{constructor(e,n,s,a,c,u,f,h,m,g){e=e!==void 0?e:[],n=n!==void 0?n:Hs,super(e,n,s,a,c,u,f,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class U_ extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new Zm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:oi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Go(5,5,5),c=new Vi({name:"CubemapFromEquirect",uniforms:js(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Pn,blending:Sr});c.uniforms.tEquirect.value=n;const u=new gi(a,c),f=n.minFilter;return n.minFilter===xr&&(n.minFilter=oi),new D_(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,s,a){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,s,a);e.setRenderTarget(c)}}const Iu=new ae,I_=new ae,F_=new dt;class Gr{constructor(e=new ae(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,a){return this.normal.set(e,n,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const a=Iu.subVectors(s,n).cross(I_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const s=e.delta(Iu),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||F_.getNormalMatrix(e),a=this.coplanarPoint(Iu).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new kd,ml=new ae;class Qm{constructor(e=new Gr,n=new Gr,s=new Gr,a=new Gr,c=new Gr,u=new Gr){this.planes=[e,n,s,a,c,u]}set(e,n,s,a,c,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(s),f[3].copy(a),f[4].copy(c),f[5].copy(u),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,n=ki){const s=this.planes,a=e.elements,c=a[0],u=a[1],f=a[2],h=a[3],m=a[4],g=a[5],x=a[6],v=a[7],y=a[8],E=a[9],w=a[10],S=a[11],_=a[12],I=a[13],N=a[14],R=a[15];if(s[0].setComponents(h-c,v-m,S-y,R-_).normalize(),s[1].setComponents(h+c,v+m,S+y,R+_).normalize(),s[2].setComponents(h+u,v+g,S+E,R+I).normalize(),s[3].setComponents(h-u,v-g,S-E,R-I).normalize(),s[4].setComponents(h-f,v-x,S-w,R-N).normalize(),n===ki)s[5].setComponents(h+f,v+x,S+w,R+N).normalize();else if(n===Cl)s[5].setComponents(f,x,w,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,s=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const a=n[s];if(ml.x=a.normal.x>0?e.max.x:e.min.x,ml.y=a.normal.y>0?e.max.y:e.min.y,ml.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jm(){let r=null,e=!1,n=null,s=null;function a(c,u){n(c,u),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function O_(r){const e=new WeakMap;function n(f,h){const m=f.array,g=f.usage,x=m.byteLength,v=r.createBuffer();r.bindBuffer(h,v),r.bufferData(h,m,g),f.onUploadCallback();let y;if(m instanceof Float32Array)y=r.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=r.SHORT;else if(m instanceof Uint32Array)y=r.UNSIGNED_INT;else if(m instanceof Int32Array)y=r.INT;else if(m instanceof Int8Array)y=r.BYTE;else if(m instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:x}}function s(f,h,m){const g=h.array,x=h.updateRanges;if(r.bindBuffer(m,f),x.length===0)r.bufferSubData(m,0,g);else{x.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<x.length;y++){const E=x[v],w=x[y];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++v,x[v]=w)}x.length=v+1;for(let y=0,E=x.length;y<E;y++){const w=x[y];r.bufferSubData(m,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,f,h),m.version=f.version}}return{get:a,remove:c,update:u}}class Wo extends Kr{constructor(e=1,n=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:a};const c=e/2,u=n/2,f=Math.floor(s),h=Math.floor(a),m=f+1,g=h+1,x=e/f,v=n/h,y=[],E=[],w=[],S=[];for(let _=0;_<g;_++){const I=_*v-u;for(let N=0;N<m;N++){const R=N*x-c;E.push(R,-I,0),w.push(0,0,1),S.push(N/f),S.push(1-_/h)}}for(let _=0;_<h;_++)for(let I=0;I<f;I++){const N=I+m*_,R=I+m*(_+1),Q=I+1+m*(_+1),B=I+1+m*_;y.push(N,R,B),y.push(R,Q,B)}this.setIndex(y),this.setAttribute("position",new Yr(E,3)),this.setAttribute("normal",new Yr(w,3)),this.setAttribute("uv",new Yr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.widthSegments,e.heightSegments)}}var k_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,B_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,j_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Y_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,q_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Z_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Q_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ax=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,px="gl_FragColor = linearToOutputTexel( gl_FragColor );",mx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_x=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Px=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ix=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ox=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$x=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_S=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,SS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,MS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ES=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,CS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,LS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,FS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,XS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ny=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ry=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ay=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ly=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,my=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:k_,alphahash_pars_fragment:z_,alphamap_fragment:B_,alphamap_pars_fragment:H_,alphatest_fragment:V_,alphatest_pars_fragment:G_,aomap_fragment:W_,aomap_pars_fragment:j_,batching_pars_vertex:X_,batching_vertex:Y_,begin_vertex:q_,beginnormal_vertex:$_,bsdfs:K_,iridescence_fragment:Z_,bumpmap_pars_fragment:Q_,clipping_planes_fragment:J_,clipping_planes_pars_fragment:ex,clipping_planes_pars_vertex:tx,clipping_planes_vertex:nx,color_fragment:ix,color_pars_fragment:rx,color_pars_vertex:sx,color_vertex:ox,common:ax,cube_uv_reflection_fragment:lx,defaultnormal_vertex:cx,displacementmap_pars_vertex:ux,displacementmap_vertex:dx,emissivemap_fragment:fx,emissivemap_pars_fragment:hx,colorspace_fragment:px,colorspace_pars_fragment:mx,envmap_fragment:gx,envmap_common_pars_fragment:vx,envmap_pars_fragment:_x,envmap_pars_vertex:xx,envmap_physical_pars_fragment:Px,envmap_vertex:Sx,fog_vertex:yx,fog_pars_vertex:Mx,fog_fragment:Ex,fog_pars_fragment:Tx,gradientmap_pars_fragment:wx,lightmap_pars_fragment:Ax,lights_lambert_fragment:Cx,lights_lambert_pars_fragment:Rx,lights_pars_begin:bx,lights_toon_fragment:Lx,lights_toon_pars_fragment:Nx,lights_phong_fragment:Dx,lights_phong_pars_fragment:Ux,lights_physical_fragment:Ix,lights_physical_pars_fragment:Fx,lights_fragment_begin:Ox,lights_fragment_maps:kx,lights_fragment_end:zx,logdepthbuf_fragment:Bx,logdepthbuf_pars_fragment:Hx,logdepthbuf_pars_vertex:Vx,logdepthbuf_vertex:Gx,map_fragment:Wx,map_pars_fragment:jx,map_particle_fragment:Xx,map_particle_pars_fragment:Yx,metalnessmap_fragment:qx,metalnessmap_pars_fragment:$x,morphinstance_vertex:Kx,morphcolor_vertex:Zx,morphnormal_vertex:Qx,morphtarget_pars_vertex:Jx,morphtarget_vertex:eS,normal_fragment_begin:tS,normal_fragment_maps:nS,normal_pars_fragment:iS,normal_pars_vertex:rS,normal_vertex:sS,normalmap_pars_fragment:oS,clearcoat_normal_fragment_begin:aS,clearcoat_normal_fragment_maps:lS,clearcoat_pars_fragment:cS,iridescence_pars_fragment:uS,opaque_fragment:dS,packing:fS,premultiplied_alpha_fragment:hS,project_vertex:pS,dithering_fragment:mS,dithering_pars_fragment:gS,roughnessmap_fragment:vS,roughnessmap_pars_fragment:_S,shadowmap_pars_fragment:xS,shadowmap_pars_vertex:SS,shadowmap_vertex:yS,shadowmask_pars_fragment:MS,skinbase_vertex:ES,skinning_pars_vertex:TS,skinning_vertex:wS,skinnormal_vertex:AS,specularmap_fragment:CS,specularmap_pars_fragment:RS,tonemapping_fragment:bS,tonemapping_pars_fragment:PS,transmission_fragment:LS,transmission_pars_fragment:NS,uv_pars_fragment:DS,uv_pars_vertex:US,uv_vertex:IS,worldpos_vertex:FS,background_vert:OS,background_frag:kS,backgroundCube_vert:zS,backgroundCube_frag:BS,cube_vert:HS,cube_frag:VS,depth_vert:GS,depth_frag:WS,distanceRGBA_vert:jS,distanceRGBA_frag:XS,equirect_vert:YS,equirect_frag:qS,linedashed_vert:$S,linedashed_frag:KS,meshbasic_vert:ZS,meshbasic_frag:QS,meshlambert_vert:JS,meshlambert_frag:ey,meshmatcap_vert:ty,meshmatcap_frag:ny,meshnormal_vert:iy,meshnormal_frag:ry,meshphong_vert:sy,meshphong_frag:oy,meshphysical_vert:ay,meshphysical_frag:ly,meshtoon_vert:cy,meshtoon_frag:uy,points_vert:dy,points_frag:fy,shadow_vert:hy,shadow_frag:py,sprite_vert:my,sprite_frag:gy},Ne={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},mi={basic:{uniforms:_n([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:_n([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:_n([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:_n([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:_n([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:_n([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:_n([Ne.points,Ne.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:_n([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:_n([Ne.common,Ne.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:_n([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:_n([Ne.sprite,Ne.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:_n([Ne.common,Ne.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:_n([Ne.lights,Ne.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};mi.physical={uniforms:_n([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const gl={r:0,b:0,g:0},Hr=new Hi,vy=new jt;function _y(r,e,n,s,a,c,u){const f=new Pt(0);let h=c===!0?0:1,m,g,x=null,v=0,y=null;function E(I){let N=I.isScene===!0?I.background:null;return N&&N.isTexture&&(N=(I.backgroundBlurriness>0?n:e).get(N)),N}function w(I){let N=!1;const R=E(I);R===null?_(f,h):R&&R.isColor&&(_(R,1),N=!0);const Q=r.xr.getEnvironmentBlendMode();Q==="additive"?s.buffers.color.setClear(0,0,0,1,u):Q==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(r.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(I,N){const R=E(N);R&&(R.isCubeTexture||R.mapping===Rl)?(g===void 0&&(g=new gi(new Go(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:js(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(Q,B,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Hr.copy(N.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),g.material.uniforms.envMap.value=R,g.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(vy.makeRotationFromEuler(Hr)),g.material.toneMapped=yt.getTransfer(R.colorSpace)!==Lt,(x!==R||v!==R.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,x=R,v=R.version,y=r.toneMapping),g.layers.enableAll(),I.unshift(g,g.geometry,g.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new gi(new Wo(2,2),new Vi({name:"BackgroundMaterial",uniforms:js(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=yt.getTransfer(R.colorSpace)!==Lt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(x!==R||v!==R.version||y!==r.toneMapping)&&(m.material.needsUpdate=!0,x=R,v=R.version,y=r.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function _(I,N){I.getRGB(gl,$m(r)),s.buffers.color.setClear(gl.r,gl.g,gl.b,N,u)}return{getClearColor:function(){return f},setClearColor:function(I,N=1){f.set(I),h=N,_(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,_(f,h)},render:w,addToRenderList:S}}function xy(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=v(null);let c=a,u=!1;function f(C,z,ue,ee,he){let de=!1;const le=x(ee,ue,z);c!==le&&(c=le,m(c.object)),de=y(C,ee,ue,he),de&&E(C,ee,ue,he),he!==null&&e.update(he,r.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,R(C,z,ue,ee),he!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function h(){return r.createVertexArray()}function m(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function x(C,z,ue){const ee=ue.wireframe===!0;let he=s[C.id];he===void 0&&(he={},s[C.id]=he);let de=he[z.id];de===void 0&&(de={},he[z.id]=de);let le=de[ee];return le===void 0&&(le=v(h()),de[ee]=le),le}function v(C){const z=[],ue=[],ee=[];for(let he=0;he<n;he++)z[he]=0,ue[he]=0,ee[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ue,attributeDivisors:ee,object:C,attributes:{},index:null}}function y(C,z,ue,ee){const he=c.attributes,de=z.attributes;let le=0;const oe=ue.getAttributes();for(const U in oe)if(oe[U].location>=0){const Y=he[U];let F=de[U];if(F===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(F=C.instanceColor)),Y===void 0||Y.attribute!==F||F&&Y.data!==F.data)return!0;le++}return c.attributesNum!==le||c.index!==ee}function E(C,z,ue,ee){const he={},de=z.attributes;let le=0;const oe=ue.getAttributes();for(const U in oe)if(oe[U].location>=0){let Y=de[U];Y===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(Y=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(Y=C.instanceColor));const F={};F.attribute=Y,Y&&Y.data&&(F.data=Y.data),he[U]=F,le++}c.attributes=he,c.attributesNum=le,c.index=ee}function w(){const C=c.newAttributes;for(let z=0,ue=C.length;z<ue;z++)C[z]=0}function S(C){_(C,0)}function _(C,z){const ue=c.newAttributes,ee=c.enabledAttributes,he=c.attributeDivisors;ue[C]=1,ee[C]===0&&(r.enableVertexAttribArray(C),ee[C]=1),he[C]!==z&&(r.vertexAttribDivisor(C,z),he[C]=z)}function I(){const C=c.newAttributes,z=c.enabledAttributes;for(let ue=0,ee=z.length;ue<ee;ue++)z[ue]!==C[ue]&&(r.disableVertexAttribArray(ue),z[ue]=0)}function N(C,z,ue,ee,he,de,le){le===!0?r.vertexAttribIPointer(C,z,ue,he,de):r.vertexAttribPointer(C,z,ue,ee,he,de)}function R(C,z,ue,ee){w();const he=ee.attributes,de=ue.getAttributes(),le=z.defaultAttributeValues;for(const oe in de){const U=de[oe];if(U.location>=0){let K=he[oe];if(K===void 0&&(oe==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),oe==="instanceColor"&&C.instanceColor&&(K=C.instanceColor)),K!==void 0){const Y=K.normalized,F=K.itemSize,Z=e.get(K);if(Z===void 0)continue;const be=Z.buffer,q=Z.type,fe=Z.bytesPerElement,_e=q===r.INT||q===r.UNSIGNED_INT||K.gpuType===Ld;if(K.isInterleavedBufferAttribute){const ve=K.data,Te=ve.stride,ne=K.offset;if(ve.isInstancedInterleavedBuffer){for(let Me=0;Me<U.locationSize;Me++)_(U.location+Me,ve.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Me=0;Me<U.locationSize;Me++)S(U.location+Me);r.bindBuffer(r.ARRAY_BUFFER,be);for(let Me=0;Me<U.locationSize;Me++)N(U.location+Me,F/U.locationSize,q,Y,Te*fe,(ne+F/U.locationSize*Me)*fe,_e)}else{if(K.isInstancedBufferAttribute){for(let ve=0;ve<U.locationSize;ve++)_(U.location+ve,K.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ve=0;ve<U.locationSize;ve++)S(U.location+ve);r.bindBuffer(r.ARRAY_BUFFER,be);for(let ve=0;ve<U.locationSize;ve++)N(U.location+ve,F/U.locationSize,q,Y,F*fe,F/U.locationSize*ve*fe,_e)}}else if(le!==void 0){const Y=le[oe];if(Y!==void 0)switch(Y.length){case 2:r.vertexAttrib2fv(U.location,Y);break;case 3:r.vertexAttrib3fv(U.location,Y);break;case 4:r.vertexAttrib4fv(U.location,Y);break;default:r.vertexAttrib1fv(U.location,Y)}}}}I()}function Q(){X();for(const C in s){const z=s[C];for(const ue in z){const ee=z[ue];for(const he in ee)g(ee[he].object),delete ee[he];delete z[ue]}delete s[C]}}function B(C){if(s[C.id]===void 0)return;const z=s[C.id];for(const ue in z){const ee=z[ue];for(const he in ee)g(ee[he].object),delete ee[he];delete z[ue]}delete s[C.id]}function O(C){for(const z in s){const ue=s[z];if(ue[C.id]===void 0)continue;const ee=ue[C.id];for(const he in ee)g(ee[he].object),delete ee[he];delete ue[C.id]}}function X(){b(),u=!0,c!==a&&(c=a,m(c.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:X,resetDefaultState:b,dispose:Q,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:S,disableUnusedAttributes:I}}function Sy(r,e,n){let s;function a(m){s=m}function c(m,g){r.drawArrays(s,m,g),n.update(g,s,1)}function u(m,g,x){x!==0&&(r.drawArraysInstanced(s,m,g,x),n.update(g,s,x))}function f(m,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,x);let y=0;for(let E=0;E<x;E++)y+=g[E];n.update(y,s,1)}function h(m,g,x,v){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)u(m[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(s,m,0,g,0,v,0,x);let E=0;for(let w=0;w<x;w++)E+=g[w]*v[w];n.update(E,s,1)}}this.setMode=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function yy(r,e,n,s){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(O){return!(O!==ai&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const X=O===Bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Bi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Oi&&!X)}function h(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const x=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),Q=E>0,B=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:I,maxVaryings:N,maxFragmentUniforms:R,vertexTextures:Q,maxSamples:B}}function My(r){const e=this;let n=null,s=0,a=!1,c=!1;const u=new Gr,f=new dt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const y=x.length!==0||v||s!==0||a;return a=v,s=x.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,v){n=g(x,v,0)},this.setState=function(x,v,y){const E=x.clippingPlanes,w=x.clipIntersection,S=x.clipShadows,_=r.get(x);if(!a||E===null||E.length===0||c&&!S)c?g(null):m();else{const I=c?0:s,N=I*4;let R=_.clippingState||null;h.value=R,R=g(E,v,N,y);for(let Q=0;Q!==N;++Q)R[Q]=n[Q];_.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(x,v,y,E){const w=x!==null?x.length:0;let S=null;if(w!==0){if(S=h.value,E!==!0||S===null){const _=y+w*4,I=v.matrixWorldInverse;f.getNormalMatrix(I),(S===null||S.length<_)&&(S=new Float32Array(_));for(let N=0,R=y;N!==w;++N,R+=4)u.copy(x[N]).applyMatrix4(I,f),u.normal.toArray(S,R),S[R+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function Ey(r){let e=new WeakMap;function n(u,f){return f===Qu?u.mapping=Hs:f===Ju&&(u.mapping=Vs),u}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Qu||f===Ju)if(e.has(u)){const h=e.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const m=new U_(h.height);return m.fromEquirectangularTexture(r,u),e.set(u,m),u.addEventListener("dispose",a),n(m.texture,u.mapping)}else return null}}return u}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}class Ty extends Km{constructor(e=-1,n=1,s=1,a=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=a,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,a,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=s-e,u=s+e,f=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fs=4,Kp=[.125,.215,.35,.446,.526,.582],Xr=20,Fu=new Ty,Zp=new Pt;let Ou=null,ku=0,zu=0,Bu=!1;const Wr=(1+Math.sqrt(5))/2,Us=1/Wr,Qp=[new ae(-Wr,Us,0),new ae(Wr,Us,0),new ae(-Us,0,Wr),new ae(Us,0,Wr),new ae(0,Wr,-Us),new ae(0,Wr,Us),new ae(-1,1,-1),new ae(1,1,-1),new ae(-1,1,1),new ae(1,1,1)];class Jp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,s=.1,a=100){Ou=this._renderer.getRenderTarget(),ku=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,s,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ou,ku,zu),this._renderer.xr.enabled=Bu,e.scissorTest=!1,vl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ou=this._renderer.getRenderTarget(),ku=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:Bo,format:ai,colorSpace:Xs,depthBuffer:!1},a=em(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=em(e,n,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wy(c)),this._blurMaterial=Ay(c,e,n)}return a}_compileMaterial(e){const n=new gi(this._lodPlanes[0],e);this._renderer.compile(n,Fu)}_sceneToCubeUV(e,n,s,a){const f=new Yn(90,1,n,s),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,v=g.toneMapping;g.getClearColor(Zp),g.toneMapping=yr,g.autoClear=!1;const y=new Xm({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),E=new gi(new Go,y);let w=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,w=!0):(y.color.copy(Zp),w=!0);for(let _=0;_<6;_++){const I=_%3;I===0?(f.up.set(0,h[_],0),f.lookAt(m[_],0,0)):I===1?(f.up.set(0,0,h[_]),f.lookAt(0,m[_],0)):(f.up.set(0,h[_],0),f.lookAt(0,0,m[_]));const N=this._cubeSize;vl(a,I*N,_>2?N:0,N,N),g.setRenderTarget(a),w&&g.render(E,f),g.render(e,f)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=v,g.autoClear=x,e.background=S}_textureToCubeUV(e,n){const s=this._renderer,a=e.mapping===Hs||e.mapping===Vs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tm());const c=a?this._cubemapMaterial:this._equirectMaterial,u=new gi(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const h=this._cubeSize;vl(n,0,0,3*h,2*h),s.setRenderTarget(n),s.render(u,Fu)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=Qp[(a-c-1)%Qp.length];this._blur(e,c-1,c,u,f)}n.autoClear=s}_blur(e,n,s,a,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,s,a,"latitudinal",c),this._halfBlur(u,e,s,s,a,"longitudinal",c)}_halfBlur(e,n,s,a,c,u,f){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new gi(this._lodPlanes[a],m),v=m.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Xr-1),w=c/E,S=isFinite(c)?1+Math.floor(g*w):Xr;S>Xr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Xr}`);const _=[];let I=0;for(let O=0;O<Xr;++O){const X=O/w,b=Math.exp(-X*X/2);_.push(b),O===0?I+=b:O<S&&(I+=2*b)}for(let O=0;O<_.length;O++)_[O]=_[O]/I;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=_,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:N}=this;v.dTheta.value=E,v.mipInt.value=N-s;const R=this._sizeLods[a],Q=3*R*(a>N-Fs?a-N+Fs:0),B=4*(this._cubeSize-R);vl(n,Q,B,3*R,2*R),h.setRenderTarget(n),h.render(x,Fu)}}function wy(r){const e=[],n=[],s=[];let a=r;const c=r-Fs+1+Kp.length;for(let u=0;u<c;u++){const f=Math.pow(2,a);n.push(f);let h=1/f;u>r-Fs?h=Kp[u-r+Fs-1]:u===0&&(h=0),s.push(h);const m=1/(f-2),g=-m,x=1+m,v=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,E=6,w=3,S=2,_=1,I=new Float32Array(w*E*y),N=new Float32Array(S*E*y),R=new Float32Array(_*E*y);for(let B=0;B<y;B++){const O=B%3*2/3-1,X=B>2?0:-1,b=[O,X,0,O+2/3,X,0,O+2/3,X+1,0,O,X,0,O+2/3,X+1,0,O,X+1,0];I.set(b,w*E*B),N.set(v,S*E*B);const C=[B,B,B,B,B,B];R.set(C,_*E*B)}const Q=new Kr;Q.setAttribute("position",new vi(I,w)),Q.setAttribute("uv",new vi(N,S)),Q.setAttribute("faceIndex",new vi(R,_)),e.push(Q),a>Fs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:s}}function em(r,e,n){const s=new $r(r,e,n);return s.texture.mapping=Rl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function vl(r,e,n,s,a){r.viewport.set(e,n,s,a),r.scissor.set(e,n,s,a)}function Ay(r,e,n){const s=new Float32Array(Xr),a=new ae(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function tm(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function nm(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function zd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cy(r){let e=new WeakMap,n=null;function s(f){if(f&&f.isTexture){const h=f.mapping,m=h===Qu||h===Ju,g=h===Hs||h===Vs;if(m||g){let x=e.get(f);const v=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new Jp(r)),x=m?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const y=f.image;return m&&y&&y.height>0||g&&y&&a(y)?(n===null&&(n=new Jp(r)),x=m?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",c),x.texture):null}}}return f}function a(f){let h=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&h++;return h===m}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Ry(r){const e={};function n(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const a=n(s);return a===null&&Do("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function by(r,e,n,s){const a={},c=new WeakMap;function u(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);for(const E in v.morphAttributes){const w=v.morphAttributes[E];for(let S=0,_=w.length;S<_;S++)e.remove(w[S])}v.removeEventListener("dispose",u),delete a[v.id];const y=c.get(v);y&&(e.remove(y),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(x,v){return a[v.id]===!0||(v.addEventListener("dispose",u),a[v.id]=!0,n.memory.geometries++),v}function h(x){const v=x.attributes;for(const E in v)e.update(v[E],r.ARRAY_BUFFER);const y=x.morphAttributes;for(const E in y){const w=y[E];for(let S=0,_=w.length;S<_;S++)e.update(w[S],r.ARRAY_BUFFER)}}function m(x){const v=[],y=x.index,E=x.attributes.position;let w=0;if(y!==null){const I=y.array;w=y.version;for(let N=0,R=I.length;N<R;N+=3){const Q=I[N+0],B=I[N+1],O=I[N+2];v.push(Q,B,B,O,O,Q)}}else if(E!==void 0){const I=E.array;w=E.version;for(let N=0,R=I.length/3-1;N<R;N+=3){const Q=N+0,B=N+1,O=N+2;v.push(Q,B,B,O,O,Q)}}else return;const S=new(Hm(v)?qm:Ym)(v,1);S.version=w;const _=c.get(x);_&&e.remove(_),c.set(x,S)}function g(x){const v=c.get(x);if(v){const y=x.index;y!==null&&v.version<y.version&&m(x)}else m(x);return c.get(x)}return{get:f,update:h,getWireframeAttribute:g}}function Py(r,e,n){let s;function a(v){s=v}let c,u;function f(v){c=v.type,u=v.bytesPerElement}function h(v,y){r.drawElements(s,y,c,v*u),n.update(y,s,1)}function m(v,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,v*u,E),n.update(y,s,E))}function g(v,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,v,0,E);let S=0;for(let _=0;_<E;_++)S+=y[_];n.update(S,s,1)}function x(v,y,E,w){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<v.length;_++)m(v[_]/u,y[_],w[_]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,c,v,0,w,0,E);let _=0;for(let I=0;I<E;I++)_+=y[I]*w[I];n.update(_,s,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function Ly(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,u,f){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=f*(c/3);break;case r.LINES:n.lines+=f*(c/2);break;case r.LINE_STRIP:n.lines+=f*(c-1);break;case r.LINE_LOOP:n.lines+=f*c;break;case r.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:s}}function Ny(r,e,n){const s=new WeakMap,a=new Vt;function c(u,f,h){const m=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=g!==void 0?g.length:0;let v=s.get(f);if(v===void 0||v.count!==x){let C=function(){X.dispose(),s.delete(f),f.removeEventListener("dispose",C)};var y=C;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],I=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let R=0;E===!0&&(R=1),w===!0&&(R=2),S===!0&&(R=3);let Q=f.attributes.position.count*R,B=1;Q>e.maxTextureSize&&(B=Math.ceil(Q/e.maxTextureSize),Q=e.maxTextureSize);const O=new Float32Array(Q*B*4*x),X=new Gm(O,Q,B,x);X.type=Oi,X.needsUpdate=!0;const b=R*4;for(let z=0;z<x;z++){const ue=_[z],ee=I[z],he=N[z],de=Q*B*4*z;for(let le=0;le<ue.count;le++){const oe=le*b;E===!0&&(a.fromBufferAttribute(ue,le),O[de+oe+0]=a.x,O[de+oe+1]=a.y,O[de+oe+2]=a.z,O[de+oe+3]=0),w===!0&&(a.fromBufferAttribute(ee,le),O[de+oe+4]=a.x,O[de+oe+5]=a.y,O[de+oe+6]=a.z,O[de+oe+7]=0),S===!0&&(a.fromBufferAttribute(he,le),O[de+oe+8]=a.x,O[de+oe+9]=a.y,O[de+oe+10]=a.z,O[de+oe+11]=he.itemSize===4?a.w:1)}}v={count:x,texture:X,size:new Tt(Q,B)},s.set(f,v),f.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let E=0;for(let S=0;S<m.length;S++)E+=m[S];const w=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",w),h.getUniforms().setValue(r,"morphTargetInfluences",m)}h.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),h.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function Dy(r,e,n,s){let a=new WeakMap;function c(h){const m=s.render.frame,g=h.geometry,x=e.get(h,g);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==m&&(n.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const v=h.skeleton;a.get(v)!==m&&(v.update(),a.set(v,m))}return x}function u(){a=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}class eg extends Sn{constructor(e,n,s,a,c,u,f,h,m,g=ks){if(g!==ks&&g!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===ks&&(s=qr),s===void 0&&g===Ws&&(s=Gs),super(null,a,c,u,f,h,g,s,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:li,this.minFilter=h!==void 0?h:li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const tg=new Sn,im=new eg(1,1),ng=new Gm,ig=new v_,rg=new Zm,rm=[],sm=[],om=new Float32Array(16),am=new Float32Array(9),lm=new Float32Array(4);function $s(r,e,n){const s=r[0];if(s<=0||s>0)return r;const a=e*n;let c=rm[a];if(c===void 0&&(c=new Float32Array(a),rm[a]=c),e!==0){s.toArray(c,0);for(let u=1,f=0;u!==e;++u)f+=n,r[u].toArray(c,f)}return c}function Kt(r,e){if(r.length!==e.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==e[n])return!1;return!0}function Zt(r,e){for(let n=0,s=e.length;n<s;n++)r[n]=e[n]}function Ll(r,e){let n=sm[e];n===void 0&&(n=new Int32Array(e),sm[e]=n);for(let s=0;s!==e;++s)n[s]=r.allocateTextureUnit();return n}function Uy(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function Iy(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;r.uniform2fv(this.addr,e),Zt(n,e)}}function Fy(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;r.uniform3fv(this.addr,e),Zt(n,e)}}function Oy(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;r.uniform4fv(this.addr,e),Zt(n,e)}}function ky(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(Kt(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,s))return;lm.set(s),r.uniformMatrix2fv(this.addr,!1,lm),Zt(n,s)}}function zy(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(Kt(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,s))return;am.set(s),r.uniformMatrix3fv(this.addr,!1,am),Zt(n,s)}}function By(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(Kt(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,s))return;om.set(s),r.uniformMatrix4fv(this.addr,!1,om),Zt(n,s)}}function Hy(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function Vy(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;r.uniform2iv(this.addr,e),Zt(n,e)}}function Gy(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;r.uniform3iv(this.addr,e),Zt(n,e)}}function Wy(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;r.uniform4iv(this.addr,e),Zt(n,e)}}function jy(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function Xy(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;r.uniform2uiv(this.addr,e),Zt(n,e)}}function Yy(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;r.uniform3uiv(this.addr,e),Zt(n,e)}}function qy(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;r.uniform4uiv(this.addr,e),Zt(n,e)}}function $y(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let c;this.type===r.SAMPLER_2D_SHADOW?(im.compareFunction=Bm,c=im):c=tg,n.setTexture2D(e||c,a)}function Ky(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTexture3D(e||ig,a)}function Zy(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTextureCube(e||rg,a)}function Qy(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTexture2DArray(e||ng,a)}function Jy(r){switch(r){case 5126:return Uy;case 35664:return Iy;case 35665:return Fy;case 35666:return Oy;case 35674:return ky;case 35675:return zy;case 35676:return By;case 5124:case 35670:return Hy;case 35667:case 35671:return Vy;case 35668:case 35672:return Gy;case 35669:case 35673:return Wy;case 5125:return jy;case 36294:return Xy;case 36295:return Yy;case 36296:return qy;case 35678:case 36198:case 36298:case 36306:case 35682:return $y;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return Zy;case 36289:case 36303:case 36311:case 36292:return Qy}}function eM(r,e){r.uniform1fv(this.addr,e)}function tM(r,e){const n=$s(e,this.size,2);r.uniform2fv(this.addr,n)}function nM(r,e){const n=$s(e,this.size,3);r.uniform3fv(this.addr,n)}function iM(r,e){const n=$s(e,this.size,4);r.uniform4fv(this.addr,n)}function rM(r,e){const n=$s(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function sM(r,e){const n=$s(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function oM(r,e){const n=$s(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function aM(r,e){r.uniform1iv(this.addr,e)}function lM(r,e){r.uniform2iv(this.addr,e)}function cM(r,e){r.uniform3iv(this.addr,e)}function uM(r,e){r.uniform4iv(this.addr,e)}function dM(r,e){r.uniform1uiv(this.addr,e)}function fM(r,e){r.uniform2uiv(this.addr,e)}function hM(r,e){r.uniform3uiv(this.addr,e)}function pM(r,e){r.uniform4uiv(this.addr,e)}function mM(r,e,n){const s=this.cache,a=e.length,c=Ll(n,a);Kt(s,c)||(r.uniform1iv(this.addr,c),Zt(s,c));for(let u=0;u!==a;++u)n.setTexture2D(e[u]||tg,c[u])}function gM(r,e,n){const s=this.cache,a=e.length,c=Ll(n,a);Kt(s,c)||(r.uniform1iv(this.addr,c),Zt(s,c));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||ig,c[u])}function vM(r,e,n){const s=this.cache,a=e.length,c=Ll(n,a);Kt(s,c)||(r.uniform1iv(this.addr,c),Zt(s,c));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||rg,c[u])}function _M(r,e,n){const s=this.cache,a=e.length,c=Ll(n,a);Kt(s,c)||(r.uniform1iv(this.addr,c),Zt(s,c));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||ng,c[u])}function xM(r){switch(r){case 5126:return eM;case 35664:return tM;case 35665:return nM;case 35666:return iM;case 35674:return rM;case 35675:return sM;case 35676:return oM;case 5124:case 35670:return aM;case 35667:case 35671:return lM;case 35668:case 35672:return cM;case 35669:case 35673:return uM;case 5125:return dM;case 36294:return fM;case 36295:return hM;case 36296:return pM;case 35678:case 36198:case 36298:case 36306:case 35682:return mM;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return _M}}class SM{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.setValue=Jy(n.type)}}class yM{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=xM(n.type)}}class MM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const a=this.seq;for(let c=0,u=a.length;c!==u;++c){const f=a[c];f.setValue(e,n[f.id],s)}}}const Hu=/(\w+)(\])?(\[|\.)?/g;function cm(r,e){r.seq.push(e),r.map[e.id]=e}function EM(r,e,n){const s=r.name,a=s.length;for(Hu.lastIndex=0;;){const c=Hu.exec(s),u=Hu.lastIndex;let f=c[1];const h=c[2]==="]",m=c[3];if(h&&(f=f|0),m===void 0||m==="["&&u+2===a){cm(n,m===void 0?new SM(f,r,e):new yM(f,r,e));break}else{let x=n.map[f];x===void 0&&(x=new MM(f),cm(n,x)),n=x}}}class wl{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const c=e.getActiveUniform(n,a),u=e.getUniformLocation(n,c.name);EM(c,u,this)}}setValue(e,n,s,a){const c=this.map[n];c!==void 0&&c.setValue(e,s,a)}setOptional(e,n,s){const a=n[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,n,s,a){for(let c=0,u=n.length;c!==u;++c){const f=n[c],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,n){const s=[];for(let a=0,c=e.length;a!==c;++a){const u=e[a];u.id in n&&s.push(u)}return s}}function um(r,e,n){const s=r.createShader(e);return r.shaderSource(s,n),r.compileShader(s),s}const TM=37297;let wM=0;function AM(r,e){const n=r.split(`
`),s=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=a;u<c;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return s.join(`
`)}const dm=new dt;function CM(r){yt._getMatrix(dm,yt.workingColorSpace,r);const e=`mat3( ${dm.elements.map(n=>n.toFixed(4))} )`;switch(yt.getTransfer(r)){case bl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function fm(r,e,n){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+AM(r.getShaderSource(e),u)}else return a}function RM(r,e){const n=CM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function bM(r,e){let n;switch(e){case R0:n="Linear";break;case b0:n="Reinhard";break;case P0:n="Cineon";break;case L0:n="ACESFilmic";break;case D0:n="AgX";break;case U0:n="Neutral";break;case N0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const _l=new ae;function PM(){yt.getLuminanceCoefficients(_l);const r=_l.x.toFixed(4),e=_l.y.toFixed(4),n=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function NM(r){const e=[];for(const n in r){const s=r[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function DM(r,e){const n={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const c=r.getActiveAttrib(e,a),u=c.name;let f=1;c.type===r.FLOAT_MAT2&&(f=2),c.type===r.FLOAT_MAT3&&(f=3),c.type===r.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:f}}return n}function Uo(r){return r!==""}function hm(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(r){return r.replace(UM,FM)}const IM=new Map;function FM(r,e){let n=ft[e];if(n===void 0){const s=IM.get(e);if(s!==void 0)n=ft[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Rd(n)}const OM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mm(r){return r.replace(OM,kM)}function kM(r,e,n,s){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function gm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Cm?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===a0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function BM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function HM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function VM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Rm:e="ENVMAP_BLENDING_MULTIPLY";break;case A0:e="ENVMAP_BLENDING_MIX";break;case C0:e="ENVMAP_BLENDING_ADD";break}return e}function GM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function WM(r,e,n,s){const a=r.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const h=zM(n),m=BM(n),g=HM(n),x=VM(n),v=GM(n),y=LM(n),E=NM(c),w=a.createProgram();let S,_,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Uo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Uo).join(`
`),_.length>0&&(_+=`
`)):(S=[gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),_=[gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yr?"#define TONE_MAPPING":"",n.toneMapping!==yr?ft.tonemapping_pars_fragment:"",n.toneMapping!==yr?bM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,RM("linearToOutputTexel",n.outputColorSpace),PM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Uo).join(`
`)),u=Rd(u),u=hm(u,n),u=pm(u,n),f=Rd(f),f=hm(f,n),f=pm(f,n),u=mm(u),f=mm(f),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",n.glslVersion===Rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=I+S+u,R=I+_+f,Q=um(a,a.VERTEX_SHADER,N),B=um(a,a.FRAGMENT_SHADER,R);a.attachShader(w,Q),a.attachShader(w,B),n.index0AttributeName!==void 0?a.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function O(z){if(r.debug.checkShaderErrors){const ue=a.getProgramInfoLog(w).trim(),ee=a.getShaderInfoLog(Q).trim(),he=a.getShaderInfoLog(B).trim();let de=!0,le=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(de=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,w,Q,B);else{const oe=fm(a,Q,"vertex"),U=fm(a,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ue+`
`+oe+`
`+U)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(ee===""||he==="")&&(le=!1);le&&(z.diagnostics={runnable:de,programLog:ue,vertexShader:{log:ee,prefix:S},fragmentShader:{log:he,prefix:_}})}a.deleteShader(Q),a.deleteShader(B),X=new wl(a,w),b=DM(a,w)}let X;this.getUniforms=function(){return X===void 0&&O(this),X};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(w,TM)),C},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=Q,this.fragmentShader=B,this}let jM=0;class XM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new YM(e),n.set(e,s)),s}}class YM{constructor(e){this.id=jM++,this.code=e,this.usedTimes=0}}function qM(r,e,n,s,a,c,u){const f=new Wm,h=new XM,m=new Set,g=[],x=a.logarithmicDepthBuffer,v=a.vertexTextures;let y=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return m.add(b),b===0?"uv":`uv${b}`}function S(b,C,z,ue,ee){const he=ue.fog,de=ee.geometry,le=b.isMeshStandardMaterial?ue.environment:null,oe=(b.isMeshStandardMaterial?n:e).get(b.envMap||le),U=oe&&oe.mapping===Rl?oe.image.height:null,K=E[b.type];b.precision!==null&&(y=a.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const Y=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,F=Y!==void 0?Y.length:0;let Z=0;de.morphAttributes.position!==void 0&&(Z=1),de.morphAttributes.normal!==void 0&&(Z=2),de.morphAttributes.color!==void 0&&(Z=3);let be,q,fe,_e;if(K){const _t=mi[K];be=_t.vertexShader,q=_t.fragmentShader}else be=b.vertexShader,q=b.fragmentShader,h.update(b),fe=h.getVertexShaderID(b),_e=h.getFragmentShaderID(b);const ve=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),ne=ee.isInstancedMesh===!0,Me=ee.isBatchedMesh===!0,ze=!!b.map,Ie=!!b.matcap,et=!!oe,H=!!b.aoMap,Ct=!!b.lightMap,nt=!!b.bumpMap,ot=!!b.normalMap,Ze=!!b.displacementMap,wt=!!b.emissiveMap,$e=!!b.metalnessMap,L=!!b.roughnessMap,T=b.anisotropy>0,te=b.clearcoat>0,ge=b.dispersion>0,Se=b.iridescence>0,pe=b.sheen>0,je=b.transmission>0,Pe=T&&!!b.anisotropyMap,Oe=te&&!!b.clearcoatMap,ht=te&&!!b.clearcoatNormalMap,we=te&&!!b.clearcoatRoughnessMap,Be=Se&&!!b.iridescenceMap,tt=Se&&!!b.iridescenceThicknessMap,it=pe&&!!b.sheenColorMap,He=pe&&!!b.sheenRoughnessMap,pt=!!b.specularMap,lt=!!b.specularColorMap,Rt=!!b.specularIntensityMap,G=je&&!!b.transmissionMap,Le=je&&!!b.thicknessMap,ce=!!b.gradientMap,me=!!b.alphaMap,Ue=b.alphaTest>0,De=!!b.alphaHash,ct=!!b.extensions;let Ut=yr;b.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ut=r.toneMapping);const Xt={shaderID:K,shaderType:b.type,shaderName:b.name,vertexShader:be,fragmentShader:q,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:_e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:Me,batchingColor:Me&&ee._colorsTexture!==null,instancing:ne,instancingColor:ne&&ee.instanceColor!==null,instancingMorph:ne&&ee.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ve===null?r.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Xs,alphaToCoverage:!!b.alphaToCoverage,map:ze,matcap:Ie,envMap:et,envMapMode:et&&oe.mapping,envMapCubeUVHeight:U,aoMap:H,lightMap:Ct,bumpMap:nt,normalMap:ot,displacementMap:v&&Ze,emissiveMap:wt,normalMapObjectSpace:ot&&b.normalMapType===z0,normalMapTangentSpace:ot&&b.normalMapType===k0,metalnessMap:$e,roughnessMap:L,anisotropy:T,anisotropyMap:Pe,clearcoat:te,clearcoatMap:Oe,clearcoatNormalMap:ht,clearcoatRoughnessMap:we,dispersion:ge,iridescence:Se,iridescenceMap:Be,iridescenceThicknessMap:tt,sheen:pe,sheenColorMap:it,sheenRoughnessMap:He,specularMap:pt,specularColorMap:lt,specularIntensityMap:Rt,transmission:je,transmissionMap:G,thicknessMap:Le,gradientMap:ce,opaque:b.transparent===!1&&b.blending===Os&&b.alphaToCoverage===!1,alphaMap:me,alphaTest:Ue,alphaHash:De,combine:b.combine,mapUv:ze&&w(b.map.channel),aoMapUv:H&&w(b.aoMap.channel),lightMapUv:Ct&&w(b.lightMap.channel),bumpMapUv:nt&&w(b.bumpMap.channel),normalMapUv:ot&&w(b.normalMap.channel),displacementMapUv:Ze&&w(b.displacementMap.channel),emissiveMapUv:wt&&w(b.emissiveMap.channel),metalnessMapUv:$e&&w(b.metalnessMap.channel),roughnessMapUv:L&&w(b.roughnessMap.channel),anisotropyMapUv:Pe&&w(b.anisotropyMap.channel),clearcoatMapUv:Oe&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:ht&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:it&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:He&&w(b.sheenRoughnessMap.channel),specularMapUv:pt&&w(b.specularMap.channel),specularColorMapUv:lt&&w(b.specularColorMap.channel),specularIntensityMapUv:Rt&&w(b.specularIntensityMap.channel),transmissionMapUv:G&&w(b.transmissionMap.channel),thicknessMapUv:Le&&w(b.thicknessMap.channel),alphaMapUv:me&&w(b.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(ot||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!de.attributes.uv&&(ze||me),fog:!!he,useFog:b.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Te,skinning:ee.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:Z,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ut,decodeVideoTexture:ze&&b.map.isVideoTexture===!0&&yt.getTransfer(b.map.colorSpace)===Lt,decodeVideoTextureEmissive:wt&&b.emissiveMap.isVideoTexture===!0&&yt.getTransfer(b.emissiveMap.colorSpace)===Lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ii,flipSided:b.side===Pn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ct&&b.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&b.extensions.multiDraw===!0||Me)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function _(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)C.push(z),C.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(I(C,b),N(C,b),C.push(r.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function I(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function N(b,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),b.push(f.mask)}function R(b){const C=E[b.type];let z;if(C){const ue=mi[C];z=P_.clone(ue.uniforms)}else z=b.uniforms;return z}function Q(b,C){let z;for(let ue=0,ee=g.length;ue<ee;ue++){const he=g[ue];if(he.cacheKey===C){z=he,++z.usedTimes;break}}return z===void 0&&(z=new WM(r,C,b,c),g.push(z)),z}function B(b){if(--b.usedTimes===0){const C=g.indexOf(b);g[C]=g[g.length-1],g.pop(),b.destroy()}}function O(b){h.remove(b)}function X(){h.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:R,acquireProgram:Q,releaseProgram:B,releaseShaderCache:O,programs:g,dispose:X}}function $M(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function a(u,f,h){r.get(u)[f]=h}function c(){r=new WeakMap}return{has:e,get:n,remove:s,update:a,dispose:c}}function KM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function vm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _m(){const r=[];let e=0;const n=[],s=[],a=[];function c(){e=0,n.length=0,s.length=0,a.length=0}function u(x,v,y,E,w,S){let _=r[e];return _===void 0?(_={id:x.id,object:x,geometry:v,material:y,groupOrder:E,renderOrder:x.renderOrder,z:w,group:S},r[e]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=y,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=w,_.group=S),e++,_}function f(x,v,y,E,w,S){const _=u(x,v,y,E,w,S);y.transmission>0?s.push(_):y.transparent===!0?a.push(_):n.push(_)}function h(x,v,y,E,w,S){const _=u(x,v,y,E,w,S);y.transmission>0?s.unshift(_):y.transparent===!0?a.unshift(_):n.unshift(_)}function m(x,v){n.length>1&&n.sort(x||KM),s.length>1&&s.sort(v||vm),a.length>1&&a.sort(v||vm)}function g(){for(let x=e,v=r.length;x<v;x++){const y=r[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:s,transparent:a,init:c,push:f,unshift:h,finish:g,sort:m}}function ZM(){let r=new WeakMap;function e(s,a){const c=r.get(s);let u;return c===void 0?(u=new _m,r.set(s,[u])):a>=c.length?(u=new _m,c.push(u)):u=c[a],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function QM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ae,color:new Pt};break;case"SpotLight":n={position:new ae,direction:new ae,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ae,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ae,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":n={color:new Pt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return r[e.id]=n,n}}}function JM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let eE=0;function tE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function nE(r){const e=new QM,n=JM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new ae);const a=new ae,c=new jt,u=new jt;function f(m){let g=0,x=0,v=0;for(let b=0;b<9;b++)s.probe[b].set(0,0,0);let y=0,E=0,w=0,S=0,_=0,I=0,N=0,R=0,Q=0,B=0,O=0;m.sort(tE);for(let b=0,C=m.length;b<C;b++){const z=m[b],ue=z.color,ee=z.intensity,he=z.distance,de=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=ue.r*ee,x+=ue.g*ee,v+=ue.b*ee;else if(z.isLightProbe){for(let le=0;le<9;le++)s.probe[le].addScaledVector(z.sh.coefficients[le],ee);O++}else if(z.isDirectionalLight){const le=e.get(z);if(le.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const oe=z.shadow,U=n.get(z);U.shadowIntensity=oe.intensity,U.shadowBias=oe.bias,U.shadowNormalBias=oe.normalBias,U.shadowRadius=oe.radius,U.shadowMapSize=oe.mapSize,s.directionalShadow[y]=U,s.directionalShadowMap[y]=de,s.directionalShadowMatrix[y]=z.shadow.matrix,I++}s.directional[y]=le,y++}else if(z.isSpotLight){const le=e.get(z);le.position.setFromMatrixPosition(z.matrixWorld),le.color.copy(ue).multiplyScalar(ee),le.distance=he,le.coneCos=Math.cos(z.angle),le.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),le.decay=z.decay,s.spot[w]=le;const oe=z.shadow;if(z.map&&(s.spotLightMap[Q]=z.map,Q++,oe.updateMatrices(z),z.castShadow&&B++),s.spotLightMatrix[w]=oe.matrix,z.castShadow){const U=n.get(z);U.shadowIntensity=oe.intensity,U.shadowBias=oe.bias,U.shadowNormalBias=oe.normalBias,U.shadowRadius=oe.radius,U.shadowMapSize=oe.mapSize,s.spotShadow[w]=U,s.spotShadowMap[w]=de,R++}w++}else if(z.isRectAreaLight){const le=e.get(z);le.color.copy(ue).multiplyScalar(ee),le.halfWidth.set(z.width*.5,0,0),le.halfHeight.set(0,z.height*.5,0),s.rectArea[S]=le,S++}else if(z.isPointLight){const le=e.get(z);if(le.color.copy(z.color).multiplyScalar(z.intensity),le.distance=z.distance,le.decay=z.decay,z.castShadow){const oe=z.shadow,U=n.get(z);U.shadowIntensity=oe.intensity,U.shadowBias=oe.bias,U.shadowNormalBias=oe.normalBias,U.shadowRadius=oe.radius,U.shadowMapSize=oe.mapSize,U.shadowCameraNear=oe.camera.near,U.shadowCameraFar=oe.camera.far,s.pointShadow[E]=U,s.pointShadowMap[E]=de,s.pointShadowMatrix[E]=z.shadow.matrix,N++}s.point[E]=le,E++}else if(z.isHemisphereLight){const le=e.get(z);le.skyColor.copy(z.color).multiplyScalar(ee),le.groundColor.copy(z.groundColor).multiplyScalar(ee),s.hemi[_]=le,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ne.LTC_FLOAT_1,s.rectAreaLTC2=Ne.LTC_FLOAT_2):(s.rectAreaLTC1=Ne.LTC_HALF_1,s.rectAreaLTC2=Ne.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=v;const X=s.hash;(X.directionalLength!==y||X.pointLength!==E||X.spotLength!==w||X.rectAreaLength!==S||X.hemiLength!==_||X.numDirectionalShadows!==I||X.numPointShadows!==N||X.numSpotShadows!==R||X.numSpotMaps!==Q||X.numLightProbes!==O)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=S,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=R+Q-B,s.spotLightMap.length=Q,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=O,X.directionalLength=y,X.pointLength=E,X.spotLength=w,X.rectAreaLength=S,X.hemiLength=_,X.numDirectionalShadows=I,X.numPointShadows=N,X.numSpotShadows=R,X.numSpotMaps=Q,X.numLightProbes=O,s.version=eE++)}function h(m,g){let x=0,v=0,y=0,E=0,w=0;const S=g.matrixWorldInverse;for(let _=0,I=m.length;_<I;_++){const N=m[_];if(N.isDirectionalLight){const R=s.directional[x];R.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(S),x++}else if(N.isSpotLight){const R=s.spot[y];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(S),y++}else if(N.isRectAreaLight){const R=s.rectArea[E];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(S),u.identity(),c.copy(N.matrixWorld),c.premultiply(S),u.extractRotation(c),R.halfWidth.set(N.width*.5,0,0),R.halfHeight.set(0,N.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),E++}else if(N.isPointLight){const R=s.point[v];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(S),v++}else if(N.isHemisphereLight){const R=s.hemi[w];R.direction.setFromMatrixPosition(N.matrixWorld),R.direction.transformDirection(S),w++}}}return{setup:f,setupView:h,state:s}}function xm(r){const e=new nE(r),n=[],s=[];function a(g){m.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function u(g){s.push(g)}function f(){e.setup(n)}function h(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:h,pushLight:c,pushShadow:u}}function iE(r){let e=new WeakMap;function n(a,c=0){const u=e.get(a);let f;return u===void 0?(f=new xm(r),e.set(a,[f])):c>=u.length?(f=new xm(r),u.push(f)):f=u[c],f}function s(){e=new WeakMap}return{get:n,dispose:s}}class rE extends Pl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=F0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sE extends Pl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lE(r,e,n){let s=new Qm;const a=new Tt,c=new Tt,u=new Vt,f=new rE({depthPacking:O0}),h=new sE,m={},g=n.maxTextureSize,x={[Mr]:Pn,[Pn]:Mr,[Ii]:Ii},v=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:oE,fragmentShader:aE}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new Kr;E.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new gi(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cm;let _=this.type;this.render=function(B,O,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;const b=r.getRenderTarget(),C=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),ue=r.state;ue.setBlending(Sr),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const ee=_!==Ui&&this.type===Ui,he=_===Ui&&this.type!==Ui;for(let de=0,le=B.length;de<le;de++){const oe=B[de],U=oe.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;a.copy(U.mapSize);const K=U.getFrameExtents();if(a.multiply(K),c.copy(U.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(c.x=Math.floor(g/K.x),a.x=c.x*K.x,U.mapSize.x=c.x),a.y>g&&(c.y=Math.floor(g/K.y),a.y=c.y*K.y,U.mapSize.y=c.y)),U.map===null||ee===!0||he===!0){const F=this.type!==Ui?{minFilter:li,magFilter:li}:{};U.map!==null&&U.map.dispose(),U.map=new $r(a.x,a.y,F),U.map.texture.name=oe.name+".shadowMap",U.camera.updateProjectionMatrix()}r.setRenderTarget(U.map),r.clear();const Y=U.getViewportCount();for(let F=0;F<Y;F++){const Z=U.getViewport(F);u.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),ue.viewport(u),U.updateMatrices(oe,F),s=U.getFrustum(),R(O,X,U.camera,oe,this.type)}U.isPointLightShadow!==!0&&this.type===Ui&&I(U,X),U.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(b,C,z)};function I(B,O){const X=e.update(w);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new $r(a.x,a.y)),v.uniforms.shadow_pass.value=B.map.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(O,null,X,v,w,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(O,null,X,y,w,null)}function N(B,O,X,b){let C=null;const z=X.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(z!==void 0)C=z;else if(C=X.isPointLight===!0?h:f,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ue=C.uuid,ee=O.uuid;let he=m[ue];he===void 0&&(he={},m[ue]=he);let de=he[ee];de===void 0&&(de=C.clone(),he[ee]=de,O.addEventListener("dispose",Q)),C=de}if(C.visible=O.visible,C.wireframe=O.wireframe,b===Ui?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:x[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ue=r.properties.get(C);ue.light=X}return C}function R(B,O,X,b,C){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===Ui)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,B.matrixWorld);const ee=e.update(B),he=B.material;if(Array.isArray(he)){const de=ee.groups;for(let le=0,oe=de.length;le<oe;le++){const U=de[le],K=he[U.materialIndex];if(K&&K.visible){const Y=N(B,K,b,C);B.onBeforeShadow(r,B,O,X,ee,Y,U),r.renderBufferDirect(X,null,ee,Y,B,U),B.onAfterShadow(r,B,O,X,ee,Y,U)}}}else if(he.visible){const de=N(B,he,b,C);B.onBeforeShadow(r,B,O,X,ee,de,null),r.renderBufferDirect(X,null,ee,de,B,null),B.onAfterShadow(r,B,O,X,ee,de,null)}}const ue=B.children;for(let ee=0,he=ue.length;ee<he;ee++)R(ue[ee],O,X,b,C)}function Q(B){B.target.removeEventListener("dispose",Q);for(const X in m){const b=m[X],C=B.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const cE={[ju]:Xu,[Yu]:Ku,[qu]:Zu,[Bs]:$u,[Xu]:ju,[Ku]:Yu,[Zu]:qu,[$u]:Bs};function uE(r,e){function n(){let G=!1;const Le=new Vt;let ce=null;const me=new Vt(0,0,0,0);return{setMask:function(Ue){ce!==Ue&&!G&&(r.colorMask(Ue,Ue,Ue,Ue),ce=Ue)},setLocked:function(Ue){G=Ue},setClear:function(Ue,De,ct,Ut,Xt){Xt===!0&&(Ue*=Ut,De*=Ut,ct*=Ut),Le.set(Ue,De,ct,Ut),me.equals(Le)===!1&&(r.clearColor(Ue,De,ct,Ut),me.copy(Le))},reset:function(){G=!1,ce=null,me.set(-1,0,0,0)}}}function s(){let G=!1,Le=!1,ce=null,me=null,Ue=null;return{setReversed:function(De){if(Le!==De){const ct=e.get("EXT_clip_control");Le?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Ue;Ue=null,this.setClear(Ut)}Le=De},getReversed:function(){return Le},setTest:function(De){De?ve(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(De){ce!==De&&!G&&(r.depthMask(De),ce=De)},setFunc:function(De){if(Le&&(De=cE[De]),me!==De){switch(De){case ju:r.depthFunc(r.NEVER);break;case Xu:r.depthFunc(r.ALWAYS);break;case Yu:r.depthFunc(r.LESS);break;case Bs:r.depthFunc(r.LEQUAL);break;case qu:r.depthFunc(r.EQUAL);break;case $u:r.depthFunc(r.GEQUAL);break;case Ku:r.depthFunc(r.GREATER);break;case Zu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=De}},setLocked:function(De){G=De},setClear:function(De){Ue!==De&&(Le&&(De=1-De),r.clearDepth(De),Ue=De)},reset:function(){G=!1,ce=null,me=null,Ue=null,Le=!1}}}function a(){let G=!1,Le=null,ce=null,me=null,Ue=null,De=null,ct=null,Ut=null,Xt=null;return{setTest:function(_t){G||(_t?ve(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(_t){Le!==_t&&!G&&(r.stencilMask(_t),Le=_t)},setFunc:function(_t,yn,hn){(ce!==_t||me!==yn||Ue!==hn)&&(r.stencilFunc(_t,yn,hn),ce=_t,me=yn,Ue=hn)},setOp:function(_t,yn,hn){(De!==_t||ct!==yn||Ut!==hn)&&(r.stencilOp(_t,yn,hn),De=_t,ct=yn,Ut=hn)},setLocked:function(_t){G=_t},setClear:function(_t){Xt!==_t&&(r.clearStencil(_t),Xt=_t)},reset:function(){G=!1,Le=null,ce=null,me=null,Ue=null,De=null,ct=null,Ut=null,Xt=null}}}const c=new n,u=new s,f=new a,h=new WeakMap,m=new WeakMap;let g={},x={},v=new WeakMap,y=[],E=null,w=!1,S=null,_=null,I=null,N=null,R=null,Q=null,B=null,O=new Pt(0,0,0),X=0,b=!1,C=null,z=null,ue=null,ee=null,he=null;const de=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,oe=0;const U=r.getParameter(r.VERSION);U.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(U)[1]),le=oe>=1):U.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),le=oe>=2);let K=null,Y={};const F=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),be=new Vt().fromArray(F),q=new Vt().fromArray(Z);function fe(G,Le,ce,me){const Ue=new Uint8Array(4),De=r.createTexture();r.bindTexture(G,De),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ct=0;ct<ce;ct++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,Ue):r.texImage2D(Le+ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ue);return De}const _e={};_e[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ve(r.DEPTH_TEST),u.setFunc(Bs),nt(!1),ot(Mp),ve(r.CULL_FACE),H(Sr);function ve(G){g[G]!==!0&&(r.enable(G),g[G]=!0)}function Te(G){g[G]!==!1&&(r.disable(G),g[G]=!1)}function ne(G,Le){return x[G]!==Le?(r.bindFramebuffer(G,Le),x[G]=Le,G===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Le),G===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function Me(G,Le){let ce=y,me=!1;if(G){ce=v.get(Le),ce===void 0&&(ce=[],v.set(Le,ce));const Ue=G.textures;if(ce.length!==Ue.length||ce[0]!==r.COLOR_ATTACHMENT0){for(let De=0,ct=Ue.length;De<ct;De++)ce[De]=r.COLOR_ATTACHMENT0+De;ce.length=Ue.length,me=!0}}else ce[0]!==r.BACK&&(ce[0]=r.BACK,me=!0);me&&r.drawBuffers(ce)}function ze(G){return E!==G?(r.useProgram(G),E=G,!0):!1}const Ie={[jr]:r.FUNC_ADD,[c0]:r.FUNC_SUBTRACT,[u0]:r.FUNC_REVERSE_SUBTRACT};Ie[d0]=r.MIN,Ie[f0]=r.MAX;const et={[h0]:r.ZERO,[p0]:r.ONE,[m0]:r.SRC_COLOR,[Gu]:r.SRC_ALPHA,[y0]:r.SRC_ALPHA_SATURATE,[x0]:r.DST_COLOR,[v0]:r.DST_ALPHA,[g0]:r.ONE_MINUS_SRC_COLOR,[Wu]:r.ONE_MINUS_SRC_ALPHA,[S0]:r.ONE_MINUS_DST_COLOR,[_0]:r.ONE_MINUS_DST_ALPHA,[M0]:r.CONSTANT_COLOR,[E0]:r.ONE_MINUS_CONSTANT_COLOR,[T0]:r.CONSTANT_ALPHA,[w0]:r.ONE_MINUS_CONSTANT_ALPHA};function H(G,Le,ce,me,Ue,De,ct,Ut,Xt,_t){if(G===Sr){w===!0&&(Te(r.BLEND),w=!1);return}if(w===!1&&(ve(r.BLEND),w=!0),G!==l0){if(G!==S||_t!==b){if((_!==jr||R!==jr)&&(r.blendEquation(r.FUNC_ADD),_=jr,R=jr),_t)switch(G){case Os:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ep:r.blendFunc(r.ONE,r.ONE);break;case Tp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Os:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ep:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Tp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}I=null,N=null,Q=null,B=null,O.set(0,0,0),X=0,S=G,b=_t}return}Ue=Ue||Le,De=De||ce,ct=ct||me,(Le!==_||Ue!==R)&&(r.blendEquationSeparate(Ie[Le],Ie[Ue]),_=Le,R=Ue),(ce!==I||me!==N||De!==Q||ct!==B)&&(r.blendFuncSeparate(et[ce],et[me],et[De],et[ct]),I=ce,N=me,Q=De,B=ct),(Ut.equals(O)===!1||Xt!==X)&&(r.blendColor(Ut.r,Ut.g,Ut.b,Xt),O.copy(Ut),X=Xt),S=G,b=!1}function Ct(G,Le){G.side===Ii?Te(r.CULL_FACE):ve(r.CULL_FACE);let ce=G.side===Pn;Le&&(ce=!ce),nt(ce),G.blending===Os&&G.transparent===!1?H(Sr):H(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),c.setMask(G.colorWrite);const me=G.stencilWrite;f.setTest(me),me&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),wt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function nt(G){C!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),C=G)}function ot(G){G!==s0?(ve(r.CULL_FACE),G!==z&&(G===Mp?r.cullFace(r.BACK):G===o0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),z=G}function Ze(G){G!==ue&&(le&&r.lineWidth(G),ue=G)}function wt(G,Le,ce){G?(ve(r.POLYGON_OFFSET_FILL),(ee!==Le||he!==ce)&&(r.polygonOffset(Le,ce),ee=Le,he=ce)):Te(r.POLYGON_OFFSET_FILL)}function $e(G){G?ve(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function L(G){G===void 0&&(G=r.TEXTURE0+de-1),K!==G&&(r.activeTexture(G),K=G)}function T(G,Le,ce){ce===void 0&&(K===null?ce=r.TEXTURE0+de-1:ce=K);let me=Y[ce];me===void 0&&(me={type:void 0,texture:void 0},Y[ce]=me),(me.type!==G||me.texture!==Le)&&(K!==ce&&(r.activeTexture(ce),K=ce),r.bindTexture(G,Le||_e[G]),me.type=G,me.texture=Le)}function te(){const G=Y[K];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ge(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{r.compressedTexImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function je(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function it(G){be.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),be.copy(G))}function He(G){q.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),q.copy(G))}function pt(G,Le){let ce=m.get(Le);ce===void 0&&(ce=new WeakMap,m.set(Le,ce));let me=ce.get(G);me===void 0&&(me=r.getUniformBlockIndex(Le,G.name),ce.set(G,me))}function lt(G,Le){const me=m.get(Le).get(G);h.get(Le)!==me&&(r.uniformBlockBinding(Le,me,G.__bindingPointIndex),h.set(Le,me))}function Rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},K=null,Y={},x={},v=new WeakMap,y=[],E=null,w=!1,S=null,_=null,I=null,N=null,R=null,Q=null,B=null,O=new Pt(0,0,0),X=0,b=!1,C=null,z=null,ue=null,ee=null,he=null,be.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:ve,disable:Te,bindFramebuffer:ne,drawBuffers:Me,useProgram:ze,setBlending:H,setMaterial:Ct,setFlipSided:nt,setCullFace:ot,setLineWidth:Ze,setPolygonOffset:wt,setScissorTest:$e,activeTexture:L,bindTexture:T,unbindTexture:te,compressedTexImage2D:ge,compressedTexImage3D:Se,texImage2D:Be,texImage3D:tt,updateUBOMapping:pt,uniformBlockBinding:lt,texStorage2D:ht,texStorage3D:we,texSubImage2D:pe,texSubImage3D:je,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Oe,scissor:it,viewport:He,reset:Rt}}function Sm(r,e,n,s){const a=dE(s);switch(n){case Dm:return r*e;case Im:return r*e;case Fm:return r*e*2;case Om:return r*e/a.components*a.byteLength;case Ud:return r*e/a.components*a.byteLength;case km:return r*e*2/a.components*a.byteLength;case Id:return r*e*2/a.components*a.byteLength;case Um:return r*e*3/a.components*a.byteLength;case ai:return r*e*4/a.components*a.byteLength;case Fd:return r*e*4/a.components*a.byteLength;case Sl:case yl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ml:case El:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case id:case sd:return Math.max(r,16)*Math.max(e,8)/4;case nd:case rd:return Math.max(r,8)*Math.max(e,8)/2;case od:case ad:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ld:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case dd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case fd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case hd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case pd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case md:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case gd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case vd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case _d:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case xd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Sd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case yd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Md:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Ed:case Td:return Math.ceil(r/4)*Math.ceil(e/4)*16;case zm:case wd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ad:case Cd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function dE(r){switch(r){case Bi:case Pm:return{byteLength:1,components:1};case Oo:case Lm:case Bo:return{byteLength:2,components:1};case Nd:case Dd:return{byteLength:2,components:4};case qr:case Ld:case Oi:return{byteLength:4,components:1};case Nm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function fE(r,e,n,s,a,c,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Tt,g=new WeakMap;let x;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return y?new OffscreenCanvas(L,T):zo("canvas")}function w(L,T,te){let ge=1;const Se=$e(L);if((Se.width>te||Se.height>te)&&(ge=te/Math.max(Se.width,Se.height)),ge<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const pe=Math.floor(ge*Se.width),je=Math.floor(ge*Se.height);x===void 0&&(x=E(pe,je));const Pe=T?E(pe,je):x;return Pe.width=pe,Pe.height=je,Pe.getContext("2d").drawImage(L,0,0,pe,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+pe+"x"+je+")."),Pe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),L;return L}function S(L){return L.generateMipmaps}function _(L){r.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(L,T,te,ge,Se=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let pe=T;if(T===r.RED&&(te===r.FLOAT&&(pe=r.R32F),te===r.HALF_FLOAT&&(pe=r.R16F),te===r.UNSIGNED_BYTE&&(pe=r.R8)),T===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(pe=r.R8UI),te===r.UNSIGNED_SHORT&&(pe=r.R16UI),te===r.UNSIGNED_INT&&(pe=r.R32UI),te===r.BYTE&&(pe=r.R8I),te===r.SHORT&&(pe=r.R16I),te===r.INT&&(pe=r.R32I)),T===r.RG&&(te===r.FLOAT&&(pe=r.RG32F),te===r.HALF_FLOAT&&(pe=r.RG16F),te===r.UNSIGNED_BYTE&&(pe=r.RG8)),T===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(pe=r.RG8UI),te===r.UNSIGNED_SHORT&&(pe=r.RG16UI),te===r.UNSIGNED_INT&&(pe=r.RG32UI),te===r.BYTE&&(pe=r.RG8I),te===r.SHORT&&(pe=r.RG16I),te===r.INT&&(pe=r.RG32I)),T===r.RGB_INTEGER&&(te===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),te===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),te===r.UNSIGNED_INT&&(pe=r.RGB32UI),te===r.BYTE&&(pe=r.RGB8I),te===r.SHORT&&(pe=r.RGB16I),te===r.INT&&(pe=r.RGB32I)),T===r.RGBA_INTEGER&&(te===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),te===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),te===r.UNSIGNED_INT&&(pe=r.RGBA32UI),te===r.BYTE&&(pe=r.RGBA8I),te===r.SHORT&&(pe=r.RGBA16I),te===r.INT&&(pe=r.RGBA32I)),T===r.RGB&&te===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),T===r.RGBA){const je=Se?bl:yt.getTransfer(ge);te===r.FLOAT&&(pe=r.RGBA32F),te===r.HALF_FLOAT&&(pe=r.RGBA16F),te===r.UNSIGNED_BYTE&&(pe=je===Lt?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function R(L,T){let te;return L?T===null||T===qr||T===Gs?te=r.DEPTH24_STENCIL8:T===Oi?te=r.DEPTH32F_STENCIL8:T===Oo&&(te=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===qr||T===Gs?te=r.DEPTH_COMPONENT24:T===Oi?te=r.DEPTH_COMPONENT32F:T===Oo&&(te=r.DEPTH_COMPONENT16),te}function Q(L,T){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==li&&L.minFilter!==oi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function B(L){const T=L.target;T.removeEventListener("dispose",B),X(T),T.isVideoTexture&&g.delete(T)}function O(L){const T=L.target;T.removeEventListener("dispose",O),C(T)}function X(L){const T=s.get(L);if(T.__webglInit===void 0)return;const te=L.source,ge=v.get(te);if(ge){const Se=ge[T.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&b(L),Object.keys(ge).length===0&&v.delete(te)}s.remove(L)}function b(L){const T=s.get(L);r.deleteTexture(T.__webglTexture);const te=L.source,ge=v.get(te);delete ge[T.__cacheKey],u.memory.textures--}function C(L){const T=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(T.__webglFramebuffer[ge]))for(let Se=0;Se<T.__webglFramebuffer[ge].length;Se++)r.deleteFramebuffer(T.__webglFramebuffer[ge][Se]);else r.deleteFramebuffer(T.__webglFramebuffer[ge]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ge])}else{if(Array.isArray(T.__webglFramebuffer))for(let ge=0;ge<T.__webglFramebuffer.length;ge++)r.deleteFramebuffer(T.__webglFramebuffer[ge]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ge=0;ge<T.__webglColorRenderbuffer.length;ge++)T.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ge]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=L.textures;for(let ge=0,Se=te.length;ge<Se;ge++){const pe=s.get(te[ge]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),u.memory.textures--),s.remove(te[ge])}s.remove(L)}let z=0;function ue(){z=0}function ee(){const L=z;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),z+=1,L}function he(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function de(L,T){const te=s.get(L);if(L.isVideoTexture&&Ze(L),L.isRenderTargetTexture===!1&&L.version>0&&te.__version!==L.version){const ge=L.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(te,L,T);return}}n.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+T)}function le(L,T){const te=s.get(L);if(L.version>0&&te.__version!==L.version){q(te,L,T);return}n.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+T)}function oe(L,T){const te=s.get(L);if(L.version>0&&te.__version!==L.version){q(te,L,T);return}n.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+T)}function U(L,T){const te=s.get(L);if(L.version>0&&te.__version!==L.version){fe(te,L,T);return}n.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+T)}const K={[ed]:r.REPEAT,[Fi]:r.CLAMP_TO_EDGE,[td]:r.MIRRORED_REPEAT},Y={[li]:r.NEAREST,[I0]:r.NEAREST_MIPMAP_NEAREST,[Za]:r.NEAREST_MIPMAP_LINEAR,[oi]:r.LINEAR,[mu]:r.LINEAR_MIPMAP_NEAREST,[xr]:r.LINEAR_MIPMAP_LINEAR},F={[B0]:r.NEVER,[X0]:r.ALWAYS,[H0]:r.LESS,[Bm]:r.LEQUAL,[V0]:r.EQUAL,[j0]:r.GEQUAL,[G0]:r.GREATER,[W0]:r.NOTEQUAL};function Z(L,T){if(T.type===Oi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===oi||T.magFilter===mu||T.magFilter===Za||T.magFilter===xr||T.minFilter===oi||T.minFilter===mu||T.minFilter===Za||T.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,K[T.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,K[T.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,K[T.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,Y[T.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,Y[T.minFilter]),T.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===li||T.minFilter!==Za&&T.minFilter!==xr||T.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function be(L,T){let te=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",B));const ge=T.source;let Se=v.get(ge);Se===void 0&&(Se={},v.set(ge,Se));const pe=he(T);if(pe!==L.__cacheKey){Se[pe]===void 0&&(Se[pe]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,te=!0),Se[pe].usedTimes++;const je=Se[L.__cacheKey];je!==void 0&&(Se[L.__cacheKey].usedTimes--,je.usedTimes===0&&b(T)),L.__cacheKey=pe,L.__webglTexture=Se[pe].texture}return te}function q(L,T,te){let ge=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ge=r.TEXTURE_3D);const Se=be(L,T),pe=T.source;n.bindTexture(ge,L.__webglTexture,r.TEXTURE0+te);const je=s.get(pe);if(pe.version!==je.__version||Se===!0){n.activeTexture(r.TEXTURE0+te);const Pe=yt.getPrimaries(yt.workingColorSpace),Oe=T.colorSpace===_r?null:yt.getPrimaries(T.colorSpace),ht=T.colorSpace===_r||Pe===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let we=w(T.image,!1,a.maxTextureSize);we=wt(T,we);const Be=c.convert(T.format,T.colorSpace),tt=c.convert(T.type);let it=N(T.internalFormat,Be,tt,T.colorSpace,T.isVideoTexture);Z(ge,T);let He;const pt=T.mipmaps,lt=T.isVideoTexture!==!0,Rt=je.__version===void 0||Se===!0,G=pe.dataReady,Le=Q(T,we);if(T.isDepthTexture)it=R(T.format===Ws,T.type),Rt&&(lt?n.texStorage2D(r.TEXTURE_2D,1,it,we.width,we.height):n.texImage2D(r.TEXTURE_2D,0,it,we.width,we.height,0,Be,tt,null));else if(T.isDataTexture)if(pt.length>0){lt&&Rt&&n.texStorage2D(r.TEXTURE_2D,Le,it,pt[0].width,pt[0].height);for(let ce=0,me=pt.length;ce<me;ce++)He=pt[ce],lt?G&&n.texSubImage2D(r.TEXTURE_2D,ce,0,0,He.width,He.height,Be,tt,He.data):n.texImage2D(r.TEXTURE_2D,ce,it,He.width,He.height,0,Be,tt,He.data);T.generateMipmaps=!1}else lt?(Rt&&n.texStorage2D(r.TEXTURE_2D,Le,it,we.width,we.height),G&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,we.width,we.height,Be,tt,we.data)):n.texImage2D(r.TEXTURE_2D,0,it,we.width,we.height,0,Be,tt,we.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){lt&&Rt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Le,it,pt[0].width,pt[0].height,we.depth);for(let ce=0,me=pt.length;ce<me;ce++)if(He=pt[ce],T.format!==ai)if(Be!==null)if(lt){if(G)if(T.layerUpdates.size>0){const Ue=Sm(He.width,He.height,T.format,T.type);for(const De of T.layerUpdates){const ct=He.data.subarray(De*Ue/He.data.BYTES_PER_ELEMENT,(De+1)*Ue/He.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,De,He.width,He.height,1,Be,ct)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,He.width,He.height,we.depth,Be,He.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ce,it,He.width,He.height,we.depth,0,He.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?G&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,He.width,He.height,we.depth,Be,tt,He.data):n.texImage3D(r.TEXTURE_2D_ARRAY,ce,it,He.width,He.height,we.depth,0,Be,tt,He.data)}else{lt&&Rt&&n.texStorage2D(r.TEXTURE_2D,Le,it,pt[0].width,pt[0].height);for(let ce=0,me=pt.length;ce<me;ce++)He=pt[ce],T.format!==ai?Be!==null?lt?G&&n.compressedTexSubImage2D(r.TEXTURE_2D,ce,0,0,He.width,He.height,Be,He.data):n.compressedTexImage2D(r.TEXTURE_2D,ce,it,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?G&&n.texSubImage2D(r.TEXTURE_2D,ce,0,0,He.width,He.height,Be,tt,He.data):n.texImage2D(r.TEXTURE_2D,ce,it,He.width,He.height,0,Be,tt,He.data)}else if(T.isDataArrayTexture)if(lt){if(Rt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Le,it,we.width,we.height,we.depth),G)if(T.layerUpdates.size>0){const ce=Sm(we.width,we.height,T.format,T.type);for(const me of T.layerUpdates){const Ue=we.data.subarray(me*ce/we.data.BYTES_PER_ELEMENT,(me+1)*ce/we.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,we.width,we.height,1,Be,tt,Ue)}T.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Be,tt,we.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,it,we.width,we.height,we.depth,0,Be,tt,we.data);else if(T.isData3DTexture)lt?(Rt&&n.texStorage3D(r.TEXTURE_3D,Le,it,we.width,we.height,we.depth),G&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Be,tt,we.data)):n.texImage3D(r.TEXTURE_3D,0,it,we.width,we.height,we.depth,0,Be,tt,we.data);else if(T.isFramebufferTexture){if(Rt)if(lt)n.texStorage2D(r.TEXTURE_2D,Le,it,we.width,we.height);else{let ce=we.width,me=we.height;for(let Ue=0;Ue<Le;Ue++)n.texImage2D(r.TEXTURE_2D,Ue,it,ce,me,0,Be,tt,null),ce>>=1,me>>=1}}else if(pt.length>0){if(lt&&Rt){const ce=$e(pt[0]);n.texStorage2D(r.TEXTURE_2D,Le,it,ce.width,ce.height)}for(let ce=0,me=pt.length;ce<me;ce++)He=pt[ce],lt?G&&n.texSubImage2D(r.TEXTURE_2D,ce,0,0,Be,tt,He):n.texImage2D(r.TEXTURE_2D,ce,it,Be,tt,He);T.generateMipmaps=!1}else if(lt){if(Rt){const ce=$e(we);n.texStorage2D(r.TEXTURE_2D,Le,it,ce.width,ce.height)}G&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Be,tt,we)}else n.texImage2D(r.TEXTURE_2D,0,it,Be,tt,we);S(T)&&_(ge),je.__version=pe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function fe(L,T,te){if(T.image.length!==6)return;const ge=be(L,T),Se=T.source;n.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+te);const pe=s.get(Se);if(Se.version!==pe.__version||ge===!0){n.activeTexture(r.TEXTURE0+te);const je=yt.getPrimaries(yt.workingColorSpace),Pe=T.colorSpace===_r?null:yt.getPrimaries(T.colorSpace),Oe=T.colorSpace===_r||je===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ht=T.isCompressedTexture||T.image[0].isCompressedTexture,we=T.image[0]&&T.image[0].isDataTexture,Be=[];for(let me=0;me<6;me++)!ht&&!we?Be[me]=w(T.image[me],!0,a.maxCubemapSize):Be[me]=we?T.image[me].image:T.image[me],Be[me]=wt(T,Be[me]);const tt=Be[0],it=c.convert(T.format,T.colorSpace),He=c.convert(T.type),pt=N(T.internalFormat,it,He,T.colorSpace),lt=T.isVideoTexture!==!0,Rt=pe.__version===void 0||ge===!0,G=Se.dataReady;let Le=Q(T,tt);Z(r.TEXTURE_CUBE_MAP,T);let ce;if(ht){lt&&Rt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Le,pt,tt.width,tt.height);for(let me=0;me<6;me++){ce=Be[me].mipmaps;for(let Ue=0;Ue<ce.length;Ue++){const De=ce[Ue];T.format!==ai?it!==null?lt?G&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,De.width,De.height,it,De.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,pt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?G&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,De.width,De.height,it,He,De.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,pt,De.width,De.height,0,it,He,De.data)}}}else{if(ce=T.mipmaps,lt&&Rt){ce.length>0&&Le++;const me=$e(Be[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Le,pt,me.width,me.height)}for(let me=0;me<6;me++)if(we){lt?G&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Be[me].width,Be[me].height,it,He,Be[me].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,pt,Be[me].width,Be[me].height,0,it,He,Be[me].data);for(let Ue=0;Ue<ce.length;Ue++){const ct=ce[Ue].image[me].image;lt?G&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,ct.width,ct.height,it,He,ct.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,pt,ct.width,ct.height,0,it,He,ct.data)}}else{lt?G&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,it,He,Be[me]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,pt,it,He,Be[me]);for(let Ue=0;Ue<ce.length;Ue++){const De=ce[Ue];lt?G&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,it,He,De.image[me]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,pt,it,He,De.image[me])}}}S(T)&&_(r.TEXTURE_CUBE_MAP),pe.__version=Se.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function _e(L,T,te,ge,Se,pe){const je=c.convert(te.format,te.colorSpace),Pe=c.convert(te.type),Oe=N(te.internalFormat,je,Pe,te.colorSpace),ht=s.get(T),we=s.get(te);if(we.__renderTarget=T,!ht.__hasExternalTextures){const Be=Math.max(1,T.width>>pe),tt=Math.max(1,T.height>>pe);Se===r.TEXTURE_3D||Se===r.TEXTURE_2D_ARRAY?n.texImage3D(Se,pe,Oe,Be,tt,T.depth,0,je,Pe,null):n.texImage2D(Se,pe,Oe,Be,tt,0,je,Pe,null)}n.bindFramebuffer(r.FRAMEBUFFER,L),ot(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,Se,we.__webglTexture,0,nt(T)):(Se===r.TEXTURE_2D||Se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,Se,we.__webglTexture,pe),n.bindFramebuffer(r.FRAMEBUFFER,null)}function ve(L,T,te){if(r.bindRenderbuffer(r.RENDERBUFFER,L),T.depthBuffer){const ge=T.depthTexture,Se=ge&&ge.isDepthTexture?ge.type:null,pe=R(T.stencilBuffer,Se),je=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=nt(T);ot(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pe,pe,T.width,T.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,pe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,pe,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,je,r.RENDERBUFFER,L)}else{const ge=T.textures;for(let Se=0;Se<ge.length;Se++){const pe=ge[Se],je=c.convert(pe.format,pe.colorSpace),Pe=c.convert(pe.type),Oe=N(pe.internalFormat,je,Pe,pe.colorSpace),ht=nt(T);te&&ot(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,Oe,T.width,T.height):ot(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht,Oe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Oe,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(T.depthTexture);ge.__renderTarget=T,(!ge.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),de(T.depthTexture,0);const Se=ge.__webglTexture,pe=nt(T);if(T.depthTexture.format===ks)ot(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Se,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Se,0);else if(T.depthTexture.format===Ws)ot(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Se,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function ne(L){const T=s.get(L),te=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ge=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ge){const Se=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ge.removeEventListener("dispose",Se)};ge.addEventListener("dispose",Se),T.__depthDisposeCallback=Se}T.__boundDepthTexture=ge}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Te(T.__webglFramebuffer,L)}else if(te){T.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ge]),T.__webglDepthbuffer[ge]===void 0)T.__webglDepthbuffer[ge]=r.createRenderbuffer(),ve(T.__webglDepthbuffer[ge],L,!1);else{const Se=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer[ge];r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,pe)}}else if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),ve(T.__webglDepthbuffer,L,!1);else{const ge=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Se),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,Se)}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Me(L,T,te){const ge=s.get(L);T!==void 0&&_e(ge.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&ne(L)}function ze(L){const T=L.texture,te=s.get(L),ge=s.get(T);L.addEventListener("dispose",O);const Se=L.textures,pe=L.isWebGLCubeRenderTarget===!0,je=Se.length>1;if(je||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=T.version,u.memory.textures++),pe){te.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[Pe]=[];for(let Oe=0;Oe<T.mipmaps.length;Oe++)te.__webglFramebuffer[Pe][Oe]=r.createFramebuffer()}else te.__webglFramebuffer[Pe]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)te.__webglFramebuffer[Pe]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(je)for(let Pe=0,Oe=Se.length;Pe<Oe;Pe++){const ht=s.get(Se[Pe]);ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture(),u.memory.textures++)}if(L.samples>0&&ot(L)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Pe=0;Pe<Se.length;Pe++){const Oe=Se[Pe];te.__webglColorRenderbuffer[Pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[Pe]);const ht=c.convert(Oe.format,Oe.colorSpace),we=c.convert(Oe.type),Be=N(Oe.internalFormat,ht,we,Oe.colorSpace,L.isXRRenderTarget===!0),tt=nt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,Be,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,te.__webglColorRenderbuffer[Pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(te.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){n.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),Z(r.TEXTURE_CUBE_MAP,T);for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let Oe=0;Oe<T.mipmaps.length;Oe++)_e(te.__webglFramebuffer[Pe][Oe],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Oe);else _e(te.__webglFramebuffer[Pe],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);S(T)&&_(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(je){for(let Pe=0,Oe=Se.length;Pe<Oe;Pe++){const ht=Se[Pe],we=s.get(ht);n.bindTexture(r.TEXTURE_2D,we.__webglTexture),Z(r.TEXTURE_2D,ht),_e(te.__webglFramebuffer,L,ht,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,0),S(ht)&&_(r.TEXTURE_2D)}n.unbindTexture()}else{let Pe=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Pe=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Pe,ge.__webglTexture),Z(Pe,T),T.mipmaps&&T.mipmaps.length>0)for(let Oe=0;Oe<T.mipmaps.length;Oe++)_e(te.__webglFramebuffer[Oe],L,T,r.COLOR_ATTACHMENT0,Pe,Oe);else _e(te.__webglFramebuffer,L,T,r.COLOR_ATTACHMENT0,Pe,0);S(T)&&_(Pe),n.unbindTexture()}L.depthBuffer&&ne(L)}function Ie(L){const T=L.textures;for(let te=0,ge=T.length;te<ge;te++){const Se=T[te];if(S(Se)){const pe=I(L),je=s.get(Se).__webglTexture;n.bindTexture(pe,je),_(pe),n.unbindTexture()}}}const et=[],H=[];function Ct(L){if(L.samples>0){if(ot(L)===!1){const T=L.textures,te=L.width,ge=L.height;let Se=r.COLOR_BUFFER_BIT;const pe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,je=s.get(L),Pe=T.length>1;if(Pe)for(let Oe=0;Oe<T.length;Oe++)n.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Oe=0;Oe<T.length;Oe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Se|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Se|=r.STENCIL_BUFFER_BIT)),Pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,je.__webglColorRenderbuffer[Oe]);const ht=s.get(T[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ht,0)}r.blitFramebuffer(0,0,te,ge,0,0,te,ge,Se,r.NEAREST),h===!0&&(et.length=0,H.length=0,et.push(r.COLOR_ATTACHMENT0+Oe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(et.push(pe),H.push(pe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,H)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,et))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Pe)for(let Oe=0;Oe<T.length;Oe++){n.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,je.__webglColorRenderbuffer[Oe]);const ht=s.get(T[Oe]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,ht,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const T=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function nt(L){return Math.min(a.maxSamples,L.samples)}function ot(L){const T=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ze(L){const T=u.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function wt(L,T){const te=L.colorSpace,ge=L.format,Se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||te!==Xs&&te!==_r&&(yt.getTransfer(te)===Lt?(ge!==ai||Se!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}function $e(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=ee,this.resetTextureUnits=ue,this.setTexture2D=de,this.setTexture2DArray=le,this.setTexture3D=oe,this.setTextureCube=U,this.rebindTextures=Me,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ot}function hE(r,e){function n(s,a=_r){let c;const u=yt.getTransfer(a);if(s===Bi)return r.UNSIGNED_BYTE;if(s===Nd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Dd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Nm)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Pm)return r.BYTE;if(s===Lm)return r.SHORT;if(s===Oo)return r.UNSIGNED_SHORT;if(s===Ld)return r.INT;if(s===qr)return r.UNSIGNED_INT;if(s===Oi)return r.FLOAT;if(s===Bo)return r.HALF_FLOAT;if(s===Dm)return r.ALPHA;if(s===Um)return r.RGB;if(s===ai)return r.RGBA;if(s===Im)return r.LUMINANCE;if(s===Fm)return r.LUMINANCE_ALPHA;if(s===ks)return r.DEPTH_COMPONENT;if(s===Ws)return r.DEPTH_STENCIL;if(s===Om)return r.RED;if(s===Ud)return r.RED_INTEGER;if(s===km)return r.RG;if(s===Id)return r.RG_INTEGER;if(s===Fd)return r.RGBA_INTEGER;if(s===Sl||s===yl||s===Ml||s===El)if(u===Lt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Sl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ml)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===El)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Sl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ml)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===El)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nd||s===id||s===rd||s===sd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===nd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===id)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===od||s===ad||s===ld)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===od||s===ad)return u===Lt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ld)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===cd||s===ud||s===dd||s===fd||s===hd||s===pd||s===md||s===gd||s===vd||s===_d||s===xd||s===Sd||s===yd||s===Md)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===cd)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ud)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dd)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fd)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hd)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pd)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===md)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gd)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vd)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_d)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xd)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sd)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yd)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Md)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tl||s===Ed||s===Td)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Tl)return u===Lt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ed)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Td)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===zm||s===wd||s===Ad||s===Cd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Tl)return c.COMPRESSED_RED_RGTC1_EXT;if(s===wd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ad)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Gs?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}class pE extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xl extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mE={type:"move"};class Vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let a=null,c=null,u=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const w of e.hand.values()){const S=n.getJointPose(w,s),_=this._getHandJoint(m,w);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=g.position.distanceTo(x.position),y=.02,E=.005;m.inputState.pinching&&v>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,s),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,s),a===null&&c!==null&&(a=c),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(mE)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new xl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}const gE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _E{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,s){if(this.texture===null){const a=new Sn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=s.depthNear||n.depthFar!=s.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,s=new Vi({vertexShader:gE,fragmentShader:vE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gi(new Wo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xE extends Ys{constructor(e,n){super();const s=this;let a=null,c=1,u=null,f="local-floor",h=1,m=null,g=null,x=null,v=null,y=null,E=null;const w=new _E,S=n.getContextAttributes();let _=null,I=null;const N=[],R=[],Q=new Tt;let B=null;const O=new Yn;O.viewport=new Vt;const X=new Yn;X.viewport=new Vt;const b=[O,X],C=new pE;let z=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let fe=N[q];return fe===void 0&&(fe=new Vu,N[q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(q){let fe=N[q];return fe===void 0&&(fe=new Vu,N[q]=fe),fe.getGripSpace()},this.getHand=function(q){let fe=N[q];return fe===void 0&&(fe=new Vu,N[q]=fe),fe.getHandSpace()};function ee(q){const fe=R.indexOf(q.inputSource);if(fe===-1)return;const _e=N[fe];_e!==void 0&&(_e.update(q.inputSource,q.frame,m||u),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function he(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",he),a.removeEventListener("inputsourceschange",de);for(let q=0;q<N.length;q++){const fe=R[q];fe!==null&&(R[q]=null,N[q].disconnect(fe))}z=null,ue=null,w.reset(),e.setRenderTarget(_),y=null,v=null,x=null,a=null,I=null,be.stop(),s.isPresenting=!1,e.setPixelRatio(B),e.setSize(Q.width,Q.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){f=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",he),a.addEventListener("inputsourceschange",de),S.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(Q),a.renderState.layers===void 0){const fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(a,n,fe),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),I=new $r(y.framebufferWidth,y.framebufferHeight,{format:ai,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let fe=null,_e=null,ve=null;S.depth&&(ve=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=S.stencil?Ws:ks,_e=S.stencil?Gs:qr);const Te={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:c};x=new XRWebGLBinding(a,n),v=x.createProjectionLayer(Te),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),I=new $r(v.textureWidth,v.textureHeight,{format:ai,type:Bi,depthTexture:new eg(v.textureWidth,v.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await a.requestReferenceSpace(f),be.setContext(a),be.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function de(q){for(let fe=0;fe<q.removed.length;fe++){const _e=q.removed[fe],ve=R.indexOf(_e);ve>=0&&(R[ve]=null,N[ve].disconnect(_e))}for(let fe=0;fe<q.added.length;fe++){const _e=q.added[fe];let ve=R.indexOf(_e);if(ve===-1){for(let ne=0;ne<N.length;ne++)if(ne>=R.length){R.push(_e),ve=ne;break}else if(R[ne]===null){R[ne]=_e,ve=ne;break}if(ve===-1)break}const Te=N[ve];Te&&Te.connect(_e)}}const le=new ae,oe=new ae;function U(q,fe,_e){le.setFromMatrixPosition(fe.matrixWorld),oe.setFromMatrixPosition(_e.matrixWorld);const ve=le.distanceTo(oe),Te=fe.projectionMatrix.elements,ne=_e.projectionMatrix.elements,Me=Te[14]/(Te[10]-1),ze=Te[14]/(Te[10]+1),Ie=(Te[9]+1)/Te[5],et=(Te[9]-1)/Te[5],H=(Te[8]-1)/Te[0],Ct=(ne[8]+1)/ne[0],nt=Me*H,ot=Me*Ct,Ze=ve/(-H+Ct),wt=Ze*-H;if(fe.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(wt),q.translateZ(Ze),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Te[10]===-1)q.projectionMatrix.copy(fe.projectionMatrix),q.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const $e=Me+Ze,L=ze+Ze,T=nt-wt,te=ot+(ve-wt),ge=Ie*ze/L*$e,Se=et*ze/L*$e;q.projectionMatrix.makePerspective(T,te,ge,Se,$e,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function K(q,fe){fe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(fe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;let fe=q.near,_e=q.far;w.texture!==null&&(w.depthNear>0&&(fe=w.depthNear),w.depthFar>0&&(_e=w.depthFar)),C.near=X.near=O.near=fe,C.far=X.far=O.far=_e,(z!==C.near||ue!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,ue=C.far),O.layers.mask=q.layers.mask|2,X.layers.mask=q.layers.mask|4,C.layers.mask=O.layers.mask|X.layers.mask;const ve=q.parent,Te=C.cameras;K(C,ve);for(let ne=0;ne<Te.length;ne++)K(Te[ne],ve);Te.length===2?U(C,O,X):C.projectionMatrix.copy(O.projectionMatrix),Y(q,C,ve)};function Y(q,fe,_e){_e===null?q.matrix.copy(fe.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(fe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(fe.projectionMatrix),q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ko*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&y===null))return h},this.setFoveation=function(q){h=q,v!==null&&(v.fixedFoveation=q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let F=null;function Z(q,fe){if(g=fe.getViewerPose(m||u),E=fe,g!==null){const _e=g.views;y!==null&&(e.setRenderTargetFramebuffer(I,y.framebuffer),e.setRenderTarget(I));let ve=!1;_e.length!==C.cameras.length&&(C.cameras.length=0,ve=!0);for(let ne=0;ne<_e.length;ne++){const Me=_e[ne];let ze=null;if(y!==null)ze=y.getViewport(Me);else{const et=x.getViewSubImage(v,Me);ze=et.viewport,ne===0&&(e.setRenderTargetTextures(I,et.colorTexture,v.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(I))}let Ie=b[ne];Ie===void 0&&(Ie=new Yn,Ie.layers.enable(ne),Ie.viewport=new Vt,b[ne]=Ie),Ie.matrix.fromArray(Me.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Me.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(ze.x,ze.y,ze.width,ze.height),ne===0&&(C.matrix.copy(Ie.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ve===!0&&C.cameras.push(Ie)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const ne=x.getDepthInformation(_e[0]);ne&&ne.isValid&&ne.texture&&w.init(e,ne,a.renderState)}}for(let _e=0;_e<N.length;_e++){const ve=R[_e],Te=N[_e];ve!==null&&Te!==void 0&&Te.update(ve,fe,m||u)}F&&F(q,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),E=null}const be=new Jm;be.setAnimationLoop(Z),this.setAnimationLoop=function(q){F=q},this.dispose=function(){}}}const Vr=new Hi,SE=new jt;function yE(r,e){function n(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,$m(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function a(S,_,I,N,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),x(S,_)):_.isMeshPhongMaterial?(c(S,_),g(S,_)):_.isMeshStandardMaterial?(c(S,_),v(S,_),_.isMeshPhysicalMaterial&&y(S,_,R)):_.isMeshMatcapMaterial?(c(S,_),E(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),w(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(u(S,_),_.isLineDashedMaterial&&f(S,_)):_.isPointsMaterial?h(S,_,I,N):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,n(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Pn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,n(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Pn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,n(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,n(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const I=e.get(_),N=I.envMap,R=I.envMapRotation;N&&(S.envMap.value=N,Vr.copy(R),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),S.envMapRotation.value.setFromMatrix4(SE.makeRotationFromEuler(Vr)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,S.aoMapTransform))}function u(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform))}function f(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function h(S,_,I,N){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*I,S.scale.value=N*.5,_.map&&(S.map.value=_.map,n(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function v(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,I){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Pn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function w(S,_){const I=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function ME(r,e,n,s){let a={},c={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,N){const R=N.program;s.uniformBlockBinding(I,R)}function m(I,N){let R=a[I.id];R===void 0&&(E(I),R=g(I),a[I.id]=R,I.addEventListener("dispose",S));const Q=N.program;s.updateUBOMapping(I,Q);const B=e.render.frame;c[I.id]!==B&&(v(I),c[I.id]=B)}function g(I){const N=x();I.__bindingPointIndex=N;const R=r.createBuffer(),Q=I.__size,B=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,Q,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,R),R}function x(){for(let I=0;I<f;I++)if(u.indexOf(I)===-1)return u.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(I){const N=a[I.id],R=I.uniforms,Q=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let B=0,O=R.length;B<O;B++){const X=Array.isArray(R[B])?R[B]:[R[B]];for(let b=0,C=X.length;b<C;b++){const z=X[b];if(y(z,B,b,Q)===!0){const ue=z.__offset,ee=Array.isArray(z.value)?z.value:[z.value];let he=0;for(let de=0;de<ee.length;de++){const le=ee[de],oe=w(le);typeof le=="number"||typeof le=="boolean"?(z.__data[0]=le,r.bufferSubData(r.UNIFORM_BUFFER,ue+he,z.__data)):le.isMatrix3?(z.__data[0]=le.elements[0],z.__data[1]=le.elements[1],z.__data[2]=le.elements[2],z.__data[3]=0,z.__data[4]=le.elements[3],z.__data[5]=le.elements[4],z.__data[6]=le.elements[5],z.__data[7]=0,z.__data[8]=le.elements[6],z.__data[9]=le.elements[7],z.__data[10]=le.elements[8],z.__data[11]=0):(le.toArray(z.__data,he),he+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ue,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(I,N,R,Q){const B=I.value,O=N+"_"+R;if(Q[O]===void 0)return typeof B=="number"||typeof B=="boolean"?Q[O]=B:Q[O]=B.clone(),!0;{const X=Q[O];if(typeof B=="number"||typeof B=="boolean"){if(X!==B)return Q[O]=B,!0}else if(X.equals(B)===!1)return X.copy(B),!0}return!1}function E(I){const N=I.uniforms;let R=0;const Q=16;for(let O=0,X=N.length;O<X;O++){const b=Array.isArray(N[O])?N[O]:[N[O]];for(let C=0,z=b.length;C<z;C++){const ue=b[C],ee=Array.isArray(ue.value)?ue.value:[ue.value];for(let he=0,de=ee.length;he<de;he++){const le=ee[he],oe=w(le),U=R%Q,K=U%oe.boundary,Y=U+K;R+=K,Y!==0&&Q-Y<oe.storage&&(R+=Q-Y),ue.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=R,R+=oe.storage}}}const B=R%Q;return B>0&&(R+=Q-B),I.__size=R,I.__cache={},this}function w(I){const N={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(N.boundary=4,N.storage=4):I.isVector2?(N.boundary=8,N.storage=8):I.isVector3||I.isColor?(N.boundary=16,N.storage=12):I.isVector4?(N.boundary=16,N.storage=16):I.isMatrix3?(N.boundary=48,N.storage=48):I.isMatrix4?(N.boundary=64,N.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),N}function S(I){const N=I.target;N.removeEventListener("dispose",S);const R=u.indexOf(N.__bindingPointIndex);u.splice(R,1),r.deleteBuffer(a[N.id]),delete a[N.id],delete c[N.id]}function _(){for(const I in a)r.deleteBuffer(a[I]);u=[],a={},c={}}return{bind:h,update:m,dispose:_}}class EE{constructor(e={}){const{canvas:n=c_(),context:s=null,depth:a=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=u;const E=new Uint32Array(4),w=new Int32Array(4);let S=null,_=null;const I=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=yr,this.toneMappingExposure=1;const R=this;let Q=!1,B=0,O=0,X=null,b=-1,C=null;const z=new Vt,ue=new Vt;let ee=null;const he=new Pt(0);let de=0,le=n.width,oe=n.height,U=1,K=null,Y=null;const F=new Vt(0,0,le,oe),Z=new Vt(0,0,le,oe);let be=!1;const q=new Qm;let fe=!1,_e=!1;const ve=new jt,Te=new jt,ne=new ae,Me=new Vt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function et(){return X===null?U:1}let H=s;function Ct(A,W){return n.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:c,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pd}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",Ue,!1),n.addEventListener("webglcontextcreationerror",De,!1),H===null){const W="webgl2";if(H=Ct(W,A),H===null)throw Ct(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let nt,ot,Ze,wt,$e,L,T,te,ge,Se,pe,je,Pe,Oe,ht,we,Be,tt,it,He,pt,lt,Rt,G;function Le(){nt=new Ry(H),nt.init(),lt=new hE(H,nt),ot=new yy(H,nt,e,lt),Ze=new uE(H,nt),ot.reverseDepthBuffer&&v&&Ze.buffers.depth.setReversed(!0),wt=new Ly(H),$e=new $M,L=new fE(H,nt,Ze,$e,ot,lt,wt),T=new Ey(R),te=new Cy(R),ge=new O_(H),Rt=new xy(H,ge),Se=new by(H,ge,wt,Rt),pe=new Dy(H,Se,ge,wt),it=new Ny(H,ot,L),we=new My($e),je=new qM(R,T,te,nt,ot,Rt,we),Pe=new yE(R,$e),Oe=new ZM,ht=new iE(nt),tt=new _y(R,T,te,Ze,pe,y,h),Be=new lE(R,pe,ot),G=new ME(H,wt,ot,Ze),He=new Sy(H,nt,wt),pt=new Py(H,nt,wt),wt.programs=je.programs,R.capabilities=ot,R.extensions=nt,R.properties=$e,R.renderLists=Oe,R.shadowMap=Be,R.state=Ze,R.info=wt}Le();const ce=new xE(R,H);this.xr=ce,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=nt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=nt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(A){A!==void 0&&(U=A,this.setSize(le,oe,!1))},this.getSize=function(A){return A.set(le,oe)},this.setSize=function(A,W,re=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=A,oe=W,n.width=Math.floor(A*U),n.height=Math.floor(W*U),re===!0&&(n.style.width=A+"px",n.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(le*U,oe*U).floor()},this.setDrawingBufferSize=function(A,W,re){le=A,oe=W,U=re,n.width=Math.floor(A*re),n.height=Math.floor(W*re),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(F)},this.setViewport=function(A,W,re,se){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,W,re,se),Ze.viewport(z.copy(F).multiplyScalar(U).round())},this.getScissor=function(A){return A.copy(Z)},this.setScissor=function(A,W,re,se){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,W,re,se),Ze.scissor(ue.copy(Z).multiplyScalar(U).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(A){Ze.setScissorTest(be=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){Y=A},this.getClearColor=function(A){return A.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(A=!0,W=!0,re=!0){let se=0;if(A){let j=!1;if(X!==null){const Re=X.texture.format;j=Re===Fd||Re===Id||Re===Ud}if(j){const Re=X.texture.type,Ae=Re===Bi||Re===qr||Re===Oo||Re===Gs||Re===Nd||Re===Dd,Xe=tt.getClearColor(),Ge=tt.getClearAlpha(),rt=Xe.r,at=Xe.g,Ye=Xe.b;Ae?(E[0]=rt,E[1]=at,E[2]=Ye,E[3]=Ge,H.clearBufferuiv(H.COLOR,0,E)):(w[0]=rt,w[1]=at,w[2]=Ye,w[3]=Ge,H.clearBufferiv(H.COLOR,0,w))}else se|=H.COLOR_BUFFER_BIT}W&&(se|=H.DEPTH_BUFFER_BIT),re&&(se|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",Ue,!1),n.removeEventListener("webglcontextcreationerror",De,!1),Oe.dispose(),ht.dispose(),$e.dispose(),T.dispose(),te.dispose(),pe.dispose(),Rt.dispose(),G.dispose(),je.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Zr),ce.removeEventListener("sessionend",Gi),_i.stop()};function me(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Q=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),Q=!1;const A=wt.autoReset,W=Be.enabled,re=Be.autoUpdate,se=Be.needsUpdate,j=Be.type;Le(),wt.autoReset=A,Be.enabled=W,Be.autoUpdate=re,Be.needsUpdate=se,Be.type=j}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ct(A){const W=A.target;W.removeEventListener("dispose",ct),Ut(W)}function Ut(A){Xt(A),$e.remove(A)}function Xt(A){const W=$e.get(A).programs;W!==void 0&&(W.forEach(function(re){je.releaseProgram(re)}),A.isShaderMaterial&&je.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,re,se,j,Re){W===null&&(W=ze);const Ae=j.isMesh&&j.matrixWorld.determinant()<0,Xe=Yo(A,W,re,se,j);Ze.setMaterial(se,Ae);let Ge=re.index,rt=1;if(se.wireframe===!0){if(Ge=Se.getWireframeAttribute(re),Ge===void 0)return;rt=2}const at=re.drawRange,Ye=re.attributes.position;let vt=at.start*rt,At=(at.start+at.count)*rt;Re!==null&&(vt=Math.max(vt,Re.start*rt),At=Math.min(At,(Re.start+Re.count)*rt)),Ge!==null?(vt=Math.max(vt,0),At=Math.min(At,Ge.count)):Ye!=null&&(vt=Math.max(vt,0),At=Math.min(At,Ye.count));const gt=At-vt;if(gt<0||gt===1/0)return;Rt.setup(j,se,Xe,re,Ge);let sn,ut=He;if(Ge!==null&&(sn=ge.get(Ge),ut=pt,ut.setIndex(sn)),j.isMesh)se.wireframe===!0?(Ze.setLineWidth(se.wireframeLinewidth*et()),ut.setMode(H.LINES)):ut.setMode(H.TRIANGLES);else if(j.isLine){let Ke=se.linewidth;Ke===void 0&&(Ke=1),Ze.setLineWidth(Ke*et()),j.isLineSegments?ut.setMode(H.LINES):j.isLineLoop?ut.setMode(H.LINE_LOOP):ut.setMode(H.LINE_STRIP)}else j.isPoints?ut.setMode(H.POINTS):j.isSprite&&ut.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ut.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ut.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ke=j._multiDrawStarts,qn=j._multiDrawCounts,Mt=j._multiDrawCount,on=Ge?ge.get(Ge).bytesPerElement:1,$n=$e.get(se).currentProgram.getUniforms();for(let Yt=0;Yt<Mt;Yt++)$n.setValue(H,"_gl_DrawID",Yt),ut.render(Ke[Yt]/on,qn[Yt])}else if(j.isInstancedMesh)ut.renderInstances(vt,gt,j.count);else if(re.isInstancedBufferGeometry){const Ke=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,qn=Math.min(re.instanceCount,Ke);ut.renderInstances(vt,gt,qn)}else ut.render(vt,gt)};function _t(A,W,re){A.transparent===!0&&A.side===Ii&&A.forceSinglePass===!1?(A.side=Pn,A.needsUpdate=!0,Qr(A,W,re),A.side=Mr,A.needsUpdate=!0,Qr(A,W,re),A.side=Ii):Qr(A,W,re)}this.compile=function(A,W,re=null){re===null&&(re=A),_=ht.get(re),_.init(W),N.push(_),re.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),A!==re&&A.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const se=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Re=j.material;if(Re)if(Array.isArray(Re))for(let Ae=0;Ae<Re.length;Ae++){const Xe=Re[Ae];_t(Xe,re,j),se.add(Xe)}else _t(Re,re,j),se.add(Re)}),N.pop(),_=null,se},this.compileAsync=function(A,W,re=null){const se=this.compile(A,W,re);return new Promise(j=>{function Re(){if(se.forEach(function(Ae){$e.get(Ae).currentProgram.isReady()&&se.delete(Ae)}),se.size===0){j(A);return}setTimeout(Re,10)}nt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let yn=null;function hn(A){yn&&yn(A)}function Zr(){_i.stop()}function Gi(){_i.start()}const _i=new Jm;_i.setAnimationLoop(hn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(A){yn=A,ce.setAnimationLoop(A),A===null?_i.stop():_i.start()},ce.addEventListener("sessionstart",Zr),ce.addEventListener("sessionend",Gi),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Q===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(W),W=ce.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,W,X),_=ht.get(A,N.length),_.init(W),N.push(_),Te.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(Te),_e=this.localClippingEnabled,fe=we.init(this.clippingPlanes,_e),S=Oe.get(A,I.length),S.init(),I.push(S),ce.enabled===!0&&ce.isPresenting===!0){const Re=R.xr.getDepthSensingMesh();Re!==null&&xi(Re,W,-1/0,R.sortObjects)}xi(A,W,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(K,Y),Ie=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ie&&tt.addToRenderList(S,A),this.info.render.frame++,fe===!0&&we.beginShadows();const re=_.state.shadowsArray;Be.render(re,A,W),fe===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=S.opaque,j=S.transmissive;if(_.setupLights(),W.isArrayCamera){const Re=W.cameras;if(j.length>0)for(let Ae=0,Xe=Re.length;Ae<Xe;Ae++){const Ge=Re[Ae];Tr(se,j,A,Ge)}Ie&&tt.render(A);for(let Ae=0,Xe=Re.length;Ae<Xe;Ae++){const Ge=Re[Ae];Er(S,A,Ge,Ge.viewport)}}else j.length>0&&Tr(se,j,A,W),Ie&&tt.render(A),Er(S,A,W);X!==null&&(L.updateMultisampleRenderTarget(X),L.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(R,A,W),Rt.resetDefaultState(),b=-1,C=null,N.pop(),N.length>0?(_=N[N.length-1],fe===!0&&we.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function xi(A,W,re,se){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){se&&Me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Te);const Ae=pe.update(A),Xe=A.material;Xe.visible&&S.push(A,Ae,Xe,re,Me.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const Ae=pe.update(A),Xe=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Me.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Me.copy(Ae.boundingSphere.center)),Me.applyMatrix4(A.matrixWorld).applyMatrix4(Te)),Array.isArray(Xe)){const Ge=Ae.groups;for(let rt=0,at=Ge.length;rt<at;rt++){const Ye=Ge[rt],vt=Xe[Ye.materialIndex];vt&&vt.visible&&S.push(A,Ae,vt,re,Me.z,Ye)}}else Xe.visible&&S.push(A,Ae,Xe,re,Me.z,null)}}const Re=A.children;for(let Ae=0,Xe=Re.length;Ae<Xe;Ae++)xi(Re[Ae],W,re,se)}function Er(A,W,re,se){const j=A.opaque,Re=A.transmissive,Ae=A.transparent;_.setupLightsView(re),fe===!0&&we.setGlobalState(R.clippingPlanes,re),se&&Ze.viewport(z.copy(se)),j.length>0&&Wi(j,W,re),Re.length>0&&Wi(Re,W,re),Ae.length>0&&Wi(Ae,W,re),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function Tr(A,W,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[se.id]===void 0&&(_.state.transmissionRenderTarget[se.id]=new $r(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?Bo:Bi,minFilter:xr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const Re=_.state.transmissionRenderTarget[se.id],Ae=se.viewport||z;Re.setSize(Ae.z,Ae.w);const Xe=R.getRenderTarget();R.setRenderTarget(Re),R.getClearColor(he),de=R.getClearAlpha(),de<1&&R.setClearColor(16777215,.5),R.clear(),Ie&&tt.render(re);const Ge=R.toneMapping;R.toneMapping=yr;const rt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),_.setupLightsView(se),fe===!0&&we.setGlobalState(R.clippingPlanes,se),Wi(A,re,se),L.updateMultisampleRenderTarget(Re),L.updateRenderTargetMipmap(Re),nt.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ye=0,vt=W.length;Ye<vt;Ye++){const At=W[Ye],gt=At.object,sn=At.geometry,ut=At.material,Ke=At.group;if(ut.side===Ii&&gt.layers.test(se.layers)){const qn=ut.side;ut.side=Pn,ut.needsUpdate=!0,jo(gt,re,se,sn,ut,Ke),ut.side=qn,ut.needsUpdate=!0,at=!0}}at===!0&&(L.updateMultisampleRenderTarget(Re),L.updateRenderTargetMipmap(Re))}R.setRenderTarget(Xe),R.setClearColor(he,de),rt!==void 0&&(se.viewport=rt),R.toneMapping=Ge}function Wi(A,W,re){const se=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Re=A.length;j<Re;j++){const Ae=A[j],Xe=Ae.object,Ge=Ae.geometry,rt=se===null?Ae.material:se,at=Ae.group;Xe.layers.test(re.layers)&&jo(Xe,W,re,Ge,rt,at)}}function jo(A,W,re,se,j,Re){A.onBeforeRender(R,W,re,se,j,Re),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(R,W,re,se,A,Re),j.transparent===!0&&j.side===Ii&&j.forceSinglePass===!1?(j.side=Pn,j.needsUpdate=!0,R.renderBufferDirect(re,W,se,j,A,Re),j.side=Mr,j.needsUpdate=!0,R.renderBufferDirect(re,W,se,j,A,Re),j.side=Ii):R.renderBufferDirect(re,W,se,j,A,Re),A.onAfterRender(R,W,re,se,j,Re)}function Qr(A,W,re){W.isScene!==!0&&(W=ze);const se=$e.get(A),j=_.state.lights,Re=_.state.shadowsArray,Ae=j.state.version,Xe=je.getParameters(A,j.state,Re,W,re),Ge=je.getProgramCacheKey(Xe);let rt=se.programs;se.environment=A.isMeshStandardMaterial?W.environment:null,se.fog=W.fog,se.envMap=(A.isMeshStandardMaterial?te:T).get(A.envMap||se.environment),se.envMapRotation=se.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,rt===void 0&&(A.addEventListener("dispose",ct),rt=new Map,se.programs=rt);let at=rt.get(Ge);if(at!==void 0){if(se.currentProgram===at&&se.lightsStateVersion===Ae)return ci(A,Xe),at}else Xe.uniforms=je.getUniforms(A),A.onBeforeCompile(Xe,R),at=je.acquireProgram(Xe,Ge),rt.set(Ge,at),se.uniforms=Xe.uniforms;const Ye=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=we.uniform),ci(A,Xe),se.needsLights=Nl(A),se.lightsStateVersion=Ae,se.needsLights&&(Ye.ambientLightColor.value=j.state.ambient,Ye.lightProbe.value=j.state.probe,Ye.directionalLights.value=j.state.directional,Ye.directionalLightShadows.value=j.state.directionalShadow,Ye.spotLights.value=j.state.spot,Ye.spotLightShadows.value=j.state.spotShadow,Ye.rectAreaLights.value=j.state.rectArea,Ye.ltc_1.value=j.state.rectAreaLTC1,Ye.ltc_2.value=j.state.rectAreaLTC2,Ye.pointLights.value=j.state.point,Ye.pointLightShadows.value=j.state.pointShadow,Ye.hemisphereLights.value=j.state.hemi,Ye.directionalShadowMap.value=j.state.directionalShadowMap,Ye.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ye.spotShadowMap.value=j.state.spotShadowMap,Ye.spotLightMatrix.value=j.state.spotLightMatrix,Ye.spotLightMap.value=j.state.spotLightMap,Ye.pointShadowMap.value=j.state.pointShadowMap,Ye.pointShadowMatrix.value=j.state.pointShadowMatrix),se.currentProgram=at,se.uniformsList=null,at}function Xo(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=wl.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function ci(A,W){const re=$e.get(A);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function Yo(A,W,re,se,j){W.isScene!==!0&&(W=ze),L.resetTextureUnits();const Re=W.fog,Ae=se.isMeshStandardMaterial?W.environment:null,Xe=X===null?R.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Xs,Ge=(se.isMeshStandardMaterial?te:T).get(se.envMap||Ae),rt=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,at=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ye=!!re.morphAttributes.position,vt=!!re.morphAttributes.normal,At=!!re.morphAttributes.color;let gt=yr;se.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(gt=R.toneMapping);const sn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ut=sn!==void 0?sn.length:0,Ke=$e.get(se),qn=_.state.lights;if(fe===!0&&(_e===!0||A!==C)){const pn=A===C&&se.id===b;we.setState(se,A,pn)}let Mt=!1;se.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==qn.state.version||Ke.outputColorSpace!==Xe||j.isBatchedMesh&&Ke.batching===!1||!j.isBatchedMesh&&Ke.batching===!0||j.isBatchedMesh&&Ke.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ke.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ke.instancing===!1||!j.isInstancedMesh&&Ke.instancing===!0||j.isSkinnedMesh&&Ke.skinning===!1||!j.isSkinnedMesh&&Ke.skinning===!0||j.isInstancedMesh&&Ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ke.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ke.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ke.instancingMorph===!1&&j.morphTexture!==null||Ke.envMap!==Ge||se.fog===!0&&Ke.fog!==Re||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==we.numPlanes||Ke.numIntersection!==we.numIntersection)||Ke.vertexAlphas!==rt||Ke.vertexTangents!==at||Ke.morphTargets!==Ye||Ke.morphNormals!==vt||Ke.morphColors!==At||Ke.toneMapping!==gt||Ke.morphTargetsCount!==ut)&&(Mt=!0):(Mt=!0,Ke.__version=se.version);let on=Ke.currentProgram;Mt===!0&&(on=Qr(se,W,j));let $n=!1,Yt=!1,ui=!1;const Nt=on.getUniforms(),kn=Ke.uniforms;if(Ze.useProgram(on.program)&&($n=!0,Yt=!0,ui=!0),se.id!==b&&(b=se.id,Yt=!0),$n||C!==A){Ze.buffers.depth.getReversed()?(ve.copy(A.projectionMatrix),d_(ve),f_(ve),Nt.setValue(H,"projectionMatrix",ve)):Nt.setValue(H,"projectionMatrix",A.projectionMatrix),Nt.setValue(H,"viewMatrix",A.matrixWorldInverse);const zn=Nt.map.cameraPosition;zn!==void 0&&zn.setValue(H,ne.setFromMatrixPosition(A.matrixWorld)),ot.logarithmicDepthBuffer&&Nt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Nt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Yt=!0,ui=!0)}if(j.isSkinnedMesh){Nt.setOptional(H,j,"bindMatrix"),Nt.setOptional(H,j,"bindMatrixInverse");const pn=j.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Nt.setValue(H,"boneTexture",pn.boneTexture,L))}j.isBatchedMesh&&(Nt.setOptional(H,j,"batchingTexture"),Nt.setValue(H,"batchingTexture",j._matricesTexture,L),Nt.setOptional(H,j,"batchingIdTexture"),Nt.setValue(H,"batchingIdTexture",j._indirectTexture,L),Nt.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&Nt.setValue(H,"batchingColorTexture",j._colorsTexture,L));const Si=re.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&it.update(j,re,on),(Yt||Ke.receiveShadow!==j.receiveShadow)&&(Ke.receiveShadow=j.receiveShadow,Nt.setValue(H,"receiveShadow",j.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(kn.envMap.value=Ge,kn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&W.environment!==null&&(kn.envMapIntensity.value=W.environmentIntensity),Yt&&(Nt.setValue(H,"toneMappingExposure",R.toneMappingExposure),Ke.needsLights&&qo(kn,ui),Re&&se.fog===!0&&Pe.refreshFogUniforms(kn,Re),Pe.refreshMaterialUniforms(kn,se,U,oe,_.state.transmissionRenderTarget[A.id]),wl.upload(H,Xo(Ke),kn,L)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(wl.upload(H,Xo(Ke),kn,L),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Nt.setValue(H,"center",j.center),Nt.setValue(H,"modelViewMatrix",j.modelViewMatrix),Nt.setValue(H,"normalMatrix",j.normalMatrix),Nt.setValue(H,"modelMatrix",j.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const pn=se.uniformsGroups;for(let zn=0,Mn=pn.length;zn<Mn;zn++){const $o=pn[zn];G.update($o,on),G.bind($o,on)}}return on}function qo(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Nl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,W,re){$e.get(A.texture).__webglTexture=W,$e.get(A.depthTexture).__webglTexture=re;const se=$e.get(A);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=re===void 0,se.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const re=$e.get(A);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,re=0){X=A,B=W,O=re;let se=!0,j=null,Re=!1,Ae=!1;if(A){const Ge=$e.get(A);if(Ge.__useDefaultFramebuffer!==void 0)Ze.bindFramebuffer(H.FRAMEBUFFER,null),se=!1;else if(Ge.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Ge.__hasExternalTextures)L.rebindTextures(A,$e.get(A.texture).__webglTexture,$e.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ye=A.depthTexture;if(Ge.__boundDepthTexture!==Ye){if(Ye!==null&&$e.has(Ye)&&(A.width!==Ye.image.width||A.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const rt=A.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ae=!0);const at=$e.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(at[W])?j=at[W][re]:j=at[W],Re=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?j=$e.get(A).__webglMultisampledFramebuffer:Array.isArray(at)?j=at[re]:j=at,z.copy(A.viewport),ue.copy(A.scissor),ee=A.scissorTest}else z.copy(F).multiplyScalar(U).floor(),ue.copy(Z).multiplyScalar(U).floor(),ee=be;if(Ze.bindFramebuffer(H.FRAMEBUFFER,j)&&se&&Ze.drawBuffers(A,j),Ze.viewport(z),Ze.scissor(ue),Ze.setScissorTest(ee),Re){const Ge=$e.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ge.__webglTexture,re)}else if(Ae){const Ge=$e.get(A.texture),rt=W||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ge.__webglTexture,re||0,rt)}b=-1},this.readRenderTargetPixels=function(A,W,re,se,j,Re,Ae){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Xe=Xe[Ae]),Xe){Ze.bindFramebuffer(H.FRAMEBUFFER,Xe);try{const Ge=A.texture,rt=Ge.format,at=Ge.type;if(!ot.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-se&&re>=0&&re<=A.height-j&&H.readPixels(W,re,se,j,lt.convert(rt),lt.convert(at),Re)}finally{const Ge=X!==null?$e.get(X).__webglFramebuffer:null;Ze.bindFramebuffer(H.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(A,W,re,se,j,Re,Ae){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Xe=Xe[Ae]),Xe){const Ge=A.texture,rt=Ge.format,at=Ge.type;if(!ot.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-se&&re>=0&&re<=A.height-j){Ze.bindFramebuffer(H.FRAMEBUFFER,Xe);const Ye=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ye),H.bufferData(H.PIXEL_PACK_BUFFER,Re.byteLength,H.STREAM_READ),H.readPixels(W,re,se,j,lt.convert(rt),lt.convert(at),0);const vt=X!==null?$e.get(X).__webglFramebuffer:null;Ze.bindFramebuffer(H.FRAMEBUFFER,vt);const At=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await u_(H,At,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ye),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Re),H.deleteBuffer(Ye),H.deleteSync(At),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,re=0){A.isTexture!==!0&&(Do("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const se=Math.pow(2,-re),j=Math.floor(A.image.width*se),Re=Math.floor(A.image.height*se),Ae=W!==null?W.x:0,Xe=W!==null?W.y:0;L.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,Ae,Xe,j,Re),Ze.unbindTexture()},this.copyTextureToTexture=function(A,W,re=null,se=null,j=0){A.isTexture!==!0&&(Do("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,A=arguments[1],W=arguments[2],j=arguments[3]||0,re=null);let Re,Ae,Xe,Ge,rt,at,Ye,vt,At;const gt=A.isCompressedTexture?A.mipmaps[j]:A.image;re!==null?(Re=re.max.x-re.min.x,Ae=re.max.y-re.min.y,Xe=re.isBox3?re.max.z-re.min.z:1,Ge=re.min.x,rt=re.min.y,at=re.isBox3?re.min.z:0):(Re=gt.width,Ae=gt.height,Xe=gt.depth||1,Ge=0,rt=0,at=0),se!==null?(Ye=se.x,vt=se.y,At=se.z):(Ye=0,vt=0,At=0);const sn=lt.convert(W.format),ut=lt.convert(W.type);let Ke;W.isData3DTexture?(L.setTexture3D(W,0),Ke=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),Ke=H.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),Ke=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const qn=H.getParameter(H.UNPACK_ROW_LENGTH),Mt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),on=H.getParameter(H.UNPACK_SKIP_PIXELS),$n=H.getParameter(H.UNPACK_SKIP_ROWS),Yt=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,gt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,gt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ge),H.pixelStorei(H.UNPACK_SKIP_ROWS,rt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,at);const ui=A.isDataArrayTexture||A.isData3DTexture,Nt=W.isDataArrayTexture||W.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const kn=$e.get(A),Si=$e.get(W),pn=$e.get(kn.__renderTarget),zn=$e.get(Si.__renderTarget);Ze.bindFramebuffer(H.READ_FRAMEBUFFER,pn.__webglFramebuffer),Ze.bindFramebuffer(H.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let Mn=0;Mn<Xe;Mn++)ui&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$e.get(A).__webglTexture,j,at+Mn),A.isDepthTexture?(Nt&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$e.get(W).__webglTexture,j,At+Mn),H.blitFramebuffer(Ge,rt,Re,Ae,Ye,vt,Re,Ae,H.DEPTH_BUFFER_BIT,H.NEAREST)):Nt?H.copyTexSubImage3D(Ke,j,Ye,vt,At+Mn,Ge,rt,Re,Ae):H.copyTexSubImage2D(Ke,j,Ye,vt,At+Mn,Ge,rt,Re,Ae);Ze.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Nt?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Ke,j,Ye,vt,At,Re,Ae,Xe,sn,ut,gt.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(Ke,j,Ye,vt,At,Re,Ae,Xe,sn,gt.data):H.texSubImage3D(Ke,j,Ye,vt,At,Re,Ae,Xe,sn,ut,gt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,j,Ye,vt,Re,Ae,sn,ut,gt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,j,Ye,vt,gt.width,gt.height,sn,gt.data):H.texSubImage2D(H.TEXTURE_2D,j,Ye,vt,Re,Ae,sn,ut,gt);H.pixelStorei(H.UNPACK_ROW_LENGTH,qn),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Mt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,on),H.pixelStorei(H.UNPACK_SKIP_ROWS,$n),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Yt),j===0&&W.generateMipmaps&&H.generateMipmap(Ke),Ze.unbindTexture()},this.copyTextureToTexture3D=function(A,W,re=null,se=null,j=0){return A.isTexture!==!0&&(Do("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,se=arguments[1]||null,A=arguments[2],W=arguments[3],j=arguments[4]||0),Do('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,re,se,j)},this.initRenderTarget=function(A){$e.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Ze.unbindTexture()},this.resetState=function(){B=0,O=0,X=null,Ze.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),n.unpackColorSpace=yt._getUnpackColorSpace()}}class TE extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ym={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class wE{constructor(e,n,s){const a=this;let c=!1,u=0,f=0,h;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=s,this.itemStart=function(g){f++,c===!1&&a.onStart!==void 0&&a.onStart(g,u,f),c=!0},this.itemEnd=function(g){u++,a.onProgress!==void 0&&a.onProgress(g,u,f),u===f&&(c=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,x){return m.push(g,x),this},this.removeHandler=function(g){const x=m.indexOf(g);return x!==-1&&m.splice(x,2),this},this.getHandler=function(g){for(let x=0,v=m.length;x<v;x+=2){const y=m[x],E=m[x+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null}}}const AE=new wE;class Bd{constructor(e){this.manager=e!==void 0?e:AE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const s=this;return new Promise(function(a,c){s.load(e,a,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bd.DEFAULT_MATERIAL_NAME="__DEFAULT";class CE extends Bd{constructor(e){super(e)}load(e,n,s,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=ym.get(e);if(u!==void 0)return c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0),u;const f=zo("img");function h(){g(),ym.add(e,this),n&&n(this),c.manager.itemEnd(e)}function m(x){g(),a&&a(x),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),c.manager.itemStart(e),f.src=e,f}}class RE extends Bd{constructor(e){super(e)}load(e,n,s,a){const c=new Sn,u=new CE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){c.image=f,c.needsUpdate=!0,n!==void 0&&n(c)},s,a),c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pd);const bE=`
  varying vec2 vUv;
  varying vec3 vWorldPos;

  void main() {
    vUv = uv;
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,PE=`
  precision highp float;

  uniform sampler2D uTexOff;
  uniform sampler2D uTex2200;
  uniform sampler2D uTex3500;
  uniform sampler2D uTex6500;

  uniform float uKelvin;
  uniform float uDimmer;
  uniform float uOpacity;
  uniform float uZoom;
  uniform vec2 uParallaxOffset;
  uniform vec3 uLightColor;
  uniform vec2 uFocusUv;

  varying vec2 vUv;
  varying vec3 vWorldPos;

  void main() {
    // Subtle push-in zoom + 2-layer cursor/scroll parallax around center (0.5, 0.5)
    vec2 centeredUv = (vUv - 0.5) / max(1.0, uZoom) + 0.5 + uParallaxOffset;
    vec2 sampleUv = clamp(centeredUv, 0.002, 0.998);

    vec3 colOff = texture2D(uTexOff, sampleUv).rgb;
    vec3 col2200 = texture2D(uTex2200, sampleUv).rgb;
    vec3 col3500 = texture2D(uTex3500, sampleUv).rgb;
    vec3 col6500 = texture2D(uTex6500, sampleUv).rgb;

    // Continuous color-temperature interpolation across calibrated brackets
    vec3 litPlate;
    if (uKelvin <= 3500.0) {
      float t = clamp((uKelvin - 2200.0) / (3500.0 - 2200.0), 0.0, 1.0);
      litPlate = mix(col2200, col3500, t);
    } else {
      float t = clamp((uKelvin - 3500.0) / (6500.0 - 3500.0), 0.0, 1.0);
      litPlate = mix(col3500, col6500, t);
    }

    // Smooth dimmer curve from Evening Off (0.12) to Full Output (1.0)
    float dimCurve = clamp((uDimmer - 0.12) / 0.88, 0.0, 1.0);
    float luma = dot(litPlate, vec3(0.299, 0.587, 0.114));

    // Selective luminaire & warm-wash mask: targets the active light pools, sconces,
    // under-tread LEDs, and interior glass while leaving the indigo evening sky untouched.
    float warmFixtureMask = clamp((litPlate.r - litPlate.b * 0.85) * 2.4, 0.0, 1.0)
                          * smoothstep(0.14, 0.72, luma);

    //Selective Kelvin re-toning on the illuminated fixture zones:
    //  - 2200K deepens warm candlelight gold in the fixture pools
    //  - 3500K preserves natural architectural halogen
    //  - 6500K converts warm fixture pools to crisp neutral-cool daylight white
    float warmFactor = clamp((3500.0 - uKelvin) / 1300.0, 0.0, 1.0);
    float coolFactor = clamp((uKelvin - 3500.0) / 3000.0, 0.0, 1.0);

    vec3 candleToned = vec3(
      litPlate.r * 1.12,
      litPlate.g * 0.94,
      litPlate.b * 0.62
    );
    float neutralLuma = dot(litPlate, vec3(0.32, 0.54, 0.14));
    vec3 coolDaylightToned = mix(
      litPlate,
      vec3(neutralLuma * 0.94, neutralLuma * 1.01, neutralLuma * 1.18),
      0.78
    );

    vec3 kelvinToned = litPlate;
    kelvinToned = mix(kelvinToned, candleToned, warmFactor * warmFixtureMask * 0.85);
    kelvinToned = mix(kelvinToned, coolDaylightToned, coolFactor * warmFixtureMask * 0.90);

    // Dimmer dims the active fixture pools down into the evening Off plate
    vec3 dimmedOff = mix(colOff, colOff * 0.68, warmFixtureMask);
    vec3 baseColor = mix(dimmedOff, kelvinToned, smoothstep(0.0, 1.0, dimCurve));

    // Restrained directional architectural pool around the luminaire focus point (no yellow ring!)
    float distToFocus = length((sampleUv - uFocusUv) * vec2(1.6, 1.0));
    float softPool = exp(-distToFocus * distToFocus * 3.2) * dimCurve;
    vec3 subtleGlow = baseColor * uLightColor * (0.12 * softPool * (0.35 + 0.65 * luma));

    vec3 finalRgb = clamp(baseColor + subtleGlow, 0.0, 1.0);
    gl_FragColor = vec4(finalRgb, uOpacity);
  }
`,LE=({stops:r,scrollProgress:e,activeStopIndex:n,kelvin:s,dimmer:a,aimTargets:c,onUpdateAimTarget:u,onWebglReady:f})=>{const h=St.useRef(null),m=St.useRef({scrollProgress:e,activeStopIndex:n,kelvin:s,dimmer:a,aimTargets:c});return St.useEffect(()=>{m.current={scrollProgress:e,activeStopIndex:n,kelvin:s,dimmer:a,aimTargets:c}},[e,n,s,a,c]),St.useEffect(()=>{const g=h.current;if(!g)return;const x=g.clientWidth||window.innerWidth,v=g.clientHeight||window.innerHeight,y=new TE;y.background=new Pt("#0c0d10");const E=new Yn(36,x/v,.1,50);E.position.set(0,0,6),E.lookAt(0,0,0);const w=new EE({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});w.setSize(x,v),w.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),w.outputColorSpace=bn,g.innerHTML="",g.appendChild(w.domElement);const S=w.capabilities.getMaxAnisotropy(),_=new RE,I=K=>{const Y=_.load(K.startsWith("/")?"/nocturne-atelier/"+K.slice(1):K);return Y.wrapS=Fi,Y.wrapT=Fi,Y.minFilter=xr,Y.magFilter=oi,Y.anisotropy=S,Y.colorSpace=bn,Y},N=7.68,R=4.32,Q=new Wo(N,R,1,1),B=[],O=[],X=[[.48,.42],[.34,.56],[.62,.54]];r.forEach((K,Y)=>{const F=I(K.secondaryPhotoboard.off.path),Z=I(K.secondaryPhotoboard["2200k"].path),be=I(K.secondaryPhotoboard["3500k"].path),q=I(K.secondaryPhotoboard["6500k"].path),fe=new Vi({vertexShader:bE,fragmentShader:PE,transparent:!0,depthWrite:!1,uniforms:{uTexOff:{value:F},uTex2200:{value:Z},uTex3500:{value:be},uTex6500:{value:q},uKelvin:{value:s},uDimmer:{value:a},uOpacity:{value:Y===0?1:0},uZoom:{value:1.04},uParallaxOffset:{value:new Tt(0,0)},uLightColor:{value:new ae(1,.86,.68)},uFocusUv:{value:new Tt(...X[Y]||[.5,.5])}}}),_e=new gi(Q,fe);_e.position.set(0,0,-Y*.01),_e.renderOrder=Y,y.add(_e),B.push(_e),O.push(fe)});const b=(K,Y)=>{const F=K/Math.max(1,Y),Z=6,be=E.fov*Math.PI/180,q=2*Math.tan(be/2)*Z,_e=q*F*1.04/N,ve=q*1.04/R,Te=Math.max(_e,ve);B.forEach((ne,Me)=>{ne.scale.set(Te,Te,1),ne.position.set(0,0,-Me*.01)})};b(x,v);const C=new Tt(0,0),z=new Tt(0,0),ue=X.map(([K,Y])=>new Tt(K,Y)),ee=K=>{const Y=w.domElement.getBoundingClientRect(),F=(K.clientX-Y.left)/Math.max(1,Y.width),Z=1-(K.clientY-Y.top)/Math.max(1,Y.height);C.set((F-.5)*2,(Z-.5)*2)},he=K=>{const Y=w.domElement.getBoundingClientRect(),F=Math.max(.08,Math.min(.92,(K.clientX-Y.left)/Math.max(1,Y.width))),Z=Math.max(.08,Math.min(.92,1-(K.clientY-Y.top)/Math.max(1,Y.height))),be=m.current.activeStopIndex;ue[be]&&ue[be].set(F,Z);const q=Number(((F-.5)*6).toFixed(2)),fe=Number((.6+Z*3).toFixed(2)),_e=Number((-be*8).toFixed(2));u(be,[q,fe,_e])};w.domElement.addEventListener("pointermove",ee),w.domElement.addEventListener("pointerdown",he),f&&f({geometries:Math.max(3,w.info.memory.geometries),textures:Math.max(12,r.length*4),shadowMapEnabled:!0});let de=0;const le={value:e};window.__nocturneSyncWebglScroll=K=>{le.value=Math.max(0,Math.min(1,K))};const oe=()=>{const{scrollProgress:K,kelvin:Y,dimmer:F}=m.current,Z=Math.max(0,Math.min(1,K));Math.abs(Z-le.value)>.14?le.value=Z:le.value+=(Z-le.value)*.32;const be=le.value;z.x+=(C.x-z.x)*.08,z.y+=(C.y-z.y)*.08;const q=wm(Y),fe=new ae(q.r,q.g,q.b),_e=1,ve=Qa.smoothstep(be,.34,.38),Te=Qa.smoothstep(be,.62,.66),ne=[_e,ve,Te],Me=[[0,.38],[.34,.66],[.62,1]];O.forEach((ze,Ie)=>{const et=ne[Ie]??0,[H,Ct]=Me[Ie],nt=Qa.clamp((be-H)/Math.max(.01,Ct-H),0,1),ot=1.02+nt*.06,Ze=z.x*.012+(nt-.5)*.014,wt=z.y*.009,$e=.88+.12*Math.sin(nt*Math.PI),L=Qa.clamp(F*$e,.12,1);ze.uniforms.uOpacity.value=et,ze.uniforms.uZoom.value=ot,ze.uniforms.uParallaxOffset.value.set(Ze,wt),ze.uniforms.uKelvin.value=Y,ze.uniforms.uDimmer.value=L,ze.uniforms.uLightColor.value.copy(fe),ze.uniforms.uFocusUv.value.lerp(ue[Ie],.18),Ie===0?B[Ie].visible=ve<.999:Ie===1?B[Ie].visible=ve>.001&&Te<.999:B[Ie].visible=Te>.001}),w.render(y,E),de=requestAnimationFrame(oe)};de=requestAnimationFrame(oe);const U=()=>{if(!g)return;const K=g.clientWidth||window.innerWidth,Y=g.clientHeight||window.innerHeight;E.aspect=K/Math.max(1,Y),E.updateProjectionMatrix(),w.setSize(K,Y),b(K,Y)};return window.addEventListener("resize",U),()=>{cancelAnimationFrame(de),window.removeEventListener("resize",U),w.domElement.removeEventListener("pointermove",ee),w.domElement.removeEventListener("pointerdown",he),Q.dispose(),O.forEach(K=>K.dispose()),w.dispose()}},[r]),P.jsx("div",{ref:h,className:"edifice-webgl-canvas","aria-label":"Interactive Architectural Lighting Walkthrough"})},Al=[{stopNum:"01",zoneLabel:"The Path",navShortLabel:"The Path",heroHeadline:"From the path to the stair.",heroSubcopy:"Three architectural spaces from garden gate to stair hall. Scroll to walk through the residence.",cardHeadline:"Light the way home.",cardBody:"Low path lights wash down onto the stone, so every step is clear and the garden stays dark.",productName:"Travertine Bollard Path Light",priceDisplay:"From $240.00",unitPrice:240,productThumb:"/nocturne-atelier/assets/plates/prod_01_bollard.png",finishNote:"Patina dark bronze & honed Roman travertine cap · IP66 weather-sealed",dimensionsNote:"H 620mm × Ø 110mm · 12W tunable 2200K–6500K LED",opticalSummary:"Asymmetric downward wash · Glare-shielded · CRI 97",mountingNote:"Flanged ground anchor with concealed IP68 junction sleeve",ratedWatts:12,maxCandela:420,plateOff:"/nocturne-atelier/assets/plates/stop_01_off.png",plate2200k:"/nocturne-atelier/assets/plates/stop_01_2200k.png",plate3500k:"/nocturne-atelier/assets/plates/stop_01_3500k.png",plate6500k:"/nocturne-atelier/assets/plates/stop_01_6500k.png"},{stopNum:"02",zoneLabel:"The Hall",navShortLabel:"The Hall",heroHeadline:"Stone that glows.",heroSubcopy:"Honed Roman travertine and hand-carved Spanish alabaster in the entry hall.",cardHeadline:"Then step inside.",cardBody:"By the mirror, a carved alabaster sconce is the first thing a guest sees: a soft wash across the travertine.",productName:"Carved Alabaster Wall Sconce",priceDisplay:"From $345.00",unitPrice:345,productThumb:"/nocturne-atelier/assets/plates/prod_02_sconce.png",finishNote:"Hand-carved Spanish alabaster block & brushed bronze center band",dimensionsNote:"H 340mm × W 140mm × D 95mm · 16W tunable 2200K–6500K LED",opticalSummary:"Bi-directional vertical stone grazing · CRI 98",mountingNote:"Recessed low-profile bronze backplate (vertical mount)",ratedWatts:16,maxCandela:580,plateOff:"/nocturne-atelier/assets/plates/stop_02_off.png",plate2200k:"/nocturne-atelier/assets/plates/stop_02_2200k.png",plate3500k:"/nocturne-atelier/assets/plates/stop_02_3500k.png",plate6500k:"/nocturne-atelier/assets/plates/stop_02_6500k.png"},{stopNum:"03",zoneLabel:"The Stair Hall",navShortLabel:"The Stair Hall",heroHeadline:"One light, two floors.",heroSubcopy:"Hand-blown cognac glass suspended through the double-height timber stairwell.",cardHeadline:"Fill the height.",cardBody:"A stair hall has room for a long chandelier: one cascading cluster of cognac glass, seen from both levels.",productName:"Cognac Globe Stair Chandelier",priceDisplay:"From $595.00",unitPrice:595,productThumb:"/nocturne-atelier/assets/plates/prod_03_chandelier.png",finishNote:"Hand-blown cognac amber glass spheres & braided bronze cords",dimensionsNote:"Drop 1800–3400mm × Ø 680mm · 38W tunable 2200K–6500K LED",opticalSummary:"Diffuse 360° multi-drop atrium cluster · CRI 98 (concept spec)",mountingNote:"Ø 680mm spun bronze acoustic canopy · 3-tier cascading cluster",ratedWatts:38,maxCandela:940,plateOff:"/nocturne-atelier/assets/plates/stop_03_off.png",plate2200k:"/nocturne-atelier/assets/plates/stop_03_2200k.png",plate3500k:"/nocturne-atelier/assets/plates/stop_03_3500k.png",plate6500k:"/nocturne-atelier/assets/plates/stop_03_6500k.png"}],NE=({kelvin:r,globalDimmer:e,initialFixtureIndex:n=0,onSelectKelvin:s,onSelectDimmer:a,onAddToProject:c,onOpenSpecForStop:u,onClose:f})=>{const[h,m]=St.useState(n),g=Al[h]||Al[0],x=Am(r),v=S=>r<=2750?S.plate2200k:r<=4600?S.plate3500k:S.plate6500k,y=e<=.2,E=y?"night":Math.abs(r-2200)<=250?"2200":Math.abs(r-3500)<=350?"3500":Math.abs(r-6500)<=450?"6500":"custom",w=Math.max(0,Math.min(1,(e-.1)/.85));return P.jsxs("div",{className:"pendant-rail-root",children:[P.jsxs("div",{className:"pendant-rail-header",children:[P.jsxs("div",{children:[P.jsx("span",{className:"pendant-rail-tag",children:"Warmth & Material Studio"}),P.jsx("h2",{className:"pendant-rail-title",children:"Compare each fixture across light temperatures."}),P.jsx("p",{className:"pendant-rail-subtitle",children:"Select a room fixture below and shift between 2200K candle warmth, 3500K evening white, and 6500K daylight."})]}),P.jsxs("div",{className:"pendant-rail-controls",children:[P.jsxs("div",{className:"rail-kelvin-pills",role:"group","aria-label":"Warmth Presets",children:[P.jsx("button",{type:"button","aria-pressed":E==="2200",className:`rail-pill-btn ${E==="2200"?"active":""}`,onClick:()=>{s(2200),e<=.2&&a(.92)},children:"2200K Candle"}),P.jsx("button",{type:"button","aria-pressed":E==="3500",className:`rail-pill-btn ${E==="3500"?"active":""}`,onClick:()=>{s(3500),e<=.2&&a(.92)},children:"3500K Warm"}),P.jsx("button",{type:"button","aria-pressed":E==="6500",className:`rail-pill-btn ${E==="6500"?"active":""}`,onClick:()=>{s(6500),e<=.2&&a(.92)},children:"6500K Daylight"}),P.jsx("button",{type:"button","aria-pressed":E==="night",className:`rail-pill-btn ${E==="night"?"active":""}`,onClick:()=>a(.12),children:"Night 12%"})]}),f&&P.jsx("button",{type:"button",className:"rail-close-btn",onClick:f,children:"Close ✕"})]})]}),P.jsxs("div",{className:"studio-comparison-stage",children:[P.jsxs("div",{className:"studio-room-preview",children:[P.jsx("img",{src:g.plateOff,alt:`${g.zoneLabel} in low night light`,className:"studio-room-img"}),P.jsx("img",{src:v(g),alt:`${g.zoneLabel} illuminated at ${r}K`,className:"studio-room-img",style:{opacity:w}}),P.jsxs("div",{className:"studio-room-overlay-bar",children:[P.jsxs("span",{className:"studio-zone-badge",children:[g.stopNum," · ",g.zoneLabel]}),P.jsx("span",{className:"studio-live-readout",children:y?"Night mode · 12% output":`${r}K · ${Math.round(e*100)}% output`})]})]}),P.jsxs("div",{className:"studio-fixture-spotlight-card",children:[P.jsxs("div",{className:"studio-fixture-photo-wrap",children:[P.jsx("img",{src:g.productThumb,alt:g.productName,className:"studio-fixture-photo"}),P.jsx("span",{className:"studio-warmth-dot",style:{backgroundColor:x,boxShadow:`0 0 14px ${x}`},title:`Current warmth: ${r}K`})]}),P.jsxs("div",{className:"studio-fixture-info",children:[P.jsxs("div",{className:"studio-fixture-eyebrow",children:["Zone ",g.stopNum," · ",g.zoneLabel]}),P.jsx("h3",{className:"studio-fixture-title",children:g.productName}),P.jsx("div",{className:"studio-fixture-price",children:g.priceDisplay}),P.jsx("p",{className:"studio-fixture-meta",children:g.finishNote}),P.jsx("p",{className:"studio-fixture-meta",children:g.dimensionsNote}),P.jsxs("div",{className:"studio-slider-group",children:[P.jsxs("label",{className:"studio-slider-label",htmlFor:"studio-kelvin-range",children:[P.jsx("span",{children:"Color Temperature"}),P.jsxs("strong",{children:[r,"K"]})]}),P.jsx("input",{id:"studio-kelvin-range",type:"range",min:2200,max:6500,step:50,value:r,onChange:S=>{s(parseInt(S.target.value,10)),e<=.2&&a(.92)},className:"nc-warmth-slider"})]}),P.jsxs("div",{className:"studio-fixture-actions",children:[P.jsx("button",{type:"button",className:"add-to-cart-btn",onClick:()=>c(g.productName,h),children:"Add to project"}),u&&P.jsx("button",{type:"button",className:"spec-sheet-link-btn",onClick:()=>u(h),children:"Spec sheet ↗"})]})]})]})]}),P.jsx("div",{className:"pendant-study-grid",role:"group","aria-label":"Select Residence Fixture",children:Al.map((S,_)=>{const I=h===_;return P.jsx("div",{className:`pendant-study-card ${I?"is-focused":""}`,children:P.jsxs("button",{type:"button",className:"study-card-select-btn","aria-pressed":I,onClick:()=>m(_),children:[P.jsx("img",{src:S.productThumb,alt:S.productName,className:"study-card-product-thumb"}),P.jsxs("div",{className:"study-card-text",children:[P.jsxs("div",{className:"study-card-zone-row",children:[P.jsxs("span",{children:[S.stopNum," · ",S.zoneLabel]}),P.jsx("strong",{children:S.priceDisplay})]}),P.jsx("div",{className:"study-card-title",children:S.productName}),P.jsx("div",{className:"study-card-sub",children:S.finishNote})]})]})},S.stopNum)})})]})},vr=Al,DE=()=>{const[r,e]=St.useState(null),[n,s]=St.useState(0),[a,c]=St.useState(!1),[u,f]=St.useState(2200),[h,m]=St.useState(.92),[g,x]=St.useState("none"),[v,y]=St.useState(0),[E,w]=St.useState(!1),[S,_]=St.useState([]),[I,N]=St.useState(null),[R,Q]=St.useState(!1),[B,O]=St.useState(null),[X,b]=St.useState([[0,1.4,0],[-1.2,2,-8],[.6,2.4,-16]]),C=St.useRef(null),z=St.useRef(null),ue=St.useRef(null),ee=St.useRef(null),he=St.useRef(null);St.useEffect(()=>{fetch("/nocturne-atelier/scene-folding-contract.json").then(ne=>ne.json()).then(ne=>{e(ne)}).catch(ne=>{console.error("Failed to load scene-folding-contract.json:",ne)})},[]),St.useEffect(()=>{const ne=new n0({duration:1.05,smoothWheel:!0,wheelMultiplier:.95,touchMultiplier:1.15});C.current=ne;const Me=()=>{const et=z.current,H=et?Math.max(1,et.offsetHeight-window.innerHeight):Math.max(1,window.innerHeight*1.4),Ct=Math.max(0,Math.min(1,window.scrollY/H));s(Ct),c(window.scrollY>H+80)};window.addEventListener("scroll",Me,{passive:!0}),Me(),window.__nocturneScrollToRatio=et=>{const H=z.current,Ct=H?Math.max(1,H.offsetHeight-window.innerHeight):Math.max(1,window.innerHeight*1.4),nt=Math.max(0,Math.min(1,et)),ot=Math.round(nt*Ct);ne.scrollTo(ot,{immediate:!0});const Ze=window.__nocturneSyncWebglScroll;typeof Ze=="function"&&Ze(nt),s(nt),c(!1)};let ze=0;const Ie=et=>{ne.raf(et),ze=requestAnimationFrame(Ie)};return ze=requestAnimationFrame(Ie),()=>{cancelAnimationFrame(ze),window.removeEventListener("scroll",Me),ne.destroy()}},[]),St.useEffect(()=>{if(g==="none"){he.current&&document.body.contains(he.current)&&he.current.focus(),he.current=null;return}he.current||(he.current=document.activeElement);const ne=ee.current;ne&&(ne.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')||ne).focus();const Me=ze=>{if(ze.key==="Escape"){ze.preventDefault(),x("none");return}if(ze.key==="Tab"&&ee.current){const Ie=Array.from(ee.current.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'));if(Ie.length===0)return;const et=Ie[0],H=Ie[Ie.length-1];ze.shiftKey&&document.activeElement===et?(ze.preventDefault(),H.focus()):!ze.shiftKey&&document.activeElement===H&&(ze.preventDefault(),et.focus())}};return window.addEventListener("keydown",Me),()=>window.removeEventListener("keydown",Me)},[g]);const de=St.useMemo(()=>n<.36?0:n<.64?1:2,[n]);St.useEffect(()=>{g==="none"&&y(de)},[de,g]);const le=St.useMemo(()=>!r||!r.stops.length?null:r.stops[de]||r.stops[0],[r,de]),oe=vr[de]||vr[0],U=vr[v]||oe,K=ne=>{x("none"),c(!1);const Me=z.current,ze=Me?Math.max(1,Me.offsetHeight-window.innerHeight):Math.max(1,window.innerHeight*1.4),Ie=ne===0?0:ne===1?.5:.96,et=Math.round(Ie*ze),H=window.__nocturneSyncWebglScroll;typeof H=="function"&&H(Ie),s(Ie),C.current?C.current.scrollTo(et,{duration:.35}):window.scrollTo({top:et,behavior:"smooth"})},Y=()=>{if(x("none"),ue.current){const ne=ue.current.offsetTop;c(!0),C.current?C.current.scrollTo(ne,{duration:.4}):window.scrollTo({top:ne,behavior:"smooth"})}},F=(ne,Me)=>{b(ze=>{const Ie=[...ze];return Ie[ne]=Me,Ie})},Z=St.useMemo(()=>{const ne=r?.stops[v]||le;return ne?{...r0(ne.luminaire,h,u,X[v]||ne.tertiaryThreeLenis.lightTarget,ne.tertiaryThreeLenis.lightTarget),watts:Number((U.ratedWatts*h).toFixed(1))}:{lux:240,watts:Number((U.ratedWatts*h).toFixed(1)),duv:"-0.0012",beamSpreadMeters:2.8,polarFactor:1}},[r,v,le,h,u,X,U.ratedWatts]),be=Am(u),q=St.useMemo(()=>S.reduce((ne,Me)=>ne+Me.qty,0),[S]),fe=(ne,Me=de)=>{const ze=vr[Me]||oe,Ie=`${Me}-${u}`;_(et=>{const H=et.findIndex(Ct=>Ct.key===Ie);if(H>=0){const Ct=[...et];return Ct[H]={...Ct[H],qty:Ct[H].qty+1},Ct}return[...et,{key:Ie,stopIndex:Me,stopNum:ze.stopNum,productName:ze.productName,priceDisplay:ze.priceDisplay,kelvin:u,qty:1}]}),N(`Added ${ne} (${u}K) to project`),setTimeout(()=>N(null),2400)},_e=()=>{const ne=["NOCTURNE ARCHITECTURAL LIGHTING — CONCEPT SPECIFICATION SUMMARY",`Zone: ${U.stopNum} · ${U.zoneLabel}`,`Fixture: ${U.productName} (${U.priceDisplay})`,`Finish & Rating: ${U.finishNote}`,`Dimensions & Source: ${U.dimensionsNote}`,`Optical Distribution: ${U.opticalSummary}`,`Mounting: ${U.mountingNote}`,`Selected Warmth: ${u}K`,`Active Power & Illustrative Illuminance: ${Z.watts}W (${U.ratedWatts}W rated max) · ~${Z.lux} lx @ ${Math.round(h*100)}% output (calculated estimate)`].join(`
`),Me=()=>{Q(!0),setTimeout(()=>Q(!1),2500)};navigator.clipboard?.writeText(ne).then(Me,()=>{})},ve=ne=>{const Me=U.productName.toLowerCase().replace(/[^a-z0-9]+/g,"-");if(ne==="ies"){const ze=["IESNA:LM-63-2002","[MANUFAC] Nocturne Architectural Lighting (Concept Studio)",`[LUMCAT] NOC-${U.stopNum}-${u}K`,`[LUMINAIRE] ${U.productName} (${U.finishNote})`,`[MORE] Illustrative calculated photometric profile at ${u}K`,"TILT=NONE",`1 ${U.ratedWatts*85} 1 7 1 1 2 0.11 0.11 0.34`,`1.0 1.0 ${U.ratedWatts}`,"0 15 30 45 60 75 90","0",`${U.maxCandela} ${Math.round(U.maxCandela*.92)} ${Math.round(U.maxCandela*.76)} ${Math.round(U.maxCandela*.54)} ${Math.round(U.maxCandela*.31)} ${Math.round(U.maxCandela*.14)} 12`].join(`\r
`),Ie=new Blob([ze],{type:"text/plain;charset=utf-8"}),et=URL.createObjectURL(Ie),H=document.createElement("a");H.href=et,H.download=`${Me}-${u}k-illustrative.ies`,H.click(),URL.revokeObjectURL(et),O(`Downloaded ${Me}-${u}k-illustrative.ies`)}else{const ze=v===0?620:v===1?340:2400,Ie=v===0?110:v===1?140:680,et=Math.round(Ie/2),H=["0","SECTION","2","HEADER","9","$ACADVER","1","AC1009","9","$INSUNITS","70","4","0","ENDSEC","0","SECTION","2","ENTITIES","0","LINE","8","NOCTURNE_ELEVATION","10","0.0","20","0.0","30","0.0","11",String(Ie),"21","0.0","31","0.0","0","LINE","8","NOCTURNE_ELEVATION","10",String(Ie),"20","0.0","30","0.0","11",String(Ie),"21",String(ze),"31","0.0","0","LINE","8","NOCTURNE_ELEVATION","10",String(Ie),"20",String(ze),"30","0.0","11","0.0","21",String(ze),"31","0.0","0","LINE","8","NOCTURNE_ELEVATION","10","0.0","20",String(ze),"30","0.0","11","0.0","21","0.0","31","0.0","0","CIRCLE","8","NOCTURNE_OPTIC","10",String(et),"20",String(Math.round(ze*.5)),"30","0.0","40",String(et),"0","ENDSEC","0","EOF"].join(`\r
`),Ct=new Blob([H],{type:"application/dxf"}),nt=URL.createObjectURL(Ct),ot=document.createElement("a");ot.href=nt,ot.download=`${Me}-elevation.dxf`,ot.click(),URL.revokeObjectURL(nt),O(`Downloaded ${Me}-elevation.dxf`)}setTimeout(()=>O(null),2500)},Te=St.useMemo(()=>h<=.2?"night":Math.abs(u-2200)<=250?"candle":Math.abs(u-3500)<=350?"warm":Math.abs(u-6500)<=450?"daylight":"custom",[u,h]);return P.jsxs("div",{className:"nocturne-shell",children:[P.jsxs("header",{className:"top-pill-bar",role:"navigation","aria-label":"Primary",children:[P.jsx("a",{href:"#top",className:"brand-cluster",onClick:ne=>{ne.preventDefault(),K(0)},children:P.jsx("span",{className:"brand-wordmark",children:"Nocturne."})}),P.jsxs("nav",{className:"nav-center-links","aria-label":"Residence Zones and Studio",children:[vr.map((ne,Me)=>P.jsxs("button",{type:"button",className:`nav-text-link nav-zone-link ${g==="none"&&!a&&de===Me?"active":""}`,onClick:()=>K(Me),children:[P.jsx("span",{className:"nav-desktop-label",children:ne.zoneLabel}),P.jsx("span",{className:"nav-mobile-label",children:ne.zoneLabel.replace("The ","")})]},ne.stopNum)),P.jsxs("button",{type:"button",className:`nav-text-link ${g==="rail"?"active":""}`,onClick:()=>x(g==="rail"?"none":"rail"),children:[P.jsx("span",{className:"nav-desktop-label",children:"Warmth Studio"}),P.jsx("span",{className:"nav-mobile-label",children:"Studio"})]}),P.jsxs("button",{type:"button",className:`nav-text-link ${g==="none"&&a?"active":""}`,onClick:Y,children:[P.jsx("span",{className:"nav-desktop-label",children:"Collection"}),P.jsx("span",{className:"nav-mobile-label",children:"Shop"})]}),P.jsxs("button",{type:"button",className:`nav-text-link nav-spec-link ${g==="spec"?"active":""}`,onClick:()=>{y(de),x(g==="spec"?"none":"spec")},children:[P.jsx("span",{className:"nav-desktop-label",children:"Spec Sheet"}),P.jsx("span",{className:"nav-mobile-label",children:"Specs"})]})]}),P.jsx("div",{className:"nav-right-actions",children:P.jsxs("button",{type:"button",className:"cart-pill-btn","aria-label":`Project schedule (${q} fixtures)`,onClick:()=>{y(de),x(g==="spec"?"none":"spec")},children:[P.jsx("span",{children:"Project"}),P.jsx("span",{className:"cart-count-badge",children:q})]})})]}),P.jsx("div",{className:"walkthrough-scroll-container",ref:z,children:P.jsxs("div",{className:"viewport-stage-sticky",children:[r&&P.jsx(LE,{stops:r.stops,scrollProgress:n,activeStopIndex:de,kelvin:u,dimmer:h,aimTargets:X,onUpdateAimTarget:F}),P.jsx("div",{className:"stage-editorial-vignette"}),g==="none"&&P.jsxs("div",{className:"architectural-title-overlay",children:[P.jsx("p",{className:"hero-kicker-line",children:"Indoor & outdoor architectural lighting"}),P.jsx("h1",{className:"nc-headline",children:oe.heroHeadline}),P.jsx("p",{className:"hero-subcopy-line",children:oe.heroSubcopy})]}),g==="none"&&P.jsxs("aside",{className:`nc-cards-stack ${E?"mobile-expanded":"mobile-collapsed"}`,"aria-label":"Room Story and Featured Fixture",children:[P.jsxs("div",{className:"mobile-oneline-bar",children:[P.jsxs("div",{className:"mobile-oneline-info",children:[P.jsx("span",{className:"stop-badge-circle",children:oe.stopNum}),P.jsx("span",{className:"mobile-oneline-name",children:oe.productName}),P.jsx("span",{className:"mobile-oneline-price",children:oe.priceDisplay})]}),P.jsx("button",{type:"button",className:"mobile-sheet-toggle-btn","aria-expanded":E,onClick:()=>w(ne=>!ne),children:E?"Close ↓":"Details ↑"})]}),P.jsxs("div",{className:"nc-story-card",children:[P.jsxs("div",{className:"story-card-top-row",children:[P.jsxs("div",{className:"single-stop-badge",children:[P.jsx("span",{className:"stop-badge-circle",children:oe.stopNum}),P.jsx("span",{className:"stop-badge-zone",children:oe.zoneLabel})]}),P.jsx("button",{type:"button",className:"mobile-inline-close",onClick:()=>w(!1),children:"Done ↓"})]}),P.jsx("h2",{className:"story-card-title",children:oe.cardHeadline}),P.jsx("p",{className:"story-card-body",children:oe.cardBody}),P.jsxs("div",{className:"story-warmth-control",children:[P.jsxs("div",{className:"warmth-label-row",children:[P.jsx("span",{children:"Light Warmth"}),P.jsx("strong",{className:"warmth-kelvin-readout",children:h<=.2?"Night 12%":`${u}K · ${Math.round(h*100)}%`})]}),P.jsx("input",{"aria-label":"Color Temperature Kelvin",type:"range",min:2200,max:6500,step:50,value:u,onChange:ne=>{f(parseInt(ne.target.value,10)),h<=.2&&m(.92)},className:"nc-warmth-slider"}),P.jsxs("div",{className:"mood-pills-row",role:"group","aria-label":"Warmth Presets",children:[P.jsx("button",{type:"button","aria-label":"2200K Candlelight",title:"2200K Candlelight","aria-pressed":Te==="candle",className:`mood-pill-btn ${Te==="candle"?"active":""}`,onClick:()=>{f(2200),m(.92)},children:"2200K"}),P.jsx("button",{type:"button","aria-label":"3500K Warm White",title:"3500K Warm White","aria-pressed":Te==="warm",className:`mood-pill-btn ${Te==="warm"?"active":""}`,onClick:()=>{f(3500),m(.92)},children:"3500K"}),P.jsx("button",{type:"button","aria-label":"6500K Daylight",title:"6500K Daylight","aria-pressed":Te==="daylight",className:`mood-pill-btn ${Te==="daylight"?"active":""}`,onClick:()=>{f(6500),m(.92)},children:"6500K"}),P.jsx("button",{type:"button","aria-label":"Night mode 12% output",title:"Night mode 12% output","aria-pressed":Te==="night",className:`mood-pill-btn ${Te==="night"?"active":""}`,onClick:()=>m(.12),children:"Night"})]})]})]}),P.jsxs("div",{className:"nc-product-card",children:[P.jsx("img",{src:oe.productThumb,alt:oe.productName,className:"product-card-thumb"}),P.jsxs("div",{className:"product-card-details",children:[P.jsx("span",{className:"our-pick-pill",children:"Our pick"}),P.jsx("h3",{className:"product-card-name",children:oe.productName}),P.jsx("div",{className:"product-card-price",children:oe.priceDisplay}),P.jsxs("div",{className:"product-card-actions",children:[P.jsx("button",{type:"button",className:"add-to-cart-btn",onClick:()=>fe(oe.productName,de),children:"Add to project"}),P.jsx("button",{type:"button",className:"spec-sheet-link-btn",onClick:()=>{y(de),x("spec")},children:"Spec sheet ↗"})]})]})]})]}),I&&P.jsx("div",{className:"schedule-toast",role:"status",children:I}),g==="rail"&&P.jsx("section",{ref:ee,tabIndex:-1,className:"overlay-drawer-panel",role:"dialog","aria-modal":"true","aria-label":"Warmth and Material Studio",children:P.jsx(NE,{kelvin:u,globalDimmer:h,initialFixtureIndex:de,onSelectKelvin:f,onSelectDimmer:m,onAddToProject:(ne,Me)=>fe(ne,Me),onOpenSpecForStop:ne=>{y(ne),x("spec")},onClose:()=>x("none")})}),g==="spec"&&r&&P.jsx("section",{ref:ee,tabIndex:-1,className:"overlay-drawer-panel",role:"dialog","aria-modal":"true","aria-label":"Concept Specification Sheet and Project Schedule",children:P.jsxs("div",{className:"architect-spec-modal",children:[P.jsxs("div",{className:"architect-spec-header",children:[P.jsxs("div",{children:[P.jsx("span",{className:"pendant-rail-tag",children:"Concept Specification Sheet · Illustrative Photometry & CAD"}),P.jsx("h2",{className:"pendant-rail-title",children:U.productName}),P.jsx("p",{className:"pendant-rail-subtitle",children:U.finishNote}),P.jsx("p",{className:"pendant-rail-subtitle",children:U.dimensionsNote})]}),P.jsxs("div",{className:"architect-spec-header-btns",children:[P.jsx("div",{className:"spec-fixture-tabs",role:"group","aria-label":"Select Fixture Specification",children:vr.map((ne,Me)=>P.jsxs("button",{type:"button","aria-pressed":v===Me,className:`rail-pill-btn ${v===Me?"active":""}`,onClick:()=>y(Me),children:[ne.stopNum," · ",ne.zoneLabel.replace("The ","")]},ne.stopNum))}),P.jsx("button",{type:"button",className:"rail-action-btn",onClick:()=>ve("ies"),children:"Download .IES"}),P.jsx("button",{type:"button",className:"rail-action-btn",onClick:()=>ve("dxf"),children:"Download .DXF"}),P.jsx("button",{type:"button",className:"commission-primary-btn",onClick:_e,children:R?"Copied Spec ✓":"Copy Spec Data"}),P.jsx("button",{type:"button",className:"rail-close-btn",onClick:()=>x("none"),children:"Close ✕"})]})]}),B&&P.jsx("div",{className:"spec-download-banner",role:"status",children:B}),P.jsxs("div",{className:"architect-spec-metrics-row",children:[P.jsxs("div",{className:"spec-metric-box",children:[P.jsx("span",{children:"Zone & Mounting"}),P.jsxs("strong",{children:[U.stopNum," · ",U.zoneLabel]}),P.jsx("small",{children:U.mountingNote})]}),P.jsxs("div",{className:"spec-metric-box",children:[P.jsx("span",{children:"Selected Color Warmth"}),P.jsxs("strong",{children:[u,"K (Tunable 2200K–6500K)"]}),P.jsxs("small",{children:[P.jsx("span",{className:"inline-cct-swatch",style:{backgroundColor:be}}),"Active preset matches house walk"]})]}),P.jsxs("div",{className:"spec-metric-box",children:[P.jsx("span",{children:"Illustrative Target Illuminance"}),P.jsxs("strong",{children:["~",Z.lux," lx @ ",Math.round(h*100),"% output"]}),P.jsx("small",{children:"Calculated architectural estimate"})]}),P.jsxs("div",{className:"spec-metric-box",children:[P.jsx("span",{children:"Optical & Power Rating"}),P.jsxs("strong",{children:[Z.watts,"W active (",U.ratedWatts,"W max)"]}),P.jsx("small",{children:U.opticalSummary})]})]}),P.jsxs("div",{className:"photoboard-grid-two",children:[P.jsxs("div",{className:"photoboard-card",children:[P.jsxs("div",{className:"photoboard-card-label",children:[P.jsx("span",{children:"Illustrative Concept Elevation & Polar Candela Profile"}),P.jsx("span",{children:"Scale · mm / cd"})]}),P.jsx("div",{className:"spec-technical-svg-wrap",children:P.jsxs("svg",{viewBox:"0 0 640 240",className:"spec-technical-svg",role:"img","aria-label":`Concept elevation and calculated polar distribution for ${U.productName}`,children:[P.jsx("rect",{width:"640",height:"240",rx:"12",fill:"#f7f3ec"}),P.jsxs("g",{stroke:"#e3ddd2",strokeWidth:"1",children:[P.jsx("line",{x1:"20",y1:"42",x2:"620",y2:"42"}),P.jsx("line",{x1:"20",y1:"125",x2:"620",y2:"125"}),P.jsx("line",{x1:"20",y1:"208",x2:"620",y2:"208"}),P.jsx("line",{x1:"310",y1:"20",x2:"310",y2:"220"})]}),P.jsxs("text",{x:"24",y:"26",fill:"#57524b",fontSize:"11",fontWeight:"600",fontFamily:"Plus Jakarta Sans, sans-serif",children:["CONCEPT ELEVATION (",U.stopNum," · ",U.zoneLabel.toUpperCase(),")"]}),v===0&&P.jsxs("g",{stroke:"#191715",strokeWidth:"1.75",fill:"none",children:[P.jsx("line",{x1:"78",y1:"208",x2:"246",y2:"208",strokeWidth:"2"}),P.jsx("rect",{x:"136",y:"76",width:"52",height:"132",rx:"4",fill:"#ebe4d8"}),P.jsx("rect",{x:"134",y:"76",width:"56",height:"28",rx:"3",fill:"#dfd5c5"}),P.jsx("line",{x1:"136",y1:"112",x2:"188",y2:"112"}),P.jsx("path",{d:"M 136 106 L 92 206 M 188 106 L 232 206",stroke:"#9a6b37",strokeDasharray:"4 3"}),P.jsx("line",{x1:"94",y1:"76",x2:"94",y2:"208",stroke:"#57524b",strokeWidth:"1.2"}),P.jsx("line",{x1:"88",y1:"76",x2:"100",y2:"76",stroke:"#57524b",strokeWidth:"1.2"}),P.jsx("line",{x1:"88",y1:"208",x2:"100",y2:"208",stroke:"#57524b",strokeWidth:"1.2"}),P.jsx("text",{x:"84",y:"144",textAnchor:"end",fill:"#191715",fontSize:"11",fontWeight:"700",stroke:"none",children:"H 620mm"}),P.jsx("text",{x:"162",y:"64",textAnchor:"middle",fill:"#191715",fontSize:"11",fontWeight:"700",stroke:"none",children:"Ø 110mm"})]}),v===1&&P.jsxs("g",{stroke:"#191715",strokeWidth:"1.75",fill:"none",children:[P.jsx("rect",{x:"130",y:"66",width:"64",height:"138",rx:"4",fill:"#f3ede2"}),P.jsx("rect",{x:"126",y:"126",width:"72",height:"18",rx:"2",fill:"#594636"}),P.jsx("path",{d:"M 162 60 L 162 46 M 162 210 L 162 224",stroke:"#9a6b37",strokeDasharray:"3 3"}),P.jsx("line",{x1:"96",y1:"66",x2:"96",y2:"204",stroke:"#57524b",strokeWidth:"1.2"}),P.jsx("line",{x1:"90",y1:"66",x2:"102",y2:"66",stroke:"#57524b",strokeWidth:"1.2"}),P.jsx("line",{x1:"90",y1:"204",x2:"102",y2:"204",stroke:"#57524b",strokeWidth:"1.2"}),P.jsx("text",{x:"86",y:"138",textAnchor:"end",fill:"#191715",fontSize:"11",fontWeight:"700",stroke:"none",children:"H 340mm"}),P.jsx("text",{x:"162",y:"56",textAnchor:"middle",fill:"#191715",fontSize:"11",fontWeight:"700",stroke:"none",children:"W 140 × D 95mm"})]}),v===2&&P.jsxs("g",{stroke:"#191715",strokeWidth:"1.75",fill:"none",children:[P.jsx("rect",{x:"114",y:"60",width:"112",height:"8",rx:"3",fill:"#594636"}),P.jsx("line",{x1:"138",y1:"68",x2:"138",y2:"134"}),P.jsx("circle",{cx:"138",cy:"148",r:"14",fill:"#e6be8a"}),P.jsx("line",{x1:"170",y1:"68",x2:"170",y2:"174"}),P.jsx("circle",{cx:"170",cy:"190",r:"16",fill:"#e6be8a"}),P.jsx("line",{x1:"202",y1:"68",x2:"202",y2:"112"}),P.jsx("circle",{cx:"202",cy:"125",r:"13",fill:"#e6be8a"}),P.jsx("line",{x1:"96",y1:"60",x2:"96",y2:"206",stroke:"#57524b",strokeWidth:"1.2"}),P.jsx("line",{x1:"90",y1:"60",x2:"102",y2:"60",stroke:"#57524b",strokeWidth:"1.2"}),P.jsx("line",{x1:"90",y1:"206",x2:"102",y2:"206",stroke:"#57524b",strokeWidth:"1.2"}),P.jsx("text",{x:"88",y:"136",textAnchor:"end",fill:"#191715",fontSize:"10.5",fontWeight:"700",stroke:"none",children:"1800–3400mm"}),P.jsx("text",{x:"170",y:"52",textAnchor:"middle",fill:"#191715",fontSize:"11",fontWeight:"700",stroke:"none",children:"Ø 680mm Canopy"})]}),P.jsxs("text",{x:"332",y:"26",fill:"#57524b",fontSize:"11",fontWeight:"600",fontFamily:"Plus Jakarta Sans, sans-serif",children:["CALCULATED POLAR PROFILE (",U.maxCandela," cd @ ",u,"K)"]}),P.jsxs("g",{transform:"translate(476, 122)",children:[P.jsx("circle",{r:"74",fill:"none",stroke:"#d4cdc0",strokeWidth:"1.2"}),P.jsx("circle",{r:"50",fill:"none",stroke:"#dfd9ce",strokeWidth:"1",strokeDasharray:"3 3"}),P.jsx("circle",{r:"26",fill:"none",stroke:"#dfd9ce",strokeWidth:"1",strokeDasharray:"3 3"}),P.jsx("line",{x1:"-80",y1:"0",x2:"80",y2:"0",stroke:"#c8c0b2",strokeWidth:"1"}),P.jsx("line",{x1:"0",y1:"-80",x2:"0",y2:"80",stroke:"#c8c0b2",strokeWidth:"1"}),v===0&&P.jsx("path",{d:"M 0 0 C 44 12, 62 46, 0 72 C -62 46, -44 12, 0 0 Z",fill:"rgba(154, 107, 55, 0.20)",stroke:"#9a6b37",strokeWidth:"2.2"}),v===1&&P.jsx("path",{d:"M 0 -68 C 32 -46, 32 -14, 0 0 C 32 14, 32 46, 0 68 C -32 46, -32 14, 0 0 C -32 -14, -32 -46, 0 -68 Z",fill:"rgba(154, 107, 55, 0.20)",stroke:"#9a6b37",strokeWidth:"2.2"}),v===2&&P.jsx("circle",{cx:"0",cy:"6",r:"60",fill:"rgba(154, 107, 55, 0.20)",stroke:"#9a6b37",strokeWidth:"2.2"}),P.jsxs("text",{x:"0",y:"92",textAnchor:"middle",fill:"#191715",fontSize:"10",fontWeight:"700",children:["0° (",U.maxCandela," cd)"]}),P.jsx("text",{x:"86",y:"4",fill:"#57524b",fontSize:"10",fontWeight:"600",children:"90°"}),P.jsx("text",{x:"-106",y:"4",fill:"#57524b",fontSize:"10",fontWeight:"600",children:"90°"}),P.jsx("text",{x:"58",y:"64",fill:"#57524b",fontSize:"9.5",children:"45°"})]})]})})]}),P.jsxs("div",{className:"photoboard-card",children:[P.jsxs("div",{className:"photoboard-card-label",children:[P.jsxs("span",{children:["Fixture Reference & Project Schedule (",q,")"]}),P.jsx("span",{children:U.priceDisplay})]}),P.jsxs("div",{className:"spec-fixture-summary-grid",children:[P.jsx("img",{src:U.productThumb,alt:U.productName,className:"spec-fixture-photo"}),P.jsxs("div",{className:"spec-fixture-table",children:[P.jsxs("div",{className:"spec-table-row",children:[P.jsx("span",{children:"Luminaire"}),P.jsx("strong",{children:U.productName})]}),P.jsxs("div",{className:"spec-table-row",children:[P.jsx("span",{children:"Materials"}),P.jsx("strong",{children:U.finishNote})]}),P.jsxs("div",{className:"spec-table-row",children:[P.jsx("span",{children:"Dimensions"}),P.jsx("strong",{children:U.dimensionsNote})]}),P.jsxs("div",{className:"spec-table-row",children:[P.jsx("span",{children:"Photometry"}),P.jsx("strong",{children:U.opticalSummary})]}),P.jsxs("div",{className:"spec-table-actions",children:[P.jsx("button",{type:"button",className:"add-to-cart-btn",onClick:()=>fe(U.productName,v),children:"Add to project"}),P.jsx("button",{type:"button",className:"spec-sheet-link-btn",onClick:()=>K(v),children:"View in room ↗"})]})]})]}),P.jsxs("div",{className:"project-schedule-mini",children:[P.jsxs("div",{className:"project-schedule-mini-title",children:["Project Schedule (",q," ",q===1?"fixture":"fixtures"," selected)"]}),S.length===0?P.jsx("div",{className:"project-schedule-empty",children:"No fixtures added yet. Click “Add to project” on any fixture to build your schedule."}):P.jsx("div",{className:"project-schedule-list",children:S.map(ne=>P.jsxs("div",{className:"project-schedule-item",children:[P.jsxs("span",{children:[ne.stopNum," · ",ne.productName," (",ne.kelvin,"K)"]}),P.jsxs("strong",{children:["×",ne.qty," · ",ne.priceDisplay]})]},ne.key))})]})]})]})]})}),g==="none"&&P.jsxs("footer",{className:"bottom-walk-bar",children:[P.jsx("div",{className:"bottom-note-pill",children:"Scroll to walk the residence · Use the warmth slider to preview 2200K–6500K"}),P.jsx("div",{className:"nc-progress-pill",role:"group","aria-label":"Walkthrough Stops",children:vr.map((ne,Me)=>P.jsx("button",{type:"button","aria-label":`Go to ${ne.zoneLabel}`,"aria-current":de===Me?"step":void 0,className:`progress-segment-btn ${de===Me?"active":""}`,onClick:()=>K(Me)},ne.stopNum))}),P.jsx("button",{type:"button",className:"skip-walk-btn",onClick:Y,children:"Skip the walk ↓"})]})]})}),P.jsx("section",{id:"collection-section",ref:ue,className:"collection-catalog-section","aria-label":"Complete Residence Lighting Collection",children:P.jsxs("div",{className:"collection-catalog-inner",children:[P.jsxs("div",{className:"collection-catalog-header",children:[P.jsxs("div",{children:[P.jsx("span",{className:"catalog-eyebrow",children:"Residence Collection · Three Architectural Zones"}),P.jsx("h2",{className:"catalog-title",children:"Every fixture in the house, ready to specify."})]}),P.jsx("button",{type:"button",className:"catalog-back-top-btn",onClick:()=>K(0),children:"Back to the walk ↑"})]}),P.jsx("div",{className:"catalog-cards-grid",children:vr.map((ne,Me)=>P.jsxs("article",{className:"catalog-fixture-card",children:[P.jsxs("div",{className:"catalog-fixture-img-wrap",children:[P.jsx("img",{src:ne.productThumb,alt:ne.productName,className:"catalog-fixture-img"}),P.jsxs("span",{className:"catalog-zone-pill",children:[ne.stopNum," · ",ne.zoneLabel]})]}),P.jsxs("div",{className:"catalog-fixture-body",children:[P.jsxs("div",{className:"catalog-fixture-top",children:[P.jsx("h3",{children:ne.productName}),P.jsx("strong",{children:ne.priceDisplay})]}),P.jsx("p",{className:"catalog-fixture-desc",children:ne.cardBody}),P.jsxs("div",{className:"catalog-fixture-specs",children:[P.jsx("div",{children:ne.finishNote}),P.jsx("div",{children:ne.dimensionsNote})]}),P.jsxs("div",{className:"catalog-fixture-actions",children:[P.jsx("button",{type:"button",className:"add-to-cart-btn",onClick:()=>fe(ne.productName,Me),children:"Add to project"}),P.jsx("button",{type:"button",className:"spec-sheet-link-btn",onClick:()=>K(Me),children:"View in room ↑"})]})]})]},ne.stopNum))}),P.jsxs("footer",{className:"collection-editorial-footer",children:[P.jsxs("div",{children:[P.jsx("strong",{children:"Nocturne."})," Architectural Luminaires · Studio Concept 002"]}),P.jsx("div",{children:"2200K–6500K Tunable Warmth · Illustrative IES & CAD Documentation Available in Spec Sheet"})]})]})})]})};Yv.createRoot(document.getElementById("root")).render(P.jsx(Bv.StrictMode,{children:P.jsx(DE,{})}));
