

export class Api {
  constructor(username:string, password:string){
    this.session = -1
  }
  private session:number;
  async connect() {
    var authResponse;

    // its php because of its easy access to mysql
    // TODO: implement api backend
    fetch("/api.php",{'method':"GET",}).then((response) => authResponse = response)
  }}
