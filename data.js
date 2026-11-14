// Everything the site shows lives here. Edit this file to change copy or add videos.
window.SITE = {
  artist: "The Electric Douglas",
  tagline: "Every storm passes. Every road goes on.",
  bio: [
    "Two songs. Two short films.",
    "In Last Night’s Rain, a man walks out of a love that’s over and into a storm that slowly washes him clean. In Walking On, a traveler with his thumb out on an empty highway stops waiting for someone to stop for him, and decides the road is his to walk.",
  ],
  credits: [
    { role: "Directed by", names: ["David Bacquet"] },
  ],
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
        "Shut out of a love that’s over, a man walks into the storm. The rain doesn’t fix him all at once. It just keeps falling, patient and steady, until the weight lifts, and his first real smile finds him alone behind the wheel, driving toward whatever comes next.",
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
      length: "3:13",
      theme: "road",
      src: "media/walking-on.mp4",
      poster: "media/stills/walk-closeup.jpg",
      logline:
        "Thumb out on an empty desert highway, a traveler watches ride after ride roar past in the dust. Somewhere between the open road and the green meadows, he stops waiting for someone to stop for him, and starts walking. The road is his now.",
      lyric: "I keep walking on",
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
