import { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Chat = () => {
  const { user } = useContext(AuthContext);

  return <>{user ? <p>Ini adalah halaman chat</p> : <Navigate to={'/login'} />}</>;
};

export default Chat;
