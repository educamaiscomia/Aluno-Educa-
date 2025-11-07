import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const pages = {"login":{"outputDir":"./login","lang":"pt","cacheVersion":1,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://7419556a-cba2-4cd7-8513-50bbc8be2d42.weweb-preview.io/login/"},{"rel":"alternate","hreflang":"pt","href":"https://7419556a-cba2-4cd7-8513-50bbc8be2d42.weweb-preview.io/login/"}]},"termos-e-privacidade":{"outputDir":"./termos-e-privacidade","lang":"pt","cacheVersion":1,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://7419556a-cba2-4cd7-8513-50bbc8be2d42.weweb-preview.io/termos-e-privacidade/"},{"rel":"alternate","hreflang":"pt","href":"https://7419556a-cba2-4cd7-8513-50bbc8be2d42.weweb-preview.io/termos-e-privacidade/"}]},"index":{"outputDir":"./","lang":"pt","cacheVersion":1,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://7419556a-cba2-4cd7-8513-50bbc8be2d42.weweb-preview.io/"},{"rel":"alternate","hreflang":"pt","href":"https://7419556a-cba2-4cd7-8513-50bbc8be2d42.weweb-preview.io/"}]},"dashboard":{"outputDir":"./dashboard","lang":"pt","cacheVersion":1,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://7419556a-cba2-4cd7-8513-50bbc8be2d42.weweb-preview.io/dashboard/"},{"rel":"alternate","hreflang":"pt","href":"https://7419556a-cba2-4cd7-8513-50bbc8be2d42.weweb-preview.io/dashboard/"}]},"microprova/:param":{"outputDir":"./microprova/:param","lang":"pt","cacheVersion":1,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://7419556a-cba2-4cd7-8513-50bbc8be2d42.weweb-preview.io/microprova/:param/"},{"rel":"alternate","hreflang":"pt","href":"https://7419556a-cba2-4cd7-8513-50bbc8be2d42.weweb-preview.io/microprova/:param/"}]},"onboarding":{"outputDir":"./onboarding","lang":"pt","cacheVersion":1,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://7419556a-cba2-4cd7-8513-50bbc8be2d42.weweb-preview.io/onboarding/"},{"rel":"alternate","hreflang":"pt","href":"https://7419556a-cba2-4cd7-8513-50bbc8be2d42.weweb-preview.io/onboarding/"}]},"temas-estudo":{"outputDir":"./temas-estudo","lang":"pt","cacheVersion":1,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://7419556a-cba2-4cd7-8513-50bbc8be2d42.weweb-preview.io/temas-estudo/"},{"rel":"alternate","hreflang":"pt","href":"https://7419556a-cba2-4cd7-8513-50bbc8be2d42.weweb-preview.io/temas-estudo/"}]},"avaliacao/:param":{"outputDir":"./avaliacao/:param","lang":"pt","cacheVersion":1,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://7419556a-cba2-4cd7-8513-50bbc8be2d42.weweb-preview.io/avaliacao/:param/"},{"rel":"alternate","hreflang":"pt","href":"https://7419556a-cba2-4cd7-8513-50bbc8be2d42.weweb-preview.io/avaliacao/:param/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rollupOptionsInput = {};
for (const pageName in pages) {
    rollupOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

export default defineConfig(() => {
    return {
        plugins: [nodePolyfills({ include: ['events', 'stream', 'string_decoder'] }), vue()],
        base: "/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rollupOptions: {
                input: rollupOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    return next(entry);
                },
                maxParallelFileOps: 900,
            },
        },
        logLevel: 'warn',
    };
});
