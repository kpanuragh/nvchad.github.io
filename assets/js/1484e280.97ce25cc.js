"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[344],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=l,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8565:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=t(7462),l=t(3366),i=(t(7294),t(3905)),r=["components"],o={},u=void 0,s={unversionedId:"config/Custom config",id:"config/Custom config",title:"Custom config",description:"Make your own config :",source:"@site/docs/config/Custom config.md",sourceDirName:"config",slug:"/config/Custom config",permalink:"/config/Custom config",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Nvim lua stuff",permalink:"/config/Nvim lua stuff"},next:{title:"Mappings",permalink:"/config/Mappings"}},c={},p=[{value:"Make your own config :",id:"make-your-own-config-",level:2},{value:"Change default options",id:"change-default-options",level:3},{value:"Add plugins",id:"add-plugins",level:3},{value:"Replace default config of a plugin",id:"replace-default-config-of-a-plugin",level:3},{value:"Override default config of a plugin",id:"override-default-config-of-a-plugin",level:3},{value:"Local themes",id:"local-themes",level:3},{value:"Override specific colors in themes",id:"override-specific-colors-in-themes",level:3},{value:"Override default highlights",id:"override-default-highlights",level:3},{value:"Remove plugins",id:"remove-plugins",level:3},{value:"Modify plugin definition options",id:"modify-plugin-definition-options",level:3},{value:"Enable dashboard",id:"enable-dashboard",level:3},{value:"Packer Snapshot",id:"packer-snapshot",level:3},{value:"Autocmds",id:"autocmds",level:3},{value:"Files to edit",id:"files-to-edit",level:3},{value:"Lazy loading",id:"lazy-loading",level:3}],m={toc:p};function d(e){var n=e.components,t=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"make-your-own-config-"},"Make your own config :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create custom folder in lua/"),(0,i.kt)("li",{parentName:"ul"},"Copy the /examples dir files in this custom dir."),(0,i.kt)("li",{parentName:"ul"},"Check siduck's ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/siduck/dotfiles/tree/master/nvchad"},"custom config")," as a reference!"),(0,i.kt)("li",{parentName:"ul"},"Below are just examples bruhh")),(0,i.kt)("h3",{id:"change-default-options"},"Change default options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'M.options = {\n   user = function()\n      vim.opt.number = false\n   end,\n}\n\n-- or just load the module with your options\n\nM.options = {\n   user = function()\n       require("custom.myoptions")\n   end,\n}\n')),(0,i.kt)("h3",{id:"add-plugins"},"Add plugins"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- custom/plugins/init.lua\n\nreturn {\n\n   ["elkowar/yuck.vim"] = { ft = "yuck" }\n\n    ["NvChad/nvterm"] = {\n      config = function()\n         require "plugins.configs.nvterm"\n      end,\n   },\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"you can use a table too or just link the path of your table to organize config clean!")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- chadrc.lua\n\n\nM.plugins = {\n   user = require "custom.plugins"\n}\n')),(0,i.kt)("h3",{id:"replace-default-config-of-a-plugin"},"Replace default config of a plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the default_plugin_config_replace table in chadrc.lua")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'M.plugins = {\n   user = {\n      ["NvChad/nvterm"] = {\n         config = function()\n           require "custom.nvterm"\n         end\n       }\n   },\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do :PackerSync")),(0,i.kt)("h3",{id:"override-default-config-of-a-plugin"},"Override default config of a plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This feature comes useful when you want to change one thing from default config of a plugin but not copy paste the whole config!")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'M.plugins = {\n   override = {\n      ["nvim-treesitter/nvim-treesitter"] = {\n        ensure_installed = {\n          "html",\n          "css",\n       },\n     }\n   }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Note : the word 'nvim_treesitter' is taken from the override function from /lua/plugins/init.lua's treesitter 'use' table."),(0,i.kt)("li",{parentName:"ul"},"The above method might get messy if you override many plugin configs, so below is a basic example to keep it clean :")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local pluginConfs = require "custom.plugins.configs"\n\nM.plugins = {\n   override = {\n      ["nvim-treesitter/nvim-treesitter"] = pluginConfs.treesitter,\n      ["kyazdani42/nvim-tree.lua"] = pluginConfs.nvimtree,\n   },\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- custom/plugins/configs.lua file\n\nlocal M = {}\n\nM.treesitter = {\n   ensure_installed = {\n      "lua",\n      "html",\n      "css",\n   },\n}\n\nM.nvimtree = {\n   git = {\n      enable = true,\n   },\n   view = {\n      side = "right",\n      width = 20,\n   },\n}\n\nreturn M\n')),(0,i.kt)("h3",{id:"local-themes"},"Local themes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default themes are in our nvim-base16 repo's hl_themes dir"),(0,i.kt)("li",{parentName:"ul"},"Any nvchad theme structure be like :")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- siduck.lua = theme name\nlocal M = {}\n\nM.base_30 = {\n    -- my colors\n}\n\nM.base_16 = {\n    -- my base16 colors\n}\n\nreturn M\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Make sure to use the exact variable names!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then put your theme file in /custom/themes dir , ex : custom/themes/siduck.lua"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'M.ui = {\n   theme = "siduck",\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NOTE: The telescope theme switcher is still WIP so u have to add theme name in chadrc manually for now.")),(0,i.kt)("h3",{id:"override-specific-colors-in-themes"},"Override specific colors in themes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'M.ui = {\n\n   changed_themes = {\n      onedark = {\n         base_16 = {\n            base00 = "#mycol",\n         },\n         base_30 = {\n            red = "#mycol",\n            white = "#mycol",\n         },\n      },\n\n      nord = {\n         -- and so on!\n      },\n   },\n}\n')),(0,i.kt)("h3",{id:"override-default-highlights"},"Override default highlights"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This method can also be used to add your own highlight groups too"),(0,i.kt)("li",{parentName:"ul"},"Make sure you use a valid highlight group!"),(0,i.kt)("li",{parentName:"ul"},"check your theme at : ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"~/.local/share/nvim/site/pack/packer/opt/base46/lua/hl_themes\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Over there, in your theme file ex : onedark.lua, only the variables from base_30 can be used in overriding your custom highlight groups. "),(0,i.kt)("li",{parentName:"ul"},"You can even use hex colors in fg/bg field but its preferred to use variable names ex : blue, darker_black, one_bg etc from your theme file as it'll integrate better."),(0,i.kt)("li",{parentName:"ul"},"So no need to import a color table etc")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'M.ui = {\n   hl_override = {\n      --override default highlights\n      Pmenu = { bg = "white" },\n\n      MyHighlightGroup = {\n         fg = "red",\n         bg = "darker_black"\n      }\n   },\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NOTE: check our base16 repo's integration section to know the default hl groups used"),(0,i.kt)("li",{parentName:"ul"},"You can even use the path of the table in hl_override table (make sure u load it in variable before) like :")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- custom.highlights\nreturn   {\n      Pmenu = { bg = "#ffffff" },\n      MyHighlightGroup = {\n         fg = "blue",\n         bg = "grey"\n      }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- chadrc\nlocal my_highlights = require("custom.highlights")\n\nM.ui = {\n   hl_override = my_highlights\n}\n')),(0,i.kt)("h3",{id:"remove-plugins"},"Remove plugins"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'M.plugins = {\n  remove = {\n      "andymass/vim-matchup",\n      "NvChad/nvterm",\n   },\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do :PackerSync")),(0,i.kt)("h3",{id:"modify-plugin-definition-options"},"Modify plugin definition options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For example this is nvimtree's definition")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},' ["kyazdani42/nvim-tree.lua"] = {\n      cmd = { "NvimTreeToggle", "NvimTreeFocus" },\n\n      setup = function()\n         require("core.mappings").nvimtree()\n      end,\n\n      config = function()\n         require "plugins.configs.nvimtree"\n      end,\n }\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Now to change cmd, setup or any option defined in it :")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'\nM.plugins = {\n  user = {\n      ["kyazdani42/nvim-tree.lua"] = {\n      cmd = { "abc"},\n\n      setup = function()\n         require("core.mappings").yourfile\n      end,\n\n      config = function()\n        your stuff!\n      end,\n   }\n} }\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do :PackerSync")),(0,i.kt)("h3",{id:"enable-dashboard"},"Enable dashboard"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local M = {}\n\nM.plugins = {\n   user = {\n      ["goolord/alpha-nvim"] = {\n         disable = false,\n      },\n   },\n}\n\nreturn M\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do :PackerSync"),(0,i.kt)("li",{parentName:"ul"},"The above is an example, its better to put alpha in your custom plugins list table which is most probably in another file if you like organizing stuff")),(0,i.kt)("h3",{id:"packer-snapshot"},"Packer Snapshot"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lets run ",(0,i.kt)("inlineCode",{parentName:"li"},":PackerSnapshot stable_chad")," (this command creates new snapshots)"),(0,i.kt)("li",{parentName:"ul"},"my chadrc could look like this")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'M.plugins = {\n\n  override = {\n      ["wbthomason/packer.nvim"] = {\n          snapshot = "stable_chad",\n       }\n   }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In case there's a breaking change, I can just do ",(0,i.kt)("inlineCode",{parentName:"li"},":PackerSnapshotRollback stable_chad")," and wait for 1-2 minutes"),(0,i.kt)("li",{parentName:"ul"},"To delete that snapshot, ",(0,i.kt)("inlineCode",{parentName:"li"},"PackerSnapshotDelete stable_chad"))),(0,i.kt)("h3",{id:"autocmds"},"Autocmds"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"for example you can create a new file called autochad_cmds.lua in the lua/custom folder and require it in lua/custom/init.lua! or just define autocmds in custom/init.lua")),(0,i.kt)("h3",{id:"files-to-edit"},"Files to edit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Only edit files in custom dir, dont touch anything outside it."),(0,i.kt)("li",{parentName:"ul"},"The rest of the files outside the custom folder will get overwritten when updated using ",(0,i.kt)("inlineCode",{parentName:"li"},"<leader> + uu")," .")),(0,i.kt)("h3",{id:"lazy-loading"},"Lazy loading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We lazy load almost 95% of the plugins, so we expect you to lazy load the plugins you've added to reduce startuptime. We don't want users making NvChad slow just because they didn't lazy load plugins they've added!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wbthomason/packer.nvim#specifying-plugins"},"packer's readme")," for more info!"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/610012463907209227/891011437810577480/863483056531046450.png",alt:"lessgooo"})),(0,i.kt)("p",null,"(Note : Please open out an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NvChad/nvchad.github.io/issues"},"issue")," on the repo if you find any inaccuracies in the docs!)"))}d.isMDXComponent=!0}}]);