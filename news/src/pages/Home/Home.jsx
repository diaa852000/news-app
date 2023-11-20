import React, { useEffect, useState } from 'react'
import _http, {apiGET} from '../../lib/api'
import { END_POINTS } from '../../utils/apiConstants'

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() =>{
    const fetchData = async () => {
      let data = await apiGET(END_POINTS.tesla);    
      setData(data);
      console.log(data)
  };

  fetchData();
  },[])
  return (
    <div>
      {data && data.articles && (
        data.articles.map((article, index) => <p key={index}>{article.author}</p>)
      )}
    </div>
  )
}

export default Home