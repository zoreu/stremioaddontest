exports.run = function(context) {
  // Verifica o tipo de conteúdo que o usuário está tentando acessar
  if (context.type === "movie") {
    // Se o usuário estiver tentando acessar um catálogo de filmes, retorna uma lista de filmes
    return {
      "results": [
        {
          "name": "Filme 1",
          "description": "Um filme incrível!",
          "poster": "https://i.imgur.com/Xt1WLzp.png"
        },
        {
          "name": "Filme 2",
          "description": "Outro filme incrível!",
          "poster": "https://i.imgur.com/Xt1WLzp.png"
        }
      ]
    };
  } else if (context.type === "series") {
    // Se o usuário estiver tentando acessar um catálogo de séries, retorna uma lista de séries
    return {
      "results": [
        {
          "name": "Série 1",
          "description": "Uma série incrivel"
        "poster": "https://i.imgur.com/Xt1WLzp.png"
        },
      {
        "name": "Série 2",
        "description": "Outra série incrível!",
        "poster": "https://i.imgur.com/Xt1WLzp.png"
      }
    ]
  };
}
};
          
