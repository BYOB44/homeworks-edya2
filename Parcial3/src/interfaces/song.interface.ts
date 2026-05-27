export interface ISong {
  id: string;
  title: string;
  artist: string;
  genre: string;
  popularity: number;
  imageUrl: string;
}

export interface ICreateSong {
  title: string;
  artist: string;
  genre: string;
  imageUrl?: string;
}