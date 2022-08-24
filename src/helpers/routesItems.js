import React from 'react';
import UsersContainer from '../pages/Users/Users';
import HomeContainer from '../pages/Home/Home';
import RestaurantsContainer from '../pages/Restaurants/Restaurants';
import PremiumUsersContainer from '../pages/PremiumUsers/PremiumUsers';
import ShopContainer from '../pages/Shop/Shop';
import CuisineContainer from '../pages/Cuisine/Cuisine';
import PostContainer from '../pages/Post/Post';
import LearnContainer from './../pages/Learn/Learn';
import { CuisineIcon, HomeIcon, LearnIcon, PostIcon, RestaurantsIcon, ShopIcon, UserIcon } from './sidebarIcons';
import CreateUserComponent from './../pages/Users/CreateUser';
import EditUserComponent from './../pages/Users/EditUser';
import MoviesContainer from './../pages/Learn/Movies';
import RecipesContainer from '../pages/Learn/Recipes';
import DieticianContainer from './../pages/Learn/Dietician';
import BooksContainer from './../pages/Learn/Books';
import QuickStartContainer from './../pages/Learn/QuickStart';

const routeItems = [
  {
    key: 'home',
    title: 'Homepage',
    path: '/',
    isMenuItem: true,
    icon: <HomeIcon />,
    component: <HomeContainer />
  },
  {
    key: 'users',
    title: 'Users',
    path: '/users',
    isMenuItem: true,
    icon: <UserIcon />,
    component: <UsersContainer />
  },
  {
    key: 'premiumUsers',
    title: 'Premium users',
    path: '/premium-users',
    isMenuItem: true,
    icon: <UserIcon />,
    component: <PremiumUsersContainer />
  },    
  {
    key: 'restaurants',
    title: 'Restaurants',
    path: '/restaurants',
    isMenuItem: true,
    icon: <RestaurantsIcon />,
    component: <RestaurantsContainer />
  },
  {
    key: 'learn',
    title: 'Learn',
    path: '/learn',
    isMenuItem: true,
    icon: <LearnIcon />,
    component: <LearnContainer />,
    children: [
      {
        key: 'start',
        title: 'Quick Start',
        path: '/learn/start',
        component: <QuickStartContainer />,
      },
      {
        key: 'recipes',
        title: 'Recipes',
        path: '/learn/recipes',
        component: <RecipesContainer />,
      },
      {
        key: 'books',
        title: 'Books',
        path: '/learn/books',
        component: <BooksContainer />,
      },
      {
        key: 'movies',
        title: 'Movies',
        path: '/learn/movies',
        component: <MoviesContainer />,
      },
      {
        key: 'dietician',
        title: 'Dietician',
        path: '/learn/dietician',
        component: <DieticianContainer />,
      }
    ]
  },
  {
    key: 'shop',
    title: 'Shop',
    path: '/shop',
    isMenuItem: true,
    icon: <ShopIcon />,
    component: <ShopContainer />
  },
  {
    key: 'cuisine',
    title: 'Cuisine',
    path: '/cuisine',
    isMenuItem: true,
    icon: <CuisineIcon />,
    component: <CuisineContainer />
  },
  {
    key: 'post',
    title: 'Post',
    path: '/post',
    isMenuItem: true,
    icon: <PostIcon />,
    component: <PostContainer />
  },
  {
    key: 'createUser',
    title: 'Create User',
    path: 'user/create',
    isMenuItem: false,
    icon: <PostIcon />,
    component: <CreateUserComponent />
  },
  {
    key: 'editUser',
    title: 'Edit User',
    path: 'user/edit/:id',
    isMenuItem: false,
    icon: <PostIcon />,
    component: <EditUserComponent />
  },
];

export default routeItems;
