<template>
  <div class="sw_loadercontainer">
    <div class="logoempire">
      <div class="loader-bg"></div>
      <div class="loader"></div>
      <div class="loader-circle-1"></div>
      <div class="loader-circle-2"></div>
    </div>
    <span>Loading content</span>
  </div>
</template>

<style lang="scss">
.sw_loadercontainer {
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  flex-direction: column;
  z-index: 9999;
  background-color: #001d2fa3;
  padding: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: auto;

  span {
    color: white;
    text-align: center;
    text-transform: uppercase;
  }

  .logoempire {
    z-index: 99999;
    position: relative;
    display: block;
    height: 200px;
    width: 160px;
    margin: 0 auto;
  }

  .loader-bg {
    position: absolute;
    left: 54px;
    height: 151px;
    border: 2px #0e0e0e solid;
    background-color: #222;
    border-radius: 50%;
    top: 40px;
  }

  .loader {
    position: absolute;
    top: 40px;
    width: 135px;
    height: 135px;
    border: 5px white dotted;
    border-radius: 50%;
    animation: loader 3s infinite;
    animation-timing-function: linear;
    left: 12px;
  }

  .loader-circle-1 {
    position: absolute;
    left: 7px;
    top: 35px;
    width: 145px;
    height: 145px;
    border: 4px #d0d0d0 solid;
    border-radius: 50%;
  }

  .loader-circle-2 {
    position: absolute;
    left: 22px;
    top: 48px;
    width: 117px;
    height: 117px;
    border: 2px #ffffff solid;
    border-radius: 50%;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/7/75/Emblem_of_the_First_Galactic_Empire.svg);
    background-color: white;
    background-size: 95%;
    background-position: center;
    background-repeat: no-repeat;
  }

  @-moz-keyframes loader {
    0% {
      -ms-transform: rotate(0deg); /* IE 9 */
      -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */
      transform: rotate(0deg);
    }

    100% {
      -ms-transform: rotate(360deg); /* IE 9 */
      -webkit-transform: rotate(360deg); /* Chrome, Safari, Opera */
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes loader {
    0% {
      -ms-transform: rotate(0deg); /* IE 9 */
      -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */
      transform: rotate(0deg);
    }

    100% {
      -ms-transform: rotate(360deg); /* IE 9 */
      -webkit-transform: rotate(360deg); /* Chrome, Safari, Opera */
      transform: rotate(360deg);
    }
  }

  @keyframes loader {
    0% {
      -ms-transform: rotate(0deg); /* IE 9 */
      -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */
      transform: rotate(0deg);
    }

    100% {
      -ms-transform: rotate(360deg); /* IE 9 */
      -webkit-transform: rotate(360deg); /* Chrome, Safari, Opera */
      transform: rotate(360deg);
    }
  }
}
</style>
