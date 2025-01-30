import React, { useState, useEffect } from 'react';
import SearchForm from './components/searchForm';
import ImageCard from './components/ImageCard';

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

function App() {
  const [keyword, setKeyword] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (keyword) {
      fetchImages();
    }
  }, [keyword, page]);

  const fetchImages = async () => {
    setLoading(true);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    setImages((prevImages) => (page === 1 ? data.results : [...prevImages, ...data.results]));
    setLoading(false);
  };

  const handleSearchSubmit = (newKeyword) => {
    setKeyword(newKeyword);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-50">
      <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
        <h1 className="text-center font-bold text-3xl md:text-4xl">Search photos & illustrations</h1>
        <SearchForm onSubmit={handleSearchSubmit} />
        <div
          id="search-result"
          className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"
        >
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
        {images.length > 0 && !loading && (
          <button
            id="show-more-btn"
            className="flex md:mx-auto py-2 px-8 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black lg:mx-auto"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}
        {loading && <p className="text-center text-gray-500">Loading...</p>}
      </div>
    </div>
  );
}

export default App;
