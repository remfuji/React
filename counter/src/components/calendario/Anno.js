import  Mese  from "./Mese";

export default function Anno() {

    const mese = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno','luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']


    return (
        <>
        
            <div >
                {
                    mese.map((dia) => <Mese key={dia} dia={dia} />)
                }
            </div>
        </>
    )
}