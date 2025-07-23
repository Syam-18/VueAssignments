<script setup>
import CardItem from './Components/CardItem.vue'
const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
    borderColor: '#ff4f64'
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
    borderColor: '#00a8e7'


  },
  {
    id: 3,
    title: 'VR Developer',
    description: 'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
    borderColor: '#44c4a1'

  },
  {
    id: 4,
    title: 'ML Engineer',
    description: 'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
    borderColor: '#fcc302'

  },
]
</script>
<template>
  <div class="bg-[#f4faff] h-screen w-screen flex flex-col justify-center items-center font-[Roboto]">
    <div class="max-w-[50vw] text-center">
      <h1 class="text-5xl m-4 font-bold">Learn 4.0 Technologies</h1>
      <p class="text-[#64748b] font-medium m-8">
        Get trained by alumni of IITs and top companies like Amazon, Microsoft, Intel, Nvidia,
        Qualcomm, etc. Learn directly from professionals involved in Product Development.
      </p>
      <ul class="grid grid-cols-2 gap-8">
        <CardItem v-for="card in cardsList" :card="card" :key="card.id"/>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>

<!-- import CardItem from './components/CardItem'

import './App.css'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
] -->

<!-- const App = () => (
  <div className="cards-app-container">
    <div className="cards-list-container">
      <h1 className="heading">Learn 4.0 Technologies</h1>
      <p className="description">
        Get trained by alumni of IITs and top companies like Amazon, Microsoft,
        Intel, Nvidia, Qualcomm, etc. Learn directly from professionals involved
        in Product Development.
      </p>
      <ul class="cards-list">
        {cardsList.map(eachCard => (
          <CardItem key={eachCard.id} cardDetails={eachCard} />
        ))}
      </ul>
    </div>
  </div>
)

export default App -->
