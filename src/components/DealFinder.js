import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_AUTHORS = gql`
  query {
    tbl_deal_content (order_by: {id: desc}, limit: 1) {
      id
      price
    }
  }
`;


const DealFinder = () => {
  // Handle the data of GraphQL
  const { loading, error, data } = useQuery(GET_AUTHORS);

  if (loading) return "loading...";
  if (error) return `error: ${error.message}`;

  console.log(data)

  let diunsa = data.tbl_deal_content[0].price.trim( ).split(',')
    console.log(diunsa)
  // Snipet of code for cleanup Data of the Web Scraper
  for( let i = diunsa.length; i--;){
    // First Cleanup Data
    diunsa[i] =
        diunsa[i].replace('"',"")
                  .replace('L',"L.")
                  .replace('.00',"")
                  .replace('.',"")
                  .replace('{', "")
                  .replace('}',"")
        // Second Cleanup of Data
        diunsa[i].replace('"',"")
        diunsa[i].replace('}',"")
        diunsa[i].replace(' ',"")
  }

  // Array with the lowest prices from the request to GraphQL
  let deals = [];
  deals.push(diunsa[0].replace('"',"").replace(/\s/g, ""))
  deals.push(diunsa[1].replace('"',"").replace(/\s/g, ""))
  deals.push(diunsa[2].replace('"',"").replace(/\s/g, ""))
  deals.push(diunsa[3].replace('"',"").replace(/\s/g, ""))
  deals.push(diunsa[4].replace('"',"").replace(/\s/g, ""))
  deals.push(diunsa[5].replace('"',"").replace(/\s/g, ""))
  deals.push(diunsa[6].replace('"',"").replace(/\s/g, ""))
  deals.push(diunsa[7].replace('"',"").replace(/\s/g, ""))
  deals.push(diunsa[8].replace('"',"").replace(/\s/g, ""))



  // Deal finder with Bubble sort of the lowest prices
  function bubble(arr) {
    var len = arr.length;

    for (var i = 0; i < len ; i++) {
      for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        console.log("El valor de arr[j] es " + arr[j])
          if (arr[j] > arr[j + 1]) {
            // swap
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }

      }
    }
    return arr;
  }
  console.log(bubble(deals))


  return (

    <div>
      <h1>Deal Finder Diunsa Honduras</h1>
      {diunsa}

    </div>
  );
};

export default DealFinder;
export { GET_AUTHORS };
