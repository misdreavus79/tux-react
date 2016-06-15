import React from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Primary from 'Primary';
import Supporting from 'Supporting';


class Main extends React.Component {
	render(){
		return (
			<main role="main" className="home">
				<Primary locations={this.props.locations} />
				<Supporting />
			</main>
		)
	}
}

let locations = [
	{
		"state": "California",
		"stores": [
			{
				"store_name": "South Coast Plaza Home",
				"city": "Costa Mesa"
			},
			{
				"store_name": "Mission Valley",
				"city": "San Diego"
			},
			{
				"store_name": "Union Square",
				"city": "San Francisco"
			},
			{
				"store_name": "Valley Fair",
				"city": "Santa Clara"
			}
		]
	},
	{
		"state": "Georgia",
		"stores": [
			{
				"store_name": "Lenox Square Mall",
				"city": "Atlanta"
			}
		]
	},
	{
		"state": "Illinois",
		"stores": [
			{
				"store_name": "State Street",
				"city": "Chicago"
			}
		]
	},
	{
		"state": "New York",
		"stores": [
			{
				"store_name": "Roosevelt Field",
				"city": "Garden City"
			},
			{
				"store_name": "Herald Square",
				"city": "New York City"
			}
		]
	},
	{
		"state": "Ohio",
		"stores": [
			{
				"store_name": "Kenwood",
				"city": "Cincinnati"
			}
		]
	},
	{
		"state": "Pennsylvania",
		"stores": [
			{
				"store_name": "King of Prussia",
				"city": "King of Prussia"
			}
		]
	},
	{
		"state": "Virginia",
		"stores": [
			{
				"store_name": "Pentagon",
				"city": "Arlington"
			},
			{
				"store_name": "Tyson's Corner Center",
				"city": "McLean"
			}
		]
	},
	{
		"state": "Washington",
		"stores": [
			{
				"store_name": "Bellevue Square",
				"city": "Bellevue"
			}
		]
	}
];

// $.ajax({
// 	url: 'http://dev.mcomnyapps.net/events/?service=feed_events2&event_id=3&noheader=1',
// 	dataType: "jsonp",
//     jsonpCallback: "cmsCallback",
//     contentType: 'application/json',
// 	success: function(data){
// 		contacts = data.events;
// 		ReactDOM.render(<Main contacts={contacts} stores={stores} />, document.getElementById('bodyContainer'));
// 	},
// 	error: function(){
// 		console.log('error');
// 	}
// });
if(!isMobile && document.getElementById('homeContainer')){
	ReactDOM.render(<Main locations={locations} />, document.getElementById('homeContainer'));
}

