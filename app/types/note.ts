export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  ownerId: string;
  collaborators?: string[];
};
