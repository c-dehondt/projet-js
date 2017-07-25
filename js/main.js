
// *************************************exercice 1**************************************************
// ************************************************************************************************

var user= {
  nom:"Dehondt",
  prenom:"Christopher",
  residence:"Mouchin",
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
  ville:["ORCHIES","LILLE","MOUCHIN"],
  paiments:["VISA","MASTERCARD","CARTEBLEU"],
  ageMin:18,

  age:function(){
    if (user.age < this.ageMin) {
      alert("vous êtes trop jeune");

    }else {
      alert("Bienvenue sur notre site");
      }
  },
};
site.age();
