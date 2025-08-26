# Homily API
**Version:** 1.0.0  
**Node.js recomendado:** v22.16.0 (64-bit)

API sencilla para manejar homilías, construida con **TypeScript** y **Express**.

## Descripción

Este proyecto es una API REST básica que permite manejar homilías. Está construida con **Node.js**, **Express** y **TypeScript**, y se ejecuta en modo desarrollo usando `ts-node-dev`.

## Tecnologías

- Node.js
- TypeScript
- Express
- dotenv

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/JuanLaspiur/Homily_API
   cd homily-api

npm install
PORT=3000
npm run dev

homily-api/
├─ src/
│  ├─ app.ts        
│  └─ domain/ 
|  └─ infrastructure/
|  └─ presentation/ 
|  └─ config/ 
├─ package.json
├─ tsconfig.json
└─ .env

