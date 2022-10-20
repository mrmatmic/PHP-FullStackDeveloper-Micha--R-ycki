import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [imie, setImie]=useState('');
    const [nazwisko, setNazwisko]=useState('');
    const [email, setEmail] = useState('');
    const [opis, setOpis]=useState('');
    const [zawod, setZawod]=useState('Tester');
    const [dodatek1, setDodatek1]=useState('');
    const [dodatek2, setDodatek2] = useState('');
    const [zna, setZna]=useState(false);


    const numer = (e) =>
    {
        if(document.getElementById('wybor').value == "tester")
        {
            document.getElementById("pole1").innerHTML = "Systemy sterujące";
            document.getElementById("pole2").innerHTML = "Systemy raportowe";
            document.getElementById("pole3").innerHTML = "Czy znasz selenium?";
            setZawod(e.target.value);
        }
        if(document.getElementById('wybor').value == "developer")
        {
            document.getElementById("pole1").innerHTML = "Środowiska IDE";
            document.getElementById("pole2").innerHTML = "Języki programowania";
            document.getElementById("pole3").innerHTML = "Czy znasz MySQL?";
            setZawod(e.target.value);
        }
        if(document.getElementById('wybor').value == "projectmanager")
        {
            document.getElementById("pole1").innerHTML = "Metodologie";
            document.getElementById("pole2").innerHTML = "Systemy raportowe";
            document.getElementById("pole3").innerHTML = "Czy znasz scrum?";
            setZawod(e.target.value);
        }
    }

    const umiejetnosc =(e)=>
    {
        if(document.getElementById("zaznaczenie").checked == true){
            setZna(true);
            console.log(zna);
        }
        if(document.getElementById("zaznaczenie").checked == false){
            setZna(false);
            console.log(zna);
        }
    } 
    const zatwierdz = (event) =>{
            event.preventDefault();
            let fdata = new FormData();
            fdata.append("imie", imie);
            fdata.append("nazwisko", nazwisko);
            fdata.append("email", email);
            fdata.append("opis", opis);
            fdata.append("zawod", zawod);
            fdata.append("dodatek1", dodatek1);
            fdata.append("dodatek2", dodatek2);
            fdata.append("zna", zna);
            axios.post("http://localhost:80/zatwierdz/dodaj.php",fdata)
            .then(response=>alert(response.data))
            .catch(error=>alert(error));
    }

    return ( 
        <div className="home">
            <h2>Witaj nowy użytkowniku</h2>
            <Link to="/admin">Przejdź do strony administracyjnej</Link>
            <p>Proszę o wypełnienie formularza aby efekt był widoczny na bazie</p>
            <form method="post" onSubmit={zatwierdz}>
                <div className="row">
                    <div className="col-4 col-md-2">
                        <label>Podaj imię</label>
                    </div>
                    <div className="col-8 col-md-8">
                        <input type="text" value={imie} onChange={(e)=>setImie(e.target.value)} className="form-control" placeholder="Podaj imię" name="imie" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-md-2">
                        <label>Podaj nazwisko</label>
                    </div>
                    <div className="col-8 col-md-8">
                        <input type="text" value={nazwisko} onChange={(e)=>setNazwisko(e.target.value)} className="form-control" placeholder="Podaj nazwisko" name="nazwisko" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-md-2">
                        <label>Podaj email</label>
                    </div>
                    <div className="col-8 col-md-8">
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Podaj e-mail" name="email" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-md-2">
                        <label>Podaj opis</label>
                    </div>
                    <div className="col-8 col-md-8">
                        <textarea className="form-control" value={opis} onChange={(e)=>setOpis(e.target.value)} rows="5" placeholder="Podaj opis" name="opis" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-md-2">
                        <label>Podaj zawód</label>
                    </div>
                    <div className="col-8 col-md-8">
                        <select name="zawod" id="wybor" className="form-control" onChange={numer}>
                            <option value="tester">Tester</option>
                            <option value="developer">Developer</option>
                            <option value="projectmanager">Project Manager</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-md-2">
                        <label id="pole1">Systemy sterujące</label>
                    </div>
                    <div className="col-8 col-md-8">
                    <input type="text" className="form-control" value={dodatek1} onChange={(e)=>setDodatek1(e.target.value)} placeholder="Podaj systemy" name="dodatek1" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-md-2">
                        <label id="pole2">Systemy raportowe</label>
                    </div>
                    <div className="col-8 col-md-8">
                        <input type="text" className="form-control"  value={dodatek2} onChange={(e)=>setDodatek2(e.target.value)} placeholder="Podaj systemy" name="dodatek2" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-md-2">
                        <label id="pole3" className="form-check-label" htmlFor="flexCheckChecked">Czy znasz selenium?</label>
                    </div>
                    <div className="col-8 col-md-8">
                        <input className="form-check-input" type="checkbox" name="zna" onChange={umiejetnosc} id="zaznaczenie"/>
                    </div>
                   
                
                </div>
                <div className="row">
                    <div className="col-12">
                       <br/>
                    </div>
                </div>
                
                <input type="submit" className="zatwierdzanie" value="Zatwierdz"/>
            </form>
            <p></p>
        </div>
     );
}
 
export default Home;