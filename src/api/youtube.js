import axios from 'axios';

const KEY = "AIzaSyDsQAWrmtgQZuOAE8D9BbrCIX2-CVJ5ij0"

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3' , 
   params: {part: 'snippet', maxResults: 5 , key: KEY} 
});