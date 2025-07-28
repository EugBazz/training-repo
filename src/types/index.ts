export interface Project {
  id: string;
  name: string;
  description: string;
  color: string;
  createdAt: Date;
}

export interface Sprint {
  id: string;
  name: string;
  description: string;
  projectId: string;
  startDate: Date;
  endDate: Date;
  status: SprintStatus;
  goal: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  assignee?: string;
  sprintId: string;
  projectId: string;
  storyPoints?: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type SprintStatus = 'planning' | 'active' | 'completed' | 'cancelled';

export type TaskStatus = 'todo' | 'in-progress' | 'review' | 'done';

export type Priority = 'low' | 'medium' | 'high' | 'urgent';

export interface KanbanColumn {
  id: TaskStatus;
  title: string;
  color: string;
}

export interface DragEndEvent {
  active: {
    id: string;
    data: {
      current: {
        type: string;
        task?: Task;
      };
    };
  };
  over: {
    id: string;
    data: {
      current: {
        type: string;
        accepts?: string[];
      };
    };
  } | null;
}

export interface AppState {
  projects: Project[];
  sprints: Sprint[];
  tasks: Task[];
  selectedProjectId: string | null;
  selectedSprintId: string | null;
  showProjectModal: boolean;
  showSprintModal: boolean;
  showTaskModal: boolean;
} 