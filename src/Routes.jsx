import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const CodingAssignment = React.lazy(() => import("pages/CodingAssignment"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          
          <Route path="/codingassignment" element={<CodingAssignment />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
