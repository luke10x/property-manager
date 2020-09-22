import styled from 'styled-components';

const breakpointSmall = '620px';

export const Styled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;

    .item {
      width: 300px;
      height: 100px;
      margin: 1em;
      box-sizing: border-box;

    }

    .card {
      background: white;
      color: black;
    }
    button.plus {
      background: none;
      color: lightgrey;
      border: 5px dashed grey;
    }

    button.plus:hover {
      border: 5px dashed lightgrey;
    }
    @media (max-width: ${breakpointSmall}) {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  .footer {
    flex: 0;
    & > * {
      margin: 0px auto;
      box-sizing: border-box;
      width: 50%;
      @media (max-width: ${breakpointSmall}) {
        width: 100%;
      }
    }
  }
`;
