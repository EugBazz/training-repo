import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Task, KanbanColumn } from '../types';
import { TaskCard } from './TaskCard';

interface KanbanBoardProps {
  columns: KanbanColumn[];
  tasks: Task[];
}

interface ColumnProps {
  column: KanbanColumn;
  tasks: Task[];
}

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  const columnTasks = tasks.filter(task => task.status === column.id);

  return (
    <div
      ref={setNodeRef}
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        padding: '16px',
        minHeight: '500px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '8px',
      }}>
        <h3 style={{
          color: 'white',
          margin: 0,
          fontSize: '16px',
          fontWeight: '600',
        }}>
          {column.title}
        </h3>
        <span style={{
          background: 'rgba(255, 255, 255, 0.2)',
          color: 'white',
          padding: '2px 8px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '500',
        }}>
          {columnTasks.length}
        </span>
      </div>

      <SortableContext
        items={columnTasks.map(task => task.id)}
        strategy={verticalListSortingStrategy}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {columnTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </SortableContext>

      {columnTasks.length === 0 && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100px',
          color: 'rgba(255, 255, 255, 0.5)',
          fontSize: '14px',
          fontStyle: 'italic',
          border: '2px dashed rgba(255, 255, 255, 0.2)',
          borderRadius: '8px',
          textAlign: 'center',
        }}>
          Drop tasks here
        </div>
      )}
    </div>
  );
};

export const KanbanBoard: React.FC<KanbanBoardProps> = ({ columns, tasks }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      padding: '20px 0',
    }}>
      {columns.map((column) => (
        <Column key={column.id} column={column} tasks={tasks} />
      ))}
    </div>
  );
}; 