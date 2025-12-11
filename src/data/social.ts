
export interface Social {
  name: string; // The name of the social media platform
  filename: string; // The filename of the icon image
  url: string; // The URL to the social media profile
}

// The list of social media links used in the Header and Contact sections
export const socialList: Social[] = [
  {
    name: 'LinkedIn',
    filename: 'linkedin',
    url: 'https://www.linkedin.com/in/jhaden-goy-11b787331/',
  },
  {
    name: 'GitHub',
    filename: 'github',
    url: 'https://github.com/jhadenn',
  }
];
