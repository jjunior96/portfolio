import React from 'react';

import Sidebar from '../Sidebar';
import Content from '../Content';
import Footer from '../Footer';

import * as S from './styled';
import GlobalStyles from '../../styles/global';

const Layout = () => {
  return (
    <S.LayoutWrapper>
      {/* Reset Global */}
      <GlobalStyles />
      <S.LayoutMain>
        <Sidebar />
        <Content />
        <Footer />
      </S.LayoutMain>
    </S.LayoutWrapper>
  );
};

export default Layout;
