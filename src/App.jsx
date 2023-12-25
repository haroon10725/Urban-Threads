import Error404 from './pages/errors/404';

import Payment from './pages/Payment';
import ProductOverview from "./pages/ProductOverview"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/products/:productUUID" element={<ProductOverview />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
}

export default App;
