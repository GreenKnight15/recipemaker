export class Recipe {
  constructor(
    public Id: any,
    public title: string,
    public userId: String, 
    public description: string,
    public ingredients:String[],
    public steps:String[],
    public meal:Number[],
    public category:Number[],
    public imageUrl:String,
    public reviews: String[],
    public userImg: String,
    public like_count:Number,
    public dateCreated: Date
    ) { }
}
