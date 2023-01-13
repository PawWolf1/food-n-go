import { pl } from "./languages/pl";
import { getString } from "./languages/string";

export const FiltersList = [
  { id: 0, name: getString("filters", "nameaz"), type: "name", inOrder: true },
  { id: 1, name: getString("filters", "nameza"), type: "name", inOrder: false },
  {
    id: 2,
    name: getString("filters", "priceUp"),
    type: "price",
    inOrder: true,
  },
  {
    id: 3,
    name: getString("filters", "priceDown"),
    type: "price",
    inOrder: false,
  },
];

export const CategoryFilters = [
  {
    id: 0,
    name: getString("categories", "vegetables"),
    cat: "Vegetables",
    choosen: false,
    blocked: false,
  },
  {
    id: 1,
    name: getString("categories", "fruits"),
    cat: "Fruits",
    choosen: false,
    blocked: false,
  },
  {
    id: 2,
    name: getString("categories", "spices"),
    cat: "Spices",

    choosen: false,
    blocked: false,
  },
  {
    id: 3,
    name: getString("categories", "animals"),
    cat: "Animals",
    choosen: false,
    blocked: false,
  },
  {
    id: 4,
    name: getString("categories", "dishes"),
    cat: "Dishes",

    choosen: false,
    blocked: false,
  },
  {
    id: 5,
    name: getString("categories", "polish"),
    cat: "Polish",

    choosen: false,
    blocked: false,
  },
  {
    id: 6,
    name: getString("categories", "lactose"),
    cat: "Lactose",

    choosen: false,
    blocked: false,
  },
  {
    id: 7,
    name: getString("categories", "sugar"),
    cat: "Sugar",

    choosen: false,
    blocked: false,
  },
  {
    id: 8,
    name: getString("categories", "drink"),
    cat: "Drink",

    choosen: false,
    blocked: false,
  },
  {
    id: 9,
    name: getString("categories", "herbs"),
    cat: "Herbs",

    choosen: false,
    blocked: false,
  },
  {
    id: 10,
    name: getString("categories", "exotic"),
    cat: "Exotic",

    choosen: false,
    blocked: false,
  },
];
