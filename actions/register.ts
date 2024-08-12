"use server";

import * as z from 'zod'
import { RegisterSchema } from '@/schemas';
import bcryptjs from 'bcryptjs';
import { db } from '@/lib/db';

import { getUserByEmail } from '@/data/user';


const register = async (values:z.infer<typeof RegisterSchema>) => {
  console.log(values);
  const validatedFields = RegisterSchema.safeParse(values);
  if(!validatedFields.success){
    return {error:"Invalid fields"};
  }
  const {email,password,name} = validatedFields.data;
  const hashedPassword = await bcryptjs.hash(password, 10);
  const existingUser = await getUserByEmail(email);
  if(existingUser){
    return {error:"User already exists"};
  }
  const user = await db.user.create({
    data:{
      email,
      password:hashedPassword,
      name
    }
  });
  const getUsers = await db.user.findMany();
  return {success:"Email sent"};
}

export default register