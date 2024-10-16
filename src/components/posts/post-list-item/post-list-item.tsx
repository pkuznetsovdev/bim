import classnames from 'classnames';

import { Block, Image, Text } from '@elements';
import { CommonComponentProps, PetDetails } from '@types';

const mainClass = 'post-list-item';

interface PostListItemProps extends CommonComponentProps {
  pet: Partial<PetDetails>;
}

export const PostListItem = ({ className, pet }: PostListItemProps) => {
  const petName = 'name' in pet ? pet.name : null;

  return (
    <Block className={classnames(className, mainClass)}>
      <Image
        className={classnames(`${mainClass}__image`)}
        src={
          pet?.photos?.[0] || 'https://source.unsplash.com/640x480?cute-animals'
        }
      />
      <Block className={classnames(`${mainClass}__details`)}>
        <Text>{pet.type}</Text>
        <Text>{pet.breed}</Text>
        {petName ? <Text>{petName}</Text> : null}
      </Block>
    </Block>
  );
};
