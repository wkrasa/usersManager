"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var sows_routing_module_1 = require("./sows-routing.module");
var sows_service_1 = require("./sows.service");
var sows_list_component_1 = require("./sows-list.component");
var sow_edit_component_1 = require("./sow-edit.component");
var sow_details_component_1 = require("./sow-details.component");
var SowsModule = /** @class */ (function () {
    function SowsModule() {
    }
    SowsModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                sows_routing_module_1.SowsRoutingModule,
                forms_1.FormsModule
            ],
            declarations: [
                sows_list_component_1.SowsListComponent,
                sow_edit_component_1.SowEditComponent,
                sow_details_component_1.SowDetailsComponent
            ],
            providers: [
                sows_service_1.SowsService
            ]
        })
    ], SowsModule);
    return SowsModule;
}());
exports.SowsModule = SowsModule;
//# sourceMappingURL=sows.module.js.map