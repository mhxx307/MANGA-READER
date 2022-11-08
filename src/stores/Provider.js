import { useEffect, useState } from 'react';
import Context from '~/stores/Context';
import * as loadMangaService from '~/services/loadMangaService';

function Provider({ children }) {
    const [mangaList, setMangaList] = useState([]);
    const [popularMangaList, setPopularMangaList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [categoryName, setCategoryName] = useState('Thể loại');
    const [statusName, setStatusName] = useState('Tình trạng');
    const [sortName, setSortName] = useState('Ngày cập nhật');
    const [isLoading, setIsLoading] = useState(false);

    let category = null;
    let status = -1;
    let sort = 0;

    switch (categoryName) {
        case 'Action':
            category = 'action-95';
            break;
        case 'Adult':
            category = 'truong-thanh';
            break;
        case 'Adventure':
            category = 'adventure';
            break;
        case 'Anime':
            category = 'anime';
            break;
        case 'Chuyển sinh':
            category = 'chuyen-sinh-2130';
            break;
        case 'Comedy':
            category = 'comedy-99';
            break;
        case 'Comic':
            category = 'comic';
            break;
        case 'Cooking':
            category = 'cooking';
            break;
        case 'Cổ đại':
            category = 'co-dai-207';
            break;
        case 'Doujinshi':
            category = 'doujinshi';
            break;
        case 'Drama':
            category = 'drama-103';
            break;
        case 'Ecchi':
            category = 'ecchi';
            break;
        case 'Fantasy':
            category = 'fantasy-105';
            break;
        case 'Gender Bender':
            category = 'gender-bender';
            break;
        case 'Harem':
            category = 'harem-107';
            break;
        case 'Historical':
            category = 'historical';
            break;
        case 'Horror':
            category = 'horror';
            break;
        case 'Josei':
            category = 'josei';
            break;
        case 'Live Action':
            category = 'live-action';
            break;
        case 'Manga':
            category = 'manga-112';
            break;
        case 'Manhua':
            category = 'manhua';
            break;
        case 'Manhwa':
            category = 'manhwa-11400';
            break;
        case 'Martial Arts':
            category = 'martial-arts';
            break;
        case 'Mature':
            category = 'mature';
            break;
        case 'Mecha':
            category = 'mecha-117';
            break;
        case 'Mystery':
            category = 'mystery';
            break;
        case 'One shot':
            category = 'one-shot';
            break;
        case 'Psychological':
            category = 'psychological';
            break;
        case 'Romance':
            category = 'romance-121';
            break;
        case 'School Life':
            category = 'school-life';
            break;
        case 'Sci-fi':
            category = 'sci-fi';
            break;
        case 'Seinen':
            category = 'seinen';
            break;
        case 'Shoujo':
            category = 'shoujo';
            break;
        case 'Shoujo Ai':
            category = 'shoujo-ai-126';
            break;
        case 'Shounen':
            category = 'shounen-127';
            break;
        case 'Shounen Ai':
            category = 'shounen-ai';
            break;
        case 'Slice of Life':
            category = 'slice-of-life';
            break;
        case 'Smut':
            category = 'smut';
            break;
        case 'Soft Yuri':
            category = 'soft-yuri';
            break;
        case 'Sports':
            category = 'sports';
            break;
        case 'Supernatural':
            category = 'supernatural';
            break;
        case 'Thiếu nhi':
            category = 'thieu-nhi';
            break;
        case 'Tragedy':
            category = 'tragedy-136';
            break;
        case 'Trinh Thám':
            category = 'trinh-tham';
            break;
        case 'Truyện scan':
            category = 'truyen-scan';
            break;
        case 'Truyện Màu':
            category = 'truyen-mau';
            break;
        case 'Webtoon':
            category = 'webtoon';
            break;
        case 'Xuyên Không':
            category = 'xuyen-khong-205';
            break;
        default:
            category = null;
            break;
    }

    switch (statusName) {
        case 'Tất cả':
            status = -1;
            break;
        case 'Đang tiến hành':
            status = 1;
            break;
        case 'Đã hoàn thành':
            status = 2;
            break;
        default:
            status = -1;
            break;
    }

    switch (sortName) {
        case 'Ngày cập nhật':
            sort = 0;
            break;
        case 'Truyện mới':
            sort = 15;
            break;
        case 'Top all':
            sort = 10;
            break;
        case 'Top tháng':
            sort = 11;
            break;
        case 'Top tuần':
            sort = 12;
            break;
        case 'Top ngày':
            sort = 13;
            break;
        case 'Theo dõi':
            sort = 20;
            break;
        case 'Số chapter':
            sort = 30;
            break;
        default:
            sort = 0;
            break;
    }

    const load20MangaFavorite = async () => {
        setIsLoading(true);

        const data = await loadMangaService.load20MangaFavorite();
        setPopularMangaList((prevMangaList) => [...prevMangaList, ...data]);

        setIsLoading(false);
    };

    const loadMoreManga = async () => {
        setIsLoading(true);

        const data = await loadMangaService.loadManga(status, sort, pageNumber);
        setMangaList((prevMangaList) => [...prevMangaList, ...data]);

        setIsLoading(false);
    };

    const loadMoreMangaByCategory = async () => {
        setIsLoading(true);

        const data = await loadMangaService.loadMangaByCategory(status, sort, pageNumber, category);
        setMangaList((prevMangaList) => [...prevMangaList, ...data]);

        setIsLoading(false);
    };

    const handleScroll = (e) => {
        if (
            window.innerHeight + e.target.documentElement.scrollTop + 1 >=
            e.target.documentElement.scrollHeight
        ) {
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
    };

    useEffect(() => {
        if (category) {
            console.log('category');
            loadMoreMangaByCategory();
        } else {
            console.log('load more manga');
            loadMoreManga();
        }
        window.addEventListener('scroll', handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryName, pageNumber, statusName, sortName]);

    useEffect(() => {
        load20MangaFavorite();
    }, []);

    return (
        <Context.Provider
            value={{
                mangaList,
                setMangaList,
                categoryName,
                setCategoryName,
                statusName,
                setStatusName,
                sortName,
                setSortName,
                isLoading,
                setIsLoading,
                popularMangaList,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default Provider;
