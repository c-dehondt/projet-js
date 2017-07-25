
// *************************************exercice 1**************************************************
// ************************************************************************************************
var user= {
  nom:"Dehondt",
  prenom:"Christopher",
  residence:"Mouchin",
  age:"32",
  paiments: "visa, mastercard, carte bleu",

  name : function() {
    alert(this.nom);
  },

  firstName:function() {
    alert(this.prenom );
  },

  date:function () {
    alert(2017 - this.age);
  },

};

  user.name();
  user.firstName();
  user.date();
