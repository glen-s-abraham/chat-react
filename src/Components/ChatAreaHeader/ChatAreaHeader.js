import React from 'react';
import './ChatAreaHeader.css';

const chatAreaHeader=(props)=>{
	return(<div className="ChatHeader">
				<div className="ChatHeaderAvatar">
					<img src={process.env.PUBLIC_URL + '/avatar.png'}/>
				</div>
				<div className="ChatHeaderName">
					<span>{props.name}</span>
					<span className="ChatHeaderStatus">{props.status}</span>
				</div>
			</div>);
}
export default chatAreaHeader;