import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["myModal"];
function PiecePromotionModalComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6);
    i0.ɵɵlistener("click", function PiecePromotionModalComponent_div_4_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.changeSelection(1)); });
    i0.ɵɵelement(2, "img", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 6);
    i0.ɵɵlistener("click", function PiecePromotionModalComponent_div_4_Template_div_click_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.changeSelection(2)); });
    i0.ɵɵelement(4, "img", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵlistener("click", function PiecePromotionModalComponent_div_4_Template_div_click_5_listener() { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.changeSelection(3)); });
    i0.ɵɵelement(6, "img", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 6);
    i0.ɵɵlistener("click", function PiecePromotionModalComponent_div_4_Template_div_click_7_listener() { i0.ɵɵrestoreView(_r4); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.changeSelection(4)); });
    i0.ɵɵelement(8, "img", 10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r1.getPieceIcon("queen"), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r1.getPieceIcon("rook"), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r1.getPieceIcon("bishop"), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r1.getPieceIcon("knight"), i0.ɵɵsanitizeUrl);
} }
function PiecePromotionModalComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6);
    i0.ɵɵlistener("click", function PiecePromotionModalComponent_div_5_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.changeSelection(1)); });
    i0.ɵɵtext(2, "\u265B");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 6);
    i0.ɵɵlistener("click", function PiecePromotionModalComponent_div_5_Template_div_click_3_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.changeSelection(2)); });
    i0.ɵɵtext(4, "\u265C");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵlistener("click", function PiecePromotionModalComponent_div_5_Template_div_click_5_listener() { i0.ɵɵrestoreView(_r9); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.changeSelection(3)); });
    i0.ɵɵtext(6, "\u265D");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 6);
    i0.ɵɵlistener("click", function PiecePromotionModalComponent_div_5_Template_div_click_7_listener() { i0.ɵɵrestoreView(_r9); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.changeSelection(4)); });
    i0.ɵɵtext(8, "\u265E");
    i0.ɵɵelementEnd()();
} }
export class PiecePromotionModalComponent {
    constructor() {
        this.color = 'white';
        this.opened = false;
    }
    open(closeCallback) {
        this.opened = true;
        this.onCloseCallback = closeCallback;
        this.modal.nativeElement.style.display = 'block';
    }
    changeSelection(index) {
        this.modal.nativeElement.style.display = 'none';
        this.opened = false;
        this.onCloseCallback(index);
    }
    getPieceIcon(piece) {
        let coloredPiece = '';
        switch (piece.toLowerCase()) {
            case 'queen':
                coloredPiece = this.color === 'white' ? this.pieceIconInput.whiteQueenUrl : this.pieceIconInput.blackQueenUrl;
                break;
            case 'rook':
                coloredPiece = this.color === 'white' ? this.pieceIconInput.whiteRookUrl : this.pieceIconInput.blackRookUrl;
                break;
            case 'bishop':
                coloredPiece = this.color === 'white' ? this.pieceIconInput.whiteBishopUrl : this.pieceIconInput.blackBishopUrl;
                break;
            case 'knight':
                coloredPiece = this.color === 'white' ? this.pieceIconInput.whiteKnightUrl : this.pieceIconInput.blackKnightUrl;
                break;
        }
        return coloredPiece;
    }
    static { this.ɵfac = function PiecePromotionModalComponent_Factory(t) { return new (t || PiecePromotionModalComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PiecePromotionModalComponent, selectors: [["app-piece-promotion-modal"]], viewQuery: function PiecePromotionModalComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modal = _t.first);
        } }, inputs: { pieceIconInput: "pieceIconInput", color: "color" }, decls: 6, vars: 2, consts: [[1, "container"], ["myModal", ""], [1, "wrapper"], [1, "content"], ["class", "piece-wrapper", 4, "ngIf"], [1, "piece-wrapper"], [1, "piece", 3, "click"], ["alt", "Queen", 3, "src"], ["alt", "Rook", 3, "src"], ["alt", "Bishop", 3, "src"], ["alt", "Knight", 3, "src"]], template: function PiecePromotionModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0, 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵtemplate(4, PiecePromotionModalComponent_div_4_Template, 9, 4, "div", 4);
            i0.ɵɵtemplate(5, PiecePromotionModalComponent_div_5_Template, 9, 0, "div", 4);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.pieceIconInput);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.pieceIconInput);
        } }, dependencies: [i1.NgIf], styles: [".container[_ngcontent-%COMP%]{display:none;position:absolute;z-index:9999;top:0;color:#000;width:100%;height:100%;overflow:auto;background-color:#0006}.wrapper[_ngcontent-%COMP%]{position:relative;height:100%;width:100%}.content[_ngcontent-%COMP%]{background-color:#fefefe;margin:auto;position:relative;top:30%;font-size:100%;height:40%;padding:10px;border:1px solid #888;width:90%}.piece[_ngcontent-%COMP%]{font-size:5rem;height:100%;width:25%;cursor:pointer;display:inline-block;text-align:center}.piece[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}.piece[_ngcontent-%COMP%]:hover{background-color:#ccc;border-radius:5px}.piece-wrapper[_ngcontent-%COMP%]{height:80%;width:100%}#close-button[_ngcontent-%COMP%]{border-radius:4px;background-color:#4caf50;border:none;color:#fff;padding-left:5px;padding-right:5px;text-align:center;text-decoration:none;display:inline-block}.selected[_ngcontent-%COMP%]{border:2px solid #00B919;border-radius:4px;box-sizing:border-box}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PiecePromotionModalComponent, [{
        type: Component,
        args: [{ selector: 'app-piece-promotion-modal', template: "<div #myModal class=\"container\">\r\n    <div class=\"wrapper\">\r\n        <div class=\"content\">\r\n            <div class=\"piece-wrapper\" *ngIf=\"pieceIconInput\">\r\n                <div class=\"piece\" (click)=\"changeSelection(1)\">\r\n                    <img [src]=\"getPieceIcon('queen')\" alt=\"Queen\">\r\n                </div>\r\n                <div class=\"piece\" (click)=\"changeSelection(2)\">\r\n                    <img [src]=\"getPieceIcon('rook')\" alt=\"Rook\">\r\n                </div>\r\n                <div class=\"piece\" (click)=\"changeSelection(3)\">\r\n                    <img [src]=\"getPieceIcon('bishop')\" alt=\"Bishop\">\r\n                </div>\r\n                <div class=\"piece\" (click)=\"changeSelection(4)\">\r\n                    <img [src]=\"getPieceIcon('knight')\" alt=\"Knight\">\r\n                </div>\r\n            </div>\r\n            <div class=\"piece-wrapper\" *ngIf=\"!pieceIconInput\">\r\n                <div class=\"piece\" (click)=\"changeSelection(1)\">&#x265B;</div>\r\n                <div class=\"piece\" (click)=\"changeSelection(2)\">&#x265C;</div>\r\n                <div class=\"piece\" (click)=\"changeSelection(3)\">&#x265D;</div>\r\n                <div class=\"piece\" (click)=\"changeSelection(4)\">&#x265E;</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [".container{display:none;position:absolute;z-index:9999;top:0;color:#000;width:100%;height:100%;overflow:auto;background-color:#0006}.wrapper{position:relative;height:100%;width:100%}.content{background-color:#fefefe;margin:auto;position:relative;top:30%;font-size:100%;height:40%;padding:10px;border:1px solid #888;width:90%}.piece{font-size:5rem;height:100%;width:25%;cursor:pointer;display:inline-block;text-align:center}.piece img{max-width:100%}.piece:hover{background-color:#ccc;border-radius:5px}.piece-wrapper{height:80%;width:100%}#close-button{border-radius:4px;background-color:#4caf50;border:none;color:#fff;padding-left:5px;padding-right:5px;text-align:center;text-decoration:none;display:inline-block}.selected{border:2px solid #00B919;border-radius:4px;box-sizing:border-box}\n"] }]
    }], null, { modal: [{
            type: ViewChild,
            args: ['myModal', { static: false }]
        }], pieceIconInput: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jaGVzcy1ib2FyZC9zcmMvbGliL3BpZWNlLXByb21vdGlvbi9waWVjZS1wcm9tb3Rpb24tbW9kYWwvcGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jaGVzcy1ib2FyZC9zcmMvbGliL3BpZWNlLXByb21vdGlvbi9waWVjZS1wcm9tb3Rpb24tbW9kYWwvcGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDRzVELDhCQUFrRCxhQUFBO0lBQzNCLHNLQUFTLGVBQUEsdUJBQWdCLENBQUMsQ0FBQyxDQUFBLElBQUM7SUFDM0MseUJBQStDO0lBQ25ELGlCQUFNO0lBQ04sOEJBQWdEO0lBQTdCLHNLQUFTLGVBQUEsdUJBQWdCLENBQUMsQ0FBQyxDQUFBLElBQUM7SUFDM0MseUJBQTZDO0lBQ2pELGlCQUFNO0lBQ04sOEJBQWdEO0lBQTdCLHNLQUFTLGVBQUEsdUJBQWdCLENBQUMsQ0FBQyxDQUFBLElBQUM7SUFDM0MseUJBQWlEO0lBQ3JELGlCQUFNO0lBQ04sOEJBQWdEO0lBQTdCLHNLQUFTLGVBQUEsdUJBQWdCLENBQUMsQ0FBQyxDQUFBLElBQUM7SUFDM0MsMEJBQWlEO0lBQ3JELGlCQUFNLEVBQUE7OztJQVZHLGVBQTZCO0lBQTdCLG9FQUE2QjtJQUc3QixlQUE0QjtJQUE1QixtRUFBNEI7SUFHNUIsZUFBOEI7SUFBOUIscUVBQThCO0lBRzlCLGVBQThCO0lBQTlCLHFFQUE4Qjs7OztJQUczQyw4QkFBbUQsYUFBQTtJQUM1QixzS0FBUyxlQUFBLHVCQUFnQixDQUFDLENBQUMsQ0FBQSxJQUFDO0lBQUMsc0JBQVE7SUFBQSxpQkFBTTtJQUM5RCw4QkFBZ0Q7SUFBN0IsdUtBQVMsZUFBQSx3QkFBZ0IsQ0FBQyxDQUFDLENBQUEsSUFBQztJQUFDLHNCQUFRO0lBQUEsaUJBQU07SUFDOUQsOEJBQWdEO0lBQTdCLHVLQUFTLGVBQUEsd0JBQWdCLENBQUMsQ0FBQyxDQUFBLElBQUM7SUFBQyxzQkFBUTtJQUFBLGlCQUFNO0lBQzlELDhCQUFnRDtJQUE3Qix1S0FBUyxlQUFBLHdCQUFnQixDQUFDLENBQUMsQ0FBQSxJQUFDO0lBQUMsc0JBQVE7SUFBQSxpQkFBTSxFQUFBOztBRGI5RSxNQUFNLE9BQU8sNEJBQTRCO0lBTHpDO1FBYUksVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUVoQixXQUFNLEdBQUcsS0FBSyxDQUFDO0tBa0NsQjtJQS9CRyxJQUFJLENBQUMsYUFBc0M7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxhQUFhLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDckQsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN0QixRQUFRLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUN6QixLQUFLLE9BQU87Z0JBQ1IsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7Z0JBQzlHLE1BQU07WUFDVixLQUFLLE1BQU07Z0JBQ1AsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7Z0JBQzVHLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1QsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUM7Z0JBQ2hILE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1QsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUM7Z0JBQ2hILE1BQU07U0FDYjtRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7NkZBM0NRLDRCQUE0QjtvRUFBNUIsNEJBQTRCOzs7Ozs7WUNSekMsaUNBQWdDLGFBQUEsYUFBQTtZQUdwQiw2RUFhTTtZQUNOLDZFQUtNO1lBQ1YsaUJBQU0sRUFBQSxFQUFBOztZQXBCMEIsZUFBb0I7WUFBcEIseUNBQW9CO1lBY3BCLGVBQXFCO1lBQXJCLDBDQUFxQjs7O3VGRFRoRCw0QkFBNEI7Y0FMeEMsU0FBUzsyQkFDSSwyQkFBMkI7Z0JBTUUsS0FBSztrQkFBM0MsU0FBUzttQkFBQyxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBR3JDLGNBQWM7a0JBRGIsS0FBSztZQUlOLEtBQUs7a0JBREosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaWVjZUljb25JbnB1dCB9IGZyb20gJy4uLy4uL3V0aWxzL2lucHV0cy9waWVjZS1pY29uLWlucHV0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtcGllY2UtcHJvbW90aW9uLW1vZGFsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9waWVjZS1wcm9tb3Rpb24tbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBpZWNlUHJvbW90aW9uTW9kYWxDb21wb25lbnQge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ215TW9kYWwnLCB7c3RhdGljOiBmYWxzZX0pIG1vZGFsOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwaWVjZUljb25JbnB1dDogUGllY2VJY29uSW5wdXQ7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGNvbG9yID0gJ3doaXRlJztcclxuXHJcbiAgICBvcGVuZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgb25DbG9zZUNhbGxiYWNrOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuXHJcbiAgICBvcGVuKGNsb3NlQ2FsbGJhY2s6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub25DbG9zZUNhbGxiYWNrID0gY2xvc2VDYWxsYmFjaztcclxuICAgICAgICB0aGlzLm1vZGFsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU2VsZWN0aW9uKGluZGV4OiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMubW9kYWwubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkNsb3NlQ2FsbGJhY2soaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBpZWNlSWNvbihwaWVjZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgY29sb3JlZFBpZWNlID0gJyc7XHJcbiAgICAgICAgc3dpdGNoIChwaWVjZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3F1ZWVuJzpcclxuICAgICAgICAgICAgICAgIGNvbG9yZWRQaWVjZSA9IHRoaXMuY29sb3IgPT09ICd3aGl0ZScgPyB0aGlzLnBpZWNlSWNvbklucHV0LndoaXRlUXVlZW5VcmwgOiB0aGlzLnBpZWNlSWNvbklucHV0LmJsYWNrUXVlZW5Vcmw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncm9vayc6XHJcbiAgICAgICAgICAgICAgICBjb2xvcmVkUGllY2UgPSB0aGlzLmNvbG9yID09PSAnd2hpdGUnID8gdGhpcy5waWVjZUljb25JbnB1dC53aGl0ZVJvb2tVcmwgOiB0aGlzLnBpZWNlSWNvbklucHV0LmJsYWNrUm9va1VybDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdiaXNob3AnOlxyXG4gICAgICAgICAgICAgICAgY29sb3JlZFBpZWNlID0gdGhpcy5jb2xvciA9PT0gJ3doaXRlJyA/IHRoaXMucGllY2VJY29uSW5wdXQud2hpdGVCaXNob3BVcmwgOiB0aGlzLnBpZWNlSWNvbklucHV0LmJsYWNrQmlzaG9wVXJsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2tuaWdodCc6XHJcbiAgICAgICAgICAgICAgICBjb2xvcmVkUGllY2UgPSB0aGlzLmNvbG9yID09PSAnd2hpdGUnID8gdGhpcy5waWVjZUljb25JbnB1dC53aGl0ZUtuaWdodFVybCA6IHRoaXMucGllY2VJY29uSW5wdXQuYmxhY2tLbmlnaHRVcmw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb2xvcmVkUGllY2U7XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiAjbXlNb2RhbCBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGllY2Utd3JhcHBlclwiICpuZ0lmPVwicGllY2VJY29uSW5wdXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWVjZVwiIChjbGljayk9XCJjaGFuZ2VTZWxlY3Rpb24oMSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVwiZ2V0UGllY2VJY29uKCdxdWVlbicpXCIgYWx0PVwiUXVlZW5cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpZWNlXCIgKGNsaWNrKT1cImNoYW5nZVNlbGVjdGlvbigyKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XCJnZXRQaWVjZUljb24oJ3Jvb2snKVwiIGFsdD1cIlJvb2tcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpZWNlXCIgKGNsaWNrKT1cImNoYW5nZVNlbGVjdGlvbigzKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XCJnZXRQaWVjZUljb24oJ2Jpc2hvcCcpXCIgYWx0PVwiQmlzaG9wXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWVjZVwiIChjbGljayk9XCJjaGFuZ2VTZWxlY3Rpb24oNClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVwiZ2V0UGllY2VJY29uKCdrbmlnaHQnKVwiIGFsdD1cIktuaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGllY2Utd3JhcHBlclwiICpuZ0lmPVwiIXBpZWNlSWNvbklucHV0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGllY2VcIiAoY2xpY2spPVwiY2hhbmdlU2VsZWN0aW9uKDEpXCI+JiN4MjY1Qjs8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWVjZVwiIChjbGljayk9XCJjaGFuZ2VTZWxlY3Rpb24oMilcIj4mI3gyNjVDOzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpZWNlXCIgKGNsaWNrKT1cImNoYW5nZVNlbGVjdGlvbigzKVwiPiYjeDI2NUQ7PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGllY2VcIiAoY2xpY2spPVwiY2hhbmdlU2VsZWN0aW9uKDQpXCI+JiN4MjY1RTs8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==