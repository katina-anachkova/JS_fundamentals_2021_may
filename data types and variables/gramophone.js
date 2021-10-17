function gramophone(band,album,song){
    let fullRotation = 2.5;
    let songDuration = album.length*band.length*song.length/2;
    let plateRotations = songDuration/songDuration;
    console.log(` The plate was rotated ${Math.ceil(songDuration/fullRotation)} times.`);
}