import "./TicketReady.css";
import { useSearchParams } from "react-router-dom";

const TicketReady = () => {
  const [, setSearchParams] = useSearchParams();

  return (
    <>
      <div className={"ticket-ready"}>
        <p>Your ticket is booked</p>

        <button
          onClick={() => {
            setSearchParams({
              step: "1",
            });
          }}
        >
          Book Another Ticket
        </button>
      </div>
    </>
  );
};

export default TicketReady;
