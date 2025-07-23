<script setup>
const props = defineProps(['card'])
const { title, description, imgUrl, borderColor, id } = props.card
const staticBorderColor = borderColor
</script>

<template>
  <li class="flex flex-col bg-white text-left px-4 py-4 rounded-2xl border-t-4" :style="{ borderTopColor: staticBorderColor }">
    <h1 class="text-[1.3em] p-1">{{ title }}</h1>
    <p class="text-[0.9em] text-[#64748b] p-1">{{ description }}</p>
    <div class="flex flex-col w-[30%] self-end">
      <img :src="imgUrl" :alt="title" class="aspect-square"  />
    </div>
  </li>
</template>

<!-- import "./index.css";

const CardItem = props => {
    const {cardDetails} = props;
    const {title, description, imgUrl, className, id} = cardDetails;
    return(
        <li className = {`card-item card-${id}`}>
            <h1 className="card-title">{title}</h1>
            <p className="card-description">{description}</p>
            <div class="img-container">
                <img src={imgUrl} alt={title} className="card-img"/>
            </div>
        </li>
    )
};

export default CardItem -->
