webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/navbar.module.sass":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/navbar.module.sass ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/*NAV*/\\n.navbar_nav__20LTb {\\n  height: 1em;\\n  width: 100%;\\n  position: relative;\\n}\\n.navbar_nav__20LTb .navbar_navBtn__1SLYr {\\n  display: none;\\n}\\n.navbar_nav__20LTb .navbar_navLinks__327KO {\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex;\\n  -webkit-justify-content: flex-end;\\n     -moz-box-pack: end;\\n          justify-content: flex-end;\\n  font-size: 22px;\\n}\\n.navbar_nav__20LTb .navbar_navLinks__327KO > a {\\n  display: inline-block;\\n  text-decoration: none;\\n  color: rgba(255, 255, 255, 0.7);\\n  color: #fff;\\n  text-decoration: none;\\n  letter-spacing: 3px;\\n  font-size: 20px;\\n  background-color: #308815;\\n  padding: 0.15em 0.4em;\\n  -moz-border-radius: 0.7em;\\n       border-radius: 0.7em;\\n  line-height: 2em;\\n  margin: 2em 3em 2em 0;\\n}\\n.navbar_nav__20LTb .navbar_navLinks__327KO > a:hover {\\n  background-color: rgba(0, 0, 0, 0.3);\\n}\\n.navbar_nav__20LTb #navbar_navCheck__3UfHp {\\n  display: none;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://navbar.module.sass\"],\"names\":[],\"mappings\":\"AAAA,MAAA;AACA;EACI,WAAA;EACA,WAAA;EACA,kBAAA;AACJ;AACI;EACI,aAAA;AACR;AACI;EACI,qBAAA;EAAA,iBAAA;EAAA,aAAA;EACA,iCAAA;KAAA,kBAAA;UAAA,yBAAA;EACA,eAAA;AACR;AACI;EACI,qBAAA;EACA,qBAAA;EACA,+BAAA;EACA,WAAA;EACA,qBAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;EACA,qBAAA;EACA,yBAAA;OAAA,oBAAA;EACA,gBAAA;EACA,qBAAA;AACR;AACI;EACI,oCAAA;AACR;AACI;EACI,aAAA;AACR\",\"sourcesContent\":[\"/*NAV*/\\n.nav\\n    height: 1em\\n    width: 100%\\n    position: relative\\n\\n    .navBtn\\n        display: none\\n\\n    .navLinks\\n        display: flex\\n        justify-content: flex-end\\n        font-size: 22px\\n\\n    .navLinks > a\\n        display: inline-block\\n        text-decoration: none\\n        color: rgba(255, 255, 255, 0.7)\\n        color: #fff\\n        text-decoration: none\\n        letter-spacing: 3px\\n        font-size: 20px\\n        background-color: rgba(48, 136, 21, 255)\\n        padding: 0.15em 0.4em\\n        border-radius: 0.7em\\n        line-height: 2em\\n        margin: 2em 3em 2em 0\\n\\n    .navLinks > a:hover\\n        background-color: rgba(0, 0, 0, 0.3)\\n\\n    #navCheck\\n        display: none\\n\\n//mobile view\\n@mixin mobile-only\\n    @media (max-width : 500px)\\n        @content\\n\\n        .logo a\\n            font-size: 24px\\n\\n        .nav > .navBtn\\n            display: inline-block\\n            position: absolute\\n            right: 0px\\n            top: 0px\\n            background-color: rgba(48, 136, 21, 255)\\n            border-radius: 5px\\n            z-index: 999\\n\\n            >label &\\n                width: 2em\\n                height: 2em\\n                padding: 0.5em\\n                border-radius: 5px\\n                display: flex\\n                justify-content: center\\n                align-items: center\\n                flex-direction: column\\n\\n            >label:hover,.nav #navCheck:checked ~ .navBtn > label\\n                background-color: rgba(3, 2, 2, 0.5)\\n\\n            >label>span &\\n                width: 25px\\n                height: 3px\\n                margin-top: 5px\\n                background-color: #fff\\n\\n        .nav > .navLinks\\n            position: absolute\\n            display: block\\n            width: 100%\\n            background-color: #333\\n            height: 0px\\n            transition: all 0.3s ease-in\\n            overflow-y: hidden\\n            top: 50px\\n            left: 0px\\n            z-index: 99\\n\\n            >a &\\n                display: block\\n                padding-left: 2em\\n                width: 100%\\n\\n        .nav > #navCheck:not(:checked) ~ .navLinks\\n            height: 0px\\n\\n        .nav > #navCheck:checked ~ .nav-links\\n            height: calc(100vh - 50px)\\n            overflow-y: auto\\n\\n        .nav #navCheck:checked ~ .nav-btn > label > .line1\\n            transform: rotate(-45deg) translate(-5px, 6px)\\n            transition: all 0.3s ease\\n\\n        .nav #navCheck:checked ~ .nav-btn > label > .line2\\n            opacity: 0\\n            transition: all 0.3s ease\\n\\n        .nav #navCheck:checked ~ .nav-btn > label > .line3\\n            transform: rotate(45deg) translate(-5px, -6px)\\n            transition: all 0.3s ease\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"nav\": \"navbar_nav__20LTb\",\n\t\"navBtn\": \"navbar_navBtn__1SLYr\",\n\t\"navLinks\": \"navbar_navLinks__327KO\",\n\t\"navCheck\": \"navbar_navCheck__3UfHp\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL25hdmJhci5tb2R1bGUuc2Fzcz8xYzQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxnQ0FBZ0MsZ0JBQWdCLGdCQUFnQix1QkFBdUIsR0FBRyw0Q0FBNEMsa0JBQWtCLEdBQUcsOENBQThDLDBCQUEwQixzQkFBc0Isa0JBQWtCLHNDQUFzQywwQkFBMEIsc0NBQXNDLG9CQUFvQixHQUFHLGtEQUFrRCwwQkFBMEIsMEJBQTBCLG9DQUFvQyxnQkFBZ0IsMEJBQTBCLHdCQUF3QixvQkFBb0IsOEJBQThCLDBCQUEwQiw4QkFBOEIsOEJBQThCLHFCQUFxQiwwQkFBMEIsR0FBRyx3REFBd0QseUNBQXlDLEdBQUcsOENBQThDLGtCQUFrQixHQUFHLE9BQU8sd0ZBQXdGLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsNnZGQUE2dkY7QUFDcm9JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvbmF2YmFyLm1vZHVsZS5zYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypOQVYqL1xcbi5uYXZiYXJfbmF2X18yMExUYiB7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubmF2YmFyX25hdl9fMjBMVGIgLm5hdmJhcl9uYXZCdG5fXzFTTFlyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5uYXZiYXJfbmF2X18yMExUYiAubmF2YmFyX25hdkxpbmtzX18zMjdLTyB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAtbW96LWJveC1wYWNrOiBlbmQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcbi5uYXZiYXJfbmF2X18yMExUYiAubmF2YmFyX25hdkxpbmtzX18zMjdLTyA+IGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDg4MTU7XFxuICBwYWRkaW5nOiAwLjE1ZW0gMC40ZW07XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDAuN2VtO1xcbiAgICAgICBib3JkZXItcmFkaXVzOiAwLjdlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyZW07XFxuICBtYXJnaW46IDJlbSAzZW0gMmVtIDA7XFxufVxcbi5uYXZiYXJfbmF2X18yMExUYiAubmF2YmFyX25hdkxpbmtzX18zMjdLTyA+IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG4ubmF2YmFyX25hdl9fMjBMVGIgI25hdmJhcl9uYXZDaGVja19fM1VmSHAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL25hdmJhci5tb2R1bGUuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxNQUFBO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7QUFDUjtBQUNJO0VBQ0kscUJBQUE7RUFBQSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxpQ0FBQTtLQUFBLGtCQUFBO1VBQUEseUJBQUE7RUFDQSxlQUFBO0FBQ1I7QUFDSTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtPQUFBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUNSO0FBQ0k7RUFDSSxvQ0FBQTtBQUNSO0FBQ0k7RUFDSSxhQUFBO0FBQ1JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypOQVYqL1xcbi5uYXZcXG4gICAgaGVpZ2h0OiAxZW1cXG4gICAgd2lkdGg6IDEwMCVcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXFxuXFxuICAgIC5uYXZCdG5cXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcXG5cXG4gICAgLm5hdkxpbmtzXFxuICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXFxuICAgICAgICBmb250LXNpemU6IDIycHhcXG5cXG4gICAgLm5hdkxpbmtzID4gYVxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNylcXG4gICAgICAgIGNvbG9yOiAjZmZmXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHhcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweFxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OCwgMTM2LCAyMSwgMjU1KVxcbiAgICAgICAgcGFkZGluZzogMC4xNWVtIDAuNGVtXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjdlbVxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJlbVxcbiAgICAgICAgbWFyZ2luOiAyZW0gM2VtIDJlbSAwXFxuXFxuICAgIC5uYXZMaW5rcyA+IGE6aG92ZXJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKVxcblxcbiAgICAjbmF2Q2hlY2tcXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcXG5cXG4vL21vYmlsZSB2aWV3XFxuQG1peGluIG1vYmlsZS1vbmx5XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoIDogNTAwcHgpXFxuICAgICAgICBAY29udGVudFxcblxcbiAgICAgICAgLmxvZ28gYVxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweFxcblxcbiAgICAgICAgLm5hdiA+IC5uYXZCdG5cXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcXG4gICAgICAgICAgICByaWdodDogMHB4XFxuICAgICAgICAgICAgdG9wOiAwcHhcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ4LCAxMzYsIDIxLCAyNTUpXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4XFxuICAgICAgICAgICAgei1pbmRleDogOTk5XFxuXFxuICAgICAgICAgICAgPmxhYmVsICZcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDJlbVxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJlbVxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbVxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHhcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG5cXG4gICAgICAgICAgICA+bGFiZWw6aG92ZXIsLm5hdiAjbmF2Q2hlY2s6Y2hlY2tlZCB+IC5uYXZCdG4gPiBsYWJlbFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDIsIDIsIDAuNSlcXG5cXG4gICAgICAgICAgICA+bGFiZWw+c3BhbiAmXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4XFxuICAgICAgICAgICAgICAgIGhlaWdodDogM3B4XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXFxuXFxuICAgICAgICAubmF2ID4gLm5hdkxpbmtzXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2tcXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzNcXG4gICAgICAgICAgICBoZWlnaHQ6IDBweFxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW5cXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW5cXG4gICAgICAgICAgICB0b3A6IDUwcHhcXG4gICAgICAgICAgICBsZWZ0OiAwcHhcXG4gICAgICAgICAgICB6LWluZGV4OiA5OVxcblxcbiAgICAgICAgICAgID5hICZcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2tcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyZW1cXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcXG5cXG4gICAgICAgIC5uYXYgPiAjbmF2Q2hlY2s6bm90KDpjaGVja2VkKSB+IC5uYXZMaW5rc1xcbiAgICAgICAgICAgIGhlaWdodDogMHB4XFxuXFxuICAgICAgICAubmF2ID4gI25hdkNoZWNrOmNoZWNrZWQgfiAubmF2LWxpbmtzXFxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweClcXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvXFxuXFxuICAgICAgICAubmF2ICNuYXZDaGVjazpjaGVja2VkIH4gLm5hdi1idG4gPiBsYWJlbCA+IC5saW5lMVxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC01cHgsIDZweClcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlXFxuXFxuICAgICAgICAubmF2ICNuYXZDaGVjazpjaGVja2VkIH4gLm5hdi1idG4gPiBsYWJlbCA+IC5saW5lMlxcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlXFxuXFxuICAgICAgICAubmF2ICNuYXZDaGVjazpjaGVja2VkIH4gLm5hdi1idG4gPiBsYWJlbCA+IC5saW5lM1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTVweCwgLTZweClcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibmF2XCI6IFwibmF2YmFyX25hdl9fMjBMVGJcIixcblx0XCJuYXZCdG5cIjogXCJuYXZiYXJfbmF2QnRuX18xU0xZclwiLFxuXHRcIm5hdkxpbmtzXCI6IFwibmF2YmFyX25hdkxpbmtzX18zMjdLT1wiLFxuXHRcIm5hdkNoZWNrXCI6IFwibmF2YmFyX25hdkNoZWNrX18zVWZIcFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/navbar.module.sass\n");

/***/ })

})