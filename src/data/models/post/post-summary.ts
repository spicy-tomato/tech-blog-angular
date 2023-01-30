import { UserSummary } from 'src/data/models/user';

export type PostSummary = {
  id: string;
  title: string;
  image?: string;
  likeCount: number;
  createdAt: Date;
  author: UserSummary;
  tags: string[];

  // TODO
  reactionsCount: number;
  commentsCount: number;
  timeToRead: number;
};
