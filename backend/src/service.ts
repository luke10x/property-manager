interface PropertyDetails {
  type: "APARTMENT" | "HOUSE";
  address: string;
  bedrooms: number;
}

interface Property extends PropertyDetails {
  id: string;
}

export const getOne = (id: string): Property => {
  return {
    id: "shana tova",
    type: "APARTMENT",
    address: "1200 Midlands ave, Bronxville, NY, 10708",
    bedrooms: 2
  };
};

export const getList = (): Property[] => {
  return [
    {
      id: "shana tova",
      type: "APARTMENT",
      address: "1200 Midlands ave, Bronxville, NY, 10708",
      bedrooms: 2
    }
  ];
};

export const create = (details: PropertyDetails): Property => {
  return {
    id: "shana tova",
    type: "APARTMENT",
    address: "1200 Midlands ave, Bronxville, NY, 10708",
    bedrooms: 2
  };
};

export const update = (id: string, details: PropertyDetails): Property => {
  return {
    id: "shana tova",
    type: "APARTMENT",
    address: "1200 Midlands ave, Bronxville, NY, 10708",
    bedrooms: 2
  };
};
