import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxChessBoardComponent } from './ngx-chess-board.component';
import { PiecePromotionModalComponent } from './piece-promotion/piece-promotion-modal/piece-promotion-modal.component';
import * as i0 from "@angular/core";
export class NgxChessBoardModule {
    static { this.ɵfac = function NgxChessBoardModule_Factory(t) { return new (t || NgxChessBoardModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxChessBoardModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, DragDropModule] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxChessBoardModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxChessBoardComponent, PiecePromotionModalComponent],
                imports: [CommonModule, DragDropModule],
                exports: [NgxChessBoardComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxChessBoardModule, { declarations: [NgxChessBoardComponent, PiecePromotionModalComponent], imports: [CommonModule, DragDropModule], exports: [NgxChessBoardComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNoZXNzLWJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jaGVzcy1ib2FyZC9zcmMvbGliL25neC1jaGVzcy1ib2FyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlFQUF5RSxDQUFDOztBQU92SCxNQUFNLE9BQU8sbUJBQW1CO29GQUFuQixtQkFBbUI7bUVBQW5CLG1CQUFtQjt1RUFIbEIsWUFBWSxFQUFFLGNBQWM7O3VGQUc3QixtQkFBbUI7Y0FML0IsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLDRCQUE0QixDQUFDO2dCQUNwRSxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDO2dCQUN2QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNwQzs7d0ZBQ1ksbUJBQW1CLG1CQUpiLHNCQUFzQixFQUFFLDRCQUE0QixhQUN6RCxZQUFZLEVBQUUsY0FBYyxhQUM1QixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hDaGVzc0JvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtY2hlc3MtYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGllY2VQcm9tb3Rpb25Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vcGllY2UtcHJvbW90aW9uL3BpZWNlLXByb21vdGlvbi1tb2RhbC9waWVjZS1wcm9tb3Rpb24tbW9kYWwuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtOZ3hDaGVzc0JvYXJkQ29tcG9uZW50LCBQaWVjZVByb21vdGlvbk1vZGFsQ29tcG9uZW50XSxcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERyYWdEcm9wTW9kdWxlXSxcclxuICAgIGV4cG9ydHM6IFtOZ3hDaGVzc0JvYXJkQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neENoZXNzQm9hcmRNb2R1bGUge31cclxuIl19