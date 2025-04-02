import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import Contador from './Contador.jsx';

//create your first component
const Home = (props) => {
	return (
		/*  <div>
			<div className="text-center">

				<h1 className="text-center mt-5">Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button... bootstrap is working...
				</a>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
					love!
				</p>

			</div> */

			<div className="row" >
			<div className="d-flex justify-content-center text-center p-4">
					<Contador value={<i className="fa-solid fa-clock"></i>} />
					<Contador value={Math.floor(props.counter / 100000) % 10} />
					<Contador value={Math.floor(props.counter / 10000) % 10} />
					<Contador value={Math.floor(props.counter / 1000) % 10} />
					<Contador value={Math.floor(props.counter / 100) % 10} />
					<Contador value={Math.floor(props.counter / 10) % 10} />
					<Contador value={props.counter % 10} />


				</div>
			</div>
		// </div>


	);
};

export default Home;