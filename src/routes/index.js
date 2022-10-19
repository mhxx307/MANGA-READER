import ChapterReading from '~/pages/ChapterReading';
import Home from '~/pages/Home';
import LightNovel from '~/pages/LightNovel';
import Login from '~/pages/Login';
import MangaDetail from '~/pages/MangaDetail';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/search', component: Search },
    { path: '/lightNovel', component: LightNovel },
    { path: '/mangaDetail', component: MangaDetail },
    { path: '/login', component: Login, layout: null },
    { path: '/chapterReading', component: ChapterReading, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
