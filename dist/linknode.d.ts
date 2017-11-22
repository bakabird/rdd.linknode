export declare class linknode {
    private _nodeData;
    private _nextNode;
    constructor(_nodeData?: any, _nextNode?: linknode);
    append(nde: linknode): void;
    sData(nodeData: any): void;
    gData(): any;
    sNext(nextNode: linknode): void;
    gNext(): linknode;
}
