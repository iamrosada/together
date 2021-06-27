import { Entity } from "typeorm";

@Entity('users')
class User{
  id: string ;
  
  name: string;

  email: string;

  admin: string;

  created_at: Date;

  updated_at: Date;
  
}
export {User}