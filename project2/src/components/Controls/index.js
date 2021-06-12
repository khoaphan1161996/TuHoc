import { useState } from "react";

import Search from '../Search'
import Sort from '../Sort'

function Controls() {
  return (
    <div className="row mt-15">
      {/* Search */}
        <Search />
      {/* Sort */}
        <Sort />
    </div>
  );
}

export default Controls;
