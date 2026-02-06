export interface Project {
  id: string;
  name: string;
  emoji: string;
  description: string;
  tags: string[];
  privacy: 'private' | 'friends' | 'public';
  milestones: Milestone[];
  createdAt: string;
  updatedAt: string;
}

export interface Milestone {
  id: string;
  name: string;
  order: number;
  status: 'completed' | 'active' | 'pending';
  todos: Todo[];
  completedAt: string | null;
}

export interface Todo {
  id: string;
  text: string;
  done: boolean;
  createdAt: string;
}

export interface GrowthLog {
  id: string;
  projectId: string;
  day: number;
  content: string;
  reactions: Reaction[];
  createdAt: string;
}

export interface Reaction {
  emoji: string;
  count: number;
  users: string[];
}
