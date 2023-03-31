import Perso from "../components/Perso";

export const fetchPerso = async (id) =>{
    try {

        let apiUrl = `https://rickandmortyapi.com/api/character/${id}`;
        
        if (typeof process !== 'undefined') 
        {
            apiUrl = `${process.env.CHARACTER_REQUEST}${page}`;
        }

        const req = await fetch(apiUrl)
        const res = await req.json()

        return res
    }catch(e){
        throw new Error(e)
    }
}

const PagePersonnage = async (obj) =>{
    
    const res = await fetchPerso(obj.perso)
    return Perso(res)
}

export default PagePersonnage;



