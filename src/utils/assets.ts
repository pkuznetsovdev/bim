import { ASSETS_PATH } from '@constants';

export const getAssetsPath = (assetPath: string) => {
  return `${ASSETS_PATH}${assetPath}`;
};
