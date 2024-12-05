import React from 'react';

const HeroIcon2 = ({ className }) => {
  return (
    <svg
      width='65'
      height='89'
      viewBox='0 0 65 89'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g filter='url(#filter0_ddd_602_35)'>
        <rect
          x='16.1726'
          y='0.148438'
          width='32.8527'
          height='32.8527'
          rx='16.4264'
          fill='#FF5722'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M30.8879 16.9553C32.7732 16.9553 34.2844 15.4245 34.2844 13.5147C34.2844 11.605 32.7732 10.0742 30.8879 10.0742C29.0026 10.0742 27.4913 11.605 27.4913 13.5147C27.4913 15.4245 29.0026 16.9553 30.8879 16.9553ZM30.8879 18.64C28.1188 18.64 25.7546 19.0828 25.7546 20.8516C25.7546 22.6197 28.1044 23.0784 30.8879 23.0784C33.6563 23.0784 36.0211 22.6357 36.0211 20.8668C36.0211 19.098 33.6713 18.64 30.8879 18.64ZM38.0045 14.9254H38.828C39.1669 14.9254 39.4433 15.2056 39.4433 15.5493C39.4433 15.893 39.1669 16.1733 38.828 16.1733H38.0045V16.979C38.0045 17.3228 37.7289 17.603 37.3893 17.603C37.0504 17.603 36.774 17.3228 36.774 16.979V16.1733H35.952C35.6123 16.1733 35.3367 15.893 35.3367 15.5493C35.3367 15.2056 35.6123 14.9254 35.952 14.9254H36.774V14.1203C36.774 13.7766 37.0504 13.4964 37.3893 13.4964C37.7289 13.4964 38.0045 13.7766 38.0045 14.1203V14.9254Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_ddd_602_35'
          x='0.259562'
          y='0.148438'
          width='64.6789'
          height='88.2906'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='9.75316' />
          <feGaussianBlur stdDeviation='4.87658' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_602_35'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='22.0729' />
          <feGaussianBlur stdDeviation='6.67321' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'
          />
          <feBlend
            mode='normal'
            in2='effect1_dropShadow_602_35'
            result='effect2_dropShadow_602_35'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='39.526' />
          <feGaussianBlur stdDeviation='7.95652' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0'
          />
          <feBlend
            mode='normal'
            in2='effect2_dropShadow_602_35'
            result='effect3_dropShadow_602_35'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect3_dropShadow_602_35'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};

export { HeroIcon2 };
