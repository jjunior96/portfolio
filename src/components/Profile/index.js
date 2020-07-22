import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Avatar from '../Avatar';

import * as S from './styled';

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `);

  return (
    <S.ProfileWrapper>
      <Avatar />
      <S.ProfileAuthor>{title}</S.ProfileAuthor>
      <S.ProfilePosition>{position}</S.ProfilePosition>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  );
};

export default Profile;
