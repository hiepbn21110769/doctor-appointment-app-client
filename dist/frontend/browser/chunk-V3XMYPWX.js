import{f as Ve}from"./chunk-VWHAAH3S.js";import{B as Ee,D as H,O as Re,P as Ie,Q as ke,R as De,S as Le,T as Fe,U as N,a as we,ca as je,da as xe,e as Ce,f as b,fa as He,ka as Ne,l as Me,m as Pe,n as x,na as m,o as A,q as Te,qa as We}from"./chunk-7CWJXPPP.js";import{$a as ce,A as v,Ab as L,Bb as h,Cb as u,E as M,Ed as be,Fd as O,Gd as Ae,H as U,Id as d,Ja as s,Jd as Se,La as ae,Ld as j,Nb as F,Ob as ve,Oc as Oe,Pa as se,T as z,U as g,Wa as E,X as Q,Xa as le,Za as re,_ as G,_a as R,aa as X,ba as P,bb as pe,cc as V,da as y,db as he,dc as r,h as _,ha as $,i as K,ia as Z,ic as ge,j as C,ja as J,jb as ue,kb as de,na as ee,oa as te,p as Y,pa as ie,pb as me,r as B,sb as I,ua as oe,ub as k,v as q,vb as _e,wa as c,wb as fe,wc as ye,x as f,xa as ne,z as p,za as T,zb as D}from"./chunk-UHTXMJPS.js";var tt=["panel"],it=["*"];function ot(a,S){if(a&1){let e=me();ue(0,"div",1,0),I("@panelAnimation.done",function(i){te(e);let o=k();return ie(o._animationDone.next(i))}),fe(2),de()}if(a&2){let e=S.id,t=k();he(t._classList),pe("mat-mdc-autocomplete-visible",t.showPanel)("mat-mdc-autocomplete-hidden",!t.showPanel)("mat-primary",t._color==="primary")("mat-accent",t._color==="accent")("mat-warn",t._color==="warn"),ce("id",t.id)("@panelAnimation",t.isOpen?"visible":"hidden"),R("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e))}}var nt=be("panelAnimation",[Se("void, hidden",d({opacity:0,transform:"scaleY(0.8)"})),j(":enter, hidden => visible",[Ae([O("0.03s linear",d({opacity:1})),O("0.12s cubic-bezier(0, 0, 0.2, 1)",d({transform:"scaleY(1)"}))])]),j(":leave, visible => hidden",[O("0.075s linear",d({opacity:0}))])]),at=0,W=class{constructor(S,e){this.source=S,this.option=e}},Be=new P("mat-autocomplete-default-options",{providedIn:"root",factory:st});function st(){return{autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1}}var Yt=(()=>{class a{get isOpen(){return this._isOpen&&this.showPanel}_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}constructor(e,t,i,o){this._changeDetectorRef=e,this._elementRef=t,this._defaults=i,this._activeOptionChanges=_.EMPTY,this._animationDone=new c,this.showPanel=!1,this._isOpen=!1,this.displayWith=null,this.optionSelected=new c,this.opened=new c,this.closed=new c,this.optionActivated=new c,this.id=`mat-autocomplete-${at++}`,this.inertGroups=o?.SAFARI||!1,this.autoActiveFirstOption=!!i.autoActiveFirstOption,this.autoSelectActiveOption=!!i.autoSelectActiveOption,this.requireSelection=!!i.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Te(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe(),this._animationDone.complete()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new W(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static{this.\u0275fac=function(t){return new(t||a)(s(V),s(T),s(Be),s(we))}}static{this.\u0275cmp=$({type:a,selectors:[["mat-autocomplete"]],contentQueries:function(t,i,o){if(t&1&&(D(o,De,5),D(o,Ie,5)),t&2){let n;h(n=u())&&(i.options=n),h(n=u())&&(i.optionGroups=n)}},viewQuery:function(t,i){if(t&1&&(L(ae,7),L(tt,5)),t&2){let o;h(o=u())&&(i.template=o.first),h(o=u())&&(i.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",r],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",r],requireSelection:[2,"requireSelection","requireSelection",r],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",r],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",r]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],standalone:!0,features:[F([{provide:Re,useExisting:a}]),E,ve],ngContentSelectors:it,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,i){t&1&&(_e(),le(0,ot,3,16,"ng-template"))},styles:["div.mat-mdc-autocomplete-panel{width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;box-sizing:border-box;position:static;border-radius:var(--mat-autocomplete-container-shape, var(--mat-app-corner-extra-small));box-shadow:var(--mat-autocomplete-container-elevation-shadow);background-color:var(--mat-autocomplete-background-color, var(--mat-app-surface-container))}.cdk-high-contrast-active div.mat-mdc-autocomplete-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden;pointer-events:none}mat-autocomplete{display:none}"],encapsulation:2,data:{animation:[nt]},changeDetection:0})}}return a})();var lt={provide:Oe,useExisting:G(()=>pt),multi:!0};var qe=new P("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let a=y(m);return()=>a.scrollStrategies.reposition()}});function rt(a){return()=>a.scrollStrategies.reposition()}var ct={provide:qe,deps:[m],useFactory:rt},pt=(()=>{class a{constructor(e,t,i,o,n,w,Ue,ze,Qe,Ge,Xe){this._element=e,this._overlay=t,this._viewContainerRef=i,this._zone=o,this._changeDetectorRef=n,this._dir=Ue,this._formField=ze,this._document=Qe,this._viewportRuler=Ge,this._defaults=Xe,this._componentDestroyed=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=_.EMPTY,this._breakpointObserver=y(Me),this._handsetLandscapeSubscription=_.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new C,this._windowBlurHandler=()=>{this._canOpenOnNextFocus=this._document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=()=>{},this._onTouched=()=>{},this.position="auto",this.autocompleteAttribute="off",this._initialized=new C,this._injector=y(oe),this._aboveClass="mat-mdc-autocomplete-panel-above",this._overlayAttached=!1,this.optionSelections=q(()=>{let l=this.autocomplete?this.autocomplete.options:null;return l?l.changes.pipe(z(l),g(()=>p(...l.map($e=>$e.onSelectionChange)))):this._initialized.pipe(g(()=>this.optionSelections))}),this._handlePanelKeydown=l=>{(l.keyCode===27&&!b(l)||l.keyCode===38&&b(l,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),l.stopPropagation(),l.preventDefault())},this._trackedModal=null,this._scrollStrategy=w}ngAfterViewInit(){this._initialized.next(),this._initialized.complete();let e=this._getWindow();typeof e<"u"&&this._zone.runOutsideAngular(()=>e.addEventListener("blur",this._windowBlurHandler))}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){let e=this._getWindow();typeof e<"u"&&e.removeEventListener("blur",this._windowBlurHandler),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&A(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return p(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(v(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(v(()=>this._overlayAttached)):Y()).pipe(B(e=>e instanceof ke?e:null))}get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return p(f(this._document,"click"),f(this._document,"auxclick"),f(this._document,"touchend")).pipe(v(e=>{let t=Ce(e),i=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,o=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;return this._overlayAttached&&t!==this._element.nativeElement&&this._document.activeElement!==this._element.nativeElement&&(!i||!i.contains(t))&&(!o||!o.contains(t))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(t)}))}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e.keyCode,i=b(e);if(t===27&&!i&&e.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&t===13&&this.panelOpen&&!i)this.activeOption._selectViaInteraction(),this._resetActiveItem(),e.preventDefault();else if(this.autocomplete){let o=this.autocomplete._keyManager.activeItem,n=t===38||t===40;t===9||n&&!i&&this.panelOpen?this.autocomplete._keyManager.onKeydown(e):n&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(n||this.autocomplete._keyManager.activeItem!==o)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,i=t.value;if(t.type==="number"&&(i=i==""?null:parseFloat(i)),this._previousValue!==i){if(this._previousValue=i,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(i),!i)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(n=>n.selected);if(o){let n=this._getDisplayValue(o.value);i!==n&&o.deselect(!1)}}if(this._canOpen()&&this._document.activeElement===e.target){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new K(i=>{re(()=>{i.next()},{injector:this._injector})}),t=this.autocomplete.options.changes.pipe(Q(()=>this._positionStrategy.reapplyLastPosition()),U(0));return p(e,t).pipe(g(()=>this._zone.run(()=>{let i=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),i!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),M(1)).subscribe(i=>this._setValueAndClose(i))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,i=e?e.source:this._pendingAutoselectedOption;i?(this._clearPreviousSelectedOption(i),this._assignOptionValue(i.value),this._onChange(i.value),t._emitSelectEvent(i),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),t._animationDone?t._animationDone.pipe(M(1)).subscribe(()=>this._onChange(null)):this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(i=>{i!==e&&i.selected&&i.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let t=this.autocomplete.id;x(this._trackedModal,"aria-owns",t)}}_attachOverlay(e){this.autocomplete;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new He(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=this._overlay.create(this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Pe.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let i=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&i!==this.panelOpen&&this._emitOpened()}_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=null}_getOverlayConfig(){return new Ne({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,panelClass:this._defaults?.overlayPanelClass})}_getOverlayPosition(){let e=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],i=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:i},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:i}],n;this.position==="above"?n=o:this.position==="below"?n=t:n=[...t,...o],e.withPositions(n)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let i=0;i<e.options.length;i++)if(!e.options.get(i).disabled){t=i;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_getWindow(){return this._document?.defaultView||window}_scrollToOption(e){let t=this.autocomplete,i=Le(e,t.options,t.optionGroups);if(e===0&&i===1)t._setScrollTop(0);else if(t.panel){let o=t.options.toArray()[e];if(o){let n=o._getHostElement(),w=Fe(n.offsetTop,n.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(w)}}}_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=this.autocomplete.id;this._trackedModal&&A(this._trackedModal,"aria-owns",t),x(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;A(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static{this.\u0275fac=function(t){return new(t||a)(s(T),s(m),s(se),s(ne),s(V),s(qe),s(Ee,8),s(Ve,9),s(ge,8),s(je),s(Be,8))}}static{this.\u0275dir=J({type:a,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,i){t&1&&I("focusin",function(){return i._handleFocus()})("blur",function(){return i._onTouched()})("input",function(n){return i._handleInput(n)})("keydown",function(n){return i._handleKeydown(n)})("click",function(){return i._handleClick()}),t&2&&R("autocomplete",i.autocompleteAttribute)("role",i.autocompleteDisabled?null:"combobox")("aria-autocomplete",i.autocompleteDisabled?null:"list")("aria-activedescendant",i.panelOpen&&i.activeOption?i.activeOption.id:null)("aria-expanded",i.autocompleteDisabled?null:i.panelOpen.toString())("aria-controls",i.autocompleteDisabled||!i.panelOpen||i.autocomplete==null?null:i.autocomplete.id)("aria-haspopup",i.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",r]},exportAs:["matAutocompleteTrigger"],standalone:!0,features:[F([lt]),E,ee]})}}return a})(),Bt=(()=>{class a{static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275mod=Z({type:a})}static{this.\u0275inj=X({providers:[ct],imports:[We,N,H,ye,xe,N,H]})}}return a})();export{Yt as a,pt as b,Bt as c};
