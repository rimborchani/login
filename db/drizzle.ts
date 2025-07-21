import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import 'dotenv/config';

// 🔥 Import de ton schema généré
import * as schema from './schema'; // adapte le chemin selon ton projet

if (!process.env.NEON_DATABASE_DRL) {
  throw new Error('❌ DATABASE_URL is not set in .env');
}

// Création du client Neon
const sql = neon(process.env.NEON_DATABASE_DRL);

// Typage du db avec ton schema
export const db = drizzle(sql, { schema });
