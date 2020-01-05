import React, { useEffect, useState }  from 'react';
import AuthService from '../service/AuthService';
import FilterComponent from './FilterComponent';
import FooterComponent from './FooterComponent';

import { Layout } from 'antd';

const SearchComponent: React.FC = () => {
  // eslint-disable-next-line
  const [access_key, setAccess_key] = useState("");
  const [loaded, setLoaded] = useState(false)

  const _API_KEY_ = "505763d6-4202-4b05-9efc-93b366939bcf";

  useEffect(() => {
    let store: string | null = localStorage.getItem("access_key");

    if (store) {
      setAccess_key(store);
    } else {
      (async () => {
        let data: string = await AuthService.authenticate(_API_KEY_);
        setAccess_key(data);
        localStorage.setItem("token", data);
      })();
    }
    setLoaded(true);
  }, []);

  return (
    <Layout>
      <FilterComponent loaded={ loaded } />
      <FooterComponent />
    </Layout>
  )
}

export default SearchComponent;
