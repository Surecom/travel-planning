webpackJsonp([1,5],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_travel_model__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_travel_actions__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTravelModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddTravelModalComponent = (function () {
    function AddTravelModalComponent(dialogRef, store, formBuilder) {
        this.dialogRef = dialogRef;
        this.store = store;
        this.formBuilder = formBuilder;
        this.formErrors = {
            name: ''
        };
        this.validationMessages = {
            name: {
                required: 'Field is required',
                minlength: 'Minimum length is 3 chars',
                maxlength: 'Maximum length is 50 chars'
            }
        };
    }
    AddTravelModalComponent.prototype.ngOnInit = function () {
        this.travelForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* Validators */].maxLength(50)]]
        });
        this.travelForm.valueChanges.subscribe(this.validateForm.bind(this));
    };
    AddTravelModalComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    AddTravelModalComponent.prototype.onAdd = function (travelForm) {
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_travel_actions__["e" /* addTravel */])(new __WEBPACK_IMPORTED_MODULE_4__models_travel_model__["a" /* TravelModel */](travelForm.value)));
        this.travelForm.reset();
        this.dialogRef.close();
    };
    AddTravelModalComponent.prototype.validateForm = function () {
        var form = this.travelForm;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.pristine && !control.valid) {
                    var message = this.validationMessages[field];
                    for (var error in control.errors) {
                        if (control.errors.hasOwnProperty(error)) {
                            this.formErrors[field] += message[error] + " ";
                        }
                    }
                }
            }
        }
    };
    return AddTravelModalComponent;
}());
AddTravelModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[add-travel-modal]',
        template: __webpack_require__(438),
        styles: [__webpack_require__(408)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */]) === "function" && _c || Object])
], AddTravelModalComponent);

var _a, _b, _c;
//# sourceMappingURL=D:/Projects/travel-planning/src/add-travel-modal.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitiesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CitiesListComponent = (function () {
    function CitiesListComponent(store) {
        this.store = store;
    }
    CitiesListComponent.prototype.ngOnInit = function () {
        this.cities$ = this.store.select('travel').map(function (state) { return state.get('cities').toJS(); });
        this.loading$ = this.store.select('travel').map(function (state) { return state.get('loading'); });
    };
    return CitiesListComponent;
}());
CitiesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[cities-list]',
        template: __webpack_require__(439),
        styles: [__webpack_require__(409)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], CitiesListComponent);

var _a;
//# sourceMappingURL=D:/Projects/travel-planning/src/cities-list.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_city_model__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_city_actions__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_min_value_validator__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_number_validator__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CityAddComponent = (function () {
    function CityAddComponent(formBuilder, store) {
        this.formBuilder = formBuilder;
        this.store = store;
        this.formErrors = {
            title: '',
            from: '',
            to: '',
            cost: ''
        };
        this.validationMessages = {
            to: {
                required: 'Field is required'
            },
            from: {
                required: 'Field is required'
            },
            cost: {
                required: 'Field is required',
                minValueValidator: 'Cost must be more than 0',
                numberValidator: 'Cost must be number'
            },
            title: {
                required: 'Field is required',
                minlength: 'Minimum length is 3 chars',
                maxlength: 'Maximum length is 50 chars'
            }
        };
    }
    CityAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cities$ = this.store.select('travel').map(function (state) { return state.get('cities'); });
        this.cities$.subscribe(function (res) {
            _this.cities = res.toJS();
            if (_this.cityForm) {
                if (_this.cities.length > 0) {
                    _this.cityForm.get('to').setValue(_this.cities[_this.cities.length - 1].to);
                    _this.cityForm.get('from').setValue(_this.fromLimit = _this.cities[_this.cities.length - 1].to);
                    _this.cityForm.get('from').disable();
                }
                else if (_this.cities.length === 0) {
                    _this.cityForm.get('from').enable();
                    _this.cityForm.reset();
                    _this.fromLimit = null;
                }
            }
        });
        this.currentTravelId$ = this.store.select('travel').map(function (state) { return state.get('currentTravelId'); });
        this.currentTravelId$.subscribe(function (res) { return _this.currentTravelId = res; });
        this.cityForm = this.formBuilder.group({
            to: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            from: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            cost: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__validators_min_value_validator__["a" /* minValueValidator */])(0), __WEBPACK_IMPORTED_MODULE_6__validators_number_validator__["a" /* numberValidator */]]],
            title: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].maxLength(50)]],
            description: [''],
            travelId: ['']
        });
        this.cityForm.valueChanges.subscribe(this.validateForm.bind(this));
    };
    CityAddComponent.prototype.ngAfterViewInit = function () {
    };
    CityAddComponent.prototype.onAdd = function (cityForm) {
        cityForm.get('from').enable();
        cityForm.get('description').setValue(this.text);
        cityForm.get('travelId').setValue(this.currentTravelId);
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions_city_actions__["a" /* addCity */])(new __WEBPACK_IMPORTED_MODULE_3__models_city_model__["a" /* CityModel */](cityForm.value)));
        cityForm.reset();
    };
    CityAddComponent.prototype.onChangeHandler = function (text) {
        this.text = text;
    };
    CityAddComponent.prototype.validateForm = function () {
        var form = this.cityForm;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.pristine && !control.valid) {
                    var message = this.validationMessages[field];
                    for (var error in control.errors) {
                        if (control.errors.hasOwnProperty(error)) {
                            this.formErrors[field] += message[error] + " ";
                        }
                    }
                }
            }
        }
    };
    return CityAddComponent;
}());
CityAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[city-add]',
        template: __webpack_require__(440),
        styles: [__webpack_require__(410)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _b || Object])
], CityAddComponent);

var _a, _b;
//# sourceMappingURL=D:/Projects/travel-planning/src/city-add.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_min_value_validator__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_number_validator__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityCrossingModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CityCrossingModalComponent = (function () {
    function CityCrossingModalComponent(dialogRef, formBuilder) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.formErrors = {
            way: '',
            from: '',
            to: '',
            cost: ''
        };
        this.validationMessages = {
            to: {
                required: 'Field is required'
            },
            from: {
                required: 'Field is required'
            },
            cost: {
                required: 'Field is required',
                minValueValidator: 'Cost must be more than 0',
                numberValidator: 'Cost must be number'
            },
            way: {
                required: 'Field is required',
                minlength: 'Minimum length is 3 symbols',
                maxlength: 'Maximum length is 100 symbols'
            }
        };
    }
    CityCrossingModalComponent.prototype.ngOnInit = function () {
        this.transferForm = this.formBuilder.group({
            to: ['01:00', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            from: ['00:00', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            cityId: [''],
            cost: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__validators_min_value_validator__["a" /* minValueValidator */])(0), __WEBPACK_IMPORTED_MODULE_4__validators_number_validator__["a" /* numberValidator */]]],
            way: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].maxLength(100)]],
            info: ['']
        });
        this.transferForm.valueChanges.subscribe(this.validateForm.bind(this, this.transferForm));
    };
    CityCrossingModalComponent.prototype.addTransfer = function () {
        this.dialogRef.close(this.transferForm.value);
    };
    CityCrossingModalComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    CityCrossingModalComponent.prototype.validateForm = function (form) {
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var message = this.validationMessages[field];
                    for (var error in control.errors) {
                        if (control.errors.hasOwnProperty(error)) {
                            this.formErrors[field] += message[error] + " ";
                        }
                    }
                }
            }
        }
    };
    return CityCrossingModalComponent;
}());
CityCrossingModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'city-crossing-modal',
        template: __webpack_require__(441),
        styles: [__webpack_require__(411)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object])
], CityCrossingModalComponent);

var _a, _b;
//# sourceMappingURL=D:/Projects/travel-planning/src/city-crossing-modal.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_travel_actions__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImportModalComponent = (function () {
    function ImportModalComponent(dialogRef, store) {
        this.dialogRef = dialogRef;
        this.store = store;
    }
    ImportModalComponent.prototype.ngOnInit = function () {
    };
    ImportModalComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    ImportModalComponent.prototype.uploadFile = function (e) {
        var _this = this;
        var file = e.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, 'UTF-8');
            reader.onload = function (evt) {
                var importArr = __WEBPACK_IMPORTED_MODULE_2_crypto_js__["AES"].decrypt(evt.target.result, _this.dialogRef._containerInstance.dialogConfig.data).toString(__WEBPACK_IMPORTED_MODULE_2_crypto_js__["enc"].Utf8);
                var dump = JSON.parse(importArr);
                _this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions_travel_actions__["f" /* importTravel */])(dump));
            };
            reader.onerror = function (evt) {
                console.log('error reading file');
            };
        }
        this.dialogRef.close();
    };
    return ImportModalComponent;
}());
ImportModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[import-modal]',
        template: __webpack_require__(445),
        styles: [__webpack_require__(415)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _b || Object])
], ImportModalComponent);

var _a, _b;
//# sourceMappingURL=D:/Projects/travel-planning/src/import-modal.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferCheck; });
var TransferCheck = (function () {
    function TransferCheck(data) {
        if (data === void 0) { data = {}; }
        this.success = data.success || false;
        this.warning = data.warning || false;
        this.danger = data.danger || false;
        this.message = data.message || '';
    }
    return TransferCheck;
}());

//# sourceMappingURL=D:/Projects/travel-planning/src/trasfer-check.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelModel; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Andrei_Furs on 3/30/2017.
 */

var TravelModel = (function (_super) {
    __extends(TravelModel, _super);
    function TravelModel(model) {
        var _this = _super.call(this) || this;
        _this.name = model.name;
        return _this;
    }
    TravelModel.prototype.toModel = function () {
        return {
            id: this.id,
            name: this.name
        };
    };
    return TravelModel;
}(__WEBPACK_IMPORTED_MODULE_0__model__["a" /* Model */]));

//# sourceMappingURL=D:/Projects/travel-planning/src/travel.model.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SliderService = (function () {
    function SliderService() {
    }
    Object.defineProperty(SliderService.prototype, "defaultOptions", {
        get: function () {
            return {
                connect: true,
                step: 1000 * 60 * 60 * 24,
                margin: 1000 * 60 * 60 * 24,
                behaviour: 'tap-drag',
                tooltips: true,
                format: {
                    to: function (value) { return __WEBPACK_IMPORTED_MODULE_1_moment__(Math.floor(value)).format(__WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* TravelRouteConstants */].DATE_FORMAT); },
                    from: function (value) { return value; }
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderService.prototype, "currentOptions", {
        get: function () {
            return this._currentOptions;
        },
        set: function (value) {
            this._currentOptions = value;
        },
        enumerable: true,
        configurable: true
    });
    return SliderService;
}());
SliderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SliderService);

//# sourceMappingURL=D:/Projects/travel-planning/src/slider.service.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_transfer_model__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_city_model__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_transfer_action__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__city_crossing_modal_city_crossing_modal_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_constants__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_trasfer_check__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TransferListComponent = (function () {
    function TransferListComponent(dialog, store) {
        this.dialog = dialog;
        this.store = store;
    }
    TransferListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transfers$ = this.store
            .select('travel')
            .map(function (state) {
            var transfers = state.get('transfers').toJS();
            var transfersByCity = [];
            for (var i = 0; i < transfers.length; i++) {
                if (transfers[i].cityId === _this.city.id) {
                    transfersByCity.push(transfers[i]);
                }
            }
            return transfersByCity.sort(function (a, b) { return a.order - b.order; });
        });
        this.transfersLoading$ = this.store.select('travel').map(function (state) { return state.get('loading'); });
        this.transfers$.subscribe(function (transfers) {
            _this.countTransfers = transfers.length;
        });
    };
    TransferListComponent.prototype.getTotalTransferTime = function (from, to) {
        var tmpTo = +__WEBPACK_IMPORTED_MODULE_3_moment__(to, __WEBPACK_IMPORTED_MODULE_8__common_constants__["a" /* TravelRouteConstants */].TIME_FORMAT);
        var tmpFrom = +__WEBPACK_IMPORTED_MODULE_3_moment__(from, __WEBPACK_IMPORTED_MODULE_8__common_constants__["a" /* TravelRouteConstants */].TIME_FORMAT);
        var totalTime;
        if (tmpFrom > tmpTo) {
            totalTime = __WEBPACK_IMPORTED_MODULE_3_moment__(__WEBPACK_IMPORTED_MODULE_3_moment__('24:00', __WEBPACK_IMPORTED_MODULE_8__common_constants__["a" /* TravelRouteConstants */].TIME_FORMAT).diff(__WEBPACK_IMPORTED_MODULE_3_moment__(tmpFrom - tmpTo)));
        }
        else {
            totalTime = __WEBPACK_IMPORTED_MODULE_3_moment__(tmpTo - tmpFrom).utc();
        }
        return totalTime;
    };
    TransferListComponent.prototype.validateTransfers = function (transfer, last) {
        var result = new __WEBPACK_IMPORTED_MODULE_9__models_trasfer_check__["a" /* TransferCheck */]();
        if (this.previousTransfer && this.previousTransfer.cityId === transfer.cityId) {
            var timeBetweenTransfers = __WEBPACK_IMPORTED_MODULE_3_moment__["duration"](+this.getTotalTransferTime(this.previousTransfer.to, transfer.from)).asMinutes();
            var transferTime = __WEBPACK_IMPORTED_MODULE_3_moment__["duration"](+this.getTotalTransferTime(transfer.from, transfer.to)).asMinutes();
            this.totalHours += (timeBetweenTransfers + transferTime);
            this.previousTransfer = transfer;
            if (result.danger = (this.totalHours > __WEBPACK_IMPORTED_MODULE_8__common_constants__["a" /* TravelRouteConstants */].TRANSFERS.OVERLOAD_TIME ||
                timeBetweenTransfers > __WEBPACK_IMPORTED_MODULE_8__common_constants__["a" /* TravelRouteConstants */].TRANSFERS.MAX_TIME)) {
                result.message = 'Time between transfers is more than 3 hours or total transfers time is more than 48 hours.';
            }
            else if (result.warning = timeBetweenTransfers < __WEBPACK_IMPORTED_MODULE_8__common_constants__["a" /* TravelRouteConstants */].TRANSFERS.MIN_TIME) {
                result.message = 'Time between transfers is less than 1 hour.';
            }
            result.success = !(result.danger || result.warning);
        }
        else {
            this.previousTransfer = transfer;
            result.success = true;
        }
        if (last) {
            this.previousTransfer = null;
        }
        return result;
    };
    TransferListComponent.prototype.showAddCityTransferModal = function () {
        var _this = this;
        var transferModal = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__city_crossing_modal_city_crossing_modal_component__["a" /* CityCrossingModalComponent */], { disableClose: true });
        transferModal.afterClosed().subscribe(function (newTransfer) {
            if (newTransfer) {
                newTransfer.cityId = _this.city.id;
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_transfer_action__["c" /* AddTransfer */](new __WEBPACK_IMPORTED_MODULE_4__models_transfer_model__["a" /* TransferModel */](newTransfer, _this.countTransfers + 1)));
            }
        });
    };
    return TransferListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__models_city_model__["a" /* CityModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__models_city_model__["a" /* CityModel */]) === "function" && _a || Object)
], TransferListComponent.prototype, "city", void 0);
TransferListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[transfer-list]',
        template: __webpack_require__(451),
        styles: [__webpack_require__(421)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], TransferListComponent);

