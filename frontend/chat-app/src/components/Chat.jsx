import React, { useEffect, useState } from 'react'
import ScrollToBottom from "react-scroll-to-bottom";


const Chat = ({ socket, username, roomId }) => {
    const [message, setMessage] = useState("")
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (username !== " ") {
            const messageData = {
                room: roomId,
                author: username,
                data: message,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            }

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
        }

    }
    useEffect(() => {
        socket.on("recive_message", (data) => {

            setMessageList((list) => [...list, data]);
        })
    }, [socket])

    return (
        <div className='chat-window'>
            <div className='chat-header'>
                <p>Live Chat</p>
            </div>
            <div className='chat-body'>
                <ScrollToBottom className='message-container'>

                    {
                        messageList.map((messagecontent) => {

                            return (
                                // eslint-disable-next-line react/jsx-key
                                <div className='message' id={username === messagecontent.author ? "you" : "other"}>
                                    <div>
                                        <div className='message-content'>
                                            <p>
                                                {messagecontent.data}
                                            </p>
                                        </div>
                                    </div>
                                    <div className=' message-meta'>
                                        <p id="time">{messagecontent.time}</p>
                                        <p id="author">{messagecontent.author}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ScrollToBottom>
            </div>
            <div className='chat-footer'>
                <input type="text" placeholder='Send A Message...' onChange={(event) => {
                    setMessage(event.target.value);
                }} />
                <button onClick={sendMessage}>&#8594;</button>
            </div>
        </div>
    )
}

export default Chat;