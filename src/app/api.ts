import { Cookies } from "./cookies";


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
    return []
  }
}
