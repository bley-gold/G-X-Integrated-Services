# Deploying to Kloudbean

This guide will help you deploy your GX Integrated Services website to Kloudbean.

## Prerequisites

1. A Kloudbean account
2. Your website files ready for deployment

## Deployment Steps

### 1. Build the Site

First, build your Next.js site for static export:

```bash
npm run build
```

This will create an `out` directory with all the static files.

### 2. Prepare Files for Upload

The built files will be in the `out` directory. This contains:
- All HTML files
- CSS and JavaScript bundles
- Images and other assets
- A `.nojekyll` file (prevents Jekyll processing)

### 3. Upload to Kloudbean

1. Log into your Kloudbean control panel
2. Navigate to your hosting account
3. Access the File Manager or use FTP/SFTP
4. Upload all contents from the `out` directory to your domain's public folder (usually `public_html` or `www`)

### 4. Configure Domain (if needed)

If you're using a custom domain:
1. Update your domain's DNS settings to point to Kloudbean's servers
2. Configure the domain in your Kloudbean control panel

### 5. SSL Certificate

Ensure SSL is enabled in your Kloudbean control panel for HTTPS access.

## File Structure After Upload

Your Kloudbean hosting should have these files in the root directory:
```
public_html/
├── index.html
├── about/
│   └── index.html
├── services/
│   └── index.html
├── contact/
│   └── index.html
├── _next/
│   ├── static/
│   └── ...
├── .nojekyll
└── other assets...
```

## Important Notes

- The site is configured for static export (`output: 'export'`)
- Images are unoptimized for compatibility
- Trailing slashes are enabled for better static hosting compatibility
- The `.nojekyll` file prevents GitHub Pages-style processing

## Troubleshooting

If you encounter issues:

1. **404 errors**: Ensure all files are uploaded to the correct directory
2. **CSS/JS not loading**: Check that the `_next` folder is uploaded completely
3. **Images not displaying**: Verify image files are in the correct paths
4. **Contact form**: Note that the contact form currently uses client-side only - you may need to integrate with a form service

## Contact Form Integration

Since this is a static site, the contact form won't work server-side. Consider integrating with:
- Formspree
- Netlify Forms (if switching to Netlify)
- EmailJS
- Or a custom backend API

## Performance Tips

- Enable gzip compression in Kloudbean if available
- Set up proper caching headers
- Consider using a CDN for better global performance