import React from "react";
import './home.css'

function Home() {
    return (
        <div className="container-fluid">
            <br />
            <h1>Guia para Iniciantes</h1>
            <br />
            <br />
            <h3> 50 Dicas de Musculação para Acelerar Seus Resultados!</h3>
            <a href="https://treinomestre.com.br/dicas-de-musculacao/" target="blank">Ver mais </a>
            <hr />
            <br />
            <h3> Análise eletromiográfica do levantamento terra </h3>
            <a href="https://treinomestre.com.br/analise-eletromiografica-levantamento-terra/" target="blank">Ver mais </a>
            <hr />
            <br />
            <h3> Exercícios isolados: quais são? para que servem? quando utilizar? </h3>
            <a href="https://treinomestre.com.br/exercicios-isolados-usar-ou-nao-em-meu-treino/" target="blank">Ver mais </a>
            <hr />
            <br />
            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <a class="page-link">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active" aria-current="page">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
