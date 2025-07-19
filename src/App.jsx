import Portfolio from './pages/Portfolio.jsx';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div className="App">
      <Analytics/>
      <Portfolio />
      <SpeedInsights/>
    </div>
  );
}

export default App;
