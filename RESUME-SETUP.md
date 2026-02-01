# Resume Download Setup Guide

## How to Add Your Resume

### Step 1: Prepare Your Resume

1. Make sure your resume is in PDF format
2. Rename it to `resume.pdf` (or any name you prefer)

### Step 2: Add Resume to Public Folder

Place your resume file in the `/public` folder:

```
/Users/Elissa/Desktop/personal code/portfolio/public/resume.pdf
```

### Step 3: Implementation (Already Done!)

The resume button is now configured to download your resume when clicked.

## How It Works

When users click the "Resume" button in the header, the code will:

1. Create a temporary download link
2. Point it to `/resume.pdf` in the public folder
3. Set the downloaded filename to `Elissa_Abou_Hassan_Resume.pdf`
4. Trigger the download automatically
5. Clean up the temporary link

## Customization Options

### Change the Resume Filename

Edit the `link.download` value in `app/page.tsx`:

```javascript
link.download = 'Your_Preferred_Filename.pdf'
```

### Use a Different Source File

If your resume file has a different name, update `link.href`:

```javascript
link.href = '/your-resume-name.pdf'
```

### Open in New Tab Instead of Download

Replace the onClick function with:

```javascript
onClick: () => window.open('/resume.pdf', '_blank')
```

## Testing

1. Add your `resume.pdf` to the `public` folder
2. Click the "Resume" button in the header
3. Your resume should download automatically

## Troubleshooting

**Issue**: Resume doesn't download

-   **Solution**: Make sure the file is named exactly `resume.pdf` and is in the `public` folder

**Issue**: 404 error

-   **Solution**: Verify the file path matches: `/public/resume.pdf`

**Issue**: Browser blocks download

-   **Solution**: Some browsers may require user interaction. The current implementation should work for all modern browsers.

## Next Steps

Simply add your resume PDF to the public folder and test the download!
