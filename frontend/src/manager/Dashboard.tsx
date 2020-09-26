import React, { useEffect } from 'react';
import { StyledDashboard } from './Styled';
import { useQuery } from 'graphql-hooks';
import { Tail } from './Tail';
import { usePropertyReducer } from './UsePropertyReducer';
import { Card } from './Card';
import { ALL_ITEMS_QUERY } from './Gql';
import {
  AllItemsQuery,
  AllItemsQuery_returnAllItems as BasicItem,
} from '../_graphql/client/AllItemsQuery';

export const Dashboard: React.FC = () => {
  const { loading: initialLoading, data: initialData } = useQuery<
    AllItemsQuery
  >(ALL_ITEMS_QUERY);
  const [state, dispatch] = usePropertyReducer();

  useEffect(() => {
    if (initialData !== undefined) {
      dispatch({
        actionType: 'Loaded',
        payload: initialData.returnAllItems,
      });
    }
  }, [initialData, dispatch]);

  return (
    <StyledDashboard>
      <div className="content">
        {initialLoading && <div className="status">Loading...</div>}
        {!initialLoading &&
          state.map((item: BasicItem) => {
            return (
              <Card key={`item-${item.id}`} dispatch={dispatch} item={item} />
            );
          })}
        {!initialLoading && <Tail dispatch={dispatch} />}
      </div>
      <div className="footer">
        See more apps like this on{' '}
        <a rel="noopener noreferrer" href="https://luke10x.dev" target="_blank">
          <span role="img" aria-label="luke10x.dev">
            👉 luke10x.dev 😍
          </span>
        </a>
      </div>
    </StyledDashboard>
  );
};
