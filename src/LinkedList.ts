import { Sorter } from "./Sorter";
class Node {
    next: Node | null = null;
    constructor(public data: number) { }
}

export class LinkedList extends Sorter {
    head: Node | null = null;
    private tail: Node | null = null;
    add(data: number): void {
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

    get length(): number {
        let tail = this.head;
        let count = 0;
        while (tail) {
            tail = tail.next;
            count++;
        }
        return count;
    }

    print(): void {
        let node: Node | null = this.head;
        while (node) {
            console.log("Data :", node.data);
            node = node.next;
        }
    }

    at(index: number): Node {
        if (!this.head) {
            throw new Error("Index out of Bound");
        }
        if (index > this.length) {
            throw new Error("Index out of Bound");
        }
        let counter = 0;
        let node: Node | null = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            node = node.next;
            counter++;
        }
        throw new Error("Index out of Bound");
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) {
            throw new Error("List is empty");
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex: number, rightIndex: number): void {
        [this.at(leftIndex).data, this.at(rightIndex).data] = [
            this.at(rightIndex).data,
            this.at(leftIndex).data,
        ];
    }
}
