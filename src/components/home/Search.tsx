import { useForm } from 'react-hook-form';
import { useDebouncedValue } from '@mantine/hooks';
import z from 'zod';
import { styled } from '../../../stitches.config';
import { zodResolver } from '@hookform/resolvers/zod';
import { Container } from '@components/ui/Container';
import { Flex } from '@components/ui/Flex';
import { IconButton } from '@components/ui/IconButton';
import { Text } from '@components/ui/Text';
import {
  IconSearch,
  IconArrowBadgeRight,
  IconAlertCircle,
  IconReload,
} from '@tabler/icons-react';
import { SearchSchema } from '@utils/schema';
import { api } from '@utils/api';
import { spinAnimation } from '@utils/keyframes';
import { Box } from '@components/ui/Box';
import SearchResults from './SearchResults';
import { useState } from 'react';

type SearchType = z.infer<typeof SearchSchema>;

const Search = () => {
  const [resultsOpen, setResultsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchType>({
    resolver: zodResolver(SearchSchema),
  });

  const { mutate, isLoading, data, isError, error } =
    api.artistRouter.search.useMutation({
      onSuccess: () => {
        setResultsOpen(true);
      },
    });

  async function onSubmit(data: SearchType) {
    // reset();
    mutate(data);
  }

  return (
    <>
      <Container as="section" pt="2xl" size="lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            css={{ borderBottom: '1px solid $gray9', height: '3.25rem' }}
            align="center"
            gap="sm"
          >
            <div>
              <IconSearch size={20} color="#00000090" />
            </div>
            <Input
              {...register('artist')}
              type="text"
              placeholder="Search by Artist"
              aria-label="Search by Artist"
              autoComplete="off"
              css={{
                h: '100%',
              }}
            />
            <SubmitButton isLoading={isLoading} />
          </Flex>
          {errors.artist && <ErrorMessage errors={errors.artist.message} />}
          {isError && <ErrorMessage errors={error.message} />}
        </form>
        {resultsOpen && data && (
          <SearchResults setResultsOpen={setResultsOpen} items={data.items} />
        )}
      </Container>
    </>
  );
};

export default Search;

interface ErrorsUIProps {
  errors: string | undefined;
}

function ErrorMessage({ errors }: ErrorsUIProps) {
  return (
    <Flex mt="md" align="center" gap="sm">
      <IconAlertCircle size={16} color="crimson" />
      <Text
        as="small"
        size="small"
        css={{
          color: '$error',
          fontWeight: 'bold',
        }}
      >
        {errors}
      </Text>
    </Flex>
  );
}

interface SubmitButtonProps {
  isLoading: boolean;
}

function SubmitButton({ isLoading }: SubmitButtonProps) {
  return (
    <>
      {isLoading ? (
        <IconButton size="sm" type="button" disabled>
          <IconReload
            style={{
              animation: spinAnimation,
            }}
            size={20}
            color="#00000090"
          />
        </IconButton>
      ) : (
        <IconButton size="sm" type="submit">
          <IconArrowBadgeRight size={20} color="#00000090" />
        </IconButton>
      )}
    </>
  );
}

const Input = styled('input', {
  width: '100%',
  color: '$gray11',
});
