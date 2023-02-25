import { useEffect, useState } from "react";

const City = () => {

  const bcCities = ["Abbotsford", "Armstrong", "Burnaby", "Campbell River", "Castlegar", "Chilliwack", "Colwood", "Coquitlam", "Courtenay", "Cranbrook", "Dawson Creek", "Delta", "Duncan", "Enderby", "Fernie", "Fort St. John", "Grand Forks", "Greenwood", "Kamloops", "Kelowna", "Kimberley",  "Langford",  "Langley",  "Maple Ridge", "Merritt",  "Mission",  "Nanaimo",  "Nelson",  "New Westminster",  "North Vancouver",  "Parksville", "Penticton", "Pitt Meadows", "Port Alberni", "Port Coquitlam", "Port Moody", "Powell River", "Prince George", "Prince Rupert", "Quesnel", "Revelstoke", "Richmond", "Rossland", "Salmon Arm", "Surrey", "Terrace	Terrace", "Trail", "Vancouver", "Vernon", "Victoria", "West Kelowna", "White Rock", "Williams Lake"];
  const [cities, setCities] = useState([...bcCities]);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  useEffect(() => {
    const newCities = bcCities.filter(row => {
      return (row.slice(0, value.length).toLowerCase() === value.toLowerCase())
    })
    setCities(newCities);
  }, [value]);

  return (
    <div className="search-list">
      <input
        value={value}
        onChange={handleChange}
      />
      {cities.length ?
        cities.map((row, index) => {
          return (
            <div className="city" key={index}>
              {row}
            </div>
          )
        })
        :
        <div className="city"> No Result </div>
      }
    </div>
  )
}

export default City;



