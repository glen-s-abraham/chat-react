import React from 'react'
import './ChatList.css'
const chatList=(props)=>{
	return(
		<div className="ChatList">
			<div className="Avatar">
				<img src={process.env.PUBLIC_URL + '/avatar.png'}/>
			</div>
			<div className="Name">
				{props.name}
			</div>
		</div>	
		);
}
export default chatList;