import DefaultTheme from 'vitepress/theme'
import CustomViewsCounter from './components/CustomViewsCounter.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomViewsCounter', CustomViewsCounter)
  }
}
