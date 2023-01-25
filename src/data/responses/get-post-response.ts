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
  author: {
    fullName: string;
    userName: string;
    email: string;
    image: string;
  };
  tags: string[];
};
