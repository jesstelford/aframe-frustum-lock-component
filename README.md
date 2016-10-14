## Frustum Lock aframe component

Adding `frustum-lock` to your entities will automatically scale them to fill the
entire camera view.

Entities with this component should be children of a `camera` entity,
which will also lock them to the background of the camera.

Create Augmented Reality (AR) scenes by pairing with the
[`aframe-video-billboard`](https://www.npmjs.com/package/aframe-video-billboard)
entitiy & component.

### Schema

| attribute | type | default | description |
|---|---|---|---|
| widthProperty | string | `width` | The given property will be set to the frustum width. |
| heightProperty |string | `height` | The given property will be set to the frustum height. |
| depth | number | `10` | Distance along the z-index to calculate frustum dimensions, and to positoin entity. |
| throttleTimeout | number | `100` | Frustum calculations are performed on resize and enter/exit vr. This throttles the calculations to every throttleTimeout milliseconds. |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.2.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-frustum-lock-component"></script>
  <script>
    aframeFrustumLockComponent(window.AFRAME);
  </script>
</head>

<body>
  <a-scene>
    <a-camera>
      <a-plane frustum-lock material="color: #C03546"></a-plane>
    </a-camera>
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
var aframe = require('aframe');
var aframeFrustumLockComponent = require('aframe-frustum-lock-component');
aframeFrustumLockComponent(aframe);
```
