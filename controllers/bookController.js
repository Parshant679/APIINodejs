let books = [
  {
    id: 1,
    title: "titan",
    author: "first",
  },
  {
    id: 2,
    title: "Oneplus",
    author: "second",
  },
  {
    id: 3,
    title: "Oppo",
    author: "third",
  },
];

const homeRoute = (req, res) => {
  res.send(`<h1>Api with node js</h1> <a href='/getBooks'>pleaseClick</a>`);
};

const getBooks = (req, res) => {
  res.json(books);
};

const addBooks = (req, res) => {
  const newBooks = req.body.test;
  console.log(newBooks);
  books = [...books, ...newBooks];

  res.status(200).send("request Accepted");
};

const deleteBooks = (req, res) => {
  let id = parseInt(req.params.id);
  books = books.filter((item) => item.id !== id);
  res.status(200).send("deleted Succssfully");
};

const updateBooks = (req, res) => {
  let id = parseInt(req.params.id);
  console.log(typeof id);
  let newVal = req.body.test;
  books.map((item) => {
    if (item.id === id) {
      console.log(item.id);
      item.title = newVal.title;
      item.author = newVal.author;
    }
    return item;
  });
  res.json({
    Id: id,
    title: newVal.title,
    author: newVal.author,
  });
};

module.exports = {
  homeRoute,
  getBooks,
  addBooks,
  deleteBooks,
  updateBooks,
};
