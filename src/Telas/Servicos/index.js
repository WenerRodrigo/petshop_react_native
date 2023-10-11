import React from 'react';
import { Text, SafeAreaView, StatusBar, FlatList } from 'react-native';
import Item from './Item';


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
        <SafeAreaView>
            <StatusBar />
            <Text>Tela de Serviços</Text>
            <FlatList 
                data={servicos}
                renderItem={({item}) => <Item{...item}/>}
                keyExtractor={({id}) => String(id)}
            />
        </SafeAreaView>
    )
}