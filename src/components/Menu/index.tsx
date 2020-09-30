import React from 'react';
import { QRCode } from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons'


import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

const Menu: React.FC = () => {
    return (
        <Container>
            <Code>
                <QRCode
                    value="https://www.linkedin.com/in/leonardord99/"
                    backgroundColor='white'
                    color="#8b10ae"
                />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#fff" />
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#fff" />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#fff" />
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#fff" />
                    <NavText>Configurações do App</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => { }}>
                <SignOutButtonText>Sair do APP</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}

export default Menu;