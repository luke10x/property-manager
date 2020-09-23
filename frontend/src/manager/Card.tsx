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

  const [enteredData, setEnteredData] = useState<PropertyDetails>({
    type: 'APARTMENT',
    address: '',
    bedrooms: 0,
  });

  useEffect(() => {
    if (itemData?.getProperty !== undefined) {
      setEnteredData(itemData?.getProperty);
    }
  }, [itemData, setEnteredData])

  const [updateProperty, { data: updateData }] = useMutation(UPDATE_PROPERTY);

  const onSave = (changedProperty: PropertyDetails) => {
    updateProperty({
      variables: {
        id: props.item.id,
        input: changedProperty,
      }
    });
    setEnteredData(changedProperty);
  }

  useEffect(() => {
    if (updateData?.updateProperty !== undefined) {
      props.dispatch({
        actionType: 'Updated',
        payload: updateData.updateProperty
      });
    }
    setFormVisible(false);
  }, [updateData]);


  if (!isFormVisible) {
    return (
      <div key={`card-${props.item.id}`} className="details card item" onClick={() => {
        setFormVisible(true);
      }}>
        {props.item.address}
      </div>
    );
  }

  const close = () => setFormVisible(false);
  return <div key={`card-${props.item.id}`} className="form card item">
    {!itemLoading && <Form close={close} onSave={onSave} data={enteredData}/>}
    {itemLoading && <div>Refreshing item....</div>}
  </div>;
}
