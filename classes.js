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

class Vehicle {
    constructor(vin, make, model){
        this.vin = vin
        this.make = make
        this.model = model
    }
}

var plane = new Vehicle('X123Y', 'Boeing')
var car =  new Vehicle('A1234', 'Toyota', 'Camry')
console.log(plane)
console.log(car)
