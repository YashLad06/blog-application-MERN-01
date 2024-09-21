import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import MyBlogs from "./pages/MyBlogs";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import './App.css';
import UserContextProvider from './context/UserContext';

export default function App() {
  return (

    <>
      {/* <h1 className="text-3xl text-red-800 font-bold underline">
        Hello world!
      </h1> */}
      <UserContextProvider>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/write" element={<CreatePost />} />
        <Route exact path="/Post/post/:id" element={<PostDetails />} />
        <Route exact path="/edit/:id" element={<EditPost />} />
        <Route exact path="/my-blogs/:id" element={<MyBlogs />} />
        <Route exact path="/profile/:id" element={<Profile />} />
      </Routes>
      </UserContextProvider>
    </>
  )
}
