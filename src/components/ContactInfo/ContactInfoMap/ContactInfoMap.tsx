'use client';

import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { FC } from 'react';

import styles from './ContactInfoMap.module.scss';

export const ContactInfoMap: FC = () => {
  return (
    <YMaps>
      <Map
        options={{
          copyrightLogoVisible: false,
          copyrightProvidersVisible: false,
          copyrightUaVisible: false,
        }}
        defaultState={{
          center: [37.759351, -122.448],
          zoom: 16,
        }}
        className={styles.ymap}
      >
        <Placemark
          geometry={[37.759351, -122.446913]}
          options={{
            iconLayout: 'default#image',
            iconImageSize: [55, 55],
            iconImageHref: '/icons/geomarker.svg',
          }}
        />
      </Map>
    </YMaps>
  );
};
