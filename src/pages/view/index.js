import React, { useEffect, useState } from "react";

import {useParams} from 'react-router-dom';

import {
  Wrapper,
  Card,
  Information,
  Repository,
  InformationRepository,
  Button,
} from "./styled";

import Perfil from "../../images/perfil.png";
import IconRepository from "../../images/icon-repository.png";
import IconLike from "../../images/icon-like.png";

import api from '../../config/api';

export default function View() {
  const params = useParams();
  const [data, setData] = useState({});
  
  useEffect(() => {
    const username = params.username;
    api.get(`/users/${username}`).then(({data}) => {
      setData(data);
    }).catch(() => {
      console.log('error')
    })
  },[data, params.username])

  return (
    <Wrapper>
      <Card>
        <Information>
          <img src={data.avatar_url} alt="perfil " />
          <h2>{data.name}</h2>
          <InformationRepository>
            <a>
              <img src={IconRepository} alt="repository" /> {data.public_repos} Repository
            </a>
            <a>
              <img src={IconLike} alt="Like" />
              {data.followers} Followers
            </a>
          </InformationRepository>
          <a href={`https://github.com/${data.login}`} target='_blank'><Button>Ver Perfil</Button></a>
        </Information>
        <Repository></Repository>
      </Card>
    </Wrapper>
  );
}
