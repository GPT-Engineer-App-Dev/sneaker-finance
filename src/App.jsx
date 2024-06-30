import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddTransaction from "./pages/AddTransaction.jsx";
import ViewTransactions from "./pages/ViewTransactions.jsx";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner.jsx";

import SharedLayout from "./components/layouts/navbar.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
          <Router>
            <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<Index />} />
                <Route path="add-transaction" element={<AddTransaction />} />
                <Route path="view-transactions" element={<ViewTransactions />} />
              </Route>
            </Routes>
          </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;