# Jennifer's Personal Website

## Flow

### dev

dev (source)  --->  GitHub Actions build  --->  gh-pages-dev (deployment)  ---> dev.jenniferpweir.com

### prod

main (source)  --->  GitHub Actions build  --->  gh-pages (deployment)  ---> jenniferpweir.com

## References

<https://gohugo.io/installation/macos/>

### Bootstrapped from the Terminal Hugo Theme

#### Originally created theme

hugo mod get github.com/techbarrack/terminal-hugo-theme
hugo mod tidy

#### Updating the theme

hugo mod get -u github.com/techbarrack/terminal-hugo-theme

<https://github.com/techbarrack/terminal-hugo-theme>

`CGO_ENABLED=1 go install -tags extended,withdeploy github.com/gohugoio/hugo@latest`

## Run Locally

from hugo-site directory

`hugo server --buildDrafts --disableFastRender --gc --ignoreCache --noHTTPCache --forceSyncStatic  -w`
