import { LanguageSelector } from '@components';
import { Button } from '@elements';
import { useTheme } from '@providers';

export const Posts = () => {
  const { toggleTheme } = useTheme();

  return (
    <>
      <h1>Posts Page</h1>
      <Button onClick={toggleTheme}>theme</Button>
      <LanguageSelector />
    </>
  );
};
