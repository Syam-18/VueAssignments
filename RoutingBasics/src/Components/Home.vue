<script setup>
import { onMounted, ref } from 'vue'
import BlogItem from './BlogItem.vue'
const BlogsData = ref([])
const isLoading = ref(true)
onMounted(() => {
  const url = 'https://apis.ccbp.in/blogs'
  const getBlogsData = async () => {
    const response = await fetch(url)
    const responseData = await response.json()
    const formattedData = responseData.map(({ avatar_url, image_url, ...rest }) => ({
      avatarUrl: avatar_url,
      imageUrl: image_url,
      ...rest,
    }))
    BlogsData.value = formattedData
    isLoading.value = false
    console.log(BlogsData.value)
  }
  getBlogsData()
})
</script>

<template>
  <div v-if="isLoading" class="flex flex-col items-center justify-center py-10 gap-3 h-[70vh]">
    <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-black"></div>
    <p class="text-black font-medium">Fetching data...</p>
  </div>
  <ul v-else class="flex flex-col items-center mt-20">
    <RouterLink v-for="blog in BlogsData" :key="blog.id" :to="`/blogs/${blog.id}`" class="mb-4">
      <BlogItem :blog="blog" />
    </RouterLink>
    <!-- <BlogItem v-for="blog in BlogsData" :blog="blog" :key="blog.id"/> -->
  </ul>
</template>

<!-- import {useState, useEffect} from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

import BlogItem from '../BlogItem'

import './index.css'

const apiUrl = 'https://apis.ccbp.in/blogs'

const Home = () => {
  const [blogsData, setBlogsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getBlogs = async () => {
      const response = await fetch(apiUrl)
      const fetchedData = await response.json()
      const formattedData = fetchedData.map(eachBlog => ({
        uniqueId: eachBlog.id,
        title: eachBlog.title,
        imageUrl: eachBlog.image_url,
        avatarUrl: eachBlog.avatar_url,
        author: eachBlog.author,
        topic: eachBlog.topic,
      }))

      setBlogsData(formattedData)
      setIsLoading(false)
    }

    getBlogs()
  }, [])

  const renderBlogsData = () => {
    return (
      <ul className="blogs-list">
        {blogsData.map(eachBlog => (
          <BlogItem blogDetails={eachBlog} key={eachBlog.uniqueId} />
        ))}
      </ul>
    )
  }

  const renderLoader = () => (
    <div className="loading-view-container">
      <BeatLoader />
    </div>
  )

  return <>{isLoading ? renderLoader() : renderBlogsData()}</>
}

export default Home -->
