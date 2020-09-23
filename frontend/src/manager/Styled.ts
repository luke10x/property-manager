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
      height: 200px;
      padding: 10px;
      margin: 10px;
      box-sizing: border-box;
      border-radius: 3px;
    }
    .details {
      cursor: pointer;
    }
    .card {
      background: white;
      color: black;
    }
    button.plus {
      background: none;
      color: lightgrey;
      border: 5px dashed grey;
      font-size: 3em;
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

export const StyledForm = styled.div`
  input, output, textarea, select, button {
    box-sizing: border-box;
    padding: 0.2em 0.4em;
    margin: 0.2em 0;
    outline: 0 none;
    border: 1px solid black;
    box-shadow: none;
  }

  button {
    max-width: 9em;
    padding: 0.2em 2em;
    background-color: #ddd;
    box-shadow: 0 2px 0 #bbb;
    cursor: pointer;
  }

  label {
    box-sizing: border-box;
    user-select: none;
    cursor: pointer;
  }

  input:focus + label, textarea:focus + label, select:focus + label {
    color: #933;
  }

  input:checked + label {
    font-weight: bold;
  }

  .formgrid {
    display: grid;
    grid-template-columns: 1fr 1em 2fr;
    grid-gap: 0.3em 0.6em;
    grid-auto-flow: dense;
    align-items: center;
  }
  
  input, output, textarea, select, button {
    grid-column: 2 / 4;
    width: auto;
    margin: 0;
  }
  
  input[type="checkbox"], input[type="radio"] {
    grid-column: 1 / 3;
    justify-self: end;
    margin: 0;
  }
  
  label, input[type="checkbox"] + label, input[type="radio"] + label {
    width: auto;
    padding: 0;
    margin: 0;
  }
  
  textarea + label {
    align-self: start;
  }  

  .form-header {
    margin-bottom 10px;
    text-align: left;
    span {
      cursor: pointer;
    }
  }
`;