function playTrack(track, cover) {
    const audio = document.getElementById('audio');
    const audioSource = document.getElementById('audio-source');
    const albumCover = document.getElementById('album-cover');

    audioSource.src = track;
    audio.load();
    audio.play();

    albumCover.src = cover;
}
