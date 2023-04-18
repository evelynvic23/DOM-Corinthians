var sDatas = [["01-01", "01-19", "Sócrates", "img1.jpg"],
              ["01-21", "02-18", "Ronaldo Fenômeno", "img3.jpg"],
              ["02-19", "03-20", "Róger Guedes", "img2.png"],
              ["03-21", "04-19", "Neto", "img4.jpg"],
              ["04-21", "05-20", "Fagner", "img5.jpg"],
              ["05-21", "06-20", "Cássio", "img6.jpg"],
              ["06-21", "07-22", "Yuri Alberto", "img7.png"],
              ["07-23", "08-22", "Paulinho", "img8.png"],
              ["08-23", "09-22", "Ralf", "img9.png"],
              ["09-23", "10-22", "Marcelinho", "img10.jpg"],
              ["10-23", "11-21", "Renato Augusto", "img11.png"],
              ["11-22", "12-21", "Balbuena","img12.jpg"],
              ["12-22", "12-31", "Sócrates", "img1.jpg"]];

var lLimpar = false;

function exibir(){
    if(lLimpar =! lLimpar){


        // Pega a data digitada
        var dataDig = document.getElementById("data").value;
        // Converte para data
        var data = new Date(dataDig);
        // Separa o dia, mês e ano.
        var dia = data.getDate()+1;

        var mes = data.getMonth()+1;
        
        var ano = data.getYear();
        var dataVetor;
        // Cria a data para comparação
        var novaData = new Date(mes+"-"+dia+"-"+ano);


    for(var i=0;i<sDatas.length;i++){

        //Junta o ano com a data do vetor para a comparação completa

        dataVetor = sDatas[i][0]+"-"+ano;
        dataSig1 = new Date(dataVetor);
        dataVetor = sDatas[i][1]+"-"+ano;
        dataSig2 = new Date(dataVetor);

        // Faz a comparação

        if(novaData >= dataSig1 && novaData<=dataSig2){
            document.getElementById("resposta").innerHTML=sDatas[i][2];
            document.getElementById("signoimg").src="imagens/"+sDatas[i][3];
            document.getElementById("botao").innerHTML = "LIMPAR";
            document.getElementById("data").disabled = true;

        }

    }

} else{
    document.getElementById("resposta").innerHTML ="";
    document.getElementById("signoimg").src="imagens/banner.jpg";
    document.getElementById("botao").innerHTML = "EXIBIR";
    document.getElementById("data").value = "";
    document.getElementById("data").focus;
    document.getElementById("data").disabled = false;
}

}