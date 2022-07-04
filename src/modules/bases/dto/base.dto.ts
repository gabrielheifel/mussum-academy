import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseDTO {
  @Field()
  id: string;

  @FilterableField()
  createdAt: Date;

  @FilterableField()
  UpdatedAt: Date;

  @FilterableField()
  deletedAt: Date;
}
