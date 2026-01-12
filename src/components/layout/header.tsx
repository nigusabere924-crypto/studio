import ClientOnly from '../client-only';
import HeaderContent from './header-content';

export default function Header() {
  return (
    <ClientOnly>
      <HeaderContent />
    </ClientOnly>
  );
}
