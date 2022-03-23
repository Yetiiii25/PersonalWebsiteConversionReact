import styled from "styled-components"
import { Link } from "react-router-dom"


export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 10%;
  background-color: white;
  

  a,
  .cta,
  .overlay__content a {
    font-family: Satosh;
    font-weight: 700;
    color:black;
    text-decoration: none;
    
  }

    a:hover{
      color: blueviolet;
    } 
  
    .cta {
    margin-left: 20px;
    padding: 9px;
    background-color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }

  .cta:hover {
    background-color: blueviolet ;
  }
`

export const HomeLink = styled(Link)`
  margin-right: auto;
  font-family: Satosh;
  font-weight: 700;
  color: black;
  text-decoration: none;
  padding-bottom: 14px;
  

  &:hover{
    color: blueviolet;
    
  }
`
export const NavLinksUl = styled.div`
    list-style: none;
    display: flex;
    text-decoration: none;
    padding-bottom: 15px;
    
    @media (max-width: 800px) {
      display: none;
    }
    .menu {
      display: initial;
    }
  
`
export const NavLinkLi = styled.li`
  padding: 0px 20px;
`

export const DropDownButton = styled.div`
    background-color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  
   
`

export const DropDownUl = styled.div`
    list-style-type: none;
    margin: 0;
    padding: 0;

    img {
      transform: scale(0.5);
    }
    `
   

export const DropDownContent = styled.div`
    display: none;
    position: absolute;
    background-color: white;
    min-width: 160px;
    z-index: 1;
    border: 1px solid;
    border-color: #ddd;

    a{
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
    width: 100%;
    } 
`

export const DropDown = styled.div`
    position: relative;
    display: inline-block;

    :hover ${DropDownContent} {
    display: block;
  }
`


