export type UsersProps = {
  address: any;
  company: any;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

export type UserListItemProps = Pick<
  UsersProps,
  "name" | "username" | "phone" | "address" | 'id'
>;
