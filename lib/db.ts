import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function test() {
  //   const user = await db.user.create({
  //     data: {
  //       username: "test",
  //     },
  //   });
  //   console.log(user);
  // const users = await db.user.findMany({
  //   where: {
  //     username: {
  //       contains: "est",
  //     },
  //   },
  // });
  // console.log(users);
  // const token = await db.sMSToken.create({
  //   data: {
  //     token: "fjweo",
  //     user: {
  //       connect: {
  //         id: 1,
  //       },
  //     },
  //   },
  // });
  // console.log(token);
  const token = await db.sMSToken.findUnique({
    where: {
      id: 1,
    },
  });
  console.log(token);
}

export default db;
