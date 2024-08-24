import { PieceConstant } from '../../utils/unicode-constants';
import { Board } from '../board';
import { Color } from './color';
import { Piece } from './piece';
import { Point } from './point';
export declare class King extends Piece {
    castledAlready: boolean;
    shortCastled: boolean;
    longCastled: boolean;
    isMovedAlready: any;
    isCastling: boolean;
    constructor(point: Point, color: Color, constant: PieceConstant, board: Board);
    getPossibleMoves(): Point[];
    getPossibleCaptures(): Point[];
    getCoveredFields(): Point[];
}
//# sourceMappingURL=king.d.ts.map