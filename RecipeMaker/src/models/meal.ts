export const Meals: Meal[] = [
  { Id: 0, name: 'Breakfast' },
  { Id: 1, name: 'Brunch' },
  { Id: 2, name: 'Lunch' },
  { Id: 3, name: 'Dinner' }
];

export class Meal {
  constructor(
    public Id: number,
    public name: string,
    
    ) { }
}