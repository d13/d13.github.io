(function () {
  'use strict';

  function on(element, type, listener, thisArg, capture = false) {
    if (thisArg) {
      listener = listener.bind(thisArg);
    }

    element.addEventListener(type, listener, capture);

    return {
      off: function () {
        element.removeEventListener(type, listener, capture);
      }
    };
  }

  function once(element, type, listener, thisArg, capture) {
    if (thisArg) {
      listener = listener.bind(thisArg);
    }

    const inst = on(element, type, () => {
      listener.apply(thisArg, arguments);
      if (inst) {
        inst.off();
      }
    }, thisArg, capture);

    return inst;
  }

  function debounceFrame(func) {
      let timer;
      return function() {
          const scope = this;
          const args = arguments;

          if (timer) cancelAnimationFrame(timer);

          timer = requestAnimationFrame(() => {
              func.apply(scope, args);
          });
      };
  }

  let vpW = window.innerWidth;
  let vpH = window.innerHeight;
  function elementIsVisible(el) {
    // FIXME: performance issue, cache this somewhere
    const rect = el.getBoundingClientRect();
    if (rect.top <= -rect.height || rect.top >= vpH) {
      return false;
    }

    if (rect.left <= -rect.width || rect.left >= vpW) {
      return false;
    }

    return true;
  }

  const isInView = el => el.classList.contains('is-in-view');

  function detectVisibility(items, doOnce) {
    return Promise.all(items.map(el => {
      return new Promise((resolve) => {
        if (doOnce && isInView(el)) {
          //console.log('This probably should not happen');
          resolve();
          return;
        }

        if (el.classList.contains('is-animating')) {
          resolve();
          return;
        }

        if (!elementIsVisible(el)) {
          el.classList.remove('is-in-view');
          resolve();
        } else if (!isInView(el)) {
          once(el, 'animationend', () => {
            el.classList.remove('is-animating');
            resolve();
          });
          el.classList.add('is-animating', 'is-in-view');
        } else {
          resolve();
        }
      });
    }));
  }

  const listenerQueue = {};
  function detectAnimationVisibility() {
    //console.log('detectAnimationVisibility');

    Object.keys(listenerQueue).forEach(key => {
      const _ = listenerQueue[key];

      const p = detectVisibility(_.items, _.once);

      if (_.once) {
        p.then(() => {
          _.items = _.items.filter(el => !isInView(el));

          if (!_.items.length && listenerQueue[key]) {
            //console.log(key, 'has none left');
            delete listenerQueue[key];
          }
        });
      }
    });
  }

  const debouncedDetectAnimationVisibility = debounceFrame(() => {
    detectAnimationVisibility();
  });

  let activeVisibility;
  function listenOnChanges() {
    if (!activeVisibility) {
      const events = [
        on(window, 'resize', () => {
          //console.log('resize');
          vpW = window.innerWidth;
          vpH = window.innerHeight;
          debouncedDetectAnimationVisibility();
        }),
        on(window, 'scroll', () => {
          //console.log('scroll');
          debouncedDetectAnimationVisibility();
        })
      ];

      debouncedDetectAnimationVisibility();

      activeVisibility = {
        off: () => {
          events.forEach(_ => _.off());
        }
      };
    }

    return activeVisibility;
  }

  function monitorVisibility(selector, doOnce) {
    if (!listenerQueue.hasOwnProperty(selector)) {
      const els = Array.prototype.slice.call(document.querySelectorAll(selector));
      if (els && els.length) {
        listenerQueue[selector] = {
          items: els,
          once: doOnce || false
        };
        listenOnChanges();
      }
    }

    return {
      off: function() {
        activeVisibility && activeVisibility.off();
      }
    };
  }

  on(document, 'DOMContentLoaded', () => {
      monitorVisibility('.h-vp-in');
      monitorVisibility('.h-vp-in-once', true);

      // observeVisibility(document.querySelectorAll('.h-vp-in'));
      // observeVisibility(document.querySelectorAll('.h-vp-in-once'), true);
  });

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL3NjcmlwdHMvc2l0ZS5qcyIsInNvdXJjZXMiOlsic3JjL3NjcmlwdHMvdXRpbHMvZXZlbnRzLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvZGVsYXlzLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvdmlzaWJpbGl0eS5qcyIsInNyYy9zY3JpcHRzL3NpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIG9uKGVsZW1lbnQsIHR5cGUsIGxpc3RlbmVyLCB0aGlzQXJnLCBjYXB0dXJlID0gZmFsc2UpIHtcbiAgaWYgKHRoaXNBcmcpIHtcbiAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLmJpbmQodGhpc0FyZyk7XG4gIH1cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuXG4gIHJldHVybiB7XG4gICAgb2ZmOiBmdW5jdGlvbiAoKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uY2UoZWxlbWVudCwgdHlwZSwgbGlzdGVuZXIsIHRoaXNBcmcsIGNhcHR1cmUpIHtcbiAgaWYgKHRoaXNBcmcpIHtcbiAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLmJpbmQodGhpc0FyZyk7XG4gIH1cblxuICBjb25zdCBpbnN0ID0gb24oZWxlbWVudCwgdHlwZSwgKCkgPT4ge1xuICAgIGxpc3RlbmVyLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGluc3QpIHtcbiAgICAgIGluc3Qub2ZmKCk7XG4gICAgfVxuICB9LCB0aGlzQXJnLCBjYXB0dXJlKTtcblxuICByZXR1cm4gaW5zdDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZUZyYW1lKGZ1bmMpIHtcclxuICAgIGxldCB0aW1lcjtcclxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcclxuXHJcbiAgICAgICAgaWYgKHRpbWVyKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aW1lcik7XHJcblxyXG4gICAgICAgIHRpbWVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgZnVuYy5hcHBseShzY29wZSwgYXJncyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgdGltZSkge1xyXG4gICAgbGV0IHRpbWVyO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcclxuICAgICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xyXG5cclxuICAgICAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcik7XHJcblxyXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoc2NvcGUsIGFyZ3MpO1xyXG4gICAgICAgIH0sIHRpbWUpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHRpbWUpIHtcclxuICAgIGxldCB3YWl0O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh3YWl0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGZ1bmMoKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHdhaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgd2FpdCA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRpbWUpO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7IG9uLCBvbmNlIH0gZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IHsgZGVib3VuY2VGcmFtZSB9IGZyb20gJy4vZGVsYXlzJztcblxuLyogZ2xvYmFsIFByb21pc2UgKi9cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlVmlzaWJpbGl0eShpdGVtcywgZG9PbmNlKSB7XG4gIGlmICghaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCkgcmV0dXJuIHsgb2ZmOiAoKSA9PiB7IH0gfTtcblxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIC8vY29uc29sZS5sb2coJ0ludGVyc2VjdGlvbk9ic2VydmVyIDInLCBlbnRyaWVzKTtcbiAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2lzIEludGVyc2VjdGluZycsIGVudHJ5KTtcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2lzLWluLXZpZXcnKTtcbiAgICAgICAgaWYgKGRvT25jZSkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdub3QgSW50ZXJzZWN0aW5nJywgZW50cnkpO1xuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW4tdmlldycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7IHRocmVzaG9sZDogMC41IH0pO1xuXG4gIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGl0ZW1zW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9mZjogKCkgPT4ge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgfTtcbn1cblxubGV0IHZwVyA9IHdpbmRvdy5pbm5lcldpZHRoO1xubGV0IHZwSCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbmZ1bmN0aW9uIGVsZW1lbnRJc1Zpc2libGUoZWwpIHtcbiAgLy8gRklYTUU6IHBlcmZvcm1hbmNlIGlzc3VlLCBjYWNoZSB0aGlzIHNvbWV3aGVyZVxuICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGlmIChyZWN0LnRvcCA8PSAtcmVjdC5oZWlnaHQgfHwgcmVjdC50b3AgPj0gdnBIKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHJlY3QubGVmdCA8PSAtcmVjdC53aWR0aCB8fCByZWN0LmxlZnQgPj0gdnBXKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmNvbnN0IGlzSW5WaWV3ID0gZWwgPT4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1pbi12aWV3Jyk7XG5cbmZ1bmN0aW9uIGRldGVjdFZpc2liaWxpdHkoaXRlbXMsIGRvT25jZSkge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoaXRlbXMubWFwKGVsID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChkb09uY2UgJiYgaXNJblZpZXcoZWwpKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ1RoaXMgcHJvYmFibHkgc2hvdWxkIG5vdCBoYXBwZW4nKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFuaW1hdGluZycpKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWVsZW1lbnRJc1Zpc2libGUoZWwpKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWluLXZpZXcnKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSBlbHNlIGlmICghaXNJblZpZXcoZWwpKSB7XG4gICAgICAgIG9uY2UoZWwsICdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYW5pbWF0aW5nJyk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnaXMtYW5pbWF0aW5nJywgJ2lzLWluLXZpZXcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSkpO1xufVxuXG5jb25zdCBsaXN0ZW5lclF1ZXVlID0ge307XG5mdW5jdGlvbiBkZXRlY3RBbmltYXRpb25WaXNpYmlsaXR5KCkge1xuICAvL2NvbnNvbGUubG9nKCdkZXRlY3RBbmltYXRpb25WaXNpYmlsaXR5Jyk7XG5cbiAgT2JqZWN0LmtleXMobGlzdGVuZXJRdWV1ZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnN0IF8gPSBsaXN0ZW5lclF1ZXVlW2tleV07XG5cbiAgICBjb25zdCBwID0gZGV0ZWN0VmlzaWJpbGl0eShfLml0ZW1zLCBfLm9uY2UpXG5cbiAgICBpZiAoXy5vbmNlKSB7XG4gICAgICBwLnRoZW4oKCkgPT4ge1xuICAgICAgICBfLml0ZW1zID0gXy5pdGVtcy5maWx0ZXIoZWwgPT4gIWlzSW5WaWV3KGVsKSk7XG5cbiAgICAgICAgaWYgKCFfLml0ZW1zLmxlbmd0aCAmJiBsaXN0ZW5lclF1ZXVlW2tleV0pIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGtleSwgJ2hhcyBub25lIGxlZnQnKTtcbiAgICAgICAgICBkZWxldGUgbGlzdGVuZXJRdWV1ZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5jb25zdCBkZWJvdW5jZWREZXRlY3RBbmltYXRpb25WaXNpYmlsaXR5ID0gZGVib3VuY2VGcmFtZSgoKSA9PiB7XG4gIGRldGVjdEFuaW1hdGlvblZpc2liaWxpdHkoKTtcbn0pO1xuXG5sZXQgYWN0aXZlVmlzaWJpbGl0eTtcbmZ1bmN0aW9uIGxpc3Rlbk9uQ2hhbmdlcygpIHtcbiAgaWYgKCFhY3RpdmVWaXNpYmlsaXR5KSB7XG4gICAgY29uc3QgZXZlbnRzID0gW1xuICAgICAgb24od2luZG93LCAncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdyZXNpemUnKTtcbiAgICAgICAgdnBXID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHZwSCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgZGVib3VuY2VkRGV0ZWN0QW5pbWF0aW9uVmlzaWJpbGl0eSgpO1xuICAgICAgfSksXG4gICAgICBvbih3aW5kb3csICdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3Njcm9sbCcpO1xuICAgICAgICBkZWJvdW5jZWREZXRlY3RBbmltYXRpb25WaXNpYmlsaXR5KCk7XG4gICAgICB9KVxuICAgIF07XG5cbiAgICBkZWJvdW5jZWREZXRlY3RBbmltYXRpb25WaXNpYmlsaXR5KCk7XG5cbiAgICBhY3RpdmVWaXNpYmlsaXR5ID0ge1xuICAgICAgb2ZmOiAoKSA9PiB7XG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKF8gPT4gXy5vZmYoKSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBhY3RpdmVWaXNpYmlsaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9uaXRvclZpc2liaWxpdHkoc2VsZWN0b3IsIGRvT25jZSkge1xuICBpZiAoIWxpc3RlbmVyUXVldWUuaGFzT3duUHJvcGVydHkoc2VsZWN0b3IpKSB7XG4gICAgY29uc3QgZWxzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICAgIGlmIChlbHMgJiYgZWxzLmxlbmd0aCkge1xuICAgICAgbGlzdGVuZXJRdWV1ZVtzZWxlY3Rvcl0gPSB7XG4gICAgICAgIGl0ZW1zOiBlbHMsXG4gICAgICAgIG9uY2U6IGRvT25jZSB8fCBmYWxzZVxuICAgICAgfTtcbiAgICAgIGxpc3Rlbk9uQ2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb2ZmOiBmdW5jdGlvbigpIHtcbiAgICAgIGFjdGl2ZVZpc2liaWxpdHkgJiYgYWN0aXZlVmlzaWJpbGl0eS5vZmYoKTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBvbiB9IGZyb20gJy4vdXRpbHMvZXZlbnRzJztcbmltcG9ydCB7IG1vbml0b3JWaXNpYmlsaXR5IH0gZnJvbSAnLi91dGlscy92aXNpYmlsaXR5JzsgLy8gb2JzZXJ2ZVZpc2liaWxpdHksXG5cbm9uKGRvY3VtZW50LCAnRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmgtdnAtaW4nKTtcbiAgICBtb25pdG9yVmlzaWJpbGl0eSgnLmgtdnAtaW4tb25jZScsIHRydWUpO1xuXG4gICAgLy8gb2JzZXJ2ZVZpc2liaWxpdHkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmgtdnAtaW4nKSk7XG4gICAgLy8gb2JzZXJ2ZVZpc2liaWxpdHkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmgtdnAtaW4tb25jZScpLCB0cnVlKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztFQUFPLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEdBQUcsS0FBSyxFQUFFO0VBQ3RFLEVBQUUsSUFBSSxPQUFPLEVBQUU7RUFDZixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQ3RDLEdBQUc7O0VBRUgsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7RUFFcEQsRUFBRSxPQUFPO0VBQ1QsSUFBSSxHQUFHLEVB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
