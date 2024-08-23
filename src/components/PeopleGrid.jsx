import { top_grid_people } from "../constants";

const PeopleGrid = () => {
  return (
    <div className="people-grid">
      {top_grid_people.map((person) => {
        return (
          <div key={person.image} className="people-grid-item">
            <img src={person.image} />
            <div className="person-info-container">
              <span className="person-name">{person.name}</span>
              <div>
                <span className="person-country">{person.country}</span>
                <CountryFlag countryCode='us' />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CountryFlag = ({ countryCode }) => {
    return (
      <span
        className={`flag-icon flag-icon-${countryCode.toLowerCase()}`}
        data-country-code={countryCode}
      ></span>
    );
  };

export default PeopleGrid;
