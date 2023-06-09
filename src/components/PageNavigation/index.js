import { Link } from 'gatsby';
import React from 'react';

import LeftIcon from 'images/arrow-left.svg';
import RightIcon from 'images/arrow-right.svg';
import { PageNavigationWrapper, ImgWrapper, Current } from './PageNavigation.style';

const PageNavigation = ({ currentPage, numPages }) => {
    return (
        <PageNavigationWrapper>
            <ImgWrapper>  
                { currentPage > 1 && (
                    <Link to={`/${currentPage === 2 ? '' : currentPage - 1 }`}>
                        <input type='image' alt='left-nav' src={LeftIcon} />
                    </Link>
                )}
            </ImgWrapper>
            <Current>
                <p>{currentPage}</p>
            </Current>
            <ImgWrapper>
                { currentPage !== numPages && (
                    <Link to={`/${currentPage + 1}`}>
                        <input type='image' alt='right-nav' src={RightIcon} />
                    </Link>
                )}
            </ImgWrapper>
        </PageNavigationWrapper>
    )
}

export default PageNavigation;