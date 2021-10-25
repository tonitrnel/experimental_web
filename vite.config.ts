import { defineConfig } from 'vite';
import { join } from 'path';
import { readFile } from 'fs/promises';
import { CompilerOptions } from 'typescript';
import react from '@vitejs/plugin-react';

const ROOT = process.cwd();

const parseTSAlias = async () => {
  try {
    const { baseUrl = '.', paths = {} }: CompilerOptions = await readFile(
      join(ROOT, '/tsconfig.json')
    ).then((r) => JSON.parse(r.toString()).compilerOptions);
    return Object.keys(paths).reduce((alias, key) => {
      alias[key.toString().replace('/*', '')] = join(
        ROOT,
        baseUrl,
        paths[key][0]?.replace('/*', '')
      );
      return alias;
    }, {} as Record<string, string>);
  } catch (e) {
    console.error('[Vite] Parse tsconfig failed, return empty alias');
    return {};
  }
};

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [react()],
  cacheDir: '.cache',
  resolve: {
    alias: await parseTSAlias(),
  },
}));
