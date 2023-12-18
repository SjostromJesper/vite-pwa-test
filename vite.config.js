import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            includeAssets: ['vue.svg'],
            devOptions: {
                enabled: true
            },
            manifest: {
                name: 'My Awesome App',
                short_name: 'MyApp',
                description: 'My Awesome App description',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'icon.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: ['any']
                    },
                ]
            }
        })
    ],
})



