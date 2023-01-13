import { Food } from "../../models/Food";

export function sortFoodBy(food: Food[], filtersData: any) {
  const { type, inOrder } = filtersData.sortBy;
  const { filters, onPage } = filtersData;
  const name = filtersData.name;
  function sortBy() {
    let copy = [...food];
    switch (type) {
      case "price":
        return copy.sort((a, b) =>
          !inOrder ? a.price - b.price : b.price - a.price
        );
      case "name":
        return copy.sort(function (a, b) {
          if ((a.name < b.name && inOrder) || (b.name < a.name && !inOrder)) {
            return -1;
          }
          if ((a.name > b.name && inOrder) || (b.name > a.name && !inOrder)) {
            return 1;
          }
          return 0;
        });
      default:
        return copy;
    }
  }
  function filterBy(list: any) {
    let conditions = filters
      .filter(function isBigEnough(item: any) {
        return item.choosen === true && item.blocked === false;
      })
      .map((item: any) => item.cat);
    let blockades = filters
      .filter(function isBigEnough(item: any) {
        return item.choosen === true && item.blocked === true;
      })
      .map((item: any) => item.cat);

    let result = list.filter(function isBigEnough(item: any) {
      return conditions.length !== 0
        ? conditions.every((el: any) => item.category.includes(el)) === true
        : list;
    });
    let block = result.filter(function isBigEnough(item: any) {
      return blockades.length !== 0
        ? blockades.some((el: any) => item.category.includes(el)) === false
        : result;
    });
    return block;
  }

  function checkString(data: any) {
    return data.filter(function isBigEnough(item: any) {
      return item.name.includes(name);
    });
  }

  return checkString(filterBy(sortBy()));
}

// function filterBy(list: any) {
//   let x = list.filter(function isBigEnough(item: any) {
//     let xx = item.category;
//     return xx.includes("Exotic") ? item : null;
//   });
//   return x;
// }

// conditions.some((el: any) => item.category.includes(el))
