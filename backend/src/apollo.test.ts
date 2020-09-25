import { ApolloServer } from 'apollo-server-express';
import { createTestClient } from 'apollo-server-testing';
import { createApollo } from './apollo';

import { create, update, getOne, getList } from './service';
jest.mock('./service');

describe('when client calls', () => {
  const logSpy = jest.spyOn(console, 'log').mockImplementation(jest.fn());
  afterAll(() => logSpy.mockRestore());
  afterEach(() => jest.resetAllMocks());

  describe('createItem mutation', () => {
    const gql = `
      mutation ($input: ItemInput!) {
        createItem(input: $input) {
          id
          address
        }
      }
    `;
    const variables = {
      input: {
        type: 'APARTMENT',
        address: '1200 Midlands ave, Bronxville, NY, 10708',
        bedrooms: 2,
      },
    };

    test('calls create service with input from request variables', async () => {
      const { query } = createTestClient(await createApollo());
      const res = await query({ query: gql, variables });

      expect(create).toHaveBeenCalledWith(variables.input);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('CREATE'));
    });

    test('responds with partial of data from create service', async () => {
      const dataReturnedFromService = {
        id: 'id-created-by-service',
        type: 'APPARTMENT',
        address: '1200 Midlands ave, Bronxville, NY, 10708',
        bedrooms: 6,
      };
      (create as jest.Mock).mockImplementation(() => dataReturnedFromService);

      const { query } = createTestClient(await createApollo());
      const res = await query({ query: gql, variables });

      expect(res.data?.createItem).toEqual({
        id: 'id-created-by-service',
        address: '1200 Midlands ave, Bronxville, NY, 10708',
      });
    });
  });

  describe('updateItem mutation', () => {
    const gql = `
      mutation ($id: String!, $input: ItemInput!) {
        updateItem(id: $id, input: $input) {
          id
          address
        }
      }
    `;
    const variables = {
      id: 'previously-created-id',
      input: {
        type: 'APARTMENT',
        address: 'Singerstraße 33, 10243 Berlin',
        bedrooms: 2,
      },
    };

    test('calls update service with id and input from request variables', async () => {
      const { query } = createTestClient(await createApollo());
      const res = await query({ query: gql, variables });

      expect(update).toHaveBeenCalledWith(variables.id, variables.input);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('UPDATE'));
    });

    test('responds with partial of data from update service', async () => {
      const dataReturnedFromService = {
        id: 'id-created-by-service',
        type: 'APPARTMENT',
        address: 'Singerstraße 33, 10243 Berlin',
        bedrooms: 6,
      };
      (update as jest.Mock).mockImplementation(() => dataReturnedFromService);

      const { query } = createTestClient(await createApollo());
      const res = await query({ query: gql, variables });

      expect(res.data?.updateItem).toEqual({
        id: 'id-created-by-service',
        address: 'Singerstraße 33, 10243 Berlin',
      });
    });
  });

  describe('returnSingleItem query', () => {
    const gql = `
      query ($id: String!) {
        returnSingleItem(id: $id) {
          id
          address
        }
      }
    `;
    const variables = {
      id: 'existing-id',
    };

    test('calls getOne service with id from request variables', async () => {
      const { query } = createTestClient(await createApollo());
      const res = await query({ query: gql, variables });

      expect(getOne).toHaveBeenCalledWith(variables.id);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('GET ONE'));
    });

    test('responds with partial of data from getOne service', async () => {
      const dataReturnedFromService = {
        id: 'id-created-by-service',
        type: 'APPARTMENT',
        address: '1200 Midlands ave, Bronxville, NY, 10708',
        bedrooms: 6,
      };
      (getOne as jest.Mock).mockImplementation(() => dataReturnedFromService);

      const { query } = createTestClient(await createApollo());
      const res = await query({ query: gql, variables });

      expect(res.data?.returnSingleItem).toEqual({
        id: 'id-created-by-service',
        address: '1200 Midlands ave, Bronxville, NY, 10708',
      });
    });
  });

  describe('returnAllItems query', () => {
    const gql = `
      query {
        returnAllItems {
          id
          address
        }
      }
    `;

    test('calls getList service with no variables', async () => {
      const { query } = createTestClient(await createApollo());
      const res = await query({ query: gql });

      expect(getList).toHaveBeenCalledWith();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('GET ALL'));
    });

    test('responds with partial of data from getList service', async () => {
      const dataReturnedFromService = [
        {
          id: 'id-created-by-service',
          type: 'APPARTMENT',
          address: '1200 Midlands ave, Bronxville, NY, 10708',
          bedrooms: 6,
        },
      ];
      (getList as jest.Mock).mockImplementation(() => dataReturnedFromService);

      const { query } = createTestClient(await createApollo());
      const res = await query({ query: gql });

      expect(res.data?.returnAllItems).toEqual([
        {
          id: 'id-created-by-service',
          address: '1200 Midlands ave, Bronxville, NY, 10708',
        },
      ]);
    });
  });
});
