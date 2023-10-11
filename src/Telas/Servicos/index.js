import React from 'react';
import { SafeAreaView, StatusBar, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import Item from './Item';
import estilosGlobal from '../../estilos';


const servicos = [
    {
        id: 1,
        nome: 'Banho',
        preco: 79.90,
        descricao: "Banho e tosa com os melhores produtos do mercado"
    },
    {
        id: 2,
        nome: 'Vacina V10',
        preco: 99.90,
        descricao: "Vacina V10 importada"
    },
    {
        id: 3,
        nome: 'Consulta com especialista',
        preco: 139.90,
        descricao: "Consulta com especialista em animais"
    },
]

export default function Servicos() {
    return (
        <SafeAreaView style={estilosGlobal.preencher}>
            <StatusBar />
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={estilosGlobal.preencher}
            >
                <FlatList
                    data={servicos}
                    renderItem={({ item }) => <Item{...item} />}
                    keyExtractor={({ id }) => String(id)}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}