const username: string | number = 'nikonikoni'; // Puede ser string ó number (No es necesario poner ningun tipo)

const sum = (a: number, b: number) => {
  return a+b;
}
sum(1,2)

class Person{
  constructor(public age:number, public lastName: string){}
}

const nico = new Person(15, 'Molina');
