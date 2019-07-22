import { Pool, PoolClient, ConnectionConfig } from "pg";

export const DatabaseProvider = {
  provide: 'dbconnection',
  useFactory: async (config): Promise<ConnectionConfig> => {
    console.log(config);//Para saber si cargaron o no cargaron las variables de entorno .ENV

    return await new Pool(config.db) as PoolClient;
  },
  inject: ['config']
};