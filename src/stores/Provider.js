import axios from 'axios';
import { useEffect, useState } from 'react';
import Context from '~/stores/Context';

function Provider({ children }) {
    const [mangaList, setMangaList] = useState([]);

    const fetchMangaList = async () => {
        const { data } = await axios.get(
            'https://manga-api-be05.onrender.com/all/page=1',
        );
        setMangaList(data);
    };

    useEffect(() => {
        fetchMangaList();
    }, []);

    return (
        <Context.Provider value={{ mangaList, setMangaList }}>
            {children}
        </Context.Provider>
    );
}

export default Provider;
