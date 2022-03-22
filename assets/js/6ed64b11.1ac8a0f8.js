"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[270],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6350:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={description:"Some cool Tips and Tricks using Grid Platform"},l="Tips & Tricks",p={unversionedId:"platform/tips-and-tricks",id:"platform/tips-and-tricks",title:"Tips & Tricks",description:"Some cool Tips and Tricks using Grid Platform",source:"@site/docs/platform/tips-and-tricks.md",sourceDirName:"platform",slug:"/platform/tips-and-tricks",permalink:"/platform/tips-and-tricks",editUrl:"https://github.com/gridai/grid-docs/edit/master/docs/platform/tips-and-tricks.md",tags:[],version:"current",lastUpdatedAt:1647955103,formattedLastUpdatedAt:"3/22/2022",frontMatter:{description:"Some cool Tips and Tricks using Grid Platform"},sidebar:"tutorialSidebar",previous:{title:"Report Feedback",permalink:"/platform/report-feedback"},next:{title:"Security & Privacy",permalink:"/platform/security-and-privacy"}},c=[{value:"Tips &amp; Tricks",id:"tips--tricks-1",children:[{value:"Interruptible Runs",id:"interruptible-runs",children:[],level:3},{value:"AutoStructuring Deep Learning Training",id:"autostructuring-deep-learning-training",children:[],level:3},{value:"Early Stopping",id:"early-stopping",children:[],level:3},{value:"Sessions and data files",id:"sessions-and-data-files",children:[],level:3},{value:"Keeping track of costs",id:"keeping-track-of-costs",children:[],level:3},{value:"Periodic Uploads of Datasets to Datastores",id:"periodic-uploads-of-datasets-to-datastores",children:[{value:"write out current crontab",id:"write-out-current-crontab",children:[],level:4},{value:"run datastore upload every hour every day",id:"run-datastore-upload-every-hour-every-day",children:[],level:4},{value:"install new cron file",id:"install-new-cron-file",children:[],level:4}],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tips--tricks"},"Tips & Tricks"),(0,i.kt)("h2",{id:"tips--tricks-1"},"Tips & Tricks"),(0,i.kt)("h3",{id:"interruptible-runs"},"Interruptible Runs"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/features/runs/interruptible-machines"},"Interruptible Runs")," powered by spot instances are ",(0,i.kt)("strong",{parentName:"p"},"50-90%")," cheaper but a machine can be interrupted at anytime. If you are using PyTorch Lightning and a job gets interrupted you can load the checkpoints."),(0,i.kt)("p",null,"Grid helps you directly continue your Runs where you left off as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"if __name__ == '__main__':\n    parser = ArgumentParser()\n    parser.add_argument('--checkpoint_path', type=str)\n    args = parser.parse_args()\n    if args.checkpoint_path:\n        trainer = LitModel.load_from_checkpoint(checkpoint_path=args.checkpoint_path)\ngrid run --g_use_spot train.py --checkpoint_path \"Artifact URL \"\n")),(0,i.kt)("p",null,"For more information check out"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.grid.ai/platform/billing-rates"},"Interruptible Pricing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.grid.ai/features/runs/artifacts"},"Grid Artifacts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pytorch-lightning.readthedocs.io/en/latest/common/weights_loading.html"},"Lightning Loading Checkpoints"))),(0,i.kt)("h3",{id:"autostructuring-deep-learning-training"},"AutoStructuring Deep Learning Training"),(0,i.kt)("p",null,"The recent 1.3 Release of PyTorch Lightning provides a new Lightning CLI ","[","beta","]"," for ",(0,i.kt)("a",{parentName:"p",href:"https://devblog.pytorchlightning.ai/auto-structuring-deep-learning-projects-with-the-lightning-cli-9f40f1ef8b36"},"Auto Structuring Deep Learning Training"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"from pytorch_lightning.utilities.cli import LightningCLI\nLightningCLI(MyModel, MyData, trainer_defaults={'max_epochs': 10})\n")),(0,i.kt)("p",null,"When combined with Grid, the Lightning CLI enhances your train scripts, enabling you quickly take advantage of any hardware configuration and perform Grid Data, Model and Trainer sweeps without having to integrate external libraries or add extra code. For more information check out:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://devblog.pytorchlightning.ai/auto-structuring-deep-learning-projects-with-the-lightning-cli-9f40f1ef8b36"},"Auto Structuring Deep Learning Projects with the Lightning CLI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.grid.ai/features/runs/sweep-syntax"},"Configuring Grid Hyper Parameter Sweeps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pytorch-lightning.readthedocs.io/en/latest/common/lightning_cli.html"},"PyTorch Lightning CLI Docs"))),(0,i.kt)("h3",{id:"early-stopping"},"Early Stopping"),(0,i.kt)("p",null,"The recent 1.3 Release of PyTorch Lightning provides 3 New Thresholds for Early Stopping ","(","Stopping, Divergence, and Check Finite",")"," that can save you significant money on your Grid Runs."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://pytorch-lightning.readthedocs.io/en/latest/common/early_stopping.html"},"EarlyStopping")," Callback in Lightning allows the Trainer to automatically stop when a given metric stops improving. You can define your own custom metrics or take advantage of our ",(0,i.kt)("a",{parentName:"p",href:"https://bit.ly/2RxOvVp"},"TorchMetrics package")," to select common metrics to log and monitor. Early Stopping is perfect for ",(0,i.kt)("a",{parentName:"p",href:"https://docs.grid.ai/features/runs#runs"},"Grid Runs")," because it limits the time spent on experiments that lead to poor convergence or overfitting."),(0,i.kt)("p",null,"Using EarlyStopping Thresholds into your PL Runs is a simple as adding the following few lines to your code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'from pytorch_lightning.callbacks import EarlyStopping\nfrom pytorch_lightning import Trainerearly_stopping = EarlyStopping(\n monitor="val_loss",\n stopping_threshold=1e-4, # Stops training immediately once the monitored quantity reaches this threshold\n divergence_threshold=9.0, # Stops training as soon as the monitored quantity becomes worse than this threshold\n check_finite=True, # Stops training if the monitored metric becomes NaN or infinite.\n)\ntrainer = Trainer(callbacks=[early_stopping])\n')),(0,i.kt)("p",null,"You can then pocket the savings or reinvest them into more promising configurations to take your model performance and convergence to the next level. For more information check out:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bit.ly/3fyBRgT"},"Grid Run Docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bit.ly/3fnIUZu"},"Early Stopping Docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bit.ly/2RxOvVp"},"Torch Metrics Package"))),(0,i.kt)("h3",{id:"sessions-and-data-files"},"Sessions and data files"),(0,i.kt)("p",null,"Sometimes you need a quick way of copying files from your local machine to your grid session. I recently had to do this in order to configure the Kaggle CLI for a competition I was working on.Grid Sessions provide two clean options for uploading local files."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Secure Copy SCP")),(0,i.kt)("p",null,"Once you\u2019ve configured ",(0,i.kt)("a",{parentName:"p",href:"https://docs.grid.ai/features/sessions/how-to-ssh-into-a-session?utm_source=slack&utm_medium=social&utm_campaign=tip-of-week"},"SSH with the Grid CLI")," you can quickly copy files to your session with the scp command as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"scp local_file grid_session_name:~path_to_copy_to/\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Using")," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.grid.ai/features/sessions/jupyterlab-with-sessions?utm_source=slack&utm_medium=social&utm_campaign=tip-of-week"},(0,i.kt)("strong",{parentName:"a"},"JupyterLab")),"*","*","*","*"),(0,i.kt)("p",null,"If the CLI is not your thing; you can also upload files using jupyter hub"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?time_continue=14&v=1bd2QHqQSH4&feature=emb_title"},"This video")," shows you how to do that. For more information check out:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.grid.ai/features/sessions?utm_source=slack&utm_medium=social&utm_campaign=tip-of-week"},"Grid Sessions Docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.grid.ai/features/sessions/how-to-ssh-into-a-session?utm_source=slack&utm_medium=social&utm_campaign=tip-of-week"},"SSH into a Grid Session")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://linuxize.com/post/how-to-use-scp-command-to-securely-transfer-files/"},"SCP Command")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.grid.ai/features/sessions/jupyterlab-with-sessions?utm_source=slack&utm_medium=social&utm_campaign=tip-of-week"},"JupyterLab with Sessions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jupyterlab.readthedocs.io/en/stable/user/files.html#uploading-and-downloading"},"JupyterLab Uploading and Downloading Files"))),(0,i.kt)("h3",{id:"keeping-track-of-costs"},"Keeping track of costs"),(0,i.kt)("p",null,"Have you ever wanted to estimate exactly how much a cloud training run will cost you.Well with PyTorch Lightning and Grid now you can."),(0,i.kt)("p",null,"The recent 1.3 Release of PyTorch Lightning provides a new trainer flag called ",(0,i.kt)("a",{parentName:"p",href:"https://pytorch-lightning.readthedocs.io/en/1.3.1/common/trainer.html?utm_source=social&utm_medium=slack&utm_campaign=tip_of_week#max-time"},"max","_","time")," that can enable you to stop your ",(0,i.kt)("a",{parentName:"p",href:"https://docs.grid.ai/features/runs#runs"},"Grid Run")," and save a checkpoint when you\u2019ve reached the max allotted time."),(0,i.kt)("p",null,"Combined with Grid's ability to estimate how much a run will cost you per an hour you can use this flag to better budget your experiments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Default (disabled)\ntrainer = Trainer(max_time=None)# Stop after 12 hours of training or when reaching 10 epochs (string)\ntrainer = Trainer(max_time="00:12:00:00", max_epochs=10)# Stop after 1 day and 5 hours (dict)\ntrainer = Trainer(max_time={"days": 1, "hours": 5})\n')),(0,i.kt)("p",null,"With this trick you can better manage your training budget and invest it into more promising configurations to take your model performance and convergence to the next level.For more information check out:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bit.ly/3fyBRgT"},"Grid Run Docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pytorch-lightning.readthedocs.io/en/1.3.1/common/trainer.html?utm_source=social&utm_medium=slack&utm_campaign=tip_of_week#max-time"},"Max Time Docs"))),(0,i.kt)("h3",{id:"periodic-uploads-of-datasets-to-datastores"},"Periodic Uploads of Datasets to Datastores"),(0,i.kt)("p",null,"Did you know the you can schedule periodic uploading Datasets to Datastores ?"),(0,i.kt)("p",null,"The machine learning data is dynamic. If a ML model was trained on data from 2018 it might model a term such as, \u201ccorona\u201d differently than a model that was continuously kept up to date. To help make pipelining easier Grid supports periodic uploading of data from its source to a Datastore."),(0,i.kt)("p",null,"Here is an example of how you can quickly configure this functionality."),(0,i.kt)("h4",{id:"write-out-current-crontab"},"write out current crontab"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"crontab -l &gt; mycron\n")),(0,i.kt)("h4",{id:"run-datastore-upload-every-hour-every-day"},"run datastore upload every hour every day"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'echo "0  **** grid datastore create --source data/path --name dataset" &gt;&gt; mycron\n')),(0,i.kt)("h4",{id:"install-new-cron-file"},"install new cron file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"crontab mycron rm mycron\n")))}d.isMDXComponent=!0}}]);