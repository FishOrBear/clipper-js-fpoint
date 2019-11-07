export class Clipper
{

    constructor(InitOptions?: number /** =0 */);

    AddEdgeToSEL(edge: any): void;

    AddGhostJoin(Op: any, OffPt: any): void;

    AddJoin(Op1: any, Op2: any, OffPt: any): void;

    AddLocalMaxPoly(e1: any, e2: any, pt: any): void;

    AddLocalMinPoly(e1: any, e2: any, pt: any): any;

    AddOutPt(e: any, pt: any): any;

    AddPath(pg: Path, polyType: PolyType, Closed: boolean): boolean;

    AddPaths(ppg: Paths, polyType: PolyType, closed: boolean): boolean;

    AppendPolygon(e1: any, e2: any): void;

    Area(op: { Pt: FPoint, Prev: FPoint, Next: FPoint }): number;

    Area$1(outRec: any): any;

    BuildIntersectList(topY: any): void;

    BuildResult(polyg: any): void;

    BuildResult2(polytree: any): void;

    Clear(): void;

    CopyAELToSEL(): void;

    CreateOutRec(): any;

    DeleteFromAEL(e: any): void;

    DeleteFromSEL(e: any): void;

    DisposeAllPolyPts(): void;

    DisposeLocalMinimaList(): void;

    DisposeOutRec(index: any): void;

    DoMaxima(e: any): void;

    DoSimplePolygons(): void;

    DupOutPt(outPt: any, InsertAfter: any): any;

    E2InsertsBeforeE1(e1: any, e2: any): any;

    EdgesAdjacent(inode: any): any;

    Execute(clipType: ClipType, solution: Paths, subjFillType?: PolyFillType, clipFillType?: PolyFillType): any;

    ExecuteInternal(): any;

    FindNextLocMin(E: any): any;

    FirstIsBottomPt(btmPt1: any, btmPt2: any): any;

    FixHoleLinkage(outRec: any): void;

    FixupFirstLefts1(OldOutRec: any, NewOutRec: any): void;

    FixupFirstLefts2(innerOutRec: any, outerOutRec: any): void;

    FixupFirstLefts3(OldOutRec: any, NewOutRec: any): void;

    FixupIntersectionOrder(): any;

    FixupOutPolygon(outRec: any): void;

    FixupOutPolyline(outRec: any): void;

    GetBottomPt(pp: any): any;

    GetBounds2(ops: any): any;

    GetDx(pt1: any, pt2: any): any;

    GetHorzDirection(HorzEdge: any, $var: any): void;

    GetLastOutPt(e: any): any;

    GetLowermostRec(outRec1: any, outRec2: any): any;

    GetMaximaPair(e: any): any;

    GetMaximaPairEx(e: any): any;

    GetNextInAEL(e: any, Direction: any): any;

    GetOutRec(idx: any): any;

    GetOverlap(a1: any, a2: any, b1: any, b2: any, $val: any): any;

    HorzSegmentsOverlap(seg1a: any, seg1b: any, seg2a: any, seg2b: any): any;

    InitEdge(e: any, eNext: any, ePrev: any, pt: any): void;

    InitEdge2(e: any, polyType: any): void;

    InsertEdgeIntoAEL(edge: any, startEdge: any): void;

    InsertLocalMinima(newLm: any): void;

    InsertLocalMinimaIntoAEL(botY: any): void;

    InsertMaxima(X: any): void;

    InsertScanbeam(Y: any): void;

    IntersectEdges(e1: any, e2: any, pt: any): void;

    IntersectPoint(edge1: any, edge2: any, ip: any): any;

    IsContributing(edge: any): any;

    IsEvenOddAltFillType(edge: any): any;

    IsEvenOddFillType(edge: any): any;

    IsIntermediate(e: any, Y: any): any;

    IsMaxima(e: any, Y: any): any;

    IsMinima(e: any): any;

    JoinCommonEdges(): void;

    JoinHorz(op1: any, op1b: any, op2: any, op2b: any, Pt: any, DiscardLeft: any): any;

    JoinPoints(j: any, outRec1: any, outRec2: any): any;

    LocalMinimaPending(): any;

    OutRec1RightOfOutRec2(outRec1: any, outRec2: any): any;

    PointCount(pts: any): any;

    PointInPolygon(pt: any, op: any): any;

    PointIsVertex(pt: any, pp: any): any;

    PointOnLineSegment(pt: any, linePt1: any, linePt2: any): any;

    PointOnPolygon(pt: any, pp: any): any;

    Poly2ContainsPoly1(outPt1: any, outPt2: any): any;

    PopEdgeFromSEL(e: any): any;

    PopLocalMinima(Y: any, current: any): any;

    PopScanbeam(Y: any): any;

    ProcessBound(E: any, LeftBoundIsForward: any): any;

    ProcessEdgesAtTopOfScanbeam(topY: any): void;

    ProcessHorizontal(horzEdge: any): void;

    ProcessHorizontals(): void;

    ProcessIntersectList(): void;

    ProcessIntersections(topY: any): any;

    Pt2IsBetweenPt1AndPt3(pt1: any, pt2: any, pt3: any): any;

    RangeTest(pt: any): void;

    RemoveEdge(e: any): any;

    Reset(): void;

    ReverseHorizontal(e: any): void;

    ReversePolyPtLinks(pp: any): void;

    SetDx(e: any): void;

    SetHoleState(e: any, outRec: any): void;

    SetWindingCount(edge: any): void;

    SetZ(pt: any, e1: any, e2: any): void;

    SlopesEqual(...args: any[]): any;

    SwapPoints(pt1: any, pt2: any): void;

    SwapPositionsInAEL(edge1: any, edge2: any): void;

    SwapPositionsInSEL(edge1: any, edge2: any): void;

    UpdateEdgeIntoAEL(e: any): any;

    UpdateOutPtIdxs(outrec: any): void;

    static AddPolyNodeToPaths(polynode: any, nt: any, paths: any): void;

    static Area(poly: Path): number;

    static CleanPolygon(path: any, distance: any): any;

    static CleanPolygons(polys: any, distance: any): any;

    static ClosedPathsFromPolyTree(polytree: any): any;

    static DistanceFromLineSqrd(pt: any, ln1: any, ln2: any): any;

    static DistanceSqrd(pt1: any, pt2: any): any;

    static ExcludeOp(op: any): any;

    static GetBounds(paths: any): any;

    static IntersectNodeSort(node1: any, node2: any): any;

    static IsHorizontal(e: any): any;

    static Minkowski(pattern: Path, path: Path, IsSum: boolean, IsClosed: boolean): Paths;

    static MinkowskiDiff(poly1: Path, poly2: Path): any;

    static MinkowskiSum(pattern: Path, path_or_paths: Path | Paths, pathIsClosed: boolean): Paths;

    static NodeType: {
        ntAny: number;
        ntClosed: number;
        ntOpen: number;
    };

    static OpenPathsFromPolyTree(polytree: any): any;

    static Orientation(poly: any): any;

    static ParseFirstLeft(FirstLeft: any): any;

    static PointInPolygon(pt: any, path: any): any;

    static PointsAreClose(pt1: any, pt2: any, distSqrd: any): any;

    static PolyTreeToPaths(polytree: any): any;

    static ReversePaths(polys: any): void;

    static SimplifyPolygon(poly: any, fillType: any): any;

    static SimplifyPolygons(polys: any, fillType: any): any;

    static Skip: number;

    static SlopesEqual(...args: any[]): any;

    static SlopesEqual3(e1: any, e2: any): any;

    static SlopesEqual4(pt1: any, pt2: any, pt3: any): any;

    static SlopesEqual5(pt1: any, pt2: any, pt3: any, pt4: any): any;

    static SlopesNearCollinear(pt1: any, pt2: any, pt3: any, distSqrd: any): any;

    static SwapPolyIndexes(edge1: any, edge2: any): void;

    static SwapSides(edge1: any, edge2: any): void;

    static TopX(edge: any, currentY: any): any;

    static TranslatePath(path: any, delta: any): any;

    static Unassigned: number;

    static horizontal: number;

    static ioPreserveCollinear: number;

    static ioReverseSolution: number;

    static ioStrictlySimple: number;

    static maxValue: number;

    static minValue: number;

    static near_zero(val: any): any;

    static tolerance: number;

}

