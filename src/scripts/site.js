import { on } from './utils/events';
import { observeVisibility, monitorVisibility } from './utils/visibility';

on(document, 'DOMContentLoaded', () => {
    monitorVisibility('.h-vp-in');
    monitorVisibility('.h-vp-in-once', true);

    // observeVisibility(document.querySelectorAll('.h-vp-in'));
    // observeVisibility(document.querySelectorAll('.h-vp-in-once'), true);
});