import { Botao } from "./styles";
const Button = ({texto, funcao}) => {
    return <Botao onClick={funcao}>{texto}</Botao>;
}
 
export default Button;