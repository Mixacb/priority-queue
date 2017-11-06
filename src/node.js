class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=null;
		this.left=null;
		this.right=null;
	}

	appendChild(node) {
		if(!(this.left&&this.right)){
		if(this.left){
		this.right=node;
		//this.right.parent = this;
		}
		else{
		this.left=node;
		//this.left.parent = this;
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
		{this.left=null;}
		if(this.right===node)
		{this.right=null;}
		
		

	}

	remove() {
		if(this.parent){
			this.parent.removeChild(this);
		}

	}

	swapWithParent() {
		if(this.parent){
			//var brother;
			const granny=this.parent.parent;
			const dad=this.parent;
			dad.parent=this;
			this.parent=granny;	
			if(dad.left&&dad.right){
				if(dad.right===this){
					dad.left.parent=this;
					//brother=dad.left;
					}
			if(dad.left===this){
				dad.right.parent=this;//brother=dad.right;
				}
			
			//brother.parent=this;
			}
			const l=this.left;
			const r=this.right;
			if(dad.left===this){
			this.right=dad.right;
			this.left=dad;
			}
			if(dad.right===this){
			this.left=dad.left;
			this.right=dad;
			}
			dad.left=l;
			dad.right=r;
			if(granny){//(&&granny.left||granny.right)
			if(granny.right===dad){
			granny.right=this;
			}
			if(granny.left===dad){
			granny.left=this;
			}
			}
			
		}
		
	}
}

module.exports = Node;
