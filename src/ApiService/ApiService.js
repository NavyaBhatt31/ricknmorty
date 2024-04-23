import axios from 'axios';
export const fetchData = async (pageNumber, status, gender, species) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/character/?page=${pageNumber}&status=${status}&gender=${gender}&species=${species}`);
      console.log('API Response:', response.data);
return response
      // Assuming the earthquake data is stored in the `features` property
      // Call any other function you need to process the data, like plotMarkers()
      // plotMarkers();
    } catch (error) {
      console.error('Error fetching earthquake data:', error);
      
    }
  };