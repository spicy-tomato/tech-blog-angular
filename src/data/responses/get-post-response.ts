export type GetPostResponse = {
  id: string;
  title: string;
  body: string;
  image: string;
  viewCount: number;
  likeCount: number;
  shareCount: number;
  trendingPoint: number;
  createdAt: Date;
  updatedAt: Date;
  user: {
    fullName: string;
    userName: string;
    email: string;
  };
  tags: string[];
};
