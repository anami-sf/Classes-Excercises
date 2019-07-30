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