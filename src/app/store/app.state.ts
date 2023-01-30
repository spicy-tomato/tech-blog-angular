import { ResponsiveSize, Status } from 'src/core/data';
import { UserSummary } from 'src/data/models';

export interface AppState {
  user: UserSummary | null;
  status: Status;
  screenSize: ResponsiveSize;
}
