import { $, file, write } from 'bun'
import { minify } from 'html-minifier-terser'

await $`bunx tailwindcss -i src/styles/input.css -o public/output.css -m`
await $`cp -r src/assets public`

const html = await file('src/index.html').text()
const styled = html.replace('styles/output.css', 'output.css')
const minified = await minify(styled, { collapseWhitespace: true })

await write('public/index.html', minified)
