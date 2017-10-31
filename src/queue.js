const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if(maxSize){
		this.maxSize=maxSize;
		}
		else{
		this.maxSize=30;
		}
		this.heap=MaxHeap;
	}

	push(data, priority) {
		
		if(this.size()===this.maxSize)
		{
			throw new Error('Queue has max size.');
		}
		else{
			heap.push(data, priority);}
	}

	shift() {
		this.pop();
		if(this.isEmpty())
		{
			throw new Error('Queue is empty.');
		}

	}

	size() {

	}

	isEmpty() {
		
	}
}

module.exports = PriorityQueue;
