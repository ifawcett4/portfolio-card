# Portfolio Card Site

Live site: https://www.irinafawcett.xyz  
Hosted on GitHub Pages via the `gh-pages` branch.

---

## Branch Structure

| Branch | Purpose |
|--------|---------|
| `main` | Your source code — **always work here** |
| `gh-pages` | Auto-generated build output — **never edit directly** |

**Always be on `main` when developing.** The `gh-pages` branch is managed automatically by `npm run deploy` and will be overwritten every time you deploy. Any changes made directly to `gh-pages` will be lost.

---

## Development & Deployment

```bash
# 1. Make sure you're on main
git checkout main

# 2. Run locally
npm start
# → http://localhost:3000

# 3. When ready to go live
npm run deploy
# → builds the app and pushes to gh-pages (this is the ONLY way to update the live site)
# → git push alone does NOT update the live site
```

> After deploying, wait ~2 minutes for the GitHub Actions workflow to finish, then hard refresh the browser (`Ctrl+Shift+R`) to bypass cache.

---

## Adding Project Assets (Images, Videos, Files)

Static assets must live inside `public/` to be included in the build. Files anywhere else (e.g. a root-level `project_assets/` folder) are ignored by the build process.

### Correct folder structure

```
public/
  CNAME
  project_assets/ ← assets go here
    project-folder/
      thumbnail.jpg
      demo.mp4
  index.html
```

### Reference them in code

```js
// ✅ Correct — path from the root
src="/project_assets/holiday_mirror/thumbnail.jpg"

// ❌ Wrong — relative paths and imports don't work for public/ assets
src="../project_assets/holiday_mirror/thumbnail.jpg"
```

### Adding a new project's assets

```bash
# 1. Create the folder and add your files
mkdir public/project_assets/your_project_name

# 2. Commit the assets to main
git add public/project_assets/your_project_name
git commit -m "add assets for your_project_name"
git push

# 3. Deploy
npm run deploy
```

---

## Custom Domain (www.irinafawcett.xyz)

The custom domain is maintained by a `CNAME` file at `public/CNAME`. This is critical — without it, every deploy would wipe the custom domain setting in GitHub Pages and the site would revert to `ifawcett4.github.io`.

**Do not delete or move `public/CNAME`.** Its contents should be exactly:
```
www.irinafawcett.xyz
```

### If the custom domain breaks after a deploy

1. Go to repo Settings → Pages
2. Check that `www.irinafawcett.xyz` is still in the Custom Domain field
3. Wait for "DNS check successful" (green checkmark)
4. Make sure "Enforce HTTPS" is checked

---

## Common Gotchas

**Changes not showing on the live site**
- Did you run `npm run deploy`? Just `git push` only updates the source code, not the live site.
- Hard refresh with `Ctrl+Shift+R` or open an incognito window — browsers aggressively cache JS/CSS.

**Assets not loading (404s)**
- Make sure the files are inside `public/project_assets/`, not in a root-level folder.
- Reference them with a leading `/` e.g. `/project_assets/file.jpg`.

**Site reverted to ifawcett4.github.io**
- The `public/CNAME` file is missing or was deleted. Restore it with `www.irinafawcett.xyz` and redeploy.

**Committed to gh-pages by mistake**
- Those changes will be lost on the next deploy. Redo the changes on `main` and run `npm run deploy`.

**DNS check keeps resetting to "in progress"**
- This is normal — each deploy rewrites `gh-pages` and triggers a re-check. It resolves in a few minutes.

---

## Namecheap DNS Settings (do not change)

| Type | Host | Value |
|------|------|-------|
| CNAME Record | www | ifawcett4.github.io. |
| URL Redirect Record | @ | http://www.irinafawcett.xyz/ |