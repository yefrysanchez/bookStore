import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const onChange = (e) => {
    setBook((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onClick = async () => {
    try {
      await axios.put("http://localhost:3000/books/" + bookId, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Update Book</h1>
      <input onChange={onChange} type="text" placeholder="Title" name="title" />
      <input
        onChange={onChange}
        type="text"
        placeholder="Description"
        name="desc"
      />
      <input
        onChange={onChange}
        type="number"
        placeholder="Price"
        name="price"
      />
      <input onChange={onChange} type="text" placeholder="Cover" name="cover" />
      <button className="add" onClick={onClick}>
        Update Book
      </button>
    </div>
  );
};

export default Update;
