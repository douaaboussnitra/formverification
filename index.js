

function validerFormulaire() {
    
    var nom = document.getElementById('nom').value;
  
   
    if (!/^[a-zA-Z]+$/.test(nom)) {
      alert("Le nom doit contenir uniquement des lettres.");
      return false;
    }
  
   
    var dateNaissance = document.getElementById('dateNaissance').value;
  
  
    var anneeNaissance = parseInt(dateNaissance.split('-')[0]);
    if (anneeNaissance <= 2006) {
      alert("La date de naissance doit être supérieure à 2006.");
      return false;
    }
  
   
    alert("Le formulaire est valide !");
    return true;
  }
  