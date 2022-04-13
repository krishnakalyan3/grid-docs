"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[6065],{3905:function(e,a,n){n.d(a,{Zo:function(){return u},kt:function(){return c}});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=r.createContext({}),o=function(e){var a=r.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=o(e.components);return r.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(n),c=t,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?r.createElement(h,l(l({ref:a},u),{},{components:n})):r.createElement(h,l({ref:a},u))}));function c(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p.mdxType="string"==typeof e?e:t,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3557:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return u},default:function(){return m}});var r=n(7462),t=n(3366),i=(n(7294),n(3905)),l=["components"],p={title:"Hyperparameter Sweep Syntax",sidebar_label:"Hyperparameter Sweep Syntax"},s="Hyperparameter Sweeps",o={unversionedId:"features/runs/sweep-syntax",id:"features/runs/sweep-syntax",title:"Hyperparameter Sweep Syntax",description:"Grid allows running hyperparameter sweeps without changing a single line of code! Just make sure your script can take arguments:",source:"@site/docs/features/runs/2_sweep-syntax.md",sourceDirName:"features/runs",slug:"/features/runs/sweep-syntax",permalink:"/features/runs/sweep-syntax",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/features/runs/2_sweep-syntax.md",tags:[],version:"current",lastUpdatedAt:1649876163,formattedLastUpdatedAt:"4/13/2022",sidebarPosition:2,frontMatter:{title:"Hyperparameter Sweep Syntax",sidebar_label:"Hyperparameter Sweep Syntax"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/features/runs/README"},next:{title:"GitHub Integration",permalink:"/features/runs/private-repos"}},u=[{value:"Python flags",id:"python-flags",children:[{value:"boolean",id:"boolean",children:[],level:3},{value:"float",id:"float",children:[],level:3},{value:"int",id:"int",children:[],level:3},{value:"string",id:"string",children:[],level:3}],level:2},{value:"Grid extensions",id:"grid-extensions",children:[{value:"distribution",id:"distribution",children:[],level:3},{value:"list",id:"list",children:[],level:3},{value:"range",id:"range",children:[],level:3},{value:"string list",id:"string-list",children:[],level:3}],level:2},{value:"Grid Search",id:"grid-search",children:[],level:2},{value:"Random Search",id:"random-search",children:[],level:2},{value:"Skipping Parameter Evaluation",id:"skipping-parameter-evaluation",children:[],level:2}],d={toc:u};function m(e){var a=e.components,n=(0,t.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hyperparameter-sweeps"},"Hyperparameter Sweeps"),(0,i.kt)("p",null,"Grid allows running ",(0,i.kt)("a",{parentName:"p",href:"https://www.grid.ai/what-are-hyperparameter-sweeps-and-why-are-they-important-to-production-machine-learning"},"hyperparameter sweeps")," without changing a single line of code! Just make sure your script can take arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --layers 32 --learning_rate 0.01\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This page provides a list of arguments specific to running hyperparameter sweeps. For the full Grid CLI API reference, visit ",(0,i.kt)("a",{parentName:"p",href:"/cli"},"this page. ")))),(0,i.kt)("h2",{id:"python-flags"},"Python flags"),(0,i.kt)("h3",{id:"boolean"},"boolean"),(0,i.kt)("p",null,"Passing in a flag without values is treated like a boolean"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"grid run main.py --do_something\n")),(0,i.kt)("p",null,"Alternatively, your script can be written in such a way that it takes an arbitrary value and acts on them as booleans. For example, your script can be written in such a way that it treats 1/0, True/False, 'yes'/'no', etc as boolean values. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"grid run foo.py --bar 1 --barry 0\n")),(0,i.kt)("p",null,"This is the recommended syntax because it allows you to utilize arbitrary indicator hyperparameters in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.grid.ai/features/runs/sweep-syntax#grid-search"},"grid search")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.grid.ai/features/runs/sweep-syntax#random-search"},"random search")," features. For example, the following will invoke a grid search:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"grid run foo.py --bar '[True, False]'\n")),(0,i.kt)("h3",{id:"float"},"float"),(0,i.kt)("p",null,"Grid supports standard float notation and scientific notation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"grid run main.py --learning_rate 0.01\ngrid run main.py --learning_rate 1e-2\n")),(0,i.kt)("h3",{id:"int"},"int"),(0,i.kt)("p",null,"Grid supports standard integer notation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"grid run main.py --batch_size 32\n")),(0,i.kt)("h3",{id:"string"},"string"),(0,i.kt)("p",null,"Grid supports standard string notation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"grid run main.py --model bert\ngrid run main.py --model 'bert'\ngrid run main.py --model \"bert\"\n")),(0,i.kt)("h2",{id:"grid-extensions"},"Grid extensions"),(0,i.kt)("h3",{id:"distribution"},"distribution"),(0,i.kt)("p",null,"Calls the script with each value sampled from any ",(0,i.kt)("a",{parentName:"p",href:"https://numpy.org/doc/1.16/reference/routines.random.html#distributions"},"numpy distribution"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'grid run main.py --alpha "uniform(1e-5, 1e-1, 3)"\n')),(0,i.kt)("p",null,"Grid will submit 3 jobs here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# job 1\ngrid run main.py --alpha 0.03977392,\n\n# job 2\ngrid run main.py --alpha 0.04835479\n\n# job 3\ngrid run main.py --alpha 0.05200016\n")),(0,i.kt)("p",null,"This is equivalent to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},">>> np.random.uniform(1e-5, 1e-1, 3)\narray([0.03977392, 0.04835479, 0.05200016])\n")),(0,i.kt)("h3",{id:"list"},"list"),(0,i.kt)("p",null,"Calls the script with each value in the list"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'grid run main.py --layers "[32, 64, 128]"\n')),(0,i.kt)("p",null,"Grid will submit 3 jobs here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# job 1\ngrid run main.py --layers 32\n\n# job 2\ngrid run main.py --layers 64\n\n# job 3\ngrid run main.py --layers 128\n")),(0,i.kt)("h3",{id:"range"},"range"),(0,i.kt)("p",null,"Calls the script with each value in the range."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'grid run main.py --layers "range(1, 10, 2)"\n')),(0,i.kt)("p",null,"Grid will submit 3 jobs here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# job 1\ngrid run main.py --layers 1\n\n# job 2\ngrid run main.py --layers 3\n\n# job 3\ngrid run main.py --layers 5\n\n# job 4\ngrid run main.py --layers 7\n\n# job 5\ngrid run main.py --layers 9\n")),(0,i.kt)("p",null,"This is equivalent to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3schools.com/python/ref_func_range.asp"},"Python Range syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},">>> list(range(1, 10, 2))\n[1, 3, 5, 7, 9]\n")),(0,i.kt)("h3",{id:"string-list"},"string list"),(0,i.kt)("p",null,"Calls the script with each value in the list"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"grid run main.py --model \"['resnet18' 'transformer', 'resnet50']\"\n")),(0,i.kt)("p",null,"Grid will submit 3 jobs here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# job 1\ngrid run main.py --model resnet18\n\n# job 2\ngrid run main.py --model transformer\n\n# job 3\ngrid run main.py --model resnet50\n")),(0,i.kt)("h2",{id:"grid-search"},"Grid Search"),(0,i.kt)("p",null,"To generate combinations (ie: a Grid Search), pass in multiple flags"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'grid run main.py --alpha "uniform(1e-5, 1e-1, 3)" --beta "[1, 2, 3, 4]"\n')),(0,i.kt)("p",null,"Generates 3 x 4 = 12 experiments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid run main.py --alpha 0.03977392 --beta 1\ngrid run main.py --alpha 0.03977392 --beta 2\ngrid run main.py --alpha 0.03977392 --beta 3\ngrid run main.py --alpha 0.03977392 --beta 4\n\ngrid run main.py --alpha 0.04835479 --beta 1\ngrid run main.py --alpha 0.04835479 --beta 2\ngrid run main.py --alpha 0.04835479 --beta 3\ngrid run main.py --alpha 0.04835479 --beta 4\n\ngrid run main.py --alpha 0.05200016 --beta 1\ngrid run main.py --alpha 0.05200016 --beta 2\ngrid run main.py --alpha 0.05200016 --beta 3\ngrid run main.py --alpha 0.05200016 --beta 4\n")),(0,i.kt)("p",null,"To run only a sample of these, choose the Random search option."),(0,i.kt)("h2",{id:"random-search"},"Random Search"),(0,i.kt)("p",null,"The following command, generates 12 experiments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'grid run main.py --alpha "uniform(1e-5, 1e-1, 3)" --beta "[1, 2, 3, 4]"\n')),(0,i.kt)("p",null,"Generates 3 x 4 = 12 experiments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid run main.py --alpha 0.03977392 --beta 1\ngrid run main.py --alpha 0.03977392 --beta 2\ngrid run main.py --alpha 0.03977392 --beta 3\ngrid run main.py --alpha 0.03977392 --beta 4\n\ngrid run main.py --alpha 0.04835479 --beta 1\ngrid run main.py --alpha 0.04835479 --beta 2\ngrid run main.py --alpha 0.04835479 --beta 3\ngrid run main.py --alpha 0.04835479 --beta 4\n\ngrid run main.py --alpha 0.05200016 --beta 1\ngrid run main.py --alpha 0.05200016 --beta 2\ngrid run main.py --alpha 0.05200016 --beta 3\ngrid run main.py --alpha 0.05200016 --beta 4\n")),(0,i.kt)("p",null,"Using ",(0,i.kt)("a",{parentName:"p",href:"https://jmlr.csail.mit.edu/papers/volume13/bergstra12a/bergstra12a.pdf"},"Random Search")," you can get close to optimal performance without needing to run all possible combinations. To use random search with Grid, simply choose that option"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'grid run --strategy random_search \\\n         --num_trials 3 \\\n         main.py \\\n         --alpha "uniform(1e-5, 1e-1, 3)" \\\n         --beta "[1, 2, 3, 4]"\n')),(0,i.kt)("p",null,"This will choose a subset of the combinations generated and only run 3 experiments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid run main.py --alpha 0.03977392 --beta 1\ngrid run main.py --alpha 0.03977392 --beta 2\ngrid run main.py --alpha 0.03977392 --beta 3 # <-- chosen (randomly)\ngrid run main.py --alpha 0.03977392 --beta 4\n\ngrid run main.py --alpha 0.04835479 --beta 1 # <-- chosen (randomly)\ngrid run main.py --alpha 0.04835479 --beta 2\ngrid run main.py --alpha 0.04835479 --beta 3 # <-- chosen (randomly)\ngrid run main.py --alpha 0.04835479 --beta 4\n\ngrid run main.py --alpha 0.05200016 --beta 1\ngrid run main.py --alpha 0.05200016 --beta 2\ngrid run main.py --alpha 0.05200016 --beta 3\ngrid run main.py --alpha 0.05200016 --beta 4\n")),(0,i.kt)("h2",{id:"skipping-parameter-evaluation"},"Skipping Parameter Evaluation"),(0,i.kt)("p",null,"Grid's syntax for scheduling multiple experiments with combinations of arguments (ie. Grid Search or Random Search)\nsometimes might conflict with the expected script arguments.\nThat's when you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," strategy for parameter evaluation.\nThis allows the script to interpret and control the behavior of ",(0,i.kt)("inlineCode",{parentName:"p"},'--alpha "uniform(1e-5, 1e-1, 3)"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'--beta "[1, 2, 3, 4]"')," script arguments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'grid run --strategy none \\\n         main.py \\\n         --alpha "uniform(1e-5, 1e-1, 3)" \\\n         --beta "[1, 2, 3, 4]"\n')),(0,i.kt)("p",null,"This will schedule exactly one experiment and pass each script argument as-is without evaluation."))}m.isMDXComponent=!0}}]);