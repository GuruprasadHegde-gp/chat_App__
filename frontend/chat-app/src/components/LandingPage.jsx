import { useEffect } from "react";
import io from "socket.io-client"

const LandingPage = () => {

    useEffect(() => {
        alert("Reloaded")
        const socket = io();
        socket.on("connection", () => {
            alert("Connected");
        })


    }, [])//every time the page loads connect to socket
    const createRoom = () => {
        alert("Hey there");
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-xl text-center mb-4">
                Aayie Apka Swagat hai! Feel free to bitch about peeps here by creating your own room or join an existing
            </p>
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
