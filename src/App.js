import { Typography } from "@material-ui/core";
import BookList from "./components/BookList";
import { useState, useEffect } from "react";
import { api } from "./services/api";

function App() {
  // const books = [{ name: "Refactoring" }, { name: "Domain-drive design" }];
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log();
    async function getBooks() {
      try {
        const response = await api.get("/books");
        console.log(response.data);
        setBooks(response.data);
      } catch (error) {
        console.log("ocorreu um erro ao buscar os livros");
      }
    }
    getBooks();
  }, []);

  return (
    <>
      <Typography variant='h2' component='h2' data-test='heading'>
        Dev Books
      </Typography>
      <BookList books={books} />
    </>
  );
}

export default App;
