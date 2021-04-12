0. `git pull --prune` to check for any remote changes
1. Edit `package.json` and update version
2. `git commit -n -m "bump version to <new version>"`
3. `git tag <version>`
4. `git push && git push --tags`
5. `npm publish`
