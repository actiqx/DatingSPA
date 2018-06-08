import { Photo } from './Photo';

export interface User {
  id: number;
  username: string;
  knownAs: string;
  age: string;
  gender: string;
  creted: Date;
  lastactive: Date;
  photoUrl: string;
  city: string;
  country: string;
  interest?: string;
  introduction?: string;
  lookingfor?: string;
  photos?: Photo[];
}
