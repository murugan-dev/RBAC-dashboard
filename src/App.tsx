import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { UserList } from './components/UserList';
import { RoleList } from './components/RoleList';
import { PermissionList } from './components/PermissionList';
import { Dashboard } from './components/Dashboard';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <UserList />;
      case 'roles':
        return <RoleList />;
      case 'permissions':
        return <PermissionList />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}

export default App;