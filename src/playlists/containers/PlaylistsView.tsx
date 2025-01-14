import PlaylistList from "../components/PlaylistList";
import PlaylistDetails from "../components/PlaylistDetails";
import { Button } from "primereact/button";
import { usePlaylistsState } from "./usePlaylistsState";
import PlaylistEditor from "../components/PlaylistEditor";

const PlaylistsView = () => {
  // const [state, dispatch] = useReducer(playlistsReducer, playlistsInitialState);

  // const { mode, playlists, selectedId } = state;

  // const selected = selectedPlaylist(state);

  // const selectPlaylistById = useCallback(
  //   (id: string) => dispatch(SelectPlaylist(id)),
  //   []
  // );
  // const setMode = useCallback(
  //   (mode: "details" | "editor" | "creator") => dispatch(ChangeMode(mode)),
  //   []
  // );

  const {
    mode,
    selected,
    playlists,
    selectedId,
    savePlaylist,
    createPlaylist,
    showDetails,
    selectPlaylistById,
    setMode,
  } = usePlaylistsState();

  return (
    <div>
      <h3 className="text-3xl leading-loose">Playlists</h3>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <PlaylistList
            playlists={playlists}
            selectedId={selectedId}
            onSelect={selectPlaylistById}
          />

          <div className="flex justify-end mt-5">
            <Button
              label="Create New"
              severity="secondary"
              size="small"
              onClick={() => setMode("creator")}
            />
          </div>
        </div>

        <div className="grid gap-5">
          {mode === "details" && (
            <PlaylistDetails
              playlist={selected}
              onEdit={() => setMode("editor")}
            />
          )}
          {mode === "editor" && (
            <PlaylistEditor
              playlist={selected}
              onCancel={showDetails}
              onSave={savePlaylist}
            />
          )}

          {mode === "creator" && (
            <PlaylistEditor onCancel={showDetails} onSave={createPlaylist} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistsView;
