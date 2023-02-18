<template>
  <div class="sw_characters_container">
    <div class="container">
      <div class="about">
        <div class="p-5 mb-4 bg-dark rounded-3">
          <div class="container-fluid">
            <h1 class="display-5 fw-bold">This is a Star wars demo website</h1>
            <p class="col-md-8 fs-4 white-text">
              This website is a demo who consum the web api https://swapi.dev/.
              Here you can find information about Star wars films, characters
              and planets.

              <br />
              If you need more information please contact me
            </p>
            <a
              href="https://www.linkedin.com/in/davidgb2021/"
              target="_blank"
              class="btn btn-success btn-lg"
              >Visit my profile</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.white-text {
  color: white;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: top;
  }
}
</style>
