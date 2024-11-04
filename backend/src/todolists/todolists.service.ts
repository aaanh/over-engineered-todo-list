import { Injectable } from '@nestjs/common';
import { CreateTodolistDto } from './dto/create-todolist.dto';
import { UpdateTodolistDto } from './dto/update-todolist.dto';

@Injectable()
export class TodolistsService {
  create(createTodolistDto: CreateTodolistDto) {
    return 'This action adds a new todolist';
  }

  findAllByUserId(userId: string) {
    return `Query lists for ${userId}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todolist`;
  }

  update(id: number, updateTodolistDto: UpdateTodolistDto) {
    return `This action updates a #${id} todolist`;
  }

  remove(id: number) {
    return `This action removes a #${id} todolist`;
  }
}
