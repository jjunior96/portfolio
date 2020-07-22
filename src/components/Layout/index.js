import React from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
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
        <Header />
        <Footer />
      </S.LayoutMain>
    </S.LayoutWrapper>
  );
};

export default Layout;
