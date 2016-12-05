export class User {
  constructor(
    public Id: any,
    public firstName: String, 
    public lastName: String, 
    public email: String,
    public username: String, 
    public admin: boolean,
    public dateCreated: Date
    
    ) { }
}
