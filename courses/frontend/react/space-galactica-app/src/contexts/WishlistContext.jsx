import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const [planetsWishlist, setPlanetsWishlist] = useState([]);

  const isPlanetInWishlist = (planetName) => {
    return planetsWishlist.some((planet) => planet.name === planetName);
  };

  const addPlanetToWishlist = (name, thumbnail) => {
    setPlanetsWishlist((prev) => [...prev, { name, thumbnail }]);
  };
  const removePlanetFromWishlist = (name) => {
    setPlanetsWishlist((prev) => prev.filter((planet) => planet.name !== name));
  };

  const wishlistCount = () => {
    return planetsWishlist.length;
  }

  return(
    <WishlistContext.Provider value={{planetsWishlist, isPlanetInWishlist, addPlanetToWishlist, removePlanetFromWishlist, wishlistCount}}>
        { children }
    </WishlistContext.Provider>
  );

}

const useWishlist = () => {
    return useContext(WishlistContext);
}


export {
    WishlistProvider,
    useWishlist
}