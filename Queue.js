class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}

function peek(stack) {
  let currentNode = stack.first;
  if(currentNode.next === null){
    //console.log(currentNode.value);
    return currentNode.value;
  }
  console.log(currentNode);
  currentNode = currentNode.next;
}

function isEmpty(stack) {
  if (!stack.first) {
    return console.log('Queue is empty');
  } else {
    return console.log('Queue has things in it');
  }
}

function display(queue) {
  let displayedstack = '';
  let currentNode = queue.first;
  
  while (currentNode !== null) {
    displayedstack += `${currentNode.value}, `;
    currentNode = currentNode.next;
  }
  return console.log(displayedstack);
}



//First in, First out
let mtQ = new Queue();
let starTrekQ = new Queue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
starTrekQ.dequeue('McCoy');
// console.log(JSON.stringify(starTrekQ, null, 2));
display(starTrekQ);
//isEmpty(mtQ);
//peek(starTrekQ);