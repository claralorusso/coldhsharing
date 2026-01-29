export interface Argument {
  title: string;
  icon: any;
  links: LinkItem[];
}

export interface LinkItem {
  title: string;
  element: React.ReactElement;
  path: string;
  section?: string;
}
