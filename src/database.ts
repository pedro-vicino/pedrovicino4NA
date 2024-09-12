import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://pedro_ae9r_user:3JHOHwo8mImvg8ociQMDBh0J5gEyE0di@dpg-crh1rl5svqrc73871jo0-a.oregon-postgres.render.com/pedro_ae9r';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;