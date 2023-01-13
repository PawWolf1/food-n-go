import { Food } from "./Food";

export interface SavedListI {
  cart: Food[];
  listName: string;
}

export interface SavedListsI {
  lists: SavedListI[];
}
