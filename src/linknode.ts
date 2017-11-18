export class linknode {
    _nodeData:any;
    _nextNode:linknode;
    constructor(_nodeData? :any,_nextNode? :linknode){
        if(_nodeData){
            this._nodeData = _nodeData
        }
        if(_nextNode){
            this._nextNode = _nextNode
        }
    }
    append(nde:linknode):void{
        if(this._nextNode == null){
            this._nextNode = nde;
        }else{
            let lastNode:linknode = this._nextNode;
            while(lastNode._nextNode != null){
                lastNode = lastNode._nextNode;
            }
            lastNode._nextNode = nde;
        }
    }
    data(nodeData: any): void{
        this._nodeData = nodeData;
    };
    next(): linknode{
        return this._nextNode;
    };
}
