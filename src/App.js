import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from './components/Cards/CardDetails';


function App() {
  return (
    <Router>
      <div className="App">

      </div>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/:id" element={<CardDetails />} /> 
      </Routes>
    </Router>
  );
}











const Home=() => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let {info, results} = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(()=>{

    (async function(){
      let data = await  fetch(api).then(res=>res.json());
      updateFetchedData(data);
    })()

  },[api])

  return (
    <div className="App" style={{ backgroundColor: '#272b33', minHeight: '100vh', color: '#fff' }}>     
    <h1 className="text-center Ubuntu "style={{ marginBottom: '30px' }}>Rick & Morty <span className="text-primary">App</span> </h1>      
     <div className="container">
      <div className="row" >
      <Filters
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />        <div className="col-8">
        <div className="row">
          <Cards page="/" results={results} />
        
        </div>
        </div>
      </div>
     </div>
     <Pagination 
     info={info} 
     pageNumber={pageNumber} 
     updatePageNumber={updatePageNumber} 
     />
    </div>
  );
};

export default App;
