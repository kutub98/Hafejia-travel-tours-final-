import HomePage from '@/Home/HomePage';
import AdminLayout from '@/AdminComponents/AdminLayout/AdminLayout';
import React from 'react';

const AdminPage = () => {
  return (
    <div>
      <title>Admin || Hafejia Travel Tours</title>
    </div>
  );
};

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
