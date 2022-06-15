import { NativeRouter, Routes, Route, Navigate } from "react-router-native";
import React from "react";
import routes from "../routes/routes";

const MainContainer = () => {
  return (
    <NativeRouter>
      <Routes>
        {routes.map(({ name, path, Component }) => (
          <Route key={name} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </NativeRouter>
  );
};

export default MainContainer;
