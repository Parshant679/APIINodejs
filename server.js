const express = require("express");
const app = new express();
const bookRoutes = require("./Routes/bookRoutes");
app.use(express.json());

app.use(bookRoutes);
app.listen(3000, () => {
  console.log("server is runnign at Port 3000");
});
