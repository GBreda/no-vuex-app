<template>
  <div id="app">
    <CharacterImage :url=imageURL />
    <div>
      <CharacterBasicInfo :info=basicInfo />
      <CharacterDetailedInfo :detailedInfo=detailedInfo />
      <ChangeButton v-on:changeCharacter="changeCharacter" :disabled=disabled></ChangeButton>
    </div>
  </div>
</template>

<script src="./app.js"></script>
<style src="./app.css" lang="css"></style>