// If using a browser that doesn't support scroll-based animations, uncomment the below JS and all should start working :-) Just links the range controls to the css custom props

const sceneX = document.getElementById('scene-x');
sceneX.oninput = function() {
  document.documentElement.style.setProperty('--scene-x-unit', this.value);
}

const sceneY = document.getElementById('scene-y');
sceneY.oninput = function() {
  document.documentElement.style.setProperty('--scene-y-unit', this.value);
}

const lightX = document.getElementById('light-x');
lightX.oninput = function() {
  document.documentElement.style.setProperty('--light-x-unit', this.value);
}

const lightY = document.getElementById('light-y');
lightY.oninput = function() {
  document.documentElement.style.setProperty('--light-y-unit', this.value);
}
const objectX = document.getElementById('object-x');
objectX.oninput = function() {
  document.documentElement.style.setProperty('--object-x-unit', this.value);
}

const objectY = document.getElementById('object-y');
objectY.oninput = function() {
  document.documentElement.style.setProperty('--object-y-unit', this.value);
}

const objectZ = document.getElementById('object-z');
objectZ.oninput = function() {
  document.documentElement.style.setProperty('--object-z-unit', this.value);
}

const elevation = document.getElementById('elevation');
elevation.oninput = function() {
  document.documentElement.style.setProperty('--elevation-manual', this.value + 'px');
}