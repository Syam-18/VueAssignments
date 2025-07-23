<script setup>
import { ref, onMounted } from 'vue'
import LeaderBoardRow from './LeaderBoardRow.vue'
const LeaderboardData = ref([])
const isLoading = ref(true)
onMounted(() => {
  const getLeaderboardData = async () => {
    const url = 'https://apis2.ccbp.in/leaderboard-v2'
    const response = await fetch(url)
    const responseData = await response.json()
    const formattedData = responseData.leaderboard_data.map(
      ({ profile_image_url, time_spent, ...rest }) => ({
        profileImgUrl: profile_image_url,
        timeSpent: time_spent,
        ...rest,
      }),
    )
    LeaderboardData.value = formattedData
    // setTimeout(() => {
    //   isLoading.value = false
    // }, 200)
    isLoading.value = false;
  }
  getLeaderboardData()
})
</script>

<template>
  <div class="">
    <div v-if="isLoading" class="flex flex-col items-center py-10 gap-3">
        <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-white"></div>
        <p class="text-white font-medium">Fetching leaderboard...</p>
      </div>
      <!-- <div v-if="isLoading" class="flex justify-center items-center py-10">
      <LottieAnimation
        :animation-data="animationData"
        :loop="true"
        :autoplay="true"
        class="w-[150px] h-[150px]"
      /> -->
    <!-- </div> -->
    <ul v-else class="rounded my-4">
      <li
        className="bg-[#378caf] list-none w-[90vw] max-w-[1100px] grid grid-cols-6 px-4 py-4 rounded-t-lg"
      >
        <p className="col-span-1 pl-3">Rank</p>
        <p className="col-span-2 text-left">Name</p>
        <p className="col-span-1">Score</p>
        <p className="col-span-1">Language</p>
        <p className="col-span-1 text-center">Time Spent</p>
      </li>
      <LeaderBoardRow v-for="user in LeaderboardData" :user="user" :key="user.id" />
    </ul>
  </div>
</template>
<script scoped>
// p{
//   @apply grow;
// }
</script>

<!-- import './index.css'
import {useState,useEffect} from 'react'
import LeaderboardRow from '../LeaderboardRow'
import {BeatLoader} from 'react-spinners'
import { BoltLoader } from "react-awesome-loaders";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getLeaderboardData = async () => {
      const url = 'https://apis2.ccbp.in/leaderboard-v2';
      const response = await fetch(url);
      const responseData = await response.json();
      console.log(responseData);
      const formattedData = responseData.leaderboard_data.map(eachUser => ({
        id:eachUser.id,
        rank: eachUser.rank,
        name: eachUser.name,
        profileImgUrl: eachUser.profile_image_url,
        score: eachUser.score,
        language: eachUser.language,
        timeSpent: eachUser.time_spent,
      }));
      console.log(formattedData);
      setLeaderboardData(formattedData);
      setIsLoading(false);
    }
    getLeaderboardData();
  }, [])

  const renderLoader = () => (
    <div className='loading-view-container'>
      <BoltLoader
        className={"loaderbolt"}
        boltColor={"#6366F1"}
        backgroundBlurColor={"#E0E7FF"}
      />
    </div>
  )
  const renderLeaderboardHeader = () => (
    <li className="leaderboard-header">
      <p className="table-heading rank">Rank</p>
      <p className="table-heading name">Name</p>
      <p className="table-heading score">Score</p>
      <p className="table-heading language">Language</p>
      <p className="table-heading time-spent">Time Spent</p>
    </li>
  )

  const renderLeaderboard = () => (
    <ul className="leaderboard-table-container">
      {renderLeaderboardHeader()}
      {leaderboardData.map(userDetails => (
        <LeaderboardRow key={userDetails.id} userDetails={userDetails} />
      ))}
    </ul>
  )

  return <div className="leaderboard-container">
    {isLoading ? renderLoader() : renderLeaderboard()};
  </div>
}

export default Leaderboard -->
