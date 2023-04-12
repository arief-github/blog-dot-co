import React from 'react'
import { Wrapper, WrapperBGImg, Content } from './BGImage.styles'

const BGImage = ({ className, children, image, alt, layout }) => {
  return (
    <Wrapper>
        <WrapperBGImg image={image} alt={alt} layout={layout}/>
        <Content className={className}>{children}</Content>
    </Wrapper>
  )
}

export default BGImage