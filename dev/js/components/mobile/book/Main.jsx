import React from "react";
import ReactDOM from 'react-dom';
import MobileNavLoader from 'MobileNavLoader';
import GoodBye from 'GoodBye';
import Ads from 'Ads';


class Main extends React.Component {
	constructor(){
		super();
		if(isProduction){
			this.state = {
				url: 'https://macysappt.herokuapp.com/book/?serviceCode=BRIDAL_REGISTRY',
				el: '',
				loader: new MobileNavLoader()
			}
		}else{
			this.state = {
				url: 'https://macysappt-stage.herokuapp.com/book/?serviceCode=BRIDAL_REGISTRY',
				el: '',
				loader: new MobileNavLoader()
			}
		}
	}
	componentWillMount(){
		window.MobileNavConfig = {
			footerContainer:"#ImpSdkFooterContainer",
			footer:true
		}
		this.state.loader.init();
	}
	componentDidMount(){
		this.setState({
			el: document.getElementById('formFrame')
		});
		window.addEventListener('message', (e) => {
			this.handleMessage(e, this.state.el);
		}, false);
	}
	handleMessage(evt, el){
		var obj = JSON.parse(evt.data),
			msgType = obj.msgType;
		if(msgType === 'MBA_READY') {	
			el.contentWindow.postMessage('{ "msgType": "MBA_PARENTPAGE" }', '*');
		} else if(msgType === 'MBA_APPOINTMENT_BOOKED' || true) {
			let cal = obj.data;
			window.location = '../confirm';
		}
	}
	render(){
		return (
			<main role="main" className="book">
				<img src="https://storage.googleapis.com/imp-projects/rabt/assets/images/main-img-mobile.jpg" alt="Registry Appointment Booking" />
				<iframe src={this.state.url} width="100%" height="950" scrolling="yes" frameborder="0" id="formFrame"></iframe>
			</main>
		)
	}
}

if(isMobile && document.getElementById('bookContainer')){
	ReactDOM.render(<Main />, document.getElementById('bookContainer'));
}
