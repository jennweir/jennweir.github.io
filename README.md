# Jennifer's Personal Website

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
