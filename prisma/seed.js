const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      {
        username: "alicemart",
        email: "alicemartin@hahaha.com",
        birthday: "1997-07-16T19:20:30.451Z",
        country: "England",
      },
      {
        username: "HiBobby",
        email: "hibobby@hahaha.com",
        birthday: "1997-07-16T19:20:30.451Z",
        country: "Scottland",
      },
    ],
  });

  console.log(`${createdUsers.count} users created`, createdUsers);

  // Add your code here

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
