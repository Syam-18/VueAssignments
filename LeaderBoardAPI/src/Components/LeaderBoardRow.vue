<script setup>
import { computed } from 'vue'
const props = defineProps(['user'])
const { language, name, profileImgUrl, rank, score, timeSpent } = props.user
const renderImg = computed(() => {
  switch (rank) {
    case 1:
      return 'https://assets.ccbp.in/frontend/hooks/gold-badge-img.png'
    case 2:
      return 'https://assets.ccbp.in/frontend/hooks/silver-badge-img.png'
    case 3:
      return 'https://assets.ccbp.in/frontend/hooks/bronze-badge-img.png'
    default:
      return rank
  }
})
const isImg = computed(() => props.user.rank <= 3)
</script>

<template>
  <li
    class="bg-[white] text-black list-none w-[90vw] max-w-[1100px] grid grid-cols-6 px-4 py-3 border-b-[#ebeff3] border-b-2" :class="{'rounded-b-lg mb-20': rank==10}"
  >
    <img :src="renderImg" :alt='rank' class="w-[25%] pl-3 col-span-1" v-if="isImg"/>
    <p class="col-span-1 pl-5" v-else>{{ rank }}</p>
    <div class="col-span-2 text-left flex gap-4 items-center">
      <img :src="profileImgUrl" :alt="name" class="w-[10%]" />
      <p>{{ name }}</p>
    </div>
    <p class="col-span-1 pl-2">{{ score }}</p>
    <p class="col-span-1 ">{{ language }}</p>
    <p class="col-span-1 text-center">{{ timeSpent }}</p>
  </li>
</template>

<!-- import './index.css'

const LeaderboardRow = ({userDetails}) => {
  const {rank, profileImgUrl, name, score, language, timeSpent} = userDetails

  const renderRank = () => {
    switch (rank) {
      case 1:
        return (
          <img
            class="badge"
            src="https://assets.ccbp.in/frontend/hooks/gold-badge-img.png"
            alt={rank}
          />
        )
      case 2:
        return (
          <img
            class="badge"
            src="https://assets.ccbp.in/frontend/hooks/silver-badge-img.png"
            alt={rank}
          />
        )
      case 3:
        return (
          <img
            class="badge"
            src="https://assets.ccbp.in/frontend/hooks/bronze-badge-img.png"
            alt={rank}
          />
        )
      default:
        return <p class="rank">{rank}</p>
    }
  }

  return (
    <li class="leaderboard-row-container">
      <div class="table-cell rank-container">{renderRank()}</div>
      <div class="table-cell profile-container">
        <img class="avatar" src={profileImgUrl} alt={name} />
        <p class="name">{name}</p>
      </div>
      <div class="table-cell score-container">
        <p class="score">{score}</p>
      </div>
      <div class="table-cell language-container">
        <p class="language">{language}</p>
      </div>
      <div class="table-cell time-spent-container">
        <p class="time-spent">{timeSpent}</p>
      </div>
    </li>
  )
}

export default LeaderboardRow -->