var _a, _b, _c;
//# sourceMappingURL=D:/Projects/travel-planning/src/transfer-list.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_db__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_crypto_js__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_city_actions__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__upload_modal_upload_modal_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_export_model__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__import_modal_import_modal_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_travel_actions__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelRouteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var TravelRouteComponent = (function () {
    function TravelRouteComponent(store, dialog, db) {
        this.store = store;
        this.dialog = dialog;
        this.db = db;
        this.key = 'PANDAS POWER ITS IMPOSSIBLE';
        this.isDisabled = false;
        this.currentTravelId = '';
        this.currentTravelIdChanged = true;
    }
    TravelRouteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__actions_travel_actions__["d" /* loadTravels */])());
        this.travels$ = this.store.select('travel').map(function (state) { return state.get('travels'); });
        this.travels$.subscribe(function (res) {
            var travels = res.toJS();
            if (travels.length > 0 && _this.currentTravelIdChanged) {
                _this.currentTravelIdChanged = false;
                _this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__actions_travel_actions__["b" /* setCurrentTravel */])(travels[0].id));
            }
        });
        this.currentTravelId$ = this.store.select('travel').map(function (state) { return state.get('currentTravelId'); });
        this.currentTravelId$.subscribe(function (res) { return _this.currentTravelId = res; });
    };
    TravelRouteComponent.prototype.disabled = function (result) {
        this.isDisabled = (result === 'disabled');
    };
    TravelRouteComponent.prototype.updateCities = function (dates) {
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__actions_city_actions__["d" /* updateCitiesDate */])(dates.map(function (date) { return date.toModel(); })));
    };
    TravelRouteComponent.prototype.showExportModal = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].forkJoin(this.db.query('cities').toArray(), this.db.query('transfers').toArray(), this.db.query('travels').toArray()).subscribe(function (res) { return _this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__upload_modal_upload_modal_component__["a" /* UploadModalComponent */], {
            disableClose: true,
            data: _this.prepareToExport(res[0], res[1], res[2]).toString()
        }); });
    };
    TravelRouteComponent.prototype.showImportModal = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__import_modal_import_modal_component__["a" /* ImportModalComponent */], { disableClose: true, data: this.key });
    };
    TravelRouteComponent.prototype.prepareToExport = function (cities, transfers, travels) {
        var json = [];
        var travel;
        for (var k = 0; k < travels.length; k++) {
            if (travels[k].id === this.currentTravelId) {
                travel = travels[k];
                break;
            }
        }
        for (var i = 0; i < cities.length; i++) {
            var tmp = new __WEBPACK_IMPORTED_MODULE_9__models_export_model__["a" /* CityExportModel */]();
            tmp.description = cities[i].description;
            tmp.from = cities[i].from;
            tmp.title = cities[i].title;
            tmp.to = cities[i].to;
            tmp.cost = cities[i].cost.toString();
            tmp.travelId = cities[i].travelId;
            for (var j = 0; j < transfers.length; j++) {
                if (transfers[j].cityId === cities[i].id) {
                    var tmpTransfer = new __WEBPACK_IMPORTED_MODULE_9__models_export_model__["b" /* TransferExportModel */]();
                    tmpTransfer.to = transfers[j].to;
                    tmpTransfer.from = transfers[j].from;
                    tmpTransfer.cost = transfers[j].cost.toString();
                    tmpTransfer.info = transfers[j].info;
                    tmpTransfer.way = transfers[j].way;
                    tmpTransfer.order = transfers[j].order.toString();
                    tmp.transfers.push(tmpTransfer);
                }
            }
            json.push(tmp);
        }
        var currentTravel = {
            json: json,
            travel: travel
        };
        return __WEBPACK_IMPORTED_MODULE_6_crypto_js__["AES"].encrypt(JSON.stringify(currentTravel), this.key);
    };
    return TravelRouteComponent;
}());
TravelRouteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[travel-route]',
        template: __webpack_require__(456),
        styles: [__webpack_require__(426)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_db__["b" /* Database */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_db__["b" /* Database */]) === "function" && _c || Object])
], TravelRouteComponent);

var _a, _b, _c;
//# sourceMappingURL=D:/Projects/travel-planning/src/travel-route.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadModalComponent = (function () {
    function UploadModalComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    UploadModalComponent.prototype.ngOnInit = function () {
    };
    UploadModalComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    UploadModalComponent.prototype.createAndOpenFile = function () {
        var fileContent = this.dialogRef._containerInstance.dialogConfig.data;
        var pom = document.createElement('a');
        var filename = 'export.txt';
        var bb = new Blob([fileContent], { type: 'text/plain' });
        pom.setAttribute('href', window.URL.createObjectURL(bb));
        pom.setAttribute('download', filename);
        pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
        pom.draggable = true;
        pom.classList.add('dragout');
        pom.click();
        this.dialogRef.close();
    };
    return UploadModalComponent;
}());
UploadModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'upload-modal',
        template: __webpack_require__(457),
        styles: [__webpack_require__(427)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialogRef */]) === "function" && _a || Object])
], UploadModalComponent);

var _a;
//# sourceMappingURL=D:/Projects/travel-planning/src/upload-modal.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "city-crossing-img.3f11b91f2d63700b3321.svg";

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelRouteConstants; });
/**
 * Created by Surecom-npm on 2/19/2017.
 */
/**
 * Created by Surecom-npm on 2/19/2017.
 */ var TravelRouteConstants = {
    DATE_FORMAT: 'Do MMM YY',
    TIME_FORMAT: 'HH:mm',
    TRANSFERS: {
        MIN_TIME: 60,
        MAX_TIME: 180,
        OVERLOAD_TIME: 2880
    }
};
//# sourceMappingURL=D:/Projects/travel-planning/src/constants.js.map

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 274;


/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(300);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Projects/travel-planning/src/main.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__travel_route_travel_route_component__ = __webpack_require__(121);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        redirectTo: '/travel',
        pathMatch: 'full'
    }, {
        path: 'travel',
        component: __WEBPACK_IMPORTED_MODULE_2__travel_route_travel_route_component__["a" /* TravelRouteComponent */]
    }, {
        path: '**', redirectTo: '/travel'
    }];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=D:/Projects/travel-planning/src/app-routing.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(437),
        styles: [__webpack_require__(407)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=D:/Projects/travel-planning/src/app.component.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__travel_route_travel_route_module__ = __webpack_require__(323);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__travel_route_travel_route_module__["a" /* TravelRouteModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=D:/Projects/travel-planning/src/app.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_city_model__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_city_actions__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityPointComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CityPointComponent = (function () {
    function CityPointComponent(store) {
        this.store = store;
        this.updateMark = false;
    }
    CityPointComponent.prototype.editCity = function () {
        this.updateMark = true;
    };
    CityPointComponent.prototype.updateCity = function (city) {
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions_city_actions__["b" /* updateCity */])(city));
        this.updateMark = false;
    };
    CityPointComponent.prototype.cancelUpdateCity = function () {
        this.updateMark = false;
    };
    CityPointComponent.prototype.removeCity = function (city) {
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions_city_actions__["c" /* removeCity */])(city));
    };
    return CityPointComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_city_model__["a" /* CityModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_city_model__["a" /* CityModel */]) === "function" && _a || Object)
], CityPointComponent.prototype, "city", void 0);
CityPointComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[city-point]',
        template: __webpack_require__(442),
        styles: [__webpack_require__(412)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _b || Object])
], CityPointComponent);

var _a, _b;
//# sourceMappingURL=D:/Projects/travel-planning/src/city-point.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_city_model__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_min_value_validator__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_number_validator__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityUpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CityUpdateComponent = (function () {
    function CityUpdateComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.formErrors = {
            title: '',
            description: '',
            cost: ''
        };
        this.validationMessages = {
            title: {
                required: 'Field is required',
                minlength: 'Minimum length is 3 symbols',
                maxlength: 'Maximum length is 100 symbols'
            },
            cost: {
                required: 'Field is required',
                minValueValidator: 'Cost must be more than 0',
                numberValidator: 'Cost must be number'
            }
        };
    }
    CityUpdateComponent.prototype.ngOnInit = function () {
        this.cityUpdateForm = this.formBuilder.group({
            id: [this.city.id],
            to: [this.city.to],
            from: [this.city.from],
            cost: [this.city.cost, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__validators_min_value_validator__["a" /* minValueValidator */])(0), __WEBPACK_IMPORTED_MODULE_4__validators_number_validator__["a" /* numberValidator */]]],
            title: [this.city.title, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].maxLength(100)]],
            description: [this.city.description]
        });
        this.cityUpdateForm.valueChanges.subscribe(this.validateForm.bind(this, this.cityUpdateForm));
    };
    CityUpdateComponent.prototype.updateAction = function () {
        this.cityUpdateForm.get('description').setValue(this.text);
        this.update.emit(this.cityUpdateForm.value);
    };
    CityUpdateComponent.prototype.onChangeHandler = function (text) {
        this.text = text;
    };
    CityUpdateComponent.prototype.validateForm = function (form) {
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var message = this.validationMessages[field];
                    for (var error in control.errors) {
                        if (control.errors.hasOwnProperty(error)) {
                            this.formErrors[field] += message[error] + " ";
                        }
                    }
                }
            }
        }
    };
    return CityUpdateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_city_model__["a" /* CityModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_city_model__["a" /* CityModel */]) === "function" && _a || Object)
], CityUpdateComponent.prototype, "city", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _b || Object)
], CityUpdateComponent.prototype, "update", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _c || Object)
], CityUpdateComponent.prototype, "cancel", void 0);
CityUpdateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[city-update]',
        template: __webpack_require__(443),
        styles: [__webpack_require__(413)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _d || Object])
], CityUpdateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=D:/Projects/travel-planning/src/city-update.component.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_city_model__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CityViewComponent = (function () {
    function CityViewComponent() {
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    CityViewComponent.prototype.ngOnInit = function () {
    };
    return CityViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_city_model__["a" /* CityModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_city_model__["a" /* CityModel */]) === "function" && _a || Object)
], CityViewComponent.prototype, "city", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _b || Object)
], CityViewComponent.prototype, "edit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _c || Object)
], CityViewComponent.prototype, "remove", void 0);
CityViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[city-view]',
        template: __webpack_require__(444),
        styles: [__webpack_require__(414)]
    }),
    __metadata("design:paramtypes", [])
], CityViewComponent);

var _a, _b, _c;
//# sourceMappingURL=D:/Projects/travel-planning/src/city-view.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flatpickr__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flatpickr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_flatpickr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_constants__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePickerDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatePickerDirective = (function () {
    function DatePickerDirective(el) {
        this.el = el;
    }
    DatePickerDirective.prototype.ngOnChanges = function () {
        if (this.datePicker) {
            if (this.maxDate) {
                this.datePicker.set('maxDate', __WEBPACK_IMPORTED_MODULE_2_moment__(this.maxDate, __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* TravelRouteConstants */].DATE_FORMAT)
                    .add(this.currentValue ? 1 : -1, 'day')
                    .format(__WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* TravelRouteConstants */].DATE_FORMAT));
            }
            if (this.minDate) {
                var tmp = __WEBPACK_IMPORTED_MODULE_2_moment__(this.minDate, __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* TravelRouteConstants */].DATE_FORMAT)
                    .add(1, 'day')
                    .format(__WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* TravelRouteConstants */].DATE_FORMAT);
                if (this.minDate === this.el.nativeElement.value) {
                    this.datePicker.setDate(tmp);
                }
                this.datePicker.set('minDate', tmp);
            }
            if (this.currentValue) {
                this.datePicker.setDate(this.currentValue);
            }
        }
    };
    DatePickerDirective.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_flatpickr__["prototype"].parseDate = function (date) { return new Date(+__WEBPACK_IMPORTED_MODULE_2_moment__(date, __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* TravelRouteConstants */].DATE_FORMAT)); };
        this.datePicker = new __WEBPACK_IMPORTED_MODULE_1_flatpickr__(this.el.nativeElement, {
            utc: true,
            dateFormat: __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* TravelRouteConstants */].DATE_FORMAT,
            formatDate: function (format, date) { return __WEBPACK_IMPORTED_MODULE_2_moment__(date).format(format); }
        });
    };
    DatePickerDirective.prototype.ngOnDestroy = function () {
        this.datePicker.destroy();
    };
    return DatePickerDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", String)
], DatePickerDirective.prototype, "minDate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", String)
], DatePickerDirective.prototype, "maxDate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", String)
], DatePickerDirective.prototype, "currentValue", void 0);
DatePickerDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[date-picker]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _a || Object])
], DatePickerDirective);

var _a;
//# sourceMappingURL=D:/Projects/travel-planning/src/date-picker.directive.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flatpickr__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flatpickr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_flatpickr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_constants__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimePickerDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TimePickerDirective = (function () {
    function TimePickerDirective(el) {
        this.el = el;
    }
    TimePickerDirective.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_flatpickr__["prototype"].parseDate = function (date) { return new Date(+__WEBPACK_IMPORTED_MODULE_2_moment__(date, __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* TravelRouteConstants */].TIME_FORMAT)); };
        this.datePicker = new __WEBPACK_IMPORTED_MODULE_1_flatpickr__(this.el.nativeElement, {
            utc: true,
            noCalendar: true,
            enableTime: true,
            hourIncrement: 1,
            minuteIncrement: 1,
            dateFormat: __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* TravelRouteConstants */].TIME_FORMAT,
            formatDate: function (format, date) { return __WEBPACK_IMPORTED_MODULE_2_moment__(date).format(format); }
        });
    };
    TimePickerDirective.prototype.ngOnDestroy = function () {
        this.datePicker.destroy();
    };
    return TimePickerDirective;
}());
TimePickerDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[time-picker]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _a || Object])
], TimePickerDirective);

var _a;
//# sourceMappingURL=D:/Projects/travel-planning/src/time-picker.directive.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schema; });
var schema = {
    version: 8,
    name: 'travel-planning',
    stores: {
        cities: {
            autoIncrement: true,
            primaryKey: 'id'
        },
        transfers: {
            autoIncrement: true,
            primaryKey: 'id'
        },
        travels: {
            autoIncrement: true,
            primaryKey: 'id'
        }
    }
};
//# sourceMappingURL=D:/Projects/travel-planning/src/db.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_db__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_defer__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_defer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_defer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toArray__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_city_actions__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityEffectsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CityEffectsService = (function () {
    function CityEffectsService(actions$, db, snackBar) {
        var _this = this;
        this.actions$ = actions$;
        this.db = db;
        this.snackBar = snackBar;
        this.openDB$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_defer__["defer"])(function () {
            return _this.db.open('travel-planning');
        });
        this.addCity$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_city_actions__["e" /* ActionTypes */].ADD_CITY)
            .map(function (city) { return city.payload.toModel(); })
            .mergeMap(function (city) {
            return _this.db.insert('cities', [city])
                .map(function () {
                _this.snackBar.open("City " + city.title + " added successfully!", null, { duration: 3000 });
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actions_city_actions__["f" /* addCitySuccess */])(city);
            });
        });
        this.updateCityDate$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_city_actions__["e" /* ActionTypes */].UPDATE_CITIES_DATES)
            .map(function (cityUpdateAction) { return cityUpdateAction.payload; })
            .mergeMap(function (cityUpdateModels) {
            return _this.db.query('cities')
                .toArray()
                .map(function (cities) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_lodash__["filter"])(cities, function (city) {
                    var newTo = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_lodash__["find"])(cityUpdateModels, function (model) { return city.to === model.oldDate; });
                    var newFrom = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_lodash__["find"])(cityUpdateModels, function (model) { return city.from === model.oldDate; });
                    if (newTo) {
                        city.to = newTo.newDate;
                    }
                    if (newFrom) {
                        city.from = newFrom.newDate;
                    }
                    return newTo || newFrom;
                });
            })
                .mergeMap(function (newCities) {
                return _this.db.insert('cities', newCities)
                    .toArray()
                    .map(function (updatedCities) {
                    _this.snackBar.open("Cities dates updated successfully!", null, { duration: 3000 });
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actions_city_actions__["g" /* updateCitiesDateSuccess */])(updatedCities);
                });
            });
        });
        this.removeCity$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_city_actions__["e" /* ActionTypes */].REMOVE_CITY)
            .map(function (city) { return city.payload; })
            .mergeMap(function (city) { return _this.db.query('transfers')
            .toArray()
            .mergeMap(function (transfers) {
            var transfersId = [];
            for (var i = 0; i < transfers.length; i++) {
                if (transfers[i].cityId === city.id) {
                    transfersId.push(transfers[i].id);
                }
            }
            if (transfersId.length > 0) {
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]
                    .forkJoin(_this.db.executeWrite('transfers', 'delete', transfersId), _this.db.executeWrite('cities', 'delete', [city.id]));
            }
            else {
                return _this.db.executeWrite('cities', 'delete', [city.id]);
            }
        })
            .toArray()
            .map(function () {
            _this.snackBar.open("City " + city.title + " removed successfully!", null, { duration: 3000 });
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actions_city_actions__["h" /* removeCitySuccess */])(city);
        }); });
        this.updateCity$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_city_actions__["e" /* ActionTypes */].UPDATE_CITY)
            .map(function (city) { return city.payload; })
            .mergeMap(function (cities) {
            return _this.db.insert('cities', [cities])
                .map(function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actions_city_actions__["i" /* updateCitySuccess */])(cities); });
        });
    }
    return CityEffectsService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], CityEffectsService.prototype, "openDB$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], CityEffectsService.prototype, "addCity$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) === "function" && _c || Object)
], CityEffectsService.prototype, "updateCityDate$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) === "function" && _d || Object)
], CityEffectsService.prototype, "removeCity$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) === "function" && _e || Object)
], CityEffectsService.prototype, "updateCity$", void 0);
CityEffectsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["c" /* Actions */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_db__["b" /* Database */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_db__["b" /* Database */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdSnackBar */]) === "function" && _h || Object])
], CityEffectsService);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=D:/Projects/travel-planning/src/city-effects.service.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_db__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_defer__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_defer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_defer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_transfer_action__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferEffectsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TransferEffectsService = (function () {
    function TransferEffectsService(actions$, db, snackBar) {
        var _this = this;
        this.actions$ = actions$;
        this.db = db;
        this.snackBar = snackBar;
        this.openDB$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_defer__["defer"])(function () {
            return _this.db.open('travel-planning');
        });
        this.addTransfer$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_transfer_action__["d" /* ActionTypes */].ADD_TRANSFER)
            .map(function (transfer) { return transfer.payload.toModel(); })
            .mergeMap(function (transfer) {
            return _this.db.insert('transfers', [transfer])
                .map(function () { return new __WEBPACK_IMPORTED_MODULE_8__actions_transfer_action__["e" /* AddTransferSuccess */](transfer); });
        });
        this.updateTransfer$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_transfer_action__["d" /* ActionTypes */].UPDATE_TRANSFER)
            .map(function (transfer) { return transfer.payload; })
            .mergeMap(function (transfers) {
            return _this.db.insert('transfers', [transfers])
                .map(function () { return new __WEBPACK_IMPORTED_MODULE_8__actions_transfer_action__["f" /* UpdateTransferSuccess */](transfers); });
        });
        this.removeTransfer$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_transfer_action__["d" /* ActionTypes */].REMOVE_TRANSFER)
            .map(function (transfer) { return transfer.payload; })
            .mergeMap(function (transfer) { return _this.db.executeWrite('transfers', 'delete', [transfer.id])
            .map(function () {
            _this.snackBar.open("Transfer " + transfer.way + " removed successfully!", null, { duration: 3000 });
            return new __WEBPACK_IMPORTED_MODULE_8__actions_transfer_action__["g" /* RemoveTransferSuccess */](transfer);
        }); });
    }
    return TransferEffectsService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], TransferEffectsService.prototype, "openDB$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], TransferEffectsService.prototype, "addTransfer$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) === "function" && _c || Object)
], TransferEffectsService.prototype, "updateTransfer$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) === "function" && _d || Object)
], TransferEffectsService.prototype, "removeTransfer$", void 0);
TransferEffectsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["c" /* Actions */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_db__["b" /* Database */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_db__["b" /* Database */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdSnackBar */]) === "function" && _g || Object])
], TransferEffectsService);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=D:/Projects/travel-planning/src/transfer-effects.service.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_db__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toArray__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_city_model__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_transfer_model__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_travel_actions__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelEffectsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Andrei_Furs on 3/23/2017.
 */










