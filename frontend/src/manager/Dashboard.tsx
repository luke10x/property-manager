import React, { useState } from 'react';
import { Styled } from './Styled';
import { useQuery } from 'graphql-hooks'

const LIST_GQL = `
  query {
    getAllProperties {
      id
      address
    }
  }
`;
export const Form: React.FC = () => {
  const [type, setType] = useState<"APARTMENT" | "HOUSE">("APARTMENT");
  
  return <form>

    <select onSelect={() => { alert('jajaj');}} >
      <option value="APARMENT">Apartment</option>
      <option value="HOUSE">house</option>
    </select>
  </form>
}

export const Tail: React.FC = () => {

  const [isFormVisible, setFormVisible] = useState<Boolean>(false);

  if (!isFormVisible) {
    return <button className="plus item" onClick={() => {
      setFormVisible(true);
    }}>⊕</button>
  }

  return <div className="form item">
    <Form />
  </div>;
};

export const Dashboard: React.FC = () => {

  const { loading, error, data } = useQuery(LIST_GQL)

  const handleAdd = () => {

  };

  return <Styled>
    {loading && <div>loading...</div>}
    <div className="content">
    {data && data
      .getAllProperties
      .map((item: {id: string, address: string}) => <div className="card item">
        {item.address}
      </div>
      )
    }
      <Tail />      

    </div>
    <div className="footer">
      <a href="http://luke10x.dev" target="_blank">luke10x.dev</a> 😍
    </div>
  </Styled>;
};