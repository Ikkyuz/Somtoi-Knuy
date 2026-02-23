const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Member API',
    description: 'API สำหรับจัดการสมาชิก'
  },
  host: 'localhost:3000',
  schemes: ['http'],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      in: 'header',       // ส่งผ่าน Header
      name: 'Authorization', // ชื่อ Header
      description: 'ใส่ Token ในรูปแบบ: Bearer <your_token>'
    }
  },
  // 2. ใช้ Security กับทุก Endpoint (Optional: ถ้าอยากให้ล็อกทั้งระบบ)
  security: [
    {
      bearerAuth: []
    }
  ]
};

const outputFile = './swagger-output.json';
const routes = ['./src/index.js'];

swaggerAutogen(outputFile, routes, doc);