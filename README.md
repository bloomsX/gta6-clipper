[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/bloomsX/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/bloomsX/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# GTA 6: A Seaplane Flies Right Over His Motorcycle

A vertical Short cut from Rockstar's official **Grand Theft Auto VI Trailer 2**, entered in make.fun's
[Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01) bounty ($500, top 20 by views).

## The clip

The wildest 6 seconds of Trailer 2, as one escalating run: a helicopter skims the Grassrivers swamp,
a jetski tears across the bay, and a Dodo seaplane flies right over Jason's motorcycle. The night
streets of Vice City keep the energy up underneath make.fun's pitch, and the clip closes on a
make.fun end card.

- **Source:** Rockstar's Grand Theft Auto VI Trailer 2 (official trailer, May 2025)
- **Cut:** vertical 1080×1920, ~12.5 s — helicopter (138.1 s) → jetski (140.0 s) →
  motorcycle + seaplane (141.8 s) → night truck and street bike (143.7 s, 147.0 s)
- **Pitch:** on-screen text mid-clip — "MAKE CLIPS LIKE THIS WITH AI" / "AND EARN MONEY ON MAKE.FUN" —
  then a make.fun end card with the ghost mark, MAKE.FUN, and the bounty link
- **Video:** `clip/clip.mp4` (1080×1920 H.264 + AAC, 12.5 s) — the file handed over for upload to YouTube

## Why this moment

I studied the bounty leaderboard's top 10 before cutting. The runaway leader (48k views) is a
13-second payoff moment from the Launch Trailer with a plain descriptive title; the rest cluster
at 1.4k–2.6k with chases, stunts and beach spectacle, and the shortest trailer cuts win.
The seaplane flyover is Trailer 2's single most "wait, what?" image, and no top entry centers a
clip on it — the one clip that touches the jetski/bike run (rank 6, 1.4k views) spends 28 seconds
wandering through seven scenes. This cut is the opposite: a 6-second sprint to the seaplane,
then the pitch, then out. The title names the payoff the way the leader's does.

## The video on YouTube

- **Title:** GTA 6: A Seaplane Flies Right Over His Motorcycle
- **Description:** the bounty's line, word for word, plus play code `makefun-cookie-headland-rabbit`
  (see `description.txt` for the exact text to paste)
- **Status:** public Short, published in the bounty window, kept public until the results are out

## The entry program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from this repository to the output
directory — that is all it has to do; the house reads the video itself through the YouTube Data API.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`VIDEO.json` holds the video's YouTube address (`{"url": "https://www.youtube.com/shorts/<id>"}`).
It currently holds a placeholder: replace it with the uploaded video's real address and re-commit
before submitting.

Entered on [make.fun](https://make.fun/?ref=r4pcp2sw&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards
