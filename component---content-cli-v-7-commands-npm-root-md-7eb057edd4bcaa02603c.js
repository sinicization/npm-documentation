(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),m=n("pD55"),b=n("8Aig"),u=n("ReZb"),p=n("GCVy"),s=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var f=function(e){var t=e.children;return r.a.createElement("strong",null,t)},h=n("gnlW"),g=n("mwnC"),O=n("/Rw0"),y=n("dVM4"),j=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function E(e){var t=e.items,n=e.depth;return r.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(E,{items:e.items,depth:n+1}):null)})))}E.defaultProps={depth:0};var x=E,v=n("MfeC");function N(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),o.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,i.variant.title),r.a.createElement(N.Menu,{direction:e.direction,width:e.menuWidth},o)))}N.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=N,_=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),w=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,j=i.title,E=i.description,N=i.status,G=i.source,H=i.additionalContributors,A=void 0===H?[]:H,D=v.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:u.a,Note:p.a,Prompt:d,PromptReply:f,Screenshot:h.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(m.a,{title:j,description:E}),r.a.createElement(b.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(_,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(g.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),r.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(w,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},j),E))),null!=D?r.a.createElement(S,null,r.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:D,location:a})):null),n.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(x,{items:n.tableOfContents.items})):null,r.a.createElement(z,null,N||G?r.a.createElement(l.k,{mb:3,alignItems:"center"},N?r.a.createElement(y.a,{status:N}):null,r.a.createElement(l.e,{mx:"auto"}),G?r.a.createElement(O.a,{href:G}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:o.b,mr:2}):r.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(x,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(s.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(A.map((function(e){return{login:e}})))}))))))}},xLAN:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),o=n("O6H6"),i={},r={_frontmatter:i},c=o.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm root [-g]\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"Print the effective ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder to standard out."),Object(l.b)("p",null,"Useful for using npm in shell scripts that do things with the\n",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder.  For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\nglobal_node_modules="$(npm root --global)"\necho "Global packages installed in: ${global_node_modules}"\n')),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"global")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,'Operates in "global" mode, so that packages are installed into the ',Object(l.b)("inlineCode",{parentName:"p"},"prefix"),"\nfolder instead of the current working directory. See\n",Object(l.b)("a",{parentName:"p",href:"/cli/v7/configuring-npm/folders"},"folders")," for more on the differences in behavior."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"packages are installed into the ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/lib/node_modules")," folder, instead\nof the current working directory."),Object(l.b)("li",{parentName:"ul"},"bin files are linked to ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/bin")),Object(l.b)("li",{parentName:"ul"},"man pages are linked to ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/share/man"))),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-prefix"},"npm prefix")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-bin"},"npm bin")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/folders"},"npm folders")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-config"},"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/npmrc"},"npmrc"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-root-md-7eb057edd4bcaa02603c.js.map