import React from 'react'
import { Helmet } from 'react-helmet';

export default function Seo() {
  return (
    <Helmet>
    {/* Title */}
    <title>YTubeCopy</title>
    
    {/* Meta Description */}
    <meta name="description" content="YouTube Video Downloader. YTubeCopy allows you to download video from YouTube Video, Mp3, Mp4 in HD quality." />
    
    {/* Meta Keywords */}
    <meta name="keywords" content="YouTube video downloader,
    Free YouTube downloader,
    YouTube video download online,
    YouTube to MP4 converter,
    YouTube video grabber,
    Download YouTube videos for free,
    YouTube downloader app,
    YouTube downloader website,
    Convert YouTube to MP3,
    YouTube downloader software,
    YouTube video downloader online free,
    YouTube downloader HD,
    YouTube downloader for Android/iOS,
    YouTube video ripper,
    YouTube downloader extension,
    YouTube video downloader plugin,
    Online YouTube downloader no software,
    YouTube video downloader for PC/Mac,
    Download YouTube playlists,
    Download YouTube videos in bulk"  />
    
    {/* Canonical URL */}
    <link rel="canonical" href="https://ehermandeveloper.github.io/YTubeCopy/" />
    
    {/* Structured Data - JSON-LD */}
    <script type="application/ld+json">
    {`
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "url": "https://ehermandeveloper.github.io/YTubeCopy/",
        "name": "YTubeCopy",
        "description": "YouTube Video Downloader. YTubeCopy allows you to download video from YouTube Video, Mp3, Mp4 in HD quality.",
        "publisher": {
          "@type": "Organization",
          "name": "Herman.E",
          "logo": {
            "@type": "ImageObject",
            "url": "../img/logo_png.png"
          }
        }
      }
    `}
    </script>
    
    {/* Open Graph (OG) meta tags for social media */}
    <meta property="og:url" content="https://ehermandeveloper.github.io/YTubeCopy/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Your Website Title" />
    <meta property="og:description" content="Description of your website." />

    
    
  </Helmet>
  )
}
