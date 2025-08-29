# Contributing to Kanban Board

Thank you for your interest in contributing to the Kanban Board project! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

Before creating a new issue, please:

1. **Search existing issues** to avoid duplicates
2. **Use the issue template** (if available)
3. **Provide clear reproduction steps** for bugs
4. **Include relevant details**:
   - Browser and version
   - Operating system
   - Node.js version
   - Steps to reproduce
   - Expected vs actual behavior

### Suggesting Features

When suggesting new features:

1. **Check existing feature requests** first
2. **Explain the use case** and why it would be valuable
3. **Provide mockups or examples** if applicable
4. **Consider the scope** - start with smaller, focused features

## 🛠️ Development Setup

### Prerequisites

- Node.js 16+ 
- npm or yarn
- Git

### Local Development

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/training-repo.git
   cd training-repo
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open** `http://localhost:3000` in your browser

### Making Changes

1. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the coding standards below

3. **Test your changes** thoroughly:
   ```bash
   npm run build  # Ensure it builds successfully
   ```

4. **Commit your changes** with a clear message:
   ```bash
   git commit -m "Add: new feature description"
   ```

## 📝 Coding Standards

### TypeScript

- **Use TypeScript** for all new code
- **Define proper interfaces** for all data structures
- **Avoid `any` type** - use specific types instead
- **Export interfaces** from `src/types/index.ts`

### React Components

- **Use functional components** with hooks
- **Define prop interfaces** for all components
- **Use meaningful component names** in PascalCase
- **Keep components focused** - one responsibility per component

### Code Style

- **Use 2 spaces** for indentation
- **Use single quotes** for strings
- **End statements with semicolons**
- **Use meaningful variable names**
- **Add comments** for complex logic

### File Organization

```
src/
├── components/          # Reusable UI components
├── types/              # TypeScript type definitions
├── utils/              # Utility functions (if needed)
└── hooks/              # Custom React hooks (if needed)
```

## 🧪 Testing Guidelines

### Manual Testing

Before submitting a PR, test:

- **All CRUD operations** (Create, Read, Update, Delete)
- **Drag and drop functionality** across all columns
- **Modal interactions** (open, close, submit)
- **Responsive design** on different screen sizes
- **Browser compatibility** (Chrome, Firefox, Safari)

### Future Testing

We plan to add automated testing with:
- Jest for unit tests
- React Testing Library for component tests
- Cypress for end-to-end tests

## 📋 Pull Request Process

### Before Submitting

1. **Ensure your code follows** the coding standards
2. **Test your changes** thoroughly
3. **Update documentation** if needed
4. **Keep PRs focused** - one feature/fix per PR

### PR Description

Include in your PR description:

- **Summary** of changes made
- **Issue number** (if applicable): "Fixes #123"
- **Testing done** to verify the changes
- **Screenshots** for UI changes
- **Breaking changes** (if any)

### Review Process

1. **Maintainer review** - code quality, functionality, design
2. **Testing verification** - manual testing of changes
3. **Documentation review** - ensure docs are updated
4. **Approval and merge** - once all checks pass

## 🎨 UI/UX Guidelines

### Design Principles

- **Consistency** - follow existing patterns
- **Accessibility** - ensure keyboard navigation works
- **Responsiveness** - test on mobile and desktop
- **Performance** - avoid unnecessary re-renders

### Visual Style

- **Glassmorphism theme** - semi-transparent elements with blur
- **Purple gradient background** - maintain the existing color scheme
- **White text** with appropriate opacity levels
- **Rounded corners** (12px border-radius)
- **Smooth transitions** for interactive elements

## 🐛 Bug Fix Guidelines

### Bug Report Investigation

1. **Reproduce the issue** locally
2. **Identify root cause** - trace through the code
3. **Consider edge cases** that might be affected
4. **Test the fix** thoroughly

### Fix Implementation

1. **Minimal changes** - fix only what's necessary
2. **Preserve existing functionality** - don't break other features
3. **Add safeguards** to prevent similar issues
4. **Document the fix** in commit messages

## 📚 Documentation

### When to Update Docs

- **New features** - update README.md and relevant docs
- **API changes** - update component interfaces
- **Setup changes** - update installation instructions
- **Breaking changes** - clear migration guide

### Documentation Style

- **Clear headings** with appropriate hierarchy
- **Code examples** for complex features
- **Step-by-step instructions** for processes
- **Screenshots** for UI changes

## 🏷️ Commit Message Guidelines

### Format

```
Type: Brief description

Longer description if needed explaining what and why,
not how (the code shows how).
```

### Types

- **Add:** New features
- **Fix:** Bug fixes
- **Update:** Modifications to existing features
- **Remove:** Removing code or features
- **Refactor:** Code restructuring without functional changes
- **Docs:** Documentation updates
- **Style:** Code formatting, no functional changes

### Examples

```
Add: drag and drop functionality for task reordering

Implement @dnd-kit integration to allow users to drag tasks
between kanban columns and reorder within columns.

Fix: modal backdrop not blocking clicks

Update modal overlay z-index and add pointer-events to
prevent interaction with background elements.
```

## 🤔 Questions?

If you have questions about contributing:

1. **Check existing documentation** first
2. **Search closed issues** for similar questions
3. **Open a new issue** with the "question" label
4. **Join community discussions** (if available)

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing! Every contribution, no matter how small, helps make this project better. 🚀
