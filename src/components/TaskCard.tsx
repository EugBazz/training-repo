import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Task } from '../types';
import { User, Clock, AlertCircle, Flag } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  isDragging?: boolean;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, isDragging = false }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: task.id,
    data: {
      type: 'task',
      task,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return '#10b981';
      case 'medium': return '#f59e0b';
      case 'high': return '#ef4444';
      case 'urgent': return '#dc2626';
      default: return '#6b7280';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'urgent': return AlertCircle;
      default: return Flag;
    }
  };

  const PriorityIcon = getPriorityIcon(task.priority);

  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '8px',
        padding: '16px',
        cursor: 'grab',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.2s ease',
      }}
      {...attributes}
      {...listeners}
      onMouseEnter={(e) => {
        if (!isDragging) {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isDragging) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
        <h4 style={{
          margin: 0,
          fontSize: '14px',
          fontWeight: '600',
          color: '#1f2937',
          lineHeight: '1.4',
          flex: 1,
        }}>
          {task.title}
        </h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginLeft: '8px' }}>
          <PriorityIcon 
            size={14} 
            style={{ color: getPriorityColor(task.priority) }}
          />
        </div>
      </div>

      {task.description && (
        <p style={{
          margin: '0 0 12px 0',
          fontSize: '12px',
          color: '#6b7280',
          lineHeight: '1.4',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {task.description}
        </p>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        {task.assignee && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '11px',
            color: '#6b7280',
          }}>
            <User size={12} />
            <span>{task.assignee}</span>
          </div>
        )}
        
        {task.storyPoints && (
          <div style={{
            background: '#e5e7eb',
            color: '#374151',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '10px',
            fontWeight: '600',
          }}>
            {task.storyPoints} SP
          </div>
        )}
      </div>

      {task.tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '8px' }}>
          {task.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              style={{
                background: '#dbeafe',
                color: '#1e40af',
                padding: '2px 6px',
                borderRadius: '4px',
                fontSize: '10px',
                fontWeight: '500',
              }}
            >
              {tag}
            </span>
          ))}
          {task.tags.length > 3 && (
            <span style={{
              color: '#6b7280',
              fontSize: '10px',
              padding: '2px 4px',
            }}>
              +{task.tags.length - 3}
            </span>
          )}
        </div>
      )}

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        fontSize: '10px',
        color: '#9ca3af',
      }}>
        <Clock size={10} />
        <span>Updated {task.updatedAt.toLocaleDateString()}</span>
      </div>
    </div>
  );
}; 