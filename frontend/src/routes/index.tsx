import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import ProtectedRoute from './ProtectedRoute';
import type { ReactNode } from 'react';

import Login from "../pages/Common/Login";
import Dashboard from "../pages/Common/Dashboard";
import NotFound from "../pages/Common/NotFound";

import Clients from "../pages/Clients/Clients";
import ClientDetail from "../pages/Clients/ClientDetail";
import NewClient from "../pages/Clients/newClient";

import Alarms from "../pages/Alarm/Alarms";
import AlarmDetail from "../pages/Alarm/AlarmDetail";
import NewAlarm from "../pages/Alarm/newAlarm";

import OBLogs from "../pages/OBLogs/OBLogs";
import OBLogDetail from "../pages/OBLogs/OBLogDetail";
import NewOBLog from "../pages/OBLogs/newOBLog";

import Sites from "../pages/Sites/Sites";
import SiteDetail from "../pages/Sites/SiteDetail";
import NewSite from "../pages/Sites/newSite";

import Guards from "../pages/Guards/Guards";
import GuardDetail from "../pages/Guards/GuardDetail";
import NewGuard from "../pages/Guards/newGuard";

import Vehicles from "../pages/Vehicles/Vehicles";
import VehicleDetail from "../pages/Vehicles/VehicleDetail";
import NewVehicle from "../pages/Vehicles/newVehicle";

import AiCalls from "../pages/AiCalls/AiCalls";
import AiCallDetail from "../pages/AiCalls/AiCallDetail";
import NewAiCall from "../pages/AiCalls/newAiCall";

import Users from "../pages/Users/Users";
import UserDetail from "../pages/Users/UserDetail";
import NewUser from "../pages/Users/newUser";

import Dispatches from "../pages/Dispatches/Dispatches";
import DispatchDetail from "../pages/Dispatches/DispatchDetail";
import NewDispatch from "../pages/Dispatches/newDispatch";

import Settings from "../pages/Common/Settings";

const Protected = ({ children }: { children: ReactNode }) => (
  <ProtectedRoute>
    <AppLayout>{children}</AppLayout>
  </ProtectedRoute>
);
export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />

      {/* Protected */}
      <Route path="/" element={<Protected><Dashboard /></Protected>} />

      <Route path="/clients" element={<Protected><Clients /></Protected>} />
      <Route path="/clients/new" element={<Protected><NewClient /></Protected>} />
      <Route path="/clients/:id" element={<Protected><ClientDetail /></Protected>} />

      <Route path="/alarms" element={<Protected><Alarms /></Protected>} />
      <Route path="/alarms/new" element={<Protected><NewAlarm /></Protected>} />
      <Route path="/alarms/:id" element={<Protected><AlarmDetail /></Protected>} />

      <Route path="/OBlogs" element={<Protected><OBLogs /></Protected>} />
      <Route path="/OBlogs/new" element={<Protected><NewOBLog /></Protected>} />
      <Route path="/OBlogs/:id" element={<Protected><OBLogDetail /></Protected>} />

      <Route path="/sites" element={<Protected><Sites /></Protected>} />
      <Route path="/sites/new" element={<Protected><NewSite /></Protected>} />
      <Route path="/sites/:id" element={<Protected><SiteDetail /></Protected>} />

      <Route path="/guards" element={<Protected><Guards /></Protected>} />
      <Route path="/guards/new" element={<Protected><NewGuard /></Protected>} />
      <Route path="/guards/:id" element={<Protected><GuardDetail /></Protected>} />

      <Route path="/vehicles" element={<Protected><Vehicles /></Protected>} />
      <Route path="/vehicles/new" element={<Protected><NewVehicle /></Protected>} />
      <Route path="/vehicles/:id" element={<Protected><VehicleDetail /></Protected>} />

      <Route path="/ai-calls" element={<Protected><AiCalls /></Protected>} />
      <Route path="/ai-calls/new" element={<Protected><NewAiCall /></Protected>} />
      <Route path="/ai-calls/:id" element={<Protected><AiCallDetail /></Protected>} />

      <Route path="/users" element={<Protected><Users /></Protected>} />
      <Route path="/users/new" element={<Protected><NewUser /></Protected>} />
      <Route path="/users/:id" element={<Protected><UserDetail /></Protected>} />

      <Route path="/dispatches" element={<Protected><Dispatches /></Protected>} />
      <Route path="/dispatches/new" element={<Protected><NewDispatch /></Protected>} />
      <Route path="/dispatches/:id" element={<Protected><DispatchDetail /></Protected>} />

      <Route path="/settings" element={<Protected><Settings /></Protected>} />
    </Routes>
  );
}