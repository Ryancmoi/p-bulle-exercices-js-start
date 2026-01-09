// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  let newPlaylist = new Set(playlist);
  let playlistArray = Array.from(newPlaylist);
  return playlistArray;
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  let newPlaylist = new Set(playlist);
  return newPlaylist.has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  let newPlaylist = new Set(playlist);
  newPlaylist.add(track);
  let addedTrackPlaylist = Array.from(newPlaylist);
  return addedTrackPlaylist;
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  let newPlaylist = new Set(playlist);
  newPlaylist.delete(track);
  let removedTrackPlaylist = Array.from(newPlaylist);
  return removedTrackPlaylist;
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  let newPlaylist = new Set(playlist);
  let playlistArray = Array.from(newPlaylist);
  let artistsPlaylist = [];
  for (let i = 0; i < playlistArray.length; i++) {
    let s = playlistArray[i].split("-");
    artistsPlaylist[i] = s[1].trim();
  }
  return Array.from(new Set(artistsPlaylist));
}
