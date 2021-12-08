import Android from "../components/Devices/Android"
import Intergrated from "../components/Devices/Intergrated"
import Mobile from "../components/Devices/Mobile"
import Regular from "../components/Devices/Regular"
import StartSelling from "../components/StartSelling"


function Devices() {
    return (
        <>
             <Intergrated />
            <Regular />
            <Mobile />
            <Android/>
            <StartSelling />
        </>
    )
}

export default Devices
