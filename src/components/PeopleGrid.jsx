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
              <div className="country-info-container ">
                <span className="person-country">{person.country}</span>
                <CountryFlag countryCode={person.flag} />
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
    <img className="country-flag"
      src={`https://flagcdn.com/w80/${countryCode.toLowerCase()}.png`}
    ></img>
  );
};

export default PeopleGrid;
