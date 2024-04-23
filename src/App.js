import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from './components/Cards/CardDetails';
import { fetchData } from './ApiService/ApiService';

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
  let [fetchedData, updateFetchedData] = useState({});
  let [info, setInfo] = useState({});
  let [ results, setResults] = useState([]);// let info 
// let results
  // let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&status=${status}&gender=${gender}&species=${species}`;
let api= ``
useEffect(() => {
  applyFiltersAndPagination(pageNumber, status, gender, species);
}, [pageNumber, status, gender, species]);

const applyFiltersAndPagination = async (pageNumber, status, gender, species) => {
  try {
    const data = await fetchData(pageNumber, status, gender, species);
    console.log('API Response:', data);
    setInfo(data.data.info);
    setResults(data.data.results);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

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
