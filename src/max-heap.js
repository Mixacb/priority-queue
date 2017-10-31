const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];

		
	}

	push(data, priority) {
		this.data=data;
		this.priority=priority;
		insertNode(this);
		shiftNodeUp(this);
	}

	pop() {
		if(!this.isEmpty){
			
			
			return this.root;
		}
	}

	detachRoot() {
		this.root=null;
		return this.root;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
	return this.parentNodes.length;
	}

	isEmpty() {
		if(this.parentNodes.length===0){
			return true;
		}
	}

	clear() {
		root=null;
		parentNodes=[];
	}

	insertNode(node) {
		if(this.isEmpty()){
			this.root=node;
		}
		if(node.left){
			this.parentNodes;
		}
	}

	shiftNodeUp(node) {
		this.root=null;
		this.parentNodes=[];
	}

	shiftNodeDown(node) {
		return this.size();
	}
}

module.exports = MaxHeap;