<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <nav class="bg-[url(https://assets.ccbp.in/frontend/react-js/books-blog-bg.png)] py-4 text-center text-white h-[25vh] flex flex-col items-center justify-around">
    <h1 class="text-3xl font-semibold">Dev Blog</h1>
    <ul class="flex gap-10">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">Contact</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact/123">Contact123</RouterLink>
      </li>
    </ul>
  </nav>
</template>



<!-- import './index.css'
import {Link} from 'react-router'

const Header = () => (
  <nav className="nav-header">
    <h1 className="blog-title">Dev Blog</h1>
    <ul className="nav-menu">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link">
          contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header -->
