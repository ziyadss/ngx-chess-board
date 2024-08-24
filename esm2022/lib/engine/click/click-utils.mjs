import { Point } from '../../models/pieces/point';
import { DrawPoint } from '../drawing-tools/draw-point';
export class ClickUtils {
    static getClickPoint(event, top, height, left, width) {
        return new Point(Math.floor((event.y - top) / (height / 8)), Math.floor((event.x - left) / (width / 8)));
    }
    static getDrawingPoint(tileSize, colorStrategy, x, y, ctrl, alt, shift, xAxis, yAxis) {
        const squareSize = tileSize / 8;
        const xx = Math.floor((x - xAxis) /
            squareSize);
        const yy = Math.floor((y - yAxis) /
            squareSize);
        let color = colorStrategy.resolve(ctrl, shift, alt);
        return new DrawPoint(Math.floor(xx * squareSize + squareSize / 2), Math.floor(yy * squareSize + squareSize / 2), color);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtY2hlc3MtYm9hcmQvc3JjL2xpYi9lbmdpbmUvY2xpY2svY2xpY2stdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWxELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV4RCxNQUFNLE9BQU8sVUFBVTtJQUVuQixNQUFNLENBQUMsYUFBYSxDQUNoQixLQUFVLEVBQ1YsR0FBVyxFQUNYLE1BQWMsRUFDZCxJQUFZLEVBQ1osS0FBYTtRQUViLE9BQU8sSUFBSSxLQUFLLENBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQ3hDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCxNQUFNLENBQUMsZUFBZSxDQUNsQixRQUFnQixFQUNoQixhQUE0QixFQUM1QixDQUFTLEVBQ1QsQ0FBUyxFQUNULElBQWEsRUFDYixHQUFZLEVBQ1osS0FBYyxFQUNkLEtBQWEsRUFDYixLQUFhO1FBRWIsTUFBTSxVQUFVLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNoQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUNqQixDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDWCxVQUFVLENBQ2IsQ0FBQztRQUNGLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQ2pCLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNYLFVBQVUsQ0FDYixDQUFDO1FBRUYsSUFBSSxLQUFLLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXBELE9BQU8sSUFBSSxTQUFTLENBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLFVBQVUsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLFVBQVUsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQzVDLEtBQUssQ0FDUixDQUFDO0lBQ04sQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvcGllY2VzL3BvaW50JztcclxuaW1wb3J0IHsgQ29sb3JTdHJhdGVneSB9IGZyb20gJy4uL2RyYXdpbmctdG9vbHMvY29sb3JzL2NvbG9yLXN0cmF0ZWd5JztcclxuaW1wb3J0IHsgRHJhd1BvaW50IH0gZnJvbSAnLi4vZHJhd2luZy10b29scy9kcmF3LXBvaW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDbGlja1V0aWxzIHtcclxuXHJcbiAgICBzdGF0aWMgZ2V0Q2xpY2tQb2ludChcclxuICAgICAgICBldmVudDogYW55LFxyXG4gICAgICAgIHRvcDogbnVtYmVyLFxyXG4gICAgICAgIGhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgIGxlZnQ6IG51bWJlcixcclxuICAgICAgICB3aWR0aDogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKChldmVudC55IC0gdG9wKSAvIChoZWlnaHQgLyA4KSksXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IoKGV2ZW50LnggLSBsZWZ0KSAvICh3aWR0aCAvIDgpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXREcmF3aW5nUG9pbnQoXHJcbiAgICAgICAgdGlsZVNpemU6IG51bWJlcixcclxuICAgICAgICBjb2xvclN0cmF0ZWd5OiBDb2xvclN0cmF0ZWd5LFxyXG4gICAgICAgIHg6IG51bWJlcixcclxuICAgICAgICB5OiBudW1iZXIsXHJcbiAgICAgICAgY3RybDogYm9vbGVhbixcclxuICAgICAgICBhbHQ6IGJvb2xlYW4sXHJcbiAgICAgICAgc2hpZnQ6IGJvb2xlYW4sXHJcbiAgICAgICAgeEF4aXM6IG51bWJlcixcclxuICAgICAgICB5QXhpczogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBzcXVhcmVTaXplID0gdGlsZVNpemUgLyA4O1xyXG4gICAgICAgIGNvbnN0IHh4ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgKHggLSB4QXhpcykgL1xyXG4gICAgICAgICAgICBzcXVhcmVTaXplXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCB5eSA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgICAgICh5IC0geUF4aXMpIC9cclxuICAgICAgICAgICAgc3F1YXJlU2l6ZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBjb2xvciA9IGNvbG9yU3RyYXRlZ3kucmVzb2x2ZShjdHJsLCBzaGlmdCwgYWx0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBEcmF3UG9pbnQoXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IoeHggKiBzcXVhcmVTaXplICsgc3F1YXJlU2l6ZSAvIDIpLFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKHl5ICogc3F1YXJlU2l6ZSArIHNxdWFyZVNpemUgLyAyKSxcclxuICAgICAgICAgICAgY29sb3JcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=