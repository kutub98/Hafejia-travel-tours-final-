import Rootlayout from '@/Layout/Rootlayout';
import LoginCard from '@/UI/Login';
import React from 'react';

const Login = () => {
  return (
    <div className="container mx-auto">
      <LoginCard />
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <Rootlayout>{page}</Rootlayout>;
};
