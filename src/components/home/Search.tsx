import { useForm } from 'react-hook-form';
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

type SearchType = z.infer<typeof SearchSchema>;

const Search = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchType>({
    resolver: zodResolver(SearchSchema),
  });

  const { mutate, isLoading, data, isError } =
    api.artistRouter.search.useMutation();

  async function onSubmit(data: SearchType) {
    reset();
    mutate(data);
  }

  return (
    <>
      <Container pt="lg" size="lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            css={{ borderBottom: '1px solid $gray9', height: '3.25rem' }}
            align="center"
            gap="md"
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
          {errors.artist && <ErrorsUI errors={errors.artist.message} />}
        </form>
      </Container>
    </>
  );
};

export default Search;

interface ErrorsUIProps {
  errors: string | undefined;
}

function ErrorsUI({ errors }: ErrorsUIProps) {
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
        <IconButton type="button" disabled>
          <IconReload
            style={{
              animation: spinAnimation,
            }}
            size={20}
            color="#00000090"
          />
        </IconButton>
      ) : (
        <IconButton type="submit">
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
