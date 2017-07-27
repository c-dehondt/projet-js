
// *************************************exercice 1**************************************************
// ************************************************************************************************
var tempVille=[];
var tempCarte=[];


var user= {
  nom:"Dehondt",
  prenom:"Christopher",
  residence:"mouchin",
  age:"32",
  paimentsUser: "visa",

  info:function() {
    alert(this.nom +"\n"+  this.prenom +"\n"+ (2017-this.age));
  },


};

  // user.info();

// ****************************************exercice 1.1****************************************************
// ***************************************************************************************************

var site={
  villes:["ORCHIES","LILLE","MOUCHIN"],
  paiments:["VISA","MASTERCARD","CARTEBLEU"],
  ageMin:18,

  age:function(){
    if (user.age < this.ageMin) {
      alert("vous êtes trop jeune");

    }else {
      alert("Bienvenue sur notre site vous avez + de 18 ans");
      }
  },
// ************************************************1.1*********************************************
  ville:function(){

      for (var i in this.villes) {
        if ( user.residence.toUpperCase() == this.villes[i]) {
        tempVille.push(this.villes[i]);
      }
    }
        console.log(tempVille);
        if (tempVille.length == 1) {
          alert("ville correcte");
          temp=[];

        }else {
          alert("ville incorrecte");
          }
  },

// ************************************************************1.2*********************************************
  carte:function () {
    for (var i in this.paiments) {
        if ( user.paimentsUser.toUpperCase() == this.paiments[i]) {
          tempCarte.push(this.paiments[i]);
        }
      }

        console.log(tempCarte);
      if (tempCarte.length == 1) {
        alert("carte valide");

      }else {
        alert("carte incorrecte");
    }
}
};

// site.age();
// site.ville();
// site.carte();


// *******************************************************exercice 2***********************************************
// ****************************************************************************************************************
// ******************************************************************************************************************

function fichePersonnage(nom, attaque, defence, sante,) {
  this.nom=nom;
  this.attaque=attaque;
  this.defence=defence;
  this.sante=sante;

   this.combat = function (ennemi) {

     if (this.attaque > ennemi.defence) {
      ennemi.sante -= this.attaque;
      console.log(ennemi.sante);
    };
   }
 }

var personnage1= new fichePersonnage( "chris", 5, 3, 10);
var personnage2= new fichePersonnage( "albert", 3, 3, 10);

while (personnage1.sante >= 0 && personnage2.sante >= 0){

  if (personnage1.sante > 0){
    personnage1.combat(personnage2);
      console.log(personnage1.nom+ " " +"attaque");
  }

  if (personnage2.sante > 0) {
    personnage2.combat(personnage1);
    console.log(personnage2.nom+ " " +"attaque");
  }

}

  if (personnage1.sante <= 0){
    console.log(personnage1.nom+ " " + "a perdu");
  }else {
    console.log(personnage2.nom+ " " + "a perdu");
  }
