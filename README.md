## aframe-frustum-lock-component

A Frustum Lock component for [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.2.0/aframe.min.js"></script>
  <script src="https://rawgit.com/jesstelford/aframe-frustum-lock-component/master/dist/aframe-frustum-lock-component.min.js"></script>
  <script>
    aframeFrustumLockComponent(window.AFRAME);
  </script>
</head>

<body>
  <a-scene>
    <a-entity frustum-lock="exampleProp: exampleVal"></a-entity>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-frustum-lock-component
```

Then register and use.

```js
require('aframe');
require('aframe-frustum-lock-component');
```
