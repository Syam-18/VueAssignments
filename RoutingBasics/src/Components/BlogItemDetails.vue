<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
// const blogData = {
//   title: 'Blog Name',
//   imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-3-img.png',
//   avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
//   author: 'Author Name',
//   content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
// }
const blogDetails = ref([])
const isLoading = ref(true)
const id = useRoute().params.id
onBeforeMount(() => {
  const getBlogDetails = async () => {
    const url = `https://apis.ccbp.in/blogs/${id}`
    const response = await fetch(url)
    const responseData = await response.json()
    const { avatar_url, image_url, ...rest } = responseData
    const formattedData = {
      avatarUrl: avatar_url,
      imageUrl: image_url,
      ...rest,
    }
    blogDetails.value = formattedData
    isLoading.value = false
  }
  getBlogDetails()
})
</script>
<template>
  <div v-if="isLoading" class="flex flex-col items-center justify-center h-[70vh] py-10 gap-3">
    <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-black"></div>
    <p class="text-black font-medium">Fetching blog data...</p>
  </div>
  <div v-else class="flex flex-col items-center p-4 my-4">
    <div class="text-left w-[45vw]">
      <h1 class="text-3xl font-semibold my-4">{{ blogDetails.title }}</h1>
      <div class="flex gap-2 items-center my-4">
        <img :src="blogDetails.avatarUrl" :alt="blogDetails.author" class="w-[30px] rounded-full" />
        <span class="">{{ blogDetails.author }}</span>
      </div>
      <img class="rounded" :src="blogDetails.imageUrl" :alt="blogDetails.title" />
      <p class="my-4">{{ blogDetails.content }}</p>
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
</style>

<!-- import { useEffect } from 'react'
import './index.css'
import {useParams} from 'react-router'

const blogData = {
  title: 'Blog Name',
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-3-img.png',
  avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
  author: 'Author Name',
  content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}

const BlogItemDetails = () => {
  const {id} = useParams()
  console.log(id);
  const blogUrl = `https://apis.ccbp.in/blogs/${id}`;
  const renderBlogItemDetails = () => {
    useEffect(() => {
      const getBlogDetails = async() => {
        const response = await fetch(blogUrl);
        const blogData = await response.json();
        return blogData;
      }
      getBlogDetails();
    },[])

    const {uniqueId, title, imageUrl, content, avatarUrl, author} = blogData

    return (
      <div class="-item-details-container">
        <h1 class="">{title}</h1>
        <div class="-details-container">
          <img class="" src={avatarUrl} alt={author} />
          <span class="">{author}</span>
        </div>
        <img class="-img" src={imageUrl} alt={title} />
        <p class="-content">{content}</p>
      </div>
    )
  }

  return <div class="-details-container">{renderBlogItemDetails()}</div>
}

export default BlogItemDetails -->
