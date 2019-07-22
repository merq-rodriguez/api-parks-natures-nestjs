import { Injectable, Inject, BadRequestException } from '@nestjs/common';

@Injectable()
export class LocationService {
  constructor( @Inject('dbconnection') private readonly connection) { }



  async  getLocations(){
   try {
      const query = await  this.connection.query(
        `SELECT row_to_json(fc)
        FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features
        FROM (SELECT 'Feature' As type
           , ST_AsGeoJSON(lg.point)::json As geometry
           , row_to_json((SELECT l FROM (SELECT idLocation) As l
             )) As properties
          FROM geoprogram_schema.location As lg   ) As f )  As fc;`
      );
      return await query.rows
   } catch (error) {
     return error;
   }
  }

  async  getParques(){
   try {
      const query = await  this.connection.query(
        `SELECT row_to_json(fc)
        FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features
        FROM (SELECT 'Feature' As type
           , ST_AsGeoJSON(lg.geom)::json As geometry
           , row_to_json((SELECT l FROM (SELECT nombre) As l
             )) As properties
          FROM parques As lg   ) As f )  As fc;`
      );
      return await query.rows[0].row_to_json
   } catch (error) {
     return error;
   }
  }
  async  getLagunas(){
   try {
      const query = await  this.connection.query(
        `SELECT row_to_json(fc)
        FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features
        FROM (SELECT 'Feature' As type
           , ST_AsGeoJSON(lg.geom)::json As geometry
           , row_to_json((SELECT l FROM (SELECT nombre_geo) As l
             )) As properties
          FROM laguna As lg   ) As f )  As fc`
      );
      console.log(query);
      return await query.rows[0].row_to_json;
   } catch (error) {
     return error;
   }
  }


  async  getDepartamentos(){
   try {
      const query = await  this.connection.query(
        `SELECT row_to_json(fc)
        FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features
        FROM (SELECT 'Feature' As type
           , ST_AsGeoJSON(lg.geom)::json As geometry
           , row_to_json((SELECT l FROM (SELECT depto) As l
             )) As properties
          FROM servicios_departamentos As lg   ) As f )  As fc;`
      );
      return await query.rows[0].row_to_json
   } catch (error) {
     return error;
   }
  }

  async  getVolcanes(){
   try {
      const query = await  this.connection.query(
        `SELECT row_to_json(fc)
        FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features
        FROM (SELECT 'Feature' As type
           , ST_AsGeoJSON(lg.geom)::json As geometry
           , row_to_json((SELECT l FROM (SELECT nombrevolc) As l
             )) As properties
          FROM volcanes As lg   ) As f )  As fc;`
      );
      return await query.rows[0].row_to_json
   } catch (error) {
     return error;
   }
  }
 

  public createLocation() {
    return new Promise((resolve, reject) => {
      this.connection.query(
        '',
        (err, result) => {
          return !err
            ? resolve({ 'message': 'Registered Location' })
            : reject(new BadRequestException(err.message))
        })
    })
  }

}