var TravelEffectsService = (function () {
    function TravelEffectsService(actions$, db, snackBar) {
        var _this = this;
        this.actions$ = actions$;
        this.db = db;
        this.snackBar = snackBar;
        this.loadTravels$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_travel_actions__["g" /* ActionTypes */].LOAD_TRAVELS)
            .switchMap(function () {
            return _this.db.query('travels')
                .toArray()
                .map(function (travels) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actions_travel_actions__["h" /* loadTravelsSuccess */])(travels); });
        });
        this.setCurrentTravel$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_travel_actions__["g" /* ActionTypes */].SET_CURRENT_TRAVEL)
            .map(function (travelId) { return travelId.payload; })
            .mergeMap(function (travelId) { return _this.db.query('cities')
            .toArray()
            .mergeMap(function (cities) {
            var tmpCities = [];
            for (var i = 0; i < cities.length; i++) {
                if (cities[i].travelId === travelId) {
                    tmpCities.push(cities[i]);
                }
            }
            return _this.db.query('transfers')
                .toArray()
                .map(function (transfers) {
                var tmpTransfers = [];
                for (var i = 0; i < tmpCities.length; i++) {
                    for (var j = 0; j < transfers.length; j++) {
                        if (transfers[j].cityId === tmpCities[i].id) {
                            tmpTransfers.push(transfers[j]);
                        }
                    }
                }
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actions_travel_actions__["i" /* setCurrentTravelSuccess */])(tmpCities, tmpTransfers);
            });
        }); });
        this.addTravel$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_travel_actions__["g" /* ActionTypes */].ADD_TRAVEL)
            .map(function (travel) { return travel.payload.toModel(); })
            .mergeMap(function (travel) {
            return _this.db.insert('travels', [travel])
                .map(function () {
                _this.snackBar.open("Travel " + travel.name + " added successfully!", null, { duration: 3000 });
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actions_travel_actions__["j" /* addTravelSuccess */])(travel);
            });
        });
        this.importTravel$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_travel_actions__["g" /* ActionTypes */].IMPORT_TRAVEL)
            .map(function (exportArr) { return exportArr.payload; })
            .mergeMap(function (exportArr) {
            var citiesArr = [];
            var transfersArr = [];
            for (var i = 0; i < exportArr.json.length; i++) {
                var tmpCity = new __WEBPACK_IMPORTED_MODULE_7__models_city_model__["a" /* CityModel */]({
                    to: exportArr.json[i].to,
                    from: exportArr.json[i].from,
                    title: exportArr.json[i].title,
                    description: exportArr.json[i].description,
                    cost: +exportArr.json[i].cost,
                    travelId: exportArr.json[i].travelId
                });
                citiesArr.push(tmpCity.toModel());
                if (exportArr.json[i].transfers.length > 0) {
                    for (var j = 0; j < exportArr.json[i].transfers.length; j++) {
                        var tmpTransfer = new __WEBPACK_IMPORTED_MODULE_8__models_transfer_model__["a" /* TransferModel */]({
                            cityId: tmpCity.id,
                            way: exportArr.json[i].transfers[j].way,
                            info: exportArr.json[i].transfers[j].info,
                            from: exportArr.json[i].transfers[j].from,
                            to: exportArr.json[i].transfers[j].to,
                            cost: +exportArr.json[i].transfers[j].cost,
                            order: +exportArr.json[i].transfers[j].order
                        });
                        transfersArr.push(tmpTransfer.toModel());
                    }
                }
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]
                .forkJoin(_this.db.insert('cities', citiesArr), _this.db.insert('transfers', transfersArr), _this.db.insert('travels', [exportArr.travel]))
                .map(function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actions_travel_actions__["k" /* importTravelSuccess */])(citiesArr, transfersArr, exportArr.travel); });
        });
        this.removeTravel$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_travel_actions__["g" /* ActionTypes */].REMOVE_TRAVEL)
            .map(function (travel) { return travel.payload; })
            .mergeMap(function (travel) { return _this.db.query('cities')
            .toArray()
            .mergeMap(function (cities) {
            var cityIds = [];
            for (var i = 0; i < cities.length; i++) {
                if (cities[i].travelId === travel.id) {
                    cityIds.push(cities[i].id);
                }
            }
            if (cityIds.length === 0) {
                return _this.db.executeWrite('travels', 'delete', [travel.id]);
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].forkJoin(_this.db.executeWrite('travels', 'delete', [travel.id]), _this.db.executeWrite('cities', 'delete', cityIds), _this.db.query('transfers')
                    .toArray()
                    .map(function (transfers) {
                    var transferIds = [];
                    for (var i = 0; i < cityIds.length; i++) {
                        for (var j = 0; j < transfers.length; j++) {
                            if (transfers[j].cityId === cityIds[i]) {
                                transferIds.push(transfers[j].id);
                            }
                        }
                    }
                    if (transferIds.length > 0) {
                        return _this.db.executeWrite('transfers', 'delete', transferIds);
                    }
                }));
            }
        })
            .toArray()
            .map(function () {
            _this.snackBar.open("Travel " + travel.name + " removed successfully!", null, { duration: 3000 });
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actions_travel_actions__["l" /* removeTravelSuccess */])(travel);
        }); });
        this.updateTravel$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_travel_actions__["g" /* ActionTypes */].UPDATE_TRAVEL)
            .map(function (travel) { return travel.payload; })
            .mergeMap(function (travels) {
            return _this.db.insert('travels', [travels])
                .map(function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actions_travel_actions__["m" /* updateTravelSuccess */])(travels); });
        });
    }
    return TravelEffectsService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], TravelEffectsService.prototype, "loadTravels$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], TravelEffectsService.prototype, "setCurrentTravel$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _c || Object)
], TravelEffectsService.prototype, "addTravel$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _d || Object)
], TravelEffectsService.prototype, "importTravel$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _e || Object)
], TravelEffectsService.prototype, "removeTravel$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _f || Object)
], TravelEffectsService.prototype, "updateTravel$", void 0);
TravelEffectsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_db__["b" /* Database */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_db__["b" /* Database */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MdSnackBar */]) === "function" && _j || Object])
], TravelEffectsService);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=D:/Projects/travel-planning/src/travel-effects.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loadTravels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return loadTravelsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return importTravel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return importTravelSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return addTravel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return addTravelSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setCurrentTravel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return setCurrentTravelSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return removeTravel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return removeTravelSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateTravel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return updateTravelSuccess; });
var ActionTypes = {
    ADD_TRAVEL: '[TRAVEL] ADD_TRAVEL',
    ADD_TRAVEL_SUCCESS: '[TRAVEL] ADD_TRAVEL_SUCCESS',
    LOAD_TRAVELS: '[TRAVEL] LOAD_TRAVELS',
    LOAD_TRAVELS_SUCCESS: '[TRAVEL] LOAD_TRAVELS_SUCCESS',
    SET_CURRENT_TRAVEL: '[TRAVEL] SET_CURRENT_TRAVEL',
    SET_CURRENT_TRAVEL_SUCCESS: '[TRAVEL] SET_CURRENT_TRAVEL_SUCCESS',
    REMOVE_TRAVEL: '[TRAVEL] REMOVE_TRAVEL',
    REMOVE_TRAVEL_SUCCESS: '[TRAVEL] REMOVE_TRAVEL_SUCCESS',
    UPDATE_TRAVEL: '[TRAVEL] UPDATE_TRAVEL',
    UPDATE_TRAVEL_SUCCESS: '[TRAVEL] UPDATE_TRAVEL_SUCCESS',
    IMPORT_TRAVEL: '[TRAVEL] IMPORT_TRAVEL',
    IMPORT_TRAVEL_SUCCESS: '[TRAVEL] IMPORT_TRAVEL_SUCCESS'
};
var loadTravels = function () {
    return {
        type: ActionTypes.LOAD_TRAVELS,
        payload: {}
    };
};
var loadTravelsSuccess = function (travels) {
    return {
        type: ActionTypes.LOAD_TRAVELS_SUCCESS,
        payload: travels
    };
};
var importTravel = function (dbElements) {
    return {
        type: ActionTypes.IMPORT_TRAVEL,
        payload: dbElements
    };
};
var importTravelSuccess = function (cities, transfers, travel) {
    return {
        type: ActionTypes.IMPORT_TRAVEL_SUCCESS,
        payload: {
            cities: cities,
            transfers: transfers,
            travel: travel
        }
    };
};
var addTravel = function (travel) {
    return {
        type: ActionTypes.ADD_TRAVEL,
        payload: travel
    };
};
var addTravelSuccess = function (travel) {
    return {
        type: ActionTypes.ADD_TRAVEL_SUCCESS,
        payload: travel
    };
};
var setCurrentTravel = function (travelId) {
    return {
        type: ActionTypes.SET_CURRENT_TRAVEL,
        payload: travelId
    };
};
var setCurrentTravelSuccess = function (cities, transfers) {
    return {
        type: ActionTypes.SET_CURRENT_TRAVEL_SUCCESS,
        payload: {
            cities: cities,
            transfers: transfers
        }
    };
};
var removeTravel = function (travel) {
    return {
        type: ActionTypes.REMOVE_TRAVEL,
        payload: travel
    };
};
var removeTravelSuccess = function (travel) {
    return {
        type: ActionTypes.REMOVE_TRAVEL_SUCCESS,
        payload: travel
    };
};
var updateTravel = function (travel) {
    return {
        type: ActionTypes.UPDATE_TRAVEL,
        payload: travel
    };
};
var updateTravelSuccess = function (travel) {
    return {
        type: ActionTypes.UPDATE_TRAVEL_SUCCESS,
        payload: travel
    };
};

//# sourceMappingURL=D:/Projects/travel-planning/src/travel.actions.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityDateUpdate; });
var CityDateUpdate = (function () {
    function CityDateUpdate(model) {
        this.oldDate = model.oldDate;
        this.newDate = model.newDate;
    }
    CityDateUpdate.prototype.toModel = function () {
        return {
            oldDate: this.oldDate,
            newDate: this.newDate
        };
    };
    return CityDateUpdate;
}());

//# sourceMappingURL=D:/Projects/travel-planning/src/city-date-update.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityExportModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TransferExportModel; });
/**
 * Created by Andrei_Furs on 3/16/2017.
 */
var CityExportModel = (function () {
    function CityExportModel() {
        this.cost = '';
        this.description = '';
        this.from = '';
        this.title = '';
        this.to = '';
        this.travelId = '';
        this.transfers = [];
    }
    return CityExportModel;
}());

var TransferExportModel = (function () {
    function TransferExportModel() {
        this.cost = '';
        this.info = '';
        this.from = '';
        this.way = '';
        this.to = '';
        this.order = '';
    }
    return TransferExportModel;
}());

//# sourceMappingURL=D:/Projects/travel-planning/src/export.model.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_city_actions__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_travel_actions__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_transfer_action__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_constants__ = __webpack_require__(18);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;







