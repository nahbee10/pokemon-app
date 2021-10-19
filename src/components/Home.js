import React from 'react'

var axios = require('axios');

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pokemons: {}
	  	}
	  	
	}
	componentDidMount(){
		var myThis = this;
		axios.get('https://pokeapi.co/api/v2/pokemon')
		.then(function (response) {
			myThis.setState({
				pokemons: response['data']['results']
			})
		})
		.catch(function (error) {
	    	// handle error
	    	console.log(error);
	  	})
	}

	componentDidUpdate(prevProps) {

	}


	render() {
		var dom_content = [];
		for (const [key, value] of Object.entries(this.state.pokemons)) {
			dom_content.push(
	            (
	                <li 
	                    key={key} 
	                    className={`col-xs-12 col-sm-6 col-md-4 block`}
	                >
	                	<div
					        className="pokemon"
					        onClick={() => this.props.history.push(`/${value['name']}`)}
					      >
					        {value['name']}
					      </div>
	                </li>
	            )
	        )
		}

		return (
			<div>
				{dom_content}
			</div>
		);
	}

    
}

export default Home

