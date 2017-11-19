export declare class linknode {
    _nodeData: any;
    _nextNode: linknode;
    constructor(_nodeData?: any, _nextNode?: linknode);
    append(nde: linknode): void;
    data(nodeData: any): void;
    next(): linknode;
}