var initialState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["Map"])({
    loading: false,
    cities: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])(),
    transfers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])(),
    travels: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])(),
    currentTravelId: ''
});
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // Loaders
        case __WEBPACK_IMPORTED_MODULE_4__actions_travel_actions__["g" /* ActionTypes */].LOAD_TRAVELS: {
            return state.set('loading', true)
                .setIn(['travels'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])());
        }
        case __WEBPACK_IMPORTED_MODULE_4__actions_travel_actions__["g" /* ActionTypes */].LOAD_TRAVELS_SUCCESS: {
            return state.set('loading', false)
                .setIn(['travels'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])(action.payload));
        }
        // Updaters
        case __WEBPACK_IMPORTED_MODULE_5__actions_transfer_action__["d" /* ActionTypes */].UPDATE_TRANSFER: {
            return state.set('loading', true);
        }
        case __WEBPACK_IMPORTED_MODULE_5__actions_transfer_action__["d" /* ActionTypes */].UPDATE_TRANSFER_SUCCESS: {
            return state.set('loading', false)
                .updateIn(['transfers'], function (transfers) {
                var tmp = [];
                for (var i = 0; i < transfers.toJS().length; i++) {
                    tmp.push(transfers.toJS()[i].id === action.payload.id ? action.payload : transfers.toJS()[i]);
                }
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])(tmp);
            });
        }
        case __WEBPACK_IMPORTED_MODULE_3__actions_city_actions__["e" /* ActionTypes */].UPDATE_CITIES_DATES: {
            return state.set('loading', true);
        }
        case __WEBPACK_IMPORTED_MODULE_3__actions_city_actions__["e" /* ActionTypes */].UPDATE_CITIES_DATES_SUCCESS: {
            return state.set('loading', false)
                .updateIn(['cities'], function (cities) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["unionBy"])(action.payload, cities.toJS(), 'id'), function (city) { return +__WEBPACK_IMPORTED_MODULE_0_moment__(city.from, __WEBPACK_IMPORTED_MODULE_6__common_constants__["a" /* TravelRouteConstants */].DATE_FORMAT); })); });
        }
        case __WEBPACK_IMPORTED_MODULE_3__actions_city_actions__["e" /* ActionTypes */].UPDATE_CITY_SUCCESS: {
            return state.set('loading', false)
                .updateIn(['cities'], function (cities) {
                var tmp = [];
                for (var i = 0; i < cities.toJS().length; i++) {
                    tmp.push(cities.toJS()[i].id === action.payload.id ? action.payload : cities.toJS()[i]);
                }
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])(tmp);
            });
        }
        case __WEBPACK_IMPORTED_MODULE_4__actions_travel_actions__["g" /* ActionTypes */].UPDATE_TRAVEL_SUCCESS: {
            return state.set('loading', false)
                .updateIn(['travels'], function (travels) {
                var tmp = [];
                for (var i = 0; i < travels.toJS().length; i++) {
                    tmp.push(travels.toJS()[i].id === action.payload.id ? action.payload : travels.toJS()[i]);
                }
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])(tmp);
            });
        }
        // Adders
        case __WEBPACK_IMPORTED_MODULE_5__actions_transfer_action__["d" /* ActionTypes */].ADD_TRANSFER: {
            return state.set('loading', true);
        }
        case __WEBPACK_IMPORTED_MODULE_5__actions_transfer_action__["d" /* ActionTypes */].ADD_TRANSFER_SUCCESS: {
            return state.set('loading', false)
                .updateIn(['transfers'], function (transfers) { return transfers.push(action.payload); });
        }
        case __WEBPACK_IMPORTED_MODULE_3__actions_city_actions__["e" /* ActionTypes */].ADD_CITY_SUCCESS: {
            return state.set('loading', false)
                .updateIn(['cities'], function (cities) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"])(cities.push(action.payload).toJS(), function (city) { return +__WEBPACK_IMPORTED_MODULE_0_moment__(city.from, __WEBPACK_IMPORTED_MODULE_6__common_constants__["a" /* TravelRouteConstants */].DATE_FORMAT); })); });
        }
        case __WEBPACK_IMPORTED_MODULE_4__actions_travel_actions__["g" /* ActionTypes */].ADD_TRAVEL_SUCCESS: {
            return state.set('loading', false)
                .updateIn(['travels'], function (travels) { return travels.push(action.payload); });
        }
        // Removers
        case __WEBPACK_IMPORTED_MODULE_5__actions_transfer_action__["d" /* ActionTypes */].REMOVE_TRANSFER_SUCCESS: {
            return state.set('loading', false)
                .updateIn(['transfers'], function (transfers) { return transfers.filter(function (transfer) { return transfer.id !== action.payload.id; }) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])([]); });
        }
        case __WEBPACK_IMPORTED_MODULE_3__actions_city_actions__["e" /* ActionTypes */].REMOVE_CITY_SUCCESS: {
            return state.set('loading', false)
                .updateIn(['cities'], function (cities) { return cities.filter(function (city) { return city.id !== action.payload.id; }) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])([]); })
                .updateIn(['transfers'], function (transfers) { return transfers.filter(function (transfer) { return transfer.cityId !== action.payload.id; }) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])([]); });
        }
        case __WEBPACK_IMPORTED_MODULE_4__actions_travel_actions__["g" /* ActionTypes */].REMOVE_TRAVEL_SUCCESS: {
            return state.set('loading', false)
                .setIn(['cities'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])([]))
                .updateIn(['travels'], function (travels) { return travels.filter(function (travel) { return travel.id !== action.payload.id; }) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])([]); })
                .setIn(['transfers'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])([]));
        }
        // Importers
        case __WEBPACK_IMPORTED_MODULE_4__actions_travel_actions__["g" /* ActionTypes */].IMPORT_TRAVEL: {
            return state.set('loading', true);
        }
        case __WEBPACK_IMPORTED_MODULE_4__actions_travel_actions__["g" /* ActionTypes */].IMPORT_TRAVEL_SUCCESS: {
            return state.set('loading', false)
                .setIn(['currentTravelId'], action.payload.travel.id)
                .updateIn(['travels'], function (travels) { return travels.push(action.payload.travel); })
                .setIn(['cities'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"])(action.payload.cities, function (city) { return +__WEBPACK_IMPORTED_MODULE_0_moment__(city.from, __WEBPACK_IMPORTED_MODULE_6__common_constants__["a" /* TravelRouteConstants */].DATE_FORMAT); })))
                .setIn(['transfers'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])(action.payload.transfers));
        }
        // Setters
        case __WEBPACK_IMPORTED_MODULE_4__actions_travel_actions__["g" /* ActionTypes */].SET_CURRENT_TRAVEL: {
            return state.set('loading', true)
                .setIn(['currentTravelId'], action.payload);
        }
        case __WEBPACK_IMPORTED_MODULE_4__actions_travel_actions__["g" /* ActionTypes */].SET_CURRENT_TRAVEL_SUCCESS: {
            return state.set('loading', false)
                .setIn(['cities'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"])(action.payload.cities, function (city) { return +__WEBPACK_IMPORTED_MODULE_0_moment__(city.from, __WEBPACK_IMPORTED_MODULE_6__common_constants__["a" /* TravelRouteConstants */].DATE_FORMAT); })))
                .setIn(['transfers'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])(action.payload.transfers));
        }
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=D:/Projects/travel-planning/src/reducer.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nouislider__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_constants__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_slider_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_city_date_update__ = __webpack_require__(310);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SliderComponent = (function () {
    function SliderComponent(sliderService, store) {
        this.sliderService = sliderService;
        this.store = store;
        this.softLimitDays = 4;
        this.updateCities = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.days = 0;
    }
    SliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cities$ = this.store.select('travel').map(function (state) { return state.get('cities'); });
        this.cities$.subscribe(function (res) {
            var cities = res.toJS();
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash__["isEqual"])(_this.cities, cities)) {
                _this.cities = cities;
                _this.update();
            }
        });
    };
    SliderComponent.prototype.ngOnDestroy = function () {
        this.slider.nativeElement.noUiSlider.off('change');
        this.slider.nativeElement.noUiSlider.destroy();
    };
    SliderComponent.prototype.ngAfterViewInit = function () {
        if (this.days <= 1) {
            return;
        }
        this.update();
    };
    SliderComponent.prototype.update = function () {
        var ranges = [];
        if (this.cities.length > 0) {
            ranges = this.cities
                .map(function (city) {
                return Math.abs(__WEBPACK_IMPORTED_MODULE_4_moment__(city.to, __WEBPACK_IMPORTED_MODULE_5__common_constants__["a" /* TravelRouteConstants */].DATE_FORMAT).diff(__WEBPACK_IMPORTED_MODULE_4_moment__(city.from, __WEBPACK_IMPORTED_MODULE_5__common_constants__["a" /* TravelRouteConstants */].DATE_FORMAT), 'days'));
            });
            this.days = ranges.reduce(function (s, o) { return s + o; });
        }
        var start = [0].concat(ranges);
        for (var i = 0; i < this.cities.length; i++) {
            if (i === 0) {
                start[i] = +__WEBPACK_IMPORTED_MODULE_4_moment__(this.cities[i].from, __WEBPACK_IMPORTED_MODULE_5__common_constants__["a" /* TravelRouteConstants */].DATE_FORMAT).add(start[i], 'days');
            }
            start[i + 1] = +__WEBPACK_IMPORTED_MODULE_4_moment__(this.cities[i].from, __WEBPACK_IMPORTED_MODULE_5__common_constants__["a" /* TravelRouteConstants */].DATE_FORMAT).add(start[i + 1], 'days');
        }
        if (this.slider.nativeElement.noUiSlider) {
            this.slider.nativeElement.noUiSlider.destroy();
        }
        if (this.cities.length > 0) {
            this.createSlider(this.slider.nativeElement, start, this.days, this.softLimitDays);
        }
    };
    SliderComponent.prototype.createSlider = function (root, range, totalDays, softLimit) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_nouislider__["create"](root, this.sliderService.currentOptions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash__["assign"])(this.sliderService.defaultOptions, {
            start: range.slice(),
            range: {
                min: +__WEBPACK_IMPORTED_MODULE_4_moment__(range[0]).add(-softLimit, 'days'),
                max: +__WEBPACK_IMPORTED_MODULE_4_moment__(range[range.length - 1]).add(softLimit, 'days')
            },
            pips: {
                mode: 'count',
                values: 1,
                density: 100 / (totalDays + softLimit * 2)
            }
        }));
        root.noUiSlider.on('end', function (values) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash__["difference"])(_this.oldValueDates, values).length !== 0) {
                var updateModels = [];
                for (var i = 0; i < values.length; i++) {
                    if (values[i] !== _this.oldValueDates[i]) {
                        updateModels.push(new __WEBPACK_IMPORTED_MODULE_7__models_city_date_update__["a" /* CityDateUpdate */]({
                            newDate: values[i],
                            oldDate: _this.oldValueDates[i]
                        }));
                    }
                }
                _this.oldValueDates = values;
                _this.updateCities.emit(updateModels);
            }
        });
        root.noUiSlider.on('start', function (values) {
            _this.oldValueDates = values;
        });
        var connect = root.querySelectorAll('.noUi-connect');
        for (var i = 0; i < connect.length; i++) {
            connect[i].classList.add("c-" + (i + 1) + "-color");
        }
    };
    return SliderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], SliderComponent.prototype, "softLimitDays", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('slider'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _a || Object)
], SliderComponent.prototype, "slider", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _b || Object)
], SliderComponent.prototype, "updateCities", void 0);
SliderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[slider]',
        template: __webpack_require__(446),
        styles: [__webpack_require__(416)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_slider_service__["a" /* SliderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_slider_service__["a" /* SliderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _d || Object])
], SliderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=D:/Projects/travel-planning/src/slider.component.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextEditorComponent = (function () {
    function TextEditorComponent() {
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    TextEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        var editor = new MediumEditor(this.editor.nativeElement, {
            buttonLabels: 'fontawesome',
            toolbar: {
                buttons: ['bold', 'italic', 'underline', 'strikethrough',
                    'anchor',
                    'h1', 'h2', 'h3',
                    'quote', 'orderedlist', 'unorderedlist']
            },
            paste: {
                cleanPastedHTML: true
            },
            disableExtraSpaces: true,
            placeholder: !this.text || this.text.length === 0 ? {
                text: 'Optional parameter'
            } : false
        });
        editor.subscribe('editableInput', function (event, editable) {
            _this.onChange.emit(editable.innerHTML);
        });
    };
    return TextEditorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('editor'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _a || Object)
], TextEditorComponent.prototype, "editor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", String)
], TextEditorComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", String)
], TextEditorComponent.prototype, "text", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _b || Object)
], TextEditorComponent.prototype, "onChange", void 0);
TextEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[text-editor]',
        template: __webpack_require__(447),
        styles: [__webpack_require__(417)]
    }),
    __metadata("design:paramtypes", [])
], TextEditorComponent);

var _a, _b;
//# sourceMappingURL=D:/Projects/travel-planning/src/text-editor.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalCostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TotalCostComponent = (function () {
    function TotalCostComponent(store) {
        this.store = store;
        this.citiesCost = 0;
        this.transfersCost = 0;
    }
    TotalCostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cities$ = this.store.select('travel').map(function (state) { return state.get('cities'); });
        this.cities$.subscribe(function (res) {
            _this.cities = res.toJS();
            if (_this.cities.length > 0) {
                _this.citiesCost = _this.cities
                    .map(function (city) { return +city.cost; })
                    .reduce(function (s, o) { return s + o; });
            }
            else {
                _this.citiesCost = 0;
            }
        });
        this.transfers$ = this.store.select('travel').map(function (state) {
            var tmp = [];
            var transfers = state.get('transfers').toJS();
            for (var j = 0; j < transfers.length; j++) {
                tmp.push(transfers[j]);
            }
            return tmp;
        });
        this.transfers$.subscribe(function (res) {
            _this.transfers = res;
            if (_this.transfers.length > 0) {
                _this.transfersCost = _this.transfers
                    .map(function (transfer) { return +transfer.cost; })
                    .reduce(function (s, o) { return s + o; });
            }
            else {
                _this.transfersCost = 0;
            }
        });
    };
    return TotalCostComponent;
}());
TotalCostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[total-cost]',
        template: __webpack_require__(448),
        styles: [__webpack_require__(418)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], TotalCostComponent);

var _a;
//# sourceMappingURL=D:/Projects/travel-planning/src/total-cost.component.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_constants__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalDaysComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TotalDaysComponent = (function () {
    function TotalDaysComponent(store) {
        this.store = store;
        this.totalDays = 0;
    }
    TotalDaysComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cities$ = this.store.select('travel').map(function (state) { return state.get('cities'); });
        this.cities$.subscribe(function (res) {
            _this.cities = res.toJS();
            if (_this.cities.length > 0) {
                _this.totalDays = _this.cities
                    .map(function (city) { return __WEBPACK_IMPORTED_MODULE_1_moment__(city.to, __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* TravelRouteConstants */].DATE_FORMAT).diff(__WEBPACK_IMPORTED_MODULE_1_moment__(city.from, __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* TravelRouteConstants */].DATE_FORMAT), 'days'); })
                    .reduce(function (s, o) { return s + o; });
            }
            else {
                _this.totalDays = 0;
            }
        });
    };
    return TotalDaysComponent;
}());
TotalDaysComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[total-days]',
        template: __webpack_require__(449),
        styles: [__webpack_require__(419)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], TotalDaysComponent);

var _a;
//# sourceMappingURL=D:/Projects/travel-planning/src/total-days.component.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_transfer_model__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_min_value_validator__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_number_validator__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransferEditComponent = (function () {
    function TransferEditComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.formErrors = {
            way: '',
            from: '',
            to: '',
            cost: ''
        };
        this.validationMessages = {
            to: {
                required: 'Field is required'
            },
            from: {
                required: 'Field is required'
            },
            cost: {
                required: 'Field is required',
                minValueValidator: 'Cost must be more than 0',
                numberValidator: 'Cost must be number'
            },
            way: {
                required: 'Field is required',
                minlength: 'Minimum length is 3 symbols',
                maxlength: 'Maximum length is 100 symbols'
            }
        };
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    TransferEditComponent.prototype.ngOnInit = function () {
        this.transferUpdateForm = this.formBuilder.group({
            id: [this.transfer.id],
            to: [this.transfer.to, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            from: [this.transfer.from, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            cityId: [this.transfer.cityId],
            cost: [this.transfer.cost, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__validators_min_value_validator__["a" /* minValueValidator */])(0), __WEBPACK_IMPORTED_MODULE_4__validators_number_validator__["a" /* numberValidator */]]],
            way: [this.transfer.way, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].maxLength(100)]],
            info: [this.transfer.info],
            order: [this.transfer.order]
        });
        this.transferUpdateForm.valueChanges.subscribe(this.validateForm.bind(this, this.transferUpdateForm));
    };
    TransferEditComponent.prototype.updateAction = function () {
        this.transferUpdateForm.get('info').setValue(this.text);
        this.update.emit(this.transferUpdateForm.value);
    };
    TransferEditComponent.prototype.onChangeHandler = function (text) {
        this.text = text;
    };
    TransferEditComponent.prototype.validateForm = function (form) {
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var message = this.validationMessages[field];
                    for (var error in control.errors) {
                        if (control.errors.hasOwnProperty(error)) {
                            this.formErrors[field] += message[error] + " ";
                        }
                    }
                }
            }
        }
    };
    return TransferEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_transfer_model__["a" /* TransferModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_transfer_model__["a" /* TransferModel */]) === "function" && _a || Object)
], TransferEditComponent.prototype, "transfer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _b || Object)
], TransferEditComponent.prototype, "update", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _c || Object)
], TransferEditComponent.prototype, "cancel", void 0);
TransferEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[transfer-edit]',
        template: __webpack_require__(450),
        styles: [__webpack_require__(420)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _d || Object])
], TransferEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=D:/Projects/travel-planning/src/transfer-edit.component.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_transfer_model__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_transfer_action__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_trasfer_check__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferPointComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransferPointComponent = (function () {
    function TransferPointComponent(store) {
        this.store = store;
        this.updateMark = false;
    }
    TransferPointComponent.prototype.ngOnInit = function () { };
    TransferPointComponent.prototype.editTransfer = function () {
        this.updateMark = true;
    };
    TransferPointComponent.prototype.updateTransfer = function (transfer) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_transfer_action__["a" /* UpdateTransfer */](transfer));
        this.updateMark = false;
    };
    TransferPointComponent.prototype.cancelUpdateTransfer = function () {
        this.updateMark = false;
    };
    TransferPointComponent.prototype.removeTransfer = function (transfer) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_transfer_action__["b" /* RemoveTransfer */](transfer));
    };
    return TransferPointComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__models_trasfer_check__["a" /* TransferCheck */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__models_trasfer_check__["a" /* TransferCheck */]) === "function" && _a || Object)
], TransferPointComponent.prototype, "transferCheck", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_transfer_model__["a" /* TransferModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_transfer_model__["a" /* TransferModel */]) === "function" && _b || Object)
], TransferPointComponent.prototype, "transfer", void 0);
TransferPointComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[transfer-point]',
        template: __webpack_require__(452),
        styles: [__webpack_require__(422)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], TransferPointComponent);

