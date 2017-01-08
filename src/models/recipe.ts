export class Recipe {
  constructor(
    public Id: any,
    public title: string,
    public userId: string, 
    public description: string,
    public ingredients:string[],
    public steps:string[],
    public meal:Number[],
    public category:Number[],
    public imageUrl:string,
    public reviews: string[],
    public userImg: String,
    public like_count:Number,
    public dateCreated: Date,
    public likedByUser:Number,
    public username: String
    ) { }
}
