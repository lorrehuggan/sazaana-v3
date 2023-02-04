import { Howl, Howler } from 'howler';
import { Box } from '@components/ui/Box';
import { IconButton } from '@components/ui/IconButton';
import { IconCircleDashed, IconPlayerPlay } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import { audioPlayingAnimation } from '@utils/keyframes';
import { useAudioPlayingState } from '@state/audioPlaying';

interface AudioPlayerProps {
  audio: string | null | undefined;
  tempo: number;
}

const AudioPlayer = ({ audio, tempo }: AudioPlayerProps) => {
  const { id, playing, setId, setPlaying } = useAudioPlayingState(
    (state) => state
  );
  const [state, setState] = useState(false);

  useEffect(() => {
    return () => {
      if (id) {
        Howler.stop();
        setId('');
        setState(false);
      }
    };
  }, []);

  function playAudio(audio: string) {
    if (id === audio) {
      Howler.stop();
      setId('');
      setState(false);
      return;
    }
    if (id !== audio) {
      Howler.stop();
      setState(false);
    }

    const sound = new Howl({
      src: [audio],
      html5: true,
      autoplay: false,
      format: ['mp3'],
      loop: false,
      volume: 0.6,
      onload: function () {},
      onplay: function () {
        setState(true);
      },
      onend: function () {
        setId('');
        setState(false);
      },
    });

    setId(audio!);
    sound.play();
  }

  function stopAudio() {
    Howler.stop();
    setId('');
  }

  if (!audio) return null;

  return (
    <Box flex="column" align="end" justify="center" css={{ flex: 1 }}>
      {state && id === audio ? (
        <IconButton onClick={() => playAudio(audio)} variant="black">
          <IconCircleDashed
            style={{
              animation: audioPlayingAnimation(tempo / 100),
            }}
            color="#00000080"
            size={20}
          />
        </IconButton>
      ) : (
        <IconButton onClick={() => playAudio(audio)} variant="black">
          <IconPlayerPlay color="#00000080" size={20} />
        </IconButton>
      )}
    </Box>
  );
};

export default AudioPlayer;
