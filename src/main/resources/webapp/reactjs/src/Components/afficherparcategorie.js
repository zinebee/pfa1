import React from 'react'; 
import {Navbar, Container, Col} from 'react-bootstrap'; 
import { Table } from 'react-bootstrap'; 
import axios from 'axios';
class afficherparcategorie extends React.Component { 
    constructor(props){
        super(props);
        this.state={
            personness: []
        }
       
    }
    componentDidMount(){
        const g=window.location.href;
        var url=new URL(g);
        var name =url.searchParams.get("liste");
        axios.get("http://localhost:8080/personnes/t/"+name).then(response => response.data).then((data)=>{this.setState({personness:data})});
    }
    render() { 
       // document.getElementById("sd").innerHTML="sss"+this.state.personness.length;

        return ( 
            <div>
            
            
                 <Table bordered hover striped variant="light">
                 <thead>
                         <tr align="center">
                             
                             <th>Nom</th>
                             <th>Prenom</th>
                             <th>Email</th>
                             <th>Telephone</th>
                         </tr>
                     </thead>
                     <tbody>
                         { 
                            this.state.personness.length===0 ?
                         <tr align="center">
                             <td colSpan="3">{this.state.personness.length}disponible</td>
                         </tr>:
                         this.state.personness.map((personnes) => (
                             <tr key={personnes.id}>
                                
                                 <td>{personnes.nom}</td>
                                 <td>{personnes.prenom}</td>
                                 <td>{personnes.email}</td>
                                 <td>{personnes.telephone}</td>
                                 
                             </tr>
                         ))
                         }
                    </tbody>
                 </Table>
         </div>

        ); 
    } 
}
export default afficherparcategorie;