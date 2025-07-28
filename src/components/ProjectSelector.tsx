import React from 'react';
import { Project } from '../types';
import { Folder, ChevronDown } from 'lucide-react';

interface ProjectSelectorProps {
  projects: Project[];
  selectedProjectId: string | null;
  onSelectProject: (projectId: string) => void;
}

export const ProjectSelector: React.FC<ProjectSelectorProps> = ({
  projects,
  selectedProjectId,
  onSelectProject,
}) => {
  const selectedProject = projects.find(p => p.id === selectedProjectId);

  return (
    <div style={{ position: 'relative', minWidth: '200px' }}>
      <label style={{ 
        display: 'block', 
        color: 'rgba(255, 255, 255, 0.9)', 
        fontSize: '14px', 
        fontWeight: '500',
        marginBottom: '8px' 
      }}>
        Project
      </label>
      <div style={{ position: 'relative' }}>
        <select
          value={selectedProjectId || ''}
          onChange={(e) => onSelectProject(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 40px 12px 40px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '8px',
            color: 'white',
            fontSize: '14px',
            appearance: 'none',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
          }}
        >
          <option value="" style={{ background: '#1a1a1a', color: 'white' }}>
            Select a project...
          </option>
          {projects.map((project) => (
            <option 
              key={project.id} 
              value={project.id}
              style={{ background: '#1a1a1a', color: 'white' }}
            >
              {project.name}
            </option>
          ))}
        </select>
        
        <Folder 
          size={16} 
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'rgba(255, 255, 255, 0.7)',
            pointerEvents: 'none',
          }}
        />
        
        <ChevronDown 
          size={16} 
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'rgba(255, 255, 255, 0.7)',
            pointerEvents: 'none',
          }}
        />
      </div>
      
      {selectedProject && (
        <div style={{
          marginTop: '8px',
          padding: '8px 12px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '6px',
          fontSize: '12px',
          color: 'rgba(255, 255, 255, 0.7)',
        }}>
          {selectedProject.description}
        </div>
      )}
    </div>
  );
}; 