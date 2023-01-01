import React from "react";
import { MantineProvider } from "@mantine/core";
import MyRoute from "./Routes/MyRoute";
import Dashboard from "./dashboard/pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyRoute />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<MyRoute />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
