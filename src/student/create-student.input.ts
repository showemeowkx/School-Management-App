/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  @Field()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  @Field()
  lastName: string;
}
