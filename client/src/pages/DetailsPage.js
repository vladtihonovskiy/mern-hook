import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { LinkCard } from "../components/LinkCard";

export const DetailsPage = () => {
  const {token} = useContext(AuthContext);
  const { request, loading } = useHttp();
  const [link, setLink] =  useState(null);
  const linkId  = useParams().id;

  const getLink = useCallback(async() => {
    debugger;
    try{
    const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
      Authorization: `Bearer ${token}`
    })

      setLink(fetched)

      console.log(fetched);

    }catch (e) {

    }
  }, []);

  useEffect(() => {
    debugger;
    getLink();
  }, []);

  if(loading) {
    return <loading />
  }

  return(
    <>
      {!loading && link && <LinkCard link={link} /> }
    </>
  )
}
