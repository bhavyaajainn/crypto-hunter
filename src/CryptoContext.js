import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { CoinList } from "./config/api";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "./firebase";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [watchlist, setWatchlist]= useState([]);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success"
  })
  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };

  useEffect(()=>{
    onAuthStateChanged(auth, user=>{
      if(user) setUser(user);
      else setUser(null);
    })
  },[])

  useEffect(()=>{
    if(currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency])
  return <Crypto.Provider value={{currency, symbol, setCurrency, coins, loading, fetchCoins, alert, setAlert, user, watchlist, setWatchlist}}>{children}</Crypto.Provider>;
};

export default CryptoContext;

export const CryptoState = () =>{
    return useContext(Crypto);
}
