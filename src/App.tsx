import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import LiveMap from "./pages/LiveMap";
import BloodPassport from "./pages/BloodPassport";
import Gamification from "./pages/Gamification";
import Emergency from "./pages/Emergency";
import CorridorMap from "./pages/CorridorMap";
import VehicleStatus from "./pages/VehicleStatus";
import Simulations from "./pages/Simulations";
import ProjectInfo from "./pages/ProjectInfo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><ProjectInfo /></Layout>} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/live-map" element={<Layout><LiveMap /></Layout>} />
          <Route path="/blood-passport" element={<Layout><BloodPassport /></Layout>} />
          <Route path="/gamification" element={<Layout><Gamification /></Layout>} />
          <Route path="/emergency" element={<Layout><Emergency /></Layout>} />
          <Route path="/corridor-map" element={<Layout><CorridorMap /></Layout>} />
          <Route path="/vehicle-status" element={<Layout><VehicleStatus /></Layout>} />
          <Route path="/simulations" element={<Layout><Simulations /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
