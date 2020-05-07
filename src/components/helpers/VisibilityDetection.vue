<script>
class VisibilityDetector {
  static get instance() {
    if (!VisibilityDetector._observer) {
      VisibilityDetector._observer = new IntersectionObserver(
        entries => {
          if (
            !VisibilityDetector.registry ||
            !VisibilityDetector.registry.length
          ) {
            return;
          }

          entries.forEach(entry => {
            const component = VisibilityDetector.registry.find(
              item => item.$el === entry.target
            );
            if (component) {
              component.onObserve(entry);
            }
          });
        },
        { threshold: 0.5 }
      );
    }

    return VisibilityDetector._observer;
  }

  static observe(component) {
    if (!VisibilityDetector.registry) {
      VisibilityDetector.registry = [];
    }

    if (!VisibilityDetector.registry.includes(component)) {
      VisibilityDetector.registry.push(component);
      VisibilityDetector.instance.observe(component.$el);
    }
  }

  static unobserve(component) {
    if (!VisibilityDetector.registry) {
      return;
    }

    const idx = VisibilityDetector.registry.indexOf(component);
    if (idx === -1) {
      return;
    }

    VisibilityDetector.registry.splice(idx, 1);
    VisibilityDetector.instance.unobserve(component.$el);
  }
}

export default {
  name: 'VisibilityDetection',
  props: {
    once: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      intersecting: false,
      registered: false
    };
  },
  computed: {
    classes() {
      return {
        'h-vp-in': !this.once,
        'h-vp-in-once': this.once,
        'is-in-view': this.intersecting
      };
    }
  },
  render() {
    return this.$scopedSlots.default({
      visible: this.intersecting,
      classes: this.classes
    });
  },
  mounted() {
    this.registerObserver();
  },
  beforeDestroy() {
    this.unregisterObserver();
  },
  methods: {
    onObserve(entry) {
      console.log('onObserve', entry);
      this.intersecting = entry.isIntersecting;
      if (entry.isIntersecting && this.once) {
        this.unregisterObserver();
      }
    },
    registerObserver() {
      if (this.registered) {
        return;
      }

      VisibilityDetector.observe(this);
      this.registered = true;
    },
    unregisterObserver() {
      if (!this.registered) {
        return;
      }

      VisibilityDetector.unobserve(this);
      this.registered = false;
    }
  }
};
</script>
