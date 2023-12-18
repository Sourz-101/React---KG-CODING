import { useEffect } from "react";
import { useState } from "react";

let ClockTime = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000 )


        return () => {
            clearInterval(intervalId);
            console.log("Cancelled the interval")
        }
    }, [])

    return(
        <p className="lead">This is the current date and time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    );
}

export default ClockTime;