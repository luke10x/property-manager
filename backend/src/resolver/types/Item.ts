import { Length } from "class-validator";
import { ObjectType, Field, ID, Int, InputType } from "type-graphql";

@InputType()
export class ItemInput implements Partial<Item> {
  @Field()
  type!: "APARTMENT" | "HOUSE";

  @Field()
  @Length(1, 80)
  address!: string;

  @Field()
  bedrooms!: number;
}

@ObjectType({ description: "The Items model" })
export class Item {
    @Field(() => ID)
    id!: string;

    @Field()
    type!: string;

    @Field()
    address!: string;

    @Field(_type => Int)
    bedrooms!: number;
}
