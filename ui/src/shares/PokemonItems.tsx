interface Pokemon {
    name: string;
    url: string;
  }
  
  interface PokemonData {
    sprites: {
      front_default: string;
    };
  }

interface PokemonItemProps extends Pokemon {
    isFavorite: boolean;
    toggleFavorite: (name: string) => void;
  }