import "./TIcketSelector.css";
import PropTypes from "prop-types";

const TIcketSelector = ({
  cost,
  access,
  count,
  value,
  setTicketType,
  ticketType,
}) => {
  const isSelected = ticketType === value;

  return (
    <div
      className={`tIcket-selector ${
        isSelected ? "ticket-selected" : "ticket-idle"
      }`}
      onClick={() => setTicketType(value)}
    >
      <p className="ticket-selector-cost">{cost}</p>
      <p className="ticket-selector-access">{access}</p>
      <p className="ticket-selector-count">{count}</p>
    </div>
  );
};

TIcketSelector.propTypes = {
  cost: PropTypes.string.isRequired,
  access: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  setTicketType: PropTypes.func.isRequired,
  ticketType: PropTypes.string.isRequired,
};

export default TIcketSelector;
