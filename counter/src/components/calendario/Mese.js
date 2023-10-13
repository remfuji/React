import  Giornata  from "./Giornata";

export default function Mese({mes}){

    const dataAtual = new Date();

    const mesAtual = dataAtual.getMonth();

    const ultimoDiaDoMes = new Date(dataAtual.getFullYear(), mesAtual + 1, 0).getDate();

    const diasDoMes = [];
    for (let dia = 1; dia <= ultimoDiaDoMes; dia++) {
        diasDoMes.push(dia);
    }
    


    return (
        <>
        <div>{mes}</div>
            <div className="Month">
                {
                    diasDoMes.map((dia) => <Giornata key={dia} dia={dia} />)
                }
            </div>
        </>
    )
}