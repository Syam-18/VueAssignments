<script setup>
import { RouterView } from 'vue-router'
import Header from './Components/Header.vue'
</script>
<template>
  <Header />
  <RouterView />
</template>
<style scoped>
* {
  font-family: 'Roboto';
  box-sizing: border-box;
}
</style>

<!-- import {BrowserRouter,Route, Routes} from 'react-router'

import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </BrowserRouter>
)

export default App -->
