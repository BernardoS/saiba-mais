import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import CreatePostPage from './pages/CreatePostPage';
import EditPostPage from './pages/EditPostPage';
import AdminPage from './pages/AdminPage';
import AdminPostDetailPage from './pages/AdminPostDetailPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import GlobalStyles from './styles/globalStyles';
import NewPostPage from './pages/NewPostPage';
import { AuthProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <AuthProvider>
    <GlobalStyles />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/edit/:id" element={<EditPostPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<PrivateRoute><AdminPage /></PrivateRoute>} />
        <Route path="/admin/posts/:id" element={<PrivateRoute><AdminPostDetailPage /></PrivateRoute>} />
        <Route path="/admin/new-post" element={<PrivateRoute><NewPostPage /></PrivateRoute>} />
      </Routes>
    </Router>
    </AuthProvider>
  </React.StrictMode>
);