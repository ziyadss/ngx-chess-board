import { AnimationDragStartProcessor } from './animation-drag-start-processor';
export class DragStartStrategy {
    constructor() {
        this.dragStartProcessor = new AnimationDragStartProcessor();
    }
    process(event) {
        this.dragStartProcessor.dragStarted(event);
    }
    setDragStartProcessor(processor) {
        this.dragStartProcessor = processor;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1zdGFydC1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jaGVzcy1ib2FyZC9zcmMvbGliL2VuZ2luZS9kcmFnL3N0YXJ0L2RyYWctc3RhcnQtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFJL0UsTUFBTSxPQUFPLGlCQUFpQjtJQUkxQjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLDJCQUEyQixFQUFFLENBQUM7SUFDaEUsQ0FBQztJQUVNLE9BQU8sQ0FBQyxLQUFtQjtRQUM5QixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxTQUE2QjtRQUMvQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO0lBQ3hDLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0RyYWdTdGFydCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBBbmltYXRpb25EcmFnU3RhcnRQcm9jZXNzb3IgfSBmcm9tICcuL2FuaW1hdGlvbi1kcmFnLXN0YXJ0LXByb2Nlc3Nvcic7XHJcbmltcG9ydCB7IERlZmF1bHREcmFnU3RhcnRQcm9jZXNzb3IgfSBmcm9tICcuL2RlZmF1bHQtZHJhZy1zdGFydC1wcm9jZXNzb3InO1xyXG5pbXBvcnQgeyBEcmFnU3RhcnRQcm9jZXNzb3IgfSBmcm9tICcuL2RyYWctc3RhcnQtcHJvY2Vzc29yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnU3RhcnRTdHJhdGVneSB7XHJcblxyXG4gICAgcHJpdmF0ZSBkcmFnU3RhcnRQcm9jZXNzb3I6IERyYWdTdGFydFByb2Nlc3NvcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRyYWdTdGFydFByb2Nlc3NvciA9IG5ldyBBbmltYXRpb25EcmFnU3RhcnRQcm9jZXNzb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJvY2VzcyhldmVudDogQ2RrRHJhZ1N0YXJ0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRQcm9jZXNzb3IuZHJhZ1N0YXJ0ZWQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERyYWdTdGFydFByb2Nlc3Nvcihwcm9jZXNzb3I6IERyYWdTdGFydFByb2Nlc3Nvcikge1xyXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0UHJvY2Vzc29yID0gcHJvY2Vzc29yO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=