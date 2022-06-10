import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, filteredPets, filters}) {
  return <div className="ui cards">
          <Pet pets={pets} filteredPets={filteredPets} filters={filters}/>
        </div>;
}

export default PetBrowser;
