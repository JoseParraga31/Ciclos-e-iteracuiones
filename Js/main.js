//maquina expendedora de gaseosas 
let ingreso = prompt(
    "ingrese una opcion \n 1-CocaCola sabor original 350ml \n 2-Cocacola sin azucar 350ml \n 3-Cocacola black 350ml \n 4-fanta sabaor original 350ml \n 5-fanta sabaor sin azucar 350ml \n 6-agua con gas 350ml \n 7-agua sin gas 350ml \n 8-SevenUp sabor original 350ml \n 9-SevenUp sin azucar 350ml"
);

switch (ingreso) {
    case "1":
        alert("Selecionaste CocaCola sabor original 350ml, que lo disfrutes");
        breack;
    case "2":
        alert("Selecionaste CocaCola sin azucar 350ml, que lo disfrutes");
        breack;
    case "3":
        alert("Selecionaste Cocacola black 350ml, que lo disfrutes");
        breack;
    case "4":
        alert("Selecionaste fanta sabaor original 350ml, que lo disfrutes");
        breack; 
    case "5":
        alert("Selecionaste fanta sabaor sin azucar 350ml, que lo disfrutes");
        breack;
    case "6":
        alert("Selecionaste Agua con gas 350ml, que lo disfrutes");
        breack;
    case "7":
        alert("Selecionaste Agua sin gas 350ml, que lo disfrutes");
        breack; 
    case "8":
        alert("Selecionaste SevenUp sabor original 350ml, que lo disfrutes");
        breack;
    case "9":
        alert("Selecionaste SevenUp sin azucar 350ml, que lo disfrutes");
        breack;
     default:
         alert("Opcion no valida");
         break;                               
}