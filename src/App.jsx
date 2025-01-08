import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

const accessKay = 'HCitx9vUVehlHjE_eSe3KXCWcxgRLuPBQiV6Qy5BpQE';

const App = () => {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {

    const getPhotodDat = async () => {
      try {
        const respose = await axios.get('https://api.unsplash.com/');
        setPhotos(respose.data.url);
      } catch (errpr) {
        console.log(error);
      }
    };

    getPhotodDat();

  }, []);




  return (
    <>

      <h1>Photo</h1>

    </>
  )
}

export default App




