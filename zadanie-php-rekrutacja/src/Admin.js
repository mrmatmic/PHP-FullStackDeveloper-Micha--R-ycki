import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {
    const [uzytkownicy,setUzytkownicy]= useState([]);

    useEffect (()=>{
        DostanUzytkownikow();
    },[]);

    const DostanUzytkownikow = () =>{
        axios.get("http://localhost:80/zatwierdz/wszyscy.php").then(function (response)
        {
                setUzytkownicy(response.data);
                console.log(response.data);
        });
    }

    return ( 
        <div className="admin">
            <h2>To jest strona administratora</h2>
            <Link to="/">Przejdź do strony głównej</Link>
            <table className="table caption-top">
            <caption>Lista użytkowników</caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Imię</th>
                        <th scope="col">Nazwisko</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Opis</th>
                        <th scope="col">Stanowisko</th>
                        <th scope="col">Edytuj</th>
                        <th scope="col">Usuń</th>
                    </tr>
                </thead>
                <tbody>
                    {uzytkownicy.map((uzytkownik,key) =>
                        <tr key={key}>
                            <td>{uzytkownik.id_pracownika}</td>
                            <td>{uzytkownik.imie}</td>
                            <td>{uzytkownik.nazwisko}</td>
                            <td>{uzytkownik.email}</td>
                            <td>{uzytkownik.opis}</td>
                            <td>{uzytkownik.stanowisko}</td>
                            <td><Link to={`/admin/${uzytkownik.id_pracownika}`}><button>Edytuj</button></Link></td>
                            <td><Link to={`/admin/delete/${uzytkownik.id_pracownika}`}><button>Usuń</button></Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
     );
}
 
export default Admin;