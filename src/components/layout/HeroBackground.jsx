/**
 * HeroBackground
 * Shows the top background image (switches based on theme).
 */
export default function HeroBackground({ isDark }) {
  return (
    <div className="relative h-[200px] sm:h-[300px] w-full overflow-hidden">
      <picture>
        <source
          media="(max-width: 639px)"
          srcSet={isDark ? '/images/bg-mobile-dark.jpg' : '/images/bg-mobile-light.jpg'}
        />
        <img
          src={isDark ? '/images/bg-desktop-dark.jpg' : '/images/bg-desktop-light.jpg'}
          alt=""
          className="h-full w-full object-cover"
        />
      </picture>
    </div>
  );
}
