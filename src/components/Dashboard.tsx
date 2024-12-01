import React from 'react';
import { users, roles, permissions } from '../data/mockData';
import { Users, Shield, Key } from 'lucide-react';

export function Dashboard() {
  const stats = [
    { title: 'Total Users', value: users.length, icon: Users, color: 'bg-blue-500' },
    { title: 'Total Roles', value: roles.length, icon: Shield, color: 'bg-green-500' },
    { title: 'Total Permissions', value: permissions.length, icon: Key, color: 'bg-purple-500' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white rounded-lg shadow p-6 flex items-center space-x-4"
            >
              <div className={`${stat.color} p-3 rounded-lg`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}