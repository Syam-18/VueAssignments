<script setup>
import Header from './Components/Header.vue'
import LeaderBoard from './Components/LeaderBoard.vue'
</script>
<template>
  <div
    class="flex flex-col items-center bg-[url(https://assets.ccbp.in/frontend/hooks/nxt-code-bg.png)] min-h-screen w-screen bg-cover text-white"
  >

    <Header />
    <h1 class="text-5xl pt-8 pb-2 font-medium">Think &lt;Code&gt; Innovate</h1>
    <p class="py-4 pb-8 text-xl font-medium text-[#e2e8f0;]">
      Make it work, Make it right, Make it fast
    </p>
    <LeaderBoard />
  </div>
</template>
<style scoped>
* {
  font-family: 'Roboto';
}
</style>

<!-- import Header from './components/Header'
import Leaderboard from './components/Leaderboard'

import './App.css'

const App = () => (
  <div className="main-container">
    <Header />
    <h1 className="title">Think &lt;Code&gt; Innovate</h1>
    <p className="description">Make it work, Make it right, Make it fast</p>
    <Leaderboard />
  </div>
)

export default App -->
