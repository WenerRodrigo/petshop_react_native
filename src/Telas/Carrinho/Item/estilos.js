import { StyleSheet } from "react-native";
import { cores } from "../../../estilos";



export default StyleSheet.create({
    informacao: {
        padding: 24
    },

    nome: {
        color: cores.laranja,
        fontSize: 16,
        fontWeight: 'bold'
    },

    calculo: {
        color: cores.escuro,
        fontSize: 14,
        marginVertical: 8
    },

    preco: {
        color: cores.roxo,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: "right"
    },

    divisor: {
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: cores.cinza
    },

    carrinho: {
        paddingHorizontal: 24,
        paddingBottom: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
})