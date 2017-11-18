"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linknode = /** @class */ (function () {
    function linknode(_nodeData, _nextNode) {
        if (_nodeData) {
            this._nodeData = _nodeData;
        }
        if (_nextNode) {
            this._nextNode = _nextNode;
        }
    }
    linknode.prototype.append = function (nde) {
        if (this._nextNode == null) {
            this._nextNode = nde;
        }
        else {
            var lastNode = this._nextNode;
            while (lastNode._nextNode != null) {
                lastNode = lastNode._nextNode;
            }
            lastNode._nextNode = nde;
        }
    };
    linknode.prototype.data = function (nodeData) {
        this._nodeData = nodeData;
    };
    ;
    linknode.prototype.next = function () {
        return this._nextNode;
    };
    ;
    return linknode;
}());
exports.linknode = linknode;

//# sourceMappingURL=../maps/linknode.js.map
