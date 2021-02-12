export interface Actor {
  _id: string;
  fullName: string;
  imageUrl: string;
  biography: string;
  gender: string;
  owner?: boolean;
}
