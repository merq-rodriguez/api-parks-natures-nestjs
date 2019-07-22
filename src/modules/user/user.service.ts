import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { User } from './I-user';

@Injectable()
export class UserService {
  constructor(
    @Inject('dbconnection') private readonly connection
  ) { }

/*   public getUsers(){
    return new Promise((resolve, reject) => {
      this.connection.query('SELECT * FROM user', (err, result) => {
        console.log(result);
        return !err 
          ? resolve({ 'result' : result.rows[0].row_to_json })
          : reject(new BadRequestException(err.stack)) 
      })
    })
  } */

  async  getUsers(){
   const query = await  this.connection.query('SELECT ST_AsGeoJSON(point) AS geojson FROM geoprogram_schema.location');
   return await query.rows
  }

  public findUser(idUser : number){
    return new Promise((resolve, reject) => {
      this.connection.query('SELECT * FROM user WHERE idUser = ?',idUser ,(err, result) => {
        return !err 
          ? resolve({ 'result' : result })
          : reject(new BadRequestException(err.message))
      })
    })
  }

  public deleteUser(idUser : number){
    return new Promise((resolve, reject) => {
      this.connection.query('DELETE FROM user WHERE idUser = ?',idUser ,(err, result) => {
        return !err 
          ? resolve({ 'message' : 'Deleted User' })
          : reject(new BadRequestException(err.message))
      })
    })
  }

  public createUser(user : User) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        'INSERT INTO user(username, password, fkRol) VALUES(?,?,?)',
        [user.username, user.password, user.fkRol],
        (err, result) => {
          return !err
            ? resolve({ 'message': 'Registered User' })
            : reject(new BadRequestException(err.message))
        })
    })
  }


  public updateUser(user : User) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        'INSERT INTO user(username, password, fkRol) VALUES(?,?,?)',
        [user.username, user.password, user.fkRol],
        (err, result) => {
          return !err
            ? resolve({ 'message': 'Updated User' })
            : reject(new BadRequestException(err.message))
        })
    })
  }
}
