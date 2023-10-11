import React from 'react';
import { FlatList} from 'react-native';
import Item from './Item';
import StatusCarrinho from '../../componentes/StatusCarrinho';


const servicos = [
    {
        id: 1,
        nome: 'Banho',
        preco: 79.90,
        descricao: "Banho e tosa com os melhores produtos do mercado",
        quantidade: 1
    },
    {
        id: 2,
        nome: 'Vacina V10',
        preco: 99.90,
        descricao: "Vacina V10 importada",
        quantidade: 2
    },
    {
        id: 3,
        nome: 'Consulta com especialista',
        preco: 139.90,
        descricao: "Consulta com especialista em animais",
        quantidade: 1
    },
]

export default function Carrinho() {
    const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);
    return (
        <>
            <StatusCarrinho total={total}/>
            <FlatList
                data={servicos}
                renderItem={({ item }) => <Item{...item} />}
                keyExtractor={({ id }) => String(id)}
            />
        </>
    )
}