import { Box } from '@components/ui/Box';
import { ToggleGroupItem, ToggleGroupRoot } from '@components/ui/ToggleGroup';
import ToolTipButton from '@components/ui/ToolTip';
import { useCurrentArtistStore } from '@state/currentArtist';
import {
  IconActivity,
  IconBounceRight,
  IconSpeedboat,
} from '@tabler/icons-react';
import { api } from '@utils/api';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

const TracklistSort = ({ value, setValue }: Props) => {
  return (
    <Box>
      <ToggleGroupRoot
        type="single"
        value={value}
        onValueChange={(value) => {
          if (value) setValue(value);
        }}
        onBlur={() => setValue('')}
      >
        <ToolTipButton message="Sort by tempo">
          <ToggleGroupItem value="tempo">
            <IconSpeedboat size={18} />
          </ToggleGroupItem>
        </ToolTipButton>
        <ToolTipButton message="Sort by dance">
          <ToggleGroupItem value="dance">
            <IconBounceRight size={18} />
          </ToggleGroupItem>
        </ToolTipButton>
        <ToolTipButton message="Sort by energy">
          <ToggleGroupItem value="energy">
            <IconActivity size={18} />
          </ToggleGroupItem>
        </ToolTipButton>
      </ToggleGroupRoot>
    </Box>
  );
};

export default TracklistSort;
