function searchItem(items, itemToSearch) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === itemToSearch) {
      console.log(`Element Found at index ${i}`);
    }
    break;
  }
}

let items = [34, 56, 23, 78, 57, 12, 39];
let value = 78;

searchItem(items, value);
