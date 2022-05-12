import React, {useState} from 'react';

export function SearchItems(props) {
    const [searchText, setSearchText] = useState("");
    const items = ['svelte', 'vuejs', 'angular', 'react'];
    
    function handleSearchInput(event) {
        setSearchText(event.target.value);
    }
    
    function searchItems() {
        return items
          .filter((item) => item.toUpperCase()
            .indexOf(searchText.toUpperCase()) !== -1
          );
    }
    
    return (
      <div>
          <input
            type="text"
            value={searchText}
            onChange={handleSearchInput}
          />
          <ul>
              {searchItems().map((item) => (
                <li>{item}</li>
              ))}
          </ul>
      </div>
    );
}
