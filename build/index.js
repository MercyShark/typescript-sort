"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, -5, 2, 1, 0, 4]);
numbersCollection.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection("RiShabh");
charactersCollection.sort();
console.log(charactersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(10); // 0
linkedList.add(14); // 1
linkedList.add(42); // 2
linkedList.add(-2); // 3
linkedList.add(99); // 4
linkedList.add(4); //  5
linkedList.add(50); // 6
linkedList.sort();
linkedList.print();
