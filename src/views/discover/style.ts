import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 35px;
  box-sizing: border-box;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
  .content {
    width: 1100px;
    height: 34px;
    line-height: 34px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    a {
      color: #fff;
    }
    a:hover {
      background: #9b0909;
    }
  }
`
