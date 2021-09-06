import React from 'react'; 
import {Navbar, Container, Col} from 'react-bootstrap'; 
import { Table } from 'react-bootstrap'; 
import axios from 'axios';
class afficherparcategorie extends React.Component { 
    constructor(props){
        super(props);
        this.state={
            personness: [],
            ab:''
        }
       
    }
    componentDidMount(){
        const g=window.location.href;
        var url=new URL(g);
        var name =url.searchParams.get("liste");
        axios.get("http://localhost:8080/personnes/"+name).then(response => {
            //alert(JSON.stringify(response.data));
            document.getElementById("nom1").innerHTML=response.data.nom;
            document.getElementById("prenom1").innerHTML=response.data.prenom;
            document.getElementById("email1").innerHTML=response.data.email;
            document.getElementById("telephone1").innerHTML=" "+response.data.telephone;
  
           }).then((data)=>{
        this.setState({ab:JSON.stringify(data)});
        this.setState({personness:data});
    });
    }
    render() { 
       // document.getElementById("sd").innerHTML="sss"+this.state.personness.length;

        return ( 
            <center>
            <div>
               <div align="center"><img id="espace" src="logopfa.jpeg" width="10%" height="10%"/></div>
           <table border="1" width="100%">
               <tr><th>Nom</th><td id="nom1"></td></tr>
               <tr><th>Preom</th><td id="prenom1"></td></tr>
               <tr><th>Email</th><td id="email1"></td></tr>
               <tr><th>Telephone</th><td id="telephone1"></td></tr>
           </table>
            
                
         </div>
         </center>

        ); 
    } 
}
export default afficherparcategorie;