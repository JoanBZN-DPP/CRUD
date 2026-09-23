# LAB CRUD -Backend

Backend pedagógico con Express, MySQL, bycrypt, JWT y roles `admin` / `cliente`.

## 1. Base de datos

Ejecuta `..sql/lab_crud.sql` en MySQL.

## 2. Variables de entorno

copia:

`.env.example` → `.env`

y completa las credenciales de MySQL y `JWT_SECRET`.

## 3. Instalar

```bash
npm run dev
```
API:  `http://localhost:3000`

## Rutas

Públicas:
- GET `/api/equipos`
- GET `/api/equipos/:id`
- POST `/api/equipos`
- POST `/api/equipos/:id`
- DELETE `/api/equipos/:id` - solo `admin`

## Flujo pedagógico

Registro → bcrypt.hash → MySQL → login → bcrypt.compare → JWT → middleware → autorización por rol → CRUD