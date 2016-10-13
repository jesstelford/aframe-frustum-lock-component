const COMPONENT_NAME = 'frustum-lock';

/**
 * @param aframe {Object} The Aframe instance to register with
 * @param componentName {String} The component name to use. Default:
 * 'frustum-lock'
 */
export default function aframeFrustumLockComponent(aframe, componentName = COMPONENT_NAME) {

  /**
   * Frustum Lock component for A-Frame.
   */
  aframe.registerComponent(componentName, {
    schema: { },

    /**
     * Set if component needs multiple instancing.
     */
    multiple: false,

    /**
     * Called once when component is attached. Generally for initial setup.
     */
    init: function () { },

    /**
     * Called when component is attached and when component data changes.
     * Generally modifies the entity based on the data.
     */
    update: function (oldData) { },

    /**
     * Called when a component is removed (e.g., via removeAttribute).
     * Generally undoes all modifications to the entity.
     */
    remove: function () { },

    /**
     * Called on each scene tick.
     */
    // tick: function (t) { },

    /**
     * Called when entity pauses.
     * Use to stop or remove any dynamic or background behavior such as events.
     */
    pause: function () { },

    /**
     * Called when entity resumes.
     * Use to continue or add any dynamic or background behavior such as events.
     */
    play: function () { }
  });
}
