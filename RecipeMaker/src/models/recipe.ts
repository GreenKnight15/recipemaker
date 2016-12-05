export class Recipe {
  constructor(
    public Id: any,
    public title: string,
    public userId: any, 
    public description: string,
    public reviews: Number[], 
    public dateCreated: Date
    ) { }
}
