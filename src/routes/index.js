import routesConfig from '~/config/routes';
import ChapterReading from '~/pages/ChapterReading';
import Home from '~/pages/Home';
import LightNovel from '~/pages/LightNovel';
import Login from '~/pages/Login';
import MangaDetail from '~/pages/MangaDetail';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.search, component: Search },
    { path: routesConfig.lightNovel, component: LightNovel },
    { path: routesConfig.mangaDetail, component: MangaDetail },
    { path: routesConfig.login, component: Login, layout: null },
    { path: routesConfig.chapterReading, component: ChapterReading, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
