# Experimental Web

### Upgrade to Yarn 3.x

```powershell
# Now upgrades you to version 3.0.0
yarn set version berry
# Upgrades to latest version of 3
yarn set version 3.x
# Use node_moduels instead of Yarn Plug'n'Play
yarn config set nodeLinker node-modules
# Use typescript plugin
yarn plugin import typescript
```

### Set Yarn proxy

```powershell
yarn config set httpProxy ""
yarn config set httpsProxy ""
```

