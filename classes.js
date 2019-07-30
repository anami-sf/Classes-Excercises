var cohort = {
    id: 'SEI',
    students: ['Mary', 'Toni', 'Fred'],
    instructors: ['Susan', 'Phil'],
    addStudent: function(name) {
      name = name[0].toUpperCase() + name.substr(1).toLowerCase();
      this.students.push(name);
    },
    pickRandomStudent: function() {
      var rndIdx = Math.floor(Math.random() * this.students.length);
      return this.students[rndIdx];
    }
  };

console.log(cohort.addStudent('Anami'))
console.log(cohort.students)