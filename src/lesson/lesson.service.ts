import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './inputs/lesson.input';
import { AssignStudentsToLessonInput } from './inputs/assign-students-to-lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  async getLesson(id: string): Promise<Lesson | null> {
    return await this.lessonRepository.findOneBy({ id });
  }

  async getAllLessons(): Promise<Lesson[] | null> {
    return await this.lessonRepository.find();
  }

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate } = createLessonInput;

    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
      students: [],
    });

    return await this.lessonRepository.save(lesson);
  }

  async assignStudentsToLesson(
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ): Promise<Lesson | null> {
    const { lessonId, studentsIds } = assignStudentsToLessonInput;

    const lesson = await this.lessonRepository.findOneBy({ id: lessonId });
    lesson!.students = [...lesson!.students, ...studentsIds];

    return await this.lessonRepository.save(lesson!);
  }
}
