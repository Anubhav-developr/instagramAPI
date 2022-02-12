import "../styles/Home.module.css";
function MainPage() {
  const centering_style = {
      display : "flex",
      justifyContent : "center",
      flexDirection: "column",
      alignItems : "center",
      width:"100vw",
      height: "100vh",
      fontSize: "2vw",
      color: "#576666"
   
  
  }

  const container_style = {
    backgroundImage: "url('../images/socialMedia.jpg')"
  }
  const capital_letter = {
    fontSize : "2em",
    color: "purple"
  }
  const capital_letterB = {
    fontSize : "1.5em",
    color:"darkblue",
    borderRadius:"0.3em",
    background: "linear-gradient(165deg, rgba(174,136,230,1) 0%, rgba(31,122,161,1) 54%, rgba(32,87,120,1) 100%)",
    padding: "0 0.2em",
    margin: "0 0 0 0.1em"
  }
  const Title_div_margin = {
    marginTop : "3.3em"
  }

  return(
    <div style={container_style}>
      <b>
        <div style={centering_style} className="mid-line"><div style={Title_div_margin}><span style={capital_letter}>T</span>his is starter page for the <span style={capital_letterB}>face</span>book developer api adept..</div>
        <div><a href="/form"><img src="/iconA.png" class="imageClass"></img></a></div> </div>
      </b>
     
    </div>

  )
}

export default MainPage;
