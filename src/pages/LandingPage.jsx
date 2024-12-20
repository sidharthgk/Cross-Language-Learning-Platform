import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1 className="landing-page-title">Cross Language Learning Platform</h1>
      <div className="landing-page-content">
        <div className="mode-card" onClick={() => navigate("/scratch-mode")}>
          <h2>Scratch Mode</h2>
          <p>Learn a new programming language from scratch with interactive lessons and exercises!</p>
        </div>
        <div className="mode-card" onClick={() => navigate("/comparison-mode")}>
          <h2>Comparison Mode</h2>
          <p>Compare programming languages side by side to learn faster and understand better.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
