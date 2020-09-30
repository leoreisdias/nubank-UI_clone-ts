import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
import Menu from '../../components/Menu'

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

const Main: React.FC = () => {
    const translateY = new Animated.Value(0);

    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY,
                }
            }
        ],
        {
            useNativeDriver: true
        }
    )

    function onHandlerStateChanged(event: any) {

    }

    return (
        <Container>
            <Header />

            <Content>
                <Menu />

                <PanGestureHandler
                    onGestureEvent={animatedEvent}
                    onHandlerStateChange={onHandlerStateChanged}
                >
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
                </PanGestureHandler>

            </Content>

            <Tabs />
        </Container>
    )
}

export default Main;