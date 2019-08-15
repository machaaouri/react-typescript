import * as React from "react";

export const Countries = () => {

    console.log(searchCountryByName('Den'));
    return <div>Countries</div>
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