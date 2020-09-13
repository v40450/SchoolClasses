//https://www.codecademy.com/courses/introduction-to-javascript/projects/school-catalog
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents
  }
  set numberOfStudents(newNumberOfStudents) {
    if(typeof newNumberOfStudents === 'number') {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
   quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`);
  }
  static pickSubstituteTeacher(substituteTeachers) {
    return substituteTeachers[Math.floor(Math.random() * (substituteTeachers.length-1))];
  }
};

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
};

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    console.log(this._sportsTeams);
    return this._sportsTeams;
  }
};

//14 Create a PrimarySchool instance
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
//15 Call .quickFacts() on the lorraineHansbury instance
lorraineHansbury.quickFacts();
//16 Call .pickSubstituteTeacher() on School
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
//17 Create a HighSchool instance
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
//18 Get the value saved to the sportsTeams property in alSmith
alSmith.sportsTeams;
