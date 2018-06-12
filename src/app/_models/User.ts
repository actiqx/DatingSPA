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
  interests?: string;
  introduction?: string;
  lookingFor?: string;
  photos?: Photo[];
}
