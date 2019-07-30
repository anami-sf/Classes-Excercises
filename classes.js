// var cohort = {
//     id: 'SEI',
//     students: ['Mary', 'Toni', 'Fred'],
//     instructors: ['Susan', 'Phil'],
//     addStudent: function(name) {
//       name = name[0].toUpperCase() + name.substr(1).toLowerCase();
//       this.students.push(name);
//     },
//     pickRandomStudent: function() {
//       var rndIdx = Math.floor(Math.random() * this.students.length);
//       return this.students[rndIdx];
//     }
//   };

// console.log(cohort.addStudent('Anami'))
// console.log(cohort.students)

// class Vehicle {
//     constructor(vin, make, model){
//         this.vin = vin
//         this.make = make
//         this.model = model
//         this.running = false
//     }

//     Start() {
//         this.running  = true;
//         console.log('running...');
//     }

//     stop() {
//         this.running = false;
//         console.log("Stopped")
//     }

//     toString() {
//         reuturn 
//             return 'Vehicle (' + this.vin + ') is a ' +
//                 this.make + ' model ' + this.model;
//     }
//     static about() {
//         console.log("I\'m the vehicle class!")
//     }
// }


// var plane = new Vehicle('X123Y', 'Boeing')
// var car =  new Vehicle('A1234', 'Toyota', 'Camry')
// console.log(plane)
// console.log(car)
// console.log(plane.stop())

// class Plane extends Vehicle {
//     constructor(vin, make, model, airline) {
//         super(vin, make, model)
//         this.airline = airline
//     };
   
//     engageAutoPilot() {
//         console.log('Look mom, no hands!')
//     }
// }

// var spyPlane = new Plane('secret', 'Lockhead', 'SR-71', 'USA')
// //var car = new Vehicle('A1234', 'Toyota', 'Camry')
// spyPlane.stop()

// class Automobile extends Vehicle {
//     constructor(vin, make, model){
//         super(vin, make, model, numDoors)
//         this.numDoors = this.numDoors
//     }

//     honk(){
//         console.log('Hoooonk!')
//     }
// }

// var fastCar = new Automobile('TS123', 'Tesla', "P1", 4)
// console.log(fastCar)
// fastCar.honk()

// class Stack extends Array {
//     get top() {
//       return this[this.length - 1];
//     }
//   }


//JS Classes Lab


class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    
    sayHello() {
        console.log('Hello')
    }
}

let anami = new Person('Ana', 'Milan')
console.log(anami)
anami.sayHello()

class Employee extends Person {
    constructor (firstName, lastName, company, wage, active) {
        super(firstName, lastName)
        this.company = company
        this.wage = wage
        this.active = true
    }

    receiveRaise(){
        this.wage = this.wage*1.1
    }

    terminate() {
        this.active = false
    }
}

let kate = new Employee('kate', 'gibbons', 'luma', 80, true)
console.log(kate)
kate.receiveRaise()
console.log(kate.wage)

class Manager extends Employee {
    constructor(firstName, lastName, company, wage, active, department) {
        super(firstName, lastName, company, wage, active)
        this.department = department
    }

    giveRaise(employee) {
        employee.receivesRaise()
    }
}

const John = new Manager('John', 'Smith', 'Luma', 100, true, 'CS')
console.log(John)

class Worker extends Employee {
    constructor(firstName, lastName, company, wage, active, manager){
        super(firstName, lastName, company, wage, active)
        this.manager = manager
    }

    receivePromotion(){
        const worker1 = new Manager(this.firstName, this.lastName, this.company, this.wage, this.active, 'CS')
        worker1.receiveRaise()
        //delete worker
        return worker1
        
    }
}

const Lisa = new Worker('Lisa', 'Underwood', 'Luma', 80, true, 'Matt' )
console.log(Lisa)
console.log(Lisa.receivePromotion())

