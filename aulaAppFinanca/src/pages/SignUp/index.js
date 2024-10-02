import React from 'react'
import  {View, Text} from 'react-native'

import {Background, Container, AreaInput, Input, SubmitButton, SubmitText} from '../SignIn/styles'

export default function SignUp(){
    return (
       <Background>
        <Container>
            <AreaInput>
                    <Input
                        placeholder="Nome"
                    />
            </AreaInput>

            <AreaInput>
                    <Input
                        placeholder="Seu email"
                    />
            </AreaInput>

            <AreaInput>
                    <Input
                        placeholder="Sua Senha"
                    />
            </AreaInput>

            <SubmitButton activeOpacity={0.8} >
                <SubmitText>Cadastrar</SubmitText>
            </SubmitButton>

        </Container>
       </Background>
       
    )
}