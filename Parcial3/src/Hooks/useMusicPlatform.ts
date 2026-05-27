import { useMemo, useState } from "react";
import { Trie } from "../algorithms/Trie";
import { MaxHeap } from "../algorithms/MaxHeap";
import { SongGraph } from "../algorithms/SongGraph";
import { songs as initialSongs } from "../data/songs";
import { songRelations } from "../data/songRelations";
import type { ICreateSong, ISong } from "../interfaces/song.interface";

export interface IUseMusicPlatform {
  songs: ISong[];
  addSong: (newSong: ICreateSong) => void;
  searchSong: (title: string) => boolean;
  getSuggestions: (prefix: string) => ISong[];
  getTopSongs: (quantity: number) => ISong[];
  getRecommendations: (songId: string) => ISong[];
}

export function useMusicPlatform(): IUseMusicPlatform {
  const [songs, setSongs] = useState<ISong[]>(initialSongs);

  const trie = useMemo<Trie>(() => {
    const newTrie = new Trie();

    songs.forEach((song: ISong) => {
      newTrie.insert(song);
    });

    return newTrie;
  }, [songs]);

  const maxHeap = useMemo<MaxHeap>(() => {
    return new MaxHeap(songs);
  }, [songs]);

  const songGraph = useMemo<SongGraph>(() => {
    const graph = new SongGraph();

    songs.forEach((song: ISong) => {
      graph.addNode(song.id);
    });

    songRelations.forEach((relation: [string, string]) => {
      graph.addEdge(relation[0], relation[1]);
    });

    return graph;
  }, [songs]);

  const addSong = (newSong: ICreateSong): void => {
    const song: ISong = {
      id: `s${Date.now()}`,
      title: newSong.title,
      artist: newSong.artist,
      genre: newSong.genre,
      popularity: 90,
      imageUrl: newSong.imageUrl ?? "",
    };

    setSongs((currentSongs: ISong[]) => [...currentSongs, song]);
  };

  const searchSong = (title: string): boolean => {
    return trie.search(title);
  };

  const getSuggestions = (prefix: string): ISong[] => {
    return trie.getSuggestions(prefix);
  };

  const getTopSongs = (quantity: number): ISong[] => {
    return maxHeap.getTopK(quantity);
  };

  const getRecommendations = (songId: string): ISong[] => {
    const recommendationIds: string[] = songGraph.getRecommendations(songId);

    return recommendationIds
      .map((id: string) => songs.find((song: ISong) => song.id === id))
      .filter((song: ISong | undefined): song is ISong => song !== undefined);
  };

  return {
    songs,
    addSong,
    searchSong,
    getSuggestions,
    getTopSongs,
    getRecommendations,
  };
}