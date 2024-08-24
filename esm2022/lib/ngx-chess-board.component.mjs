import { Component, EventEmitter, HostListener, Input, Output, ViewChild, } from '@angular/core';
import { BoardLoader } from './engine/board-state-provider/board-loader/board-loader';
import { NotationProcessorFactory, NotationType, } from './engine/board-state-provider/board-loader/notation-processors/notation-processor-factory';
import { ClickUtils } from './engine/click/click-utils';
import { EngineFacade } from './engine/engine-facade';
import { Board } from './models/board';
import { Constants } from './utils/constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/drag-drop";
import * as i3 from "./piece-promotion/piece-promotion-modal/piece-promotion-modal.component";
const _c0 = ["boardRef"];
const _c1 = ["modal"];
function NgxChessBoardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵlistener("cdkDragEnded", function NgxChessBoardComponent_div_3_Template_div_cdkDragEnded_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.dragEnded($event)); })("cdkDragMoved", function NgxChessBoardComponent_div_3_Template_div_cdkDragMoved_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.dragMoved($event)); })("cdkDragStarted", function NgxChessBoardComponent_div_3_Template_div_cdkDragStarted_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.dragStart($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const piece_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("transform", "translate3d(" + piece_r7.point.col * ctx_r1.pieceSize + "px, " + piece_r7.point.row * ctx_r1.pieceSize + "px,0px)")("max-height", ctx_r1.pieceSize + "px")("font-size", ctx_r1.pieceSize * 0.8 + "px")("width", ctx_r1.pieceSize + "px")("height", ctx_r1.pieceSize + "px")("--animation-duration", ctx_r1.animationDuration + "ms");
    i0.ɵɵproperty("cdkDragDisabled", ctx_r1.engineFacade.dragDisabled)("innerHTML", ctx_r1.engineFacade.pieceIconManager.isDefaultIcons() ? piece_r7.constant.icon : "", i0.ɵɵsanitizeHtml)("ngStyle", ctx_r1.engineFacade.pieceIconManager.isDefaultIcons() ? "" : ctx_r1.getCustomPieceIcons(piece_r7));
} }
function NgxChessBoardComponent_div_4_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r14 = i0.ɵɵnextContext(2).index;
    const ctx_r18 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("color", i_r14 % 2 === 0 ? ctx_r18.lightTileColor : ctx_r18.darkTileColor)("font-size", ctx_r18.pieceSize / 4, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r18.engineFacade.coords.yCoords[i_r14], " ");
} }
function NgxChessBoardComponent_div_4_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r17 = i0.ɵɵnextContext().index;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("color", j_r17 % 2 === 0 ? ctx_r19.lightTileColor : ctx_r19.darkTileColor)("font-size", ctx_r19.pieceSize / 4, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r19.engineFacade.coords.xCoords[j_r17], " ");
} }
function NgxChessBoardComponent_div_4_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelement(1, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("font-size", ctx_r20.pieceSize + "px");
    i0.ɵɵproperty("ngClass", "piece");
} }
function NgxChessBoardComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, NgxChessBoardComponent_div_4_div_1_span_1_Template, 2, 5, "span", 15);
    i0.ɵɵtemplate(2, NgxChessBoardComponent_div_4_div_1_span_2_Template, 2, 5, "span", 16);
    i0.ɵɵtemplate(3, NgxChessBoardComponent_div_4_div_1_div_3_Template, 2, 3, "div", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r17 = ctx.index;
    const i_r14 = i0.ɵɵnextContext().index;
    const ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-color", ctx_r15.getTileBackgroundColor(i_r14, j_r17));
    i0.ɵɵclassProp("current-selection", ctx_r15.showActivePiece && ctx_r15.engineFacade.board.isXYInActiveMove(i_r14, j_r17))("king-check", ctx_r15.engineFacade.board.isKingChecked(ctx_r15.engineFacade.board.getPieceByPoint(i_r14, j_r17)))("point-circle", ctx_r15.engineFacade.board.isXYInPointSelection(i_r14, j_r17))("possible-capture", ctx_r15.showPossibleCaptures && ctx_r15.engineFacade.board.isXYInPossibleCaptures(i_r14, j_r17))("possible-point", ctx_r15.engineFacade.board.isXYInPossibleMoves(i_r14, j_r17) && ctx_r15.showLegalMoves);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r15.showCoords && j_r17 === 7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r15.showCoords && i_r14 === 7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r15.engineFacade.board.getPieceByPoint(i_r14, j_r17));
} }
function NgxChessBoardComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, NgxChessBoardComponent_div_4_div_1_Template, 4, 15, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r13);
} }
function NgxChessBoardComponent__svg_defs_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "defs")(1, "marker", 22);
    i0.ɵɵelement(2, "path", 23);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const color_r25 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", ctx_r3.randomId + color_r25 + "Arrow");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("fill", color_r25);
} }
function NgxChessBoardComponent__svg_line_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "line", 24);
} if (rf & 2) {
    const arrow_r26 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵattribute("marker-end", "url(#" + ctx_r4.randomId + arrow_r26.end.color + "Arrow)")("stroke", arrow_r26.end.color)("x1", arrow_r26.start.x)("x2", arrow_r26.end.x)("y1", arrow_r26.start.y)("y2", arrow_r26.end.y);
} }
function NgxChessBoardComponent__svg_circle_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "circle", 25);
} if (rf & 2) {
    const circle_r27 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵattribute("cx", circle_r27.drawPoint.x)("cy", circle_r27.drawPoint.y)("r", ctx_r5.engineFacade.heightAndWidth / 18)("stroke", circle_r27.drawPoint.color);
} }
const _c2 = function () { return ["red", "green", "blue", "orange"]; };
export class NgxChessBoardComponent {
    constructor() {
        this.darkTileColor = Constants.DEFAULT_DARK_TILE_COLOR;
        this.lightTileColor = Constants.DEFAULT_LIGHT_TILE_COLOR;
        this.showCoords = true;
        this.sourcePointColor = Constants.DEFAULT_SOURCE_POINT_COLOR;
        this.destinationPointColor = Constants.DEFAULT_DESTINATION_POINT_COLOR;
        this.legalMovesPointColor = Constants.DEFAULT_LEGAL_MOVE_POINT_COLOR;
        this.showLastMove = true;
        this.showLegalMoves = true;
        this.showActivePiece = true;
        this.animationDuration = 200;
        this.showPossibleCaptures = true;
        /**
         * Enabling free mode removes turn-based restriction and allows to move any piece freely!
         */
        this.moveChange = new EventEmitter();
        this.checkmate = new EventEmitter();
        this.stalemate = new EventEmitter();
        this.selected = false;
        this.isDragging = false;
        this.startTransition = '';
        this.randomId = (Math.random() + 1).toString(36).substring(7);
        this.updateBoard = (board) => {
            this.engineFacade.board = board;
            this.engineFacade.board.possibleCaptures = [];
            this.engineFacade.board.possibleMoves = [];
            this.boardLoader = new BoardLoader(this.engineFacade);
            this.boardLoader.setEngineFacade(this.engineFacade);
        };
        this.engineFacade = new EngineFacade(new Board(), this.moveChange);
    }
    set size(size) {
        if (size &&
            size >= Constants.MIN_BOARD_SIZE &&
            size <= Constants.MAX_BOARD_SIZE) {
            this.engineFacade.heightAndWidth = size;
        }
        else {
            this.engineFacade.heightAndWidth = Constants.DEFAULT_SIZE;
        }
        this.engineFacade.drawProvider.clear();
        this.calculatePieceSize();
    }
    set freeMode(freeMode) {
        this.engineFacade.freeMode = freeMode;
    }
    set dragDisabled(dragDisabled) {
        this.engineFacade.dragDisabled = dragDisabled;
    }
    set drawDisabled(drawDisabled) {
        this.engineFacade.drawDisabled = drawDisabled;
    }
    set pieceIcons(pieceIcons) {
        this.engineFacade.pieceIconManager.pieceIconInput = pieceIcons;
    }
    set lightDisabled(lightDisabled) {
        this.engineFacade.lightDisabled = lightDisabled;
    }
    set darkDisabled(darkDisabled) {
        this.engineFacade.darkDisabled = darkDisabled;
    }
    onRightClick(event) {
        event.preventDefault();
    }
    ngOnChanges(changes) {
        if ((changes.lightDisabled &&
            this.lightDisabled &&
            this.engineFacade.board.currentWhitePlayer) ||
            (changes.darkDisabled &&
                this.darkDisabled &&
                !this.engineFacade.board.currentWhitePlayer)) {
            this.engineFacade.board.possibleCaptures = [];
            this.engineFacade.board.possibleMoves = [];
        }
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.engineFacade.modal = this.modal;
        this.calculatePieceSize();
    }
    onMouseUp(event) {
        this.engineFacade.onMouseUp(event, this.getClickPoint(event), this.boardRef.nativeElement.getBoundingClientRect().left, this.boardRef.nativeElement.getBoundingClientRect().top);
    }
    reverse() {
        this.selected = false;
        this.engineFacade.board.reverse();
        this.engineFacade.coords.reverse();
    }
    setFEN(fen) {
        try {
            this.engineFacade.boardLoader.setNotationProcessor(NotationProcessorFactory.getProcessor(NotationType.FEN));
            this.engineFacade.boardLoader.loadFEN(fen);
            this.engineFacade.board.possibleCaptures = [];
            this.engineFacade.board.possibleMoves = [];
            this.engineFacade.coords.reset();
        }
        catch (exception) {
            this.engineFacade.boardLoader.addPieces();
        }
    }
    setPGN(pgn) {
        try {
            this.engineFacade.pgnProcessor.reset();
            this.engineFacade.boardLoader.setNotationProcessor(NotationProcessorFactory.getProcessor(NotationType.PGN));
            this.engineFacade.boardLoader.loadPGN(pgn);
            this.engineFacade.board.possibleCaptures = [];
            this.engineFacade.board.possibleMoves = [];
            this.engineFacade.coords.reset();
        }
        catch (exception) {
            console.log(exception);
            this.engineFacade.boardLoader.addPieces();
        }
    }
    getFEN() {
        return this.engineFacade.board.fen;
    }
    dragEnded(event) {
        this.isDragging = false;
        this.engineFacade.dragEndStrategy.process(event, this.engineFacade.moveDone, this.startTransition);
    }
    dragStart(event) {
        this.isDragging = true;
        let trans = event.source.getRootElement().style.transform.split(') ');
        //   this.startTrans= trans;
        this.startTransition = trans.length === 2 ? trans[1] : trans[0];
        this.engineFacade.dragStartStrategy.process(event);
    }
    onMouseDown(event) {
        this.engineFacade.onMouseDown(event, this.getClickPoint(event), this.boardRef.nativeElement.getBoundingClientRect().left, this.boardRef.nativeElement.getBoundingClientRect().top);
    }
    onContextMenu(event) {
        this.engineFacade.onContextMenu(event);
    }
    getClickPoint(event) {
        return ClickUtils.getClickPoint(event, this.boardRef.nativeElement.getBoundingClientRect().top, this.boardRef.nativeElement.getBoundingClientRect().height, this.boardRef.nativeElement.getBoundingClientRect().left, this.boardRef.nativeElement.getBoundingClientRect().width);
    }
    calculatePieceSize() {
        this.pieceSize = this.engineFacade.heightAndWidth / 8;
    }
    getCustomPieceIcons(piece) {
        return JSON.parse(`{ "background-image": "url('${this.engineFacade.pieceIconManager.getPieceIcon(piece)}')"}`);
    }
    move(coords) {
        this.engineFacade.move(coords);
    }
    getMoveHistory() {
        return this.engineFacade.getMoveHistory();
    }
    reset() {
        this.engineFacade.reset();
    }
    undo() {
        this.engineFacade.undo();
    }
    addPiece(pieceTypeInput, colorInput, coords) {
        this.engineFacade.addPiece(pieceTypeInput, colorInput, coords);
    }
    getPGN() {
        return this.engineFacade.pgnProcessor.getPGN();
    }
    dragMoved($event) {
        let x = ($event.pointerPosition.x - $event.source.getRootElement().parentElement.getBoundingClientRect().left) - (this.pieceSize / 2);
        let y = ($event.pointerPosition.y - $event.source.getRootElement().parentElement.getBoundingClientRect().top) - (this.pieceSize / 2);
        $event.source.getRootElement().style.transform = 'translate3d(' + x + 'px, '
            + (y) + 'px,0px)';
    }
    getTileBackgroundColor(i, j) {
        let color = ((i + j) % 2 === 0) ? this.lightTileColor : this.darkTileColor;
        if (this.showLastMove) {
            if (this.engineFacade.board.isXYInSourceMove(i, j)) {
                color = this.sourcePointColor;
            }
            if (this.engineFacade.board.isXYInDestMove(i, j)) {
                color = this.destinationPointColor;
            }
        }
        return color;
    }
    static { this.ɵfac = function NgxChessBoardComponent_Factory(t) { return new (t || NgxChessBoardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxChessBoardComponent, selectors: [["ngx-chess-board"]], viewQuery: function NgxChessBoardComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.boardRef = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modal = _t.first);
        } }, hostBindings: function NgxChessBoardComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("contextmenu", function NgxChessBoardComponent_contextmenu_HostBindingHandler($event) { return ctx.onRightClick($event); });
        } }, inputs: { darkTileColor: "darkTileColor", lightTileColor: "lightTileColor", showCoords: "showCoords", sourcePointColor: "sourcePointColor", destinationPointColor: "destinationPointColor", legalMovesPointColor: "legalMovesPointColor", showLastMove: "showLastMove", showLegalMoves: "showLegalMoves", showActivePiece: "showActivePiece", animationDuration: "animationDuration", showPossibleCaptures: "showPossibleCaptures", size: "size", freeMode: "freeMode", dragDisabled: "dragDisabled", drawDisabled: "drawDisabled", pieceIcons: "pieceIcons", lightDisabled: "lightDisabled", darkDisabled: "darkDisabled" }, outputs: { moveChange: "moveChange", checkmate: "checkmate", stalemate: "stalemate" }, features: [i0.ɵɵNgOnChangesFeature], decls: 13, vars: 18, consts: [["id", "board", 3, "contextmenu", "pointerdown", "pointerup"], ["boardRef", ""], ["id", "drag"], ["class", "single-piece", "cdkDrag", "", 3, "cdkDragDisabled", "innerHTML", "ngStyle", "transform", "max-height", "font-size", "width", "height", "--animation-duration", "cdkDragEnded", "cdkDragMoved", "cdkDragStarted", 4, "ngFor", "ngForOf"], ["class", "board-row", 4, "ngFor", "ngForOf"], [2, "position", "absolute", "top", "0", "pointer-events", "none"], [4, "ngFor", "ngForOf"], ["class", "arrow", 4, "ngFor", "ngForOf"], ["fill-opacity", "0.0", "stroke-width", "2", 4, "ngFor", "ngForOf"], [3, "pieceIconInput", "color"], ["modal", ""], ["cdkDrag", "", 1, "single-piece", 3, "cdkDragDisabled", "innerHTML", "ngStyle", "cdkDragEnded", "cdkDragMoved", "cdkDragStarted"], [1, "board-row"], ["class", "board-col", 3, "current-selection", "king-check", "point-circle", "possible-capture", "possible-point", "background-color", 4, "ngFor", "ngForOf"], [1, "board-col"], ["class", "yCoord", 3, "color", "font-size", 4, "ngIf"], ["class", "xCoord", 3, "color", "font-size", 4, "ngIf"], ["style", "height:100%; width:100%", 4, "ngIf"], [1, "yCoord"], [1, "xCoord"], [2, "height", "100%", "width", "100%"], [3, "ngClass"], ["markerHeight", "13", "markerWidth", "13", "orient", "auto", "refX", "9", "refY", "6", 3, "id"], ["d", "M2,2 L2,11 L10,6 L2,2"], [1, "arrow"], ["fill-opacity", "0.0", "stroke-width", "2"]], template: function NgxChessBoardComponent_Template(rf, ctx) { if (rf & 1) {
            const _r28 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵlistener("contextmenu", function NgxChessBoardComponent_Template_div_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r28); const _r6 = i0.ɵɵreference(12); return i0.ɵɵresetView(!_r6.opened && ctx.onContextMenu($event)); })("pointerdown", function NgxChessBoardComponent_Template_div_pointerdown_0_listener($event) { i0.ɵɵrestoreView(_r28); const _r6 = i0.ɵɵreference(12); return i0.ɵɵresetView(!_r6.opened && ctx.onMouseDown($event)); })("pointerup", function NgxChessBoardComponent_Template_div_pointerup_0_listener($event) { i0.ɵɵrestoreView(_r28); const _r6 = i0.ɵɵreference(12); return i0.ɵɵresetView(!_r6.opened && ctx.onMouseUp($event)); });
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, NgxChessBoardComponent_div_3_Template, 1, 15, "div", 3);
            i0.ɵɵtemplate(4, NgxChessBoardComponent_div_4_Template, 2, 1, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(5, "svg", 5);
            i0.ɵɵtemplate(6, NgxChessBoardComponent__svg_defs_6_Template, 3, 3, "defs", 6);
            i0.ɵɵtemplate(7, NgxChessBoardComponent__svg_line_7_Template, 1, 6, "line", 7);
            i0.ɵɵpipe(8, "async");
            i0.ɵɵtemplate(9, NgxChessBoardComponent__svg_circle_9_Template, 1, 4, "circle", 8);
            i0.ɵɵpipe(10, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(11, "app-piece-promotion-modal", 9, 10);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("height", ctx.engineFacade.heightAndWidth, "px")("width", ctx.engineFacade.heightAndWidth, "px");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.engineFacade.board.pieces);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.engineFacade.board.board);
            i0.ɵɵadvance(1);
            i0.ɵɵattribute("height", ctx.engineFacade.heightAndWidth)("width", ctx.engineFacade.heightAndWidth);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpureFunction0(17, _c2));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(8, 13, ctx.engineFacade.drawProvider.arrows$));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(10, 15, ctx.engineFacade.drawProvider.circles$));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("pieceIconInput", ctx.engineFacade.pieceIconManager.pieceIconInput)("color", ctx.engineFacade.board.getCurrentPlayerColor() ? "white" : "black");
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgStyle, i2.CdkDrag, i3.PiecePromotionModalComponent, i1.AsyncPipe], styles: ["@charset \"UTF-8\";#board[_ngcontent-%COMP%]{font-family:Courier New,serif;position:relative}.board-row[_ngcontent-%COMP%]{display:block;width:100%;height:12.5%;position:relative}.board-col[_ngcontent-%COMP%]{position:relative;display:inline-block;width:12.5%;vertical-align:top;cursor:default;height:100%}.piece[_ngcontent-%COMP%]{height:100%;cursor:grab;width:100%;-moz-user-select:none;user-select:none;-webkit-user-select:none;background-size:cover;justify-content:center;text-align:center;color:#000!important;box-sizing:border-box}.piece[_ngcontent-%COMP%]:after{content:\"\\200b\";box-sizing:border-box}#drag[_ngcontent-%COMP%]{height:100%;width:100%}.possible-point[_ngcontent-%COMP%]{background:radial-gradient(#13262F 15%,transparent 20%)}.possible-point[_ngcontent-%COMP%]:hover, .possible-capture[_ngcontent-%COMP%]:hover{opacity:.4}.possible-capture[_ngcontent-%COMP%]{background:radial-gradient(transparent 0%,transparent 80%,#13262F 80%);opacity:.5;box-sizing:border-box;margin:0;padding:0}.king-check[_ngcontent-%COMP%]{background:radial-gradient(ellipse at center,red,#e70000 25%,#a9000000 89%,#9e000000)}.current-selection[_ngcontent-%COMP%]{background-color:#72620b!important}.yCoord[_ngcontent-%COMP%]{position:absolute;-moz-user-select:none;user-select:none;-webkit-user-select:none;cursor:pointer;right:.2em;font-family:Lucida Console,Courier,monospace;box-sizing:border-box}.xCoord[_ngcontent-%COMP%]{position:absolute;-moz-user-select:none;user-select:none;-webkit-user-select:none;cursor:pointer;left:.2em;bottom:0;font-family:Lucida Console,Courier,monospace;box-sizing:border-box}.hovering[_ngcontent-%COMP%]{background-color:red!important}.arrow[_ngcontent-%COMP%]{stroke-width:2}svg[_ngcontent-%COMP%]{filter:drop-shadow(1px 1px 0px #111) drop-shadow(-1px 1px 0px #111) drop-shadow(1px -1px 0px #111) drop-shadow(-1px -1px 0px #111)}[_nghost-%COMP%]{display:inline-block}.single-piece[_ngcontent-%COMP%]{position:absolute;z-index:999;justify-content:center;text-align:center;-moz-user-select:none;user-select:none;-webkit-user-select:none;color:#000!important;cursor:grab;background-size:cover}.single-piece[_ngcontent-%COMP%]:after{content:\"\\200b\";box-sizing:border-box}.cdk-drag[_ngcontent-%COMP%]:not(.cdk-drag-dragging){transition:transform var(--animation-duration) cubic-bezier(0,.3,.14,.49)}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxChessBoardComponent, [{
        type: Component,
        args: [{ selector: 'ngx-chess-board', template: "<div\r\n    id=\"board\"\r\n    [style.height.px]=\"engineFacade.heightAndWidth\"\r\n    [style.width.px]=\"engineFacade.heightAndWidth\"\r\n    (contextmenu)=\"!modal.opened && onContextMenu($event)\"\r\n    (pointerdown)=\"!modal.opened && onMouseDown($event)\"\r\n    (pointerup)=\"!modal.opened && onMouseUp($event)\"\r\n    #boardRef\r\n>\r\n    <div id=\"drag\">\r\n        <div\r\n            [cdkDragDisabled]=\"engineFacade.dragDisabled\"\r\n            (cdkDragEnded)=\"dragEnded($event)\"\r\n            (cdkDragMoved)=\"dragMoved($event)\"\r\n            (cdkDragStarted)=\"dragStart($event)\"\r\n            class=\"single-piece\" [innerHTML]=\"engineFacade.pieceIconManager.isDefaultIcons() ? piece.constant.icon : ''\"\r\n            [ngStyle]=\"engineFacade.pieceIconManager.isDefaultIcons() ? '' : getCustomPieceIcons(piece)\"\r\n            [style.transform]=\"'translate3d(' + piece.point.col * pieceSize + 'px, ' + piece.point.row * pieceSize + 'px,0px)'\"\r\n            [style.max-height]=\"pieceSize + 'px'\"\r\n            [style.font-size]=\"pieceSize * 0.8 + 'px'\"\r\n            [style.width]=\"pieceSize + 'px'\"\r\n            [style.height]=\"pieceSize + 'px'\"\r\n            cdkDrag\r\n            [style.--animation-duration]=\"animationDuration + 'ms'\"\r\n            *ngFor=\"let piece of engineFacade.board.pieces; let i = index\"\r\n        >\r\n        </div>\r\n        <div\r\n            class=\"board-row\"\r\n            *ngFor=\"let row of engineFacade.board.board; let i = index\"\r\n        >\r\n            <div\r\n                class=\"board-col\"\r\n                [class.current-selection]=\"showActivePiece && engineFacade.board.isXYInActiveMove(i,j)\"\r\n                [class.king-check]=\" engineFacade.board.isKingChecked(engineFacade.board.getPieceByPoint(i,j))\"\r\n                [class.point-circle]=\"engineFacade.board.isXYInPointSelection(i, j)\"\r\n                [class.possible-capture]=\"showPossibleCaptures && engineFacade.board.isXYInPossibleCaptures(i, j)\"\r\n                [class.possible-point]=\"engineFacade.board.isXYInPossibleMoves(i, j) && showLegalMoves\"\r\n                [style.background-color]=\"getTileBackgroundColor(i, j)\"\r\n                *ngFor=\"let col of row; let j = index\"\r\n            >\r\n                <span\r\n                    class=\"yCoord\"\r\n                    [style.color]=\"(i % 2 === 0) ? lightTileColor : darkTileColor\"\r\n                    [style.font-size.px]=\"pieceSize / 4\"\r\n                    *ngIf=\"showCoords && j === 7\"\r\n                >\r\n                    {{engineFacade.coords.yCoords[i]}}\r\n                </span>\r\n                <span\r\n                    class=\"xCoord\"\r\n                    [style.color]=\"(j % 2 === 0) ? lightTileColor : darkTileColor\"\r\n                    [style.font-size.px]=\"pieceSize / 4\"\r\n                    *ngIf=\"showCoords && i === 7\"\r\n                >\r\n                    {{engineFacade.coords.xCoords[j]}}\r\n                </span>\r\n                <div\r\n                    *ngIf=\"engineFacade.board.getPieceByPoint(i, j) as piece\"\r\n                    style=\"height:100%; width:100%\"\r\n                >\r\n                    <div\r\n                        [ngClass]=\"'piece'\"\r\n                        [style.font-size]=\"pieceSize + 'px'\"\r\n\r\n                    >\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <svg\r\n        [attr.height]=\"engineFacade.heightAndWidth\"\r\n        [attr.width]=\"engineFacade.heightAndWidth\"\r\n        style=\"position:absolute; top:0; pointer-events: none\"\r\n    >\r\n        <defs *ngFor=\"let color of ['red', 'green', 'blue', 'orange']\">\r\n            <marker\r\n                [id]=\"randomId + color + 'Arrow'\"\r\n                markerHeight=\"13\"\r\n                markerWidth=\"13\"\r\n                orient=\"auto\"\r\n                refX=\"9\"\r\n                refY=\"6\"\r\n            >\r\n                <path\r\n                    [style.fill]=\"color\"\r\n                    d=\"M2,2 L2,11 L10,6 L2,2\"\r\n                ></path>\r\n            </marker>\r\n        </defs>\r\n        <line\r\n            class=\"arrow\"\r\n            [attr.marker-end]=\"'url(#' + randomId + arrow.end.color + 'Arrow)'\"\r\n            [attr.stroke]=\"arrow.end.color\"\r\n            [attr.x1]=\"arrow.start.x\"\r\n            [attr.x2]=\"arrow.end.x\"\r\n            [attr.y1]=\"arrow.start.y\"\r\n            [attr.y2]=\"arrow.end.y\"\r\n            *ngFor=\"let arrow of engineFacade.drawProvider.arrows$ | async\"\r\n        ></line>\r\n        <circle\r\n            [attr.cx]=\"circle.drawPoint.x\"\r\n            [attr.cy]=\"circle.drawPoint.y\"\r\n            [attr.r]=\"engineFacade.heightAndWidth / 18\"\r\n            [attr.stroke]=\"circle.drawPoint.color\"\r\n            *ngFor=\"let circle of engineFacade.drawProvider.circles$ | async\"\r\n            fill-opacity=\"0.0\"\r\n            stroke-width=\"2\"\r\n        ></circle>\r\n    </svg>\r\n    <app-piece-promotion-modal #modal\r\n                               [pieceIconInput]=\"engineFacade.pieceIconManager.pieceIconInput\"\r\n                               [color]=\"engineFacade.board.getCurrentPlayerColor() ? 'white' : 'black'\"></app-piece-promotion-modal>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";#board{font-family:Courier New,serif;position:relative}.board-row{display:block;width:100%;height:12.5%;position:relative}.board-col{position:relative;display:inline-block;width:12.5%;vertical-align:top;cursor:default;height:100%}.piece{height:100%;cursor:grab;width:100%;-moz-user-select:none;user-select:none;-webkit-user-select:none;background-size:cover;justify-content:center;text-align:center;color:#000!important;box-sizing:border-box}.piece:after{content:\"\\200b\";box-sizing:border-box}#drag{height:100%;width:100%}.possible-point{background:radial-gradient(#13262F 15%,transparent 20%)}.possible-point:hover,.possible-capture:hover{opacity:.4}.possible-capture{background:radial-gradient(transparent 0%,transparent 80%,#13262F 80%);opacity:.5;box-sizing:border-box;margin:0;padding:0}.king-check{background:radial-gradient(ellipse at center,red,#e70000 25%,#a9000000 89%,#9e000000)}.current-selection{background-color:#72620b!important}.yCoord{position:absolute;-moz-user-select:none;user-select:none;-webkit-user-select:none;cursor:pointer;right:.2em;font-family:Lucida Console,Courier,monospace;box-sizing:border-box}.xCoord{position:absolute;-moz-user-select:none;user-select:none;-webkit-user-select:none;cursor:pointer;left:.2em;bottom:0;font-family:Lucida Console,Courier,monospace;box-sizing:border-box}.hovering{background-color:red!important}.arrow{stroke-width:2}svg{filter:drop-shadow(1px 1px 0px #111) drop-shadow(-1px 1px 0px #111) drop-shadow(1px -1px 0px #111) drop-shadow(-1px -1px 0px #111)}:host{display:inline-block}.single-piece{position:absolute;z-index:999;justify-content:center;text-align:center;-moz-user-select:none;user-select:none;-webkit-user-select:none;color:#000!important;cursor:grab;background-size:cover}.single-piece:after{content:\"\\200b\";box-sizing:border-box}.cdk-drag:not(.cdk-drag-dragging){transition:transform var(--animation-duration) cubic-bezier(0,.3,.14,.49)}\n"] }]
    }], function () { return []; }, { darkTileColor: [{
            type: Input
        }], lightTileColor: [{
            type: Input
        }], showCoords: [{
            type: Input
        }], sourcePointColor: [{
            type: Input
        }], destinationPointColor: [{
            type: Input
        }], legalMovesPointColor: [{
            type: Input
        }], showLastMove: [{
            type: Input
        }], showLegalMoves: [{
            type: Input
        }], showActivePiece: [{
            type: Input
        }], animationDuration: [{
            type: Input
        }], showPossibleCaptures: [{
            type: Input
        }], moveChange: [{
            type: Output
        }], checkmate: [{
            type: Output
        }], stalemate: [{
            type: Output
        }], boardRef: [{
            type: ViewChild,
            args: ['boardRef']
        }], modal: [{
            type: ViewChild,
            args: ['modal']
        }], size: [{
            type: Input,
            args: ['size']
        }], freeMode: [{
            type: Input,
            args: ['freeMode']
        }], dragDisabled: [{
            type: Input,
            args: ['dragDisabled']
        }], drawDisabled: [{
            type: Input,
            args: ['drawDisabled']
        }], pieceIcons: [{
            type: Input,
            args: ['pieceIcons']
        }], lightDisabled: [{
            type: Input,
            args: ['lightDisabled']
        }], darkDisabled: [{
            type: Input,
            args: ['darkDisabled']
        }], onRightClick: [{
            type: HostListener,
            args: ['contextmenu', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNoZXNzLWJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jaGVzcy1ib2FyZC9zcmMvbGliL25neC1jaGVzcy1ib2FyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtY2hlc3MtYm9hcmQvc3JjL2xpYi9uZ3gtY2hlc3MtYm9hcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUVILFNBQVMsRUFFVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4sU0FBUyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN0RixPQUFPLEVBQ0gsd0JBQXdCLEVBQ3hCLFlBQVksR0FDZixNQUFNLDJGQUEyRixDQUFDO0FBQ25HLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHdEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7O0lDbEJ0QywrQkFlQztJQWJHLHFMQUFnQixlQUFBLHdCQUFpQixDQUFBLElBQUMseUtBQ2xCLGVBQUEseUJBQWlCLENBQUEsSUFEQyw2S0FFaEIsZUFBQSx5QkFBaUIsQ0FBQSxJQUZEO0lBY3RDLGlCQUFNOzs7O0lBVEYsZ0pBQW1ILHVDQUFBLDRDQUFBLGtDQUFBLG1DQUFBLHlEQUFBO0lBTm5ILGtFQUE2QyxxSEFBQSw4R0FBQTs7O0lBOEJ6QyxnQ0FLQztJQUNHLFlBQ0o7SUFBQSxpQkFBTzs7OztJQUxILHlGQUE4RCwwQ0FBQTtJQUk5RCxlQUNKO0lBREksMkVBQ0o7OztJQUNBLGdD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QXFCO2tCQUE3QixLQUFLO1lBQ0csb0JBQW9CO2tCQUE1QixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csb0JBQW9CO2tCQUE1QixLQUFLO1lBSUksVUFBVTtrQkFBbkIsTUFBTTtZQUNHLFNBQVM7a0JBQWxCLE1BQU07WUFDRyxTQUFTO2tCQUFsQixNQUFNO1lBR1AsUUFBUTtrQkFEUCxTQUFTO21CQUFDLFVBQVU7WUFHckIsS0FBSztrQkFESixTQUFTO21CQUFDLE9BQU87WUFzQlAsSUFBSTtrQkFEZCxLQUFLO21CQUFDLE1BQU07WUFnQkYsUUFBUTtrQkFEbEIsS0FBSzttQkFBQyxVQUFVO1lBTU4sWUFBWTtrQkFEdEIsS0FBSzttQkFBQyxjQUFjO1lBTVYsWUFBWTtrQkFEdEIsS0FBSzttQkFBQyxjQUFjO1lBTVYsVUFBVTtrQkFEcEIsS0FBSzttQkFBQyxZQUFZO1lBTVIsYUFBYTtrQkFEdkIsS0FBSzttQkFBQyxlQUFlO1lBTVgsWUFBWTtrQkFEdEIsS0FBSzttQkFBQyxjQUFjO1lBTXJCLFlBQVk7a0JBRFgsWUFBWTttQkFBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtEcmFnRW5kLCBDZGtEcmFnTW92ZSwgQ2RrRHJhZ1N0YXJ0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7XHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIElucHV0LFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgT25Jbml0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RFbmdpbmVGYWNhZGUgfSBmcm9tICcuL2VuZ2luZS9hYnN0cmFjdC1lbmdpbmUtZmFjYWRlJztcclxuaW1wb3J0IHsgQm9hcmRMb2FkZXIgfSBmcm9tICcuL2VuZ2luZS9ib2FyZC1zdGF0ZS1wcm92aWRlci9ib2FyZC1sb2FkZXIvYm9hcmQtbG9hZGVyJztcclxuaW1wb3J0IHtcclxuICAgIE5vdGF0aW9uUHJvY2Vzc29yRmFjdG9yeSxcclxuICAgIE5vdGF0aW9uVHlwZSxcclxufSBmcm9tICcuL2VuZ2luZS9ib2FyZC1zdGF0ZS1wcm92aWRlci9ib2FyZC1sb2FkZXIvbm90YXRpb24tcHJvY2Vzc29ycy9ub3RhdGlvbi1wcm9jZXNzb3ItZmFjdG9yeSc7XHJcbmltcG9ydCB7IENsaWNrVXRpbHMgfSBmcm9tICcuL2VuZ2luZS9jbGljay9jbGljay11dGlscyc7XHJcbmltcG9ydCB7IEVuZ2luZUZhY2FkZSB9IGZyb20gJy4vZW5naW5lL2VuZ2luZS1mYWNhZGUnO1xyXG5pbXBvcnQgeyBNb3ZlQ2hhbmdlIH0gZnJvbSAnLi9lbmdpbmUvb3V0cHV0cy9tb3ZlLWNoYW5nZS9tb3ZlLWNoYW5nZSc7XHJcbmltcG9ydCB7IEhpc3RvcnlNb3ZlIH0gZnJvbSAnLi9oaXN0b3J5LW1vdmUtcHJvdmlkZXIvaGlzdG9yeS1tb3ZlJztcclxuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL21vZGVscy9ib2FyZCc7XHJcbmltcG9ydCB7IFBpZWNlIH0gZnJvbSAnLi9tb2RlbHMvcGllY2VzL3BpZWNlJztcclxuaW1wb3J0IHsgTmd4Q2hlc3NCb2FyZFZpZXcgfSBmcm9tICcuL25neC1jaGVzcy1ib2FyZC12aWV3JztcclxuaW1wb3J0IHsgUGllY2VQcm9tb3Rpb25Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vcGllY2UtcHJvbW90aW9uL3BpZWNlLXByb21vdGlvbi1tb2RhbC9waWVjZS1wcm9tb3Rpb24tbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBQaWVjZUljb25JbnB1dCB9IGZyb20gJy4vdXRpbHMvaW5wdXRzL3BpZWNlLWljb24taW5wdXQnO1xyXG5pbXBvcnQgeyBQaWVjZUljb25JbnB1dE1hbmFnZXIgfSBmcm9tICcuL3V0aWxzL2lucHV0cy9waWVjZS1pY29uLWlucHV0LW1hbmFnZXInO1xyXG5pbXBvcnQgeyBDb2xvcklucHV0LCBQaWVjZVR5cGVJbnB1dCB9IGZyb20gJy4vdXRpbHMvaW5wdXRzL3BpZWNlLXR5cGUtaW5wdXQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25neC1jaGVzcy1ib2FyZCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LWNoZXNzLWJvYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL25neC1jaGVzcy1ib2FyZC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4Q2hlc3NCb2FyZENvbXBvbmVudFxyXG4gICAgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgTmd4Q2hlc3NCb2FyZFZpZXcsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIGRhcmtUaWxlQ29sb3IgPSBDb25zdGFudHMuREVGQVVMVF9EQVJLX1RJTEVfQ09MT1I7XHJcbiAgICBASW5wdXQoKSBsaWdodFRpbGVDb2xvcjogc3RyaW5nID0gQ29uc3RhbnRzLkRFRkFVTFRfTElHSFRfVElMRV9DT0xPUjtcclxuICAgIEBJbnB1dCgpIHNob3dDb29yZHMgPSB0cnVlO1xyXG4gICAgQElucHV0KCkgc291cmNlUG9pbnRDb2xvcjogc3RyaW5nID0gQ29uc3RhbnRzLkRFRkFVTFRfU09VUkNFX1BPSU5UX0NPTE9SO1xyXG4gICAgQElucHV0KCkgZGVzdGluYXRpb25Qb2ludENvbG9yOiBzdHJpbmcgPSBDb25zdGFudHMuREVGQVVMVF9ERVNUSU5BVElPTl9QT0lOVF9DT0xPUjtcclxuICAgIEBJbnB1dCgpIGxlZ2FsTW92ZXNQb2ludENvbG9yOiBzdHJpbmcgPSBDb25zdGFudHMuREVGQVVMVF9MRUdBTF9NT1ZFX1BPSU5UX0NPTE9SO1xyXG4gICAgQElucHV0KCkgc2hvd0xhc3RNb3ZlID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHNob3dMZWdhbE1vdmVzID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHNob3dBY3RpdmVQaWVjZSA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBhbmltYXRpb25EdXJhdGlvbiA9IDIwMDtcclxuICAgIEBJbnB1dCgpIHNob3dQb3NzaWJsZUNhcHR1cmVzID0gdHJ1ZTtcclxuICAgIC8qKlxyXG4gICAgICogRW5hYmxpbmcgZnJlZSBtb2RlIHJlbW92ZXMgdHVybi1iYXNlZCByZXN0cmljdGlvbiBhbmQgYWxsb3dzIHRvIG1vdmUgYW55IHBpZWNlIGZyZWVseSFcclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIG1vdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdmVDaGFuZ2U+KCk7XHJcbiAgICBAT3V0cHV0KCkgY2hlY2ttYXRlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gICAgQE91dHB1dCgpIHN0YWxlbWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdib2FyZFJlZicpXHJcbiAgICBib2FyZFJlZjogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ21vZGFsJylcclxuICAgIG1vZGFsOiBQaWVjZVByb21vdGlvbk1vZGFsQ29tcG9uZW50O1xyXG5cclxuICAgIHBpZWNlU2l6ZTogbnVtYmVyO1xyXG4gICAgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIGJvYXJkTG9hZGVyOiBCb2FyZExvYWRlcjtcclxuICAgIHBpZWNlSWNvbk1hbmFnZXI6IFBpZWNlSWNvbklucHV0TWFuYWdlcjtcclxuICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgIHN0YXJ0VHJhbnNpdGlvbiA9ICcnO1xyXG5cclxuICAgIGVuZ2luZUZhY2FkZTogQWJzdHJhY3RFbmdpbmVGYWNhZGU7XHJcblxyXG4gICAgcmFuZG9tSWQgPSAoTWF0aC5yYW5kb20oKSArIDEpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmVGYWNhZGUgPSBuZXcgRW5naW5lRmFjYWRlKFxyXG4gICAgICAgICAgICBuZXcgQm9hcmQoKSxcclxuICAgICAgICAgICAgdGhpcy5tb3ZlQ2hhbmdlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ3NpemUnKVxyXG4gICAgcHVibGljIHNldCBzaXplKHNpemU6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgc2l6ZSAmJlxyXG4gICAgICAgICAgICBzaXplID49IENvbnN0YW50cy5NSU5fQk9BUkRfU0laRSAmJlxyXG4gICAgICAgICAgICBzaXplIDw9IENvbnN0YW50cy5NQVhfQk9BUkRfU0laRVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZUZhY2FkZS5oZWlnaHRBbmRXaWR0aCA9IHNpemU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmVGYWNhZGUuaGVpZ2h0QW5kV2lkdGggPSBDb25zdGFudHMuREVGQVVMVF9TSVpFO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVuZ2luZUZhY2FkZS5kcmF3UHJvdmlkZXIuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVBpZWNlU2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnZnJlZU1vZGUnKVxyXG4gICAgcHVibGljIHNldCBmcmVlTW9kZShmcmVlTW9kZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZW5naW5lRmFjYWRlLmZyZWVNb2RlID0gZnJlZU1vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCdkcmFnRGlzYWJsZWQnKVxyXG4gICAgcHVibGljIHNldCBkcmFnRGlzYWJsZWQoZHJhZ0Rpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmVGYWNhZGUuZHJhZ0Rpc2FibGVkID0gZHJhZ0Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgnZHJhd0Rpc2FibGVkJylcclxuICAgIHB1YmxpYyBzZXQgZHJhd0Rpc2FibGVkKGRyYXdEaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZW5naW5lRmFjYWRlLmRyYXdEaXNhYmxlZCA9IGRyYXdEaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ3BpZWNlSWNvbnMnKVxyXG4gICAgcHVibGljIHNldCBwaWVjZUljb25zKHBpZWNlSWNvbnM6IFBpZWNlSWNvbklucHV0KSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmVGYWNhZGUucGllY2VJY29uTWFuYWdlci5waWVjZUljb25JbnB1dCA9IHBpZWNlSWNvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCdsaWdodERpc2FibGVkJylcclxuICAgIHB1YmxpYyBzZXQgbGlnaHREaXNhYmxlZChsaWdodERpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmVGYWNhZGUubGlnaHREaXNhYmxlZCA9IGxpZ2h0RGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCdkYXJrRGlzYWJsZWQnKVxyXG4gICAgcHVibGljIHNldCBkYXJrRGlzYWJsZWQoZGFya0Rpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmVGYWNhZGUuZGFya0Rpc2FibGVkID0gZGFya0Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgWyckZXZlbnQnXSlcclxuICAgIG9uUmlnaHRDbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgKGNoYW5nZXMubGlnaHREaXNhYmxlZCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5saWdodERpc2FibGVkICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZUZhY2FkZS5ib2FyZC5jdXJyZW50V2hpdGVQbGF5ZXIpIHx8XHJcbiAgICAgICAgICAgIChjaGFuZ2VzLmRhcmtEaXNhYmxlZCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXJrRGlzYWJsZWQgJiZcclxuICAgICAgICAgICAgICAgICF0aGlzLmVuZ2luZUZhY2FkZS5ib2FyZC5jdXJyZW50V2hpdGVQbGF5ZXIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lRmFjYWRlLmJvYXJkLnBvc3NpYmxlQ2FwdHVyZXMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmVGYWNhZGUuYm9hcmQucG9zc2libGVNb3ZlcyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5naW5lRmFjYWRlLm1vZGFsID0gdGhpcy5tb2RhbDtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVBpZWNlU2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VVcChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lRmFjYWRlLm9uTW91c2VVcChcclxuICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2xpY2tQb2ludChldmVudCksXHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXZlcnNlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVuZ2luZUZhY2FkZS5ib2FyZC5yZXZlcnNlKCk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmVGYWNhZGUuY29vcmRzLnJldmVyc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVCb2FyZCA9IChib2FyZDogQm9hcmQpID0+IHtcclxuICAgICAgICB0aGlzLmVuZ2luZUZhY2FkZS5ib2FyZCA9IGJvYXJkO1xyXG4gICAgICAgIHRoaXMuZW5naW5lRmFjYWRlLmJvYXJkLnBvc3NpYmxlQ2FwdHVyZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmVuZ2luZUZhY2FkZS5ib2FyZC5wb3NzaWJsZU1vdmVzID0gW107XHJcbiAgICAgICAgdGhpcy5ib2FyZExvYWRlciA9IG5ldyBCb2FyZExvYWRlcih0aGlzLmVuZ2luZUZhY2FkZSk7XHJcbiAgICAgICAgdGhpcy5ib2FyZExvYWRlci5zZXRFbmdpbmVGYWNhZGUodGhpcy5lbmdpbmVGYWNhZGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZXRGRU4oZmVuOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZUZhY2FkZS5ib2FyZExvYWRlci5zZXROb3RhdGlvblByb2Nlc3NvcihcclxuICAgICAgICAgICAgICAgIE5vdGF0aW9uUHJvY2Vzc29yRmFjdG9yeS5nZXRQcm9jZXNzb3IoTm90YXRpb25UeXBlLkZFTilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmVGYWNhZGUuYm9hcmRMb2FkZXIubG9hZEZFTihmZW4pO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZUZhY2FkZS5ib2FyZC5wb3NzaWJsZUNhcHR1cmVzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lRmFjYWRlLmJvYXJkLnBvc3NpYmxlTW92ZXMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmVGYWNhZGUuY29vcmRzLnJlc2V0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lRmFjYWRlLmJvYXJkTG9hZGVyLmFkZFBpZWNlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQR04ocGduOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZUZhY2FkZS5wZ25Qcm9jZXNzb3IucmVzZXQoKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmVGYWNhZGUuYm9hcmRMb2FkZXIuc2V0Tm90YXRpb25Qcm9jZXNzb3IoXHJcbiAgICAgICAgICAgICAgICBOb3RhdGlvblByb2Nlc3NvckZhY3RvcnkuZ2V0UHJvY2Vzc29yKE5vdGF0aW9uVHlwZS5QR04pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lRmFjYWRlLmJvYXJkTG9hZGVyLmxvYWRQR04ocGduKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmVGYWNhZGUuYm9hcmQucG9zc2libGVDYXB0dXJlcyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZUZhY2FkZS5ib2FyZC5wb3NzaWJsZU1vdmVzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lRmFjYWRlLmNvb3Jkcy5yZXNldCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleGNlcHRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZUZhY2FkZS5ib2FyZExvYWRlci5hZGRQaWVjZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RkVOKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5naW5lRmFjYWRlLmJvYXJkLmZlbjtcclxuICAgIH1cclxuXHJcbiAgICBkcmFnRW5kZWQoZXZlbnQ6IENka0RyYWdFbmQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVuZ2luZUZhY2FkZS5kcmFnRW5kU3RyYXRlZ3kucHJvY2VzcyhcclxuICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lRmFjYWRlLm1vdmVEb25lLFxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0VHJhbnNpdGlvblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhZ1N0YXJ0KGV2ZW50OiBDZGtEcmFnU3RhcnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0cmFucyA9IGV2ZW50LnNvdXJjZS5nZXRSb290RWxlbWVudCgpLnN0eWxlLnRyYW5zZm9ybS5zcGxpdCgnKSAnKTtcclxuICAgICAgICAvLyAgIHRoaXMuc3RhcnRUcmFucz0gdHJhbnM7XHJcbiAgICAgICAgdGhpcy5zdGFydFRyYW5zaXRpb24gPSB0cmFucy5sZW5ndGggPT09IDIgPyB0cmFuc1sxXSA6IHRyYW5zWzBdO1xyXG4gICAgICAgIHRoaXMuZW5naW5lRmFjYWRlLmRyYWdTdGFydFN0cmF0ZWd5LnByb2Nlc3MoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmVGYWNhZGUub25Nb3VzZURvd24oZXZlbnQsIHRoaXMuZ2V0Q2xpY2tQb2ludChldmVudCksXHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbnRleHRNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmVGYWNhZGUub25Db250ZXh0TWVudShldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2xpY2tQb2ludChldmVudCkge1xyXG4gICAgICAgIHJldHVybiBDbGlja1V0aWxzLmdldENsaWNrUG9pbnQoXHJcbiAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LFxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCxcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGN1bGF0ZVBpZWNlU2l6ZSgpIHtcclxuICAgICAgICB0aGlzLnBpZWNlU2l6ZSA9IHRoaXMuZW5naW5lRmFjYWRlLmhlaWdodEFuZFdpZHRoIC8gODtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0Q3VzdG9tUGllY2VJY29ucyhwaWVjZTogUGllY2UpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShcclxuICAgICAgICAgICAgYHsgXCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwidXJsKCcke3RoaXMuZW5naW5lRmFjYWRlLnBpZWNlSWNvbk1hbmFnZXIuZ2V0UGllY2VJY29uKFxyXG4gICAgICAgICAgICAgICAgcGllY2VcclxuICAgICAgICAgICAgKX0nKVwifWBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoY29vcmRzOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuZ2luZUZhY2FkZS5tb3ZlKGNvb3Jkcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TW92ZUhpc3RvcnkoKTogSGlzdG9yeU1vdmVbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5naW5lRmFjYWRlLmdldE1vdmVIaXN0b3J5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmVGYWNhZGUucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1bmRvKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5naW5lRmFjYWRlLnVuZG8oKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQaWVjZShcclxuICAgICAgICBwaWVjZVR5cGVJbnB1dDogUGllY2VUeXBlSW5wdXQsXHJcbiAgICAgICAgY29sb3JJbnB1dDogQ29sb3JJbnB1dCxcclxuICAgICAgICBjb29yZHM6IHN0cmluZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmVGYWNhZGUuYWRkUGllY2UocGllY2VUeXBlSW5wdXQsIGNvbG9ySW5wdXQsIGNvb3Jkcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UEdOKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZ2luZUZhY2FkZS5wZ25Qcm9jZXNzb3IuZ2V0UEdOKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhZ01vdmVkKCRldmVudDogQ2RrRHJhZ01vdmU8YW55Pikge1xyXG4gICAgICAgIGxldCB4ID0gKCRldmVudC5wb2ludGVyUG9zaXRpb24ueCAtICRldmVudC5zb3VyY2UuZ2V0Um9vdEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpIC0gKHRoaXMucGllY2VTaXplIC8gMik7XHJcbiAgICAgICAgbGV0IHkgPSAoJGV2ZW50LnBvaW50ZXJQb3NpdGlvbi55IC0gJGV2ZW50LnNvdXJjZS5nZXRSb290RWxlbWVudCgpLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKSAtICh0aGlzLnBpZWNlU2l6ZSAvIDIpO1xyXG4gICAgICAgICRldmVudC5zb3VyY2UuZ2V0Um9vdEVsZW1lbnQoKS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIHggKyAncHgsICdcclxuICAgICAgICAgICAgKyAoeSkgKyAncHgsMHB4KSc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGlsZUJhY2tncm91bmRDb2xvcihpLCBqKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgY29sb3IgPSAoKGkgKyBqKSAlIDIgPT09IDApID8gdGhpcy5saWdodFRpbGVDb2xvciA6IHRoaXMuZGFya1RpbGVDb2xvcjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0xhc3RNb3ZlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVuZ2luZUZhY2FkZS5ib2FyZC5pc1hZSW5Tb3VyY2VNb3ZlKGksIGopKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IHRoaXMuc291cmNlUG9pbnRDb2xvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZW5naW5lRmFjYWRlLmJvYXJkLmlzWFlJbkRlc3RNb3ZlKGksIGopKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IHRoaXMuZGVzdGluYXRpb25Qb2ludENvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdlxyXG4gICAgaWQ9XCJib2FyZFwiXHJcbiAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cImVuZ2luZUZhY2FkZS5oZWlnaHRBbmRXaWR0aFwiXHJcbiAgICBbc3R5bGUud2lkdGgucHhdPVwiZW5naW5lRmFjYWRlLmhlaWdodEFuZFdpZHRoXCJcclxuICAgIChjb250ZXh0bWVudSk9XCIhbW9kYWwub3BlbmVkICYmIG9uQ29udGV4dE1lbnUoJGV2ZW50KVwiXHJcbiAgICAocG9pbnRlcmRvd24pPVwiIW1vZGFsLm9wZW5lZCAmJiBvbk1vdXNlRG93bigkZXZlbnQpXCJcclxuICAgIChwb2ludGVydXApPVwiIW1vZGFsLm9wZW5lZCAmJiBvbk1vdXNlVXAoJGV2ZW50KVwiXHJcbiAgICAjYm9hcmRSZWZcclxuPlxyXG4gICAgPGRpdiBpZD1cImRyYWdcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIFtjZGtEcmFnRGlzYWJsZWRdPVwiZW5naW5lRmFjYWRlLmRyYWdEaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIChjZGtEcmFnRW5kZWQpPVwiZHJhZ0VuZGVkKCRldmVudClcIlxyXG4gICAgICAgICAgICAoY2RrRHJhZ01vdmVkKT1cImRyYWdNb3ZlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgKGNka0RyYWdTdGFydGVkKT1cImRyYWdTdGFydCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJzaW5nbGUtcGllY2VcIiBbaW5uZXJIVE1MXT1cImVuZ2luZUZhY2FkZS5waWVjZUljb25NYW5hZ2VyLmlzRGVmYXVsdEljb25zKCkgPyBwaWVjZS5jb25zdGFudC5pY29uIDogJydcIlxyXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJlbmdpbmVGYWNhZGUucGllY2VJY29uTWFuYWdlci5pc0RlZmF1bHRJY29ucygpID8gJycgOiBnZXRDdXN0b21QaWVjZUljb25zKHBpZWNlKVwiXHJcbiAgICAgICAgICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwiJ3RyYW5zbGF0ZTNkKCcgKyBwaWVjZS5wb2ludC5jb2wgKiBwaWVjZVNpemUgKyAncHgsICcgKyBwaWVjZS5wb2ludC5yb3cgKiBwaWVjZVNpemUgKyAncHgsMHB4KSdcIlxyXG4gICAgICAgICAgICBbc3R5bGUubWF4LWhlaWdodF09XCJwaWVjZVNpemUgKyAncHgnXCJcclxuICAgICAgICAgICAgW3N0eWxlLmZvbnQtc2l6ZV09XCJwaWVjZVNpemUgKiAwLjggKyAncHgnXCJcclxuICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cInBpZWNlU2l6ZSArICdweCdcIlxyXG4gICAgICAgICAgICBbc3R5bGUuaGVpZ2h0XT1cInBpZWNlU2l6ZSArICdweCdcIlxyXG4gICAgICAgICAgICBjZGtEcmFnXHJcbiAgICAgICAgICAgIFtzdHlsZS4tLWFuaW1hdGlvbi1kdXJhdGlvbl09XCJhbmltYXRpb25EdXJhdGlvbiArICdtcydcIlxyXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgcGllY2Ugb2YgZW5naW5lRmFjYWRlLmJvYXJkLnBpZWNlczsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJib2FyZC1yb3dcIlxyXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgcm93IG9mIGVuZ2luZUZhY2FkZS5ib2FyZC5ib2FyZDsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJvYXJkLWNvbFwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY3VycmVudC1zZWxlY3Rpb25dPVwic2hvd0FjdGl2ZVBpZWNlICYmIGVuZ2luZUZhY2FkZS5ib2FyZC5pc1hZSW5BY3RpdmVNb3ZlKGksailcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLmtpbmctY2hlY2tdPVwiIGVuZ2luZUZhY2FkZS5ib2FyZC5pc0tpbmdDaGVja2VkKGVuZ2luZUZhY2FkZS5ib2FyZC5nZXRQaWVjZUJ5UG9pbnQoaSxqKSlcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLnBvaW50LWNpcmNsZV09XCJlbmdpbmVGYWNhZGUuYm9hcmQuaXNYWUluUG9pbnRTZWxlY3Rpb24oaSwgailcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLnBvc3NpYmxlLWNhcHR1cmVdPVwic2hvd1Bvc3NpYmxlQ2FwdHVyZXMgJiYgZW5naW5lRmFjYWRlLmJvYXJkLmlzWFlJblBvc3NpYmxlQ2FwdHVyZXMoaSwgailcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLnBvc3NpYmxlLXBvaW50XT1cImVuZ2luZUZhY2FkZS5ib2FyZC5pc1hZSW5Qb3NzaWJsZU1vdmVzKGksIGopICYmIHNob3dMZWdhbE1vdmVzXCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImdldFRpbGVCYWNrZ3JvdW5kQ29sb3IoaSwgailcIlxyXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNvbCBvZiByb3c7IGxldCBqID0gaW5kZXhcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwieUNvb3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGUuY29sb3JdPVwiKGkgJSAyID09PSAwKSA/IGxpZ2h0VGlsZUNvbG9yIDogZGFya1RpbGVDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLmZvbnQtc2l6ZS5weF09XCJwaWVjZVNpemUgLyA0XCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInNob3dDb29yZHMgJiYgaiA9PT0gN1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3tlbmdpbmVGYWNhZGUuY29vcmRzLnlDb29yZHNbaV19fVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInhDb29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLmNvbG9yXT1cIihqICUgMiA9PT0gMCkgPyBsaWdodFRpbGVDb2xvciA6IGRhcmtUaWxlQ29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS5mb250LXNpemUucHhdPVwicGllY2VTaXplIC8gNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJzaG93Q29vcmRzICYmIGkgPT09IDdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7ZW5naW5lRmFjYWRlLmNvb3Jkcy54Q29vcmRzW2pdfX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImVuZ2luZUZhY2FkZS5ib2FyZC5nZXRQaWVjZUJ5UG9pbnQoaSwgaikgYXMgcGllY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OjEwMCU7IHdpZHRoOjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiJ3BpZWNlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS5mb250LXNpemVdPVwicGllY2VTaXplICsgJ3B4J1wiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN2Z1xyXG4gICAgICAgIFthdHRyLmhlaWdodF09XCJlbmdpbmVGYWNhZGUuaGVpZ2h0QW5kV2lkdGhcIlxyXG4gICAgICAgIFthdHRyLndpZHRoXT1cImVuZ2luZUZhY2FkZS5oZWlnaHRBbmRXaWR0aFwiXHJcbiAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjA7IHBvaW50ZXItZXZlbnRzOiBub25lXCJcclxuICAgID5cclxuICAgICAgICA8ZGVmcyAqbmdGb3I9XCJsZXQgY29sb3Igb2YgWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZScsICdvcmFuZ2UnXVwiPlxyXG4gICAgICAgICAgICA8bWFya2VyXHJcbiAgICAgICAgICAgICAgICBbaWRdPVwicmFuZG9tSWQgKyBjb2xvciArICdBcnJvdydcIlxyXG4gICAgICAgICAgICAgICAgbWFya2VySGVpZ2h0PVwiMTNcIlxyXG4gICAgICAgICAgICAgICAgbWFya2VyV2lkdGg9XCIxM1wiXHJcbiAgICAgICAgICAgICAgICBvcmllbnQ9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgIHJlZlg9XCI5XCJcclxuICAgICAgICAgICAgICAgIHJlZlk9XCI2XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGUuZmlsbF09XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0yLDIgTDIsMTEgTDEwLDYgTDIsMlwiXHJcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8L21hcmtlcj5cclxuICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgPGxpbmVcclxuICAgICAgICAgICAgY2xhc3M9XCJhcnJvd1wiXHJcbiAgICAgICAgICAgIFthdHRyLm1hcmtlci1lbmRdPVwiJ3VybCgjJyArIHJhbmRvbUlkICsgYXJyb3cuZW5kLmNvbG9yICsgJ0Fycm93KSdcIlxyXG4gICAgICAgICAgICBbYXR0ci5zdHJva2VdPVwiYXJyb3cuZW5kLmNvbG9yXCJcclxuICAgICAgICAgICAgW2F0dHIueDFdPVwiYXJyb3cuc3RhcnQueFwiXHJcbiAgICAgICAgICAgIFthdHRyLngyXT1cImFycm93LmVuZC54XCJcclxuICAgICAgICAgICAgW2F0dHIueTFdPVwiYXJyb3cuc3RhcnQueVwiXHJcbiAgICAgICAgICAgIFthdHRyLnkyXT1cImFycm93LmVuZC55XCJcclxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGFycm93IG9mIGVuZ2luZUZhY2FkZS5kcmF3UHJvdmlkZXIuYXJyb3dzJCB8IGFzeW5jXCJcclxuICAgICAgICA+PC9saW5lPlxyXG4gICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgW2F0dHIuY3hdPVwiY2lyY2xlLmRyYXdQb2ludC54XCJcclxuICAgICAgICAgICAgW2F0dHIuY3ldPVwiY2lyY2xlLmRyYXdQb2ludC55XCJcclxuICAgICAgICAgICAgW2F0dHIucl09XCJlbmdpbmVGYWNhZGUuaGVpZ2h0QW5kV2lkdGggLyAxOFwiXHJcbiAgICAgICAgICAgIFthdHRyLnN0cm9rZV09XCJjaXJjbGUuZHJhd1BvaW50LmNvbG9yXCJcclxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNpcmNsZSBvZiBlbmdpbmVGYWNhZGUuZHJhd1Byb3ZpZGVyLmNpcmNsZXMkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIwLjBcIlxyXG4gICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICA+PC9jaXJjbGU+XHJcbiAgICA8L3N2Zz5cclxuICAgIDxhcHAtcGllY2UtcHJvbW90aW9uLW1vZGFsICNtb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BpZWNlSWNvbklucHV0XT1cImVuZ2luZUZhY2FkZS5waWVjZUljb25NYW5hZ2VyLnBpZWNlSWNvbklucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2xvcl09XCJlbmdpbmVGYWNhZGUuYm9hcmQuZ2V0Q3VycmVudFBsYXllckNvbG9yKCkgPyAnd2hpdGUnIDogJ2JsYWNrJ1wiPjwvYXBwLXBpZWNlLXByb21vdGlvbi1tb2RhbD5cclxuPC9kaXY+XHJcbiJdfQ==