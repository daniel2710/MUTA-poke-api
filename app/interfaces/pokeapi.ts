export interface pokeInfoPreview{
    name: string;
    url: string;
    details?: pokeInfo;
}

export interface pokeInfo {
    id: number;
    name: string;
    sprites: {
      front_default: string;
      back_default: string;
      [key: string]: string | null;
    };
    types: Array<{
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }>;
    abilities: Array<{
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }>;
}
  

export interface pokeList{
    count: number;
    next: string | null;
    previous: string | null;
    results: pokeInfoPreview[];
    details?: pokeInfo | any;
}
