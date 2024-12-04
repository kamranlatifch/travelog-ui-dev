import React from 'react';

const CalendarSvg = ({ className }) => {
  return (
    <svg
      width='100'
      height='100'
      viewBox='0 0 100 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <rect width='100' height='100' rx='32' fill='#FACD49' />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M56.8218 29.5372L56.8238 31.0365C62.333 31.4683 65.9724 35.2224 65.9782 40.9795L66 57.831C66.0078 64.108 62.0644 67.97 55.7436 67.98L40.3038 68C34.0224 68.008 30.0296 64.054 30.0217 57.759L30 41.1054C29.9921 35.3103 33.5031 31.5662 39.0123 31.0605L39.0104 29.5612C39.0084 28.6817 39.66 28.02 40.5289 28.02C41.3977 28.018 42.0494 28.6777 42.0513 29.5572L42.0533 30.9565L53.7828 30.9405L53.7808 29.5412C53.7788 28.6617 54.4304 28.002 55.2994 28C56.1484 27.998 56.8198 28.6577 56.8218 29.5372ZM33.043 41.7231L62.9392 41.6832V40.9835C62.8544 36.6857 60.698 34.4308 56.8276 34.095L56.8296 35.6342C56.8296 36.4938 56.1602 37.1754 55.3112 37.1754C54.4424 37.1774 53.7886 36.4977 53.7886 35.6382L53.7868 34.019L42.0573 34.035L42.0592 35.6522C42.0592 36.5137 41.4096 37.1934 40.5407 37.1934C39.6719 37.1954 39.0183 36.5177 39.0183 35.6562L39.0163 34.1169C35.1657 34.5027 33.0351 36.7656 33.041 41.1014L33.043 41.7231ZM54.4798 50.8086V50.8306C54.4996 51.7502 55.25 52.4478 56.1602 52.4278C57.0488 52.4058 57.7578 51.6442 57.738 50.7246C57.6966 49.845 56.9836 49.1274 56.097 49.1294C55.1888 49.1494 54.4778 49.889 54.4798 50.8086ZM56.1108 59.784C55.2026 59.764 54.47 59.0064 54.468 58.087C54.4482 57.1674 55.1768 56.4058 56.0852 56.3838H56.105C57.033 56.3838 57.7854 57.1414 57.7854 58.081C57.7874 59.0204 57.037 59.782 56.1108 59.784ZM46.3442 50.8406C46.3838 51.7602 47.136 52.4778 48.0444 52.4378C48.933 52.3958 49.642 51.6362 49.6024 50.7166C49.5806 49.817 48.85 49.1174 47.9614 49.1194C47.0532 49.1594 46.3422 49.921 46.3442 50.8406ZM48.0524 59.6942C47.144 59.7342 46.3936 59.0164 46.3522 58.097C46.3522 57.1774 47.061 56.4178 47.9694 56.3758C48.858 56.3738 49.5906 57.0734 49.6104 57.971C49.6518 58.8926 48.941 59.6522 48.0524 59.6942ZM38.2087 50.9106C38.2482 51.83 39.0005 52.5498 39.9088 52.5078C40.7974 52.4678 41.5063 51.7062 41.4649 50.7866C41.4451 49.887 40.7145 49.1874 39.8239 49.1894C38.9156 49.2294 38.2067 49.991 38.2087 50.9106ZM39.9167 59.7042C39.0084 59.7462 38.258 59.0264 38.2166 58.107C38.2146 57.1874 38.9255 56.4258 39.8338 56.3858C40.7224 56.3838 41.455 57.0834 41.4747 57.983C41.5162 58.9026 40.8073 59.6642 39.9167 59.7042Z'
        fill='white'
      />
    </svg>
  );
};

export { CalendarSvg };
