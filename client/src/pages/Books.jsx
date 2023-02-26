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

  const onDelete = async (id) => {
    try{
      await axios.delete("http://localhost:3000/books/"+ id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="container">
      <h1>Yefry Book Shop</h1>
      <div className="books">
        {books.map((book) => (
          <div key={book.id} className="book">
            <div className="cover">{book.cover && <img src={book.cover} alt={book.title} />}</div>
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>${book.price}</span>
            <div className="btn">
            <button onClick={()=>onDelete(book.id)}>Delete</button>
            <button><Link to={`update/${book.id}`}>Update</Link></button>
            </div>
          </div>
        ))}
      </div>
      <Link to='/add'><button className='add'>Add New Book</button></Link>
    </div>
  );
};

export default Books;
