const { spawn } = require('child_process');
const path = require('path');
const open = require('open'); // você pode precisar instalar: npm install open

// 1. Caminho para o servidor standalone do Next
const serverPath = path.join(__dirname, '.next/standalone/server.js');

// 2. Inicia o servidor Next.js
const server = spawn('node', [serverPath], {
    stdio: 'inherit',
    env: { ...process.env, PORT: 3000 }
});

console.log("Servidor iniciando em http://localhost:3000...");