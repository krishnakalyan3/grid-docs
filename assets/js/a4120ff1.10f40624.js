"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[4005],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4072:function(e,t,n){var r=n(7294);t.Z=function(e){return r.createElement("video",{width:"100%",height:"320",controls:!0},r.createElement("source",{src:e.src,type:"video/mp4"}))}},58:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(4072),s=["components"],p={description:"Run (and sweep) any private or public Github repository."},c="\u26a1Runs",u={unversionedId:"features/runs/README",id:"features/runs/README",title:"\u26a1Runs",description:"Run (and sweep) any private or public Github repository.",source:"@site/docs/features/runs/README.md",sourceDirName:"features/runs",slug:"/features/runs/",permalink:"/features/runs/",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/runs/README.md",tags:[],version:"current",lastUpdatedAt:1648786830,formattedLastUpdatedAt:"4/1/2022",frontMatter:{description:"Run (and sweep) any private or public Github repository."},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/features/sessions/faq"},next:{title:"Script dependencies",permalink:"/features/runs/script-dependencies"}},l=[{value:"Runs and sweeps",id:"runs-and-sweeps",children:[],level:2},{value:"1 minute overview",id:"1-minute-overview",children:[],level:2},{value:"Product Tour",id:"product-tour",children:[],level:2},{value:"Option 1: Run via the CLI",id:"option-1-run-via-the-cli",children:[],level:2},{value:"<strong>Option 2: Start via the web UI</strong>",id:"option-2-start-via-the-web-ui",children:[],level:2}],d={toc:l};function m(e){var t=e.components,p=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"runs"},"\u26a1Runs"),(0,i.kt)("h2",{id:"runs-and-sweeps"},"Runs and sweeps"),(0,i.kt)("p",null,"Run (",(0,i.kt)("strong",{parentName:"p"},"and sweep"),") any private or public Github repository on the cloud."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# clone repo\ngit clone https://github.com/williamFalcon/hello\n\n# start the sweep\ncd hello\ngrid run hello.py --number \"[1, 2]\" --food_item \"['pizza', 'hotdog']\"\n")),(0,i.kt)("p",null,'The Grid CLI accepts "--" as a separator between grid arguments and script arguments. This is useful under situations where the Grid CLI arguments have the same name as your script arguments, preventing name clashing. As an example:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"grid run --grid_param argument --grid_param argument -- train.py --script_param argument --script_param argument\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Grid Run respects the use of .ignore files; these files are used to tell a program which files it should ignore during execution. Grid gives preference to the .gridignore file. In the absence of a .gridignore file Grid will concatenate the .gitignore and .dockerignore files to determine which files should be ignored. These files do not have to be provided to the CLI or UI and are expected to reside in the project root directory."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u26a1\ufe0f\u26a1\ufe0fForget about infrastructure \u26a1\ufe0f\u26a1\ufe0f")),(0,i.kt)("p",null,'Runs are "serverless" which means you only pay for the time your scripts are actually running. When running on your own infrastructure this amounts to massive cost savings as well.'),(0,i.kt)("h2",{id:"1-minute-overview"},"1 minute overview"),(0,i.kt)("p",null,"In this video we're going to run an arbitrary model (from the pytorch examples github repo) across 4 GPUs (4 experiments each on 2 GPUs)"),(0,i.kt)(o.Z,{src:"https://grid-docs.s3.us-east-2.amazonaws.com/intro_video_docs_run.mp4",mdxType:"Video"}),(0,i.kt)("h2",{id:"product-tour"},"Product Tour"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://platform.grid.ai/#/dashboard?product_tour_id=226810"},"Click here for a 2-minute tour of RUN")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5135).Z})),(0,i.kt)("h2",{id:"option-1-run-via-the-cli"},"Option 1: Run via the CLI"),(0,i.kt)("p",null,"RUN ",(0,i.kt)("strong",{parentName:"p"},"any")," GitHub file with Grid in 4 steps:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# 1. clone the repo\ngit clone https://github.com/pytorch/examples\n\n# 2. find the file to run\ncd examples/dcgan\n\n# 3. verify it works locally (optional)\npython   main.py --dataset cifar10 --lr 0.0002 --dataroot .\n\n# 4. run on a cloud instance via grid\ngrid run main.py --dataset cifar10 --lr 0.0002 --dataroot .\n")),(0,i.kt)("p",null,"Grid offers advanced syntax for starting a run. With this code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid run hello.py --number \"[1, 2]\" --food_item \"['pizza', 'hotdog']\"\n")),(0,i.kt)("p",null,"Grid will run the script 4 times... these are the 4 equivalent script calls (we call each script call an experiment)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python hello.py --number 1 --food_item 'pizza'\npython hello.py --number 2 --food_item 'pizza'\n\npython hello.py --number 1 --food_item 'hotdog'\npython hello.py --number 2 --food_item 'hotdog'\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A RUN is a collection of experiments (the run has 4 experiments in this example)."))),(0,i.kt)("h2",{id:"option-2-start-via-the-web-ui"},(0,i.kt)("strong",{parentName:"h2"},"Option 2: Start via the web UI")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4788).Z})))}m.isMDXComponent=!0},4788:function(e,t,n){t.Z=n.p+"assets/images/run_start-cd5ce398f6509d85396a5f8e77c9ecf5.gif"},5135:function(e,t,n){t.Z=n.p+"assets/images/runs-product-tour-056edb3729f3076b1619df9870f9b816.png"}}]);