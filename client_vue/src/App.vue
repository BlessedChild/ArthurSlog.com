<template>
  <div id="app">
    <div id="navigation">
      <div id="headerBar">
        <div id="headerAbout">About</div>
        <div id="headerPrototype">Prototype</div>
        <div id="headerLogo">
          <img alt="Vue logo" src="./assets/logo.png">
        </div>
        <div id="headerSlog">Slog</div>
        <div id="headerContant">Contant</div>
        </div>
        <div id="search">
          <img alt="Vue logo" src="./assets/icon_search.png">
        </div>
      </div>
      <div id="hero">
        <img alt="Vue logo" src="./assets/hero.jpg">
      </div>
      <div id="text-left-image-right1">
        <div id="box-show">
          <div id="text-left-image-right1-text">
            Autumn
          </div>
          <div id="text-left-image-right1-img">
            <img alt="Vue logo" src="./assets/autumn-fog-forest-1287469.png">
          </div>
        </div>
      </div>
      <div id="gap">
        <img alt="Vue logo" src="./assets/green-leaves-plant-1072179.png">
      </div>
          <div id="text-left-image-right1">
        <div id="box-show">
          <div id="text-left-image-right1-text">
            Autumn
          </div>
          <div id="text-left-image-right1-img">
            <img alt="Vue logo" src="./assets/autumn-fog-forest-1287469.png">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  mounted() {}
};
</script>

<style>
#app {
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#navigation {
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 128px;
  box-shadow: 0px 3px 5px rgba(0.5, 0.5, 0.5, 0.1);
}
#headerBar {
  position: relative;
  flex-direction: row;
  display: flex;
  align-items: stretch;
  height: 120px;
}
#headerAbout {
  margin: 80px;
  margin-bottom: 0;
}
#headerPrototype {
  margin: 80px;
  margin-bottom: 0;
}
#headerLogo {
  height: 120px;
  margin: 0;
}
#headerLogo > img {
  height: 120px;
  margin: 0;
}
#search > img {
  height: 16px;
  width: 16px;
  margin: 0;
  margin-top: 80px;
}
#hero {
  margin-top: 10px;
  height: 650px;
  width: 1440px;
}
#hero > img {
  height: 650px;
  width: 1440px;
}
#text-left-image-right1 {
  height: 650px;
  width: 1440px;
}
#box-show {
  width: 100%;
  height: 650px;
  flex-direction: row;
  display: flex;
  align-items: stretch;
}
#text-left-image-right1-text {
  width: 50%;
  height: 650px;
}
#text-left-image-right1-img {
  width: 50%;
  height: 650px;
}
#text-left-image-right1-img > img {
  height: 420px;
  width: 540px;
  margin-top: 115px;
}
#gap {
  height: 438px;
  width: 1440px;
}
#gap > img {
  height: 438px;
  width: 1440px;
}
#headerSlog {
  margin: 80px;
  margin-bottom: 0;
}
#headerContant {
  margin: 80px;
  margin-bottom: 0;
}
</style>
