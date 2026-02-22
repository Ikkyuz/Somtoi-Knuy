const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Hotel Management API',
    description: 'ระบบจัดการห้องพัก หอพัก (CRUD Rooms, Booking, Auth)',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/index.js']; // ชี้ไปที่จุดเริ่มต้นของแอปเพื่อสแกน Routes ทั้งหมด

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log('Swagger output file generated successfully');
});
