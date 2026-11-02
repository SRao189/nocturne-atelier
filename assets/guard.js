/* Clickjacking guard: refuse to render inside a frame (the host cannot send frame-ancestors). */
if (window.top !== window.self) { document.documentElement.hidden = true; try { window.top.location = window.location.href; } catch {} }
