export class Cookies {
  static getCookie(name:string):string {
    var result = document.cookie.split('; ')
      .find((row) => row.startsWith(name+'='))
      ?.split('=')[1];

    if (result != undefined)
    {
      return result.toString();
    }
    else {return ""}


  }
  static setCookie(name:string,value:string, expires:Date, secure:boolean)
  {
    if (secure)
    {
      document.cookie = name+"="+value+";expires="+expires.toUTCString()+"; Secure";
    }
    else
    {
      document.cookie = name+"="+value+";expires="+expires.toUTCString();
    }
  }
  static exists(name:string)
  {
    if (document.cookie.split(';').some((item) => item.trim().startsWith(name+'='))) {
      return true
    }
    else{
      return false
    }
  }
}


