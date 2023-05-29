import { Text } from "@components/ui/Text";
import { truncateString } from "@utils/index";
import Link from "next/link";
import * as HoverCard from "@radix-ui/react-hover-card";
import { HoverCardArrow, HoverCardContent } from "@components/ui/HoverCard";
import { api } from "@utils/api";
import { useState } from "react";
import { Box } from "@components/ui/Box";
import { intToString } from "@utils/index";
import { Button } from "@components/ui/Button";
import HoverContent from "@components/ui/HoverContent";

interface Props {
  id: string;
  name: string;
}

const TrackArtist = ({ id, name }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, error } = api.artistRouter.getByID.useQuery(
    {
      id,
    },
    {
      refetchOnWindowFocus: false,
      enabled: isOpen,
    }
  );

  return (
    <HoverCard.Root onOpenChange={setIsOpen} open={isOpen}>
      <HoverCard.Trigger asChild>
        <Link href={`/playlist/${id}`} key={id}>
          <Text
            hover="dark"
            css={{
              cursor: "pointer",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "$gray12",
              },
            }}
            color="faded"
            as="p"
            size="p"
          >
            {truncateString(name, 20)}
          </Text>
        </Link>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCardContent sideOffset={5}>
          <>
            {isLoading && (
              <Text as="p" size="p">
                Loading...
              </Text>
            )}
            {data && (
              <HoverContent
                name={data.name}
                genres={data.genres}
                url={data?.images[2]?.url}
                followers={data.followers.total}
                popularity={data.popularity}
                spotifyUrl={data.external_urls.spotify}
                id={data.id}
              />
            )}
          </>
          <HoverCardArrow />
        </HoverCardContent>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export default TrackArtist;
