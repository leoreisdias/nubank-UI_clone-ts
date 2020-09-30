import React from 'react';

import { Container, Logo, Top, Title } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons'

const logo = require('../../../assets/Nubank_Logo.png');

const Header: React.FC = () => {
    return (
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>Leonardo</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#fff" />
        </Container>
    );
}

export default Header;