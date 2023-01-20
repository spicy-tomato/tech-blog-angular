export type UploadCoverImageResponse = {
  fileId: string;
  name: string;
  size: number;
  versionInfo: {
    id: string;
    name: string;
  };
  filePath: string;
  url: string;
  fileType: 'image' | 'non-image';
  height: number;
  width: number;
  thumbnailUrl: string;
  tags: string[] | null;
  aiTags: string[] | null;
  isPrivateFile: boolean;
  customCoordinates: null;
  metadata: null;
  extensionStatus: 'success' | 'failed' | 'pending' | null;
  raw: string;
  httpStatusCode: number;
};
