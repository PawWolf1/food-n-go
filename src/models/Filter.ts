export interface Filter {
  id: number;
  name: string;
  type: string;
  inOrder: boolean;
}

export interface FilterI {
  id: number;
  name: string;
  type: string;
  inOrder: boolean;
}

export interface FilterCatI {
  id: number;
  name: string;
  choosen: boolean;
  blocked: boolean;
}
