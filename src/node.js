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
		if(this.parent){
			
				
			
			
			var granny=this.parent.parent;
			/*if(granny.left||granny.right){
			if(granny.left===dad){
				granny.left=this;
			}
			if(granny.right===dad){
				granny.right=this;
			}
			}*/
			var dad=this.parent;
			dad.parent=this;
			this.parent=granny;
			if(dad.left&&dad.right){
				if(dad.right===this){
					var brother=dad.left;
					}
			if(dad.left===this){
				var brother=dad.right;
				}
			brother.parent=this;
			}
			
			
			
		}
	}
}

module.exports = Node;
