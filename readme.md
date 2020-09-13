monorepo doing R&D for the next version of ```xlib```

work here will be ported to the current ```xlib``` repository once R&D has met the following goals:

**COMPLETE**: 
- isomorphic:  xlib feature parity for browser and node projects
  - needed to setup a mock ```xlib-browser``` project to build esm version of library
- typings:  ensure dependent projects get sub-package typings automatically
  - basically, ```tsconfig.json``` has to be setup properly.   for example, ```esModuleInterop:true```
- debugging:  ensure dependent projects can debug into xlib's *.ts source files
  - dependent project's ```launch.json``` needs to properly setup the ```outFiles``` setting.   see ```build-examples/xlib-node-basic```
- monorepo: develop xlib ecosystem as seperate projects within the same repository
  - use ```npm @microsoft/rush```
- upgradeability: ensure dependent modules can be properly upgraded in a reliable way
  - use ```rush check``` and ```rush dep-check``` and ```rush dep-upgrade``` for this workflow

**PENDING**
- testing:  can test feature set equally well x-plat
- publishing:  ensure xlib ecosystem can be published to npm
- basic react e2e: proof of concept using react to setup a real app (including ssl and dev vs production env)
- documentation:  proper code documentation, auto-gen from source
- doc site:  a documenation site with full text search and versioning
- modern promise libary
