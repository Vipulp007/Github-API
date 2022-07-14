import React, { useContext, useEffect, useState } from 'react';
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setloading] = useState(false);
  const [userdata, setuserdata] = useState({});
  const [follower, setfollower] = useState([]);
  const [query, setquery] = useState('john-smilga');
  const [repos, setrepos] = useState([]);
  const url = `https://api.github.com/users/${query}`;
  const fetchurl = async () => {
    setloading(true);
    const response = await fetch(url);
    const data = await response.json();
    const response_follower = await fetch(data.followers_url);
    const data_follower = await response_follower.json();
    const response_repos = await fetch(data.repos_url);
    const data_repos = await response_repos.json();
    setrepos(data_repos);
    setuserdata(data);
    setfollower(data_follower);
    setloading(false);
  };
  useEffect(() => {
    fetchurl();
  }, [url]);
  return (
    <AppContext.Provider
      value={{
        loading,
        userdata,
        query,
        follower,
        repos,
        setquery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
