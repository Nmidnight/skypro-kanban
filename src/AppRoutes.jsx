import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { MainPage } from "./pages/MainPage";
import { PrivateRoute } from "./pages/PrivateRoute"
import { SignupPage } from "./pages/SignupPage";
import { SigninPage } from "./pages/SigninPage";
import { LogOut } from "./pages/LogOut";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CardPage } from "./pages/CardPage";
import { AddTask } from "./pages/AddTask";

export function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);


  return (
    <Routes>
      <Route path="/register" element={<SignupPage />} />
      <Route path="/login" element={<SigninPage setIsAuth={setIsAuth} />} />
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/exit" element={<LogOut setIsAuth={setIsAuth} />} />
        <Route path="/card/:id" element={<CardPage mode="view" />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/edit-card/:id" element={<CardPage mode="edit" />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
