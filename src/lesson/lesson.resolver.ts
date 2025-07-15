/* eslint-disable @typescript-eslint/no-unused-vars */
import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 123456,
      name: 'Polish Class',
      startDate: new Date().toISOString(),
      endDate: new Date().toDateString(),
    };
  }
}
