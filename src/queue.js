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
			throw new Error('Queue has max size.');
		}
		else{
			this.heap.push(data, priority);}
	}

	shift() {
		//this.heap.pop();all right
		if(this.isEmpty())
		{
			throw new Error('Queue is empty.');
		}

	}

	size() {

	}

	isEmpty() {
		//return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;
