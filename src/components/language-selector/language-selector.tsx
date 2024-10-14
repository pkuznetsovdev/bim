import { useTranslation } from 'react-i18next';
import { Button, Block } from '@elements';
import { CommonComponentProps } from '@types';

const mainClass = 'language-selector';

type LanguageSelectorProps = CommonComponentProps;

export const LanguageSelector = ({ className }: LanguageSelectorProps) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLanguage = i18n.language !== 'ru' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Block className={mainClass}>
      <Button onClick={changeLanguage}>{t('buttons.toggleLang')}</Button>
    </Block>
  );
};
