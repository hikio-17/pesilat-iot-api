import { DateType, Model } from './Model';

export enum Role {
   SuperAdmin ='super admin',
   Admin = 'admin',
   User = 'user',
}

export type DefaultUserData = {
   role: Role;
};

export type UserType = {
   id: string;
   nik: string;
   fullname: string;
   phone: string;
   address: string;
   role: Role;
   password: string;
};

const defaultUserData: DefaultUserData = {
   role: Role.User,
}

export class UserModel extends Model {
   static tableName = 'users';

   public static async create<Payload>(data: Payload): Promise<UserType & DateType> {
      return super.insert<Payload & DefaultUserData, UserType>({
         ...data,
         ...defaultUserData
      })
   }

   public static async findByNIK(nik: number): Promise<UserType> {
       return this.findBy<{nik: number}, UserType>({ nik });
   }
}


