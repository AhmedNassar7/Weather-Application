import axios from 'axios';

const API_KEY='7fbef05ed133382d807cceab7cdf6bf9';
const API_URL='https://api.openweathermap.org/data/2.5/weather';

export const getWeather= async(city,country)=>{
try { 
   let response= await axios.get(`${API_URL}?q=${city}&${country}&appid=${API_KEY}&units=metric`);
   return response.data;
} catch (error) {
   return -1;
}
}

export const getAllCountries = async () => {
    try {
      const response = await axios.get('https://countriesnow.space/api/v0.1/countries');
      console.log('nassar', response);
      return response.data;
    } catch (error) {
      console.error('Error fetching countries:', error);
      throw error; 
    }
  }


