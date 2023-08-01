"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
        this.tail = null;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        }
        // another way // it requires a loop
        // let tail = this.head;
        // while(tail.next){
        //     tail = tail.next;
        // }
        // tail.next = node;
    }
    get length() {
        let tail = this.head;
        let count = 0;
        while (tail) {
            tail = tail.next;
            count++;
        }
        return count;
    }
    print() {
        let node = this.head;
        while (node) {
            console.log("Data :", node.data);
            node = node.next;
        }
    }
    at(index) {
        if (!this.head) {
            throw new Error("Index out of Bound");
        }
        if (index > this.length) {
            throw new Error("Index out of Bound");
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            node = node.next;
            counter++;
        }
        throw new Error("Index out of Bound");
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("List is empty");
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        [this.at(leftIndex).data, this.at(rightIndex).data] = [
            this.at(rightIndex).data,
            this.at(leftIndex).data,
        ];
    }
}
exports.LinkedList = LinkedList;
