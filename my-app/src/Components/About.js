import React from "react";
import { useState } from "react";

export default function About() {
  let padding = {
    padding: "10px",
  };


  let width = {
    paddingLeft: "25%",
    paddingRight: "25%",
  };

  const [ myStyle, setMyStyle ] = useState ({
    padding: "10px",
    color: "black",
    backgroundColor: "white",
    margin: '20px'
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode")

  const toggleStyle = () => {
    if(myStyle.color === 'white')
    {
        setMyStyle({
            padding: "10px",
            color: 'black',
            backgroundColor: 'white',
            margin: '20px'
        })
        setBtnText("Enable Dark Mode")
    }
    else{
        setMyStyle({
            padding: "10px",
            color: 'white',
            backgroundColor: 'black',
            margin: '20px'
        })
        setBtnText("Enable Light Mode")
    }
  }

  return (
    <>
      <div className="container-fluid text-center" style={myStyle}>
        
          <h5 style={padding}>
            <b>Responsive Bootstrap About Us Page Template</b>
          </h5>
          <h1 style={padding}>MEET OUR TEAM</h1>
          <h6 style={width}>
            We are all very different. We were born in different cities, at
            different times, we love different music, food, movies. But we have
            something that unites us all. It is our company. We are its heart.
            We are not just a team, we are a family.
          </h6>
        

        <button className="btn btn-primary align-center my-3" style={myStyle} onClick={toggleStyle}>{btnText}</button>
      </div>
    </>
  );
}
