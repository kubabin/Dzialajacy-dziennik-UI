import { Cookies } from "./cookies";
import { DayOfWeek } from "./day-of-week";
import { Grade } from "./grade";
import { Homework } from "./homework";
import { PlanLesson } from "./plan-lesson";
import { SchoolTest } from "./school-test";
import { Subject } from "./subject";


export class Api {
  constructor(username:string | undefined, password:string | undefined){
    this.session = "-1"
    if (Cookies.exists("sessionCode"))
    {
      // User was logged in, using session code in cookies.
      this.session = Cookies.getCookie("sessionCode")
    }
  }

  private session:string;
  async login() {
    var authResponse;

    // its php because of its easy access to mysql
    // TODO: implement api backend
    await fetch("/auth.php",{'method':"GET",}).then((response) => authResponse = response)

  }
  static isLoggedIn()
  {
    return Cookies.exists("sessionCode")
  }
  getGrades()
  {
    // Grade 7 and 6+ are kind of easter eggs. They wont be visible in grade edit menu, but teacher can type them in.
    return [//new Grade("7", 3, 1, new Date(Date.now()), this.getSubjects()[2], "#1bc5e3"),
    //new Grade("6+", 3, 1, new Date(Date.now()), this.getSubjects()[2], "#1be39a"),
    new Grade("6", 3, 1, new Date(Date.now()), this.getSubjects()[0], "#4ae31b"),
    new Grade("6-", 3, 1, new Date(Date.now()), this.getSubjects()[1], "#4ae31b"),
    new Grade("5+", 3, 1, new Date(Date.now()), this.getSubjects()[2], "#b1e31b"),
    new Grade("5", 3, 1, new Date(Date.now()), this.getSubjects()[3], "#b1e31b"),
    new Grade("5-", 3, 1, new Date(Date.now()), this.getSubjects()[4], "#b1e31b"),
    new Grade("4+", 3, 1, new Date(Date.now()), this.getSubjects()[5],"#d9e31b"),
    new Grade("4", 3, 1, new Date(Date.now()), this.getSubjects()[6],"#d9e31b"),
    new Grade("4-", 3, 1, new Date(Date.now()), this.getSubjects()[7],"#d9e31b"),
    new Grade("3+", 3, 1, new Date(Date.now()), this.getSubjects()[8],"#e3dc1b"),
    new Grade("3", 3, 1, new Date(Date.now()), this.getSubjects()[9],"#e3dc1b"),
    new Grade("3-", 3, 1, new Date(Date.now()), this.getSubjects()[0],"#e3dc1b"),
    new Grade("2+", 3, 1, new Date(Date.now()), this.getSubjects()[1],"#e09c12"),
    new Grade("2", 3, 1, new Date(Date.now()), this.getSubjects()[2],"#e09c12"),
    new Grade("2-", 3, 1, new Date(Date.now()), this.getSubjects()[3],"#e09c12"),
    new Grade("1+", 3, 1, new Date(Date.now()), this.getSubjects()[4],"#e01c12"),
    new Grade("1", 3, 1, new Date(Date.now()), this.getSubjects()[5],"#e01c12"),
  ]
  }
  getSubjects()
  {
    return [new Subject("name name", 4, "Język Polski"),
    new Subject("name name", 2, "Język Angielski"),
    new Subject("name name", 1, "Matematyka"),
    new Subject("name name", 7, "Geografia"),
    new Subject("name name", 3, "Biologia"),
    new Subject("name name", 5, "Religia"),
    new Subject("name name", 6, "Plastyka"),
    new Subject("name name", 8, "Muzyka"),
    new Subject("name name", 9, "Wychowanie Fizyczne"),
    new Subject("name name", 10, "Historia")]
  }
  getHomework()
  {
    return [ new Homework(undefined,"Proszę o przyniesienie zaległych prac. Na kolejną lekcje proszę przynieść patyczki, blok techniczny kolorowy, blok rysunkowy biały i wstążkę.", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[0]),
    new Homework(undefined,"Test test", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[0]),
    new Homework(undefined,"Test test", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[1]),
    new Homework(undefined,"Test test", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[1]),
    new Homework(undefined,"Test test", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[2]),
    new Homework(undefined,"Test test", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[2]),
    new Homework(undefined,"Test test", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[3]),
    new Homework(undefined,"Test test", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[3]),
    new Homework(undefined,"Test test", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[4]),
    new Homework(undefined,"Test test", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[4]),
    new Homework(undefined,"Test test", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[5]),
    new Homework(undefined,"Test test", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[5]),
    new Homework(undefined,"Test test", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[6]),
    new Homework(undefined,"Test test", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[6]),
    new Homework(undefined,"Test test", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[7]),
    new Homework(undefined,"Test test", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[7]),
    new Homework(undefined,"Test test", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[8]),
    new Homework(undefined,"Test test", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[8]),
    new Homework(undefined,"Test test", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[9]),
    new Homework(undefined,"Test test", "name name", new Date(), new Date(2023, 1, 15, 11, 15), this.getSubjects()[9]),

    ]
  }
  getTests()
  {
    return [ new SchoolTest(undefined, "Test test", "name name", new Date(2023, 2,15,11,15), this.getSubjects()[0]),
    new SchoolTest(undefined, "Test test", "name name", new Date(2023, 2,15,11,15), this.getSubjects()[1]),
    new SchoolTest(undefined, "Test test", "name name", new Date(2023, 2,15,11,15), this.getSubjects()[2]),
    new SchoolTest(undefined, "Test test", "name name", new Date(2023, 2,15,11,15), this.getSubjects()[3]),
    new SchoolTest(undefined, "Test test", "name name", new Date(2023, 2,15,11,15), this.getSubjects()[4]),
    new SchoolTest(undefined, "Test test", "name name", new Date(2023, 2,15,11,15), this.getSubjects()[5]),
    new SchoolTest(undefined, "Test test", "name name", new Date(2023, 2,15,11,15), this.getSubjects()[6]),
    new SchoolTest(undefined, "Test test", "name name", new Date(2023, 2,15,11,15), this.getSubjects()[7]),
    new SchoolTest(undefined, "Test test", "name name", new Date(2023, 2,15,11,15), this.getSubjects()[8]),
    new SchoolTest(undefined, "Test test", "name name", new Date(2023, 2,15,11,15), this.getSubjects()[9]),
    new SchoolTest(undefined, "Test test", "name name", new Date(2023, 2,15,11,15), this.getSubjects()[0]),
    new SchoolTest(undefined, "Test test", "name name", new Date(2023, 2,15,11,15), this.getSubjects()[1]),
    new SchoolTest(undefined, "Test test", "name name", new Date(2023, 2,15,11,15), this.getSubjects()[2]),
    new SchoolTest(undefined, "Test test", "name name", new Date(2023, 2,15,11,15), this.getSubjects()[3]),
    ]
  }
  getPlan()
  {
    // each [] must contain 5 entries, corresponding to week days. they can be empty.
    // each [] represents a lesson number.
    var returnedArray:PlanLesson[][] = [[new PlanLesson(0, this.getSubjects()[0], DayOfWeek.Monday),
    PlanLesson.empty(0, DayOfWeek.Tuesday),
    PlanLesson.empty(0, DayOfWeek.Wednesday),
    PlanLesson.empty(0, DayOfWeek.Thursday),
    PlanLesson.empty(0, DayOfWeek.friday)], // Język polski
    [new PlanLesson(1, this.getSubjects()[1], DayOfWeek.Monday)],
    [new PlanLesson(2, this.getSubjects()[2], DayOfWeek.Tuesday)], // Matma
    [new PlanLesson(3, this.getSubjects()[3], DayOfWeek.Tuesday)], // Geografia
    [new PlanLesson(4, this.getSubjects()[4], DayOfWeek.Wednesday)], // Biologia
    [new PlanLesson(5, this.getSubjects()[5], DayOfWeek.Wednesday)], // Religia
    [new PlanLesson(6, this.getSubjects()[6], DayOfWeek.Thursday)], // Plastyka
    [new PlanLesson(7, this.getSubjects()[7], DayOfWeek.Thursday)], // Muzyka
    [new PlanLesson(8, this.getSubjects()[8], DayOfWeek.friday)], // Wychowanie fizyczne
    [new PlanLesson(9, this.getSubjects()[9], DayOfWeek.friday)], // historia
  ]
    return returnedArray;
  }
}
