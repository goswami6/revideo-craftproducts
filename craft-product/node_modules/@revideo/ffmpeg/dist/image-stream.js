"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageStream = void 0;
const stream_1 = require("stream");
class ImageStream extends stream_1.Readable {
    constructor() {
        super(...arguments);
        this.image = null;
        this.hasData = false;
    }
    pushImage(image) {
        this.image = image;
        this.hasData = true;
        this._read();
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _read() {
        if (this.hasData) {
            this.hasData = false;
            this.push(this.image);
        }
    }
}
exports.ImageStream = ImageStream;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utc3RyZWFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2ltYWdlLXN0cmVhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBZ0M7QUFFaEMsTUFBYSxXQUFZLFNBQVEsaUJBQVE7SUFBekM7O1FBQ1UsVUFBSyxHQUFrQixJQUFJLENBQUM7UUFDNUIsWUFBTyxHQUFHLEtBQUssQ0FBQztJQWUxQixDQUFDO0lBYlEsU0FBUyxDQUFDLEtBQW9CO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxnRUFBZ0U7SUFDaEQsS0FBSztRQUNuQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDO0lBQ0gsQ0FBQztDQUNGO0FBakJELGtDQWlCQyJ9