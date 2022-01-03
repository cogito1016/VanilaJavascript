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

for (let i = 0; i < defaultKeys.length; i++) {
  let defaultKey = defaultKeys[i];
  let defaultValue = defaults[defaultKey];
  if (book[defaultKey] === undefined) {
    book[defaultKey] = defaultValue;
  }
}

console.log(book);
