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
import * as import0 from './explore';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '../../services/recipe-service';
import * as import10 from '../../services/auth/auth.service';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/menu/menu-toggle.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import21 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import22 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import23 from '../../node_modules/ionic-angular/components/grid/grid.ngfactory';
import * as import24 from '../../node_modules/ionic-angular/components/input/input.ngfactory';
import * as import25 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import26 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import27 from 'ionic-angular/config/config';
import * as import28 from '@angular/core/src/linker/element_ref';
import * as import29 from 'ionic-angular/navigation/view-controller';
import * as import30 from 'ionic-angular/components/app/app';
import * as import31 from 'ionic-angular/components/menu/menu-controller';
import * as import32 from 'ionic-angular/components/toolbar/toolbar';
import * as import33 from 'ionic-angular/util/keyboard';
import * as import34 from '@angular/core/src/zone/ng_zone';
import * as import35 from 'ionic-angular/components/tabs/tabs';
import * as import36 from 'ionic-angular/gestures/gesture-controller';
import * as import37 from 'ionic-angular/util/form';
import * as import38 from 'ionic-angular/components/item/item';
import * as import39 from 'ionic-angular/platform/platform';
import * as import40 from '@angular/forms/src/directives/ng_control';
import * as import41 from 'ionic-angular/components/item/item-reorder';
import * as import42 from '@angular/core/src/linker/template_ref';
import * as import43 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import44 from 'ionic-angular/components/icon/icon';
import * as import45 from 'ionic-angular/components/button/button';
import * as import46 from 'ionic-angular/components/menu/menu-toggle';
import * as import47 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import48 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import49 from 'ionic-angular/components/navbar/navbar';
import * as import50 from 'ionic-angular/components/input/input';
import * as import51 from 'ionic-angular/components/grid/grid';
import * as import52 from '@angular/common/src/directives/ng_for';
import * as import53 from 'ionic-angular/components/list/list';
import * as import54 from 'ionic-angular/components/content/content';
export var Wrapper_Explore = (function () {
    function Wrapper_Explore(p0, p1, p2) {
        this.changed = false;
        this.context = new import0.Explore(p0, p1, p2);
    }
    Wrapper_Explore.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    return Wrapper_Explore;
}());
var renderType_Explore_Host = null;
var _View_Explore_Host0 = (function (_super) {
    __extends(_View_Explore_Host0, _super);
    function _View_Explore_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Explore_Host0, renderType_Explore_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Explore_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-explore', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Explore0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Explore_0_4 = new Wrapper_Explore(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.RecipeService), this.parentInjector.get(import10.AuthService));
        this._appEl_0.initComponent(this._Explore_0_4.context, [], compView_0);
        compView_0.create(this._Explore_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Explore_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Explore) && (0 === requestNodeIndex))) {
            return this._Explore_0_4.context;
        }
        return notFoundResult;
    };
    _View_Explore_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Explore_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Explore_Host0;
}(import1.AppView));
function viewFactory_Explore_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Explore_Host === null)) {
        (renderType_Explore_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_Explore_Host0(viewUtils, parentInjector, declarationEl);
}
export var ExploreNgFactory = new import12.ComponentFactory('page-explore', viewFactory_Explore_Host0, import0.Explore);
var styles_Explore = [];
var renderType_Explore = null;
var _View_Explore0 = (function (_super) {
    __extends(_View_Explore0, _super);
    function _View_Explore0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Explore0, renderType_Explore, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Explore0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import13.Wrapper_Header(this.parentInjector.get(import27.Config), new import28.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import29.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import14.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import14.Wrapper_Navbar(this.parentInjector.get(import30.App), this.parentInjector.get(import29.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import27.Config), new import28.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_4, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_4, 'menuToggle', '');
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import15.viewFactory_Button0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Button_4_4 = new import15.Wrapper_Button('', '', this.parentInjector.get(import27.Config), new import28.ElementRef(this._el_4), this.renderer);
        this._MenuToggle_4_5 = new import16.Wrapper_MenuToggle(this.parentInjector.get(import31.MenuController), new import28.ElementRef(this._el_4), this.parentInjector.get(import29.ViewController, null), this._Navbar_2_4.context);
        this._ToolbarItem_4_6 = new import17.Wrapper_ToolbarItem(this.parentInjector.get(import27.Config), new import28.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import32.Toolbar, null), this._Navbar_2_4.context);
        this._query_Button_4_0 = new import18.QueryList();
        this._appEl_4.initComponent(this._Button_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_6, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_6, 'role', 'img');
        this._Icon_6_3 = new import19.Wrapper_Icon(this.parentInjector.get(import27.Config), new import28.ElementRef(this._el_6), this.renderer);
        this._text_7 = this.renderer.createText(null, '\n    ', null);
        compView_4.create(this._Button_4_4.context, [[].concat([
                this._text_5,
                this._el_6,
                this._text_7
            ])], null);
        this._text_8 = this.renderer.createText(null, '\n    ', null);
        this._el_9 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_9 = new import3.AppElement(9, 2, this, this._el_9);
        var compView_9 = import20.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(9), this._appEl_9);
        this._ToolbarTitle_9_4 = new import20.Wrapper_ToolbarTitle(this.parentInjector.get(import27.Config), new import28.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import32.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_9.initComponent(this._ToolbarTitle_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, 'Explore', null);
        compView_9.create(this._ToolbarTitle_9_4.context, [[].concat([this._text_10])], null);
        this._text_11 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4.context, [
            [].concat([this._el_4]),
            [],
            [],
            [].concat([
                this._text_3,
                this._text_8,
                this._el_9,
                this._text_11
            ])
        ], null);
        this._text_12 = this.renderer.createText(this._el_0, '\n', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_14 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_14, 'padding', '');
        this._appEl_14 = new import3.AppElement(14, null, this, this._el_14);
        var compView_14 = import21.viewFactory_Content0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Content_14_4 = new import21.Wrapper_Content(this.parentInjector.get(import27.Config), new import28.ElementRef(this._el_14), this.renderer, this.parentInjector.get(import30.App), this.parentInjector.get(import33.Keyboard), this.parentInjector.get(import34.NgZone), this.parentInjector.get(import29.ViewController, null), this.parentInjector.get(import35.Tabs, null));
        this._appEl_14.initComponent(this._Content_14_4.context, [], compView_14);
        this._text_15 = this.renderer.createText(null, '\n    ', null);
        this._el_16 = this.renderer.createElement(null, 'ion-list', null);
        this._List_16_3 = new import22.Wrapper_List(this.parentInjector.get(import27.Config), new import28.ElementRef(this._el_16), this.renderer, this.parentInjector.get(import36.GestureController));
        this._text_17 = this.renderer.createText(this._el_16, '\n          ', null);
        this._el_18 = this.renderer.createElement(this._el_16, 'ion-grid', null);
        this._Grid_18_3 = new import23.Wrapper_Grid();
        this._text_19 = this.renderer.createText(this._el_18, '\n            ', null);
        this._el_20 = this.renderer.createElement(this._el_18, 'ion-row', null);
        this._Row_20_3 = new import23.Wrapper_Row();
        this._text_21 = this.renderer.createText(this._el_20, ' \n                ', null);
        this._el_22 = this.renderer.createElement(this._el_20, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_22, 'width-90', '');
        this._Col_22_3 = new import23.Wrapper_Col();
        this._text_23 = this.renderer.createText(this._el_22, '\n                    ', null);
        this._el_24 = this.renderer.createElement(this._el_22, 'ion-textarea', null);
        this.renderer.setElementAttribute(this._el_24, 'placeholder', 'Search');
        this._appEl_24 = new import3.AppElement(24, 22, this, this._el_24);
        var compView_24 = import24.viewFactory_TextArea0(this.viewUtils, this.injector(24), this._appEl_24);
        this._TextArea_24_4 = new import24.Wrapper_TextArea(this.parentInjector.get(import27.Config), this.parentInjector.get(import37.Form), this.parentInjector.get(import38.Item, null), this.parentInjector.get(import30.App), this.parentInjector.get(import39.Platform), new import28.ElementRef(this._el_24), this.renderer, this._Content_14_4.context, this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import40.NgControl, null));
        this._appEl_24.initComponent(this._TextArea_24_4.context, [], compView_24);
        compView_24.create(this._TextArea_24_4.context, [], null);
        this._text_25 = this.renderer.createText(this._el_22, '\n                ', null);
        this._text_26 = this.renderer.createText(this._el_20, '\n                ', null);
        this._el_27 = this.renderer.createElement(this._el_20, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_27, 'width-10', '');
        this._Col_27_3 = new import23.Wrapper_Col();
        this._text_28 = this.renderer.createText(this._el_27, '\n                    ', null);
        this._el_29 = this.renderer.createElement(this._el_27, 'button', null);
        this.renderer.setElementAttribute(this._el_29, 'ion-button', '');
        this._appEl_29 = new import3.AppElement(29, 27, this, this._el_29);
        var compView_29 = import15.viewFactory_Button0(this.viewUtils, this.injector(29), this._appEl_29);
        this._Button_29_4 = new import15.Wrapper_Button(null, '', this.parentInjector.get(import27.Config), new import28.ElementRef(this._el_29), this.renderer);
        this._appEl_29.initComponent(this._Button_29_4.context, [], compView_29);
        this._text_30 = this.renderer.createText(null, 'Search', null);
        compView_29.create(this._Button_29_4.context, [[].concat([this._text_30])], null);
        this._text_31 = this.renderer.createText(this._el_27, '\n                ', null);
        this._text_32 = this.renderer.createText(this._el_20, '\n            ', null);
        this._text_33 = this.renderer.createText(this._el_18, '\n        ', null);
        this._text_34 = this.renderer.createText(this._el_16, '\n        ', null);
        this._el_35 = this.renderer.createElement(this._el_16, 'ion-item-divider', null);
        this.renderer.setElementAttribute(this._el_35, 'class', 'item item-divider');
        this.renderer.setElementAttribute(this._el_35, 'color', 'light');
        this._appEl_35 = new import3.AppElement(35, 16, this, this._el_35);
        var compView_35 = import25.viewFactory_Item0(this.viewUtils, this.injector(35), this._appEl_35);
        this._Item_35_4 = new import25.Wrapper_Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import27.Config), new import28.ElementRef(this._el_35), this.renderer, this.parentInjector.get(import41.ItemReorder, null));
        this._ItemDivider_35_5 = new import25.Wrapper_ItemDivider(this.parentInjector.get(import37.Form), this.parentInjector.get(import27.Config), new import28.ElementRef(this._el_35), this.renderer);
        this._query_Label_35_0 = new import18.QueryList();
        this._query_Button_35_1 = new import18.QueryList();
        this._query_Icon_35_2 = new import18.QueryList();
        this._appEl_35.initComponent(this._Item_35_4.context, [], compView_35);
        this._text_36 = this.renderer.createText(null, 'Select Category', null);
        this._query_Label_35_0.reset([]);
        this._Item_35_4.context.contentLabel = this._query_Label_35_0.first;
        compView_35.create(this._Item_35_4.context, [
            [],
            [],
            [].concat([this._text_36]),
            [],
            []
        ], null);
        this._text_37 = this.renderer.createText(this._el_16, '\n        ', null);
        this._anchor_38 = this.renderer.createTemplateAnchor(this._el_16, null);
        this._appEl_38 = new import3.AppElement(38, 16, this, this._anchor_38);
        this._TemplateRef_38_5 = new import42.TemplateRef_(this._appEl_38, viewFactory_Explore1);
        this._NgFor_38_6 = new import26.Wrapper_NgFor(this._appEl_38.vcRef, this._TemplateRef_38_5, this.parentInjector.get(import43.IterableDiffers), this.ref);
        this._text_39 = this.renderer.createText(this._el_16, '\n    ', null);
        this._text_40 = this.renderer.createText(null, '\n', null);
        compView_14.create(this._Content_14_4.context, [
            [],
            [].concat([
                this._text_15,
                this._el_16,
                this._text_40
            ]),
            []
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_4, 'click', this.eventHandler(this._handle_click_4_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this.init([], [
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
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._anchor_38,
            this._text_39,
            this._text_40
        ], [disposable_0], []);
        return null;
    };
    _View_Explore0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import44.Icon) && (6 === requestNodeIndex))) {
            return this._Icon_6_3.context;
        }
        if (((token === import45.Button) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Button_4_4.context;
        }
        if (((token === import46.MenuToggle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._MenuToggle_4_5.context;
        }
        if (((token === import47.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ToolbarItem_4_6.context;
        }
        if (((token === import48.ToolbarTitle) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._ToolbarTitle_9_4.context;
        }
        if (((token === import49.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import32.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Header_0_3.context;
        }
        if (((token === import50.TextArea) && (24 === requestNodeIndex))) {
            return this._TextArea_24_4.context;
        }
        if (((token === import51.Col) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._Col_22_3.context;
        }
        if (((token === import45.Button) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._Button_29_4.context;
        }
        if (((token === import51.Col) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._Col_27_3.context;
        }
        if (((token === import51.Row) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._Row_20_3.context;
        }
        if (((token === import51.Grid) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._Grid_18_3.context;
        }
        if (((token === import38.Item) && ((35 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._Item_35_4.context;
        }
        if (((token === import38.ItemDivider) && ((35 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._ItemDivider_35_5.context;
        }
        if (((token === import42.TemplateRef) && (38 === requestNodeIndex))) {
            return this._TemplateRef_38_5;
        }
        if (((token === import52.NgFor) && (38 === requestNodeIndex))) {
            return this._NgFor_38_6.context;
        }
        if (((token === import53.List) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._List_16_3.context;
        }
        if (((token === import54.Content) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 40)))) {
            return this._Content_14_4.context;
        }
        return notFoundResult;
    };
    _View_Explore0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._Button_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        var currVal_3 = '';
        this._MenuToggle_4_5.check_menuToggle(currVal_3, throwOnChange, false);
        this._MenuToggle_4_5.detectChangesInternal(this, this._el_4, throwOnChange);
        this._ToolbarItem_4_6.detectChangesInternal(this, this._el_4, throwOnChange);
        var currVal_5 = 'menu';
        this._Icon_6_3.check_name(currVal_5, throwOnChange, false);
        this._Icon_6_3.detectChangesInternal(this, this._el_6, throwOnChange);
        if (this._ToolbarTitle_9_4.detectChangesInternal(this, this._el_9, throwOnChange)) {
            this._appEl_9.componentView.markAsCheckOnce();
        }
        if (this._Content_14_4.detectChangesInternal(this, this._el_14, throwOnChange)) {
            this._appEl_14.componentView.markAsCheckOnce();
        }
        this._List_16_3.detectChangesInternal(this, this._el_16, throwOnChange);
        this._Grid_18_3.detectChangesInternal(this, this._el_18, throwOnChange);
        this._Row_20_3.detectChangesInternal(this, this._el_20, throwOnChange);
        this._Col_22_3.detectChangesInternal(this, this._el_22, throwOnChange);
        var currVal_8 = 'Search';
        this._TextArea_24_4.check_placeholder(currVal_8, throwOnChange, false);
        this._TextArea_24_4.detectChangesInternal(this, this._el_24, throwOnChange);
        this._Col_27_3.detectChangesInternal(this, this._el_27, throwOnChange);
        if (this._Button_29_4.detectChangesInternal(this, this._el_29, throwOnChange)) {
            this._appEl_29.componentView.markAsCheckOnce();
        }
        var currVal_9 = 'light';
        this._Item_35_4.check_color(currVal_9, throwOnChange, false);
        if (this._Item_35_4.detectChangesInternal(this, this._el_35, throwOnChange)) {
            this._appEl_35.componentView.markAsCheckOnce();
        }
        var currVal_10 = 'light';
        this._ItemDivider_35_5.check_color(currVal_10, throwOnChange, false);
        this._ItemDivider_35_5.detectChangesInternal(this, this._el_35, throwOnChange);
        var currVal_11 = this.context.catagories;
        this._NgFor_38_6.check_ngForOf(currVal_11, throwOnChange, false);
        this._NgFor_38_6.detectChangesInternal(this, this._anchor_38, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_4_0.dirty) {
                this._query_Button_4_0.reset([this._Button_4_4.context]);
                this._ToolbarItem_4_6.context._buttons = this._query_Button_4_0;
                this._query_Button_4_0.notifyOnChanges();
            }
            if (this._query_Button_35_1.dirty) {
                this._query_Button_35_1.reset([]);
                this._Item_35_4.context._buttons = this._query_Button_35_1;
                this._query_Button_35_1.notifyOnChanges();
            }
            if (this._query_Icon_35_2.dirty) {
                this._query_Icon_35_2.reset([]);
                this._Item_35_4.context._icons = this._query_Icon_35_2;
                this._query_Icon_35_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_4_4.context.ngAfterContentInit();
            }
            this._TextArea_24_4.context.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Button_29_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_35_4.context.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_2_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_4 = this._MenuToggle_4_5.context.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_4, 'hidden', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_6 = this._Icon_6_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_6, 'hide', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._Content_14_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_14, 'statusbar-padding', currVal_7);
            this._expr_7 = currVal_7;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_Explore0.prototype.destroyInternal = function () {
        this._Icon_6_3.context.ngOnDestroy();
        this._TextArea_24_4.context.ngOnDestroy();
        this._Content_14_4.context.ngOnDestroy();
    };
    _View_Explore0.prototype._handle_click_4_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_4_5.context.toggle() !== false);
        return (true && pd_0);
    };
    return _View_Explore0;
}(import1.AppView));
export function viewFactory_Explore0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Explore === null)) {
        (renderType_Explore = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, styles_Explore, {}));
    }
    return new _View_Explore0(viewUtils, parentInjector, declarationEl);
}
var _View_Explore1 = (function (_super) {
    __extends(_View_Explore1, _super);
    function _View_Explore1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Explore1, renderType_Explore, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Explore1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_0, 'ion-item', '');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import25.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import25.Wrapper_Item(this.parent.parentInjector.get(import37.Form), this.parent.parentInjector.get(import27.Config), new import28.ElementRef(this._el_0), this.renderer, this.parent.parentInjector.get(import41.ItemReorder, null));
        this._ItemContent_0_5 = new import25.Wrapper_ItemContent();
        this._query_Label_0_0 = new import18.QueryList();
        this._query_Button_0_1 = new import18.QueryList();
        this._query_Icon_0_2 = new import18.QueryList();
        this._appEl_0.initComponent(this._Item_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n            ', null);
        this._el_2 = this.renderer.createElement(null, 'h2', null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(null, '\n        ', null);
        this._query_Label_0_0.reset([]);
        this._Item_0_4.context.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4.context, [
            [],
            [],
            [].concat([
                this._text_1,
                this._el_2,
                this._text_4
            ]),
            [],
            []
        ], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [disposable_0], []);
        return null;
    };
    _View_Explore1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import38.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._Item_0_4.context;
        }
        if (((token === import38.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._ItemContent_0_5.context;
        }
        return notFoundResult;
    };
    _View_Explore1.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Item_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._ItemContent_0_5.detectChangesInternal(this, this._el_0, throwOnChange);
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
        var currVal_1 = import4.interpolate(1, '', this.context.$implicit.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_3, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_Explore1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.selectCategory(this.context.$implicit.Id) !== false);
        return (true && pd_0);
    };
    return _View_Explore1;
}(import1.AppView));
function viewFactory_Explore1(viewUtils, parentInjector, declarationEl) {
    return new _View_Explore1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=explore.ngfactory.js.map