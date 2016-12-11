export class User {
  constructor(
    public Id: any,
    public family_name:String,
    public given_name:String,
    public email: String,
    public dateCreated: Date,
    public email_verified:boolean,
    public gender:String,
    public locale:String,
    public name:String,
    public nickname:String,
    public picture:String,
    public user_id:string,
    public admin: boolean,
    public identities:any
    ) { }
}
