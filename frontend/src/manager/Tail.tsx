import { useMutation } from 'graphql-hooks';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Form } from './Form';
import { Action, PropertyDetails } from './UsePropertyReducer';

const CREATE_PROPERTY = `
  mutation ($input: PropertyInput!) {
    createProperty(input: $input) {
      id
      address
    }
  }
`;

interface TailProps {
  dispatch: React.Dispatch<Action>;
}

export const Tail: React.FC<TailProps> = (props: TailProps) => {
  const [isFormVisible, setFormVisible] = useState<boolean>(false);
  const [createPost, { data: createData }] = useMutation(CREATE_PROPERTY);

  const onSave = (newProperty: PropertyDetails) => {
    createPost({ variables: { input: newProperty } });
  };

  const dispatch = props.dispatch;
  useEffect(() => {
    if (createData?.createProperty !== undefined) {
      dispatch({
        actionType: 'Created',
        payload: createData.createProperty,
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

  const data: PropertyDetails = {
    type: 'APARTMENT',
    address: '',
    bedrooms: 0,
  };
  const close = () => setFormVisible(false);
  return (
    <div className="form card item">
      <Form close={close} onSave={onSave} data={data} />
    </div>
  );
};
