import React, { useContext, useEffect, useState } from 'react';
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setloading] = useState(false);
  const [userdata, setuserdata] = useState({});
  const [follower, setfollower] = useState([]);
  const [query, setquery] = useState('john-smilga');
  const [repos, setrepos] = useState([]);
  const [request, setrequest] = useState({});
  const url = `https://api.github.com/users/${query}`;
  const req_url = `https://api.github.com/rate_limit`;
  const fetchurl = async () => {
    setloading(true);
    const response = await fetch(url);
    const data = await response.json();
    const response_follower = await fetch(data.followers_url);
    const data_follower = await response_follower.json();
    const response_repos = await fetch(data.repos_url);
    const data_repos = await response_repos.json();
    const response_req = await fetch(req_url);
    const data_req = await response_req.json();
    const reques = {
      limit: data_req.resources.core.limit,
      remain: data_req.resources.core.remaining,
    };
    setrepos(data_repos);
    setuserdata(data);
    setfollower(data_follower);
    setrequest(reques);
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
        request,
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
