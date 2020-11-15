(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-section{\r\n  text-align: center;\r\n}\r\n\r\n.about-heading{\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.about-heading h2{\r\n  font-size: 32px;\r\n}\r\n\r\n.about-heading h3{\r\n  font-size: 22px;\r\n}\r\n\r\n.about-text{\r\n  text-align: center;\r\n}\r\n\r\n.material-icons {\r\n  font-family: 'Material Icons';\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 68px;  /* Preferred icon size */\r\n  display: inline-block;\r\n  line-height: 1;\r\n  text-transform: none;\r\n  letter-spacing: normal;\r\n  word-wrap: normal;\r\n  white-space: nowrap;\r\n  direction: ltr;\r\n\r\n  /* Support for all WebKit browsers. */\r\n  -webkit-font-smoothing: antialiased;\r\n  /* Support for Safari and Chrome. */\r\n  text-rendering: optimizeLegibility;\r\n\r\n  /* Support for Firefox. */\r\n  -moz-osx-font-smoothing: grayscale;\r\n\r\n  /* Support for IE. */\r\n  -webkit-font-feature-settings: 'liga';\r\n          font-feature-settings: 'liga';\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"acerca\" class=\"mat-typography\" [ngStyle.lt-md]=\"{'margin-top': '50px', 'margin-bottom': '50px'}\">\r\n      <div class=\"container\">\r\n\r\n      \t<div class=\"about-section about-heading\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <div>\r\n            <h2 [ngStyle.lt-md]=\"{'margin-bottom': '15px'}\">Acerca de nosotros</h2>\r\n            </div>\r\n            <div>\r\n\t        <h3 [ngStyle.xs]=\"{'font-size': '18px'}\" [ngStyle.sm]=\"{'font-size': '22px'}\">Esto sitio está desarrolladoe con Angular</h3>\r\n\t        </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutWrap=\"nowrap\" fxLayoutGap=\"30px\">\r\n\r\n\t\t      <div fxFlex=\"50\">\r\n\t\t          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" [ngStyle.lt-md]=\"{'padding': '0 60px'}\">\r\n\t\t            <div>\r\n\t\t              <i [ngStyle.lt-md]=\"{'font-size': '48px'}\" class=\"material-icons\">alarm</i>\r\n\t\t            </div>\r\n\t\t            <span fxFlex=\"30px\"></span>\r\n\t\t            <h2 class=\"about-text\">Es tiempo de trabajar con Angular</h2>\r\n\t\t            <span fxFlex=\"10px\"></span>\r\n\t\t            <p class=\"about-text\">Bienvenido a Angular en la materia Diseño Web II</p>\r\n\t\t          </div>\r\n\t\t      </div>\r\n\r\n\t\t      <div fxFlex=\"50\">\r\n\t\t          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" [ngStyle.xs]=\"{'padding': '0 60px'}\">\r\n\t\t            <div>\r\n\t\t              <i [ngStyle.lt-md]=\"{'font-size': '48px'}\" class=\"material-icons\">settings</i>\r\n\t\t            </div>\r\n\t\t            <span fxFlex=\"30px\"></span>\r\n\t\t            <h2 class=\"about-text\">Se puede configurar de muchas maneras</h2>\r\n\t\t            <span fxFlex=\"10px\"></span>\r\n\r\n\t\t            <p class=\"about-text\">Esto es parte del aprendizaje realizado en el curso.</p>\r\n\t\t          </div>\r\n\t\t      </div>\r\n        </div>\r\n      </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* -------------------  ELEVATION ---------------------------  */\r\n\r\n.mat-elevation-z0 {\r\n   position: relative;\r\n   z-index: 2;\r\n}\r\n\r\n.mat-elevation-z8 {\r\n   position: relative;\r\n   z-index: 2;\r\n}\r\n\r\nmat-sidenav{\r\n  left: 0;\r\n  width: 50%\r\n}\r\n\r\n/* -------------------  NAVIGATION ---------------------------  */\r\n\r\n.navigation-toolbar{\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.navigation-fixed{\r\n  display: flex;\r\n  flex-direction: row;\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.navigation-is-mobile .navigation-toolbar {\r\n  position: fixed;\r\n  z-index: 2;\r\n}\r\n\r\nh1.navigation-company-name {\r\n  margin-left: 8px;\r\n}\r\n\r\n.navigation-sidenav-container {\r\n  flex: 1;\r\n}\r\n\r\n.navigation-is-mobile .navigation-sidenav-container {\r\n  flex: 1 0 auto;\r\n}\r\n\r\n.navigation-list{\r\n  padding: 0;\r\n  margin-left: 8px;\r\n}\r\n\r\n.navigation-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.navigation-icon {\r\n  padding: 0 22px;\r\n}\r\n\r\n.navigation-empty{\r\n  height: 56px;\r\n}\r\n\r\n/* -------------------  LOGO ---------------------------  */\r\n\r\n.logo{\r\n\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  box-sizing: border-box;\r\n  padding: 0 16px;\r\n  position: relative;\r\n  height: inherit;\r\n\r\n}\r\n\r\n/* -------------------  LPCONTENT ---------------------------  */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"navigation-toolbar\" [class.navigation-is-mobile]=\"mobileQuery.matches\" [class.mat-elevation-z0]=\"!isActive\" [class.mat-elevation-z8]=\"isActive\" [class.animated-header]=\"!isActivefadeInDown\" [class.fadeInDown]=\"!isActivefadeInDown\" [class.navigation-fixed]=\"!fixedTolbar\">\r\n      <button fxShow=\"true\" fxShow.gt-xs=\"false\" mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\r\n      <a class=\"logo\" fxShow=\"false\" fxShow.gt-xs=\"true\" href=\"#\"><img src=\"assets/img/logo.png\"></a>\r\n      <mat-nav-list class=\"navigation-list\" fxLayout=\"row\" fxShow=\"false\" fxShow.gt-xs=\"true\">\r\n          <a mat-list-item href=\"#acerca\">Acerca de nosotros</a>\r\n          <a mat-list-item href=\"#portfolio\">Ejemplos de Tarjetas</a>\r\n          <a mat-list-item href=\"#blog\">Blog</a>\r\n          <a mat-list-item href=\"#contact\">Contacto</a>\r\n      </mat-nav-list>\r\n      <span class=\"navigation-spacer\"></span>\r\n      <button id=contact-fab-button (click)=\"openDialog()\" mat-mini-fab color=\"primary\" matTooltip=\"Contact Us\" [matTooltipPosition]=\"'left'\"><mat-icon>email</mat-icon></button>\r\n    </mat-toolbar>\r\n\r\n    <div class=\"navigation-empty\" fxShow=\"false\" fxShow.gt-xs=\"true\"></div>\r\n    \r\n    <mat-sidenav-container class=\"navigation-sidenav-container\"\r\n                           [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\r\n      <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\r\n                   [fixedInViewport]=\"mobileQuery.matches\" (opened)=\"setToggleOn()\" (closed)=\"setToggleOff()\">\r\n        <mat-nav-list>\r\n          <a id=\"mobilelogo\" class=\"logo\" fxShow=\"true\" fxShow.gt-xs=\"false\" href=\"#\"><img src=\"assets/img/logo.png\"></a>\r\n          <a mat-list-item href=\"#about\">About</a>\r\n          <a mat-list-item href=\"#portfolio\">Portfolio</a>\r\n          <a mat-list-item href=\"#pricing\">Pricing</a>\r\n          <a mat-list-item href=\"#blog\">Blog</a>\r\n          <a mat-list-item href=\"#contact\">Contact</a>\r\n        </mat-nav-list>\r\n      </mat-sidenav>\r\n\r\n      <mat-sidenav-content nglp-scroll (onScroll)=\"detectScroll($event)\">\r\n\r\n      <app-heading></app-heading>\r\n      <app-about></app-about>\r\n      <app-portfolio></app-portfolio>\r\n      <app-pricing></app-pricing>\r\n      <app-blog></app-blog>\r\n      <app-contact></app-contact>\r\n\r\n      </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _contact_dialog_contact_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-dialog/contact-dialog.component */ "./src/app/contact-dialog/contact-dialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AppComponent = /** @class */ (function () {
    function AppComponent(document, changeDetectorRef, media, dialog) {
        this.dialog = dialog;
        this.isActive = false;
        this.isActivefadeInDown = true;
        this.fixedTolbar = true;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    AppComponent.prototype.detectScroll = function (event) {
        if (event.header) {
            this.isActive = false;
            this.isActivefadeInDown = true;
            this.fixedTolbar = true;
        }
        if (event.bottom) {
            this.isActive = true;
            this.isActivefadeInDown = false;
            this.fixedTolbar = false;
        }
    };
    AppComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_contact_dialog_contact_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ContactDialogComponent"], {
            width: '250px'
        });
    };
    AppComponent.prototype.setToggleOn = function () {
        this.bodyelement = document.getElementById('nglpage');
        this.bodyelement.classList.add("scrollOff");
        this.contactFabButton = document.getElementById('contact-fab-button');
        this.contactFabButton.style.display = "none";
    };
    AppComponent.prototype.setToggleOff = function () {
        this.bodyelement = document.getElementById('nglpage');
        this.bodyelement.classList.remove("scrollOff");
        this.contactFabButton = document.getElementById('contact-fab-button');
        this.contactFabButton.removeAttribute("style");
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/directives.module */ "./src/app/directives/directives.module.ts");
/* harmony import */ var _material2_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material2.module */ "./src/app/material2.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _heading_heading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./heading/heading.component */ "./src/app/heading/heading.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _contact_dialog_contact_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact-dialog/contact-dialog.component */ "./src/app/contact-dialog/contact-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { PricingComponent } from './pricing/pricing.component';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _heading_heading_component__WEBPACK_IMPORTED_MODULE_10__["HeadingComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_11__["BlogComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _contact_dialog_contact_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ContactDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _material2_module__WEBPACK_IMPORTED_MODULE_6__["Material2Module"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__["DirectivesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            entryComponents: [_contact_dialog_contact_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ContactDialogComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#scroll-item{\r\n\tcursor: all-scroll;\r\n}\r\n\r\n.blog-section{\r\n  text-align: center;\r\n}\r\n\r\n.blog-heading{\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.blog-heading h2{\r\n  font-size: 32px;\r\n}\r\n\r\n.blog-heading h3{\r\n  font-size: 22px;\r\n}\r\n\r\n.mat-card{\r\n\tpadding: 0;\r\n}\r\n\r\n.mat-card-image {\r\n\tmargin: 0;\r\n}\r\n\r\n.mat-card-content {\r\n\tpadding: 10px;\r\n}\r\n\r\n.mat-card-content a { \r\n\tcolor: inherit; \r\n}\r\n\r\n.item {\r\n\tmargin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.owl-nav .my-but{\r\n\tbackground-color: red;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"blog\" [ngStyle.lt-md]=\"{'margin-top': '50px', 'margin-bottom': '50px'}\">\r\n    <div class=\"container\">\r\n\t\t      <div class=\"blog-section blog-heading mat-typography\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\t\t            <div>\r\n\t\t            <h2 [ngStyle.lt-md]=\"{'margin-bottom': '15px'}\">Blog</h2>\r\n\t\t            </div>\r\n\t\t            <div>\r\n\t\t\t        <h3 [ngStyle.xs]=\"{'font-size': '18px'}\" [ngStyle.sm]=\"{'font-size': '22px'}\">Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.</h3>\r\n\t\t\t        </div>\r\n\t\t        </div>\r\n\r\n\t\t\t    <div class=\"owl-carousel owl-theme\">\r\n\t\t\t\t    <div id=\"scroll-item\" class=\"item\" [about]>\r\n\t\t\t\t    \t<mat-card>\r\n\t\t\t              <img mat-card-image src=\"assets/img/6.jpg\">\r\n\t\t\t              <mat-card-content>\r\n\t\t\t                <a href=\"#blog\"><h5 class=\"mat-headline\" [ngStyle.sm]=\"{'font-size': '16px'}\">Article Title #1</h5></a>\r\n\t\t\t                <p class=\"mat-subheading-2\" [ngStyle.sm]=\"{'font-size': '12px'}\">\r\n\t\t\t                  Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.\r\n\t\t\t                </p>\r\n\t\t\t                \r\n\t\t\t              </mat-card-content>\r\n\t\t\t            </mat-card>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div id=\"scroll-item\" class=\"item\" [about]>\r\n\t\t\t\t    \t<mat-card>\r\n\t\t\t              <img mat-card-image src=\"assets/img/1.jpg\">\r\n\t\t\t              <mat-card-content>\r\n\t\t\t                <a href=\"#blog\"><h5 class=\"mat-headline\" [ngStyle.sm]=\"{'font-size': '16px'}\">Article Title #2</h5></a>\r\n\t\t\t                <p class=\"mat-subheading-2\" [ngStyle.sm]=\"{'font-size': '12px'}\">\r\n\t\t\t                  Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.\r\n\t\t\t                </p>\r\n\t\t\t                \r\n\t\t\t              </mat-card-content>\r\n\t\t\t            </mat-card>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div id=\"scroll-item\" class=\"item\" [about]>\r\n\t\t\t\t    \t<mat-card>\r\n\t\t\t              <img mat-card-image src=\"assets/img/2.jpg\">\r\n\t\t\t              <mat-card-content>\r\n\t\t\t                <a href=\"#blog\"><h5 class=\"mat-headline\" [ngStyle.sm]=\"{'font-size': '16px'}\">Article Title #3</h5></a>\r\n\t\t\t                <p class=\"mat-subheading-2\" [ngStyle.sm]=\"{'font-size': '12px'}\">\r\n\t\t\t                  Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.\r\n\t\t\t                </p>\r\n\t\t\t                \r\n\t\t\t              </mat-card-content>\r\n\t\t\t            </mat-card>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div id=\"scroll-item\" class=\"item\" [about]>\r\n\t\t\t\t    \t<mat-card>\r\n\t\t\t              <img mat-card-image src=\"assets/img/3.jpg\">\r\n\t\t\t              <mat-card-content>\r\n\t\t\t                <a href=\"#blog\"><h5 class=\"mat-headline\" [ngStyle.sm]=\"{'font-size': '16px'}\">Article Title #4</h5></a>\r\n\t\t\t                <p class=\"mat-subheading-2\" [ngStyle.sm]=\"{'font-size': '12px'}\">\r\n\t\t\t                  Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.\r\n\t\t\t                </p>\r\n\t\t\t                \r\n\t\t\t              </mat-card-content>\r\n\t\t\t            </mat-card>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div id=\"scroll-item\" class=\"item\" [about]>\r\n\t\t\t\t    \t<mat-card>\r\n\t\t\t              <img mat-card-image src=\"assets/img/4.jpg\">\r\n\t\t\t              <mat-card-content>\r\n\t\t\t                <a href=\"#blog\"><h5 class=\"mat-headline\" [ngStyle.sm]=\"{'font-size': '16px'}\">Article Title #5</h5></a>\r\n\t\t\t                <p class=\"mat-subheading-2\" [ngStyle.sm]=\"{'font-size': '12px'}\">\r\n\t\t\t                  Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.\r\n\t\t\t                </p>\r\n\t\t\t                \r\n\t\t\t              </mat-card-content>\r\n\t\t\t            </mat-card>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div id=\"scroll-item\" class=\"item\" [about]>\r\n\t\t\t\t    \t<mat-card>\r\n\t\t\t              <img mat-card-image src=\"assets/img/5.jpg\">\r\n\t\t\t              <mat-card-content>\r\n\t\t\t                <a href=\"#blog\"><h5 class=\"mat-headline\" [ngStyle.sm]=\"{'font-size': '16px'}\">Article Title #6</h5></a>\r\n\t\t\t                <p class=\"mat-subheading-2\" [ngStyle.sm]=\"{'font-size': '12px'}\">\r\n\t\t\t                  Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.\r\n\t\t\t                </p>\r\n\t\t\t                \r\n\t\t\t              </mat-card-content>\r\n\t\t\t            </mat-card>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div id=\"scroll-item\" class=\"item\" [about]>\r\n\t\t\t\t    \t<mat-card>\r\n\t\t\t              <img mat-card-image src=\"assets/img/6.jpg\">\r\n\t\t\t              <mat-card-content>\r\n\t\t\t                <a href=\"#blog\"><h5 class=\"mat-headline\" [ngStyle.sm]=\"{'font-size': '16px'}\">Article Title #7</h5></a>\r\n\t\t\t                <p class=\"mat-subheading-2\" [ngStyle.sm]=\"{'font-size': '12px'}\">\r\n\t\t\t                  Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.\r\n\t\t\t                </p>\r\n\t\t\t                \r\n\t\t\t              </mat-card-content>\r\n\t\t\t            </mat-card>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div id=\"scroll-item\" class=\"item\" [about]>\r\n\t\t\t\t    \t<mat-card>\r\n\t\t\t              <img mat-card-image src=\"assets/img/1.jpg\">\r\n\t\t\t              <mat-card-content>\r\n\t\t\t                <a href=\"#blog\"><h5 class=\"mat-headline\" [ngStyle.sm]=\"{'font-size': '16px'}\">Article Title #8</h5></a>\r\n\t\t\t                <p class=\"mat-subheading-2\" [ngStyle.sm]=\"{'font-size': '12px'}\">\r\n\t\t\t                  Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.\r\n\t\t\t                </p>\r\n\t\t\t                \r\n\t\t\t              </mat-card-content>\r\n\t\t\t            </mat-card>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div id=\"scroll-item\" class=\"item\" [about]>\r\n\t\t\t\t    \t<mat-card>\r\n\t\t\t              <img mat-card-image src=\"assets/img/2.jpg\">\r\n\t\t\t              <mat-card-content>\r\n\t\t\t                <a href=\"#blog\"><h5 class=\"mat-headline\" [ngStyle.sm]=\"{'font-size': '16px'}\">Article Title #9</h5></a>\r\n\t\t\t                <p class=\"mat-subheading-2\" [ngStyle.sm]=\"{'font-size': '12px'}\">\r\n\t\t\t                  Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.\r\n\t\t\t                </p>\r\n\t\t\t                \r\n\t\t\t              </mat-card-content>\r\n\t\t\t            </mat-card>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div id=\"scroll-item\" class=\"item\" [about]>\r\n\t\t\t\t    \t<mat-card>\r\n\t\t\t              <img mat-card-image src=\"assets/img/3.jpg\">\r\n\t\t\t              <mat-card-content>\r\n\t\t\t                <a href=\"#blog\"><h5 class=\"mat-headline\" [ngStyle.sm]=\"{'font-size': '16px'}\">Article Title #10</h5></a>\r\n\t\t\t                <p class=\"mat-subheading-2\" [ngStyle.sm]=\"{'font-size': '12px'}\">\r\n\t\t\t                  Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.\r\n\t\t\t                </p>\r\n\t\t\t                \r\n\t\t\t              </mat-card-content>\r\n\t\t\t            </mat-card>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div id=\"scroll-item\" class=\"item\" [about]>\r\n\t\t\t\t    \t<mat-card>\r\n\t\t\t              <img mat-card-image src=\"assets/img/4.jpg\">\r\n\t\t\t              <mat-card-content>\r\n\t\t\t                <a href=\"#blog\"><h5 class=\"mat-headline\" [ngStyle.sm]=\"{'font-size': '16px'}\">Article Title #11</h5></a>\r\n\t\t\t                <p class=\"mat-subheading-2\" [ngStyle.sm]=\"{'font-size': '12px'}\">\r\n\t\t\t                  Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.\r\n\t\t\t                </p>\r\n\t\t\t                \r\n\t\t\t              </mat-card-content>\r\n\t\t\t            </mat-card>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div id=\"scroll-item\" class=\"item\" [about]>\r\n\t\t\t\t    \t<mat-card>\r\n\t\t\t              <img mat-card-image src=\"assets/img/5.jpg\">\r\n\t\t\t              <mat-card-content>\r\n\t\t\t                <a href=\"#blog\"><h5 class=\"mat-headline\" [ngStyle.sm]=\"{'font-size': '16px'}\">Article Title #12</h5></a>\r\n\t\t\t                <p class=\"mat-subheading-2\" [ngStyle.sm]=\"{'font-size': '12px'}\">\r\n\t\t\t                  Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.\r\n\t\t\t                </p>\r\n\t\t\t                \r\n\t\t\t              </mat-card-content>\r\n\t\t\t            </mat-card>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div id=\"scroll-item\" class=\"item\" [about]>\r\n\t\t\t\t    \t<mat-card>\r\n\t\t\t              <img mat-card-image src=\"assets/img/6.jpg\">\r\n\t\t\t              <mat-card-content>\r\n\t\t\t                <a href=\"#blog\"><h5 class=\"mat-headline\" [ngStyle.sm]=\"{'font-size': '16px'}\">Article Title #13</h5></a>\r\n\t\t\t                <p class=\"mat-subheading-2\" [ngStyle.sm]=\"{'font-size': '12px'}\">\r\n\t\t\t                  Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.\r\n\t\t\t                </p>\r\n\t\t\t                \r\n\t\t\t              </mat-card-content>\r\n\t\t\t            </mat-card>\r\n\t\t\t\t    </div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\t\t\t\t\t<button class=\"customPrevBtn\" mat-raised-button color=\"primary\">Prev</button>\r\n\t  \t\t\t\t<button class=\"customNextBtn\" mat-raised-button color=\"accent\">Next</button>\r\n\t\t\t\t</div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
        jQuery(function ($) {
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                margin: 10,
                touchDrag: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }
            });
            $('.customNextBtn').click(function () {
                owl.trigger('next.owl.carousel');
            });
            $('.customPrevBtn').click(function () {
                owl.trigger('prev.owl.carousel');
            });
        });
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/contact-dialog/contact-dialog.component.css":
/*!*************************************************************!*\
  !*** ./src/app/contact-dialog/contact-dialog.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-icon{\r\n\tfont-weight: bold;\r\n}\r\n\r\n.contact-dialog-title{\r\n\ttext-align: center;\r\n}\r\n\r\n.dialog-action{\r\n\twidth: 100%;\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.right-button{\r\n\tmargin-left: 50px;\r\n}"

/***/ }),

