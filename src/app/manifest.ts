import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tomas Grusz | Frontend Web Developer | Custom Web Apps',
    short_name: 'Tomas Grusz',
    start_url: '/',
    display: 'standalone',
    background_color: '#1E283A',
    theme_color: '#1E283A'
  };
}
