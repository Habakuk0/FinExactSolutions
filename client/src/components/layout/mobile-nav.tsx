import { Link, useLocation } from "wouter";

interface MobileNavProps {
  navigation: Array<{ name: string; href: string }>;
  onItemClick: () => void;
}

export default function MobileNav({ navigation, onItemClick }: MobileNavProps) {
  const [location] = useLocation();

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <div className="flex flex-col space-y-4 pt-6">
      <div className="pb-4 border-b">
        <h2 className="text-lg font-semibold text-primary">FinExact Solutions</h2>
      </div>
      <nav className="flex flex-col space-y-3">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href} onClick={onItemClick} data-testid={`link-mobile-${item.name.toLowerCase()}`}>
            <span
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer ${
                isActive(item.href)
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-primary hover:bg-muted"
              }`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
