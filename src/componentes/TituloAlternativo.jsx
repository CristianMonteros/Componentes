import { Titulo } from "./Titulo"

export const TituloAlternativo = ({ condicion }) => {

    if (condicion) {
        return <>
            <Titulo titulo={'Creando Componentes'} />

        </>
    }
    return <>

        <Titulo titulo={'Componente Dos'} />
    </>

}