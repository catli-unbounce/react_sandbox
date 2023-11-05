export default function listFormat(items, options) {
  let itemsCopy = items.filter((item) => item.length > 0);
  if (options && options.sorted) {
    itemsCopy = items.sort;
  }
  if (options && options.unique) {
    itemsCopy = [...new Set(itemsCopy)];
  }

  const originalLength = itemsCopy.length;
  if (options && options.length) {
    itemsCopy = itemsCopy.splice(0, options.length + 1);
  }

  //listFormat(["Bob", "Ben", "Tim", "Jane", "John"], { length: 3 });

  let returnStr = "";

  if (itemsCopy.length === 2) {
    returnStr = `${itemsCopy[0]} and ${itemsCopy[1]}`;
  } else {
    for (let index = 0; index < itemsCopy.length - 2; index++) {
      returnStr += `${itemsCopy[index]}, `;
    }

    if (options && options.length) {
      let remainder = originalLength - options.length;

      returnStr += `${itemsCopy[itemsCopy.length - 2]} and ${remainder} others`;
    } else {
      // returnStr += `${itemsCopy[itemsCopy.length - 2]} and ${
      //   itemsCopy[itemsCopy.length - 1]
      // }`;
    }
  }
  // itemsCopy.forEach((item) => {
  //   return (returnStr += `${item}, `);
  // });
  // if (options && options.length) {
  //   let remainder = items.length - itemsCopy.length;
  //   if (remainder === 1) {
  //     returnStr += " and 1 other";
  //   } else {
  //     returnStr += ` and ${remainder} others`;
  //   }
  // }
  console.log("String: ", returnStr);
  return returnStr;
}
