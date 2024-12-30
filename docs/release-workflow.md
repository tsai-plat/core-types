# Release workflow

1. build
2. clear "dist types "
3. changeset

```bash
# collection git changes
npx changeset
# upgrade version
pnpm vp
```

4. edit changelog
5. publish `pnpm changeset publish --tag beta`
