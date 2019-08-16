import * as React from "react";
import { useState, useEffect } from "react";

export const Countries = () => {

  // Search country name
  const [name, setName] = useState('');
  // API search results
  const [results, setResults] = useState<Country[]>([]);
  // Searching status (whether there is pending API request)
  const [isSearching, setIsSearching] = useState(false);

  // Debounce search name so that it only gives us latest value ...
  // if name has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // so that we aren't hitting our API rapidly.
  const debouncedSearchName = useDebounce(name, 500);

  useEffect(
    () => {
      if (debouncedSearchName) {
        setIsSearching(true);
        searchCountryByName(debouncedSearchName).then(results => {
          setIsSearching(false);
          setResults(results);
        });
      } else {
        setResults([]);
      }
    },
    [debouncedSearchName] // Only call effect if debounced search term changes
  );


  return (
    <div>
      <input
        placeholder="Search Country by name"
        onChange={e => setName(e.target.value)}
      />
  
      {isSearching && <div>Searching ...</div>}

      {results.map(result => (
        <div key={result.alpha2Code} className="country">
          <img src={result.flag} className="flag" />
          <label>{result.name}</label> 
        </div>
      ))}
    </div>
  );

}


const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
        () => 
            {
                const handler = setTimeout(() => {
                    setDebouncedValue(value);
                }, delay);

            // Cancel the timeout if value changes
            // This is how we prevent debounced value from updating if value is changed ...
            // .. within the delay period. Timeout gets cleared and restarted.
            return () => {
                clearTimeout(handler);
            };
            }, [value, delay] // Only re-call effect if value or delay changes
    )
    return debouncedValue;
}

// 
type Country = {
    name: string,
    alpha2Code: string,
    flag: string
}

// Convert server response 
const toCountry = (response: any[]) => {
    let countries : Country[] = [];
    for (let r of response) countries.push({name: r.name,
                                            alpha2Code: r.alpha2Code, 
                                            flag: r.flag});
    return countries;
};

// Api search function
const searchCountryByName = (name: string) => {
    return fetch('https://restcountries.eu/rest/v2/name/' + name,
    {
        method: 'GET'
    })
    .then(r => r.json())
    .then(r => toCountry(r))
    .catch(error => {
        console.error(error);
        return [];
    });
}