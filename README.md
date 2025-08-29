# Kanban Board - Project Management Tool

A modern, feature-rich kanban board application built with React and TypeScript for managing projects, sprints, and tasks. Features a beautiful glassmorphism UI design with drag-and-drop functionality.

![Kanban Board](https://img.shields.io/badge/React-18.2.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue.svg)
![Vite](https://img.shields.io/badge/Vite-4.4.5-purple.svg)

## ✨ Features

- 📊 **Three-tier Organization**: Projects → Sprints → Tasks hierarchy
- 🎯 **Kanban Board**: Visual task management with 4 columns (To Do, In Progress, Review, Done)
- 🎨 **Modern UI**: Glassmorphism design with gradient backgrounds
- 🖱️ **Drag & Drop**: Intuitive task movement between columns using @dnd-kit
- 🏷️ **Task Management**: Priority levels, story points, assignees, and tags
- 📅 **Sprint Management**: Active sprint tracking with goals and timelines
- 🎨 **Project Customization**: Custom colors and descriptions for projects
- 📱 **Responsive Design**: Works seamlessly across different screen sizes

## 🛠️ Technologies Used

- **Frontend Framework**: React 18.2.0 with TypeScript
- **Build Tool**: Vite 4.4.5
- **Drag & Drop**: @dnd-kit (core, sortable, utilities)
- **Icons**: Lucide React
- **Styling**: Inline styles with CSS-in-JS approach
- **UUID Generation**: uuid library for unique identifiers

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd training-repo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running the Application

1. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   npm start
   ```

2. **Open your browser**
   Navigate to `http://localhost:3000` (the browser should open automatically)

### Building for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production assets.

### Preview Production Build balablbalbla

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Top navigation with action buttons
│   ├── KanbanBoard.tsx     # Main kanban board with columns
│   ├── ProjectModal.tsx    # Modal for creating/editing projects
│   ├── ProjectSelector.tsx # Dropdown for selecting projects
│   ├── SprintModal.tsx     # Modal for creating/editing sprints
│   ├── SprintSelector.tsx  # Dropdown for selecting sprints
│   └── TaskCard.tsx        # Individual task card component
├── types/
│   └── index.ts            # TypeScript type definitions
├── App.tsx                 # Main application component
└── main.tsx               # Application entry point
```

## 🎮 How to Use

### Creating a New Project

1. Click the **"+ Project"** button in the header
2. Fill in the project details:
   - Name
   - Description
   - Color (for visual identification)
3. Click **"Create Project"**

### Creating a Sprint

1. Select a project from the project dropdown
2. Click the **"+ Sprint"** button in the header
3. Fill in sprint details:
   - Name
   - Description
   - Start and end dates
   - Sprint goal
   - Status (planning, active, completed, cancelled)
4. Click **"Create Sprint"**

### Adding Tasks

1. Select both a project and sprint
2. Click the **"+ Task"** button in the header
3. Fill in task details:
   - Title and description
   - Priority level (low, medium, high, urgent)
   - Assignee (optional)
   - Story points (optional)
   - Tags for categorization
4. Click **"Create Task"**

### Managing Tasks

- **Move Tasks**: Drag and drop tasks between columns (To Do → In Progress → Review → Done)
- **View Details**: Each task card shows priority, assignee, story points, and tags
- **Track Progress**: Column headers show the count of tasks in each status

## 🎨 UI Features

- **Glassmorphism Design**: Semi-transparent elements with backdrop blur effects
- **Gradient Background**: Beautiful purple-blue gradient background
- **Responsive Grid**: Kanban columns automatically adjust to screen size
- **Visual Feedback**: Hover states and drag previews for better UX
- **Color Coding**: Projects have custom colors for easy identification

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Alternative to npm run dev

### Code Structure

The application follows a component-based architecture with:

- **State Management**: React useState for local state management
- **Type Safety**: Full TypeScript coverage for all components and data structures
- **Modular Components**: Reusable components with clear prop interfaces
- **Custom Hooks**: Utilizing React hooks for state and side effects

### Sample Data

The application comes with pre-loaded sample data including:
- 2 sample projects ("E-commerce Platform" and "Mobile App")
- 2 sample sprints for the first project
- 4 sample tasks distributed across different kanban columns

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Known Issues

- Tasks are stored in local state and will reset on page refresh
- No persistence layer (consider adding localStorage or database integration)
- No user authentication or multi-user support

## 🚧 Future Enhancements

- [ ] Data persistence (localStorage/database)
- [ ] User authentication and authorization
- [ ] Task comments and activity history
- [ ] Time tracking and reporting
- [ ] Sprint burndown charts
- [ ] Export functionality
- [ ] Dark/light theme toggle
- [ ] Advanced filtering and search
- [ ] Email notifications
- [ ] Mobile app version

## 📞 Support

If you encounter any issues or have questions, please open an issue in the repository or contact the development team.

---

Built with ❤️ using React, TypeScript, and modern web technologies.
