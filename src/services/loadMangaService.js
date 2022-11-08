import * as request from '~/utils/request';

export const loadManga = async (status = -1, sort = 0, pageNumber = 1) => {
    try {
        const res = await request.getManga('/v1', {
            params: {
                status,
                sort,
                pageNumber,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const loadMangaByCategory = async (category, status = -1, sort = 0, pageNumber = 1) => {
    try {
        const res = await request.getManga(`/v1/${category}`, {
            params: {
                status,
                sort,
                pageNumber,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const load20MangaFavorite = async () => {
    try {
        const res = await request.getManga('/v1/manga-112', {
            params: {
                status: -1,
                sort: 10,
                pageNumber: 1,
                limit: 20,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
