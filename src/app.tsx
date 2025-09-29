import { BrowserRouter as Router } from "react-router";
import { AnimatedRoutes } from "./routes";

const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;