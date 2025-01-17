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

  const createdProfiles = await prisma.profile.createMany({
    data: [
      {
        username: "alicemart",
        profile_content: "Hi, I'm Alice and I'm learning to code now!",
        profile_image: "http://www.dofjadlkfa.jpg",
        user_id: 1,
      },
      {
        username: "HiBobby",
        profile_content: "Hi, I'm Bobby and I love pizza!",
        profile_image: "http://www.dofjadlkfa.jpg",
        user_id: 2,
      },
    ],
  });

  const createdPosts = await prisma.post.createMany({
    data: [
      {
        post_title: "My rainjacket",
        post_content:
          "hahahahahahahahaahahahahahadfsdfjsdlfkjsdlkfjslkdfjskldfjlsdjf",
        isPublished: false,
        post_image: "http://www.dofjadlkfa.jpg",
        user_id: 1,
      },
      {
        post_title: "PIZZA",
        post_content:
          "hahahahahahahahaa yum yum yum sdfjsdlfkjsdlkfjslkdfjskldfjlsdjf",
        isPublished: true,
        user_id: 2,
      },
    ],
  });

  const createdComments = await prisma.comment.createMany({
    data: [
      {
        comment_content: "dlskfjsdlfkjsldkfjsldjsdklfj",
        user_id: 1,
        post_id: 1,
      },
      {
        comment_content: "dlskfjsdlfkjsldkfjsldjsdklfj",
        user_id: 2,
        post_id: 2,
      },
      {
        comment_content: "dlskfjsdlfkjsldkfjsldjsdklfj",
        user_id: 1,
        post_id: 2,
        parent_id: 2,
      },
    ],
  });

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
