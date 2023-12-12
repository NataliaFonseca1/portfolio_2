import styled from 'styled-components'

export const ListContainer = styled.div`
  padding-bottom: 56px;
  padding-top: 56px;
  text-align: center;
  margin: 0 auto;
  background-color: #fff;

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
      color: #000020;
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
      background-color: #000020;
    }
  }
  .TabItens {
    display: flex;
  }
`
export const CardList = styled.li`
  border: 4px solid #000020;
  margin-top: 25px;
  p {
    color: #000020;
    text-align: center;
    margin: 15px;
  }

  p {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  h2 {
    padding-top: 15px;
    color: #000020;
  }
`
