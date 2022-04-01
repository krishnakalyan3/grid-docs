"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[8307],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9764:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={},s=void 0,p={unversionedId:"platform/custom-cloud-credentials/prereq-installation",id:"platform/custom-cloud-credentials/prereq-installation",title:"prereq-installation",description:"Grid Managed BYOC",source:"@site/docs/platform/custom-cloud-credentials/prereq-installation.md",sourceDirName:"platform/custom-cloud-credentials",slug:"/platform/custom-cloud-credentials/prereq-installation",permalink:"/platform/custom-cloud-credentials/prereq-installation",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/platform/custom-cloud-credentials/prereq-installation.md",tags:[],version:"current",lastUpdatedAt:1648786830,formattedLastUpdatedAt:"4/1/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bring Your Own Cloud (BYOC) Options",permalink:"/platform/custom-cloud-credentials/byoc"},next:{title:"adding-custom-cloud-credentials",permalink:"/platform/custom-cloud-credentials/adding-custom-cloud-credentials"}},u=[{value:"Installation Steps",id:"installation-steps",children:[{value:"M1 OSX",id:"m1-osx",children:[],level:3},{value:"Non-M1 OSX",id:"non-m1-osx",children:[],level:3},{value:"Linux (Debian/Ubuntu)",id:"linux-debianubuntu",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/custom-cloud-credentials/adding-custom-cloud-credentials"},"Grid Managed BYOC"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"/platform/custom-cloud-credentials/customer-managed-byoc"},"Customer Managed BYOC")),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To install either the Grid-managed BYOC or Customer-managed BYOC modes the following tools are required:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/"},"jq")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/"},"terraform")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cli/"},"AWS CLI"))),(0,o.kt)("h2",{id:"installation-steps"},"Installation Steps"),(0,o.kt)("h3",{id:"m1-osx"},"M1 OSX"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"brew"),", ",(0,o.kt)("a",{parentName:"p",href:"https://packaging.python.org/guides/tool-recommendations/"},"pip3"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://go.dev/doc/install"},"go")," are used in this example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install git\nbrew tap hashicorp/tap\nbrew install hashicorp/tap/terraform\nbrew update\nbrew upgrade hashicorp/tap/terraform\nbrew install jq\npip3 install awscli --upgrade --user\nexport GOPATH=$(go env GOPATH)\nmkdir -p $GOPATH/src/github.com/terraform-providers\ncd $GOPATH/src/github.com/terraform-providers\ngit clone git@github.com:hashicorp/terraform-provider-null.git\ncd terraform-providers-null\ngo vet\nmake fmt\nmake build\nmkdir -p $HOME/.terraform.d/plugins/registry.terraform.io/hashicorp/null/2.1.2/darwin_arm64\ncp $HOME/go/bin/terraform-provider-null $HOME/.terraform.d/plugins/registry.terraform.io/hashicorp/null/2.1.2/darwin_arm64/terraform-provider-null_2.1.2\n")),(0,o.kt)("h3",{id:"non-m1-osx"},"Non-M1 OSX"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"brew"),", ",(0,o.kt)("a",{parentName:"p",href:"https://packaging.python.org/guides/tool-recommendations/"},"pip3"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://go.dev/doc/install"},"go")," are used in this example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install git\nbrew tap hashicorp/tap\nbrew install hashicorp/tap/terraform\nbrew update\nbrew upgrade hashicorp/tap/terraform\nbrew install jq\npip3 install awscli --upgrade --user\n")),(0,o.kt)("h3",{id:"linux-debianubuntu"},"Linux ","(","Debian/Ubuntu",")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt-get update\n# install the tools\nsudo apt-get update && sudo apt-get install -y gnupg software-properties-common curl\ncurl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -\nsudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"\nsudo apt-get update && sudo apt-get install terraform\nsudo apt-get install git\nsudo apt-get install jq\nsudo apt-get install awscli\n')),(0,o.kt)("h1",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"See:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/platform/custom-cloud-credentials/adding-custom-cloud-credentials"},"Grid Managed BYOC")," - for Grid Managed BYOC mode deployment instructions"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/platform/custom-cloud-credentials/customer-managed-byoc"},"Customer Managed BYOC")," - for Customer Managed BYOC mode deployment instructions")))}d.isMDXComponent=!0}}]);