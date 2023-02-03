import Image from 'next/image';

interface Props {
  url: string;
  name: string;
  width: number;
  height: number;
}

const TrackImage = ({ url, name, width, height }: Props) => {
  return (
    <Image
      style={{
        objectFit: 'cover',
        borderRadius: '4px',
      }}
      width={width}
      height={height}
      src={url!}
      alt={name!}
    />
  );
};

export default TrackImage;
