import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";


import Home from "../pages/Standard/Home";
import Login from "../pages/Standard/Login";
import Dashboard from "../pages/Standard/Dashboard";
import NotFound from "../pages/Standard/NotFound";

// Clients
import Clients from "../pages/Clients/Clients";
import ClientDetail from "../pages/Clients/ClientDetail";

// Alarms
import Alarms from "../pages/Alarm/Alarms";
import AlarmDetail from "../pages/Alarm/AlarmDetail";

// OB Logs
import ObLogs from "../pages/OBLogs/ObLogs";
import ObLogDetail from "../pages/OBLogs/ObLogDetail";

// Sites
import Sites from "../pages/Sites/Sites";
import SiteDetail from "../pages/Sites/SiteDetail";

// Guards
import Guards from "../pages/Guards/Guards";
import GuardDetail from "../pages/Guards/GuardDetail";

// Vehicles
import Vehicles from "../pages/Vehicles/Vehicles";
import VehicleDetail from "../pages/Vehicles/VehicleDetail";

// AI Calls
import AiCalls from "../pages/AiCalls/AiCalls";
import AiCallDetail from "../pages/AiCalls/AiCallDetail";

// Users
import Users from "../pages/Users/Users";
import UserDetail from "../pages/Users/UserDetail";

// Dispatches
import Dispatches from "../pages/Dispatches/Dispatches";
import DispatchDetail from "../pages/Dispatches/DispatchDetail";

export default function AppRoutes() {
  return (
     <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />

      {/* Protected with Layout */}
      <Route
        path="/"
        element={
          <AppLayout>
            <Dashboard />
          </AppLayout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <AppLayout>
            <Dashboard />
          </AppLayout>
        }
      />

      <Route
        path="/clients"
        element={
          <AppLayout>
            <Clients />
          </AppLayout>
        }
      />
      <Route
        path="/clients/:id"
        element={
          <AppLayout>
            <ClientDetail />
          </AppLayout>
        }
      />

      <Route
        path="/alarms"
        element={
          <AppLayout>
            <Alarms />
          </AppLayout>
        }
      />
      <Route
        path="/alarms/:id"
        element={
          <AppLayout>
            <AlarmDetail />
          </AppLayout>
        }
      />

      <Route
        path="/ob-logs"
        element={
          <AppLayout>
            <OBLogs />
          </AppLayout>
        }
      />
      <Route
        path="/ob-logs/:id"
        element={
          <AppLayout>
            <OBLogDetail />
          </AppLayout>
        }
      />

      <Route
        path="/sites"
        element={
          <AppLayout>
            <Sites />
          </AppLayout>
        }
      />
      <Route
        path="/sites/:id"
        element={
          <AppLayout>
            <SiteDetail />
          </AppLayout>
        }
      />

      <Route
        path="/guards"
        element={
          <AppLayout>
            <Guards />
          </AppLayout>
        }
      />
      <Route
        path="/guards/:id"
        element={
          <AppLayout>
            <GuardDetail />
          </AppLayout>
        }
      />

      <Route
        path="/vehicles"
        element={
          <AppLayout>
            <Vehicles />
          </AppLayout>
        }
      />
      <Route
        path="/vehicles/:id"
        element={
          <AppLayout>
            <VehicleDetail />
          </AppLayout>
        }
      />

      <Route
        path="/ai-calls"
        element={
          <AppLayout>
            <AICalls />
          </AppLayout>
        }
      />
      <Route
        path="/ai-calls/:id"
        element={
          <AppLayout>
            <AICallDetail />
          </AppLayout>
        }
      />

      <Route
        path="/users"
        element={
          <AppLayout>
            <Users />
          </AppLayout>
        }
      />
      <Route
        path="/users/:id"
        element={
          <AppLayout>
            <UserDetail />
          </AppLayout>
        }
      />

      <Route
        path="/dispatches"
        element={
          <AppLayout>
            <Dispatches />
          </AppLayout>
        }
      />
      <Route
        path="/dispatches/:id"
        element={
          <AppLayout>
            <DispatchDetail />
          </AppLayout>
        }
      />
    </Routes>
  );
}
