import "./ProgressBar.css";
import { useSearchParams } from "react-router-dom";

const stepName = ["", "Ticket Selection", "Attendee Details", "Ready"];
const activeBar = [
  "",
  "progress-ticket-selection",
  "progress-attendee-details",
  "progress-ready-ticket",
];

const ProgressBar = () => {
  const [searchParams] = useSearchParams();
  const currentStep = +searchParams.get("step") || 1;

  return (
    <>
      <div className={"progress-bar"}>
        <div className="progress-container-top">
          <h1 className="progress-step-header">{stepName[+currentStep]}</h1>
          <p className="progress-step-text">Step {currentStep}/3</p>
        </div>

        <div className="progress-container-bottom">
          <div className="progress-base-line"></div>
          <div className={`progress-top-line ${activeBar[currentStep]}`}></div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
