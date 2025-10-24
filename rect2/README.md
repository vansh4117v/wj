# TJ React - Converted WJ site

This Vite + React project contains one page component per original HTML file from the parent `wj` folder. Each page imports the original HTML as raw text and its CSS from the parent folder so image and asset paths remain unchanged.

Quick start (Windows PowerShell):

```powershell
cd "e:/VS code/tanmay/wj/tj-react"
npm install
npm run dev
```

Routes are defined in `src/App.jsx`. Visit http://localhost:5173/ and navigate to paths like `/about`, `/bhajan`, `/contact`, etc.