var _a, _b, _c;
//# sourceMappingURL=D:/Projects/travel-planning/src/transfer-point.component.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_transfer_model__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transfer_list_transfer_list_component__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TransferViewComponent = (function () {
    function TransferViewComponent(transferList) {
        this.transferList = transferList;
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    TransferViewComponent.prototype.ngOnInit = function () { };
    TransferViewComponent.prototype.getTotalTransferTime = function (transfer) {
        var transferTime = this.transferList.getTotalTransferTime(transfer.from, transfer.to).format(__WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* TravelRouteConstants */].TIME_FORMAT);
        return "Total transfer time is " + transferTime;
    };
    return TransferViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_transfer_model__["a" /* TransferModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_transfer_model__["a" /* TransferModel */]) === "function" && _a || Object)
], TransferViewComponent.prototype, "transfer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", String)
], TransferViewComponent.prototype, "message", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _b || Object)
], TransferViewComponent.prototype, "edit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _c || Object)
], TransferViewComponent.prototype, "remove", void 0);
TransferViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[transfer-view]',
        template: __webpack_require__(453),
        styles: [__webpack_require__(423)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* SkipSelf */])()),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__transfer_list_transfer_list_component__["a" /* TransferListComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__transfer_list_transfer_list_component__["a" /* TransferListComponent */]) === "function" && _d || Object])
], TransferViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=D:/Projects/travel-planning/src/transfer-view.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityModel; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Surecom-npm on 2/19/2017.
 */

var CityModel = (function (_super) {
    __extends(CityModel, _super);
    function CityModel(cityModel) {
        var _this = _super.call(this) || this;
        _this.to = cityModel.to;
        _this.from = cityModel.from;
        _this.title = cityModel.title;
        _this.description = cityModel.description;
        _this.cost = cityModel.cost;
        _this.travelId = cityModel.travelId;
        return _this;
    }
    CityModel.prototype.toModel = function () {
        return {
            id: this.id,
            to: this.to,
            from: this.from,
            title: this.title,
            description: this.description,
            cost: this.cost,
            travelId: this.travelId
        };
    };
    return CityModel;
}(__WEBPACK_IMPORTED_MODULE_0__model__["a" /* Model */]));

//# sourceMappingURL=D:/Projects/travel-planning/src/city.model.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_travel_modal_add_travel_modal_component__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TravelListComponent = (function () {
    function TravelListComponent(dialog) {
        this.dialog = dialog;
        this.disableTab = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    TravelListComponent.prototype.ngOnChanges = function () {
        if (this.travels.toJS().length > 0) {
            this.disableTab.emit('enabled');
        }
        else {
            this.disableTab.emit('disabled');
        }
    };
    TravelListComponent.prototype.showAddTravelModal = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__add_travel_modal_add_travel_modal_component__["a" /* AddTravelModalComponent */], { disableClose: true });
    };
    return TravelListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_immutable__["List"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_immutable__["List"]) === "function" && _a || Object)
], TravelListComponent.prototype, "travels", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _b || Object)
], TravelListComponent.prototype, "disableTab", void 0);
TravelListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[travel-list]',
        template: __webpack_require__(454),
        styles: [__webpack_require__(424)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialog */]) === "function" && _c || Object])
], TravelListComponent);

var _a, _b, _c;
//# sourceMappingURL=D:/Projects/travel-planning/src/travel-list.component.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_travel_actions__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_travel_model__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelPointComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TravelPointComponent = (function () {
    function TravelPointComponent(store, formBuilder) {
        this.store = store;
        this.formBuilder = formBuilder;
        this.updateMark = false;
        this.formErrors = {
            name: ''
        };
        this.validationMessages = {
            name: {
                required: 'Field is required',
                minlength: 'Minimum length is 3 chars',
                maxlength: 'Maximum length is 50 chars'
            }
        };
    }
    TravelPointComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentTravelId$ = this.store.select('travel').map(function (state) { return state.get('currentTravelId'); });
        this.currentTravelId$.subscribe(function (res) { return _this.currentTravelId = res; });
        this.travelForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].maxLength(50)]]
        });
        this.travelForm.valueChanges.subscribe(this.validateForm.bind(this));
    };
    TravelPointComponent.prototype.removeTravel = function (event, travel) {
        event.stopPropagation();
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions_travel_actions__["a" /* removeTravel */])(travel));
    };
    TravelPointComponent.prototype.setCurrent = function () {
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions_travel_actions__["b" /* setCurrentTravel */])(this.travel.id));
    };
    TravelPointComponent.prototype.updateTravel = function (event) {
        event.stopPropagation();
        this.updateMark = true;
    };
    TravelPointComponent.prototype.cancel = function (event) {
        event.stopPropagation();
        this.updateMark = false;
    };
    TravelPointComponent.prototype.saveTravel = function (travel) {
        travel.name = this.travelForm.value['name'];
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions_travel_actions__["c" /* updateTravel */])(travel));
        this.updateMark = false;
    };
    TravelPointComponent.prototype.validateForm = function () {
        var form = this.travelForm;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.pristine && !control.valid) {
                    var message = this.validationMessages[field];
                    for (var error in control.errors) {
                        if (control.errors.hasOwnProperty(error)) {
                            this.formErrors[field] += message[error] + " ";
                        }
                    }
                }
            }
        }
    };
    return TravelPointComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__models_travel_model__["a" /* TravelModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__models_travel_model__["a" /* TravelModel */]) === "function" && _a || Object)
], TravelPointComponent.prototype, "travel", void 0);
TravelPointComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: '[travel-point]',
        template: __webpack_require__(455),
        styles: [__webpack_require__(425)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === "function" && _c || Object])
], TravelPointComponent);

var _a, _b, _c;
//# sourceMappingURL=D:/Projects/travel-planning/src/travel-point.component.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__city_add_city_add_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cities_list_cities_list_component__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelRouteRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: 'travel/city-list',
        component: __WEBPACK_IMPORTED_MODULE_3__cities_list_cities_list_component__["a" /* CitiesListComponent */]
    }, {
        path: 'travel/city-add',
        component: __WEBPACK_IMPORTED_MODULE_2__city_add_city_add_component__["a" /* CityAddComponent */],
        children: []
    }];
var TravelRouteRoutingModule = (function () {
    function TravelRouteRoutingModule() {
    }
    return TravelRouteRoutingModule;
}());
TravelRouteRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], TravelRouteRoutingModule);

//# sourceMappingURL=D:/Projects/travel-planning/src/travel-route-routing.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_db__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store_devtools__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__db__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reducers_reducer__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__travel_route_routing_module__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__travel_route_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__slider_slider_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_slider_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__city_point_city_point_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__city_add_city_add_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__effects_city_effects_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__cities_list_cities_list_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__transfer_list_transfer_list_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__city_crossing_modal_city_crossing_modal_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__effects_transfer_effects_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__total_days_total_days_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__city_view_city_view_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__city_update_city_update_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__text_editor_text_editor_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__date_time_pickers_date_picker_directive__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__date_time_pickers_time_picker_directive__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__transfer_view_transfer_view_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__transfer_edit_transfer_edit_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__transfer_point_transfer_point_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__total_cost_total_cost_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__upload_modal_upload_modal_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__import_modal_import_modal_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__effects_travel_effects__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__travel_list_travel_list_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__travel_point_travel_point_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__add_travel_modal_add_travel_modal_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_platform_browser_animations__ = __webpack_require__(285);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelRouteModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var TravelRouteModule = (function () {
    function TravelRouteModule() {
    }
    return TravelRouteModule;
}());
TravelRouteModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_37__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10__travel_route_routing_module__["a" /* TravelRouteRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* StoreModule */].provideStore({
                travel: __WEBPACK_IMPORTED_MODULE_9__reducers_reducer__["a" /* reducer */]
            }),
            __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_16__effects_city_effects_service__["a" /* CityEffectsService */]),
            __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_20__effects_transfer_effects_service__["a" /* TransferEffectsService */]),
            __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_33__effects_travel_effects__["a" /* TravelEffectsService */]),
            __WEBPACK_IMPORTED_MODULE_5__ngrx_db__["a" /* DBModule */].provideDB(__WEBPACK_IMPORTED_MODULE_8__db__["a" /* schema */]),
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension(),
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MdTooltipModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_19__city_crossing_modal_city_crossing_modal_component__["a" /* CityCrossingModalComponent */],
            __WEBPACK_IMPORTED_MODULE_31__upload_modal_upload_modal_component__["a" /* UploadModalComponent */],
            __WEBPACK_IMPORTED_MODULE_32__import_modal_import_modal_component__["a" /* ImportModalComponent */],
            __WEBPACK_IMPORTED_MODULE_36__add_travel_modal_add_travel_modal_component__["a" /* AddTravelModalComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__travel_route_component__["a" /* TravelRouteComponent */],
            __WEBPACK_IMPORTED_MODULE_12__slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_14__city_point_city_point_component__["a" /* CityPointComponent */],
            __WEBPACK_IMPORTED_MODULE_15__city_add_city_add_component__["a" /* CityAddComponent */],
            __WEBPACK_IMPORTED_MODULE_17__cities_list_cities_list_component__["a" /* CitiesListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__transfer_list_transfer_list_component__["a" /* TransferListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__city_crossing_modal_city_crossing_modal_component__["a" /* CityCrossingModalComponent */],
            __WEBPACK_IMPORTED_MODULE_21__total_days_total_days_component__["a" /* TotalDaysComponent */],
            __WEBPACK_IMPORTED_MODULE_22__city_view_city_view_component__["a" /* CityViewComponent */],
            __WEBPACK_IMPORTED_MODULE_23__city_update_city_update_component__["a" /* CityUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_24__text_editor_text_editor_component__["a" /* TextEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_25__date_time_pickers_date_picker_directive__["a" /* DatePickerDirective */],
            __WEBPACK_IMPORTED_MODULE_26__date_time_pickers_time_picker_directive__["a" /* TimePickerDirective */],
            __WEBPACK_IMPORTED_MODULE_27__transfer_view_transfer_view_component__["a" /* TransferViewComponent */],
            __WEBPACK_IMPORTED_MODULE_28__transfer_edit_transfer_edit_component__["a" /* TransferEditComponent */],
            __WEBPACK_IMPORTED_MODULE_29__transfer_point_transfer_point_component__["a" /* TransferPointComponent */],
            __WEBPACK_IMPORTED_MODULE_30__total_cost_total_cost_component__["a" /* TotalCostComponent */],
            __WEBPACK_IMPORTED_MODULE_31__upload_modal_upload_modal_component__["a" /* UploadModalComponent */],
            __WEBPACK_IMPORTED_MODULE_32__import_modal_import_modal_component__["a" /* ImportModalComponent */],
            __WEBPACK_IMPORTED_MODULE_34__travel_list_travel_list_component__["a" /* TravelListComponent */],
            __WEBPACK_IMPORTED_MODULE_35__travel_point_travel_point_component__["a" /* TravelPointComponent */],
            __WEBPACK_IMPORTED_MODULE_36__add_travel_modal_add_travel_modal_component__["a" /* AddTravelModalComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_11__travel_route_component__["a" /* TravelRouteComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_slider_service__["a" /* SliderService */]]
    })
], TravelRouteModule);

//# sourceMappingURL=D:/Projects/travel-planning/src/travel-route.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Projects/travel-planning/src/environment.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateCitiesDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateCitiesDateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return updateCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return updateCitySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return addCitySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return removeCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return removeCitySuccess; });
var ActionTypes = {
    ADD_CITY: '[CITY] ADD_CITY',
    ADD_CITY_SUCCESS: '[CITY] ADD_CITY_SUCCESS',
    REMOVE_CITY: '[CITY] REMOVE_CITY',
    REMOVE_CITY_SUCCESS: '[CITY] REMOVE_CITY_SUCCESS',
    UPDATE_CITIES_DATES: '[CITY] UPDATE_CITIES_DATES',
    UPDATE_CITIES_DATES_SUCCESS: '[CITY] UPDATE_CITIES_DATES_SUCCESS',
    UPDATE_CITY: '[CITY] UPDATE_CITY',
    UPDATE_CITY_SUCCESS: '[CITY] UPDATE_CITY_SUCCESS'
};
var addCity = function (city) {
    return {
        type: ActionTypes.ADD_CITY,
        payload: city
    };
};
var addCitySuccess = function (city) {
    return {
        type: ActionTypes.ADD_CITY_SUCCESS,
        payload: city
    };
};
var updateCitiesDate = function (citiesDate) {
    return {
        type: ActionTypes.UPDATE_CITIES_DATES,
        payload: citiesDate
    };
};
var updateCitiesDateSuccess = function (citiesDate) {
    return {
        type: ActionTypes.UPDATE_CITIES_DATES_SUCCESS,
        payload: citiesDate
    };
};
var updateCity = function (city) {
    return {
        type: ActionTypes.UPDATE_CITY,
        payload: city
    };
};
var updateCitySuccess = function (city) {
    return {
        type: ActionTypes.UPDATE_CITY_SUCCESS,
        payload: city
    };
};
var removeCity = function (city) {
    return {
        type: ActionTypes.REMOVE_CITY,
        payload: city
    };
};
var removeCitySuccess = function (city) {
    return {
        type: ActionTypes.REMOVE_CITY_SUCCESS,
        payload: city
    };
};

//# sourceMappingURL=D:/Projects/travel-planning/src/city.actions.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferModel; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Aliaksandr_Hladchank on 22-Feb-17.
 */

var TransferModel = (function (_super) {
    __extends(TransferModel, _super);
    function TransferModel(model, order) {
        var _this = _super.call(this) || this;
        _this.cityId = model.cityId;
        _this.way = model.way;
        _this.info = model.info;
        _this.from = model.from;
        _this.to = model.to;
        _this.cost = model.cost;
        _this.order = order || model.order;
        return _this;
    }
    TransferModel.prototype.toModel = function () {
        return {
            id: this.id,
            cityId: this.cityId,
            way: this.way,
            info: this.info,
            from: this.from,
            to: this.to,
            cost: this.cost,
            order: this.order
        };
    };
    return TransferModel;
}(__WEBPACK_IMPORTED_MODULE_0__model__["a" /* Model */]));

