import styled from 'styled-components';

export const StyledDashboard = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    flex-wrap: wrap;
    & > .status {
      width: 100%;
      color: grey;
    }
    .item {
      flex: 1 0 300px;
      height: 200px;
      padding: 10px;
      margin: 10px;
      box-sizing: border-box;
      border-radius: 3px;
    }

    .envelope {
      cursor: pointer;
    }
    .card {
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      background: white;
      color: black;
      text-align: left;
      .status {
        color: grey;
      }
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
  }
  .footer {
    padding: 1em;
    color: white;
    a {
      color: #f1b31c;
    }
    a:hover {
      color: #fcea2b;
    }
  }

  @media (min-width: 1000px) {
    width: 1000px;
    margin: 0 auto;
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
      color: red;
    }
  }
`;
