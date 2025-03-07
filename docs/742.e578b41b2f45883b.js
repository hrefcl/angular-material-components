'use strict';
(self.webpackChunkangular_material_components =
  self.webpackChunkangular_material_components || []).push([
  [742],
  {
    5742: (X, T, l) => {
      l.r(T), l.d(T, { DemoFileInputModule: () => m });
      var d = l(6895),
        r = l(4006),
        I = l(9602),
        h = l(7392),
        Z = l(4859),
        C = l(3546),
        q = l(6709),
        v = l(4144),
        b = l(1948),
        A = l(4385),
        U = l(6630),
        O = l(8842),
        _ = l(1281),
        t = l(4650),
        x = l(3238),
        u = l(9549),
        F = l(5529),
        P = l(3353);
      const N = ['inputFile'],
        D = ['inputValue'];
      function J(i, e) {
        1 & i && (t.TgZ(0, 'mat-icon', 7), t._uU(1, 'attach_file'), t.qZA());
      }
      const w = [[['', 'ngxMatFileInputIcon', '']]];
      let S = 0;
      const z = (0, x.FD)(
        class {
          constructor(i, e, n, o) {
            (this._defaultErrorStateMatcher = i),
              (this._parentForm = e),
              (this._parentFormGroup = n),
              (this.ngControl = o),
              (this.stateChanges = new F.xQ());
          }
        },
      );
      class s {}
      (s.ɵfac = function (e) {
        return new (e || s)();
      }),
        (s.ɵdir = t.lG2({ type: s, selectors: [['', 'ngxMatFileInputIcon', '']] }));
      class p extends z {
        constructor(e, n, o, a, f, M, $) {
          super($, f, M, a),
            (this._elementRef = e),
            (this._platform = n),
            (this._cd = o),
            (this.ngControl = a),
            (this.color = 'primary'),
            (this.fileNames = null),
            (this._uid = 'ngx-mat-fileinput-' + S++),
            (this.stateChanges = new F.xQ()),
            (this.focused = !1),
            (this.controlType = 'ngx-mat-file-input'),
            (this.autofilled = !1),
            (this._onTouched = () => {}),
            (this._onChange = () => {}),
            (this._disabled = !1),
            (this._multiple = !1),
            (this.placeholder = 'Choose a file'),
            (this.separator = ','),
            (this._required = !1),
            (this._readonly = !0),
            (this.id = this.id),
            this.ngControl && (this.ngControl.valueAccessor = this);
        }
        get disabled() {
          return this.ngControl && null !== this.ngControl.disabled
            ? this.ngControl.disabled
            : this._disabled;
        }
        set disabled(e) {
          (this._disabled = (0, _.Ig)(e)),
            this.focused && ((this.focused = !1), this.stateChanges.next());
        }
        get id() {
          return this._id;
        }
        set id(e) {
          this._id = e || this._uid;
        }
        get multiple() {
          return this._multiple;
        }
        set multiple(e) {
          this._multiple = (0, _.Ig)(e);
        }
        get required() {
          return this._required;
        }
        set required(e) {
          this._required = (0, _.Ig)(e);
        }
        get value() {
          return this._value;
        }
        set value(e) {
          this._value = e;
        }
        get readonly() {
          return this._readonly;
        }
        set readonly(e) {
          this._readonly = (0, _.Ig)(e);
        }
        get accept() {
          return this._accept;
        }
        set accept(e) {
          this._accept = e;
        }
        ngOnChanges() {
          this.stateChanges.next();
        }
        ngOnDestroy() {
          this.stateChanges.complete();
        }
        ngDoCheck() {
          this.ngControl && this.updateErrorState();
        }
        writeValue(e) {
          this._updateInputValue(e);
        }
        registerOnChange(e) {
          this._onChange = e;
        }
        registerOnTouched(e) {
          this._onTouched = e;
        }
        setDisabledState(e) {
          (this.disabled = e), this.stateChanges.next();
        }
        focus(e) {
          this._inputValueRef.nativeElement.focus(e);
        }
        _focusChanged(e) {
          e !== this.focused &&
            (!this.readonly || !e) &&
            ((this.focused = e), this.stateChanges.next());
        }
        _markAsTouched() {
          this._onTouched(), this._cd.markForCheck(), this.stateChanges.next();
        }
        _isBadInput() {
          let e = this._inputValueRef.nativeElement.validity;
          return e && e.badInput;
        }
        get empty() {
          return (
            !this._inputValueRef.nativeElement.value && !this._isBadInput() && !this.autofilled
          );
        }
        get shouldLabelFloat() {
          return this.focused || !this.empty;
        }
        setDescribedByIds(e) {
          this._ariaDescribedby = e.join(' ');
        }
        openFilePicker(e) {
          this._inputFileRef.nativeElement.click(),
            e && (e.preventDefault(), e.stopPropagation()),
            this._markAsTouched();
        }
        handleFiles(e) {
          if (e.length > 0) {
            const n = new Array();
            for (let o = 0; o < e.length; o++) n.push(e.item(o));
            this._updateInputValue(n),
              this._resetInputFile(),
              this._onChange(this.multiple ? n : n[0]);
          }
        }
        onContainerClick(e) {}
        _resetInputFile() {
          this._inputFileRef.nativeElement.value = '';
        }
        _updateInputValue(e) {
          let n = null;
          e &&
            (n = Array.isArray(e)
              ? this._multiple
                ? e.map((o) => o.name).join(this.separator)
                : e[0].name
              : null != e.name
                ? e.name
                : null),
            (this._inputValueRef.nativeElement.value = n);
        }
      }
      (p.ɵfac = function (e) {
        return new (e || p)(
          t.Y36(t.SBq),
          t.Y36(P.t4),
          t.Y36(t.sBO),
          t.Y36(r.a5, 10),
          t.Y36(r.F, 8),
          t.Y36(r.sg, 8),
          t.Y36(x.rD),
        );
      }),
        (p.ɵcmp = t.Xpm({
          type: p,
          selectors: [['ngx-mat-file-input']],
          contentQueries: function (e, n, o) {
            if ((1 & e && t.Suo(o, s, 5), 2 & e)) {
              let a;
              t.iGM((a = t.CRH())) && (n._customIcon = a.first);
            }
          },
          viewQuery: function (e, n) {
            if ((1 & e && (t.Gf(N, 7), t.Gf(D, 7)), 2 & e)) {
              let o;
              t.iGM((o = t.CRH())) && (n._inputFileRef = o.first),
                t.iGM((o = t.CRH())) && (n._inputValueRef = o.first);
            }
          },
          hostAttrs: [1, 'ngx-mat-file-input'],
          inputs: {
            color: 'color',
            disabled: 'disabled',
            id: 'id',
            multiple: 'multiple',
            placeholder: 'placeholder',
            separator: 'separator',
            required: 'required',
            errorStateMatcher: 'errorStateMatcher',
            value: 'value',
            readonly: 'readonly',
            accept: 'accept',
          },
          exportAs: ['ngx-mat-file-input'],
          features: [t._Bn([{ provide: u.Eo, useExisting: (0, t.Gpc)(() => p) }]), t.qOj, t.TTD],
          ngContentSelectors: ['[ngxMatFileInputIcon]'],
          decls: 8,
          vars: 13,
          consts: [
            [
              'autocomplete',
              'off',
              1,
              'mat-mdc-input-element',
              'mat-mdc-form-field-input-control',
              'mdc-text-field__input',
              3,
              'disabled',
              'required',
            ],
            ['inputValue', ''],
            [1, 'mat-mdc-form-field-suffix'],
            [
              'matSuffix',
              '',
              'mat-icon-button',
              '',
              'type',
              'button',
              1,
              'button-browse',
              3,
              'color',
              'disabled',
              'click',
            ],
            ['class', 'ngx-mat-file-input--default-icon', 4, 'ngIf'],
            ['type', 'file', 1, 'input-file', 3, 'multiple', 'accept', 'change'],
            ['inputFile', ''],
            [1, 'ngx-mat-file-input--default-icon'],
          ],
          template: function (e, n) {
            1 & e &&
              (t.F$t(w),
              t._UZ(0, 'input', 0, 1),
              t.TgZ(2, 'div', 2)(3, 'button', 3),
              t.NdJ('click', function (a) {
                return n.openFilePicker(a);
              }),
              t.YNc(4, J, 2, 0, 'mat-icon', 4),
              t.Hsn(5),
              t.qZA()(),
              t.TgZ(6, 'input', 5, 6),
              t.NdJ('change', function (a) {
                return n.handleFiles(a.target.files);
              }),
              t.qZA()),
              2 & e &&
                (t.Q6J('disabled', n.disabled)('required', n.required),
                t.uIk('id', n.id)('placeholder', n.placeholder)('readonly', n.readonly || null)(
                  'aria-describedby',
                  n._ariaDescribedby || null,
                )('aria-invalid', n.errorState)('aria-required', n.required.toString()),
                t.xp6(3),
                t.Q6J('color', n.color)('disabled', n.disabled),
                t.xp6(1),
                t.Q6J('ngIf', !n._customIcon),
                t.xp6(2),
                t.Q6J('multiple', n.multiple)('accept', n.accept));
          },
          dependencies: [d.O5, Z.RK, h.Hw, u.R9],
          styles: [
            '.mat-mdc-form-field-appearance-outline .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-mdc-form-field-appearance-outline .mat-form-field-suffix .ngx-mat-file-input--default-icon{width:1em}.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-suffix .ngx-mat-file-input--default-icon{display:block;width:1.5em;height:1.5em}.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-prefix .mat-icon-button .ngx-mat-file-input--default-icon,.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-suffix .mat-icon-button .ngx-mat-file-input--default-icon{margin:auto}.ngx-mat-file-input{display:flex;line-height:18px;align-items:center}.ngx-mat-file-input .input-file{display:block;visibility:hidden;width:0;height:0}\n',
          ],
          encapsulation: 2,
        }));
      class c {}
      (c.ɵfac = function (e) {
        return new (e || c)();
      }),
        (c.ɵmod = t.oAB({ type: c })),
        (c.ɵinj = t.cJS({ imports: [d.ez, Z.ot, h.Ps, u.lN, v.c] }));
      var E = l(3288),
        Y = l(3425),
        y = l(3848);
      function R(i, e) {
        if ((1 & i && (t.TgZ(0, 'li'), t._uU(1), t.qZA()), 2 & i)) {
          const n = e.$implicit;
          t.xp6(1), t.Oqu(null == n ? null : n.name);
        }
      }
      function V(i, e) {
        if ((1 & i && (t.TgZ(0, 'mat-radio-button', 30), t._uU(1), t.qZA()), 2 & i)) {
          const n = e.$implicit;
          t.Q6J('value', n.value), t.xp6(1), t.hij(' ', n.label, '');
        }
      }
      function k(i, e) {
        if ((1 & i && (t.TgZ(0, 'mat-radio-button', 30), t._uU(1), t.qZA()), 2 & i)) {
          const n = e.$implicit;
          t.Q6J('value', n.value), t.xp6(1), t.hij(' ', n.label, '');
        }
      }
      function H(i, e) {
        if ((1 & i && (t.TgZ(0, 'mat-option', 31), t._uU(1), t.qZA()), 2 & i)) {
          const n = e.$implicit;
          t.Q6J('value', n), t.xp6(1), t.hij(' ', n, ' ');
        }
      }
      function B(i, e) {
        if ((1 & i && (t.TgZ(0, 'mat-option', 31), t._uU(1), t.qZA()), 2 & i)) {
          const n = e.$implicit;
          t.Q6J('value', n), t.xp6(1), t.hij(' ', n, ' ');
        }
      }
      new File([], 'file 1'), new File([], 'file 2'), new File([], 'file 1');
      class g {
        constructor() {
          var i;
          (this.color = 'primary'),
            (this.disabled = !1),
            (this.multiple = !1),
            (this.options = [
              { value: !0, label: 'True' },
              { value: !1, label: 'False' },
            ]),
            (this.listColors = ['primary', 'accent', 'warn']),
            (this.listAccepts = [
              null,
              '.png',
              'image/*',
              '.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            ]),
            (this.code3 =
              '<mat-form-field>\n  <ngx-mat-file-input [formControl]="fileControl" [multiple]="multiple" [accept]="accept" [color]="color">\n    \x3c!-- <mat-icon ngxMatFileInputIcon>folder</mat-icon> --\x3e\n  </ngx-mat-file-input>\n</mat-form-field>'),
            (this.code4 =
              '<mat-form-field>\n  <ngx-mat-file-input [formControl]="file2Control" [multiple]="multiple" [accept]="accept" [color]="color">\n    <mat-icon ngxMatFileInputIcon>folder</mat-icon>\n  </ngx-mat-file-input>\n</mat-form-field>'),
            (this.code5 =
              '<mat-form-field appearance="outline">\n  <ngx-mat-file-input [formControl]="file3Control">\n  </ngx-mat-file-input>\n  <mat-hint>Hint</mat-hint>\n</mat-form-field>'),
            (this.code1 = 'npm install --save @hrefcl/file-input'),
            (this.code2 =
              "import { NgxMatFileInputModule } from '@hrefcl/file-input';\n  \n  @NgModule({\n     ...\n     imports: [\n          ...\n          NgxMatFileInputModule\n     ]\n     ...\n  })\n  export class AppModule { }"),
            (this.code6 =
              '<link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" rel="stylesheet">'),
            (this.maxSize = 16),
            (this.nbFiles = 0),
            (this.fileControl = new r.NI(this.files, [
              r.kI.required,
              ((i = 1024 * this.maxSize),
              (e) => {
                if (((i = Number(i)), isNaN(i)))
                  throw 'MaxSizeValidator: max of size of file is invalid';
                if (!e.value) return null;
                let n = e.value;
                return (
                  Array.isArray(e.value) || (n = [e.value]),
                  n.length && n.map((f) => f.size).reduce((f, M) => f + M) > i
                    ? { maxSize: !0 }
                    : null
                );
              }),
            ])),
            (this.file2Control = new r.NI(this.files)),
            (this.file3Control = new r.NI(this.files));
        }
        ngOnInit() {
          this.fileControl.valueChanges.subscribe((e) => {
            this.files = Array.isArray(e) ? e : [e];
          }),
            this.file3Control.valueChanges.subscribe((e) => {
              let n;
              (n = Array.isArray(e) ? e : [e]), (this.nbFiles = n.length);
            });
        }
        onDisabledChanged(e) {
          e ? this.fileControl.disable() : this.fileControl.enable();
        }
      }
      (g.ɵfac = function (e) {
        return new (e || g)();
      }),
        (g.ɵcmp = t.Xpm({
          type: g,
          selectors: [['app-demo-fileinput']],
          decls: 156,
          vars: 27,
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
            ['href', 'https://www.npmjs.com/package/@hrefcl/file-input', 'target', '_blank'],
            ['src', 'https://badge.fury.io/js/%40angular-material-components%2Ffile-input.svg'],
            ['ngxMatHighlight', ''],
            ['ngxMatHighlight', '', 1, 'language-typescript'],
            [1, 'api-table-properties'],
            ['href', 'https://material.angular.io/guide/theming#using-a-pre-built-theme'],
            ['ngxMatHighlight', '', 1, 'language-css'],
            ['label', 'Example'],
            [1, 'zone', 'zone-picker'],
            [3, 'formControl', 'multiple', 'accept', 'color'],
            [1, 'zone', 'zone-value', 'flex-column'],
            [1, 'title'],
            [1, 'value'],
            [4, 'ngFor', 'ngForOf'],
            [1, 'zone', 'zone-errors', 'flex-column'],
            [1, 'zone', 'zone-config'],
            [1, 'config-wrapper'],
            [1, 'label'],
            ['aria-label', 'Select an option', 3, 'ngModel', 'ngModelChange'],
            ['class', 'example-radio-button', 3, 'value', 4, 'ngFor', 'ngForOf'],
            [3, 'ngModel', 'ngModelChange'],
            [3, 'value', 4, 'ngFor', 'ngForOf'],
            ['ngxMatHighlight', '', 1, 'language-html'],
            [3, 'formControl'],
            ['ngxMatFileInputIcon', ''],
            ['appearance', 'outline'],
            [1, 'example-radio-button', 3, 'value'],
            [3, 'value'],
          ],
          template: function (e, n) {
            1 & e &&
              (t.TgZ(0, 'mat-tab-group', 0)(1, 'mat-tab', 1)(2, 'p'),
              t._uU(3, 'Thank you so much for your coffee \u2764\ufe0f '),
              t.qZA(),
              t.TgZ(4, 'a', 2),
              t._UZ(5, 'img', 3),
              t.qZA(),
              t.TgZ(6, 'h1'),
              t._uU(7, 'API reference for @hrefcl/file-input'),
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
              t._uU(43, 'If true, the file input is readonly.'),
              t.qZA()()(),
              t.TgZ(44, 'tr')(45, 'td')(46, 'div'),
              t._uU(47, 'multiple'),
              t.qZA()(),
              t.TgZ(48, 'td'),
              t._uU(49, 'boolean'),
              t.qZA(),
              t.TgZ(50, 'td'),
              t._uU(51, 'false'),
              t.qZA(),
              t.TgZ(52, 'td')(53, 'p'),
              t._uU(54, 'If true, the file input allows the user to select more than one file. '),
              t.qZA()()(),
              t.TgZ(55, 'tr')(56, 'td')(57, 'div'),
              t._uU(58, 'accept'),
              t.qZA()(),
              t.TgZ(59, 'td'),
              t._uU(60, 'string'),
              t.qZA(),
              t.TgZ(61, 'td'),
              t._uU(62, 'null'),
              t.qZA(),
              t.TgZ(63, 'td')(64, 'p'),
              t._uU(
                65,
                'Limiting accepted file types (For example: accept="image/png, image/jpeg" or accept=".png, .jpg, .jpeg" \u2014 Accept PNG or JPEG files.) ',
              ),
              t.qZA()()(),
              t.TgZ(66, 'tr')(67, 'td')(68, 'div'),
              t._uU(69, 'color'),
              t.qZA()(),
              t.TgZ(70, 'td'),
              t._uU(71, 'ThemePalette'),
              t.qZA(),
              t.TgZ(72, 'td'),
              t._uU(73, 'null'),
              t.qZA(),
              t.TgZ(74, 'td')(75, 'p'),
              t._uU(76, 'Theme color palette for the component. '),
              t.qZA()()()()(),
              t.TgZ(77, 'h2'),
              t._uU(78, 'Theming'),
              t.qZA(),
              t.TgZ(79, 'p'),
              t._uU(80, '@see @angular/material '),
              t.TgZ(81, 'a', 9),
              t._uU(82, 'Using a pre-built theme'),
              t.qZA()(),
              t.TgZ(83, 'p'),
              t._uU(84, 'Add the Material Design icon font to your index.html'),
              t.qZA(),
              t.TgZ(85, 'pre')(86, 'code', 10),
              t._uU(87),
              t.qZA()()(),
              t.TgZ(88, 'mat-tab', 11)(89, 'mat-card', 12)(90, 'mat-card-content')(
                91,
                'mat-form-field',
              ),
              t._UZ(92, 'ngx-mat-file-input', 13),
              t.qZA()()(),
              t.TgZ(93, 'mat-card', 14)(94, 'mat-card-content')(95, 'div', 15),
              t._uU(96, 'Selected file(s):'),
              t.qZA(),
              t.TgZ(97, 'div', 16)(98, 'ul'),
              t.YNc(99, R, 2, 1, 'li', 17),
              t.qZA()()()(),
              t.TgZ(100, 'mat-card', 18)(101, 'mat-card-content')(102, 'div', 15),
              t._uU(103),
              t.qZA(),
              t.TgZ(104, 'div', 16),
              t._uU(105),
              t.ALo(106, 'json'),
              t.qZA()()(),
              t.TgZ(107, 'mat-card', 19)(108, 'mat-card-content')(109, 'div', 20)(110, 'span', 21),
              t._uU(111, 'disabled (Default: false) '),
              t.qZA(),
              t.TgZ(112, 'mat-radio-group', 22),
              t.NdJ('ngModelChange', function (a) {
                return n.onDisabledChanged(a);
              }),
              t.YNc(113, V, 2, 2, 'mat-radio-button', 23),
              t.qZA()(),
              t.TgZ(114, 'div', 20)(115, 'span', 21),
              t._uU(116, 'multiple (Default: false) '),
              t.qZA(),
              t.TgZ(117, 'mat-radio-group', 22),
              t.NdJ('ngModelChange', function (a) {
                return (n.multiple = a);
              }),
              t.YNc(118, k, 2, 2, 'mat-radio-button', 23),
              t.qZA()(),
              t.TgZ(119, 'div', 20)(120, 'span', 21),
              t._uU(121, 'accept (Default: null) '),
              t.qZA(),
              t.TgZ(122, 'mat-form-field')(123, 'mat-label'),
              t._uU(124, 'Select accept'),
              t.qZA(),
              t.TgZ(125, 'mat-select', 24),
              t.NdJ('ngModelChange', function (a) {
                return (n.accept = a);
              }),
              t.YNc(126, H, 2, 2, 'mat-option', 25),
              t.qZA()()(),
              t.TgZ(127, 'div', 20)(128, 'span', 21),
              t._uU(129, 'color (Default: primary) '),
              t.qZA(),
              t.TgZ(130, 'mat-form-field')(131, 'mat-label'),
              t._uU(132, 'Select color'),
              t.qZA(),
              t.TgZ(133, 'mat-select', 24),
              t.NdJ('ngModelChange', function (a) {
                return (n.color = a);
              }),
              t.YNc(134, B, 2, 2, 'mat-option', 25),
              t.qZA()()()()(),
              t.TgZ(135, 'pre')(136, 'code', 26),
              t._uU(137),
              t.qZA()(),
              t.TgZ(138, 'h4'),
              t._uU(
                139,
                'You can provide a custom icon by using the directive ngxMatFileInputIcon',
              ),
              t.qZA(),
              t.TgZ(140, 'pre')(141, 'code', 26),
              t._uU(142),
              t.qZA()(),
              t.TgZ(143, 'mat-form-field')(144, 'ngx-mat-file-input', 27)(145, 'mat-icon', 28),
              t._uU(146, 'folder'),
              t.qZA()()(),
              t.TgZ(147, 'h4'),
              t._uU(
                148,
                'You can use with all properties of MatFormField such as appearance variants, hint...',
              ),
              t.qZA(),
              t.TgZ(149, 'pre')(150, 'code', 26),
              t._uU(151),
              t.qZA()(),
              t.TgZ(152, 'mat-form-field', 29),
              t._UZ(153, 'ngx-mat-file-input', 27),
              t.TgZ(154, 'mat-hint'),
              t._uU(155),
              t.qZA()()()()),
              2 & e &&
                (t.Q6J('mat-stretch-tabs', !1),
                t.xp6(14),
                t.Oqu(n.code1),
                t.xp6(5),
                t.Oqu(n.code2),
                t.xp6(68),
                t.Oqu(n.code6),
                t.xp6(5),
                t.Q6J('formControl', n.fileControl)('multiple', n.multiple)('accept', n.accept)(
                  'color',
                  n.color,
                ),
                t.xp6(7),
                t.Q6J('ngForOf', n.files),
                t.xp6(4),
                t.hij('Errors (Max size: ', n.maxSize, 'Ko)'),
                t.xp6(2),
                t.Oqu(t.lcZ(106, 25, n.fileControl.errors)),
                t.xp6(7),
                t.Q6J('ngModel', n.disabled),
                t.xp6(1),
                t.Q6J('ngForOf', n.options),
                t.xp6(4),
                t.Q6J('ngModel', n.multiple),
                t.xp6(1),
                t.Q6J('ngForOf', n.options),
                t.xp6(7),
                t.Q6J('ngModel', n.accept),
                t.xp6(1),
                t.Q6J('ngForOf', n.listAccepts),
                t.xp6(7),
                t.Q6J('ngModel', n.color),
                t.xp6(1),
                t.Q6J('ngForOf', n.listColors),
                t.xp6(3),
                t.Oqu(n.code3),
                t.xp6(5),
                t.Oqu(n.code4),
                t.xp6(2),
                t.Q6J('formControl', n.file2Control),
                t.xp6(7),
                t.Oqu(n.code5),
                t.xp6(2),
                t.Q6J('formControl', n.file3Control),
                t.xp6(2),
                t.hij('', n.nbFiles, ' selected file(s)'));
          },
          dependencies: [
            d.sg,
            u.KE,
            u.hX,
            u.bx,
            r.JJ,
            r.On,
            r.oH,
            b.VQ,
            b.U0,
            A.gD,
            x.ey,
            h.Hw,
            C.a8,
            C.dn,
            p,
            s,
            Y.P,
            y.uX,
            y.SP,
            d.Ts,
          ],
          styles: [
            '.config-wrapper[_ngcontent-%COMP%]{margin-bottom:15px;display:flex;align-items:center;flex-wrap:wrap}.config-wrapper[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700;margin-right:15px;display:block;width:225px}.config-wrapper[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.config-wrapper_step[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]{margin-right:20px;width:100px}.zone[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.zone-value[_ngcontent-%COMP%]{font-weight:700}.zone-config[_ngcontent-%COMP%]{flex-direction:column}.api-table-properties[_ngcontent-%COMP%]{text-align:left;border-radius:2px;border-spacing:0;margin:0 0 32px;width:100%;border-collapse:collapse;border-spacing:2px;background-color:#fff}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{display:table-row-group;vertical-align:middle}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#00000014}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.03);padding:8px 16px}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{font-weight:700}.flex-column[_ngcontent-%COMP%]{flex-direction:column}.flex-column[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:10px}.flex-column[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{display:block}',
          ],
        }));
      const G = [{ path: '', component: g }];
      class m {}
      (m.ɵfac = function (e) {
        return new (e || m)();
      }),
        (m.ɵmod = t.oAB({ type: m })),
        (m.ɵinj = t.cJS({
          imports: [
            d.ez,
            U.Bz.forChild(G),
            I.FA,
            v.c,
            r.u5,
            r.UX,
            Z.ot,
            O.K,
            b.Fk,
            A.LD,
            q.p9,
            h.Ps,
            C.QW,
            c,
            E.m,
          ],
        }));
    },
  },
]);
