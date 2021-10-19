import React, {useState, useEffect} from 'react';

var axios = require('axios');

function PokemonDetail(props) {

	let [pokemon, setPokemon] = useState({});
	let [name, setName] = useState("");
	let [id, setId] = useState(0);
	let [weight, setWeight] = useState(0);
	let [height, setHeight] = useState(0);
	let [imgURL, setImgURL] = useState("");
	let [captureButtonMsg, setCaptureButtonMsg] = useState("capture this");

	const getData = async () =>{
		await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.pokemonName}`)
		.then(function (response) {
			var data = response['data'];
			setPokemon(data);
			setId(data['id']);
			setName(data['name']);
			setWeight(data['weight']);
			setHeight(data['height']);
			var sprites = data['sprites'];
			var imgURL = "";
			if(sprites){
				imgURL = sprites['front_default'];
			}

			setImgURL(imgURL);
			
		})
		.catch(function (error) {
	    	// handle error
	    	console.log(error);
	  	});

	}
	
	useEffect(() => {
		getData();
		
	  },[])

	useEffect(() => {
		capture();
	  },[name])


	const capture = () => {
		
		var uniqCapture = name + "_captured";
		if (localStorage.getItem(uniqCapture)){
	      setCaptureButtonMsg("captured");  
	    } else {
	      localStorage.setItem(uniqCapture, "true");
	      setCaptureButtonMsg("capture this");
	    }
	}
	return (
		<div>
		<div>name : {name}</div>
		<div>id : {id}</div>
		<div>height : {height}</div>
		<div>weight : {weight}</div>
		<img src={imgURL} className="pokemonImg" />
		<div onClick={() => capture()}>
		{captureButtonMsg}
		</div>
		</div>
	);


    
}

export default PokemonDetail

