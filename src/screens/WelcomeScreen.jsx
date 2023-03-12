import JoinUsButton from "../components/JoinUsButton.jsx"

const WelcomeScreen = (props) => {
  
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }} > 
      <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
        <p style={{
          fontSize: 45,
        }} >
          The one and only DetectiveDAO
        </p>
        <JoinUsButton onClick={props.connectWithMetamask}>
          {"Join Us!"}
         </JoinUsButton>
     </div>
    </div>
  )
}

export default WelcomeScreen;