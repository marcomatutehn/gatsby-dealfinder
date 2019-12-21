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

  let string2 = data.tbl_deal_content[0].price.trim( ).split(',')

  // Snipet of code for cleanup Data of the Web Scraper
  for( let i = string2.length-1; i--;){
    // First Cleanup Data
    string2[i] =
        string2[i].replace('"',"")
                  .replace('L',"")
                  .replace('.00',"")
                  .replace('.',"")
                  .replace('{', "")
        // Second Cleanup of Data
        string2[i].replace('"',"")
        string2[i].replace('}',"")
        string2[i].replace(' ',"")
  }

  // Array with the lowest prices from the request to GraphQL
  let deals = [];
  deals.push(string2[0].replace('"',"").replace(/\s/g, ""))
  deals.push(string2[1].replace('"',"").replace(/\s/g, ""))
  deals.push(string2[2].replace('"',"").replace(/\s/g, ""))
  deals.push(string2[3].replace('"',"").replace(/\s/g, ""))
  deals.push(string2[4].replace('"',"").replace(/\s/g, ""))
  deals.push(string2[5].replace('"',"").replace(/\s/g, ""))
  deals.push(string2[6].replace('"',"").replace(/\s/g, ""))
  deals.push(string2[7].replace('"',"").replace(/\s/g, ""))
  deals.push(string2[8].replace('"',"").replace(/\s/g, ""))



  // Deal finder with Bubble sort of the lowest prices
  function bubble(arr) {
    var len = arr.length;

    for (var i = 0; i < len ; i++) {
      for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        console.log("El valor de arr[j] es " + arr[j])
        if (arr[j] > 100) {
          if (arr[j] > arr[j + 1]) {
            // swap
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
    }
    return arr;
  }
  console.log(bubble(deals))


  return (

    <div>
      <h1>Data without processing</h1>
      {string2}

      <h2>The best deals: </h2>

      <p>L. {deals[0]}00</p>
      <p>L. {deals[1]}3000</p>
      <p>L. {deals[2]}000</p>

      <p>L. {deals[4].replace(/\s/g, "")}00</p>
      <p>L. {deals[5]}00</p>



    </div>
  );
};

export default DealFinder;
export { GET_AUTHORS };
