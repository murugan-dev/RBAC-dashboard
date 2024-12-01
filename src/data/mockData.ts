import { User, Role, Permission } from '../types';

export const permissions: Permission[] = [
  { id: '1', name: 'read', description: 'Can view resources' },
  { id: '2', name: 'write', description: 'Can create and edit resources' },
  { id: '3', name: 'delete', description: 'Can delete resources' },
];

export const roles: Role[] = [
  { id: '1', name: 'Admin', permissions: permissions },
  { id: '2', name: 'Editor', permissions: [permissions[0], permissions[1]] },
  { id: '3', name: 'Viewer', permissions: [permissions[0]] },
];

export const users: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: roles[0], status: 'active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: roles[1], status: 'active' },
  { id: '3', name: 'Bob Wilson', email: 'bob@example.com', role: roles[2], status: 'inactive' },
];