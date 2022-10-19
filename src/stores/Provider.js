import axios from 'axios';
import { useEffect, useState } from 'react';
import Context from '~/stores/Context';

function Provider({ children }) {
    const [mangaList, setMangaList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const loadMoreManga = () => {
        axios
            .get(`https://manga-api-4cze.onrender.com/v1?page=${pageNumber}`)
            .then(({ data }) => {
                setMangaList((prevMangaList) => [...prevMangaList, ...data]);
            });
    };

    const handleScroll = (e) => {
        console.log('scroll');
        if (
            window.innerHeight + e.target.documentElement.scrollTop + 1 >=
            e.target.documentElement.scrollHeight
        ) {
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
    };

    useEffect(() => {
        loadMoreManga();
        window.addEventListener('scroll', handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber]);

    return (
        <Context.Provider value={{ mangaList, setMangaList }}>
            {children}
        </Context.Provider>
    );
}

export default Provider;
