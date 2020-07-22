import React from 'react';

import Avatar from '../Avatar';
import Profile from '../Profile';

import * as S from './styled';

const Sidebar = () => (
  <S.SidebarWrapper>
    <Avatar />
    <Profile />
  </S.SidebarWrapper>
);

export default Sidebar;
