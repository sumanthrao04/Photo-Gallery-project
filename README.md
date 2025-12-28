Photo Gallery - Static client-side prototype

What you get
- Simple login page (client-side only) that redirects to a birthday page
- Birthday page with sample birthday image and a button to open the gallery
- Photo gallery with flip-card photos. Click the front to rotate; on the back you can add heading and description and save; data is stored in localStorage
- No backend or database. Works purely in the browser.

How to run locally
1. Open the folder in a simple static file server. Easiest is to use the built-in VS Code Live Server extension or use Python's http.server.

Using PowerShell (Windows):

```powershell
# from project root
python -m http.server 8000; Start-Process "http://localhost:8000/index.html"
```

Or with Live Server from VS Code: Right-click `index.html` -> "Open with Live Server".

Using the app
- Login: enter any non-empty user id and password. You will be taken to the birthday page.
- Click "Go to Photo Gallery" to open the gallery.
- Add Image: paste an image URL. To use images from Google Drive, convert your Drive share link to a direct link (instructions below).
- Click a photo to rotate it; on the back add heading and text, then Save. Deleting removes it from localStorage.

Converting Google Drive links to direct image links
1. In Google Drive, right-click the image -> Get link -> ensure link is "Anyone with the link" and copy it. It will look like: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
2. Replace the URL with: https://drive.google.com/uc?export=view&id=FILE_ID
3. Use that new URL when adding the image in the gallery.

Notes and next steps
- The project uses placeholder images by default. You can replace `images/birthday-sample.jpg` with your own.
- If you'd like, I can add drag-and-drop image upload, better animations, or an option to export/import the gallery JSON.

Birthday Vedio
https://youtu.be/i6eEpB65WBc?si=nmLlKZuVSpJLAIq8
