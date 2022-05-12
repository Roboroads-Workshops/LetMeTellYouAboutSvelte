import React from 'react';

export function SearchItems(props) {
    const items = ['svelte', 'vuejs', 'angular', 'react'];
    
    return (
      <div>
          <input type="text" />
          <ul>
              {items.map((item) => (
                <li>{item}</li>
              ))}
          </ul>
      </div>
    );
}
