import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return <><div className="routing-activity-container">
    <BrowserRouter>
      <CustomerSidebar />
      <AdminSidebar />
      <MainContent />
    </BrowserRouter>
  </div>
  </>
}

export default App;