/***/ "./src/app/contact-dialog/contact-dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/contact-dialog/contact-dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"formwidth\" (ngSubmit)=\"onSubmit()\">\r\n\t\t\t\t  <div>\r\n\r\n\t\t\t\t  \t  <h5 class=\"contact-dialog-title mat-title\">Contact Us:</h5>\r\n\t\t\t\t\t  \r\n\t\t\t\t  \t  <mat-form-field appearance=\"outline\" color=\"accent\">\r\n\t\t\t\t\t  \t<mat-label>Please enter your name </mat-label>\r\n\t\t\t\t\t    <input matInput placeholder=\"Name\" [formControl]=\"nameFormControl\"\r\n\t\t\t\t\t           [errorStateMatcher]=\"matcher\">\r\n\t\t\t\t\t    <mat-error *ngIf=\"nameFormControl.hasError('required')\">\r\n\t\t\t\t\t      Name is <strong>required</strong>\r\n\t\t\t\t\t    </mat-error>\r\n\t\t\t\t\t  </mat-form-field>\r\n\r\n\t\t\t\t\t  <mat-form-field appearance=\"outline\" color=\"accent\">\r\n\t\t\t\t\t  \t<mat-label>Please enter your phone </mat-label>\r\n\t\t\t\t\t    <input matInput placeholder=\"Phone\" [formControl]=\"phoneFormControl\"\r\n\t\t\t\t\t           [errorStateMatcher]=\"matcher\">\r\n\t\t\t\t\t    <mat-error *ngIf=\"phoneFormControl.hasError('required')\">\r\n\t\t\t\t\t      Phone is <strong>required</strong>\r\n\t\t\t\t\t    </mat-error>\r\n\t\t\t\t\t  </mat-form-field>\r\n\r\n\t\t\t\t\t  <mat-form-field appearance=\"outline\" color=\"accent\">\r\n\t\t\t\t\t  \t<mat-label>Please enter your email </mat-label>\r\n\t\t\t\t\t    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\r\n\t\t\t\t\t           [errorStateMatcher]=\"matcher\">\r\n\t\t\t\t\t    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n\t\t\t\t\t      Please enter a valid email address\r\n\t\t\t\t\t    </mat-error>\r\n\t\t\t\t\t    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n\t\t\t\t\t      Email is <strong>required</strong>\r\n\t\t\t\t\t    </mat-error>\r\n\t\t\t\t\t  </mat-form-field>\r\n\r\n\t\t\t\t\t  <br>\r\n\r\n\t\t\t\t\t  <div class=\"dialog-action\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\t\t\t\t\t    <button class=\"left-button\" mat-fab color=\"primary\" type=\"submit\"><mat-icon>done</mat-icon></button>\r\n\t\t\t\t\t    <button class=\"right-button\" mat-fab color=\"primary\" (click)=\"dialogOff()\"><mat-icon>clear</mat-icon></button>\r\n\t\t\t\t\t   </div>\r\n\r\n\t\t\t\t  </div>\r\n  \t\t\t\t\t\r\n\t\t\t\t</form>\r\n"

