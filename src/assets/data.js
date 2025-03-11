import { AiOutlineDashboard, AiOutlineCalendar } from 'react-icons/ai';
import { MdSocialDistance, MdLogin, MdLogout } from 'react-icons/md';

import { FiPlus, FiCalendar, FiSettings, FiLogOut } from 'react-icons/fi';

import { BsCardList } from 'react-icons/bs';
import logo from './logo.webp'
import rl from './registerLeft.webp'




const NAVBAR_ITEMS_DATA = [
  {
    name: 'Dashboard',
    path: '/',
    icon: AiOutlineDashboard,
  },
  {
    name: 'Social Accounts',
    path: '/social-accounts',
    icon: MdSocialDistance,
  },
  {
    name: 'Scheduler',
    path: '/scheduler',
    icon: AiOutlineCalendar,
  },
  {
    name: 'Posts',
    path: '/posts',
    icon: BsCardList,
  },
  {
    name: 'Create Post',
    path: '/create-post',
    icon: FiPlus,
  },
  {
    name: 'Calender',
    path: '/calender',
    icon: FiCalendar,
  },
  {
    name: 'Settings',
    path: '/setting',
    icon: FiSettings,
  },
];
export {NAVBAR_ITEMS_DATA,logo, rl}