export class generaid {
  id : number;

  constructor() {
    this.id= Math.floor(Math.random()*1000);
  }

}

export class user {
  name: string;
  email? : string;

  constructor(name:string, email?:string) {
    this.name=name;
    this.email=email;
  }
  
  

  }
