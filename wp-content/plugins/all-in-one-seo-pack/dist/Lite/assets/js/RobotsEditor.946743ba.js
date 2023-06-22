import{c as k}from"./WpTable.36ecda37.js";import{n as S}from"./vueComponentNormalizer.67c9b86e.js";import"./index.7b63dad7.js";import{S as C}from"./SaveChanges.68e73792.js";import{a as O,c as x,m as N,b as E}from"./vuex.esm.19624049.js";import{B as P}from"./Editor.10476612.js";import{B as L}from"./Radio.955e0694.js";import{C as T,a as A}from"./index.81e35b24.js";import{C as U}from"./Card.efd2e18e.js";import{C as J}from"./Caret.eeb84d06.js";import{C as I}from"./NetworkSiteSelector.c5f8d5c1.js";import{C as D}from"./SettingsRow.d7400549.js";import{C as j}from"./Tooltip.d723c3c3.js";import{S as z}from"./Plus.92a90910.js";import{S as B}from"./External.98cc7a29.js";import"./helpers.a2b0759e.js";import"./attachments.e5102eba.js";import"./cleanForSlug.7a45fb51.js";import"./isArrayLikeObject.5268a676.js";import"./constants.8bff9f56.js";import"./default-i18n.0e73c33c.js";import"./html.bcbe747e.js";import"./Index.cb09fd7a.js";import"./_commonjsHelpers.10c44588.js";import"./Checkmark.cdcd77fe.js";import"./client.90beecd8.js";import"./translations.3bc9d58c.js";import"./portal-vue.esm.18ed59c3.js";import"./Slide.9538a421.js";import"./Row.2d17f2cd.js";const $=t=>{const o=[];return Object.keys(t).forEach(s=>{const r=t[s];o.push(`User-agent: ${s}`),Object.keys(r).forEach(e=>{r[e].forEach(i=>{o.push(`${e.charAt(0).toUpperCase()+e.slice(1)}: ${i}`)})}),o.push("")}),o.join(`\r
`)},h=(t,o=!1)=>{const s={};return t.forEach(r=>{const e=JSON.parse(r);if(e.userAgent===null||e.directoryPath===null)return;s[e.userAgent]||(s[e.userAgent]={allow:[],disallow:[]});let n=!1;s[e.userAgent][e.rule].forEach(i=>{i===e.directoryPath&&(n=!0)}),!(n&&!o)&&s[e.userAgent][e.rule].push(e.directoryPath)}),s},p=(t,o,s=!1,r=!1)=>{for(const e in o){if(!e)continue;if(!(e in t)){t[e]=R(o[e],o[e],s,r);continue}R(t[e],o[e],s,r,!0);const n=[...t[e].allow,...o[e].allow];t[e].allow=s?n:v(n);const i=[...t[e].disallow,...o[e].disallow];t[e].disallow=s?i:v(i)}return t},R=(t,o,s,r,e=!1)=>{const n=(i,c,a,d,b,l=!1)=>{const f=i==="allow"?"disallow":"allow";return a[i].forEach((m,w)=>{const _=c[f].indexOf(m);if(_!==-1&&(b?c[f].splice(_,1):d||a[i].splice(w,1)),l){const g="^"+m.replace(/./g,"\\.").replace(/\//g,"\\/").replace(/\*/g,"(.*)").replace(/\?/,"\\?")+"$";(c.allow.some(u=>u&&u.match(g))||c.disallow.some(u=>u&&u.match(g)))&&(d||a[i].splice(w,1))}}),[c,a]};return[t,o]=n("disallow",t,o,s,r,e),[t,o]=n("allow",t,o,s,r,e),t},v=t=>{const o=t.concat();for(let s=0;s<o.length;++s)for(let r=s+1;r<o.length;++r)o[s]===o[r]&&o.splice(r--,1);return o};var F=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"aioseo-tools-robots-editor"},[s("core-card",{attrs:{slug:"robotsEditor","header-text":t.strings.robotsEditor}},[t.$aioseo.data.isNetworkAdmin&&!t.isUnlicensed&&t.$license.hasCoreFeature("tools","network-tools-robots")?s("div",{staticClass:"aioseo-settings-row"},[s("div",{staticClass:"select-site"},[t._v(" "+t._s(t.strings.selectSite)+" ")]),s("core-network-site-selector",{attrs:{"show-network":""},on:{"selected-site":function(r){t.site=r}}})],1):t._e(),s("div",{staticClass:"robots-background"},[t.siteLoading?s("div",{staticClass:"loader-overlay"},[s("core-loader")],1):t._e(),s("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t.isNetwork?s("core-alert",{attrs:{type:"blue"}},[t._v(" "+t._s(t.isUnlicensed||!t.$license.hasCoreFeature("tools","network-tools-robots")?t.strings.networkAlertLite:t.strings.networkAlert)+" ")]):t._e(),t._v(" "+t._s(t.strings.description)+" "),s("br"),s("br"),t._v(" "+t._s(t.strings.description2)+" "),s("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"robotsEditor",!0))}})],1),t.$aioseo.data.robots.hasPhysicalRobots&&t.getOptions.robotsDetected?s("div",{staticClass:"aioseo-settings-row physical-robots"},[s("core-alert",{attrs:{type:"red","show-close":""},on:{"close-alert":t.hideRobotsDetected}},[t._v(" "+t._s(t.strings.physicalRobotsFound)+" "),s("div",{staticClass:"buttons"},[s("base-button",{attrs:{type:"blue",size:"medium",loading:t.importLoading},on:{click:t.importAndDeleteRobots}},[t._v(" "+t._s(t.strings.importAndDelete)+" ")]),s("base-button",{attrs:{type:"blue",size:"medium",loading:t.deleteLoading},on:{click:t.deleteRobots}},[t._v(" "+t._s(t.strings.delete)+" ")])],1)])],1):t._e(),t.$aioseo.data.robots.rewriteExists?t._e():s("div",{staticClass:"aioseo-settings-row rewrite-exists"},[s("core-alert",{attrs:{type:"red"},domProps:{innerHTML:t._s(t.missingRewriteRules)}})],1),s("core-settings-row",{attrs:{name:t.$constants.GLOBAL_STRINGS.preview,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"aioseo-sitemap-preview"},[s("base-button",{attrs:{size:"medium",type:"blue",tag:"a",href:t.robotsTxtUrl,target:"_blank"}},[s("svg-external"),t._v(" "+t._s(t.strings.openRobotsTxt)+" ")],1)],1)]},proxy:!0}])}),t.isValidRobotsSite?s("core-settings-row",{attrs:{name:t.strings.enableCustomRobots},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-toggle",{model:{value:t.getOptions.enable,callback:function(r){t.$set(t.getOptions,"enable",r)},expression:"getOptions.enable"}})]},proxy:!0}],null,!1,3370567996)}):t._e(),t.isValidRobotsSite?t._e():s("core-alert",{attrs:{type:"blue"},domProps:{innerHTML:t._s(t.subdirectoryAlert)}}),t.isValidRobotsSite?s("div",{staticClass:"aioseo-settings-row"},[s("div",{staticClass:"settings-content"},[this.hasErrors?s("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.strings.duplicateOrInvalid)+" ")]):t._e(),s("div",{staticClass:"robots-table"},[s("div",{staticClass:"robots-header"},[s("div",{staticClass:"robots-user-agent"},[t._v(t._s(t.strings.userAgent))]),s("div",{staticClass:"robots-rule"},[t._v(t._s(t.strings.rule))]),s("div",{staticClass:"robots-directory-path"},[t._v(t._s(t.strings.directoryPath))]),s("div",{staticClass:"robots-actions"})]),s("div",{staticClass:"robots-rows"},t._l(t.parsedRules,function(r,e){return s("div",{key:e,staticClass:"robots-row",class:{even:e%2===0}},[s("div",{staticClass:"robots-user-agent"},[s("base-input",{ref:"userAgent",refInFor:!0,class:t.hasError(r.userAgent+r.rule+r.directoryPath),attrs:{value:r.userAgent,size:"medium",placeholder:t.strings.userAgentPlaceholder,disabled:!t.getOptions.enable},on:{blur:function(n){return t.updateRule("userAgent",n,e)}}})],1),s("div",{staticClass:"robots-rule"},[s("base-radio",{ref:"allow",refInFor:!0,attrs:{name:`rule-${e}`,value:r.rule==="allow",disabled:!t.getOptions.enable,size:"medium",type:2},on:{input:function(n){return t.updateRule("rule","allow",e)}}},[t._v(" "+t._s(t.strings.allow)+" ")]),s("base-radio",{ref:"disallow",refInFor:!0,attrs:{name:`rule-${e}`,value:r.rule==="disallow",disabled:!t.getOptions.enable,size:"medium",type:2},on:{input:function(n){return t.updateRule("rule","disallow",e)}}},[t._v(" "+t._s(t.strings.disallow)+" ")])],1),s("div",{staticClass:"robots-directory-path"},[s("base-input",{key:t.inputKey,class:t.hasError(r.userAgent+r.rule+r.directoryPath),attrs:{value:r.directoryPath,size:"medium",placeholder:t.strings.directoryPathPlaceholder,disabled:!t.getOptions.enable},on:{blur:function(n){return t.updateRule("directoryPath",n,e)}}})],1),s("div",{staticClass:"robots-actions"},[t.getOptions.enable?s("core-tooltip",{attrs:{type:"action"},scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.strings.deleteRule)+" ")]},proxy:!0}],null,!0)},[s("svg-trash",{nativeOn:{click:function(n){return n.stopPropagation(),t.removeRow(e)}}})],1):t._e()],1)])}),0)]),s("base-button",{attrs:{type:"blue",size:"medium",disabled:!t.getOptions.enable},on:{click:t.addRow}},[s("svg-circle-plus"),t._v(" "+t._s(t.strings.addRule)+" ")],1)],1)]):t._e(),t.isValidRobotsSite?s("div",{staticClass:"aioseo-settings-row"},[s("div",{staticClass:"settings-name"},[s("div",{staticClass:"name"},[t._v(t._s(t.strings.robotsPreview))])]),s("div",{staticClass:"settings-content"},[s("base-editor",{attrs:{value:t.robotsTxt,"line-numbers":!0,"minimum-line-numbers":13,disabled:"","force-updates":"",monospace:""}})],1)]):t._e()],1)])],1)},M=[];const V={userAgent:null,rule:"allow",directoryPath:null},W={components:{BaseEditor:P,BaseRadio:L,CoreAlert:T,CoreCard:U,CoreLoader:J,CoreNetworkSiteSelector:I,CoreSettingsRow:D,CoreTooltip:j,SvgCirclePlus:z,SvgExternal:B,SvgTrash:A},mixins:[k,C],data(){return{site:{},inputKey:0,importLoading:!1,deleteLoading:!1,siteLoading:!1,isNetwork:!1,errors:{},strings:{selectSite:this.$t.__("Select Site",this.$td),networkAlert:this.$t.__("These custom robots.txt rules will apply globally to your entire network. To make adjust the robots.txt rules for an individual site, please choose it in the list above.",this.$td),networkAlertLite:this.$t.__("These custom robots.txt rules will apply globally to your entire network. To make adjust the robots.txt rules for an individual site, please visit the dashboard for that site directly and upate the settings there.",this.$td),robotsEditor:this.$t.__("Robots.txt Editor",this.$td),description:this.$t.sprintf(this.$t.__("The robots.txt editor in %1$s allows you to set up a robots.txt file for your site that will override the default robots.txt file that WordPress creates. By creating a robots.txt file with %2$s you have greater control over the instructions you give web crawlers about your site.",this.$td),"AIOSEO","AIOSEO"),description2:this.$t.sprintf(this.$t.__("Just like WordPress, %1$s generates a dynamic file so there is no static file to be found on your server.  The content of the robots.txt file is stored in your WordPress database.",this.$td),"All in One SEO"),enableCustomRobots:this.$t.__("Enable Custom Robots.txt",this.$td),duplicateOrInvalid:this.$t.__("Duplicate or invalid entries have been detected! Please check your rules and try again.",this.$td),userAgent:this.$t.__("User Agent",this.$td),rule:this.$t.__("Rule",this.$td),directoryPath:this.$t.__("Directory Path",this.$td),allow:this.$t.__("Allow",this.$td),disallow:this.$t.__("Disallow",this.$td),addRule:this.$t.__("Add Rule",this.$td),deleteRule:this.$t.__("Delete Rule",this.$td),robotsPreview:this.$t.__("Robots.txt Preview:",this.$td),openRobotsTxt:this.$t.__("Open Robots.txt",this.$td),physicalRobotsFound:this.$t.sprintf(this.$t.__("%1$s has detected a physical robots.txt file in the root folder of your WordPress installation. We recommend removing this file as it could cause conflicts with WordPress' dynamically generated one. %2$s can import this file and delete it, or you can simply delete it.",this.$td),"AIOSEO","AIOSEO"),importAndDelete:this.$t.__("Import and Delete",this.$td),delete:this.$t.__("Delete",this.$td)}}},watch:{networkRobots:{deep:!0,async handler(){if(this.validateRules(),await this.$nextTick(),this.isNetwork){this.$set(this.networkOptions.tools.robots,"rules",this.networkRobots.rules);return}this.$set(this.options.tools.robots,"rules",this.networkRobots.rules)}},site(t,o){this.isNetwork=!1,t.blog_id==="network"&&(this.isNetwork=!0),o.blog_id&&this.processFetchSiteRobots()},"getOptions.enable"(){this.validateRules()}},computed:{...O(["options","networkRobots","networkOptions"]),...x(["getNetworkRobots","isUnlicensed"]),isValidRobotsSite(){return this.$aioseo.data.subdomain||this.isNetwork||this.isMainSite(this.site.domain,this.site.path)||!this.$aioseo.data.isNetworkAdmin&&this.$aioseo.data.mainSite},robotsTxtUrl(){return this.site.blog_id==="network"||!this.isValidRobotsSite||!this.site.domain?this.$aioseo.urls.robotsTxtUrl:`${this.$aioseo.data.isSsl?"https://":"http://"}${this.site.domain}${this.site.path}robots.txt`},getOptions(){return this.isNetwork?this.getNetworkRobots:this.options.tools.robots},parsedRules(){return this.networkRobots.rules.map(t=>JSON.parse(t))},robotsTxt(){const t=JSON.parse(JSON.stringify(this.$aioseo.data.isMultisite&&this.$aioseo.networkOptions.tools.robots.enable&&!this.isNetwork?h(this.getNetworkRobots.rules):{})),o=JSON.parse(JSON.stringify(this.$aioseo.data.robots.defaultRules)),s=`\r
`+this.$aioseo.data.robots.sitemapUrls.filter(r=>0<r.length).join(`\r
`);return this.getOptions.enable?$(p({...o},p({...t},h(this.networkRobots.rules)),!1,!0))+s:$(p({...o},{...t}))+s},hasErrors(){return Object.keys(this.errors).length},subdirectoryAlert(){return this.$t.sprintf(this.$t.__("This site is running in a sub-directory of your main site located at %1$s. Your robots.txt file should only appear in the root directory of that site.",this.$td),'<a href="'+this.$aioseo.urls.mainSiteUrl+'" target="_blank"><strong>'+this.$aioseo.urls.mainSiteUrl+"</strong></a>")},missingRewriteRules(){const t=this.$t.__("It looks like you are missing the proper rewrite rules for the robots.txt file.",this.$td);let o="";return this.$aioseo.data.server.apache?o=this.$t.sprintf(this.$t.__("It appears that your server is running on Apache, so the fix should be as simple as checking the %1$scorrect .htaccess implementation on wordpress.org%2$s.",this.$td),'<a href="https://wordpress.org/support/article/htaccess/" target="_blank">',"</a>"):this.$aioseo.data.server.nginx&&(o=o=this.$t.sprintf(this.$t.__("It appears that your server is running on nginx, so the fix will most likely require adding the correct rewrite rules to our nginx configuration. %1$sCheck our documentation for more information%2$s.",this.$td),'<a href="'+this.$links.getDocUrl("robotsRewrite")+'" target="_blank">',"</a>")),t+" "+o}},methods:{...N(["processButtonAction","fetchSiteRobots"]),...E(["updateNetworkRobots"]),processFetchSiteRobots(){this.siteLoading=!0,this.fetchSiteRobots(this.site.blog_id).then(()=>{this.networkRobots.rules.length||this.addRow()}).then(()=>this.siteLoading=!1)},removeRow(t){this.$delete(this.networkRobots.rules,t),this.networkRobots.rules.length||this.addRow(),this.validateRules()},addRow(){!this.isValidRobotsSite||(this.networkRobots.rules.push(JSON.stringify({...V})),this.$nextTick(()=>{this.$refs.userAgent[this.networkRobots.rules.length-1].$el.querySelector(".robots-user-agent input").focus()}))},updateRule(t,o,s){const r=JSON.parse(this.networkRobots.rules[s]);r[t]=o,this.$set(this.networkRobots.rules,s,JSON.stringify(r)),t==="directoryPath"&&(r[t]=this.sanitizePath(o),this.inputKey++,this.$set(this.networkRobots.rules,s,JSON.stringify(r))),this.validateRules(),t==="rule"&&this.$nextTick(()=>this.$refs[o][s].$el.querySelector("input").focus())},sanitizePath(t){return t.slice(t.length-1)!=="*"&&!t.includes(".")&&(t=this.$links.trailingSlashIt(t)),t.charAt(0)!=="/"&&(t="/"+t),t.toLowerCase()},hasError(t){return this.errors[t]?"aioseo-error":""},validateRules(){if(this.errors={},!this.getOptions.enable)return;const t={},o=JSON.parse(JSON.stringify(this.$aioseo.data.isMultisite&&!this.isNetwork?h(this.getNetworkRobots.rules):{})),s=JSON.parse(JSON.stringify(this.$aioseo.data.robots.defaultRules)),r=p({...s},h(this.networkRobots.rules,!0),!0);Object.keys(r).forEach(i=>{const c=r[i];t[i]||(t[i]={allow:[],disallow:[]}),c.allow.forEach(a=>{if(t[i].allow.includes(a)){this.errors[i+"allow"+a]=!0;return}t[i].allow.push(a)}),c.disallow.forEach(a=>{if(t[i].disallow.includes(a)){this.errors[i+"disallow"+a]=!0;return}t[i].disallow.push(a)})});const e={},n=p({...o},h(this.networkRobots.rules,!0),!0);Object.keys(n).forEach(i=>{const c=n[i];e[i]||(e[i]={allow:[],disallow:[]}),c.allow.forEach(a=>{if(e[i].allow.includes(a)){this.errors[i+"allow"+a]=!0;return}else if(e[i].disallow.includes(a)){this.errors[i+"allow"+a]=!0,this.errors[i+"disallow"+a]=!0;return}const d="^"+a.replace(".","\\.").replace("/","\\/").replace("*","(.*)")+"$";if(e[i].allow.some(l=>l&&l.match(d))||e[i].disallow.some(l=>l&&l.match(d))){this.errors[i+"allow"+a]=!0,this.errors[i+"disallow"+a]=!0;return}e[i].allow.push(a)}),c.disallow.forEach(a=>{if(e[i].disallow.includes(a)){this.errors[i+"disallow"+a]=!0;return}else if(e[i].allow.includes(a)){this.errors[i+"allow"+a]=!0,this.errors[i+"disallow"+a]=!0;return}const d="^"+a.replace(".","\\.").replace("/","\\/").replace("*","(.*)")+"$";if(e[i].allow.some(l=>l&&l.match(d))||e[i].disallow.some(l=>l&&l.match(d))){this.errors[i+"allow"+a]=!0,this.errors[i+"disallow"+a]=!0;return}e[i].disallow.push(a)})})},importAndDeleteRobots(){this.importLoading=!0,this.processButtonAction("tools/import-robots-txt").then(()=>{window.location.reload()})},deleteRobots(){this.deleteLoading=!0,this.processButtonAction("tools/delete-robots-txt").then(()=>{window.location.reload()})},hideRobotsDetected(){this.getOptions.robotsDetected=!1,this.saveChanges()}},created(){this.$aioseo.data.isNetworkAdmin&&(this.isNetwork=!0)},mounted(){this.validateRules(),this.networkRobots.rules.length||this.addRow();const t=this.isNetwork?this.getNetworkRobots.rules:this.options.tools.robots.rules;t.length&&this.updateNetworkRobots(t)}},y={};var G=S(W,F,M,!1,q,null,null,null);function q(t){for(let o in y)this[o]=y[o]}const St=function(){return G.exports}();export{St as default};
