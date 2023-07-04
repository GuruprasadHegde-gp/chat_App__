import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client"
import Chat from "./Chat";
const socket = io();

const LandingPage = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [roomId, setRoomID] = useState(" ");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {


        if (userName !== " " && roomId !== " ") {
            setShowChat(true);
            socket.emit("Join_room", (roomId))

        }

    }

    return (
        <div className="App">
            {!showChat ? (
                < div className="flex flex-col items-center">
                    <h3 className="text-2xl mb-4">
                        Join A Chat
                    </h3>
                    <input type="text" placeholder="Name" className="w-52 h-10 m-2 border-2 border-green-600 rounded-md px-2 text-base" onChange={(event) => {
                        setUserName(event.target.value);
                    }} />
                    <input type="text" name="roomNumber" placeholder="Room ID." className="w-52 h-10 m-2 border-2 border-green-600 rounded-md px-2 text-base" onChange={(event) => {
                        setRoomID(event.target.value);
                    }} />

                    <button className=" w-56 h-14 m-2 rounded-md px-2 text-base bg-green-600 text-white cursor-pointer" onClick={joinRoom}>
                        Join Room
                    </button>
                </div>
            ) :
                (
                    <Chat socket={socket} username={userName} roomId={roomId} />
                )
            }
        </div >
    );
};

export default LandingPage;
