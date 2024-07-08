import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function test() {
  const users = await db.user.findMany({
    where: {
      username: {
        contains: "est",
      },
    },
  });
  console.log(users);
  //   const user = await db.user.create({
  //     data: {
  //       username: "test",
  //     },
  //   });
  //   console.log(user);
}

export default db;
