import React, {useEffect, useState} from 'react';
import './App.css';
import TableComponent from './components/TableComponent/TableComponent';
import axios from 'axios'
import {Spinner} from 'reactstrap';
import LoaderComponent from './components/LoaderComponent/LoaderComponent';
import Particles from 'react-particles-js';

function App() {
	const [data, setData] = useState(null)

	useEffect(()=>{
		axios.get("https://jsonplaceholder.typicode.com/comments")
	  .then(res=>{
	    setData(res.data)
		}).catch(err=>{
		console.log(err)
	})
	}, [])

	if(!data) {
		return (
		   <LoaderComponent/>
		)
	}

  return (
    <div className="App">
		<TableComponent data={data}/>
    </div>
  );
}

export default App;
