import { Get, Controller, Request, Response, HttpStatus, Post, Body, Param, Delete } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('parques')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get('getAll')
  public async getLocations(
    @Request() req,
    @Response() res
  ) {
    const locations = await this.locationService.getLocations();
    res.status(HttpStatus.OK).json(locations);
  }

  @Get('getParques')
  public async getParques(
    @Request() req,
    @Response() res
  ) {
    const park = await this.locationService.getParques();
    res.status(HttpStatus.OK).json(park);
  }

  @Get('getDepartaments')
  public async getDepartaments(
    @Request() req,
    @Response() res
  ) {
    const depart = await this.locationService.getDepartamentos();
    res.status(HttpStatus.OK).json(depart);
  }


  @Get('getVolcano')
  public async getVolcano(
    @Request() req,
    @Response() res
  ) {
    const volcanes = await this.locationService.getVolcanes();
    res.status(HttpStatus.OK).json(volcanes);
  }

  @Post('createLocation')
  public async createLocation(
    @Request() req, 
    @Response() res, 
    @Body('latitude') latitude,
    @Body('longitude') longitude,
  ){
   // const response = this.locationService.createUser(user);
  //  res.status(HttpStatus.OK).json(response);
  }

}
