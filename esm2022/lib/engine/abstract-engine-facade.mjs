import { HistoryMoveProvider } from '../history-move-provider/history-move-provider';
import { King } from '../models/pieces/king';
import { Pawn } from '../models/pieces/pawn';
import { Rook } from '../models/pieces/rook';
import { Constants } from '../utils/constants';
import { PieceIconInputManager } from '../utils/inputs/piece-icon-input-manager';
import { CoordsProvider } from './coords/coords-provider';
import { DragEndStrategy } from './drag/end/drag-end-strategy';
import { DragStartStrategy } from './drag/start/drag-start-strategy';
import { ColorStrategy } from './drawing-tools/colors/color-strategy';
import { DrawProvider } from './drawing-tools/draw-provider';
import { DefaultPgnProcessor } from './pgn/default-pgn-processor';
export class AbstractEngineFacade {
    constructor(board) {
        this.dragStartStrategy = new DragStartStrategy();
        this.dragEndStrategy = new DragEndStrategy();
        this.pgnProcessor = new DefaultPgnProcessor();
        this.colorStrategy = new ColorStrategy();
        this.coords = new CoordsProvider();
        this.heightAndWidth = Constants.DEFAULT_SIZE;
        this.freeMode = false;
        this.drawProvider = new DrawProvider();
        this.pieceIconManager = new PieceIconInputManager();
        this.moveHistoryProvider = new HistoryMoveProvider();
        this.disabling = false;
        this.board = board;
    }
    checkIfPawnFirstMove(piece) {
        if (piece instanceof Pawn) {
            piece.isMovedAlready = true;
        }
    }
    checkIfRookMoved(piece) {
        if (piece instanceof Rook) {
            piece.isMovedAlready = true;
        }
    }
    checkIfKingMoved(piece) {
        if (piece instanceof King) {
            piece.isMovedAlready = true;
        }
    }
    getMoveHistory() {
        return this.moveHistoryProvider.getAll();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtZW5naW5lLWZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jaGVzcy1ib2FyZC9zcmMvbGliL2VuZ2luZS9hYnN0cmFjdC1lbmdpbmUtZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRXJGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHN0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUdqRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHbEUsTUFBTSxPQUFnQixvQkFBb0I7SUF3QnRDLFlBQXNCLEtBQVk7UUF0QjNCLHNCQUFpQixHQUFzQixJQUFJLGlCQUFpQixFQUFFLENBQUM7UUFDL0Qsb0JBQWUsR0FBb0IsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUN6RCxpQkFBWSxHQUF5QixJQUFJLG1CQUFtQixFQUFFLENBQUM7UUFDNUQsa0JBQWEsR0FBa0IsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUV0RCxXQUFNLEdBQW1CLElBQUksY0FBYyxFQUFFLENBQUM7UUFDOUMsbUJBQWMsR0FBVyxTQUFTLENBQUMsWUFBWSxDQUFDO1FBRWhELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFRakIsaUJBQVksR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRCxxQkFBZ0IsR0FBMEIsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1FBQ3RFLHdCQUFtQixHQUF3QixJQUFJLG1CQUFtQixFQUFFLENBQUM7UUFFckUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUdyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBZ0NNLG9CQUFvQixDQUFDLEtBQVk7UUFDcEMsSUFBSSxLQUFLLFlBQVksSUFBSSxFQUFFO1lBQ3ZCLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUVNLGdCQUFnQixDQUFDLEtBQVk7UUFDaEMsSUFBSSxLQUFLLFlBQVksSUFBSSxFQUFFO1lBQ3ZCLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUVNLGdCQUFnQixDQUFDLEtBQVk7UUFDaEMsSUFBSSxLQUFLLFlBQVksSUFBSSxFQUFFO1lBQ3ZCLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUVNLGNBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0MsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGllY2VQcm9tb3Rpb25Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL3BpZWNlLXByb21vdGlvbi9waWVjZS1wcm9tb3Rpb24tbW9kYWwvcGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhpc3RvcnlNb3ZlIH0gZnJvbSAnLi4vaGlzdG9yeS1tb3ZlLXByb3ZpZGVyL2hpc3RvcnktbW92ZSc7XHJcbmltcG9ydCB7IEhpc3RvcnlNb3ZlUHJvdmlkZXIgfSBmcm9tICcuLi9oaXN0b3J5LW1vdmUtcHJvdmlkZXIvaGlzdG9yeS1tb3ZlLXByb3ZpZGVyJztcclxuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuLi9tb2RlbHMvYm9hcmQnO1xyXG5pbXBvcnQgeyBLaW5nIH0gZnJvbSAnLi4vbW9kZWxzL3BpZWNlcy9raW5nJztcclxuaW1wb3J0IHsgUGF3biB9IGZyb20gJy4uL21vZGVscy9waWVjZXMvcGF3bic7XHJcbmltcG9ydCB7IFBpZWNlIH0gZnJvbSAnLi4vbW9kZWxzL3BpZWNlcy9waWVjZSc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vbW9kZWxzL3BpZWNlcy9wb2ludCc7XHJcbmltcG9ydCB7IFJvb2sgfSBmcm9tICcuLi9tb2RlbHMvcGllY2VzL3Jvb2snO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBQaWVjZUljb25JbnB1dE1hbmFnZXIgfSBmcm9tICcuLi91dGlscy9pbnB1dHMvcGllY2UtaWNvbi1pbnB1dC1tYW5hZ2VyJztcclxuaW1wb3J0IHsgQ29sb3JJbnB1dCwgUGllY2VUeXBlSW5wdXQgfSBmcm9tICcuLi91dGlscy9pbnB1dHMvcGllY2UtdHlwZS1pbnB1dCc7XHJcbmltcG9ydCB7IEJvYXJkTG9hZGVyIH0gZnJvbSAnLi9ib2FyZC1zdGF0ZS1wcm92aWRlci9ib2FyZC1sb2FkZXIvYm9hcmQtbG9hZGVyJztcclxuaW1wb3J0IHsgQ29vcmRzUHJvdmlkZXIgfSBmcm9tICcuL2Nvb3Jkcy9jb29yZHMtcHJvdmlkZXInO1xyXG5pbXBvcnQgeyBEcmFnRW5kU3RyYXRlZ3kgfSBmcm9tICcuL2RyYWcvZW5kL2RyYWctZW5kLXN0cmF0ZWd5JztcclxuaW1wb3J0IHsgRHJhZ1N0YXJ0U3RyYXRlZ3kgfSBmcm9tICcuL2RyYWcvc3RhcnQvZHJhZy1zdGFydC1zdHJhdGVneSc7XHJcbmltcG9ydCB7IENvbG9yU3RyYXRlZ3kgfSBmcm9tICcuL2RyYXdpbmctdG9vbHMvY29sb3JzL2NvbG9yLXN0cmF0ZWd5JztcclxuaW1wb3J0IHsgRHJhd1Byb3ZpZGVyIH0gZnJvbSAnLi9kcmF3aW5nLXRvb2xzL2RyYXctcHJvdmlkZXInO1xyXG5pbXBvcnQgeyBEZWZhdWx0UGduUHJvY2Vzc29yIH0gZnJvbSAnLi9wZ24vZGVmYXVsdC1wZ24tcHJvY2Vzc29yJztcclxuaW1wb3J0IHsgQWJzdHJhY3RQZ25Qcm9jZXNzb3IgfSBmcm9tICcuL3Bnbi9hYnN0cmFjdC1wZ24tcHJvY2Vzc29yJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEVuZ2luZUZhY2FkZSB7XHJcblxyXG4gICAgcHVibGljIGRyYWdTdGFydFN0cmF0ZWd5OiBEcmFnU3RhcnRTdHJhdGVneSA9IG5ldyBEcmFnU3RhcnRTdHJhdGVneSgpO1xyXG4gICAgcHVibGljIGRyYWdFbmRTdHJhdGVneTogRHJhZ0VuZFN0cmF0ZWd5ID0gbmV3IERyYWdFbmRTdHJhdGVneSgpO1xyXG4gICAgcHVibGljIHBnblByb2Nlc3NvcjogQWJzdHJhY3RQZ25Qcm9jZXNzb3IgPSBuZXcgRGVmYXVsdFBnblByb2Nlc3NvcigpO1xyXG4gICAgcHJvdGVjdGVkIGNvbG9yU3RyYXRlZ3k6IENvbG9yU3RyYXRlZ3kgPSBuZXcgQ29sb3JTdHJhdGVneSgpO1xyXG5cclxuICAgIHB1YmxpYyBjb29yZHM6IENvb3Jkc1Byb3ZpZGVyID0gbmV3IENvb3Jkc1Byb3ZpZGVyKCk7XHJcbiAgICBwdWJsaWMgaGVpZ2h0QW5kV2lkdGg6IG51bWJlciA9IENvbnN0YW50cy5ERUZBVUxUX1NJWkU7XHJcblxyXG4gICAgcHVibGljIGZyZWVNb2RlID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZHJhZ0Rpc2FibGVkOiBib29sZWFuO1xyXG4gICAgcHVibGljIGRyYXdEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBsaWdodERpc2FibGVkOiBib29sZWFuO1xyXG4gICAgcHVibGljIGRhcmtEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBib2FyZDogQm9hcmQ7XHJcbiAgICBwdWJsaWMgbW9kYWw6IFBpZWNlUHJvbW90aW9uTW9kYWxDb21wb25lbnQ7XHJcbiAgICBwdWJsaWMgYm9hcmRMb2FkZXI6IEJvYXJkTG9hZGVyO1xyXG4gICAgcHVibGljIGRyYXdQcm92aWRlcjogRHJhd1Byb3ZpZGVyID0gbmV3IERyYXdQcm92aWRlcigpO1xyXG4gICAgcHVibGljIHBpZWNlSWNvbk1hbmFnZXI6IFBpZWNlSWNvbklucHV0TWFuYWdlciA9IG5ldyBQaWVjZUljb25JbnB1dE1hbmFnZXIoKTtcclxuICAgIHB1YmxpYyBtb3ZlSGlzdG9yeVByb3ZpZGVyOiBIaXN0b3J5TW92ZVByb3ZpZGVyID0gbmV3IEhpc3RvcnlNb3ZlUHJvdmlkZXIoKTtcclxuICAgIHB1YmxpYyBtb3ZlRG9uZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBkaXNhYmxpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoYm9hcmQ6IEJvYXJkKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCByZXNldCgpOiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCB1bmRvKCk6IHZvaWQ7XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IG1vdmUoY29vcmRzOiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBhZGRQaWVjZShcclxuICAgICAgICBwaWVjZVR5cGVJbnB1dDogUGllY2VUeXBlSW5wdXQsXHJcbiAgICAgICAgY29sb3JJbnB1dDogQ29sb3JJbnB1dCxcclxuICAgICAgICBjb29yZHM6IHN0cmluZ1xyXG4gICAgKTogdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgb25Nb3VzZVVwKFxyXG4gICAgICAgIGV2ZW50OiBNb3VzZUV2ZW50LFxyXG4gICAgICAgIHBvaW50Q2xpY2tlZDogUG9pbnQsXHJcbiAgICAgICAgbGVmdDogbnVtYmVyLFxyXG4gICAgICAgIHRvcDogbnVtYmVyXHJcbiAgICApOiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvbk1vdXNlRG93bihcclxuICAgICAgICBldmVudDogTW91c2VFdmVudCxcclxuICAgICAgICBwb2ludENsaWNrZWQ6IFBvaW50LFxyXG4gICAgICAgIGxlZnQ/OiBudW1iZXIsXHJcbiAgICAgICAgdG9wPzogbnVtYmVyXHJcbiAgICApOiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvbkNvbnRleHRNZW51KFxyXG4gICAgICAgIGV2ZW50OiBNb3VzZUV2ZW50LFxyXG4gICAgKTogdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgY2hlY2tJZlBhd25GaXJzdE1vdmUocGllY2U6IFBpZWNlKSB7XHJcbiAgICAgICAgaWYgKHBpZWNlIGluc3RhbmNlb2YgUGF3bikge1xyXG4gICAgICAgICAgICBwaWVjZS5pc01vdmVkQWxyZWFkeSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGVja0lmUm9va01vdmVkKHBpZWNlOiBQaWVjZSkge1xyXG4gICAgICAgIGlmIChwaWVjZSBpbnN0YW5jZW9mIFJvb2spIHtcclxuICAgICAgICAgICAgcGllY2UuaXNNb3ZlZEFscmVhZHkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hlY2tJZktpbmdNb3ZlZChwaWVjZTogUGllY2UpIHtcclxuICAgICAgICBpZiAocGllY2UgaW5zdGFuY2VvZiBLaW5nKSB7XHJcbiAgICAgICAgICAgIHBpZWNlLmlzTW92ZWRBbHJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1vdmVIaXN0b3J5KCk6IEhpc3RvcnlNb3ZlW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVIaXN0b3J5UHJvdmlkZXIuZ2V0QWxsKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==