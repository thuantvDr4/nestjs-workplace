/**
 * Noi quan ly endpoint
 *
 */

import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  Headers,
  Ip,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers() {
    return 'Get all users';
  }

  @Get('/:id')
  public getUserById(
    @Param('id', ParseIntPipe) id: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit?: number,
    @Query('ofset', new DefaultValuePipe(1), ParseIntPipe) ofset?: number,
    @Query('role') role?: string,
  ) {
    console.log('----id:', typeof id);
    console.log('----limit:', limit);
    console.log('----ofset:', ofset);
    console.log('----role:', role);
    return 'You sent a GET request to get user detail by id: ' + id;
  }

  //@Body => lây đu thong tin can
  // @Req => lay toan bo: body, header,cookies, ...
  @Post()
  public createUser(
    @Body()
    request: CreateUserDto,
    // @Headers() headers: any,
    // @Ip() ip: any,
  ) {
    console.log('----request', request);
    console.log('----request', typeof request);
    console.log('---instance of', request instanceof CreateUserDto);
    return 'You sent a Post request to create new user';
  }

  @Put()
  public updateUser() {
    return 'You sent a PUT request to update user';
  }

  @Patch()
  public updateuser_v2() {
    return 'You sent a PATCH request to update user';
  }

  @Delete()
  public deleteUser() {
    return 'You sent a DELETE request to remove user';
  }
}
