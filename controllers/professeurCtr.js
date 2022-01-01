const Professeur = require("../models/Professeur");

exports.postProfesseur = async (req,res)=>{
  try{ 
    const newProfesseur = new Professeur({...req.body});
    const response = await newProfesseur.save();
    res.send({response: response, message: 'Professeur is saved' });
  }catch(error){
    console.log(error)
    res.status(400).send({message: "can not save it"})
  }
}

