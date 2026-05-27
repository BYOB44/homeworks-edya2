import { useMemo } from "react";
import { Trie } from "../algorithms/Trie";
import { MaxHeap } from "../algorithms/MaxHeap";
import { SongGraph } from "../algorithms/SongGraph";
import { songs } from "../data/songs";
import { songRelations } from "../data/songRelations";
import type{ ISong } from "../interfaces/song.interface";

export interface IUseMusicPlatform {
  songs: ISong[];
  searchSong: (title: string) => boolean;
  getSuggestions: (prefix: string) => ISong[];
  getTopSongs: (quantity: number) => ISong[];
  getRecommendations: (songId: string) => ISong[];
}

export function useMusicPlatform(): IUseMusicPlatform {
  const trie = useMemo<Trie>(() => {
    const newTrie = new Trie();

    songs.forEach((song: ISong) => {
      newTrie.insert(song);
    });

    return newTrie;
  }, []);

  const maxHeap = useMemo<MaxHeap>(() => {
    return new MaxHeap(songs);
  }, []);

  const songGraph = useMemo<SongGraph>(() => {
    const graph = new SongGraph();

    songs.forEach((song: ISong) => {
      graph.addNode(song.id);
    });

    songRelations.forEach((relation: [string, string]) => {
      graph.addEdge(relation[0], relation[1]);
    });

    return graph;
  }, []);

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
    searchSong,
    getSuggestions,
    getTopSongs,
    getRecommendations,
  };
}