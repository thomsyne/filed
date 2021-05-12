import { UserModel } from './../core/models/user.model';

export interface UserState {
  readonly user: UserModel;
}