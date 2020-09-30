import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
import Menu from '../../components/Menu'

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

const Main: React.FC = () => {
    const [hideCashColor, sethideCashColor] = useState('black');
    const [backgroundCash, setBackgroundCash] = useState('white');

    let offset = 0;
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
        if (event.nativeEvent.oldState === State.ACTIVE) {
            let opened = false;
            const { translationY } = event.nativeEvent;

            offset += translationY;

            if (translationY >= 100) {
                opened = true;
            } else {
                translateY.setValue(offset);
                translateY.setOffset(0);
                offset = 0;
            }


            Animated.timing(translateY, {
                toValue: opened ? 380 : 0,
                duration: 200,
                useNativeDriver: true,
            }).start(() => {
                offset = opened ? 380 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });

        }
    }

    function handlerOpacityCash() {
        if (hideCashColor === '#ddd') {
            sethideCashColor('black');
            setBackgroundCash('white')
        }
        else {
            sethideCashColor('#ddd');
            setBackgroundCash('#ddd');
        }
    }

    return (
        <Container>
            <Header />

            <Content>
                <Menu translateY={translateY} />

                <PanGestureHandler
                    onGestureEvent={animatedEvent}
                    onHandlerStateChange={onHandlerStateChanged}
                >
                    <Card
                        style={{
                            transform: [{
                                translateY: translateY.interpolate({
                                    inputRange: [-350, 0, 380],
                                    outputRange: [-50, 0, 380],
                                    extrapolate: 'clamp'
                                }),
                            }]
                        }}
                    >
                        <CardHeader>
                            <Icon name="attach-money" size={28} color="#666" />
                            <Icon name="visibility-off" size={28} color="#666" onPress={handlerOpacityCash} />
                        </CardHeader>
                        <CardContent>
                            <Title>Saldo Disponível</Title>
                            <Description style={{
                                color: hideCashColor,
                                backgroundColor: backgroundCash
                            }}>R$ 200.000,01</Description>
                        </CardContent>
                        <CardFooter>
                            <Annotation>
                                Pagamento de Amazon.prime no valor de R$ 9,99 hoje às 09:00h.
                        </Annotation>
                        </CardFooter>
                    </Card>
                </PanGestureHandler>

            </Content>

            <Tabs translateY={translateY} />
        </Container>
    )
}

export default Main;