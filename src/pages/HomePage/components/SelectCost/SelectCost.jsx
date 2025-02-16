import "./SelectCost.css";
import { useSearchParams } from "react-router-dom";
import { storedDataKey } from "../../../../utils/utils";
import { useState } from "react";
import TIcketSelector from "./TIcketSelector";

const SelectCost = () => {
  const [, setSearchParams] = useSearchParams();
  const savedData = localStorage.getItem(storedDataKey);

  const [ticketType, setTicketType] = useState(
    savedData ? savedData.ticketType : "regular"
  );
  const [numberOfTickets, setNumberOfTickets] = useState(
    savedData ? savedData.numberOfTickets : "1"
  );
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;

    
    if (value === "" || /^\d+$/.test(value)) {
      const num = Number(value);

      if (value === "") {
        setNumberOfTickets(value);
        setError(""); 
      } else if (num < 1 || num > 10) {
        setError("Please enter a number between 1 and 10");
      } else {
        setNumberOfTickets(value);
        setError(""); 
      }
    } else {
      setError("Please enter a valid number");
    }
  };

  const goToPageTwo = () => {
    const dataToSave = savedData
      ? {
          ticketType,
          numberOfTickets,
          ...savedData,
        }
      : { ticketType, numberOfTickets };
    localStorage.setItem(storedDataKey, dataToSave);
    setSearchParams({
      step: "2",
    });
  };

  return (
    <>
      <div className={"select-cost"}>
        <div className="event-card">
          <h2 className="event-title">{`Techember Fest "25`}</h2>
          <p className="event-details">
            Join us for an unforgettable experience at
            <br />
            HNG Halo Wars! Secure your spot now.
          </p>
          <p className="event-details">
            📍Osineye, Gbagada || March 15, 2025 | 7:00 PM
          </p>
        </div>

        {/* horizontal line */}
        <div className="horizontal-line" />

        <div className="select-ticket-choice-container">
          <p className="select-ticket-label-text">Select Ticket Type:</p>

          <div className="select-ticket-buttons">
            <TIcketSelector
              cost={"Free"}
              access={"Regular Access"}
              count={"20/52"}
              value={"regular"}
              ticketType={ticketType}
              setTicketType={setTicketType}
            />
            <TIcketSelector
              cost={"$150"}
              access={"VIP Access"}
              count={"35/52"}
              value={"vip"}
              ticketType={ticketType}
              setTicketType={setTicketType}
            />
            <TIcketSelector
              cost={"$200"}
              access={"VVIP Access"}
              count={"50/52"}
              value={"vvip"}
              ticketType={ticketType}
              setTicketType={setTicketType}
            />
          </div>
        </div>

        <div className="select-ticket-count-container">
          <div className="input-label-container">
            <p className="select-number-label-text">Number of Tickets:</p>
            {error && <p className="select-ticket-label-text-error">{error}</p>}
          </div>

          <input
            type="text"
            name="numberOfTicket"
            className="ticket-count-input"
            value={numberOfTickets}
            onChange={handleInputChange}
          />
        </div>

        {/* buttons */}
        <div className="button-group">
          <button
            className="button-outline"
            onClick={() => {
              localStorage.removeItem(storedDataKey);
              window.location.reload();
            }}
          >
            Cancel
          </button>

          <button className="button-fill" onClick={goToPageTwo}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectCost;
