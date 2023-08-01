import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, -5, 2, 1, 0, 4]);
numbersCollection.sort();
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection("RiShabh");
charactersCollection.sort();
console.log(charactersCollection.data)

const linkedList = new LinkedList();
linkedList.add(10); // 0
linkedList.add(14); // 1
linkedList.add(42); // 2
linkedList.add(-2); // 3
linkedList.add(99); // 4
linkedList.add(4); //  5
linkedList.add(50); // 6

linkedList.sort();
linkedList.print()