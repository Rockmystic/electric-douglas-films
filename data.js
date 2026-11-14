// Everything the site shows lives here. Edit this file to change copy or add videos.
window.SITE = {
  artist: "The Electric Douglas",
  tagline: "Songs about rain, the road, and starting over.",
  bio: [
    "Two songs, two short films. One is a rainy night that slowly washes a man clean. The other is a road that turns waiting for a ride into choosing to walk.",
  ],
  credits: "Films produced & directed by David Bacquet.",
  heroLoop: "media/hero-loop.mp4",
  heroPoster: "media/stills/rain-face-up.jpg",

  films: [
    {
      id: "last-nights-rain",
      title: "Last Night’s Rain",
      year: "2026",
      length: "3:12",
      theme: "rain",
      src: "media/last-nights-rain.mp4",
      poster: "media/stills/rain-face-up.jpg",
      logline:
        "A man is pushed out of a broken relationship. The rain doesn’t heal him at once; its quiet persistence lifts the weight slowly. His first real smile comes alone in the car, driving toward a new chapter.",
      lyric: "Oh God must have known how I needed that rain",
      stills: [
        "media/stills/rain-walk.jpg",
        "media/stills/rain-closeup.jpg",
        "media/stills/rain-windshield.jpg",
      ],
    },
    {
      id: "walking-on",
      title: "Walking On",
      year: "2026",
      length: "3:10",
      theme: "road",
      src: "media/walking-on.mp4",
      poster: "media/stills/walk-closeup.jpg",
      logline:
        "A traveler on an empty desert highway stops waiting for someone to stop for him and starts walking. The ending stays open.",
      lyric: null,
      stills: [
        "media/stills/walk-hitchhike.jpg",
        "media/stills/walk-desert.jpg",
        "media/stills/walk-field.jpg",
      ],
    },
  ],

  shorts: [
    { id: "rain-teaser", title: "Last Night’s Rain", label: "Teaser · 0:30", src: "media/last-nights-rain-teaser.mp4", poster: "media/stills/rain-teaser.jpg", vertical: false },
    { id: "walking-on-teaser", title: "Walking On", label: "Preview · 0:42", src: "media/walking-on-teaser.mp4", poster: "media/stills/walking-on-teaser.jpg", vertical: false },
  ],
};
