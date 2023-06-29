import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client"
const socket = io();

const LandingPage = () => {
    const navigate = useNavigate();
    const [data, setData] = useState("");
    useEffect(() => {
        socket.on("WelcomeEmit", (data) => {
            setData(data.description);//Get the data sent from the server and store it here
        })
    }, [])//every time the page loads connect to socket
    const createRoom = () => {
        //when this function is triggered the path must be changed programitically so use History from react-router-dom
        navigate("/Room")
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-xl text-center mb-4">
                Aayie Apka Swagat hai! Feel free to bitch about peeps here by creating your own room or join an existing
            </p>
            <p>A message from the server</p>
            {data}

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2" onClick={createRoom}>
                Create room
            </button>
            <br />

            <button className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Join Room
            </button>
            <input type="text" name="roomNumber" id="" className=" bg-slate-700 text-white mt-6" />
        </div>
    );
};

export default LandingPage;
