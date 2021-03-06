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
import * as import0 from './profile';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../services/auth/auth.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/menu/menu-toggle.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import16 from '@angular/core/src/linker/query_list';
import * as import17 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import19 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import20 from 'ionic-angular/config/config';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from 'ionic-angular/navigation/view-controller';
import * as import23 from 'ionic-angular/components/app/app';
import * as import24 from 'ionic-angular/navigation/nav-controller';
import * as import25 from 'ionic-angular/components/menu/menu-controller';
import * as import26 from 'ionic-angular/components/toolbar/toolbar';
import * as import27 from '@angular/core/src/linker/template_ref';
import * as import28 from 'ionic-angular/components/icon/icon';
import * as import29 from 'ionic-angular/components/button/button';
import * as import30 from 'ionic-angular/components/menu/menu-toggle';
import * as import31 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import32 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import33 from 'ionic-angular/components/navbar/navbar';
import * as import34 from '@angular/common/src/directives/ng_if';
import * as import35 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import36 from 'ionic-angular/util/keyboard';
import * as import37 from '@angular/core/src/zone/ng_zone';
import * as import38 from 'ionic-angular/components/tabs/tabs';
import * as import39 from 'ionic-angular/components/content/content';
import * as import40 from '../../node_modules/ionic-angular/components/card/card.ngfactory';
import * as import41 from 'ionic-angular/components/card/card';
import * as import42 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import43 from '../../node_modules/ionic-angular/components/avatar/avatar.ngfactory';
import * as import44 from 'ionic-angular/util/form';
import * as import45 from 'ionic-angular/components/item/item-reorder';
import * as import46 from 'ionic-angular/components/avatar/avatar';
import * as import47 from 'ionic-angular/components/item/item';
import * as import48 from '@angular/core/src/security';
export var Wrapper_Profile = (function () {
    function Wrapper_Profile(p0) {
        this.changed = false;
        this.context = new import0.Profile(p0);
    }
    Wrapper_Profile.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    return Wrapper_Profile;
}());
var renderType_Profile_Host = null;
var _View_Profile_Host0 = (function (_super) {
    __extends(_View_Profile_Host0, _super);
    function _View_Profile_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Profile_Host0, renderType_Profile_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Profile_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-profile', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Profile0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Profile_0_4 = new Wrapper_Profile(this.parentInjector.get(import8.AuthService));
        this._appEl_0.initComponent(this._Profile_0_4.context, [], compView_0);
        compView_0.create(this._Profile_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Profile_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Profile) && (0 === requestNodeIndex))) {
            return this._Profile_0_4.context;
        }
        return notFoundResult;
    };
    _View_Profile_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Profile_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Profile_Host0;
}(import1.AppView));
function viewFactory_Profile_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Profile_Host === null)) {
        (renderType_Profile_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_Profile_Host0(viewUtils, parentInjector, declarationEl);
}
export var ProfileNgFactory = new import10.ComponentFactory('page-profile', viewFactory_Profile_Host0, import0.Profile);
var styles_Profile = [];
var renderType_Profile = null;
var _View_Profile0 = (function (_super) {
    __extends(_View_Profile0, _super);
    function _View_Profile0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Profile0, renderType_Profile, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Profile0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n  \n', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_1_3 = new import11.Wrapper_Header(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_1), this.renderer, this.parentInjector.get(import22.ViewController, null));
        this._text_2 = this.renderer.createText(this._el_1, '\n  ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'toolbar');
        this._appEl_3 = new import3.AppElement(3, 1, this, this._el_3);
        var compView_3 = import12.viewFactory_Navbar0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Navbar_3_4 = new import12.Wrapper_Navbar(this.parentInjector.get(import23.App), this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import24.NavController, null), this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_3), this.renderer);
        this._appEl_3.initComponent(this._Navbar_3_4.context, [], compView_3);
        this._text_4 = this.renderer.createText(null, '\n    ', null);
        this._el_5 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_5, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_5, 'menuToggle', '');
        this._appEl_5 = new import3.AppElement(5, 3, this, this._el_5);
        var compView_5 = import13.viewFactory_Button0(this.viewUtils, this.injector(5), this._appEl_5);
        this._Button_5_4 = new import13.Wrapper_Button('', '', this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_5), this.renderer);
        this._MenuToggle_5_5 = new import14.Wrapper_MenuToggle(this.parentInjector.get(import25.MenuController), new import21.ElementRef(this._el_5), this.parentInjector.get(import22.ViewController, null), this._Navbar_3_4.context);
        this._ToolbarItem_5_6 = new import15.Wrapper_ToolbarItem(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_5), this.renderer, this.parentInjector.get(import26.Toolbar, null), this._Navbar_3_4.context);
        this._query_Button_5_0 = new import16.QueryList();
        this._appEl_5.initComponent(this._Button_5_4.context, [], compView_5);
        this._text_6 = this.renderer.createText(null, '\n      ', null);
        this._el_7 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_7, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_7, 'role', 'img');
        this._Icon_7_3 = new import17.Wrapper_Icon(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_7), this.renderer);
        this._text_8 = this.renderer.createText(null, '\n    ', null);
        compView_5.create(this._Button_5_4.context, [[].concat([
                this._text_6,
                this._el_7,
                this._text_8
            ])], null);
        this._text_9 = this.renderer.createText(null, '\n    ', null);
        this._el_10 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_10 = new import3.AppElement(10, 3, this, this._el_10);
        var compView_10 = import18.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(10), this._appEl_10);
        this._ToolbarTitle_10_4 = new import18.Wrapper_ToolbarTitle(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_10), this.renderer, this.parentInjector.get(import26.Toolbar, null), this._Navbar_3_4.context);
        this._appEl_10.initComponent(this._ToolbarTitle_10_4.context, [], compView_10);
        this._text_11 = this.renderer.createText(null, 'Profile', null);
        compView_10.create(this._ToolbarTitle_10_4.context, [[].concat([this._text_11])], null);
        this._text_12 = this.renderer.createText(null, '\n  ', null);
        compView_3.create(this._Navbar_3_4.context, [
            [].concat([this._el_5]),
            [],
            [],
            [].concat([
                this._text_4,
                this._text_9,
                this._el_10,
                this._text_12
            ])
        ], null);
        this._text_13 = this.renderer.createText(this._el_1, '\n', null);
        this._text_14 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._anchor_15 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_15 = new import3.AppElement(15, null, this, this._anchor_15);
        this._TemplateRef_15_5 = new import27.TemplateRef_(this._appEl_15, viewFactory_Profile1);
        this._NgIf_15_6 = new import19.Wrapper_NgIf(this._appEl_15.vcRef, this._TemplateRef_15_5);
        this._text_16 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._anchor_17 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_17 = new import3.AppElement(17, null, this, this._anchor_17);
        this._TemplateRef_17_5 = new import27.TemplateRef_(this._appEl_17, viewFactory_Profile2);
        this._NgIf_17_6 = new import19.Wrapper_NgIf(this._appEl_17.vcRef, this._TemplateRef_17_5);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_5, 'click', this.eventHandler(this._handle_click_5_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._anchor_15,
            this._text_16,
            this._anchor_17
        ], [disposable_0], []);
        return null;
    };
    _View_Profile0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import28.Icon) && (7 === requestNodeIndex))) {
            return this._Icon_7_3.context;
        }
        if (((token === import29.Button) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Button_5_4.context;
        }
        if (((token === import30.MenuToggle) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._MenuToggle_5_5.context;
        }
        if (((token === import31.ToolbarItem) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._ToolbarItem_5_6.context;
        }
        if (((token === import32.ToolbarTitle) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._ToolbarTitle_10_4.context;
        }
        if (((token === import33.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Navbar_3_4.context;
        }
        if (((token === import26.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._Header_1_3.context;
        }
        if (((token === import27.TemplateRef) && (15 === requestNodeIndex))) {
            return this._TemplateRef_15_5;
        }
        if (((token === import34.NgIf) && (15 === requestNodeIndex))) {
            return this._NgIf_15_6.context;
        }
        if (((token === import27.TemplateRef) && (17 === requestNodeIndex))) {
            return this._TemplateRef_17_5;
        }
        if (((token === import34.NgIf) && (17 === requestNodeIndex))) {
            return this._NgIf_17_6.context;
        }
        return notFoundResult;
    };
    _View_Profile0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_1_3.detectChangesInternal(this, this._el_1, throwOnChange);
        this._Navbar_3_4.detectChangesInternal(this, this._el_3, throwOnChange);
        if (this._Button_5_4.detectChangesInternal(this, this._el_5, throwOnChange)) {
            this._appEl_5.componentView.markAsCheckOnce();
        }
        var currVal_3 = '';
        this._MenuToggle_5_5.check_menuToggle(currVal_3, throwOnChange, false);
        this._MenuToggle_5_5.detectChangesInternal(this, this._el_5, throwOnChange);
        this._ToolbarItem_5_6.detectChangesInternal(this, this._el_5, throwOnChange);
        var currVal_5 = 'menu';
        this._Icon_7_3.check_name(currVal_5, throwOnChange, false);
        this._Icon_7_3.detectChangesInternal(this, this._el_7, throwOnChange);
        if (this._ToolbarTitle_10_4.detectChangesInternal(this, this._el_10, throwOnChange)) {
            this._appEl_10.componentView.markAsCheckOnce();
        }
        var currVal_7 = !this.context.auth.authenticated();
        this._NgIf_15_6.check_ngIf(currVal_7, throwOnChange, false);
        this._NgIf_15_6.detectChangesInternal(this, this._anchor_15, throwOnChange);
        var currVal_8 = this.context.auth.authenticated();
        this._NgIf_17_6.check_ngIf(currVal_8, throwOnChange, false);
        this._NgIf_17_6.detectChangesInternal(this, this._anchor_17, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_5_0.dirty) {
                this._query_Button_5_0.reset([this._Button_5_4.context]);
                this._ToolbarItem_5_6.context._buttons = this._query_Button_5_0;
                this._query_Button_5_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_5_4.context.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_3_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_3, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_3_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_3, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_4 = this._MenuToggle_5_5.context.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_5, 'hidden', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_6 = this._Icon_7_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_7, 'hide', currVal_6);
            this._expr_6 = currVal_6;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_3_4.context.ngAfterViewInit();
            }
        }
    };
    _View_Profile0.prototype.destroyInternal = function () {
        this._Icon_7_3.context.ngOnDestroy();
    };
    _View_Profile0.prototype._handle_click_5_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_5_5.context.toggle() !== false);
        return (true && pd_0);
    };
    return _View_Profile0;
}(import1.AppView));
export function viewFactory_Profile0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Profile === null)) {
        (renderType_Profile = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_Profile, {}));
    }
    return new _View_Profile0(viewUtils, parentInjector, declarationEl);
}
var _View_Profile1 = (function (_super) {
    __extends(_View_Profile1, _super);
    function _View_Profile1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Profile1, renderType_Profile, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Profile1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_0, 'padding', '');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import35.viewFactory_Content0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Content_0_4 = new import35.Wrapper_Content(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import23.App), this.parentInjector.get(import36.Keyboard), this.parentInjector.get(import37.NgZone), this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import38.Tabs, null));
        this._appEl_0.initComponent(this._Content_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n  \n  ', null);
        this._el_2 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_2, 'block', '');
        this.renderer.setElementAttribute(this._el_2, 'ion-button', '');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import13.viewFactory_Button0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Button_2_4 = new import13.Wrapper_Button(null, '', this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Button_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, 'Login', null);
        compView_2.create(this._Button_2_4.context, [[].concat([this._text_3])], null);
        this._text_4 = this.renderer.createText(null, '\n  \n', null);
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
    _View_Profile1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import29.Button) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._Button_2_4.context;
        }
        if (((token === import39.Content) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._Content_0_4.context;
        }
        return notFoundResult;
    };
    _View_Profile1.prototype.detectChangesInternal = function (throwOnChange) {
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
    _View_Profile1.prototype.destroyInternal = function () {
        this._Content_0_4.context.ngOnDestroy();
    };
    _View_Profile1.prototype._handle_click_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.auth.login() !== false);
        return (true && pd_0);
    };
    return _View_Profile1;
}(import1.AppView));
function viewFactory_Profile1(viewUtils, parentInjector, declarationEl) {
    return new _View_Profile1(viewUtils, parentInjector, declarationEl);
}
var _View_Profile2 = (function (_super) {
    __extends(_View_Profile2, _super);
    function _View_Profile2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Profile2, renderType_Profile, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Profile2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_0, 'padding', '');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import35.viewFactory_Content0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Content_0_4 = new import35.Wrapper_Content(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import23.App), this.parentInjector.get(import36.Keyboard), this.parentInjector.get(import37.NgZone), this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import38.Tabs, null));
        this._appEl_0.initComponent(this._Content_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n  \n  ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-card', null);
        this._Card_2_3 = new import40.Wrapper_Card(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_2, '\n\n    ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import27.TemplateRef_(this._appEl_4, viewFactory_Profile3);
        this._NgIf_4_6 = new import19.Wrapper_NgIf(this._appEl_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(this._el_2, '\n  \n  ', null);
        this._text_6 = this.renderer.createText(null, '\n  \n  ', null);
        this._el_7 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_7, 'block', '');
        this.renderer.setElementAttribute(this._el_7, 'ion-button', '');
        this._appEl_7 = new import3.AppElement(7, 0, this, this._el_7);
        var compView_7 = import13.viewFactory_Button0(this.viewUtils, this.injector(7), this._appEl_7);
        this._Button_7_4 = new import13.Wrapper_Button(null, '', this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_7), this.renderer);
        this._appEl_7.initComponent(this._Button_7_4.context, [], compView_7);
        this._text_8 = this.renderer.createText(null, 'Logout', null);
        compView_7.create(this._Button_7_4.context, [[].concat([this._text_8])], null);
        this._text_9 = this.renderer.createText(null, '\n  \n', null);
        compView_0.create(this._Content_0_4.context, [
            [],
            [].concat([
                this._text_1,
                this._el_2,
                this._text_6,
                this._el_7,
                this._text_9
            ]),
            []
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_7, 'click', this.eventHandler(this._handle_click_7_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9
        ], [disposable_0], []);
        return null;
    };
    _View_Profile2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import27.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import34.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6.context;
        }
        if (((token === import41.Card) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._Card_2_3.context;
        }
        if (((token === import29.Button) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Button_7_4.context;
        }
        if (((token === import39.Content) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._Content_0_4.context;
        }
        return notFoundResult;
    };
    _View_Profile2.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Content_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._Card_2_3.detectChangesInternal(this, this._el_2, throwOnChange);
        var currVal_1 = this.parent.context.myUser;
        this._NgIf_4_6.check_ngIf(currVal_1, throwOnChange, false);
        this._NgIf_4_6.detectChangesInternal(this, this._anchor_4, throwOnChange);
        var currVal_3 = '';
        this._Button_7_4.check_block(currVal_3, throwOnChange, false);
        if (this._Button_7_4.detectChangesInternal(this, this._el_7, throwOnChange)) {
            this._appEl_7.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Button_7_4.context.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Content_0_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementClass(this._el_0, 'statusbar-padding', currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_Profile2.prototype.destroyInternal = function () {
        this._Content_0_4.context.ngOnDestroy();
    };
    _View_Profile2.prototype._handle_click_7_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.auth.logout() !== false);
        return (true && pd_0);
    };
    return _View_Profile2;
}(import1.AppView));
function viewFactory_Profile2(viewUtils, parentInjector, declarationEl) {
    return new _View_Profile2(viewUtils, parentInjector, declarationEl);
}
var _View_Profile3 = (function (_super) {
    __extends(_View_Profile3, _super);
    function _View_Profile3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Profile3, renderType_Profile, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Profile3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import42.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import42.Wrapper_Item(this.parent.parentInjector.get(import44.Form), this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_0), this.renderer, this.parent.parentInjector.get(import45.ItemReorder, null));
        this._ItemContent_0_5 = new import42.Wrapper_ItemContent();
        this._query_Label_0_0 = new import16.QueryList();
        this._query_Button_0_1 = new import16.QueryList();
        this._query_Icon_0_2 = new import16.QueryList();
        this._appEl_0.initComponent(this._Item_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n      ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-avatar', null);
        this.renderer.setElementAttribute(this._el_2, 'item-left', '');
        this._Avatar_2_3 = new import43.Wrapper_Avatar();
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'img', null);
        this._text_5 = this.renderer.createText(this._el_2, '\n      ', null);
        this._text_6 = this.renderer.createText(null, '\n      ', null);
        this._el_7 = this.renderer.createElement(null, 'h1', null);
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(null, '\n      ', null);
        this._el_10 = this.renderer.createElement(null, 'h2', null);
        this._text_11 = this.renderer.createText(this._el_10, '', null);
        this._text_12 = this.renderer.createText(null, '\n\n    ', null);
        this._query_Label_0_0.reset([]);
        this._Item_0_4.context.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4.context, [
            [].concat([this._el_2]),
            [],
            [].concat([
                this._text_1,
                this._text_6,
                this._el_7,
                this._text_9,
                this._el_10,
                this._text_12
            ]),
            [],
            []
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12
        ], [], []);
        return null;
    };
    _View_Profile3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import46.Avatar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._Avatar_2_3.context;
        }
        if (((token === import47.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Item_0_4.context;
        }
        if (((token === import47.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._ItemContent_0_5.context;
        }
        return notFoundResult;
    };
    _View_Profile3.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Item_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._ItemContent_0_5.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Avatar_2_3.detectChangesInternal(this, this._el_2, throwOnChange);
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
        var currVal_0 = import4.interpolate(1, '', this.parent.parent.context.myUser.picture, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_4, 'src', this.viewUtils.sanitizer.sanitize(import48.SecurityContext.URL, currVal_0));
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(1, '', this.parent.parent.context.myUser.nickname, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_8, currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = import4.interpolate(1, '', this.parent.parent.context.myUser.email, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_11, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Profile3;
}(import1.AppView));
function viewFactory_Profile3(viewUtils, parentInjector, declarationEl) {
    return new _View_Profile3(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=profile.ngfactory.js.map