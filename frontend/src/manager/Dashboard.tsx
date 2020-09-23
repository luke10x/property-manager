import React, { useEffect } from 'react';
import { Styled } from './Styled';
import { useQuery } from 'graphql-hooks'
import { Tail } from './Tail';
import { MiniProperty, usePropertyReducer } from './UsePropertyReducer';
import { Card } from './Card';

const LIST_GQL = `
  query {
    getAllProperties {
      id
      address
    }
  }
`;

export const Dashboard: React.FC = () => {

  const { loading: initialLoading, data: initialData } = useQuery(LIST_GQL)
  const [state, dispatch] = usePropertyReducer()

  useEffect(() => {
    if (initialData !== undefined) {
      dispatch({
        actionType: 'Loaded',
        payload: initialData?.getAllProperties
      });
    }
  }, [initialData, dispatch]);

  return <Styled>
    <div className="content">
      {initialLoading && <div>Loading...</div>}
      {!initialLoading && state.map((item: MiniProperty) => {
        return <Card dispatch={dispatch} item={item} />;
      })}
      {!initialLoading && <Tail dispatch={dispatch} />}    
    </div>
    <div className="footer">
      <a
        rel="noopener noreferrer"
        href="https://luke10x.dev"
        target="_blank">luke10x.dev</a> 😍
    </div>
  </Styled>;
};