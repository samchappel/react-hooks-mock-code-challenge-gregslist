import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( { gregsList, setGregsList, searchTerm }) {

  // const [listings, setListings] = useState(gregsList)

  function handleDelete(e) {
    // console.log(e.target.id)
    const newVariable = gregsList.filter((listing) => {
      const idNum = parseInt(e.target.id)
      if (idNum === listing.id) {
        return false
      } else if (idNum !== listing.id) {
        return true
      }
    });
    console.log(newVariable)
    setGregsList(newVariable)
  }

  const filteredListings = gregsList.filter((listing) => listing.description.toLowerCase().includes(searchTerm.toLowerCase()))

  const listingCards = filteredListings.map((item) =>  <ListingCard key={item.id} {...item} id={item.id} handleDelete={handleDelete}/>)


  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
