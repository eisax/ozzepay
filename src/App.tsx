import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import {LoginScreen }from './components/auth/LoginScreen';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from './components/ui/toaster';
import reactLogo from './assets/react.svg';
import NotFound from "./pages/NotFound";
import viteLogo from '/vite.svg';
import { useState } from 'react';
import './App.css';








const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App
