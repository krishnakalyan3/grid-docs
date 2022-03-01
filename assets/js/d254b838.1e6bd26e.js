"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[3526],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4906:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={description:"Grid provides an enterprise-ready SAML based Single Sign-On (SSO)"},l="Single Sign-On (SSO)",d={unversionedId:"platform/sso",id:"platform/sso",title:"Single Sign-On \\(SSO\\)",description:"Grid provides an enterprise-ready SAML based Single Sign-On (SSO)",source:"@site/docs/platform/sso.md",sourceDirName:"platform",slug:"/platform/sso",permalink:"/platform/sso",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/platform/sso.md",tags:[],version:"current",lastUpdatedAt:1646092870,formattedLastUpdatedAt:"3/1/2022",frontMatter:{description:"Grid provides an enterprise-ready SAML based Single Sign-On (SSO)"},sidebar:"tutorialSidebar",previous:{title:"Security & Privacy",permalink:"/platform/security-and-privacy"}},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Okta",id:"okta",children:[{value:"Step 0: <strong>Providing Grid support with your SAML metadata and email address</strong>",id:"step-0-providing-grid-support-with-your-saml-metadata-and-email-address",children:[],level:3},{value:"Step 1: Adding Grid details to your Okta application",id:"step-1-adding-grid-details-to-your-okta-application",children:[],level:3}],level:2}],u={toc:p};function c(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"single-sign-on-sso"},"Single Sign-On ","(","SSO",")"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Please contact Grid support with your SAML identity provider details. Details that we require:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your SAML metadata endpoint"),(0,a.kt)("li",{parentName:"ul"},"Domain names used by your organization ","(","e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"grid.ai"),")")),(0,a.kt)("p",null,"Below you can find instructions on how to setup ",(0,a.kt)("a",{parentName:"p",href:"https://www.okta.com/"},"Okta")," authentication with Grid. Other SAML providers are also supported, however you will need to know where to get and set several settings."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Interested in using another SSO / SAML provider? Reach out to use at ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@grid.ai"},"support@grid.ai")," and we'll write specific instructions."))),(0,a.kt)("h2",{id:"okta"},"Okta"),(0,a.kt)("h3",{id:"step-0-providing-grid-support-with-your-saml-metadata-and-email-address"},"Step 0: ",(0,a.kt)("strong",{parentName:"h3"},"Providing Grid support with your SAML metadata and email address")),(0,a.kt)("p",null,"First, create an Okta application and assign users to it. These are users that will be available to login to Grid."),(0,a.kt)("p",null,'Then, once the application is created, provide us the metadata URL. You can find it by visiting "Sign On" tab and clicking on ',(0,a.kt)("strong",{parentName:"p"},"Identity Provider")," metadata:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Okta application edit screen&#39;s &quot;Sign-on&quot; tab.",src:n(1848).Z})),(0,a.kt)("p",null,"Provide Grid support with this metadata URL and the domain names used by your users. For instance, if you users have emails like ",(0,a.kt)("inlineCode",{parentName:"p"},"support@grid.ai")," then you'll send us the domain name ",(0,a.kt)("inlineCode",{parentName:"p"},"grid.ai"),". This will configure the integration to respond to users with email ",(0,a.kt)("inlineCode",{parentName:"p"},"grid.ai"),"."),(0,a.kt)("h3",{id:"step-1-adding-grid-details-to-your-okta-application"},"Step 1: Adding Grid details to your Okta application"),(0,a.kt)("p",null,"Grid support will give you two pieces of information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Your "Audience URI ',"(","SP Entity ID",")",'", similar to ',(0,a.kt)("inlineCode",{parentName:"li"},"https://platform.grid.ai/v1/auth/sso/"),(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"saml-id"))),(0,a.kt)("li",{parentName:"ul"},'Your "Single sign on URL", similar to ',(0,a.kt)("inlineCode",{parentName:"li"},"d1408319-3898-4714-826f-58abe750b5d4"))),(0,a.kt)("p",null,"Edit your SSO application and set these details:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Okta Edit SAML Integration page.",src:n(5667).Z})),(0,a.kt)("p",null,"Done! Now you can visit the ",(0,a.kt)("a",{parentName:"p",href:"https://platform.grid.ai"},"https://platform.grid.ai")," and use your organization's email address to login."))}c.isMDXComponent=!0},1848:function(e,t,n){t.Z=n.p+"assets/images/okta-config-50e3c8a7a17087dc07a7caef8930619b.png"},5667:function(e,t,n){t.Z=n.p+"assets/images/saml-config-04309faf95c472d54cf6cd74d0e6d158.png"}}]);