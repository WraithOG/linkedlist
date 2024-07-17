export class LinkedList{
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

    pop(){
        let curNode = this.head;
        if(this.counter <= 2){
            curNode.nextNode = null;
            this.tail = null;
            this.counter--;
        }
        else {
            for(let i = 0; i < this.counter - 2; i++){
                curNode = curNode.nextNode;
            }   
            this.tail = curNode;
            curNode.nextNode = null;
            this.counter--;
        }
        
    }

    contains(value){
        let curNode = this.head;
        for(let i = 0; i < this.counter; i++){
            if(curNode.value === value){
                return true;
            }
            else if(curNode.nextNode != null){
                curNode = curNode.nextNode;
            }
            else {
                return false;
            }
        }
    }

    find(value){
        let curNode = this.head;
        for(let i = 0; i < this.counter; i++){
            if(curNode.value === value){
                return i;
            }
            else if(curNode.nextNode != null){
                curNode = curNode.nextNode;
            }
            else {
                return null;
            }
        }
    }

    toString(){
        let curNode = this.head;
        let string = "";
        for (let i = 0; i < this.counter; i++){

            if(curNode.nextNode === null) {
                string += "(" + curNode.value + ") => (null)";
            }
            else {
                string += "(" + curNode.value + ") => ";
                curNode = curNode.nextNode;
            }
            
        }
        return string;
    }

    insertAt(value, index){
        let node = new Node(value);
        if (index === 0){
            this.prepend(value);
            this.counter++;
        }
        else if (index >= this.size) {
            this.append(value);
            this.counter++;
        }
        else {
            let curNode = this.head;
            for(let i = 0; i < index - 1; i++){
                curNode = curNode.nextNode;
            }
            let next = curNode.nextNode;
            curNode.nextNode = node;
            node.nextNode = next;
            this.counter++;
        }
    }

    removeAt(index) {
        if(index >= this.size){
            this.pop();
        }
        else if(index === 0){
            this.pop();
        }
        else {
            let curNode = this.head;
            for(let i = 0; i < index - 1; i++){
                curNode = curNode.nextNode;
            }
            let prevNode = curNode;
            let cur = curNode.nextNode;
            let next = cur.nextNode;
            cur.nextNode = null;
            prevNode.nextNode = next;
            this.counter--;
        }
    }


}

class Node {
    constructor(value){
        this.value = value;
        this.nextNode = null;
    }
}
