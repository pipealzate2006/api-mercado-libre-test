import app from "./app.js";
const PORT = process.env.PORT || 7020;


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
