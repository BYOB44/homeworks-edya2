import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useMusicContext } from "../../../context/MusicContext";
import type { ICreateSong } from "../../../interfaces/song.interface";

export function AddSongForm() {
  const { addSong } = useMusicContext();

  const [formData, setFormData] = useState<ICreateSong>({
    title: "",
    artist: "",
    genre: "",
    imageUrl: "",
  });

  const [message, setMessage] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (
      formData.title.trim().length === 0 ||
      formData.artist.trim().length === 0 ||
      formData.genre.trim().length === 0
    ) {
      setMessage("Completa nombre, artista y género.");
      return;
    }

    addSong({
      title: formData.title.trim(),
      artist: formData.artist.trim(),
      genre: formData.genre.trim(),
      imageUrl:
        formData.imageUrl !== undefined && formData.imageUrl.trim().length > 0
          ? formData.imageUrl.trim()
          : undefined,
    });

    setFormData({
      title: "",
      artist: "",
      genre: "",
      imageUrl: "",
    });

    setMessage("Canción agregada correctamente.");
  };

  return (
    <section className="panel">
      <div className="panel__header">
        <h2>Agregar nueva canción</h2>
        <span>Insert</span>
      </div>

      <form className="song-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Nombre de la canción"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="artist"
          placeholder="Artista"
          value={formData.artist}
          onChange={handleChange}
        />

        <input
          type="text"
          name="genre"
          placeholder="Género"
          value={formData.genre}
          onChange={handleChange}
        />

        <input
          type="text"
          name="imageUrl"
          placeholder="URL de imagen opcional"
          value={formData.imageUrl}
          onChange={handleChange}
        />

        <button type="submit">Agregar canción</button>
      </form>

      {message.length > 0 && <p className="result-message">{message}</p>}
    </section>
  );
}