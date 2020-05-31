<template>
    <div>
        <span>Basic info: </span>
        <a-card class="card">
            <p><strong>Name: </strong>{{ info.name }}</p>
            <p><strong>Status: </strong>{{ info.status }}</p>
            <p><strong>Gender: </strong>{{ info.gender }}</p>
        </a-card>
    </div>
</template>

<script src="./character-basic-info.js"></script>
<style src="./character-basic-info.css" lang="css"></style>