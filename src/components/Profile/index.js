import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled';

const Profile = () => {
  const {
    site: {
      siteMetadata: { author, position, description },
    },
  } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          author
          position
          description
        }
      }
    }
  `);

  return (
    <S.ProfileWrapper>
      <S.ProfileAuthor>{author}</S.ProfileAuthor>
      <S.ProfilePosition>{position}</S.ProfilePosition>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  );
};

export default Profile;
