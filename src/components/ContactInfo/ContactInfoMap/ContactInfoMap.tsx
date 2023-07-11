'use client';

import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { FC } from 'react';

import styles from './ContactInfoMap.module.scss';

import geomarker from '@images/geomarker.webp';

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
            iconImageHref: geomarker.src,
          }}
        />
      </Map>
    </YMaps>
  );
};
