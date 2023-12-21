// _app.tsx
import { getBlogPosts } from '@/lib/utils';
import { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // This effect will run once when the app mounts
    const fetchData = async () => {
      // Fetch blog posts globally using getBlogPosts
      try {
        const blogPosts = await getBlogPosts();
        // You can do something with the fetched blogPosts if needed
        console.log(blogPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once

  return <Component {...pageProps} />;
}

export default MyApp;
