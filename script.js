document.addEventListener("DOMContentLoaded", function() {
    const btnEnviar = document.getElementById("btnEnviar");

    btnEnviar.addEventListener("click", function(event) {
        event.preventDefault();

        const categoria = document.getElementById("categoria").value;
        const nomeFilme = document.getElementById("nome").value;

        if (categoria === "" || nomeFilme === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        const tabela = document.getElementById("tabelaFilmes").getElementsByTagName("tbody")[0];
        const novaLinha = tabela.insertRow();

        const novaCelulaId = novaLinha.insertCell(0);
        const novaCelulaCategoria = novaLinha.insertCell(1);
        const novaCelulaNomeFilme = novaLinha.insertCell(2);

        novaCelulaId.textContent = tabela.rows.length; 
        novaCelulaCategoria.textContent = categoria;
        novaCelulaNomeFilme.textContent = nomeFilme;

        document.getElementById("categoria").value = "";
        document.getElementById("nome").value = "";

        console.log("Filme adicionado com sucesso!");
    });
});

