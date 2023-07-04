import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client"
import Chat from "./Chat";
const socket = io();

const LandingPage = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [roomId, setRoomID] = useState(" ");
    const [chatCilcked, setChatClicked] = useState(false);

    const joinRoom = () => {
        //when this function is triggered the path must be changed programitically so use History from react-router-dom
        if (userName !== " " && roomId !== " ")
            socket.emit("Join_room", (roomId))

    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-xl text-center mb-4">
                Aayie Apka Swagat hai! Feel free to bitch about peeps here by creating your own room or join an existing
            </p>
            <input type="text" placeholder="Name" className=" bg-slate-700 text-white mb-6" onChange={(event) => {
                setUserName(event.target.value);
            }} />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
                Create room
            </button>
            <br />

            <button className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={joinRoom}>
                Join Room
            </button>
            <input type="text" name="roomNumber" id="" className=" bg-slate-700 text-white mt-6" onChange={(event) => {
                setRoomID(event.target.value);
            }} />
           {chatCilcked && <Chat socket={socket} username={userName} roomId={roomId} />}
        </div>
    );
};

export default LandingPage;
