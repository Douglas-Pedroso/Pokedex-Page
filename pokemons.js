const pokemons = [
  {
    id: 1,
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    height: 7,
    weight: 69,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif",
    evolvesTo: "Ivysaur",
    description:
      "Há uma semente de planta em suas costas desde o dia em que este Pokémon nasceu. A semente cresce lentamente.",
  },
  {
    id: 2,
    name: "Ivysaur",
    type: ["Grass", "Poison"],
    height: 10,
    weight: 130,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif",
    evolvesTo: "Venusaur",
    description:
      "Quando o bulbo em suas costas cresce, parece perder a capacidade de ficar de pé nas patas traseiras.",
  },
  {
    id: 3,
    name: "Venusaur",
    type: ["Grass", "Poison"],
    height: 20,
    weight: 1000,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif",
    evolvesTo: null,
    description:
      "Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar o sol.",
  },
  {
    id: 4,
    name: "Charmander",
    type: ["Fire"],
    height: 6,
    weight: 85,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif",
    evolvesTo: "Charmeleon",
    description:
      "A chama que arde na ponta de sua cauda é um indicador de suas emoções.",
  },
  {
    id: 5,
    name: "Charmeleon",
    type: ["Fire"],
    height: 11,
    weight: 190,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif",
    evolvesTo: "Charizard",
    description:
      "Quando ele balança sua cauda em chamas, a temperatura ao redor aumenta drasticamente.",
  },
  {
    id: 6,
    name: "Charizard",
    type: ["Fire", "Flying"],
    height: 17,
    weight: 905,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif",
    evolvesTo: null,
    description:
      "Cospe fogo quente o suficiente para derreter pedras. Pode causar incêndios florestais soprando chamas.",
  },
  {
    id: 7,
    name: "Squirtle",
    type: ["Water"],
    height: 5,
    weight: 90,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif",
    evolvesTo: "Wartortle",
    description:
      "Quando retraído em sua concha, ele pode disparar água como se fosse um canhão.",
  },
  {
    id: 8,
    name: "Wartortle",
    type: ["Water"],
    height: 10,
    weight: 225,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif",
    evolvesTo: "Blastoise",
    description:
      "Tem uma cauda peluda que aumenta de tamanho à medida que envelhece. Usa a força da água para lutar.",
  },
  {
    id: 9,
    name: "Blastoise",
    type: ["Water"],
    height: 16,
    weight: 855,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif",
    evolvesTo: null,
    description:
      "Os canhões em suas costas lançam jatos de água com força incrível. Protege-se com a carapaça robusta.",
  },
  {
    id: 10,
    name: "Caterpie",
    type: ["Bug"],
    height: 3,
    weight: 29,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif",
    evolvesTo: "Metapod",
    description:
      "Uma lagarta pequena que se move devagar e deixa um líquido fétido para se defender.",
  },
  {
    id: 11,
    name: "Metapod",
    type: ["Bug"],
    height: 7,
    weight: 99,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/metapod.gif",
    evolvesTo: "Butterfree",
    description:
      "É um casulo imóvel que endurece seu corpo para proteção. Aguarda a hora de evoluir.",
  },
  {
    id: 12,
    name: "Butterfree",
    type: ["Bug", "Flying"],
    height: 11,
    weight: 320,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif",
    evolvesTo: null,
    description:
      "Borboleta Pokémon com asas coloridas. Pode criar tempestades de pó mágico.",
  },
  {
    id: 13,
    name: "Weedle",
    type: ["Bug", "Poison"],
    height: 3,
    weight: 32,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/weedle.gif",
    evolvesTo: "Kakuna",
    description:
      "Pequeno Pokémon larval. Possui ferrão venenoso para se defender.",
  },
  {
    id: 14,
    name: "Kakuna",
    type: ["Bug", "Poison"],
    height: 6,
    weight: 100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/kakuna.gif",
    evolvesTo: "Beedrill",
    description:
      "Casulo imóvel que protege seu corpo enquanto se prepara para evoluir.",
  },
  {
    id: 15,
    name: "Beedrill",
    type: ["Bug", "Poison"],
    height: 10,
    weight: 295,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif",
    evolvesTo: null,
    description: "Possui três ferrões potentes. Ataques rápidos e precisos.",
  },
  {
    id: 16,
    name: "Pidgey",
    type: ["Normal", "Flying"],
    height: 3,
    weight: 18,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/pidgey.gif",
    evolvesTo: "Pidgeotto",
    description: "Pequeno pássaro Pokémon. Voa rapidamente em rajadas curtas.",
  },
  {
    id: 17,
    name: "Pidgeotto",
    type: ["Normal", "Flying"],
    height: 11,
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif",
    evolvesTo: "Pidgeot",
    description:
      "Mais forte que o Pidgey, patrulha seu território com precisão.",
  },
  {
    id: 18,
    name: "Pidgeot",
    type: ["Normal", "Flying"],
    height: 15,
    weight: 395,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif",
    evolvesTo: null,
    description:
      "Extremamente rápido. Suas asas longas proporcionam grandes velocidades de voo.",
  },
  {
    id: 19,
    name: "Rattata",
    type: ["Normal"],
    height: 3,
    weight: 35,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif",
    evolvesTo: "Raticate",
    description: "Rato Pokémon com dentes afiados. Rápido e agressivo.",
  },
  {
    id: 20,
    name: "Raticate",
    type: ["Normal"],
    height: 7,
    weight: 185,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif",
    evolvesTo: null,
    description: "Possui dentes extremamente fortes. Rápido e territorial.",
  },
  {
    id: 21,
    name: "Spearow",
    type: ["Normal", "Flying"],
    height: 3,
    weight: 20,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/spearow.gif",
    evolvesTo: "Fearow",
    description: "Pássaro pequeno, mas feroz. Pode atacar com precisão.",
  },
  {
    id: 22,
    name: "Fearow",
    type: ["Normal", "Flying"],
    height: 12,
    weight: 380,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/fearow.gif",
    evolvesTo: null,
    description:
      "Grande pássaro Pokémon. Voa por longas distâncias com velocidade.",
  },
  {
    id: 23,
    name: "Ekans",
    type: ["Poison"],
    height: 20,
    weight: 69,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/ekans.gif",
    evolvesTo: "Arbok",
    description: "Cobra Pokémon venenosa. Se enrola para atacar com rapidez.",
  },
  {
    id: 24,
    name: "Arbok",
    type: ["Poison"],
    height: 35,
    weight: 650,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/arbok.gif",
    evolvesTo: null,
    description: "Cobra poderosa. Seu padrão assustador intimida adversários.",
  },
  {
    id: 25,
    name: "Pikachu",
    type: ["Electric"],
    height: 4,
    weight: 60,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif",
    evolvesTo: "Raichu",
    description: "Pokémon elétrico. Armazena eletricidade nas bochechas.",
  },
  {
    id: 26,
    name: "Raichu",
    type: ["Electric"],
    height: 8,
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif",
    evolvesTo: null,
    description:
      "Pokémon elétrico poderoso. Pode descarregar grandes quantidades de eletricidade.",
  },
  {
    id: 27,
    name: "Sandshrew",
    type: ["Ground"],
    height: 6,
    weight: 120,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/sandshrew.gif",
    evolvesTo: "Sandslash",
    description:
      "Pokémon terrestre. Usa suas garras para cavar túneis rapidamente.",
  },
  {
    id: 28,
    name: "Sandslash",
    type: ["Ground"],
    height: 10,
    weight: 295,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/sandslash.gif",
    evolvesTo: null,
    description:
      "Possui espinhos afiados nas costas. Pode enrolar-se e atacar rapidamente.",
  },
  {
    id: 29,
    name: "Nidoran♀",
    type: ["Poison"],
    height: 4,
    weight: 70,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-f.gif",
    evolvesTo: "Nidorina",
    description: "Pequeno Pokémon venenoso. Tem ferrões nas orelhas.",
  },
  {
    id: 30,
    name: "Nidorina",
    type: ["Poison"],
    height: 8,
    weight: 200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/nidorina.gif",
    evolvesTo: "Nidoqueen",
    description: "Mais forte que Nidoran♀. Protege seu território com ferrões.",
  },
  {
    id: 31,
    name: "Nidoqueen",
    type: ["Poison", "Ground"],
    height: 13,
    weight: 600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/nidoqueen.gif",
    evolvesTo: null,
    description: "Grande e poderosa. Sua pele é dura e resistente a ataques.",
  },
  {
    id: 32,
    name: "Nidoran♂",
    type: ["Poison"],
    height: 5,
    weight: 90,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-m.gif",
    evolvesTo: "Nidorino",
    description: "Pokémon venenoso masculino. Pequeno mas ágil.",
  },
  {
    id: 33,
    name: "Nidorino",
    type: ["Poison"],
    height: 9,
    weight: 195,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/nidorino.gif",
    evolvesTo: "Nidoking",
    description: "Mais forte que Nidoran♂. Possui chifres venenosos afiados.",
  },
  {
    id: 34,
    name: "Nidoking",
    type: ["Poison", "Ground"],
    height: 14,
    weight: 620,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/nidoking.gif",
    evolvesTo: null,
    description:
      "Grande e imponente. Usa seus chifres para atacar adversários.",
  },
  {
    id: 35,
    name: "Clefairy",
    type: ["Fairy"],
    height: 6,
    weight: 75,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/clefairy.gif",
    evolvesTo: "Clefable",
    description:
      "Pokémon fofo. Adora a luz da lua e pode evoluir com Pedra da Lua.",
  },
  {
    id: 36,
    name: "Clefable",
    type: ["Fairy"],
    height: 13,
    weight: 400,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/clefable.gif",
    evolvesTo: null,
    description: "Pokémon elegante. Adora a lua e possui poderes místicos.",
  },
  {
    id: 37,
    name: "Vulpix",
    type: ["Fire"],
    height: 6,
    weight: 99,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/vulpix.gif",
    evolvesTo: "Ninetales",
    description:
      "Pequeno Pokémon de fogo. Possui seis caudas que brilham com calor.",
  },
  {
    id: 38,
    name: "Ninetales",
    type: ["Fire"],
    height: 11,
    weight: 199,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/ninetales.gif",
    evolvesTo: null,
    description:
      "Elegante e místico. Suas caudas possuem poderes sobrenaturais.",
  },
  {
    id: 39,
    name: "Jigglypuff",
    type: ["Normal", "Fairy"],
    height: 5,
    weight: 55,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif",
    evolvesTo: "Wigglytuff",
    description: "Pokémon fofo que canta para adormecer seus adversários.",
  },
  {
    id: 40,
    name: "Wigglytuff",
    type: ["Normal", "Fairy"],
    height: 10,
    weight: 120,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/wigglytuff.gif",
    evolvesTo: null,
    description: "Grande e fofo. Possui habilidades de canto hipnotizantes.",
  },
  {
    id: 41,
    name: "Zubat",
    type: ["Poison", "Flying"],
    height: 8,
    weight: 75,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/zubat.gif",
    evolvesTo: "Golbat",
    description:
      "Pokémon morcego. Usa eco-localização para navegar em cavernas escuras.",
  },
  {
    id: 42,
    name: "Golbat",
    type: ["Poison", "Flying"],
    height: 16,
    weight: 550,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/golbat.gif",
    evolvesTo: null,
    description:
      "Grande morcego que suga sangue de presas com suas presas afiadas.",
  },
  {
    id: 43,
    name: "Oddish",
    type: ["Grass", "Poison"],
    height: 5,
    weight: 54,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/oddish.gif",
    evolvesTo: "Gloom",
    description:
      "Pequena planta ambulante. Sente a luz da lua e do sol para crescer.",
  },
  {
    id: 44,
    name: "Gloom",
    type: ["Grass", "Poison"],
    height: 8,
    weight: 86,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/gloom.gif",
    evolvesTo: "Vileplume",
    description: "Exala um odor fétido para proteger-se de predadores.",
  },
  {
    id: 45,
    name: "Vileplume",
    type: ["Grass", "Poison"],
    height: 12,
    weight: 186,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/vileplume.gif",
    evolvesTo: null,
    description: "Possui uma grande flor que exala pólen venenoso.",
  },
  {
    id: 46,
    name: "Paras",
    type: ["Bug", "Grass"],
    height: 3,
    weight: 54,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/paras.gif",
    evolvesTo: "Parasect",
    description:
      "Pequeno Pokémon inseto com cogumelos crescendo em suas costas.",
  },
  {
    id: 47,
    name: "Parasect",
    type: ["Bug", "Grass"],
    height: 10,
    weight: 295,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/parasect.gif",
    evolvesTo: null,
    description:
      "Cogumelo dominante em suas costas controla o Paras. Mais forte que o normal.",
  },
  {
    id: 48,
    name: "Venonat",
    type: ["Bug", "Poison"],
    height: 10,
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/venonat.gif",
    evolvesTo: "Venomoth",
    description:
      "Pokémon coberto por pelos roxos. Possui olhos grandes e redondos que brilham à noite.",
  },
  {
    id: 49,
    name: "Venomoth",
    type: ["Bug", "Poison"],
    height: 15,
    weight: 125,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/venomoth.gif",
    evolvesTo: null,
    description:
      "Voa silenciosamente à noite, espalhando pólen venenoso de suas asas.",
  },
  {
    id: 50,
    name: "Diglett",
    type: ["Ground"],
    height: 2,
    weight: 8,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/diglett.gif",
    evolvesTo: "Dugtrio",
    description:
      "Pequeno Pokémon que vive debaixo da terra, surge apenas com a cabeça.",
  },
  {
    id: 51,
    name: "Dugtrio",
    type: ["Ground"],
    height: 7,
    weight: 333,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/dugtrio.gif",
    evolvesTo: null,
    description:
      "Trio de Diglett que se move rapidamente embaixo da terra, podendo causar terremotos.",
  },
  {
    id: 52,
    name: "Meowth",
    type: ["Normal"],
    height: 4,
    weight: 42,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif",
    evolvesTo: "Persian",
    description: "Pokémon felino. Gosta de colecionar moedas brilhantes.",
  },
  {
    id: 53,
    name: "Persian",
    type: ["Normal"],
    height: 10,
    weight: 320,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/persian.gif",
    evolvesTo: null,
    description:
      "Elegante e ágil. Considera-se o mais nobre dos felinos Pokémon.",
  },
  {
    id: 54,
    name: "Psyduck",
    type: ["Water"],
    height: 8,
    weight: 196,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif",
    evolvesTo: "Golduck",
    description:
      "Pokémon com dores de cabeça frequentes. Pode usar poderes psíquicos.",
  },
  {
    id: 55,
    name: "Golduck",
    type: ["Water"],
    height: 17,
    weight: 766,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/golduck.gif",
    evolvesTo: null,
    description: "Rápido nadador que usa habilidades psíquicas e força física.",
  },
  {
    id: 56,
    name: "Mankey",
    type: ["Fighting"],
    height: 5,
    weight: 280,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/mankey.gif",
    evolvesTo: "Primeape",
    description:
      "Pokémon agressivo. Quando fica bravo, corre em círculos para descontar.",
  },
  {
    id: 57,
    name: "Primeape",
    type: ["Fighting"],
    height: 10,
    weight: 320,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/primeape.gif",
    evolvesTo: null,
    description:
      "Pokémon extremamente agressivo. Persegue adversários até que fique exausto.",
  },
  {
    id: 58,
    name: "Growlithe",
    type: ["Fire"],
    height: 7,
    weight: 190,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/growlithe.gif",
    evolvesTo: "Arcanine",
    description:
      "Leal e protetor. Seu fogo é poderoso, mas ele é amigável com seu treinador.",
  },
  {
    id: 59,
    name: "Arcanine",
    type: ["Fire"],
    height: 19,
    weight: 1550,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif",
    evolvesTo: null,
    description:
      "Grande e majestoso. Corre a velocidades incríveis, carregando seu treinador com confiança.",
  },
  {
    id: 60,
    name: "Poliwag",
    type: ["Water"],
    height: 6,
    weight: 124,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/poliwag.gif",
    evolvesTo: "Poliwhirl",
    description:
      "Pokémon aquático com corpo gelatinoso. Seus padrões na barriga mudam com a idade.",
  },
  {
    id: 61,
    name: "Poliwhirl",
    type: ["Water"],
    height: 10,
    weight: 200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/poliwhirl.gif",
    evolvesTo: "Poliwrath",
    description: "Ágil nadador. Usa movimentos de luta quando ameaçado.",
  },
  {
    id: 62,
    name: "Poliwrath",
    type: ["Water", "Fighting"],
    height: 13,
    weight: 540,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/poliwrath.gif",
    evolvesTo: null,
    description:
      "Forte e resistente. Combina técnicas aquáticas e de luta com perfeição.",
  },
  {
    id: 63,
    name: "Abra",
    type: ["Psychic"],
    height: 9,
    weight: 195,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/abra.gif",
    evolvesTo: "Kadabra",
    description:
      "Passa a maior parte do tempo dormindo. Teleporta-se para escapar de perigo.",
  },
  {
    id: 64,
    name: "Kadabra",
    type: ["Psychic"],
    height: 13,
    weight: 565,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/kadabra.gif",
    evolvesTo: "Alakazam",
    description:
      "Usa poderes psíquicos avançados. É extremamente inteligente e alerta.",
  },
  {
    id: 65,
    name: "Alakazam",
    type: ["Psychic"],
    height: 15,
    weight: 480,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif",
    evolvesTo: null,
    description:
      "Poderoso psíquico. Sua mente é capaz de calcular e prever movimentos inimigos com precisão.",
  },
  {
    id: 66,
    name: "Machop",
    type: ["Fighting"],
    height: 8,
    weight: 195,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/machop.gif",
    evolvesTo: "Machoke",
    description:
      "Fortes músculos. Treina incessantemente para evoluir e se tornar mais forte.",
  },
  {
    id: 67,
    name: "Machoke",
    type: ["Fighting"],
    height: 15,
    weight: 705,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/machoke.gif",
    evolvesTo: "Machamp",
    description:
      "Pokémon musculoso. Treina incansavelmente e ajuda outros em trabalhos pesados.",
  },
  {
    id: 68,
    name: "Machamp",
    type: ["Fighting"],
    height: 16,
    weight: 1300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif",
    evolvesTo: null,
    description:
      "Poderoso lutador com quatro braços. Consegue derrotar múltiplos adversários com facilidade.",
  },
  {
    id: 69,
    name: "Bellsprout",
    type: ["Grass", "Poison"],
    height: 7,
    weight: 40,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/bellsprout.gif",
    evolvesTo: "Weepinbell",
    description:
      "Fica imóvel esperando presas passarem. Usa sua língua pegajosa para capturá-las.",
  },
  {
    id: 70,
    name: "Weepinbell",
    type: ["Grass", "Poison"],
    height: 10,
    weight: 64,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/weepinbell.gif",
    evolvesTo: "Victreebel",
    description:
      "Feroz predador de plantas. Possui boca grande para engolir suas presas inteiras.",
  },
  {
    id: 71,
    name: "Victreebel",
    type: ["Grass", "Poison"],
    height: 17,
    weight: 155,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/victreebel.gif",
    evolvesTo: null,
    description:
      "Armadilha viva. Atrai presas com aroma doce e as consome com sua enorme boca.",
  },
  {
    id: 72,
    name: "Tentacool",
    type: ["Water", "Poison"],
    height: 9,
    weight: 455,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/tentacool.gif",
    evolvesTo: "Tentacruel",
    description:
      "Vive no mar aberto. Usa seus tentáculos para se defender e capturar presas.",
  },
  {
    id: 73,
    name: "Tentacruel",
    type: ["Water", "Poison"],
    height: 16,
    weight: 550,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/tentacruel.gif",
    evolvesTo: null,
    description:
      "Formidável Pokémon aquático. Seus tentáculos venenosos podem incapacitar adversários.",
  },
  {
    id: 74,
    name: "Geodude",
    type: ["Rock", "Ground"],
    height: 4,
    weight: 200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/geodude.gif",
    evolvesTo: "Graveler",
    description:
      "Fica entre rochas. Usa força bruta para empurrar ou derrubar inimigos.",
  },
  {
    id: 75,
    name: "Graveler",
    type: ["Rock", "Ground"],
    height: 10,
    weight: 1050,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/graveler.gif",
    evolvesTo: "Golem",
    description:
      "Lança-se em alta velocidade. Seu corpo pesado e rochoso causa grandes danos.",
  },
  {
    id: 76,
    name: "Golem",
    type: ["Rock", "Ground"],
    height: 14,
    weight: 3000,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/golem.gif",
    evolvesTo: null,
    description:
      "Pokémon blindado e resistente. Usa seus braços rochosos para ataques devastadores.",
  },
  {
    id: 77,
    name: "Ponyta",
    type: ["Fire"],
    height: 10,
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/ponyta.gif",
    evolvesTo: "Rapidash",
    description:
      "Corre a grande velocidade. Suas chamas na crina e cauda iluminam o caminho.",
  },
  {
    id: 78,
    name: "Rapidash",
    type: ["Fire"],
    height: 17,
    weight: 950,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/rapidash.gif",
    evolvesTo: null,
    description:
      "Majestoso e veloz. Pode alcançar altas velocidades e é difícil de capturar.",
  },
  {
    id: 79,
    name: "Slowpoke",
    type: ["Water", "Psychic"],
    height: 12,
    weight: 360,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/slowpoke.gif",
    evolvesTo: "Slowbro",
    description:
      "Lento e despreocupado. Fica à beira da água, observando o mundo ao redor.",
  },
  {
    id: 80,
    name: "Slowbro",
    type: ["Water", "Psychic"],
    height: 16,
    weight: 785,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/slowbro.gif",
    evolvesTo: null,
    description:
      "Tem um caramujo preso à cauda. Ganha inteligência, mas ainda é lento.",
  },
  {
    id: 81,
    name: "Magnemite",
    type: ["Electric", "Steel"],
    height: 3,
    weight: 60,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/magnemite.gif",
    evolvesTo: "Magneton",
    description:
      "Flutua usando magnetismo. Pode interferir em aparelhos eletrônicos.",
  },
  {
    id: 82,
    name: "Magneton",
    type: ["Electric", "Steel"],
    height: 10,
    weight: 600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/magneton.gif",
    evolvesTo: null,
    description:
      "Trio de Magnemite. Intensifica campos magnéticos e ataques elétricos.",
  },
  {
    id: 83,
    name: "Farfetch'd",
    type: ["Normal", "Flying"],
    height: 8,
    weight: 150,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/farfetchd.gif",
    evolvesTo: null,
    description:
      "Sempre carrega um talo de planta. Usa-o para atacar e se defender.",
  },
  {
    id: 84,
    name: "Doduo",
    type: ["Normal", "Flying"],
    height: 14,
    weight: 392,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/doduo.gif",
    evolvesTo: "Dodrio",
    description:
      "Possui duas cabeças. Corre a alta velocidade e é difícil de confundir.",
  },
  {
    id: 85,
    name: "Dodrio",
    type: ["Normal", "Flying"],
    height: 18,
    weight: 852,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/dodrio.gif",
    evolvesTo: null,
    description:
      "Três cabeças. Cada cabeça pensa de forma independente, tornando-o imprevisível.",
  },
  {
    id: 86,
    name: "Seel",
    type: ["Water"],
    height: 11,
    weight: 900,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/seel.gif",
    evolvesTo: "Dewgong",
    description:
      "Vive em águas frias. Usa sua cauda e barbatanas para nadar ágilmente.",
  },
  {
    id: 87,
    name: "Dewgong",
    type: ["Water", "Ice"],
    height: 17,
    weight: 1200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/dewgong.gif",
    evolvesTo: null,
    description:
      "Desliza pelo gelo com facilidade. Consegue nadar rapidamente em águas geladas.",
  },
  {
    id: 88,
    name: "Grimer",
    type: ["Poison"],
    height: 9,
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/grimer.gif",
    evolvesTo: "Muk",
    description:
      "Massa de poluição viva. Seu corpo venenoso dissolve quase tudo que toca.",
  },
  {
    id: 89,
    name: "Muk",
    type: ["Poison"],
    height: 12,
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/muk.gif",
    evolvesTo: null,
    description:
      "Acumula poluição em seu corpo. Libera gases tóxicos e gruda nos inimigos.",
  },
  {
    id: 90,
    name: "Shellder",
    type: ["Water"],
    height: 3,
    weight: 40,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/shellder.gif",
    evolvesTo: "Cloyster",
    description: "Fechado em sua concha, ataca com rapidez quando ameaçado.",
  },
  {
    id: 91,
    name: "Cloyster",
    type: ["Water", "Ice"],
    height: 15,
    weight: 1325,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/cloyster.gif",
    evolvesTo: null,
    description:
      "Possui concha resistente. Lança agulhas afiadas para atacar inimigos.",
  },
  {
    id: 92,
    name: "Gastly",
    type: ["Ghost", "Poison"],
    height: 13,
    weight: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/gastly.gif",
    evolvesTo: "Haunter",
    description:
      "Massa de gás venenoso. Flutua e assusta inimigos usando sombras.",
  },
  {
    id: 93,
    name: "Haunter",
    type: ["Ghost", "Poison"],
    height: 16,
    weight: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/haunter.gif",
    evolvesTo: "Gengar",
    description:
      "Assombra com travessuras. Pode atravessar paredes e desaparecer rapidamente.",
  },
  {
    id: 94,
    name: "Gengar",
    type: ["Ghost", "Poison"],
    height: 15,
    weight: 405,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif",
    evolvesTo: null,
    description:
      "Mestre das sombras. Cria ilusões para confundir e atacar adversários.",
  },
  {
    id: 95,
    name: "Onix",
    type: ["Rock", "Ground"],
    height: 88,
    weight: 2100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/onix.gif",
    evolvesTo: null,
    description:
      "Gigantesco Pokémon de pedra. Pode cavar túneis rapidamente com sua cauda rochosa.",
  },
  {
    id: 96,
    name: "Drowzee",
    type: ["Psychic"],
    height: 10,
    weight: 324,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/drowzee.gif",
    evolvesTo: "Hypno",
    description:
      "Usa poderes psíquicos para colocar inimigos para dormir. Vive em florestas.",
  },
  {
    id: 97,
    name: "Hypno",
    type: ["Psychic"],
    height: 16,
    weight: 756,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/hypno.gif",
    evolvesTo: null,
    description:
      "Usa seu pêndulo para hipnotizar adversários e controlar sonhos.",
  },
  {
    id: 98,
    name: "Krabby",
    type: ["Water"],
    height: 4,
    weight: 65,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/krabby.gif",
    evolvesTo: "Kingler",
    description:
      "Pequeno mas agressivo. Possui pinças fortes para atacar e defender-se.",
  },
  {
    id: 99,
    name: "Kingler",
    type: ["Water"],
    height: 13,
    weight: 600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/kingler.gif",
    evolvesTo: null,
    description:
      "Pinça gigante e poderosa. Pode esmagar rochas com facilidade.",
  },
  {
    id: 100,
    name: "Voltorb",
    type: ["Electric"],
    height: 5,
    weight: 104,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif",
    evolvesTo: "Electrode",
    description:
      "Parece uma bola, mas explode quando ameaçado. Energia elétrica intensa.",
  },
  {
    id: 101,
    name: "Electrode",
    type: ["Electric"],
    height: 12,
    weight: 666,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/electrode.gif",
    evolvesTo: null,
    description:
      "Maior e mais potente que Voltorb. Pode liberar energia elétrica massiva.",
  },
  {
    id: 102,
    name: "Exeggcute",
    type: ["Grass", "Psychic"],
    height: 4,
    weight: 25,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/exeggcute.gif",
    evolvesTo: "Exeggutor",
    description:
      "Grupo de ovos com poder psíquico. Fala telepaticamente com parceiros.",
  },
  {
    id: 103,
    name: "Exeggutor",
    type: ["Grass", "Psychic"],
    height: 20,
    weight: 1200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/exeggutor.gif",
    evolvesTo: null,
    description:
      "Palmácea gigante. Cada cabeça possui inteligência própria e poderes psíquicos.",
  },
  {
    id: 104,
    name: "Cubone",
    type: ["Ground"],
    height: 4,
    weight: 65,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/cubone.gif",
    evolvesTo: "Marowak",
    description:
      "Carrega o osso de sua mãe falecida. Solitário e triste, mas forte.",
  },
  {
    id: 105,
    name: "Marowak",
    type: ["Ground"],
    height: 10,
    weight: 450,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/marowak.gif",
    evolvesTo: null,
    description:
      "Protetor do osso que carrega. Forte e resistente, pode atacar com precisão.",
  },
  {
    id: 106,
    name: "Hitmonlee",
    type: ["Fighting"],
    height: 15,
    weight: 498,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/hitmonlee.gif",
    evolvesTo: null,
    description:
      "Especialista em chutes. Flexível e ágil, domina a arte do combate.",
  },
  {
    id: 107,
    name: "Hitmonchan",
    type: ["Fighting"],
    height: 14,
    weight: 502,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/hitmonchan.gif",
    evolvesTo: null,
    description:
      "Especialista em socos. Ágil e poderoso, domina a arte do boxe.",
  },
  {
    id: 108,
    name: "Lickitung",
    type: ["Normal"],
    height: 12,
    weight: 655,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/lickitung.gif",
    evolvesTo: null,
    description:
      "Possui uma língua longa que usa para atacar e explorar o ambiente.",
  },
  {
    id: 109,
    name: "Koffing",
    type: ["Poison"],
    height: 6,
    weight: 10,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/koffing.gif",
    evolvesTo: "Weezing",
    description: "Libera gases tóxicos constantemente. Vive em áreas poluídas.",
  },
  {
    id: 110,
    name: "Weezing",
    type: ["Poison"],
    height: 12,
    weight: 95,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/weezing.gif",
    evolvesTo: null,
    description:
      "Dois corpos que liberam gases venenosos. Poluição em sua forma mais concentrada.",
  },
  {
    id: 111,
    name: "Rhyhorn",
    type: ["Ground", "Rock"],
    height: 10,
    weight: 1150,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/rhyhorn.gif",
    evolvesTo: "Rhydon",
    description:
      "Poderoso Pokémon de pedra e terra. Pode correr velozmente e causar terremotos.",
  },
  {
    id: 112,
    name: "Rhydon",
    type: ["Ground", "Rock"],
    height: 19,
    weight: 1200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/rhydon.gif",
    evolvesTo: null,
    description:
      "Fortaleza ambulante. Sua carapaça é resistente e seu chifre destrói tudo.",
  },
  {
    id: 113,
    name: "Chansey",
    type: ["Normal"],
    height: 11,
    weight: 346,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/chansey.gif",
    evolvesTo: null,
    description:
      "Sempre alegre e carinhosa. Distribui ovos nutritivos aos amigos.",
  },
  {
    id: 114,
    name: "Tangela",
    type: ["Grass"],
    height: 10,
    weight: 350,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/tangela.gif",
    evolvesTo: null,
    description:
      "Coberto de vinhas. Usa-as para atacar e se proteger dos predadores.",
  },
  {
    id: 115,
    name: "Kangaskhan",
    type: ["Normal"],
    height: 22,
    weight: 800,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/kangaskhan.gif",
    evolvesTo: null,
    description: "Protege seu filhote a todo custo. Forte e territorial.",
  },
  {
    id: 116,
    name: "Horsea",
    type: ["Water"],
    height: 4,
    weight: 80,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/horsea.gif",
    evolvesTo: "Seadra",
    description:
      "Peixe pequeno mas ágil. Solta água pela boca para se defender.",
  },
  {
    id: 117,
    name: "Seadra",
    type: ["Water"],
    height: 12,
    weight: 250,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/seadra.gif",
    evolvesTo: null,
    description: "Dragão marinho ágil. Ataca com jatos de água potentes.",
  },
  {
    id: 118,
    name: "Goldeen",
    type: ["Water"],
    height: 6,
    weight: 150,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/goldeen.gif",
    evolvesTo: "Seaking",
    description:
      "Peixe elegante com chifre afiado. Nada rapidamente em rios e lagos.",
  },
  {
    id: 119,
    name: "Seaking",
    type: ["Water"],
    height: 13,
    weight: 390,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/seaking.gif",
    evolvesTo: null,
    description:
      "Majestoso e forte. Usa seu chifre para perfurar presas e proteger-se.",
  },
  {
    id: 120,
    name: "Staryu",
    type: ["Water"],
    height: 8,
    weight: 345,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/staryu.gif",
    evolvesTo: "Starmie",
    description:
      "Estrela-do-mar mística. Pode regenerar partes do corpo e brilhar à noite.",
  },
  {
    id: 121,
    name: "Starmie",
    type: ["Water", "Psychic"],
    height: 11,
    weight: 800,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/starmie.gif",
    evolvesTo: null,
    description:
      "Estrela-do-mar poderosa. Seu núcleo emite energia psíquica intensa.",
  },
  {
    id: 122,
    name: "Mr. Mime",
    type: ["Psychic", "Fairy"],
    height: 13,
    weight: 545,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/mr-mime.gif",
    evolvesTo: null,
    description:
      "Cria barreiras invisíveis e mímicas. Divertido, mas habilidoso em combate.",
  },
  {
    id: 123,
    name: "Scyther",
    type: ["Bug", "Flying"],
    height: 15,
    weight: 560,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/scyther.gif",
    evolvesTo: null,
    description:
      "Inseto ágil com lâminas afiadas. Ataca rapidamente e voa com destreza.",
  },
  {
    id: 124,
    name: "Jynx",
    type: ["Ice", "Psychic"],
    height: 14,
    weight: 406,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/jynx.gif",
    evolvesTo: null,
    description:
      "Poderes psíquicos e gélidos. Dança para enfeitiçar adversários.",
  },
  {
    id: 125,
    name: "Electabuzz",
    type: ["Electric"],
    height: 11,
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/electabuzz.gif",
    evolvesTo: null,
    description: "Gera eletricidade em seu corpo. Ágil e difícil de capturar.",
  },
  {
    id: 126,
    name: "Magmar",
    type: ["Fire"],
    height: 13,
    weight: 445,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/magmar.gif",
    evolvesTo: null,
    description:
      "Corpo em chamas. Ataca com fogo intenso e domina calor extremo.",
  },
  {
    id: 127,
    name: "Pinsir",
    type: ["Bug"],
    height: 15,
    weight: 550,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/pinsir.gif",
    evolvesTo: null,
    description:
      "Inseto poderoso com pinças enormes. Usa suas garras para esmagar adversários.",
  },
  {
    id: 128,
    name: "Tauros",
    type: ["Normal"],
    height: 14,
    weight: 884,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/tauros.gif",
    evolvesTo: null,
    description:
      "Feroz e rápido. Corre em manadas e ataca com chifres afiados.",
  },
  {
    id: 129,
    name: "Magikarp",
    type: ["Water"],
    height: 9,
    weight: 100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/magikarp.gif",
    evolvesTo: "Gyarados",
    description:
      "Peixe fraco e saltitante. Mas evolui para um Pokémon poderoso.",
  },
  {
    id: 130,
    name: "Gyarados",
    type: ["Water", "Flying"],
    height: 65,
    weight: 2350,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif",
    evolvesTo: null,
    description:
      "Feroz dragão aquático. Destrói tudo ao seu redor quando enfurecido.",
  },
  {
    id: 131,
    name: "Lapras",
    type: ["Water", "Ice"],
    height: 25,
    weight: 2200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/lapras.gif",
    evolvesTo: null,
    description:
      "Gentil e inteligente. Transporta pessoas e Pokémon com segurança.",
  },
  {
    id: 132,
    name: "Ditto",
    type: ["Normal"],
    height: 3,
    weight: 40,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/ditto.gif",
    evolvesTo: null,
    description: "Transforma-se em qualquer Pokémon. Muito útil em batalhas.",
  },
  {
    id: 133,
    name: "Eevee",
    type: ["Normal"],
    height: 3,
    weight: 65,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif",
    evolvesTo: "Vaporeon, Jolteon, Flareon...",
    description:
      "Extremamente versátil. Pode evoluir em várias formas diferentes.",
  },
  {
    id: 134,
    name: "Vaporeon",
    type: ["Water"],
    height: 10,
    weight: 290,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/vaporeon.gif",
    evolvesTo: null,
    description:
      "Evolução de Eevee. Corpo aquático que pode se misturar à água.",
  },
  {
    id: 135,
    name: "Jolteon",
    type: ["Electric"],
    height: 8,
    weight: 245,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/jolteon.gif",
    evolvesTo: null,
    description:
      "Evolução elétrica de Eevee. Rápido e capaz de gerar eletricidade intensa.",
  },
  {
    id: 136,
    name: "Flareon",
    type: ["Fire"],
    height: 9,
    weight: 250,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/flareon.gif",
    evolvesTo: null,
    description:
      "Evolução de fogo de Eevee. Lança chamas poderosas e aquece o ambiente.",
  },
  {
    id: 137,
    name: "Porygon",
    type: ["Normal"],
    height: 8,
    weight: 365,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/porygon.gif",
    evolvesTo: null,
    description:
      "Criado digitalmente. Pode se adaptar a qualquer ambiente virtual.",
  },
  {
    id: 138,
    name: "Omanyte",
    type: ["Rock", "Water"],
    height: 4,
    weight: 75,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/omanyte.gif",
    evolvesTo: "Omastar",
    description: "Fóssil antigo. Seus tentáculos ajudam a capturar presas.",
  },
  {
    id: 139,
    name: "Omastar",
    type: ["Rock", "Water"],
    height: 10,
    weight: 350,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/omastar.gif",
    evolvesTo: null,
    description: "Evolução de Omanyte. Feroz e ágil, domina águas profundas.",
  },
  {
    id: 140,
    name: "Kabuto",
    type: ["Rock", "Water"],
    height: 5,
    weight: 115,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/kabuto.gif",
    evolvesTo: "Kabutops",
    description: "Fóssil marinho. Protege-se com sua carapaça resistente.",
  },
  {
    id: 141,
    name: "Kabutops",
    type: ["Rock", "Water"],
    height: 13,
    weight: 405,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/kabutops.gif",
    evolvesTo: null,
    description: "Evolução de Kabuto. Ágil e mortal com lâminas afiadas.",
  },
  {
    id: 142,
    name: "Aerodactyl",
    type: ["Rock", "Flying"],
    height: 18,
    weight: 590,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/aerodactyl.gif",
    evolvesTo: null,
    description:
      "Dragão pré-histórico. Voa rapidamente e domina batalhas aéreas.",
  },
  {
    id: 143,
    name: "Snorlax",
    type: ["Normal"],
    height: 21,
    weight: 4600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif",
    evolvesTo: null,
    description:
      "Gigante preguiçoso. Dorme profundamente e é muito resistente.",
  },
  {
    id: 144,
    name: "Articuno",
    type: ["Ice", "Flying"],
    height: 17,
    weight: 554,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/articuno.gif",
    evolvesTo: null,
    description: "Lendário de gelo. Controla o frio e voa elegantemente.",
  },
  {
    id: 145,
    name: "Zapdos",
    type: ["Electric", "Flying"],
    height: 16,
    weight: 526,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/zapdos.gif",
    evolvesTo: null,
    description:
      "Lendário elétrico. Gera tempestades e descargas elétricas massivas.",
  },
  {
    id: 146,
    name: "Moltres",
    type: ["Fire", "Flying"],
    height: 20,
    weight: 600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/moltres.gif",
    evolvesTo: null,
    description:
      "Lendário de fogo. Suas asas em chamas aquecem o ambiente e atacam adversários.",
  },
  {
    id: 147,
    name: "Dratini",
    type: ["Dragon"],
    height: 18,
    weight: 33,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/dratini.gif",
    evolvesTo: "Dragonair",
    description:
      "Serpente dragão rara. Cresce lentamente e possui grande potencial mágico.",
  },
  {
    id: 148,
    name: "Dragonair",
    type: ["Dragon"],
    height: 40,
    weight: 165,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/dragonair.gif",
    evolvesTo: "Dragonite",
    description:
      "Elegante e místico. Pode controlar o clima e é muito raro de se ver.",
  },
  {
    id: 149,
    name: "Dragonite",
    type: ["Dragon", "Flying"],
    height: 22,
    weight: 2100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif",
    evolvesTo: null,
    description:
      "Extremamente poderoso. Voando rapidamente, é um protetor benevolente.",
  },
  {
    id: 150,
    name: "Mewtwo",
    type: ["Psychic"],
    height: 20,
    weight: 1220,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif",
    evolvesTo: null,
    description:
      "Criado geneticamente. Possui poderes psíquicos fenomenais e é altamente inteligente.",
  },
  {
    id: 151,
    name: "Mew",
    type: ["Psychic"],
    height: 4,
    weight: 40,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    gif: "http://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif",
    evolvesTo: null,
    description:
      "Extremamente raro. Contém o DNA de todos os Pokémon, capaz de aprender qualquer movimento.",
  },
];