export class ClipperBase
{
    constructor();

    AddPath(pg: any, polyType: any, Closed: any): any;

    AddPaths(ppg: any, polyType: any, closed: any): any;

    Clear(): void;

    CreateOutRec(): any;

    DeleteFromAEL(e: any): void;

    DisposeLocalMinimaList(): void;

    DisposeOutRec(index: any): void;

    FindNextLocMin(E: any): any;

    InitEdge(e: any, eNext: any, ePrev: any, pt: any): void;

    InitEdge2(e: any, polyType: any): void;

    InsertLocalMinima(newLm: any): void;

    InsertScanbeam(Y: any): void;

    LocalMinimaPending(): any;

    PointIsVertex(pt: any, pp: any): any;

    PointOnLineSegment(pt: any, linePt1: any, linePt2: any): any;

    PointOnPolygon(pt: any, pp: any): any;

    PopLocalMinima(Y: any, current: any): any;

    PopScanbeam(Y: any): any;

    ProcessBound(E: any, LeftBoundIsForward: any): any;

    Pt2IsBetweenPt1AndPt3(pt1: any, pt2: any, pt3: any): any;

    RangeTest(pt: any): void;

    RemoveEdge(e: any): any;

    Reset(): void;

    ReverseHorizontal(e: any): void;

