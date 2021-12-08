import Accept from "../components/Home/Accept"
import GetPaid from "../components/Home/GetPaid"
import GettingPaid from "../components/Home/GettingPaid"
import SaveTime from "../components/Home/SaveTime"
import Simple from "../components/Home/Simple"
import StartSelling from "../components/Home/StartSelling"




function Home() {
    return (
      <>
        
        <Simple />
        <GetPaid />
        <Accept />
        <SaveTime />
        <GettingPaid />
        <StartSelling />
      </>
    );
}

export default Home