//# sourceMappingURL=D:/Projects/travel-planning/src/transfer.model.js.map

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ":host /deep/ div:nth-child(8n+1) div.city-point {\n  border-left-color: #d9534f; }\n  :host /deep/ div:nth-child(8n+1) div.city-point:hover {\n    background-color: #f9e2e2; }\n    :host /deep/ div:nth-child(8n+1) div.city-point:hover table.medium-editor-table, :host /deep/ div:nth-child(8n+1) div.city-point:hover table.medium-editor-table td {\n      border: 1px dashed #636c72; }\n  :host /deep/ div:nth-child(8n+1) div.city-point button[md-button] /deep/ .mat-ripple-element {\n    background-color: rgba(217, 83, 79, 0.1); }\n  :host /deep/ div:nth-child(8n+1) div.city-point button[md-button] /deep/ .mat-button-focus-overlay {\n    background-color: rgba(217, 83, 79, 0.12); }\n\n:host /deep/ div:nth-child(8n+2) div.city-point {\n  border-left-color: #f0ad4e; }\n  :host /deep/ div:nth-child(8n+2) div.city-point:hover {\n    background-color: #fef9f3; }\n    :host /deep/ div:nth-child(8n+2) div.city-point:hover table.medium-editor-table, :host /deep/ div:nth-child(8n+2) div.city-point:hover table.medium-editor-table td {\n      border: 1px dashed #636c72; }\n  :host /deep/ div:nth-child(8n+2) div.city-point button[md-button] /deep/ .mat-ripple-element {\n    background-color: rgba(240, 173, 78, 0.1); }\n  :host /deep/ div:nth-child(8n+2) div.city-point button[md-button] /deep/ .mat-button-focus-overlay {\n    background-color: rgba(240, 173, 78, 0.12); }\n\n:host /deep/ div:nth-child(8n+3) div.city-point {\n  border-left-color: #ffd500; }\n  :host /deep/ div:nth-child(8n+3) div.city-point:hover {\n    background-color: #fff2b3; }\n    :host /deep/ div:nth-child(8n+3) div.city-point:hover table.medium-editor-table, :host /deep/ div:nth-child(8n+3) div.city-point:hover table.medium-editor-table td {\n      border: 1px dashed #636c72; }\n  :host /deep/ div:nth-child(8n+3) div.city-point button[md-button] /deep/ .mat-ripple-element {\n    background-color: rgba(255, 213, 0, 0.1); }\n  :host /deep/ div:nth-child(8n+3) div.city-point button[md-button] /deep/ .mat-button-focus-overlay {\n    background-color: rgba(255, 213, 0, 0.12); }\n\n:host /deep/ div:nth-child(8n+4) div.city-point {\n  border-left-color: #5cb85c; }\n  :host /deep/ div:nth-child(8n+4) div.city-point:hover {\n    background-color: #d8eed8; }\n    :host /deep/ div:nth-child(8n+4) div.city-point:hover table.medium-editor-table, :host /deep/ div:nth-child(8n+4) div.city-point:hover table.medium-editor-table td {\n      border: 1px dashed #636c72; }\n  :host /deep/ div:nth-child(8n+4) div.city-point button[md-button] /deep/ .mat-ripple-element {\n    background-color: rgba(92, 184, 92, 0.1); }\n  :host /deep/ div:nth-child(8n+4) div.city-point button[md-button] /deep/ .mat-button-focus-overlay {\n    background-color: rgba(92, 184, 92, 0.12); }\n\n:host /deep/ div:nth-child(8n+5) div.city-point {\n  border-left-color: #0275d8; }\n  :host /deep/ div:nth-child(8n+5) div.city-point:hover {\n    background-color: #8fcafe; }\n    :host /deep/ div:nth-child(8n+5) div.city-point:hover table.medium-editor-table, :host /deep/ div:nth-child(8n+5) div.city-point:hover table.medium-editor-table td {\n      border: 1px dashed #636c72; }\n  :host /deep/ div:nth-child(8n+5) div.city-point button[md-button] /deep/ .mat-ripple-element {\n    background-color: rgba(2, 117, 216, 0.1); }\n  :host /deep/ div:nth-child(8n+5) div.city-point button[md-button] /deep/ .mat-button-focus-overlay {\n    background-color: rgba(2, 117, 216, 0.12); }\n\n:host /deep/ div:nth-child(8n+6) div.city-point {\n  border-left-color: #5bc0de; }\n  :host /deep/ div:nth-child(8n+6) div.city-point:hover {\n    background-color: #f0f9fc; }\n    :host /deep/ div:nth-child(8n+6) div.city-point:hover table.medium-editor-table, :host /deep/ div:nth-child(8n+6) div.city-point:hover table.medium-editor-table td {\n      border: 1px dashed #636c72; }\n  :host /deep/ div:nth-child(8n+6) div.city-point button[md-button] /deep/ .mat-ripple-element {\n    background-color: rgba(91, 192, 222, 0.1); }\n  :host /deep/ div:nth-child(8n+6) div.city-point button[md-button] /deep/ .mat-button-focus-overlay {\n    background-color: rgba(91, 192, 222, 0.12); }\n\n:host /deep/ div:nth-child(8n+7) div.city-point {\n  border-left-color: #ff5b77; }\n  :host /deep/ div:nth-child(8n+7) div.city-point:hover {\n    background-color: white; }\n    :host /deep/ div:nth-child(8n+7) div.city-point:hover table.medium-editor-table, :host /deep/ div:nth-child(8n+7) div.city-point:hover table.medium-editor-table td {\n      border: 1px dashed #636c72; }\n  :host /deep/ div:nth-child(8n+7) div.city-point button[md-button] /deep/ .mat-ripple-element {\n    background-color: rgba(255, 91, 119, 0.1); }\n  :host /deep/ div:nth-child(8n+7) div.city-point button[md-button] /deep/ .mat-button-focus-overlay {\n    background-color: rgba(255, 91, 119, 0.12); }\n\n:host /deep/ div:nth-child(8n+8) div.city-point {\n  border-left-color: #613d7c; }\n  :host /deep/ div:nth-child(8n+8) div.city-point:hover {\n    background-color: #b99dcf; }\n    :host /deep/ div:nth-child(8n+8) div.city-point:hover table.medium-editor-table, :host /deep/ div:nth-child(8n+8) div.city-point:hover table.medium-editor-table td {\n      border: 1px dashed #636c72; }\n  :host /deep/ div:nth-child(8n+8) div.city-point button[md-button] /deep/ .mat-ripple-element {\n    background-color: rgba(97, 61, 124, 0.1); }\n  :host /deep/ div:nth-child(8n+8) div.city-point button[md-button] /deep/ .mat-button-focus-overlay {\n    background-color: rgba(97, 61, 124, 0.12); }\n\n@media print {\n  .page-break {\n    display: inline-block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "input.flatpickr.form-control[readonly]:not([disabled]) {\n  background-color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "button:focus {\n  outline: none; }\n\nhr {\n  background: #0275d8; }\n\ninput.flatpickr.form-control[readonly]:not([disabled]) {\n  background-color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".city-point {\n  padding: 1.25rem;\n  margin-top: 1.25rem;\n  margin-bottom: .25rem;\n  border: 1px solid #eee;\n  border-left-width: .25rem;\n  border-radius: .25rem; }\n  .city-point .city-point-info {\n    position: relative;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n\n.controls {\n  z-index: 2;\n  margin-left: 1rem; }\n  .controls button.control {\n    margin-bottom: .25rem; }\n    .controls button.control /deep/ span {\n      text-transform: uppercase;\n      font-weight: bold; }\n    .controls button.control:focus {\n      outline: none; }\n\n@media print {\n  .city-point {\n    padding-bottom: 0;\n    padding-top: 5px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".city-point {\n  padding: 1.25rem;\n  margin-top: 1.25rem;\n  margin-bottom: .25rem;\n  border: 1px solid #eee;\n  border-left-width: .25rem;\n  border-radius: .25rem; }\n  .city-point .city-point-info {\n    position: relative;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n\n.controls {\n  z-index: 2;\n  margin-left: 1rem; }\n  .controls button.control {\n    margin-bottom: .25rem; }\n    .controls button.control /deep/ span {\n      text-transform: uppercase;\n      font-weight: bold; }\n    .controls button.control:focus {\n      outline: none; }\n\n@media print {\n  .city-point {\n    padding-bottom: 0;\n    padding-top: 5px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".city-point {\n  padding: 1.25rem;\n  margin-top: 1.25rem;\n  margin-bottom: .25rem;\n  border: 1px solid #eee;\n  border-left-width: .25rem;\n  border-radius: .25rem; }\n  .city-point .city-point-info {\n    position: relative;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n\n.controls {\n  z-index: 2;\n  margin-left: 1rem; }\n  .controls button.control {\n    margin-bottom: .25rem; }\n    .controls button.control /deep/ span {\n      text-transform: uppercase;\n      font-weight: bold; }\n    .controls button.control:focus {\n      outline: none; }\n\n@media print {\n  .city-point {\n    padding-bottom: 0;\n    padding-top: 5px; } }\n\n@media print {\n  .controls {\n    display: none !important; }\n  .city-point-info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .city-point-info div {\n      -webkit-box-ordinal-group: 4;\n          -ms-flex-order: 3;\n              order: 3; }\n    .city-point-info h2 {\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2;\n      font-size: .5cm; }\n    .city-point-info h1 {\n      font-size: .5cm; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".d-dialog {\n  max-width: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "/deep/ .c-1-color {\n  background: #d9534f; }\n\n/deep/ .c-2-color {\n  background: #f0ad4e; }\n\n/deep/ .c-3-color {\n  background: #ffd500; }\n\n/deep/ .c-4-color {\n  background: #5cb85c; }\n\n/deep/ .c-5-color {\n  background: #0275d8; }\n\n/deep/ .c-6-color {\n  background: #5bc0de; }\n\n/deep/ .c-7-color {\n  background: #ff5b77; }\n\n/deep/ .c-8-color {\n  background: #613d7c; }\n\n/deep/ .noUi-base .noUi-origin .noUi-handle .noUi-tooltip {\n  width: 100px; }\n\n:host {\n  margin: 5em; }\n\n@media print {\n  :host {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ":host /deep/ .medium-editor-element {\n  background-color: white;\n  padding: 5px;\n  border: 1px solid #777e81;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5); }\n  :host /deep/ .medium-editor-element:focus {\n    outline: none; }\n  :host /deep/ .medium-editor-element:after {\n    margin: 0; }\n\n.title {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  color: #464a4c;\n  text-align: left;\n  background-color: #eceeef;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-bottom: 0;\n  border-radius: 0.25rem 0.25rem 0 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "@media print {\n  h4 {\n    font-size: .5cm !important; }\n    h4 span {\n      display: none; }\n    h4 span:last-child {\n      display: block;\n      float: left; }\n    h4 small {\n      display: none; }\n    h4 small:first-child {\n      display: block;\n      float: left;\n      margin-right: 12px;\n      line-height: 21px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "@media print {\n  small {\n    margin-right: 12px;\n    line-height: 21px; }\n  span, small {\n    display: block;\n    float: left; }\n  h4 {\n    font-size: .5cm !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ":host {\n  height: 100%; }\n\n.card-img-overlay {\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n  .card-img-overlay .warning-message {\n    background: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23f0ad4e' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E\") center right 0.5625rem no-repeat;\n    padding-right: 2.25rem;\n    background-size: 1.125rem 1.125rem;\n    width: 2.25rem;\n    height: 2.25rem;\n    position: absolute;\n    top: -5px;\n    left: -4px;\n    display: none; }\n\n:host-context([transfer-point] .card.card-outline-danger) .warning-message {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23d9534f' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E\");\n  display: block; }\n\n:host-context([transfer-point] .card.card-outline-warning) .warning-message {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23f0ad4e' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E\");\n  display: block; }\n\n.card-img {\n  min-height: 100%;\n  width: 400px;\n  opacity: .1;\n  background-image: url(" + __webpack_require__(137) + ");\n  background-size: cover; }\n\n.controls {\n  z-index: 2;\n  padding: 1.25rem; }\n  .controls button.control {\n    margin-bottom: .25rem; }\n    .controls button.control /deep/ span {\n      text-transform: uppercase;\n      font-weight: bold; }\n    .controls button.control:focus {\n      outline: none; }\n\n@media print {\n  .card-img {\n    display: none; }\n  .controls {\n    display: none !important; }\n  .card-img-overlay {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-bottom: 0px;\n    padding-top: 10px; }\n    .card-img-overlay .transfer-time {\n      font-weight: bold;\n      margin-top: -20px; }\n    .card-img-overlay .card-text {\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2;\n      display: block;\n      font-size: .25cm !important; }\n    .card-img-overlay .card-text:nth-child(2) {\n      -webkit-box-ordinal-group: 4;\n          -ms-flex-order: 3;\n              order: 3; }\n    .card-img-overlay h4 {\n      font-size: .3cm !important;\n      font-weight: bold; } }\n\ninput.flatpickr.form-control[readonly]:not([disabled]) {\n  background-color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ":host-context([cities-list] > div:nth-child(8n+1))[transfer-list] /deep/ button[md-button] /deep/ .mat-ripple-element {\n  background-color: rgba(217, 83, 79, 0.1); }\n\n:host-context([cities-list] > div:nth-child(8n+1))[transfer-list] /deep/ button[md-button] /deep/ .mat-button-focus-overlay {\n  background-color: rgba(217, 83, 79, 0.12); }\n\n:host-context([cities-list] > div:nth-child(8n+2))[transfer-list] /deep/ button[md-button] /deep/ .mat-ripple-element {\n  background-color: rgba(240, 173, 78, 0.1); }\n\n:host-context([cities-list] > div:nth-child(8n+2))[transfer-list] /deep/ button[md-button] /deep/ .mat-button-focus-overlay {\n  background-color: rgba(240, 173, 78, 0.12); }\n\n:host-context([cities-list] > div:nth-child(8n+3))[transfer-list] /deep/ button[md-button] /deep/ .mat-ripple-element {\n  background-color: rgba(255, 213, 0, 0.1); }\n\n:host-context([cities-list] > div:nth-child(8n+3))[transfer-list] /deep/ button[md-button] /deep/ .mat-button-focus-overlay {\n  background-color: rgba(255, 213, 0, 0.12); }\n\n:host-context([cities-list] > div:nth-child(8n+4))[transfer-list] /deep/ button[md-button] /deep/ .mat-ripple-element {\n  background-color: rgba(92, 184, 92, 0.1); }\n\n:host-context([cities-list] > div:nth-child(8n+4))[transfer-list] /deep/ button[md-button] /deep/ .mat-button-focus-overlay {\n  background-color: rgba(92, 184, 92, 0.12); }\n\n:host-context([cities-list] > div:nth-child(8n+5))[transfer-list] /deep/ button[md-button] /deep/ .mat-ripple-element {\n  background-color: rgba(2, 117, 216, 0.1); }\n\n:host-context([cities-list] > div:nth-child(8n+5))[transfer-list] /deep/ button[md-button] /deep/ .mat-button-focus-overlay {\n  background-color: rgba(2, 117, 216, 0.12); }\n\n:host-context([cities-list] > div:nth-child(8n+6))[transfer-list] /deep/ button[md-button] /deep/ .mat-ripple-element {\n  background-color: rgba(91, 192, 222, 0.1); }\n\n:host-context([cities-list] > div:nth-child(8n+6))[transfer-list] /deep/ button[md-button] /deep/ .mat-button-focus-overlay {\n  background-color: rgba(91, 192, 222, 0.12); }\n\n:host-context([cities-list] > div:nth-child(8n+7))[transfer-list] /deep/ button[md-button] /deep/ .mat-ripple-element {\n  background-color: rgba(255, 91, 119, 0.1); }\n\n:host-context([cities-list] > div:nth-child(8n+7))[transfer-list] /deep/ button[md-button] /deep/ .mat-button-focus-overlay {\n  background-color: rgba(255, 91, 119, 0.12); }\n\n:host-context([cities-list] > div:nth-child(8n+8))[transfer-list] /deep/ button[md-button] /deep/ .mat-ripple-element {\n  background-color: rgba(97, 61, 124, 0.1); }\n\n:host-context([cities-list] > div:nth-child(8n+8))[transfer-list] /deep/ button[md-button] /deep/ .mat-button-focus-overlay {\n  background-color: rgba(97, 61, 124, 0.12); }\n\nbutton.add-transfer {\n  margin-bottom: .25rem;\n  width: 100%; }\n  button.add-transfer /deep/ span {\n    text-transform: uppercase;\n    font-weight: bold; }\n  button.add-transfer:focus {\n    outline: none; }\n\n@media print {\n  button {\n    display: none; }\n  :host {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".city-crossing-card {\n  min-height: 100px;\n  margin: 3px 0;\n  border-style: dashed; }\n\n.card {\n  margin-left: 100px; }\n\n@media print {\n  :host {\n    display: inline-block;\n    width: 50%;\n    margin-bottom: 10px; }\n  .card {\n    height: 100%;\n    margin-right: 10px;\n    margin-left: 10px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ":host {\n  height: 100%; }\n\n.card-img-overlay {\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n  .card-img-overlay .warning-message {\n    background: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23f0ad4e' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E\") center right 0.5625rem no-repeat;\n    padding-right: 2.25rem;\n    background-size: 1.125rem 1.125rem;\n    width: 2.25rem;\n    height: 2.25rem;\n    position: absolute;\n    top: -5px;\n    left: -4px;\n    display: none; }\n\n:host-context([transfer-point] .card.card-outline-danger) .warning-message {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23d9534f' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E\");\n  display: block; }\n\n:host-context([transfer-point] .card.card-outline-warning) .warning-message {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23f0ad4e' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E\");\n  display: block; }\n\n.card-img {\n  min-height: 100%;\n  width: 400px;\n  opacity: .1;\n  background-image: url(" + __webpack_require__(137) + ");\n  background-size: cover; }\n\n.controls {\n  z-index: 2;\n  padding: 1.25rem; }\n  .controls button.control {\n    margin-bottom: .25rem; }\n    .controls button.control /deep/ span {\n      text-transform: uppercase;\n      font-weight: bold; }\n    .controls button.control:focus {\n      outline: none; }\n\n@media print {\n  .card-img {\n    display: none; }\n  .controls {\n    display: none !important; }\n  .card-img-overlay {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-bottom: 0px;\n    padding-top: 10px; }\n    .card-img-overlay .transfer-time {\n      font-weight: bold;\n      margin-top: -20px; }\n    .card-img-overlay .card-text {\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2;\n      display: block;\n      font-size: .25cm !important; }\n    .card-img-overlay .card-text:nth-child(2) {\n      -webkit-box-ordinal-group: 4;\n          -ms-flex-order: 3;\n              order: 3; }\n    .card-img-overlay h4 {\n      font-size: .3cm !important;\n      font-weight: bold; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".mat-button {\n  width: calc(100% - 14px);\n  margin-top: 20px;\n  font-weight: bold;\n  text-transform: uppercase; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".card-inverse {\n  margin-top: 20px;\n  margin-right: 14px; }\n  .card-inverse .card-img {\n    width: 100%;\n    opacity: 0.5; }\n  .card-inverse .card-title {\n    color: #333333; }\n  .card-inverse:hover {\n    cursor: pointer;\n    background-color: rgba(0, 0, 0, 0.4); }\n  .card-inverse .controls button.control {\n    margin-bottom: 12px;\n    color: #ffffff;\n    background-color: rgba(0, 0, 0, 0.6); }\n  .card-inverse .updateInput {\n    height: 100%; }\n\n.active {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.4); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".tab-travel {\n  margin-bottom: 1rem; }\n\n.mat-sidenav-container {\n  background-color: white;\n  height: 100vh; }\n  .mat-sidenav-container .mat-sidenav {\n    width: 400px; }\n  .mat-sidenav-container .mat-sidenav.mat-sidenav-opened {\n    box-shadow: 0 0 20px;\n    -webkit-transition: box-shadow .1s linear;\n    transition: box-shadow .1s linear; }\n  .mat-sidenav-container /deep/ .mat-sidenav-backdrop.mat-sidenav-shown {\n    background-color: transparent; }\n\n.imports > span > button {\n  width: 68px;\n  height: 68px;\n  margin: 20px auto;\n  border-radius: 50%;\n  display: block; }\n  .imports > span > button .fa {\n    font-size: 34px; }\n\nmd-tab-group /deep/ md-tab-header .mat-tab-label-container .mat-tab-list .mat-tab-labels .mat-tab-label {\n  font-weight: bold; }\n\n@media print {\n  md-sidenav, h3 {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".d-dialog {\n  max-width: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 140,
	"./af.js": 140,
	"./ar": 146,
	"./ar-dz": 141,
	"./ar-dz.js": 141,
	"./ar-ly": 142,
	"./ar-ly.js": 142,
	"./ar-ma": 143,
	"./ar-ma.js": 143,
	"./ar-sa": 144,
	"./ar-sa.js": 144,
	"./ar-tn": 145,
	"./ar-tn.js": 145,
	"./ar.js": 146,
	"./az": 147,
	"./az.js": 147,
	"./be": 148,
	"./be.js": 148,
	"./bg": 149,
	"./bg.js": 149,
	"./bn": 150,
	"./bn.js": 150,
	"./bo": 151,
	"./bo.js": 151,
	"./br": 152,
	"./br.js": 152,
	"./bs": 153,
	"./bs.js": 153,
	"./ca": 154,
	"./ca.js": 154,
	"./cs": 155,
	"./cs.js": 155,
	"./cv": 156,
	"./cv.js": 156,
	"./cy": 157,
	"./cy.js": 157,
	"./da": 158,
	"./da.js": 158,
	"./de": 160,
	"./de-at": 159,
	"./de-at.js": 159,
	"./de.js": 160,
	"./dv": 161,
	"./dv.js": 161,
	"./el": 162,
	"./el.js": 162,
	"./en-au": 163,
	"./en-au.js": 163,
	"./en-ca": 164,
	"./en-ca.js": 164,
	"./en-gb": 165,
	"./en-gb.js": 165,
	"./en-ie": 166,
	"./en-ie.js": 166,
	"./en-nz": 167,
	"./en-nz.js": 167,
	"./eo": 168,
	"./eo.js": 168,
	"./es": 170,
	"./es-do": 169,
	"./es-do.js": 169,
	"./es.js": 170,
	"./et": 171,
	"./et.js": 171,
	"./eu": 172,
	"./eu.js": 172,
	"./fa": 173,
	"./fa.js": 173,
	"./fi": 174,
	"./fi.js": 174,
	"./fo": 175,
	"./fo.js": 175,
	"./fr": 178,
	"./fr-ca": 176,
	"./fr-ca.js": 176,
	"./fr-ch": 177,
	"./fr-ch.js": 177,
	"./fr.js": 178,
	"./fy": 179,
	"./fy.js": 179,
	"./gd": 180,
	"./gd.js": 180,
	"./gl": 181,
	"./gl.js": 181,
	"./he": 182,
	"./he.js": 182,
	"./hi": 183,
	"./hi.js": 183,
	"./hr": 184,
	"./hr.js": 184,
	"./hu": 185,
	"./hu.js": 185,
	"./hy-am": 186,
	"./hy-am.js": 186,
	"./id": 187,
	"./id.js": 187,
	"./is": 188,
	"./is.js": 188,
	"./it": 189,
	"./it.js": 189,
	"./ja": 190,
	"./ja.js": 190,
	"./jv": 191,
	"./jv.js": 191,
	"./ka": 192,
	"./ka.js": 192,
	"./kk": 193,
	"./kk.js": 193,
	"./km": 194,
	"./km.js": 194,
	"./ko": 195,
	"./ko.js": 195,
	"./ky": 196,
	"./ky.js": 196,
	"./lb": 197,
	"./lb.js": 197,
	"./lo": 198,
	"./lo.js": 198,
	"./lt": 199,
	"./lt.js": 199,
	"./lv": 200,
	"./lv.js": 200,
	"./me": 201,
	"./me.js": 201,
	"./mi": 202,
	"./mi.js": 202,
	"./mk": 203,
	"./mk.js": 203,
	"./ml": 204,
	"./ml.js": 204,
	"./mr": 205,
	"./mr.js": 205,
	"./ms": 207,
	"./ms-my": 206,
	"./ms-my.js": 206,
	"./ms.js": 207,
	"./my": 208,
	"./my.js": 208,
	"./nb": 209,
	"./nb.js": 209,
	"./ne": 210,
	"./ne.js": 210,
	"./nl": 212,
	"./nl-be": 211,
	"./nl-be.js": 211,
	"./nl.js": 212,
	"./nn": 213,
	"./nn.js": 213,
	"./pa-in": 214,
	"./pa-in.js": 214,
	"./pl": 215,
	"./pl.js": 215,
	"./pt": 217,
	"./pt-br": 216,
	"./pt-br.js": 216,
	"./pt.js": 217,
	"./ro": 218,
	"./ro.js": 218,
	"./ru": 219,
	"./ru.js": 219,
	"./se": 220,
	"./se.js": 220,
	"./si": 221,
	"./si.js": 221,
	"./sk": 222,
	"./sk.js": 222,
	"./sl": 223,
	"./sl.js": 223,
	"./sq": 224,
	"./sq.js": 224,
	"./sr": 226,
	"./sr-cyrl": 225,
	"./sr-cyrl.js": 225,
	"./sr.js": 226,
	"./ss": 227,
	"./ss.js": 227,
	"./sv": 228,
	"./sv.js": 228,
	"./sw": 229,
	"./sw.js": 229,
	"./ta": 230,
	"./ta.js": 230,
	"./te": 231,
	"./te.js": 231,
	"./tet": 232,
	"./tet.js": 232,
	"./th": 233,
	"./th.js": 233,
	"./tl-ph": 234,
	"./tl-ph.js": 234,
	"./tlh": 235,
	"./tlh.js": 235,
	"./tr": 236,
	"./tr.js": 236,
	"./tzl": 237,
	"./tzl.js": 237,
	"./tzm": 239,
	"./tzm-latn": 238,
	"./tzm-latn.js": 238,
	"./tzm.js": 239,
	"./uk": 240,
	"./uk.js": 240,
	"./uz": 241,
	"./uz.js": 241,
	"./vi": 242,
	"./vi.js": 242,
	"./x-pseudo": 243,
	"./x-pseudo.js": 243,
	"./yo": 244,
	"./yo.js": 244,
	"./zh-cn": 245,
	"./zh-cn.js": 245,
	"./zh-hk": 246,
	"./zh-hk.js": 246,
	"./zh-tw": 247,
	"./zh-tw.js": 247
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 431;


/***/ }),

