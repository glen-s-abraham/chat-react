import React,{Component} from 'react';
import './Layout.css'
import ChatList from '../../Components/ChatList/ChatList';
import SideBarHeader from '../../Components/SideBarHeader/SideBarHeader';
import ChatAreaHeader from '../../Components/ChatAreaHeader/ChatAreaHeader';
import Aux from '../../hoc/ReactAux/ReactAux';
class Layout extends Component{
	render()
	{
		return(
			<Aux>

			<SideBarHeader/>			
				<div className="SidePanel">
					<ChatList id='1' name='Chris Evans' />
					<ChatList id='2' name='Mathew Mcganahay' />
					<ChatList id='2' name='Mathew Mcganahay' />
					<ChatList id='2' name='Mathew Mcganahay' />
					<ChatList id='2' name='Mathew Mcganahay' />
					<ChatList id='2' name='Mathew Mcganahay' />
					<ChatList id='2' name='Mathew Mcganahay' />
					<ChatList id='2' name='Mathew Mcganahay' />
					<ChatList id='2' name='Mathew Mcganahay' />
					<ChatList id='2' name='Mathew Mcganahay' />
					<ChatList id='2' name='Mathew Mcganahay' />
					<ChatList id='2' name='Mathew Mcganahay' />
					<ChatList id='2' name='Mathew Mcganahay' />
				</div>
			
			<div className="ChatArea">
				<ChatAreaHeader name="Chirs evans" status="Online"/>
			</div>
			
			</Aux>	
		);
	}
}

export default Layout;