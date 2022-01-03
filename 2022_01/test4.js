const defaults = {
  author: "N/A",
  name: "",
  price: 10000,
};

const book = {
  name: "John",
};

const defaultKeys = Object.keys(defaults);
const bookKeys = Object.keys(book);

// for (let i = 0; i < defaultKeys.length; i++) {
//   let defaultKey = defaultKeys[i];
//   let defaultValue = defaults[defaultKey];
//   //   if (book[defaultKey] === undefined) {
//   //     book[defaultKey] = defaultValue;
//   //   }
//   book[defaultKey] = book[defaultKey] || defaultValue;
// }

// Object.assign(book, defaults);
const updatedBook = Object.assign({}, book, defaults);
console.log(book);
console.log(updatedBook);
