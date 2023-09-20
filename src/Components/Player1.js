import React from "react";
import Player from "@madzadev/audio-player";

const tracks = [
  {
    url: "https://ve32.aadika.xyz/download/qVmmsQns9oQ/mp3/128/1695171450/ebd538327ca9b830d4ef54c00c98cb3ea287cff6751d3761c1135ea181be7761/1?f=SnapInsta.io",
    title: "Mr robot",
    tags: ["dubstep"],
  },
  {
    url: "https://ve43.aadika.xyz/download/rymYToIEL9o/mp3/128/1695167480/14acb074e2b0ed8695800ab592c2d83a35a1a06f1edc735be5a9e9203609a2ce/1?f=SnapInsta.io",
    title: "Tame Impala - Border line",
    tags: ["house"],
  },
  {
    url: "https://ve83.aadika.xyz/download/AqI97zHMoQw/mp3/128/1695171503/f47cc28629f62ba49aa132d5fafc0ecfbb31a4455525cccb727903f789310435/1?f=SnapInsta.io",
    title: "Girl A",
    tags: ["dnb"],
  },
  {
    url: "https://ve43.aadika.xyz/download/rymYToIEL9o/mp3/128/1695167480/14acb074e2b0ed8695800ab592c2d83a35a1a06f1edc735be5a9e9203609a2ce/1?f=SnapInsta.io",
    title: "Tame Impala - Border line",
    tags: ["house"],
  },
];

const Player1 = () => {
  return (
    <div>
      <Player
        trackList={tracks}
        includeTags={true}
        includeSearch={true}
        showPlayList={true}
        autoPlayNextTrack={true}
      />
    </div>
  );
};

export default Player1;
