import { Board } from '../../models/board';
import { Piece } from '../../models/pieces/piece';
import { Point } from '../../models/pieces/point';
import { AbstractPgnProcessor } from './abstract-pgn-processor';
export declare class DefaultPgnProcessor extends AbstractPgnProcessor {
    process(board: Board, sourcePiece: Piece, destPoint: Point, destPiece?: Piece): void;
    private resolvePieceByFirstChar;
    private isEqualByCol;
}
//# sourceMappingURL=default-pgn-processor.d.ts.map