import { Length } from 'class-validator';
import {
  ObjectType,
  Field,
  ID,
  Int,
  InputType,
  registerEnumType,
} from 'type-graphql';

enum ItemType {
  APARTMENT = 'APARTMENT',
  HOUSE = 'HOUSE',
}

registerEnumType(ItemType, {
  name: 'ItemType',
  description: 'Possible types of an item',
});

@InputType()
export class ItemInput implements Partial<Item> {
  @Field(() => ItemType)
  type!: ItemType;

  @Field()
  @Length(1, 80)
  address!: string;

  @Field()
  bedrooms!: number;
}

@ObjectType({ description: 'The Items model' })
export class Item {
  @Field(() => ID)
  id!: string;

  @Field(() => ItemType)
  type!: ItemType;

  @Field()
  address!: string;

  @Field(() => Int)
  bedrooms!: number;
}
