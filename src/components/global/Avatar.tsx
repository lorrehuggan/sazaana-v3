import React from "react";
import { AvatarFallback, AvatarImage, AvatarRoot } from "@components/ui/Avatar";

interface Props {
  src: string;
  alt: string;
  name: string;
}

const Avatar = ({ src, alt, name }: Props) => {
  function getInitials(name: string) {
    const firstLetter = name.split("")[0];
    const lastLetter = name.split(" ")[0];
    if (firstLetter && lastLetter) {
      return firstLetter + lastLetter;
    }
    return name.split("")[0];
  }
  return (
    <AvatarRoot>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback delayMs={600}>{getInitials(name)}</AvatarFallback>
    </AvatarRoot>
  );
};

export default Avatar;
