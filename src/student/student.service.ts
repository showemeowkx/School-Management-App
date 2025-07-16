import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async getStudent(id: string): Promise<Student | null> {
    return await this.studentRepository.findOneBy({ id });
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    const students: Student[] = [];

    for (const id of studentIds) {
      const student = await this.studentRepository.findOneBy({ id });

      if (!student) continue;

      students.push(student);
    }

    return students;
  }

  async getAllStudents(): Promise<Student[] | null> {
    return await this.studentRepository.find();
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;

    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });

    return await this.studentRepository.save(student);
  }
}
