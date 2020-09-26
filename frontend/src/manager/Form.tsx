import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyledForm } from './Styled';
import { ItemInput, ItemType } from '../_graphql/global';

interface FormProps {
  close: () => void;
  onSave: (formData: ItemInput) => void;
  data: ItemInput;
}

export const Form: React.FC<FormProps> = (props: FormProps) => {
  const [type, setType] = useState<ItemType>(props.data.type);
  const [address, setAddress] = useState<string>(props.data.address);
  const [bedrooms, setBedrooms] = useState<number>(props.data.bedrooms);

  useEffect(() => {
    setType(props.data.type);
    setAddress(props.data.address);
    setBedrooms(props.data.bedrooms);
  }, [props]);

  const handleTypeChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setType(evt.target.value as ItemType);
  };
  const handleAddressChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAddress(evt.target.value);
  };
  const handleBedroomsChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setBedrooms(Number(evt.target.value));
  };
  const handleSubmit = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    const newProperty = {
      type,
      address,
      bedrooms,
    };
    props.onSave(newProperty);
  };

  return (
    <StyledForm>
      <div className="form-header">
        <span onClick={props.close}>&lt; back</span>
      </div>
      <div className="formgrid">
        <select id="type-input" onChange={handleTypeChange} value={type}>
          <option value="APARTMENT">Apartment</option>
          <option value="HOUSE">house</option>
        </select>
        <label htmlFor="type-input">Type</label>

        <textarea
          id="address-input"
          rows={4}
          onChange={handleAddressChange}
          defaultValue={address}
        ></textarea>
        <label htmlFor="address-input">Address</label>

        <input
          id="bedrooms-input"
          onChange={handleBedroomsChange}
          value={bedrooms}
          type="number"
          min="0"
          step="1"
        />
        <label htmlFor="bedrooms-input">Bedrooms</label>

        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </StyledForm>
  );
};
