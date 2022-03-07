"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[5663],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var i=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=i.createContext({}),c=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return i.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=c(n),g=r,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return n?i.createElement(h,o(o({ref:e},u),{},{components:n})):i.createElement(h,o({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6668:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},l="Grid Installation",c={unversionedId:"getting-started/getting-started",id:"getting-started/getting-started",title:"Grid Installation",description:"Prerequisites",source:"@site/docs/getting-started/getting-started.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/getting-started/",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/getting-started/getting-started.md",tags:[],version:"current",lastUpdatedAt:1646683935,formattedLastUpdatedAt:"3/7/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Grid in 3 minutes",permalink:"/"},next:{title:"Typical workflow (CLI user)",permalink:"/getting-started/typical-workflow-cli-user"}},u=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Installation steps",id:"installation-steps",children:[{value:"Install sshfs Linux (Debian/Ubuntu)",id:"install-sshfs-linux-debianubuntu",children:[],level:3},{value:"Install sshfs MacOs",id:"install-sshfs-macos",children:[],level:3}],level:2},{value:"Login steps",id:"login-steps",children:[],level:2},{value:"Github Integration",id:"github-integration",children:[],level:2},{value:"About private code",id:"about-private-code",children:[],level:2}],p={toc:u};function d(t){var e=t.components,s=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grid-installation"},"Grid Installation"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"Python 3.8+"))),(0,a.kt)("h2",{id:"installation-steps"},"Installation steps"),(0,a.kt)("p",null,"The following steps will install the Grid cli tool. Grid commands can then be invoked by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"grid <grid command> <grid command parameters>"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"pip install lightning-grid --upgrade")),(0,a.kt)("li",{parentName:"ol"},"sshfs")),(0,a.kt)("h3",{id:"install-sshfs-linux-debianubuntu"},"Install sshfs Linux (Debian/Ubuntu)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt-get install sshfs\n")),(0,a.kt)("h3",{id:"install-sshfs-macos"},"Install sshfs MacOs"),(0,a.kt)("p",null,"This is dependent on MacFuse and will yield an error with a vanilla brew install. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/telepresenceio/telepresence/issues/1654#issuecomment-873538291"},"here")," for resolution. "),(0,a.kt)("h2",{id:"login-steps"},"Login steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Visit ",(0,a.kt)("a",{parentName:"li",href:"https://grid.ai"},"grid.ai")),(0,a.kt)("li",{parentName:"ol"},"Sign in/create an account"),(0,a.kt)("li",{parentName:"ol"},"Click your user profile icon"),(0,a.kt)("li",{parentName:"ol"},"Click 'Settings'"),(0,a.kt)("li",{parentName:"ol"},"Click 'API Keys' tab")),(0,a.kt)("p",null,"You will now see the exact command you can use to login to grid and will be authenticated to run all CLI commands :)."),(0,a.kt)("h1",{id:"setting-up-grid"},"Setting Up Grid"),(0,a.kt)("p",null,"To get the full power of Grid, it is important to integrate your Github account with your Grid account. This will enable Grid to then utilize your public repositories for training. You will also have the option to give Grid access to your private repositories; by default Grid will not have read/write access to your private repositories."),(0,a.kt)("h2",{id:"github-integration"},"Github Integration"),(0,a.kt)("p",null,"By default, if you've logged in with Github, you can only access public Github repositories on Grid."," "),(0,a.kt)("p",null,"To grant read access to your private code navigate to ",(0,a.kt)("strong",{parentName:"p"},"Settings")," > ",(0,a.kt)("strong",{parentName:"p"},"Integrations")," > ",(0,a.kt)("strong",{parentName:"p"},"Grant access"),"."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you've logged in for the first time with Google, you will need to link a Github account and grant access to repos."))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8434).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Make sure the Integrations tab in settings shows private repos are connected",src:n(3955).Z})),(0,a.kt)("h2",{id:"about-private-code"},"About private code"),(0,a.kt)("p",null,"Grid does not save your code, look at it or compromise its privacy in any way."),(0,a.kt)("p",null,"When receiving support, you will not have to share any code to help debug. If you choose to share code, make sure you have the rights to and share non-critical parts of the code."),(0,a.kt)("h1",{id:"tutorials"},"Tutorials"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/typical-workflow-web-user"},"typical workflows")," pages for some tutorial walkthroughs with the product!"))}d.isMDXComponent=!0},8434:function(t,e,n){e.Z=n.p+"assets/images/grant_github_access-e05c66119234ad4ebd091945039fd2a3.gif"},3955:function(t,e,n){e.Z=n.p+"assets/images/ui-integrations-09c6014e41a5d8c24e78086f10e8fbf7.png"}}]);