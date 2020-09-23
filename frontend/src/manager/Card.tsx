import React, { useEffect } from "react";
import { useState } from "react";
import { Form } from "./Form";
import { useManualQuery, useMutation } from 'graphql-hooks'
import { Action, MiniProperty, PropertyDetails } from "./UsePropertyReducer";

const ITEM_GQL = `
  query ($id: String!) {
    getProperty(id: $id) {
      id
      type
      address
      bedrooms
    }
  }
`;

const UPDATE_PROPERTY = `
  mutation ($id: String!, $input: PropertyInput!) {
    updateProperty(id: $id, input: $input) {
      id
      type
      address
      bedrooms
    }
  }
`;

interface CardProps {
  dispatch: React.Dispatch<Action>;
  item: MiniProperty;
}

export const Card: React.FC<CardProps> = (props: CardProps) => {
  const [isFormVisible, setFormVisible] = useState<Boolean>(false);
  const [fetchProperty, { loading: itemLoading, data: itemData }] = useManualQuery(ITEM_GQL)

  const idemId = props.item.id;
  useEffect(() => {
    if (isFormVisible) {
      fetchProperty({variables: { id: idemId } });
    }
  }, [isFormVisible, idemId, fetchProperty])

  const [savedData, setSavedData] = useState<PropertyDetails>({
    type: 'APARTMENT',
    address: '',
    bedrooms: 0,
  });

  useEffect(() => {
    if (itemData?.getProperty !== undefined) {
      setSavedData(itemData?.getProperty);
    }
  }, [itemData, setSavedData])

  const [updateProperty, { data: updateData }] = useMutation(UPDATE_PROPERTY);

  const onSave = (changedProperty: PropertyDetails) => {
    updateProperty({
      variables: {
        id: props.item.id,
        input: changedProperty,
      }
    });
    setSavedData(changedProperty);
  }

  const dispatch = props.dispatch;
  useEffect(() => {
    if (updateData?.updateProperty !== undefined) {
      dispatch({
        actionType: 'Updated',
        payload: updateData.updateProperty
      });
    }
    setFormVisible(false);
  }, [updateData, dispatch]);


  if (!isFormVisible) {
    return (
      <div key={`card-${props.item.id}`} className="details card item" onClick={() => {
        setFormVisible(true);
      }}>
        <div className="address">
          {props.item.address.split("\n").map((line, key) => <div key={key}>{line}</div>)}
        </div>
      </div>
    );
  }

  const close = () => setFormVisible(false);
  return <div key={`card-${props.item.id}`} className="form card item">
    {!itemLoading && <Form close={close} onSave={onSave} data={savedData}/>}
    {itemLoading && <div>Refreshing item....</div>}
  </div>;
}
