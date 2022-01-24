import React, { useState, useContext } from "react";
const DishContext = React.createContext();

function AppProvider({ children }) {
    const [listRestaurant, setListRestaurant] = useState([]);

    const [listDish, setListDish] = useState([]);
    return (
        <DishContext.Provider
            value={{
                listRestaurant,
                setListRestaurant,
                listDish,
                setListDish,
            }}
        >
            {children}
        </DishContext.Provider>
    );
}
export const useGlobalContext = () => {
    return useContext(DishContext);
};
export default AppProvider;
