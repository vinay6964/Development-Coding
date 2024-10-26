import { PrismaClient } from "@prisma/client";
import { PassThrough } from "stream";

const prisma = new PrismaClient ();

async function insertUser (firstName : string, lastName : string, email : string, password : string) {
  const res = await prisma.user.create({
        data : {
            firstName,
            lastName,
            email,
            password
    },
    select : {
        email : true,
        password : true
    }
})
  console.log("🚀 ~ insertUser ~ res:", res)
}

async function updateUser (email : string, {firstName,lastName} : UpdatedParams) {
    const res = await prisma.user.update({
        where : {
            email
        },
        data : {
            firstName,
            lastName
        },
        select : {
            email : true,
            password : true
        }
    })
    console.log("🚀 ~ updateUser ~ res:", res)
}

async function getUser () {
    const res = await prisma.user.findMany()
    console.log("🚀 ~ getUser ~ res:", res)
}

// insertUser("Vinay","Gupta","vinay@gmail.com","Vinay@3456789");
// insertUser("Patel","Dharmesh","patel@gmails.com","Vinay@3456789");
// updateUser("patel@gmails.com", {firstName : "Shuvam", lastName : "Shaw"});
getUser()


interface UpdatedParams {
    firstName : string;
    lastName : string;
}
