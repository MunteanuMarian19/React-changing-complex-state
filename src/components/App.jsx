import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target; //destructed into 2 constants, "name" & "value" (predefined in html), to access them
    console.log(event.target);
    setContact((previousValue) => {
      //updating only the fields that changed with "value" in certain conditions: if(name === ...)
      //checking for the "name" that triggered the "handleChange"
      //using "value" to populate the field that was changed
      if (name === "fName") {
        //user edits this field
        //from the html "form" => "input" has a property predefined called "name", the same for value
        return {
          fName: value, //the new value from that event
          lName: previousValue.lName,
          //"previousValue.lName" is the same value as before, unchanged
          email: previousValue.email,
        };
      } else if (name === "lName") {
        return {
          fName: previousValue.fName,
          lName: value,
          email: previousValue.email,
        };
      } else if (name === "email") {
        return {
          fName: previousValue.fName,
          lName: previousValue.lName,
          email: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          onChange={handleChange} //calling "handleChange" when a change is detected (built in the "onChange")
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          name="lName"
          onChange={handleChange}
          value={contact.lName} //"value" is the diff btwn controlled and uncontrolled components
          placeholder="Last Name"
        />
        <input
          name="email"
          onChange={handleChange}
          value={contact.email} //"value" is the diff btwn controlled and uncontrolled components
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
