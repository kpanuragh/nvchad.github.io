"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[344],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),c=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=c(e.components);return l.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||i;return t?l.createElement(m,r(r({ref:n},s),{},{components:t})):l.createElement(m,r({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=d;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,r[1]=u;for(var c=2;c<i;c++)r[c]=t[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3515:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var l=t(7462),a=t(3366),i=(t(7294),t(3905)),r=["components"],u={},o=void 0,c={unversionedId:"config/Custom config",id:"config/Custom config",isDocsHomePage:!1,title:"Custom config",description:"Make your own config :",source:"@site/docs/config/Custom config.md",sourceDirName:"config",slug:"/config/Custom config",permalink:"/config/Custom config",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Nvim lua stuff",permalink:"/config/Nvim lua stuff"},next:{title:"Lsp stuff",permalink:"/config/Lsp stuff"}},s=[{value:"Make your own config :",id:"make-your-own-config-",children:[{value:"Add plugins",id:"add-plugins",children:[]},{value:"Add mappings",id:"add-mappings",children:[]},{value:"Replace default config of a plugin",id:"replace-default-config-of-a-plugin",children:[]},{value:"Override default config of a plugin",id:"override-default-config-of-a-plugin",children:[]},{value:"Override default highlights",id:"override-default-highlights",children:[]},{value:"Autocmds",id:"autocmds",children:[]},{value:"Files to edit",id:"files-to-edit",children:[]},{value:"Lazy loading",id:"lazy-loading",children:[]}]}],p={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"make-your-own-config-"},"Make your own config :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create custom folder in lua/"),(0,i.kt)("li",{parentName:"ul"},"Copy the /examples dir files in this custom dir."),(0,i.kt)("li",{parentName:"ul"},"The chadrc.lua here is for editing NvChad default options which are mentioned in lua/core/default_config.lua"),(0,i.kt)("li",{parentName:"ul"},"The init.lua here will be used for adding new plugins , new plugin configs , replace default plugin configs , adding new mappings. It just behaves like the init.lua in ~/.config/nvim"),(0,i.kt)("li",{parentName:"ul"},"Check siduck's ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/siduck/dotfiles/tree/master/nvchad/custom"},"custom config")," as an reference!")),(0,i.kt)("h3",{id:"add-plugins"},"Add plugins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to custom folder")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- /lua/custom/plugins/init.lua\nreturn {\n   { "elkowar/yuck.vim", ft = "yuck" },\n   { "ellisonleao/glow.nvim", cmd = "Glow" },\n}\n-- just an example!\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- /lua/custom/chadrc.lua\nlocal userPlugins = require "custom.plugins" -- path to table\n\nM.plugins = {\n   install = userPlugins\n}\n')),(0,i.kt)("h3",{id:"add-mappings"},"Add mappings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'    local map = require("core.utils").map\n\n    map("n", "<leader>cc", ":Telescope <CR>")\n    map("n", "<leader>q", ":q <CR>")\n')),(0,i.kt)("h3",{id:"replace-default-config-of-a-plugin"},"Replace default config of a plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use the default_plugin_config_replace table in chadrc.lua")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Example :"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'M.plugins = {\n   default_plugin_config_replace = {\n      bufferline = "custom.bufferline",\n   },\n}\n\n-- NOTE: The \'bufferline\' variable there is taken from the first argument here\n--  config = override_req("bufferline", "plugins.configs.bufferline", "setup")\n-- you will find that in the packer\'s bufferline use function\n-- make sure you do :PackerCompile or :PackerSync after this since the packer_compiled.lua present needs to update\n')),(0,i.kt)("h3",{id:"override-default-config-of-a-plugin"},"Override default config of a plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Note : check 'default' table in your plugin's config and override a valid table in that default table.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'M.plugins = {\n   default_plugin_config_replace = {\n      nvim_treesitter = {\n        ensure_installed = {\n          "html",\n          "css",\n       },\n     }\n   }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Note : the word 'nvim_treesitter' is taken from the override function from /lua/plugins/init.lua's treesitter 'use' table."),(0,i.kt)("li",{parentName:"ul"},"The above method might get messy if you override many plugin configs, so below is a basic example to keep it clean :")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local pluginConfs = require "custom.plugins.configs"\n\nM.plugins = {\n   default_plugin_config_replace = {\n      nvim_treesitter = pluginConfs.treesitter,\n      nvim_tree = pluginConfs.nvimtree,\n   },\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- /lua/custom/plugins/configs.lua file\n\nlocal M = {}\n\nM.treesitter = {\n   ensure_installed = {\n      "lua",\n      "html",\n      "css",\n   },\n}\n\nM.nvimtree = {\n   git = {\n      enable = true,\n   },\n   view = {\n      side = "right",\n      width = 20,\n   },\n}\n\nreturn M\n')),(0,i.kt)("h3",{id:"override-default-highlights"},"Override default highlights"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add a path to the 'hl_override' option in the UI section of chadrc.lua.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'M.ui = {\n   hl_override = "custom.highlights",\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NOTE : The above path is just an example , which will mean that your highlights file is /custom/highlights.lua."),(0,i.kt)("li",{parentName:"ul"},"highlights file might contain this.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local colors = require("colors").get()\n\nlocal fg = require("core.utils").fg\nlocal fg_bg = require("core.utils").fg_bg\nlocal bg = require("core.utils").bg\n\nfg("Normal", colors.red)\n\n-- If you dont want to require the above stuffs then you could just do :\n\nvim.cmd("hi Normal guifg=#yourhexcolor")\n')),(0,i.kt)("h3",{id:"autocmds"},"Autocmds"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Well, for example you just create a new file called autochad_cmds.lua in the lua/custom folder and require it in lua/custom/init.lua! BOOOM!!")),(0,i.kt)("h3",{id:"files-to-edit"},"Files to edit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Only files that are supposed to edited by the user are meant to be in the /lua/custom/ , example files can be copied from /examples/.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The rest of the files outside the custom folder will get overwritten when updated using ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader> + uu")," , so don't put your config there!! Just put it in the /lua/custom/ folder."))),(0,i.kt)("h3",{id:"lazy-loading"},"Lazy loading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We lazy load almost 95% of the plugins, so we expect you to lazy load the plugins you've added to reduce startuptime. We don't want users making NvChad slow just because they didn't lazy load plugins they've added!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wbthomason/packer.nvim#specifying-plugins"},"packer's readme")," for more info!"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/610012463907209227/891011437810577480/863483056531046450.png",alt:"lessgooo"})),(0,i.kt)("p",null,"(Note : Please open out an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NvChad/nvchad.github.io/issues"},"issue")," on the repo if you find any inaccuracies in the docs!)"))}d.isMDXComponent=!0}}]);