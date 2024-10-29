import React, { useState } from "react";

function Validation() {
  const [ifiled, setIfiled] = useState({
    name: "",
    email: "",
    pnumber: "",
    password: "",
    confpassword: "",
    radiobut: "",
    checkbox: [],
    upfile: "",
  });

  //   Error
  const [error, setError] = useState({});

  //   Onchange
  const handlechanges = (e) => {
    const { name, value, type } = e.target;

    // This is A Radio Button & Checkbox Validation
    if (type === "radio") {
      setIfiled({ ...ifiled, [name]: value });
    } else if (type === "checkbox") {
      if (e.target.checked) {
        setIfiled({ ...ifiled, checkbox: [...ifiled.checkbox, value] });
      } else {
        setIfiled({
          ...ifiled,
          checkbox: ifiled.checkbox.filter((item) => item !== value),
        });
      }
    } else if (type === "file") {
      setIfiled({ ...ifiled, upfile: e.target.files[0] }); // store file object
    } else {
      setIfiled({ ...ifiled, [name]: value });
    }
  };

  const Validation = () => {
    const validationerror = {};
    // Name
    if (!ifiled.name.trim()) {
      validationerror.name = "Name Is Required";
    } else if (ifiled.name.length < 4) {
      validationerror.name = "Nmae Must be 4 Char";
    }

    // Email
    if (!ifiled.email.trim()) {
      validationerror.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(ifiled.email)) {
      validationerror.email = "Email is not valid";
    }

    // Phone Number
    if (!ifiled.pnumber.trim()) {
      validationerror.pnumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(ifiled.pnumber)) {
      validationerror.pnumber = "Phone number must be exactly 10 digits";
    }

    // Password
    if (!ifiled.password.trim()) {
      validationerror.password = "Password Is Required";
    } else if (ifiled.password.length < 8) {
      validationerror.password = "Password Must Be 8 Digits";
    }

    // Confirm Password
    if (!ifiled.confpassword.trim()) {
      validationerror.confpassword = "Confirm Password Is Required";
    } else if (ifiled.confpassword !== ifiled.password) {
      validationerror.confpassword = "Confirm Password Is Not Mached";
    }

    // Radiobutton
    if (!ifiled.radiobut) {
      validationerror.radiobut = "Please Select a Gender";
    }

    // Checkbox
    if (ifiled.checkbox.length === 0) {
      validationerror.checkbox = "Please select at least one checkbox option.";
    }

    // File Validation
    if (!ifiled.upfile) {
      validationerror.upfile = "File is required";
    } else {
      const allowedExtensions = ["jpg", "png", "pdf"];
      const fileExtension = ifiled.upfile.name.split(".").pop().toLowerCase();
      const maxSize = 2 * 1024 * 1024; // 2 MB in bytes

      if (!allowedExtensions.includes(fileExtension)) {
        validationerror.upfile = "Only .jpg, .png, or .pdf files are allowed";
      } else if (ifiled.upfile.size > maxSize) {
        validationerror.upfile = "File size must not exceed 2 MB";
      }
    }
    setError(validationerror);
  };

  //   Submit Button
  const handlesubmit = (e) => {
    e.preventDefault();
    Validation();
  };

  return (
    <>
      <div>
        <h1>Validaion</h1>
        <form className="border border-black" onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handlechanges}
          />
          {error.name && <span>{error.name}</span>}
          <br />
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handlechanges}
          />
          {error.email && <span>{error.email}</span>}
          <br />
          <input
            type="tel"
            name="pnumber"
            placeholder="phone number"
            onChange={handlechanges}
          />
          {error.pnumber && <span>{error.pnumber}</span>}
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handlechanges}
          />
          {error.password && <span>{error.password}</span>}
          <br />
          <input
            type="password"
            name="confpassword"
            placeholder="confirm password"
            onChange={handlechanges}
          />
          {error.confpassword && <span>{error.confpassword}</span>}
          <br />
          <label>radio button</label>
          <br />
          <input
            type="radio"
            name="radiobut"
            value="male"
            onChange={handlechanges}
          />{" "}
          male
          <br />
          <input
            type="radio"
            name="radiobut"
            value="female"
            onChange={handlechanges}
          />{" "}
          female
          <br />
          {error.radiobut && <span>{error.radiobut}</span>}
          <br />
          <label> Checkbox</label>
          <br />
          Cricket
          <input
            type="checkbox"
            name="checkbox"
            value="Cricket"
            onChange={handlechanges}
          />
          <br />
          Football
          <input
            type="checkbox"
            name="checkbox"
            value="Football"
            onChange={handlechanges}
          />
          <br />
          {error.checkbox && <span>{error.checkbox}</span>}
          <br />
          <label>Upload File</label>
          <br />
          <input type="file" name="file" onChange={handlechanges} />
          {error.upfile && <span>{error.upfile}</span>}
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}

export default Validation;