/***/ 437:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-4\">\r\n  <form novalidate [formGroup]=\"travelForm\" (ngSubmit)=\"onAdd(travelForm)\">\r\n    <div class=\"form-group row\"\r\n         [class.has-danger]=\"formErrors.name\"\r\n         [class.has-success]=\"!formErrors.name && travelForm.get('name').valid && !travelForm.get('name').pristine\">\r\n      <div class=\"input-group col-12\">\r\n        <span class=\"input-group-addon\">Name:</span>\r\n        <input class=\"form-control\"\r\n               [class.form-control-danger]=\"formErrors.name\"\r\n               [class.form-control-success]=\"!formErrors.name && travelForm.get('name').valid && !travelForm.get('name').pristine\"\r\n               type=\"text\" formControlName=\"name\" placeholder=\"Enter Title\">\r\n      </div>\r\n      <div *ngIf=\"formErrors.name\" class=\"form-control-feedback\">{{formErrors.name}}</div>\r\n    </div>\r\n    <button [disabled]=\"travelForm.invalid\" type=\"submit\" class=\"btn btn-success btn-lg btn-block\">Save Travel</button>\r\n    <button class=\"btn btn-lg btn-block\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

module.exports = "<md-progress-spinner *ngIf=\"(loading$ | async); else cityPoint\" mode=\"indeterminate\"></md-progress-spinner>\r\n<ng-template #cityPoint>\r\n  <div *ngFor=\"let city of (cities$ | async)\" class=\"page-break\">\r\n    <div city-point [city]=\"city\"></div>\r\n    <div transfer-list [city]=\"city\"></div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ 440:
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-4\">\r\n  <form novalidate [formGroup]=\"cityForm\" (ngSubmit)=\"onAdd(cityForm)\">\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-sm-6 row\"\r\n           [class.has-danger]=\"formErrors.from || formErrors.to\">\r\n          <div class=\"input-group col-sm-6\">\r\n            <span class=\"input-group-addon\">From:</span>\r\n            <input class=\"flatpickr form-control\" [class.form-control-danger]=\"formErrors.from\"\r\n                  [maxDate]=\"toInput.value\" #fromInput\r\n                  [currentValue]=\"fromLimit\"\r\n                  date-picker type=\"text\" formControlName=\"from\" >\r\n          </div>\r\n          <div *ngIf=\"formErrors.from\" class=\"form-control-feedback\">{{formErrors.from}}</div>\r\n          <div class=\"input-group col-sm-6\">\r\n            <span class=\"input-group-addon\">To:</span>\r\n            <input class=\"flatpickr form-control\" [class.form-control-danger]=\"formErrors.to\"\r\n                  [minDate]=\"fromInput.value\" #toInput\r\n                  date-picker type=\"text\" formControlName=\"to\">\r\n          </div>\r\n          <div *ngIf=\"formErrors.to\" class=\"form-control-feedback\">{{formErrors.to}}</div>\r\n      </div>\r\n      <div class=\"form-group col-sm-4\"\r\n           [class.has-danger]=\"formErrors.cost\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">Cost of living in the city:</span>\r\n            <input class=\"form-control\"\r\n                   [class.form-control-danger]=\"formErrors.cost\"\r\n                   [class.form-control-success]=\"!formErrors.cost\"\r\n                   type=\"text\" formControlName=\"cost\">\r\n          </div>\r\n          <div *ngIf=\"formErrors.cost\" class=\"form-control-feedback\">{{formErrors.cost}}</div>\r\n      </div>\r\n    </div>\r\n      <div class=\"form-group row\"\r\n           [class.has-danger]=\"formErrors.title\"\r\n           [class.has-success]=\"!formErrors.title && cityForm.get('title').valid && !cityForm.get('title').pristine\">\r\n        <div class=\"input-group col-12\">\r\n          <span class=\"input-group-addon\">Title:</span>\r\n          <input class=\"form-control\"\r\n                 [class.form-control-danger]=\"formErrors.title\"\r\n                 [class.form-control-success]=\"!formErrors.title && cityForm.get('title').valid && !cityForm.get('title').pristine\"\r\n                 type=\"text\" formControlName=\"title\" placeholder=\"Enter Title\">\r\n        </div>\r\n        <div *ngIf=\"formErrors.title\" class=\"form-control-feedback\">{{formErrors.title}}</div>\r\n      </div>\r\n    <div class=\"form-group row\">\r\n      <div class=\"col-12\">\r\n        <div text-editor [title]=\"'Description'\"\r\n             [text]=\"cityForm.get('description').value\" (onChange)=\"onChangeHandler($event)\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button [disabled]=\"cityForm.invalid\" type=\"submit\" class=\"btn btn-success btn-lg btn-block\">Save City</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 md-dialog-title>Transfer from the city</h1>\r\n  <hr />\r\n  <form [formGroup]=\"transferForm\" novalidate>\r\n    <div class=\"row\">\r\n      <div class=\"form-group row col-sm-6\">\r\n        <div class=\"input-group col-sm-6\">\r\n          <span class=\"input-group-addon\">From:</span>\r\n          <input type=\"text\" time-picker class=\"flatpickr form-control\" formControlName=\"from\">\r\n        </div>\r\n        <div class=\"input-group col-sm-6\">\r\n          <span class=\"input-group-addon\">To:</span>\r\n          <input type=\"text\" time-picker class=\"flatpickr form-control\" formControlName=\"to\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row col-sm-6\"\r\n           [class.has-danger]=\"formErrors.cost\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\">Transfer cost:</span>\r\n          <input type=\"text\" class=\" form-control\" formControlName=\"cost\">\r\n        </div>\r\n        <div *ngIf=\"formErrors.cost\" class=\"form-control-feedback\">{{formErrors.cost}}</div>\r\n      </div>\r\n    </div>\r\n    <div [class.has-danger]=\"formErrors.way\"\r\n         [class.has-success]=\"!formErrors.way && transferForm.get('way').valid && !transferForm.get('way').pristine\">\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon\">Chosen Way</span>\r\n        <input type=\"text\" class=\"form-control\"\r\n               [class.form-control-danger]=\"formErrors.way\"\r\n               [class.form-control-success]=\"!formErrors.way && transferForm.get('way').valid && !transferForm.get('way').pristine\"\r\n               placeholder=\"Enter the way you chosen\" formControlName=\"way\">\r\n      </div>\r\n      <div class=\"form-control-feedback\">{{formErrors.way}}</div>\r\n    </div>\r\n    <br />\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\">Info</span>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Optional parameter\" formControlName=\"info\">\r\n    </div>\r\n    <hr />\r\n    <div class=\"d-flex flex-row-reverse\">\r\n      <button class=\"p-2\" type=\"button\" class=\"btn btn-success\" (click)=\"addTransfer()\">Add Transfer</button>\r\n      <button class=\"p-2\" type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ 442:
/***/ (function(module, exports) {

module.exports = "<div city-view [city]=\"city\"\r\n     (edit)=\"editCity($event)\" (remove)=\"removeCity($event)\"\r\n     *ngIf=\"!updateMark; else updateTpl\"></div>\r\n<ng-template #updateTpl>\r\n  <div city-update [city]=\"city\"\r\n       (update)=\"updateCity($event)\" (cancel)=\"cancelUpdateCity()\"></div>\r\n</ng-template>\r\n"

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

module.exports = "<div class=\"city-point d-flex justify-content-end align-content-stretch flex-wrap\">\r\n  <div class=\"city-point-info\">\r\n    <form [formGroup]=\"cityUpdateForm\" novalidate>\r\n      <div class=\"row\">\r\n        <div class=\"col col-md-auto\">\r\n          <h2 class=\"mt-1\">\r\n            <small class=\"text-muted\">From:</small>\r\n            {{city.from}}\r\n            <small class=\"text-muted\">To:</small>\r\n            {{city.to}}\r\n          </h2>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <div [class.has-danger]=\"formErrors.cost\"\r\n               [class.has-success]=\"!formErrors.cost && cityUpdateForm.get('cost').valid && !cityUpdateForm.get('cost').pristine\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\">Cost of living in the city</span>\r\n              <input type=\"text\" class=\"form-control\"\r\n                     [class.form-control-danger]=\"formErrors.cost\"\r\n                     [class.form-control-success]=\"!formErrors.cost &&\r\n                                               cityUpdateForm.get('cost').valid &&\r\n                                               !cityUpdateForm.get('cost').pristine\"\r\n                     placeholder=\"Cost of living in the city\" formControlName=\"cost\">\r\n            </div>\r\n            <div class=\"form-control-feedback\">{{formErrors.cost}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div [class.has-danger]=\"formErrors.title\"\r\n           [class.has-success]=\"!formErrors.title && cityUpdateForm.get('title').valid && !cityUpdateForm.get('title').pristine\">\r\n        <div class=\"input-group input-group-lg\">\r\n          <span class=\"input-group-addon\">Chosen City</span>\r\n          <input type=\"text\" class=\"form-control\"\r\n                 [class.form-control-danger]=\"formErrors.title\"\r\n                 [class.form-control-success]=\"!formErrors.title &&\r\n                                               cityUpdateForm.get('title').valid &&\r\n                                               !cityUpdateForm.get('title').pristine\"\r\n                 placeholder=\"Enter the City you chosen\" formControlName=\"title\">\r\n        </div>\r\n        <div class=\"form-control-feedback\">{{formErrors.title}}</div>\r\n      </div>\r\n      <br />\r\n      <div text-editor [title]=\"'Description'\"\r\n           [text]=\"cityUpdateForm.get('description').value\" (onChange)=\"onChangeHandler($event)\"></div>\r\n    </form>\r\n  </div>\r\n  <div class=\"controls d-flex align-items-start flex-column\">\r\n    <button class=\"control\" md-button (click)=\"cancel.emit()\">Cancel</button>\r\n    <button class=\"control\" md-button (click)=\"updateAction()\">Save</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

module.exports = "<div class=\"city-point d-flex justify-content-end align-content-stretch flex-wrap\">\r\n  <div class=\"city-point-info\">\r\n    <h2 class=\"mt-1\">\r\n      <small class=\"text-muted\">From:</small>\r\n      {{city.from}}\r\n      <small class=\"text-muted\">To:</small>\r\n      {{city.to}}\r\n      <small class=\"text-muted\"> | Cost of living in the city:</small>\r\n      {{city.cost}}\r\n    </h2>\r\n    <h1 class=\"display-3\">{{city.title}}</h1>\r\n    <hr *ngIf=\"city.description\"/>\r\n    <div [innerHtml]=\"city.description\">\r\n    </div>\r\n  </div>\r\n  <div class=\"controls d-flex align-items-start flex-column\">\r\n    <button class=\"control\" md-button (click)=\"edit.emit(city)\">Update</button>\r\n    <button class=\"control\" md-button (click)=\"remove.emit(city)\">Delete</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 445:
/***/ (function(module, exports) {

module.exports = "<div class=\"container d-dialog\">\r\n  <h1 md-dialog-title>Upload Import-File dialog</h1>\r\n  <div class=\"d-flex flex-row justify-content-between\">\r\n    <label class=\"btn btn-success\">\r\n      Upload <input type=\"file\" (change)=\"uploadFile($event)\" hidden>\r\n    </label>\r\n    <button class=\"p-2\" type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

module.exports = "<div #slider>\r\n</div>\r\n"

/***/ }),

/***/ 447:
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">{{title}}</div>\r\n<div #editor [innerHtml]=\"text\"></div>\r\n"

/***/ }),

