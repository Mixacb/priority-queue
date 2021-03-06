const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if(maxSize){
		this.maxSize=maxSize;
		}
		else{
		this.maxSize=30;
		}
		this.heap=new MaxHeap();
	}

	push(data, priority) {
		
		if(this.size()===this.maxSize)
		{
			throw new Error('Queue has max size.');//();
		}
		else{
			this.heap.push(data, priority);}
	}

	shift() {
		
		if(this.isEmpty())
		{
			throw new Error('Queue is empty.');//;
		}
		return this.heap.pop();
	}

	size() {

	return this.heap.size();
	}

	isEmpty() {
		
		return this.size()===0;
		
	}
}

module.exports = PriorityQueue;
