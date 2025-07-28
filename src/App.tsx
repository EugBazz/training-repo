import React, { useState, useEffect } from 'react';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';
import { Project, Sprint, Task, TaskStatus, AppState } from './types';
import { KanbanBoard } from './components/KanbanBoard';
import { ProjectSelector } from './components/ProjectSelector';
import { SprintSelector } from './components/SprintSelector';
import { Header } from './components/Header';
import { TaskCard } from './components/TaskCard';
import { ProjectModal } from './components/ProjectModal';
import { SprintModal } from './components/SprintModal';
import { TaskModal } from './components/TaskModal';

const KANBAN_COLUMNS = [
  { id: 'todo' as TaskStatus, title: 'To Do', color: '#e2e8f0' },
  { id: 'in-progress' as TaskStatus, title: 'In Progress', color: '#fef3c7' },
  { id: 'review' as TaskStatus, title: 'Review', color: '#fde68a' },
  { id: 'done' as TaskStatus, title: 'Done', color: '#d1fae5' },
];

// Sample data
const initialProjects: Project[] = [
  {
    id: uuidv4(),
    name: 'E-commerce Platform',
    description: 'Building a modern e-commerce platform',
    color: '#3b82f6',
    createdAt: new Date(),
  },
  {
    id: uuidv4(),
    name: 'Mobile App',
    description: 'Cross-platform mobile application',
    color: '#10b981',
    createdAt: new Date(),
  },
];

