import React, { useEffect } from 'react';
import { StyledDashboard } from './Styled';
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

  return <StyledDashboard>
    <div className="content">
      {initialLoading && <div>Loading...</div>}
      {!initialLoading && state.map((item: MiniProperty) => {
        return <Card 
          key={`item-${item.id}`}
          dispatch={dispatch}
          item={item} />;
      })}
      {!initialLoading && <Tail dispatch={dispatch} />}    
    </div>
    <div className="footer">
          See more apps like this on <a
          rel="noopener noreferrer"
          href="https://luke10x.dev"
          target="_blank"
        ><span role="img" aria-label="luke10x.dev">👉 luke10x.dev 😍</span></a> 
    </div>
  </StyledDashboard>;
};
