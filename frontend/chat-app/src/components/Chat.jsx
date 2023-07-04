import React, { useState } from 'react'


const Chat = ({ socket, username, roomId }) => {
    const sendMessage = async () => {
        if (username !== " ") {
            const messageData = {
                room: roomId,
                author: username,
                data: message,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()

            }

            await socket.emit("send_message", messageData);
        }

    }
    const [message, setMessage] = useState("")
    return (
        <div>
            <div className='chat-header'></div>
            <p>Live Chat</p>

            <div className=' chat-body'></div>
            <div className=' chat-footer'>
                <input type="text" placeholder='Send A Message...' onChange={(event) => {
                    setMessage(event.target.value);
                }} />
                <button onClick={sendMessage}>&#8594;</button>
            </div>
        </div>
    )
}

export default Chat;