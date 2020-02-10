/* 
Animal Shelten animal shelter, which holds only dogs and cats, operates on a strictly "first in, first
out" basis. 

People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of
that type). They cannot select which specific animal they would like. Create the data structures to
maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog,
and dequeueCat.

You may use the built-in LinkedList data structure. 
*/

class Queue {
  constructor() {
    this.data = [];
  }

  enqueue() {
    this.data.push();
  }

  dequeue() {
    this.data.shift();
  }
}

class AnimalShelter {
  constructor() {
    const dogs = new Queue();
    const cats = new Queue();
  }

  enqueue(animal) {
    if (animal.type === 'dog') {
      dogs.enqueue(animal);
    } else {
      cats.enqueue(animal);
    }
  }

  dequeue(type = any) {
    if (type === 'any') {
      dogs.dequeue();
    } else if (type === 'dog') {
      dogs.dequeue();
    } else if (type === 'cat') {
      cats.dequeue();
    }
  }
}
