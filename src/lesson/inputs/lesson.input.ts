/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @IsNotEmpty()
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;
}
