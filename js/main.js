
// *************************************exercice 1**************************************************
// ************************************************************************************************
var temp=[];

var user= {
  nom:"Dehondt",
  prenom:"Christopher",
  residence:"mouchin",
  age:"32",
  paiments: "visa, mastercard, cartebleu",

  info:function() {
    alert(this.nom +"\n"+  this.prenom +"\n"+ (2017-this.age));
  },


};

  user.info();

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

  ville:function(){

      for (var i = 0; i < this.villes.length; i++) {
        if ( user.residence.toUpperCase() == this.villes[i]) {
        temp.push(this.villes[i]);
      }
    }
        console.log(temp);
        if (temp.length == 1) {
          alert("Bienvenue sur notre site");
          temp=[];

        }else {
          alert("ville incorrecte");
          }
  }
};

site.age();
site.ville();
