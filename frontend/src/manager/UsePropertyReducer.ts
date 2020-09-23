import React, { useReducer } from 'react';

export type PropertyType = 'APARTMENT' | 'HOUSE' 

export interface PropertyDetails {
  type: PropertyType;
  address: string;
  bedrooms: number;
};

export interface MiniProperty {
  id: string;
  address: string;
};

type State = MiniProperty[];

export type Action = { actionType: "Loaded", payload: MiniProperty[]} 
  | { actionType: "Created", payload: MiniProperty }
  | { actionType: "Updated", payload: MiniProperty }

const handleAction = (oldState: State, action: Action): State => {

  if (action.actionType === 'Loaded') {
    return action.payload;
  }

  if (action.actionType === 'Created') {
    return [...oldState, action.payload];
  }

  if (action.actionType === 'Updated') {
    const index = oldState.findIndex(p => p.id === action.payload.id);
    let newState= oldState.slice()
    newState.splice(index, 1, action.payload)
    return newState;
  }

  return oldState;
}

export const usePropertyReducer = (): [State, React.Dispatch<Action>] => {
  return useReducer<React.Reducer<State, Action>>(handleAction, []);
};