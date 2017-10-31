class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=null;
		this.left=null;
		this.right=null;
	}

	appendChild(node) {
		if(!(this.left!==null&&this.right!==null)){
		if(this.left!==null){
		this.right=node;
		}
		else{
		this.left=node;
		}
		node.parent=this;
		}
		
	}

	removeChild(node) {

		if(this.left!==node&&this.right!==node){
			throw new Error('This is not child of this node.');
		}
		node.parent=null;
		if(this.left===node)
		this.left=null;
		if(this.right===node)
		this.right=null;
		
		

	}

	remove() {
		if(this.parent!==null){
			this.parent.removeChild(this);
		}

	}

	swapWithParent() {
		if(this.parent!==null){
			
			
			/*if(this.parent.parent.left===this.parent){
				this.parent.parent.left=this;
			}
			if(this.parent.parent.right===this.parent){
				this.parent.parent.right=this;
			}*/
		if(this.parent.right===this){
			this.parent.left.parent=this;
			}
			if(this.parent.left===this){
			this.parent.right.parent=this;
			}
			var buffer=this.parent.parent;
			this.parent.parent=this;
			this.parent=buffer;
			
		}
	}
}

module.exports = Node;
