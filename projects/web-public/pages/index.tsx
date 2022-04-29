import { sum } from '@alura/utils';

export default function HomeScreen() {
    return (
        <div> 
            <h1>
                Home Screen do Projeto :)
            </h1>
            <p>
                Resultado da soma: {sum(2,2)}
            </p>
        </div>
    ); 
}