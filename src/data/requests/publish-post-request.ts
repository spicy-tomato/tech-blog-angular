import { PostMode } from 'src/data/models';

export type PublishPostRequest = {
  image?: string;
  title?: string;
  tags?: string[];
  body?: string;
  mode: PostMode;
};
