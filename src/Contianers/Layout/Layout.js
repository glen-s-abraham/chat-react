import React,{Component} from 'react';
import './Layout.css'
import ChatList from '../../Components/ChatList/ChatList';
import Aux from '../../hoc/ReactAux/ReactAux';
class Layout extends Component{
	render()
	{
		return(
			<Aux>

				<div className="Header">
					<input type="text"/>
					<button>Find</button>
				</div>
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
				
			</Aux>	
		);
	}
}

export default Layout;