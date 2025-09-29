import { BrowserRouter as Router } from "react-router";
import { AnimatedRoutes } from "./routes";

const App = () => {
  return (
    <Router basename="/ecommerce-site">
      <AnimatedRoutes />
    </Router>
  );
}

export default App;