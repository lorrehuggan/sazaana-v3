import React from "react";
import { Box } from "@components/ui/Box";
import Image from "next/image";

interface Props {
  url: string;
  width: number;
  height: number;
  name: string;
}

const ArtistImage = ({ name, url, width, height }: Props) => {
  return (
    <Box
      css={{
        position: "relative",
      }}
    >
      <Box
        css={{
          borderRadius: "4px",
          // boxShadow: '2px 2px 7px 1px rgba(0, 0, 0, 0.3)',
          "&:after": {
            content: '""',
            backgroundImage: `url(${url!})`,
            width: width,
            height: height,
            position: "absolute",
            left: 2,
            top: 10,
            filter: "blur(8px)",
            zIndex: -1,
            transition: "opacity 0.4s ease-in-out",
            scale: 0.8,
          },
          "&:before": {
            content: '""',
            backgroundImage: `url(${url!})`,
            width: width,
            height: height,
            position: "absolute",
            left: 2,
            top: 10,
            filter: "blur(14px)",
            zIndex: -2,
            transition: "opacity 0.4s ease-in-out",
            opacity: 0.8,
            scale: 0.8,
          },
        }}
      >
        <img
          style={{
            objectFit: "cover",
            borderRadius: "4px",
          }}
          width={width}
          height={height}
          src={url!}
          alt={name!}
        />
      </Box>
    </Box>
  );
};

export default ArtistImage;
