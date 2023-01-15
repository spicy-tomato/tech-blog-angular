import { Status } from 'src/core/data';
import { User } from 'src/data/models';

export interface AppState {
  user: User | null;
  status: Status;
}
