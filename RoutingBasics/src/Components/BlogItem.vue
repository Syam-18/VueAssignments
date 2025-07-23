<script setup>
const props = defineProps(['blog'])
const { topic, avatarUrl, imageUrl, title, author } = props.blog
</script>

<template>
  <li class="flex items-center p-3 border-gray-300 border-1 rounded w-[600px] h-[160px] mb-6">
    <img class="w-[40%] h-[136px] object-cover rounded" :src="imageUrl" :alt="title"  />
    <div class="p-3 flex flex-col justify-between h-[100%]">
      <p class="text-gray-400 text-[0.8em] ">{{topic}}</p>
      <p class="text">{{title}}</p>
      <div class="flex items-center gap-2">
        <img class="w-[30px] rounded-full" :src="avatarUrl" :alt="author" />
        <p class="">{{author}}</p>
      </div>
    </div>
  </li>
</template>

<!-- import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {imageUrl, topic, title, avatarUrl, author} = blogDetails

  return (
    <li class="blog-list-item">
      <img class="thumbnail" src={imageUrl} alt={title} />
      <div class="details-container">
        <p class="topic">{topic}</p>
        <p class="blog-item-title">{title}</p>
        <div class="author-details-container">
          <img class="avatar" src={avatarUrl} alt={author} />
          <p class="name">{author}</p>
        </div>
      </div>
    </li>
  )
}

export default BlogItem -->
