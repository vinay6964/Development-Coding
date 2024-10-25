import { Client } from "pg";

const client = new Client({
      port: 5432,
      database: 'postgres',
      user: 'postgres',
      password: 'Vinay@2071',
});

// connection for neon

// const client = new Client({
//   connectionString:
//     "postgresql://Demo_owner:<password>ep-morning-night-a5jmw784-pooler.us-east-2.aws.neon.tech/Demo?sslmode=require",
// });

async function createUserTable() {
  await client.connect();
  const result = await client.query(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log("🚀 ~ createUserTable ~ result:", result);
}

async function createAddressTable () {
    await client.connect();
    const result = await client.query(`
        create table address (
        id serial primary key,
        user_id integer not null,
        address varchar(200) not null,
        pincode integer not null,
        created_at timestamp with time zone default current_timestamp,
        foreign key (user_id) references users(id) on delete cascade
        )
    `)
    console.log("🚀 ~ createAddressTable ~ result:", result.rows[0]);
}

async function insertAddress  (user_id : Number,address : String,pincode : Number) {
    await client.connect();
    const query = 'insert into address (user_id,address,pincode) values ($1,$2,$3)'
    const result = await client.query(query,[user_id,address,pincode])
    console.log("🚀 ~ insertAddress ~ result:", result)
}

async function insertData() {
    await client.connect();
  const insertQuery = (`INSERT INTO users (username,email,password) VALUES ($1,$2,$3)`);
  const values = ['patel','patel@gmail.com','patel@123']
  const result = await client.query(insertQuery,values)
  console.log("🚀 ~ createUserTable ~ result:", result);
}

async function getUserWithAddress () {
   await client.connect();

     try {
        const getCombinedDataQuery = `select u.username, u.email, u.password, a.user_id, a.address, a.pincode from users u join address a on u.id = a.user_id`;
        const result = await client.query(getCombinedDataQuery);
        console.log("🚀 ~ getUserWithAddress ~ result:", result)
     } catch (error) {
        console.log(error);
     }
}

async function findUser (val : string) {
    await client.connect();
  try {
     const query = `select * from users where username like '%' ||  $1 ||  '%' `
     const result = await client.query(query,[val])
     if(result.rows.length){
        console.log("User Found", result.rows[0])
     }
  } catch (error) {
    console.log(error)
  }
}

// createUserTable();
// insertData();
// findUser('tel')
// createAddressTable()
// insertAddress(1,"surat",844101)
getUserWithAddress();
