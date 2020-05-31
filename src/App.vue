<template>
  <div id="app">
    <CharacterImage :url=imageURL />
    <div>
      <CharacterBasicInfo :info=basicInfo />
      <CharacterDetailedInfo :detailedInfo=detailedInfo />
      <a-button size="large" class="button" type="primary" @click=changeCharacter :disabled=disabled>Get a random character</a-button>
    </div>
  </div>
</template>

<script src="./app.js"></script>
<style src="./app.css" lang="css"></style>