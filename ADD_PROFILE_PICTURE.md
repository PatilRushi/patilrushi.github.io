# Add Your Profile Picture

## Instructions:

1. Save your profile picture (the one you uploaded) as `profile.jpg`
2. Copy it to the `public` folder: `/Users/rushikeshsuhaspatil/CascadeProjects/windsurf-project/public/profile.jpg`

## Command:
```bash
# If your picture is in Downloads folder:
cp ~/Downloads/your-profile-picture.jpg /Users/rushikeshsuhaspatil/CascadeProjects/windsurf-project/public/profile.jpg

# Or just drag and drop the image into the public folder and rename it to profile.jpg
```

## After adding the picture:
```bash
git add public/profile.jpg
git commit -m "Add profile picture"
git push
```

Your profile picture will appear in the navbar (top left) with your name!
