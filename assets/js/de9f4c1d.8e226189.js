"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[1575],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8309:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={},s="YAML configs",u={unversionedId:"features/runs/yaml-configs/README",id:"features/runs/yaml-configs/README",title:"YAML configs",description:"Using Environment Variables",source:"@site/docs/features/runs/yaml-configs/README.md",sourceDirName:"features/runs/yaml-configs",slug:"/features/runs/yaml-configs/",permalink:"/features/runs/yaml-configs/",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/runs/yaml-configs/README.md",tags:[],version:"current",lastUpdatedAt:1648786830,formattedLastUpdatedAt:"4/1/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Failed jobs",permalink:"/features/runs/failed-jobs"},next:{title:"Actions",permalink:"/features/runs/actions"}},c=[{value:"Using Environment Variables",id:"using-environment-variables",children:[],level:2},{value:"Specifying Requirement Files",id:"specifying-requirement-files",children:[],level:2},{value:"Full Example",id:"full-example",children:[],level:2}],p={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"yaml-configs"},"YAML configs"),(0,i.kt)("h2",{id:"using-environment-variables"},"Using Environment Variables"),(0,i.kt)("p",null,"You can pass in environment variables to be used by your experiment by using the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"environment"))," key. Pass any values and those values will be available in your experiment context. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'compute:\n  train:\n    environment:\n      MY_ENVIRONMENT_VARIABLE: "example"\n')),(0,i.kt)("p",null,"The environment variable ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"MY_ENVIRONMENT_VARIABLE"))," will be injected into your experiment runtime."),(0,i.kt)("h2",{id:"specifying-requirement-files"},"Specifying Requirement Files"),(0,i.kt)("p",null,"Grid will automatically install dependencies into your project using either ",(0,i.kt)("inlineCode",{parentName:"p"},"pip")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"conda"),". It does that automatically by finding files either named ",(0,i.kt)("inlineCode",{parentName:"p"},"requirements.txt")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.yml")," in your project's root. "),(0,i.kt)("p",null,"If your dependencies live elsewhere, you can specify their location using the ",(0,i.kt)("inlineCode",{parentName:"p"},"dependency_file_info")," attribute in the Grid YAML config."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"compute:\n  train:\n    dependency_file_info:\n      package_manager: pip\n      path: ./requirements/requirements.txt # can have any name \n")),(0,i.kt)("h2",{id:"full-example"},"Full Example"),(0,i.kt)("p",null,"In this example, we run a hyper parameter sweep that creates 2 experiments. That's the case because we are using ",(0,i.kt)("inlineCode",{parentName:"p"},"random_search")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"trials")," parameter set to 2, which will randomly sample 2 combinations of hyper parameters from the combinations generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"learning_rate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"gamma"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# Main compute configuration.\ncompute:\n\n  # Add cloud configuration here.\n  provider:\n    cluster: XXXXXX           # Cluster ID\n\n  # Training configuration.\n  train:\n    cpus: 1                       # Number of CPUs\n    gpus: 0                       # Number of GPUs\n    instance: t2.xlarge           # AWS instance type\n\n    # Your environment variables\n    environment:\n      MY_ENVIRONMENT_VARIABLE: "example"\n      \n    # Dependency file specification\n    dependency_file_info:\n      package_manager: pip\n      path: ./requirements/requirements.txt # can have any name \n')))}m.isMDXComponent=!0}}]);