import Loadable from 'react-loadable';
import Loading from 'components/loading';
import MainLayout  from 'layout/mainLayout';
import SideLayout  from 'layout/sideLayout';
import TopLayout  from 'layout/topLayout';
const Home = Loadable({loader: () => import('../pages/home'),loading: Loading});
const UserList = Loadable({loader: () => import('../pages/user/list'),loading: Loading});
const Page404 = Loadable({loader: () => import('../pages/error/404'),loading: Loading});
const routerConf = [
  {
    path: '/',
    layout: MainLayout,
    component: UserList,
  },
  {
    path: '*',
    layout: MainLayout,
    component: Page404,
  }
];

export default routerConf;
