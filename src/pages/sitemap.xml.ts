import type { APIRoute } from 'astro';

import { services } from '@/data/services';

import { locations } from '@/data/locations';

import { categories } from '@/data/categories';
import { locationServicePages } from '@/data/locationServices';
import { projects } from '@/data/projects';
import { TOTAL_REVIEW_COUNT } from '@/data/reviews';

import { SITE_URL } from '@/data/site';



type SitemapPage = {

  path: string;

  priority: string;

  changefreq: 'weekly' | 'monthly';

};



const pages: SitemapPage[] = [

  { path: '', priority: '1.0', changefreq: 'weekly' },

  { path: '/services', priority: '0.7', changefreq: 'monthly' },

  { path: '/locations', priority: '0.75', changefreq: 'monthly' },

  { path: '/about', priority: '0.5', changefreq: 'monthly' },

  { path: '/contact', priority: '0.5', changefreq: 'monthly' },

  ...(TOTAL_REVIEW_COUNT > 0 ? [{ path: '/reviews', priority: '0.75', changefreq: 'monthly' as const }] : []),

  ...categories.map((category) => ({

    path: `/${category.slug}`,

    priority: '0.8',

    changefreq: 'monthly' as const,

  })),

  ...services.map((service) => ({

    path: `/services/${service.slug}`,

    priority: service.slug === 'free-quotes' ? '0.6' : '0.85',

    changefreq: 'monthly' as const,

  })),

  ...locations.map((location) => ({

    path: `/locations/${location.slug}`,

    priority: '0.8',

    changefreq: 'monthly' as const,

  })),

  ...locationServicePages.map((page) => ({

    path: `/locations/${page.locationSlug}/${page.categorySlug}`,

    priority: '0.75',

    changefreq: 'monthly' as const,

  })),

  ...projects.map((project) => ({

    path: `/projects/${project.slug}`,

    priority: '0.6',

    changefreq: 'monthly' as const,

  })),

];



function generateSitemap(): string {

  const lastmod = new Date().toISOString().split('T')[0];

  const urls = pages.map((page) => `  <url>

    <loc>${SITE_URL}${page.path}</loc>

    <lastmod>${lastmod}</lastmod>

    <changefreq>${page.changefreq}</changefreq>

    <priority>${page.priority}</priority>

  </url>`).join('\n');



  return `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls}

</urlset>`;

}



export const GET: APIRoute = () => {

  const sitemap = generateSitemap();

  return new Response(sitemap, {

    headers: {

      'Content-Type': 'application/xml; charset=utf-8',

    },

  });

};


