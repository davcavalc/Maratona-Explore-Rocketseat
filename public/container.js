const createContainer = document.querySelector('.container');

createContainer.innerHTML = `

        <img src="https://gist.githubusercontent.com/maykbrito/0acdf4ce919838ffed50915a31fc5b23/raw/6f4dd01ec3116428ec4c99255944cb9ac7927590/cristal-ball.svg"
            alt="Imagem de uma bola de cristal">
        <h1>Vou revelar o seu destino</h1>
        <p>Clique em fazer pergunta para que seu destino seja revelado</p>
        <input id="inputPergunta" type="text" placeholder="Digite sua pergunta" />
        <button id="buttonPerguntar" onclick="fazerPergunta()">Fazer pergunta</button>

`;
