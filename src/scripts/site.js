import { on } from './utils/events';
import { monitorVisibility } from './utils/visibility'; // observeVisibility,

on(document, 'DOMContentLoaded', () => {
    monitorVisibility('.h-vp-in');
    monitorVisibility('.h-vp-in-once', true);

    // observeVisibility(document.querySelectorAll('.h-vp-in'));
    // observeVisibility(document.querySelectorAll('.h-vp-in-once'), true);
});
