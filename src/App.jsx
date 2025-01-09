import { useEffect, useState } from 'react';
import './App.css'
import { fetchPhotos } from './Services/api';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import SearchBar from './components/SearchBar/SearchBar'


const App = () => {

  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {

    if (!query) return;


    const getPhotodData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchPhotos(query, page);
        setPhotos(prev => [...prev, ...results]);
        console.log(results);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPhotodData();

  }, [page, query]);


  const handleChangePage = () => {
    setPage(prev => prev + 1);
  }

  const handleChangeQuery = (newQuery) => {
    if (newQuery === query) {
      return;
    }
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
  }



  return (
    <>

      <h1>Photo</h1>
      <SearchBar onSubmit={handleChangeQuery} />
      {photos.length > 0 && <ImageGallery photos={photos} />}
      <LoadMoreBtn onChangePage={handleChangePage} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}

    </>
  )
}

export default App






