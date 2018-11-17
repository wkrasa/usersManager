"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sows_service_1 = require("./sows.service");
var SowsListComponent = /** @class */ (function () {
    function SowsListComponent(sowsService) {
        this.sowsService = sowsService;
    }
    SowsListComponent.prototype.ngOnInit = function () {
        this.getSows();
    };
    SowsListComponent.prototype.onSelectSow = function (sow) {
        this.selectedSow = sow;
    };
    SowsListComponent.prototype.getSows = function () {
        var _this = this;
        this.sowsService.getSows()
            .subscribe(function (sows) {
            _this.sows = sows;
            if (_this.sows.length > 0) {
                _this.selectedSow = _this.sows[0];
            }
        });
    };
    SowsListComponent = __decorate([
        core_1.Component({
            selector: 'sows-list',
            template: "<h1>selected sow: <span *ngIf=\"selectedSow\">{{selectedSow.name || selectedSow.elir}}</span></h1>\n                <ul>\n                    <li *ngFor=\"let sow of sows\" (click)=\"onSelectSow(sow)\">\n                        <span [class.active]=\"sow===selectedSow\">{{sow.name || sow.elir}}</span> <a class=\"badge badge-secondary\" routerLink=\"/sow-details/{{sow.id}}\" >Details</a>\n                    </li>\n                </ul>\n                <sow-edit [sow]=\"selectedSow\"></sow-edit>\n            ",
        }),
        __metadata("design:paramtypes", [sows_service_1.SowsService])
    ], SowsListComponent);
    return SowsListComponent;
}());
exports.SowsListComponent = SowsListComponent;
//# sourceMappingURL=sows-list.component.js.map