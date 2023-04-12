import React from 'react'
import { Link } from 'gatsby'
import useBannerQuery from '../../hooks/useBannerQuery';
import BGImage from '../BgImage';
import { BannerWrapper, TextWrapper } from './HomeBanner.styles';

const HomeBanner = () => {
  const { bannerImage : baImg, bannerImageText: baImgTx, bannerImageBtnText: baImgBtnTx, bannerImageBtnLink:baImBLink } = useBannerQuery()

  return (
    <BannerWrapper>
      <BGImage alt="Banner Image" image={baImg.childImageSharp.gatsbyImageData} layout="fluid"> 
          <TextWrapper>
            <h2>{baImgTx}</h2>
            <Link to={baImBLink}>
              <button>{baImgBtnTx}</button>
            </Link>
          </TextWrapper>
      </BGImage>
    </BannerWrapper>
  )
}

export default HomeBanner