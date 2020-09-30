import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
import Menu from '../../components/Menu'

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

const Main: React.FC = () => {
    return (
        <Container>
            <Header />

            <Content>
                <Menu />

                <Card>
                    <CardHeader>
                        <Icon name="attach-money" size={28} color="#666" />
                        <Icon name="visibility-off" size={28} color="#666" />
                    </CardHeader>
                    <CardContent>
                        <Title>Saldo Disponível</Title>
                        <Description>R$ 200.000,01</Description>
                    </CardContent>
                    <CardFooter>
                        <Annotation>
                            Pagamento de Amazon.prime no valor de R$ 9,99 hoje às 09:00h.
                        </Annotation>
                    </CardFooter>
                </Card>
            </Content>

            <Tabs />
        </Container>
    )
}

export default Main;