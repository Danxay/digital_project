import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import styles from './ProjectDetailsContent.module.scss';

import { getImageSizes } from '../../../utils/getImageSizes';

import { IContentItem } from 'constants/projects';

interface IProjectDetailsContentProps {
  contentItems: Array<IContentItem>;
}

interface IContentItemWithSizes extends IContentItem {
  width?: number;
  height?: number;
}

export const ProjectDetailsContent: FC<IProjectDetailsContentProps> = async ({ contentItems }) => {
  const items: Array<IContentItemWithSizes> = await Promise.all(
    contentItems.map(async (item): Promise<IContentItemWithSizes> => {
      if (item.type === 'text') {
        return item;
      }

      const sizes = await getImageSizes(item.content);

      return sizes !== undefined ? { ...item, ...sizes } : item;
    }),
  );

  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => {
        if (item.type === 'text') {
          return (
            <div key={index} className={styles.text}>
              {item.content}
            </div>
          );
        }

        if (item.width === undefined || item.height === undefined) {
          return undefined;
        }

        const sizes =
          item?.height > 570
            ? { width: item.width / (item.height / 570), height: 570 }
            : { width: item.width, height: item.height };

        return (
          <div key={index} className={cn(styles.imageWrapper, { [styles.imageLarge]: sizes.width > 585 })}>
            <Image
              priority
              src={item.content}
              width={sizes.width}
              height={sizes.height}
              className={styles.image}
              alt={'Image'}
            />
          </div>
        );
      })}
    </div>
  );
};