/***/ 448:
/***/ (function(module, exports) {

module.exports = "<h4>\r\n  <small class=\"text-muted\">Cost: </small>\r\n  <span class=\"warning-message\" [mdTooltip]=\"'Cities living cost'\" [mdTooltipPosition]=\"'below'\">\r\n    {{citiesCost}}\r\n  </span>\r\n  <small class=\"text-muted\"> + </small>\r\n  <span class=\"warning-message\" [mdTooltip]=\"'Transfers cost'\" [mdTooltipPosition]=\"'below'\">\r\n    {{transfersCost}}\r\n  </span>\r\n  <small class=\"text-muted\"> = </small>\r\n  <span class=\"warning-message\" [mdTooltip]=\"'Total travel cost'\" [mdTooltipPosition]=\"'below'\">\r\n    {{transfersCost + citiesCost}}\r\n  </span>\r\n</h4>\r\n"

/***/ }),

/***/ 449:
/***/ (function(module, exports) {

module.exports = "<h4>\r\n  <small class=\"text-muted\">Total days in the travel:</small>\r\n  <span>{{totalDays}}</span>\r\n</h4>\r\n\r\n"

/***/ }),

/***/ 450:
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-end align-content-stretch flex-wrap\">\r\n  <div class=\"card-img-overlay\">\r\n    <form [formGroup]=\"transferUpdateForm\" novalidate>\r\n      <div class=\"row\">\r\n        <div class=\"form-group row col-sm-6\">\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\">From:</span>\r\n              <input type=\"text\" time-picker class=\"flatpickr form-control\" formControlName=\"from\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\">To:</span>\r\n              <input type=\"text\" time-picker class=\"flatpickr form-control\" formControlName=\"to\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row col-sm-6\"\r\n             [class.has-danger]=\"formErrors.cost\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">Transfer cost:</span>\r\n            <input type=\"text\" class=\" form-control\" formControlName=\"cost\">\r\n          </div>\r\n          <div *ngIf=\"formErrors.cost\" class=\"form-control-feedback\">{{formErrors.cost}}</div>\r\n        </div>\r\n      </div>\r\n      <div [class.has-danger]=\"formErrors.way\"\r\n           [class.has-success]=\"!formErrors.way && transferUpdateForm.get('way').valid && !transferUpdateForm.get('way').pristine\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\">Chosen Way</span>\r\n          <input type=\"text\" class=\"form-control\"\r\n            [class.form-control-danger]=\"formErrors.way\"\r\n            [class.form-control-success]=\"!formErrors.way &&\r\n            transferUpdateForm.get('way').valid &&\r\n            !transferUpdateForm.get('way').pristine\"\r\n            placeholder=\"Enter the way you chosen\" formControlName=\"way\">\r\n        </div>\r\n        <div class=\"form-control-feedback\">{{formErrors.way}}</div>\r\n      </div>\r\n      <br />\r\n      <div text-editor [title]=\"'Info'\"\r\n         [text]=\"transferUpdateForm.get('info').value\" (onChange)=\"onChangeHandler($event)\"></div>\r\n    </form>\r\n  </div>\r\n  <div class=\"card-img\"></div>\r\n  <div class=\"controls d-flex align-items-start flex-column\">\r\n    <button class=\"control\" md-button (click)=\"cancel.emit()\">Cancel</button>\r\n    <button class=\"control\" md-button (click)=\"updateAction()\">Save</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 451:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let transfer of (transfers$ | async); let last = last\"\r\n     transfer-point\r\n     [transfer]=\"transfer\"\r\n     [transferCheck]=\"validateTransfers(transfer, last)\">\r\n</div>\r\n<button md-button class=\"add-transfer\" (click)=\"showAddCityTransferModal()\">Add city transfer</button>\r\n"

/***/ }),

/***/ 452:
/***/ (function(module, exports) {

module.exports = "<div class=\"card city-crossing-card\"\r\n     [class.card-outline-danger]=\"transferCheck.danger\"\r\n     [class.card-outline-warning]=\"transferCheck.warning\"\r\n     [class.card-outline-success]=\"transferCheck.success\">\r\n  <div transfer-view [transfer]=\"transfer\" [message]=\"transferCheck.message\"\r\n       (edit)=\"editTransfer($event)\" (remove)=\"removeTransfer($event)\"\r\n       *ngIf=\"!updateMark; else editTpl\"></div>\r\n  <ng-template #editTpl>\r\n    <div transfer-edit [transfer]=\"transfer\"\r\n         (update)=\"updateTransfer($event)\" (cancel)=\"cancelUpdateTransfer()\"></div>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ 453:
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-end align-content-stretch flex-wrap\">\r\n  <div class=\"card-img-overlay\">\r\n    <div class=\"warning-message\" [mdTooltip]=\"message\" [mdTooltipPosition]=\"'right'\"></div>\r\n    <h4 class=\"card-title\">{{transfer.way}}</h4>\r\n    <p class=\"card-text\">\r\n    <small class=\"text-muted\">From:</small>\r\n    {{transfer.from}}\r\n    <small class=\"text-muted\">To:</small>\r\n    {{transfer.to}} |\r\n    <small class=\"text-muted\">Transfer cost:</small>\r\n    {{transfer.cost}}\r\n    </p>\r\n    <p class=\"card-text\" [innerHtml]=\"transfer.info\"></p>\r\n    <p class=\"card-text transfer-time\">{{getTotalTransferTime(transfer)}}</p>\r\n  </div>\r\n  <div class=\"card-img\"></div>\r\n  <div class=\"controls d-flex align-items-start flex-column\">\r\n    <button class=\"control\" md-button (click)=\"edit.emit(transfer)\">Update</button>\r\n    <button class=\"control\" md-button (click)=\"remove.emit(transfer)\">Delete</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 454:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let travel of travels\"\r\n     travel-point\r\n     [travel]=\"travel\">\r\n</div>\r\n<button md-button class=\"add-travel\" (click)=\"showAddTravelModal()\">Add travel</button>\r\n"

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

module.exports = "<div (click)=\"setCurrent()\" [class]=\"'card card-inverse'\" [class.active]=\"this.travel.id === this.currentTravelId\">\r\n  <img class=\"card-img\" src=\"../../../assets/travel.jpg\" alt=\"Card image\">\r\n  <div *ngIf=\"!updateMark; else updateTpl\" class=\"card-img-overlay d-flex justify-content-between align-content-stretch flex-wrap\">\r\n      <h4 class=\"card-title\">{{travel.name}}</h4>\r\n      <div class=\"controls d-flex align-items-start flex-column\">\r\n        <button class=\"control\" md-button (click)=\"updateTravel($event)\">Update</button>\r\n        <button class=\"control\" md-button (click)=\"removeTravel($event, travel)\">Delete</button>\r\n      </div>\r\n  </div>\r\n  <ng-template #updateTpl>\r\n    <div class=\"card-img-overlay d-flex justify-content-between align-content-stretch flex-wrap\">\r\n      <div class=\"card-img-overlay\">\r\n        <form novalidate [formGroup]=\"travelForm\"\r\n              (ngSubmit)=\"saveTravel(travel)\"\r\n              class=\"d-flex justify-content-between align-content-stretch flex-wrap\">\r\n          <div class=\"form-group row updateInput\"\r\n               [class.has-danger]=\"formErrors.name\"\r\n               [class.has-success]=\"!formErrors.name && travelForm.get('name').valid && !travelForm.get('name').pristine\">\r\n            <input class=\"form-control\"\r\n                   [class.form-control-danger]=\"formErrors.name\"\r\n                   [class.form-control-success]=\"!formErrors.name && travelForm.get('name').valid && !travelForm.get('name').pristine\"\r\n                   type=\"text\" formControlName=\"name\" placeholder=\"Enter Title\">\r\n            <div *ngIf=\"formErrors.name\" class=\"form-control-feedback\">{{formErrors.name}}</div>\r\n          </div>\r\n          <div class=\"controls d-flex align-items-start flex-column\">\r\n            <button class=\"control\" md-button [disabled]=\"travelForm.invalid\" type=\"submit\">Save</button>\r\n            <button class=\"control\" md-button (click)=\"cancel($event)\">Cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\r\n  <md-sidenav [mode]=\"'side'\" #sidenav>\r\n    <div class=\"travels\">\r\n      <div travel-list [travels]=\"(travels$ | async)\" (disableTab)=\"disabled($event)\"></div>\r\n    </div>\r\n    <div class=\"imports\">\r\n      <span [mdTooltip]=\"'Export travel'\" [mdTooltipPosition]=\"'right'\">\r\n        <button type=\"button\" (click)=\"showExportModal()\" class=\"btn btn-secondary\"><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></button>\r\n      </span>\r\n      <span [mdTooltip]=\"'Import travel'\" [mdTooltipPosition]=\"'right'\">\r\n        <button type=\"button\" (click)=\"showImportModal()\" class=\"btn btn-secondary\"><i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i></button>\r\n      </span>\r\n    </div>\r\n  </md-sidenav>\r\n\r\n  <h3><span class=\"badge badge-success\" (click)=\"sidenav.toggle()\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></span></h3>\r\n  <div class=\"row col-sm-12\">\r\n    <div total-days class=\"col-sm-2\"></div>\r\n    <div total-cost class=\"col-sm-4\"></div>\r\n  </div>\r\n  <div slider (updateCities)=\"updateCities($event)\"></div>\r\n  <md-tab-group [dynamicHeight]=\"true\">\r\n    <md-tab [label]=\"'City List'\">\r\n      <div cities-list></div>\r\n    </md-tab>\r\n    <md-tab [label]=\"'Add City'\" disabled=\"{{isDisabled}}\">\r\n      <div city-add></div>\r\n    </md-tab>\r\n  </md-tab-group>\r\n</md-sidenav-container>\r\n"

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

module.exports = "<div class=\"container d-dialog\">\r\n  <h1 md-dialog-title>Download Export-File dialog</h1>\r\n  <div class=\"d-flex flex-row justify-content-between\">\r\n    <button class=\"p-2\" type=\"button\" class=\"btn btn-success\" (click)=\"createAndOpenFile()\">Download</button>\r\n    <button class=\"p-2\" type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UpdateTransferSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AddTransferSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RemoveTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RemoveTransferSuccess; });
var ActionTypes = {
    ADD_TRANSFER: '[TRANSFER] ADD_TRANSFER',
    ADD_TRANSFER_SUCCESS: '[TRANSFER] ADD_TRANSFER_SUCCESS',
    REMOVE_TRANSFER: '[TRANSFER] REMOVE_TRANSFER',
    REMOVE_TRANSFER_SUCCESS: '[TRANSFER] REMOVE_TRANSFER_SUCCESS',
    UPDATE_TRANSFER: '[TRANSFER] UPDATE_TRANSFER',
    UPDATE_TRANSFER_SUCCESS: '[TRANSFER] UPDATE_TRANSFER_SUCCESS'
};
var AddTransfer = (function () {
    function AddTransfer(payload) {
        this.payload = payload;
        this.type = ActionTypes.ADD_TRANSFER;
    }
    return AddTransfer;
}());
var AddTransferSuccess = (function () {
    function AddTransferSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.ADD_TRANSFER_SUCCESS;
    }
    return AddTransferSuccess;
}());
var UpdateTransfer = (function () {
    function UpdateTransfer(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_TRANSFER;
    }
    return UpdateTransfer;
}());
var UpdateTransferSuccess = (function () {
    function UpdateTransferSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_TRANSFER_SUCCESS;
    }
    return UpdateTransferSuccess;
}());
var RemoveTransfer = (function () {
    function RemoveTransfer(payload) {
        this.payload = payload;
        this.type = ActionTypes.REMOVE_TRANSFER;
    }
    return RemoveTransfer;
}());
var RemoveTransferSuccess = (function () {
    function RemoveTransferSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.REMOVE_TRANSFER_SUCCESS;
    }
    return RemoveTransferSuccess;
}());

//# sourceMappingURL=D:/Projects/travel-planning/src/transfer.action.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = minValueValidator;
function minValueValidator(minValue) {
    return function (control) {
        var value = control.value;
        var numValue = +value;
        if (numValue <= minValue) {
            return { 'minValueValidator': { value: value } };
        }
        else {
            return null;
        }
    };
}
//# sourceMappingURL=D:/Projects/travel-planning/src/min-value.validator.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = numberValidator;
function numberValidator(control) {
    var value = control.value;
    var numValue = +value;
    if (isNaN(numValue)) {
        return { 'numberValidator': { value: value } };
    }
    else {
        return null;
    }
}
//# sourceMappingURL=D:/Projects/travel-planning/src/number.validator.js.map

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(275);


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Model; });
/**
 * Created by Aliaksandr_Hladchank on 22-Feb-17.
 */
var Model = (function () {
    function Model() {
        var _this = this;
        this.guid = function () {
            return _this.s4() + _this.s4() + '-' +
                _this.s4() + '-' +
                _this.s4() + '-' +
                _this.s4() + '-' +
                _this.s4() + _this.s4() + _this.s4();
        };
        this.s4 = function () { return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16).substring(1); };
        this.id = this.guid();
    }
    return Model;
}());

//# sourceMappingURL=D:/Projects/travel-planning/src/model.js.map

/***/ })

},[513]);
//# sourceMappingURL=main.bundle.js.map