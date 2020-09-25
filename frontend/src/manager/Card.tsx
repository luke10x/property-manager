import React, { useEffect } from 'react';
import { useState } from 'react';
import { Form } from './Form';
import { useManualQuery, useMutation } from 'graphql-hooks';
import { Action, MiniProperty, PropertyDetails } from './UsePropertyReducer';
import { ITEM_GQL, UPDATE_PROPERTY } from './Gql';
interface CardProps {
  dispatch: React.Dispatch<Action>;
  item: MiniProperty;
}

export const Card: React.FC<CardProps> = (props: CardProps) => {
  const [isFormVisible, setFormVisible] = useState<boolean>(false);
  const [
    fetchProperty,
    { loading: refreshing, data: itemData },
  ] = useManualQuery(ITEM_GQL);

  const [savedData, setSavedData] = useState<PropertyDetails | undefined>();

  const itemId = props.item.id;
  useEffect(() => {
    if (isFormVisible && !savedData) {
      fetchProperty({ variables: { id: itemId } });
    }
  }, [isFormVisible, itemId, fetchProperty, savedData]);

  useEffect(() => {
    if (itemData?.returnSingleItem !== undefined) {
      setSavedData(itemData?.returnSingleItem);
    }
  }, [itemData, setSavedData]);

  const [updateProperty, { data: updateData, loading: saving }] = useMutation(
    UPDATE_PROPERTY,
  );

  const onSave = (changedProperty: PropertyDetails) => {
    updateProperty({
      variables: {
        id: props.item.id,
        input: changedProperty,
      },
    });
    setFormVisible(false);
    setSavedData(changedProperty);
  };

  const dispatch = props.dispatch;
  useEffect(() => {
    if (updateData?.updateItem !== undefined) {
      dispatch({
        actionType: 'Updated',
        payload: updateData.updateItem,
      });
    }
  }, [updateData, dispatch]);

  const close = () => setFormVisible(false);
  if (refreshing) {
    return (
      <div key={`card-${props.item.id}`} className="form card item">
        <div className="status">Refreshing...</div>
      </div>
    );
  }
  if (saving) {
    return (
      <div key={`card-${props.item.id}`} className="form card item">
        <div className="status">Saving...</div>
      </div>
    );
  }

  if (!isFormVisible) {
    return (
      <div
        key={`card-${props.item.id}`}
        className="envelope card item"
        onClick={() => {
          setFormVisible(true);
        }}
      >
        <div className="address">
          {props.item.address.split('\n').map((line, key) => (
            <div key={key}>{line}</div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div key={`card-${props.item.id}`} className="form card item">
      {savedData !== undefined && (
        <Form close={close} onSave={onSave} data={savedData} />
      )}
    </div>
  );
};
