const animalList = [
  {
    name: "Frog",
    url: "http://thecyberbuddy.com/sounds/frog.wav",
  },
  {
    name: "Dog",
    url: "http://cd.textfiles.com/640swstudio/WAV/BARK.WAV",
  },
  {
    name: "Cat",
    url: "http://d21c.com/ljesun/sounds/cat_meow1.wav",
  },
  {
    name: "Sheep",
    url: "http://5.135.181.229/downloads/cstrike/sound/misc/sheep.wav",
  },
  {
    name: "Elephant",
    url: "http://www.fynsgade.dk/kenya/elephnt1.wav",
  },
  {
    name: "Sea Lion",
    url: "http://cd.textfiles.com/sbsw/ANIMALS/SEALION.WAV",
  },
  {
    name: "Panther",
    url: "http://www.mscs.mu.edu/~mikes/174/demos/Win98sounds/Jungle%20Exclamation.wav",
  },
]

export function useAnimalSounds() {
  var randomAnimal = animalList[Math.floor(Math.random() * animalList.length)]
  var animal = {
    name: randomAnimal.name,
    url: randomAnimal.url,
  }
  return animal
}
