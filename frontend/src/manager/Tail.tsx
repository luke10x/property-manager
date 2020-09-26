import { useMutation } from 'graphql-hooks';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Form } from './Form';
import { CREATE_ITEM_MUTATION } from './Gql';
import { Action } from './UsePropertyReducer';
import { ItemInput, ItemType } from '../_graphql/global';
import { CreateItemMutation } from '../_graphql/client/CreateItemMutation';

interface TailProps {
  dispatch: React.Dispatch<Action>;
}

export const Tail: React.FC<TailProps> = (props: TailProps) => {
  const [isFormVisible, setFormVisible] = useState<boolean>(false);
  const [createProperty, { data: createData, loading }] = useMutation<
    CreateItemMutation
  >(CREATE_ITEM_MUTATION);

  const onSave = (newProperty: ItemInput) => {
    createProperty({ variables: { input: newProperty } });
  };

  const dispatch = props.dispatch;
  useEffect(() => {
    if (createData !== undefined) {
      dispatch({
        actionType: 'Created',
        payload: createData.createItem,
      });
    }
    setFormVisible(false);
  }, [createData, dispatch]);

  if (!isFormVisible) {
    return (
      <button
        className="plus item"
        onClick={() => {
          setFormVisible(true);
        }}
      >
        ⊕
      </button>
    );
  }

  const data: ItemInput = {
    type: 'APARTMENT' as ItemType,
    address: '',
    bedrooms: 0,
  };

  if (loading) {
    return (
      <div className="form card item">
        <div className="status">Creating...</div>
      </div>
    );
  }

  const close = () => setFormVisible(false);
  return (
    <div className="form card item">
      <Form close={close} onSave={onSave} data={data} />
    </div>
  );
};
