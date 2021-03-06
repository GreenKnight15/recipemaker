/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './liked-recipes';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '../../services/recipe-service';
import * as import10 from '../../services/auth/auth.service';
import * as import11 from 'ionic-angular/components/modal/modal';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import16 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import17 from 'ionic-angular/config/config';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from 'ionic-angular/components/app/app';
import * as import20 from 'ionic-angular/util/keyboard';
import * as import21 from '@angular/core/src/zone/ng_zone';
import * as import22 from 'ionic-angular/navigation/view-controller';
import * as import23 from 'ionic-angular/components/tabs/tabs';
import * as import24 from 'ionic-angular/gestures/gesture-controller';
import * as import25 from '@angular/core/src/linker/template_ref';
import * as import26 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import27 from '@angular/common/src/directives/ng_for';
import * as import28 from 'ionic-angular/components/list/list';
import * as import29 from 'ionic-angular/components/content/content';
import * as import30 from '../../node_modules/ionic-angular/components/item/item-sliding.ngfactory';
import * as import31 from '@angular/core/src/linker/query_list';
import * as import32 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import33 from '../../node_modules/ionic-angular/components/grid/grid.ngfactory';
import * as import34 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import35 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import36 from '../../node_modules/ionic-angular/components/note/note.ngfactory';
import * as import37 from 'ionic-angular/util/form';
import * as import38 from 'ionic-angular/components/item/item-reorder';
import * as import39 from 'ionic-angular/components/item/item';
import * as import40 from 'ionic-angular/components/icon/icon';
import * as import41 from 'ionic-angular/components/button/button';
import * as import42 from 'ionic-angular/components/grid/grid';
import * as import43 from 'ionic-angular/components/note/note';
import * as import44 from 'ionic-angular/components/item/item-sliding';
export class Wrapper_LikedRecipes {
  context:import0.LikedRecipes;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this.changed = false;
    this.context = new import0.LikedRecipes(p0,p1,p2,p3);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
}
var renderType_LikedRecipes_Host:import2.RenderComponentType = (null as any);
class _View_LikedRecipes_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _LikedRecipes_0_4:Wrapper_LikedRecipes;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_LikedRecipes_Host0,renderType_LikedRecipes_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-liked-recipes',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_LikedRecipes0(this.viewUtils,this.injector(0),this._appEl_0);
    this._LikedRecipes_0_4 = new Wrapper_LikedRecipes(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.RecipeService),this.parentInjector.get(import10.AuthService),this.parentInjector.get(import11.ModalController));
    this._appEl_0.initComponent(this._LikedRecipes_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._LikedRecipes_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.LikedRecipes) && (0 === requestNodeIndex))) { return this._LikedRecipes_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._LikedRecipes_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_LikedRecipes_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_LikedRecipes_Host === (null as any))) { (renderType_LikedRecipes_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_LikedRecipes_Host0(viewUtils,parentInjector,declarationEl);
}
export const LikedRecipesNgFactory:import13.ComponentFactory<import0.LikedRecipes> = new import13.ComponentFactory<import0.LikedRecipes>('page-liked-recipes',viewFactory_LikedRecipes_Host0,import0.LikedRecipes);
const styles_LikedRecipes:any[] = ([] as any[]);
var renderType_LikedRecipes:import2.RenderComponentType = (null as any);
class _View_LikedRecipes0 extends import1.AppView<import0.LikedRecipes> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Content_0_4:import14.Wrapper_Content;
  _text_1:any;
  _el_2:any;
  _List_2_3:import15.Wrapper_List;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _TemplateRef_4_5:any;
  _NgFor_4_6:import16.Wrapper_NgFor;
  _text_5:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_LikedRecipes0,renderType_LikedRecipes,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_0,'padding','');
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import14.viewFactory_Content0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Content_0_4 = new import14.Wrapper_Content(this.parentInjector.get(import17.Config),new import18.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import19.App),this.parentInjector.get(import20.Keyboard),this.parentInjector.get(import21.NgZone),this.parentInjector.get(import22.ViewController,(null as any)),this.parentInjector.get(import23.Tabs,(null as any)));
    this._appEl_0.initComponent(this._Content_0_4.context,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'ion-list',(null as any));
    this._List_2_3 = new import15.Wrapper_List(this.parentInjector.get(import17.Config),new import18.ElementRef(this._el_2),this.renderer,this.parentInjector.get(import24.GestureController));
    this._text_3 = this.renderer.createText(this._el_2,'\n      ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_4 = new import3.AppElement(4,2,this,this._anchor_4);
    this._TemplateRef_4_5 = new import25.TemplateRef_(this._appEl_4,viewFactory_LikedRecipes1);
    this._NgFor_4_6 = new import16.Wrapper_NgFor(this._appEl_4.vcRef,this._TemplateRef_4_5,this.parentInjector.get(import26.IterableDiffers),this.ref);
    this._text_5 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    compView_0.create(this._Content_0_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_1,
        this._el_2
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._anchor_4,
      this._text_5
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import25.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import27.NgFor) && (4 === requestNodeIndex))) { return this._NgFor_4_6.context; }
    if (((token === import28.List) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._List_2_3.context; }
    if (((token === import29.Content) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._Content_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._Content_0_4.detectChangesInternal(this,this._el_0,throwOnChange)) { this._appEl_0.componentView.markAsCheckOnce(); }
    this._List_2_3.detectChangesInternal(this,this._el_2,throwOnChange);
    const currVal_1:any = this.context.userRecipes;
    this._NgFor_4_6.check_ngForOf(currVal_1,throwOnChange,false);
    this._NgFor_4_6.detectChangesInternal(this,this._anchor_4,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._Content_0_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementClass(this._el_0,'statusbar-padding',currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._Content_0_4.context.ngOnDestroy();
  }
}
export function viewFactory_LikedRecipes0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.LikedRecipes> {
  if ((renderType_LikedRecipes === (null as any))) { (renderType_LikedRecipes = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,styles_LikedRecipes,{})); }
  return new _View_LikedRecipes0(viewUtils,parentInjector,declarationEl);
}
class _View_LikedRecipes1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _ItemSliding_0_4:import30.Wrapper_ItemSliding;
  _query_Item_0_0:import31.QueryList<any>;
  _query_ItemOptions_0_1:import31.QueryList<any>;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Item_2_4:import32.Wrapper_Item;
  _ItemContent_2_5:import32.Wrapper_ItemContent;
  _query_Label_2_0:import31.QueryList<any>;
  _query_Button_2_1:import31.QueryList<any>;
  _query_Icon_2_2:import31.QueryList<any>;
  _text_3:any;
  _el_4:any;
  _List_4_3:import15.Wrapper_List;
  _text_5:any;
  _el_6:any;
  /*private*/ _appEl_6:import3.AppElement;
  _Item_6_4:import32.Wrapper_Item;
  _ItemContent_6_5:import32.Wrapper_ItemContent;
  _query_Label_6_0:import31.QueryList<any>;
  _query_Button_6_1:import31.QueryList<any>;
  _query_Icon_6_2:import31.QueryList<any>;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _Row_16_3:import33.Wrapper_Row;
  _text_17:any;
  _el_18:any;
  _Col_18_3:import33.Wrapper_Col;
  _text_19:any;
  _el_20:any;
  /*private*/ _appEl_20:import3.AppElement;
  _Button_20_4:import34.Wrapper_Button;
  _text_21:any;
  _el_22:any;
  _Icon_22_3:import35.Wrapper_Icon;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  _el_29:any;
  _Col_29_3:import33.Wrapper_Col;
  _text_30:any;
  _el_31:any;
  /*private*/ _appEl_31:import3.AppElement;
  _Button_31_4:import34.Wrapper_Button;
  _text_32:any;
  _el_33:any;
  _Icon_33_3:import35.Wrapper_Icon;
  _text_34:any;
  _el_35:any;
  _text_36:any;
  _text_37:any;
  _text_38:any;
  _text_39:any;
  _el_40:any;
  _Col_40_3:import33.Wrapper_Col;
  _text_41:any;
  _el_42:any;
  _Note_42_3:import36.Wrapper_Note;
  _text_43:any;
  _text_44:any;
  _text_45:any;
  _text_46:any;
  _text_47:any;
  _el_48:any;
  _ItemOptions_48_3:import30.Wrapper_ItemOptions;
  _text_49:any;
  _el_50:any;
  /*private*/ _appEl_50:import3.AppElement;
  _Button_50_4:import34.Wrapper_Button;
  _text_51:any;
  _el_52:any;
  _Icon_52_3:import35.Wrapper_Icon;
  _text_53:any;
  _text_54:any;
  _text_55:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_17:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_LikedRecipes1,renderType_LikedRecipes,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-item-sliding',(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import30.viewFactory_ItemSliding0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ItemSliding_0_4 = new import30.Wrapper_ItemSliding((<_View_LikedRecipes0>this.parent)._List_2_3.context,this.renderer,new import18.ElementRef(this._el_0),this.parent.parentInjector.get(import21.NgZone));
    this._query_Item_0_0 = new import31.QueryList<any>();
    this._query_ItemOptions_0_1 = new import31.QueryList<any>();
    this._appEl_0.initComponent(this._ItemSliding_0_4.context,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','item item-block');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import32.viewFactory_Item0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Item_2_4 = new import32.Wrapper_Item(this.parent.parentInjector.get(import37.Form),this.parent.parentInjector.get(import17.Config),new import18.ElementRef(this._el_2),this.renderer,this.parent.parentInjector.get(import38.ItemReorder,(null as any)));
    this._ItemContent_2_5 = new import32.Wrapper_ItemContent();
    this._query_Label_2_0 = new import31.QueryList<any>();
    this._query_Button_2_1 = new import31.QueryList<any>();
    this._query_Icon_2_2 = new import31.QueryList<any>();
    this._appEl_2.initComponent(this._Item_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n            ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-list',(null as any));
    this._List_4_3 = new import15.Wrapper_List(this.parent.parentInjector.get(import17.Config),new import18.ElementRef(this._el_4),this.renderer,this.parent.parentInjector.get(import24.GestureController));
    this._text_5 = this.renderer.createText(this._el_4,'\n                ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'button',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','item item-block');
    this.renderer.setElementAttribute(this._el_6,'ion-item','');
    this._appEl_6 = new import3.AppElement(6,4,this,this._el_6);
    var compView_6:any = import32.viewFactory_Item0(this.viewUtils,this.injector(6),this._appEl_6);
    this._Item_6_4 = new import32.Wrapper_Item(this.parent.parentInjector.get(import37.Form),this.parent.parentInjector.get(import17.Config),new import18.ElementRef(this._el_6),this.renderer,this.parent.parentInjector.get(import38.ItemReorder,(null as any)));
    this._ItemContent_6_5 = new import32.Wrapper_ItemContent();
    this._query_Label_6_0 = new import31.QueryList<any>();
    this._query_Button_6_1 = new import31.QueryList<any>();
    this._query_Icon_6_2 = new import31.QueryList<any>();
    this._appEl_6.initComponent(this._Item_6_4.context,([] as any[]),compView_6);
    this._text_7 = this.renderer.createText((null as any),'\n                    ',(null as any));
    this._el_8 = this.renderer.createElement((null as any),'h1',(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'',(null as any));
    this._text_10 = this.renderer.createText((null as any),'\n                    ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'h2',(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText((null as any),'\n                ',(null as any));
    this._query_Label_6_0.reset(([] as any[]));
    this._Item_6_4.context.contentLabel = this._query_Label_6_0.first;
    compView_6.create(this._Item_6_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_7,
        this._el_8,
        this._text_10,
        this._el_11,
        this._text_13
      ]
      ),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_14 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._text_15 = this.renderer.createText((null as any),'\n              ',(null as any));
    this._el_16 = this.renderer.createElement((null as any),'ion-row',(null as any));
    this._Row_16_3 = new import33.Wrapper_Row();
    this._text_17 = this.renderer.createText(this._el_16,'\n                ',(null as any));
    this._el_18 = this.renderer.createElement(this._el_16,'ion-col',(null as any));
    this._Col_18_3 = new import33.Wrapper_Col();
    this._text_19 = this.renderer.createText(this._el_18,'\n                  ',(null as any));
    this._el_20 = this.renderer.createElement(this._el_18,'button',(null as any));
    this.renderer.setElementAttribute(this._el_20,'clear','');
    this.renderer.setElementAttribute(this._el_20,'icon-left','');
    this.renderer.setElementAttribute(this._el_20,'ion-button','');
    this.renderer.setElementAttribute(this._el_20,'small','');
    this._appEl_20 = new import3.AppElement(20,18,this,this._el_20);
    var compView_20:any = import34.viewFactory_Button0(this.viewUtils,this.injector(20),this._appEl_20);
    this._Button_20_4 = new import34.Wrapper_Button((null as any),'',this.parent.parentInjector.get(import17.Config),new import18.ElementRef(this._el_20),this.renderer);
    this._appEl_20.initComponent(this._Button_20_4.context,([] as any[]),compView_20);
    this._text_21 = this.renderer.createText((null as any),'\n                    ',(null as any));
    this._el_22 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_22,'name','thumbs-up');
    this.renderer.setElementAttribute(this._el_22,'role','img');
    this._Icon_22_3 = new import35.Wrapper_Icon(this.parent.parentInjector.get(import17.Config),new import18.ElementRef(this._el_22),this.renderer);
    this._text_23 = this.renderer.createText((null as any),'\n                    ',(null as any));
    this._el_24 = this.renderer.createElement((null as any),'div',(null as any));
    this._text_25 = this.renderer.createText(this._el_24,'',(null as any));
    this._text_26 = this.renderer.createText((null as any),'\n                  ',(null as any));
      compView_20.create(this._Button_20_4.context,[([] as any[]).concat([
        this._text_21,
        this._el_22,
        this._text_23,
        this._el_24,
        this._text_26
      ]
    )],(null as any));
    this._text_27 = this.renderer.createText(this._el_18,'\n                ',(null as any));
    this._text_28 = this.renderer.createText(this._el_16,'\n                ',(null as any));
    this._el_29 = this.renderer.createElement(this._el_16,'ion-col',(null as any));
    this._Col_29_3 = new import33.Wrapper_Col();
    this._text_30 = this.renderer.createText(this._el_29,'\n                  ',(null as any));
    this._el_31 = this.renderer.createElement(this._el_29,'button',(null as any));
    this.renderer.setElementAttribute(this._el_31,'clear','');
    this.renderer.setElementAttribute(this._el_31,'icon-left','');
    this.renderer.setElementAttribute(this._el_31,'ion-button','');
    this.renderer.setElementAttribute(this._el_31,'small','');
    this._appEl_31 = new import3.AppElement(31,29,this,this._el_31);
    var compView_31:any = import34.viewFactory_Button0(this.viewUtils,this.injector(31),this._appEl_31);
    this._Button_31_4 = new import34.Wrapper_Button((null as any),'',this.parent.parentInjector.get(import17.Config),new import18.ElementRef(this._el_31),this.renderer);
    this._appEl_31.initComponent(this._Button_31_4.context,([] as any[]),compView_31);
    this._text_32 = this.renderer.createText((null as any),'\n                    ',(null as any));
    this._el_33 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_33,'name','text');
    this.renderer.setElementAttribute(this._el_33,'role','img');
    this._Icon_33_3 = new import35.Wrapper_Icon(this.parent.parentInjector.get(import17.Config),new import18.ElementRef(this._el_33),this.renderer);
    this._text_34 = this.renderer.createText((null as any),'\n                    ',(null as any));
    this._el_35 = this.renderer.createElement((null as any),'div',(null as any));
    this._text_36 = this.renderer.createText(this._el_35,'',(null as any));
    this._text_37 = this.renderer.createText((null as any),'\n                  ',(null as any));
      compView_31.create(this._Button_31_4.context,[([] as any[]).concat([
        this._text_32,
        this._el_33,
        this._text_34,
        this._el_35,
        this._text_37
      ]
    )],(null as any));
    this._text_38 = this.renderer.createText(this._el_29,'\n                ',(null as any));
    this._text_39 = this.renderer.createText(this._el_16,'\n                ',(null as any));
    this._el_40 = this.renderer.createElement(this._el_16,'ion-col',(null as any));
    this.renderer.setElementAttribute(this._el_40,'center','');
    this.renderer.setElementAttribute(this._el_40,'text-center','');
    this._Col_40_3 = new import33.Wrapper_Col();
    this._text_41 = this.renderer.createText(this._el_40,'\n                  ',(null as any));
    this._el_42 = this.renderer.createElement(this._el_40,'ion-note',(null as any));
    this._Note_42_3 = new import36.Wrapper_Note();
    this._text_43 = this.renderer.createText(this._el_42,'',(null as any));
    this._text_44 = this.renderer.createText(this._el_40,'\n                ',(null as any));
    this._text_45 = this.renderer.createText(this._el_16,'\n            ',(null as any));
    this._text_46 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._query_Label_2_0.reset(([] as any[]));
    this._Item_2_4.context.contentLabel = this._query_Label_2_0.first;
    compView_2.create(this._Item_2_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_3,
        this._el_4,
        this._text_15,
        this._el_16,
        this._text_46
      ]
      ),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_47 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_48 = this.renderer.createElement((null as any),'ion-item-options',(null as any));
    this.renderer.setElementAttribute(this._el_48,'side','right');
    this._ItemOptions_48_3 = new import30.Wrapper_ItemOptions(new import18.ElementRef(this._el_48),this.renderer);
    this._text_49 = this.renderer.createText(this._el_48,'\n          ',(null as any));
    this._el_50 = this.renderer.createElement(this._el_48,'button',(null as any));
    this.renderer.setElementAttribute(this._el_50,'color','primary');
    this.renderer.setElementAttribute(this._el_50,'ion-button','');
    this._appEl_50 = new import3.AppElement(50,48,this,this._el_50);
    var compView_50:any = import34.viewFactory_Button0(this.viewUtils,this.injector(50),this._appEl_50);
    this._Button_50_4 = new import34.Wrapper_Button((null as any),'',this.parent.parentInjector.get(import17.Config),new import18.ElementRef(this._el_50),this.renderer);
    this._appEl_50.initComponent(this._Button_50_4.context,([] as any[]),compView_50);
    this._text_51 = this.renderer.createText((null as any),'\n            ',(null as any));
    this._el_52 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_52,'name','mail');
    this.renderer.setElementAttribute(this._el_52,'role','img');
    this._Icon_52_3 = new import35.Wrapper_Icon(this.parent.parentInjector.get(import17.Config),new import18.ElementRef(this._el_52),this.renderer);
    this._text_53 = this.renderer.createText((null as any),'\n            Email\n          ',(null as any));
      compView_50.create(this._Button_50_4.context,[([] as any[]).concat([
        this._text_51,
        this._el_52,
        this._text_53
      ]
    )],(null as any));
    this._text_54 = this.renderer.createText(this._el_48,'\n        ',(null as any));
    this._text_55 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._query_Item_0_0.reset([
      this._Item_2_4.context,
      this._Item_6_4.context
    ]
    );
    this._ItemSliding_0_4.context.item = this._query_Item_0_0.first;
    compView_0.create(this._ItemSliding_0_4.context,[
      ([] as any[]).concat([this._el_2]),
      ([] as any[]).concat([this._el_48])
    ]
    ,(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_6,'click',this.eventHandler(this._handle_click_6_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_11 = import7.UNINITIALIZED;
    this._expr_12 = import7.UNINITIALIZED;
    this._expr_13 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14,
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
      this._text_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._el_35,
      this._text_36,
      this._text_37,
      this._text_38,
      this._text_39,
      this._el_40,
      this._text_41,
      this._el_42,
      this._text_43,
      this._text_44,
      this._text_45,
      this._text_46,
      this._text_47,
      this._el_48,
      this._text_49,
      this._el_50,
      this._text_51,
      this._el_52,
      this._text_53,
      this._text_54,
      this._text_55
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import39.Item) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._Item_6_4.context; }
    if (((token === import39.ItemContent) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._ItemContent_6_5.context; }
    if (((token === import28.List) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._List_4_3.context; }
    if (((token === import40.Icon) && (22 === requestNodeIndex))) { return this._Icon_22_3.context; }
    if (((token === import41.Button) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._Button_20_4.context; }
    if (((token === import42.Col) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._Col_18_3.context; }
    if (((token === import40.Icon) && (33 === requestNodeIndex))) { return this._Icon_33_3.context; }
    if (((token === import41.Button) && ((31 <= requestNodeIndex) && (requestNodeIndex <= 37)))) { return this._Button_31_4.context; }
    if (((token === import42.Col) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 38)))) { return this._Col_29_3.context; }
    if (((token === import43.Note) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 43)))) { return this._Note_42_3.context; }
    if (((token === import42.Col) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 44)))) { return this._Col_40_3.context; }
    if (((token === import42.Row) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 45)))) { return this._Row_16_3.context; }
    if (((token === import39.Item) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 46)))) { return this._Item_2_4.context; }
    if (((token === import39.ItemContent) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 46)))) { return this._ItemContent_2_5.context; }
    if (((token === import40.Icon) && (52 === requestNodeIndex))) { return this._Icon_52_3.context; }
    if (((token === import41.Button) && ((50 <= requestNodeIndex) && (requestNodeIndex <= 53)))) { return this._Button_50_4.context; }
    if (((token === import44.ItemOptions) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 54)))) { return this._ItemOptions_48_3.context; }
    if (((token === import44.ItemSliding) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 55)))) { return this._ItemSliding_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._ItemSliding_0_4.detectChangesInternal(this,this._el_0,throwOnChange)) { this._appEl_0.componentView.markAsCheckOnce(); }
    if (this._Item_2_4.detectChangesInternal(this,this._el_2,throwOnChange)) { this._appEl_2.componentView.markAsCheckOnce(); }
    this._ItemContent_2_5.detectChangesInternal(this,this._el_2,throwOnChange);
    this._List_4_3.detectChangesInternal(this,this._el_4,throwOnChange);
    if (this._Item_6_4.detectChangesInternal(this,this._el_6,throwOnChange)) { this._appEl_6.componentView.markAsCheckOnce(); }
    this._ItemContent_6_5.detectChangesInternal(this,this._el_6,throwOnChange);
    this._Row_16_3.detectChangesInternal(this,this._el_16,throwOnChange);
    this._Col_18_3.detectChangesInternal(this,this._el_18,throwOnChange);
    const currVal_3:any = '';
    this._Button_20_4.check_small(currVal_3,throwOnChange,false);
    const currVal_4:any = '';
    this._Button_20_4.check_clear(currVal_4,throwOnChange,false);
    if (this._Button_20_4.detectChangesInternal(this,this._el_20,throwOnChange)) { this._appEl_20.componentView.markAsCheckOnce(); }
    const currVal_5:any = 'thumbs-up';
    this._Icon_22_3.check_name(currVal_5,throwOnChange,false);
    this._Icon_22_3.detectChangesInternal(this,this._el_22,throwOnChange);
    this._Col_29_3.detectChangesInternal(this,this._el_29,throwOnChange);
    const currVal_8:any = '';
    this._Button_31_4.check_small(currVal_8,throwOnChange,false);
    const currVal_9:any = '';
    this._Button_31_4.check_clear(currVal_9,throwOnChange,false);
    if (this._Button_31_4.detectChangesInternal(this,this._el_31,throwOnChange)) { this._appEl_31.componentView.markAsCheckOnce(); }
    const currVal_10:any = 'text';
    this._Icon_33_3.check_name(currVal_10,throwOnChange,false);
    this._Icon_33_3.detectChangesInternal(this,this._el_33,throwOnChange);
    this._Col_40_3.detectChangesInternal(this,this._el_40,throwOnChange);
    this._Note_42_3.detectChangesInternal(this,this._el_42,throwOnChange);
    const currVal_14:any = 'right';
    this._ItemOptions_48_3.check_side(currVal_14,throwOnChange,false);
    this._ItemOptions_48_3.detectChangesInternal(this,this._el_48,throwOnChange);
    const currVal_15:any = 'primary';
    this._Button_50_4.check_color(currVal_15,throwOnChange,false);
    if (this._Button_50_4.detectChangesInternal(this,this._el_50,throwOnChange)) { this._appEl_50.componentView.markAsCheckOnce(); }
    const currVal_16:any = 'mail';
    this._Icon_52_3.check_name(currVal_16,throwOnChange,false);
    this._Icon_52_3.detectChangesInternal(this,this._el_52,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_6_1.dirty) {
        this._query_Button_6_1.reset(([] as any[]));
        this._Item_6_4.context._buttons = this._query_Button_6_1;
        this._query_Button_6_1.notifyOnChanges();
      }
      if (this._query_Icon_6_2.dirty) {
        this._query_Icon_6_2.reset(([] as any[]));
        this._Item_6_4.context._icons = this._query_Icon_6_2;
        this._query_Icon_6_2.notifyOnChanges();
      }
      if (this._query_Button_2_1.dirty) {
        this._query_Button_2_1.reset(([] as any[]));
        this._Item_2_4.context._buttons = this._query_Button_2_1;
        this._query_Button_2_1.notifyOnChanges();
      }
      if (this._query_Icon_2_2.dirty) {
        this._query_Icon_2_2.reset(([] as any[]));
        this._Item_2_4.context._icons = this._query_Icon_2_2;
        this._query_Icon_2_2.notifyOnChanges();
      }
      if (this._query_ItemOptions_0_1.dirty) {
        this._query_ItemOptions_0_1.reset([this._ItemOptions_48_3.context]);
        this._ItemSliding_0_4.context._itemOptions = this._query_ItemOptions_0_1;
        this._query_ItemOptions_0_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Item_6_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_20_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_31_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Item_2_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_50_4.context.ngAfterContentInit(); }
    }
    const currVal_1:any = import4.interpolate(1,'',this.context.$implicit.title,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_9,currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import4.interpolate(1,'',this.context.$implicit.description,'');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_12,currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_6:any = this._Icon_22_3.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_22,'hide',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = import4.interpolate(1,'',this.context.$implicit.like_count,' Likes');
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setText(this._text_25,currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_11:any = this._Icon_33_3.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementClass(this._el_33,'hide',currVal_11);
      this._expr_11 = currVal_11;
    }
    const currVal_12:any = import4.interpolate(1,'',this.context.$implicit.reviews.length,' Reviews');
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setText(this._text_36,currVal_12);
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = import4.interpolate(1,'\n                    ',this.context.$implicit.dateCreated,'\n                  ');
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setText(this._text_43,currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_17:any = this._Icon_52_3.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setElementClass(this._el_52,'hide',currVal_17);
      this._expr_17 = currVal_17;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._Icon_22_3.context.ngOnDestroy();
    this._Icon_33_3.context.ngOnDestroy();
    this._Icon_52_3.context.ngOnDestroy();
  }
  private _handle_click_6_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.recipeSelected(this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_LikedRecipes1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_LikedRecipes1(viewUtils,parentInjector,declarationEl);
}