class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.counter = 0;
    }

    append(value){
        let node = new Node(value);
        
        if(this.head === null){
            this.head = node;
        }
        else {
            let curNode = this.head;
            while(curNode.nextNode != null){
                curNode = curNode.nextNode;
            }
            curNode.nextNode = node;
        }

        this.tail = node;

        this.counter++;
    }

    prepend(value) {
        let node = new Node(value);

        if(this.head === null){
            this.head = node;
        }

        else {
            let firstNode = this.head;
            node.nextNode = firstNode;
            this.head = node;
        }
        this.counter++;
    }

    size(){
        return this.counter;
    }

    first(){
        return this.head;
    }

    last(){
        let curNode = this.tail;
        if(curNode.nextNode === null){
            return curNode;
        }
    }

    at(index){
        let curNode = this.head;
        let i = 0;
        while(i < index){
            curNode = curNode.nextNode;
            i++;
        }
        return curNode;
    }

}

class Node {
    constructor(value){
        this.value = value;
        this.nextNode = null;
    }
}

let list = new LinkedList();

list.append("test");
list.append("test2");
list.prepend("test1");
list.append("test4");

list.size;
list.first;
list.last;

console.log(list.at(3));