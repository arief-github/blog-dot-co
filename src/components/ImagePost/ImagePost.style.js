import { GatsbyImage as Img } from "gatsby-plugin-image";
import styled from "styled-components";

const Image = styled(Img)`
    border-radius: 10px;
    max-width(--site-max-width);
    margin: 0 auto;
    max-height: 300;
`;

export default Image;