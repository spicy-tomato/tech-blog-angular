import { Status } from 'src/core/data/status';

export interface GenericState<T> {
  data: T;
  status: Status;
  error: string | null;
}
