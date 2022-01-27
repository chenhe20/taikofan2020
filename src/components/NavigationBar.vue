<template>
  <div>
    <ul>
      <li>
        <router-link to="/base-song">Song List</router-link>
      </li>
      <li>
        <router-link to="/">DLC Pack</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navigationBar'
}
</script>

<style lang="scss" scoped>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding-left: 15px;
    overflow: hidden;
    background-color:white;
    border-radius: 20px;
  }

  li {
    float: left;
  }
  li a {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  li a:hover{
    background-color: #eff3f3;
    border-radius: 4px;
  }
</style>
