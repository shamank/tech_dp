<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <router-link to="/" class="nav-link" aria-current="page">ОнлайнЗаписки</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto border rounded-5">
        <li class="nav-item">
          <router-link :to="{name: 'NoteList'}" class="nav-link" aria-current="page">Просмотреть записки</router-link>

        </li>
        <li class="nav-item">
          <router-link :to="{name: 'NewNote'}" class="nav-link" aria-current="page">Создать записку</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    
}
</script>