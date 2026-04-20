import {
  ActivatedRoute,
  ApplicationRef,
  BehaviorSubject,
  BookService,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HttpClient,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NavigationEnd,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  Optional,
  Output,
  Renderer2,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  RuntimeError,
  Self,
  SkipSelf,
  SlicePipe,
  Subject,
  UpperCasePipe,
  Version,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  booleanAttribute,
  bootstrapApplication,
  computed,
  debounceTime,
  distinctUntilChanged,
  filter,
  forkJoin,
  forwardRef,
  from,
  getDOM,
  inject,
  isPromise,
  isSubscribable,
  map,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideRouter,
  setClassMetadata,
  signal,
  skip,
  tap,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-XP2UASES.js";

// node_modules/@angular/forms/fesm2022/forms.mjs
var BaseControlValueAccessor = class _BaseControlValueAccessor {
  _renderer;
  _elementRef;
  onChange = (_) => {
  };
  onTouched = () => {
  };
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
  }
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
  static \u0275fac = function BaseControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseControlValueAccessor
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BuiltInControlValueAccessor_BaseFactory;
    return function BuiltInControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(__ngFactoryType__ || _BuiltInControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BuiltInControlValueAccessor,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    this.setProperty("checked", value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxControlValueAccessor_BaseFactory;
    return function CheckboxControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(__ngFactoryType__ || _CheckboxControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxControlValueAccessor,
    selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
    hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.checked);
        })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($any($event.target).checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  _compositionMode;
  _composing = false;
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  _compositionStart() {
    this._composing = true;
  }
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
  static \u0275fac = function DefaultValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DefaultValueAccessor,
    selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
    hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
          return ctx._handleInput($event.target.value);
        })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
          return ctx._compositionStart();
        })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
          return ctx._compositionEnd($event.target.value);
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      host: {
        "(input)": "_handleInput($any($event.target).value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "_compositionStart()",
        "(compositionend)": "_compositionEnd($any($event.target).value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || lengthOrSize(value) === 0;
}
function lengthOrSize(value) {
  if (value == null) {
    return null;
  } else if (Array.isArray(value) || typeof value === "string") {
    return value.length;
  } else if (value instanceof Set) {
    return value.size;
  }
  return null;
}
var NG_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Validators = class {
  static min(min) {
    return minValidator(min);
  }
  static max(max) {
    return maxValidator(max);
  }
  static required(control) {
    return requiredValidator(control);
  }
  static requiredTrue(control) {
    return requiredTrueValidator(control);
  }
  static email(control) {
    return emailValidator(control);
  }
  static minLength(minLength) {
    return minLengthValidator(minLength);
  }
  static maxLength(maxLength) {
    return maxLengthValidator(maxLength);
  }
  static pattern(pattern) {
    return patternValidator(pattern);
  }
  static nullValidator(control) {
    return nullValidator();
  }
  static compose(validators) {
    return compose(validators);
  }
  static composeAsync(validators) {
    return composeAsync(validators);
  }
};
function minValidator(min) {
  return (control) => {
    if (control.value == null || min == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (control.value == null || max == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length === null || length === 0) {
      return null;
    }
    return length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length !== null && length > maxLength) {
      return {
        "maxlength": {
          "requiredLength": maxLength,
          "actualLength": length
        }
      };
    }
    return null;
  };
}
function patternValidator(pattern) {
  if (!pattern) return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^") regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null) return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators) return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  get value() {
    return this.control ? this.control.value : null;
  }
  get valid() {
    return this.control ? this.control.valid : null;
  }
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  get pending() {
    return this.control ? this.control.pending : null;
  }
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  get errors() {
    return this.control ? this.control.errors : null;
  }
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  get touched() {
    return this.control ? this.control.touched : null;
  }
  get status() {
    return this.control ? this.control.status : null;
  }
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  get path() {
    return null;
  }
  _composedValidatorFn;
  _composedAsyncValidatorFn;
  _rawValidators = [];
  _rawAsyncValidators = [];
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  get validator() {
    return this._composedValidatorFn || null;
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  _onDestroyCallbacks = [];
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  reset(value = void 0) {
    this.control?.reset(value);
  }
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  name;
  get formDirective() {
    return null;
  }
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  _parent = null;
  name = null;
  valueAccessor = null;
};
var AbstractControlStatus = class {
  _cd;
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    this._cd?.control?._touched?.();
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    this._cd?.control?._pristine?.();
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    this._cd?.control?._status?.();
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    this._cd?._submitted?.();
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatus,
    selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
    hostVars: 14,
    hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost,
      standalone: false
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatusGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatusGroup,
    selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["", "formArray", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
    hostVars: 16,
    hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],[formArray],form:not([ngNoForm]),[ngForm]",
      host: __spreadProps(__spreadValues({}, ngControlStatusHost), {
        "[class.ng-submitted]": "isSubmitted"
      }),
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
var VERSION = /* @__PURE__ */ new Version("21.2.6");
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup or formArray directive. You'll want to add a formGroup/formArray
      directive and pass it an existing FormGroup/FormArray instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  const versionSubDomain = VERSION.major !== "0" ? `v${VERSION.major}.` : "";
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://${versionSubDomain}angular.dev/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {
};
var ValueChangeEvent = class extends ControlEvent {
  value;
  source;
  constructor(value, source) {
    super();
    this.value = value;
    this.source = source;
  }
};
var PristineChangeEvent = class extends ControlEvent {
  pristine;
  source;
  constructor(pristine, source) {
    super();
    this.pristine = pristine;
    this.source = source;
  }
};
var TouchedChangeEvent = class extends ControlEvent {
  touched;
  source;
  constructor(touched, source) {
    super();
    this.touched = touched;
    this.source = source;
  }
};
var StatusChangeEvent = class extends ControlEvent {
  status;
  source;
  constructor(status, source) {
    super();
    this.status = status;
    this.source = source;
  }
};
var FormSubmittedEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
var FormResetEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  _pendingDirty = false;
  _hasOwnPendingAsyncValidator = null;
  _pendingTouched = false;
  _onCollectionChange = () => {
  };
  _updateOn;
  _parent = null;
  _asyncValidationSubscription;
  _composedValidatorFn;
  _composedAsyncValidatorFn;
  _rawValidators;
  _rawAsyncValidators;
  value;
  constructor(validators, asyncValidators) {
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  get parent() {
    return this._parent;
  }
  get status() {
    return untracked(this.statusReactive);
  }
  set status(v) {
    untracked(() => this.statusReactive.set(v));
  }
  _status = computed(() => this.statusReactive(), ...ngDevMode ? [{
    debugName: "_status"
  }] : []);
  statusReactive = signal(void 0, ...ngDevMode ? [{
    debugName: "statusReactive"
  }] : []);
  get valid() {
    return this.status === VALID;
  }
  get invalid() {
    return this.status === INVALID;
  }
  get pending() {
    return this.status == PENDING;
  }
  get disabled() {
    return this.status === DISABLED;
  }
  get enabled() {
    return this.status !== DISABLED;
  }
  errors;
  get pristine() {
    return untracked(this.pristineReactive);
  }
  set pristine(v) {
    untracked(() => this.pristineReactive.set(v));
  }
  _pristine = computed(() => this.pristineReactive(), ...ngDevMode ? [{
    debugName: "_pristine"
  }] : []);
  pristineReactive = signal(true, ...ngDevMode ? [{
    debugName: "pristineReactive"
  }] : []);
  get dirty() {
    return !this.pristine;
  }
  get touched() {
    return untracked(this.touchedReactive);
  }
  set touched(v) {
    untracked(() => this.touchedReactive.set(v));
  }
  _touched = computed(() => this.touchedReactive(), ...ngDevMode ? [{
    debugName: "_touched"
  }] : []);
  touchedReactive = signal(false, ...ngDevMode ? [{
    debugName: "touchedReactive"
  }] : []);
  get untouched() {
    return !this.touched;
  }
  _events = new Subject();
  events = this._events.asObservable();
  valueChanges;
  statusChanges;
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  setValidators(validators) {
    this._assignValidators(validators);
  }
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  clearValidators() {
    this.validator = null;
  }
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(opts = {}) {
    const changed = this.touched === false;
    this.touched = true;
    const sourceControl = opts.sourceControl ?? this;
    if (!opts.onlySelf) {
      this._parent?.markAsTouched(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(true, sourceControl));
    }
  }
  markAllAsDirty(opts = {}) {
    this.markAsDirty({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsDirty(opts));
  }
  markAllAsTouched(opts = {}) {
    this.markAsTouched({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsTouched(opts));
  }
  markAsUntouched(opts = {}) {
    const changed = this.touched === true;
    this.touched = false;
    this._pendingTouched = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true,
        emitEvent: opts.emitEvent,
        sourceControl
      });
    });
    if (!opts.onlySelf) {
      this._parent?._updateTouched(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(false, sourceControl));
    }
  }
  markAsDirty(opts = {}) {
    const changed = this.pristine === true;
    this.pristine = false;
    const sourceControl = opts.sourceControl ?? this;
    if (!opts.onlySelf) {
      this._parent?.markAsDirty(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(false, sourceControl));
    }
  }
  markAsPristine(opts = {}) {
    const changed = this.pristine === false;
    this.pristine = true;
    this._pendingDirty = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    });
    if (!opts.onlySelf) {
      this._parent?._updatePristine(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(true, sourceControl));
    }
  }
  markAsPending(opts = {}) {
    this.status = PENDING;
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.statusChanges.emit(this.status);
    }
    if (!opts.onlySelf) {
      this._parent?.markAsPending(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts, sourceControl) {
    if (!opts.onlySelf) {
      this._parent?.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent?._updatePristine({}, sourceControl);
      }
      this._parent?._updateTouched({}, sourceControl);
    }
  }
  setParent(parent) {
    this._parent = parent;
  }
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      const shouldHaveEmitted = this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
      }
    }
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (!opts.onlySelf) {
      this._parent?.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(shouldHaveEmitted, emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = {
        emitEvent: emitEvent !== false,
        shouldHaveEmitted: shouldHaveEmitted !== false
      };
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = null;
        this.setErrors(errors, {
          emitEvent,
          shouldHaveEmitted
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      const shouldHaveEmitted = (this._hasOwnPendingAsyncValidator?.emitEvent || this._hasOwnPendingAsyncValidator?.shouldHaveEmitted) ?? false;
      this._hasOwnPendingAsyncValidator = null;
      return shouldHaveEmitted;
    }
    return false;
  }
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
  }
  get(path) {
    let currPath = path;
    if (currPath == null) return null;
    if (!Array.isArray(currPath)) currPath = currPath.split(".");
    if (currPath.length === 0) return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control?.errors ? control.errors[errorCode] : null;
  }
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (emitEvent || shouldHaveEmitted) {
      this._events.next(new StatusChangeEvent(this.status, changedControl));
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
    }
  }
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled()) return DISABLED;
    if (this.errors) return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
    if (this._anyControlsHaveStatus(INVALID)) return INVALID;
    return VALID;
  }
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  _updatePristine(opts, changedControl) {
    const newPristine = !this._anyControlsDirty();
    const changed = this.pristine !== newPristine;
    this.pristine = newPristine;
    if (!opts.onlySelf) {
      this._parent?._updatePristine(opts, changedControl);
    }
    if (changed) {
      this._events.next(new PristineChangeEvent(this.pristine, changedControl));
    }
  }
  _updateTouched(opts = {}, changedControl) {
    this.touched = this._anyControlsTouched();
    this._events.next(new TouchedChangeEvent(this.touched, changedControl));
    if (!opts.onlySelf) {
      this._parent?._updateTouched(opts, changedControl);
    }
  }
  _onDisabledChange = [];
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  _parentMarkedDirty(onlySelf) {
    return !onlySelf && !!this._parent?.dirty && !this._parent._anyControlsDirty();
  }
  _find(name) {
    return null;
  }
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  registerControl(name, control) {
    if (this.controls[name]) return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  removeControl(name, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    if (control) this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    if (value == null) return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(value[name], {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, __spreadProps(__spreadValues({}, options), {
        onlySelf: true
      }));
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  _updateValue() {
    this.value = this._reduceValue();
  }
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "CallSetDisabledState" : "", {
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control) _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  dir?.valueAccessor?.registerOnChange(noop);
  dir?.valueAccessor?.registerOnTouched(noop);
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change") updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== "submit") control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
  if (path?.[0]) return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model")) return false;
  const change = changes["model"];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never") return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$2 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class _NgForm extends ControlContainer {
  callSetDisabledState;
  get submitted() {
    return untracked(this.submittedReactive);
  }
  _submitted = computed(() => this.submittedReactive(), ...ngDevMode ? [{
    debugName: "_submitted"
  }] : []);
  submittedReactive = signal(false, ...ngDevMode ? [{
    debugName: "submittedReactive"
  }] : []);
  _directives = /* @__PURE__ */ new Set();
  form;
  ngSubmit = new EventEmitter();
  options;
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  get formDirective() {
    return this;
  }
  get control() {
    return this.form;
  }
  get path() {
    return [];
  }
  get controls() {
    return this.form.controls;
  }
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  getControl(dir) {
    return this.form.get(dir.path);
  }
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      container?.removeControl(dir.name);
      this._directives.delete(dir);
    });
  }
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      container?.removeControl?.(dir.name);
    });
  }
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  setValue(value) {
    this.control.setValue(value);
  }
  onSubmit($event) {
    this.submittedReactive.set(true);
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  onReset() {
    this.resetForm();
  }
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submittedReactive.set(false);
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
  static \u0275fac = function NgForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgForm,
    selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", "", 3, "formArray", ""], ["ng-form"], ["", "ngForm", ""]],
    hostBindings: function NgForm_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function NgForm_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      options: [0, "ngFormOptions", "options"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$2]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]):not([formArray]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$2],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  defaultValue = null;
  _onChange = [];
  _pendingValue;
  _pendingChange = false;
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    if (options.overwriteDefaultValue) {
      this.defaultValue = this.value;
    }
    this._pendingChange = false;
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  _updateValue() {
  }
  _anyControls(condition) {
    return false;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  _forEachChild(cb) {
  }
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty) this.markAsDirty();
      if (this._pendingTouched) this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  _parent;
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  ngOnDestroy() {
    this.formDirective?.removeFormGroup(this);
  }
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AbstractFormGroupDirective_BaseFactory;
    return function AbstractFormGroupDirective_Factory(__ngFactoryType__) {
      return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(__ngFactoryType__ || _AbstractFormGroupDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractFormGroupDirective,
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive,
    args: [{
      standalone: false
    }]
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  name = "";
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
  static \u0275fac = function NgModelGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModelGroup,
    selectors: [["", "ngModelGroup", ""]],
    inputs: {
      name: [0, "ngModelGroup", "name"]
    },
    exportAs: ["ngModelGroup"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class _NgModel extends NgControl {
  _changeDetectorRef;
  callSetDisabledState;
  control = new FormControl();
  static ngAcceptInputType_isDisabled;
  _registered = false;
  viewModel;
  name = "";
  isDisabled;
  model;
  options;
  update = new EventEmitter();
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  ngOnDestroy() {
    this.formDirective?.removeControl(this);
  }
  get path() {
    return this._getPath(this.name);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._isStandalone()) {
      checkParentType$1(this._parent);
    }
    this._checkName();
  }
  _checkName() {
    if (this.options && this.options.name) this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
  static \u0275fac = function NgModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModel,
    selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
    inputs: {
      name: "name",
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"],
      options: [0, "ngModelOptions", "options"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngModel"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
function checkParentType$1(parent) {
  if (!(parent instanceof NgModelGroup) && parent instanceof AbstractFormGroupDirective) {
    throw formGroupNameException();
  } else if (!(parent instanceof NgModelGroup) && !(parent instanceof NgForm)) {
    throw modelParentException();
  }
}
var \u0275NgNoValidate = class _\u0275NgNoValidate {
  static \u0275fac = function \u0275NgNoValidate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgNoValidate)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgNoValidate,
    selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
    hostAttrs: ["novalidate", ""],
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      },
      standalone: false
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NumberValueAccessor_BaseFactory;
    return function NumberValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(__ngFactoryType__ || _NumberValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NumberValueAccessor,
    selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
    hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class _RadioControlRegistry {
  _accessors = [];
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
  static \u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RadioControlRegistry,
    factory: _RadioControlRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  _registry;
  _injector;
  _state;
  _control;
  _fn;
  setDisabledStateFired = false;
  onChange = () => {
  };
  name;
  formControlName;
  value;
  callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
    optional: true
  }) ?? setDisabledStateDefault;
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
  }
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  ngOnDestroy() {
    this._registry.remove(this);
  }
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName) this.name = this.formControlName;
  }
  static \u0275fac = function RadioControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RadioControlValueAccessor,
    selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
    hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
          return ctx.onChange();
        })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      name: "name",
      formControlName: "formControlName",
      value: "value"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RangeValueAccessor_BaseFactory;
    return function RangeValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(__ngFactoryType__ || _RangeValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RangeValueAccessor,
    selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
    hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($any($event.target).value)",
        "(input)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  push(control, options = {}) {
    if (Array.isArray(control)) {
      control.forEach((ctrl) => {
        this.controls.push(ctrl);
        this._registerControl(ctrl);
      });
    } else {
      this.controls.push(control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  get length() {
    return this.controls.length;
  }
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    if (value == null) return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], __spreadProps(__spreadValues({}, options), {
        onlySelf: true
      }));
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  clear(options = {}) {
    if (this.controls.length < 1) return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled) return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  _find(name) {
    return this.at(name) ?? null;
  }
};
var AbstractFormDirective = class _AbstractFormDirective extends ControlContainer {
  callSetDisabledState;
  get submitted() {
    return untracked(this._submittedReactive);
  }
  set submitted(value) {
    this._submittedReactive.set(value);
  }
  _submitted = computed(() => this._submittedReactive(), ...ngDevMode ? [{
    debugName: "_submitted"
  }] : []);
  _submittedReactive = signal(false, ...ngDevMode ? [{
    debugName: "_submittedReactive"
  }] : []);
  _oldForm;
  _onCollectionChange = () => this._updateDomValue();
  directives = [];
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnChanges(changes) {
    this.onChanges(changes);
  }
  ngOnDestroy() {
    this.onDestroy();
  }
  onChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  onDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  get formDirective() {
    return this;
  }
  get path() {
    return [];
  }
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  getControl(dir) {
    return this.form.get(dir.path);
  }
  removeControl(dir) {
    cleanUpControl(dir.control || null, dir, false);
    removeListItem$1(this.directives, dir);
  }
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  onReset() {
    this.resetForm();
  }
  resetForm(value = void 0, options = {}) {
    this.form.reset(value, options);
    this._submittedReactive.set(false);
  }
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    const ctrl = this.form?.get(dir.path);
    if (ctrl) {
      const isControlUpdated = cleanUpFormContainer(ctrl, dir);
      if (isControlUpdated) {
        ctrl.updateValueAndValidity({
          emitEvent: false
        });
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    this._oldForm?._registerOnCollectionChange(() => {
    });
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
  static \u0275fac = function AbstractFormDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractFormDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractFormDirective,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormDirective, [{
    type: Directive
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], null);
})();
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayDirective)
};
var FormArrayDirective = class _FormArrayDirective extends AbstractFormDirective {
  form = null;
  ngSubmit = new EventEmitter();
  get control() {
    return this.form;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FormArrayDirective_BaseFactory;
    return function FormArrayDirective_Factory(__ngFactoryType__) {
      return (\u0275FormArrayDirective_BaseFactory || (\u0275FormArrayDirective_BaseFactory = \u0275\u0275getInheritedFactory(_FormArrayDirective)))(__ngFactoryType__ || _FormArrayDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormArrayDirective,
    selectors: [["", "formArray", ""]],
    hostBindings: function FormArrayDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormArrayDirective_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function FormArrayDirective_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      form: [0, "formArray", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayDirective, [{
    type: Directive,
    args: [{
      selector: "[formArray]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm",
      standalone: false
    }]
  }], null, {
    form: [{
      type: Input,
      args: ["formArray"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class _FormControlDirective extends NgControl {
  _ngModelWarningConfig;
  callSetDisabledState;
  viewModel;
  form;
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  model;
  update = new EventEmitter();
  static _ngModelWarningSentOnce = false;
  _ngModelWarningSent = false;
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(previousForm, this, false);
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(this.form, this, false);
    }
  }
  get path() {
    return [];
  }
  get control() {
    return this.form;
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
  static \u0275fac = function FormControlDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlDirective,
    selectors: [["", "formControl", ""]],
    inputs: {
      form: [0, "formControl", "form"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  _checkParentType() {
    if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
  static \u0275fac = function FormGroupName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupName,
    selectors: [["", "formGroupName", ""]],
    inputs: {
      name: [0, "formGroupName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class _FormArrayName extends ControlContainer {
  _parent;
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnInit() {
    if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
    this.formDirective.addFormArray(this);
  }
  ngOnDestroy() {
    this.formDirective?.removeFormArray(this);
  }
  get control() {
    return this.formDirective.getFormArray(this);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  static \u0275fac = function FormArrayName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormArrayName,
    selectors: [["", "formArrayName", ""]],
    inputs: {
      name: [0, "formArrayName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class _FormControlName extends NgControl {
  _ngModelWarningConfig;
  _added = false;
  viewModel;
  control;
  name = null;
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  model;
  update = new EventEmitter();
  static _ngModelWarningSentOnce = false;
  _ngModelWarningSent = false;
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  ngOnChanges(changes) {
    if (!this._added) this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  ngOnDestroy() {
    this.formDirective?.removeControl(this);
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _setUpControl() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkParentType(this._parent, this.name);
    }
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
  static \u0275fac = function FormControlName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlName,
    selectors: [["", "formControlName", ""]],
    inputs: {
      name: [0, "formControlName", "name"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
function checkParentType(parent, name) {
  if (!(parent instanceof FormGroupName) && parent instanceof AbstractFormGroupDirective) {
    throw ngModelGroupException();
  } else if (!(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName)) {
    throw controlParentException(name);
  }
}
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class _FormGroupDirective extends AbstractFormDirective {
  form = null;
  ngSubmit = new EventEmitter();
  get control() {
    return this.form;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FormGroupDirective_BaseFactory;
    return function FormGroupDirective_Factory(__ngFactoryType__) {
      return (\u0275FormGroupDirective_BaseFactory || (\u0275FormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_FormGroupDirective)))(__ngFactoryType__ || _FormGroupDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupDirective,
    selectors: [["", "formGroup", ""]],
    hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function FormGroupDirective_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      form: [0, "formGroup", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm",
      standalone: false
    }]
  }], null, {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null) return `${value}`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  value;
  _optionMap = /* @__PURE__ */ new Map();
  _idCounter = 0;
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  appRefInjector = inject(ApplicationRef).injector;
  destroyRef = inject(DestroyRef);
  cdr = inject(ChangeDetectorRef);
  _queuedWrite = false;
  _writeValueAfterRender() {
    if (this._queuedWrite || this.appRefInjector.destroyed) {
      return;
    }
    this._queuedWrite = true;
    afterNextRender({
      write: () => {
        if (this.destroyRef.destroyed) {
          return;
        }
        this._queuedWrite = false;
        this.writeValue(this.value);
      }
    }, {
      injector: this.appRefInjector
    });
  }
  writeValue(value) {
    this.cdr.markForCheck();
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  _registerOption() {
    return (this._idCounter++).toString();
  }
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectControlValueAccessor_BaseFactory;
    return function SelectControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(__ngFactoryType__ || _SelectControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectControlValueAccessor,
    selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
    hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var NgSelectOption = class _NgSelectOption {
  _element;
  _renderer;
  _select;
  id;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  set ngValue(value) {
    if (this._select == null) return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select._writeValueAfterRender();
  }
  set value(value) {
    this._setElementValue(value);
    this._select?._writeValueAfterRender();
  }
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  ngOnDestroy() {
    this._select?._optionMap.delete(this.id);
    this._select?._writeValueAfterRender();
  }
  static \u0275fac = function NgSelectOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgSelectOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null) return `${value}`;
  if (typeof value === "string") value = `'${value}'`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  value;
  _optionMap = /* @__PURE__ */ new Map();
  _idCounter = 0;
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
    }
    return null;
  }
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectMultipleControlValueAccessor_BaseFactory;
    return function SelectMultipleControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(__ngFactoryType__ || _SelectMultipleControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectMultipleControlValueAccessor,
    selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
    hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target);
        })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  _element;
  _renderer;
  _select;
  id;
  _value;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  set ngValue(value) {
    if (this._select == null) return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static \u0275fac = function \u0275NgSelectMultipleOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgSelectMultipleOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class _AbstractValidatorDirective {
  _validator = nullValidator;
  _onChange;
  _enabled;
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input);
      this._validator = this._enabled ? this.createValidator(input) : nullValidator;
      this._onChange?.();
    }
  }
  validate(control) {
    return this._validator(control);
  }
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  enabled(input) {
    return input != null;
  }
  static \u0275fac = function AbstractValidatorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractValidatorDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractValidatorDirective,
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  max;
  inputName = "max";
  normalizeInput = (input) => toFloat(input);
  createValidator = (max) => maxValidator(max);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxValidator_BaseFactory;
    return function MaxValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(__ngFactoryType__ || _MaxValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxValidator,
    selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
      }
    },
    inputs: {
      max: "max"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      },
      standalone: false
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator extends AbstractValidatorDirective {
  min;
  inputName = "min";
  normalizeInput = (input) => toFloat(input);
  createValidator = (min) => minValidator(min);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinValidator_BaseFactory;
    return function MinValidator_Factory(__ngFactoryType__) {
      return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(__ngFactoryType__ || _MinValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinValidator,
    selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
      }
    },
    inputs: {
      min: "min"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      },
      standalone: false
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  required;
  inputName = "required";
  normalizeInput = booleanAttribute;
  createValidator = (input) => requiredValidator;
  enabled(input) {
    return input;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RequiredValidator_BaseFactory;
    return function RequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(__ngFactoryType__ || _RequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RequiredValidator,
    selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
    hostVars: 1,
    hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    inputs: {
      required: "required"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  createValidator = (input) => requiredTrueValidator;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxRequiredValidator_BaseFactory;
    return function CheckboxRequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(__ngFactoryType__ || _CheckboxRequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxRequiredValidator,
    selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  email;
  inputName = "email";
  normalizeInput = booleanAttribute;
  createValidator = (input) => emailValidator;
  enabled(input) {
    return input;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EmailValidator_BaseFactory;
    return function EmailValidator_Factory(__ngFactoryType__) {
      return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(__ngFactoryType__ || _EmailValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _EmailValidator,
    selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
    inputs: {
      email: "email"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR],
      standalone: false
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  minlength;
  inputName = "minlength";
  normalizeInput = (input) => toInteger(input);
  createValidator = (minlength) => minLengthValidator(minlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinLengthValidator_BaseFactory;
    return function MinLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(__ngFactoryType__ || _MinLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinLengthValidator,
    selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
      }
    },
    inputs: {
      minlength: "minlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      },
      standalone: false
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  maxlength;
  inputName = "maxlength";
  normalizeInput = (input) => toInteger(input);
  createValidator = (maxlength) => maxLengthValidator(maxlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxLengthValidator_BaseFactory;
    return function MaxLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(__ngFactoryType__ || _MaxLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxLengthValidator,
    selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
      }
    },
    inputs: {
      maxlength: "maxlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      },
      standalone: false
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  pattern;
  inputName = "pattern";
  normalizeInput = (input) => input;
  createValidator = (input) => patternValidator(input);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PatternValidator_BaseFactory;
    return function PatternValidator_Factory(__ngFactoryType__) {
      return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(__ngFactoryType__ || _PatternValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PatternValidator,
    selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function PatternValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
      }
    },
    inputs: {
      pattern: "pattern"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      },
      standalone: false
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName];
var \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
  static \u0275fac = function \u0275InternalFormsSharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275InternalFormsSharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _\u0275InternalFormsSharedModule,
    declarations: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator],
    exports: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class _FormBuilder {
  useNonNullable = false;
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
  static \u0275fac = function FormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FormBuilder,
    factory: _FormBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NonNullableFormBuilder = class _NonNullableFormBuilder {
  static \u0275fac = function NonNullableFormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NonNullableFormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NonNullableFormBuilder,
    factory: () => (() => inject(FormBuilder).nonNullable)(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UntypedFormBuilder_BaseFactory;
    return function UntypedFormBuilder_Factory(__ngFactoryType__) {
      return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(__ngFactoryType__ || _UntypedFormBuilder);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UntypedFormBuilder,
    factory: _UntypedFormBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var FormsModule = class _FormsModule {
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function FormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FormsModule,
    declarations: [NgModel, NgModelGroup, NgForm],
    exports: [\u0275InternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var ReactiveFormsModule = class _ReactiveFormsModule {
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function ReactiveFormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReactiveFormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ReactiveFormsModule,
    declarations: [FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName],
    exports: [\u0275InternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// src/app/services/favorite.service.ts
var FavoriteService = class _FavoriteService {
  http;
  apiUrl = "http://127.0.0.1:8000/api";
  constructor(http) {
    this.http = http;
  }
  getFavorites() {
    return this.http.get(`${this.apiUrl}/favorites/`);
  }
  // addFavorite(bookId: number): Observable<any> {
  //   return this.http.post(this.apiUrl, { book_id: bookId });
  // }
  // removeFavorite(bookId: number): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}${bookId}/`);
  // }
  toggleFavorite(bookId) {
    const url = `${this.apiUrl}/favorites/toggle/`;
    return this.http.post(url, { book_id: bookId });
  }
  static \u0275fac = function FavoriteService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FavoriteService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FavoriteService, factory: _FavoriteService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FavoriteService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/book-card/book-card.ts
var _c0 = (a0) => ["/books", a0];
function BookCardComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.book.average_rating);
  }
}
function BookCardComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.book.genre);
  }
}
var BookCardComponent = class _BookCardComponent {
  favoriteService;
  cdr;
  book;
  isProcessing = false;
  isFavorite = false;
  // cdr: ChangeDetectorRef конструкторға енгізілді
  constructor(favoriteService, cdr) {
    this.favoriteService = favoriteService;
    this.cdr = cdr;
  }
  ngOnInit() {
    if (this.book) {
      this.isFavorite = this.book.is_favorite ?? false;
    }
  }
  getStars(rating) {
    if (!rating)
      return "\u2606\u2606\u2606\u2606\u2606";
    const full = Math.round(rating);
    return "\u2605".repeat(full) + "\u2606".repeat(5 - full);
  }
  toggleLike(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.isProcessing)
      return;
    this.isProcessing = true;
    this.isFavorite = !this.isFavorite;
    this.cdr.detectChanges();
    this.favoriteService.toggleFavorite(this.book.id).subscribe({
      next: (response) => {
        this.isFavorite = response.is_favorite;
        this.book.is_favorite = response.is_favorite;
        this.isProcessing = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("\u049A\u0430\u0442\u0435:", err);
        this.isProcessing = false;
        this.isFavorite = !this.isFavorite;
        this.cdr.detectChanges();
      }
    });
  }
  static \u0275fac = function BookCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookCardComponent)(\u0275\u0275directiveInject(FavoriteService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookCardComponent, selectors: [["app-book-card"]], inputs: { book: "book" }, decls: 17, vars: 16, consts: [[1, "card", 3, "routerLink"], [1, "card-cover"], ["onerror", "this.src='https://placehold.co/180x260?text=No+Cover'", 3, "src", "alt"], [1, "favorite-btn", 2, "cursor", "pointer", "pointer-events", "auto", 3, "click", "disabled"], [1, "heart"], [1, "card-body"], [1, "card-title"], [1, "card-author"], [1, "card-rating"], [1, "stars"], ["class", "rating-val", 4, "ngIf"], [1, "card-tags"], ["class", "tag", 4, "ngIf"], [1, "rating-val"], [1, "tag"]], template: function BookCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementStart(3, "button", 3);
      \u0275\u0275listener("click", function BookCardComponent_Template_button_click_3_listener($event) {
        return ctx.toggleLike($event);
      });
      \u0275\u0275elementStart(4, "span", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "span", 9);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, BookCardComponent_span_14_Template, 2, 1, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 11);
      \u0275\u0275template(16, BookCardComponent_span_16_Template, 2, 1, "span", 12);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, ctx.book.id));
      \u0275\u0275advance(2);
      \u0275\u0275property("src", ctx.book.cover_image || "", \u0275\u0275sanitizeUrl)("alt", ctx.book.title);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.isFavorite);
      \u0275\u0275property("disabled", ctx.isProcessing);
      \u0275\u0275advance();
      \u0275\u0275styleProp("opacity", ctx.isProcessing ? "0.5" : "1");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isFavorite ? "\u2764\uFE0F" : "\u{1F90D}", " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.book.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("by ", ctx.book.author_name);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getStars(ctx.book.average_rating));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.book.average_rating);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.book.genre);
    }
  }, dependencies: [CommonModule, NgIf, RouterLink], styles: ["\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e8edf2;\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n  display: flex;\n  flex-direction: column;\n  width: 220px;\n  margin: 0 auto;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.card-cover[_ngcontent-%COMP%] {\n  height: 320px;\n  background: #f0f0f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.card-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.3;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.card-author[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n.card-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.stars[_ngcontent-%COMP%] {\n  color: #f39c12;\n  font-size: 12px;\n}\n.rating-val[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n.card-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  background: #e8f4fd;\n  color: #2980b9;\n  border-radius: 10px;\n}\n.card-cover[_ngcontent-%COMP%] {\n  position: relative !important;\n}\n.favorite-btn[_ngcontent-%COMP%] {\n  position: absolute !important;\n  top: 10px !important;\n  right: 10px !important;\n  z-index: 999 !important;\n  pointer-events: auto !important;\n  width: 35px !important;\n  height: 35px !important;\n  background: white !important;\n  border-radius: 50% !important;\n  border: 1px solid #ddd !important;\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer !important;\n}\n.favorite-btn.active[_ngcontent-%COMP%] {\n  background-color: #fbfafa !important;\n  border-color: #eeebeb !important;\n}\n/*# sourceMappingURL=book-card.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookCardComponent, [{
    type: Component,
    args: [{ selector: "app-book-card", standalone: true, imports: [CommonModule, RouterLink], template: `<div class="card" [routerLink]="['/books', book.id]">
    <div class="card-cover">
        <img [src]="book.cover_image || ''" [alt]="book.title"
            onerror="this.src='https://placehold.co/180x260?text=No+Cover'" />

        <button class="favorite-btn" [class.active]="isFavorite" [disabled]="isProcessing" (click)="toggleLike($event)"
            style="cursor: pointer; pointer-events: auto;">
            <span class="heart" [style.opacity]="isProcessing ? '0.5' : '1'">
                {{ isFavorite ? '\u2764\uFE0F' : '\u{1F90D}' }}
            </span>
        </button>
    </div>

    <div class="card-body">
        <div class="card-title">{{ book.title }}</div>
        <div class="card-author">by {{ book.author_name }}</div>

        <div class="card-rating">
            <span class="stars">{{ getStars(book.average_rating) }}</span>
            <span class="rating-val" *ngIf="book.average_rating">{{ book.average_rating }}</span>
        </div>

        <div class="card-tags">
            <span class="tag" *ngIf="book.genre">{{ book.genre }}</span>
        </div>
    </div>
</div>`, styles: ["/* src/app/components/book-card/book-card.css */\n.card {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e8edf2;\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n  display: flex;\n  flex-direction: column;\n  width: 220px;\n  margin: 0 auto;\n}\n.card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.card-cover {\n  height: 320px;\n  background: #f0f0f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.card-cover img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.card-body {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.card-title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.3;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.card-author {\n  font-size: 12px;\n  color: #888;\n}\n.card-rating {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.stars {\n  color: #f39c12;\n  font-size: 12px;\n}\n.rating-val {\n  font-size: 12px;\n  color: #888;\n}\n.card-tags {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.tag {\n  font-size: 11px;\n  padding: 2px 8px;\n  background: #e8f4fd;\n  color: #2980b9;\n  border-radius: 10px;\n}\n.card-cover {\n  position: relative !important;\n}\n.favorite-btn {\n  position: absolute !important;\n  top: 10px !important;\n  right: 10px !important;\n  z-index: 999 !important;\n  pointer-events: auto !important;\n  width: 35px !important;\n  height: 35px !important;\n  background: white !important;\n  border-radius: 50% !important;\n  border: 1px solid #ddd !important;\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer !important;\n}\n.favorite-btn.active {\n  background-color: #fbfafa !important;\n  border-color: #eeebeb !important;\n}\n/*# sourceMappingURL=book-card.css.map */\n"] }]
  }], () => [{ type: FavoriteService }, { type: ChangeDetectorRef }], { book: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookCardComponent, { className: "BookCardComponent", filePath: "app/components/book-card/book-card.ts", lineNumber: 14 });
})();

// src/app/services/search.service.ts
var SearchService = class _SearchService {
  searchSubject = new BehaviorSubject("");
  search$ = this.searchSubject.asObservable();
  setSearch(value) {
    this.searchSubject.next(value);
  }
  static \u0275fac = function SearchService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SearchService, factory: _SearchService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/books-list/books-list.ts
var _c02 = () => [1, 2, 3, 4, 5, 6, 7, 8];
function BooksListComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function BooksListComponent_button_19_Template_button_click_0_listener() {
      const g_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.selectedGenre = g_r2;
      return \u0275\u0275resetView(ctx_r2.onFilterChange());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedGenre === g_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", g_r2, " ");
  }
}
function BooksListComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    \u0275\u0275property("value", o_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r4.label, " ");
  }
}
function BooksListComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 23);
  }
}
function BooksListComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, BooksListComponent_div_25_div_1_Template, 1, 0, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c02));
  }
}
function BooksListComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 25);
    \u0275\u0275listener("click", function BooksListComponent_div_26_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadBooks());
    });
    \u0275\u0275text(4, "Try again");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.error);
  }
}
function BooksListComponent_div_27_app_book_card_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-book-card", 28);
  }
  if (rf & 2) {
    const book_r6 = ctx.$implicit;
    \u0275\u0275property("book", book_r6);
  }
}
function BooksListComponent_div_27_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "p");
    \u0275\u0275text(2, "No books found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 9);
    \u0275\u0275listener("click", function BooksListComponent_div_27_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275text(4, "Reset filters");
    \u0275\u0275elementEnd()();
  }
}
function BooksListComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, BooksListComponent_div_27_app_book_card_1_Template, 1, 1, "app-book-card", 26)(2, BooksListComponent_div_27_div_2_Template, 5, 0, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.books);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.books.length === 0);
  }
}
var BooksListComponent = class _BooksListComponent {
  bookService;
  searchService;
  cdr;
  books = [];
  allBooks = [];
  loading = false;
  error = "";
  search = "";
  navbarSearch = "";
  selectedGenre = "";
  selectedOrdering = "-created_at";
  searchSubscription;
  genres = ["Fantasy", "Science Fiction", "Romance", "Thriller", "Horror", "Classic", "History"];
  orderingOptions = [
    { value: "-created_at", label: "Newest first" },
    { value: "created_at", label: "Oldest first" },
    { value: "title", label: "Title A-Z" },
    { value: "-title", label: "Title Z-A" },
    { value: "-avg_rating", label: "Top rated" }
  ];
  constructor(bookService, searchService, cdr) {
    this.bookService = bookService;
    this.searchService = searchService;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.loadBooks();
    this.searchSubscription = this.searchService.search$.pipe(skip(1), debounceTime(300), distinctUntilChanged()).subscribe((value) => {
      this.navbarSearch = value;
      this.loadBooks();
    });
  }
  ngOnDestroy() {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
  loadBooks() {
    this.loading = true;
    this.error = "";
    this.cdr.detectChanges();
    this.bookService.getBooks({
      search: this.navbarSearch,
      genre: this.selectedGenre,
      ordering: this.selectedOrdering
    }).subscribe({
      next: (data) => {
        this.allBooks = data;
        this.applyTitleFilter();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043D\u0438\u0433\u0438";
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  applyTitleFilter() {
    const query = this.search.trim().toLowerCase();
    if (!query) {
      this.books = [...this.allBooks];
      return;
    }
    this.books = this.allBooks.filter((book) => (book.title || "").toLowerCase().includes(query));
  }
  onSearch() {
    this.applyTitleFilter();
  }
  onFilterChange() {
    this.loadBooks();
  }
  clearFilters() {
    this.search = "";
    this.navbarSearch = "";
    this.selectedGenre = "";
    this.selectedOrdering = "-created_at";
    this.searchService.setSearch("");
    this.loadBooks();
  }
  static \u0275fac = function BooksListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BooksListComponent)(\u0275\u0275directiveInject(BookService), \u0275\u0275directiveInject(SearchService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BooksListComponent, selectors: [["app-books-list"]], decls: 28, vars: 9, consts: [[1, "books-page"], [1, "main"], [1, "main-header"], [1, "main-title"], [1, "main-sub"], [1, "header-actions"], [1, "search-box"], [1, "search-icon"], ["type", "text", "placeholder", "Search by title...", 3, "ngModelChange", "input", "ngModel"], ["type", "button", 1, "btn-clear", 3, "click"], [1, "filters-row"], [1, "genres-list"], ["type", "button", 1, "genre-btn", 3, "click"], ["class", "genre-btn", "type", "button", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "sort-box"], [1, "sortby"], [3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "books-grid", 4, "ngIf"], ["class", "error-box", 4, "ngIf"], [3, "value"], [1, "books-grid"], ["class", "book-skeleton", 4, "ngFor", "ngForOf"], [1, "book-skeleton"], [1, "error-box"], ["type", "button", 3, "click"], [3, "book", 4, "ngFor", "ngForOf"], ["class", "empty-grid", 4, "ngIf"], [3, "book"], [1, "empty-grid"]], template: function BooksListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "main", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Books");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Browse and review your favorite books.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "span", 7);
      \u0275\u0275text(11, "\u{1F50D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function BooksListComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("input", function BooksListComponent_Template_input_input_12_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 9);
      \u0275\u0275listener("click", function BooksListComponent_Template_button_click_13_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275text(14, " Clear Filters ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "button", 12);
      \u0275\u0275listener("click", function BooksListComponent_Template_button_click_17_listener() {
        ctx.selectedGenre = "";
        return ctx.onFilterChange();
      });
      \u0275\u0275text(18, " All Genres ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, BooksListComponent_button_19_Template, 2, 3, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 14)(21, "label", 15);
      \u0275\u0275text(22, "Sort by:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "select", 16);
      \u0275\u0275twoWayListener("ngModelChange", function BooksListComponent_Template_select_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedOrdering, $event) || (ctx.selectedOrdering = $event);
        return $event;
      });
      \u0275\u0275listener("change", function BooksListComponent_Template_select_change_23_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275template(24, BooksListComponent_option_24_Template, 2, 2, "option", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(25, BooksListComponent_div_25_Template, 2, 2, "div", 18)(26, BooksListComponent_div_26_Template, 5, 1, "div", 19)(27, BooksListComponent_div_27_Template, 3, 2, "div", 18);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.selectedGenre === "");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.genres);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedOrdering);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.orderingOptions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, BookCardComponent], styles: ['\n.books-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #f7f9fa;\n  border-radius: 24px;\n}\n.book-skeleton[_ngcontent-%COMP%] {\n  height: 200px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.2s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.main[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e6eaee;\n  border-radius: 18px;\n  padding: 24px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);\n}\n.main-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #edf1f4;\n  flex-wrap: wrap;\n}\n.main-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 48px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.main-sub[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  font-size: 16px;\n  color: #6b7280;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 30px;\n  border: 1px solid #dde3e8;\n  border-radius: 10px;\n  background: #fff;\n  padding: 0 14px 0 38px;\n  font-size: 14px;\n  outline: none;\n  margin-right: -120px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #21b6ad;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  opacity: 0.65;\n}\n.btn-clear[_ngcontent-%COMP%] {\n  height: 42px;\n  padding: 0 16px;\n  border: none;\n  border-radius: 10px;\n  background: #22b8ad;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-clear[_ngcontent-%COMP%]:hover {\n  background: #1ca79d;\n}\n.filters-row[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.genres-list[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.genre-btn[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 150px;\n  padding: 0 14px;\n  border: 1px solid #e1e6ea;\n  border-radius: 5px;\n  background: #f6f7f9;\n  color: #4b5563;\n  font-size: 14px;\n  cursor: pointer;\n}\n.sortby[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #00a896;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n}\n.genre-btn[_ngcontent-%COMP%]:hover {\n  background: #eef7f6;\n}\n.genre-btn.active[_ngcontent-%COMP%] {\n  background: #22b8ad;\n  color: #fff;\n  border-color: #22b8ad;\n}\n.sort-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 10px;\n}\n.sort-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #374151;\n}\n.sort-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 38px;\n  border: 1px solid #dde3e8;\n  border-radius: 10px;\n  padding: 0 12px;\n  background: #fff;\n  outline: none;\n}\n.books-grid[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 18px;\n}\n.loading[_ngcontent-%COMP%], \n.error-box[_ngcontent-%COMP%], \n.empty-grid[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  text-align: center;\n}\n.error-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  height: 38px;\n  padding: 0 14px;\n  border: none;\n  border-radius: 10px;\n  background: #22b8ad;\n  color: white;\n  cursor: pointer;\n}\n.empty-grid[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  padding: 30px;\n  border: 1px dashed #d7dde3;\n  border-radius: 14px;\n  background: #fafbfc;\n}\n@media (max-width: 768px) {\n  .main-title[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 220px;\n  }\n}\n/*# sourceMappingURL=books-list.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BooksListComponent, [{
    type: Component,
    args: [{ selector: "app-books-list", standalone: true, imports: [CommonModule, FormsModule, BookCardComponent], template: `<div class="books-page">
    <main class="main">
        <div class="main-header">
            <div>
                <h1 class="main-title">Books</h1>
                <p class="main-sub">Browse and review your favorite books.</p>
            </div>

            <div class="header-actions">
                <div class="search-box">
                    <span class="search-icon">\u{1F50D}</span>
                    <input
                            type="text"
                            placeholder="Search by title..."
                            [(ngModel)]="search"
                            (input)="onSearch()"
                    />
                </div>

                <button class="btn-clear" type="button" (click)="clearFilters()">
                    Clear Filters
                </button>
            </div>
        </div>

        <div class="filters-row">
            <div class="genres-list">
                <button
                        class="genre-btn"
                        type="button"
                        [class.active]="selectedGenre === ''"
                        (click)="selectedGenre = ''; onFilterChange()"
                >
                    All Genres
                </button>

                <button
                        *ngFor="let g of genres"
                        class="genre-btn"
                        type="button"
                        [class.active]="selectedGenre === g"
                        (click)="selectedGenre = g; onFilterChange()"
                >
                    {{ g }}
                </button>
            </div>

            <div class="sort-box">
                <label class="sortby">Sort by:</label>
                <select [(ngModel)]="selectedOrdering" (change)="onFilterChange()">
                    <option *ngFor="let o of orderingOptions" [value]="o.value">
                        {{ o.label }}
                    </option>
                </select>
            </div>
        </div>

        <div class="books-grid" *ngIf="loading">
            <div class="book-skeleton" *ngFor="let i of [1,2,3,4,5,6,7,8]"></div>
        </div>

        <div class="error-box" *ngIf="error && !loading">
            <p>{{ error }}</p>
            <button type="button" (click)="loadBooks()">Try again</button>
        </div>

        <div class="books-grid" *ngIf="!loading && !error">
            <app-book-card
                    *ngFor="let book of books"
                    [book]="book">
            </app-book-card>

            <div class="empty-grid" *ngIf="books.length === 0">
                <p>No books found</p>
                <button type="button" class="btn-clear" (click)="clearFilters()">Reset filters</button>
            </div>
        </div>
    </main>
</div>`, styles: ['/* src/app/pages/books-list/books-list.css */\n.books-page {\n  padding: 24px;\n  background: #f7f9fa;\n  border-radius: 24px;\n}\n.book-skeleton {\n  height: 200px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.2s infinite;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.main {\n  background: #fff;\n  border: 1px solid #e6eaee;\n  border-radius: 18px;\n  padding: 24px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);\n}\n.main-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #edf1f4;\n  flex-wrap: wrap;\n}\n.main-title {\n  margin: 0;\n  font-size: 48px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.main-sub {\n  margin: 8px 0 0;\n  font-size: 16px;\n  color: #6b7280;\n}\n.header-actions {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.search-box {\n  position: relative;\n}\n.search-box input {\n  width: 260px;\n  height: 30px;\n  border: 1px solid #dde3e8;\n  border-radius: 10px;\n  background: #fff;\n  padding: 0 14px 0 38px;\n  font-size: 14px;\n  outline: none;\n  margin-right: -120px;\n}\n.search-box input:focus {\n  border-color: #21b6ad;\n}\n.search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  opacity: 0.65;\n}\n.btn-clear {\n  height: 42px;\n  padding: 0 16px;\n  border: none;\n  border-radius: 10px;\n  background: #22b8ad;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-clear:hover {\n  background: #1ca79d;\n}\n.filters-row {\n  margin-top: 18px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.genres-list {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.genre-btn {\n  height: 30px;\n  width: 150px;\n  padding: 0 14px;\n  border: 1px solid #e1e6ea;\n  border-radius: 5px;\n  background: #f6f7f9;\n  color: #4b5563;\n  font-size: 14px;\n  cursor: pointer;\n}\n.sortby {\n  font-size: 15px;\n  color: #00a896;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n}\n.genre-btn:hover {\n  background: #eef7f6;\n}\n.genre-btn.active {\n  background: #22b8ad;\n  color: #fff;\n  border-color: #22b8ad;\n}\n.sort-box {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 10px;\n}\n.sort-box label {\n  font-size: 15px;\n  color: #374151;\n}\n.sort-box select {\n  height: 38px;\n  border: 1px solid #dde3e8;\n  border-radius: 10px;\n  padding: 0 12px;\n  background: #fff;\n  outline: none;\n}\n.books-grid {\n  margin-top: 22px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 18px;\n}\n.loading,\n.error-box,\n.empty-grid {\n  margin-top: 24px;\n  text-align: center;\n}\n.error-box button {\n  margin-top: 10px;\n  height: 38px;\n  padding: 0 14px;\n  border: none;\n  border-radius: 10px;\n  background: #22b8ad;\n  color: white;\n  cursor: pointer;\n}\n.empty-grid {\n  grid-column: 1 / -1;\n  padding: 30px;\n  border: 1px dashed #d7dde3;\n  border-radius: 14px;\n  background: #fafbfc;\n}\n@media (max-width: 768px) {\n  .main-title {\n    font-size: 34px;\n  }\n  .search-box input {\n    width: 100%;\n    min-width: 220px;\n  }\n}\n/*# sourceMappingURL=books-list.css.map */\n'] }]
  }], () => [{ type: BookService }, { type: SearchService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BooksListComponent, { className: "BooksListComponent", filePath: "app/pages/books-list/books-list.ts", lineNumber: 18 });
})();

// src/app/services/review.service.ts
var ReviewService = class _ReviewService {
  http;
  base = "http://127.0.0.1:8000/api/reviews";
  constructor(http) {
    this.http = http;
  }
  getReviews(bookId) {
    return this.http.get(`${this.base}/books/${bookId}/reviews/`);
  }
  addReview(bookId, data) {
    return this.http.post(`${this.base}/books/${bookId}/reviews/`, data);
  }
  toggleLike(reviewId) {
    return this.http.post(`${this.base}/reviews/${reviewId}/like/`, {});
  }
  getComments(reviewId) {
    return this.http.get(`${this.base}/reviews/${reviewId}/comments/`);
  }
  addComment(reviewId, text) {
    return this.http.post(`${this.base}/reviews/${reviewId}/comments/`, { text });
  }
  updateComment(commentId, text) {
    return this.http.patch(`${this.base}/comments/${commentId}/`, { text });
  }
  deleteComment(commentId) {
    return this.http.delete(`${this.base}/comments/${commentId}/`);
  }
  getUserProfile(username) {
    return this.http.get(`http://127.0.0.1:8000/api/users/${username}/`);
  }
  static \u0275fac = function ReviewService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReviewService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReviewService, factory: _ReviewService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  apiUrl = "http://127.0.0.1:8000/api";
  currentUser = signal(localStorage.getItem("token"), ...ngDevMode ? [{ debugName: "currentUser" }] : (
    /* istanbul ignore next */
    []
  ));
  register(data) {
    return this.http.post(`${this.apiUrl}/register/`, data);
  }
  login(data) {
    return this.http.post(`${this.apiUrl}/login/`, data).pipe(tap((res) => {
      localStorage.setItem("token", res.access);
      localStorage.setItem("username", data.username);
      this.currentUser.set(data.username);
    }));
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    this.currentUser.set(null);
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/book-detail/book-detail.ts
var _c03 = (a0) => ["/genre", a0];
var _c1 = () => [1, 2, 3, 4, 5];
var _c2 = (a0) => ["/users", a0];
var _c3 = () => [];
function BookDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading book...");
    \u0275\u0275elementEnd()();
  }
}
function BookDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function BookDetailComponent_div_5_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.book.average_rating, "/5");
  }
}
function BookDetailComponent_div_5_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "No reviews yet");
    \u0275\u0275elementEnd();
  }
}
function BookDetailComponent_div_5_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2, "Published");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r0.book.published_date, "dd.MM.yyyy"));
  }
}
function BookDetailComponent_div_5_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2, "ISBN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.book.isbn);
  }
}
function BookDetailComponent_div_5_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "h3");
    \u0275\u0275text(2, "About the book");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.book.description);
  }
}
function BookDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275element(2, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "a", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 16);
    \u0275\u0275element(9, "img", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "span", 19);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, BookDetailComponent_div_5_span_14_Template, 2, 1, "span", 20)(15, BookDetailComponent_div_5_span_15_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 22);
    \u0275\u0275template(17, BookDetailComponent_div_5_div_17_Template, 6, 4, "div", 23)(18, BookDetailComponent_div_5_div_18_Template, 5, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, BookDetailComponent_div_5_div_19_Template, 5, 1, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.book.cover_image || "", \u0275\u0275sanitizeUrl)("alt", ctx_r0.book.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c03, ctx_r0.book.genre));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.book.genre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.book.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.book.author.full_name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getStars(ctx_r0.book.average_rating));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.book.average_rating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.book.average_rating);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.book.published_date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.book.isbn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.book.description);
  }
}
function BookDetailComponent_div_6_div_5_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275listener("click", function BookDetailComponent_div_6_div_5_span_7_Template_span_click_0_listener() {
      const s_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.newReviewRating = s_r4);
    });
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", s_r4 <= ctx_r0.newReviewRating);
  }
}
function BookDetailComponent_div_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "h3");
    \u0275\u0275text(2, "Leave a Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39)(4, "label");
    \u0275\u0275text(5, "Rating:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 40);
    \u0275\u0275template(7, BookDetailComponent_div_6_div_5_span_7_Template, 2, 2, "span", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "textarea", 42);
    \u0275\u0275twoWayListener("ngModelChange", function BookDetailComponent_div_6_div_5_Template_textarea_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.newReviewText, $event) || (ctx_r0.newReviewText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 43);
    \u0275\u0275listener("click", function BookDetailComponent_div_6_div_5_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submitReview());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(4, _c1));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newReviewText);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.newReviewText.trim() || ctx_r0.submittingReview);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.submittingReview ? "Submitting..." : "Submit Review", " ");
  }
}
function BookDetailComponent_div_6_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "a", 46);
    \u0275\u0275text(2, "Log in");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " to leave a review. ");
    \u0275\u0275elementEnd();
  }
}
function BookDetailComponent_div_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function BookDetailComponent_div_6_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, " No reviews yet. Be the first! ");
    \u0275\u0275elementEnd();
  }
}
function BookDetailComponent_div_6_div_9_div_19_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "textarea", 71);
    \u0275\u0275twoWayListener("ngModelChange", function BookDetailComponent_div_6_div_9_div_19_div_1_div_9_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.editingComment.text, $event) || (ctx_r0.editingComment.text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 72)(3, "button", 73);
    \u0275\u0275listener("click", function BookDetailComponent_div_6_div_9_div_19_div_1_div_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const review_r6 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveEditComment(review_r6));
    });
    \u0275\u0275text(4, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 74);
    \u0275\u0275listener("click", function BookDetailComponent_div_6_div_9_div_19_div_1_div_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.cancelEditComment());
    });
    \u0275\u0275text(6, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editingComment.text);
  }
}
function BookDetailComponent_div_6_div_9_div_19_div_1_ng_template_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "button", 78);
    \u0275\u0275listener("click", function BookDetailComponent_div_6_div_9_div_19_div_1_ng_template_10_div_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const comment_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.startEditComment(comment_r9));
    });
    \u0275\u0275text(2, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 79);
    \u0275\u0275listener("click", function BookDetailComponent_div_6_div_9_div_19_div_1_ng_template_10_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const comment_r9 = \u0275\u0275nextContext(2).$implicit;
      const review_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteComment(review_r6, comment_r9.id));
    });
    \u0275\u0275text(4, "Delete");
    \u0275\u0275elementEnd()();
  }
}
function BookDetailComponent_div_6_div_9_div_19_div_1_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, BookDetailComponent_div_6_div_9_div_19_div_1_ng_template_10_div_2_Template, 5, 0, "div", 76);
  }
  if (rf & 2) {
    const comment_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(comment_r9.text);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", comment_r9.is_owner);
  }
}
function BookDetailComponent_div_6_div_9_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "a", 67)(3, "span", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 69);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, BookDetailComponent_div_6_div_9_div_19_div_1_div_9_Template, 7, 1, "div", 70)(10, BookDetailComponent_div_6_div_9_div_19_div_1_ng_template_10_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r9 = ctx.$implicit;
    const viewComment_r10 = \u0275\u0275reference(11);
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c2, comment_r9.username));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((comment_r9.username || "U").charAt(0).toUpperCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", comment_r9.username, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 6, comment_r9.created_at, "dd MMM yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.editingComment == null ? null : ctx_r0.editingComment.id) === comment_r9.id)("ngIfElse", viewComment_r10);
  }
}
function BookDetailComponent_div_6_div_9_div_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function BookDetailComponent_div_6_div_9_div_19_div_2_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const review_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.newCommentText[review_r6.id], $event) || (ctx_r0.newCommentText[review_r6.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function BookDetailComponent_div_6_div_9_div_19_div_2_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r11);
      const review_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submitComment(review_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 82);
    \u0275\u0275listener("click", function BookDetailComponent_div_6_div_9_div_19_div_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const review_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submitComment(review_r6));
    });
    \u0275\u0275text(3, "Post");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const review_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newCommentText[review_r6.id]);
  }
}
function BookDetailComponent_div_6_div_9_div_19_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "a", 46);
    \u0275\u0275text(2, "Log in");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " to comment. ");
    \u0275\u0275elementEnd();
  }
}
function BookDetailComponent_div_6_div_9_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275template(1, BookDetailComponent_div_6_div_9_div_19_div_1_Template, 12, 11, "div", 62)(2, BookDetailComponent_div_6_div_9_div_19_div_2_Template, 4, 1, "div", 63)(3, BookDetailComponent_div_6_div_9_div_19_div_3_Template, 4, 0, "div", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const review_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", review_r6.comments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoggedIn);
  }
}
function BookDetailComponent_div_6_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "a", 51)(3, "span", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 53)(7, "span", 54);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 55);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "p", 56);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 57)(15, "button", 58);
    \u0275\u0275listener("click", function BookDetailComponent_div_6_div_9_Template_button_click_15_listener() {
      const review_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleLike(review_r6));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 59);
    \u0275\u0275listener("click", function BookDetailComponent_div_6_div_9_Template_button_click_17_listener() {
      const review_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleComments(review_r6.id));
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, BookDetailComponent_div_6_div_9_div_19_Template, 4, 3, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const review_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c2, review_r6.user_username));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((review_r6.user_username || "U").charAt(0).toUpperCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", review_r6.user_username, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getStars(review_r6.rating));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 15, review_r6.created_at, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r6.text);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("liked", review_r6.is_liked);
    \u0275\u0275property("disabled", !ctx_r0.isLoggedIn)("title", ctx_r0.isLoggedIn ? "" : "Log in to like");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", review_r6.is_liked ? "\u2764\uFE0F" : "\u{1F90D}", " ", review_r6.like_count, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" \u{1F4AC} ", (review_r6.comments || \u0275\u0275pureFunction0(20, _c3)).length, " ", ctx_r0.isCommentsExpanded(review_r6.id) ? "\u25B2" : "\u25BC", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isCommentsExpanded(review_r6.id));
  }
}
function BookDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "h2", 31);
    \u0275\u0275text(2, "Reviews ");
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, BookDetailComponent_div_6_div_5_Template, 11, 5, "div", 33)(6, BookDetailComponent_div_6_div_6_Template, 4, 0, "div", 34)(7, BookDetailComponent_div_6_div_7_Template, 2, 0, "div", 35)(8, BookDetailComponent_div_6_div_8_Template, 2, 0, "div", 36)(9, BookDetailComponent_div_6_div_9_Template, 20, 21, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.reviews.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.reviewsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.reviewsLoading && ctx_r0.reviews.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.reviews);
  }
}
var BookDetailComponent = class _BookDetailComponent {
  route;
  bookService;
  reviewService;
  authService;
  cdr;
  book = null;
  loading = false;
  error = "";
  reviews = [];
  reviewsLoading = false;
  newReviewText = "";
  newReviewRating = 5;
  submittingReview = false;
  expandedComments = /* @__PURE__ */ new Set();
  newCommentText = {};
  editingComment = null;
  constructor(route, bookService, reviewService, authService, cdr) {
    this.route = route;
    this.bookService = bookService;
    this.reviewService = reviewService;
    this.authService = authService;
    this.cdr = cdr;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.loading = true;
    this.bookService.getBook(id).subscribe({
      next: (data) => {
        this.book = data;
        this.loading = false;
        this.loadReviews(id);
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = "\u041A\u043D\u0438\u0433\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430";
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  loadReviews(bookId) {
    this.reviewsLoading = true;
    this.reviewService.getReviews(bookId).subscribe({
      next: (data) => {
        this.reviews = data;
        this.reviewsLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.reviewsLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  getStars(rating) {
    if (!rating)
      return "\u2606\u2606\u2606\u2606\u2606";
    const full = Math.round(rating);
    return "\u2605".repeat(full) + "\u2606".repeat(5 - full);
  }
  get isLoggedIn() {
    return !!this.authService.currentUser();
  }
  submitReview() {
    if (!this.newReviewText.trim() || this.submittingReview)
      return;
    this.submittingReview = true;
    const bookId = this.book.id;
    this.reviewService.addReview(bookId, {
      text: this.newReviewText,
      rating: this.newReviewRating
    }).subscribe({
      next: () => {
        this.newReviewText = "";
        this.newReviewRating = 5;
        this.submittingReview = false;
        this.loadReviews(bookId);
      },
      error: () => {
        this.submittingReview = false;
        this.cdr.detectChanges();
      }
    });
  }
  toggleLike(review) {
    if (!this.isLoggedIn)
      return;
    this.reviewService.toggleLike(review.id).subscribe({
      next: (res) => {
        review.is_liked = res.is_liked;
        review.like_count = res.like_count;
        this.cdr.detectChanges();
      }
    });
  }
  toggleComments(reviewId) {
    if (this.expandedComments.has(reviewId)) {
      this.expandedComments.delete(reviewId);
    } else {
      this.expandedComments.add(reviewId);
    }
  }
  isCommentsExpanded(reviewId) {
    return this.expandedComments.has(reviewId);
  }
  submitComment(review) {
    const text = (this.newCommentText[review.id] || "").trim();
    if (!text)
      return;
    this.reviewService.addComment(review.id, text).subscribe({
      next: (comment) => {
        review.comments = [...review.comments || [], comment];
        this.newCommentText[review.id] = "";
        this.expandedComments.add(review.id);
        this.cdr.detectChanges();
      }
    });
  }
  startEditComment(comment) {
    this.editingComment = { id: comment.id, text: comment.text };
  }
  cancelEditComment() {
    this.editingComment = null;
  }
  saveEditComment(review) {
    if (!this.editingComment)
      return;
    this.reviewService.updateComment(this.editingComment.id, this.editingComment.text).subscribe({
      next: (updated) => {
        const idx = review.comments.findIndex((c) => c.id === updated.id);
        if (idx !== -1)
          review.comments[idx] = updated;
        this.editingComment = null;
        this.cdr.detectChanges();
      }
    });
  }
  deleteComment(review, commentId) {
    this.reviewService.deleteComment(commentId).subscribe({
      next: () => {
        review.comments = review.comments.filter((c) => c.id !== commentId);
        this.cdr.detectChanges();
      }
    });
  }
  static \u0275fac = function BookDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(BookService), \u0275\u0275directiveInject(ReviewService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookDetailComponent, selectors: [["app-book-detail"]], decls: 7, vars: 4, consts: [["viewComment", ""], [1, "page"], ["routerLink", "/books", 1, "back-btn"], ["class", "loading", 4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "detail-card", 4, "ngIf"], ["class", "reviews-section", 4, "ngIf"], [1, "loading"], [1, "spinner"], [1, "error"], [1, "detail-card"], [1, "detail-cover"], ["onerror", "this.src='https://placehold.co/300x420?text=No+Cover'", 3, "src", "alt"], [1, "detail-info"], [1, "genre-badge", 3, "routerLink"], [1, "detail-title"], [1, "detail-author"], ["src", "/icons/writer.png", "alt", "writer", 1, "detail-icon"], [1, "detail-rating"], [1, "stars"], ["class", "rating-num", 4, "ngIf"], ["class", "no-rating", 4, "ngIf"], [1, "meta"], ["class", "meta-item", 4, "ngIf"], ["class", "description", 4, "ngIf"], [1, "rating-num"], [1, "no-rating"], [1, "meta-item"], [1, "meta-label"], [1, "description"], [1, "reviews-section"], [1, "reviews-title"], [1, "reviews-count"], ["class", "add-review-card", 4, "ngIf"], ["class", "login-prompt", 4, "ngIf"], ["class", "reviews-loading", 4, "ngIf"], ["class", "no-reviews", 4, "ngIf"], ["class", "review-card", 4, "ngFor", "ngForOf"], [1, "add-review-card"], [1, "rating-select"], [1, "star-picker"], ["class", "star-pick", 3, "active", "click", 4, "ngFor", "ngForOf"], ["placeholder", "Share your thoughts about this book...", "rows", "3", 1, "review-textarea", 3, "ngModelChange", "ngModel"], [1, "submit-review-btn", 3, "click", "disabled"], [1, "star-pick", 3, "click"], [1, "login-prompt"], ["routerLink", "/login"], [1, "reviews-loading"], [1, "no-reviews"], [1, "review-card"], [1, "review-header"], [1, "review-username", 3, "routerLink"], [1, "avatar-letter"], [1, "review-meta-right"], [1, "review-stars"], [1, "review-date"], [1, "review-text"], [1, "review-actions"], [1, "like-btn", 3, "click", "disabled", "title"], [1, "comments-toggle-btn", 3, "click"], ["class", "comments-section", 4, "ngIf"], [1, "comments-section"], ["class", "comment", 4, "ngFor", "ngForOf"], ["class", "add-comment", 4, "ngIf"], ["class", "login-prompt-sm", 4, "ngIf"], [1, "comment"], [1, "comment-header"], [1, "comment-username", 3, "routerLink"], [1, "avatar-letter", "sm"], [1, "comment-date"], [4, "ngIf", "ngIfElse"], ["rows", "2", 1, "comment-edit-textarea", 3, "ngModelChange", "ngModel"], [1, "comment-edit-actions"], [1, "save-comment-btn", 3, "click"], [1, "cancel-comment-btn", 3, "click"], [1, "comment-text"], ["class", "comment-own-actions", 4, "ngIf"], [1, "comment-own-actions"], [1, "edit-comment-btn", 3, "click"], [1, "delete-comment-btn", 3, "click"], [1, "add-comment"], ["placeholder", "Write a comment...", 1, "comment-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "add-comment-btn", 3, "click"], [1, "login-prompt-sm"]], template: function BookDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "a", 2);
      \u0275\u0275text(2, "\u2190 Back to list");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, BookDetailComponent_div_3_Template, 4, 0, "div", 3)(4, BookDetailComponent_div_4_Template, 2, 1, "div", 4)(5, BookDetailComponent_div_5_Template, 20, 14, "div", 5)(6, BookDetailComponent_div_6_Template, 10, 6, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.book && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.book && !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n.page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 32px 24px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #0b615a;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 32px;\n  transition: opacity 0.2s;\n  transform: translate(0px, 13px);\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 0;\n  color: #888;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e0e0e0;\n  border-top-color: #1D9E75;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px;\n  color: #d32f2f;\n  font-size: 16px;\n}\n.detail-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 48px;\n  align-items: flex-start;\n  background: #fff;\n  border-radius: 16px;\n  padding: 40px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n}\n.detail-cover[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 260px;\n}\n.detail-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);\n  display: block;\n}\n.detail-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin-right: 6px;\n  vertical-align: middle;\n}\n.detail-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.genre-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(115, 193, 187, 0.54);\n  color: #0e4541;\n  border-radius: 20px;\n  padding: 4px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  width: fit-content;\n  text-decoration: none;\n}\n.genre-badge[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.detail-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0;\n  line-height: 1.2;\n  color: #111;\n}\n.detail-author[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #555;\n  margin: 0;\n}\n.detail-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.stars[_ngcontent-%COMP%] {\n  color: #f5a623;\n  font-size: 22px;\n  letter-spacing: 2px;\n}\n.rating-num[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n}\n.no-rating[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #aaa;\n  transform: translate(0px, 2px);\n}\n.meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  padding: 16px 0;\n  border-top: 1px solid #f0f0f0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.meta-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.meta-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-size: 15px;\n  font-weight: 500;\n  color: #333;\n}\n.description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111;\n  margin: 0 0 8px;\n}\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.8;\n  color: #555;\n  margin: 0;\n}\n.reviews-section[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.reviews-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #111;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.reviews-count[_ngcontent-%COMP%] {\n  background: #e8f5f3;\n  color: #0b615a;\n  border-radius: 12px;\n  padding: 2px 10px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.add-review-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  padding: 24px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  margin-bottom: 24px;\n}\n.add-review-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111;\n  margin: 0 0 16px;\n}\n.rating-select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.rating-select[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #555;\n  font-weight: 500;\n}\n.star-picker[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.star-pick[_ngcontent-%COMP%] {\n  font-size: 26px;\n  cursor: pointer;\n  color: #ddd;\n  transition: color 0.15s;\n}\n.star-pick.active[_ngcontent-%COMP%] {\n  color: #f5a623;\n}\n.star-pick[_ngcontent-%COMP%]:hover {\n  color: #f5a623;\n}\n.review-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #333;\n  resize: vertical;\n  box-sizing: border-box;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.review-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #1D9E75;\n}\n.submit-review-btn[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  background: #1D9E75;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  padding: 11px 24px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.submit-review-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0b7a59;\n}\n.submit-review-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.login-prompt[_ngcontent-%COMP%] {\n  background: #f8fafb;\n  border-radius: 10px;\n  padding: 14px 20px;\n  font-size: 14px;\n  color: #666;\n  margin-bottom: 20px;\n}\n.login-prompt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1D9E75;\n  font-weight: 600;\n  text-decoration: none;\n}\n.login-prompt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.reviews-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 32px 0;\n}\n.no-reviews[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n  color: #aaa;\n  font-size: 15px;\n}\n.review-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  padding: 20px 24px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  margin-bottom: 16px;\n  transition: box-shadow 0.2s;\n}\n.review-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.09);\n}\n.review-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.review-username[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: #111;\n  font-weight: 600;\n  font-size: 15px;\n  transition: color 0.2s;\n}\n.review-username[_ngcontent-%COMP%]:hover {\n  color: #1D9E75;\n}\n.avatar-letter[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #1D9E75,\n      #0b615a);\n  color: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.avatar-letter.sm[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  font-size: 12px;\n}\n.review-meta-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.review-stars[_ngcontent-%COMP%] {\n  color: #f5a623;\n  font-size: 17px;\n}\n.review-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #aaa;\n}\n.review-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #444;\n  line-height: 1.7;\n  margin: 0 0 14px;\n}\n.review-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.like-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 5px 14px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n  color: #555;\n}\n.like-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #ff6b81;\n  background: #fff5f7;\n}\n.like-btn.liked[_ngcontent-%COMP%] {\n  border-color: #ff6b81;\n  background: #fff5f7;\n  color: #ff4757;\n}\n.like-btn[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 0.7;\n}\n.comments-toggle-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 5px 14px;\n  font-size: 14px;\n  cursor: pointer;\n  color: #555;\n  transition: all 0.2s;\n}\n.comments-toggle-btn[_ngcontent-%COMP%]:hover {\n  border-color: #1D9E75;\n  background: #f0faf7;\n}\n.comments-section[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid #f0f0f0;\n}\n.comment[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  border-bottom: 1px solid #f8f8f8;\n}\n.comment[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.comment-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.comment-username[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  text-decoration: none;\n  color: #333;\n  font-weight: 600;\n  font-size: 13px;\n  transition: color 0.2s;\n}\n.comment-username[_ngcontent-%COMP%]:hover {\n  color: #1D9E75;\n}\n.comment-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #bbb;\n  margin-left: auto;\n}\n.comment-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #555;\n  line-height: 1.6;\n  margin: 0 0 6px;\n}\n.comment-own-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.edit-comment-btn[_ngcontent-%COMP%], \n.delete-comment-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12px;\n  cursor: pointer;\n  padding: 2px 6px;\n  border-radius: 4px;\n  transition: background 0.15s;\n}\n.edit-comment-btn[_ngcontent-%COMP%] {\n  color: #1D9E75;\n}\n.edit-comment-btn[_ngcontent-%COMP%]:hover {\n  background: #f0faf7;\n}\n.delete-comment-btn[_ngcontent-%COMP%] {\n  color: #ff4757;\n}\n.delete-comment-btn[_ngcontent-%COMP%]:hover {\n  background: #fff5f7;\n}\n.comment-edit-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 14px;\n  font-family: inherit;\n  resize: none;\n  box-sizing: border-box;\n  outline: none;\n  transition: border-color 0.2s;\n  margin-bottom: 8px;\n}\n.comment-edit-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #1D9E75;\n}\n.comment-edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.save-comment-btn[_ngcontent-%COMP%] {\n  background: #1D9E75;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.save-comment-btn[_ngcontent-%COMP%]:hover {\n  background: #0b7a59;\n}\n.cancel-comment-btn[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.cancel-comment-btn[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.add-comment[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 12px;\n}\n.comment-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-family: inherit;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.comment-input[_ngcontent-%COMP%]:focus {\n  border-color: #1D9E75;\n}\n.add-comment-btn[_ngcontent-%COMP%] {\n  background: #1D9E75;\n  color: #fff;\n  border: none;\n  border-radius: 20px;\n  padding: 8px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.add-comment-btn[_ngcontent-%COMP%]:hover {\n  background: #0b7a59;\n}\n.login-prompt-sm[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #aaa;\n  margin-top: 10px;\n}\n.login-prompt-sm[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1D9E75;\n  text-decoration: none;\n  font-weight: 600;\n}\n.login-prompt-sm[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 700px) {\n  .detail-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 24px;\n    gap: 24px;\n  }\n  .detail-cover[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 240px;\n    margin: 0 auto;\n  }\n  .detail-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .review-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=book-detail.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookDetailComponent, [{
    type: Component,
    args: [{ selector: "app-book-detail", standalone: true, imports: [CommonModule, RouterLink, FormsModule], template: `<div class="page">
    <a routerLink="/books" class="back-btn">\u2190 Back to list</a>

    <div class="loading" *ngIf="loading">
        <div class="spinner"></div>
        <p>Loading book...</p>
    </div>

    <div class="error" *ngIf="error">{{ error }}</div>

    <div class="detail-card" *ngIf="book && !loading">
        <div class="detail-cover">
            <img
                [src]="book.cover_image || ''"
                [alt]="book.title"
                onerror="this.src='https://placehold.co/300x420?text=No+Cover'"
            />
        </div>

        <div class="detail-info">
            <a class="genre-badge" [routerLink]="['/genre', book.genre]">{{ book.genre }}</a>
            <h1 class="detail-title">{{ book.title }}</h1>
            <p class="detail-author">
                <img src="/icons/writer.png" class="detail-icon" alt="writer">
                {{ book.author.full_name }}
            </p>

            <div class="detail-rating">
                <span class="stars">{{ getStars(book.average_rating) }}</span>
                <span *ngIf="book.average_rating" class="rating-num">{{ book.average_rating }}/5</span>
                <span *ngIf="!book.average_rating" class="no-rating">No reviews yet</span>
            </div>

            <div class="meta">
                <div class="meta-item" *ngIf="book.published_date">
                    <span class="meta-label">Published</span>
                    <span>{{ book.published_date | date:'dd.MM.yyyy' }}</span>
                </div>
                <div class="meta-item" *ngIf="book.isbn">
                    <span class="meta-label">ISBN</span>
                    <span>{{ book.isbn }}</span>
                </div>
            </div>

            <div class="description" *ngIf="book.description">
                <h3>About the book</h3>
                <p>{{ book.description }}</p>
            </div>
        </div>
    </div>

    <!-- Reviews Section -->
    <div class="reviews-section" *ngIf="book && !loading">
        <h2 class="reviews-title">Reviews <span class="reviews-count">{{ reviews.length }}</span></h2>

        <!-- Add Review Form -->
        <div class="add-review-card" *ngIf="isLoggedIn">
            <h3>Leave a Review</h3>
            <div class="rating-select">
                <label>Rating:</label>
                <div class="star-picker">
                    <span
                        *ngFor="let s of [1,2,3,4,5]"
                        class="star-pick"
                        [class.active]="s <= newReviewRating"
                        (click)="newReviewRating = s"
                    >\u2605</span>
                </div>
            </div>
            <textarea
                class="review-textarea"
                [(ngModel)]="newReviewText"
                placeholder="Share your thoughts about this book..."
                rows="3"
            ></textarea>
            <button
                class="submit-review-btn"
                (click)="submitReview()"
                [disabled]="!newReviewText.trim() || submittingReview"
            >
                {{ submittingReview ? 'Submitting...' : 'Submit Review' }}
            </button>
        </div>
        <div class="login-prompt" *ngIf="!isLoggedIn">
            <a routerLink="/login">Log in</a> to leave a review.
        </div>

        <!-- Reviews List -->
        <div class="reviews-loading" *ngIf="reviewsLoading">
            <div class="spinner"></div>
        </div>

        <div class="no-reviews" *ngIf="!reviewsLoading && reviews.length === 0">
            No reviews yet. Be the first!
        </div>

        <div class="review-card" *ngFor="let review of reviews">
            <div class="review-header">
                <a [routerLink]="['/users', review.user_username]" class="review-username">
                    <span class="avatar-letter">{{ (review.user_username || 'U').charAt(0).toUpperCase() }}</span>
                    {{ review.user_username }}
                </a>
                <div class="review-meta-right">
                    <span class="review-stars">{{ getStars(review.rating) }}</span>
                    <span class="review-date">{{ review.created_at | date:'dd MMM yyyy' }}</span>
                </div>
            </div>

            <p class="review-text">{{ review.text }}</p>

            <div class="review-actions">
                <button
                    class="like-btn"
                    [class.liked]="review.is_liked"
                    (click)="toggleLike(review)"
                    [disabled]="!isLoggedIn"
                    [title]="isLoggedIn ? '' : 'Log in to like'"
                >
                    {{ review.is_liked ? '\u2764\uFE0F' : '\u{1F90D}' }} {{ review.like_count }}
                </button>

                <button
                    class="comments-toggle-btn"
                    (click)="toggleComments(review.id)"
                >
                    \u{1F4AC} {{ (review.comments || []).length }}
                    {{ isCommentsExpanded(review.id) ? '\u25B2' : '\u25BC' }}
                </button>
            </div>

            <!-- Comments Section -->
            <div class="comments-section" *ngIf="isCommentsExpanded(review.id)">
                <div class="comment" *ngFor="let comment of review.comments">
                    <div class="comment-header">
                        <a [routerLink]="['/users', comment.username]" class="comment-username">
                            <span class="avatar-letter sm">{{ (comment.username || 'U').charAt(0).toUpperCase() }}</span>
                            {{ comment.username }}
                        </a>
                        <span class="comment-date">{{ comment.created_at | date:'dd MMM yyyy' }}</span>
                    </div>

                    <div *ngIf="editingComment?.id === comment.id; else viewComment">
                        <textarea
                            class="comment-edit-textarea"
                            [(ngModel)]="editingComment!.text"
                            rows="2"
                        ></textarea>
                        <div class="comment-edit-actions">
                            <button class="save-comment-btn" (click)="saveEditComment(review)">Save</button>
                            <button class="cancel-comment-btn" (click)="cancelEditComment()">Cancel</button>
                        </div>
                    </div>
                    <ng-template #viewComment>
                        <p class="comment-text">{{ comment.text }}</p>
                        <div class="comment-own-actions" *ngIf="comment.is_owner">
                            <button class="edit-comment-btn" (click)="startEditComment(comment)">Edit</button>
                            <button class="delete-comment-btn" (click)="deleteComment(review, comment.id)">Delete</button>
                        </div>
                    </ng-template>
                </div>

                <div class="add-comment" *ngIf="isLoggedIn">
                    <input
                        class="comment-input"
                        [(ngModel)]="newCommentText[review.id]"
                        placeholder="Write a comment..."
                        (keyup.enter)="submitComment(review)"
                    />
                    <button class="add-comment-btn" (click)="submitComment(review)">Post</button>
                </div>
                <div class="login-prompt-sm" *ngIf="!isLoggedIn">
                    <a routerLink="/login">Log in</a> to comment.
                </div>
            </div>
        </div>
    </div>
</div>
`, styles: ["/* src/app/pages/book-detail/book-detail.css */\n.page {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 32px 24px;\n}\n.back-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #0b615a;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 32px;\n  transition: opacity 0.2s;\n  transform: translate(0px, 13px);\n}\n.back-btn:hover {\n  opacity: 0.7;\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 0;\n  color: #888;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e0e0e0;\n  border-top-color: #1D9E75;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error {\n  text-align: center;\n  padding: 60px;\n  color: #d32f2f;\n  font-size: 16px;\n}\n.detail-card {\n  display: flex;\n  gap: 48px;\n  align-items: flex-start;\n  background: #fff;\n  border-radius: 16px;\n  padding: 40px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n}\n.detail-cover {\n  flex-shrink: 0;\n  width: 260px;\n}\n.detail-cover img {\n  width: 100%;\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);\n  display: block;\n}\n.detail-icon {\n  width: 18px;\n  height: 18px;\n  margin-right: 6px;\n  vertical-align: middle;\n}\n.detail-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.genre-badge {\n  display: inline-block;\n  background: rgba(115, 193, 187, 0.54);\n  color: #0e4541;\n  border-radius: 20px;\n  padding: 4px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  width: fit-content;\n  text-decoration: none;\n}\n.genre-badge:hover {\n  text-decoration: underline;\n}\n.detail-title {\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0;\n  line-height: 1.2;\n  color: #111;\n}\n.detail-author {\n  font-size: 16px;\n  color: #555;\n  margin: 0;\n}\n.detail-rating {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.stars {\n  color: #f5a623;\n  font-size: 22px;\n  letter-spacing: 2px;\n}\n.rating-num {\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n}\n.no-rating {\n  font-size: 14px;\n  color: #aaa;\n  transform: translate(0px, 2px);\n}\n.meta {\n  display: flex;\n  gap: 32px;\n  padding: 16px 0;\n  border-top: 1px solid #f0f0f0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.meta-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.meta-label {\n  font-size: 12px;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.meta-item span:last-child {\n  font-size: 15px;\n  font-weight: 500;\n  color: #333;\n}\n.description h3 {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111;\n  margin: 0 0 8px;\n}\n.description p {\n  font-size: 15px;\n  line-height: 1.8;\n  color: #555;\n  margin: 0;\n}\n.reviews-section {\n  margin-top: 40px;\n}\n.reviews-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #111;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.reviews-count {\n  background: #e8f5f3;\n  color: #0b615a;\n  border-radius: 12px;\n  padding: 2px 10px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.add-review-card {\n  background: #fff;\n  border-radius: 14px;\n  padding: 24px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  margin-bottom: 24px;\n}\n.add-review-card h3 {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111;\n  margin: 0 0 16px;\n}\n.rating-select {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.rating-select label {\n  font-size: 14px;\n  color: #555;\n  font-weight: 500;\n}\n.star-picker {\n  display: flex;\n  gap: 4px;\n}\n.star-pick {\n  font-size: 26px;\n  cursor: pointer;\n  color: #ddd;\n  transition: color 0.15s;\n}\n.star-pick.active {\n  color: #f5a623;\n}\n.star-pick:hover {\n  color: #f5a623;\n}\n.review-textarea {\n  width: 100%;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #333;\n  resize: vertical;\n  box-sizing: border-box;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.review-textarea:focus {\n  border-color: #1D9E75;\n}\n.submit-review-btn {\n  margin-top: 12px;\n  background: #1D9E75;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  padding: 11px 24px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.submit-review-btn:hover:not(:disabled) {\n  background: #0b7a59;\n}\n.submit-review-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.login-prompt {\n  background: #f8fafb;\n  border-radius: 10px;\n  padding: 14px 20px;\n  font-size: 14px;\n  color: #666;\n  margin-bottom: 20px;\n}\n.login-prompt a {\n  color: #1D9E75;\n  font-weight: 600;\n  text-decoration: none;\n}\n.login-prompt a:hover {\n  text-decoration: underline;\n}\n.reviews-loading {\n  display: flex;\n  justify-content: center;\n  padding: 32px 0;\n}\n.no-reviews {\n  text-align: center;\n  padding: 32px;\n  color: #aaa;\n  font-size: 15px;\n}\n.review-card {\n  background: #fff;\n  border-radius: 14px;\n  padding: 20px 24px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  margin-bottom: 16px;\n  transition: box-shadow 0.2s;\n}\n.review-card:hover {\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.09);\n}\n.review-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.review-username {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: #111;\n  font-weight: 600;\n  font-size: 15px;\n  transition: color 0.2s;\n}\n.review-username:hover {\n  color: #1D9E75;\n}\n.avatar-letter {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #1D9E75,\n      #0b615a);\n  color: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.avatar-letter.sm {\n  width: 26px;\n  height: 26px;\n  font-size: 12px;\n}\n.review-meta-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.review-stars {\n  color: #f5a623;\n  font-size: 17px;\n}\n.review-date {\n  font-size: 12px;\n  color: #aaa;\n}\n.review-text {\n  font-size: 15px;\n  color: #444;\n  line-height: 1.7;\n  margin: 0 0 14px;\n}\n.review-actions {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.like-btn {\n  background: none;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 5px 14px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n  color: #555;\n}\n.like-btn:hover:not(:disabled) {\n  border-color: #ff6b81;\n  background: #fff5f7;\n}\n.like-btn.liked {\n  border-color: #ff6b81;\n  background: #fff5f7;\n  color: #ff4757;\n}\n.like-btn:disabled {\n  cursor: default;\n  opacity: 0.7;\n}\n.comments-toggle-btn {\n  background: none;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 5px 14px;\n  font-size: 14px;\n  cursor: pointer;\n  color: #555;\n  transition: all 0.2s;\n}\n.comments-toggle-btn:hover {\n  border-color: #1D9E75;\n  background: #f0faf7;\n}\n.comments-section {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid #f0f0f0;\n}\n.comment {\n  padding: 12px 0;\n  border-bottom: 1px solid #f8f8f8;\n}\n.comment:last-of-type {\n  border-bottom: none;\n}\n.comment-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.comment-username {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  text-decoration: none;\n  color: #333;\n  font-weight: 600;\n  font-size: 13px;\n  transition: color 0.2s;\n}\n.comment-username:hover {\n  color: #1D9E75;\n}\n.comment-date {\n  font-size: 11px;\n  color: #bbb;\n  margin-left: auto;\n}\n.comment-text {\n  font-size: 14px;\n  color: #555;\n  line-height: 1.6;\n  margin: 0 0 6px;\n}\n.comment-own-actions {\n  display: flex;\n  gap: 8px;\n}\n.edit-comment-btn,\n.delete-comment-btn {\n  background: none;\n  border: none;\n  font-size: 12px;\n  cursor: pointer;\n  padding: 2px 6px;\n  border-radius: 4px;\n  transition: background 0.15s;\n}\n.edit-comment-btn {\n  color: #1D9E75;\n}\n.edit-comment-btn:hover {\n  background: #f0faf7;\n}\n.delete-comment-btn {\n  color: #ff4757;\n}\n.delete-comment-btn:hover {\n  background: #fff5f7;\n}\n.comment-edit-textarea {\n  width: 100%;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 14px;\n  font-family: inherit;\n  resize: none;\n  box-sizing: border-box;\n  outline: none;\n  transition: border-color 0.2s;\n  margin-bottom: 8px;\n}\n.comment-edit-textarea:focus {\n  border-color: #1D9E75;\n}\n.comment-edit-actions {\n  display: flex;\n  gap: 8px;\n}\n.save-comment-btn {\n  background: #1D9E75;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.save-comment-btn:hover {\n  background: #0b7a59;\n}\n.cancel-comment-btn {\n  background: #f1f5f9;\n  color: #64748b;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.cancel-comment-btn:hover {\n  background: #e2e8f0;\n}\n.add-comment {\n  display: flex;\n  gap: 8px;\n  margin-top: 12px;\n}\n.comment-input {\n  flex: 1;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-family: inherit;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.comment-input:focus {\n  border-color: #1D9E75;\n}\n.add-comment-btn {\n  background: #1D9E75;\n  color: #fff;\n  border: none;\n  border-radius: 20px;\n  padding: 8px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.add-comment-btn:hover {\n  background: #0b7a59;\n}\n.login-prompt-sm {\n  font-size: 13px;\n  color: #aaa;\n  margin-top: 10px;\n}\n.login-prompt-sm a {\n  color: #1D9E75;\n  text-decoration: none;\n  font-weight: 600;\n}\n.login-prompt-sm a:hover {\n  text-decoration: underline;\n}\n@media (max-width: 700px) {\n  .detail-card {\n    flex-direction: column;\n    padding: 24px;\n    gap: 24px;\n  }\n  .detail-cover {\n    width: 100%;\n    max-width: 240px;\n    margin: 0 auto;\n  }\n  .detail-title {\n    font-size: 24px;\n  }\n  .review-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=book-detail.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: BookService }, { type: ReviewService }, { type: AuthService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookDetailComponent, { className: "BookDetailComponent", filePath: "app/pages/book-detail/book-detail.ts", lineNumber: 17 });
})();

// src/app/components/login/login.component.ts
function LoginComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var LoginComponent = class _LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  error = "";
  loginForm = this.fb.nonNullable.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });
  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log("\u0423\u0441\u043F\u0435\u0448\u043D\u044B\u0439 \u0432\u0445\u043E\u0434!", response);
          const username = this.loginForm.value.username;
          if (username) {
            localStorage.setItem("username", username);
          }
          this.router.navigate(["/profile"]);
        },
        error: (err) => {
          this.error = "Invalid credentials";
        }
      });
    }
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 22, vars: 3, consts: [[1, "auth-container"], [1, "subtitle"], [3, "ngSubmit", "formGroup"], [1, "input-group"], [1, "fa-solid", "fa-user"], ["formControlName", "username", "placeholder", "Username", "type", "text"], [1, "fa-solid", "fa-lock"], ["formControlName", "password", "placeholder", "Password", "type", "password"], ["type", "submit", 3, "disabled"], [1, "error"], [1, "extra-links"], ["routerLink", "/register"], ["href", "#"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "Welcome Back!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "span", 1);
      \u0275\u0275text(4, "Please enter your details to sign in");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "form", 2);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275element(7, "i", 4)(8, "input", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 3);
      \u0275\u0275element(10, "i", 6)(11, "input", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 8);
      \u0275\u0275text(13, " Sign In ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(14, LoginComponent_Conditional_14_Template, 2, 1, "p", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 10)(16, "p");
      \u0275\u0275text(17, "Don't have an account? ");
      \u0275\u0275elementStart(18, "a", 11);
      \u0275\u0275text(19, "Create one");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "a", 12);
      \u0275\u0275text(21, "Forgot password?");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.loginForm.invalid);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.error ? 14 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{
      selector: "app-login",
      standalone: true,
      imports: [ReactiveFormsModule, RouterLink],
      template: `
  <div class="auth-container">
    <h2>Welcome Back!</h2>
    <span class="subtitle">Please enter your details to sign in</span>

    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <div class="input-group">
        <i class="fa-solid fa-user"></i>
        <input formControlName="username" placeholder="Username" type="text">
      </div>

      <div class="input-group">
        <i class="fa-solid fa-lock"></i>
        <input formControlName="password" placeholder="Password" type="password">
      </div>

      <button type="submit" [disabled]="loginForm.invalid">
        Sign In
      </button>

      @if (error) { <p class="error">{{ error }}</p> }
    </form>

    <div class="extra-links">
      <p>Don't have an account? <a routerLink="/register">Create one</a></p>
      <a href="#">Forgot password?</a>
    </div>
  </div>
`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app/components/login/login.component.ts", lineNumber: 42 });
})();

// src/app/components/register/register.component.ts
function RegisterComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage);
  }
}
var RegisterComponent = class _RegisterComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  errorMessage = "";
  registerForm = this.fb.nonNullable.group({
    username: ["", [Validators.required, Validators.minLength(3)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]],
    password_confirm: ["", [Validators.required]]
  });
  onSubmit() {
    if (this.registerForm.valid) {
      const emailToSave = this.registerForm.value.email;
      this.authService.register(this.registerForm.value).subscribe({
        next: () => {
          if (emailToSave) {
            localStorage.setItem("userEmail", emailToSave);
          }
          alert("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0448\u043B\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E!");
          this.router.navigate(["/login"]);
        },
        error: (err) => {
          this.errorMessage = err.error?.password?.[0] || err.error?.username?.[0] || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438";
        }
      });
    }
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 26, vars: 3, consts: [[1, "auth-container"], [1, "subtitle"], [3, "ngSubmit", "formGroup"], [1, "input-group"], [1, "fa-solid", "fa-user"], ["formControlName", "username", "placeholder", "Username", "type", "text"], [1, "fa-solid", "fa-envelope"], ["formControlName", "email", "placeholder", "Email Address", "type", "email"], [1, "fa-solid", "fa-lock"], ["formControlName", "password", "placeholder", "Password", "type", "password"], [1, "fa-solid", "fa-check-double"], ["formControlName", "password_confirm", "placeholder", "Confirm Password", "type", "password"], ["type", "submit", 3, "disabled"], [1, "error"], [1, "extra-links"], ["routerLink", "/login"], [1, "fa-solid", "fa-circle-exclamation"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "Join Us!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "span", 1);
      \u0275\u0275text(4, "Create an account to start reviewing books");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "form", 2);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_5_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275element(7, "i", 4)(8, "input", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 3);
      \u0275\u0275element(10, "i", 6)(11, "input", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 3);
      \u0275\u0275element(13, "i", 8)(14, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 3);
      \u0275\u0275element(16, "i", 10)(17, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 12);
      \u0275\u0275text(19, " Create Account ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(20, RegisterComponent_Conditional_20_Template, 3, 1, "p", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 14)(22, "p");
      \u0275\u0275text(23, "Already have an account? ");
      \u0275\u0275elementStart(24, "a", 15);
      \u0275\u0275text(25, "Sign In");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.registerForm);
      \u0275\u0275advance(13);
      \u0275\u0275property("disabled", ctx.registerForm.invalid);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.errorMessage ? 20 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{
      selector: "app-register",
      standalone: true,
      imports: [ReactiveFormsModule, RouterLink],
      template: `
    <div class="auth-container">
      <h2>Join Us!</h2>
      <span class="subtitle">Create an account to start reviewing books</span>

      <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
        <div class="input-group">
          <i class="fa-solid fa-user"></i>
          <input formControlName="username" placeholder="Username" type="text">
        </div>

        <div class="input-group">
          <i class="fa-solid fa-envelope"></i>
          <input formControlName="email" placeholder="Email Address" type="email">
        </div>

        <div class="input-group">
          <i class="fa-solid fa-lock"></i>
          <input formControlName="password" placeholder="Password" type="password">
        </div>

        <div class="input-group">
          <i class="fa-solid fa-check-double"></i>
          <input formControlName="password_confirm" placeholder="Confirm Password" type="password">
        </div>

        <button type="submit" [disabled]="registerForm.invalid">
          Create Account
        </button>

        @if (errorMessage) { 
          <p class="error"><i class="fa-solid fa-circle-exclamation"></i> {{ errorMessage }}</p> 
        }
      </form>

      <div class="extra-links">
        <p>Already have an account? <a routerLink="/login">Sign In</a></p>
      </div>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "app/components/register/register.component.ts", lineNumber: 51 });
})();

// src/app/services/profile.service.ts
var ProfileService = class _ProfileService {
  http = inject(HttpClient);
  apiUrl = "http://127.0.0.1:8000/api";
  getProfile() {
    const token = localStorage.getItem("token");
    const headers = { "Authorization": `Bearer ${token}` };
    return this.http.get(`${this.apiUrl}/profile/`, { headers });
  }
  updateProfile(data) {
    const token = localStorage.getItem("token");
    const headers = {
      "Authorization": `Bearer ${token}`
    };
    return this.http.patch(`${this.apiUrl}/profile/`, data, { headers });
  }
  static \u0275fac = function ProfileService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfileService, factory: _ProfileService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/components/profile/profile.component.ts
function ProfileComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElement(0, "textarea", 15, 0);
    \u0275\u0275domElementStart(2, "div", 16)(3, "button", 17);
    \u0275\u0275domListener("click", function ProfileComponent_Conditional_21_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const bioInput_r2 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveProfile(bioInput_r2.value));
    });
    \u0275\u0275domElement(4, "i", 18);
    \u0275\u0275text(5, " Save ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "button", 19);
    \u0275\u0275domListener("click", function ProfileComponent_Conditional_21_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleEdit());
    });
    \u0275\u0275domElement(7, "i", 20);
    \u0275\u0275text(8, " Cancel ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("value", ((tmp_2_0 = ctx_r2.profile()) == null ? null : tmp_2_0.bio) || "");
  }
}
function ProfileComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_1_0 = ctx_r2.profile()) == null ? null : tmp_1_0.bio) || "No bio yet. Tell us about your favorite books and genres!", " ");
  }
}
function ProfileComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 14)(1, "button", 21);
    \u0275\u0275domListener("click", function ProfileComponent_Conditional_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleEdit());
    });
    \u0275\u0275domElement(2, "i", 22);
    \u0275\u0275text(3, " Edit Profile ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 23);
    \u0275\u0275domListener("click", function ProfileComponent_Conditional_23_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275text(5, " Sign Out ");
    \u0275\u0275domElementEnd()();
  }
}
var ProfileComponent = class _ProfileComponent {
  profileService = inject(ProfileService);
  authService = inject(AuthService);
  profile = signal(null, ...ngDevMode ? [{ debugName: "profile" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  isEditing = signal(false, ...ngDevMode ? [{ debugName: "isEditing" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.loadProfile();
  }
  loadProfile() {
    this.profileService.getProfile().subscribe({
      next: (res) => {
        this.profile.set(__spreadProps(__spreadValues({}, res), {
          username: res.username || localStorage.getItem("username") || "User",
          email: res.email || "Not provided"
        }));
        this.loading.set(false);
      },
      error: (err) => {
        console.error("Load error:", err);
        this.profile.set({
          username: localStorage.getItem("username") || "User",
          email: "Not provided",
          bio: ""
        });
        this.loading.set(false);
      }
    });
  }
  toggleEdit() {
    this.isEditing.set(!this.isEditing());
  }
  saveProfile(newBio) {
    this.profileService.updateProfile({ bio: newBio }).subscribe({
      next: (updated) => {
        this.profile.set(__spreadProps(__spreadValues({}, this.profile()), {
          bio: updated.bio || newBio
        }));
        this.isEditing.set(false);
        alert("Profile updated successfully!");
      },
      error: (err) => {
        console.error("Update error details:", err);
        alert("Failed to update profile. Check console for details.");
      }
    });
  }
  logout() {
    this.authService.logout();
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 24, vars: 5, consts: [["bioInput", ""], [1, "profile-container", "card-fade-in"], [1, "profile-header"], [1, "avatar-box"], [1, "header-text"], [1, "badge"], [1, "fa-solid", "fa-book-open"], [1, "info-section"], [1, "info-row"], [1, "label"], [1, "fa-solid", "fa-envelope"], [1, "value"], [1, "fa-solid", "fa-quote-left"], [1, "value", "bio"], [1, "actions"], ["placeholder", "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043E \u0441\u0435\u0431\u0435...", 1, "bio-textarea", 3, "value"], [1, "edit-actions"], [1, "save-btn", 3, "click"], [1, "fa-solid", "fa-check"], [1, "cancel-btn", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "edit-btn", 3, "click"], [1, "fa-solid", "fa-pen-to-square"], [1, "logout-link", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 4)(5, "h2");
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "span", 5);
      \u0275\u0275domElement(8, "i", 6);
      \u0275\u0275text(9, " Book Reader");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(10, "div", 7)(11, "div", 8)(12, "span", 9);
      \u0275\u0275domElement(13, "i", 10);
      \u0275\u0275text(14, " Email Address");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "span", 11);
      \u0275\u0275text(16);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(17, "div", 8)(18, "span", 9);
      \u0275\u0275domElement(19, "i", 12);
      \u0275\u0275text(20, " About Me");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(21, ProfileComponent_Conditional_21_Template, 9, 1)(22, ProfileComponent_Conditional_22_Template, 2, 1, "p", 13);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(23, ProfileComponent_Conditional_23_Template, 6, 0, "div", 14);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_2_0;
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", (((tmp_0_0 = ctx.profile()) == null ? null : tmp_0_0.username == null ? null : tmp_0_0.username.charAt(0)) || "U").toUpperCase(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(((tmp_1_0 = ctx.profile()) == null ? null : tmp_1_0.username) || "User");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(((tmp_2_0 = ctx.profile()) == null ? null : tmp_2_0.email) || "Not provided");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.isEditing() ? 21 : 22);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.isEditing() ? 23 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n.profile-container[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.98);\n  padding: 40px;\n  border-radius: 20px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 400px;\n  margin: 0 auto;\n  text-align: left;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.card-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.profile-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 30px;\n  border-bottom: 1px solid #f1f5f9;\n  padding-bottom: 20px;\n}\n.avatar-box[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      #00a896,\n      #02c39a);\n  color: white;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  font-weight: 700;\n  box-shadow: 0 8px 15px rgba(0, 168, 150, 0.2);\n}\n.header-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  color: #2d3436;\n}\n.badge[_ngcontent-%COMP%] {\n  background: #e6f6f4;\n  color: #00a896;\n  padding: 5px 12px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  display: inline-block;\n  margin-top: 5px;\n}\n.info-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.info-row[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 8px;\n}\n.label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: #00a896;\n}\n.value[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #2d3436;\n  font-size: 15px;\n}\n.bio[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  color: #636e72;\n  background: #f8fafb;\n  padding: 12px;\n  border-radius: 10px;\n  margin: 5px 0 0;\n}\n.bio-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100px;\n  padding: 12px;\n  border-radius: 10px;\n  border: 1.5px solid #e2e8f0;\n  font-family: inherit;\n  font-size: 14px;\n  color: #2d3436;\n  background: #fff;\n  box-sizing: border-box;\n  outline: none;\n  transition: border-color 0.3s;\n}\n.bio-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #00a896;\n}\n.edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 15px;\n}\n.save-btn[_ngcontent-%COMP%] {\n  background: #00a896;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 600;\n  flex: 1;\n  transition: 0.3s;\n}\n.save-btn[_ngcontent-%COMP%]:hover {\n  background: #008f81;\n  transform: translateY(-2px);\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 600;\n  flex: 1;\n  transition: 0.3s;\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  background: #00a896;\n  color: white;\n  padding: 14px;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.edit-btn[_ngcontent-%COMP%]:hover {\n  background: #008f81;\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 168, 150, 0.3);\n}\n.logout-link[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #ff4757;\n  border: 1px solid #ff4757;\n  padding: 10px;\n  border-radius: 12px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.logout-link[_ngcontent-%COMP%]:hover {\n  background: #fff1f2;\n}\n/*# sourceMappingURL=profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [CommonModule], template: `
  <div class="profile-container card-fade-in">
    <div class="profile-header">
      <div class="avatar-box">
        {{ (profile()?.username?.charAt(0) || 'U').toUpperCase() }}
      </div>
      <div class="header-text">
        <h2>{{ profile()?.username || 'User' }}</h2>
        <span class="badge"><i class="fa-solid fa-book-open"></i> Book Reader</span>
      </div>
    </div>

    <div class="info-section">
      <div class="info-row">
        <span class="label"><i class="fa-solid fa-envelope"></i> Email Address</span>
        <span class="value">{{ profile()?.email || 'Not provided' }}</span>
      </div>
      
      <div class="info-row">
        <span class="label"><i class="fa-solid fa-quote-left"></i> About Me</span>
        
        @if (isEditing()) {
          <textarea #bioInput class="bio-textarea" [value]="profile()?.bio || ''" placeholder="\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043E \u0441\u0435\u0431\u0435..."></textarea>
          <div class="edit-actions">
            <button (click)="saveProfile(bioInput.value)" class="save-btn">
              <i class="fa-solid fa-check"></i> Save
            </button>
            <button (click)="toggleEdit()" class="cancel-btn">
              <i class="fa-solid fa-xmark"></i> Cancel
            </button>
          </div>
        } @else {
          <p class="value bio">
            {{ profile()?.bio || 'No bio yet. Tell us about your favorite books and genres!' }}
          </p>
        }
      </div>
    </div>

    @if (!isEditing()) {
      <div class="actions">
        <button (click)="toggleEdit()" class="edit-btn">
          <i class="fa-solid fa-pen-to-square"></i> Edit Profile
        </button>
        <button (click)="logout()" class="logout-link">
          Sign Out
        </button>
      </div>
    }
  </div>
`, styles: ["/* angular:styles/component:css;e5558a71445e630e1220a2901d0f3783f82e5ba26514e7754b7ca1a99cff28d3;/Users/ibrahimnurbergen/development/book-review/Web-Dev-Project/book-review/src/app/components/profile/profile.component.ts */\n.profile-container {\n  background: rgba(255, 255, 255, 0.98);\n  padding: 40px;\n  border-radius: 20px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 400px;\n  margin: 0 auto;\n  text-align: left;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.card-fade-in {\n  animation: fadeIn 0.6s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.profile-header {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 30px;\n  border-bottom: 1px solid #f1f5f9;\n  padding-bottom: 20px;\n}\n.avatar-box {\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      #00a896,\n      #02c39a);\n  color: white;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  font-weight: 700;\n  box-shadow: 0 8px 15px rgba(0, 168, 150, 0.2);\n}\n.header-text h2 {\n  margin: 0;\n  font-size: 24px;\n  color: #2d3436;\n}\n.badge {\n  background: #e6f6f4;\n  color: #00a896;\n  padding: 5px 12px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  display: inline-block;\n  margin-top: 5px;\n}\n.info-section {\n  margin-bottom: 30px;\n}\n.info-row {\n  margin-bottom: 25px;\n}\n.label {\n  color: #94a3b8;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 8px;\n}\n.label i {\n  margin-right: 5px;\n  color: #00a896;\n}\n.value {\n  font-weight: 500;\n  color: #2d3436;\n  font-size: 15px;\n}\n.bio {\n  line-height: 1.6;\n  color: #636e72;\n  background: #f8fafb;\n  padding: 12px;\n  border-radius: 10px;\n  margin: 5px 0 0;\n}\n.bio-textarea {\n  width: 100%;\n  min-height: 100px;\n  padding: 12px;\n  border-radius: 10px;\n  border: 1.5px solid #e2e8f0;\n  font-family: inherit;\n  font-size: 14px;\n  color: #2d3436;\n  background: #fff;\n  box-sizing: border-box;\n  outline: none;\n  transition: border-color 0.3s;\n}\n.bio-textarea:focus {\n  border-color: #00a896;\n}\n.edit-actions {\n  display: flex;\n  gap: 10px;\n  margin-top: 15px;\n}\n.save-btn {\n  background: #00a896;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 600;\n  flex: 1;\n  transition: 0.3s;\n}\n.save-btn:hover {\n  background: #008f81;\n  transform: translateY(-2px);\n}\n.cancel-btn {\n  background: #f1f5f9;\n  color: #64748b;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 600;\n  flex: 1;\n  transition: 0.3s;\n}\n.cancel-btn:hover {\n  background: #e2e8f0;\n}\n.actions {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.edit-btn {\n  background: #00a896;\n  color: white;\n  padding: 14px;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.edit-btn:hover {\n  background: #008f81;\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 168, 150, 0.3);\n}\n.logout-link {\n  background: transparent;\n  color: #ff4757;\n  border: 1px solid #ff4757;\n  padding: 10px;\n  border-radius: 12px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.logout-link:hover {\n  background: #fff1f2;\n}\n/*# sourceMappingURL=profile.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "app/components/profile/profile.component.ts", lineNumber: 118 });
})();

// src/app/services/author.ts
var AuthorService = class _AuthorService {
  http;
  apiUrl = "http://127.0.0.1:8000/api/authors/";
  constructor(http) {
    this.http = http;
  }
  getAuthors() {
    return this.http.get(this.apiUrl);
  }
  getAuthorById(id) {
    return this.http.get(`http://127.0.0.1:8000/api/authors/${id}/`);
  }
  static \u0275fac = function AuthorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthorService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthorService, factory: _AuthorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/pages/authors/authors.ts
var _c04 = (a0) => ["/authors", a0];
function AuthorsComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Loading authors...");
    \u0275\u0275elementEnd();
  }
}
function AuthorsComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function AuthorsComponent_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 16);
    \u0275\u0275element(6, "img", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 18);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "slice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const author_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c04, author_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(author_r2.full_name[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(author_r2.full_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", author_r2.book_count, " books ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(10, 5, author_r2.bio, 0, 120), "...");
  }
}
function AuthorsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, AuthorsComponent_div_18_div_1_Template, 11, 11, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.filteredAuthors);
  }
}
var AuthorsComponent = class _AuthorsComponent {
  authorService;
  cdr;
  authors = [];
  filteredAuthors = [];
  loading = true;
  error = "";
  selectedOrdering = "asc";
  searchText = "";
  constructor(authorService, cdr) {
    this.authorService = authorService;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.authorService.getAuthors().subscribe({
      next: (data) => {
        this.authors = data;
        this.filteredAuthors = [...data];
        this.sortAuthors();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error loading authors:", err);
        this.error = "Failed to load authors";
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  filterAuthors() {
    const query = this.searchText.toLowerCase().trim();
    this.filteredAuthors = this.authors.filter((author) => author.full_name.toLowerCase().includes(query));
    this.sortFilteredAuthors();
  }
  sortAuthors() {
    this.filterAuthors();
  }
  sortFilteredAuthors() {
    this.filteredAuthors.sort((a, b) => {
      const nameA = a.full_name.toLowerCase();
      const nameB = b.full_name.toLowerCase();
      if (this.selectedOrdering === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  }
  static \u0275fac = function AuthorsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthorsComponent)(\u0275\u0275directiveInject(AuthorService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthorsComponent, selectors: [["app-authors"]], decls: 19, vars: 5, consts: [[1, "authors-page"], [1, "authors-header"], [1, "search-box"], [1, "search-icon"], ["type", "text", "placeholder", "Search authors...", 3, "ngModelChange", "input", "ngModel"], [4, "ngIf"], [1, "sort-box"], [1, "sortby"], [3, "ngModelChange", "change", "ngModel"], ["value", "asc"], ["value", "desc"], ["class", "authors-grid", 4, "ngIf"], [1, "authors-grid"], ["class", "author-card", "style", "cursor:pointer", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "author-card", 2, "cursor", "pointer", 3, "routerLink"], [1, "author-avatar"], [1, "author-meta"], ["src", "/icons/open-book.png", "alt", "book", 1, "meta-icon"], [1, "bio"]], template: function AuthorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Authors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "span", 3);
      \u0275\u0275text(6, "\u{1F50D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function AuthorsComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return $event;
      });
      \u0275\u0275listener("input", function AuthorsComponent_Template_input_input_7_listener() {
        return ctx.filterAuthors();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(8, AuthorsComponent_p_8_Template, 2, 0, "p", 5)(9, AuthorsComponent_p_9_Template, 2, 1, "p", 5);
      \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
      \u0275\u0275text(12, "Sort by:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function AuthorsComponent_Template_select_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedOrdering, $event) || (ctx.selectedOrdering = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AuthorsComponent_Template_select_change_13_listener() {
        return ctx.sortAuthors();
      });
      \u0275\u0275elementStart(14, "option", 9);
      \u0275\u0275text(15, "A-Z");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 10);
      \u0275\u0275text(17, "Z-A");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(18, AuthorsComponent_div_18_Template, 2, 1, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedOrdering);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, SlicePipe], styles: ["\n.authors-page[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 40px auto;\n  padding: 0 24px;\n}\n.authors-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.meta-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n  margin-right: 6px;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  opacity: 0.65;\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  transform: translate(0px, 85px);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 38px;\n  border: 1px solid rgba(47, 163, 159, 0.89);\n  border-radius: 10px;\n  background: #fff;\n  padding: 0 14px 0 38px;\n  font-size: 14px;\n  outline: none;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #21b6ad;\n}\n.sort-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #ffffff;\n  padding: 2px 15px;\n  border-radius: 10px;\n  transform: translate(-510px, 0px);\n  width: fit-content;\n  margin: 20px auto 30px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);\n  border: 1px solid #ececec;\n}\n.sortby[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: rgb(15, 76, 72);\n}\n.sort-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  border: 1px solid #dcdcdc;\n  border-radius: 10px;\n  background: #f8f9ff;\n  font-size: 14px;\n  font-weight: 500;\n  color: #222;\n  cursor: pointer;\n  outline: none;\n  transition: 0.3s ease;\n}\n.sort-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {\n  border-color: #7c3aed;\n  background: #f3edff;\n}\n.sort-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #7c3aed;\n  box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.15);\n}\n.authors-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 24px;\n  color: #0b615a;\n  font-weight: 700;\n}\n.authors-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n}\n.author-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e7e7e7;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.author-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  color: #0b615a;\n  font-size: 22px;\n}\n.author-avatar[_ngcontent-%COMP%] {\n  color: #000000;\n  width: 27px;\n  height: 27px;\n  border-radius: 50%;\n  background: rgba(210, 223, 220, 0.89);\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  transform: translate(-110px, 0px);\n}\n.author-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  color: #444;\n  line-height: 1.5;\n}\n.bio[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  color: #666;\n}\n/*# sourceMappingURL=authors.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthorsComponent, [{
    type: Component,
    args: [{ selector: "app-authors", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `<div class="authors-page">
    <div class="authors-header">
        <h1>Authors</h1>

        <div class="search-box">
            <span class="search-icon">\u{1F50D}</span>
            <input
                    type="text"
                    placeholder="Search authors..."
                    [(ngModel)]="searchText"
                    (input)="filterAuthors()"
            />
        </div>
    </div>

    <p *ngIf="loading">Loading authors...</p>
    <p *ngIf="error">{{ error }}</p>

    <div class="sort-box">
        <label class="sortby">Sort by:</label>

        <select [(ngModel)]="selectedOrdering" (change)="sortAuthors()">
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
        </select>
    </div>

    <div class="authors-grid" *ngIf="!loading && !error">
        <div class="author-card" *ngFor="let author of filteredAuthors"
             [routerLink]="['/authors', author.id]" style="cursor:pointer">

            <div class="author-avatar">{{ author.full_name[0] }}</div>
            <h2>{{ author.full_name }}</h2>
            <p class="author-meta">
                <img src="/icons/open-book.png" class="meta-icon" alt="book">
                {{ author.book_count }} books
            </p>
            <p class="bio">{{ author.bio | slice:0:120 }}...</p>

        </div>
    </div>
</div>`, styles: ["/* src/app/pages/authors/authors.css */\n.authors-page {\n  max-width: 1200px;\n  margin: 40px auto;\n  padding: 0 24px;\n}\n.authors-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.meta-icon {\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n  margin-right: 6px;\n}\n.search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  opacity: 0.65;\n}\n.search-box {\n  position: relative;\n  transform: translate(0px, 85px);\n}\n.search-box input {\n  width: 260px;\n  height: 38px;\n  border: 1px solid rgba(47, 163, 159, 0.89);\n  border-radius: 10px;\n  background: #fff;\n  padding: 0 14px 0 38px;\n  font-size: 14px;\n  outline: none;\n}\n.search-box input:focus {\n  border-color: #21b6ad;\n}\n.sort-box {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #ffffff;\n  padding: 2px 15px;\n  border-radius: 10px;\n  transform: translate(-510px, 0px);\n  width: fit-content;\n  margin: 20px auto 30px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);\n  border: 1px solid #ececec;\n}\n.sortby {\n  font-size: 15px;\n  font-weight: 600;\n  color: rgb(15, 76, 72);\n}\n.sort-box select {\n  padding: 5px 15px;\n  border: 1px solid #dcdcdc;\n  border-radius: 10px;\n  background: #f8f9ff;\n  font-size: 14px;\n  font-weight: 500;\n  color: #222;\n  cursor: pointer;\n  outline: none;\n  transition: 0.3s ease;\n}\n.sort-box select:hover {\n  border-color: #7c3aed;\n  background: #f3edff;\n}\n.sort-box select:focus {\n  border-color: #7c3aed;\n  box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.15);\n}\n.authors-page h1 {\n  font-size: 36px;\n  margin-bottom: 24px;\n  color: #0b615a;\n  font-weight: 700;\n}\n.authors-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n}\n.author-card {\n  background: #fff;\n  border: 1px solid #e7e7e7;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.author-card h2 {\n  margin-bottom: 12px;\n  color: #0b615a;\n  font-size: 22px;\n}\n.author-avatar {\n  color: #000000;\n  width: 27px;\n  height: 27px;\n  border-radius: 50%;\n  background: rgba(210, 223, 220, 0.89);\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  transform: translate(-110px, 0px);\n}\n.author-card p {\n  margin: 8px 0;\n  color: #444;\n  line-height: 1.5;\n}\n.bio {\n  margin-top: 12px;\n  color: #666;\n}\n/*# sourceMappingURL=authors.css.map */\n"] }]
  }], () => [{ type: AuthorService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthorsComponent, { className: "AuthorsComponent", filePath: "app/pages/authors/authors.ts", lineNumber: 14 });
})();

// src/app/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  router;
  constructor(router) {
    this.router = router;
  }
  canActivate() {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
  static \u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Router }], null);
})();

