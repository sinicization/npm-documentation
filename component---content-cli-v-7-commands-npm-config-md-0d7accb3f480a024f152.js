(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{"0fIy":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),o={},r={_frontmatter:o},c=i.a;function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm config set <key>=<value> [<key>=<value> ...]\nnpm config get [<key> [<key> ...]]\nnpm config delete <key> [<key> ...]\nnpm config list [--json]\nnpm config edit\nnpm set <key>=<value> [<key>=<value> ...]\nnpm get [<key> [<key> ...]]\n\nalias: c\n")),Object(l.b)("p",null,"Note: This command is unaware of workspaces."),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"npm gets its config settings from the command line, environment\nvariables, ",Object(l.b)("inlineCode",{parentName:"p"},"npmrc")," files, and in some cases, the ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file."),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"/cli/v7/configuring-npm/npmrc"},"npmrc")," for more information about the npmrc\nfiles."),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"/cli/v7/using-npm/config"},"config(7)")," for a more thorough explanation of the\nmechanisms involved, and a full list of config options available."),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"npm config")," command can be used to update and edit the contents\nof the user and global npmrc files."),Object(l.b)("h3",null,"Sub-commands"),Object(l.b)("p",null,"Config supports the following sub-commands:"),Object(l.b)("h4",null,"set"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm config set key=value [key=value...]\nnpm set key=value [key=value...]\n")),Object(l.b)("p",null,"Sets each of the config keys to the value provided."),Object(l.b)("p",null,"If value is omitted, then it sets it to an empty string."),Object(l.b)("p",null,"Note: for backwards compatibility, ",Object(l.b)("inlineCode",{parentName:"p"},"npm config set key value")," is supported\nas an alias for ",Object(l.b)("inlineCode",{parentName:"p"},"npm config set key=value"),"."),Object(l.b)("h4",null,"get"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm config get [key ...]\nnpm get [key ...]\n")),Object(l.b)("p",null,"Echo the config value(s) to stdout."),Object(l.b)("p",null,"If multiple keys are provided, then the values will be prefixed with the\nkey names."),Object(l.b)("p",null,"If no keys are provided, then this command behaves the same as ",Object(l.b)("inlineCode",{parentName:"p"},"npm config\nlist"),"."),Object(l.b)("h4",null,"list"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm config list\n")),Object(l.b)("p",null,"Show all the config settings. Use ",Object(l.b)("inlineCode",{parentName:"p"},"-l")," to also show defaults. Use ",Object(l.b)("inlineCode",{parentName:"p"},"--json"),"\nto show the settings in json format."),Object(l.b)("h4",null,"delete"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm config delete key [key ...]\n")),Object(l.b)("p",null,"Deletes the specified keys from all configuration files."),Object(l.b)("h4",null,"edit"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm config edit\n")),Object(l.b)("p",null,"Opens the config file in an editor.  Use the ",Object(l.b)("inlineCode",{parentName:"p"},"--global")," flag to edit the\nglobal config."),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"json")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Whether or not to output JSON data, rather than the normal output."),Object(l.b)("p",null,"Not supported by all npm commands."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"global")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,'Operates in "global" mode, so that packages are installed into the ',Object(l.b)("inlineCode",{parentName:"p"},"prefix"),"\nfolder instead of the current working directory. See\n",Object(l.b)("a",{parentName:"p",href:"/cli/v7/configuring-npm/folders"},"folders")," for more on the differences in behavior."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"packages are installed into the ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/lib/node_modules")," folder, instead\nof the current working directory."),Object(l.b)("li",{parentName:"ul"},"bin files are linked to ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/bin")),Object(l.b)("li",{parentName:"ul"},"man pages are linked to ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/share/man"))),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"editor")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: The EDITOR or VISUAL environment variables, or 'notepad.exe' on\nWindows, or 'vim' on Unix systems"),Object(l.b)("li",{parentName:"ul"},"Type: String")),Object(l.b)("p",null,"The command to run for ",Object(l.b)("inlineCode",{parentName:"p"},"npm edit")," and ",Object(l.b)("inlineCode",{parentName:"p"},"npm config edit"),"."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"long")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Show extended information in ",Object(l.b)("inlineCode",{parentName:"p"},"ls"),", ",Object(l.b)("inlineCode",{parentName:"p"},"search"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"help-search"),"."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/folders"},"npm folders")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-config"},"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/package-json"},"package.json")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/npmrc"},"npmrc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm"},"npm"))))}b.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),b=n("pD55"),m=n("8Aig"),p=n("ReZb"),s=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var f=function(e){var t=e.children;return r.a.createElement("strong",null,t)},h=n("gnlW"),g=n("mwnC"),O=n("/Rw0"),j=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var v=N,k=n("MfeC");function E(e){var t=k.a.getPath(e.location.pathname),n=k.a.getVariantAndPage(e.root,t);if(!n)return null;var a=k.a.getVariantsForPage(e.root,n.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},i)))}E.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=E,w=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,N=o.description,E=o.status,D=o.source,W=o.additionalContributors,z=void 0===W?[]:W,B=k.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:p.a,Note:s.a,Prompt:d,PromptReply:f,Screenshot:h.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(b.a,{title:y,description:N}),r.a.createElement(m.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(w,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(g.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),N))),null!=B?r.a.createElement(S,null,r.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:B,location:a})):null),n.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(v,{items:n.tableOfContents.items})):null,r.a.createElement(T,null,E||D?r.a.createElement(l.k,{mb:3,alignItems:"center"},E?r.a.createElement(j.a,{status:E}):null,r.a.createElement(l.e,{mx:"auto"}),D?r.a.createElement(O.a,{href:D}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(z.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-config-md-0d7accb3f480a024f152.js.map