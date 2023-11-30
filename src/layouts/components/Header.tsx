import LogoLight from '@/assets/logo/logo-light.png';
import LogoDark from '@/assets/logo/logo-dark.png';
import { ModeToggle } from '@/components/ModeToggle';
import { useStore } from '@/services/store';

export function Header() {
  const darkMode = useStore().isDark;

  return (
    <div className="nav-header h-14 my-10 flex flex-row justify-around">
      <a className="h-full" href="/home">
        <img
          src={darkMode ? LogoDark.src : LogoLight.src}
          alt="logo"
          className="object-contain h-full"
        />
      </a>
      <div></div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
