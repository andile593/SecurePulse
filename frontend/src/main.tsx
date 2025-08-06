import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const QueryClient = newryClient;

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={new QueryClient}>
      <App />
    </QueryClientProvider>
      
  </BrowserRouter>
);
