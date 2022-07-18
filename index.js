// class Person{
//     constructor(n,age,id,field){
//         this.name = n;
//         this.age = age;
//         this.id = id;
//         this.feild = field;
//     }
//     showdetail(){
//         console.log(`My Name is ${this.name}`);
//     }
// }
// let p1 = new Person("Mubashir", 22,4566,"IT");
// // console.log(p1.name);
// p1.showdetail();

// class Student extends Person{
//     constructor(n,age,id,field,number){
//         super(n,age,id,field);
//         this.number = number;
//     }
// }
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    showpoint(){
        console.log(`(${this.x},${this.y})`);
    }
}
let p1 = new Point(3,6);
p1.showpoint();