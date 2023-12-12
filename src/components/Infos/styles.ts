import styled from 'styled-components'

export const ListContainer = styled.div`
  padding-bottom: 56px;
  padding-top: 56px;
  text-align: center;
  margin: 0 auto;
  //background-color: #fff;

  .react-tabs__tab-list {
    border-bottom: transparent;
    padding: 0;
  }
  .TabItens {
    display: flex;
    text-align: center;
    margin-bottom: 30px;
  }
  .TabItem {
    position: relative;

    margin: 0 auto;
    cursor: pointer;
    background: transparent;
    text-align: center;
    h1 {
      color: #fff;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
    }

    &.react-tabs__tab--selected::after {
      background-color: #fff;
    }
  }
  .TabItens {
    display: flex;
  }
`
export const CardList = styled.li`
  border: 4px solid #fff;
  margin-top: 25px;
  p {
    color: #fff;
    text-align: center;
    margin: 15px;
  }

  p {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  h2 {
    padding-top: 15px;
    color: #fff;
  }
`
