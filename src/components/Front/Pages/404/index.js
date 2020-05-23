import React from 'react';
import styled from 'styled-components'

const Error = () => {

    return(
        <Wrapper className="container">
            <h1>Whoops!<br/><br/>404</h1>
            <font>Sorry page not found!</font>
        </Wrapper>
    )
}

export default Error;

const Wrapper = styled.div`
    padding: 190px 0;
    text-align: center;
    font {
        font-size: 25px;
    }
`;