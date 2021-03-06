import React from 'react';
import { Link as A } from 'gatsby';
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 630px;
`

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  text-align: center;
`

export const Name = styled.h1`
  font-size: 70px;
  text-shadow: white 0px 1px 1px;
  @media(max-width: 650px) {
    font-size: 40px;
  }
`

export const Career = styled.h2`
  font-size: 50px;
  text-shadow: white 0px 1px 1px;
  @media(max-width: 650px) {
    font-size: 20px;
  }
`

export const PortfolioLink = styled(props => (<A {...props}/>))`
  color: black;
  background-color: #e2c989;
  text-decoration: none;

  border-radius: 20px;
  box-shadow: 0 2px 3px black;
  padding: 15px;

  &:hover{
    color: white;
    background-color: #e3b65b;
    transition-duration: 0.4s;
  }
`

export const P = styled.p`
  margin-top: 1%;
`