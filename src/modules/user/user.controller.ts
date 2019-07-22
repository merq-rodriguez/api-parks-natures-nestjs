import { Get, Controller, Request, Response, HttpStatus, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './I-user';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getAll')
  public async getUser(
    @Request() req,
    @Response() res
  ) {
    const users = await this.userService.getUsers();
    res.status(HttpStatus.OK).json(users);
  }

  @Get('finUser/:idUser')
  public async findUser(
    @Request() req,
    @Response() res,
    @Param('idUser') idUser
  ) {
    const users = await this.userService.findUser(idUser);
    res.status(HttpStatus.OK).json(users);
  }

  @Post('create-user')
  public async createUser(
    @Request() req, 
    @Response() res, 
    @Body('username') username,
    @Body('password') password,
    @Body('fkRol') fkRol
  ){
    let user : User = {
      idUser : null,
      username : username,
      password : password,
      fkRol : fkRol,
      state : "A"
    };    
    console.log(user);    
    const response = this.userService.createUser(user);
    res.status(HttpStatus.OK).json(response);
  }

  @Post('update-user')
  public async updateUser(
    @Request() req, 
    @Response() res, 
    @Body('idUser') idUser,
    @Body('username') username,
    @Body('password') password,
    @Body('fkRol') fkRol
  ){
    let user : User = {
      idUser : idUser,
      username : username,
      password : password,
      fkRol : fkRol,
      state : "A"
    };    
    console.log(user);    
    const response = this.userService.updateUser(user);
    res.status(HttpStatus.OK).json(response);
  }

  @Delete('deleteUser/:idUser')
  public async deleteUser(
    @Request() req,
    @Response() res,
    @Param('idUser') idUser
  ) {
    const users = await this.userService.deleteUser(idUser);
    res.status(HttpStatus.OK).json(users);
  }
}
