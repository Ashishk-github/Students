class Student{
    
    constructor(name,age,phNumber,boardMarks){
        this.name=name;
        this.age=age;
        this.phNumber=phNumber;
        this.boardMarks=boardMarks;
        this.studentCount=window.count++;
    }
    eligibilty(){
        return(this.boardMarks>=40)?(`${this.name} is eligible`):(`${this.name} is not eligible`);
    }
    counter(){
        return(`This is ${this.studentCount}th student`);
    }
    eligibiltyforPlacements(minMarks){
        return(age)=>{return this.age>=age && this.boardMarks>=minMarks};
    }
    printEligibleName(minMarks){
        return(age)=>{if(this.age>=age && this.boardMarks>=minMarks) {console.log(this.name)}};
        }
    
}
var count=1;
let student1=new Student('Prakash',14,9847598475,25);
let student2=new Student('Raju',22,9848888475,49);
let student3=new Student('Shiv',17,7777598475,92);
let student4=new Student('Abdul',15,8947598475,84);
let student5=new Student('John',16,7847598464,35);
console.log(student1.eligibilty());
console.log(student4.counter());
console.log(student3.eligibiltyforPlacements(50)(12));
student1.printEligibleName(50)(15);
student2.printEligibleName(50)(15);
student3.printEligibleName(50)(15);
student4.printEligibleName(50)(15);
student5.printEligibleName(50)(15);


