const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];
		this.siz=0;
		
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
		this.siz++;
		
	}

	pop() {
		if (!this.isEmpty()) {
 		let detached = this.detachRoot();
 		if (this.isEmpty()) {
 			return detached.data;
 		}
 		this.restoreRootFromLastInsertedNode(detached);
 		this.shiftNodeDown(this.root);
 		return detached.data;
		}
	}

	detachRoot() {
		if((this.parentNodes.length!==0&&this.parentNodes.includes(this.root)))
		{
			this.parentNodes.splice(this.parentNodes.indexOf(this.root),1);
		}
		this.siz--;
		let Root=this.root;
		this.root=null;
		return Root;
	}

	restoreRootFromLastInsertedNode(detached) {
	
		let last = this.parentNodes[this.parentNodes.length - 1];
		if(last.parent && last.parent.right) {this.parentNodes.unshift(last.parent);}
		last.remove();
		this.parentNodes.pop();
		if(detached.left) {
			last.left = detached.left;
			last.left.parent = last;
		}
		if(detached.right) {
			last.right = detached.right;
			last.right.parent = last;
		}
		this.root = last;
		if(this.parentNodes.indexOf(detached) + 1) {
			this.parentNodes[this.parentNodes.indexOf(detached)] = last;
		}
	}

	size() {

			
			return this.siz;
	
	}

	isEmpty() {
		
			return (this.root === null)&&(this.parentNodes.length === 0);

	}

	clear() {
		this.root=null;
		this.parentNodes=[];
		this.siz=0;
	}

	insertNode(node) {

		if(this.parentNodes.length===0){
			this.root=node;
			this.parentNodes.push(node);
		}
		else
 		{
 			this.parentNodes[0].appendChild(node);
 			this.parentNodes.push(node);
 			if(this.parentNodes[0].left!=null&&this.parentNodes[0].right!=null)
				{
 				this.parentNodes.shift();
 		}
		}
	
			
		  
		
	}

	shiftNodeUp(node) {

		if(node.parent&&node.parent.priority<node.priority)
		{
			
			
			if(this.parentNodes.includes(node)&&this.parentNodes.includes(node.parent))
			{
				this.parentNodes[this.parentNodes.indexOf(node)]=node.parent;
				this.parentNodes[this.parentNodes.indexOf(node.parent)]=node;
			}
			if(this.parentNodes.includes(node)&&!this.parentNodes.includes(node.parent))
			{
				this.parentNodes[this.parentNodes.indexOf(node)]=node.parent;
			}
			node.swapWithParent();
			if(node.parent===null)
			this.root=node;
			this.shiftNodeUp(node);
		
		}
		
		
	}

	
	shiftNodeDown(node) {

		if(node.right){
			if(node.right.priority>node.left.priority&&node.priority>node.left.priority){
			if(this.root===node)
			{
				this.root=node.right;
			}
			if(this.parentNodes.includes(node)&&this.parentNodes.includes(node.right))
			{
				this.parentNodes[this.parentNodes.indexOf(node)]=node.right;
				this.parentNodes[this.parentNodes.indexOf(node.right)]=node;
			}
			if(!this.parentNodes.includes(node)&&this.parentNodes.includes(node.right))
			{
				this.parentNodes[this.parentNodes.indexOf(node.right)]=node;
			}	
			node.right.swapWithParent();
			this.shiftNodeDown(node);
			}
			if(node.right.priority<node.left.priority&&node.priority<node.right.priority){
				if(this.root===node)
			{
			this.root=node.left;
			}
			if(this.parentNodes.includes(node)&&this.parentNodes.includes(node.left))
			{
				this.parentNodes[this.parentNodes.indexOf(node)]=node.left;
				this.parentNodes[this.parentNodes.indexOf(node.left)]=node;
			}
			if(!this.parentNodes.includes(node)&&this.parentNodes.includes(node.left))
			{
				this.parentNodes[this.parentNodes.indexOf(node.left)]=node;
			}	
			node.left.swapWithParent();
			this.shiftNodeDown(node);
			}
			}
			else{
				if(node.left&&node.left.priority>node.priority){
					
					if(this.parentNodes.includes(node)&&this.parentNodes.includes(node.left))
			{
				this.parentNodes[this.parentNodes.indexOf(node)]=node.left;
				this.parentNodes[this.parentNodes.indexOf(node.left)]=node;
			}
					node.left.swapWithParent();
				}
				
			}
		

		
		}
	
}

module.exports = MaxHeap;