export interface ProjectData {
  id: number;
  name: string;
}

export interface TaskData {
  id: number;
  title: string;
  completed: boolean;
  project_id: number;
}

export const projects: ProjectData[] = [{ id: 1, name: "Learn graphql" }];

export const tasks: TaskData[] = [
  { id: 1, title: "Install Node", completed: true, project_id: 1 },
  { id: 2, title: "Fake it till you make it", completed: false, project_id: 1 },
];
