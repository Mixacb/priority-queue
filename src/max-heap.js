const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];

		
	}

	push(data, priority) {
		var node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		if(!this.isEmpty){

			return this.root.data;
		}
	}

	detachRoot() {
		this.root=null;
		this.parentNodes.split(0,1);
		return this.root;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		let lg=Math.ceil(Math.log2(this.parentNodes.length));
	return this.parentNodes.length+Math.pow(2,lg)-1;
	}

	isEmpty() {
		if(this.size()===0){
			return true;
		}
		return false;
	}

	clear() {
		this.root=null;
		this.parentNodes=[];
	}

	insertNode(node) {
		if(this.parentNodes.length===0){
			this.root=node;
			this.parentNodes.push(node);
		}
		else{
			let i=this.parentNodes.length-1;
				if((node.priority>this.parentNodes[Math.floor(i/2)].data)&&(!this.parentNodes[Math.floor(i/2)].left))
				{
					this.parentNodes[Math.floor(i/2)].left=node;
					node.parent=this.parentNodes[Math.floor(i/2)];
					this.parentNodes.push(node);
					
				}
				else
				{
					this.parentNodes[Math.floor(i/2)].right=node;
					node.parent=this.parentNodes[Math.floor(i/2)];
					//this.parentNodes.split(0,1);
					this.parentNodes.push(node);
				}
				
			
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