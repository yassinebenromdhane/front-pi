import React , {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Demandservice from '../../services/Demandservice';


const Add = () => {

    
  
  
  const history = useHistory();
 const [nomClub, setNomClub] = useState('');
 const [description, setDescription] = useState('');
 const [professeur, setProfesseur] = useState({});
 

  

  const saveDemande = async (e) => {
    e.preventDefault();
    const demande = { nomClub , description };
    Demandservice.create(demande)
      .then(() => { 
          history.push("/demands");
        console.log(demande)})
      .catch(e => { console.log(e); });
  };

  

  

  

    return (
    <div className="container">
      <div>
        <h1 className="text-center mb-5"> Add Demande</h1>
        <form className="d-flex align-items-center flex-column justify-content-center h-100  ">
          
          <div className="col-sm-4 col-md-4 col-lg-6 ">
          <div className="col-6">
              <label> name </label>
              <input type="text" name="name" className="form-control"  onChange={(e) => setNomClub(e.target.value)} />
            </div>
            
          </div>
         
          <div className="col-sm-4 col-md-4 col-lg-6 form-group">
            <label>description</label>
            <textarea className="form-control" name="description" id="description"  cols="30" rows="10" onChange={(e)=> setDescription(e.target.value)}></textarea>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-6 form-group">
            <label>description</label>
            <input className="form-control" type="text" name="description" id="description"  cols="30" rows="10" onChange={(e)=> setDescription(e.target.value)}></input>
          </div>
         
          <div className="mt-2 px-3">
            <button type="submit" className="btn btn-success my-5" onClick={saveDemande}>Ajouter</button>
          </div>
        </form>
      </div>
    </div >
    )
}

export default Add
