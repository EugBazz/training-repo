import React from 'react';
import { Plus, FolderPlus, Clock, CheckSquare } from 'lucide-react';

interface HeaderProps {
  onAddProject: () => void;
  onAddSprint: () => void;
  onAddTask: () => void;
  canAddSprint: boolean;
  canAddTask: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onAddProject,
  onAddSprint,
  onAddTask,
  canAddSprint,
  canAddTask,
}) => {
  return (
    <header style={{
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '20px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <h1 style={{
          color: 'white',
          margin: 0,
          fontSize: '28px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <CheckSquare size={32} />
          Kanban Board
        </h1>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={onAddProject}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 16px',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <FolderPlus size={16} />
            New Project
          </button>
          
          <button
            onClick={onAddSprint}
            disabled={!canAddSprint}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 16px',
              background: canAddSprint ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
              color: canAddSprint ? 'white' : 'rgba(255, 255, 255, 0.5)',
              border: 'none',
              borderRadius: '8px',
              cursor: canAddSprint ? 'pointer' : 'not-allowed',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (canAddSprint) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }
            }}
            onMouseLeave={(e) => {
              if (canAddSprint) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            <Clock size={16} />
            New Sprint
          </button>
          
          <button
            onClick={onAddTask}
            disabled={!canAddTask}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 16px',
              background: canAddTask ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
              color: canAddTask ? 'white' : 'rgba(255, 255, 255, 0.5)',
              border: 'none',
              borderRadius: '8px',
              cursor: canAddTask ? 'pointer' : 'not-allowed',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (canAddTask) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }
            }}
            onMouseLeave={(e) => {
              if (canAddTask) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            <Plus size={16} />
            New Task
          </button>
        </div>
      </div>
    </header>
  );
}; 