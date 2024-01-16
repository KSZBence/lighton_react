import Elem from "./Elem";
import './Jatekter.css';

export default function Jatekter(props){
    const AKTUALISSZINEK = []
    function lampageneral(lampak){
        console.log(lampak);
        const myList = lampak.map((lampa) => <Elem  className={lampa+" lampa"}></Elem>)
        return myList
    }

    function getLampakszin(){
        
    }

    return(
        <div className="Jatekter">{lampageneral(props.lampak)}</div>
    )
}