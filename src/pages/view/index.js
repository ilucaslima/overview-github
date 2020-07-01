import React from 'react';

import { Wrapper, Card, Information, Repository, InformationRepository,
        Button
} from './styled';

import Perfil from '../../images/perfil.png';

import IconRepository from '../../images/icon-repository.png';
import IconLike from '../../images/icon-like.png';


export default class index extends React.Component{
    render(){
        return (
                <Wrapper>
                    <Card>
                        <Information>
                            <img src={Perfil} alt="perfil "/>
                            <h2>Talon Counter</h2>
                            <p>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                                Lorem Ipsum has been the industry's
                                standard dummy text ever since the.</p>
                            <InformationRepository>
                                <a><img src={IconRepository} alt="repository"/> 20 Repository</a>
                                <a><img src={IconLike} alt="Like"/>30 Followers</a>
                            </InformationRepository>
                            <Button>Ver Perfil</Button>
                        </Information>
                        <Repository>
                            
                        </Repository>
                    </Card>
                </Wrapper>
        )
    }
}