function App() {
  const [state, setState] = useState<AppState>({
    projects: initialProjects,
    sprints: [],
    tasks: [],
    selectedProjectId: initialProjects[0]?.id || null,
    selectedSprintId: null,
    showProjectModal: false,
    showSprintModal: false,
    showTaskModal: false,
  });

  const [activeTask, setActiveTask] = useState<Task | null>(null);

  // Initialize with sample sprints and tasks when projects are loaded
  useEffect(() => {
    if (state.projects.length > 0 && state.sprints.length === 0) {
      const sampleSprints: Sprint[] = [
        {
          id: uuidv4(),
          name: 'Sprint 1: Foundation',
          description: 'Setting up the basic infrastructure',
          projectId: state.projects[0].id,
          startDate: new Date(),
          endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
          status: 'active',
          goal: 'Establish project foundation and core features',
        },
        {
          id: uuidv4(),
          name: 'Sprint 2: Core Features',
          description: 'Implementing main application features',
          projectId: state.projects[0].id,
          startDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
          endDate: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000),
          status: 'planning',
          goal: 'Complete core functionality',
        },
      ];

      const sampleTasks: Task[] = [
        {
          id: uuidv4(),
          title: 'Set up project structure',
          description: 'Initialize the project with proper folder structure and configuration',
          status: 'done',
          priority: 'high',
          assignee: 'John Doe',
          sprintId: sampleSprints[0].id,
          projectId: state.projects[0].id,
          storyPoints: 3,
          tags: ['setup', 'infrastructure'],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          title: 'Design database schema',
          description: 'Create the database schema for the application',
          status: 'in-progress',
          priority: 'high',
          assignee: 'Jane Smith',
          sprintId: sampleSprints[0].id,
          projectId: state.projects[0].id,
          storyPoints: 5,
          tags: ['database', 'design'],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          title: 'Implement user authentication',
          description: 'Add login and registration functionality',
          status: 'todo',
          priority: 'medium',
          sprintId: sampleSprints[0].id,
          projectId: state.projects[0].id,
          storyPoints: 8,
          tags: ['auth', 'security'],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          title: 'Create responsive UI components',
          description: 'Build reusable UI components for the application',
          status: 'review',
          priority: 'medium',
          assignee: 'Mike Johnson',
          sprintId: sampleSprints[0].id,
          projectId: state.projects[0].id,
          storyPoints: 13,
          tags: ['ui', 'components'],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      setState(prev => ({
        ...prev,
        sprints: sampleSprints,
        tasks: sampleTasks,
        selectedSprintId: sampleSprints[0].id,
      }));
    }
  }, [state.projects]);

  const handleDragStart = (event: DragStartEvent) => {
    const task = state.tasks.find(t => t.id === event.active.id);
    setActiveTask(task || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as TaskStatus;

    if (KANBAN_COLUMNS.some(col => col.id === newStatus)) {
      setState(prev => ({
        ...prev,
        tasks: prev.tasks.map(task =>
          task.id === taskId
            ? { ...task, status: newStatus, updatedAt: new Date() }
            : task
        ),
      }));
    }
  };

  const addProject = (project: Omit<Project, 'id' | 'createdAt'>) => {
    const newProject: Project = {
      ...project,
      id: uuidv4(),
      createdAt: new Date(),
    };
    setState(prev => ({
      ...prev,
      projects: [...prev.projects, newProject],
      selectedProjectId: newProject.id,
      showProjectModal: false,
    }));
  };

  const addSprint = (sprint: Omit<Sprint, 'id'>) => {
    const newSprint: Sprint = {
      ...sprint,
      id: uuidv4(),
    };
    setState(prev => ({
      ...prev,
      sprints: [...prev.sprints, newSprint],
      selectedSprintId: newSprint.id,
      showSprintModal: false,
    }));
  };

  const addTask = (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTask: Task = {
      ...task,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setState(prev => ({
      ...prev,
      tasks: [...prev.tasks, newTask],
      showTaskModal: false,
    }));
  };

  const selectedProject = state.projects.find(p => p.id === state.selectedProjectId);
  const selectedSprint = state.sprints.find(s => s.id === state.selectedSprintId);
  const projectSprints = state.sprints.filter(s => s.projectId === state.selectedProjectId);
  const sprintTasks = state.tasks.filter(t => t.sprintId === state.selectedSprintId);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <Header
          onAddProject={() => setState(prev => ({ ...prev, showProjectModal: true }))}
          onAddSprint={() => setState(prev => ({ ...prev, showSprintModal: true }))}
          onAddTask={() => setState(prev => ({ ...prev, showTaskModal: true }))}
          canAddSprint={!!state.selectedProjectId}
          canAddTask={!!state.selectedSprintId}
        />
        
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
            <ProjectSelector
              projects={state.projects}
              selectedProjectId={state.selectedProjectId}
              onSelectProject={(projectId) => setState(prev => ({
                ...prev,
                selectedProjectId: projectId,
                selectedSprintId: null,
              }))}
            />
            
            {state.selectedProjectId && (
              <SprintSelector
                sprints={projectSprints}
                selectedSprintId={state.selectedSprintId}
                onSelectSprint={(sprintId) => setState(prev => ({
                  ...prev,
                  selectedSprintId: sprintId,
                }))}
              />
            )}
          </div>

          {selectedProject && selectedSprint && (
            <div style={{ marginBottom: '20px', padding: '20px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
              <h2 style={{ color: 'white', margin: '0 0 10px 0', fontSize: '24px' }}>
                {selectedProject.name} - {selectedSprint.name}
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: '0', fontSize: '16px' }}>
                {selectedSprint.description}
              </p>
              <div style={{ marginTop: '10px', display: 'flex', gap: '20px', color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
                <span>Goal: {selectedSprint.goal}</span>
                <span>Status: {selectedSprint.status}</span>
                <span>Tasks: {sprintTasks.length}</span>
              </div>
            </div>
          )}

          {state.selectedSprintId ? (
            <KanbanBoard
              columns={KANBAN_COLUMNS}
              tasks={sprintTasks}
            />
          ) : (
            <div style={{ 
              textAlign: 'center', 
              padding: '60px 20px', 
              color: 'white',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '24px' }}>
                {state.selectedProjectId ? 'Select a Sprint' : 'Select a Project'}
              </h3>
              <p style={{ margin: '0', opacity: 0.8, fontSize: '16px' }}>
                {state.selectedProjectId 
                  ? 'Choose a sprint to view and manage its tasks on the kanban board.'
                  : 'Choose a project to get started with sprint and task management.'
                }
              </p>
            </div>
          )}
        </div>

        <DragOverlay>
          {activeTask && <TaskCard task={activeTask} isDragging />}
        </DragOverlay>

        {state.showProjectModal && (
          <ProjectModal
            onClose={() => setState(prev => ({ ...prev, showProjectModal: false }))}
            onSave={addProject}
          />
        )}

        {state.showSprintModal && state.selectedProjectId && (
          <SprintModal
            projectId={state.selectedProjectId}
            onClose={() => setState(prev => ({ ...prev, showSprintModal: false }))}
            onSave={addSprint}
          />
        )}

        {state.showTaskModal && state.selectedSprintId && state.selectedProjectId && (
          <TaskModal
            projectId={state.selectedProjectId}
            sprintId={state.selectedSprintId}
            onClose={() => setState(prev => ({ ...prev, showTaskModal: false }))}
            onSave={addTask}
          />
        )}
      </DndContext>
    </div>
  );
}

export default App; 