/***/ }),

/***/ "./src/app/contact-dialog/contact-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/contact-dialog/contact-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: NgLpErrorStateMatcher, ContactDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgLpErrorStateMatcher", function() { return NgLpErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDialogComponent", function() { return ContactDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contact_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact/contact */ "./src/app/contact/contact.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




/** Error when invalid control is dirty, touched, or submitted. */
var NgLpErrorStateMatcher = /** @class */ (function () {
    function NgLpErrorStateMatcher() {
    }
    NgLpErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return NgLpErrorStateMatcher;
}());

var ContactDialogComponent = /** @class */ (function () {
    function ContactDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.phoneFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.matcher = new NgLpErrorStateMatcher();
        this.contact = new _contact_contact__WEBPACK_IMPORTED_MODULE_3__["Contact"]();
    }
    ContactDialogComponent.prototype.dialogOff = function () {
        this.dialogRef.close();
    };
    ContactDialogComponent.prototype.onSubmit = function () {
        console.log("FORM SEND");
    };
    ContactDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-dialog',
            template: __webpack_require__(/*! ./contact-dialog.component.html */ "./src/app/contact-dialog/contact-dialog.component.html"),
            styles: [__webpack_require__(/*! ./contact-dialog.component.css */ "./src/app/contact-dialog/contact-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ContactDialogComponent);
    return ContactDialogComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-section{\r\n  text-align: center;\r\n}\r\n\r\n.contact-heading{\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.contact-heading h2{\r\n  font-size: 32px;\r\n}\r\n\r\n.contact-heading h3{\r\n  font-size: 22px;\r\n}\r\n\r\n.contact-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 300px;\r\n  padding-right: 300px;\r\n}\r\n\r\n.contact-form > * {\r\n  width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\" [ngStyle.lt-md]=\"{'margin-top': '50px', 'margin-bottom': '50px'}\">\r\n    <div class=\"container\">\r\n\t\t      <div class=\"contact-section contact-heading mat-typography\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\t\t            <div>\r\n\t\t            <h2 [ngStyle.lt-md]=\"{'margin-bottom': '15px'}\">Contact Us</h2>\r\n\t\t            </div>\r\n\t\t            <div>\r\n\t\t\t        <h3 [ngStyle.xs]=\"{'font-size': '18px'}\" [ngStyle.sm]=\"{'font-size': '22px'}\">Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.</h3>\r\n\t\t\t        </div>\r\n\t\t        </div>\r\n\r\n\r\n\r\n\t\t\t\t<form class=\"formwidth\" (ngSubmit)=\"onSubmit()\">\r\n\t\t\t\t  <div class=\"contact-form\" [ngStyle.xs]=\"{'padding-left': '50px', 'padding-right': '50px'}\" [ngStyle.sm]=\"{'padding-left': '100px', 'padding-right': '100px'}\" [ngStyle.md]=\"{'padding-left': '150px', 'padding-right': '150px'}\" [ngStyle.lg]=\"{'padding-left': '200px', 'padding-right': '200px'}\">\r\n\t\t\t\t\t  \r\n\t\t\t\t  \t  <mat-form-field appearance=\"outline\" color=\"accent\">\r\n\t\t\t\t\t  \t<mat-label>Please enter your name </mat-label>\r\n\t\t\t\t\t    <input matInput placeholder=\"Name\" [formControl]=\"nameFormControl\"\r\n\t\t\t\t\t           [errorStateMatcher]=\"matcher\">\r\n\t\t\t\t\t    <mat-error *ngIf=\"nameFormControl.hasError('required')\">\r\n\t\t\t\t\t      Name is <strong>required</strong>\r\n\t\t\t\t\t    </mat-error>\r\n\t\t\t\t\t  </mat-form-field>\r\n\r\n\t\t\t\t\t  <mat-form-field appearance=\"outline\" color=\"accent\">\r\n\t\t\t\t\t  \t<mat-label>Please enter your phone </mat-label>\r\n\t\t\t\t\t    <input matInput placeholder=\"Phone\" [formControl]=\"phoneFormControl\"\r\n\t\t\t\t\t           [errorStateMatcher]=\"matcher\">\r\n\t\t\t\t\t    <mat-error *ngIf=\"phoneFormControl.hasError('required')\">\r\n\t\t\t\t\t      Phone is <strong>required</strong>\r\n\t\t\t\t\t    </mat-error>\r\n\t\t\t\t\t  </mat-form-field>\r\n\r\n\t\t\t\t\t  <mat-form-field appearance=\"outline\" color=\"accent\">\r\n\t\t\t\t\t  \t<mat-label>Please enter your email </mat-label>\r\n\t\t\t\t\t    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\r\n\t\t\t\t\t           [errorStateMatcher]=\"matcher\">\r\n\t\t\t\t\t    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n\t\t\t\t\t      Please enter a valid email address\r\n\t\t\t\t\t    </mat-error>\r\n\t\t\t\t\t    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n\t\t\t\t\t      Email is <strong>required</strong>\r\n\t\t\t\t\t    </mat-error>\r\n\t\t\t\t\t  </mat-form-field>\r\n\r\n\t\t\t\t\t  <br>\r\n\r\n\t\t\t\t\t  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\t\t\t\t\t    <button mat-raised-button color=\"accent\" type=\"submit\">Contact Us</button>\r\n\t\t\t\t\t   </div>\r\n\r\n\t\t\t\t  </div>\r\n  \t\t\t\t\t\r\n\t\t\t\t</form>\r\n\t</div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: NgLpErrorStateMatcher, ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgLpErrorStateMatcher", function() { return NgLpErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/app/contact/contact.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** Error when invalid control is dirty, touched, or submitted. */
var NgLpErrorStateMatcher = /** @class */ (function () {
    function NgLpErrorStateMatcher() {
    }
    NgLpErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return NgLpErrorStateMatcher;
}());

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.phoneFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new NgLpErrorStateMatcher();
        this.contact = new _contact__WEBPACK_IMPORTED_MODULE_2__["Contact"]();
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent.prototype.onSubmit = function () {
        console.log("FORM SEND");
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.ts":
/*!************************************!*\
  !*** ./src/app/contact/contact.ts ***!
  \************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact(name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/directives/about.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/directives/about.directive.ts ***!
  \***********************************************/
/*! exports provided: AboutDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutDirective", function() { return AboutDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutDirective = /** @class */ (function () {
    function AboutDirective(el) {
        this.el = el;
    }
    AboutDirective.prototype.onMouseEnter = function () {
        this.setHoverEffect();
    };
    AboutDirective.prototype.onMouseLeave = function () {
        this.removeHoverEffect();
    };
    AboutDirective.prototype.setHoverEffect = function () {
        this.el.nativeElement.classList.add('about-hover-effect');
    };
    AboutDirective.prototype.removeHoverEffect = function () {
        this.el.nativeElement.classList.remove('about-hover-effect');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AboutDirective.prototype, "defaultColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('about'),
        __metadata("design:type", String)
    ], AboutDirective.prototype, "about", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AboutDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AboutDirective.prototype, "onMouseLeave", null);
    AboutDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[about]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AboutDirective);
    return AboutDirective;
}());



/***/ }),

/***/ "./src/app/directives/directives.module.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/directives.module.ts ***!
  \*************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _scroll_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll.directive */ "./src/app/directives/scroll.directive.ts");
/* harmony import */ var _about_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.directive */ "./src/app/directives/about.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _scroll_directive__WEBPACK_IMPORTED_MODULE_2__["nglpScrollDirective"],
                _about_directive__WEBPACK_IMPORTED_MODULE_3__["AboutDirective"]
            ],
            exports: [
                _scroll_directive__WEBPACK_IMPORTED_MODULE_2__["nglpScrollDirective"],
                _about_directive__WEBPACK_IMPORTED_MODULE_3__["AboutDirective"]
            ]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());



