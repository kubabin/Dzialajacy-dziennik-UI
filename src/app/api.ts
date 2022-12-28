import { Cookies } from "./cookies";
import { Grade } from "./grade";
import { Subject } from "./subject";


export class Api {
  constructor(username:string, password:string){
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
    return [new Grade("6", 3, 1, new Date(Date.now()), this.getSubjects()[1], "#4ae31b"),
    new Grade("6-", 3, 1, new Date(Date.now()), this.getSubjects()[2], "#4ae31b"),
    new Grade("5+", 3, 1, new Date(Date.now()), this.getSubjects()[2], "#b1e31b"),
    new Grade("5", 3, 1, new Date(Date.now()), this.getSubjects()[6], "#b1e31b"),
    new Grade("5-", 3, 1, new Date(Date.now()), this.getSubjects()[3], "#b1e31b"),
    new Grade("4+", 3, 1, new Date(Date.now()), this.getSubjects()[4],"#d9e31b"),
    new Grade("4", 3, 1, new Date(Date.now()), this.getSubjects()[6],"#d9e31b"),
    new Grade("4-", 3, 1, new Date(Date.now()), this.getSubjects()[4],"#d9e31b"),
    new Grade("3+", 3, 1, new Date(Date.now()), this.getSubjects()[1],"#e3dc1b"),
    new Grade("3", 3, 1, new Date(Date.now()), this.getSubjects()[4],"#e3dc1b"),
    new Grade("3-", 3, 1, new Date(Date.now()), this.getSubjects()[6],"#e3dc1b"),
    new Grade("2+", 3, 1, new Date(Date.now()), this.getSubjects()[2],"#e09c12"),
    new Grade("2", 3, 1, new Date(Date.now()), this.getSubjects()[4],"#e09c12"),
    new Grade("2-", 3, 1, new Date(Date.now()), this.getSubjects()[1],"#e09c12"),
    new Grade("1+", 3, 1, new Date(Date.now()), this.getSubjects()[5],"#e01c12"),
    new Grade("1", 3, 1, new Date(Date.now()), this.getSubjects()[7],"#e01c12"),
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
}