// src/app/pages/author-detail/author-detail.ts
function AuthorDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading author...");
    \u0275\u0275elementEnd()();
  }
}
function AuthorDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function AuthorDetailComponent_div_5_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275element(1, "img", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, ctx_r0.author.birth_date, "dd.MM.yyyy"), " ");
  }
}
function AuthorDetailComponent_div_5_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.author.bio);
  }
}
function AuthorDetailComponent_div_5_div_16_app_book_card_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-book-card", 25);
  }
  if (rf & 2) {
    const book_r2 = ctx.$implicit;
    \u0275\u0275property("book", book_r2);
  }
}
function AuthorDetailComponent_div_5_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, AuthorDetailComponent_div_5_div_16_app_book_card_1_Template, 1, 1, "app-book-card", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.books);
  }
}
function AuthorDetailComponent_div_5_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "p");
    \u0275\u0275text(2, "\u{1F4ED} No books found");
    \u0275\u0275elementEnd()();
  }
}
function AuthorDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 8)(2, "div", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "h1", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12);
    \u0275\u0275template(8, AuthorDetailComponent_div_5_span_8_Template, 4, 4, "span", 13);
    \u0275\u0275elementStart(9, "span", 14);
    \u0275\u0275element(10, "img", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, AuthorDetailComponent_div_5_p_12_Template, 2, 1, "p", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 17)(14, "h2", 18);
    \u0275\u0275text(15, "Author's books");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, AuthorDetailComponent_div_5_div_16_Template, 2, 1, "div", 19)(17, AuthorDetailComponent_div_5_div_17_Template, 3, 0, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getInitials(ctx_r0.author.full_name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.author.full_name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.author.birth_date);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.author.book_count, " ", ctx_r0.author.book_count === 1 ? "book" : "books", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.author.bio);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.books.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.books.length === 0);
  }
}
var AuthorDetailComponent = class _AuthorDetailComponent {
  route;
  authorService;
  bookService;
  cdr;
  author = null;
  books = [];
  loading = true;
  error = "";
  constructor(route, authorService, bookService, cdr) {
    this.route = route;
    this.authorService = authorService;
    this.bookService = bookService;
    this.cdr = cdr;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.authorService.getAuthorById(id).subscribe({
      next: (data) => {
        this.author = data;
        this.loadBooks(data.full_name);
      },
      error: () => {
        this.error = "\u0410\u0432\u0442\u043E\u0440 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D";
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  loadBooks(authorName) {
    this.bookService.getBooks({ search: authorName }).subscribe({
      next: (data) => {
        this.books = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  getInitials(name) {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase();
  }
  static \u0275fac = function AuthorDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthorDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthorService), \u0275\u0275directiveInject(BookService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthorDetailComponent, selectors: [["app-author-detail"]], decls: 6, vars: 3, consts: [[1, "page"], ["routerLink", "/authors", 1, "back-btn"], ["class", "loading", 4, "ngIf"], ["class", "error", 4, "ngIf"], [4, "ngIf"], [1, "loading"], [1, "spinner"], [1, "error"], [1, "author-card"], [1, "avatar"], [1, "author-info"], [1, "author-name"], [1, "meta"], ["class", "meta-item", 4, "ngIf"], [1, "meta-item"], ["src", "/icons/books.png", "alt", "books", 1, "meta-icon2"], ["class", "bio", 4, "ngIf"], [1, "books-section"], [1, "section-title"], ["class", "books-grid", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["src", "/icons/b.png", "alt", "birth", 1, "meta-icon1"], [1, "bio"], [1, "books-grid"], [3, "book", 4, "ngFor", "ngForOf"], [3, "book"], [1, "empty"]], template: function AuthorDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275text(2, "\u2190 Back to authors");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, AuthorDetailComponent_div_3_Template, 4, 0, "div", 2)(4, AuthorDetailComponent_div_4_Template, 2, 1, "div", 3)(5, AuthorDetailComponent_div_5_Template, 18, 8, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.author && !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, BookCardComponent, DatePipe], styles: ["\n.page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 32px 24px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #0b615a;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 32px;\n  transition: opacity 0.2s;\n  transform: translate(0px, 20px);\n}\n.meta-icon1[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin-right: 6px;\n  vertical-align: middle;\n}\n.meta-icon2[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 19px;\n  margin-right: 6px;\n  vertical-align: middle;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 0;\n  color: #888;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e0e0e0;\n  border-top-color: #1D9E75;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px;\n  color: #d32f2f;\n}\n.author-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  align-items: flex-start;\n  background: #fff;\n  border-radius: 16px;\n  padding: 36px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n  margin-bottom: 40px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: #E1F5EE;\n  color: #0F6E56;\n  font-size: 32px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.author-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  flex: 1;\n}\n.author-name[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0;\n  color: #111;\n}\n.meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.meta-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  background: #f5f5f5;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n.bio[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.8;\n  color: #555;\n  margin: 0;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  margin: 0 0 24px;\n  color: #111;\n}\n.books-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 24px;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #888;\n  font-size: 16px;\n}\n@media (max-width: 600px) {\n  .author-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: 24px;\n  }\n  .meta[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=author-detail.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthorDetailComponent, [{
    type: Component,
    args: [{ selector: "app-author-detail", standalone: true, imports: [CommonModule, RouterLink, BookCardComponent], template: `<div class="page">
    <a routerLink="/authors" class="back-btn">\u2190 Back to authors</a>

    <div class="loading" *ngIf="loading">
        <div class="spinner"></div>
        <p>Loading author...</p>
    </div>

    <div class="error" *ngIf="error">{{ error }}</div>

    <div *ngIf="author && !loading">
        <div class="author-card">
            <div class="avatar">{{ getInitials(author.full_name) }}</div>

            <div class="author-info">
                <h1 class="author-name">{{ author.full_name }}</h1>

                <div class="meta">
                    <span class="meta-item" *ngIf="author.birth_date">
                        <img src="/icons/b.png" class="meta-icon1" alt="birth">
                        {{ author.birth_date | date:'dd.MM.yyyy' }}
                    </span>

                    <span class="meta-item">
                        <img src="/icons/books.png" class="meta-icon2" alt="books">
                        {{ author.book_count }} {{ author.book_count === 1 ? 'book' : 'books' }}
                    </span>
                </div>

                <p class="bio" *ngIf="author.bio">{{ author.bio }}</p>
            </div>
        </div>

        <div class="books-section">
            <h2 class="section-title">Author's books</h2>

            <div class="books-grid" *ngIf="books.length > 0">
                <app-book-card
                        *ngFor="let book of books"
                        [book]="book">
                </app-book-card>
            </div>

            <div class="empty" *ngIf="books.length === 0">
                <p>\u{1F4ED} No books found</p>
            </div>
        </div>
    </div>
</div>`, styles: ["/* src/app/pages/author-detail/author-detail.css */\n.page {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 32px 24px;\n}\n.back-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #0b615a;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 32px;\n  transition: opacity 0.2s;\n  transform: translate(0px, 20px);\n}\n.meta-icon1 {\n  width: 16px;\n  height: 16px;\n  margin-right: 6px;\n  vertical-align: middle;\n}\n.meta-icon2 {\n  width: 19px;\n  height: 19px;\n  margin-right: 6px;\n  vertical-align: middle;\n}\n.back-btn:hover {\n  opacity: 0.7;\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 0;\n  color: #888;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e0e0e0;\n  border-top-color: #1D9E75;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error {\n  text-align: center;\n  padding: 60px;\n  color: #d32f2f;\n}\n.author-card {\n  display: flex;\n  gap: 32px;\n  align-items: flex-start;\n  background: #fff;\n  border-radius: 16px;\n  padding: 36px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n  margin-bottom: 40px;\n}\n.avatar {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: #E1F5EE;\n  color: #0F6E56;\n  font-size: 32px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.author-info {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  flex: 1;\n}\n.author-name {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0;\n  color: #111;\n}\n.meta {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.meta-item {\n  font-size: 14px;\n  color: #666;\n  background: #f5f5f5;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n.bio {\n  font-size: 15px;\n  line-height: 1.8;\n  color: #555;\n  margin: 0;\n}\n.section-title {\n  font-size: 22px;\n  font-weight: 700;\n  margin: 0 0 24px;\n  color: #111;\n}\n.books-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 24px;\n}\n.empty {\n  text-align: center;\n  padding: 40px;\n  color: #888;\n  font-size: 16px;\n}\n@media (max-width: 600px) {\n  .author-card {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: 24px;\n  }\n  .meta {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=author-detail.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: AuthorService }, { type: BookService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthorDetailComponent, { className: "AuthorDetailComponent", filePath: "app/pages/author-detail/author-detail.ts", lineNumber: 16 });
})();

// src/app/pages/favorites/favorites.ts
function FavoritesComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2, "loading.....");
    \u0275\u0275elementEnd()();
  }
}
function FavoritesComponent_div_4_app_book_card_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-book-card", 7);
  }
  if (rf & 2) {
    const book_r1 = ctx.$implicit;
    \u0275\u0275property("book", book_r1);
  }
}
function FavoritesComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, FavoritesComponent_div_4_app_book_card_1_Template, 1, 1, "app-book-card", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.favoriteBooks);
  }
}
function FavoritesComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "\u2764\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "You haven't added any books to your favorites yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 10);
    \u0275\u0275text(6, "Browse Books");
    \u0275\u0275elementEnd()();
  }
}
var FavoritesComponent = class _FavoritesComponent {
  favoriteService;
  cdr;
  favoriteBooks = [];
  isLoading = false;
  constructor(favoriteService, cdr) {
    this.favoriteService = favoriteService;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.loadFavorites();
  }
  loadFavorites() {
    this.isLoading = true;
    this.favoriteService.getFavorites().subscribe({
      next: (data) => {
        this.favoriteBooks = [...data];
        this.isLoading = false;
        this.cdr.markForCheck();
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("\u049A\u0430\u0442\u0435:", err);
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  static \u0275fac = function FavoritesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FavoritesComponent)(\u0275\u0275directiveInject(FavoriteService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FavoritesComponent, selectors: [["app-favorites"]], decls: 6, vars: 3, consts: [[1, "favorites-container"], ["class", "loading-spinner", 4, "ngIf"], ["class", "books-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "loading-spinner"], [1, "books-grid"], [3, "book", 4, "ngFor", "ngForOf"], [3, "book"], [1, "empty-state"], [1, "icon"], ["routerLink", "/books", 1, "browse-btn"]], template: function FavoritesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "My Favorite Books");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, FavoritesComponent_div_3_Template, 3, 0, "div", 1)(4, FavoritesComponent_div_4_Template, 2, 1, "div", 2)(5, FavoritesComponent_div_5_Template, 7, 0, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.favoriteBooks.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.favoriteBooks.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, BookCardComponent], styles: ["\n.favorites-container[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n  min-height: 80vh;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #2c3e50;\n  margin-bottom: 30px;\n  font-weight: 700;\n  position: relative;\n}\n.books-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 30px;\n  justify-items: center;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 100px 20px;\n  background: #f8f9fa;\n  border-radius: 15px;\n  border: 2px dashed #dee2e6;\n  margin-top: 20px;\n}\n.empty-state[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  margin-bottom: 20px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #6c757d;\n  margin-bottom: 25px;\n}\n.browse-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 12px 30px;\n  background-color: #5cb3b1;\n  color: white;\n  text-decoration: none;\n  border-radius: 25px;\n  transition: 0.3s ease;\n  font-weight: 600;\n}\n.browse-btn[_ngcontent-%COMP%]:hover {\n  background-color: #4a9694;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(92, 179, 177, 0.3);\n}\n/*# sourceMappingURL=favorites.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FavoritesComponent, [{
    type: Component,
    args: [{ selector: "app-favorites", standalone: true, imports: [CommonModule, BookCardComponent], template: `<div class="favorites-container">
    <h2>My Favorite Books</h2>

    <div *ngIf="isLoading" class="loading-spinner">
        <p>loading.....</p>
    </div>

    <div class="books-grid" *ngIf="!isLoading && favoriteBooks.length > 0">
        <app-book-card *ngFor="let book of favoriteBooks" [book]="book">
        </app-book-card>
    </div>

    <div class="empty-state" *ngIf="!isLoading && favoriteBooks.length === 0">
        <div class="icon">\u2764\uFE0F</div>
        <p>You haven't added any books to your favorites yet.</p>
        <a routerLink="/books" class="browse-btn">Browse Books</a>
    </div>
</div>`, styles: ["/* src/app/pages/favorites/favorites.css */\n.favorites-container {\n  padding: 40px 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n  min-height: 80vh;\n}\nh2 {\n  font-size: 2.5rem;\n  color: #2c3e50;\n  margin-bottom: 30px;\n  font-weight: 700;\n  position: relative;\n}\n.books-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 30px;\n  justify-items: center;\n}\n.empty-state {\n  text-align: center;\n  padding: 100px 20px;\n  background: #f8f9fa;\n  border-radius: 15px;\n  border: 2px dashed #dee2e6;\n  margin-top: 20px;\n}\n.empty-state .icon {\n  font-size: 50px;\n  margin-bottom: 20px;\n}\n.empty-state p {\n  font-size: 1.2rem;\n  color: #6c757d;\n  margin-bottom: 25px;\n}\n.browse-btn {\n  display: inline-block;\n  padding: 12px 30px;\n  background-color: #5cb3b1;\n  color: white;\n  text-decoration: none;\n  border-radius: 25px;\n  transition: 0.3s ease;\n  font-weight: 600;\n}\n.browse-btn:hover {\n  background-color: #4a9694;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(92, 179, 177, 0.3);\n}\n/*# sourceMappingURL=favorites.css.map */\n"] }]
  }], () => [{ type: FavoriteService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FavoritesComponent, { className: "FavoritesComponent", filePath: "app/pages/favorites/favorites.ts", lineNumber: 14 });
})();

// src/app/pages/user-profile/user-profile.ts
var _c05 = () => [];
var _c12 = (a0) => ["/books", a0];
function UserProfileComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading profile...");
    \u0275\u0275elementEnd()();
  }
}
function UserProfileComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function UserProfileComponent_div_5_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F4CD} ", ctx_r0.profile.location, " ");
  }
}
function UserProfileComponent_div_5_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.profile.bio);
  }
}
function UserProfileComponent_div_5_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, "No bio yet.");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_div_5_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, " No reviews yet. ");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_div_5_div_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "a", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 32);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const review_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c12, review_r3.book_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F4D6} ", review_r3.book_title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getStars(review_r3.rating));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r3.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 5, review_r3.created_at, "dd MMM yyyy"));
  }
}
function UserProfileComponent_div_5_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, UserProfileComponent_div_5_div_26_div_1_Template, 2, 0, "div", 24)(2, UserProfileComponent_div_5_div_26_div_2_Template, 11, 10, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.profile.reviews || \u0275\u0275pureFunction0(2, _c05)).length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.profile.reviews);
  }
}
function UserProfileComponent_div_5_div_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, " No comments yet. ");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_div_5_div_27_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "a", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const comment_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c12, comment_r4.book_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F4D6} ", comment_r4.book_title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 4, comment_r4.created_at, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(comment_r4.text);
  }
}
function UserProfileComponent_div_5_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, UserProfileComponent_div_5_div_27_div_1_Template, 2, 0, "div", 24)(2, UserProfileComponent_div_5_div_27_div_2_Template, 9, 9, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.profile.comments || \u0275\u0275pureFunction0(2, _c05)).length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.profile.comments);
  }
}
function UserProfileComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 8)(2, "div", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "h1", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, UserProfileComponent_div_5_p_7_Template, 2, 1, "p", 12)(8, UserProfileComponent_div_5_p_8_Template, 2, 1, "p", 13)(9, UserProfileComponent_div_5_p_9_Template, 2, 0, "p", 14);
    \u0275\u0275elementStart(10, "div", 15)(11, "div", 16)(12, "span", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 18);
    \u0275\u0275text(15, "Reviews");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "span", 17);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 18);
    \u0275\u0275text(20, "Comments");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(21, "div", 19)(22, "button", 20);
    \u0275\u0275listener("click", function UserProfileComponent_div_5_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.activeTab = "reviews");
    });
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 20);
    \u0275\u0275listener("click", function UserProfileComponent_div_5_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.activeTab = "comments");
    });
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, UserProfileComponent_div_5_div_26_Template, 3, 3, "div", 4)(27, UserProfileComponent_div_5_div_27_Template, 3, 3, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.profile.username || "U").charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.profile.username);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profile.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profile.bio);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.profile.bio);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r0.profile.reviews || \u0275\u0275pureFunction0(15, _c05)).length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.profile.comments || \u0275\u0275pureFunction0(16, _c05)).length);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r0.activeTab === "reviews");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Reviews (", (ctx_r0.profile.reviews || \u0275\u0275pureFunction0(17, _c05)).length, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.activeTab === "comments");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Comments (", (ctx_r0.profile.comments || \u0275\u0275pureFunction0(18, _c05)).length, ") ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "reviews");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "comments");
  }
}
var UserProfileComponent = class _UserProfileComponent {
  route;
  reviewService;
  profile = null;
  loading = true;
  error = "";
  activeTab = "reviews";
  constructor(route, reviewService) {
    this.route = route;
    this.reviewService = reviewService;
  }
  ngOnInit() {
    const username = this.route.snapshot.paramMap.get("username");
    this.reviewService.getUserProfile(username).subscribe({
      next: (data) => {
        this.profile = data;
        this.loading = false;
      },
      error: () => {
        this.error = "User not found";
        this.loading = false;
      }
    });
  }
  getStars(rating) {
    const full = Math.round(rating);
    return "\u2605".repeat(full) + "\u2606".repeat(5 - full);
  }
  static \u0275fac = function UserProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserProfileComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ReviewService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserProfileComponent, selectors: [["app-user-profile"]], decls: 6, vars: 3, consts: [[1, "page"], ["routerLink", "/books", 1, "back-btn"], ["class", "loading", 4, "ngIf"], ["class", "error-msg", 4, "ngIf"], [4, "ngIf"], [1, "loading"], [1, "spinner"], [1, "error-msg"], [1, "profile-card"], [1, "avatar-big"], [1, "profile-info"], [1, "profile-username"], ["class", "profile-location", 4, "ngIf"], ["class", "profile-bio", 4, "ngIf"], ["class", "profile-bio muted", 4, "ngIf"], [1, "profile-stats"], [1, "stat"], [1, "stat-num"], [1, "stat-label"], [1, "tabs"], [1, "tab-btn", 3, "click"], [1, "profile-location"], [1, "profile-bio"], [1, "profile-bio", "muted"], ["class", "empty-msg", 4, "ngIf"], ["class", "item-card", 4, "ngFor", "ngForOf"], [1, "empty-msg"], [1, "item-card"], [1, "item-header"], [1, "book-link", 3, "routerLink"], [1, "item-stars"], [1, "item-text"], [1, "item-date"]], template: function UserProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275text(2, "\u2190 Back to books");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, UserProfileComponent_div_3_Template, 4, 0, "div", 2)(4, UserProfileComponent_div_4_Template, 2, 1, "div", 3)(5, UserProfileComponent_div_5_Template, 28, 19, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.profile && !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, DatePipe], styles: ["\n.page[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 32px 24px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #0b615a;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 32px;\n  transition: opacity 0.2s;\n  transform: translate(0px, 13px);\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 0;\n  color: #888;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e0e0e0;\n  border-top-color: #1D9E75;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-msg[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px;\n  color: #d32f2f;\n  font-size: 16px;\n}\n.profile-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  padding: 32px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n  display: flex;\n  gap: 28px;\n  align-items: flex-start;\n  margin-bottom: 28px;\n}\n.avatar-big[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #1D9E75,\n      #0b615a);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 34px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.profile-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.profile-username[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: #111;\n  margin: 0 0 6px;\n}\n.profile-location[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #888;\n  margin: 0 0 8px;\n}\n.profile-bio[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #555;\n  line-height: 1.6;\n  margin: 0 0 16px;\n}\n.profile-bio.muted[_ngcontent-%COMP%] {\n  color: #bbb;\n  font-style: italic;\n}\n.profile-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #f8fafb;\n  border-radius: 10px;\n  padding: 10px 20px;\n}\n.stat-num[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1D9E75;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  margin-top: 2px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 20px;\n  border-bottom: 2px solid #f0f0f0;\n  padding-bottom: 0;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 12px 20px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #888;\n  cursor: pointer;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  transition: color 0.2s, border-color 0.2s;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: #1D9E75;\n  border-bottom-color: #1D9E75;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: #1D9E75;\n}\n.empty-msg[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #bbb;\n  font-size: 15px;\n}\n.item-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 18px 22px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  margin-bottom: 12px;\n  transition: box-shadow 0.2s;\n}\n.item-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.item-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.book-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #0b615a;\n  font-weight: 600;\n  font-size: 15px;\n  transition: color 0.2s;\n}\n.book-link[_ngcontent-%COMP%]:hover {\n  color: #1D9E75;\n  text-decoration: underline;\n}\n.item-stars[_ngcontent-%COMP%] {\n  color: #f5a623;\n  font-size: 16px;\n}\n.item-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #555;\n  line-height: 1.7;\n  margin: 0 0 8px;\n}\n.item-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #bbb;\n}\n@media (max-width: 600px) {\n  .profile-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n  .profile-stats[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=user-profile.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileComponent, [{
    type: Component,
    args: [{ selector: "app-user-profile", standalone: true, imports: [CommonModule, RouterLink], template: `<div class="page">
    <a routerLink="/books" class="back-btn">\u2190 Back to books</a>

    <div class="loading" *ngIf="loading">
        <div class="spinner"></div>
        <p>Loading profile...</p>
    </div>

    <div class="error-msg" *ngIf="error">{{ error }}</div>

    <div *ngIf="profile && !loading">
        <!-- Profile Header -->
        <div class="profile-card">
            <div class="avatar-big">
                {{ (profile.username || 'U').charAt(0).toUpperCase() }}
            </div>
            <div class="profile-info">
                <h1 class="profile-username">{{ profile.username }}</h1>
                <p class="profile-location" *ngIf="profile.location">
                    \u{1F4CD} {{ profile.location }}
                </p>
                <p class="profile-bio" *ngIf="profile.bio">{{ profile.bio }}</p>
                <p class="profile-bio muted" *ngIf="!profile.bio">No bio yet.</p>

                <div class="profile-stats">
                    <div class="stat">
                        <span class="stat-num">{{ (profile.reviews || []).length }}</span>
                        <span class="stat-label">Reviews</span>
                    </div>
                    <div class="stat">
                        <span class="stat-num">{{ (profile.comments || []).length }}</span>
                        <span class="stat-label">Comments</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tabs -->
        <div class="tabs">
            <button
                class="tab-btn"
                [class.active]="activeTab === 'reviews'"
                (click)="activeTab = 'reviews'"
            >
                Reviews ({{ (profile.reviews || []).length }})
            </button>
            <button
                class="tab-btn"
                [class.active]="activeTab === 'comments'"
                (click)="activeTab = 'comments'"
            >
                Comments ({{ (profile.comments || []).length }})
            </button>
        </div>

        <!-- Reviews Tab -->
        <div *ngIf="activeTab === 'reviews'">
            <div *ngIf="(profile.reviews || []).length === 0" class="empty-msg">
                No reviews yet.
            </div>
            <div class="item-card" *ngFor="let review of profile.reviews">
                <div class="item-header">
                    <a [routerLink]="['/books', review.book_id]" class="book-link">
                        \u{1F4D6} {{ review.book_title }}
                    </a>
                    <span class="item-stars">{{ getStars(review.rating) }}</span>
                </div>
                <p class="item-text">{{ review.text }}</p>
                <span class="item-date">{{ review.created_at | date:'dd MMM yyyy' }}</span>
            </div>
        </div>

        <!-- Comments Tab -->
        <div *ngIf="activeTab === 'comments'">
            <div *ngIf="(profile.comments || []).length === 0" class="empty-msg">
                No comments yet.
            </div>
            <div class="item-card" *ngFor="let comment of profile.comments">
                <div class="item-header">
                    <a [routerLink]="['/books', comment.book_id]" class="book-link">
                        \u{1F4D6} {{ comment.book_title }}
                    </a>
                    <span class="item-date">{{ comment.created_at | date:'dd MMM yyyy' }}</span>
                </div>
                <p class="item-text">{{ comment.text }}</p>
            </div>
        </div>
    </div>
</div>
`, styles: ["/* src/app/pages/user-profile/user-profile.css */\n.page {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 32px 24px;\n}\n.back-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #0b615a;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 32px;\n  transition: opacity 0.2s;\n  transform: translate(0px, 13px);\n}\n.back-btn:hover {\n  opacity: 0.7;\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 0;\n  color: #888;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e0e0e0;\n  border-top-color: #1D9E75;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-msg {\n  text-align: center;\n  padding: 60px;\n  color: #d32f2f;\n  font-size: 16px;\n}\n.profile-card {\n  background: #fff;\n  border-radius: 18px;\n  padding: 32px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n  display: flex;\n  gap: 28px;\n  align-items: flex-start;\n  margin-bottom: 28px;\n}\n.avatar-big {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #1D9E75,\n      #0b615a);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 34px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.profile-info {\n  flex: 1;\n}\n.profile-username {\n  font-size: 26px;\n  font-weight: 700;\n  color: #111;\n  margin: 0 0 6px;\n}\n.profile-location {\n  font-size: 14px;\n  color: #888;\n  margin: 0 0 8px;\n}\n.profile-bio {\n  font-size: 15px;\n  color: #555;\n  line-height: 1.6;\n  margin: 0 0 16px;\n}\n.profile-bio.muted {\n  color: #bbb;\n  font-style: italic;\n}\n.profile-stats {\n  display: flex;\n  gap: 24px;\n}\n.stat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #f8fafb;\n  border-radius: 10px;\n  padding: 10px 20px;\n}\n.stat-num {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1D9E75;\n}\n.stat-label {\n  font-size: 12px;\n  color: #888;\n  margin-top: 2px;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 20px;\n  border-bottom: 2px solid #f0f0f0;\n  padding-bottom: 0;\n}\n.tab-btn {\n  background: none;\n  border: none;\n  padding: 12px 20px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #888;\n  cursor: pointer;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  transition: color 0.2s, border-color 0.2s;\n}\n.tab-btn.active {\n  color: #1D9E75;\n  border-bottom-color: #1D9E75;\n}\n.tab-btn:hover {\n  color: #1D9E75;\n}\n.empty-msg {\n  text-align: center;\n  padding: 40px;\n  color: #bbb;\n  font-size: 15px;\n}\n.item-card {\n  background: #fff;\n  border-radius: 12px;\n  padding: 18px 22px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  margin-bottom: 12px;\n  transition: box-shadow 0.2s;\n}\n.item-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.item-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.book-link {\n  text-decoration: none;\n  color: #0b615a;\n  font-weight: 600;\n  font-size: 15px;\n  transition: color 0.2s;\n}\n.book-link:hover {\n  color: #1D9E75;\n  text-decoration: underline;\n}\n.item-stars {\n  color: #f5a623;\n  font-size: 16px;\n}\n.item-text {\n  font-size: 14px;\n  color: #555;\n  line-height: 1.7;\n  margin: 0 0 8px;\n}\n.item-date {\n  font-size: 12px;\n  color: #bbb;\n}\n@media (max-width: 600px) {\n  .profile-card {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n  .profile-stats {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=user-profile.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: ReviewService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserProfileComponent, { className: "UserProfileComponent", filePath: "app/pages/user-profile/user-profile.ts", lineNumber: 13 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "books", pathMatch: "full" },
  { path: "books", component: BooksListComponent },
  { path: "authors", component: AuthorsComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "genre/:genre", loadComponent: () => import("./chunk-XE3Q7VNC.js").then((m) => m.GenreBooksComponent) },
  { path: "books/:id", component: BookDetailComponent },
  { path: "authors/:id", component: AuthorDetailComponent },
  { path: "users/:username", component: UserProfileComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "favorites", component: FavoritesComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "books" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient()
  ]
};

// src/app/services/ai.service.ts
var AIService = class _AIService {
  http = inject(HttpClient);
  apiUrl = "http://127.0.0.1:8000/api/chat/";
  sendMessage(message) {
    return this.http.post(this.apiUrl, { message });
  }
  static \u0275fac = function AIService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AIService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AIService, factory: _AIService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AIService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/components/navbar/navbar.ts
function NavbarComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 15);
    \u0275\u0275text(2, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 16);
    \u0275\u0275text(4, "Register");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function NavbarComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "a", 18)(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 21);
    \u0275\u0275listener("click", function NavbarComponent_div_19_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 22);
    \u0275\u0275element(9, "path", 23)(10, "polyline", 24)(11, "line", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, ctx_r1.username[0]), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.username);
  }
}
var NavbarComponent = class _NavbarComponent {
  searchService;
  auth;
  router;
  search = "";
  username = "";
  constructor(searchService, auth, router) {
    this.searchService = searchService;
    this.auth = auth;
    this.router = router;
  }
  ngOnInit() {
    this.username = localStorage.getItem("username") || "";
  }
  onSearchChange(value) {
    this.search = value;
    this.searchService.setSearch(value);
  }
  logout() {
    this.auth.logout();
    localStorage.removeItem("username");
    this.username = "";
  }
  static \u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarComponent)(\u0275\u0275directiveInject(SearchService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], decls: 20, vars: 2, consts: [[1, "navbar"], [1, "nav-inner"], [1, "nav-left"], ["routerLink", "/books", 1, "logo"], [1, "logo-icon"], ["src", "/icons/mainbook.png", "alt", "logo"], [1, "logo-text"], [1, "nav-links"], ["routerLink", "/books", "routerLinkActive", "active"], ["routerLink", "/authors", "routerLinkActive", "active"], ["routerLink", "/favorites", 1, "nav-link"], ["href", "#"], [1, "nav-right"], [4, "ngIf"], ["class", "user-chip", 4, "ngIf"], ["routerLink", "/login", 1, "auth-btn"], ["routerLink", "/register", 1, "auth-btn", "auth-btn--primary"], [1, "user-chip"], ["routerLink", "/profile", "title", "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043F\u0440\u043E\u0444\u0438\u043B\u044C", 1, "profile-link-btn"], [1, "avatar", "initials-avatar"], [1, "username-text"], ["title", "\u0412\u044B\u0439\u0442\u0438", 1, "logout-btn", 3, "click"], ["viewBox", "0 0 24 24", "width", "18", "height", "18", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"]], template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "span", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 6);
      \u0275\u0275text(7, "BookVerse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "a", 8);
      \u0275\u0275text(10, "Books");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 9);
      \u0275\u0275text(12, "Authors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 10);
      \u0275\u0275text(14, "Favorites");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 11);
      \u0275\u0275text(16, "Reviews");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 12);
      \u0275\u0275template(18, NavbarComponent_ng_container_18_Template, 5, 0, "ng-container", 13)(19, NavbarComponent_div_19_Template, 12, 4, "div", 14);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("ngIf", !ctx.username);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.username);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, RouterModule, RouterLink, RouterLinkActive, UpperCasePipe], styles: ['\n.navbar[_ngcontent-%COMP%] {\n  background: #fff;\n  border-bottom: 1px solid var(--border);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);\n}\n.initials-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #0b615a;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.logo-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  object-fit: contain;\n  display: block;\n}\n.auth-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 5px;\n  font-size: 15px;\n  text-decoration: none;\n  color: var(--color-text, #333);\n  border: 1px solid #ddd;\n  transition: background 0.2s;\n}\n.auth-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.auth-btn--primary[_ngcontent-%COMP%] {\n  background: rgba(47, 163, 159, 0.89);\n  color: #fff;\n  border-color: #177872;\n}\n.auth-btn--primary[_ngcontent-%COMP%]:hover {\n  background: #177872;\n}\n.nav-inner[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 24px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.nav-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 32px;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  margin-left: -50px;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: "Adobe Fan Heiti Std B";\n  font-weight: 1000;\n  color: #2cb8b3;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 40px;\n  margin-left: 70px;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #555;\n  font-size: 15px;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.nav-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.nav-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: auto;\n}\n.btn-signin[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #555;\n  font-size: 14px;\n  font-weight: 500;\n}\n.btn-start[_ngcontent-%COMP%] {\n  text-decoration: none;\n  background: var(--primary);\n  color: #fff;\n  padding: 8px 18px;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n  transition: background 0.2s;\n}\n.btn-start[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  cursor: pointer;\n  padding: 4px 10px;\n  border-radius: 24px;\n  border: 1.5px solid var(--border);\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.user-chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.chevron[_ngcontent-%COMP%] {\n  color: #aaa;\n  font-size: 12px;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: inherit;\n}\n.user-info[_ngcontent-%COMP%]:hover   .username-text[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #ffffff;\n  padding: 2px 8px;\n  border-radius: 50px;\n  border: 1px solid #e0e0e0;\n  gap: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.profile-link-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: #333;\n  padding: 4px 8px;\n  border-radius: 20px;\n  transition: background 0.2s;\n}\n.profile-link-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f2f5;\n}\n.username-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  max-width: 120px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  border-left: 1px solid #eee;\n  padding: 0;\n  padding-left: 10px;\n  margin-left: 5px;\n  display: flex;\n  align-items: center;\n  color: #ff4d4f;\n  cursor: pointer;\n  margin-top: -1px;\n  transition: transform 0.2s, color 0.2s;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  color: #cf1322;\n  transform: scale(1.15);\n}\n.initials-avatar[_ngcontent-%COMP%] {\n  width: 28px !important;\n  height: 28px !important;\n  background: #137874 !important;\n  font-size: 12px !important;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=navbar.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: '<nav class="navbar">\n    <div class="nav-inner">\n        <div class="nav-left">\n            <a routerLink="/books" class="logo">\n                <span class="logo-icon">\n                    <img src="/icons/mainbook.png" alt="logo">\n                </span>\n                <span class="logo-text">BookVerse</span>\n            </a>\n            <div class="nav-links">\n                <a routerLink="/books" routerLinkActive="active">Books</a>\n                <a routerLink="/authors" routerLinkActive="active">Authors</a>\n                <a routerLink="/favorites" class="nav-link">Favorites</a>\n                <a href="#">Reviews</a>\n            </div>\n        </div>\n        <div class="nav-right">\n            <ng-container *ngIf="!username">\n                <a routerLink="/login" class="auth-btn">Login</a>\n                <a routerLink="/register" class="auth-btn auth-btn--primary">Register</a>\n            </ng-container>\n\n            <div class="user-chip" *ngIf="username">\n                <a routerLink="/profile" class="profile-link-btn" title="\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043F\u0440\u043E\u0444\u0438\u043B\u044C">\n            <div class="avatar initials-avatar">\n                {{ username[0] | uppercase }}\n            </div>\n            <span class="username-text">{{ username }}</span>\n            </a>\n    \n    <button class="logout-btn" (click)="logout()" title="\u0412\u044B\u0439\u0442\u0438">\n        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>\n            <polyline points="16 17 21 12 16 7"></polyline>\n            <line x1="21" y1="12" x2="9" y2="12"></line>\n        </svg>\n    </button>\n</div>\n\n\n        </div>\n    </div>\n</nav>', styles: ['/* src/app/components/navbar/navbar.css */\n.navbar {\n  background: #fff;\n  border-bottom: 1px solid var(--border);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);\n}\n.initials-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #0b615a;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.logo-icon img {\n  width: 28px;\n  height: 28px;\n  object-fit: contain;\n  display: block;\n}\n.auth-btn {\n  padding: 8px 16px;\n  border-radius: 5px;\n  font-size: 15px;\n  text-decoration: none;\n  color: var(--color-text, #333);\n  border: 1px solid #ddd;\n  transition: background 0.2s;\n}\n.auth-btn:hover {\n  background: #f5f5f5;\n}\n.auth-btn--primary {\n  background: rgba(47, 163, 159, 0.89);\n  color: #fff;\n  border-color: #177872;\n}\n.auth-btn--primary:hover {\n  background: #177872;\n}\n.nav-inner {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 24px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.nav-left {\n  display: flex;\n  align-items: center;\n  gap: 32px;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  margin-left: -50px;\n}\n.logo-icon {\n  font-size: 22px;\n}\n.logo-text {\n  font-size: 24px;\n  font-family: "Adobe Fan Heiti Std B";\n  font-weight: 1000;\n  color: #2cb8b3;\n}\n.nav-links {\n  display: flex;\n  gap: 40px;\n  margin-left: 70px;\n}\n.nav-links a {\n  text-decoration: none;\n  color: #555;\n  font-size: 15px;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.nav-links a:hover,\n.nav-links a.active {\n  color: var(--primary);\n}\n.nav-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: auto;\n}\n.btn-signin {\n  text-decoration: none;\n  color: #555;\n  font-size: 14px;\n  font-weight: 500;\n}\n.btn-start {\n  text-decoration: none;\n  background: var(--primary);\n  color: #fff;\n  padding: 8px 18px;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n  transition: background 0.2s;\n}\n.btn-start:hover {\n  background: var(--primary-dark);\n}\n.user-chip {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  cursor: pointer;\n  padding: 4px 10px;\n  border-radius: 24px;\n  border: 1.5px solid var(--border);\n}\n.avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.user-chip span {\n  font-size: 14px;\n  font-weight: 500;\n}\n.chevron {\n  color: #aaa;\n  font-size: 12px;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: inherit;\n}\n.user-info:hover .username-text {\n  color: var(--primary);\n}\n.user-chip {\n  display: flex;\n  align-items: center;\n  background: #ffffff;\n  padding: 2px 8px;\n  border-radius: 50px;\n  border: 1px solid #e0e0e0;\n  gap: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.profile-link-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: #333;\n  padding: 4px 8px;\n  border-radius: 20px;\n  transition: background 0.2s;\n}\n.profile-link-btn:hover {\n  background: #f0f2f5;\n}\n.username-text {\n  font-weight: 600;\n  font-size: 14px;\n  max-width: 120px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.logout-btn {\n  background: none;\n  border: none;\n  border-left: 1px solid #eee;\n  padding: 0;\n  padding-left: 10px;\n  margin-left: 5px;\n  display: flex;\n  align-items: center;\n  color: #ff4d4f;\n  cursor: pointer;\n  margin-top: -1px;\n  transition: transform 0.2s, color 0.2s;\n}\n.logout-btn:hover {\n  color: #cf1322;\n  transform: scale(1.15);\n}\n.initials-avatar {\n  width: 28px !important;\n  height: 28px !important;\n  background: #137874 !important;\n  font-size: 12px !important;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=navbar.css.map */\n'] }]
  }], () => [{ type: SearchService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "app/components/navbar/navbar.ts", lineNumber: 16 });
})();

