import express from 'express';
import prisma from './services/prisma';
const app = express();
const port = 3000;

app.get('/', (_req: express.Request, res: express.Response) => {
  res.send('Hello World!')
})

app.get('/users', async (_req: express.Request, res: express.Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

async function main() {
  await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: '123456',
      role: 'admin',
    },
  });

  console.log('User created');
}

main();
