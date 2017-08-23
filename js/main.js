
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
      ennemi.sante -= this.attaque - ennemi.defence;
      // console.log(this.nom+ " : " +"attaque"+ "  ===> " + ennemi.nom);
      // console.log(ennemi.nom +" : "+ ennemi.sante);

      if (ennemi.sante <= 0){
        // console.log(ennemi.nom+ " " + "a perdu");
    };
  }
}

    this.soin = function () {
      if (this.sante<=5 && this.mana>=10 ) {
          this.mana -= 10;
          this.sante += 10;
          // console.log(this.nom + " soin '+10' = "+this.sante);

      }
    };
}

var personnage1= new fichePersonnage( "chris", 5, 4, 10);
var personnage2= new fichePersonnage( "albert", 5, 2, 10);
var magicien = new fichePersonnage("sorcier", 4, 2, 15);
magicien.mana=10;

// console.log(personnage1);
// console.log(personnage2);
// console.log(magicien);

while (personnage1.sante >= 0 && personnage2.sante >= 0 && magicien.sante >0){
  if (personnage1.sante > 0){
    personnage1.combat(magicien);
    magicien.soin();
  }

  if (personnage2.sante > 0) {
    personnage2.combat(magicien);
    magicien.soin();
  }

  if (magicien.sante > 0) {
    magicien.combat(personnage2);
    magicien.combat(personnage1);
    magicien.soin();
  }
}

// ************************************************exercice 3***********************************************
// ************************************************************************************************************
// *****************************************************************************************************

function ficheProduit(titre, slogan, description) {
  this.titre=titre;
  this.slogan=slogan;
  this.description=description;

this.affiche = function(){
    $("#fiche").append("<div class='card col-4' >"+"<div class='card-block'>" +
    "<p class='card-title rounded card-success mb-3 text-center'>" + this.titre +"</p>"+ "<p class='card-text rounded card-info mb-3 text-center'>" + this.slogan+"</p>" +
    "<p class='card-text rounded card-warning mb-3 text-center'>" + this.description +"</p>"+ "</div>"+"</div>");
}
}


$("#envoyer").click(function(){
  var nouveauProduit = new ficheProduit ($("#titre").val(), $("#slogan").val(), $("#description").val());
  console.log(nouveauProduit);
  nouveauProduit.affiche();
  $("#titre").val("");
  $("#slogan").val("");
  $("#description").val("");
})


// ***************************************************************************exercice 4***********************************************************
// *****************************************************************************************************************************************************
// *******************************************************************************************************************************************

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    console.table(myObj.user);
    for (var i in myObj.user ) {

      document.getElementById("demo").innerHTML += "<tr><td>"+ myObj.user[i].nom +"</td><td>"+ myObj.user[i].prenom +"</td><td>"+ myObj.user[i].age +"</td><td>"+ myObj.user[i].taille +"</td></tr>";
    }

  }
};
xmlhttp.open("GET", "json/main.json", true);
xmlhttp.send();

