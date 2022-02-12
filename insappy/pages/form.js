import { useState, useRef } from "react";
function form() {
  const capital_letter = {
    fontSize: "2em",
    color: "purple",
  };
  const centering_style = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    fontSize: "2vw",
    color: "#576666",
  };
  const [input, setInput] = useState("");
  function submit(event) {
    event.preventDefault();
    setInput(event.target.value);
    console.log(input);
  }
  function viewData(){
      window.location.href = "/userViewData"
  }

  return (
    <div style={centering_style} className="mid-line">
      <form onSubmit={submit}>
        <div>
          <label style={{fontWeight:'bold'}}>
            <span style={capital_letter}>E</span>nter Username
          </label>
        </div>
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1em 0",
          }}
        >
          <input onChange={submit} className="form-input"></input>
        </span>
        <div style={{ display: "flex", justifyContent: "center" }} className="button-div">
          <button onClick={viewData}>find data</button>
        </div>
      </form>
      {input}
    </div>
  );
}

export default form;
