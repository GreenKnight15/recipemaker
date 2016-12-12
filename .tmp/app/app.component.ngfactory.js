/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/platform/platform';
import * as import9 from 'ionic-angular/components/menu/menu-controller';
import * as import10 from 'angular2-jwt/angular2-jwt';
import * as import11 from '@angular/core/src/zone/ng_zone';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '@angular/core/src/linker/query_list';
import * as import15 from '../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import16 from '../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from 'ionic-angular/navigation/view-controller';
import * as import19 from 'ionic-angular/navigation/nav-controller-base';
import * as import20 from 'ionic-angular/components/app/app';
import * as import21 from 'ionic-angular/config/config';
import * as import22 from 'ionic-angular/util/keyboard';
import * as import23 from '@angular/core/src/linker/element_ref';
import * as import24 from '@angular/core/src/linker/component_factory_resolver';
import * as import25 from 'ionic-angular/gestures/gesture-controller';
import * as import26 from 'ionic-angular/transitions/transition-controller';
import * as import27 from 'ionic-angular/navigation/deep-linker';
import * as import28 from '@angular/common/src/directives/ng_if';
import * as import29 from 'ionic-angular/components/nav/nav';
import * as import30 from '../node_modules/ionic-angular/components/menu/menu.ngfactory';
import * as import31 from '../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import32 from '../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import33 from '../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import34 from '../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import35 from '../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import36 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import37 from 'ionic-angular/components/navbar/navbar';
import * as import38 from 'ionic-angular/components/tabs/tabs';
import * as import39 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import40 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import41 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import42 from 'ionic-angular/components/toolbar/toolbar';
import * as import43 from '@angular/common/src/directives/ng_for';
import * as import44 from 'ionic-angular/components/list/list';
import * as import45 from 'ionic-angular/components/content/content';
import * as import46 from 'ionic-angular/components/menu/menu';
import * as import47 from '../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import48 from 'ionic-angular/components/button/button';
import * as import49 from '../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import50 from '../node_modules/ionic-angular/components/menu/menu-close.ngfactory';
import * as import51 from 'ionic-angular/util/form';
import * as import52 from 'ionic-angular/components/item/item-reorder';
import * as import53 from 'ionic-angular/components/item/item';
import * as import54 from 'ionic-angular/components/menu/menu-close';
export var Wrapper_MyApp = (function () {
    function Wrapper_MyApp(p0, p1, p2, p3) {
        this.changed = false;
        this.context = new import0.MyApp(p0, p1, p2, p3);
    }
    Wrapper_MyApp.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_MyApp;
}());
var renderType_MyApp_Host = null;
var _View_MyApp_Host0 = (function (_super) {
    __extends(_View_MyApp_Host0, _super);
    function _View_MyApp_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyApp_Host0, renderType_MyApp_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MyApp_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_MyApp0(this.viewUtils, this.injector(0), this._appEl_0);
        this._MyApp_0_4 = new Wrapper_MyApp(this.parentInjector.get(import8.Platform), this.parentInjector.get(import9.MenuController), this.parentInjector.get(import10.AuthHttp), this.parentInjector.get(import11.NgZone));
        this._appEl_0.initComponent(this._MyApp_0_4.context, [], compView_0);
        compView_0.create(this._MyApp_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_MyApp_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.MyApp) && (0 === requestNodeIndex))) {
            return this._MyApp_0_4.context;
        }
        return notFoundResult;
    };
    _View_MyApp_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._MyApp_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_MyApp_Host0;
}(import1.AppView));
function viewFactory_MyApp_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MyApp_Host === null)) {
        (renderType_MyApp_Host = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, [], {}));
    }
    return new _View_MyApp_Host0(viewUtils, parentInjector, declarationEl);
}
export var MyAppNgFactory = new import13.ComponentFactory('ng-component', viewFactory_MyApp_Host0, import0.MyApp);
var styles_MyApp = [];
var renderType_MyApp = null;
var _View_MyApp0 = (function (_super) {
    __extends(_View_MyApp0, _super);
    function _View_MyApp0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyApp0, renderType_MyApp, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MyApp0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._viewQuery_Nav_0 = new import14.QueryList();
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import17.TemplateRef_(this._appEl_0, viewFactory_MyApp1);
        this._NgIf_0_6 = new import15.Wrapper_NgIf(this._appEl_0.vcRef, this._TemplateRef_0_5);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_2 = new import3.AppElement(2, null, this, this._anchor_2);
        this._TemplateRef_2_5 = new import17.TemplateRef_(this._appEl_2, viewFactory_MyApp4);
        this._NgIf_2_6 = new import15.Wrapper_NgIf(this._appEl_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_5 = this.renderer.createElement(parentRenderNode, 'ion-nav', null);
        this.renderer.setElementAttribute(this._el_5, 'swipeBackEnabled', 'false');
        this._appEl_5 = new import3.AppElement(5, null, this, this._el_5);
        var compView_5 = import16.viewFactory_Nav0(this.viewUtils, this.injector(5), this._appEl_5);
        this._Nav_5_4 = new import16.Wrapper_Nav(this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import19.NavControllerBase, null), this.parentInjector.get(import20.App), this.parentInjector.get(import21.Config), this.parentInjector.get(import22.Keyboard), new import23.ElementRef(this._el_5), this.parentInjector.get(import11.NgZone), this.renderer, this.parentInjector.get(import24.ComponentFactoryResolver), this.parentInjector.get(import25.GestureController), this.parentInjector.get(import26.TransitionController), this.parentInjector.get(import27.DeepLinker, null));
        this._appEl_5.initComponent(this._Nav_5_4.context, [], compView_5);
        compView_5.create(this._Nav_5_4.context, [], null);
        this._text_6 = this.renderer.createText(parentRenderNode, '\n', null);
        this._viewQuery_Nav_0.reset([this._Nav_5_4.context]);
        this.context.nav = this._viewQuery_Nav_0.first;
        this.init([], [
            this._anchor_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6
        ], [], []);
        return null;
    };
    _View_MyApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import28.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        if (((token === import17.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import28.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        if (((token === import29.Nav) && (5 === requestNodeIndex))) {
            return this._Nav_5_4.context;
        }
        return notFoundResult;
    };
    _View_MyApp0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.authenticated();
        this._NgIf_0_6.check_ngIf(currVal_0, throwOnChange, false);
        this._NgIf_0_6.detectChangesInternal(this, this._anchor_0, throwOnChange);
        var currVal_1 = !this.context.authenticated();
        this._NgIf_2_6.check_ngIf(currVal_1, throwOnChange, false);
        this._NgIf_2_6.detectChangesInternal(this, this._anchor_2, throwOnChange);
        var currVal_2 = this.context.rootPage;
        this._Nav_5_4.check_root(currVal_2, throwOnChange, false);
        var currVal_3 = 'false';
        this._Nav_5_4.check_swipeBackEnabled(currVal_3, throwOnChange, false);
        this._Nav_5_4.detectChangesInternal(this, this._el_5, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Nav_5_4.context.ngAfterViewInit();
            }
        }
    };
    return _View_MyApp0;
}(import1.AppView));
export function viewFactory_MyApp0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MyApp === null)) {
        (renderType_MyApp = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, styles_MyApp, {}));
    }
    return new _View_MyApp0(viewUtils, parentInjector, declarationEl);
}
var _View_MyApp1 = (function (_super) {
    __extends(_View_MyApp1, _super);
    function _View_MyApp1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyApp1, renderType_MyApp, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MyApp1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-menu', null);
        this.renderer.setElementAttribute(this._el_0, 'id', 'authenticated');
        this.renderer.setElementAttribute(this._el_0, 'role', 'navigation');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import30.viewFactory_Menu0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Menu_0_4 = new import30.Wrapper_Menu(this.parentInjector.get(import9.MenuController), new import23.ElementRef(this._el_0), this.parentInjector.get(import21.Config), this.parentInjector.get(import8.Platform), this.renderer, this.parentInjector.get(import22.Keyboard), this.parentInjector.get(import11.NgZone), this.parentInjector.get(import25.GestureController));
        this._query_Content_0_0 = new import14.QueryList();
        this._appEl_0.initComponent(this._Menu_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n  ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-header', null);
        this._Header_2_3 = new import31.Wrapper_Header(this.parentInjector.get(import21.Config), new import23.ElementRef(this._el_2), this.renderer, this.parentInjector.get(import18.ViewController, null));
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'toolbar');
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import31.viewFactory_Toolbar0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Toolbar_4_4 = new import31.Wrapper_Toolbar(this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import21.Config), new import23.ElementRef(this._el_4), this.renderer);
        this._appEl_4.initComponent(this._Toolbar_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_6 = new import3.AppElement(6, 4, this, this._el_6);
        var compView_6 = import32.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(6), this._appEl_6);
        this._ToolbarTitle_6_4 = new import32.Wrapper_ToolbarTitle(this.parentInjector.get(import21.Config), new import23.ElementRef(this._el_6), this.renderer, this._Toolbar_4_4.context, this.parentInjector.get(import37.Navbar, null));
        this._appEl_6.initComponent(this._ToolbarTitle_6_4.context, [], compView_6);
        this._text_7 = this.renderer.createText(null, 'Menu', null);
        compView_6.create(this._ToolbarTitle_6_4.context, [[].concat([this._text_7])], null);
        this._text_8 = this.renderer.createText(null, '\n        ', null);
        this._el_9 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_9, 'right', '');
        this._ToolbarItem_9_3 = new import33.Wrapper_ToolbarItem(this.parentInjector.get(import21.Config), new import23.ElementRef(this._el_9), this.renderer, this._Toolbar_4_4.context, this.parentInjector.get(import37.Navbar, null));
        this._query_Button_9_0 = new import14.QueryList();
        this._text_10 = this.renderer.createText(this._el_9, '\n            ', null);
        this._anchor_11 = this.renderer.createTemplateAnchor(this._el_9, null);
        this._appEl_11 = new import3.AppElement(11, 9, this, this._anchor_11);
        this._TemplateRef_11_5 = new import17.TemplateRef_(this._appEl_11, viewFactory_MyApp2);
        this._NgIf_11_6 = new import15.Wrapper_NgIf(this._appEl_11.vcRef, this._TemplateRef_11_5);
        this._text_12 = this.renderer.createText(this._el_9, '\n        ', null);
        this._text_13 = this.renderer.createText(null, '\n    ', null);
        compView_4.create(this._Toolbar_4_4.context, [
            [],
            [],
            [].concat([this._el_9]),
            [].concat([
                this._text_5,
                this._el_6,
                this._text_8,
                this._text_13
            ])
        ], null);
        this._text_14 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_15 = this.renderer.createText(null, '\n\n  ', null);
        this._el_16 = this.renderer.createElement(null, 'ion-content', null);
        this._appEl_16 = new import3.AppElement(16, 0, this, this._el_16);
        var compView_16 = import34.viewFactory_Content0(this.viewUtils, this.injector(16), this._appEl_16);
        this._Content_16_4 = new import34.Wrapper_Content(this.parentInjector.get(import21.Config), new import23.ElementRef(this._el_16), this.renderer, this.parentInjector.get(import20.App), this.parentInjector.get(import22.Keyboard), this.parentInjector.get(import11.NgZone), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import38.Tabs, null));
        this._appEl_16.initComponent(this._Content_16_4.context, [], compView_16);
        this._text_17 = this.renderer.createText(null, '\n    ', null);
        this._el_18 = this.renderer.createElement(null, 'ion-list', null);
        this._List_18_3 = new import35.Wrapper_List(this.parentInjector.get(import21.Config), new import23.ElementRef(this._el_18), this.renderer, this.parentInjector.get(import25.GestureController));
        this._text_19 = this.renderer.createText(this._el_18, '\n      ', null);
        this._anchor_20 = this.renderer.createTemplateAnchor(this._el_18, null);
        this._appEl_20 = new import3.AppElement(20, 18, this, this._anchor_20);
        this._TemplateRef_20_5 = new import17.TemplateRef_(this._appEl_20, viewFactory_MyApp3);
        this._NgFor_20_6 = new import36.Wrapper_NgFor(this._appEl_20.vcRef, this._TemplateRef_20_5, this.parentInjector.get(import39.IterableDiffers), this.parent.ref);
        this._text_21 = this.renderer.createText(this._el_18, '\n    ', null);
        this._text_22 = this.renderer.createText(null, '\n  ', null);
        compView_16.create(this._Content_16_4.context, [
            [],
            [].concat([
                this._text_17,
                this._el_18,
                this._text_22
            ]),
            []
        ], null);
        this._text_23 = this.renderer.createText(null, '\n', null);
        this._query_Content_0_0.reset([this._Content_16_4.context]);
        this._Menu_0_4.context.menuContent = this._query_Content_0_0.first;
        compView_0.create(this._Menu_0_4.context, [[].concat([
                this._text_1,
                this._el_2,
                this._text_15,
                this._el_16,
                this._text_23
            ])], null);
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._anchor_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._anchor_20,
            this._text_21,
            this._text_22,
            this._text_23
        ], [], []);
        return null;
    };
    _View_MyApp1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import40.ToolbarTitle) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ToolbarTitle_6_4.context;
        }
        if (((token === import17.TemplateRef) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === import28.NgIf) && (11 === requestNodeIndex))) {
            return this._NgIf_11_6.context;
        }
        if (((token === import41.ToolbarItem) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._ToolbarItem_9_3.context;
        }
        if (((token === import42.Toolbar) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._Toolbar_4_4.context;
        }
        if (((token === import42.Header) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._Header_2_3.context;
        }
        if (((token === import17.TemplateRef) && (20 === requestNodeIndex))) {
            return this._TemplateRef_20_5;
        }
        if (((token === import43.NgFor) && (20 === requestNodeIndex))) {
            return this._NgFor_20_6.context;
        }
        if (((token === import44.List) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._List_18_3.context;
        }
        if (((token === import45.Content) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._Content_16_4.context;
        }
        if (((token === import46.Menu) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 23)))) {
            return this._Menu_0_4.context;
        }
        return notFoundResult;
    };
    _View_MyApp1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.parent._Nav_5_4.context;
        this._Menu_0_4.check_content(currVal_0, throwOnChange, false);
        var currVal_1 = 'authenticated';
        this._Menu_0_4.check_id(currVal_1, throwOnChange, false);
        if (this._Menu_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._Header_2_3.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._Toolbar_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        if (this._ToolbarTitle_6_4.detectChangesInternal(this, this._el_6, throwOnChange)) {
            this._appEl_6.componentView.markAsCheckOnce();
        }
        this._ToolbarItem_9_3.detectChangesInternal(this, this._el_9, throwOnChange);
        var currVal_3 = this.parent.context.authenticated();
        this._NgIf_11_6.check_ngIf(currVal_3, throwOnChange, false);
        this._NgIf_11_6.detectChangesInternal(this, this._anchor_11, throwOnChange);
        if (this._Content_16_4.detectChangesInternal(this, this._el_16, throwOnChange)) {
            this._appEl_16.componentView.markAsCheckOnce();
        }
        this._List_18_3.detectChangesInternal(this, this._el_18, throwOnChange);
        var currVal_5 = this.parent.context.pages;
        this._NgFor_20_6.check_ngForOf(currVal_5, throwOnChange, false);
        this._NgFor_20_6.detectChangesInternal(this, this._anchor_20, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_9_0.dirty) {
                this._query_Button_9_0.reset([this._appEl_11.mapNestedViews(_View_MyApp2, function (nestedView) {
                        return [nestedView._Button_0_4.context];
                    })]);
                this._ToolbarItem_9_3.context._buttons = this._query_Button_9_0;
                this._query_Button_9_0.notifyOnChanges();
            }
        }
        var currVal_2 = this._Toolbar_4_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_4, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_4 = this._Content_16_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_16, 'statusbar-padding', currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_MyApp1.prototype.destroyInternal = function () {
        this._Content_16_4.context.ngOnDestroy();
        this._Menu_0_4.context.ngOnDestroy();
    };
    return _View_MyApp1;
}(import1.AppView));
function viewFactory_MyApp1(viewUtils, parentInjector, declarationEl) {
    return new _View_MyApp1(viewUtils, parentInjector, declarationEl);
}
var _View_MyApp2 = (function (_super) {
    __extends(_View_MyApp2, _super);
    function _View_MyApp2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyApp2, renderType_MyApp, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MyApp2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_0, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_0, 'logout-btn', '');
        this.renderer.setElementAttribute(this._el_0, 'primary', '');
        this.renderer.setElementAttribute(this._el_0, 'round', '');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import47.viewFactory_Button0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Button_0_4 = new import47.Wrapper_Button(null, '', this.parent.parentInjector.get(import21.Config), new import23.ElementRef(this._el_0), this.renderer);
        this._appEl_0.initComponent(this._Button_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, 'Logout', null);
        compView_0.create(this._Button_0_4.context, [[].concat([this._text_1])], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [disposable_0], []);
        return null;
    };
    _View_MyApp2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import48.Button) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._Button_0_4.context;
        }
        return notFoundResult;
    };
    _View_MyApp2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = '';
        this._Button_0_4.check_round(currVal_1, throwOnChange, false);
        if (this._Button_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Button_0_4.context.ngAfterContentInit();
            }
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_MyApp2.prototype.dirtyParentQueriesInternal = function () {
        this.parent._query_Button_9_0.setDirty();
    };
    _View_MyApp2.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.parent.context.logout() !== false);
        return (true && pd_0);
    };
    return _View_MyApp2;
}(import1.AppView));
function viewFactory_MyApp2(viewUtils, parentInjector, declarationEl) {
    return new _View_MyApp2(viewUtils, parentInjector, declarationEl);
}
var _View_MyApp3 = (function (_super) {
    __extends(_View_MyApp3, _super);
    function _View_MyApp3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyApp3, renderType_MyApp, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MyApp3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_0, 'ion-item', '');
        this.renderer.setElementAttribute(this._el_0, 'menuClose', '');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import49.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import49.Wrapper_Item(this.parent.parentInjector.get(import51.Form), this.parent.parentInjector.get(import21.Config), new import23.ElementRef(this._el_0), this.renderer, this.parent.parentInjector.get(import52.ItemReorder, null));
        this._ItemContent_0_5 = new import49.Wrapper_ItemContent();
        this._MenuClose_0_6 = new import50.Wrapper_MenuClose(this.parent.parentInjector.get(import9.MenuController));
        this._query_Label_0_0 = new import14.QueryList();
        this._query_Button_0_1 = new import14.QueryList();
        this._query_Icon_0_2 = new import14.QueryList();
        this._appEl_0.initComponent(this._Item_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '', null);
        this._query_Label_0_0.reset([]);
        this._Item_0_4.context.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4.context, [
            [],
            [],
            [].concat([this._text_1]),
            [],
            []
        ], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [disposable_0], []);
        return null;
    };
    _View_MyApp3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import53.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._Item_0_4.context;
        }
        if (((token === import53.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._ItemContent_0_5.context;
        }
        if (((token === import54.MenuClose) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._MenuClose_0_6.context;
        }
        return notFoundResult;
    };
    _View_MyApp3.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Item_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._ItemContent_0_5.detectChangesInternal(this, this._el_0, throwOnChange);
        var currVal_2 = '';
        this._MenuClose_0_6.check_menuClose(currVal_2, throwOnChange, false);
        this._MenuClose_0_6.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_0_1.dirty) {
                this._query_Button_0_1.reset([]);
                this._Item_0_4.context._buttons = this._query_Button_0_1;
                this._query_Button_0_1.notifyOnChanges();
            }
            if (this._query_Icon_0_2.dirty) {
                this._query_Icon_0_2.reset([]);
                this._Item_0_4.context._icons = this._query_Icon_0_2;
                this._query_Icon_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_0_4.context.ngAfterContentInit();
            }
        }
        var currVal_3 = import4.interpolate(1, '\n        ', this.context.$implicit.title, '\n      ');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_1, currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_MyApp3.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.parent.context.openPage(this.context.$implicit) !== false);
        var pd_1 = (this._MenuClose_0_6.context.close() !== false);
        return ((true && pd_0) && pd_1);
    };
    return _View_MyApp3;
}(import1.AppView));
function viewFactory_MyApp3(viewUtils, parentInjector, declarationEl) {
    return new _View_MyApp3(viewUtils, parentInjector, declarationEl);
}
var _View_MyApp4 = (function (_super) {
    __extends(_View_MyApp4, _super);
    function _View_MyApp4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyApp4, renderType_MyApp, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MyApp4.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_0, 'padding', '');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import34.viewFactory_Content0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Content_0_4 = new import34.Wrapper_Content(this.parentInjector.get(import21.Config), new import23.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import20.App), this.parentInjector.get(import22.Keyboard), this.parentInjector.get(import11.NgZone), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import38.Tabs, null));
        this._appEl_0.initComponent(this._Content_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n  ', null);
        this._el_2 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_2, 'block', '');
        this.renderer.setElementAttribute(this._el_2, 'ion-button', '');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import47.viewFactory_Button0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Button_2_4 = new import47.Wrapper_Button(null, '', this.parentInjector.get(import21.Config), new import23.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Button_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, 'Login ', null);
        compView_2.create(this._Button_2_4.context, [[].concat([this._text_3])], null);
        this._text_4 = this.renderer.createText(null, '\n', null);
        compView_0.create(this._Content_0_4.context, [
            [],
            [].concat([
                this._text_1,
                this._el_2,
                this._text_4
            ]),
            []
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [disposable_0], []);
        return null;
    };
    _View_MyApp4.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import48.Button) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._Button_2_4.context;
        }
        if (((token === import45.Content) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._Content_0_4.context;
        }
        return notFoundResult;
    };
    _View_MyApp4.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Content_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        var currVal_2 = '';
        this._Button_2_4.check_block(currVal_2, throwOnChange, false);
        if (this._Button_2_4.detectChangesInternal(this, this._el_2, throwOnChange)) {
            this._appEl_2.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Button_2_4.context.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Content_0_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementClass(this._el_0, 'statusbar-padding', currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_MyApp4.prototype.destroyInternal = function () {
        this._Content_0_4.context.ngOnDestroy();
    };
    _View_MyApp4.prototype._handle_click_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.login() !== false);
        return (true && pd_0);
    };
    return _View_MyApp4;
}(import1.AppView));
function viewFactory_MyApp4(viewUtils, parentInjector, declarationEl) {
    return new _View_MyApp4(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=app.component.ngfactory.js.map