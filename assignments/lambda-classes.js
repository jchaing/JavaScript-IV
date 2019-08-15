// CODE here for your Lambda Classes

class Person {
  constructor(base) {
    this.name = base.name;
    this.age = base.age;
    this.location = base.location;
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Student extends Person {
  constructor(profile) {
    super(profile);
    this.previousBackground = profile.previousBackground;
    this.className = profile.className;
    this.favSubjects = profile.favSubjects;
    // STRETCH
    this.grade = profile.grade;
  }
  listsSubjects() {
    return `${this.favSubjects.forEach(subject => console.log(subject))}`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  // STRETCH
  graduateReady() {
    return this.grade > 70
      ? `${this.name} is ready to graduate`
      : `${this.name} is not ready to graduate`;
  }
}

class Instructor extends Person {
  constructor(attrs) {
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
  // STRETCH
  gradeUpdate(student) {
    let random = Math.floor(Math.random() * 10 + 1);
    let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    random = random * plusOrMinus;
    return `${this.name} updates ${
      student.name
    }'s grade to ${(student.grade += random)}`;
  }
}

class TeamLead extends Instructor {
  constructor(tlAttrs) {
    super(tlAttrs);
    this.gradClassName = tlAttrs.gradClassName;
    this.favInstructor = tlAttrs.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const john = new Student({
  name: 'John',
  age: 42,
  location: 'LA',
  grade: 90,
  previousBackground: 'CSUF',
  className: 'WEBPT9',
  favSubjects: ['Javascript', 'React', 'GraphQL']
});

console.log('============================================');
console.log(john.PRAssignment('Javascript'));
console.log(john.listsSubjects());
console.log(john.sprintChallenge('Javascript'));

const pace = new Instructor({
  name: 'Pace',
  location: 'Arizona',
  age: 32,
  specialty: 'Front-End',
  favLanguage: 'Javascript',
  catchPhrase: 'You guys are great!'
});

console.log('============================================');
console.log(pace.demo('Javascript'));
console.log(pace.grade(john, 'Javascript'));

const marshall = new TeamLead({
  name: 'Marshall',
  age: '27',
  location: 'Seattle',
  speciality: 'Front-End',
  favLanguage: 'Javascript',
  catchPhrase: "I'm proud of you"
});

console.log('============================================');
console.log(marshall.standUp('webpt9_marshall'));
console.log(marshall.debugsCode(john, 'Javascript'));

// Stretch Problem

console.log('===============STRETCH TEST=================');
console.log(`${john.name}'s grade is ${john.grade}`);

console.log(pace.gradeUpdate(john));
console.log(pace.gradeUpdate(john));
console.log(pace.gradeUpdate(john));
console.log(pace.gradeUpdate(john));
console.log(pace.gradeUpdate(john));
console.log(pace.gradeUpdate(john));

console.log(marshall.gradeUpdate(john));
console.log(marshall.gradeUpdate(john));
console.log(marshall.gradeUpdate(john));
console.log(marshall.gradeUpdate(john));
console.log(marshall.gradeUpdate(john));
console.log(marshall.gradeUpdate(john));

console.log(john.graduateReady());