/***/ }),

/***/ "./src/app/directives/scroll.directive.ts":
/*!************************************************!*\
  !*** ./src/app/directives/scroll.directive.ts ***!
  \************************************************/
/*! exports provided: nglpScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nglpScrollDirective", function() { return nglpScrollDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var nglpScrollDirective = /** @class */ (function () {
    function nglpScrollDirective() {
        this.onScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    nglpScrollDirective.prototype.scrolled = function ($event) {
        this.elementSE($event);
    };
    nglpScrollDirective.prototype.windowScrolled = function ($event) {
        this.windowSE($event);
    };
    nglpScrollDirective.prototype.windowSE = function ($event) {
        var target = $event.target;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        var header = scrollTop < 200;
        var bottom = scrollTop > 200;
        var emitVal = { header: header, bottom: bottom };
        this.onScroll.emit(emitVal);
    };
    nglpScrollDirective.prototype.elementSE = function ($event) {
        var target = $event.target;
        var header = target.scrollTop < 200;
        var bottom = target.scrollTop > 200;
        var emitVal = { header: header, bottom: bottom };
        this.onScroll.emit(emitVal);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], nglpScrollDirective.prototype, "onScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], nglpScrollDirective.prototype, "scrolled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], nglpScrollDirective.prototype, "windowScrolled", null);
    nglpScrollDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[nglp-scroll]'
        }),
        __metadata("design:paramtypes", [])
    ], nglpScrollDirective);
    return nglpScrollDirective;
}());



