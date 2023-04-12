import { GatsbyImage as Img } from 'gatsby-plugin-image';
import React from 'react'
import DateIcon from 'images/calendar.svg';
import TimeIcon from 'images/watch.svg';
import { DateWrapper, ImgWrapper, StatWrapper, TextWrapper, CardWrapper, ReadingTimeWrapper } from './BlogPostCard.style';
import { Link } from 'gatsby';

const BlogPostCard = ({ slug, title, date, readingTime, excerpt, image, alt }) => {
  return (
    <>
      <CardWrapper>
        <ImgWrapper>
          <Img image={image} alt={alt} />
        </ImgWrapper>
        <TextWrapper>
          <Link to={slug}>
            <h2>{title}</h2>
          </Link>
        <StatWrapper>
          <DateWrapper>
            <img src={DateIcon} alt='date' />
            {date}
          </DateWrapper>
          <ReadingTimeWrapper>
            <img src={TimeIcon} alt='time' />
            {readingTime}
          </ReadingTimeWrapper>
        </StatWrapper>
        </TextWrapper>
        <p>{excerpt}</p>
      </CardWrapper>
    </>
  )
}

export default BlogPostCard;