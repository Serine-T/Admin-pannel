import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

const menuItems = [
  {
    key: 'home',
    icon: React.createElement(LaptopOutlined),
    label: 'Homepage',
  },
  {
    key: 'users',
    icon: React.createElement(UserOutlined),
    label: 'Users',
  },
  {
    key: 'premiumUsers',
    icon: React.createElement(NotificationOutlined),
    label: 'Premium users',
  },
  {
    key: 'learn',
    icon: React.createElement(NotificationOutlined),
    label: 'Learn',
    children: [
      {
        key: 'start',
        label: 'Quick Start',
      },
      {
        key: 'recipes',
        label: 'Recipes',
      },
      {
        key: 'books',
        label: 'Books',
      },
      {
        key: 'movies',
        label: 'Movies',
      },
      {
        key: 'dietician',
        label: 'Dietician',
      }
    ]
  },
  {
    key: 'restaurants',
    icon: React.createElement(NotificationOutlined),
    label: 'Restaurants',
  },
  {
    key: 'shop',
    icon: React.createElement(NotificationOutlined),
    label: 'Shop',
  },
  {
    key: 'cuisine',
    icon: React.createElement(NotificationOutlined),
    label: 'Cuisine',
  },
  {
    key: 'post',
    icon: React.createElement(NotificationOutlined),
    label: 'Post',
  },
];

export default menuItems;
