webpackJsonp([13],{142:function(e,t,o){var s,n;o(400),s=o(381),n=o(409),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},173:function(e,t,o){var s,n;o(194),s=o(192),n=o(195),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},192:90,193:function(e,t,o){t=e.exports=o(136)(),t.push([e.id,".c-pane{margin:1rem}","",{version:3,sources:["/./src/themes/default/components/pane.css"],names:[],mappings:"AAAA,QACE,WAAa,CACd",file:"pane.css",sourcesContent:[".c-pane {\n  margin: 1rem;\n}\n"],sourceRoot:"webpack://"}])},194:function(e,t,o){var s=o(193);"string"==typeof s&&(s=[[e.id,s,""]]);o(137)(s,{});s.locals&&(e.exports=s.locals)},195:function(e,t){e.exports="<div :class=\"['c-pane', class]\"> <slot></slot> </div>"},245:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{"class":{type:String,"default":""},direction:{type:String,"default":"row"}}}},246:90,258:function(e,t,o){t=e.exports=o(136)(),t.push([e.id,".c-flex-box{margin:.5rem -.5rem;display:flex;flex-direction:row}.c-flex-box.column{flex-direction:column}","",{version:3,sources:["/./src/themes/default/components/flex-box.css"],names:[],mappings:"AAAA,YACE,oBAAuB,AACvB,aAAc,AACd,kBAAmB,CACpB,AACD,mBACE,qBAAsB,CACvB",file:"flex-box.css",sourcesContent:[".c-flex-box {\n  margin: 0.5rem -0.5rem;\n  display: flex;\n  flex-direction: row\n}\n.c-flex-box.column {\n  flex-direction: column\n}\n"],sourceRoot:"webpack://"}])},259:function(e,t,o){t=e.exports=o(136)(),t.push([e.id,".c-flex-item{margin:.5rem;flex:auto}","",{version:3,sources:["/./src/themes/default/components/flex-item.css"],names:[],mappings:"AAAA,aACE,aAAe,AACf,SAAW,CACZ",file:"flex-item.css",sourcesContent:[".c-flex-item {\n  margin: 0.5rem;\n  flex: auto;\n}\n"],sourceRoot:"webpack://"}])},266:function(e,t,o){var s=o(258);"string"==typeof s&&(s=[[e.id,s,""]]);o(137)(s,{});s.locals&&(e.exports=s.locals)},267:function(e,t,o){var s=o(259);"string"==typeof s&&(s=[[e.id,s,""]]);o(137)(s,{});s.locals&&(e.exports=s.locals)},272:function(e,t){e.exports="<div :class=\"['c-flex-box', class, direction]\"> <slot></slot> </div>"},273:function(e,t){e.exports="<div :class=\"['c-flex-item', class]\"> <slot></slot> </div>"},278:function(e,t,o){var s,n;o(266),s=o(245),n=o(272),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},279:function(e,t,o){var s,n;o(267),s=o(246),n=o(273),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},341:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{"class":{type:String,"default":""},src:{type:String,"default":"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="},alt:{type:String,"default":""},title:{type:String,"default":""},width:{type:Number,"default":""},height:{type:Number,"default":""}}}},346:function(e,t,o){t=e.exports=o(136)(),t.push([e.id,".c-image{display:flex;align-items:center;text-align:center;justify-content:center}","",{version:3,sources:["/./src/themes/default/components/image.css"],names:[],mappings:"AAAA,SACE,aAAc,AACd,mBAAoB,AACpB,kBAAmB,AACnB,sBAAwB,CAOzB",file:"image.css",sourcesContent:['.c-image {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  /*&:after {\n    content: "\\20";\n    height: 100%;\n    display: inline-block;\n    vertical-align: middle;\n  }*/\n}\n\n.c-image-img {\n  /*display: inline-block;*/\n  /*vertical-align: middle;*/\n}\n'],sourceRoot:"webpack://"}])},352:function(e,t,o){var s=o(346);"string"==typeof s&&(s=[[e.id,s,""]]);o(137)(s,{});s.locals&&(e.exports=s.locals)},363:function(e,t){e.exports="<div :class=\"['c-image', class]\"> <img class=c-image-img :src=src :width=width :height=height :alt=alt :title=title> </div>"},372:function(e,t,o){var s,n;o(352),s=o(341),n=o(363),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},381:function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(372),i=s(n),c=o(173),r=s(c),l=o(278),a=s(l),p=o(279),f=s(p);t["default"]={components:{CImage:i["default"],Pane:r["default"],FlexBox:a["default"],FlexItem:f["default"]}}},395:function(e,t,o){t=e.exports=o(136)(),t.push([e.id,".demo-misc .c-flex-box,.demo-misc .c-pane{background-color:#e6e6e6}.demo-misc .c-flex-item{background-color:#ccc}","",{version:3,sources:["/./src/themes/default/views/demo-misc.css"],names:[],mappings:"AAKA,0CACI,wBAAoC,CACvC,AACD,wBACI,qBAAoC,CACvC",file:"demo-misc.css",sourcesContent:[".demo-misc {\n}\n.demo-misc .c-pane {\n    background-color: rgb(230, 230, 230)\n}\n.demo-misc .c-flex-box {\n    background-color: rgb(230, 230, 230)\n}\n.demo-misc .c-flex-item {\n    background-color: rgb(204, 204, 204)\n}\n"],sourceRoot:"webpack://"}])},400:function(e,t,o){var s=o(395);"string"==typeof s&&(s=[[e.id,s,""]]);o(137)(s,{});s.locals&&(e.exports=s.locals)},409:function(e,t){e.exports="<div class=demo-misc> <c-image src=images/logo.png></c-image> <pane>pane</pane> <flex-box> <flex-item>flex-item-1</flex-item> <flex-item>flex-item-2</flex-item> <flex-item>flex-item-3</flex-item> </flex-box> </div>"}});
//# sourceMappingURL=13.b4f78074cc088a763571.js.map