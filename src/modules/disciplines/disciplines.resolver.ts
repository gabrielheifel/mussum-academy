import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DisciplinesService } from './disciplines.service';
import { Discipline } from './entities/discipline.entity';
import { CreateDisciplineInput } from './dto/create-discipline.input';
import { UpdateDisciplineInput } from './dto/update-discipline.input';

@Resolver(() => Discipline)
export class DisciplinesResolver {
  constructor(private readonly disciplinesService: DisciplinesService) {}

  @Mutation(() => Discipline)
  createDiscipline(@Args('createDisciplineInput') createDisciplineInput: CreateDisciplineInput) {
    return this.disciplinesService.create(createDisciplineInput);
  }

  @Query(() => [Discipline], { name: 'disciplines' })
  findAll() {
    return this.disciplinesService.findAll();
  }

  @Query(() => Discipline, { name: 'discipline' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.disciplinesService.findOne(id);
  }

  @Mutation(() => Discipline)
  updateDiscipline(@Args('updateDisciplineInput') updateDisciplineInput: UpdateDisciplineInput) {
    return this.disciplinesService.update(updateDisciplineInput.id, updateDisciplineInput);
  }

  @Mutation(() => Discipline)
  removeDiscipline(@Args('id', { type: () => Int }) id: number) {
    return this.disciplinesService.remove(id);
  }
}
