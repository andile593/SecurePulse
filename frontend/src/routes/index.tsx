import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import ProtectedRoute from './ProtectedRoute';

<Route path="/dashboard" element={
<ProtectedRoute>
  <Dashboard />
  </ProtectedRoute>} 
  />


import Login from "../pages/Common/Login";
import Dashboard from "../pages/Common/Dashboard";
import NotFound from "../pages/Common/NotFound";

// Clients
import Clients from "../pages/Clients/Clients";
import ClientDetail from "../pages/Clients/ClientDetail";
import NewClient from "../pages/Clients/newClient";

// Alarms
import Alarms from "../pages/Alarm/Alarms";
import AlarmDetail from "../pages/Alarm/AlarmDetail";
import NewAlarm from "../pages/Alarm/newAlarm";

// OB Logs
import OBLogs from "../pages/OBLogs/OBLogs";
import OBLogDetail from "../pages/OBLogs/OBLogDetail";
import NewOBLog from "../pages/OBLogs/newOBLog";

// Sites
import Sites from "../pages/Sites/Sites";
import SiteDetail from "../pages/Sites/SiteDetail";
import NewSite from "../pages/Sites/newSite";

// Guards
import Guards from "../pages/Guards/Guards";
import GuardDetail from "../pages/Guards/GuardDetail";
import NewGuard from "../pages/Guards/newGuard";

// Vehicles
import Vehicles from "../pages/Vehicles/Vehicles";
import VehicleDetail from "../pages/Vehicles/VehicleDetail";
import NewVehicle from "../pages/Vehicles/newVehicle";

// AI Calls
import AiCalls from "../pages/AiCalls/AiCalls";
import AiCallDetail from "../pages/AiCalls/AiCallDetail";
import NewAiCall from "../pages/AiCalls/newAiCall";

// Users
import Users from "../pages/Users/Users";
import UserDetail from "../pages/Users/UserDetail";
import NewUser from "../pages/Users/newUser";

// Dispatches
import Dispatches from "../pages/Dispatches/Dispatches";
import DispatchDetail from "../pages/Dispatches/DispatchDetail";
import NewDispatch from "../pages/Dispatches/DispatchDetail";

export default function AppRoutes() {
  return (
     <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />

      <Route
        path="/"
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
       <Route path="/clients/new" element={
        <AppLayout>
          <NewClient />
        </AppLayout>
       } />

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

       <Route path="/alarms/new" element={
        <AppLayout>
          <NewAlarm />
        </AppLayout>
       } />
       
      <Route
        path="/OBlogs"
        element={
          <AppLayout>
            <OBLogs />
          </AppLayout>
        }
      />
      <Route
        path="/OBlogs/:id"
        element={
          <AppLayout>
            <OBLogDetail />
          </AppLayout>
        }
      />
       <Route path="/OBlogs/new" element={
        <AppLayout>
          <NewOBLog />
        </AppLayout>
       } />

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
       <Route path="/sites/new" element={
        <AppLayout>
          <NewSite />
        </AppLayout>
       } />

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
       <Route path="/guards/new" element={
        <AppLayout>
          <NewGuard />
        </AppLayout>
       } />


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
       <Route path="/vehicles/new" element={
        <AppLayout>
          <NewVehicle />
        </AppLayout>
       } />

      <Route
        path="/ai-calls"
        element={
          <AppLayout>
            <AiCalls />
          </AppLayout>
        }
      />
      <Route
        path="/ai-calls/:id"
        element={
          <AppLayout>
            <AiCallDetail />
          </AppLayout>
        }
      />
       <Route path="/ai-calls/new" element={
        <AppLayout>
          <NewAiCall />
        </AppLayout>
       } />

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
      <Route path="/users/new" element={
        <AppLayout>
          <NewUser />
        </AppLayout>
      } />

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
       <Route path="/dispatches/new" element={
        <AppLayout>
          <NewDispatch />
        </AppLayout>
       } />
    </Routes>
  );
}
