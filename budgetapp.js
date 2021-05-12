let listaPrihoda = [];
let listaTroskova=[];
let id=0;
let idd=0;

function dohvatiPrihode(){
    var vrijednostPrihoda = document.getElementById("prihodi").value;
    if(vrijednostPrihoda<=0){
        alert("Unesite pozitivan broj");
        return;
    }
    var opisprihoda=document.getElementById("opisp").value;
    var ispisivanje= document.getElementById("ispis");

    //definirala objekt jer spremamo i opis i vrijednost svih prihoda
    var prihod={
        id:id,
        opis: opisprihoda,
        vrijednost: parseInt(vrijednostPrihoda)   
    }

    //svi prihodi idu u listu, na kraj dodajes svaki sljedeci
    listaPrihoda.push(prihod);
    ispisivanje.append(listaPrihoda[id].vrijednost +" "+ listaPrihoda[id].opis+ " , " );
    id++;
        
    //izracunala sumu svih prihoda
    prihod_suma = listaPrihoda.reduce((listaPrihoda, val) => listaPrihoda + val.vrijednost, 0);
    document.getElementById("totalp").value=prihod_suma;   

    //nakon što uneses nek bude prazno za iduci unos
    document.getElementById("prihodi").value="";
    document.getElementById("opisp").value="";

    
}

//istu stvar napravila za troškove
function dohvatiTroskove(){
    var vrijednosttroska = document.getElementById("troskovi").value;
    if(vrijednosttroska<=0){
        alert("Unesite pozitivan broj");
        return;
    }
    var opistroska=document.getElementById("opist").value;
    var ispisivanje= document.getElementById("ispistroskovi");

    var troskovi={
        idd:idd,
        opis: opistroska,
        vrijednost: parseInt(vrijednosttroska)   
    }
    console.log(id);
    listaTroskova.push(troskovi);
    ispisivanje.append(listaTroskova[idd].vrijednost +" "+ listaTroskova[idd].opis +" , ");
    idd++;

    troskovi_suma = listaTroskova.reduce((listaTroskova, val) => listaTroskova+ val.vrijednost, 0);
    document.getElementById("totalt").value=troskovi_suma;  

    document.getElementById("troskovi").value="";
    document.getElementById("opist").value="";

}

function izracunajBalans(){
    var prihod = document.getElementById("totalp").value;
    var trosak = document.getElementById("totalt").value;
    document.getElementById("totalb").value=prihod-trosak;
}




