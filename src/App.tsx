import './App.css'
import { Routes, Route } from "react-router";
import LoginPage from './Login/LoginPage';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Stor from './Components/Stor/Stor';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Sku from './Components/SKU/Sku';
import ChartsComp from './Components/Charts/ChartsComp';
import Planning from './Components/Planning/Planning';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

function App() {
  

  return (
    <>
     <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="store" element={
            <ProtectedRoute>
              <Stor/>
        </ProtectedRoute>} />
          <Route path="sku" element={
            <ProtectedRoute>
              <Sku/>
        </ProtectedRoute>} />

          <Route path="charts" element={
            <ProtectedRoute>
              <ChartsComp/>
        </ProtectedRoute>} />
        
          <Route path="planning" element={
            <ProtectedRoute>
              <Planning/>
        </ProtectedRoute>} />


        <Route path="*" element={<PageNotFound />} />
     </Routes>
    </>
  )
}

export default App
