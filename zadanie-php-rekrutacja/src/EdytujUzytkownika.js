import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
const EdytujUzytkownika = () => {
    const [uzytkownicy,setUzytkownicy]= useState([]);
    const {id} = useParams();
    useEffect (()=>{
        DostanUzytkownika();
    },[]);
    const [id_pracownika,setIdPracownika]=useState({id});
    const [imie, setImie]=useState('');
    const [nazwisko, setNazwisko]=useState('');
    const [email, setEmail] = useState('');
    const [opis, setOpis]=useState('');
    const [zawod, setZawod]=useState('');
    const [dodatek1,setDodatek1]=useState('');
    const [dodatek2,setDodatek2]=useState('');
    const [zna,setZna]=useState();
    
    const DostanUzytkownika = () =>{
        axios.post("http://localhost:80/zatwierdz/znajdz.php",JSON.stringify({
            id_pracownika: id})).then(function (response)
        {
                setUzytkownicy(response.data);
                console.log(response.data);                
        });
        
    }
    const DajWartosci = () =>
    {
        uzytkownicy.map((uzytkownik) =>
        {
            setIdPracownika(uzytkownik.id_pracownika);
            setImie(uzytkownik.imie);
            setNazwisko(uzytkownik.nazwisko);
            setEmail(uzytkownik.email);
            setOpis(uzytkownik.opis);
            setZawod(uzytkownik.stanowisko);
            if(uzytkownik.stanowisko == "Project Manager")
            {   
                setDodatek1(uzytkownik.metodologie_prowadzenia_projektow);
                setDodatek2(uzytkownik.systemy_raportowe);
                setZna(uzytkownik.zna_scrum);
            }
            else if(uzytkownik.stanowisko == "Developer")
            {   
                setDodatek1(uzytkownik.srodowiska_ide);
                setDodatek2(uzytkownik.jezyki_programowania);
                setZna(uzytkownik.zna_sql);
            }
            if(uzytkownik.stanowisko == "Tester")
            {   
                setDodatek1(uzytkownik.systemy_testujace);
                setDodatek2(uzytkownik.systemy_raportowe);
                setZna(uzytkownik.zna_selenium);
            }
            
            
        });
    }
    const WlaczPrzycisk = () => {
        document.getElementById("zapisz").removeAttribute("disabled");
    }

    const Zapisz = (e) => {
        e.preventDefault();
        let fdata = new FormData();
            fdata.append("id_pracownika",id_pracownika);
            fdata.append("imie", imie);
            fdata.append("nazwisko", nazwisko);
            fdata.append("email", email);
            fdata.append("opis", opis);
            fdata.append("zawod", zawod);
            fdata.append("dodatek1", dodatek1);
            fdata.append("dodatek2", dodatek2);
            fdata.append("zna", zna);
        axios.post("http://localhost:80/zatwierdz/edycja.php",fdata)
        .then(response=>alert(response.data))
        .catch(error=>alert(error));
    }

    const numer = (e) =>
    {
        if(document.getElementById('wybor2').value == "tester")
        {
            document.getElementById("zmiana1").innerHTML = "Systemy sterujące";
            document.getElementById("zmiana2").innerHTML = "Systemy raportowe";
            document.getElementById("zmiana3").innerHTML = "Czy znasz selenium?";
            setZawod(e.target.value);
        }
        if(document.getElementById('wybor2').value == "developer")
        {
            document.getElementById("zmiana1").innerHTML = "Środowiska IDE";
            document.getElementById("zmiana2").innerHTML = "Języki programowania";
            document.getElementById("zmiana3").innerHTML = "Czy znasz MySQL?";
            setZawod(e.target.value);
        }
        if(document.getElementById('wybor2').value == "projectmanager")
        {
            document.getElementById("zmiana1").innerHTML = "Metodologie";
            document.getElementById("zmiana2").innerHTML = "Systemy raportowe";
            document.getElementById("zmiana3").innerHTML = "Czy znasz scrum?";
            setZawod(e.target.value);
        }
    }
    return (  
        <div className="edytujuzytkownika">
            <h1>Użytkownik o id numer {id}</h1> 
            <Link to="/">Powrót do strony głównej</Link>
            <br/>
            <Link to="/admin">Powrót do strony administracyjnej</Link>
            <div className="wstaw">
                <form method="post" onSubmit={Zapisz}>
                <div className="row">
                    <div className="col-4 col-md-2">
                        <label>Id_uzytkownika (nie można go zmieniać)</label>
                    </div>
                    <div className="col-8 col-md-8">
                    <input type="text" className="form-control" readOnly value={id} name="id_pracownika" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-md-2">
                        <label>Imię</label>
                    </div>
                    <div className="col-8 col-md-8">
                        <input type="text" className="form-control"  value={imie} onChange={(e)=>{setImie(e.target.value)}}  name="imie" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-md-2">
                        <label>Nazwisko</label>
                    </div>
                    <div className="col-8 col-md-8">
                        <input type="text" className="form-control"  value={nazwisko} onChange={(e)=>{setNazwisko(e.target.value)}}   name="nazwisko" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-md-2">
                        <label>E-mail</label>
                    </div>
                    <div className="col-8 col-md-8">
                        <input type="email" className="form-control"  value={email}   onChange={(e)=>{setEmail(e.target.value)}}  name="email" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-md-2">
                        <label>Opis</label>
                    </div>
                    <div className="col-8 col-md-8">
                        <input type="text" className="form-control"  value={opis}   onChange={(e)=>{setOpis(e.target.value)}}  name="opis" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-md-2">
                        <label>Stanowisko</label>
                    </div>
                    <div className="col-8 col-md-8">
                        <select name="zawod" id="wybor2" className="form-control" onChange={numer}>
                            <option value="tester">Tester</option>
                            <option value="developer">Developer</option>
                            <option value="projectmanager">Project Manager</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-md-2">
                        <label id="zmiana1">Dodatek 1</label>
                    </div>
                    <div className="col-8 col-md-8">
                        <input type="text" className="form-control"  value={dodatek1} onChange={(e)=>{setDodatek1(e.target.value)}}  name="dodatek1" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-md-2">
                        <label id="zmiana2">Dodatek 2</label>
                    </div>
                    <div className="col-8 col-md-8">
                        <input type="text" className="form-control"  value={dodatek2} onChange={(e)=>{setDodatek2(e.target.value)}}  name="dodatek2" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-md-2">
                        <label id="zmiana3">Znasz dodatkowe rzeczy?</label>
                    </div>
                    <div className="col-8 col-md-8">
                        <select name="zawod" id="wybor2" className="form-control">
                            <option value="tak">tak</option>
                            <option value="nie">nie</option>
                        </select>
                    </div>
                </div>
                
                <input value="Zapisz" type="submit" disabled id="zapisz"/>  
                <div className="row">
                    <div className="col-12">
                       <br/>
                    </div>
                </div>
                </form>
                <button id="przycisk_koncowy" className="zatwierdzanie" onClick={()=>{DajWartosci();
                WlaczPrzycisk();}}>Czy chcesz edytować?</button>  
            </div>    
        </div>
    );
}
 
export default EdytujUzytkownika;