import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import { Item, ItemInput } from '../types/Item';
import { getOne, getList, create, update } from '../service';

@Resolver()
export class ItemResolver {
  @Query(() => Item, { nullable: false })
  async returnSingleItem(@Arg('id') id: string) {
    console.log('🥳 GET ONE');
    return getOne(id);
  }

  @Query(() => [Item])
  async returnAllItems() {
    console.log('🦄 GET ALL');
    return await getList();
  }

  @Mutation(() => Item)
  async createItem(@Arg('input') input: ItemInput): Promise<Item> {
    console.log('🎉 CREATE');
    return create(input);
  }

  @Mutation(() => Item)
  async updateItem(@Arg('id') id: string, @Arg('input') input: ItemInput) {
    console.log('🎊 UPDATE');
    return update(id, input);
  }
}
