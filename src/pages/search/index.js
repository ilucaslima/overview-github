import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

import { Wrapper, Card, Container, Input, Button } from "./styled";

import Github from "../../images/Github.png";

import api from '../../config/api';

export default function Search() {
  let history = useHistory();
  const [username, setUsername] = useState('');
  const [isError, setIsError] = useState(false);

  function onSubmit(username){
    api.get(`/users/${username}`).then(() => {
      username && history.push(`/view/${username}`)
    }).catch(() => {
      setIsError(true);
      setUsername('');
    })
  }

    return (
      <Wrapper>
        <Container>
          <img src={Github} alt="Github" />
          <Card>
            <Input
              error={isError}
              placeholder={`${isError ? 'Digite um usuário válido' : 'Digite um usuário'}`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button type="submit" value="SEND" onClick={() => onSubmit(username)}/>
          </Card>
        </Container>
      </Wrapper>
    );
}
