export class linknode {
    private _nodeData:any;
    private _nextNode:linknode;
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
    sData(nodeData: any): void{
        this._nodeData = nodeData;
    };
    gData(): any{
        return this._nodeData;
    }
    sNext(nextNode: linknode){
        this._nextNode = nextNode;
    }
    gNext(): linknode{
        return this._nextNode;
    };
}