// src/app/app.ts
function App_app_navbar_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
  }
}
function App_div_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r2 = ctx.$implicit;
    \u0275\u0275property("ngClass", msg_r2.isUser ? "user-msg" : "ai-msg");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", msg_r2.text, " ");
  }
}
function App_div_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, "Typing...");
    \u0275\u0275elementEnd();
  }
}
function App_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2, "AI Assistant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275template(4, App_div_6_div_4_Template, 2, 2, "div", 8)(5, App_div_6_div_5_Template, 2, 0, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 10)(7, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function App_div_6_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.userInput, $event) || (ctx_r2.userInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function App_div_6_Template_input_keydown_enter_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendToAI());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 12);
    \u0275\u0275listener("click", function App_div_6_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendToAI());
    });
    \u0275\u0275text(9, ">");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.messages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.userInput);
  }
}
var App = class _App {
  aiService = inject(AIService);
  // Теперь inject будет работать
  router = inject(Router);
  title = signal("book-review", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  isAuthPage = false;
  isChatOpen = false;
  userInput = "";
  messages = [];
  isLoading = false;
  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.isAuthPage = this.router.url === "/login" || this.router.url === "/register";
    });
  }
  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }
  sendToAI() {
    if (!this.userInput.trim() || this.isLoading)
      return;
    const userMsg = this.userInput;
    this.messages.push({ text: userMsg, isUser: true });
    this.userInput = "";
    this.isLoading = true;
    this.aiService.sendMessage(userMsg).subscribe({
      next: (res) => {
        this.messages.push({ text: res.reply, isUser: false });
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Complete error:", err);
        this.messages.push({ text: "Error: " + err.message, isUser: false });
        this.isLoading = false;
      }
    });
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 7, vars: 6, consts: [[4, "ngIf"], [1, "ai-chat-container"], [1, "chat-toggle", 3, "click"], ["src", "assets/my-ai-logo.pnga", "alt", "AI", 1, "toggle-icon"], ["class", "chat-window", 4, "ngIf"], [1, "chat-window"], [1, "chat-header"], [1, "chat-body"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "ai-msg", 4, "ngIf"], [1, "chat-footer"], ["placeholder", "Ask about books...", 3, "ngModelChange", "keydown.enter", "ngModel"], [3, "click"], [3, "ngClass"], [1, "ai-msg"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div");
      \u0275\u0275template(1, App_app_navbar_1_Template, 1, 0, "app-navbar", 0);
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1)(4, "button", 2);
      \u0275\u0275listener("click", function App_Template_button_click_4_listener() {
        return ctx.toggleChat();
      });
      \u0275\u0275element(5, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, App_div_6_Template, 10, 3, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("auth-page", ctx.isAuthPage)("main-page", !ctx.isAuthPage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isAuthPage);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isChatOpen);
    }
  }, dependencies: [RouterOutlet, NavbarComponent, CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  font-family:\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n}\n[_ngcontent-%COMP%]:root {\n  --primary: #137874;\n  --primary-dark: #089090;\n  --text: #1a1a2e;\n  --text-muted: #888;\n  --border: #e8edf2;\n  --bg: #092643;\n  --card: #ffffff;\n  --radius: 12px;\n}\n.ai-chat-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 25px;\n  right: 25px;\n  z-index: 10000;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.chat-toggle[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 30px;\n  background: #137874;\n  background:\n    linear-gradient(\n      to right,\n      #137874,\n      #00d2ff);\n  color: white;\n  border: none;\n  cursor: pointer;\n  font-size: 28px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n  transition: transform 0.2s;\n}\n.chat-toggle[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.chat-window[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 80px;\n  right: 0;\n  width: 350px;\n  max-height: 500px;\n  background: white;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  border: 1px solid #eee;\n}\n.chat-header[_ngcontent-%COMP%] {\n  background: #137874;\n  color: white;\n  padding: 15px;\n  font-weight: bold;\n  font-size: 16px;\n}\n.chat-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  background: #f9f9f9;\n  min-height: 300px;\n}\n.user-msg[_ngcontent-%COMP%], \n.ai-msg[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 15px;\n  max-width: 85%;\n  font-size: 14px;\n  line-height: 1.4;\n}\n.user-msg[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  background: #137874;\n  color: white;\n  border-bottom-right-radius: 2px;\n}\n.ai-msg[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  background: #fff;\n  color: #333;\n  border: 1px solid #ddd;\n  border-bottom-left-radius: 2px;\n}\n.chat-footer[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 15px;\n  background: white;\n  border-top: 1px solid #eee;\n  gap: 8px;\n}\n.chat-footer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid #ddd;\n  padding: 10px;\n  border-radius: 20px;\n  outline: none;\n}\n.chat-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #137874;\n  color: white;\n  border: none;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=app.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, NavbarComponent, CommonModule, FormsModule], template: `<div [class.auth-page]="isAuthPage" [class.main-page]="!isAuthPage">
    <app-navbar *ngIf="!isAuthPage"></app-navbar>
    <router-outlet></router-outlet>
</div>

<div class="ai-chat-container">
    <button class="chat-toggle" (click)="toggleChat()">
    <img src="assets/my-ai-logo.pnga" alt="AI" class="toggle-icon">
</button>
    <div class="chat-window" *ngIf="isChatOpen">
        <div class="chat-header">AI Assistant</div>
        <div class="chat-body">
            <div *ngFor="let msg of messages" [ngClass]="msg.isUser ? 'user-msg' : 'ai-msg'">
                {{ msg.text }}
            </div>
            <div *ngIf="isLoading" class="ai-msg">Typing...</div>
        </div>
        <div class="chat-footer">
            <input [(ngModel)]="userInput" (keydown.enter)="sendToAI()" placeholder="Ask about books...">
            <button (click)="sendToAI()">></button>
        </div>
    </div>
</div>
`, styles: ['/* src/app/app.css */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  font-family:\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n}\n:root {\n  --primary: #137874;\n  --primary-dark: #089090;\n  --text: #1a1a2e;\n  --text-muted: #888;\n  --border: #e8edf2;\n  --bg: #092643;\n  --card: #ffffff;\n  --radius: 12px;\n}\n.ai-chat-container {\n  position: fixed;\n  bottom: 25px;\n  right: 25px;\n  z-index: 10000;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.chat-toggle {\n  width: 60px;\n  height: 60px;\n  border-radius: 30px;\n  background: #137874;\n  background:\n    linear-gradient(\n      to right,\n      #137874,\n      #00d2ff);\n  color: white;\n  border: none;\n  cursor: pointer;\n  font-size: 28px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n  transition: transform 0.2s;\n}\n.chat-toggle:hover {\n  transform: scale(1.1);\n}\n.chat-window {\n  position: absolute;\n  bottom: 80px;\n  right: 0;\n  width: 350px;\n  max-height: 500px;\n  background: white;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  border: 1px solid #eee;\n}\n.chat-header {\n  background: #137874;\n  color: white;\n  padding: 15px;\n  font-weight: bold;\n  font-size: 16px;\n}\n.chat-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  background: #f9f9f9;\n  min-height: 300px;\n}\n.user-msg,\n.ai-msg {\n  padding: 10px 14px;\n  border-radius: 15px;\n  max-width: 85%;\n  font-size: 14px;\n  line-height: 1.4;\n}\n.user-msg {\n  align-self: flex-end;\n  background: #137874;\n  color: white;\n  border-bottom-right-radius: 2px;\n}\n.ai-msg {\n  align-self: flex-start;\n  background: #fff;\n  color: #333;\n  border: 1px solid #ddd;\n  border-bottom-left-radius: 2px;\n}\n.chat-footer {\n  display: flex;\n  padding: 15px;\n  background: white;\n  border-top: 1px solid #eee;\n  gap: 8px;\n}\n.chat-footer input {\n  flex: 1;\n  border: 1px solid #ddd;\n  padding: 10px;\n  border-radius: 20px;\n  outline: none;\n}\n.chat-footer button {\n  background: #137874;\n  color: white;\n  border: none;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=app.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "app/app.ts", lineNumber: 16 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v21.2.6
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
