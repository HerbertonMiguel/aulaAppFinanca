import React, {useContext} from 'react'
import  {View, Text} from 'react-native'

import {Background, Container, AreaInput, Input, SubmitButton, SubmitText} from '../SignIn/styles'

import {AuthContext} from '../../contexts/auth'

export default function SignUp(){
    const {user} = useContext (AuthContext)

    function chamaFuncao(){
        alert(user.nome)
    }

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

            <SubmitButton activeOpacity={0.8}  onPress={chamaFuncao}>
                <SubmitText>Cadastrar</SubmitText>
            </SubmitButton>

        </Container>
       </Background>
       
    )
}