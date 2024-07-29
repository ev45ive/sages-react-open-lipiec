import React, { ChangeEventHandler, useState } from "react";
import { Playlist } from "../../core/model/Playlist";

type Props = { playlist: Playlist };

const PlaylistEditor = ({ playlist: initialPlaylist }: Props) => {
  const [playlist, setPlaylist] = useState(initialPlaylist);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPlaylist({ ...playlist, name: event.target.value });
  };

  return (
    <div>
      <div className="grid gap-3">
        <div className="grid">
          <label>Name</label>
          <input type="text" value={playlist.name} onChange={changeHandler} />
          <div className="text-end">{playlist.name.length} / 100</div>
        </div>

        <div className="grid ">
          <label className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={playlist.public}
              onChange={(e) =>
                setPlaylist({ ...playlist, public: e.target.checked })
              }
            />
            Public
          </label>
        </div>
        <div className="grid">
          <label>Description</label>
          <textarea value={playlist.description} readOnly={true} />
        </div>
      </div>
      
      <div className="flex justify-between">
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onSavel}>Save</button>
      </div>
    </div>
  );
};

export default PlaylistEditor;
