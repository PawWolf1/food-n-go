export interface Food {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  amount: number;
  aviable: boolean;
  unit: string;
  desc: string;
  category?: string[];
  // alergens: string;
  // vegan: boolean;
  // vegetarian: boolean;
}
