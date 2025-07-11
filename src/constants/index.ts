export const COMPANY_INFO = {
  name: 'Amazoft',
  email: 'contact@amazoft.com',
  phone: '+1 (555) 123-4567',
  address: '123 Business St, City, State 12345',
} as const;

export const NAVIGATION_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const;

export const PRODUCTS = [
  {
    id: 'smart-salesman',
    name: 'Smart Salesman',
    href: '/products/smart-salesman',
  },
  {
    id: 'smart-retailer',
    name: 'Smart Retailer',
    href: '/products/smart-retailer',
  },
  {
    id: 'digital-school',
    name: 'Digital School',
    href: '/products/digital-school',
  },
] as const;

export const SERVICES = [
  {
    id: 'web-development',
    name: 'Web Development',
    href: '/services/web-development',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    href: '/services/digital-marketing',
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    href: '/services/graphic-design',
  },
] as const;