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
		//this.siz++;
		
	}

	pop() {
		if(!this.isEmpty()){
			let det=this.detachRoot();
			//this.restoreRootFromLastInsertedNode(detached);
 			//this.shiftNodeDown(this.root);
			
			return det.data;
		
			
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
	let last=this.parentNodes[this.parentNodes.length-1];
		detached=last;
		if(last.parent.left===last)
		{last.parent.left=null;}
		if(last.parent.right===last)
		{last.parent.right=null;}
		this.parentNodes.pop();
	}

	size() {
			/*if(this.parentNodes.length===0){
				return 0;
			}
			else{//if(this.parentNodes.length>=1){
				if(this.parentNodes[this.parentNodes.length-1].parent.right){
				return this.parentNodes.length*2-1;
				}
				else{
					return this.parentNodes.length*2-2;
				}
			}
			*/return this.siz;
	
	}

	isEmpty() {
		
			return this.root === null;

	}

	clear() {
		this.root=null;
		this.parentNodes=[];
		this.siz=0;
	}

	insertNode(node) {
		this.siz++;
		if(this.parentNodes.length===0){
			this.root=node;
			this.parentNodes.push(node);
		}
		/*else{
			
				if((node.priority>this.parentNodes[0].priority)&&(!this.parentNodes[0].left))
				{
					this.parentNodes[0].left=node;
					node.parent=this.parentNodes[0];
					this.parentNodes.push(node);
					
				}
				else
				{
					this.parentNodes[0].right=node;
					node.parent=this.parentNodes[0];
					this.parentNodes.shift();
					this.parentNodes.push(node);
				}*/
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
		if(node.right) {
 			let maxSon = node.right.priority > node.left.priority ? node.right : node.left;
 			if(maxSon.priority > node.priority) {
 				if(this.root == node) {
 				this.root = maxSon;
 				}
 				maxSon.swapWithParent();
 				if(!node.right) {
 					this.parentNodes[this.parentNodes.indexOf(node)] = node.parent;
 					this.parentNodes[this.parentNodes.lastIndexOf(node.parent)] = node;
 				}
 				return this.shiftNodeDown(node);
 			}
 		} else if(node.left && node.left.priority > node.priority) {
 			if(this.root == node) {
 				this.root = node.left;
 			}
 			node.left.swapWithParent();
 			if(!node.right) {
 				this.parentNodes[this.parentNodes.indexOf(node)] = node.parent;
 				this.parentNodes[this.parentNodes.lastIndexOf(node.parent)] = node;
 			}
 			return this.shiftNodeDown(node);
 		}
		/*if(node.left||node.right)
		{	if(node.left&&node.priority<node.left.priority){
			    node.left.swapWithParent();
			}
			if(node.right&&node.priority<node.right.priority){
				node.right.swapWithParent();
			}
			
			this.shiftNodeDown(node);
		}*/
		
	}
}

module.exports = MaxHeap;