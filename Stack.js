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

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let strStack = new Stack();
  let reverseStr = '';
  for(let i = 0; i < s.length; i++ ) {
    strStack.push(s[i]);
  }

  while (strStack.top !== null) {
    reverseStr += strStack.pop();
  }
  return s === reverseStr;
}
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));


function parenFinder(str) {
  let strStack = new Stack();

  for(let i = 0; i < str.length; i++ ) {
    
    if (str[i] === '(') {
      strStack.push();
    }
    else if (str[i] === ')') {
      strStack.pop();
    }
  }

  if (strStack.top === null){
    return console.log('Enough parens');
  } else {
    return console.log('Missing parens');
  }
}


// function sort(num) {
//   let tempStack = new Stack();
  
//   while (num.top !== null){
//     let peekAt = peek(num);
//     let tempVar = num.pop();
//     if (tempVar > peekAt) {
//       tempStack.push(tempVar);
//     }
//     return console.log(JSON.stringify(tempStack, null, 2));
//   }
  
// }


/* LAST IN, FIRST OUT */
const numStack = new Stack();
numStack.push(4);
numStack.push(8);
numStack.push(34);
numStack.push(6);
numStack.push(2);


const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spoch');
starTrek.push('McCoy');
starTrek.push('Scotty');
//starTrek.pop();
//starTrek.pop();
//console.log(JSON.stringify(starTrek, null, 2));
//peek(starTrek);
//display(starTrek);
//isEmpty(starTrek);
// parenFinder('(()');
// parenFinder('(())');
//console.log(sort(numStack));
