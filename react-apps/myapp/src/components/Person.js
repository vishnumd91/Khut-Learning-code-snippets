import React, { useState, useEffect } from "react";

const Person = () => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [nameError, setNameError] = useState("");

  useEffect(() => {
    formValidation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState.username]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const formValidation = () => {
    console.log(formState.username.length);
    if (formState.username.length < 3) {
      setNameError("Name must be greater than 3 letters");
    } else {
      setNameError("");
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    alert("Form Submitted");
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <form onSubmit={handleSubmit}>
        Username
        <input name="username" type="text" onChange={handleChange} />
        <p className="text-danger">{nameError}</p>
        <br />
        Password
        <input name="password" type="password" onChange={handleChange} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Person;
