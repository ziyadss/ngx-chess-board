export class DefaultDragStartProcessor {
    dragStarted(event) {
        const style = event.source.element.nativeElement.style;
        style.position = 'relative';
        style.zIndex = '1000';
        style.touchAction = 'none';
        style.pointerEvents = 'none';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1kcmFnLXN0YXJ0LXByb2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jaGVzcy1ib2FyZC9zcmMvbGliL2VuZ2luZS9kcmFnL3N0YXJ0L2RlZmF1bHQtZHJhZy1zdGFydC1wcm9jZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxPQUFPLHlCQUF5QjtJQUVsQyxXQUFXLENBQUMsS0FBbUI7UUFDM0IsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN2RCxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUM1QixLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN0QixLQUFLLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUMzQixLQUFLLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtEcmFnU3RhcnQgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuaW1wb3J0IHsgRHJhZ1N0YXJ0UHJvY2Vzc29yIH0gZnJvbSAnLi9kcmFnLXN0YXJ0LXByb2Nlc3Nvcic7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdERyYWdTdGFydFByb2Nlc3NvciBpbXBsZW1lbnRzIERyYWdTdGFydFByb2Nlc3NvciB7XHJcblxyXG4gICAgZHJhZ1N0YXJ0ZWQoZXZlbnQ6IENka0RyYWdTdGFydCkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gZXZlbnQuc291cmNlLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZTtcclxuICAgICAgICBzdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgc3R5bGUuekluZGV4ID0gJzEwMDAnO1xyXG4gICAgICAgIHN0eWxlLnRvdWNoQWN0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgIHN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==