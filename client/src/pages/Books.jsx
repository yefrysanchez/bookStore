import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  return (
    <div>
      <h1>Yefry Book Shop</h1>
      <div className="books">
        {books.map((book) => (
          <div key={book.id} className="book">
            <div>{book.cover && <img src={book.cover} alt={book.title} />}</div>
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>price</span>
          </div>
        ))}
      </div>
      <Link to='/add'><button>Add New Book</button></Link>
    </div>
  );
};

export default Books;
