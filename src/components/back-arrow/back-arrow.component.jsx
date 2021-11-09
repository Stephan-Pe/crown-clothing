import React from "react";

import {BackArrowContainer }from './back-arrow.styles';

const BackArrow = ({children, ...props}) => (
    <BackArrowContainer  {...props}>
        {children}
    </BackArrowContainer>
)

export default BackArrow;