    SetDx(e: any): void;

    SlopesEqual(...args: any[]): any;

    SwapPositionsInAEL(edge1: any, edge2: any): void;

    UpdateEdgeIntoAEL(e: any): any;

    static IsHorizontal(e: any): any;

    static Skip: number;

    static SlopesEqual(...args: any[]): any;

    static SlopesEqual3(e1: any, e2: any): any;

    static SlopesEqual4(pt1: any, pt2: any, pt3: any): any;

    static SlopesEqual5(pt1: any, pt2: any, pt3: any, pt4: any): any;

    static Unassigned: number;

    static horizontal: number;

    static maxValue: number;

    static minValue: number;

    static near_zero(val: any): any;

    static tolerance: number;

}

export class ClipperOffset
{
    m_destPolys: Paths;
    m_destPoly: Path;
    constructor(miterLimit: number = 2, arcTolerance: number = 0.25);

    AddPath(path: Path, joinType: JoinType, endType: EndType): void;

    AddPaths(paths: Paths, joinType: JoinType, endType: EndType): void;

    Clear(): void;

    DoMiter(j: any, k: any, r: any): void;

    DoOffset(delta: number): void;

    DoRound(j: any, k: any): void;

    DoSquare(j: any, k: any): void;

    Execute(...args: any[]): void;

    FixOrientations(): void;

    OffsetPoint(j: any, k: any, jointype: any): any;

    static GetUnitNormal(pt1: any, pt2: any): any;

    static def_arc_tolerance: number;

    static two_pi: number;

}

export type Path = Array<IFPoint>;
export type Paths = Array<Path>;

export class PolyNode
{
    constructor();

    AddChild(Child: any): void;

    ChildCount(): any;

    Childs(): any;

    Contour(): any;

    GetNext(): any;

    GetNextSiblingUp(): any;

    IsHole(): any;

    IsHoleNode(): any;

    Parent(): any;

}

export class PolyTree
{
    constructor();

    AddChild(Child: any): void;

    ChildCount(): any;

    Childs(): any;

    Clear(): void;

    Contour(): any;

    GetFirst(): any;

    GetNext(): any;

    GetNextSiblingUp(): any;

    IsHole(): any;

    IsHoleNode(): any;

    Parent(): any;

    Total(): any;

}

export enum ClipType
{
    ctIntersection = 0,
    ctUnion = 1,
    ctDifference = 2,
    ctXor = 3
};

export enum Direction
{
    dRightToLeft = 0,
    dLeftToRight = 1
};

export enum EdgeSide
{
    esLeft = 0,
    esRight = 1
};

export enum EndType
{
    etOpenSquare = 0,
    etOpenRound = 1,
    etOpenButt = 2,
    etClosedLine = 3,
    etClosedPolygon = 4
};

export enum JoinType
{
    jtSquare = 0,
    jtRound = 1,
    jtMiter = 2,
};

export const PI: number;

export const PI2: number;

export enum PolyFillType
{
    pftEvenOdd = 0,
    pftNonZero = 1,
    pftPositive = 2,
    pftNegative = 3
};

export enum PolyType
{
    ptSubject = 0,
    ptClip = 1
};

export const use_lines: boolean;

export const use_xyz: boolean;

export const version: string;

export interface IFPoint
{
    x: number;
    y: number;
    z?: number;
}
export class FPoint implements IFPoint
{
    x: number;
    y: number;
    z?: number;
    static op_Equality(a: IFPoint, b: IFPoint): boolean;
    static op_Inequality(a: IFPoint, b: IFPoint): boolean;
}

export namespace JS
{
    function AddOuterPolyNodeToExPolygons(polynode: any, expolygons: any): void;

    function AreaOfPolygon(poly: any): any;

    function AreaOfPolygons(poly: any): any;

    function BoundsOfPath(path: any): any;

    function BoundsOfPaths(paths: any): any;

    function Clean<T = Path | Paths>(polygon: T, delta: number): T;

    function Clone<T = Path | Paths>(polygon: T): T;

    function ExPolygonsToPaths(expolygons: any): any;

    function Lighten(polygon: any, tolerance: any): any;

    function PerimeterOfPath(path: any, closed: any): any;

    function PerimeterOfPaths(paths: any, closed: any): any;

    function PolyTreeToExPolygons(polytree: any): any;

}
