import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();

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
      await axios.post("http://localhost:3000/books", book);
      navigate('/')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Add New Book</h1>
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
      <button onClick={onClick}>Add Book</button>
    </div>
  );
};

export default Add;
