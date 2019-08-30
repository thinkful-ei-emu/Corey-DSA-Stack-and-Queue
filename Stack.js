class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data){
    /* If the stack is empty, then the node will be the
      top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    /* If the stack already has something, 
      then create a new node,
      add data to the new node, and
      have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }

  /* In order to remove the top of the stack, you have to point
    the pointer to the next item and that next item becomes the
    top of the stack */
  pop(){
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(stack) {
  let currentNode = stack.top;
  if(currentNode.next === null){
    console.log(currentNode.data);
    return currentNode.data;
  }
  console.log(currentNode);
  currentNode = currentNode.next;
  
}

function isEmpty(stack) {
  if (stack.top === null) {
    console.log('Empty');
  } else {
    console.log('Not Empty');
  }
}

function display(stack) {
  let displayedstack = '';
  let currentNode = stack.top;

  while (currentNode !== null) {
    
    displayedstack += `${currentNode.data}, `;
    currentNode = currentNode.next;
  }
  return console.log(displayedstack);
}




/* LAST IN, FIRST OUT */
const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spoch');
starTrek.push('McCoy');
starTrek.push('Scotty');
//console.log(JSON.stringify(starTrek, null, 2));
//peek(starTrek);
//display(starTrek);
//isEmpty(starTrek);

