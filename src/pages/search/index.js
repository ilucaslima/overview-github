import React from 'react';

import { Wrapper, Card, Container, Input, Button,

} from './styled';

import Github from '../../images/Github.png';

export default class search extends React.Component{
    render(){
        return (
            <Wrapper>
                <Container>
                    <img src={Github} alt="Github" />
                    <Card>
                        <Input placeholder="Username"/>
                        <Button type="submit" value="SEND"/>
                    </Card>
                </Container>
            </Wrapper>
        )
    }
}