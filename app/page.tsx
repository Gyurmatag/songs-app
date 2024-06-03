import Head from 'next/head';
import SongCard from '../components/SongCard';

const songs = [
  {
    cover: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Taylor_Swift_-_Blank_Space_%28Official_Single_Cover%29.png',
    author: 'Taylor Swift',
    title: 'Blank Space',
    spotifyLink: 'https://open.spotify.com/track/1p80LdxRV74UKvL8gnD7ky',
  },
  {
    cover: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Taylor_Swift_-_Shake_It_Off.png',
    author: 'Taylor Swift',
    title: 'Shake It Off',
    spotifyLink: 'https://open.spotify.com/track/6f3Slt0GbA2bPZlz0aIFXN',
  },
  {
    cover: 'https://upload.wikimedia.org/wikipedia/en/f/f8/Taylor_Swift_-_Cruel_Summer.png',
    author: 'Taylor Swift',
    title: 'Cruel Summer',
    spotifyLink: 'https://open.spotify.com/track/1BxfuPKGuaTgP7aM0Bbdwr',
  },
];

export default function Home() {
  return (
      <div className="container mx-auto p-4">
        <Head>
          <title>Song List</title>
          <meta name="description" content="A list of songs" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="space-y-4 flex flex-col justify-center items-center">
          {songs.map((song, index) => (
              <SongCard
                  key={index}
                  cover={song.cover}
                  author={song.author}
                  title={song.title}
                  spotifyLink={song.spotifyLink}
              />
          ))}
        </main>
      </div>
  );
}