/***/ }),

/***/ "./src/app/heading/heading.component.css":
/*!***********************************************!*\
  !*** ./src/app/heading/heading.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* --------- heading --------- */\r\n\r\n.heading-section{\r\n  text-align: center;\r\n}\r\n\r\n.heading-section h1{\r\n  font-size: 58px;\r\n}\r\n\r\n.heading-section h2{\r\n  margin-top: 30px;\r\n}\r\n\r\n.heading-button-left{\r\n  min-width: 144px;\r\n  max-width: 100%;\r\n}\r\n\r\n.heading-button-right{\r\n  margin-left: 10px;\r\n}"

/***/ }),

/***/ "./src/app/heading/heading.component.html":
/*!************************************************!*\
  !*** ./src/app/heading/heading.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"heading\" class=\"mat-typography\" [ngStyle.lt-md]=\"{'margin-top': '30px', 'margin-bottom': '30px'}\">\r\n  <div class=\"container\">\t\r\n\t\t<div class=\"heading-section\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    \t\t<div [class.animated]=\"isHeading\" [class.fadeInLeft]=\"isHeading\">\r\n\t        \t<h1 [ngStyle.xs]=\"{'font-size': '32px'}\" [ngStyle.sm]=\"{'font-size': '42px'}\">Bienvenido al curso de Diseño Web II con Angular</h1>\r\n\t        </div>\r\n\t        <div [class.animated]=\"isSubheading\" [class.fadeInRight]=\"isSubheading\">\r\n\t        \t<h2 [ngStyle.xs]=\"{'font-size': '18px'}\" [ngStyle.sm]=\"{'font-size': '22px'}\">Este sitio está hecho en Angular y es nuestro proyecto final.</h2>\r\n\t\t\t\t<h2 [ngStyle.xs]=\"{'font-size': '18px'}\" [ngStyle.sm]=\"{'font-size': '22px'}\">Durante la vegación podrá notar diferentes efectos, nos basamos en 'Material Design'.</h2>\r\n\t        </div>\r\n\t        <div fxLayout=\"row\" [class.animated]=\"isHeadingBtn\" [class.fadeIn]=\"isHeadingBtn\" [class.heading-btn]=\"isHeadingBtn\">\r\n        \t\t<a class=\"heading-button-left\" mat-flat-button color=\"accent\">Github</a>\r\n\t\t        <a class=\"heading-button-right\" mat-stroked-button color=\"accent\">Informes</a>\r\n\t    \t</div>\r\n\t    </div>\r\n   </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/heading/heading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/heading/heading.component.ts ***!
  \**********************************************/
/*! exports provided: HeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingComponent", function() { return HeadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadingComponent = /** @class */ (function () {
    function HeadingComponent() {
        this.isHeading = true;
        this.isSubheading = true;
        this.isHeadingBtn = true;
    }
    HeadingComponent.prototype.ngOnInit = function () {
    };
    HeadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heading',
            template: __webpack_require__(/*! ./heading.component.html */ "./src/app/heading/heading.component.html"),
            styles: [__webpack_require__(/*! ./heading.component.css */ "./src/app/heading/heading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeadingComponent);
    return HeadingComponent;
}());



/***/ }),

/***/ "./src/app/material2.module.ts":
/*!*************************************!*\
  !*** ./src/app/material2.module.ts ***!
  \*************************************/
/*! exports provided: Material2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material2Module", function() { return Material2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Material2Module = /** @class */ (function () {
    function Material2Module() {
    }
    Material2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"]]
        })
    ], Material2Module);
    return Material2Module;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portfolio-row{\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.portfolio-button{\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.portfolio-section{\r\n  text-align: center;\r\n}\r\n\r\n.portfolio-heading{\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.portfolio-heading h2{\r\n  font-size: 32px;\r\n}\r\n\r\n.portfolio-heading h3{\r\n  font-size: 22px;\r\n}"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"portfolio\" [ngStyle.lt-md]=\"{'margin-top': '30px', 'margin-bottom': '30px'}\">\r\n      <div class=\"container portfolio-card\">\r\n\r\n        <div class=\"portfolio-section portfolio-heading mat-typography\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <div>\r\n            <h2 [ngStyle.lt-md]=\"{'margin-bottom': '15px'}\">Tarjetas</h2>\r\n            </div>\r\n            <div>\r\n            <h3 [ngStyle.xs]=\"{'font-size': '18px'}\" [ngStyle.sm]=\"{'font-size': '22px'}\">Sección de ejemplos de tarjetas.</h3>\r\n            </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"nowrap\" fxLayoutGap=\"30px\" fxLayoutGap.sm=\"8px\">\r\n          <div fxFlex=\"33.33\" [about]>\r\n            <mat-card class=\"p-0 m-0\">\r\n              <img mat-card-image src=\"assets/img/1.jpg\">\r\n              <mat-card-content>\r\n                <h5 class=\"mat-headline\" [ngStyle.sm]=\"{'font-size': '16px'}\">Tarjeta 1</h5>\r\n                <p class=\"mat-subheading-2\" [ngStyle.sm]=\"{'font-size': '12px'}\">\r\n                  Esta es la tarjeta #1, con imagen de ejemplo\r\n                </p>\r\n                <mat-divider class=\"mb-1\"></mat-divider>\r\n                <button class=\"portfolio-button\" mat-icon-button><mat-icon class=\"text-muted\">link1</mat-icon></button>\r\n                <button class=\"portfolio-button\" mat-icon-button><mat-icon class=\"text-muted\">share</mat-icon></button>\r\n              </mat-card-content>\r\n            </mat-card>\r\n          </div>\r\n          <div fxFlex=\"33.33\" [about]>\r\n            <mat-card class=\"p-0 m-0\">\r\n              <img mat-card-image src=\"assets/img/2.jpg\">\r\n              <mat-card-content>\r\n                <h5 class=\"mat-headline\" [ngStyle.sm]=\"{'font-size': '16px'}\">Tarjeta 2</h5>\r\n                <p class=\"mat-subheading-2\" [ngStyle.sm]=\"{'font-size': '12px'}\">\r\n                  Esta es la tarjeta #2, con imagen de ejemplo\r\n                </p>\r\n                <mat-divider class=\"mb-1\"></mat-divider>\r\n                <button class=\"portfolio-button\" mat-icon-button><mat-icon class=\"text-muted\">link</mat-icon></button>\r\n                <button class=\"portfolio-button\" mat-icon-button><mat-icon class=\"text-muted\">share</mat-icon></button>\r\n              </mat-card-content>\r\n            </mat-card>\r\n          </div>\r\n          <div fxFlex=\"33.33\" [about]>\r\n            <mat-card class=\"p-0 m-0\">\r\n              <img mat-card-image src=\"assets/img/3.jpg\">\r\n              <mat-card-content>\r\n                <h5 class=\"mat-headline\" [ngStyle.sm]=\"{'font-size': '16px'}\">Tarjeta 3</h5>\r\n                <p class=\"mat-subheading-2\" [ngStyle.sm]=\"{'font-size': '12px'}\">\r\n                  Esta es la tarjeta #3, con imagen de ejemplo\r\n                </p>\r\n                <mat-divider class=\"mb-1\"></mat-divider>\r\n                <button class=\"portfolio-button\" mat-icon-button><mat-icon class=\"text-muted\">link</mat-icon></button>\r\n                <button class=\"portfolio-button\" mat-icon-button><mat-icon class=\"text-muted\">share</mat-icon></button>\r\n              </mat-card-content>\r\n            </mat-card>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alvarin/Sites/Angular/nglp-angular-material-landing-page-master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map