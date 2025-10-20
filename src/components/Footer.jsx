export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="ft-wrap">
        <div className="ft-brand">
          <h2>Traveler</h2>
          <p>Choose your favourite destination.</p>

          <div className="ft-social">
            <a aria-label="Facebook" href="#" title="Facebook">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M22 12.06C22 6.49 17.52 2 11.95 2S2 6.49 2 12.06c0 4.99 3.65 9.13 8.43 9.94v-7.03H7.9v-2.91h2.53V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34v7.03C18.35 21.19 22 17.05 22 12.06z"/>
              </svg>
            </a>
            <a aria-label="Instagram" href="#" title="Instagram">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
            </a>
            <a aria-label="Behance" href="#" title="Behance">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M4 6h7a4 4 0 0 1 0 8H4V6zm3 3v2h4a1 1 0 1 0 0-2H7zm10-1h-4V6h4v2zm-1 2a4 4 0 1 1 0 8 3.9 3.9 0 0 1-3.74-2.7l2.1-.8c.2.8.8 1.5 1.64 1.5 1 0 1.7-.9 1.7-2s-.7-2-1.7-2c-.75 0-1.34.47-1.6 1.2l-2.15-.75A3.93 3.93 0 0 1 16 10z"/>
              </svg>
            </a>
            <a aria-label="Twitter" href="#" title="Twitter">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.2-.7.4-1.6.8-2.5.9A3.8 3.8 0 0 0 12 7.7c0 .3 0 .6.1.9A10.7 10.7 0 0 1 3 4.8a3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.1-.2-1.6-.4v.1c0 1.8 1.3 3.3 3 3.7-.3.1-.7.1-1 .1-.3 0-.5 0-.8-.1.6 1.5 2.1 2.6 3.9 2.6A7.6 7.6 0 0 1 2 18.6a10.7 10.7 0 0 0 5.8 1.7c7 0 10.9-5.8 10.9-10.8v-.5c.7-.5 1.4-1.1 1.9-1.8z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="ft-cols">
          <div className="ft-col">
            <h4>Project</h4>
            <a href="#">Changelog</a>
            <a href="#">Status</a>
            <a href="#">License</a>
            <a href="#">All Versions</a>
          </div>
          <div className="ft-col">
            <h4>Community</h4>
            <a href="#">GitHub</a>
            <a href="#">Issues</a>
            <a href="#">Project</a>
            <a href="#">Twitter</a>
          </div>
          <div className="ft-col">
            <h4>Help</h4>
            <a href="#">Support</a>
            <a href="#">Troubleshooting</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="ft-col">
            <h4>Others</h4>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">License</a>
          </div>
        </div>

      </div>
    </footer>
  );
}