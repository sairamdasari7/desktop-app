import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Desktop1 from './components/Desktop1';
import Desktop2 from './components/Desktop2';
import Desktop3 from './components/Desktop3';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Desktop1 />} />
      <Route path="/desktop1" element={<Desktop1 />} />
      <Route path="/desktop2" element={<Desktop2 />} />
      <Route path="/desktop3" element={<Desktop3 />} />
    </Routes>
  </Router>
);

export default App;
