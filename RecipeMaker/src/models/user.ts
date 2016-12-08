export class User {
  constructor(
    public Id: any,
    public family_name:String,
    public email: String,
    public username: String, 
    public dateCreated: Date,
    public email_verified:boolean,
    public gender:String,
    public identities: [
    {
      provider: String,
      user_id: String,
      connection: String,
      isSocial: boolean
    }
  ],
   public locale:String,
   public name:String,
   public nickname:String,
   public picture:String,
   public user_id:string,
   public admin: boolean,
    ) { }
}
