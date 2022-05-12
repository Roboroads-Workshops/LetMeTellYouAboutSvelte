import React, {useState} from 'react';

export function SearchItems(props) {
    const [searchText, setSearchText] = useState("");
    const items = ['svelte', 'vuejs', 'angular', 'react'];
    
    function handleSearchInput(event) {
        setSearchText(event.target.value);
    }
    
    return (
      <div>
          <input
            type="text"
            value={searchText}
            onChange={handleSearchInput}
          />
          <ul>
              {items.map((item) => (
                <li>{item}</li>
              ))}
          </ul>
      </div>
    );
}
