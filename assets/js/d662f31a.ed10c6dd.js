"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),y=r,d=m["".concat(s,".").concat(y)]||m[y]||c[y]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},6214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="lazy.nvim",l={unversionedId:"configuration/lazy.nvim",id:"configuration/lazy.nvim",title:"lazy.nvim",description:"The starter includes a pre-configured lazy.nvim",source:"@site/docs/configuration/lazy.nvim.md",sourceDirName:"configuration",slug:"/configuration/lazy.nvim",permalink:"/configuration/lazy.nvim",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/configuration/lazy.nvim.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u2699\ufe0f Configuration",permalink:"/configuration/"},next:{title:"General Settings",permalink:"/configuration/general"}},s={},p=[],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lazynvim"},"lazy.nvim"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LazyVim/starter"},"starter")," includes a pre-configured ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/folke/lazy.nvim"},"lazy.nvim"),"\nsetup that installs the ",(0,r.kt)("strong",{parentName:"p"},"LazyVim")," plugin and imports its plugins."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The version for ",(0,r.kt)("strong",{parentName:"p"},"lazy.nvim")," and ",(0,r.kt)("strong",{parentName:"p"},"LazyVim")," will default to the latest\nstable release."),(0,r.kt)("p",{parentName:"admonition"},"If you'd rather use the latest development version, add the code below\nto your specs:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/plugins/core.lua"',title:'"lua/plugins/core.lua"'},'return {\n  { "folke/lazy.nvim", version = false },\n  { "LazyVim/LazyVim", version = false },\n}\n'))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"lazy.nvim")," can be configured to always try to use the latest stable version\nof a plugin, if a plugin has releases."),(0,r.kt)("p",{parentName:"admonition"},"However, it's recommended to leave ",(0,r.kt)("inlineCode",{parentName:"p"},"version=false")," for now, since a lot\nthe plugins that support versioning, have outdated releases, which may break\nyour Neovim install."),(0,r.kt)("p",{parentName:"admonition"},"If you still want try using the latest stable releases, you can set\n",(0,r.kt)("inlineCode",{parentName:"p"},'config.defaults.version = "*"')),(0,r.kt)("p",{parentName:"admonition"},"Some plugins that are known to break with their outdated release will still\nbe forced to install the latest development version. To override that, specify\n",(0,r.kt)("inlineCode",{parentName:"p"},'version="*"')," for those plugins. (see the ",(0,r.kt)("strong",{parentName:"p"},"LazyVim")," code)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua"',title:'"lua/config/lazy.lua"'},'local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"\nif not vim.loop.fs_stat(lazypath) then\n  -- bootstrap lazy.nvim\n  -- stylua: ignore\n  vim.fn.system({ "git", "clone", "--filter=blob:none", "https://github.com/folke/lazy.nvim.git", "--branch=stable", lazypath })\nend\nvim.opt.rtp:prepend(vim.env.LAZY or lazypath)\n\nrequire("lazy").setup({\n  spec = {\n    -- add LazyVim and import its plugins\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    -- import any extras modules here\n    -- { import = "lazyvim.plugins.extras.lang.typescript" },\n    -- { import = "lazyvim.plugins.extras.lang.json" },\n    -- { import = "lazyvim.plugins.extras.ui.mini-animate" },\n    -- import/override with your plugins\n    { import = "plugins" },\n  },\n  defaults = {\n    -- By default, only LazyVim plugins will be lazy-loaded. Your custom plugins will load during startup.\n    -- If you know what you\'re doing, you can set this to `true` to have all your custom plugins lazy-loaded by default.\n    lazy = false,\n    -- It\'s recommended to leave version=false for now, since a lot the plugin that support versioning,\n    -- have outdated releases, which may break your Neovim install.\n    version = false, -- always use the latest git commit\n    -- version = "*", -- try installing the latest stable version for plugins that support semver\n  },\n  install = { colorscheme = { "tokyonight", "habamax" } },\n  checker = { enabled = true }, -- automatically check for plugin updates\n  performance = {\n    rtp = {\n      -- disable some rtp plugins\n      disabled_plugins = {\n        "gzip",\n        -- "matchit",\n        -- "matchparen",\n        -- "netrwPlugin",\n        "tarPlugin",\n        "tohtml",\n        "tutor",\n        "zipPlugin",\n      },\n    },\n  },\n})\n\n')))}m.isMDXComponent=!0}}]);