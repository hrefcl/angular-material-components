'use strict';
(self.webpackChunkangular_material_components =
  self.webpackChunkangular_material_components || []).push([
  [251],
  {
    4251: (Se, ut, l) => {
      l.r(ut), l.d(ut, { DemoColorpickerModule: () => P });
      var f = l(6895),
        d = l(4006),
        X = l(3546),
        b = l(9549),
        $ = l(7392),
        Z = l(4144),
        K = l(1948),
        _t = l(4385),
        Ut = l(6630),
        _ = l(4080),
        W = l(4859),
        p = l(8184),
        t = l(4650),
        C = l(2687),
        T_OPEN = 'mdc-dialog--open',
        ft_DIALOG_ANIMATION_CLOSE_TIME_MS =
          (['textarea', '.mdc-menu .mdc-list-item', '.mdc-menu .mdc-deprecated-list-item'].join(
            ', ',
          ),
          75),
        rt = l(3353),
        M = l(9521),
        x = l(5529),
        Ct = l(8514),
        tt = l(1086),
        lt = l(445),
        xt = l(1059);
      function Bt(a, o) {}
      class et {
        constructor() {
          (this.role = 'dialog'),
            (this.panelClass = ''),
            (this.hasBackdrop = !0),
            (this.backdropClass = ''),
            (this.disableClose = !1),
            (this.width = ''),
            (this.height = ''),
            (this.data = null),
            (this.ariaDescribedBy = null),
            (this.ariaLabelledBy = null),
            (this.ariaLabel = null),
            (this.ariaModal = !0),
            (this.autoFocus = 'first-tabbable'),
            (this.restoreFocus = !0),
            (this.closeOnNavigation = !0),
            (this.closeOnDestroy = !0);
        }
      }
      let bt = (() => {
        class a extends _.en {
          constructor(e, i, n, r, s, c, g, m) {
            super(),
              (this._elementRef = e),
              (this._focusTrapFactory = i),
              (this._config = r),
              (this._interactivityChecker = s),
              (this._ngZone = c),
              (this._overlayRef = g),
              (this._focusMonitor = m),
              (this._elementFocusedBeforeDialogWasOpened = null),
              (this._closeInteractionType = null),
              (this.attachDomPortal = (F) => {
                this._portalOutlet.hasAttached();
                const L = this._portalOutlet.attachDomPortal(F);
                return this._contentAttached(), L;
              }),
              (this._ariaLabelledBy = this._config.ariaLabelledBy || null),
              (this._document = n);
          }
          _contentAttached() {
            this._initializeFocusTrap(), this._handleBackdropClicks(), this._captureInitialFocus();
          }
          _captureInitialFocus() {
            this._trapFocus();
          }
          ngOnDestroy() {
            this._restoreFocus();
          }
          attachComponentPortal(e) {
            this._portalOutlet.hasAttached();
            const i = this._portalOutlet.attachComponentPortal(e);
            return this._contentAttached(), i;
          }
          attachTemplatePortal(e) {
            this._portalOutlet.hasAttached();
            const i = this._portalOutlet.attachTemplatePortal(e);
            return this._contentAttached(), i;
          }
          _recaptureFocus() {
            this._containsFocus() || this._trapFocus();
          }
          _forceFocus(e, i) {
            this._interactivityChecker.isFocusable(e) ||
              ((e.tabIndex = -1),
              this._ngZone.runOutsideAngular(() => {
                const n = () => {
                  e.removeEventListener('blur', n),
                    e.removeEventListener('mousedown', n),
                    e.removeAttribute('tabindex');
                };
                e.addEventListener('blur', n), e.addEventListener('mousedown', n);
              })),
              e.focus(i);
          }
          _focusByCssSelector(e, i) {
            let n = this._elementRef.nativeElement.querySelector(e);
            n && this._forceFocus(n, i);
          }
          _trapFocus() {
            const e = this._elementRef.nativeElement;
            switch (this._config.autoFocus) {
              case !1:
              case 'dialog':
                this._containsFocus() || e.focus();
                break;
              case !0:
              case 'first-tabbable':
                this._focusTrap.focusInitialElementWhenReady().then((i) => {
                  i || this._focusDialogContainer();
                });
                break;
              case 'first-heading':
                this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
                break;
              default:
                this._focusByCssSelector(this._config.autoFocus);
            }
          }
          _restoreFocus() {
            const e = this._config.restoreFocus;
            let i = null;
            if (
              ('string' == typeof e
                ? (i = this._document.querySelector(e))
                : 'boolean' == typeof e
                  ? (i = e ? this._elementFocusedBeforeDialogWasOpened : null)
                  : e && (i = e),
              this._config.restoreFocus && i && 'function' == typeof i.focus)
            ) {
              const n = (0, rt.ht)(),
                r = this._elementRef.nativeElement;
              (!n || n === this._document.body || n === r || r.contains(n)) &&
                (this._focusMonitor
                  ? (this._focusMonitor.focusVia(i, this._closeInteractionType),
                    (this._closeInteractionType = null))
                  : i.focus());
            }
            this._focusTrap && this._focusTrap.destroy();
          }
          _focusDialogContainer() {
            this._elementRef.nativeElement.focus && this._elementRef.nativeElement.focus();
          }
          _containsFocus() {
            const e = this._elementRef.nativeElement,
              i = (0, rt.ht)();
            return e === i || e.contains(i);
          }
          _initializeFocusTrap() {
            (this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement)),
              this._document && (this._elementFocusedBeforeDialogWasOpened = (0, rt.ht)());
          }
          _handleBackdropClicks() {
            this._overlayRef.backdropClick().subscribe(() => {
              this._config.disableClose && this._recaptureFocus();
            });
          }
        }
        return (
          (a.ɵfac = function (e) {
            return new (e || a)(
              t.Y36(t.SBq),
              t.Y36(C.qV),
              t.Y36(f.K0, 8),
              t.Y36(et),
              t.Y36(C.ic),
              t.Y36(t.R0b),
              t.Y36(p.Iu),
              t.Y36(C.tE),
            );
          }),
          (a.ɵcmp = t.Xpm({
            type: a,
            selectors: [['cdk-dialog-container']],
            viewQuery: function (e, i) {
              if ((1 & e && t.Gf(_.Pl, 7), 2 & e)) {
                let n;
                t.iGM((n = t.CRH())) && (i._portalOutlet = n.first);
              }
            },
            hostAttrs: ['tabindex', '-1', 1, 'cdk-dialog-container'],
            hostVars: 6,
            hostBindings: function (e, i) {
              2 & e &&
                t.uIk('id', i._config.id || null)('role', i._config.role)(
                  'aria-modal',
                  i._config.ariaModal,
                )('aria-labelledby', i._config.ariaLabel ? null : i._ariaLabelledBy)(
                  'aria-label',
                  i._config.ariaLabel,
                )('aria-describedby', i._config.ariaDescribedBy || null);
            },
            features: [t.qOj],
            decls: 1,
            vars: 0,
            consts: [['cdkPortalOutlet', '']],
            template: function (e, i) {
              1 & e && t.YNc(0, Bt, 0, 0, 'ng-template', 0);
            },
            dependencies: [_.Pl],
            styles: [
              '.cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}',
            ],
            encapsulation: 2,
          })),
          a
        );
      })();
      class st {
        constructor(o, e) {
          (this.overlayRef = o),
            (this.config = e),
            (this.closed = new x.xQ()),
            (this.disableClose = e.disableClose),
            (this.backdropClick = o.backdropClick()),
            (this.keydownEvents = o.keydownEvents()),
            (this.outsidePointerEvents = o.outsidePointerEvents()),
            (this.id = e.id),
            this.keydownEvents.subscribe((i) => {
              i.keyCode === M.hY &&
                !this.disableClose &&
                !(0, M.Vb)(i) &&
                (i.preventDefault(), this.close(void 0, { focusOrigin: 'keyboard' }));
            }),
            this.backdropClick.subscribe(() => {
              this.disableClose || this.close(void 0, { focusOrigin: 'mouse' });
            });
        }
        close(o, e) {
          if (this.containerInstance) {
            const i = this.closed;
            (this.containerInstance._closeInteractionType =
              (null == e ? void 0 : e.focusOrigin) || 'program'),
              this.overlayRef.dispose(),
              i.next(o),
              i.complete(),
              (this.componentInstance = this.containerInstance = null);
          }
        }
        updatePosition() {
          return this.overlayRef.updatePosition(), this;
        }
        updateSize(o = '', e = '') {
          return this.overlayRef.updateSize({ width: o, height: e }), this;
        }
        addPanelClass(o) {
          return this.overlayRef.addPanelClass(o), this;
        }
        removePanelClass(o) {
          return this.overlayRef.removePanelClass(o), this;
        }
      }
      const vt = new t.OlP('DialogScrollStrategy'),
        Gt = new t.OlP('DialogData'),
        Yt = new t.OlP('DefaultDialogConfig'),
        qt = {
          provide: vt,
          deps: [p.aV],
          useFactory: function Vt(a) {
            return () => a.scrollStrategies.block();
          },
        };
      let Ht = 0,
        yt = (() => {
          class a {
            constructor(e, i, n, r, s, c) {
              (this._overlay = e),
                (this._injector = i),
                (this._defaultOptions = n),
                (this._parentDialog = r),
                (this._overlayContainer = s),
                (this._openDialogsAtThisLevel = []),
                (this._afterAllClosedAtThisLevel = new x.xQ()),
                (this._afterOpenedAtThisLevel = new x.xQ()),
                (this._ariaHiddenElements = new Map()),
                (this.afterAllClosed = (0, Ct.P)(() =>
                  this.openDialogs.length
                    ? this._getAfterAllClosed()
                    : this._getAfterAllClosed().pipe((0, xt.O)(void 0)),
                )),
                (this._scrollStrategy = c);
            }
            get openDialogs() {
              return this._parentDialog
                ? this._parentDialog.openDialogs
                : this._openDialogsAtThisLevel;
            }
            get afterOpened() {
              return this._parentDialog
                ? this._parentDialog.afterOpened
                : this._afterOpenedAtThisLevel;
            }
            open(e, i) {
              ((i = { ...(this._defaultOptions || new et()), ...i }).id =
                i.id || 'cdk-dialog-' + Ht++),
                i.id && this.getDialogById(i.id);
              const r = this._getOverlayConfig(i),
                s = this._overlay.create(r),
                c = new st(s, i),
                g = this._attachContainer(s, c, i);
              return (
                (c.containerInstance = g),
                this._attachDialogContent(e, c, g, i),
                this.openDialogs.length || this._hideNonDialogContentFromAssistiveTechnology(),
                this.openDialogs.push(c),
                c.closed.subscribe(() => this._removeOpenDialog(c, !0)),
                this.afterOpened.next(c),
                c
              );
            }
            closeAll() {
              ct(this.openDialogs, (e) => e.close());
            }
            getDialogById(e) {
              return this.openDialogs.find((i) => i.id === e);
            }
            ngOnDestroy() {
              ct(this._openDialogsAtThisLevel, (e) => {
                !1 === e.config.closeOnDestroy && this._removeOpenDialog(e, !1);
              }),
                ct(this._openDialogsAtThisLevel, (e) => e.close()),
                this._afterAllClosedAtThisLevel.complete(),
                this._afterOpenedAtThisLevel.complete(),
                (this._openDialogsAtThisLevel = []);
            }
            _getOverlayConfig(e) {
              const i = new p.X_({
                positionStrategy:
                  e.positionStrategy ||
                  this._overlay.position().global().centerHorizontally().centerVertically(),
                scrollStrategy: e.scrollStrategy || this._scrollStrategy(),
                panelClass: e.panelClass,
                hasBackdrop: e.hasBackdrop,
                direction: e.direction,
                minWidth: e.minWidth,
                minHeight: e.minHeight,
                maxWidth: e.maxWidth,
                maxHeight: e.maxHeight,
                width: e.width,
                height: e.height,
                disposeOnNavigation: e.closeOnNavigation,
              });
              return e.backdropClass && (i.backdropClass = e.backdropClass), i;
            }
            _attachContainer(e, i, n) {
              var r;
              const s =
                  n.injector ||
                  (null === (r = n.viewContainerRef) || void 0 === r ? void 0 : r.injector),
                c = [
                  { provide: et, useValue: n },
                  { provide: st, useValue: i },
                  { provide: p.Iu, useValue: e },
                ];
              let g;
              n.container
                ? 'function' == typeof n.container
                  ? (g = n.container)
                  : ((g = n.container.type), c.push(...n.container.providers(n)))
                : (g = bt);
              const m = new _.C5(
                g,
                n.viewContainerRef,
                t.zs3.create({ parent: s || this._injector, providers: c }),
                n.componentFactoryResolver,
              );
              return e.attach(m).instance;
            }
            _attachDialogContent(e, i, n, r) {
              if (e instanceof t.Rgc) {
                const s = this._createInjector(r, i, n, void 0);
                let c = { $implicit: r.data, dialogRef: i };
                r.templateContext &&
                  (c = {
                    ...c,
                    ...('function' == typeof r.templateContext
                      ? r.templateContext()
                      : r.templateContext),
                  }),
                  n.attachTemplatePortal(new _.UE(e, null, c, s));
              } else {
                const s = this._createInjector(r, i, n, this._injector),
                  c = n.attachComponentPortal(
                    new _.C5(e, r.viewContainerRef, s, r.componentFactoryResolver),
                  );
                i.componentInstance = c.instance;
              }
            }
            _createInjector(e, i, n, r) {
              var s;
              const c =
                  e.injector ||
                  (null === (s = e.viewContainerRef) || void 0 === s ? void 0 : s.injector),
                g = [
                  { provide: Gt, useValue: e.data },
                  { provide: st, useValue: i },
                ];
              return (
                e.providers &&
                  ('function' == typeof e.providers
                    ? g.push(...e.providers(i, e, n))
                    : g.push(...e.providers)),
                e.direction &&
                  (!c || !c.get(lt.Is, null, { optional: !0 })) &&
                  g.push({
                    provide: lt.Is,
                    useValue: { value: e.direction, change: (0, tt.of)() },
                  }),
                t.zs3.create({ parent: c || r, providers: g })
              );
            }
            _removeOpenDialog(e, i) {
              const n = this.openDialogs.indexOf(e);
              n > -1 &&
                (this.openDialogs.splice(n, 1),
                this.openDialogs.length ||
                  (this._ariaHiddenElements.forEach((r, s) => {
                    r ? s.setAttribute('aria-hidden', r) : s.removeAttribute('aria-hidden');
                  }),
                  this._ariaHiddenElements.clear(),
                  i && this._getAfterAllClosed().next()));
            }
            _hideNonDialogContentFromAssistiveTechnology() {
              const e = this._overlayContainer.getContainerElement();
              if (e.parentElement) {
                const i = e.parentElement.children;
                for (let n = i.length - 1; n > -1; n--) {
                  const r = i[n];
                  r !== e &&
                    'SCRIPT' !== r.nodeName &&
                    'STYLE' !== r.nodeName &&
                    !r.hasAttribute('aria-live') &&
                    (this._ariaHiddenElements.set(r, r.getAttribute('aria-hidden')),
                    r.setAttribute('aria-hidden', 'true'));
                }
              }
            }
            _getAfterAllClosed() {
              const e = this._parentDialog;
              return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
            }
          }
          return (
            (a.ɵfac = function (e) {
              return new (e || a)(
                t.LFG(p.aV),
                t.LFG(t.zs3),
                t.LFG(Yt, 8),
                t.LFG(a, 12),
                t.LFG(p.Xj),
                t.LFG(vt),
              );
            }),
            (a.ɵprov = t.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })();
      function ct(a, o) {
        let e = a.length;
        for (; e--; ) o(a[e]);
      }
      let zt = (() => {
        class a {}
        return (
          (a.ɵfac = function (e) {
            return new (e || a)();
          }),
          (a.ɵmod = t.oAB({ type: a })),
          (a.ɵinj = t.cJS({ providers: [yt, qt], imports: [p.U8, _.eL, C.rt, _.eL] })),
          a
        );
      })();
      var U = l(1281),
        B = l(6787),
        G = l(2198),
        ot = l(2986),
        it = l(3238);
      function jt(a, o) {}
      l(7340);
      class at {
        constructor() {
          (this.role = 'dialog'),
            (this.panelClass = ''),
            (this.hasBackdrop = !0),
            (this.backdropClass = ''),
            (this.disableClose = !1),
            (this.width = ''),
            (this.height = ''),
            (this.maxWidth = '80vw'),
            (this.data = null),
            (this.ariaDescribedBy = null),
            (this.ariaLabelledBy = null),
            (this.ariaLabel = null),
            (this.ariaModal = !0),
            (this.autoFocus = 'first-tabbable'),
            (this.restoreFocus = !0),
            (this.delayFocusTrap = !0),
            (this.closeOnNavigation = !0);
        }
      }
      let Jt = (() => {
        class a extends bt {
          constructor(e, i, n, r, s, c, g, m) {
            super(e, i, n, r, s, c, g, m), (this._animationStateChanged = new t.vpe());
          }
          _captureInitialFocus() {
            this._config.delayFocusTrap || this._trapFocus();
          }
          _openAnimationDone(e) {
            this._config.delayFocusTrap && this._trapFocus(),
              this._animationStateChanged.next({ state: 'opened', totalTime: e });
          }
        }
        return (
          (a.ɵfac = function (e) {
            return new (e || a)(
              t.Y36(t.SBq),
              t.Y36(C.qV),
              t.Y36(f.K0, 8),
              t.Y36(at),
              t.Y36(C.ic),
              t.Y36(t.R0b),
              t.Y36(p.Iu),
              t.Y36(C.tE),
            );
          }),
          (a.ɵcmp = t.Xpm({
            type: a,
            selectors: [['ng-component']],
            features: [t.qOj],
            decls: 0,
            vars: 0,
            template: function (e, i) {},
            encapsulation: 2,
          })),
          a
        );
      })();
      const At = '--mat-dialog-transition-duration';
      function Tt(a) {
        return null == a
          ? null
          : 'number' == typeof a
            ? a
            : a.endsWith('ms')
              ? (0, U.su)(a.substring(0, a.length - 2))
              : a.endsWith('s')
                ? 1e3 * (0, U.su)(a.substring(0, a.length - 1))
                : '0' === a
                  ? 0
                  : null;
      }
      let Qt = (() => {
        class a extends Jt {
          constructor(e, i, n, r, s, c, g, m, F) {
            var L, mt;
            super(e, i, n, r, s, c, g, F),
              (this._animationMode = m),
              (this._animationsEnabled = 'NoopAnimations' !== this._animationMode),
              (this._hostElement = this._elementRef.nativeElement),
              (this._openAnimationDuration = this._animationsEnabled
                ? null !== (L = Tt(this._config.enterAnimationDuration)) && void 0 !== L
                  ? L
                  : 150
                : 0),
              (this._closeAnimationDuration = this._animationsEnabled
                ? null !== (mt = Tt(this._config.exitAnimationDuration)) && void 0 !== mt
                  ? mt
                  : ft_DIALOG_ANIMATION_CLOSE_TIME_MS
                : 0),
              (this._animationTimer = null),
              (this._finishDialogOpen = () => {
                this._clearAnimationClasses(), this._openAnimationDone(this._openAnimationDuration);
              }),
              (this._finishDialogClose = () => {
                this._clearAnimationClasses(),
                  this._animationStateChanged.emit({
                    state: 'closed',
                    totalTime: this._closeAnimationDuration,
                  });
              });
          }
          _contentAttached() {
            super._contentAttached(), this._startOpenAnimation();
          }
          ngOnDestroy() {
            super.ngOnDestroy(),
              null !== this._animationTimer && clearTimeout(this._animationTimer);
          }
          _startOpenAnimation() {
            this._animationStateChanged.emit({
              state: 'opening',
              totalTime: this._openAnimationDuration,
            }),
              this._animationsEnabled
                ? (this._hostElement.style.setProperty(At, `${this._openAnimationDuration}ms`),
                  this._hostElement.classList.add('mdc-dialog--opening'),
                  this._hostElement.classList.add(T_OPEN),
                  this._waitForAnimationToComplete(
                    this._openAnimationDuration,
                    this._finishDialogOpen,
                  ))
                : (this._hostElement.classList.add(T_OPEN),
                  Promise.resolve().then(() => this._finishDialogOpen()));
          }
          _startExitAnimation() {
            this._animationStateChanged.emit({
              state: 'closing',
              totalTime: this._closeAnimationDuration,
            }),
              this._hostElement.classList.remove(T_OPEN),
              this._animationsEnabled
                ? (this._hostElement.style.setProperty(At, `${this._openAnimationDuration}ms`),
                  this._hostElement.classList.add('mdc-dialog--closing'),
                  this._waitForAnimationToComplete(
                    this._closeAnimationDuration,
                    this._finishDialogClose,
                  ))
                : Promise.resolve().then(() => this._finishDialogClose());
          }
          _clearAnimationClasses() {
            this._hostElement.classList.remove('mdc-dialog--opening'),
              this._hostElement.classList.remove('mdc-dialog--closing');
          }
          _waitForAnimationToComplete(e, i) {
            null !== this._animationTimer && clearTimeout(this._animationTimer),
              (this._animationTimer = setTimeout(i, e));
          }
        }
        return (
          (a.ɵfac = function (e) {
            return new (e || a)(
              t.Y36(t.SBq),
              t.Y36(C.qV),
              t.Y36(f.K0, 8),
              t.Y36(at),
              t.Y36(C.ic),
              t.Y36(t.R0b),
              t.Y36(p.Iu),
              t.Y36(t.QbO, 8),
              t.Y36(C.tE),
            );
          }),
          (a.ɵcmp = t.Xpm({
            type: a,
            selectors: [['mat-dialog-container']],
            hostAttrs: ['tabindex', '-1', 1, 'mat-mdc-dialog-container', 'mdc-dialog'],
            hostVars: 8,
            hostBindings: function (e, i) {
              2 & e &&
                (t.Ikx('id', i._config.id),
                t.uIk('aria-modal', i._config.ariaModal)('role', i._config.role)(
                  'aria-labelledby',
                  i._config.ariaLabel ? null : i._ariaLabelledBy,
                )('aria-label', i._config.ariaLabel)(
                  'aria-describedby',
                  i._config.ariaDescribedBy || null,
                ),
                t.ekj('_mat-animation-noopable', !i._animationsEnabled));
            },
            features: [t.qOj],
            decls: 3,
            vars: 0,
            consts: [
              [1, 'mdc-dialog__container'],
              [1, 'mat-mdc-dialog-surface', 'mdc-dialog__surface'],
              ['cdkPortalOutlet', ''],
            ],
            template: function (e, i) {
              1 & e &&
                (t.TgZ(0, 'div', 0)(1, 'div', 1), t.YNc(2, jt, 0, 0, 'ng-template', 2), t.qZA()());
            },
            dependencies: [_.Pl],
            styles: [
              '.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{display:block;width:100%;height:100%}.mat-mdc-dialog-container{outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, var(--mdc-shape-medium, 4px))}.mat-mdc-dialog-container.mdc-dialog--scrollable .mdc-dialog__title,.mat-mdc-dialog-container.mdc-dialog--scrollable .mdc-dialog__actions,.mat-mdc-dialog-container.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:var(--mdc-dialog-with-divider-divider-color, black)}.mat-mdc-dialog-container.mdc-dialog--scrollable .mdc-dialog__title{border-bottom-color:var(--mdc-dialog-with-divider-divider-color, black)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, "Arial");line-height:var(--mdc-dialog-subhead-line-height, 14px);font-size:var(--mdc-dialog-subhead-size, 14px);font-weight:var(--mdc-dialog-subhead-weight, 500);letter-spacing:var(--mdc-dialog-subhead-tracking, 1px)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, black)}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, "Arial");line-height:var(--mdc-dialog-supporting-text-line-height, 14px);font-size:var(--mdc-dialog-supporting-text-size, 14px);font-weight:var(--mdc-dialog-supporting-text-weight, 500);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 1px)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, black)}.mat-mdc-dialog-container .mdc-dialog__container{transition-duration:var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container{transition:none}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-actions{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}',
            ],
            encapsulation: 2,
          })),
          a
        );
      })();
      class Xt {
        constructor(o, e, i) {
          (this._ref = o),
            (this._containerInstance = i),
            (this._afterOpened = new x.xQ()),
            (this._beforeClosed = new x.xQ()),
            (this._state = 0),
            (this.disableClose = e.disableClose),
            (this.id = o.id),
            i._animationStateChanged
              .pipe(
                (0, G.h)((n) => 'opened' === n.state),
                (0, ot.q)(1),
              )
              .subscribe(() => {
                this._afterOpened.next(), this._afterOpened.complete();
              }),
            i._animationStateChanged
              .pipe(
                (0, G.h)((n) => 'closed' === n.state),
                (0, ot.q)(1),
              )
              .subscribe(() => {
                clearTimeout(this._closeFallbackTimeout), this._finishDialogClose();
              }),
            o.overlayRef.detachments().subscribe(() => {
              this._beforeClosed.next(this._result),
                this._beforeClosed.complete(),
                this._finishDialogClose();
            }),
            (0, B.T)(
              this.backdropClick(),
              this.keydownEvents().pipe(
                (0, G.h)((n) => n.keyCode === M.hY && !this.disableClose && !(0, M.Vb)(n)),
              ),
            ).subscribe((n) => {
              this.disableClose ||
                (n.preventDefault(),
                (function $t(a, o, e) {
                  (a._closeInteractionType = o), a.close(e);
                })(this, 'keydown' === n.type ? 'keyboard' : 'mouse'));
            });
        }
        close(o) {
          (this._result = o),
            this._containerInstance._animationStateChanged
              .pipe(
                (0, G.h)((e) => 'closing' === e.state),
                (0, ot.q)(1),
              )
              .subscribe((e) => {
                this._beforeClosed.next(o),
                  this._beforeClosed.complete(),
                  this._ref.overlayRef.detachBackdrop(),
                  (this._closeFallbackTimeout = setTimeout(
                    () => this._finishDialogClose(),
                    e.totalTime + 100,
                  ));
              }),
            (this._state = 1),
            this._containerInstance._startExitAnimation();
        }
        afterOpened() {
          return this._afterOpened;
        }
        afterClosed() {
          return this._ref.closed;
        }
        beforeClosed() {
          return this._beforeClosed;
        }
        backdropClick() {
          return this._ref.backdropClick;
        }
        keydownEvents() {
          return this._ref.keydownEvents;
        }
        updatePosition(o) {
          let e = this._ref.config.positionStrategy;
          return (
            o && (o.left || o.right)
              ? o.left
                ? e.left(o.left)
                : e.right(o.right)
              : e.centerHorizontally(),
            o && (o.top || o.bottom)
              ? o.top
                ? e.top(o.top)
                : e.bottom(o.bottom)
              : e.centerVertically(),
            this._ref.updatePosition(),
            this
          );
        }
        updateSize(o = '', e = '') {
          return this._ref.updateSize(o, e), this;
        }
        addPanelClass(o) {
          return this._ref.addPanelClass(o), this;
        }
        removePanelClass(o) {
          return this._ref.removePanelClass(o), this;
        }
        getState() {
          return this._state;
        }
        _finishDialogClose() {
          (this._state = 2),
            this._ref.close(this._result, { focusOrigin: this._closeInteractionType }),
            (this.componentInstance = null);
        }
      }
      const Kt = new t.OlP('MatMdcDialogData'),
        Wt = new t.OlP('mat-mdc-dialog-default-options'),
        Mt = new t.OlP('mat-mdc-dialog-scroll-strategy'),
        ee = {
          provide: Mt,
          deps: [p.aV],
          useFactory: function te(a) {
            return () => a.scrollStrategies.block();
          },
        };
      let oe = 0,
        ie = (() => {
          class a {
            constructor(e, i, n, r, s, c, g, m, F, L) {
              (this._overlay = e),
                (this._defaultOptions = n),
                (this._parentDialog = r),
                (this._dialogRefConstructor = g),
                (this._dialogContainerType = m),
                (this._dialogDataToken = F),
                (this._openDialogsAtThisLevel = []),
                (this._afterAllClosedAtThisLevel = new x.xQ()),
                (this._afterOpenedAtThisLevel = new x.xQ()),
                (this._idPrefix = 'mat-dialog-'),
                (this.dialogConfigClass = at),
                (this.afterAllClosed = (0, Ct.P)(() =>
                  this.openDialogs.length
                    ? this._getAfterAllClosed()
                    : this._getAfterAllClosed().pipe((0, xt.O)(void 0)),
                )),
                (this._scrollStrategy = c),
                (this._dialog = i.get(yt));
            }
            get openDialogs() {
              return this._parentDialog
                ? this._parentDialog.openDialogs
                : this._openDialogsAtThisLevel;
            }
            get afterOpened() {
              return this._parentDialog
                ? this._parentDialog.afterOpened
                : this._afterOpenedAtThisLevel;
            }
            _getAfterAllClosed() {
              const e = this._parentDialog;
              return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
            }
            open(e, i) {
              let n;
              ((i = { ...(this._defaultOptions || new at()), ...i }).id =
                i.id || `${this._idPrefix}${oe++}`),
                (i.scrollStrategy = i.scrollStrategy || this._scrollStrategy());
              const r = this._dialog.open(e, {
                ...i,
                positionStrategy: this._overlay
                  .position()
                  .global()
                  .centerHorizontally()
                  .centerVertically(),
                disableClose: !0,
                closeOnDestroy: !1,
                container: {
                  type: this._dialogContainerType,
                  providers: () => [
                    { provide: this.dialogConfigClass, useValue: i },
                    { provide: et, useValue: i },
                  ],
                },
                templateContext: () => ({ dialogRef: n }),
                providers: (s, c, g) => {
                  var m;
                  return (
                    (n = new this._dialogRefConstructor(s, i, g)),
                    n.updatePosition(null === (m = i) || void 0 === m ? void 0 : m.position),
                    [
                      { provide: this._dialogContainerType, useValue: g },
                      { provide: this._dialogDataToken, useValue: c.data },
                      { provide: this._dialogRefConstructor, useValue: n },
                    ]
                  );
                },
              });
              return (
                (n.componentInstance = r.componentInstance),
                this.openDialogs.push(n),
                this.afterOpened.next(n),
                n.afterClosed().subscribe(() => {
                  const s = this.openDialogs.indexOf(n);
                  s > -1 &&
                    (this.openDialogs.splice(s, 1),
                    this.openDialogs.length || this._getAfterAllClosed().next());
                }),
                n
              );
            }
            closeAll() {
              this._closeDialogs(this.openDialogs);
            }
            getDialogById(e) {
              return this.openDialogs.find((i) => i.id === e);
            }
            ngOnDestroy() {
              this._closeDialogs(this._openDialogsAtThisLevel),
                this._afterAllClosedAtThisLevel.complete(),
                this._afterOpenedAtThisLevel.complete();
            }
            _closeDialogs(e) {
              let i = e.length;
              for (; i--; ) e[i].close();
            }
          }
          return (
            (a.ɵfac = function (e) {
              t.$Z();
            }),
            (a.ɵprov = t.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        Dt = (() => {
          class a extends ie {
            constructor(e, i, n, r, s, c, g, m) {
              super(e, i, r, c, g, s, Xt, Qt, Kt, m), (this._idPrefix = 'mat-mdc-dialog-');
            }
          }
          return (
            (a.ɵfac = function (e) {
              return new (e || a)(
                t.LFG(p.aV),
                t.LFG(t.zs3),
                t.LFG(f.Ye, 8),
                t.LFG(Wt, 8),
                t.LFG(Mt),
                t.LFG(a, 12),
                t.LFG(p.Xj),
                t.LFG(t.QbO, 8),
              );
            }),
            (a.ɵprov = t.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        ae = (() => {
          class a {}
          return (
            (a.ɵfac = function (e) {
              return new (e || a)();
            }),
            (a.ɵmod = t.oAB({ type: a })),
            (a.ɵinj = t.cJS({ providers: [Dt, ee], imports: [zt, p.U8, _.eL, it.BQ, it.BQ] })),
            a
          );
        })();
      var wt = l(7625),
        kt = l(13),
        ne = l(5778);
      const re = /^\s+/,
        le = /\s+$/,
        k = Math.round,
        se = (Math, Math, Math, /[^0-9]/g),
        R = 255,
        Rt = [
          '#ffffff',
          '#ffff00',
          '#ff00ff',
          '#ff0000',
          '#c0c0c0',
          '#808080',
          '#808000',
          '#800080',
          '#800000',
          '#00ffff',
          '#00ff00',
          '#008080',
          '#008000',
          '#0000ff',
          '#000080',
          '#000000',
        ];
      function It(a, o, e) {
        const i = a.getImageData(o, e, 1, 1).data;
        return { r: i[0], g: i[1], b: i[2] };
      }
      function D(a) {
        return 1 == a.length ? '0' + a : '' + a;
      }
      function de(a) {
        return Math.round(255 * parseFloat(a)).toString(16);
      }
      function St(a) {
        return u(a) / 255;
      }
      function u(a) {
        return parseInt(a, 16);
      }
      function Et(a, o, e, i) {
        var n = [D(k(a).toString(16)), D(k(o).toString(16)), D(k(e).toString(16))];
        return i &&
          n[0].charAt(0) == n[0].charAt(1) &&
          n[1].charAt(0) == n[1].charAt(1) &&
          n[2].charAt(0) == n[2].charAt(1)
          ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0)
          : n.join('');
      }
      const v = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)',
        dt = '[\\s|\\(]+(' + v + ')[,|\\s]+(' + v + ')[,|\\s]+(' + v + ')\\s*\\)?',
        gt =
          '[\\s|\\(]+(' + v + ')[,|\\s]+(' + v + ')[,|\\s]+(' + v + ')[,|\\s]+(' + v + ')\\s*\\)?',
        O = {
          CSS_UNIT: new RegExp(v),
          rgb: new RegExp('rgb' + dt),
          rgba: new RegExp('rgba' + gt),
          hsl: new RegExp('hsl' + dt),
          hsla: new RegExp('hsla' + gt),
          hsv: new RegExp('hsv' + dt),
          hsva: new RegExp('hsva' + gt),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        };
      function ht(a) {
        let o;
        return (
          (a = a.replace(re, '').replace(le, '').toLowerCase()),
          (o = O.rgb.exec(a))
            ? { r: o[1], g: o[2], b: o[3], a: 1 }
            : (o = O.rgba.exec(a))
              ? { r: o[1], g: o[2], b: o[3], a: o[4] }
              : (o = O.hex8.exec(a))
                ? { r: u(o[1]), g: u(o[2]), b: u(o[3]), a: St(o[4]) }
                : (o = O.hex6.exec(a))
                  ? { r: u(o[1]), g: u(o[2]), b: u(o[3]), a: 1 }
                  : (o = O.hex4.exec(a))
                    ? {
                        r: u(o[1] + '' + o[1]),
                        g: u(o[2] + '' + o[2]),
                        b: u(o[3] + '' + o[3]),
                        a: St(o[4] + '' + o[4]),
                      }
                    : (o = O.hex3.exec(a))
                      ? {
                          r: u(o[1] + '' + o[1]),
                          g: u(o[2] + '' + o[2]),
                          b: u(o[3] + '' + o[3]),
                          a: 1,
                        }
                      : null
        );
      }
      class w {
        constructor(o, e, i, n) {
          (this.r = o > R ? R : o),
            (this.g = e > R ? R : e),
            (this.b = i > R ? R : i),
            (this.a = null != n ? (n > 1 ? 1 : n) : 1),
            (this.roundA = Math.round(this.a)),
            (this.hex = Et(this.r, this.g, this.b)),
            (this.rgba = this.toRgba());
        }
        toHex(o) {
          return Et(this.r, this.g, this.b, o);
        }
        toRgba() {
          return `rgba(${this.r},${this.g},${this.b},${this.a})`;
        }
        toHexString(o) {
          return '#' + this.toHex(o);
        }
        toRgbString() {
          return 1 === this.a
            ? 'rgb(' +
                Math.round(this.r) +
                ', ' +
                Math.round(this.g) +
                ', ' +
                Math.round(this.b) +
                ')'
            : 'rgba(' +
                Math.round(this.r) +
                ', ' +
                Math.round(this.g) +
                ', ' +
                Math.round(this.b) +
                ', ' +
                this.roundA +
                ')';
        }
        toHex8(o) {
          return (function ce(a, o, e, i, n) {
            var r = [D(k(a).toString(16)), D(k(o).toString(16)), D(k(e).toString(16)), D(de(i))];
            return n &&
              r[0].charAt(0) == r[0].charAt(1) &&
              r[1].charAt(0) == r[1].charAt(1) &&
              r[2].charAt(0) == r[2].charAt(1) &&
              r[3].charAt(0) == r[3].charAt(1)
              ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) + r[3].charAt(0)
              : r.join('');
          })(this.r, this.g, this.b, this.a, o);
        }
        toHex8String(o) {
          return '#' + this.toHex8(o);
        }
        toString(o) {
          let i;
          return o ||
            !(this.a < 1 && this.a >= 0) ||
            ('hex' !== o && 'hex6' !== o && 'hex3' !== o && 'hex4' !== o && 'hex8' !== o)
            ? ('rgb' === o && (i = this.toRgbString()),
              ('hex' === o || 'hex6' === o) && (i = this.toHexString()),
              'hex3' === o && (i = this.toHexString(!0)),
              'hex4' === o && (i = this.toHex8String(!0)),
              'hex8' === o && (i = this.toHex8String()),
              i || this.toHexString())
            : this.toRgbString();
        }
      }
      class Y {
        constructor(o, e) {
          (this.zone = o),
            (this.colorChanged = new t.vpe()),
            (this.x = 0),
            (this.y = 0),
            (this.drag = !1),
            (this._destroyed = new x.xQ()),
            (this.elementId = e);
        }
        ngOnDestroy() {
          this._destroyed.next(), this._destroyed.complete();
        }
        ngAfterViewInit() {
          (this.canvas = document.getElementById(this.elementId)),
            (this.ctx = this.canvas.getContext('2d')),
            (this.width = this.canvas.width),
            (this.height = this.canvas.height),
            this.draw();
        }
        draw() {
          this.ctx.clearRect(0, 0, this.width, this.height),
            this.ctx.rect(0, 0, this.width, this.height),
            this.fillGradient(),
            0 != this.y && this.redrawIndicator(this.x, this.y);
        }
        onMousedown(o) {
          (this.drag = !0),
            this.changeColor(o),
            this.zone.runOutsideAngular(() => {
              this.canvas.addEventListener('mousemove', this.onMousemove.bind(this));
            });
        }
        onMousemove(o) {
          this.drag &&
            this.zone.run(() => {
              this.changeColor(o);
            });
        }
        onMouseup(o) {
          (this.drag = !1), this.canvas.removeEventListener('mousemove', this.onMousemove);
        }
        emitChange(o) {
          this.colorChanged.emit(o);
        }
      }
      (Y.ɵfac = function (o) {
        t.$Z();
      }),
        (Y.ɵdir = t.lG2({
          type: Y,
          inputs: { color: 'color', theme: 'theme' },
          outputs: { colorChanged: 'colorChanged' },
        }));
      class V extends Y {
        constructor(o) {
          super(o, 'color-strip'), (this.zone = o);
        }
        ngOnInit() {}
        ngAfterViewInit() {
          super.ngAfterViewInit();
        }
        fillGradient() {
          const o = this.ctx.createLinearGradient(0, 0, 0, this.height);
          o.addColorStop(0, 'rgba(255, 0, 0, 1)'),
            o.addColorStop(0.17, 'rgba(255, 255, 0, 1)'),
            o.addColorStop(0.34, 'rgba(0, 255, 0, 1)'),
            o.addColorStop(0.51, 'rgba(0, 255, 255, 1)'),
            o.addColorStop(0.68, 'rgba(0, 0, 255, 1)'),
            o.addColorStop(0.85, 'rgba(255, 0, 255, 1)'),
            o.addColorStop(1, 'rgba(255, 0, 0, 1)'),
            (this.ctx.fillStyle = o),
            this.ctx.fill();
        }
        redrawIndicator(o, e) {
          this.ctx.beginPath(),
            (this.ctx.strokeStyle = 'white'),
            (this.ctx.lineWidth = 2),
            this.ctx.arc(7.5, e, 7.5, 0, 2 * Math.PI, !1),
            this.ctx.stroke(),
            this.ctx.closePath();
        }
        changeColor(o) {
          (this.x = o.offsetX), (this.y = o.offsetY), this.draw();
          const { r: e, g: i, b: n } = It(this.ctx, o.offsetX, o.offsetY);
          this.emitChange(new w(e, i, n));
        }
      }
      (V.ɵfac = function (o) {
        return new (o || V)(t.Y36(t.R0b));
      }),
        (V.ɵcmp = t.Xpm({
          type: V,
          selectors: [['ngx-mat-color-slider']],
          features: [t.qOj],
          decls: 1,
          vars: 0,
          consts: [
            [
              'id',
              'color-strip',
              'width',
              '15',
              'height',
              '234',
              1,
              'zone-strip',
              3,
              'mousedown',
              'mouseup',
            ],
          ],
          template: function (o, e) {
            1 & o &&
              (t.TgZ(0, 'canvas', 0),
              t.NdJ('mousedown', function (n) {
                return e.onMousedown(n);
              })('mouseup', function (n) {
                return e.onMouseup(n);
              }),
              t.qZA());
          },
        }));
      class q {
        constructor() {}
        onInput(o) {
          this._formatInput(o.target);
        }
        _formatInput(o) {
          let e = Number(o.value.replace(se, ''));
          (e = isNaN(e) ? 0 : e), (o.value = e);
        }
      }
      (q.ɵfac = function (o) {
        return new (o || q)();
      }),
        (q.ɵdir = t.lG2({
          type: q,
          selectors: [['', 'ngxMatNumericColorInput', '']],
          hostBindings: function (o, e) {
            1 & o &&
              t.NdJ('input', function (n) {
                return e.onInput(n);
              });
          },
        }));
      class H extends Y {
        constructor(o) {
          super(o, 'color-block'),
            (this.zone = o),
            (this._resetBaseColor = !0),
            (this.formGroup = new d.cw({
              r: new d.NI(null, [d.kI.required]),
              g: new d.NI(null, [d.kI.required]),
              b: new d.NI(null, [d.kI.required]),
              a: new d.NI(null, [d.kI.required]),
              hex: new d.NI(null, [d.kI.required, d.kI.pattern(O.hex6)]),
            }));
        }
        get rCtrl() {
          return this.formGroup.get('r');
        }
        get gCtrl() {
          return this.formGroup.get('g');
        }
        get bCtrl() {
          return this.formGroup.get('b');
        }
        get aCtrl() {
          return this.formGroup.get('a');
        }
        get hexCtrl() {
          return this.formGroup.get('hex');
        }
        ngOnInit() {
          (0, B.T)(
            this.rCtrl.valueChanges,
            this.gCtrl.valueChanges,
            this.bCtrl.valueChanges,
            this.aCtrl.valueChanges,
          )
            .pipe((0, wt.R)(this._destroyed), (0, kt.b)(400))
            .subscribe((i) => {
              const n = new w(
                Number(this.rCtrl.value),
                Number(this.gCtrl.value),
                Number(this.bCtrl.value),
                Number(this.aCtrl.value),
              );
              this.emitChange(n);
            }),
            this.hexCtrl.valueChanges
              .pipe((0, wt.R)(this._destroyed), (0, kt.b)(400), (0, ne.x)())
              .subscribe((i) => {
                const n = ht(i);
                if (null != n) {
                  const r = new w(n.r, n.g, n.b, n.a);
                  this.emitChange(r);
                }
              });
        }
        ngOnChanges(o) {
          o.color &&
            o.color.currentValue &&
            (this.updateForm(o.color.currentValue),
            this._resetBaseColor && (this._baseColor = o.color.currentValue),
            (this._resetBaseColor = !0),
            o.color.firstChange || this.draw());
        }
        updateForm(o) {
          const e = { emitEvent: !1 };
          this.rCtrl.setValue(o.r, e),
            this.gCtrl.setValue(o.g, e),
            this.bCtrl.setValue(o.b, e),
            this.aCtrl.setValue(o.a, e),
            this.hexCtrl.setValue(o.hex, e);
        }
        redrawIndicator(o, e) {
          this.ctx.beginPath(),
            (this.ctx.strokeStyle = 'white'),
            this.ctx.arc(o, e, 5, 0, 2 * Math.PI, !1),
            this.ctx.stroke(),
            this.ctx.closePath();
        }
        fillGradient() {
          (this.ctx.fillStyle = this._baseColor ? this._baseColor.rgba : 'rgba(255,255,255,1)'),
            this.ctx.fillRect(0, 0, this.width, this.height);
          const o = this.ctx.createLinearGradient(0, 0, this.width, 0);
          o.addColorStop(0, 'rgba(255,255,255,1)'),
            o.addColorStop(1, 'rgba(255,255,255,0)'),
            (this.ctx.fillStyle = o),
            this.ctx.fillRect(0, 0, this.width, this.height);
          const e = this.ctx.createLinearGradient(0, 0, 0, this.height);
          e.addColorStop(0, 'rgba(0,0,0,0)'),
            e.addColorStop(1, 'rgba(0,0,0,1)'),
            (this.ctx.fillStyle = e),
            this.ctx.fillRect(0, 0, this.width, this.height);
        }
        onSliderColorChanged(o) {
          (this._baseColor = o), (this.color = o), this.fillGradient(), this.emitChange(o);
        }
        changeColor(o) {
          (this.x = o.offsetX), (this.y = o.offsetY), (this._resetBaseColor = !1), this.draw();
          const { r: e, g: i, b: n } = It(this.ctx, o.offsetX, o.offsetY);
          this.emitChange(new w(e, i, n));
        }
      }
      (H.ɵfac = function (o) {
        return new (o || H)(t.Y36(t.R0b));
      }),
        (H.ɵcmp = t.Xpm({
          type: H,
          selectors: [['ngx-mat-color-canvas']],
          hostAttrs: [1, 'ngx-mat-color-canvas'],
          features: [t.qOj, t.TTD],
          decls: 30,
          vars: 8,
          consts: [
            [3, 'formGroup'],
            [1, 'color-canvas-row'],
            [1, 'zone-canvas'],
            [
              'id',
              'color-block',
              'width',
              '200',
              'height',
              '235',
              1,
              'zone-block',
              3,
              'mousedown',
              'mouseup',
            ],
            [3, 'colorChanged'],
            [1, 'zone-inputs'],
            [3, 'color'],
            [
              'matInput',
              '',
              'formControlName',
              'r',
              'ngxMatNumericColorInput',
              '',
              'autocomplete',
              'off',
            ],
            [
              'matInput',
              '',
              'formControlName',
              'g',
              'ngxMatNumericColorInput',
              '',
              'autocomplete',
              'off',
            ],
            [
              'matInput',
              '',
              'formControlName',
              'b',
              'ngxMatNumericColorInput',
              '',
              'autocomplete',
              'off',
            ],
            ['mat-mini-fab', '', 1, 'preview'],
            ['matPrefix', '', 1, 'symbol'],
            ['matInput', '', 'formControlName', 'hex', 'autocomplete', 'off'],
            [1, 'input-opacity', 3, 'color'],
            [
              'matInput',
              '',
              'formControlName',
              'a',
              'type',
              'number',
              'min',
              '0',
              'max',
              '1',
              'step',
              '0.1',
              'autocomplete',
              'off',
            ],
          ],
          template: function (o, e) {
            1 & o &&
              (t.TgZ(0, 'form', 0)(1, 'div', 1)(2, 'div', 2)(3, 'canvas', 3),
              t.NdJ('mousedown', function (n) {
                return e.onMousedown(n);
              })('mouseup', function (n) {
                return e.onMouseup(n);
              }),
              t.qZA(),
              t.TgZ(4, 'ngx-mat-color-slider', 4),
              t.NdJ('colorChanged', function (n) {
                return e.onSliderColorChanged(n);
              }),
              t.qZA()(),
              t.TgZ(5, 'div', 5)(6, 'mat-form-field', 6)(7, 'mat-label'),
              t._uU(8, 'R'),
              t.qZA(),
              t._UZ(9, 'input', 7),
              t.qZA(),
              t.TgZ(10, 'mat-form-field', 6)(11, 'mat-label'),
              t._uU(12, 'G'),
              t.qZA(),
              t._UZ(13, 'input', 8),
              t.qZA(),
              t.TgZ(14, 'mat-form-field', 6)(15, 'mat-label'),
              t._uU(16, 'B'),
              t.qZA(),
              t._UZ(17, 'input', 9),
              t.qZA()()(),
              t.TgZ(18, 'div', 1),
              t._UZ(19, 'button', 10),
              t.TgZ(20, 'mat-form-field', 6)(21, 'mat-label'),
              t._uU(22, 'HEX6'),
              t.qZA(),
              t.TgZ(23, 'mat-label', 11),
              t._uU(24, '#\xa0'),
              t.qZA(),
              t._UZ(25, 'input', 12),
              t.qZA(),
              t.TgZ(26, 'mat-form-field', 13)(27, 'mat-label'),
              t._uU(28, 'A'),
              t.qZA(),
              t._UZ(29, 'input', 14),
              t.qZA()()()),
              2 & o &&
                (t.Q6J('formGroup', e.formGroup),
                t.xp6(6),
                t.Q6J('color', e.theme),
                t.xp6(4),
                t.Q6J('color', e.theme),
                t.xp6(4),
                t.Q6J('color', e.theme),
                t.xp6(5),
                t.Udp('background-color', (null == e.color ? null : e.color.rgba) || 'transparent'),
                t.xp6(1),
                t.Q6J('color', e.theme),
                t.xp6(6),
                t.Q6J('color', e.theme));
          },
          dependencies: [
            Z.Nt,
            b.KE,
            b.hX,
            b.qo,
            W.nh,
            d._Y,
            d.Fj,
            d.wV,
            d.JJ,
            d.JL,
            d.qQ,
            d.Fd,
            d.sg,
            d.u,
            V,
            q,
          ],
          styles: [
            '.ngx-mat-color-canvas .color-canvas-row{display:flex}.ngx-mat-color-canvas .color-canvas-row:first-of-type{height:235px;margin-bottom:12px}.ngx-mat-color-canvas .color-canvas-row:first-of-type .card{height:180px}.ngx-mat-color-canvas .color-canvas-row canvas:hover{cursor:crosshair}.ngx-mat-color-canvas .color-canvas-row .zone{display:flex}.ngx-mat-color-canvas .color-canvas-row .zone-canvas{height:235px}.ngx-mat-color-canvas .color-canvas-row .zone-canvas .zone-block{border:1px solid rgba(0,0,0,.12)}.ngx-mat-color-canvas .color-canvas-row .zone-strip{flex-basis:auto;margin-left:10px}.ngx-mat-color-canvas .color-canvas-row .zone-inputs{display:flex;width:60px;height:235px;flex-direction:column;margin-left:16px;margin-top:12px}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2){display:flex}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .preview{min-width:40px;min-height:40px;height:40px;width:40px;margin-top:12px}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-mdc-form-field{margin-left:16px}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-mdc-form-field:first-of-type{width:170px}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-mdc-form-field:first-of-type .symbol{font-weight:700;color:#0000008a}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-mdc-form-field:last-of-type{width:60px}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-mdc-form-field:last-of-type .mat-mdc-text-field-wrapper{padding:0 8px}.ngx-mat-color-canvas .mat-mdc-form-field-label{font-weight:700}.ngx-mat-color-canvas .mat-mdc-form-field .mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:transparent}\n',
          ],
          encapsulation: 2,
        }));
      const Nt = function (a) {
        return { active: a };
      };
      function me(a, o) {
        if (1 & a) {
          const e = t.EpF();
          t.TgZ(0, 'button', 2),
            t.NdJ('click', function () {
              const r = t.CHM(e).$implicit,
                s = t.oxw();
              return t.KtG(s.select(r));
            }),
            t.qZA();
        }
        if (2 & a) {
          const e = o.$implicit,
            i = t.oxw();
          t.Udp('background-color', e),
            t.Q6J('ngClass', t.VKq(4, Nt, i.selectedColor === e))('disableRipple', !0);
        }
      }
      function ue(a, o) {
        if (1 & a) {
          const e = t.EpF();
          t.TgZ(0, 'button', 2),
            t.NdJ('click', function () {
              const r = t.CHM(e).$implicit,
                s = t.oxw();
              return t.KtG(s.select(r));
            }),
            t.qZA();
        }
        if (2 & a) {
          const e = o.$implicit,
            i = t.oxw();
          t.Udp('background-color', e),
            t.Q6J('ngClass', t.VKq(4, Nt, i.selectedColor === e))('disableRipple', !0);
        }
      }
      class z {
        constructor() {
          (this.colorChanged = new t.vpe()),
            (this.colors1 = Rt.slice(0, 8)),
            (this.colors2 = Rt.slice(8, 16));
        }
        set color(o) {
          o && (this.selectedColor = o.toHexString());
        }
        ngOnInit() {}
        select(o) {
          this.selectedColor = o;
          const { r: e, g: i, b: n, a: r } = ht(o);
          this.colorChanged.emit(new w(e, i, n, r));
        }
      }
      (z.ɵfac = function (o) {
        return new (o || z)();
      }),
        (z.ɵcmp = t.Xpm({
          type: z,
          selectors: [['ngx-mat-color-collection']],
          hostAttrs: [1, 'ngx-mat-color-collection'],
          inputs: { color: 'color' },
          outputs: { colorChanged: 'colorChanged' },
          decls: 4,
          vars: 2,
          consts: [
            [1, 'color-collection-row'],
            [
              'mat-mini-fab',
              '',
              'class',
              'btn-color',
              3,
              'background-color',
              'ngClass',
              'disableRipple',
              'click',
              4,
              'ngFor',
              'ngForOf',
            ],
            ['mat-mini-fab', '', 1, 'btn-color', 3, 'ngClass', 'disableRipple', 'click'],
          ],
          template: function (o, e) {
            1 & o &&
              (t.TgZ(0, 'div', 0),
              t.YNc(1, me, 1, 6, 'button', 1),
              t.qZA(),
              t.TgZ(2, 'div', 0),
              t.YNc(3, ue, 1, 6, 'button', 1),
              t.qZA()),
              2 & o &&
                (t.xp6(1), t.Q6J('ngForOf', e.colors1), t.xp6(2), t.Q6J('ngForOf', e.colors2));
          },
          dependencies: [f.mk, f.sg, W.nh],
          styles: [
            '.ngx-mat-color-collection .btn-color{height:20px;width:20px;margin-right:11px;box-shadow:none;opacity:.3;will-change:opacity;transition:opacity .3s linear}.ngx-mat-color-collection .btn-color.active{box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f;opacity:1}.ngx-mat-color-collection .btn-color .mat-mdc-button-touch-target{display:none!important}\n',
          ],
          encapsulation: 2,
        }));
      class I {
        constructor() {
          this.colorChanged = new t.vpe();
        }
        ngOnInit() {}
        handleColorChanged(o) {
          this.colorChanged.emit(o);
        }
      }
      (I.ɵfac = function (o) {
        return new (o || I)();
      }),
        (I.ɵcmp = t.Xpm({
          type: I,
          selectors: [['ngx-mat-color-palette']],
          hostAttrs: [1, 'ngx-mat-color-palette'],
          inputs: { color: 'color', theme: 'theme' },
          outputs: { colorChanged: 'colorChanged' },
          decls: 2,
          vars: 3,
          consts: [
            [3, 'color', 'theme', 'colorChanged'],
            [3, 'color', 'colorChanged'],
          ],
          template: function (o, e) {
            1 & o &&
              (t.TgZ(0, 'ngx-mat-color-canvas', 0),
              t.NdJ('colorChanged', function (n) {
                return e.handleColorChanged(n);
              }),
              t.qZA(),
              t.TgZ(1, 'ngx-mat-color-collection', 1),
              t.NdJ('colorChanged', function (n) {
                return e.handleColorChanged(n);
              }),
              t.qZA()),
              2 & o &&
                (t.Q6J('color', e.color)('theme', e.theme), t.xp6(1), t.Q6J('color', e.color));
          },
          dependencies: [H, z],
          styles: [
            '.ngx-mat-color-palette .actions{margin-top:10px;display:flex}.ngx-mat-color-palette .actions .left{display:flex;flex-direction:column;margin-right:15px}.ngx-mat-color-palette .actions .left .preview{flex:2 1 auto;margin-bottom:10px}.ngx-mat-color-palette .actions .right{display:flex;width:60px;flex-direction:column}\n',
          ],
          encapsulation: 2,
        }));
      var Pt = l(9602),
        pt = l(2654);
      class y {
        constructor() {}
        sameColor(o, e) {
          return (null == o && null == e) || (null != o && null != e && o.rgba === e.rgba);
        }
        format(o, e) {
          return o.toString(e);
        }
        parse(o) {
          const e = ht(o);
          return e ? new w(e.r, e.g, e.b, e.a) : null;
        }
      }
      (y.ɵfac = function (o) {
        return new (o || y)();
      }),
        (y.ɵprov = t.Yz7({ token: y, factory: y.ɵfac }));
      const Ft = new t.OlP('mat-color-formats'),
        Lt = new t.OlP('ngx-mat-colorpicker-scroll-strategy'),
        fe = {
          provide: Lt,
          deps: [p.aV],
          useFactory: function _e(a) {
            return () => a.scrollStrategies.reposition();
          },
        },
        Ce = (0, it.pj)(
          class {
            constructor(a) {
              this._elementRef = a;
            }
          },
        );
      class S extends Ce {
        constructor(o) {
          super(o);
        }
      }
      (S.ɵfac = function (o) {
        return new (o || S)(t.Y36(t.SBq));
      }),
        (S.ɵcmp = t.Xpm({
          type: S,
          selectors: [['ngx-mat-color-picker-content']],
          viewQuery: function (o, e) {
            if ((1 & o && t.Gf(I, 5), 2 & o)) {
              let i;
              t.iGM((i = t.CRH())) && (e._palette = i.first);
            }
          },
          hostAttrs: [1, 'ngx-mat-colorpicker-content'],
          hostVars: 3,
          hostBindings: function (o, e) {
            2 & o &&
              (t.d8E('@transformPanel', 'enter'),
              t.ekj('ngx-mat-colorpicker-content-touch', e.picker.touchUi));
          },
          inputs: { color: 'color' },
          exportAs: ['ngxMatColorPickerContent'],
          features: [t.qOj],
          decls: 1,
          vars: 2,
          consts: [[3, 'color', 'theme', 'colorChanged']],
          template: function (o, e) {
            1 & o &&
              (t.TgZ(0, 'ngx-mat-color-palette', 0),
              t.NdJ('colorChanged', function (n) {
                return e.picker.select(n);
              }),
              t.qZA()),
              2 & o && t.Q6J('color', e.picker._selected)('theme', e.color);
          },
          dependencies: [I],
          styles: [
            '.ngx-mat-colorpicker-content{display:block;border-radius:4px;box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f;background-color:#fff;color:#000000de;padding:16px}.ngx-mat-colorpicker-content .ngx-mat-color-palette{width:296px;height:354px}.ngx-mat-colorpicker-content-touch{display:block;max-height:80vh;overflow:auto}.ngx-mat-colorpicker-content-touch .ngx-mat-color-palette{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation: landscape){.mat-colorpicker-content-touch .ngx-mat-color-palette{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-colorpicker-content-touch .ngx-mat-color-palette{width:80vw;height:100vw}}\n',
          ],
          encapsulation: 2,
          data: { animation: [Pt.E2.transformPanel, Pt.E2.fadeInCalendar] },
          changeDetection: 0,
        }));
      class j {
        constructor(o, e, i, n, r, s, c, g) {
          (this._dialog = o),
            (this._overlay = e),
            (this._zone = i),
            (this._adapter = n),
            (this._dir = r),
            (this._document = c),
            (this._viewContainerRef = g),
            (this.openedStream = new t.vpe()),
            (this.closedStream = new t.vpe()),
            (this._touchUi = !1),
            (this._opened = !1),
            (this._defaultColor = 'primary'),
            (this._validSelected = null),
            (this._disabledChange = new x.xQ()),
            (this._focusedElementBeforeOpen = null),
            (this._inputSubscription = pt.w.EMPTY),
            (this._selectedChanged = new x.xQ()),
            (this._scrollStrategy = s);
        }
        get disabled() {
          return void 0 === this._disabled && this._pickerInput
            ? this._pickerInput.disabled
            : !!this._disabled;
        }
        set disabled(o) {
          const e = (0, U.Ig)(o);
          e !== this._disabled && ((this._disabled = e), this._disabledChange.next(e));
        }
        get touchUi() {
          return this._touchUi;
        }
        set touchUi(o) {
          this._touchUi = (0, U.Ig)(o);
        }
        get opened() {
          return this._opened;
        }
        set opened(o) {
          o ? this.open() : this.close();
        }
        get defaultColor() {
          return this._defaultColor;
        }
        set defaultColor(o) {
          this._defaultColor = o;
        }
        get color() {
          return this._color || (this._pickerInput ? this._pickerInput.getThemePalette() : void 0);
        }
        set color(o) {
          this._color = o;
        }
        get _selected() {
          return this._validSelected;
        }
        set _selected(o) {
          this._validSelected = o;
        }
        ngOnInit() {}
        ngOnDestroy() {
          this.close(),
            this._inputSubscription.unsubscribe(),
            this._disabledChange.complete(),
            this._popupRef && (this._popupRef.dispose(), (this._popupComponentRef = null));
        }
        select(o) {
          let e = this._selected;
          (this._selected = o),
            this._adapter.sameColor(e, this._selected) || this._selectedChanged.next(o);
        }
        registerInput(o) {
          if (this._pickerInput)
            throw Error('A ColorPicker can only be associated with a single input.');
          (this._pickerInput = o),
            (this._inputSubscription = this._pickerInput._valueChange.subscribe(
              (e) => (this._selected = e),
            ));
        }
        open() {
          if (!this._opened && !this.disabled) {
            if (!this._pickerInput)
              throw Error('Attempted to open an ColorPicker with no associated input.');
            this._document && (this._focusedElementBeforeOpen = this._document.activeElement),
              this.touchUi ? this._openAsDialog() : this._openAsPopup(),
              (this._opened = !0),
              this.openedStream.emit();
          }
        }
        _openAsDialog() {
          this._dialogRef && this._dialogRef.close(),
            (this._dialogRef = this._dialog.open(S, {
              direction: this._dir ? this._dir.value : 'ltr',
              viewContainerRef: this._viewContainerRef,
              panelClass: 'ngx-mat-colorpicker-dialog',
            })),
            this._dialogRef.afterClosed().subscribe(() => this.close()),
            (this._dialogRef.componentInstance.picker = this),
            this._setColor();
        }
        _openAsPopup() {
          this._portal || (this._portal = new _.C5(S, this._viewContainerRef)),
            this._popupRef || this._createPopup(),
            this._popupRef.hasAttached() ||
              ((this._popupComponentRef = this._popupRef.attach(this._portal)),
              (this._popupComponentRef.instance.picker = this),
              this._setColor(),
              this._zone.onStable
                .asObservable()
                .pipe((0, ot.q)(1))
                .subscribe(() => {
                  this._popupRef.updatePosition();
                }));
        }
        _createPopup() {
          const o = new p.X_({
            positionStrategy: this._createPopupPositionStrategy(),
            hasBackdrop: !0,
            backdropClass: 'mat-overlay-transparent-backdrop',
            direction: this._dir,
            scrollStrategy: this._scrollStrategy(),
            panelClass: 'mat-colorpicker-popup',
          });
          (this._popupRef = this._overlay.create(o)),
            this._popupRef.overlayElement.setAttribute('role', 'dialog'),
            (0, B.T)(
              this._popupRef.backdropClick(),
              this._popupRef.detachments(),
              this._popupRef
                .keydownEvents()
                .pipe(
                  (0, G.h)(
                    (e) =>
                      e.keyCode === M.hY || (this._pickerInput && e.altKey && e.keyCode === M.LH),
                  ),
                ),
            ).subscribe((e) => {
              e && e.preventDefault(), this.close();
            });
        }
        close() {
          if (!this._opened) return;
          this._popupRef && this._popupRef.hasAttached() && this._popupRef.detach(),
            this._dialogRef && (this._dialogRef.close(), (this._dialogRef = null)),
            this._portal && this._portal.isAttached && this._portal.detach();
          const o = () => {
            this._opened &&
              ((this._opened = !1),
              this.closedStream.emit(),
              (this._focusedElementBeforeOpen = null));
          };
          this._focusedElementBeforeOpen &&
          'function' == typeof this._focusedElementBeforeOpen.focus
            ? (this._focusedElementBeforeOpen.focus(), setTimeout(o))
            : o();
        }
        _setColor() {
          const o = this.color;
          this._popupComponentRef && (this._popupComponentRef.instance.color = o),
            this._dialogRef && (this._dialogRef.componentInstance.color = o);
        }
        _createPopupPositionStrategy() {
          return this._overlay
            .position()
            .flexibleConnectedTo(this._pickerInput.getConnectedOverlayOrigin())
            .withTransformOriginOn('.ngx-mat-colorpicker-content')
            .withFlexibleDimensions(!1)
            .withViewportMargin(8)
            .withLockedPosition()
            .withPositions([
              { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' },
              { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom' },
              { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' },
              { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom' },
            ]);
        }
      }
      (j.ɵfac = function (o) {
        return new (o || j)(
          t.Y36(Dt),
          t.Y36(p.aV),
          t.Y36(t.R0b),
          t.Y36(y),
          t.Y36(lt.Is, 8),
          t.Y36(Lt),
          t.Y36(f.K0, 8),
          t.Y36(t.s_b),
        );
      }),
        (j.ɵcmp = t.Xpm({
          type: j,
          selectors: [['ngx-mat-color-picker']],
          inputs: {
            disabled: 'disabled',
            touchUi: 'touchUi',
            opened: 'opened',
            defaultColor: 'defaultColor',
            color: 'color',
          },
          outputs: { openedStream: 'opened', closedStream: 'closed' },
          exportAs: ['ngxMatColorPicker'],
          decls: 0,
          vars: 0,
          template: function (o, e) {},
          encapsulation: 2,
          changeDetection: 0,
        }));
      class nt {
        constructor(o, e) {
          (this.target = o), (this.targetElement = e), (this.value = this.target.value);
        }
      }
      const xe = { provide: d.JU, useExisting: (0, t.Gpc)(() => A), multi: !0 },
        be = { provide: d.Cf, useExisting: (0, t.Gpc)(() => A), multi: !0 };
      class A {
        constructor(o, e, i, n) {
          if (
            ((this._elementRef = o),
            (this._formField = e),
            (this._colorFormats = i),
            (this._adapter = n),
            (this.colorChange = new t.vpe()),
            (this.colorInput = new t.vpe()),
            (this._disabledChange = new t.vpe()),
            (this._valueChange = new t.vpe()),
            (this._onTouched = () => {}),
            (this._cvaOnChange = () => {}),
            (this._validatorOnChange = () => {}),
            (this._pickerSubscription = pt.w.EMPTY),
            (this._validator = d.kI.compose([])),
            (this._lastValueValid = !1),
            !this._colorFormats)
          )
            throw (function he(a) {
              return Error(
                `NgxMatColorPicker: No provider found for ${a}. You must define MAT_COLOR_FORMATS in your module`,
              );
            })('MAT_COLOR_FORMATS');
        }
        set ngxMatColorPicker(o) {
          !o ||
            ((this._picker = o),
            this._picker.registerInput(this),
            this._pickerSubscription.unsubscribe(),
            (this._pickerSubscription = this._picker._selectedChanged.subscribe((e) => {
              (this.value = e),
                this._cvaOnChange(e),
                this._onTouched(),
                this.colorInput.emit(new nt(this, this._elementRef.nativeElement)),
                this.colorChange.emit(new nt(this, this._elementRef.nativeElement));
            })));
        }
        get disabled() {
          return !!this._disabled;
        }
        set disabled(o) {
          const e = (0, U.Ig)(o),
            i = this._elementRef.nativeElement;
          this._disabled !== e && ((this._disabled = e), this._disabledChange.emit(e)),
            e && i.blur && i.blur();
        }
        get value() {
          return this._value;
        }
        set value(o) {
          const e = this.value;
          (this._value = o),
            this._formatValue(o),
            this._adapter.sameColor(e, o) || this._valueChange.emit(o);
        }
        getThemePalette() {
          return this._formField ? this._formField.color : void 0;
        }
        registerOnValidatorChange(o) {
          this._validatorOnChange = o;
        }
        validate(o) {
          return this._validator ? this._validator(o) : null;
        }
        getPopupConnectionElementRef() {
          return this.getConnectedOverlayOrigin();
        }
        getConnectedOverlayOrigin() {
          return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
        }
        ngOnInit() {}
        ngOnDestroy() {
          this._pickerSubscription.unsubscribe(),
            this._valueChange.complete(),
            this._disabledChange.complete();
        }
        writeValue(o) {
          this.value = o;
        }
        registerOnChange(o) {
          this._cvaOnChange = o;
        }
        registerOnTouched(o) {
          this._onTouched = o;
        }
        setDisabledState(o) {
          this.disabled = o;
        }
        _onChange() {
          this.colorChange.emit(new nt(this, this._elementRef.nativeElement));
        }
        _onKeydown(o) {
          this._picker &&
            o.altKey &&
            o.keyCode === M.JH &&
            !this._elementRef.nativeElement.readOnly &&
            (this._picker.open(), o.preventDefault());
        }
        _onBlur() {
          this.value && this._formatValue(this.value), this._onTouched();
        }
        _formatValue(o) {
          this._elementRef.nativeElement.value = o
            ? this._adapter.format(o, this._colorFormats.display.colorInput)
            : '';
        }
        _onInput(o) {
          const e = this._lastValueValid,
            i = this._adapter.parse(o);
          this._adapter.sameColor(i, this._value)
            ? e !== this._lastValueValid && this._validatorOnChange()
            : ((this._value = i),
              this._cvaOnChange(i),
              this._valueChange.emit(i),
              this.colorInput.emit(new nt(this, this._elementRef.nativeElement)));
        }
      }
      (A.ɵfac = function (o) {
        return new (o || A)(t.Y36(t.SBq), t.Y36(b.KE, 8), t.Y36(Ft, 8), t.Y36(y));
      }),
        (A.ɵdir = t.lG2({
          type: A,
          selectors: [['input', 'ngxMatColorPicker', '']],
          hostVars: 3,
          hostBindings: function (o, e) {
            1 & o &&
              t.NdJ('input', function (n) {
                return e._onInput(n.target.value);
              })('change', function () {
                return e._onChange();
              })('blur', function () {
                return e._onBlur();
              })('keydown', function (n) {
                return e._onKeydown(n);
              }),
              2 & o &&
                (t.Ikx('disabled', e.disabled),
                t.uIk('aria-haspopup', e._picker ? 'dialog' : null)(
                  'aria-owns',
                  ((null == e._picker ? null : e._picker.opened) && e._picker.id) || null,
                ));
          },
          inputs: { ngxMatColorPicker: 'ngxMatColorPicker', disabled: 'disabled', value: 'value' },
          outputs: { colorChange: 'colorChange', colorInput: 'colorInput' },
          exportAs: ['ngxMatColorPickerInput'],
          features: [t._Bn([xe, be, { provide: Z.Jk, useExisting: A }])],
        }));
      const ve = ['button'];
      function ye(a, o) {
        if ((1 & a && (t.TgZ(0, 'mat-icon'), t._uU(1, ' palette '), t.qZA()), 2 & a)) {
          const e = t.oxw();
          t.Udp(
            'color',
            null == e.picker || null == e.picker._selected ? null : e.picker._selected.rgba,
          );
        }
      }
      const Ae = [[['', 'ngxMatColorpickerToggleIcon', '']]];
      class E {}
      (E.ɵfac = function (o) {
        return new (o || E)();
      }),
        (E.ɵdir = t.lG2({ type: E, selectors: [['', 'ngxMatColorpickerToggleIcon', '']] }));
      class J {
        constructor(o) {
          (this._cd = o), (this._stateChanges = pt.w.EMPTY);
        }
        get disabled() {
          if (null == this._disabled && this.picker) return this.picker.disabled;
        }
        set disabled(o) {
          this._disabled = o;
        }
        ngOnInit() {}
        ngOnChanges(o) {
          o.picker && this._watchStateChanges();
        }
        ngOnDestroy() {
          this._stateChanges.unsubscribe();
        }
        ngAfterContentInit() {
          this._watchStateChanges();
        }
        open(o) {
          this.picker && !this.disabled && (this.picker.open(), o.stopPropagation());
        }
        _watchStateChanges() {
          const o = this.picker ? this.picker._disabledChange : (0, tt.of)(),
            e =
              this.picker && this.picker._pickerInput
                ? this.picker._pickerInput._disabledChange
                : (0, tt.of)(),
            i = this.picker
              ? (0, B.T)(this.picker.openedStream, this.picker.closedStream)
              : (0, tt.of)();
          this._stateChanges.unsubscribe(),
            (this._stateChanges = (0, B.T)(o, e, i).subscribe(() => this._cd.markForCheck()));
        }
      }
      (J.ɵfac = function (o) {
        return new (o || J)(t.Y36(t.sBO));
      }),
        (J.ɵcmp = t.Xpm({
          type: J,
          selectors: [['ngx-mat-color-toggle']],
          contentQueries: function (o, e, i) {
            if ((1 & o && t.Suo(i, E, 5), 2 & o)) {
              let n;
              t.iGM((n = t.CRH())) && (e._customIcon = n.first);
            }
          },
          viewQuery: function (o, e) {
            if ((1 & o && t.Gf(ve, 5), 2 & o)) {
              let i;
              t.iGM((i = t.CRH())) && (e._button = i.first);
            }
          },
          hostAttrs: [1, 'ngx-mat-color-toggle'],
          hostVars: 7,
          hostBindings: function (o, e) {
            1 & o &&
              t.NdJ('focus', function () {
                return e._button.focus();
              }),
              2 & o &&
                (t.uIk('tabindex', -1),
                t.ekj('ngx-mat-color-toggle-active', e.picker && e.picker.opened)(
                  'mat-accent',
                  e.picker && 'accent' === e.picker.color,
                )('mat-warn', e.picker && 'warn' === e.picker.color));
          },
          inputs: {
            picker: ['for', 'picker'],
            tabIndex: 'tabIndex',
            disabled: 'disabled',
            disableRipple: 'disableRipple',
          },
          exportAs: ['ngxMatColorPickerToggle'],
          features: [t.TTD],
          ngContentSelectors: ['[ngxMatColorpickerToggleIcon]'],
          decls: 4,
          vars: 5,
          consts: [
            ['mat-icon-button', '', 'type', 'button', 3, 'disabled', 'disableRipple', 'click'],
            ['button', ''],
            [3, 'color', 4, 'ngIf'],
          ],
          template: function (o, e) {
            1 & o &&
              (t.F$t(Ae),
              t.TgZ(0, 'button', 0, 1),
              t.NdJ('click', function (n) {
                return e.open(n);
              }),
              t.YNc(2, ye, 2, 2, 'mat-icon', 2),
              t.Hsn(3),
              t.qZA()),
              2 & o &&
                (t.Q6J('disabled', e.disabled)('disableRipple', e.disableRipple),
                t.uIk('aria-haspopup', e.picker ? 'dialog' : null)(
                  'tabindex',
                  e.disabled ? -1 : e.tabIndex,
                ),
                t.xp6(2),
                t.Q6J('ngIf', !e._customIcon));
          },
          dependencies: [f.O5, W.RK, $.Hw],
          styles: [
            '.mat-form-field-appearance .mat-form-field-prefix .ngx-mat-color-toggle-default-icon,.mat-form-field-appearance .mat-form-field-suffix .ngx-mat-color-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance) .mat-form-field-prefix .ngx-mat-color-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance) .mat-form-field-suffix .ngx-mat-color-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance) .mat-form-field-prefix .mat-icon-button .ngx-mat-color-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance) .mat-form-field-suffix .mat-icon-button .ngx-mat-color-toggle-default-icon{margin:auto}\n',
          ],
          encapsulation: 2,
        }));
      class N {}
      (N.ɵfac = function (o) {
        return new (o || N)();
      }),
        (N.ɵmod = t.oAB({ type: N })),
        (N.ɵinj = t.cJS({
          providers: [y, fe],
          imports: [f.ez, Z.c, W.ot, X.QW, K.Fk, d.u5, d.UX, ae, _.eL, $.Ps],
        }));
      var Me = l(3288),
        De = l(3425),
        Zt = l(3848);
      function Oe(a, o) {
        if ((1 & a && (t.TgZ(0, 'mat-radio-button', 32), t._uU(1), t.qZA()), 2 & a)) {
          const e = o.$implicit;
          t.Q6J('value', e.value), t.xp6(1), t.hij(' ', e.label, '');
        }
      }
      function we(a, o) {
        if ((1 & a && (t.TgZ(0, 'mat-radio-button', 32), t._uU(1), t.qZA()), 2 & a)) {
          const e = o.$implicit;
          t.Q6J('value', e.value), t.xp6(1), t.hij(' ', e.label, '');
        }
      }
      function ke(a, o) {
        if ((1 & a && (t.TgZ(0, 'mat-option', 33), t._uU(1), t.qZA()), 2 & a)) {
          const e = o.$implicit;
          t.Q6J('value', e), t.xp6(1), t.hij(' ', e, ' ');
        }
      }
      class Q {
        constructor() {
          (this.disabled = !1),
            (this.color = 'primary'),
            (this.touchUi = !1),
            (this.colorCtr = new d.NI(new w(0, 255, 255), [d.kI.required])),
            (this.options = [
              { value: !0, label: 'True' },
              { value: !1, label: 'False' },
            ]),
            (this.listColors = ['primary', 'accent', 'warn']),
            (this.code3 =
              '<mat-form-field>\n  <input matInput [ngxMatColorPicker]="picker" [formControl]="colorCtr" [disabled]="disabled">\n  <ngx-mat-color-toggle matSuffix [for]="picker"></ngx-mat-color-toggle>\n  <ngx-mat-color-picker #picker [touchUi]="touchUi" [color]="color"></ngx-mat-color-picker>\n</mat-form-field>'),
            (this.code6 =
              "\nimport { Color } from '@hrefcl/color-picker';\ncolorCtr: AbstractControl = new FormControl(new Color(255, 243, 0), [Validators.required]);"),
            (this.code1 = 'npm install --save @hrefcl/color-picker'),
            (this.code2 =
              "import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } \n  from '@hrefcl/color-picker'\n\n  @NgModule({\n    ...\n    imports: [\n         ...\n         NgxMatColorPickerModule\n    ],\n    providers: [\n     { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }\n    ],\n    ...\n })\n export class AppModule { }"),
            (this.code4 =
              "export const CUSTOM_MAT_COLOR_FORMATS: MatColorFormats = {\n    display: {\n        colorInput: 'hex'\n    }\n}\n\n@NgModule({\n    ...\n    providers: [\n      { provide: MAT_COLOR_FORMATS, useValue: CUSTOM_MAT_COLOR_FORMATS }\n    ],\n    ...\n  })\nexport class AppModule { }"),
            (this.code5 =
              '<link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" rel="stylesheet">'),
            (this.code7 =
              '<mat-form-field>\n  <input matInput [ngxMatColorPicker]="pickerCustomIcon" [formControl]="colorCtr" [disabled]="disabled">\n  <ngx-mat-color-toggle matSuffix [for]="pickerCustomIcon">\n    <mat-icon ngxMatColorpickerToggleIcon>keyboard_arrow_down</mat-icon>\n  </ngx-mat-color-toggle>\n  <ngx-mat-color-picker #pickerCustomIcon [touchUi]="touchUi" [color]="color"></ngx-mat-color-picker>\n</mat-form-field>');
        }
        ngOnInit() {}
        onDisabledChanged(o) {
          o ? this.colorCtr.disable() : this.colorCtr.enable();
        }
      }
      (Q.ɵfac = function (o) {
        return new (o || Q)();
      }),
        (Q.ɵcmp = t.Xpm({
          type: Q,
          selectors: [['ngx-mat-demo-colorpicker']],
          decls: 143,
          vars: 33,
          consts: [
            [3, 'mat-stretch-tabs'],
            ['label', 'API'],
            ['href', 'https://www.buymeacoffee.com/h2qutc', 'target', '_blank'],
            [
              'src',
              'https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png',
              'alt',
              'Buy Me A Coffee',
              2,
              'height',
              '35px !important',
              'width',
              '150px !important',
            ],
            ['href', 'https://www.npmjs.com/package/@hrefcl/color-picker', 'target', '_blank'],
            ['src', 'https://badge.fury.io/js/%40angular-material-components%2Fcolor-picker.svg'],
            ['ngxMatHighlight', ''],
            ['ngxMatHighlight', '', 1, 'language-typescript'],
            [1, 'api-table-properties'],
            ['href', 'https://material.angular.io/guide/theming#using-a-pre-built-theme'],
            ['ngxMatHighlight', '', 1, 'language-css'],
            ['label', 'Example'],
            [1, 'zone', 'zone-value'],
            [1, 'row'],
            [1, 'zone', 'zone-picker'],
            ['matInput', '', 3, 'ngxMatColorPicker', 'formControl', 'disabled'],
            ['matSuffix', '', 3, 'for'],
            [3, 'touchUi', 'color'],
            ['picker', ''],
            [1, 'zone', 'zone-config'],
            [1, 'config-wrapper'],
            [1, 'label'],
            ['aria-label', 'Select an option', 3, 'color', 'ngModel', 'ngModelChange'],
            ['class', 'example-radio-button', 3, 'value', 4, 'ngFor', 'ngForOf'],
            ['aria-label', 'Select an option', 3, 'ngModel', 'color', 'ngModelChange'],
            [3, 'color'],
            [3, 'ngModel', 'ngModelChange'],
            [3, 'value', 4, 'ngFor', 'ngForOf'],
            ['ngxMatHighlight', '', 1, 'html'],
            ['ngxMatHighlight', '', 1, 'language-html'],
            ['ngxMatColorpickerToggleIcon', ''],
            ['pickerCustomIcon', ''],
            [1, 'example-radio-button', 3, 'value'],
            [3, 'value'],
          ],
          template: function (o, e) {
            if (
              (1 & o &&
                (t.TgZ(0, 'mat-tab-group', 0)(1, 'mat-tab', 1)(2, 'p'),
                t._uU(3, 'Thank you so much for your coffee \u2764\ufe0f '),
                t.qZA(),
                t.TgZ(4, 'a', 2),
                t._UZ(5, 'img', 3),
                t.qZA(),
                t.TgZ(6, 'h1'),
                t._uU(7, 'API reference for @hrefcl/color-picker'),
                t.qZA(),
                t.TgZ(8, 'h2'),
                t._uU(9, 'Getting started'),
                t.qZA(),
                t.TgZ(10, 'a', 4),
                t._UZ(11, 'img', 5),
                t.qZA(),
                t.TgZ(12, 'pre')(13, 'code', 6),
                t._uU(14),
                t.qZA()(),
                t.TgZ(15, 'h2'),
                t._uU(16, 'Setup'),
                t.qZA(),
                t.TgZ(17, 'pre')(18, 'code', 7),
                t._uU(19),
                t.qZA()(),
                t.TgZ(20, 'h2'),
                t._uU(21, 'Properties @Input'),
                t.qZA(),
                t.TgZ(22, 'table', 8)(23, 'tbody')(24, 'tr')(25, 'th'),
                t._uU(26, 'Name'),
                t.qZA(),
                t.TgZ(27, 'th'),
                t._uU(28, 'Type'),
                t.qZA(),
                t.TgZ(29, 'th'),
                t._uU(30, 'Default value'),
                t.qZA(),
                t.TgZ(31, 'th'),
                t._uU(32, 'Description'),
                t.qZA()(),
                t.TgZ(33, 'tr')(34, 'td')(35, 'div'),
                t._uU(36, 'disabled'),
                t.qZA()(),
                t.TgZ(37, 'td'),
                t._uU(38, 'boolean'),
                t.qZA(),
                t.TgZ(39, 'td'),
                t._uU(40, 'null'),
                t.qZA(),
                t.TgZ(41, 'td')(42, 'p'),
                t._uU(43, "If true, the picker is readonly and can't be modified"),
                t.qZA()()(),
                t.TgZ(44, 'tr')(45, 'td')(46, 'div'),
                t._uU(47, 'touchUi'),
                t.qZA()(),
                t.TgZ(48, 'td'),
                t._uU(49, 'boolean'),
                t.qZA(),
                t.TgZ(50, 'td'),
                t._uU(51, 'false'),
                t.qZA(),
                t.TgZ(52, 'td')(53, 'p'),
                t._uU(
                  54,
                  'Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather than a popup and elements have more padding to allow for bigger touch targets. ',
                ),
                t.qZA()()(),
                t.TgZ(55, 'tr')(56, 'td')(57, 'div'),
                t._uU(58, 'color'),
                t.qZA()(),
                t.TgZ(59, 'td'),
                t._uU(60, 'ThemePalette'),
                t.qZA(),
                t.TgZ(61, 'td'),
                t._uU(62, 'undefined'),
                t.qZA(),
                t.TgZ(63, 'td')(64, 'p'),
                t._uU(65, 'Color palette to use on the color picker '),
                t.qZA()()()()(),
                t.TgZ(66, 'h2'),
                t._uU(67, 'Choosing color format settings to display in input '),
                t.qZA(),
                t.TgZ(68, 'p'),
                t._uU(69, 'The color-picker use '),
                t.TgZ(70, 'strong'),
                t._uU(71, 'NGX_MAT_COLOR_FORMATS'),
                t.qZA(),
                t._uU(72, ' by default.'),
                t.qZA(),
                t.TgZ(73, 'p'),
                t._uU(
                  74,
                  'You can also customize the color format by providing your custom MAT_COLOR_FORMATS in your module.',
                ),
                t.qZA(),
                t._uU(75, ' For example: '),
                t.TgZ(76, 'pre')(77, 'code', 7),
                t._uU(78),
                t.qZA()(),
                t.TgZ(79, 'h2'),
                t._uU(80, 'Theming'),
                t.qZA(),
                t.TgZ(81, 'p'),
                t._uU(82, '@see @angular/material '),
                t.TgZ(83, 'a', 9),
                t._uU(84, 'Using a pre-built theme'),
                t.qZA()(),
                t.TgZ(85, 'p'),
                t._uU(86, 'Add the Material Design icon font to your index.html'),
                t.qZA(),
                t.TgZ(87, 'pre')(88, 'code', 10),
                t._uU(89),
                t.qZA()()(),
                t.TgZ(90, 'mat-tab', 11)(91, 'mat-card', 12)(92, 'mat-card-content')(93, 'div', 13),
                t._uU(94),
                t.qZA(),
                t.TgZ(95, 'div', 13),
                t._uU(96),
                t.qZA()()(),
                t.TgZ(97, 'mat-card', 14)(98, 'mat-card-content')(99, 'mat-form-field'),
                t._UZ(100, 'input', 15)(101, 'ngx-mat-color-toggle', 16)(
                  102,
                  'ngx-mat-color-picker',
                  17,
                  18,
                ),
                t.qZA()()(),
                t.TgZ(104, 'mat-card', 19)(105, 'div', 20)(106, 'span', 21),
                t._uU(107, 'disabled (Default: false) '),
                t.qZA(),
                t.TgZ(108, 'mat-radio-group', 22),
                t.NdJ('ngModelChange', function (n) {
                  return e.onDisabledChanged(n);
                }),
                t.YNc(109, Oe, 2, 2, 'mat-radio-button', 23),
                t.qZA()(),
                t.TgZ(110, 'div', 20)(111, 'span', 21),
                t._uU(112, 'touchUi (Default: false) '),
                t.qZA(),
                t.TgZ(113, 'mat-radio-group', 24),
                t.NdJ('ngModelChange', function (n) {
                  return (e.touchUi = n);
                }),
                t.YNc(114, we, 2, 2, 'mat-radio-button', 23),
                t.qZA()(),
                t.TgZ(115, 'div', 20)(116, 'span', 21),
                t._uU(117, 'color (Default: primary) '),
                t.qZA(),
                t.TgZ(118, 'mat-form-field', 25)(119, 'mat-label'),
                t._uU(120, 'Select color'),
                t.qZA(),
                t.TgZ(121, 'mat-select', 26),
                t.NdJ('ngModelChange', function (n) {
                  return (e.color = n);
                }),
                t.YNc(122, ke, 2, 2, 'mat-option', 27),
                t.qZA()()()(),
                t.TgZ(123, 'pre')(124, 'code', 7),
                t._uU(125),
                t.qZA()(),
                t.TgZ(126, 'pre')(127, 'code', 28),
                t._uU(128),
                t.qZA()(),
                t.TgZ(129, 'h2'),
                t._uU(130, 'Color picker with custom icon'),
                t.qZA(),
                t.TgZ(131, 'pre')(132, 'code', 29),
                t._uU(133),
                t.qZA()(),
                t.TgZ(134, 'mat-card', 14)(135, 'mat-card-content')(136, 'mat-form-field'),
                t._UZ(137, 'input', 15),
                t.TgZ(138, 'ngx-mat-color-toggle', 16)(139, 'mat-icon', 30),
                t._uU(140, 'keyboard_arrow_down'),
                t.qZA()(),
                t._UZ(141, 'ngx-mat-color-picker', 17, 31),
                t.qZA()()()()()),
              2 & o)
            ) {
              const i = t.MAs(103),
                n = t.MAs(142);
              t.Q6J('mat-stretch-tabs', !1),
                t.xp6(14),
                t.Oqu(e.code1),
                t.xp6(5),
                t.Oqu(e.code2),
                t.xp6(59),
                t.Oqu(e.code4),
                t.xp6(11),
                t.Oqu(e.code5),
                t.xp6(4),
                t.Udp('background-color', null == e.colorCtr.value ? null : e.colorCtr.value.rgba),
                t.xp6(1),
                t.hij('HEX: ', null == e.colorCtr.value ? null : e.colorCtr.value.hex, ''),
                t.xp6(2),
                t.hij('RGBA: ', null == e.colorCtr.value ? null : e.colorCtr.value.rgba, ''),
                t.xp6(4),
                t.Q6J('ngxMatColorPicker', i)('formControl', e.colorCtr)('disabled', e.disabled),
                t.xp6(1),
                t.Q6J('for', i),
                t.xp6(1),
                t.Q6J('touchUi', e.touchUi)('color', e.color),
                t.xp6(6),
                t.Q6J('color', e.color)('ngModel', e.disabled),
                t.xp6(1),
                t.Q6J('ngForOf', e.options),
                t.xp6(4),
                t.Q6J('ngModel', e.touchUi)('color', e.color),
                t.xp6(1),
                t.Q6J('ngForOf', e.options),
                t.xp6(4),
                t.Q6J('color', e.color),
                t.xp6(3),
                t.Q6J('ngModel', e.color),
                t.xp6(1),
                t.Q6J('ngForOf', e.listColors),
                t.xp6(3),
                t.Oqu(e.code6),
                t.xp6(3),
                t.Oqu(e.code3),
                t.xp6(5),
                t.Oqu(e.code7),
                t.xp6(4),
                t.Q6J('ngxMatColorPicker', n)('formControl', e.colorCtr)('disabled', e.disabled),
                t.xp6(1),
                t.Q6J('for', n),
                t.xp6(3),
                t.Q6J('touchUi', e.touchUi)('color', e.color);
            }
          },
          dependencies: [
            f.sg,
            J,
            A,
            j,
            E,
            X.a8,
            X.dn,
            d.Fj,
            d.JJ,
            d.On,
            d.oH,
            b.KE,
            b.hX,
            b.R9,
            Z.Nt,
            K.VQ,
            K.U0,
            _t.gD,
            it.ey,
            $.Hw,
            De.P,
            Zt.uX,
            Zt.SP,
          ],
          styles: [
            '.config-wrapper[_ngcontent-%COMP%]{margin-bottom:15px;display:flex;align-items:center;flex-wrap:wrap}.config-wrapper[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700;margin-right:15px;display:block;width:225px}.config-wrapper[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.config-wrapper_step[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]{margin-right:20px;width:100px}.zone[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.zone-value[_ngcontent-%COMP%]{font-weight:700}.zone-config[_ngcontent-%COMP%]{flex-direction:column}.api-table-properties[_ngcontent-%COMP%]{text-align:left;border-radius:2px;border-spacing:0;margin:0 0 32px;width:100%;border-collapse:collapse;border-spacing:2px;background-color:#fff}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{display:table-row-group;vertical-align:middle}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#00000014}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.03);padding:8px 16px}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{font-weight:700}.zone-value[_ngcontent-%COMP%]{display:flex;flex-direction:column}.zone-value[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:block;padding:5px;max-width:200px}',
          ],
        }));
      const Re = [{ path: '', component: Q }];
      class P {}
      (P.ɵfac = function (o) {
        return new (o || P)();
      }),
        (P.ɵmod = t.oAB({ type: P })),
        (P.ɵinj = t.cJS({
          providers: [{ provide: Ft, useValue: { display: { colorInput: 'hex8' } } }],
          imports: [
            f.ez,
            Ut.Bz.forChild(Re),
            N,
            X.QW,
            d.u5,
            d.UX,
            b.lN,
            Z.c,
            K.Fk,
            _t.LD,
            $.Ps,
            Me.m,
          ],
        }));
    },
  },
]);
