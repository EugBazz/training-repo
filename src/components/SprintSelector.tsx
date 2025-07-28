import React from 'react';
import { Sprint } from '../types';
import { Clock, ChevronDown } from 'lucide-react';

interface SprintSelectorProps {
  sprints: Sprint[];
  selectedSprintId: string | null;
  onSelectSprint: (sprintId: string) => void;
}

export const SprintSelector: React.FC<SprintSelectorProps> = ({
  sprints,
  selectedSprintId,
  onSelectSprint,
}) => {
  const selectedSprint = sprints.find(s => s.id === selectedSprintId);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return '#10b981';
      case 'planning': return '#f59e0b';
      case 'completed': return '#6b7280';
      case 'cancelled': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <div style={{ position: 'relative', minWidth: '200px' }}>
      <label style={{ 
        display: 'block', 
        color: 'rgba(255, 255, 255, 0.9)', 
        fontSize: '14px', 
        fontWeight: '500',
        marginBottom: '8px' 
      }}>
        Sprint
      </label>
      <div style={{ position: 'relative' }}>
        <select
          value={selectedSprintId || ''}
          onChange={(e) => onSelectSprint(e.target.value)}
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
            Select a sprint...
          </option>
          {sprints.map((sprint) => (
            <option 
              key={sprint.id} 
              value={sprint.id}
              style={{ background: '#1a1a1a', color: 'white' }}
            >
              {sprint.name} ({sprint.status})
            </option>
          ))}
        </select>
        
        <Clock 
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
      
      {selectedSprint && (
        <div style={{
          marginTop: '8px',
          padding: '8px 12px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '6px',
          fontSize: '12px',
          color: 'rgba(255, 255, 255, 0.7)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <div 
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: getStatusColor(selectedSprint.status),
              }}
            />
            <span style={{ textTransform: 'capitalize' }}>{selectedSprint.status}</span>
          </div>
          <div>{selectedSprint.description}</div>
          <div style={{ marginTop: '4px', fontSize: '11px', opacity: 0.8 }}>
            Goal: {selectedSprint.goal}
          </div>
        </div>
      )}
    </div>
  );
}; 