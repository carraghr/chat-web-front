import React from 'react'
import Message from './Message'

const DUMMY_DATA =[
    {
        senderId: 'perborgen',
        text: 'Hey, how is it going?'
    },
    {
        senderId: 'janedoe',
        text: 'Great! How about you?'
    },
    {
        senderId: 'perborgen',
        text: 'Good to hear! I am great as well'
    }
]

class MessageList extends React.Component{
	render(){
		return(
			<div className="message-list">
			
				{DUMMY_DATA.map((message,index) =>{
					//this.props.messages.map instead of DUMMY_DATA.map when api is complete
					return(
						<Message key={index} username={message.senderId} text={message.text}/>
					)
				})}
			</div>
		);
	}
}

export default MessageList