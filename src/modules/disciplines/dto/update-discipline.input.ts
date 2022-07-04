import { CreateDisciplineInput } from './create-discipline.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDisciplineInput extends PartialType(CreateDisciplineInput) {
  @Field(() => Int)
  id: number;
}
