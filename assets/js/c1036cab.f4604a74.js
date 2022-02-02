"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[990],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=c(n),f=r,m=h["".concat(u,".").concat(f)]||h[f]||p[f]||i;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5924:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},u=void 0,c={unversionedId:"config/Walkthrough",id:"config/Walkthrough",isDocsHomePage:!1,title:"Walkthrough",description:"- (NOTE : Make sure you know basic lua , if not then check).",source:"@site/docs/config/Walkthrough.md",sourceDirName:"config",slug:"/config/Walkthrough",permalink:"/config/Walkthrough",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Learning Lua",permalink:"/getting-started/learn-lua"},next:{title:"Nvim lua stuff",permalink:"/config/Nvim lua stuff"}},s=[{value:"Structure",id:"structure",children:[]},{value:"Walkthrough",id:"walkthrough",children:[]},{value:"Init.lua",id:"initlua",children:[]},{value:"Themes",id:"themes",children:[]},{value:"Mappings",id:"mappings",children:[]},{value:"Default general options",id:"default-general-options",children:[]}],p={toc:s};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(NOTE : Make sure you know basic lua , if not then ",(0,i.kt)("a",{parentName:"li",href:"https://nvchad.github.io/getting-started/learn-lua"},"check"),")."),(0,i.kt)("li",{parentName:"ul"},"Make sure that you read sections in config (in the sidebar of this site) orderwise.")),(0,i.kt)("h2",{id:"structure"},"Structure"),(0,i.kt)("p",null,"NvChad comes with the following file / folder structure. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NvChad/NvChad/"},"An up-to-date & full tree can be viewed in the repo"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tree"},"\n\u251c\u2500\u2500 init.lua\n\u2502\n\u251c\u2500\u2500 lua\n\u2502   \u251c\u2500\u2500 colors\n\u2502   \u2502   \u251c\u2500\u2500 highlights.lua\n\u2502   \u2502   \u2514\u2500\u2500 init.lua (i)\n\u2502   \u2502\n\u2502   \u251c\u2500\u2500 core\n\u2502   \u2502   \u251c\u2500\u2500 autocmds.lua\n\u2502   \u2502   \u251c\u2500\u2500 default_config.lua\n\u2502   \u2502   \u251c\u2500\u2500 mappings.lua\n\u2502   \u2502   \u251c\u2500\u2500 options.lua\n\u2502   \u2502   \u2514\u2500\u2500 utils.lua (i)\n\u2502   \u2502\n\u2502   \u251c\u2500\u2500 plugins\n\u2502   \u2502    \u251c\u2500\u2500 init.lua\n\u2502   \u2502    \u251c\u2500\u2500 packerInit.lua\n\u2502   \u2502    \u2514\u2500\u2500 configs\n\u2502   \u2502        \u251c\u2500\u2500 bufferline.lua\n\u2502   \u2502        \u251c\u2500\u2500 others.lua\n\u2502   \u2502        \u2514\u2500\u2500 many more plugin configs\n|   |\n\u2502   \u251c\u2500\u2500 custom *\n\u2502   \u2502   \u251c\u2500\u2500 chadrc.lua\n\u2502   \u2502   \u251c\u2500\u2500 init.lua\n\u2502   \u2502   \u251c\u2500\u2500 more files, dirs\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The file names in the tree with (i) are meant to be ignored , i.e the user doesn't need to look at them. I assume you have basic lua knowledge . The lua code in those files might fret you or look very complex / scare you from NvChad xD."),(0,i.kt)("li",{parentName:"ul"},"(*) : custom dir has to be created by the user. ")),(0,i.kt)("h2",{id:"walkthrough"},"Walkthrough"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Letss goooo!")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/610012463907209227/891016498733256774/869951078962196571.png",alt:"chad"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/610012463907209227/891011437810577480/863483056531046450.png",alt:"lessgooo"})),(0,i.kt)("h2",{id:"initlua"},"Init.lua"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NvChads's config has a lua dir and init.lua."),(0,i.kt)("li",{parentName:"ul"},"The init.lua basically loads the core config and custom config."),(0,i.kt)("li",{parentName:"ul"},"pcall is usually used for error handling . Check ",(0,i.kt)("a",{parentName:"li",href:"https://www.lua.org/pil/8.4.html"},"lua docs")," for more info.")),(0,i.kt)("h2",{id:"themes"},"Themes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First copy examples/chadrc.lua to lua/custom/chadrc.lua , make sure it has the theme table"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<leader> + th")," (",(0,i.kt)("inlineCode",{parentName:"li"},"<leader>")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"<space>")," in our config)")),(0,i.kt)("h2",{id:"mappings"},"Mappings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<leader> + ch")," ")),(0,i.kt)("h2",{id:"default-general-options"},"Default general options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This file is lua/core/default_config.lua"),(0,i.kt)("li",{parentName:"ul"},"The table below contains all the default options for various stuff in NvChad.")),(0,i.kt)("p",null,"For example :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"M.options = {}\nM.ui = {}\nM.plugins = {}\nM.mappings = {} has general mappings\nM.mappings.plugins = {} has plugin related mappings\n")),(0,i.kt)("h1",{id:"plugins"},"Plugins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The lua/plugins dir contains three files , init.lua , packerInit.lua and the configs dir."),(0,i.kt)("li",{parentName:"ul"},"packerInit.lua : this file is used for defining packer's init stuff , so things like clone_timeout , compile_on_sync , etc and other packer related options are mentioned ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wbthomason/packer.nvim/blob/master/doc/packer.txt"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"init.lua : is basically the packer config , it calls packerInit first and then following with definitions of other plugins + their configs'"),(0,i.kt)("li",{parentName:"ul"},"For example to add a plugin , packer uses this format :")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'use {\n  "org or username/reponame",\n  config = function()\n    path to config ( require it)\n  end\n}\n\n-- example\n use {\n   "max397574/better-escape.nvim",\n    config = function()\n       require("plugins.configs.better_escape")\n    end\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"configs dir : most default plugins' configs are stored here!!")))}h.isMDXComponent=!0}}]);